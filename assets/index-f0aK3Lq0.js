var nd=i=>{throw TypeError(i)};var Os=(i,e,t)=>e.has(i)?nd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function id(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="180",sd=0,bl=1,rd=2,ad=0,Vc=1,Wc=2,Jn=3,vi=0,kt=1,mn=2,ni=0,ms=1,Ms=2,Cl=3,Al=4,od=5,Pi=100,cd=101,ld=102,hd=103,ud=104,fd=200,dd=201,pd=202,md=203,zo=204,ko=205,gd=206,_d=207,vd=208,xd=209,yd=210,Sd=211,Md=212,Ed=213,Td=214,Ho=0,Go=1,Vo=2,Es=3,Wo=4,Xo=5,$o=6,qo=7,Xc=0,bd=1,Cd=2,mi=0,hu=1,uu=2,fu=3,$c=4,du=5,pu=6,mu=7,gu=300,Ts=301,bs=302,Yo=303,jo=304,Fa=306,Fi=1e3,Li=1001,Ko=1002,vn=1003,Ad=1004,br=1005,kn=1006,qa=1007,Ui=1008,Xn=1009,_u=1010,vu=1011,cr=1012,qc=1013,Oi=1014,Hn=1015,Vn=1016,Yc=1017,jc=1018,lr=1020,xu=35902,yu=35899,Su=1021,Mu=1022,In=1023,hr=1026,ur=1027,Kc=1028,Zc=1029,Eu=1030,Jc=1031,Qc=1033,aa=33776,oa=33777,ca=33778,la=33779,Zo=35840,Jo=35841,Qo=35842,ec=35843,tc=36196,nc=37492,ic=37496,sc=37808,rc=37809,ac=37810,oc=37811,cc=37812,lc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,_c=37821,vc=36492,xc=36494,yc=36495,Sc=36283,Mc=36284,Ec=36285,Tc=36286,Rd=3200,wd=3201,el=0,Pd=1,fi="",Rt="srgb",Cs="srgb-linear",Sa="linear",ct="srgb",qi=7680,Rl=519,Dd=512,Id=513,Ld=514,Tu=515,Ud=516,Nd=517,Fd=518,Od=519,wl=35044,Pl="300 es",Gn=2e3,Ma=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dl=1234567;const Qs=Math.PI/180,As=180/Math.PI;function Is(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function tl(i,e){return(i%e+e)%e}function Bd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zd(i,e,t){return i!==e?(t-i)/(e-i):0}function er(i,e,t){return(1-t)*i+t*e}function kd(i,e,t,n){return er(i,e,1-Math.exp(-t*n))}function Hd(i,e=1){return e-Math.abs(tl(i,e*2)-e)}function Gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xd(i,e){return i+Math.random()*(e-i)}function $d(i){return i*(.5-Math.random())}function qd(i){i!==void 0&&(Dl=i);let e=Dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yd(i){return i*Qs}function jd(i){return i*As}function Kd(i){return(i&i-1)===0&&i!==0}function Zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function us(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qt={DEG2RAD:Qs,RAD2DEG:As,generateUUID:Is,clamp:je,euclideanModulo:tl,mapLinear:Bd,inverseLerp:zd,lerp:er,damp:kd,pingpong:Hd,smoothstep:Gd,smootherstep:Vd,randInt:Wd,randFloat:Xd,randFloatSpread:$d,seededRandom:qd,degToRad:Yd,radToDeg:jd,isPowerOfTwo:Kd,ceilPowerOfTwo:Zd,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:Qd,normalize:Zt,denormalize:us};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*_,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const A=Math.sqrt(T),C=Math.atan2(A,p*E);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const v=o*E;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new I,Il=new xr;class He{constructor(e,t,n,s,r,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],T=s[4],v=s[7],A=s[2],C=s[5],b=s[8];return r[0]=a*_+o*E+c*A,r[3]=a*m+o*T+c*C,r[6]=a*p+o*v+c*b,r[1]=l*_+h*E+u*A,r[4]=l*m+h*T+u*C,r[7]=l*p+h*v+u*b,r[2]=f*_+d*E+g*A,r[5]=f*m+d*T+g*C,r[8]=f*p+d*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new He;function bu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ep(){const i=Ea("canvas");return i.style.display="block",i}const Ll={};function fr(i){i in Ll||(Ll[i]=!0,console.warn(i))}function tp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ul=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function np(){const i={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?Sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cs]:{primaries:e,whitePoint:n,transfer:Sa,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const Qe=np();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class ip{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=Ea("canvas")),Yi.width=e.width,Yi.height=e.height;const s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sp=0;class nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ka(s[a].image)):r.push(Ka(s[a]))}else r=Ka(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ip.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;const Za=new I;class Yt extends Ds{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Li,s=Li,r=kn,a=Ui,o=In,c=Xn,l=Yt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Is(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=gu;Yt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,v=(d+1)/2,A=(p+1)/2,C=(h+f)/4,b=(u+_)/4,R=(g+m)/4;return T>v&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=C/n,r=b/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=R/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=b/r,s=R/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ap extends Ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Yt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends ap{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cu extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class op extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Ar.subVectors(this.max,Bs),ji.subVectors(e.a,Bs),Ki.subVectors(e.b,Bs),Zi.subVectors(e.c,Bs),si.subVectors(Ki,ji),ri.subVectors(Zi,Ki),Mi.subVectors(ji,Zi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Mi.z,Mi.y,si.z,0,-si.x,ri.z,0,-ri.x,Mi.z,0,-Mi.x,-si.y,si.x,0,-ri.y,ri.x,0,-Mi.y,Mi.x,0];return!Ja(t,ji,Ki,Zi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,ji,Ki,Zi,Ar))?!1:(Rr.crossVectors(si,ri),t=[Rr.x,Rr.y,Rr.z],Ja(t,ji,Ki,Zi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new I,new I,new I,new I,new I,new I,new I,new I],An=new I,Cr=new zi,ji=new I,Ki=new I,Zi=new I,si=new I,ri=new I,Mi=new I,Bs=new I,Ar=new I,Rr=new I,Ei=new I;function Ja(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ei.fromArray(i,r);const o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const cp=new zi,zs=new I,Qa=new I;class ki{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Qa)),this.expandByPoint(zs.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new I,eo=new I,wr=new I,ai=new I,to=new I,Pr=new I,no=new I;class il{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){eo.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(eo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=ai.dot(this.direction),c=-ai.dot(wr),l=ai.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(eo).addScaledVector(wr,f),d}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){to.subVectors(t,e),Pr.subVectors(n,e),no.crossVectors(to,Pr);let a=this.direction.dot(no),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);const c=o*this.direction.dot(Pr.crossVectors(ai,Pr));if(c<0)return null;const l=o*this.direction.dot(to.cross(ai));if(l<0||c+l>a)return null;const h=-o*ai.dot(no);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,r,a,o,c,l,h,u,f,d,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,d,g,_,m)}set(e,t,n,s,r,a,o,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,hp)}lookAt(e,t,n){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),oi.crossVectors(n,fn),oi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),oi.crossVectors(n,fn)),oi.normalize(),Dr.crossVectors(fn,oi),s[0]=oi.x,s[4]=Dr.x,s[8]=fn.x,s[1]=oi.y,s[5]=Dr.y,s[9]=fn.y,s[2]=oi.z,s[6]=Dr.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],T=n[7],v=n[11],A=n[15],C=s[0],b=s[4],R=s[8],S=s[12],x=s[1],P=s[5],L=s[9],O=s[13],H=s[2],V=s[6],W=s[10],Z=s[14],N=s[3],Y=s[7],Q=s[11],ae=s[15];return r[0]=a*C+o*x+c*H+l*N,r[4]=a*b+o*P+c*V+l*Y,r[8]=a*R+o*L+c*W+l*Q,r[12]=a*S+o*O+c*Z+l*ae,r[1]=h*C+u*x+f*H+d*N,r[5]=h*b+u*P+f*V+d*Y,r[9]=h*R+u*L+f*W+d*Q,r[13]=h*S+u*O+f*Z+d*ae,r[2]=g*C+_*x+m*H+p*N,r[6]=g*b+_*P+m*V+p*Y,r[10]=g*R+_*L+m*W+p*Q,r[14]=g*S+_*O+m*Z+p*ae,r[3]=E*C+T*x+v*H+A*N,r[7]=E*b+T*P+v*V+A*Y,r[11]=E*R+T*L+v*W+A*Q,r[15]=E*S+T*O+v*Z+A*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+_*(+t*c*d-t*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+m*(+t*l*u-t*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=u*m*l-_*f*l+_*c*d-o*m*d-u*c*p+o*f*p,T=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,v=h*_*l-g*u*l+g*o*d-a*_*d-h*o*p+a*u*p,A=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,C=t*E+n*T+s*v+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=E*b,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*b,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*b,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*b,e[4]=T*b,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*b,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*b,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*d+t*c*d)*b,e[8]=v*b,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*b,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*b,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*b,e[12]=A*b,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*b,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*b,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,E=c*l,T=c*h,v=c*u,A=n.x,C=n.y,b=n.z;return s[0]=(1-(_+p))*A,s[1]=(d+v)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(d-v)*C,s[5]=(1-(f+p))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(g+T)*b,s[9]=(m-E)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const l=1/r,h=1/a,u=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Gn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Gn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ma)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Gn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Gn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ma)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new I,Rn=new lt,lp=new I(0,0,0),hp=new I(1,1,1),oi=new I,Dr=new I,fn=new I,Fl=new lt,Ol=new xr;class Ln{constructor(e=0,t=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let up=0;const Bl=new I,Qi=new xr,jn=new lt,Ir=new I,ks=new I,fp=new I,dp=new xr,zl=new I(1,0,0),kl=new I(0,1,0),Hl=new I(0,0,1),Gl={type:"added"},pp={type:"removed"},es={type:"childadded",child:null},io={type:"childremoved",child:null};class bt extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new I,t=new Ln,n=new xr,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new He}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(zl,e)}rotateY(e){return this.rotateOnAxis(kl,e)}rotateZ(e){return this.rotateOnAxis(Hl,e)}translateOnAxis(e,t){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zl,e)}translateY(e){return this.translateOnAxis(kl,e)}translateZ(e){return this.translateOnAxis(Hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ks,Ir,this.up):jn.lookAt(Ir,ks,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(jn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gl),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gl),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new I,Kn=new I,so=new I,Zn=new I,ts=new I,ns=new I,Vl=new I,ro=new I,ao=new I,oo=new I,co=new rt,lo=new rt,ho=new rt;class Dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wn.subVectors(s,t),Kn.subVectors(n,t),so.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(Kn),c=wn.dot(so),l=Kn.dot(Kn),h=Kn.dot(so),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return co.setScalar(0),lo.setScalar(0),ho.setScalar(0),co.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,n),ho.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(co,r.x),a.addScaledVector(lo,r.y),a.addScaledVector(ho,r.z),a}static isFrontFacing(e,t,n,s){return wn.subVectors(n,t),Kn.subVectors(e,t),wn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,n),ns.subVectors(r,n),ro.subVectors(e,n);const c=ts.dot(ro),l=ns.dot(ro);if(c<=0&&l<=0)return t.copy(n);ao.subVectors(e,s);const h=ts.dot(ao),u=ns.dot(ao);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ts,a);oo.subVectors(e,r);const d=ts.dot(oo),g=ns.dot(oo);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ns,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Vl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Vl,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function uo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=tl(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=uo(a,r,e+1/3),this.g=uo(a,r,e),this.b=uo(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Ru[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Qe.workingToColorSpace(Vt.copy(this),e),Math.round(je(Vt.r*255,0,255))*65536+Math.round(je(Vt.g*255,0,255))*256+Math.round(je(Vt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Rt){Qe.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Lr);const n=er(ci.h,Lr.h,t),s=er(ci.s,Lr.s,t),r=er(ci.l,Lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ie;Ie.NAMES=Ru;let mp=0;class xi extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=ms,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=ko,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cn extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new I,Ur=new Re;let gp=0;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=us(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}}class wu extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pu extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _p=0;const En=new lt,fo=new bt,is=new I,dn=new zi,Hs=new zi,Nt=new I;class Dt extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?Pu:wu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(dn.min,Hs.min),dn.expandByPoint(Nt),Nt.addVectors(dn.max,Hs.max),dn.expandByPoint(Nt)):(dn.expandByPoint(Hs.min),dn.expandByPoint(Hs.max))}dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(e,l),Nt.add(is)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new I,c[R]=new I;const l=new I,h=new I,u=new I,f=new Re,d=new Re,g=new Re,_=new I,m=new I;function p(R,S,x){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(_),o[S].add(_),o[x].add(_),c[R].add(m),c[S].add(m),c[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let R=0,S=E.length;R<S;++R){const x=E[R],P=x.start,L=x.count;for(let O=P,H=P+L;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new I,v=new I,A=new I,C=new I;function b(R){A.fromBufferAttribute(s,R),C.copy(A);const S=o[R];T.copy(S),T.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(C,S);const P=v.dot(c[R])<0?-1:1;a.setXYZW(R,T.x,T.y,T.z,P)}for(let R=0,S=E.length;R<S;++R){const x=E[R],P=x.start,L=x.count;for(let O=P,H=P+L;O<H;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new ln(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new lt,Ti=new il,Nr=new ki,Xl=new I,Fr=new I,Or=new I,Br=new I,po=new I,zr=new I,$l=new I,kr=new I;class se extends bt{constructor(e=new Dt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(po.fromBufferAttribute(u,e),a?zr.addScaledVector(po,h):zr.addScaledVector(po.sub(t),h))}t.add(zr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Nr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Nr,Xl)===null||Ti.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,A=T;v<A;v+=3){const C=o.getX(v),b=o.getX(v+1),R=o.getX(v+2);s=Hr(this,p,e,n,l,h,u,C,b,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=Hr(this,a,e,n,l,h,u,E,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,A=T;v<A;v+=3){const C=v,b=v+1,R=v+2;s=Hr(this,p,e,n,l,h,u,C,b,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,T=m+1,v=m+2;s=Hr(this,a,e,n,l,h,u,E,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function vp(i,e,t,n,s,r,a,o){let c;if(e.side===kt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===vi,o),c===null)return null;kr.copy(o),kr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(kr);return l<t.near||l>t.far?null:{distance:l,point:kr.clone(),object:i}}function Hr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Fr),i.getVertexPosition(c,Or),i.getVertexPosition(l,Br);const h=vp(i,e,t,n,Fr,Or,Br,$l);if(h){const u=new I;Dn.getBarycoord($l,Fr,Or,Br,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,o,c,l,u,new Re)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,o,c,l,u,new Re)),a&&(h.normal=Dn.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new I,materialIndex:0};Dn.getNormal(Fr,Or,Br,f.normal),h.face=f,h.barycoord=u}return h}class nt extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(_,m,p,E,T,v,A,C,b,R,S){const x=v/b,P=A/R,L=v/2,O=A/2,H=C/2,V=b+1,W=R+1;let Z=0,N=0;const Y=new I;for(let Q=0;Q<W;Q++){const ae=Q*P-O;for(let be=0;be<V;be++){const $e=be*x-L;Y[_]=$e*E,Y[m]=ae*T,Y[p]=H,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=C>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(be/b),u.push(1-Q/R),Z+=1}}for(let Q=0;Q<R;Q++)for(let ae=0;ae<b;ae++){const be=f+ae+V*Q,$e=f+ae+V*(Q+1),qe=f+(ae+1)+V*(Q+1),Ye=f+(ae+1)+V*Q;c.push(be,$e,Ye),c.push($e,qe,Ye),N+=6}o.addGroup(d,N,S),d+=N,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const s in n)e[s]=n[s]}return e}function xp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Du(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const ws={clone:Rs,merge:Jt};var yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Iu extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new I,ql=new Re,Yl=new Re;class en extends Iu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,ql,Yl),t.subVectors(Yl,ql)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class Mp extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(ss,rs,e,t);s.layers=this.layers,this.add(s);const r=new en(ss,rs,e,t);r.layers=this.layers,this.add(r);const a=new en(ss,rs,e,t);a.layers=this.layers,this.add(a);const o=new en(ss,rs,e,t);o.layers=this.layers,this.add(o);const c=new en(ss,rs,e,t);c.layers=this.layers,this.add(c);const l=new en(ss,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lu extends Yt{constructor(e=[],t=Ts,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nt(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:ni});r.uniforms.tEquirect.value=t;const a=new se(s,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=kn),new Mp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class pt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tp={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Uu extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bp extends Yt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=vn,h=vn,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl extends ln{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new lt,Kl=new lt,Gr=[],Zl=new zi,Cp=new lt,Gs=new se,Vs=new ki;class Ap extends se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Zl.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(Zl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Vs.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Kl.multiplyMatrices(n,as),Gs.matrixWorld=Kl,Gs.raycast(e,Gr);for(let a=0,o=Gr.length;a<o;a++){const c=Gr[a];c.instanceId=r,c.object=this,t.push(c)}Gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bp(new Float32Array(s*this.count),s,this.count,Kc,Hn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const go=new I,Rp=new I,wp=new He;class hi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=go.subVectors(n,t).cross(Rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wp.getNormalMatrix(e),s=this.coplanarPoint(go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new ki,Pp=new Re(.5,.5),Vr=new I;class rl{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],E=r[12],T=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-a,d-h,p-g,A-E).normalize(),s[1].setComponents(l+a,d+h,p+g,A+E).normalize(),s[2].setComponents(l+o,d+u,p+_,A+T).normalize(),s[3].setComponents(l-o,d-u,p-_,A-T).normalize(),n)s[4].setComponents(c,f,m,v).normalize(),s[5].setComponents(l-c,d-f,p-m,A-v).normalize();else if(s[4].setComponents(l-c,d-f,p-m,A-v).normalize(),t===Gn)s[5].setComponents(l+c,d+f,p+m,A+v).normalize();else if(t===Ma)s[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=Pp.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new I,ba=new I,Jl=new lt,Ws=new il,Wr=new ki,_o=new I,Ql=new I;class Dp extends bt{constructor(e=new Dt,t=new al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(ba);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Jl.copy(s).invert(),Ws.copy(e.ray).applyMatrix4(Jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),E=h.getX(_+1),T=Xr(this,e,Ws,c,p,E,_);T&&t.push(T)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=Xr(this,e,Ws,c,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=Xr(this,e,Ws,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Xr(this,e,Ws,c,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),ba.fromBufferAttribute(o,r),t.distanceSqToSegment(Ta,ba,_o,Ql)>n)return;_o.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_o);if(!(l<e.near||l>e.far))return{distance:l,point:Ql.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const eh=new I,th=new I;class Nu extends Dp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)eh.fromBufferAttribute(t,s),th.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+eh.distanceTo(th);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fu extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nh=new lt,bc=new il,$r=new ki,qr=new I;class Ip extends bt{constructor(e=new Dt,t=new Fu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;nh.copy(s).invert(),bc.copy(e.ray).applyMatrix4(nh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);qr.fromBufferAttribute(u,m),ih(qr,m,c,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)qr.fromBufferAttribute(u,g),ih(qr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ih(i,e,t,n,s,r,a){const o=bc.distanceSqToPoint(i);if(o<t){const c=new I;bc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Nn extends Yt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ou extends Yt{constructor(e,t,n=Oi,s,r,a,o=vn,c=vn,l,h=hr,u=1){if(h!==hr&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bu extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _s extends Dt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+r,_=s+1,m=new I,p=new I;for(let E=0;E<=g;E++){let T=0,v=0,A=0,C=0;if(E<=n){const S=E/n,x=S*Math.PI/2;v=-h-e*Math.cos(x),A=e*Math.sin(x),C=-e*Math.cos(x),T=S*u}else if(E<=n+r){const S=(E-n)/r;v=-h+S*t,A=e,C=0,T=u+S*f}else{const S=(E-n-r)/n,x=S*Math.PI/2;v=h+e*Math.sin(x),A=e*Math.cos(x),C=e*Math.sin(x),T=u+f+S*u}const b=Math.max(0,Math.min(1,T/d));let R=0;E===0?R=.5/s:E===g&&(R=-.5/s);for(let S=0;S<=s;S++){const x=S/s,P=x*Math.PI*2,L=Math.sin(P),O=Math.cos(P);p.x=-A*O,p.y=v,p.z=A*L,o.push(p.x,p.y,p.z),m.set(-A*O,C,A*L),m.normalize(),c.push(m.x,m.y,m.z),l.push(x+R,b)}if(E>0){const S=(E-1)*_;for(let x=0;x<s;x++){const P=S+x,L=S+x+1,O=E*_+x,H=E*_+x+1;a.push(P,L,O),a.push(L,H,O)}}}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class gn extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;E(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(d,2));function E(){const v=new I,A=new I;let C=0;const b=(t-e)/n;for(let R=0;R<=r;R++){const S=[],x=R/r,P=x*(t-e)+e;for(let L=0;L<=s;L++){const O=L/s,H=O*c+o,V=Math.sin(H),W=Math.cos(H);A.x=P*V,A.y=-x*n+m,A.z=P*W,u.push(A.x,A.y,A.z),v.set(V,b,W).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-x),S.push(g++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const x=_[S][R],P=_[S+1][R],L=_[S+1][R+1],O=_[S][R+1];(e>0||S!==0)&&(h.push(x,P,O),C+=3),(t>0||S!==r-1)&&(h.push(P,L,O),C+=3)}l.addGroup(p,C,0),p+=C}function T(v){const A=g,C=new Re,b=new I;let R=0;const S=v===!0?e:t,x=v===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const P=g;for(let L=0;L<=s;L++){const H=L/s*c+o,V=Math.cos(H),W=Math.sin(H);b.x=S*W,b.y=m*x,b.z=S*V,u.push(b.x,b.y,b.z),f.push(0,x,0),C.x=V*.5+.5,C.y=W*.5*x+.5,d.push(C.x,C.y),g++}for(let L=0;L<s;L++){const O=A+L,H=P+L;v===!0?h.push(H,H+1,O):h.push(H+1,H,O),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vs extends gn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new vs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const T=new I,v=new I,A=new I;for(let C=0;C<t.length;C+=3)d(t[C+0],T),d(t[C+1],v),d(t[C+2],A),c(T,v,A,E)}function c(E,T,v,A){const C=A+1,b=[];for(let R=0;R<=C;R++){b[R]=[];const S=E.clone().lerp(v,R/C),x=T.clone().lerp(v,R/C),P=C-R;for(let L=0;L<=P;L++)L===0&&R===C?b[R][L]=S:b[R][L]=S.clone().lerp(x,L/P)}for(let R=0;R<C;R++)for(let S=0;S<2*(C-R)-1;S++){const x=Math.floor(S/2);S%2===0?(f(b[R][x+1]),f(b[R+1][x]),f(b[R][x])):(f(b[R][x+1]),f(b[R+1][x+1]),f(b[R+1][x]))}}function l(E){const T=new I;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(E),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){const E=new I;for(let T=0;T<r.length;T+=3){E.x=r[T+0],E.y=r[T+1],E.z=r[T+2];const v=m(E)/2/Math.PI+.5,A=p(E)/Math.PI+.5;a.push(v,1-A)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const T=a[E+0],v=a[E+2],A=a[E+4],C=Math.max(T,v,A),b=Math.min(T,v,A);C>.9&&b<.1&&(T<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),A<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,T){const v=E*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function g(){const E=new I,T=new I,v=new I,A=new I,C=new Re,b=new Re,R=new Re;for(let S=0,x=0;S<r.length;S+=9,x+=6){E.set(r[S+0],r[S+1],r[S+2]),T.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),C.set(a[x+0],a[x+1]),b.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),A.copy(E).add(T).add(v).divideScalar(3);const P=m(A);_(C,x+0,E,P),_(b,x+2,T,P),_(R,x+4,v,P)}}function _(E,T,v,A){A<0&&E.x===1&&(a[T]=E.x-1),v.x===0&&v.z===0&&(a[T]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.vertices,e.indices,e.radius,e.details)}}class tr extends ol{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tr(e.radius,e.detail)}}class Qt extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*f-a;for(let T=0;T<l;T++){const v=T*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const T=E+l*p,v=E+l*(p+1),A=E+1+l*(p+1),C=E+1+l*p;d.push(T,v,C),d.push(v,A,C)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.width,e.height,e.widthSegments,e.heightSegments)}}class cl extends Dt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=e;const f=(t-e)/s,d=new I,g=new Re;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,T=E,v=E+n+1,A=E+n+2,C=E+1;o.push(T,v,C),o.push(v,A,C)}}this.setIndex(o),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class On extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],T=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const C=A/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+T*o),u.y=e*Math.cos(a+T*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+T*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(C+v,1-T),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const T=h[p][E+1],v=h[p][E],A=h[p+1][E],C=h[p+1][E+1];(p!==0||a>0)&&d.push(T,v,C),(p!==n-1||c<Math.PI)&&d.push(v,A,C)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yr extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,E=(s+1)*d+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lp extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class We extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zu extends We{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Up extends xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Np extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Oa extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Op extends Oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const vo=new lt,sh=new I,rh=new I;class ll{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(sh),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bp extends ll{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=As*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zp extends Oa{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ah=new lt,Xs=new I,xo=new I;class kp extends ll{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),xo.copy(n.position),xo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xo),n.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah,n.coordinateSystem,n.reversedDepth)}}class Hp extends Oa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hl extends Iu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gp extends ll{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yo extends Oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Gp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vp extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Wp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oh(i,e,t,n){const s=Xp(n);switch(t){case Su:return i*e;case Kc:return i*e/s.components*s.byteLength;case Zc:return i*e/s.components*s.byteLength;case Eu:return i*e*2/s.components*s.byteLength;case Jc:return i*e*2/s.components*s.byteLength;case Mu:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case Qc:return i*e*4/s.components*s.byteLength;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:case ec:return Math.max(i,16)*Math.max(e,8)/4;case Zo:case Qo:return Math.max(i,8)*Math.max(e,8)/2;case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vc:case xc:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xp(i){switch(i){case Xn:case _u:return{byteLength:1,components:1};case cr:case vu:case Vn:return{byteLength:2,components:1};case Yc:case jc:return{byteLength:2,components:4};case Oi:case qc:case Hn:return{byteLength:4,components:1};case xu:case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ku(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $p(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
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
#endif`,Xm=`struct PhysicalMaterial {
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
}`,$m=`
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,lg=`#define LAMBERT
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
}`,hg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,fg=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,_g=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,xg=`#define TOON
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
}`,yg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:jp,alphamap_pars_fragment:Kp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:em,batching_pars_vertex:tm,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:om,clipping_planes_fragment:cm,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:um,color_fragment:fm,color_pars_fragment:dm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:vm,displacementmap_pars_vertex:xm,displacementmap_vertex:ym,emissivemap_fragment:Sm,emissivemap_pars_fragment:Mm,colorspace_fragment:Em,colorspace_pars_fragment:Tm,envmap_fragment:bm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Am,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:zm,envmap_vertex:wm,fog_vertex:Pm,fog_pars_vertex:Dm,fog_fragment:Im,fog_pars_fragment:Lm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:km,lights_toon_pars_fragment:Hm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:$m,lights_fragment_maps:qm,lights_fragment_end:Ym,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:Qm,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:s0,morphinstance_vertex:r0,morphcolor_vertex:a0,morphnormal_vertex:o0,morphtarget_pars_vertex:c0,morphtarget_vertex:l0,normal_fragment_begin:h0,normal_fragment_maps:u0,normal_pars_fragment:f0,normal_pars_vertex:d0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:x0,opaque_fragment:y0,packing:S0,premultiplied_alpha_fragment:M0,project_vertex:E0,dithering_fragment:T0,dithering_pars_fragment:b0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:w0,shadowmap_vertex:P0,shadowmask_pars_fragment:D0,skinbase_vertex:I0,skinning_pars_vertex:L0,skinning_vertex:U0,skinnormal_vertex:N0,specularmap_fragment:F0,specularmap_pars_fragment:O0,tonemapping_fragment:B0,tonemapping_pars_fragment:z0,transmission_fragment:k0,transmission_pars_fragment:H0,uv_pars_fragment:G0,uv_pars_vertex:V0,uv_vertex:W0,worldpos_vertex:X0,background_vert:$0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:j0,cube_vert:K0,cube_frag:Z0,depth_vert:J0,depth_frag:Q0,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:cg,meshlambert_frag:lg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:fg,meshnormal_frag:dg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:_g,meshtoon_vert:vg,meshtoon_frag:xg,points_vert:yg,points_frag:Sg,shadow_vert:Mg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:bg},ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Bn={basic:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Jt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Jt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Jt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Jt([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Jt([ce.lights,ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Bn.physical={uniforms:Jt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Yr={r:0,b:0,g:0},Ci=new Ln,Cg=new lt;function Ag(i,e,t,n,s,r,a){const o=new Ie(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function _(T){let v=!1;const A=g(T);A===null?p(o,c):A&&A.isColor&&(p(A,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Fa)?(h===void 0&&(h=new se(new nt(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Rs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(Ci)),h.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ct,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new se(new Qt(2,2),new zt({name:"BackgroundMaterial",uniforms:Rs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,v){T.getRGB(Yr,Du(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,v,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,v=1){o.set(T),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:_,addToRenderList:m,dispose:E}}function Rg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(x,P,L,O,H){let V=!1;const W=u(O,L,P);r!==W&&(r=W,l(r.object)),V=d(x,O,L,H),V&&g(x,O,L,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(x,P,L,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,P,L){const O=L.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let V=H[P.id];V===void 0&&(V={},H[P.id]=V);let W=V[O];return W===void 0&&(W=f(c()),V[O]=W),W}function f(x){const P=[],L=[],O=[];for(let H=0;H<t;H++)P[H]=0,L[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,P,L,O){const H=r.attributes,V=P.attributes;let W=0;const Z=L.getAttributes();for(const N in Z)if(Z[N].location>=0){const Q=H[N];let ae=V[N];if(ae===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(x,P,L,O){const H={},V=P.attributes;let W=0;const Z=L.getAttributes();for(const N in Z)if(Z[N].location>=0){let Q=V[N];Q===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),H[N]=ae,W++}r.attributes=H,r.attributesNum=W,r.index=O}function _(){const x=r.newAttributes;for(let P=0,L=x.length;P<L;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const L=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;L[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),H[x]!==P&&(i.vertexAttribDivisor(x,P),H[x]=P)}function E(){const x=r.newAttributes,P=r.enabledAttributes;for(let L=0,O=P.length;L<O;L++)P[L]!==x[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function T(x,P,L,O,H,V,W){W===!0?i.vertexAttribIPointer(x,P,L,H,V):i.vertexAttribPointer(x,P,L,O,H,V)}function v(x,P,L,O){_();const H=O.attributes,V=L.getAttributes(),W=P.defaultAttributeValues;for(const Z in V){const N=V[Z];if(N.location>=0){let Y=H[Z];if(Y===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const Q=Y.normalized,ae=Y.itemSize,be=e.get(Y);if(be===void 0)continue;const $e=be.buffer,qe=be.type,Ye=be.bytesPerElement,q=qe===i.INT||qe===i.UNSIGNED_INT||Y.gpuType===qc;if(Y.isInterleavedBufferAttribute){const K=Y.data,de=K.stride,Ce=Y.offset;if(K.isInstancedInterleavedBuffer){for(let Ae=0;Ae<N.locationSize;Ae++)p(N.location+Ae,K.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ae=0;Ae<N.locationSize;Ae++)m(N.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Ae=0;Ae<N.locationSize;Ae++)T(N.location+Ae,ae/N.locationSize,qe,Q,de*Ye,(Ce+ae/N.locationSize*Ae)*Ye,q)}else{if(Y.isInstancedBufferAttribute){for(let K=0;K<N.locationSize;K++)p(N.location+K,Y.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let K=0;K<N.locationSize;K++)m(N.location+K);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let K=0;K<N.locationSize;K++)T(N.location+K,ae/N.locationSize,qe,Q,ae*Ye,ae/N.locationSize*K*Ye,q)}}else if(W!==void 0){const Q=W[Z];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(N.location,Q);break;case 3:i.vertexAttrib3fv(N.location,Q);break;case 4:i.vertexAttrib4fv(N.location,Q);break;default:i.vertexAttrib1fv(N.location,Q)}}}}E()}function A(){R();for(const x in n){const P=n[x];for(const L in P){const O=P[L];for(const H in O)h(O[H].object),delete O[H];delete P[L]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const L in P){const O=P[L];for(const H in O)h(O[H].object),delete O[H];delete P[L]}delete n[x.id]}function b(x){for(const P in n){const L=n[P];if(L[x.id]===void 0)continue;const O=L[x.id];for(const H in O)h(O[H].object),delete O[H];delete L[x.id]}}function R(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function wg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Pg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==In&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const R=b===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Xn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Hn&&!R)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function Dg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new hi,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,T=E*4;let v=p.clippingState||null;c.value=v,v=h(g,f,T,d);for(let A=0;A!==T;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=d;T!==_;++T,v+=4)a.copy(u[T]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ig(i){let e=new WeakMap;function t(a,o){return o===Yo?a.mapping=Ts:o===jo&&(a.mapping=bs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yo||o===jo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ep(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const fs=4,ch=[.125,.215,.35,.446,.526,.582],Di=20,So=new hl,lh=new Ie;let Mo=null,Eo=0,To=0,bo=!1;const Ri=(1+Math.sqrt(5))/2,os=1/Ri,hh=[new I(-Ri,os,0),new I(Ri,os,0),new I(-os,0,Ri),new I(os,0,Ri),new I(0,Ri,-os),new I(0,Ri,os),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Lg=new I;class Cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Lg}=r;Mo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,Eo,To),this._renderer.xr.enabled=bo,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Vn,format:In,colorSpace:Cs,depthBuffer:!1},s=uh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Ng(r,e,t)}return s}_compileMaterial(e){const t=new se(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,s,r){const c=new en(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(lh),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new cn({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new se(new nt,_);let p=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,p=!0):(_.color.copy(lh),p=!0);for(let T=0;T<6;T++){const v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));const A=this._cubeSize;jr(s,v*A,T>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ts||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;jr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,So)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hh[(s-r-1)%hh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new se(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Di-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let E=0;for(let b=0;b<Di;++b){const R=b/_,S=Math.exp(-R*R/2);p.push(S),b===0?E+=S:b<m&&(E+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const v=this._sizeLods[s],A=3*v*(s>T-fs?s-T+fs:0),C=4*(this._cubeSize-v);jr(t,A,C,3*v,2*v),c.setRenderTarget(t),c.render(u,So)}}function Ug(i){const e=[],t=[],n=[];let s=i;const r=i-fs+1+ch.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-fs?c=ch[a-i+fs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),T=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let C=0;C<d;C++){const b=C%3*2/3-1,R=C>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];E.set(S,_*g*C),T.set(f,m*g*C);const x=[C,C,C,C,C,C];v.set(x,p*g*C)}const A=new Dt;A.setAttribute("position",new ln(E,_)),A.setAttribute("uv",new ln(T,m)),A.setAttribute("faceIndex",new ln(v,p)),e.push(A),s>fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uh(i,e,t){const n=new Cn(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ng(i,e,t){const n=new Float32Array(Di),s=new I(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function fh(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function dh(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function Fg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Yo||c===jo,h=c===Ts||c===bs;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Cc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Cc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Og(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bg(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let T=0,v=E.length;T<v;T+=3){const A=E[T+0],C=E[T+1],b=E[T+2];f.push(A,C,C,b,b,A)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,v=E.length/3-1;T<v;T+=3){const A=T+0,C=T+1,b=T+2;f.push(A,C,C,b,b,A)}}else return;const m=new(bu(f)?Pu:wu)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function zg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hg(i,e,t){const n=new WeakMap,s=new rt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*u),R=new Cu(b,A,C,u);R.type=Hn,R.needsUpdate=!0;const S=v*4;for(let P=0;P<u;P++){const L=p[P],O=E[P],H=T[P],V=A*C*4*P;for(let W=0;W<L.count;W++){const Z=W*S;g===!0&&(s.fromBufferAttribute(L,W),b[V+Z+0]=s.x,b[V+Z+1]=s.y,b[V+Z+2]=s.z,b[V+Z+3]=0),_===!0&&(s.fromBufferAttribute(O,W),b[V+Z+4]=s.x,b[V+Z+5]=s.y,b[V+Z+6]=s.z,b[V+Z+7]=0),m===!0&&(s.fromBufferAttribute(H,W),b[V+Z+8]=s.x,b[V+Z+9]=s.y,b[V+Z+10]=s.z,b[V+Z+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new Re(A,C)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Hu=new Yt,ph=new Ou(1,1),Gu=new Cu,Vu=new op,Wu=new Lu,mh=[],gh=[],_h=new Float32Array(16),vh=new Float32Array(9),xh=new Float32Array(4);function Ls(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ba(i,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function qg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),Lt(t,n)}}function Yg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;vh.set(n),i.uniformMatrix3fv(this.addr,!1,vh),Lt(t,n)}}function jg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;_h.set(n),i.uniformMatrix4fv(this.addr,!1,_h),Lt(t,n)}}function Kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function e_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function n_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function i_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function s_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=Tu,r=ph):r=Hu,t.setTexture2D(e||r,s)}function r_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vu,s)}function a_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wu,s)}function o_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gu,s)}function c_(i){switch(i){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return $g;case 35674:return qg;case 35675:return Yg;case 35676:return jg;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}function l_(i,e){i.uniform1fv(this.addr,e)}function h_(i,e){const t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function u_(i,e){const t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function f_(i,e){const t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function d_(i,e){const t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p_(i,e){const t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m_(i,e){const t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g_(i,e){i.uniform1iv(this.addr,e)}function __(i,e){i.uniform2iv(this.addr,e)}function v_(i,e){i.uniform3iv(this.addr,e)}function x_(i,e){i.uniform4iv(this.addr,e)}function y_(i,e){i.uniform1uiv(this.addr,e)}function S_(i,e){i.uniform2uiv(this.addr,e)}function M_(i,e){i.uniform3uiv(this.addr,e)}function E_(i,e){i.uniform4uiv(this.addr,e)}function T_(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Hu,r[a])}function b_(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vu,r[a])}function C_(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Wu,r[a])}function A_(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Gu,r[a])}function R_(i){switch(i){case 5126:return l_;case 35664:return h_;case 35665:return u_;case 35666:return f_;case 35674:return d_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return x_;case 5125:return y_;case 36294:return S_;case 36295:return M_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return A_}}class w_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c_(t.type)}}class P_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R_(t.type)}}class D_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function yh(i,e){i.seq.push(e),i.map[e.id]=e}function I_(i,e,t){const n=i.name,s=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),a=Co.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yh(t,l===void 0?new w_(o,i,e):new P_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new D_(o),yh(t,u)),t=u}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);I_(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Sh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const L_=37297;let U_=0;function N_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Mh=new He;function F_(i){Qe._getMatrix(Mh,Qe.workingColorSpace,i);const e=`mat3( ${Mh.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Sa:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Eh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+N_(i.getShaderSource(e),o)}else return r}function O_(i,e){const t=F_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B_(i,e){let t;switch(e){case hu:t="Linear";break;case uu:t="Reinhard";break;case fu:t="Cineon";break;case $c:t="ACESFilmic";break;case pu:t="AgX";break;case mu:t="Neutral";break;case du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new I;function z_(){Qe.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function H_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ys(i){return i!==""}function Th(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(V_,X_)}const W_=new Map;function X_(i,e){let t=Ve[e];if(t===void 0){const n=W_.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace($_,q_)}function q_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Y_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function j_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case bs:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function Z_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xc:e="ENVMAP_BLENDING_MULTIPLY";break;case bd:e="ENVMAP_BLENDING_MIX";break;case Cd:e="ENVMAP_BLENDING_ADD";break}return e}function J_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Y_(t),l=j_(t),h=K_(t),u=Z_(t),f=J_(t),d=k_(t),g=H_(r),_=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==mi?B_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,O_("linearToOutputTexel",t.outputColorSpace),z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=Ac(a),a=Th(a,t),a=bh(a,t),o=Ac(o),o=Th(o,t),o=bh(o,t),a=Ch(a),o=Ch(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+m+a,v=E+p+o,A=Sh(s,s.VERTEX_SHADER,T),C=Sh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(P){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(C)||"",V=L.trim(),W=O.trim(),Z=H.trim();let N=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,C);else{const Q=Eh(s,A,"vertex"),ae=Eh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+Q+`
`+ae)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||Z==="")&&(Y=!1);Y&&(P.diagnostics={runnable:N,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(A),s.deleteShader(C),R=new ha(s,_),S=G_(s,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,L_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let ev=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nv(e),t.set(e,n)),n}}class nv{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}}function iv(i,e,t,n,s,r,a){const o=new Au,c=new tv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,P,L,O){const H=L.fog,V=O.geometry,W=S.isMeshStandardMaterial?L.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),N=Z&&Z.mapping===Fa?Z.image.height:null,Y=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=Q!==void 0?Q.length:0;let be=0;V.morphAttributes.position!==void 0&&(be=1),V.morphAttributes.normal!==void 0&&(be=2),V.morphAttributes.color!==void 0&&(be=3);let $e,qe,Ye,q;if(Y){const st=Bn[Y];$e=st.vertexShader,qe=st.fragmentShader}else $e=S.vertexShader,qe=S.fragmentShader,c.update(S),Ye=c.getVertexShaderID(S),q=c.getFragmentShaderID(S);const K=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Ce=O.isInstancedMesh===!0,Ae=O.isBatchedMesh===!0,Je=!!S.map,Ht=!!S.matcap,D=!!Z,_t=!!S.aoMap,Be=!!S.lightMap,Ue=!!S.bumpMap,xe=!!S.normalMap,vt=!!S.displacementMap,ye=!!S.emissiveMap,Ge=!!S.metalnessMap,Ut=!!S.roughnessMap,Ct=S.anisotropy>0,w=S.clearcoat>0,y=S.dispersion>0,z=S.iridescence>0,$=S.sheen>0,J=S.transmission>0,X=Ct&&!!S.anisotropyMap,Te=w&&!!S.clearcoatMap,re=w&&!!S.clearcoatNormalMap,Se=w&&!!S.clearcoatRoughnessMap,Me=z&&!!S.iridescenceMap,ne=z&&!!S.iridescenceThicknessMap,ue=$&&!!S.sheenColorMap,Le=$&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,le=!!S.specularColorMap,ke=!!S.specularIntensityMap,U=J&&!!S.transmissionMap,ie=J&&!!S.thicknessMap,oe=!!S.gradientMap,pe=!!S.alphaMap,ee=S.alphaTest>0,j=!!S.alphaHash,ve=!!S.extensions;let Oe=mi;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const dt={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:qe,defines:S.defines,customVertexShaderID:Ye,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Cs,alphaToCoverage:!!S.alphaToCoverage,map:Je,matcap:Ht,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:N,aoMap:_t,lightMap:Be,bumpMap:Ue,normalMap:xe,displacementMap:f&&vt,emissiveMap:ye,normalMapObjectSpace:xe&&S.normalMapType===Pd,normalMapTangentSpace:xe&&S.normalMapType===el,metalnessMap:Ge,roughnessMap:Ut,anisotropy:Ct,anisotropyMap:X,clearcoat:w,clearcoatMap:Te,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:y,iridescence:z,iridescenceMap:Me,iridescenceThicknessMap:ne,sheen:$,sheenColorMap:ue,sheenRoughnessMap:Le,specularMap:Ee,specularColorMap:le,specularIntensityMap:ke,transmission:J,transmissionMap:U,thicknessMap:ie,gradientMap:oe,opaque:S.transparent===!1&&S.blending===ms&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:j,combine:S.combine,mapUv:Je&&_(S.map.channel),aoMapUv:_t&&_(S.aoMap.channel),lightMapUv:Be&&_(S.lightMap.channel),bumpMapUv:Ue&&_(S.bumpMap.channel),normalMapUv:xe&&_(S.normalMap.channel),displacementMapUv:vt&&_(S.displacementMap.channel),emissiveMapUv:ye&&_(S.emissiveMap.channel),metalnessMapUv:Ge&&_(S.metalnessMap.channel),roughnessMapUv:Ut&&_(S.roughnessMap.channel),anisotropyMapUv:X&&_(S.anisotropyMap.channel),clearcoatMapUv:Te&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(S.sheenRoughnessMap.channel),specularMapUv:Ee&&_(S.specularMap.channel),specularColorMapUv:le&&_(S.specularColorMap.channel),specularIntensityMapUv:ke&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:ie&&_(S.thicknessMap.channel),alphaMapUv:pe&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xe||Ct),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Je||pe),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:be,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Je&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:ye&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)x.push(P),x.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const x=g[S.type];let P;if(x){const L=Bn[x];P=ws.clone(L.uniforms)}else P=S.uniforms;return P}function A(S,x){let P;for(let L=0,O=h.length;L<O;L++){const H=h[L];if(H.cacheKey===x){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Q_(i,x,S,r),h.push(P)),P}function C(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function b(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:R}}function sv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||rv),n.length>1&&n.sort(f||Rh),s.length>1&&s.sort(f||Rh)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function av(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new wh,i.set(n,[a])):s>=r.length?(a=new wh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ov(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ie};break;case"SpotLight":t={position:new I,direction:new I,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function cv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lv=0;function hv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uv(i){const e=new ov,t=cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new lt,a=new lt;function o(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,T=0,v=0,A=0,C=0,b=0;l.sort(hv);for(let S=0,x=l.length;S<x;S++){const P=l[S],L=P.color,O=P.intensity,H=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=L.r*O,u+=L.g*O,f+=L.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);b++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,N=t.get(P);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,n.directionalShadow[d]=N,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=P.shadow.matrix,E++}n.directional[d]=W,d++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(L).multiplyScalar(O),W.distance=H,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const Z=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Z.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const N=t.get(P);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=V,v++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(L).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Z=P.shadow,N=t.get(P);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==E||R.numPointShadows!==T||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=E,R.numPointShadows=T,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=b,n.version=lv++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const T=l[p];if(T.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(T.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Ph(i){const e=new uv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function fv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ph(i),e.set(s,[o])):r>=a.length?(o=new Ph(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`;function mv(i,e,t){let n=new rl;const s=new Re,r=new Re,a=new rt,o=new Np({depthPacking:wd}),c=new Fp,l={},h=t.maxTextureSize,u={[vi]:kt,[kt]:vi,[mn]:mn},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:dv,fragmentShader:pv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let p=this.type;this.render=function(C,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ni),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=p!==Jn&&this.type===Jn,H=p===Jn&&this.type!==Jn;for(let V=0,W=C.length;V<W;V++){const Z=C[V],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Y=N.getFrameExtents();if(s.multiply(Y),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,N.mapSize.y=r.y)),N.map===null||O===!0||H===!0){const ae=this.type!==Jn?{minFilter:vn,magFilter:vn}:{};N.map!==null&&N.map.dispose(),N.map=new Cn(s.x,s.y,ae),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const Q=N.getViewportCount();for(let ae=0;ae<Q;ae++){const be=N.getViewport(ae);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),L.viewport(a),N.updateMatrices(Z,ae),n=N.getFrustum(),v(b,R,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===Jn&&E(N,R),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,P)};function E(C,b){const R=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Cn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,R,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,R,d,_,null)}function T(C,b,R,S){let x=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)x=P;else if(x=R.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const L=x.uuid,O=b.uuid;let H=l[L];H===void 0&&(H={},l[L]=H);let V=H[O];V===void 0&&(V=x.clone(),H[O]=V,b.addEventListener("dispose",A)),x=V}if(x.visible=b.visible,x.wireframe=b.wireframe,S===Jn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=i.properties.get(x);L.light=R}return x}function v(C,b,R,S,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Jn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const O=e.update(C),H=C.material;if(Array.isArray(H)){const V=O.groups;for(let W=0,Z=V.length;W<Z;W++){const N=V[W],Y=H[N.materialIndex];if(Y&&Y.visible){const Q=T(C,Y,S,x);C.onBeforeShadow(i,C,b,R,O,Q,N),i.renderBufferDirect(R,null,O,Q,C,N),C.onAfterShadow(i,C,b,R,O,Q,N)}}}else if(H.visible){const V=T(C,H,S,x);C.onBeforeShadow(i,C,b,R,O,V,null),i.renderBufferDirect(R,null,O,V,C,null),C.onAfterShadow(i,C,b,R,O,V,null)}}const L=C.children;for(let O=0,H=L.length;O<H;O++)v(L[O],b,R,S,x)}function A(C){C.target.removeEventListener("dispose",A);for(const R in l){const S=l[R],x=C.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const gv={[Ho]:Go,[Vo]:$o,[Wo]:qo,[Es]:Xo,[Go]:Ho,[$o]:Vo,[qo]:Wo,[Xo]:Es};function _v(i,e){function t(){let U=!1;const ie=new rt;let oe=null;const pe=new rt(0,0,0,0);return{setMask:function(ee){oe!==ee&&!U&&(i.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){U=ee},setClear:function(ee,j,ve,Oe,dt){dt===!0&&(ee*=Oe,j*=Oe,ve*=Oe),ie.set(ee,j,ve,Oe),pe.equals(ie)===!1&&(i.clearColor(ee,j,ve,Oe),pe.copy(ie))},reset:function(){U=!1,oe=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,ie=!1,oe=null,pe=null,ee=null;return{setReversed:function(j){if(ie!==j){const ve=e.get("EXT_clip_control");j?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ie=j;const Oe=ee;ee=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(j){j?K(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(j){oe!==j&&!U&&(i.depthMask(j),oe=j)},setFunc:function(j){if(ie&&(j=gv[j]),pe!==j){switch(j){case Ho:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=j}},setLocked:function(j){U=j},setClear:function(j){ee!==j&&(ie&&(j=1-j),i.clearDepth(j),ee=j)},reset:function(){U=!1,oe=null,pe=null,ee=null,ie=!1}}}function s(){let U=!1,ie=null,oe=null,pe=null,ee=null,j=null,ve=null,Oe=null,dt=null;return{setTest:function(st){U||(st?K(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(st){ie!==st&&!U&&(i.stencilMask(st),ie=st)},setFunc:function(st,$n,Fn){(oe!==st||pe!==$n||ee!==Fn)&&(i.stencilFunc(st,$n,Fn),oe=st,pe=$n,ee=Fn)},setOp:function(st,$n,Fn){(j!==st||ve!==$n||Oe!==Fn)&&(i.stencilOp(st,$n,Fn),j=st,ve=$n,Oe=Fn)},setLocked:function(st){U=st},setClear:function(st){dt!==st&&(i.clearStencil(st),dt=st)},reset:function(){U=!1,ie=null,oe=null,pe=null,ee=null,j=null,ve=null,Oe=null,dt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,T=null,v=null,A=null,C=null,b=new Ie(0,0,0),R=0,S=!1,x=null,P=null,L=null,O=null,H=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(N)[1]),W=Z>=1):N.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),W=Z>=2);let Y=null,Q={};const ae=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),$e=new rt().fromArray(ae),qe=new rt().fromArray(be);function Ye(U,ie,oe,pe){const ee=new Uint8Array(4),j=i.createTexture();i.bindTexture(U,j),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<oe;ve++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(ie+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return j}const q={};q[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Es),Ue(!1),xe(bl),K(i.CULL_FACE),_t(ni);function K(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function de(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ce(U,ie){return u[U]!==ie?(i.bindFramebuffer(U,ie),u[U]=ie,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ae(U,ie){let oe=d,pe=!1;if(U){oe=f.get(ie),oe===void 0&&(oe=[],f.set(ie,oe));const ee=U.textures;if(oe.length!==ee.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let j=0,ve=ee.length;j<ve;j++)oe[j]=i.COLOR_ATTACHMENT0+j;oe.length=ee.length,pe=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,pe=!0);pe&&i.drawBuffers(oe)}function Je(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Ht={[Pi]:i.FUNC_ADD,[cd]:i.FUNC_SUBTRACT,[ld]:i.FUNC_REVERSE_SUBTRACT};Ht[hd]=i.MIN,Ht[ud]=i.MAX;const D={[fd]:i.ZERO,[dd]:i.ONE,[pd]:i.SRC_COLOR,[zo]:i.SRC_ALPHA,[yd]:i.SRC_ALPHA_SATURATE,[vd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[ko]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[Sd]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[Ed]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(U,ie,oe,pe,ee,j,ve,Oe,dt,st){if(U===ni){_===!0&&(de(i.BLEND),_=!1);return}if(_===!1&&(K(i.BLEND),_=!0),U!==od){if(U!==m||st!==S){if((p!==Pi||v!==Pi)&&(i.blendEquation(i.FUNC_ADD),p=Pi,v=Pi),st)switch(U){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,T=null,A=null,C=null,b.set(0,0,0),R=0,m=U,S=st}return}ee=ee||ie,j=j||oe,ve=ve||pe,(ie!==p||ee!==v)&&(i.blendEquationSeparate(Ht[ie],Ht[ee]),p=ie,v=ee),(oe!==E||pe!==T||j!==A||ve!==C)&&(i.blendFuncSeparate(D[oe],D[pe],D[j],D[ve]),E=oe,T=pe,A=j,C=ve),(Oe.equals(b)===!1||dt!==R)&&(i.blendColor(Oe.r,Oe.g,Oe.b,dt),b.copy(Oe),R=dt),m=U,S=!1}function Be(U,ie){U.side===mn?de(i.CULL_FACE):K(i.CULL_FACE);let oe=U.side===kt;ie&&(oe=!oe),Ue(oe),U.blending===ms&&U.transparent===!1?_t(ni):_t(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const pe=U.stencilWrite;o.setTest(pe),pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function xe(U){U!==sd?(K(i.CULL_FACE),U!==P&&(U===bl?i.cullFace(i.BACK):U===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),P=U}function vt(U){U!==L&&(W&&i.lineWidth(U),L=U)}function ye(U,ie,oe){U?(K(i.POLYGON_OFFSET_FILL),(O!==ie||H!==oe)&&(i.polygonOffset(ie,oe),O=ie,H=oe)):de(i.POLYGON_OFFSET_FILL)}function Ge(U){U?K(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function Ut(U){U===void 0&&(U=i.TEXTURE0+V-1),Y!==U&&(i.activeTexture(U),Y=U)}function Ct(U,ie,oe){oe===void 0&&(Y===null?oe=i.TEXTURE0+V-1:oe=Y);let pe=Q[oe];pe===void 0&&(pe={type:void 0,texture:void 0},Q[oe]=pe),(pe.type!==U||pe.texture!==ie)&&(Y!==oe&&(i.activeTexture(oe),Y=oe),i.bindTexture(U,ie||q[U]),pe.type=U,pe.texture=ie)}function w(){const U=Q[Y];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){$e.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),$e.copy(U))}function Le(U){qe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),qe.copy(U))}function Ee(U,ie){let oe=l.get(ie);oe===void 0&&(oe=new WeakMap,l.set(ie,oe));let pe=oe.get(U);pe===void 0&&(pe=i.getUniformBlockIndex(ie,U.name),oe.set(U,pe))}function le(U,ie){const pe=l.get(ie).get(U);c.get(ie)!==pe&&(i.uniformBlockBinding(ie,pe,U.__bindingPointIndex),c.set(ie,pe))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,Q={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,T=null,v=null,A=null,C=null,b=new Ie(0,0,0),R=0,S=!1,x=null,P=null,L=null,O=null,H=null,$e.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:de,bindFramebuffer:Ce,drawBuffers:Ae,useProgram:Je,setBlending:_t,setMaterial:Be,setFlipSided:Ue,setCullFace:xe,setLineWidth:vt,setPolygonOffset:ye,setScissorTest:Ge,activeTexture:Ut,bindTexture:Ct,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:Me,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:le,texStorage2D:re,texStorage3D:Se,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Te,scissor:ue,viewport:Le,reset:ke}}function vv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return d?new OffscreenCanvas(w,y):Ea("canvas")}function _(w,y,z){let $=1;const J=Ct(w);if((J.width>z||J.height>z)&&($=z/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor($*J.width),Te=Math.floor($*J.height);u===void 0&&(u=g(X,Te));const re=y?g(X,Te):u;return re.width=X,re.height=Te,re.getContext("2d").drawImage(w,0,0,X,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Te+")."),re}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,y,z,$,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=y;if(y===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),y===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),y===i.RGBA){const Te=J?Sa:Qe.getTransfer($);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=Te===ct?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(w,y){let z;return w?y===null||y===Oi||y===lr?z=i.DEPTH24_STENCIL8:y===Hn?z=i.DEPTH32F_STENCIL8:y===cr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Oi||y===lr?z=i.DEPTH_COMPONENT24:y===Hn?z=i.DEPTH_COMPONENT32F:y===cr&&(z=i.DEPTH_COMPONENT16),z}function A(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==vn&&w.minFilter!==kn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function C(w){const y=w.target;y.removeEventListener("dispose",C),R(y),y.isVideoTexture&&h.delete(y)}function b(w){const y=w.target;y.removeEventListener("dispose",b),x(y)}function R(w){const y=n.get(w);if(y.__webglInit===void 0)return;const z=w.source,$=f.get(z);if($){const J=$[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(w),Object.keys($).length===0&&f.delete(z)}n.remove(w)}function S(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const z=w.source,$=f.get(z);delete $[y.__cacheKey],a.memory.textures--}function x(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let J=0;J<y.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[$][J]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=w.textures;for(let $=0,J=z.length;$<J;$++){const X=n.get(z[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(w)}let P=0;function L(){P=0}function O(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function H(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function V(w,y){const z=n.get(w);if(w.isVideoTexture&&Ge(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,w,y);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function W(w,y){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){q(z,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function Z(w,y){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){q(z,w,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function N(w,y){const z=n.get(w);if(w.version>0&&z.__version!==w.version){K(z,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const Y={[Fi]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},Q={[vn]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},ae={[Dd]:i.NEVER,[Od]:i.ALWAYS,[Id]:i.LESS,[Tu]:i.LEQUAL,[Ld]:i.EQUAL,[Fd]:i.GEQUAL,[Ud]:i.GREATER,[Nd]:i.NOTEQUAL};function be(w,y){if(y.type===Hn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===kn||y.magFilter===qa||y.magFilter===br||y.magFilter===Ui||y.minFilter===kn||y.minFilter===qa||y.minFilter===br||y.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Y[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Y[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Y[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Q[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Q[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vn||y.minFilter!==br&&y.minFilter!==Ui||y.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $e(w,y){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",C));const $=y.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const X=H(y);if(X!==w.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[X].usedTimes++;const Te=J[w.__cacheKey];Te!==void 0&&(J[w.__cacheKey].usedTimes--,Te.usedTimes===0&&S(y)),w.__cacheKey=X,w.__webglTexture=J[X].texture}return z}function qe(w,y,z){return Math.floor(Math.floor(w/z)/y)}function Ye(w,y,z,$){const X=w.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,$,y.data);else{X.sort((ne,ue)=>ne.start-ue.start);let Te=0;for(let ne=1;ne<X.length;ne++){const ue=X[Te],Le=X[ne],Ee=ue.start+ue.count,le=qe(Le.start,y.width,4),ke=qe(ue.start,y.width,4);Le.start<=Ee+1&&le===ke&&qe(Le.start+Le.count-1,y.width,4)===le?ue.count=Math.max(ue.count,Le.start+Le.count-ue.start):(++Te,X[Te]=Le)}X.length=Te+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),Me=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ne=0,ue=X.length;ne<ue;ne++){const Le=X[ne],Ee=Math.floor(Le.start/4),le=Math.ceil(Le.count/4),ke=Ee%y.width,U=Math.floor(Ee/y.width),ie=le,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ke,U,ie,oe,z,$,y.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function q(w,y,z){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);const J=$e(w,y),X=y.source;t.bindTexture($,w.__webglTexture,i.TEXTURE0+z);const Te=n.get(X);if(X.version!==Te.__version||J===!0){t.activeTexture(i.TEXTURE0+z);const re=Qe.getPrimaries(Qe.workingColorSpace),Se=y.colorSpace===fi?null:Qe.getPrimaries(y.colorSpace),Me=y.colorSpace===fi||re===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ne=_(y.image,!1,s.maxTextureSize);ne=Ut(y,ne);const ue=r.convert(y.format,y.colorSpace),Le=r.convert(y.type);let Ee=T(y.internalFormat,ue,Le,y.colorSpace,y.isVideoTexture);be($,y);let le;const ke=y.mipmaps,U=y.isVideoTexture!==!0,ie=Te.__version===void 0||J===!0,oe=X.dataReady,pe=A(y,ne);if(y.isDepthTexture)Ee=v(y.format===ur,y.type),ie&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ne.width,ne.height,0,ue,Le,null));else if(y.isDataTexture)if(ke.length>0){U&&ie&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,ke[0].width,ke[0].height);for(let ee=0,j=ke.length;ee<j;ee++)le=ke[ee],U?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,ue,Le,le.data):t.texImage2D(i.TEXTURE_2D,ee,Ee,le.width,le.height,0,ue,Le,le.data);y.generateMipmaps=!1}else U?(ie&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,ne.width,ne.height),oe&&Ye(y,ne,ue,Le)):t.texImage2D(i.TEXTURE_2D,0,Ee,ne.width,ne.height,0,ue,Le,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,ke[0].width,ke[0].height,ne.depth);for(let ee=0,j=ke.length;ee<j;ee++)if(le=ke[ee],y.format!==In)if(ue!==null)if(U){if(oe)if(y.layerUpdates.size>0){const ve=oh(le.width,le.height,y.format,y.type);for(const Oe of y.layerUpdates){const dt=le.data.subarray(Oe*ve/le.data.BYTES_PER_ELEMENT,(Oe+1)*ve/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Oe,le.width,le.height,1,ue,dt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ne.depth,ue,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ee,le.width,le.height,ne.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ne.depth,ue,Le,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ee,le.width,le.height,ne.depth,0,ue,Le,le.data)}else{U&&ie&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,ke[0].width,ke[0].height);for(let ee=0,j=ke.length;ee<j;ee++)le=ke[ee],y.format!==In?ue!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ee,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,ue,Le,le.data):t.texImage2D(i.TEXTURE_2D,ee,Ee,le.width,le.height,0,ue,Le,le.data)}else if(y.isDataArrayTexture)if(U){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,ne.width,ne.height,ne.depth),oe)if(y.layerUpdates.size>0){const ee=oh(ne.width,ne.height,y.format,y.type);for(const j of y.layerUpdates){const ve=ne.data.subarray(j*ee/ne.data.BYTES_PER_ELEMENT,(j+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,ue,Le,ve)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Le,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,ue,Le,ne.data);else if(y.isData3DTexture)U?(ie&&t.texStorage3D(i.TEXTURE_3D,pe,Ee,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Le,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,ue,Le,ne.data);else if(y.isFramebufferTexture){if(ie)if(U)t.texStorage2D(i.TEXTURE_2D,pe,Ee,ne.width,ne.height);else{let ee=ne.width,j=ne.height;for(let ve=0;ve<pe;ve++)t.texImage2D(i.TEXTURE_2D,ve,Ee,ee,j,0,ue,Le,null),ee>>=1,j>>=1}}else if(ke.length>0){if(U&&ie){const ee=Ct(ke[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ee,ee.width,ee.height)}for(let ee=0,j=ke.length;ee<j;ee++)le=ke[ee],U?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue,Le,le):t.texImage2D(i.TEXTURE_2D,ee,Ee,ue,Le,le);y.generateMipmaps=!1}else if(U){if(ie){const ee=Ct(ne);t.texStorage2D(i.TEXTURE_2D,pe,Ee,ee.width,ee.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Le,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ue,Le,ne);m(y)&&p($),Te.__version=X.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function K(w,y,z){if(y.image.length!==6)return;const $=$e(w,y),J=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const X=n.get(J);if(J.version!==X.__version||$===!0){t.activeTexture(i.TEXTURE0+z);const Te=Qe.getPrimaries(Qe.workingColorSpace),re=y.colorSpace===fi?null:Qe.getPrimaries(y.colorSpace),Se=y.colorSpace===fi||Te===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!Me&&!ne?ue[j]=_(y.image[j],!0,s.maxCubemapSize):ue[j]=ne?y.image[j].image:y.image[j],ue[j]=Ut(y,ue[j]);const Le=ue[0],Ee=r.convert(y.format,y.colorSpace),le=r.convert(y.type),ke=T(y.internalFormat,Ee,le,y.colorSpace),U=y.isVideoTexture!==!0,ie=X.__version===void 0||$===!0,oe=J.dataReady;let pe=A(y,Le);be(i.TEXTURE_CUBE_MAP,y);let ee;if(Me){U&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ke,Le.width,Le.height);for(let j=0;j<6;j++){ee=ue[j].mipmaps;for(let ve=0;ve<ee.length;ve++){const Oe=ee[ve];y.format!==In?Ee!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Oe.width,Oe.height,Ee,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Oe.width,Oe.height,Ee,le,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ke,Oe.width,Oe.height,0,Ee,le,Oe.data)}}}else{if(ee=y.mipmaps,U&&ie){ee.length>0&&pe++;const j=Ct(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ke,j.width,j.height)}for(let j=0;j<6;j++)if(ne){U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,Ee,le,ue[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,ue[j].width,ue[j].height,0,Ee,le,ue[j].data);for(let ve=0;ve<ee.length;ve++){const dt=ee[ve].image[j].image;U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,dt.width,dt.height,Ee,le,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ke,dt.width,dt.height,0,Ee,le,dt.data)}}else{U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ee,le,ue[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,Ee,le,ue[j]);for(let ve=0;ve<ee.length;ve++){const Oe=ee[ve];U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,Ee,le,Oe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ke,Ee,le,Oe.image[j])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),X.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function de(w,y,z,$,J,X){const Te=r.convert(z.format,z.colorSpace),re=r.convert(z.type),Se=T(z.internalFormat,Te,re,z.colorSpace),Me=n.get(y),ne=n.get(z);if(ne.__renderTarget=y,!Me.__hasExternalTextures){const ue=Math.max(1,y.width>>X),Le=Math.max(1,y.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Se,ue,Le,y.depth,0,Te,re,null):t.texImage2D(J,X,Se,ue,Le,0,Te,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,ne.__webglTexture,0,vt(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,ne.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(w,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const $=y.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=v(y.stencilBuffer,J),Te=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=vt(y);ye(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,X,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,X,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,X,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,w)}else{const $=y.textures;for(let J=0;J<$.length;J++){const X=$[J],Te=r.convert(X.format,X.colorSpace),re=r.convert(X.type),Se=T(X.internalFormat,Te,re,X.colorSpace),Me=vt(y);z&&ye(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,Se,y.width,y.height):ye(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,Se,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Se,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const J=$.__webglTexture,X=vt(y);if(y.depthTexture.format===hr)ye(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(y.depthTexture.format===ur)ye(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Je(w){const y=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=$}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const $=w.texture.mipmaps;$&&$.length>0?Ae(y.__webglFramebuffer[0],w):Ae(y.__webglFramebuffer,w)}else if(z){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),Ce(y.__webglDepthbuffer[$],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const $=w.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ce(y.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(w,y,z){const $=n.get(w);y!==void 0&&de($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Je(w)}function D(w){const y=w.texture,z=n.get(w),$=n.get(y);w.addEventListener("dispose",b);const J=w.textures,X=w.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,a.memory.textures++),X){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let Se=0;Se<y.mipmaps.length;Se++)z.__webglFramebuffer[re][Se]=i.createFramebuffer()}else z.__webglFramebuffer[re]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)z.__webglFramebuffer[re]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Te)for(let re=0,Se=J.length;re<Se;re++){const Me=n.get(J[re]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const Se=J[re];z.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[re]);const Me=r.convert(Se.format,Se.colorSpace),ne=r.convert(Se.type),ue=T(Se.internalFormat,Me,ne,Se.colorSpace,w.isXRRenderTarget===!0),Le=vt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,z.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),be(i.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)de(z.__webglFramebuffer[re][Se],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else de(z.__webglFramebuffer[re],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let re=0,Se=J.length;re<Se;re++){const Me=J[re],ne=n.get(Me);let ue=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),be(ue,Me),de(z.__webglFramebuffer,w,Me,i.COLOR_ATTACHMENT0+re,ue,0),m(Me)&&p(ue)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(re=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),be(re,y),y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)de(z.__webglFramebuffer[Se],w,y,i.COLOR_ATTACHMENT0,re,Se);else de(z.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,re,0);m(y)&&p(re),t.unbindTexture()}w.depthBuffer&&Je(w)}function _t(w){const y=w.textures;for(let z=0,$=y.length;z<$;z++){const J=y[z];if(m(J)){const X=E(w),Te=n.get(J).__webglTexture;t.bindTexture(X,Te),p(X),t.unbindTexture()}}}const Be=[],Ue=[];function xe(w){if(w.samples>0){if(ye(w)===!1){const y=w.textures,z=w.width,$=w.height;let J=i.COLOR_BUFFER_BIT;const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(w),re=y.length>1;if(re)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=w.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);const ne=n.get(y[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,J,i.NEAREST),c===!0&&(Be.length=0,Ue.length=0,Be.push(i.COLOR_ATTACHMENT0+Me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Be.push(X),Ue.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);const ne=n.get(y[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function vt(w){return Math.min(s.maxSamples,w.samples)}function ye(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ge(w){const y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Ut(w,y){const z=w.colorSpace,$=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Cs&&z!==fi&&(Qe.getTransfer(z)===ct?($!==In||J!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=N,this.rebindTextures=Ht,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ye}function xv(i,e){function t(n,s=fi){let r;const a=Qe.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_u)return i.BYTE;if(n===vu)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===Mu)return i.RGB;if(n===In)return i.RGBA;if(n===hr)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===Kc)return i.RED;if(n===Zc)return i.RED_INTEGER;if(n===Eu)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===Qc)return i.RGBA_INTEGER;if(n===aa||n===oa||n===ca||n===la)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===Qo||n===ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===nc)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===xc||n===yc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vc)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===Mc||n===Ec||n===Tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`;class Mv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:yv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new Qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ev extends Ds{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Mv,p={},E=t.getContextAttributes();let T=null,v=null;const A=[],C=[],b=new Re;let R=null;const S=new en;S.viewport=new rt;const x=new en;x.viewport=new rt;const P=[S,x],L=new Vp;let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=A[q];return K===void 0&&(K=new mo,A[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=A[q];return K===void 0&&(K=new mo,A[q]=K),K.getGripSpace()},this.getHand=function(q){let K=A[q];return K===void 0&&(K=new mo,A[q]=K),K.getHandSpace()};function V(q){const K=C.indexOf(q.inputSource);if(K===-1)return;const de=A[K];de!==void 0&&(de.update(q.inputSource,q.frame,l||a),de.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<A.length;q++){const K=C[q];K!==null&&(C[q]=null,A[q].disconnect(K))}O=null,H=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(T),d=null,f=null,u=null,s=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),E.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ce=null,Ae=null;E.depth&&(Ae=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=E.stencil?ur:hr,Ce=E.stencil?lr:Oi);const Je={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Cn(f.textureWidth,f.textureHeight,{format:In,type:Xn,depthTexture:new Ou(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Cn(d.framebufferWidth,d.framebufferHeight,{format:In,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(q){for(let K=0;K<q.removed.length;K++){const de=q.removed[K],Ce=C.indexOf(de);Ce>=0&&(C[Ce]=null,A[Ce].disconnect(de))}for(let K=0;K<q.added.length;K++){const de=q.added[K];let Ce=C.indexOf(de);if(Ce===-1){for(let Je=0;Je<A.length;Je++)if(Je>=C.length){C.push(de),Ce=Je;break}else if(C[Je]===null){C[Je]=de,Ce=Je;break}if(Ce===-1)break}const Ae=A[Ce];Ae&&Ae.connect(de)}}const N=new I,Y=new I;function Q(q,K,de){N.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const Ce=N.distanceTo(Y),Ae=K.projectionMatrix.elements,Je=de.projectionMatrix.elements,Ht=Ae[14]/(Ae[10]-1),D=Ae[14]/(Ae[10]+1),_t=(Ae[9]+1)/Ae[5],Be=(Ae[9]-1)/Ae[5],Ue=(Ae[8]-1)/Ae[0],xe=(Je[8]+1)/Je[0],vt=Ht*Ue,ye=Ht*xe,Ge=Ce/(-Ue+xe),Ut=Ge*-Ue;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ut),q.translateZ(Ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ct=Ht+Ge,w=D+Ge,y=vt-Ut,z=ye+(Ce-Ut),$=_t*D/w*Ct,J=Be*D/w*Ct;q.projectionMatrix.makePerspective(y,z,$,J,Ct,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let K=q.near,de=q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(de=m.depthFar)),L.near=x.near=S.near=K,L.far=x.far=S.far=de,(O!==L.near||H!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,H=L.far),L.layers.mask=q.layers.mask|6,S.layers.mask=L.layers.mask&3,x.layers.mask=L.layers.mask&5;const Ce=q.parent,Ae=L.cameras;ae(L,Ce);for(let Je=0;Je<Ae.length;Je++)ae(Ae[Je],Ce);Ae.length===2?Q(L,S,x):L.projectionMatrix.copy(S.projectionMatrix),be(q,L,Ce)};function be(q,K,de){de===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=As*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let $e=null;function qe(q,K){if(h=K.getViewerPose(l||a),g=K,h!==null){const de=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ce=!1;de.length!==L.cameras.length&&(L.cameras.length=0,Ce=!0);for(let D=0;D<de.length;D++){const _t=de[D];let Be=null;if(d!==null)Be=d.getViewport(_t);else{const xe=u.getViewSubImage(f,_t);Be=xe.viewport,D===0&&(e.setRenderTargetTextures(v,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(v))}let Ue=P[D];Ue===void 0&&(Ue=new en,Ue.layers.enable(D),Ue.viewport=new rt,P[D]=Ue),Ue.matrix.fromArray(_t.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(_t.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Be.x,Be.y,Be.width,Be.height),D===0&&(L.matrix.copy(Ue.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ce===!0&&L.cameras.push(Ue)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const D=u.getDepthInformation(de[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<de.length;D++){const _t=de[D].camera;if(_t){let Be=p[_t];Be||(Be=new Bu,p[_t]=Be);const Ue=u.getCameraImage(_t);Be.sourceTexture=Ue}}}}for(let de=0;de<A.length;de++){const Ce=C[de],Ae=A[de];Ce!==null&&Ae!==void 0&&Ae.update(Ce,K,l||a)}$e&&$e(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ye=new ku;Ye.setAnimationLoop(qe),this.setAnimationLoop=function(q){$e=q},this.dispose=function(){}}}const Ai=new Ln,Tv=new lt;function bv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Du(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),T=E.envMap,v=E.envMapRotation;T&&(m.envMap.value=T,Ai.copy(v),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(Ai)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cv(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const v=T.program;n.uniformBlockBinding(E,v)}function l(E,T){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const A=T.program;n.updateUBOMapping(E,A);const C=e.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function h(E){const T=u();E.__bindingPointIndex=T;const v=i.createBuffer(),A=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,v),v}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=s[E.id],v=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,b=v.length;C<b;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,x=R.length;S<x;S++){const P=R[S];if(d(P,C,S,A)===!0){const L=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let V=0;V<O.length;V++){const W=O[V],Z=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,L+H,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,T,v,A){const C=E.value,b=T+"_"+v;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const R=A[b];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[b]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(E){const T=E.uniforms;let v=0;const A=16;for(let b=0,R=T.length;b<R;b++){const S=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,P=S.length;x<P;x++){const L=S[x],O=Array.isArray(L.value)?L.value:[L.value];for(let H=0,V=O.length;H<V;H++){const W=O[H],Z=_(W),N=v%A,Y=N%Z.boundary,Q=N+Y;v+=Y,Q!==0&&A-Q<Z.storage&&(v+=A-Q),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=Z.storage}}}const C=v%A;return C>0&&(v+=A-C),E.__size=v,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const v=a.indexOf(T.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Av{constructor(e={}){const{canvas:t=ep(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Rt;let C=0,b=0,R=null,S=-1,x=null;const P=new rt,L=new rt;let O=null;const H=new Ie(0);let V=0,W=t.width,Z=t.height,N=1,Y=null,Q=null;const ae=new rt(0,0,W,Z),be=new rt(0,0,W,Z);let $e=!1;const qe=new rl;let Ye=!1,q=!1;const K=new lt,de=new I,Ce=new rt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Ht(){return R===null?N:1}let D=n;function _t(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),D===null){const F="webgl2";if(D=_t(F,M),D===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Be,Ue,xe,vt,ye,Ge,Ut,Ct,w,y,z,$,J,X,Te,re,Se,Me,ne,ue,Le,Ee,le,ke;function U(){Be=new Og(D),Be.init(),Ee=new xv(D,Be),Ue=new Pg(D,Be,e,Ee),xe=new _v(D,Be),Ue.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),vt=new kg(D),ye=new sv,Ge=new vv(D,Be,xe,ye,Ue,Ee,vt),Ut=new Ig(v),Ct=new Fg(v),w=new $p(D),le=new Rg(D,w),y=new Bg(D,w,vt,le),z=new Gg(D,y,w,vt),ne=new Hg(D,Ue,Ge),re=new Dg(ye),$=new iv(v,Ut,Ct,Be,Ue,le,re),J=new bv(v,ye),X=new av,Te=new fv(Be),Me=new Ag(v,Ut,Ct,xe,z,d,c),Se=new mv(v,z,Ue),ke=new Cv(D,vt,Ue,xe),ue=new wg(D,Be,vt),Le=new zg(D,Be,vt),vt.programs=$.programs,v.capabilities=Ue,v.extensions=Be,v.properties=ye,v.renderLists=X,v.shadowMap=Se,v.state=xe,v.info=vt}U();const ie=new Ev(v,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=Be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(W,Z,!1))},this.getSize=function(M){return M.set(W,Z)},this.setSize=function(M,F,k=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,Z=F,t.width=Math.floor(M*N),t.height=Math.floor(F*N),k===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(W*N,Z*N).floor()},this.setDrawingBufferSize=function(M,F,k){W=M,Z=F,N=k,t.width=Math.floor(M*k),t.height=Math.floor(F*k),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ae)},this.setViewport=function(M,F,k,G){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,F,k,G),xe.viewport(P.copy(ae).multiplyScalar(N).round())},this.getScissor=function(M){return M.copy(be)},this.setScissor=function(M,F,k,G){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,F,k,G),xe.scissor(L.copy(be).multiplyScalar(N).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(M){xe.setScissorTest($e=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){Q=M},this.getClearColor=function(M){return M.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,k=!0){let G=0;if(M){let B=!1;if(R!==null){const te=R.texture.format;B=te===Qc||te===Jc||te===Zc}if(B){const te=R.texture.type,he=te===Xn||te===Oi||te===cr||te===lr||te===Yc||te===jc,ge=Me.getClearColor(),fe=Me.getClearAlpha(),De=ge.r,Ne=ge.g,we=ge.b;he?(g[0]=De,g[1]=Ne,g[2]=we,g[3]=fe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=De,_[1]=Ne,_[2]=we,_[3]=fe,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT),k&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Me.dispose(),X.dispose(),Te.dispose(),ye.dispose(),Ut.dispose(),Ct.dispose(),z.dispose(),le.dispose(),ke.dispose(),$.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Fn),ie.removeEventListener("sessionend",xl),yi.stop()};function oe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=vt.autoReset,F=Se.enabled,k=Se.autoUpdate,G=Se.needsUpdate,B=Se.type;U(),vt.autoReset=M,Se.enabled=F,Se.autoUpdate=k,Se.needsUpdate=G,Se.type=B}function ee(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function j(M){const F=M.target;F.removeEventListener("dispose",j),ve(F)}function ve(M){Oe(M),ye.remove(M)}function Oe(M){const F=ye.get(M).programs;F!==void 0&&(F.forEach(function(k){$.releaseProgram(k)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,k,G,B,te){F===null&&(F=Ae);const he=B.isMesh&&B.matrixWorld.determinant()<0,ge=Kf(M,F,k,G,B);xe.setMaterial(G,he);let fe=k.index,De=1;if(G.wireframe===!0){if(fe=y.getWireframeAttribute(k),fe===void 0)return;De=2}const Ne=k.drawRange,we=k.attributes.position;let Ke=Ne.start*De,ut=(Ne.start+Ne.count)*De;te!==null&&(Ke=Math.max(Ke,te.start*De),ut=Math.min(ut,(te.start+te.count)*De)),fe!==null?(Ke=Math.max(Ke,0),ut=Math.min(ut,fe.count)):we!=null&&(Ke=Math.max(Ke,0),ut=Math.min(ut,we.count));const Mt=ut-Ke;if(Mt<0||Mt===1/0)return;le.setup(B,G,ge,k,fe);let gt,ft=ue;if(fe!==null&&(gt=w.get(fe),ft=Le,ft.setIndex(gt)),B.isMesh)G.wireframe===!0?(xe.setLineWidth(G.wireframeLinewidth*Ht()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(B.isLine){let Pe=G.linewidth;Pe===void 0&&(Pe=1),xe.setLineWidth(Pe*Ht()),B.isLineSegments?ft.setMode(D.LINES):B.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else B.isPoints?ft.setMode(D.POINTS):B.isSprite&&ft.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pe=B._multiDrawStarts,yt=B._multiDrawCounts,et=B._multiDrawCount,hn=fe?w.get(fe).bytesPerElement:1,$i=ye.get(G).currentProgram.getUniforms();for(let un=0;un<et;un++)$i.setValue(D,"_gl_DrawID",un),ft.render(Pe[un]/hn,yt[un])}else if(B.isInstancedMesh)ft.renderInstances(Ke,Mt,B.count);else if(k.isInstancedBufferGeometry){const Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,yt=Math.min(k.instanceCount,Pe);ft.renderInstances(Ke,Mt,yt)}else ft.render(Ke,Mt)};function dt(M,F,k){M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=kt,M.needsUpdate=!0,Tr(M,F,k),M.side=vi,M.needsUpdate=!0,Tr(M,F,k),M.side=mn):Tr(M,F,k)}this.compile=function(M,F,k=null){k===null&&(k=M),p=Te.get(k),p.init(F),T.push(p),k.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),M!==k&&M.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const G=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const te=B.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const ge=te[he];dt(ge,k,B),G.add(ge)}else dt(te,k,B),G.add(te)}),p=T.pop(),G},this.compileAsync=function(M,F,k=null){const G=this.compile(M,F,k);return new Promise(B=>{function te(){if(G.forEach(function(he){ye.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){B(M);return}setTimeout(te,10)}Be.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let st=null;function $n(M){st&&st(M)}function Fn(){yi.stop()}function xl(){yi.start()}const yi=new ku;yi.setAnimationLoop($n),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(M){st=M,ie.setAnimationLoop(M),M===null?yi.stop():yi.start()},ie.addEventListener("sessionstart",Fn),ie.addEventListener("sessionend",xl),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,F,R),p=Te.get(M,T.length),p.init(F),T.push(p),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),qe.setFromProjectionMatrix(K,Gn,F.reversedDepth),q=this.localClippingEnabled,Ye=re.init(this.clippingPlanes,q),m=X.get(M,E.length),m.init(),E.push(m),ie.enabled===!0&&ie.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&Xa(te,F,-1/0,v.sortObjects)}Xa(M,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Y,Q),Je=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Je&&Me.addToRenderList(m,M),this.info.render.frame++,Ye===!0&&re.beginShadows();const k=p.state.shadowsArray;Se.render(k,M,F),Ye===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const te=F.cameras;if(B.length>0)for(let he=0,ge=te.length;he<ge;he++){const fe=te[he];Sl(G,B,M,fe)}Je&&Me.render(M);for(let he=0,ge=te.length;he<ge;he++){const fe=te[he];yl(m,M,fe,fe.viewport)}}else B.length>0&&Sl(G,B,M,F),Je&&Me.render(M),yl(m,M,F);R!==null&&b===0&&(Ge.updateMultisampleRenderTarget(R),Ge.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(v,M,F),le.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(p=T[T.length-1],Ye===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Xa(M,F,k,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||qe.intersectsSprite(M)){G&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const he=z.update(M),ge=M.material;ge.visible&&m.push(M,he,ge,k,Ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||qe.intersectsObject(M))){const he=z.update(M),ge=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ce.copy(he.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(K)),Array.isArray(ge)){const fe=he.groups;for(let De=0,Ne=fe.length;De<Ne;De++){const we=fe[De],Ke=ge[we.materialIndex];Ke&&Ke.visible&&m.push(M,he,Ke,k,Ce.z,we)}}else ge.visible&&m.push(M,he,ge,k,Ce.z,null)}}const te=M.children;for(let he=0,ge=te.length;he<ge;he++)Xa(te[he],F,k,G)}function yl(M,F,k,G){const B=M.opaque,te=M.transmissive,he=M.transparent;p.setupLightsView(k),Ye===!0&&re.setGlobalState(v.clippingPlanes,k),G&&xe.viewport(P.copy(G)),B.length>0&&Er(B,F,k),te.length>0&&Er(te,F,k),he.length>0&&Er(he,F,k),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Sl(M,F,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Cn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Vn:Xn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const te=p.state.transmissionRenderTarget[G.id],he=G.viewport||P;te.setSize(he.z*v.transmissionResolutionScale,he.w*v.transmissionResolutionScale);const ge=v.getRenderTarget(),fe=v.getActiveCubeFace(),De=v.getActiveMipmapLevel();v.setRenderTarget(te),v.getClearColor(H),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Je&&Me.render(k);const Ne=v.toneMapping;v.toneMapping=mi;const we=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Ye===!0&&re.setGlobalState(v.clippingPlanes,G),Er(M,k,G),Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ut=0,Mt=F.length;ut<Mt;ut++){const gt=F[ut],ft=gt.object,Pe=gt.geometry,yt=gt.material,et=gt.group;if(yt.side===mn&&ft.layers.test(G.layers)){const hn=yt.side;yt.side=kt,yt.needsUpdate=!0,Ml(ft,k,G,Pe,yt,et),yt.side=hn,yt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te))}v.setRenderTarget(ge,fe,De),v.setClearColor(H,V),we!==void 0&&(G.viewport=we),v.toneMapping=Ne}function Er(M,F,k){const G=F.isScene===!0?F.overrideMaterial:null;for(let B=0,te=M.length;B<te;B++){const he=M[B],ge=he.object,fe=he.geometry,De=he.group;let Ne=he.material;Ne.allowOverride===!0&&G!==null&&(Ne=G),ge.layers.test(k.layers)&&Ml(ge,F,k,fe,Ne,De)}}function Ml(M,F,k,G,B,te){M.onBeforeRender(v,F,k,G,B,te),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(v,F,k,G,M,te),B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=kt,B.needsUpdate=!0,v.renderBufferDirect(k,F,G,B,M,te),B.side=vi,B.needsUpdate=!0,v.renderBufferDirect(k,F,G,B,M,te),B.side=mn):v.renderBufferDirect(k,F,G,B,M,te),M.onAfterRender(v,F,k,G,B,te)}function Tr(M,F,k){F.isScene!==!0&&(F=Ae);const G=ye.get(M),B=p.state.lights,te=p.state.shadowsArray,he=B.state.version,ge=$.getParameters(M,B.state,te,F,k),fe=$.getProgramCacheKey(ge);let De=G.programs;G.environment=M.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(M.isMeshStandardMaterial?Ct:Ut).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,De===void 0&&(M.addEventListener("dispose",j),De=new Map,G.programs=De);let Ne=De.get(fe);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===he)return Tl(M,ge),Ne}else ge.uniforms=$.getUniforms(M),M.onBeforeCompile(ge,v),Ne=$.acquireProgram(ge,fe),De.set(fe,Ne),G.uniforms=ge.uniforms;const we=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=re.uniform),Tl(M,ge),G.needsLights=Jf(M),G.lightsStateVersion=he,G.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.directionalShadowMap.value=B.state.directionalShadowMap,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotShadowMap.value=B.state.spotShadowMap,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMap.value=B.state.pointShadowMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function El(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=ha.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Tl(M,F){const k=ye.get(M);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function Kf(M,F,k,G,B){F.isScene!==!0&&(F=Ae),Ge.resetTextureUnits();const te=F.fog,he=G.isMeshStandardMaterial?F.environment:null,ge=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Cs,fe=(G.isMeshStandardMaterial?Ct:Ut).get(G.envMap||he),De=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,ut=!!k.morphAttributes.color;let Mt=mi;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const gt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ft=gt!==void 0?gt.length:0,Pe=ye.get(G),yt=p.state.lights;if(Ye===!0&&(q===!0||M!==x)){const Kt=M===x&&G.id===S;re.setState(G,M,Kt)}let et=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==yt.state.version||Pe.outputColorSpace!==ge||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==fe||G.fog===!0&&Pe.fog!==te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==De||Pe.vertexTangents!==Ne||Pe.morphTargets!==we||Pe.morphNormals!==Ke||Pe.morphColors!==ut||Pe.toneMapping!==Mt||Pe.morphTargetsCount!==ft)&&(et=!0):(et=!0,Pe.__version=G.version);let hn=Pe.currentProgram;et===!0&&(hn=Tr(G,F,B));let $i=!1,un=!1,Fs=!1;const St=hn.getUniforms(),Sn=Pe.uniforms;if(xe.useProgram(hn.program)&&($i=!0,un=!0,Fs=!0),G.id!==S&&(S=G.id,un=!0),$i||x!==M){xe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),St.setValue(D,"projectionMatrix",M.projectionMatrix),St.setValue(D,"viewMatrix",M.matrixWorldInverse);const rn=St.map.cameraPosition;rn!==void 0&&rn.setValue(D,de.setFromMatrixPosition(M.matrixWorld)),Ue.logarithmicDepthBuffer&&St.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&St.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,un=!0,Fs=!0)}if(B.isSkinnedMesh){St.setOptional(D,B,"bindMatrix"),St.setOptional(D,B,"bindMatrixInverse");const Kt=B.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),St.setValue(D,"boneTexture",Kt.boneTexture,Ge))}B.isBatchedMesh&&(St.setOptional(D,B,"batchingTexture"),St.setValue(D,"batchingTexture",B._matricesTexture,Ge),St.setOptional(D,B,"batchingIdTexture"),St.setValue(D,"batchingIdTexture",B._indirectTexture,Ge),St.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&St.setValue(D,"batchingColorTexture",B._colorsTexture,Ge));const Mn=k.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&ne.update(B,k,hn),(un||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,St.setValue(D,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Sn.envMap.value=fe,Sn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Sn.envMapIntensity.value=F.environmentIntensity),un&&(St.setValue(D,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&Zf(Sn,Fs),te&&G.fog===!0&&J.refreshFogUniforms(Sn,te),J.refreshMaterialUniforms(Sn,G,N,Z,p.state.transmissionRenderTarget[M.id]),ha.upload(D,El(Pe),Sn,Ge)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ha.upload(D,El(Pe),Sn,Ge),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&St.setValue(D,"center",B.center),St.setValue(D,"modelViewMatrix",B.modelViewMatrix),St.setValue(D,"normalMatrix",B.normalMatrix),St.setValue(D,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Kt=G.uniformsGroups;for(let rn=0,$a=Kt.length;rn<$a;rn++){const Si=Kt[rn];ke.update(Si,hn),ke.bind(Si,hn)}}return hn}function Zf(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Jf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,F,k){const G=ye.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=F,ye.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const k=ye.get(M);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const Qf=D.createFramebuffer();this.setRenderTarget=function(M,F=0,k=0){R=M,C=F,b=k;let G=!0,B=null,te=!1,he=!1;if(M){const fe=ye.get(M);if(fe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(fe.__webglFramebuffer===void 0)Ge.setupRenderTarget(M);else if(fe.__hasExternalTextures)Ge.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const we=M.depthTexture;if(fe.__boundDepthTexture!==we){if(we!==null&&ye.has(we)&&(M.width!==we.image.width||M.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(M)}}const De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(he=!0);const Ne=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?B=Ne[F][k]:B=Ne[F],te=!0):M.samples>0&&Ge.useMultisampledRTT(M)===!1?B=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[k]:B=Ne,P.copy(M.viewport),L.copy(M.scissor),O=M.scissorTest}else P.copy(ae).multiplyScalar(N).floor(),L.copy(be).multiplyScalar(N).floor(),O=$e;if(k!==0&&(B=Qf),xe.bindFramebuffer(D.FRAMEBUFFER,B)&&G&&xe.drawBuffers(M,B),xe.viewport(P),xe.scissor(L),xe.setScissorTest(O),te){const fe=ye.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,k)}else if(he){const fe=F;for(let De=0;De<M.textures.length;De++){const Ne=ye.get(M.textures[De]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+De,Ne.__webglTexture,k,fe)}}else if(M!==null&&k!==0){const fe=ye.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(M,F,k,G,B,te,he,ge=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe){xe.bindFramebuffer(D.FRAMEBUFFER,fe);try{const De=M.textures[ge],Ne=De.format,we=De.type;if(!Ue.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&k>=0&&k<=M.height-B&&(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),D.readPixels(F,k,G,B,Ee.convert(Ne),Ee.convert(we),te))}finally{const De=R!==null?ye.get(R).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,F,k,G,B,te,he,ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe)if(F>=0&&F<=M.width-G&&k>=0&&k<=M.height-B){xe.bindFramebuffer(D.FRAMEBUFFER,fe);const De=M.textures[ge],Ne=De.format,we=De.type;if(!Ue.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),D.readPixels(F,k,G,B,Ee.convert(Ne),Ee.convert(we),0);const ut=R!==null?ye.get(R).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,ut);const Mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await tp(D,Mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te),D.deleteBuffer(Ke),D.deleteSync(Mt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,k=0){const G=Math.pow(2,-k),B=Math.floor(M.image.width*G),te=Math.floor(M.image.height*G),he=F!==null?F.x:0,ge=F!==null?F.y:0;Ge.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,he,ge,B,te),xe.unbindTexture()};const ed=D.createFramebuffer(),td=D.createFramebuffer();this.copyTextureToTexture=function(M,F,k=null,G=null,B=0,te=null){te===null&&(B!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=B,B=0):te=0);let he,ge,fe,De,Ne,we,Ke,ut,Mt;const gt=M.isCompressedTexture?M.mipmaps[te]:M.image;if(k!==null)he=k.max.x-k.min.x,ge=k.max.y-k.min.y,fe=k.isBox3?k.max.z-k.min.z:1,De=k.min.x,Ne=k.min.y,we=k.isBox3?k.min.z:0;else{const Mn=Math.pow(2,-B);he=Math.floor(gt.width*Mn),ge=Math.floor(gt.height*Mn),M.isDataArrayTexture?fe=gt.depth:M.isData3DTexture?fe=Math.floor(gt.depth*Mn):fe=1,De=0,Ne=0,we=0}G!==null?(Ke=G.x,ut=G.y,Mt=G.z):(Ke=0,ut=0,Mt=0);const ft=Ee.convert(F.format),Pe=Ee.convert(F.type);let yt;F.isData3DTexture?(Ge.setTexture3D(F,0),yt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ge.setTexture2DArray(F,0),yt=D.TEXTURE_2D_ARRAY):(Ge.setTexture2D(F,0),yt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const et=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$i=D.getParameter(D.UNPACK_SKIP_PIXELS),un=D.getParameter(D.UNPACK_SKIP_ROWS),Fs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we);const St=M.isDataArrayTexture||M.isData3DTexture,Sn=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Mn=ye.get(M),Kt=ye.get(F),rn=ye.get(Mn.__renderTarget),$a=ye.get(Kt.__renderTarget);xe.bindFramebuffer(D.READ_FRAMEBUFFER,rn.__webglFramebuffer),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,$a.__webglFramebuffer);for(let Si=0;Si<fe;Si++)St&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,B,we+Si),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,te,Mt+Si)),D.blitFramebuffer(De,Ne,he,ge,Ke,ut,he,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||ye.has(M)){const Mn=ye.get(M),Kt=ye.get(F);xe.bindFramebuffer(D.READ_FRAMEBUFFER,ed),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,td);for(let rn=0;rn<fe;rn++)St?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mn.__webglTexture,B,we+rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mn.__webglTexture,B),Sn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,te,Mt+rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,te),B!==0?D.blitFramebuffer(De,Ne,he,ge,Ke,ut,he,ge,D.COLOR_BUFFER_BIT,D.NEAREST):Sn?D.copyTexSubImage3D(yt,te,Ke,ut,Mt+rn,De,Ne,he,ge):D.copyTexSubImage2D(yt,te,Ke,ut,De,Ne,he,ge);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Sn?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(yt,te,Ke,ut,Mt,he,ge,fe,ft,Pe,gt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(yt,te,Ke,ut,Mt,he,ge,fe,ft,gt.data):D.texSubImage3D(yt,te,Ke,ut,Mt,he,ge,fe,ft,Pe,gt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,te,Ke,ut,he,ge,ft,Pe,gt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,te,Ke,ut,gt.width,gt.height,ft,gt.data):D.texSubImage2D(D.TEXTURE_2D,te,Ke,ut,he,ge,ft,Pe,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$i),D.pixelStorei(D.UNPACK_SKIP_ROWS,un),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fs),te===0&&F.generateMipmaps&&D.generateMipmap(yt),xe.unbindTexture()},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&Ge.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ge.setTextureCube(M,0):M.isData3DTexture?Ge.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ge.setTexture2DArray(M,0):Ge.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){C=0,b=0,R=null,xe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const ze={HALF_LENGTH:6.7,LENGTH:13.4,HALF_WIDTH_SINGLES:2.59,HALF_WIDTH_DOUBLES:3.05,SHORT_SERVICE_LINE:1.98,LONG_SERVICE_INSET:.76,NET_HEIGHT_CENTER:1.524,NET_HEIGHT_POST:1.55,NET_DEPTH:.76,LINE_WIDTH:.04,RUNOFF:2.3,SIDEOFF:2.1},Tt={GRAVITY:9.81,TERMINAL_VELOCITY:6.8,get DRAG_K(){return this.GRAVITY/(this.TERMINAL_VELOCITY*this.TERMINAL_VELOCITY)},SUBSTEP:1/480,RADIUS:.033},it={REACH_RADIUS:1.15,REACH_HIGH:2.95,REACH_LOW:.05,SWEET_SPOT:.45,CHARGE_TIME:.55,CHARGE_MIN:.18,SWING_COOLDOWN:.28,MISS_PENALTY_SCALE:.9,SMASH_MIN_HEIGHT:1.95,SMASH_MIN_CHARGE:.55,NET_LIFT_HEIGHT:1.05},an={SPEED:5.4,ACCEL:34,FRICTION:24,CHARGE_SPEED_SCALE:.52,BOUNDS_X:4.3,BOUNDS_Z_MIN:.35,BOUNDS_Z_MAX:7.6},wi={POINTS_TO_WIN:11,WIN_BY:2,HARD_CAP:15,SERVE_HEIGHT:1.05,SERVE_DELAY:.9},Zr={DEPTH_Z:[1.35,3.5,5.9],LANE_X:[-1.75,0,1.75]},tt={BASE_SPEED:9.5,MAX_SPEED:23,ACCEL:.32,TUCK_BONUS:4.5,TRICK_BOOST:2.6,STEER:7.8,WIDTH:5,HOP_V:4.8,RAMP_V:8.6,FLIP_RATE:Math.PI*1.9,MIN_FLIP_TURNS:.75,STUMBLE_SLOW:.52,STUMBLE_TIME:1.5,AVAL_GAP0:45,AVAL_SPEED0:8.2,AVAL_ACCEL:.26,TRICK_WINDOW:4.5,SEG_LEN:20,SPAWN_Z:-150,KILL_Z:12},$s={smash:{elevation:-14,name:"杀球"},drive:{elevation:6,name:"平抽"},drop:{elevation:18,name:"吊球"},clear:{elevation:42,name:"高远"},lift:{elevation:56,name:"挑球"},serve:{elevation:34,name:"发球"}},Dh={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},Ih={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]},Jr=["Space","KeyJ","KeyF"],Qr=["Enter","Numpad0","ShiftRight","Slash"];class Rv{constructor(e=window){this.down=new Set,this.pressed=new Set,this.released=new Set,this._onKeyDown=t=>{t.repeat||((Jr.includes(t.code)||Qr.includes(t.code)||t.code in Dh||t.code in Ih)&&t.preventDefault(),this.down.add(t.code),this.pressed.add(t.code))},this._onKeyUp=t=>{this.down.delete(t.code),this.released.add(t.code)},this._onBlur=()=>{this.down.clear(),this._cancelled=!0},this._cancelled=!1,e.addEventListener("keydown",this._onKeyDown),e.addEventListener("keyup",this._onKeyUp),e.addEventListener("blur",this._onBlur),this._target=e}dispose(){this._target.removeEventListener("keydown",this._onKeyDown),this._target.removeEventListener("keyup",this._onKeyUp),this._target.removeEventListener("blur",this._onBlur)}endFrame(){this.pressed.clear(),this.released.clear()}consumeCancel(){const e=this._cancelled;return this._cancelled=!1,e}aimDir(e=0){return this.move(e)}isDown(e){return this.down.has(e)}wasPressed(e){return this.pressed.has(e)}move(e){const t=e===0?Dh:Ih;let n=0,s=0;for(const a in t)this.down.has(a)&&(n+=t[a][0],s+=t[a][1]);const r=Math.hypot(n,s);return r>1?{x:n/r,z:s/r}:{x:n,z:s}}hitHeld(e){return(e===0?Jr:Qr).some(n=>this.down.has(n))}hitPressed(e){return(e===0?Jr:Qr).some(n=>this.pressed.has(n))}hitReleased(e){return(e===0?Jr:Qr).some(n=>this.released.has(n))&&!this.hitHeld(e)}anyPressed(){return this.pressed.size>0}}class Lh{constructor(){this.dir={x:0,z:0},this.held=!1,this.errorBias={x:0,z:0},this._prevHeld=!1,this._pressedFlag=!1,this._releasedFlag=!1}set(e,t){this.dir=e,this._pressedFlag=t&&!this._prevHeld,this._releasedFlag=!t&&this._prevHeld,this._prevHeld=this.held=t}move(){return this.dir}aimDir(){return this.dir}hitHeld(){return this.held}hitPressed(){return this._pressedFlag}hitReleased(){return this._releasedFlag}consumeCancel(){return!1}endFrame(){this._pressedFlag=!1,this._releasedFlag=!1}}const Ao=.16,cs=62,wv=.3;class Pv{constructor(e){this.surface=e,this.enabled=!1,this.stickId=null,this.stickOrigin={x:0,y:0},this.dir={x:0,z:0},this.rawDir={x:0,z:0},this.aimSnapshot={x:0,z:0},this.glow=0,this.hitId=null,this.held=!1,this.swipeStart=null,this.aimSwipe=null,this._pendingPress=!1,this._pendingRelease=!1,this._pressedFlag=!1,this._releasedFlag=!1,this._buildUi(),this._onDown=t=>this._pointerDown(t),this._onMove=t=>this._pointerMove(t),this._onUp=t=>this._pointerUp(t),e.addEventListener("pointerdown",this._onDown),e.addEventListener("pointermove",this._onMove),e.addEventListener("pointerup",this._onUp),e.addEventListener("pointercancel",this._onUp),addEventListener("blur",()=>this._releaseAll(!0)),document.addEventListener("visibilitychange",()=>{document.hidden&&this._releaseAll(!0)})}_buildUi(){const e=document.createElement("div");e.id="touch-ui",e.innerHTML=`
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
      </div>`,document.body.appendChild(e),this.ui={root:e,stick:e.querySelector(".tc-stick"),knob:e.querySelector(".tc-stick-knob"),hit:e.querySelector(".tc-hit"),ring:e.querySelector(".tc-ring-fill"),hint:e.querySelector(".tc-hint")};const t=44;this._ringLen=2*Math.PI*t,this.ui.ring.style.strokeDasharray=String(this._ringLen),this.ui.ring.style.strokeDashoffset=String(this._ringLen)}setEnabled(e){this.enabled=e,this.ui.root.classList.toggle("active",e),e||this._releaseAll()}setStickEnabled(e){this.stickEnabled=e,this.ui.root.classList.toggle("no-stick",!e),!e&&this.stickId!==null&&(this.stickId=null,this.rawDir={x:0,z:0},this.ui.stick.hidden=!0)}fadeHint(){this.ui.hint.classList.add("gone")}_releaseAll(e=!1){this.stickId=null,this.hitId=null,this.rawDir={x:0,z:0},this.held&&(e?this._cancelled=!0:this._pendingRelease=!0),this.held=!1,this.swipeStart=null,this.aimSwipe=null,this.ui.stick.hidden=!0,this.ui.hit.classList.remove("down","aiming")}consumeCancel(){const e=this._cancelled;return this._cancelled=!1,e}_pointerDown(e){if(!this.enabled)return;e.preventDefault();const t=this.stickEnabled!==!1&&e.clientX<innerWidth*.5;if(t&&this.stickId===null){this.stickId=e.pointerId,this.stickOrigin={x:e.clientX,y:e.clientY},this.ui.stick.hidden=!1,this.ui.stick.style.left=`${e.clientX}px`,this.ui.stick.style.top=`${e.clientY}px`,this.ui.knob.style.transform="translate(-50%, -50%)";try{this.surface.setPointerCapture(e.pointerId)}catch{}}else if(!t&&this.hitId===null){this.hitId=e.pointerId,this.held=!0,this._pendingPress=!0,this.aimSnapshot=this.rawDir.x||this.rawDir.z?{...this.rawDir}:{...this.dir},this.swipeStart={x:e.clientX,y:e.clientY},this.aimSwipe=null,this.ui.hit.classList.add("down");try{this.surface.setPointerCapture(e.pointerId)}catch{}}}_pointerMove(e){if(!this.enabled)return;if(e.pointerId===this.hitId&&this.swipeStart){e.preventDefault();const c=e.clientX-this.swipeStart.x,l=e.clientY-this.swipeStart.y,h=Math.hypot(c,l);h>26&&(this.aimSwipe={x:c/h,z:l/h},this.ui.hit.style.setProperty("--aim",`${Math.atan2(l,c)}rad`),this.ui.hit.classList.add("aiming"));return}if(e.pointerId!==this.stickId)return;e.preventDefault();let t=e.clientX-this.stickOrigin.x,n=e.clientY-this.stickOrigin.y;const s=Math.hypot(t,n);if(s>cs){const c=s-cs;this.stickOrigin.x+=t/s*c,this.stickOrigin.y+=n/s*c,this.ui.stick.style.left=`${this.stickOrigin.x}px`,this.ui.stick.style.top=`${this.stickOrigin.y}px`,t=t/s*cs,n=n/s*cs}this.ui.knob.style.transform=`translate(calc(-50% + ${t}px), calc(-50% + ${n}px))`;const r=t/cs,a=n/cs,o=Math.hypot(r,a);if(o<Ao)this.rawDir={x:0,z:0};else{const c=Math.min(1,(o-Ao)/(1-Ao));this.rawDir={x:r/o*c,z:a/o*c}}}_pointerUp(e){e.pointerId===this.stickId?(this.stickId=null,this.rawDir={x:0,z:0},this.ui.stick.hidden=!0):e.pointerId===this.hitId&&(this.hitId=null,this.held=!1,this._pendingRelease=!0,this.swipeStart=null,this.ui.hit.classList.remove("down"),this.ui.hit.classList.remove("aiming"))}update(e,t=0){this.rawDir.x||this.rawDir.z?(this.dir={...this.rawDir},this.glow=wv):this.glow>0&&(this.glow-=e,this.glow<=0&&(this.dir={x:0,z:0})),this.ui.ring.style.strokeDashoffset=String(this._ringLen*(1-t))}move(){return{...this.rawDir}}aimDir(){return this.aimSwipe?{...this.aimSwipe}:this.rawDir.x||this.rawDir.z?{...this.rawDir}:{...this.aimSnapshot}}hitHeld(){return this.held}hitPressed(){return this._pressedFlag}hitReleased(){return this._releasedFlag}beginFrame(){this._pressedFlag=this._pendingPress,this._releasedFlag=this._pendingRelease}endFrame(){this._pendingPress=!1,this._pendingRelease=!1,this._pressedFlag=!1,this._releasedFlag=!1}}function Dv(){return matchMedia("(pointer: coarse)").matches||matchMedia("(hover: none)").matches&&navigator.maxTouchPoints>0}class Iv{constructor(){this.ctx=null,this.master=null,this.enabled=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e){this.enabled=!1;return}this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination)}setEnabled(e){this.enabled=e,this.master&&(this.master.gain.value=e?.55:0)}_noiseBuffer(e){const t=Math.max(1,Math.floor(this.ctx.sampleRate*e)),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}_burst({duration:e=.08,freq:t=2400,q:n=1.2,gain:s=.5,type:r="bandpass",decay:a=.05}){if(!this.ctx||!this.enabled)return;const o=this.ctx.currentTime,c=this.ctx.createBufferSource();c.buffer=this._noiseBuffer(e);const l=this.ctx.createBiquadFilter();l.type=r,l.frequency.setValueAtTime(t,o),l.frequency.exponentialRampToValueAtTime(Math.max(120,t*.35),o+a),l.Q.value=n;const h=this.ctx.createGain();h.gain.setValueAtTime(s,o),h.gain.exponentialRampToValueAtTime(1e-4,o+e),c.connect(l),l.connect(h),h.connect(this.master),c.start(o),c.stop(o+e+.02)}_tone({freq:e=880,duration:t=.18,gain:n=.22,type:s="sine",slideTo:r=null}){if(!this.ctx||!this.enabled)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator();o.type=s,o.frequency.setValueAtTime(e,a),r&&o.frequency.exponentialRampToValueAtTime(r,a+t);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(n,a+.012),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c),c.connect(this.master),o.start(a),o.stop(a+t+.02)}hit(e,t=.5,n=30){const s=Math.min(1,n/90);e==="smash"?(this._burst({duration:.1,freq:3600,q:.8,gain:.62,decay:.045}),this._burst({duration:.16,freq:320,q:1.6,gain:.3,decay:.1}),this._tone({freq:180,slideTo:70,duration:.14,gain:.14,type:"triangle"})):e==="drop"||e==="serve"?this._burst({duration:.055,freq:1500+s*900,q:1.4,gain:.26,decay:.035}):e==="lift"?this._burst({duration:.075,freq:1900+s*1200,q:1.1,gain:.36,decay:.04}):this._burst({duration:.075,freq:2100+s*1600,q:1,gain:.3+s*.28,decay:.04})}whiff(){this._burst({duration:.16,freq:900,q:.6,gain:.13,type:"bandpass",decay:.14})}land(e){this._burst({duration:.09,freq:700,q:1,gain:.3,decay:.06}),e||this._tone({freq:320,slideTo:210,duration:.22,gain:.16,type:"square"})}netHit(){this._burst({duration:.13,freq:420,q:2.2,gain:.28,decay:.1})}point(e){const t=e?660:520;this._tone({freq:t,duration:.12,gain:.18,type:"triangle"}),setTimeout(()=>this._tone({freq:t*1.5,duration:.2,gain:.16,type:"triangle"}),105)}crowd(e=.6){if(!this.ctx||!this.enabled)return;const t=this.ctx.currentTime,n=.9+e*.8,s=this.ctx.createBufferSource();s.buffer=this._noiseBuffer(n);const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(600,t),r.frequency.linearRampToValueAtTime(1100,t+n*.3),r.Q.value=.7;const a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.1+e*.16,t+.18),a.gain.exponentialRampToValueAtTime(1e-4,t+n),s.connect(r),r.connect(a),a.connect(this.master),s.start(t),s.stop(t+n)}fanfare(){[523,659,784,1047].forEach((t,n)=>setTimeout(()=>this._tone({freq:t,duration:n===3?.5:.16,gain:.18,type:"triangle"}),n*130)),setTimeout(()=>this.crowd(1),200)}}const Lv=Math.PI/180;function ea(i,e,t,n){const s=Math.hypot(i,e,t),r=Tt.DRAG_K*s;return n.x=-r*i,n.y=-r*e-Tt.GRAVITY,n.z=-r*t,n}const Wt={x:0,y:0,z:0};function Uv(i,e){const{x:t,y:n,z:s,vx:r,vy:a,vz:o}=i;ea(r,a,o,Wt);const c=Wt.x,l=Wt.y,h=Wt.z,u=r,f=a,d=o;ea(r+c*e/2,a+l*e/2,o+h*e/2,Wt);const g=Wt.x,_=Wt.y,m=Wt.z,p=r+c*e/2,E=a+l*e/2,T=o+h*e/2;ea(r+g*e/2,a+_*e/2,o+m*e/2,Wt);const v=Wt.x,A=Wt.y,C=Wt.z,b=r+g*e/2,R=a+_*e/2,S=o+m*e/2;ea(r+v*e,a+A*e,o+C*e,Wt);const x=Wt.x,P=Wt.y,L=Wt.z,O=r+v*e,H=a+A*e,V=o+C*e;return i.x=t+e/6*(u+2*p+2*b+O),i.y=n+e/6*(f+2*E+2*R+H),i.z=s+e/6*(d+2*T+2*S+V),i.vx=r+e/6*(c+2*g+2*v+x),i.vy=a+e/6*(l+2*_+2*A+P),i.vz=o+e/6*(h+2*m+2*C+L),i}function Us(i,e){let t=e;for(;t>1e-9;){const n=Math.min(Tt.SUBSTEP,t);Uv(i,n),t-=n}return i}function dr(i,e,t={}){const n=t.groundY??0,s=t.maxTime??8,r=t.dt??Tt.SUBSTEP*4,a=t.samples===!0,o={x:i.x,y:i.y,z:i.z,vx:e.x,vy:e.y,vz:e.z};let c=0,l=o.y,h=null,u=null;const f=a?[{t:0,x:o.x,y:o.y,z:o.z}]:null;for(;c<s;){const d=o.y,g=o.z,_=o.x;if(Us(o,r),c+=r,o.y>l&&(l=o.y),h===null&&g*o.z<=0&&g!==o.z){const m=g/(g-o.z);h=d+(o.y-d)*m,u=_+(o.x-_)*m}if(a&&f.push({t:c,x:o.x,y:o.y,z:o.z}),o.y<=n&&o.vy<0){const m=(d-n)/(d-o.y);return{landing:{x:_+(o.x-_)*m,z:g+(o.z-g)*m},flightTime:c-r+r*m,apex:l,netY:h,netX:u,samples:f,grounded:!0}}}return{landing:{x:o.x,z:o.z},flightTime:c,apex:l,netY:h,netX:typeof u=="number"?u:null,samples:f,grounded:!1}}function Ca(i,e,t,n){const s=Math.hypot(e,t)||1,r=e/s,a=t/s,o=n*Lv,c=i*Math.cos(o);return{x:r*c,y:i*Math.sin(o),z:a*c}}function Nv(i,e,t,n={}){const s=n.groundY??0,r=e.x-i.x,a=e.z-i.z,o=Math.hypot(r,a);if(o<1e-4)return null;const c=u=>{const f=Ca(u,r,a,t),d=dr(i,f,{groundY:s,dt:Tt.SUBSTEP*6,maxTime:6});return Math.hypot(d.landing.x-i.x,d.landing.z-i.z)};let l=1,h=120;if(c(h)<o||c(l)>o)return null;for(let u=0;u<26;u++){const f=(l+h)/2;c(f)<o?l=f:h=f}return(l+h)/2}function Fv(i,e,t,n={}){const s=n.groundY??0,r=n.minElevation??-80,a=n.maxElevation??45,o=e.x-i.x,c=e.z-i.z,l=Math.hypot(o,c);if(l<1e-4)return{tooFast:!0};const h=m=>{const p=Ca(t,o,c,m),E=dr(i,p,{groundY:s,dt:Tt.SUBSTEP*6,maxTime:6});return Math.hypot(E.landing.x-i.x,E.landing.z-i.z)};if(h(a)<l)return{tooSlow:!0};if(h(r)>l)return{tooFast:!0};let u=r,f=a;for(let m=0;m<24;m++){const p=(u+f)/2;h(p)<l?u=p:f=p}const d=(u+f)/2,g=Ca(t,o,c,d),_=dr(i,g,{groundY:s,dt:Tt.SUBSTEP*4});return{velocity:g,elevation:d,speed:t,result:_}}function Ov(i,e,t,n={}){const s=n.netHeight??1.524,r=n.netClearance??.04;let a=t;for(let o=0;o<9;o++){const c=Fv(i,e,a,n);if(c.tooSlow){a*=1.25;continue}if(c.tooFast){a*=.82;continue}if(c.result.netY===null||c.result.netY>s+r)return c;a*=.88}return null}function ua(i,e,t,n={}){const s=n.netClearance??.06,r=n.netHeight??1.524,a=n.groundY??0,o=n.needNet!==!1,c=n.maxElevation??70;let l=t;for(let h=0;h<10;h++){const u=Nv(i,e,l,{groundY:a});if(u!==null){const f=Ca(u,e.x-i.x,e.z-i.z,l),d=dr(i,f,{groundY:a,dt:Tt.SUBSTEP*4});if(!o||d.netY===null||d.netY>r+s)return{velocity:f,elevation:l,speed:u,result:d}}if(l+=7,l>c)break}return null}function Bv(i,e,t,n,s,r,a,o,c){const l=n-i,h=s-e,u=r-t,f=l*l+h*h+u*u;if(f<1e-12)return 0;const d=((a-i)*l+(o-e)*h+(c-t)*u)/f;return Math.max(0,Math.min(1,d))}class Uh{constructor(e,t){this.index=e,this.side=t,this.x=0,this.z=t*3.2,this.vx=0,this.vz=0,this.charge=0,this.charging=!1,this.cooldown=0,this.swing=null,this.lastShotName="",this.reachFlash=0}reset(e,t){this.x=e,this.z=t,this.vx=this.vz=0,this.charge=0,this.charging=!1,this.cooldown=0,this.swing=null}get speedRatio(){return Math.min(1,Math.hypot(this.vx,this.vz)/an.SPEED)}get reachCenterY(){return 1.3}update(e,t,n,s={}){var g,_,m;const r=t.move(this.index),a=t.hitHeld(this.index),o=t.hitReleased(this.index);(g=t.consumeCancel)!=null&&g.call(t)&&(this.charging=!1,this.charge=0,this.swing&&!this.swing.playing&&(this.swing=null));const c=this.charging?an.CHARGE_SPEED_SCALE:1,l=r.x*an.SPEED*c,h=r.z*an.SPEED*c,u=r.x||r.z?an.ACCEL:an.FRICTION;this.vx+=(l-this.vx)*Math.min(1,u*e/an.SPEED),this.vz+=(h-this.vz)*Math.min(1,u*e/an.SPEED),this.x+=this.vx*e,this.z+=this.vz*e,this.x=Math.max(-4.3,Math.min(an.BOUNDS_X,this.x));const f=this.side>0?an.BOUNDS_Z_MIN:-7.6,d=this.side>0?an.BOUNDS_Z_MAX:-.35;if(this.z=Math.max(f,Math.min(d,this.z)),this.cooldown>0&&(this.cooldown-=e),this.reachFlash=Math.max(0,this.reachFlash-e*3),(_=this.swing)!=null&&_.playing&&(this.swing.phase+=e/.3,this.swing.phase>=1&&(this.swing=null)),this.cooldown<=0&&a&&!((m=this.swing)!=null&&m.playing)){this.charging=!0,this.charge=Math.min(1,this.charge+e/it.CHARGE_TIME);const p=this._predictStyle(n);this.swing={type:p,phase:.04+this.charge*.3,playing:!1}}else a||(this.charging=!1);if(o&&this.cooldown<=0){const p=Math.max(it.CHARGE_MIN,this.charge),E=t.aimDir?t.aimDir():r,T=t.errorBias?{...s,errorBias:t.errorBias}:s,v=n&&n.alive?this._tryHit(n,p,E,T):null;return this.charging=!1,this.charge=0,this.swing?this.swing.playing=!0:this.swing={type:"drive",phase:.3,playing:!0},v||(this.cooldown=it.SWING_COOLDOWN),v}return null}_predictStyle(e){return!e||!e.alive||Math.hypot(e.x-this.x,e.z-this.z)>3.5||e.y>=it.SMASH_MIN_HEIGHT?"overhead":e.y<=it.NET_LIFT_HEIGHT?"low":"drive"}_findContact(e){const t=this.x,n=this.reachCenterY,s=this.z,r=Bv(e.px,e.py,e.pz,e.x,e.y,e.z,t,n,s),a=e.px+(e.x-e.px)*r,o=e.py+(e.y-e.py)*r,c=e.pz+(e.z-e.pz)*r,l=Math.hypot(a-t,c-s),h=o>=it.REACH_LOW&&o<=it.REACH_HIGH,u=this.side*c>-.25;return l<=it.REACH_RADIUS&&h&&u?{x:a,y:o,z:c,horiz:l}:null}_tryHit(e,t,n,s){const r=this._findContact(e);if(!r)return null;const a=-this.side,o=n.z*a,c=o>.35?2:o<-.35?0:1,l=n.x>.35?2:n.x<-.35?0:1,h=r.y>=it.SMASH_MIN_HEIGHT,u=r.y<=it.NET_LIFT_HEIGHT;let f;s.isServe?f="serve":u?f=c===0?"drop":"lift":h&&t>=it.SMASH_MIN_CHARGE&&c!==0?f="smash":c===0?f="drop":c===2?f=t>.6?"clear":"drive":f="drive",u&&f==="drop"&&r.y<.7&&(f="lift");const d=Zr.DEPTH_Z[c]*-this.side,g=(t-.5)*(c===0?.5:1.5)*-this.side,_=Math.max(0,r.horiz-it.SWEET_SPOT)*it.MISS_PENALTY_SCALE,m=(Math.random()-.5)*2*_,p=(Math.random()-.5)*2*_*1.4,E=s.errorBias??{x:0,z:0},T=E.x!==0||E.z!==0;let v={x:Zr.LANE_X[l]+m+E.x,z:d+g+p+E.z};if(!T){const R=ze.HALF_LENGTH-.25;v.z=Math.max(-R,Math.min(R,v.z)),v.x=Math.max(-2.59+.15,Math.min(ze.HALF_WIDTH_SINGLES-.15,v.x))}const A={x:r.x,y:r.y,z:r.z},C={netHeight:ze.NET_HEIGHT_CENTER,netClearance:.05};let b=null;if(f==="smash"){const R=52+t*52;b=Ov(A,v,R,C)}return b||(b=ua(A,v,$s[f].elevation,C)),b||(b=ua(A,{x:0,z:-this.side*5.4},$s.clear.elevation,C)),b?(this.lastShotName=$s[f].name,this.reachFlash=1,{hitter:this.index,style:f,styleName:$s[f].name,charge:t,quality:1-Math.min(1,r.horiz/it.REACH_RADIUS),from:A,aim:{x:n.x,z:n.z},target:{x:v.x,z:v.z},velocity:b.velocity,predicted:b.result}):null}serve(e,t){const n=-this.side,s=e.z*n,r=s>.35?2:s<-.35?0:1,a=e.x>.35?2:e.x<-.35?0:1,o={x:this.x+.35*(this.side>0?-1:1),y:wi.SERVE_HEIGHT,z:this.z},c={x:Zr.LANE_X[a]*.85,z:Zr.DEPTH_Z[r]*(.65+t*.55)*-this.side},l=ze.HALF_LENGTH-.4;c.z=Math.max(-l,Math.min(l,c.z));const h=ua(o,c,$s.serve.elevation,{netHeight:ze.NET_HEIGHT_CENTER,netClearance:.1});return h?(this.lastShotName="发球",{hitter:this.index,style:"serve",styleName:"发球",charge:t,quality:1,from:o,velocity:h.velocity,predicted:h.result}):null}animState(){return{speedRatio:this.speedRatio,crouch:this.charging?.62:.3+this.speedRatio*.12,swing:this.swing,lunge:0}}}const Et={READY:"ready",SERVE:"serve",RALLY:"rally",POINT:"point",GAMEOVER:"gameover"};function zv(i){const e=Math.min(1,Math.abs(i)/ze.HALF_WIDTH_DOUBLES);return ze.NET_HEIGHT_CENTER+(ze.NET_HEIGHT_POST-ze.NET_HEIGHT_CENTER)*e*e}class kv{constructor(e){this.players=e,this.ball={x:0,y:1.2,z:3,vx:0,vy:0,vz:0,px:0,py:1.2,pz:3,alive:!1},this.score=[0,0],this.server=0,this.phase=Et.READY,this.phaseTimer=0,this.lastHitter=-1,this.rallyHits=0,this.longestRally=0,this.events=[],this.lastLanding=null,this.rallyHistory=[],this.pointReason="",this.pointWinner=-1,this.winner=-1,this.maxRallySpeed=0,this.matchMaxSpeed=0,this.targetPoints=wi.POINTS_TO_WIN}emit(e){this.events.push(e)}drainEvents(){const e=this.events;return this.events=[],e}servePositions(){const e=this.server,t=this.players[e],n=this.players[1-e],s=this.score[e]%2===0,r=t.side>0?1:-1,a=s?r:-r;return{server:{x:a*1.15,z:t.side*2.55},receiver:{x:-a*1.25,z:n.side*3.7}}}startMatch(e=wi.POINTS_TO_WIN){this.score=[0,0],this.server=0,this.winner=-1,this.longestRally=0,this.matchMaxSpeed=0,this.rallyHistory=[],this.targetPoints=e,this.toServe()}toServe(){const e=this.servePositions();this.players[this.server].reset(e.server.x,e.server.z),this.players[1-this.server].reset(e.receiver.x,e.receiver.z),this.phase=Et.SERVE,this.phaseTimer=wi.SERVE_DELAY,this.lastHitter=-1,this.rallyHits=0,this.maxRallySpeed=0,this.ball.alive=!1,this.lastLanding=null,this._placeServeBall(),this.emit({type:"serve-ready",server:this.server})}_placeServeBall(){const e=this.players[this.server],t=this.ball;t.x=e.x+(e.side>0?-.34:.34),t.y=wi.SERVE_HEIGHT,t.z=e.z-e.side*.12,t.px=t.x,t.py=t.y,t.pz=t.z,t.vx=t.vy=t.vz=0}applyShot(e){const t=this.ball;t.x=e.from.x,t.y=e.from.y,t.z=e.from.z,t.px=t.x,t.py=t.y,t.pz=t.z,t.vx=e.velocity.x,t.vy=e.velocity.y,t.vz=e.velocity.z,t.alive=!0,this.lastHitter=e.hitter,this.rallyHits++,this.phase=Et.RALLY;const n=Math.hypot(t.vx,t.vy,t.vz);this.maxRallySpeed=Math.max(this.maxRallySpeed,n),this.matchMaxSpeed=Math.max(this.matchMaxSpeed,n),this.emit({type:"hit",shot:e,speed:n})}_stepBall(e){const t=this.ball;t.px=t.x,t.py=t.y,t.pz=t.z;let n=e;for(;n>1e-9&&t.alive;){const s=Math.min(Tt.SUBSTEP*2,n),r=t.x,a=t.y,o=t.z;if(Us(t,s),n-=s,o*t.z<=0&&o!==t.z){const c=o/(o-t.z),l=r+(t.x-r)*c,h=a+(t.y-a)*c;if(Math.abs(l)>ze.HALF_WIDTH_DOUBLES){this._awardAgainst(this.lastHitter,"绕出网柱外侧"),t.alive=!1;return}if(h<=zv(l)){t.x=l,t.y=h,t.z=o>0?.05:-.05,t.vx*=.12,t.vy=Math.min(0,t.vy)*.2,t.vz=-Math.sign(t.vz)*.35,this.emit({type:"net-hit",x:l,y:h}),this._awardAgainst(this.lastHitter,"挂网"),t.alive=!1;return}}if(t.y<=Tt.RADIUS&&t.vy<0){const c=(a-Tt.RADIUS)/(a-t.y||1),l=r+(t.x-r)*c,h=o+(t.z-o)*c;t.x=l,t.y=Tt.RADIUS,t.z=h,t.vx=t.vy=t.vz=0,t.alive=!1,this._resolveLanding(l,h);return}if(Math.abs(t.x)>13||Math.abs(t.z)>20||t.y>18){t.alive=!1,this._awardAgainst(this.lastHitter,"打飞出界");return}}}_resolveLanding(e,t){const n=Math.abs(e)<=ze.HALF_WIDTH_SINGLES&&Math.abs(t)<=ze.HALF_LENGTH,s=t>0?0:1,r=this.lastHitter;if(this.lastLanding={x:e,z:t,inBounds:n},this.emit({type:"land",x:e,z:t,inBounds:n}),r<0){this._awardAgainst(this.server,"发球失误");return}s===r?this._awardAgainst(r,n?"未过网":"未过网出界"):n?this._award(r,this.rallyHits<=1?"发球直接得分":"落点得分"):this._awardAgainst(r,"出界")}_award(e,t){if(this.phase===Et.POINT||this.phase===Et.GAMEOVER)return;this.score[e]++,this.server=e,this.pointWinner=e,this.pointReason=t,this.longestRally=Math.max(this.longestRally,this.rallyHits),this.rallyHistory.push(this.rallyHits),this.phase=Et.POINT,this.phaseTimer=1.7,this.emit({type:"point",winner:e,reason:t,score:[...this.score]});const[n,s]=this.score,r=Math.abs(n-s),a=Math.max(n,s);(a>=this.targetPoints&&r>=wi.WIN_BY||a>=wi.HARD_CAP)&&(this.winner=n>s?0:1,this.phase=Et.GAMEOVER,this.emit({type:"gameover",winner:this.winner,score:[...this.score]}))}_awardAgainst(e,t){this._award(e===0?1:0,t)}update(e,t){const n=this.ball;if(this.phase===Et.SERVE){this.phaseTimer-=e;const s=this.players[this.server];this.players[1-this.server].update(e,t[1-this.server],null);const a=this.phaseTimer<=0,o=t[this.server],c=o.move(this.server),l=o.aimDir?o.aimDir():c;if(s.x+=c.x*an.SPEED*.35*e,s.x=Math.max(-2.2,Math.min(2.2,s.x)),a&&o.hitHeld(this.server)&&(s.charging=!0,s.charge=Math.min(1,s.charge+e/it.CHARGE_TIME),s.swing={type:"serve",phase:.04+s.charge*.3,playing:!1}),a&&o.hitReleased(this.server)){const h=s.serve(l,Math.max(.25,s.charge));s.charging=!1,s.charge=0,s.swing&&(s.swing.playing=!0),h&&this.applyShot(h)}this._placeServeBallIfIdle();return}if(this.phase===Et.RALLY){this._stepBall(e);let s=!1;for(let r=0;r<2;r++){const a=this.players[r],o=!s&&n.alive&&this.lastHitter!==r,c=a.update(e,t[r],o?n:null);c&&o&&(this.applyShot(c),s=!0)}return}if(this.phase===Et.POINT){this.phaseTimer-=e;for(let s=0;s<2;s++)this.players[s].update(e,t[s],null);this.phaseTimer<=0&&this.toServe();return}if(this.phase===Et.GAMEOVER||this.phase===Et.READY)for(let s=0;s<2;s++)this.players[s].update(e,t[s],null)}_placeServeBallIfIdle(){this.phase===Et.SERVE&&this._placeServeBall()}get serveReady(){return this.phase===Et.SERVE&&this.phaseTimer<=0}}const Aa={casual:{name:"休闲",reaction:.34,speed:.7,aimError:.95,smash:.14,anticipate:.55,errorRate:.26},normal:{name:"普通",reaction:.2,speed:.87,aimError:.52,smash:.34,anticipate:.78,errorRate:.12},pro:{name:"高手",reaction:.1,speed:1,aimError:.2,smash:.62,anticipate:.95,errorRate:.04}};function Hv(i,e,t,n,s){const r={x:i.x,y:i.y,z:i.z,vx:i.vx,vy:i.vy,vz:i.vz},a=Tt.SUBSTEP*8;let o=0,c=null,l=null;for(;o<4.5&&(Us(r,a),o+=a,!(r.y<=Tt.RADIUS));)if(e*r.z>.35&&r.vy<0&&r.y<=it.REACH_HIGH-.35&&r.y>=.35){const u=Math.hypot(r.x-t,r.z-n)-it.REACH_RADIUS*.75,f=Math.max(0,u)/s;!c&&f<=o&&(c={x:r.x,z:r.z,t:o,y:r.y}),l={x:r.x,z:r.z,t:o,y:r.y}}return c??l}class Nh{constructor(e,t){this.inner=e,this.player=t,this.enabled=!0,this.plan=null,this.replanTimer=0,this._steer={x:0,z:0}}update(e,t){if(!this.enabled)return;if(this._passthrough=t.phase!=="rally",this._passthrough){this.plan=null;return}const n=this.player,s=t.ball,r=s.alive&&t.lastHitter!==n.index;let a;r?(this.replanTimer-=e,(!this.plan||this.replanTimer<=0)&&(this.plan=Hv(s,n.side,n.x,n.z,an.SPEED),this.replanTimer=.06),a=this.plan?{x:this.plan.x,z:this.plan.z+n.side*.28}:{x:0,z:n.side*3.1}):(this.plan=null,a={x:0,z:n.side*3.1});const o=n.index,c=this.inner.move(o),l=a.x-n.x+c.x*.9,h=a.z-n.z+c.z*.9,u=Math.hypot(l,h);this._steer=u<.1?{x:0,z:0}:{x:l/u*Math.min(1,u/.4),z:h/u*Math.min(1,u/.4)}}move(e){return!this.enabled||this._passthrough?this.inner.move(e):{...this._steer}}aimDir(){const e=this.inner;return e.aimDir?e.aimDir():e.move(this.player.index)}consumeCancel(){var e,t;return((t=(e=this.inner).consumeCancel)==null?void 0:t.call(e))??!1}hitHeld(e){return this.inner.hitHeld(e)}hitPressed(e){return this.inner.hitPressed(e)}hitReleased(e){return this.inner.hitReleased(e)}endFrame(){}}class Ro{constructor(e,t,n="normal"){this.player=e,this.vin=t,this.setDifficulty(n),this.plan=null,this.planAge=0,this.replanTimer=0,this.reactionTimer=0,this.desiredCharge=.6,this.wantSmash=!1,this.intentDecided=!1,this.aimBias={x:0,z:0},this.serveTimer=0}setDifficulty(e){this.difficultyKey=e,this.cfg=Aa[e]??Aa.normal}_predictIntercept(e){const t=this.player.side,n={x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz},s=Tt.SUBSTEP*8,r=an.SPEED*this.cfg.speed;let a=0,o=null,c=null,l=null;for(;a<4.5;){if(Us(n,s),a+=s,n.y<=Tt.RADIUS){l={x:n.x,z:n.z,t:a};break}if(t*n.z>.35&&n.vy<0&&n.y<=it.REACH_HIGH-.35&&n.y>=.35){const f=Math.hypot(n.x-this.player.x,n.z-this.player.z)-it.REACH_RADIUS*.75,d=Math.max(0,f)/r;!o&&d<=a&&(o={x:n.x,z:n.z,t:a,y:n.y}),c={x:n.x,z:n.z,t:a,y:n.y}}}const h=o??c;return h?{...h,ground:l}:l?{x:l.x,z:l.z,t:l.t,y:0,ground:l}:null}_willLandOut(e){const t=e==null?void 0:e.ground;return t?Math.abs(t.x)>ze.HALF_WIDTH_SINGLES+.12||Math.abs(t.z)>ze.HALF_LENGTH+.12:!1}_chooseAim(e,t){const n=this.cfg,s=e.x>.4?-1:e.x<-.4?1:Math.random()<.5?-1:1,r=Math.abs(e.z),a=r>4?-1:r<2.6?1:Math.random()<.5?-1:1,o=Math.random()<n.anticipate?s:Math.random()<.5?-1:1,c=Math.random()<n.anticipate?a:Math.random()<.5?-1:1,l=this.wantSmash&&t>=it.SMASH_MIN_HEIGHT;return{lane:o,depth:l?1:c}}_decideIntent(){var t;const e=(((t=this.plan)==null?void 0:t.y)??0)>=it.SMASH_MIN_HEIGHT;this.wantSmash=e&&Math.random()<this.cfg.smash,this.desiredCharge=this.wantSmash?.88+Math.random()*.12:e?.55+Math.random()*.3:.4+Math.random()*.35,this.intentDecided=!0}update(e,t,n){const s=this.player.index,r=this.player.side,a=t.ball;if(t.phase===Et.SERVE){if(t.server===s){this.serveTimer+=e;const b=this._chooseAim(n,1.05),R={x:b.lane*.6,z:-r*(b.depth>0?1:-1)*.8},S=t.serveReady&&this.serveTimer>.35+Math.random()*.3,x=t.serveReady&&this.serveTimer>1.05;this.vin.set(x?{x:R.x,z:R.z}:{x:0,z:0},S&&!x)}else{this.serveTimer=0;const b={x:-Math.sign(t.players[t.server].x||1)*.9,z:r*3.5};this.vin.set(this._steer(b),!1)}return}if(t.phase!==Et.RALLY){this.vin.set({x:0,z:0},!1),this.plan=null,this.planAge=0,this.reactionTimer=0,this.serveTimer=0,this.intentDecided=!1,this.wantSmash=!1,this.desiredCharge=.6;return}if(!(a.alive&&t.lastHitter!==s)){this.plan=null,this.reactionTimer=0,this.intentDecided=!1,this.vin.set(this._steer({x:0,z:r*3.1}),!1);return}if(this.reactionTimer+=e,this.reactionTimer<this.cfg.reaction){this.vin.set({x:0,z:0},!1);return}if(this.planAge+=e,this.replanTimer-=e,!this.plan||this.replanTimer<=0){const b=this._predictIntercept(a);if(b){const R=!this.plan||Math.hypot(b.x-this.plan.x,b.z-this.plan.z)>.12;if(this.plan=b,this.planAge=0,R){const S=this.cfg.aimError;this.aimBias={x:(Math.random()-.5)*S,z:(Math.random()-.5)*S*1.3}}this.intentDecided||this._decideIntent()}this.replanTimer=.08}if(!this.plan){this.vin.set({x:0,z:r*.2},!1);return}if(this._willLandOut(this.plan)&&Math.random()<this.cfg.anticipate){this.vin.set(this._steer({x:this.plan.x*.4,z:r*3}),!1);return}const l={x:this.plan.x+this.aimBias.x*.35,z:this.plan.z+r*.28+this.aimBias.z*.25},h=this._steer(l),u=a.x-this.player.x,f=a.z-this.player.z,d=Math.hypot(u,f),g=Math.hypot(a.vx,a.vy,a.vz),_=Math.max(0,this.plan.t-this.planAge),m=this.desiredCharge*it.CHARGE_TIME,p=_<=m+.1,E=g*e,T=d-E<=it.REACH_RADIUS*.92,v=a.y>=it.REACH_LOW&&a.y<=it.REACH_HIGH,A=r*a.z>-.2;if(T&&v&&A&&this.vin.hitHeld()){const b=this._chooseAim(n,a.y),R=-r*(b.depth>0?1:-1);if(Math.random()<this.cfg.errorRate){const S=Math.random()<.55;this.vin.errorBias=S?{x:(Math.random()-.5)*1.6,z:-r*(.9+Math.random()*1.1)}:{x:(Math.random()<.5?-1:1)*(1.4+Math.random()*1.2),z:0}}else this.vin.errorBias={x:0,z:0};this.vin.set({x:b.lane*.9,z:R*.9},!1)}else this.vin.set(h,p)}_steer(e){const t=e.x-this.player.x,n=e.z-this.player.z,s=Math.hypot(t,n);if(s<.12)return{x:0,z:0};const r=this.cfg.speed*Math.min(1,s/.45);return{x:t/s*r,z:n/s*r}}}class Gv extends Uu{constructor(){super();const e=new nt;e.deleteAttribute("uv");const t=new We({side:kt}),n=new We,s=new Hp(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new se(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Ap(e,n,6),o=new bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new se(e,ls(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new se(e,ls(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new se(e,ls(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new se(e,ls(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new se(e,ls(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new se(e,ls(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ls(i){return new Up({color:0,emissive:16777215,emissiveIntensity:i})}const fa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vv=new hl(-1,1,1,-1,0,1);class Wv extends Dt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const Xv=new Wv;class fl{constructor(e){this._mesh=new se(Xv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Xu extends Ns{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ws.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Fh extends Ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class $v extends Ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xu(fa),this.copyPass.material.blending=ni,this.clock=new Wp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fh!==void 0&&(a instanceof Fh?n=!0:a instanceof $v&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yv extends Ns{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const jv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ps extends Ns{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(r,a,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Cn(r,a,{type:Vn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Cn(r,a,{type:Vn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=jv;this.highPassUniforms=ws.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ws.clone(fa.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader,blending:Ms,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new cn,this._fsQuad=new fl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ps.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ps.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ps.BlurDirectionX=new Re(1,0);Ps.BlurDirectionY=new Re(0,1);const ta={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Kv extends Ns{constructor(){super(),this.uniforms=ws.clone(ta.uniforms),this.material=new Lp({name:ta.name,uniforms:this.uniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader}),this._fsQuad=new fl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===uu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$c?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===du&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const js={broadcast:{pos:new I(0,4.4,10.4),look:new I(0,1.75,-2)},low:{pos:new I(0,2.6,9.4),look:new I(0,1.7,-2.4)},high:{pos:new I(0,6.4,12.8),look:new I(0,1.4,-1)},portrait:{pos:new I(0,8.6,11.6),look:new I(0,.65,-1.7)}},wo=["broadcast","low","high"],Zv=3.9,Oh=40,Jv=68;function $u(i,e){const t=i.look.clone().sub(i.pos).normalize(),n=i.pos.clone().negate(),s=Math.max(1,n.dot(t)),r=Math.atan(Zv/s),a=2*Math.atan(Math.tan(r)/e)*(180/Math.PI);return qt.clamp(Math.max(a,Oh),Oh,Jv)}function Qv(i,e={}){const t=new Av({antialias:e.antialias!==!1,powerPreference:e.powerPreference??"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,e.dpr??2)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Wc,t.toneMapping=$c,t.toneMappingExposure=1.05,t.outputColorSpace=Rt,i.appendChild(t.domElement);const n=new Uu;n.background=new Ie(593429),n.fog=new sl(725274,18,48);const s=new Cc(t);n.environment=s.fromScene(new Gv,.04).texture,n.environmentIntensity=.38;const r=js.broadcast,a=innerWidth/innerHeight,o=new en($u(r,a),a,.1,200);o.position.copy(r.pos),o.lookAt(r.look);const c=new qv(t);c.setPixelRatio(Math.min(devicePixelRatio,e.dpr??2)),c.setSize(innerWidth,innerHeight),c.addPass(new Yv(n,o));const l=new Ps(new Re(innerWidth,innerHeight),.42,.65,.92);c.addPass(l),c.addPass(new Kv);const h=()=>{document.documentElement.style.setProperty("--vh",`${innerHeight*.01}px`),o.aspect=innerWidth/Math.max(1,innerHeight),o.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),c.setSize(innerWidth,innerHeight)};return h(),addEventListener("resize",h),addEventListener("orientationchange",()=>setTimeout(h,150)),visualViewport==null||visualViewport.addEventListener("resize",h),{renderer:t,scene:n,camera:o,composer:c,bloom:l,pmrem:s,resize:h}}class ex{constructor(e){this.camera=e,this.viewName="broadcast",this.base=js.broadcast,this.autoPortrait=!0,this.mirror=1,this.offsetX=0,this.zoom=0,this.shake=0,this._look=new I,this.applyViewport(),addEventListener("resize",()=>this.applyViewport()),addEventListener("orientationchange",()=>setTimeout(()=>this.applyViewport(),160))}setView(e){js[e]&&(this.viewName=e,this.autoPortrait=!1,this.applyViewport())}toggleView(){const e=wo.indexOf(this.viewName);this.setView(wo[(e+1)%wo.length])}applyViewport(){const e=innerWidth/Math.max(1,innerHeight),t=this.autoPortrait&&e<.95?"portrait":this.viewName;this.base=js[t]??js.broadcast,this.camera.aspect=e,this.camera.fov=$u(this.base,e),this.camera.updateProjectionMatrix()}punch(e=1){this.shake=Math.min(1.4,this.shake+e)}update(e,t=0,n=0){const s=qt.clamp(t*.28,-1.1,1.1);this.offsetX+=(s-this.offsetX)*Math.min(1,e*2.6),this.zoom+=(n*.55-this.zoom)*Math.min(1,e*1.8),this.shake*=Math.exp(-e*7);const r=this.shake*.035,a=(Math.random()-.5)*r,o=(Math.random()-.5)*r,c=this.mirror;this.camera.position.set(this.base.pos.x+this.offsetX+a,this.base.pos.y-this.zoom*.18+o,(this.base.pos.z-this.zoom)*c),this._look.set(this.base.look.x+this.offsetX*.7,this.base.look.y,this.base.look.z*c),this.camera.lookAt(this._look)}}class za extends se{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new en;const n=this,s=t.color!==void 0?new Ie(t.color):new Ie(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||za.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new hi,u=new I,f=new I,d=new I,g=new lt,_=new I(0,0,-1),m=new rt,p=new I,E=new I,T=new rt,v=new lt,A=this.camera,C=new Cn(r,a,{samples:l,type:Vn}),b=new zt({name:c.name!==void 0?c.name:"unspecified",uniforms:ws.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});b.uniforms.tDiffuse.value=C.texture,b.uniforms.color.value=s,b.uniforms.textureMatrix.value=v,this.material=b,this.onBeforeRender=function(R,S,x){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(x.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(f,d),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),g.extractRotation(x.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(d),E.subVectors(f,_),E.reflect(u).negate(),E.add(f),A.position.copy(p),A.up.set(0,1,0),A.up.applyMatrix4(g),A.up.reflect(u),A.lookAt(E),A.far=x.far,A.updateMatrixWorld(),A.projectionMatrix.copy(x.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(A.projectionMatrix),v.multiply(A.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(A.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const L=A.projectionMatrix;T.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],T.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],T.z=-1,T.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(T)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-o,L.elements[14]=m.w,n.visible=!1;const O=R.getRenderTarget(),H=R.xr.enabled,V=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(C),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(S,A),R.xr.enabled=H,R.shadowMap.autoUpdate=V,R.setRenderTarget(O);const W=x.viewport;W!==void 0&&R.state.viewport(W),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()}}}za.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};const bn={WIDTH:ze.HALF_WIDTH_DOUBLES*2+ze.SIDEOFF*2,LENGTH:ze.LENGTH+ze.RUNOFF*2};let qu=112;function tx(i){qu=i}function Yu(i,e,t=qu){const n=document.createElement("canvas");return n.width=Math.round(i*t),n.height=Math.round(e*t),{canvas:n,ctx:n.getContext("2d"),pxPerM:t}}function ka(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function nx(){const{canvas:i,ctx:e,pxPerM:t}=Yu(bn.WIDTH,bn.LENGTH),n=i.width,s=i.height,r=ka(20260802),a=m=>(m+bn.WIDTH/2)*t,o=m=>(m+bn.LENGTH/2)*t,c=ze.HALF_WIDTH_DOUBLES,l=ze.HALF_WIDTH_SINGLES,h=ze.HALF_LENGTH;e.fillStyle="#1f5a41",e.fillRect(0,0,n,s),e.fillStyle="#124533",e.fillRect(a(-c),o(-h),c*2*t,h*2*t);for(let m=0;m<52e3;m++){const p=r()*n,E=r()*s,T=r();e.fillStyle=T>.5?`rgba(255,255,255,${.012+r()*.03})`:`rgba(0,40,25,${.015+r()*.035})`,e.fillRect(p,E,1+r()*2,1+r())}e.strokeStyle="rgba(255,255,255,0.016)",e.lineWidth=1;for(let m=0;m<s;m+=5)e.beginPath(),e.moveTo(0,m),e.lineTo(n,m),e.stroke();e.fillStyle="rgba(10,50,35,0.20)";for(let m=1.5;m<bn.WIDTH;m+=1.5)e.fillRect(a(m-bn.WIDTH/2),0,1.5,s);for(let m=0;m<22;m++){const p=r()*n,E=r()*s,T=(.8+r()*2.6)*t,v=e.createRadialGradient(p,E,0,p,E,T),A=r()>.45;v.addColorStop(0,A?"rgba(190,255,225,0.075)":"rgba(0,30,20,0.085)"),v.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=v,e.beginPath(),e.arc(p,E,T,0,Math.PI*2),e.fill()}e.save(),e.translate(a(0),o(-h*.52)),e.textAlign="center",e.textBaseline="middle",e.fillStyle="rgba(255,255,255,0.22)",e.font=`bold ${Math.round(.52*t)}px "Arial Black", Arial, sans-serif`,e.fillText("SHUTTLE CLASH",0,0),e.font=`600 ${Math.round(.24*t)}px Arial, sans-serif`,e.fillStyle="rgba(255,255,255,0.16)",e.fillText("WORLD SUPER SERIES",0,Math.round(.44*t)),e.restore();const u=ze.LINE_WIDTH*t,f=(m,p,E,T)=>{e.fillStyle="#f6f4ee";const v={x:a(m),y:o(p)},A={x:a(E),y:o(T)};Math.abs(p-T)<1e-6?e.fillRect(v.x,v.y-u/2,A.x-v.x,u):e.fillRect(v.x-u/2,v.y,u,A.y-v.y)},d=ze.SHORT_SERVICE_LINE,g=h-ze.LONG_SERVICE_INSET;for(const m of[1,-1])f(-c,m*h,c,m*h),f(-c,m*g,c,m*g),f(-c,m*d,c,m*d),f(m*c,-h,m*c,h),f(m*l,-h,m*l,h),f(0,m*d,0,m*h);e.globalAlpha=.05,e.fillStyle="#0d3b28";for(let m=0;m<900;m++)e.fillRect(r()*n,r()*s,1+r()*3,1+r()*2);e.globalAlpha=.045,e.fillStyle="#7fd8b0";for(let m=0;m<260;m++){const p=r()>.5?1:-1,E=a((r()-.5)*4.6),T=o(p*(2+r()*4.2));e.save(),e.translate(E,T),e.rotate((r()-.5)*1.4),e.fillRect(0,0,8+r()*26,1.4),e.restore()}e.globalAlpha=1;const _=new Nn(i);return _.colorSpace=Rt,_.anisotropy=16,_}function ix(){const{canvas:i,ctx:e,pxPerM:t}=Yu(bn.WIDTH,bn.LENGTH,26),n=i.width,s=i.height,r=ka(7788);e.fillStyle="#b8b8b8",e.fillRect(0,0,n,s);for(let o=0;o<70;o++){const c=r()*n,l=r()*s,h=(.5+r()*3)*t,u=e.createRadialGradient(c,l,0,c,l,h),f=r()>.5;u.addColorStop(0,f?`rgba(0,0,0,${.06+r()*.12})`:`rgba(255,255,255,${.04+r()*.08})`),u.addColorStop(1,"rgba(128,128,128,0)"),e.fillStyle=u,e.beginPath(),e.arc(c,l,h,0,Math.PI*2),e.fill()}const a=new Nn(i);return a.anisotropy=8,a}function sx(){const i=document.createElement("canvas");i.width=2048,i.height=256;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);const t=320,n=40,s=i.width/t,r=i.height/n;e.strokeStyle="rgba(238,240,244,0.92)",e.lineWidth=1.5,e.beginPath();for(let l=0;l<=t;l++){const h=l*s;e.moveTo(h,0),e.lineTo(h,i.height)}for(let l=0;l<=n;l++){const h=l*r;e.moveTo(0,h),e.lineTo(i.width,h)}e.stroke();const a=i.height*(.075/.76),o=e.createLinearGradient(0,0,0,a);o.addColorStop(0,"#ffffff"),o.addColorStop(.5,"#e8ebf0"),o.addColorStop(1,"#cdd3db"),e.fillStyle=o,e.fillRect(0,0,i.width,a),e.fillStyle="rgba(150,160,175,0.5)",e.fillRect(0,a-2,i.width,2);const c=new Nn(i);return c.colorSpace=Rt,c.anisotropy=16,c}function Bh(){const i=document.createElement("canvas");i.width=2048,i.height=192;const e=i.getContext("2d"),t=ka(90210),n=[{bg:"#8e1f28",fg:"#ffffff",text:"CLASH"},{bg:"#13407a",fg:"#eaf2ff",text:"VICTOR"},{bg:"#e6e8ec",fg:"#1a2430",text:"BWF"},{bg:"#0f3d2c",fg:"#c8f0dc",text:"TOUR"},{bg:"#a8560f",fg:"#fff2e0",text:"S1000"},{bg:"#1b2a3a",fg:"#9fc4e8",text:"FINALS"}];let s=0,r=0;for(;s<i.width;){const o=n[r%n.length],c=300+Math.round(t()*90);e.fillStyle=o.bg,e.fillRect(s,0,c,i.height),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(s,0,c,5),e.fillStyle="rgba(0,0,0,0.28)",e.fillRect(s,i.height-7,c,7),e.fillStyle="rgba(0,0,0,0.42)",e.fillRect(s+c-3,0,3,i.height),e.save(),e.fillStyle=o.fg,e.textAlign="center",e.textBaseline="middle";let l=64;const h=c-34;for(e.font=`bold ${l}px "Arial Black", Arial, sans-serif`;e.measureText(o.text).width>h&&l>18;)l-=2,e.font=`bold ${l}px "Arial Black", Arial, sans-serif`;e.globalAlpha=.9,e.fillText(o.text,s+c/2,i.height/2+2),e.restore(),s+=c,r++}e.globalAlpha=1,e.fillStyle="rgba(0,0,0,0.22)",e.fillRect(0,0,i.width,i.height);const a=new Nn(i);return a.colorSpace=Rt,a.wrapS=Fi,a.repeat.set(2,1),a.anisotropy=8,a}function rx(){const i=document.createElement("canvas");i.width=1024,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,i.height);t.addColorStop(0,"#12345a"),t.addColorStop(.55,"#0b2444"),t.addColorStop(1,"#160f2d"),e.fillStyle=t,e.fillRect(0,0,i.width,i.height),e.strokeStyle="rgba(90,190,255,0.22)",e.lineWidth=1;for(let s=0;s<i.width;s+=8)e.beginPath(),e.moveTo(s,0),e.lineTo(s,i.height),e.stroke();e.textAlign="center",e.textBaseline="middle",e.font='bold 96px "Arial Black", Arial, sans-serif',e.fillStyle="rgba(210,238,255,0.95)",e.fillText("SHUTTLE CLASH",i.width/2,i.height/2-18),e.font="600 34px Arial, sans-serif",e.fillStyle="rgba(92,199,255,0.78)",e.fillText("WORLD  SUPER  SERIES",i.width/2,i.height/2+62);const n=new Nn(i);return n.colorSpace=Rt,n}function Ra(i,e=1.4){const t=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,t,n).data,r=document.createElement("canvas");r.width=t,r.height=n;const a=r.getContext("2d"),o=a.createImageData(t,n),c=o.data,l=(u,f)=>{const d=((f+n)%n*t+(u+t)%t)*4;return(s[d]*.299+s[d+1]*.587+s[d+2]*.114)/255};for(let u=0;u<n;u++)for(let f=0;f<t;f++){const d=(l(f+1,u)-l(f-1,u))*e,g=(l(f,u+1)-l(f,u-1))*e,_=1/Math.hypot(d,g,1),m=(u*t+f)*4;c[m]=(-d*_*.5+.5)*255,c[m+1]=(g*_*.5+.5)*255,c[m+2]=(_*.5+.5)*255,c[m+3]=255}a.putImageData(o,0,0);const h=new Nn(r);return h.wrapS=h.wrapT=Fi,h.anisotropy=8,h}function ax(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(.45,"rgba(0,0,0,0.45)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Nn(i)}function ox(){const i=document.createElement("canvas");i.width=1024,i.height=192;const e=i.getContext("2d"),t=ka(4242);e.fillStyle="#0c0f16",e.fillRect(0,0,i.width,i.height);const n=32,s=1,r=i.width/n,a=i.height/s;for(let l=s-1;l>=0;l--){const h=l*a,u=1;for(let f=0;f<n;f++){const d=f*r,_=(f*7+l*3)%9===0?[34,56,88]:[92,30,39];if(e.fillStyle=`rgb(${_[0]*u|0},${_[1]*u|0},${_[2]*u|0})`,e.fillRect(d+2,h+a*.38,r-4,a*.48),e.fillStyle=`rgba(255,190,190,${.05*u})`,e.fillRect(d+2,h+a*.38,r-4,2),t()<.68){const m=(24+t()*20)*u,p=t()<.16;e.fillStyle=p?`rgb(${m+62|0},${m+56|0},${m+48|0})`:`rgb(${m|0},${m+3|0},${m+8|0})`;const E=d+r*.5;e.beginPath(),e.arc(E,h+a*.31,r*.15,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(E,h+a*.64,r*.29,a*.24,0,0,Math.PI*2),e.fill()}}}e.fillStyle="rgba(4,6,10,0.85)";for(let l=0;l<n;l+=8)e.fillRect(l*r-2,0,5,i.height);for(let l=0;l<8;l++){const h=t()*i.width,u=16+t()*(i.height-32),f=e.createRadialGradient(h,u,0,h,u,6);f.addColorStop(0,"rgba(180,200,225,0.34)"),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.beginPath(),e.arc(h,u,6,0,Math.PI*2),e.fill()}const o=e.createLinearGradient(0,i.height*.66,0,i.height);o.addColorStop(0,"rgba(6,8,12,0)"),o.addColorStop(1,"rgba(6,8,12,1)"),e.fillStyle=o,e.fillRect(0,i.height*.66,i.width,i.height*.34);const c=new Nn(i);return c.colorSpace=Rt,c.wrapS=Fi,c.anisotropy=8,c}const Ft={WIDTH:30,LENGTH:46,HEIGHT:12.5};function cx(i){const e=new pt;i.add(e);const t=new se(new Qt(Ft.WIDTH,Ft.LENGTH),new We({color:3426138,roughness:.88,metalness:.02}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,e.add(t);const n=nx(),s=new zu({map:n,normalMap:Ra(n.image,1.1),normalScale:new Re(.55,.55),roughnessMap:ix(),roughness:1,metalness:0,clearcoat:.6,clearcoatRoughness:.3,envMapIntensity:.5}),r=new se(new Qt(bn.WIDTH,bn.LENGTH),s);r.rotation.x=-Math.PI/2,r.position.y=.004,r.receiveShadow=!0,e.add(r);const a=new za(new Qt(bn.WIDTH,bn.LENGTH),{textureWidth:1024,textureHeight:1024,color:9675444,clipBias:.003});{const N=a.material;N.transparent=!0,N.depthWrite=!1,N.uniforms.uStrength={value:.34},N.vertexShader=`
      uniform mat4 textureMatrix;
      varying vec4 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = textureMatrix * vec4(position, 1.0);
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,N.fragmentShader=`
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
      }`,N.needsUpdate=!0}a.rotation.x=-Math.PI/2,a.position.y=.0065,a.renderOrder=1,a.visible=!1,e.add(a);const o=ze.HALF_WIDTH_DOUBLES*2,c=new Qt(o,ze.NET_DEPTH,72,6);{const N=c.attributes.position,Y=ze.NET_HEIGHT_POST-ze.NET_HEIGHT_CENTER;for(let Q=0;Q<N.count;Q++){const ae=N.getX(Q)/(o/2);N.setY(Q,N.getY(Q)-Y*(1-ae*ae))}c.computeVertexNormals()}const l=new se(c,new We({map:sx(),transparent:!0,alphaTest:.06,side:mn,roughness:.75,metalness:0}));l.position.set(0,ze.NET_HEIGHT_POST-ze.NET_DEPTH/2,0),l.castShadow=!0,e.add(l);const h=new We({color:2830392,roughness:.35,metalness:.85});for(const N of[1,-1]){const Y=new se(new gn(.038,.045,ze.NET_HEIGHT_POST,16),h);Y.position.set(N*ze.HALF_WIDTH_DOUBLES,ze.NET_HEIGHT_POST/2,0),Y.castShadow=!0,e.add(Y);const Q=new se(new gn(.24,.28,.06,20),h);Q.position.set(N*ze.HALF_WIDTH_DOUBLES,.03,0),Q.receiveShadow=!0,e.add(Q)}{const N=new pt,Y=new We({color:1454159,roughness:.3,metalness:.8}),Q=new We({color:2372680,roughness:.72,metalness:.05});for(const Ye of[-.32,.32])for(const q of[-.28,.28]){const K=new se(new gn(.035,.045,1.55,8),Y);K.position.set(Ye,.775,q),K.castShadow=!0,N.add(K)}const ae=new se(new nt(.78,.07,.68),Y);ae.position.y=1.58,ae.castShadow=!0,N.add(ae);const be=new se(new nt(.62,.09,.52),Q);be.position.y=1.66,be.castShadow=!0,N.add(be);const $e=new se(new nt(.62,.62,.08),Q);$e.position.set(0,1.99,-.24),$e.castShadow=!0,N.add($e);const qe=new se(new nt(.5,.05,.34),Y);qe.position.set(0,1.42,.38),qe.rotation.x=-.22,N.add(qe),N.scale.setScalar(.86),N.position.set(ze.HALF_WIDTH_DOUBLES+1.35,0,0),e.add(N)}const u=ox(),f=new We({color:2371645,roughness:.82,metalness:.04}),d=new We({map:u,roughness:1,metalness:0,side:mn}),g=(N,Y,Q,ae,be)=>{for(let $e=0;$e<ae;$e++){const qe=.5+$e*.52,Ye=Q+$e*1.15,q=N==="x"?new nt(1.15,qe,be):new nt(be,qe,1.15),K=new se(q,f);K.position.set(N==="x"?Y*(Ye+.575):0,qe/2,N==="z"?Y*(Ye+.575):0),K.receiveShadow=!0,e.add(K);const de=N==="x"?new Qt(be,1.25):new Qt(be,1.25),Ce=new se(de,d.clone());Ce.material.map=u.clone(),Ce.material.map.repeat.set(be/6,1),Ce.material.map.offset.set(Math.random(),0),Ce.material.map.needsUpdate=!0,N==="x"?(Ce.position.set(Y*(Ye+.2),qe+.5,0),Ce.rotation.y=Y>0?-Math.PI/2:Math.PI/2):(Ce.position.set(0,qe+.5,Y*(Ye+.2)),Ce.rotation.y=Y>0?Math.PI:0),e.add(Ce)}};g("x",1,8.8,7,Ft.LENGTH-8),g("x",-1,8.8,7,Ft.LENGTH-8),g("z",1,13,7,Ft.WIDTH-6),g("z",-1,13,7,Ft.WIDTH-6);const _=Bh(),m=new We({map:_,normalMap:Ra(_.image,1.6),normalScale:new Re(.5,.5),roughness:.5,metalness:.06});m.normalMap.repeat.copy(_.repeat);const p=new We({color:10134704,roughness:.42,metalness:.5}),E=.92,T=ze.HALF_WIDTH_DOUBLES+2.35,v=ze.HALF_LENGTH+2.55;for(const N of[1,-1]){const Y=new se(new nt(.09,E,v*2),m);Y.position.set(N*T,E/2,0),Y.castShadow=!0,Y.receiveShadow=!0,e.add(Y);const Q=new se(new nt(.14,.05,v*2),p);Q.position.set(N*T,E+.02,0),e.add(Q);const ae=new se(new nt(T*2,E,.09),m);ae.position.set(0,E/2,N*v),ae.castShadow=!0,ae.receiveShadow=!0,e.add(ae);const be=new se(new nt(T*2,.05,.14),p);be.position.set(0,E+.02,N*v),e.add(be)}const A=new We({color:1516078,roughness:.88,side:kt}),C=new se(new nt(Ft.WIDTH,Ft.HEIGHT,Ft.LENGTH),A);C.position.y=Ft.HEIGHT/2,e.add(C);const b=new We({color:529183,roughness:1});for(const N of[1,-1]){const Y=new se(new Qt(Ft.WIDTH-2,9),b);Y.position.set(0,4.5,N*(Ft.LENGTH/2-.35)),Y.rotation.y=N>0?Math.PI:0,e.add(Y)}const R=rx();for(const N of[1,-1]){const Y=new se(new Qt(13.4,2.7),new cn({map:N>0?R:R.clone(),color:13886709,fog:!1}));Y.position.set(0,5.65,N*(Ft.LENGTH/2-.72)),Y.rotation.y=N>0?Math.PI:0,e.add(Y);const Q=new se(new nt(14.2,3.35,.18),new We({color:2504005,roughness:.34,metalness:.72}));Q.position.set(0,5.65,N*(Ft.LENGTH/2-.6)),e.add(Q);const ae=N*(Ft.LENGTH/2-.48);for(const[be,$e]of[[-7.28,2982143],[7.28,16725597]]){const qe=new se(new nt(.16,3.42,.12),new cn({color:$e,fog:!1}));qe.position.set(be,5.65,ae),e.add(qe)}}const S=new We({color:2764600,roughness:.5,metalness:.7}),x=new cn({color:16774882,fog:!1}),P=new cn({color:16771517,transparent:!0,opacity:.16,fog:!1,blending:Ms,depthWrite:!1}),L=7.4;for(const N of[-13,-6.5,0,6.5,13]){const Y=new se(new nt(Ft.WIDTH-6,.26,.34),S);Y.position.set(0,L,N),e.add(Y);for(const Q of[-7,-2.4,2.4,7]){const ae=new se(new gn(.035,.035,1,6),S);ae.position.set(Q,L+.6,N),e.add(ae)}for(const Q of[-6.2,-2.1,2.1,6.2]){const ae=new se(new nt(2.1,.16,.72),x);ae.position.set(Q,L-.2,N),e.add(ae);const be=new se(new nt(2.6,.5,1.15),P);be.position.copy(ae.position),e.add(be)}}{const N=Bh();N.repeat.set(8,1);const Y=new We({map:N,roughness:.62,metalness:.05});for(const Q of[1,-1]){const ae=new se(new nt(.12,1,Ft.LENGTH-8),Y);ae.position.set(Q*(Ft.WIDTH/2-1.2),5.9,0),e.add(ae)}}i.add(new Op(11982580,3813416,.62));const O=new yo(16773336,2.45);O.position.set(6.5,15,5.5),O.castShadow=!0,O.shadow.mapSize.set(2048,2048),O.shadow.camera.left=-12,O.shadow.camera.right=12,O.shadow.camera.top=14,O.shadow.camera.bottom=-14,O.shadow.camera.near=1,O.shadow.camera.far=40,O.shadow.bias=-6e-4,O.shadow.normalBias=.02,O.shadow.radius=6,i.add(O),i.add(O.target);const H=new zp(15398143,38,42,.68,.86,1.7);H.position.set(0,13.5,1.5),H.target.position.set(0,0,0),H.castShadow=!0,H.shadow.mapSize.set(1024,1024),H.shadow.bias=-4e-4,H.shadow.normalBias=.02,i.add(H),i.add(H.target);const V=new yo(12114431,.58);V.position.set(-8,11,-7),i.add(V);const W=new yo(16765595,.88);return W.position.set(0,5.5,-16),i.add(W),{group:e,floor:r,net:l,key:O,spot:H,reflector:a,setReflector:N=>{const Y=typeof N=="number"?N>0:!!N;a.visible=Y,Y&&typeof N=="number"&&a.getRenderTarget().setSize(N,N)}}}function Rc(i,e=.7,t=.5){const n=new se(new Qt(e,e),new cn({map:ax(),transparent:!0,opacity:t,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.position.y=.012,n.renderOrder=2,i.add(n),n}const Xt=Math.PI/180,ot={hipHeight:.92,torsoLen:.52,headR:.115,upperArm:.3,foreArm:.27,thigh:.44,shin:.42,shoulderX:.19,hipX:.11},zh={overhead:[[0,150,-80,-14,-38],[.45,190,-6,10,6],[1,320,-34,22,42]],low:[[0,62,-26,16,-26],[.45,-34,-8,6,4],[1,-118,-44,-4,30]],drive:[[0,96,-70,4,-46],[.45,-58,-14,2,8],[1,-140,-52,0,48]],serve:[[0,48,-30,4,-18],[.45,-28,-6,2,2],[1,-76,-22,-2,16]]};function lx(i,e){let t=i[0],n=i[i.length-1];for(let o=0;o<i.length-1;o++)if(e>=i[o][0]&&e<=i[o+1][0]){t=i[o],n=i[o+1];break}const s=n[0]-t[0]||1,r=qt.clamp((e-t[0])/s,0,1),a=r*r*(3-2*r);return{upper:qt.lerp(t[1],n[1],a),fore:qt.lerp(t[2],n[2],a),lean:qt.lerp(t[3],n[3],a),twist:qt.lerp(t[4],n[4],a)}}function hx(i,e){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d"),s=a=>`#${a.toString(16).padStart(6,"0")}`;n.fillStyle=s(i),n.fillRect(0,0,256,256),n.fillStyle=s(e),n.fillRect(0,0,22,256),n.fillRect(234,0,22,256),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(22,0,4,256),n.fillRect(230,0,4,256),n.fillStyle="rgba(10,14,22,0.5)",n.fillRect(0,0,256,16),n.fillStyle=s(e),n.fillRect(0,16,256,6),n.fillStyle="rgba(10,14,22,0.32)",n.fillRect(0,242,256,14),n.fillStyle="rgba(255,255,255,0.5)",n.beginPath(),n.moveTo(128,62),n.lineTo(140,78),n.lineTo(128,74),n.lineTo(116,78),n.closePath(),n.fill();for(let a=0;a<2600;a++)n.fillStyle=Math.random()>.5?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.04)",n.fillRect(Math.random()*256,Math.random()*256,2,2);const r=new Nn(t);return r.colorSpace=Rt,r}function ux(i){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.clearRect(0,0,128,128),t.fillStyle="rgba(255,255,255,0.92)",t.font='bold 104px "Arial Black", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(String(i),64,70);const n=new Nn(e);return n.colorSpace=Rt,n}function na(i,e,t){const n=new _s(e,Math.max(.01,i-e*2),4,10),s=new se(n,t);s.position.y=-i/2,s.castShadow=!0;const r=new pt;return r.add(s),r}function fx(i){const e=new pt,t=new We({color:i.frame,roughness:.22,metalness:.85}),n=new We({color:2237996,roughness:.9}),s=new se(new gn(.017,.019,.2,10),n);s.position.y=-.1,e.add(s);const r=new se(new gn(.007,.01,.26,8),t);r.position.y=.13,e.add(r);const a=new pt;a.position.y=.395;const o=new se(new yr(.125,.0075,8,40),t);o.rotation.x=Math.PI/2,a.add(o);const c=new al({color:14673646,transparent:!0,opacity:.55}),l=[];for(let h=-4;h<=4;h++){const u=h/5*.115,f=Math.sqrt(Math.max(0,.125*.125-u*u));l.push(new I(u,0,-f),new I(u,0,f)),l.push(new I(-f,0,u),new I(f,0,u))}return a.add(new Nu(new Dt().setFromPoints(l),c)),e.add(a),e.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),e}class kh{constructor(e){this.palette=e;const t=new We({color:e.skin,roughness:.58,metalness:.02}),n=hx(e.jersey,e.accent??e.shorts),s=new We({map:n,normalMap:Ra(n.image,1.2),normalScale:new Re(.18,.18),roughness:.86,metalness:0}),r=new We({color:e.shorts,roughness:.8,metalness:0}),a=new We({color:e.shoe,roughness:.32,metalness:.08}),o=new We({color:15922424,roughness:.9}),c=new We({color:e.accent??15922424,roughness:.85});this.root=new pt,this.hips=new pt,this.hips.position.y=ot.hipHeight,this.root.add(this.hips),this.torso=new pt,this.hips.add(this.torso);const l=new se(new _s(.155,ot.torsoLen-.24,4,12),s);l.position.y=ot.torsoLen/2,l.scale.z=.72,l.castShadow=!0,this.torso.add(l);const h=new se(new _s(.135,.1,4,12),r);h.position.y=-.02,h.scale.z=.78,h.castShadow=!0,this.torso.add(h);const u=new se(new Qt(.2,.2),new We({map:ux(e.number??1),transparent:!0,roughness:.7,depthWrite:!1}));u.userData.noOutline=!0,u.position.set(0,ot.torsoLen*.6,-.118),u.rotation.y=Math.PI,this.torso.add(u),this.head=new pt,this.head.position.y=ot.torsoLen+.05;const f=new se(new gn(.048,.055,.08,10),t);f.position.y=-.05,this.head.add(f);const d=new se(new On(ot.headR,20,16),t);d.scale.set(.92,1.08,1),d.position.y=ot.headR*.55,d.castShadow=!0,this.head.add(d);const g=new We({color:1709330,roughness:.85}),_=new se(new On(ot.headR*1.02,18,14,0,Math.PI*2,0,Math.PI*.62),g);_.position.y=ot.headR*.6,_.scale.set(.95,1.05,1.02),this.head.add(_);const m=new We({color:15911590,roughness:.66}),p=new se(new On(ot.headR*1.015,20,14,Math.PI*.1,Math.PI*.8,Math.PI*.26,Math.PI*.5),m);p.position.y=ot.headR*.55,p.scale.set(.93,1.08,1.01),this.head.add(p);const E=new cn({color:2366488});for(const b of[-1,1]){const R=new se(new On(ot.headR*.135,10,8),E);R.position.set(b*ot.headR*.34,ot.headR*.6,ot.headR*.965),R.scale.set(1,.66,.55),R.userData.noOutline=!0,this.head.add(R)}const T=new se(new On(ot.headR*.52,12,10),g);T.position.set(0,ot.headR*.3,-.115*.72),T.scale.set(1.1,.85,.7),this.head.add(T);const v=new se(new yr(ot.headR*.97,ot.headR*.13,6,20),c);v.position.y=ot.headR*.72,v.rotation.x=Math.PI/2,v.scale.set(.95,1,1.05),this.head.add(v),this.torso.add(this.head);const A=b=>{const R=new pt;R.position.set(b*ot.shoulderX,ot.torsoLen-.06,0);const S=na(ot.upperArm,.048,t);R.add(S);const x=new pt;x.position.y=-.3,S.add(x);const P=na(ot.foreArm,.04,t);x.add(P);const L=new pt;L.position.y=-.27,P.add(L);const O=new se(new On(.045,10,8),t);O.scale.set(.8,1.1,.6),L.add(O);const H=new se(new gn(.048,.048,.045,10),c);return H.position.y=.03,L.add(H),this.torso.add(R),{shoulder:R,upper:S,elbow:x,fore:P,hand:L}};this.armR=A(1),this.armL=A(-1),this.racket=fx(e),this.racket.position.y=-.02,this.armR.hand.add(this.racket);const C=b=>{const R=new pt;R.position.set(b*ot.hipX,-.06,0);const S=na(ot.thigh,.072,r);R.add(S);const x=new pt;x.position.y=-.44,S.add(x);const P=na(ot.shin,.055,t);x.add(P);const L=new se(new _s(.058,ot.shin*.42,4,10),o);L.position.y=-.42*.72,L.castShadow=!0,P.add(L);const O=new pt;O.position.y=-.42,P.add(O);const H=new se(new nt(.1,.055,.25),a);H.position.set(0,-.018,.055),H.castShadow=!0,O.add(H);const V=new se(new nt(.105,.026,.26),new We({color:16054010,roughness:.55}));V.position.set(0,-.056,.058),O.add(V);const W=new se(new nt(.106,.016,.11),c);return W.position.set(0,-.012,.05),O.add(W),this.hips.add(R),{hip:R,thigh:S,knee:x,shin:P,ankle:O}};this.legR=C(1),this.legL=C(-1),this.legPhase=0,this.bob=0}update(e,t){const n=qt.clamp(t.speedRatio??0,0,1),s=qt.clamp(t.crouch??.3,0,1);this.legPhase+=e*(5.5+n*7.5)*(.25+n),this.bob+=e*2.1;const r=.72*n,a=Math.sin(this.legPhase),o=Math.sin(this.legPhase+Math.PI),c=Math.sin(this.bob*2.2)*.012*(1-n);this.legR.thigh.rotation.x=-s*.34+a*r,this.legL.thigh.rotation.x=-s*.34+o*r,this.legR.knee.rotation.x=s*.72+Math.max(0,-a)*r*1.15,this.legL.knee.rotation.x=s*.72+Math.max(0,-o)*r*1.15,this.legR.ankle.rotation.x=-s*.34-Math.max(0,a)*.22,this.legL.ankle.rotation.x=-s*.34-Math.max(0,o)*.22;const l=t.lunge??0;this.hips.position.y=ot.hipHeight-s*.115-l*.16+Math.abs(Math.sin(this.legPhase))*.035*n+c;const h=t.swing;if(h){const u=lx(zh[h.type]??zh.overhead,h.phase);this.torso.rotation.x=u.lean*Xt,this.torso.rotation.y=u.twist*Xt,this.armR.upper.rotation.x=u.upper*Xt,this.armR.upper.rotation.z=-.18,this.armR.elbow.rotation.x=u.fore*Xt,this.armL.upper.rotation.x=(-40-u.twist*.9)*Xt,this.armL.upper.rotation.z=(28+Math.abs(u.twist)*.35)*Xt,this.armL.elbow.rotation.x=-50*Xt,this.head.rotation.x=-u.lean*.5*Xt,this.head.rotation.y=-u.twist*.35*Xt}else{const u=a*.55*n;this.torso.rotation.x=(s*9+n*7)*Xt,this.torso.rotation.y=qt.lerp(this.torso.rotation.y,-14*Xt,Math.min(1,e*6)),this.armR.upper.rotation.x=(-24-s*16)*Xt-u,this.armR.upper.rotation.z=-.32,this.armR.elbow.rotation.x=(-58-s*22)*Xt,this.armL.upper.rotation.x=(-14-s*10)*Xt+u,this.armL.upper.rotation.z=.3,this.armL.elbow.rotation.x=(-46-s*18)*Xt,this.head.rotation.x=-(s*6+n*5)*Xt,this.head.rotation.y=0}}getRacketHead(e=new I){return this.racket.updateWorldMatrix(!0,!1),e.set(0,.395,0).applyMatrix4(this.racket.matrixWorld)}}const Hh={p1:{jersey:2783976,shorts:1581882,skin:15250572,shoe:15265269,accent:8377599,frame:4891647,number:1},p2:{jersey:15217215,shorts:2757656,skin:14262388,shoe:1777446,accent:16761930,frame:16742986,number:2}},Ha=2.9,Pn=.0135*Ha,ia=.033*Ha,sa=.062*Ha;class dx{constructor(e){this.group=new pt;const t=new We({color:16052712,roughness:.55,emissive:10466508,emissiveIntensity:.35}),n=new se(new On(Pn,16,12),t);n.scale.z=1.15,n.position.z=Pn*.35,n.castShadow=!0,this.group.add(n);const s=new se(new gn(Pn*1.02,Pn*1.02,Pn*.5,16),new We({color:14867920,roughness:.8}));s.rotation.x=Math.PI/2,s.position.z=-Pn*.15,this.group.add(s);const r=new se(new vs(ia,sa,20,1,!0),new We({color:16777215,roughness:.92,metalness:0,emissive:9414852,emissiveIntensity:.22,transparent:!0,opacity:.66,side:mn,depthWrite:!1}));r.userData.noOutline=!0,r.rotation.x=Math.PI/2,r.position.z=-sa/2,this.group.add(r);const a=new al({color:16250351,transparent:!0,opacity:.85}),o=[];for(let d=0;d<16;d++){const g=d/16*Math.PI*2;o.push(new I(Math.cos(g)*Pn*.85,Math.sin(g)*Pn*.85,-Pn*.2),new I(Math.cos(g)*ia,Math.sin(g)*ia,-sa))}this.group.add(new Nu(new Dt().setFromPoints(o),a));for(const[d,g]of[[.45,.5],[.8,.4]]){const _=Pn*.85+(ia-Pn*.85)*d,m=new se(new yr(_,.0016*Ha,5,24),new cn({color:14674165,transparent:!0,opacity:g}));m.userData.noOutline=!0,m.position.z=-sa*d,this.group.add(m)}e.add(this.group),this.trailLen=26,this.history=[];const c=new Float32Array(this.trailLen*2*3),l=new Float32Array(this.trailLen*2),h=new Dt;h.setAttribute("position",new ln(c,3)),h.setAttribute("aAlpha",new ln(l,1));const u=[];for(let d=0;d<this.trailLen-1;d++){const g=d*2,_=d*2+1,m=(d+1)*2,p=(d+1)*2+1;u.push(g,_,m,_,p,m)}h.setIndex(u),this.trailGeo=h;const f=new zt({transparent:!0,depthWrite:!1,blending:Ms,uniforms:{uColor:{value:new Ie(12575999)}},vertexShader:`
        attribute float aAlpha;
        varying float vAlpha;
        void main() {
          vAlpha = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;
        void main() { gl_FragColor = vec4(uColor, vAlpha); }`});this.trail=new se(h,f),this.trail.frustumCulled=!1,this.trail.renderOrder=3,e.add(this.trail),this._v=new I,this._side=new I,this._dir=new I,this._camDir=new I,this.spin=0}reset(){this.history.length=0,this.trailGeo.attributes.aAlpha.array.fill(0),this.trailGeo.attributes.aAlpha.needsUpdate=!0}update(e,t,n,s,r=!0){if(this.group.visible=r,this.trail.visible=r,!r)return;this.group.position.set(t.x,t.y,t.z);const a=Math.hypot(n.x,n.y,n.z);a>.6?(this._v.set(t.x+n.x,t.y+n.y,t.z+n.z),this.group.lookAt(this._v)):this.group.lookAt(t.x,t.y-1,t.z),this.spin+=e*Math.min(28,a*.9),this.group.rotateZ(this.spin*.35),this.history.unshift(new I(t.x,t.y,t.z)),this.history.length>this.trailLen&&this.history.pop();const o=this.trailGeo.attributes.position,c=this.trailGeo.attributes.aAlpha,l=qt.clamp((a-7)/45,0,1),h=.012+l*.055;s.getWorldDirection(this._camDir);for(let u=0;u<this.trailLen;u++){const f=this.history[Math.min(u,this.history.length-1)]??this.history[0],d=this.history[Math.min(u+1,this.history.length-1)]??f;this._dir.subVectors(f,d),this._dir.lengthSq()<1e-9&&this._dir.set(0,0,1),this._side.crossVectors(this._dir,this._camDir).normalize();const g=1-u/this.trailLen,_=h*g,m=l*g*g*.85*(u<this.history.length?1:0);o.setXYZ(u*2,f.x+this._side.x*_,f.y+this._side.y*_,f.z+this._side.z*_),o.setXYZ(u*2+1,f.x-this._side.x*_,f.y-this._side.y*_,f.z-this._side.z*_),c.setX(u*2,m),c.setX(u*2+1,m)}o.needsUpdate=!0,c.needsUpdate=!0}}const At=i=>document.getElementById(i);class px{constructor(){this.el={team1:At("team1"),team2:At("team2"),pts1:At("pts1"),pts2:At("pts2"),name1:At("name1"),name2:At("name2"),rally:At("rallyinfo"),call:At("call"),shot:At("shotname"),charge1:At("charge1").querySelector(".fill"),charge2:At("charge2").querySelector(".fill"),mark1:At("charge1").querySelector(".smash-mark"),mark2:At("charge2").querySelector(".smash-mark"),label1:At("label1"),label2:At("label2"),menu:At("menu"),result:At("result"),verdict:At("verdict"),finalScore:At("finalscore"),stats:At("matchstats"),fps:At("fps")},this._callTimer=0,this._shotTimer=0,this._fpsAcc=0,this._fpsFrames=0,this._qualityLabel=""}setQualityLabel(e){this._qualityLabel=e}setSmashMark(e){this.el.mark1.style.left=`${e*100}%`,this.el.mark2.style.left=`${e*100}%`}setNames(e,t){this.el.name1.textContent=e,this.el.name2.textContent=t,this.el.label1.textContent=e,this.el.label2.textContent=t}setScore(e,t,n,s){this.el.pts1.textContent=e[0],this.el.pts2.textContent=e[1],this.el.team1.classList.toggle("serving",t===0),this.el.team2.classList.toggle("serving",t===1),this.el.rally.textContent=s>2?`第 ${n} 分 · 最长 ${s} 拍`:`第 ${n} 分`}setCharge(e,t){const n=e===0?this.el.charge1:this.el.charge2;n.style.width=`${Math.round(t*100)}%`}showCall(e,t="",n="#ffffff"){const s=this.el.call;if(s.textContent=String(e??""),t){const r=document.createElement("span");r.className="sub",r.textContent=String(t),s.appendChild(r)}s.style.color=n,s.classList.add("show"),this._callTimer=1.5}showShot(e){this.el.shot.textContent=e,this.el.shot.classList.add("show"),this._shotTimer=.7}update(e){if(this._callTimer>0&&(this._callTimer-=e,this._callTimer<=0&&this.el.call.classList.remove("show")),this._shotTimer>0&&(this._shotTimer-=e,this._shotTimer<=0&&this.el.shot.classList.remove("show")),this._fpsAcc+=e,this._fpsFrames++,this._fpsAcc>=.5){const t=Math.round(this._fpsFrames/this._fpsAcc);this.el.fps.textContent=this._qualityLabel?`${t} fps · 画质${this._qualityLabel}`:`${t} fps`,this._fpsAcc=0,this._fpsFrames=0}}showMenu(e){this.el.menu.classList.toggle("hidden",!e)}showResult(e,t,n){this.el.verdict.textContent=`${e} 获胜`,this.el.finalScore.textContent=`${t[0]} : ${t[1]}`,this.el.stats.innerHTML=n,this.el.result.classList.remove("hidden")}hideResult(){this.el.result.classList.add("hidden")}}const Po=["high","medium","low"],pr={high:{name:"高",dpr:2,antialias:!0,shadows:!0,shadowSize:2048,shadowType:Wc,bloom:.24,texturePxPerM:112,envIntensity:.78,reflection:1024},medium:{name:"中",dpr:1.5,antialias:!0,shadows:!0,shadowSize:1024,shadowType:Vc,bloom:.16,texturePxPerM:84,envIntensity:.68,reflection:512},low:{name:"低",dpr:1,antialias:!1,shadows:!1,shadowSize:512,shadowType:ad,bloom:0,texturePxPerM:56,envIntensity:.54,reflection:0}};function mx(){const i=matchMedia("(pointer: coarse)").matches,e=navigator.hardwareConcurrency??4,t=navigator.deviceMemory;return i?e>=6&&(t===void 0||t>=4)?"medium":"low":e<=2?"medium":"high"}class gx{constructor(e,t){this.ctx=e,this.level=t,this.frames=[],this.sinceChange=0,this.onChange=null,this.apply(t)}get config(){return pr[this.level]}apply(e){var c;const t=pr[e];if(!t)return;this.level=e;const{renderer:n,composer:s,bloom:r,scene:a}=this.ctx,o=Math.min(devicePixelRatio||1,t.dpr);n.setPixelRatio(o),s==null||s.setPixelRatio(o),n.shadowMap.enabled=t.shadows,n.shadowMap.type=t.shadowType,n.shadowMap.needsUpdate=!0,a&&(a.environmentIntensity=t.envIntensity),r&&(r.enabled=t.bloom>0,r.strength=t.bloom),a==null||a.traverse(l=>{l.isMesh&&l.material&&(l.material.needsUpdate=!0)}),this.sinceChange=0,this.frames.length=0,(c=this.onChange)==null||c.call(this,e,t)}stepDown(){const e=Po.indexOf(this.level);return e<0||e>=Po.length-1?!1:(this.apply(Po[e+1]),!0)}update(e){if(this.sinceChange+=e,this.sinceChange<2.5||(this.frames.push(e),this.frames.length<90))return;const t=[...this.frames].sort((s,r)=>s-r),n=t[Math.floor(t.length/2)];this.frames.length=0,n>1/42&&this.stepDown()}}function _x(i,e){return new zt({side:kt,uniforms:{uWidth:{value:i},uColor:{value:new Ie(e)}},vertexShader:`
      uniform float uWidth;
      void main() {
        vec3 p = position + normal * uWidth;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform vec3 uColor;
      void main() { gl_FragColor = vec4(uColor, 1.0); }`})}function ju(i,{width:e=.01,color:t=789524}={}){const n=_x(e,t),s=[];i.traverse(r=>{r.isMesh&&!r.userData.noOutline&&!r.userData.isOutline&&s.push(r)});for(const r of s){const a=new se(r.geometry,n);a.userData.isOutline=!0,r.add(a)}return s.length}function vx(){const i=new Xu({uniforms:{tDiffuse:{value:null},uLines:{value:0},uFlash:{value:0},uSeed:{value:0},uAspect:{value:1},uCenter:{value:new Re(.5,.5)},uToon:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uLines, uFlash, uSeed, uAspect, uToon;
      uniform vec2 uCenter;
      varying vec2 vUv;

      float hash(float n) { return fract(sin(n * 127.1 + uSeed * 311.7) * 43758.5453); }

      void main() {
        vec4 col = texture2D(tDiffuse, vUv);

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
      }`});return i.material.transparent=!1,i}class xx{constructor(e,t){this.pass=e,this.camera=t,this.lines=0,this.linesTarget=0,this.flash=0,this._v=new I}smashLaunch(){this.linesTarget=1,this.pass.uniforms.uSeed.value=Math.random()*100}impact(e=1){this.flash=Math.min(1.2,e),this.pass.uniforms.uSeed.value=Math.random()*100}setRallySpeed(e){this.linesTarget<.99&&(this.linesTarget=qt.clamp((e-22)/55,0,.5))}calmDown(){this.linesTarget=0}update(e,t){if(t){this._v.set(t.x,t.y,t.z).project(this.camera);const n=qt.clamp(this._v.x*.5+.5,.12,.88),s=qt.clamp(this._v.y*.5+.5,.12,.88);this.pass.uniforms.uCenter.value.set(n,s)}this.lines+=(this.linesTarget-this.lines)*Math.min(1,e*9),this.flash*=Math.exp(-e*9.5),this.flash<.004&&(this.flash=0),this.pass.uniforms.uLines.value=this.lines,this.pass.uniforms.uFlash.value=Math.min(1,this.flash),this.pass.uniforms.uAspect.value=innerWidth/Math.max(1,innerHeight),this.pass.enabled=!0}}class yx{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Sx(e).buffer}}function Sx(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function Ku(i){return new Mx(i).unpack()}function Zu(i){const e=new Ex,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Mx{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,a;for(;n<e;)r=t[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(a);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Ex{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),a=2**32,o=t<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const a=t[r];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new yx,this._textEncoder=new TextEncoder}}let Ju=!0,Qu=!0;function Ks(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Hi(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){dl("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(o,c){if(o!==e)return r.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[o,l])};const a=s.removeEventListener;s.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Tx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Ju=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function bx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Qu=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function dl(){if(typeof window=="object"){if(Ju)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function pl(i,e){Qu&&console.warn(i+" is deprecated, please use "+e+" instead.")}function Cx(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Ks(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Ks(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Ks(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=Ks(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Gh(i){return Object.prototype.toString.call(i)==="[object Object]"}function ef(i){return Gh(i)?Object.keys(i).reduce(function(e,t){const n=Gh(i[t]),s=n?ef(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function wc(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?wc(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{wc(i,i.get(s),t)})}))}function Vh(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&r.push(a)}),r.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&wc(i,o,s)})}),s}const Wh=dl;function tf(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(f,d){return f?f+d.charAt(0).toUpperCase()+d.slice(1):d==="deviceId"?"sourceId":d};if(h.ideal!==void 0){c.optional=c.optional||[];let f={};typeof h.ideal=="number"?(f[u("min",l)]=h.ideal,c.optional.push(f),f={},f[u("max",l)]=h.ideal,c.optional.push(f)):(f[u("",l)]=h.ideal,c.optional.push(f))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(f=>{h[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(f,l)]=h[f])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},s=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(h,u,f){u in h&&!(f in h)&&(h[f]=h[u],delete h[u])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(f=>{f=f.filter(g=>g.kind==="videoinput");let d=f.find(g=>u.some(_=>g.label.toLowerCase().includes(_)));return!d&&f.length&&u.includes("back")&&(d=f[f.length-1]),d&&(o.video.deviceId=l.exact?{exact:d.deviceId}:{ideal:d.deviceId}),o.video=n(o.video),Wh("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return Wh("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){s(o,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function nf(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function sf(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)}),s.stream.getTracks().forEach(r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Hi(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function rf(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=s.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function af(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const a=s.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>Vh(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),Hi(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>Vh(a,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===s&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(a?o=!0:a=c),c.track===s)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function of(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),s.apply(this,arguments)}}function cf(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return of(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(d=>d.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[u.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new i.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],g=l._streams[d.id];u=u.replace(new RegExp(g.id,"g"),d.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function a(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],g=l._streams[d.id];u=u.replace(new RegExp(d.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const _=r(this,g);f[0].apply(null,[_])},g=>{f[1]&&f[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[l]=u[l]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(d=>{this._streams[d].getTracks().find(_=>h.track===_)&&(f=this._streams[d])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Pc(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function lf(i,e){e.version>102||Hi(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Xh=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:lf,shimAddTrackRemoveTrack:cf,shimAddTrackRemoveTrackWithNative:of,shimGetSendersWithDtmf:rf,shimGetUserMedia:tf,shimMediaStream:nf,shimOnTrack:sf,shimPeerConnection:Pc,shimSenderReceiverGetStats:af},Symbol.toStringTag,{value:"Module"}));function hf(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,a){pl("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a.audio,"autoGainControl","mozAutoGainControl"),s(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return s(o,"mozAutoGainControl","autoGainControl"),s(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o,"autoGainControl","mozAutoGainControl"),s(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function Ax(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function uf(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Dc(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function ff(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(a,o)}}function df(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function pf(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),Hi(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function mf(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){pl("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function gf(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function _f(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,o.sendEncodings=s,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function vf(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function xf(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function yf(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const $h=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:_f,shimCreateAnswer:yf,shimCreateOffer:xf,shimGetDisplayMedia:Ax,shimGetParameters:vf,shimGetStats:ff,shimGetUserMedia:hf,shimOnTrack:uf,shimPeerConnection:Dc,shimRTCDataChannel:gf,shimReceiverGetStats:pf,shimRemoveStream:mf,shimSenderGetStats:df},Symbol.toStringTag,{value:"Module"}));function Sf(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Mf(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Ef(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=t.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f};let o=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=o,o=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=o,o=function(c,l,h){const u=a.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=o}function Tf(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(bf(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}).bind(e))}function bf(i){return i&&i.video!==void 0?Object.assign({},i,{video:ef(i.video)}):i}function Cf(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(pl("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Af(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Rf(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function wf(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const qh=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:wf,shimCallbacksAPI:Ef,shimConstraints:bf,shimCreateOfferLegacy:Rf,shimGetUserMedia:Tf,shimLocalStreamsAPI:Sf,shimRTCIceServerUrls:Cf,shimRemoteStreamsAPI:Mf,shimTrackEventTransceiver:Af},Symbol.toStringTag,{value:"Module"}));function Rx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Do={exports:{}},Yh;function wx(){return Yh||(Yh=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let s;const r=t.substring(t.indexOf(" ")+1).split(";");for(let a=0;a<r.length;a++)s=r[a].trim().split("="),n[s[0].trim()]=s[1];return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?r.push(a+"="+t.parameters[a]):r.push(a)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let o=3;o<r.length;o++){const c=r[o],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{n.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(a=>{s+=e.writeRtpMap(a),s+=e.writeFmtp(a),s+=e.writeRtcpFb(a)});let r=0;return n.codecs.forEach(a=>{a.maxptime>r&&(r=a.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{s+=e.writeExtmap(a)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,a=s.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(f=>f.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(f=>{if(f.name.toUpperCase()==="RTX"&&f.parameters.apt){let d={ssrc:c,codecPayloadType:parseInt(f.parameters.apt,10)};c&&l&&(d.rtx={ssrc:l}),n.push(d),r&&(d=JSON.parse(JSON.stringify(d)),d.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(d))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(f=>{f.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return n.mux=a.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const a=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(Do)),Do.exports}var Pf=wx();const xs=Rx(Pf),Px=id({__proto__:null,default:xs},[Pf]);function da(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=xs.parseCandidate(n.candidate);for(const a in r)a in s||Object.defineProperty(s,a,{value:r[a]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,Hi(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Ic(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||Hi(i,"icecandidate",e=>{if(e.candidate){const t=xs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function pa(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=xs.splitSections(o.sdp);return c.shift(),c.some(l=>{const h=xs.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=xs.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return u}}),this._sctp=f}return a.apply(this,arguments)}}function ma(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const a=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Hi(i,"datachannel",s=>(t(s.channel,s.target),s))}function Lc(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",s);r.dispatchEvent(a)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Uc(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function ga(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function _a(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const Dx=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Uc,shimAddIceCandidateNullOrEmpty:ga,shimConnectionState:Lc,shimMaxMessageSize:pa,shimParameterlessSetLocalDescription:_a,shimRTCIceCandidate:da,shimRTCIceCandidateRelayProtocol:Ic,shimSendThrowTypeError:ma},Symbol.toStringTag,{value:"Module"}));function Ix({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=dl,n=Cx(i),s={browserDetails:n,commonShim:Dx,extractVersion:Ks,disableLog:Tx,disableWarnings:bx,sdp:Px};switch(n.browser){case"chrome":if(!Xh||!Pc||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=Xh,ga(i,n),_a(i),tf(i,n),nf(i),Pc(i,n),sf(i,n),cf(i,n),rf(i),af(i,n),lf(i,n),da(i),Ic(i),Lc(i),pa(i,n),ma(i,n),Uc(i,n);break;case"firefox":if(!$h||!Dc||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=$h,ga(i,n),_a(i),hf(i,n),Dc(i,n),ff(i,n),uf(i),mf(i),df(i),pf(i),gf(i),_f(i,n),vf(i,n),xf(i,n),yf(i,n),da(i),Lc(i),pa(i,n),ma(i,n);break;case"safari":if(!qh||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=qh,ga(i,n),_a(i),Cf(i),Rf(i),Ef(i),Sf(i),Mf(i),Af(i),Tf(i),wf(i),da(i),Ic(i),pa(i,n),ma(i,n),Uc(i,n);break;default:t("Unsupported browser!");break}return s}const jh=Ix({window:typeof window>"u"?void 0:window});function Gi(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Df{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),a=o,r++}return this._dataCount++,t}}}function Lx(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const Io=jh.default||jh,qs=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Io.browserDetails.browser}getVersion(){return Io.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=Io.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Ux=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),If=()=>Math.random().toString(36).slice(2),Kh={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Nx extends Df{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Kh,this.browser=qs.getBrowser(),this.browserVersion=qs.getVersion(),this.pack=Zu,this.unpack=Ku,this.supports=(function(){const t={browser:qs.isBrowserSupported(),webRTC:qs.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Kh),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!qs.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Ux,this.randomToken=If}}const on=new Nx,Fx="PeerJS: ";class Ox{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[Fx,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var me=new Ox,ml={},Bx=Object.prototype.hasOwnProperty,sn="~";function mr(){}Object.create&&(mr.prototype=Object.create(null),new mr().__proto__||(sn=!1));function zx(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Lf(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new zx(t,n||i,s),a=sn?sn+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],r]:i._events[a].push(r):(i._events[a]=r,i._eventsCount++),i}function va(i,e){--i._eventsCount===0?i._events=new mr:delete i._events[e]}function jt(){this._events=new mr,this._eventsCount=0}jt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Bx.call(t,n)&&e.push(sn?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};jt.prototype.listeners=function(e){var t=sn?sn+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,a=new Array(r);s<r;s++)a[s]=n[s].fn;return a};jt.prototype.listenerCount=function(e){var t=sn?sn+e:e,n=this._events[t];return n?n.fn?1:n.length:0};jt.prototype.emit=function(e,t,n,s,r,a){var o=sn?sn+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,a),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var f=c.length,d;for(u=0;u<f;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c[u].fn.apply(c[u].context,h)}}return!0};jt.prototype.on=function(e,t,n){return Lf(this,e,t,n,!1)};jt.prototype.once=function(e,t,n){return Lf(this,e,t,n,!0)};jt.prototype.removeListener=function(e,t,n,s){var r=sn?sn+e:e;if(!this._events[r])return this;if(!t)return va(this,r),this;var a=this._events[r];if(a.fn)a.fn===t&&(!s||a.once)&&(!n||a.context===n)&&va(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||s&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:va(this,r)}return this};jt.prototype.removeAllListeners=function(e){var t;return e?(t=sn?sn+e:e,this._events[t]&&va(this,t)):(this._events=new mr,this._eventsCount=0),this};jt.prototype.off=jt.prototype.removeListener;jt.prototype.addListener=jt.prototype.on;jt.prefixed=sn;jt.EventEmitter=jt;ml=jt;var Vi={};Gi(Vi,"ConnectionType",()=>gi);Gi(Vi,"PeerErrorType",()=>Pt);Gi(Vi,"BaseConnectionErrorType",()=>Nc);Gi(Vi,"DataConnectionErrorType",()=>gl);Gi(Vi,"SerializationType",()=>Ga);Gi(Vi,"SocketEventType",()=>pi);Gi(Vi,"ServerMessageType",()=>$t);var gi=(function(i){return i.Data="data",i.Media="media",i})({}),Pt=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),Nc=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),gl=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),Ga=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),pi=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),$t=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const Uf="1.5.5";class kx extends ml.EventEmitter{constructor(e,t,n,s,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Uf),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),me.log("Server message received:",r)}catch{me.log("Invalid server message",s.data);return}this.emit(pi.Message,r)},this._socket.onclose=s=>{this._disconnected||(me.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(pi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),me.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){me.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:$t.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(pi.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Nf{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===gi.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){me.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;me.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(me.log(`Received ICE candidates for ${t}:`,a.candidate),r.socket.send({type:$t.Candidate,payload:{candidate:a.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":me.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Nc.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":me.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Nc.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":me.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},me.log("Listening for data channel"),e.ondatachannel=a=>{me.log("Received data channel");const o=a.channel;r.getConnection(t,n)._initializeDataChannel(o)},me.log("Listening for remote stream"),e.ontrack=a=>{me.log("Received remote stream");const o=a.streams[0],c=r.getConnection(t,n);if(c.type===gi.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){me.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);me.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),me.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===gi.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:$t.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Pt.WebRTC,s),me.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Pt.WebRTC,n),me.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();me.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),me.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:$t.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Pt.WebRTC,s),me.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Pt.WebRTC,n),me.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;me.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),me.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(a){s.emitError(Pt.WebRTC,a),me.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){me.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),me.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Pt.WebRTC,t),me.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(me.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return me.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){me.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Ff extends ml.EventEmitter{emitError(e,t){me.error("Error:",t),this.emit("error",new Hx(`${e}`,t))}}class Hx extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Of extends Ff{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var Bc;const ar=class ar extends Of{get type(){return gi.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||ar.ID_PREFIX+on.randomToken(),this._negotiator=new Nf(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{me.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{me.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){me.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case $t.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case $t.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:me.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){me.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Bc=new WeakMap,Os(ar,Bc,ar.ID_PREFIX="mc_");let wa=ar;class Gx{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:a}=this._options,o=new URL(`${t}://${n}:${s}${r}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",Uf),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){me.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==on.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===on.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw me.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var zc,kc;const Ii=class Ii extends Of{get type(){return gi.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Ii.ID_PREFIX+If(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Nf(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{me.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{me.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{me.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(gl.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case $t.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case $t.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:me.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};zc=new WeakMap,kc=new WeakMap,Os(Ii,zc,Ii.ID_PREFIX="dc_"),Os(Ii,kc,Ii.MAX_BUFFERED_AMOUNT=8388608);let Pa=Ii;class _l extends Pa{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Pa.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return me.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Lo extends _l{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Df,this.serialization=Ga.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Ku(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=Lx(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=Zu(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);me.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Vx extends _l{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Ga.None}}class Wx extends _l{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=on.chunkedMTU){this.emitError(gl.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Ga.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Hc;const or=class or extends Ff{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Vx,json:Wx,binary:Lo,"binary-utf8":Lo,default:Lo},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:on.CLOUD_HOST,port:on.CLOUD_PORT,path:"/",key:or.DEFAULT_KEY,token:on.randomToken(),config:on.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==on.CLOUD_HOST?this._options.secure=on.isSecure():this._options.host==on.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&me.setLogFunction(this._options.logFunction),me.logLevel=this._options.debug||0,this._api=new Gx(t),this._socket=this._createServerConnection(),!on.supports.audioVideo&&!on.supports.data){this._delayedAbort(Pt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!on.validateId(n)){this._delayedAbort(Pt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Pt.ServerError,s))}_createServerConnection(){const e=new kx(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(pi.Message,t=>{this._handleMessage(t)}),e.on(pi.Error,t=>{this._abort(Pt.SocketError,t)}),e.on(pi.Disconnected,()=>{this.disconnected||(this.emitError(Pt.Network,"Lost connection to server."),this.disconnect())}),e.on(pi.Close,()=>{this.disconnected||this._abort(Pt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case $t.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case $t.Error:this._abort(Pt.ServerError,n.msg);break;case $t.IdTaken:this._abort(Pt.UnavailableID,`ID "${this.id}" is taken`);break;case $t.InvalidKey:this._abort(Pt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case $t.Leave:me.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case $t.Expire:this.emitError(Pt.PeerUnavailable,`Could not connect to peer ${s}`);break;case $t.Offer:{const r=n.connectionId;let a=this.getConnection(s,r);if(a&&(a.close(),me.warn(`Offer received for existing Connection ID:${r}`)),n.type===gi.Media){const c=new wa(s,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(s,a),this.emit("call",c)}else if(n.type===gi.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(s,a),this.emit("connection",c)}else{me.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!n){me.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,a=this.getConnection(s,r);a&&a.peerConnection?a.handleMessage(e):r?this._storeMessage(r,e):me.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){me.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Pt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){me.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Pt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){me.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new wa(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){me.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){me.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(me.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;me.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)me.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)me.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Pt.ServerError,t))}};Hc=new WeakMap,Os(or,Hc,or.DEFAULT_KEY="peerjs");let Da=or;const Zh="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Xx=4,Jh="shuttle-clash-v1-",Qh={iceServers:[{urls:"stun:stun.miwifi.com:3478"},{urls:"stun:stun.chat.bilibili.com:3478"},{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.cloudflare.com:3478"}]};function $x(){let i="";for(let e=0;e<Xx;e++)i+=Zh[Math.random()*Zh.length|0];return i}class Bf{constructor(){this.peer=null,this.conn=null,this.role=null,this.code=null,this.onMessage=null,this.onPeerJoin=null,this.onClose=null,this.onError=null,this._closed=!1}host(e){return this.role="host",new Promise((t,n)=>{let s=0;const r=()=>{this.code=$x();const a=new Da(Jh+this.code,{debug:0,config:Qh});a.on("open",()=>{this.peer=a,e==null||e(this.code),t(this.code)}),a.on("error",o=>{var c;o.type==="unavailable-id"&&s++<5?(a.destroy(),r()):this.peer?(c=this.onError)==null||c.call(this,o):n(o)}),a.on("connection",o=>{if(this.conn){o.close();return}this._wire(o),o.on("open",()=>{var c;return(c=this.onPeerJoin)==null?void 0:c.call(this)})})};r()})}join(e){return this.role="guest",this.code=e.toUpperCase().trim(),new Promise((t,n)=>{const s=new Da({debug:0,config:Qh});this.peer=s,s.on("error",r=>{var a,o;(a=this.conn)!=null&&a.open?(o=this.onError)==null||o.call(this,r):n(r)}),s.on("open",()=>{const r=s.connect(Jh+this.code,{reliable:!0});this._wire(r),r.on("open",()=>t()),setTimeout(()=>{r.open||n(new Error("连接超时"))},12e3)})})}_wire(e){this.conn=e,e.on("data",t=>{var n;return(n=this.onMessage)==null?void 0:n.call(this,t)}),e.on("close",()=>{var t;this._closed||(t=this.onClose)==null||t.call(this)}),e.on("error",t=>{var n;return(n=this.onError)==null?void 0:n.call(this,t)})}get connected(){var e;return!!((e=this.conn)!=null&&e.open)}send(e){var t;(t=this.conn)!=null&&t.open&&this.conn.send(e)}close(){var e,t;this._closed=!0;try{(e=this.conn)==null||e.close()}catch{}try{(t=this.peer)==null||t.destroy()}catch{}this.conn=null,this.peer=null}}class qx{constructor(){this.dir={x:0,z:0},this.aim={x:0,z:0},this.held=!1,this.assist=!1,this._latchedRelease=!1,this._latchedPress=!1}reset(){this.dir={x:0,z:0},this.aim={x:0,z:0},this.held=!1,this.assist=!1,this._latchedRelease=!1,this._latchedPress=!1}apply(e){const t=r=>typeof r=="number"&&Number.isFinite(r)?r:null,n=r=>{if(!Array.isArray(r)||r.length<2)return null;const a=t(r[0]),o=t(r[1]);if(a===null||o===null)return null;const c=Math.hypot(a,o);return c>1?{x:a/c,z:o/c}:{x:a,z:o}},s=n(e.d);return s?(this.dir=s,this.aim=n(e.a)??s,this.assist=e.as===1||e.as===!0,(e.p===1||e.p===!0)&&(this._latchedPress=!0),(e.r===1||e.r===!0)&&(this._latchedRelease=!0),this.held=e.h===1||e.h===!0,!0):!1}move(){return{...this.dir}}aimDir(){return{...this.aim}}consumeCancel(){return!1}hitHeld(){return this.held}hitPressed(){return this._latchedPress}hitReleased(){return this._latchedRelease}endFrame(){this._latchedPress=!1,this._latchedRelease=!1}}function Yx(i,e){const t=i.ball;return{t:"s",b:[t.x,t.y,t.z,t.vx,t.vy,t.vz,t.alive?1:0],p:e.map(n=>{var s,r,a;return[n.x,n.z,n.vx,n.vz,n.charging?n.charge:0,n.swing?1:0,((s=n.swing)==null?void 0:s.type)??"",((r=n.swing)==null?void 0:r.phase)??0,(a=n.swing)!=null&&a.playing?1:0]}),sc:[i.score[0],i.score[1]],srv:i.server,ph:i.phase,rh:i.rallyHits,lr:i.longestRally,ms:i.matchMaxSpeed}}function jx(i,e,t){const n=e.ball;[n.x,n.y,n.z,n.vx,n.vy,n.vz]=i.b,n.alive=!!i.b[6],i.p.forEach((s,r)=>{const a=t[r];a.netX=s[0],a.netZ=s[1],a.vx=s[2],a.vz=s[3],a.charge=s[4],a.charging=s[4]>.001,a.swing=s[5]?{type:s[6]||"drive",phase:s[7],playing:!!s[8]}:null}),e.score[0]=i.sc[0],e.score[1]=i.sc[1],e.server=i.srv,e.phase=i.ph,e.rallyHits=i.rh,e.longestRally=i.lr,e.matchMaxSpeed=i.ms}function Kx(i,e,t,n,s,r,a,o,c){const l=n-i,h=s-e,u=r-t,f=l*l+h*h+u*u;if(f<1e-12)return 0;const d=((a-i)*l+(o-e)*h+(c-t)*u)/f;return Math.max(0,Math.min(1,d))}let xa=1;function Tn(){return xa=xa*1103515245+12345&2147483647,xa/2147483647}const hs={ROCK:"rock",TREE:"tree",RAMP:"ramp"};class Zx{constructor(){this.reset(),this.events=[]}reset(e=20260804){xa=e,this.px=0,this.py=0,this.vy=0,this.airborne=!1,this.rot=0,this.flipping=!1,this.flips=0,this.tuck=!1,this.stumbleTimer=0,this.speed=tt.BASE_SPEED,this.topSpeed=tt.BASE_SPEED,this.dist=0,this.avalDist=-45,this.time=0,this.score=0,this.combo=0,this.bestCombo=0,this.trickTimer=0,this.trickMult=1,this.smashes=0,this.bestAir=0,this.obstacles=[],this.ball={x:0,y:0,z:0,vx:0,vy:0,vz:0,px:0,py:0,pz:0,alive:!1},this.ballCooldown=1.6,this.nextSegZ=tt.SPAWN_Z,this.over=!1;for(let t=-30;t>tt.SPAWN_Z;t-=tt.SEG_LEN)this._genSegment(t);this.charge=0,this.charging=!1,this.swingCooldown=0,this.swing=null,this._prevDirZ=0}emit(e){this.events.push(e)}drainEvents(){const e=this.events;return this.events=[],e}_genSegment(e){const t=2+(Tn()*2.4|0);for(let n=0;n<t;n++){const s=Tn()<.3?hs.RAMP:Tn()<.55?hs.TREE:hs.ROCK;this.obstacles.push({type:s,x:(Tn()*2-1)*(tt.WIDTH-.5),z:e-Tn()*tt.SEG_LEN,hit:!1})}}_launchBall(){const e={x:this.px+(Tn()*2-1)*1.1,z:1.2+Tn()*.9},t=Tn()>.5?1:-1,n=12.5,s=t*(tt.WIDTH+1.8),r=-(8+Tn()*3),a=Math.sqrt(Math.max(1,n*n-(e.z-r)**2)),o=Math.sign(s-e.x)*Math.min(Math.abs(s-e.x),a),c={x:e.x+o,y:2+Tn()*1.4,z:r},l=ua(c,e,24+Tn()*14,{needNet:!1});if(!l){this.ballCooldown=.8;return}const h=this.ball;h.x=c.x,h.y=c.y,h.z=c.z,h.px=h.x,h.py=h.y,h.pz=h.z,h.vx=l.velocity.x,h.vy=l.velocity.y,h.vz=l.velocity.z,h.alive=!0,this.emit({type:"ball-launch",side:t})}update(e,t,n,s){if(this.over)return;const r=1/120;let a=Math.min(e,.25),o=!0;for(;a>1e-9&&!this.over;){const c=Math.min(r,a);this._step(c,t,n,o&&s),a-=c,o=!1}}_step(e,t,n,s){var f;this.time+=e;const r=this.stumbleTimer>0;r&&(this.stumbleTimer-=e),this.tuck=t.z>.55&&!this.airborne;let a=Math.min(tt.MAX_SPEED,tt.BASE_SPEED+this.time*tt.ACCEL)+(this.tuck?tt.TUCK_BONUS:0);r&&(a*=tt.STUMBLE_SLOW),this.speed+=(a-this.speed)*Math.min(1,e*2.2),this.topSpeed=Math.max(this.topSpeed,this.speed),r||(this.px+=t.x*tt.STEER*e*(this.airborne?.55:1)),this.px=Math.max(-5,Math.min(tt.WIDTH,this.px));const o=t.z<-.6&&this._prevDirZ>=-.6;if(this._prevDirZ=t.z,o&&!r)if(this.airborne)this.flipping||(this.flipping=!0);else{const d=this.obstacles.find(g=>g.type===hs.RAMP&&!g.hit&&Math.abs(g.x-this.px)<1.5&&g.z>-2.5&&g.z<1.5);d&&(d.hit=!0),this.vy=d?tt.RAMP_V:tt.HOP_V,this.airborne=!0,this.emit({type:d?"ramp-jump":"hop"})}if(this.airborne){if(this.vy-=Tt.GRAVITY*e,this.py+=this.vy*e,this.flipping){this.rot+=tt.FLIP_RATE*e;const d=Math.floor(this.rot/(Math.PI*2));d>this.flips&&(this.flips=d,this.emit({type:"flip",n:this.flips}))}if(this.bestAir=Math.max(this.bestAir,this.py),this.py<=0&&this.vy<0){if(this.py=0,this.airborne=!1,this.flipping){const d=this.rot/(Math.PI*2);if(d>=tt.MIN_FLIP_TURNS){const g=Math.max(1,Math.round(d));this.trickMult=1+g,this.trickTimer=tt.TRICK_WINDOW,this.speed+=tt.TRICK_BOOST*g,this.emit({type:"trick-land",flips:g,mult:this.trickMult})}else this._stumble("没转过来!")}this.rot=0,this.flips=0,this.flipping=!1}}this.trickTimer>0&&(this.trickTimer-=e,this.trickTimer<=0&&(this.trickMult=1));const c=this.speed*e;this.dist+=c,this.nextSegZ+=c,this.nextSegZ>tt.SPAWN_Z+tt.SEG_LEN&&(this._genSegment(tt.SPAWN_Z),this.nextSegZ=tt.SPAWN_Z);for(const d of this.obstacles)d.z+=c,!d.hit&&d.type!==hs.RAMP&&d.z>-.5&&d.z<.6&&Math.abs(d.x-this.px)<.72&&this.py<.85&&(d.hit=!0,this._stumble(d.type===hs.TREE?"撞树上了":"磕在石头上"));this.obstacles=this.obstacles.filter(d=>d.z<tt.KILL_Z);const l=tt.AVAL_SPEED0+this.time*tt.AVAL_ACCEL;this.avalDist+=l*e;const h=tt.AVAL_GAP0;if(this.dist-this.avalDist>h&&(this.avalDist=this.dist-h),this.avalDist>=this.dist){this.over=!0,this.emit({type:"run-over"});return}const u=this.ball;if(u.alive?(u.px=u.x,u.py=u.y,u.pz=u.z,Us(u,e),(u.y<=Tt.RADIUS||u.z>6)&&(u.alive=!1,this.ballCooldown=1.2+Tn()*1.4,this.combo>0&&(this.combo=Math.floor(this.combo/2),this.emit({type:"ball-miss"})))):(this.ballCooldown-=e,this.ballCooldown<=0&&this._launchBall()),this.swingCooldown>0&&(this.swingCooldown-=e),(f=this.swing)!=null&&f.playing&&(this.swing.phase+=e/.3,this.swing.phase>=1&&(this.swing=null)),n&&this.swingCooldown<=0&&!r?(this.charging=!0,this.charge=Math.min(1,this.charge+e/it.CHARGE_TIME),this.swing={type:"overhead",phase:.04+this.charge*.3,playing:!1}):!n&&!s&&(this.charging=!1),s&&this.swingCooldown<=0&&!r){const d=Math.max(.35,this.charge);this.charging=!1,this.charge=0,this.swing&&(this.swing.playing=!0),this._trySmash(d)}}_trySmash(e){const t=this.ball;if(!t.alive){this.swingCooldown=it.SWING_COOLDOWN,this.emit({type:"whiff"});return}const n=1.3+this.py,s=Kx(t.px,t.py,t.pz,t.x,t.y,t.z,this.px,n,0),r=t.px+(t.x-t.px)*s,a=t.py+(t.y-t.py)*s,o=t.pz+(t.z-t.pz)*s,c=Math.hypot(r-this.px,a-n,o-0);if(c>it.REACH_RADIUS*1.6){this.swingCooldown=it.SWING_COOLDOWN,this.emit({type:"whiff"});return}const l=1-Math.min(1,c/(it.REACH_RADIUS*1.6)),h=this.airborne;t.vx=(r-this.px)*6,t.vy=6+e*10,t.vz=-(38+e*30),t.x=r,t.y=Math.max(.5,a),t.z=o,this.combo+=1,this.bestCombo=Math.max(this.bestCombo,this.combo);const u=1+Math.min(2,this.combo*.12);let f=120*(.55+l*.9)*(.7+e*.6)*u*this.trickMult;h&&(f*=2),f=Math.round(f/10)*10,this.score+=f,this.smashes+=1,this.avalDist-=1.2+l*1.8,this.emit({type:"smash",pts:f,quality:l,aerial:h,trickMult:this.trickMult,combo:this.combo,at:{x:r,y:a,z:o}}),t.alive=!0}_stumble(e){this.stumbleTimer=tt.STUMBLE_TIME,this.combo=0,this.trickTimer=0,this.trickMult=1,this.rot=0,this.flips=0,this.flipping=!1,this.emit({type:"stumble",reason:e})}get avalCloseness(){return Math.max(0,Math.min(1,1-(this.dist-this.avalDist)/tt.AVAL_GAP0))}get stats(){return{score:this.score,dist:Math.round(this.dist),bestCombo:this.bestCombo,smashes:this.smashes,bestAir:+this.bestAir.toFixed(1)}}}function Jx(){const i=document.createElement("canvas");i.width=512,i.height=1024;const e=i.getContext("2d");e.fillStyle="#5f6d82",e.fillRect(0,0,i.width,i.height);for(let n=0;n<9e3;n++){const s=Math.random();e.fillStyle=s>.5?`rgba(230,240,255,${.03+Math.random()*.07})`:`rgba(30,45,70,${.03+Math.random()*.06})`,e.fillRect(Math.random()*512,Math.random()*1024,1.5,1.5)}e.strokeStyle="rgba(40,60,90,0.16)",e.lineWidth=3;for(let n=0;n<7;n++){const s=Math.random()*512;e.beginPath(),e.moveTo(s,0),e.bezierCurveTo(s+30,300,s-30,700,s+10,1024),e.stroke()}const t=new Nn(i);return t.colorSpace=Rt,t.wrapS=t.wrapT=Fi,t.repeat.set(2,6),t.anisotropy=8,t}function Qx(i){const e=new pt;e.visible=!1,i.add(e);const t=Jx(),n=Ra(t.image,2);n.repeat.copy(t.repeat);const s=new se(new Qt(40,220),new zu({map:t,normalMap:n,normalScale:new Re(.7,.7),roughness:.82,metalness:0,clearcoat:.18,clearcoatRoughness:.5,envMapIntensity:.5}));s.rotation.x=-Math.PI/2,s.position.z=-80,s.receiveShadow=!0,e.add(s);const r=new We({color:5924992,roughness:1});for(const C of[1,-1]){const b=new se(new nt(2.4,1.1,220),r);b.position.set(C*(tt.WIDTH+1.9),.5,-80),e.add(b)}const a=new cn({color:1845056,fog:!1});for(const[C,b,R]of[[-16,26,-170],[14,32,-185],[0,22,-178],[-30,30,-190],[28,24,-175]]){const S=new se(new vs(16,b,5),a);S.position.set(C,b/2-2,R),e.add(S)}const o=new We({color:4015961,roughness:.9}),c=new We({color:2760729,roughness:.95}),l=new We({color:1325099,roughness:.9}),h=new We({color:9148588,roughness:1}),u=new We({color:10135743,roughness:.65}),f=()=>{const C=new pt,b=new se(new tr(.55,0),o);b.scale.set(1.15,.8,1),b.position.y=.35,b.castShadow=!0;const R=new se(new tr(.42,0),h);return R.scale.set(1.1,.4,.95),R.position.y=.72,C.add(b,R),C},d=()=>{const C=new pt,b=new se(new gn(.09,.13,.7,7),c);b.position.y=.35,C.add(b);for(let R=0;R<3;R++){const S=new se(new vs(.75-R*.18,.85,8),l);S.position.y=.95+R*.55,S.castShadow=!0,C.add(S);const x=new se(new vs(.72-R*.18,.28,8),h);x.position.y=1.24+R*.55,C.add(x)}return C},g=()=>{const C=new pt,b=new se(new nt(2.4,.55,2),u);b.rotation.x=-.32,b.position.y=.16,b.castShadow=!0,C.add(b);const R=new se(new nt(2.5,.08,.2),new cn({color:15223634}));return R.position.set(0,.52,-.85),R.rotation.x=-.32,C.add(R),C},_={rock:[],tree:[],ramp:[]};for(let C=0;C<12;C++){const b=f();b.visible=!1,e.add(b),_.rock.push(b)}for(let C=0;C<12;C++){const b=d();b.visible=!1,e.add(b),_.tree.push(b)}for(let C=0;C<8;C++){const b=g();b.visible=!1,e.add(b),_.ramp.push(b)}const m=new pt,p=new We({color:11187912,roughness:1,transparent:!0,opacity:.92});for(let C=0;C<9;C++){const b=new se(new tr(1.6+Math.random()*1.6,1),p);b.position.set((C-4)*2.3+(Math.random()-.5),.8+Math.random()*2.2,(Math.random()-.5)*1.5),b.userData.wob=Math.random()*Math.PI*2,m.add(b)}e.add(m);const E=420,T=new Float32Array(E*3);for(let C=0;C<E;C++)T[C*3]=(Math.random()-.5)*30,T[C*3+1]=Math.random()*12,T[C*3+2]=-Math.random()*60+8;const v=new Dt;v.setAttribute("position",new ln(T,3));const A=new Ip(v,new Fu({color:14543093,size:.09,transparent:!0,opacity:.85,depthWrite:!1}));return e.add(A),{group:e,groundTex:t,pools:_,avalanche:m,flakes:A,update(C,b){t.offset.y-=b.speed*C/(220/6),n.offset.copy(t.offset);const R={rock:0,tree:0,ramp:0};for(const L of Object.keys(_))_[L].forEach(O=>{O.visible=!1});for(const L of b.obstacles){const O=_[L.type],H=R[L.type]++;if(!O||H>=O.length)continue;const V=O[H];V.visible=!L.hit||L.type==="ramp",V.position.set(L.x,0,L.z)}const S=b.dist-b.avalDist;m.position.z=2+Math.max(0,Math.min(9,S*.28));const x=performance.now()*.002;m.children.forEach(L=>{L.position.y=.8+Math.abs(Math.sin(x+L.userData.wob))*2,L.rotation.x+=C*2.2});const P=v.attributes.position.array;for(let L=0;L<E;L++)P[L*3+1]-=C*(1.6+L%5*.3),P[L*3+2]+=C*b.speed*.5,(P[L*3+1]<0||P[L*3+2]>8)&&(P[L*3]=(Math.random()-.5)*30,P[L*3+1]=8+Math.random()*5,P[L*3+2]=-Math.random()*60);v.attributes.position.needsUpdate=!0}}}const Uo=1/120,eu=14,Wi=Dv(),Ia=mx();tx(pr[Ia].texturePxPerM);const{scene:Un,camera:zn,composer:La,renderer:zf,bloom:ey}=Qv(document.getElementById("app"),{antialias:pr[Ia].antialias,dpr:pr[Ia].dpr}),Sr=cx(Un),Va=Qx(Un),Wn=new ex(zn),Mr=new gx({renderer:zf,composer:La,bloom:ey,scene:Un},Ia),tn=[new Uh(0,1),new Uh(1,-1)],xn=[new kh(Hh.p1),new kh(Hh.p2)];xn[0].root.rotation.y=Math.PI;xn[1].root.rotation.y=0;Un.add(xn[0].root,xn[1].root);const Ze=new kv(tn),Xi=new dx(Un),at=new px,Ot=new Iv;for(const i of xn)ju(i.root,{width:.017});ju(Xi.group,{width:.024});const kf=vx();La.insertPass(kf,La.passes.length-1);const _n=new xx(kf,zn);at.setQualityLabel(Mr.config.name);Sr.setReflector(Mr.config.reflection);Mr.onChange=(i,e)=>{at.setQualityLabel(e.name),Sr.setReflector(e.reflection),console.info("[shuttle-clash] 画质档位 →",i)};const yn=new Rv,_e=Wi?new Pv(document.getElementById("app")):null,ui=[new Lh,new Lh];let di=[],ei=[yn,yn],xt=Wi?"normal":"duo";const ds=()=>_e??yn;let Fe=null,mt=null,Bt=0;const ys=new qx;let No=0,Fo=0;const Wa=i=>Bt===1?1-i:i;let Ss=localStorage.getItem("sc-assist")!=="0",nr=[];at.setSmashMark(it.SMASH_MIN_CHARGE);const Ni=Rc(Un,.62,.55),gr=[Rc(Un,.95,.42),Rc(Un,.95,.42)];function Hf(i,e,t){const n=new se(new cl(e,t,48),new cn({color:i,transparent:!0,opacity:0,depthWrite:!1,side:mn}));return n.rotation.x=-Math.PI/2,n.position.y=.02,n.renderOrder=4,Un.add(n),n}const Qn=Hf(8380671,.3,.38),ir=Hf(6356890,.34,.45);let sr=0,Fc=!0;const rr=new se(new On(.16,14,10),new cn({color:16777215,transparent:!0,opacity:0,blending:Ms,depthWrite:!1}));Un.add(rr);let Zs=0,Gf=1,Ua=0,Oc=0;const ya=[];let Js=0,_r=performance.now(),nn=!1,Oo=0;function ty(i){_e==null||_e.beginFrame();for(const e of di)e.update(i,Ze,tn[1-e.player.index]);for(const e of nr)e.inner===ys&&(e.enabled=ys.assist),e.update(i,Ze);Ze.update(i,ei),yn.endFrame(),_e==null||_e.endFrame(),ui[0].endFrame(),ui[1].endFrame(),ys.endFrame(),Vf()}function Vf(){var e,t,n,s,r,a,o,c;const i=Ze.drainEvents();mt==="host"&&(Fe!=null&&Fe.connected)&&i.length&&Fe.send({t:"e",e:i});for(const l of i){if(l.type==="hit"){const{shot:h,speed:u}=l;Ot.hit(h.style,h.charge,u),rr.position.set(h.from.x,h.from.y,h.from.z),Zs=1,Gf=h.style==="smash"?2.1:1+h.charge*.5,Wn.punch(h.style==="smash"?.85:.22+h.charge*.25),h.style==="smash"?(Ua=.045,_n.smashLaunch(),_n.impact(.9),ti("唰!!",h.hitter===0?"#ffd94d":"#ff9b6b",h.from)):h.charge>.75&&ti("啪!","#ffffff",h.from),at.showShot(`${h.hitter===0?"◀":"▶"} ${h.styleName}`),Xi.reset(),h.hitter===0&&(_e==null||_e.fadeHint()),ya.push({style:h.style,speed:Math.round(u),y:+h.from.y.toFixed(2),charge:+h.charge.toFixed(2),by:h.hitter,aimX:+(((e=h.aim)==null?void 0:e.x)??0).toFixed(2),aimZ:+(((t=h.aim)==null?void 0:t.z)??0).toFixed(2),targetX:+(((n=h.target)==null?void 0:n.x)??0).toFixed(2),targetZ:+(((s=h.target)==null?void 0:s.z)??0).toFixed(2),predX:+(((a=(r=h.predicted)==null?void 0:r.landing)==null?void 0:a.x)??0).toFixed(2),predZ:+(((c=(o=h.predicted)==null?void 0:o.landing)==null?void 0:c.z)??0).toFixed(2)}),ya.length>400&&ya.shift()}else l.type==="net-hit"?(Ot.netHit(),Wn.punch(.35),ti("噗…","#9fb4c8",{x:l.x,y:1.5,z:0})):l.type==="land"?(Ot.land(l.inBounds),Wn.punch(.3),ir.position.set(l.x,.02,l.z),ir.material.color.set(l.inBounds?6094746:16734810),sr=2,_n.impact(.5),_n.calmDown(),ti(l.inBounds?"砰!!":"出界!",l.inBounds?"#ffffff":"#ff7a7a",{x:l.x,y:.4,z:l.z})):(l.type==="point"||l.type==="gameover")&&ny();if(l.type==="point"){const h=Ze.rallyHits>=6;Ot.point(l.winner===0),h&&Ot.crowd(Math.min(1,Ze.rallyHits/14)),Oc=.55;const u=Wa(l.winner)===0?"#6fc4ff":"#ff8a8f";at.showCall(l.reason,`${ps(l.winner)} 得分 · ${l.score[Bt]} : ${l.score[1-Bt]}`,u)}else if(l.type==="serve-ready"){const u=l.server===Bt||xt==="duo"?Wi?"右半屏":l.server===0?"空格":"回车":"";at.showShot(u?`${ps(l.server)} 发球 · 按住 ${u} 蓄力`:`${ps(l.server)} 发球`)}else l.type==="gameover"&&(Ot.fanfare(),nn=!1,_e==null||_e.setEnabled(!1),at.showResult(ps(l.winner),[l.score[Bt],l.score[1-Bt]],`最长回合 ${Ze.longestRally} 拍 · 最快球速 ${Math.round(Ze.matchMaxSpeed*3.6)} km/h<br>${mt?"双人联机":xt==="duo"?"双人同屏":xt==="demo"?"AI 观战演示":`单人 · ${Aa[xt].name}`}`))}}function ps(i){return mt?i===Bt?"你":"对方":xt==="duo"?i===0?"玩家 1":"玩家 2":xt==="demo"?i===0?"AI · 普通":"AI · 高手":i===0?"你":`AI · ${Aa[xt].name}`}const Bo=new I;function ti(i,e,t){const n=document.createElement("div");n.className="ono",n.textContent=i,n.style.color=e,n.style.setProperty("--rot",`${(Math.random()*22-11).toFixed(1)}deg`),t?(Bo.set(t.x,t.y+.5,t.z).project(zn),n.style.left=`${qt.clamp((Bo.x*.5+.5)*100,14,86)}%`,n.style.top=`${qt.clamp((-Bo.y*.5+.5)*100,12,78)}%`):(n.style.left="50%",n.style.top="38%"),document.body.appendChild(n),setTimeout(()=>n.remove(),620)}function ny(){document.querySelectorAll(".ono").forEach(i=>i.remove())}function iy(){const i=document.getElementById("matchpoint");if(!i)return;const[e,t]=Ze.score,n=(r,a)=>r+1>=Ze.targetPoints&&r+1-a>=2||r+1>=15,s=Ze.phase!==Et.GAMEOVER&&(n(e,t)||n(t,e));i.classList.toggle("show",s),s&&(i.style.borderColor=Wa(n(e,t)?0:1)===0?"var(--p1)":"var(--p2)")}function sy(i){const e=Ze.ball;for(let c=0;c<2;c++){const l=tn[c];xn[c].root.position.set(l.x,0,l.z),xn[c].update(i,l.animState()),gr[c].position.set(l.x,.011,l.z),at.setCharge(Wa(c),l.charging?l.charge:0)}const t=tn[Bt];_e==null||_e.update(i,t.charging?t.charge:0);const n=Ze.phase!==Et.READY;Xi.update(i,e,{x:e.vx,y:e.vy,z:e.vz},zn,n),Ni.visible=n;const s=Math.max(0,e.y),r=.55+s*.16;if(Ni.scale.setScalar(r),Ni.material.opacity=Math.max(.07,.55-s*.055),Ni.position.set(e.x,.012,e.z),Oo-=i,Ze.phase===Et.RALLY&&e.alive&&Fc){if(Oo<=0){Oo=.07;const c=dr({x:e.x,y:e.y,z:e.z},{x:e.vx,y:e.vy,z:e.vz},{dt:Tt.SUBSTEP*8,maxTime:5});if(c.grounded){const l=Math.abs(c.landing.x)<=ze.HALF_WIDTH_SINGLES&&Math.abs(c.landing.z)<=ze.HALF_LENGTH;Qn.position.set(c.landing.x,.02,c.landing.z),Qn.material.color.set(l?8380671:16752736),Qn.userData.target=.55}else Qn.userData.target=0}}else Qn.userData.target=0;if(Qn.material.opacity+=((Qn.userData.target??0)-Qn.material.opacity)*Math.min(1,i*9),sr>0){sr-=i;const c=Math.max(0,sr/2);ir.material.opacity=c*.9,ir.scale.setScalar(1+(1-c)*.9)}else ir.material.opacity=0;Zs>0?(Zs-=i*6,rr.material.opacity=Math.max(0,Zs)*.75,rr.scale.setScalar(Gf*(1+(1-Math.max(0,Zs))*1.4))):rr.material.opacity=0;const a=Math.hypot(e.vx,e.vy,e.vz),o=Ze.phase===Et.RALLY?e.x:(tn[0].x+tn[1].x)/2;Wn.update(i,o,Math.min(1,a/60)),Ze.phase===Et.RALLY&&e.alive?_n.setRallySpeed(a):_n.calmDown(),_n.update(i,n?e:null),iy()}const Xe=new Zx;let _i=!1;const vr=new pt;{const i=new We({color:15221819,roughness:.4});for(const e of[-.14,.14]){const t=new se(new nt(.11,.035,1.55),i);t.position.set(e,.03,-.1);const n=new se(new nt(.11,.035,.22),i);n.position.set(e,.1,-.95),n.rotation.x=.55,t.castShadow=!0,vr.add(t,n)}vr.visible=!1}xn[0].root.add(vr);var tu;const pn={root:document.getElementById("runhud"),score:document.getElementById("runscore"),combo:document.getElementById("runcombo"),dist:document.getElementById("rundist"),aval:(tu=document.getElementById("runaval"))==null?void 0:tu.querySelector(".fill"),mult:document.getElementById("runmult")};function Wf(){var i,e;Ot.unlock(),Xe.reset(Math.random()*1e9|0),_i=!0,nn=!0,xt="snowrun",Bt=0,Sr.group.visible=!1,Va.group.visible=!0,xn[1].root.visible=!1,gr[1].visible=!1,Qn.material.opacity=0,at.showMenu(!1),at.hideResult(),at.setNames("滑手","雪山"),(i=pn.root)==null||i.classList.add("on"),vr.visible=!0,document.getElementById("scoreboard").style.display="none",_e==null||_e.setEnabled(!0),_e==null||_e.setStickEnabled(!0),Wi&&((e=document.getElementById("pausebtn"))==null||e.classList.add("ingame")),Xi.reset(),_r=performance.now()}function vl(){var i;_i=!1,vr.visible=!1,Sr.group.visible=!0,Va.group.visible=!1,xn[1].root.visible=!0,gr[1].visible=!0,xn[0].root.rotation.x=0,xn[0].root.rotation.z=0,(i=pn.root)==null||i.classList.remove("on"),document.getElementById("scoreboard").style.display="",Wn.applyViewport()}function ry(i){const e=ds();_e==null||_e.beginFrame();const t=e.move(0),n=e.hitHeld(0),s=e.hitReleased(0);Xe.update(i,t,n,s),yn.endFrame(),_e==null||_e.endFrame();for(const r of Xe.drainEvents())if(r.type==="smash")Ot.hit(r.aerial?"smash":"drive",.8,40),_n.impact(r.aerial?1:.55),r.aerial&&(Ua=.05,_n.smashLaunch()),Wn.punch(r.aerial?.9:.4),ti(`+${r.pts}${r.aerial?"!!":"!"}`,r.aerial?"#ffd94d":"#ffffff",{x:r.at.x,y:r.at.y+.4,z:r.at.z}),Xi.reset();else if(r.type==="whiff")Ot.whiff();else if(r.type==="flip")Ot.point(!0),ti("空翻!","#9fd0ff",{x:Xe.px,y:2.4+Xe.py,z:0});else if(r.type==="trick-land")Ot.crowd(.5),ti(`特技 ×${r.mult}!!`,"#ffd94d",{x:Xe.px,y:1.6,z:0});else if(r.type==="stumble")Ot.land(!1),Wn.punch(1.1),_n.impact(.7),ti(r.reason,"#ff7a7a",{x:Xe.px,y:1.2,z:0});else if(r.type==="ramp-jump")Ot.hit("lift",.6,20);else if(r.type==="run-over"){Ot.fanfare(),nn=!1,_e==null||_e.setEnabled(!1);const a=Xe.stats;at.showResult("被雪崩追上了",[a.score,0],`滑行 ${a.dist} m · 杀球 ${a.smashes} 拍 · 最高连击 ${a.bestCombo} · 最大滞空 ${a.bestAir} m<br>雪山大冒险`),document.getElementById("verdict").textContent=`得分 ${a.score}`,document.getElementById("finalscore").textContent=`滑了 ${a.dist} 米`}pn.score&&(pn.score.textContent=Xe.score),pn.combo&&(pn.combo.textContent=Xe.combo>=2?`连击 ×${Xe.combo}`:""),pn.mult&&(pn.mult.textContent=Xe.trickMult>1?`特技加成 ×${Xe.trickMult}`:"",pn.mult.style.opacity=Xe.trickMult>1?String(.5+Math.min(.5,Xe.trickTimer/oy*.5)):"0"),pn.dist&&(pn.dist.textContent=`${Math.round(Xe.dist)} m`),pn.aval&&(pn.aval.style.width=`${Math.round(Xe.avalCloseness*100)}%`)}function ay(i){Va.update(i,Xe);const e=xn[0];e.root.position.set(Xe.px,Xe.py,0),e.root.rotation.y=Math.PI,e.root.rotation.x=Xe.rot;const t=(_e??yn).move(0);e.root.rotation.z+=(-t.x*.35-e.root.rotation.z)*Math.min(1,i*8),e.update(i,{speedRatio:.15,crouch:Xe.tuck?.85:Xe.stumbleTimer>0?.9:.5,swing:Xe.swing,lunge:0}),gr[0].position.set(Xe.px,.011,0),gr[0].material.opacity=Math.max(.1,.42-Xe.py*.1);const n=Xe.ball;Xi.update(i,n,{x:n.vx,y:n.vy,z:n.vz},zn,n.alive),Ni.visible=n.alive,n.alive&&(Ni.position.set(n.x,.012,n.z),Ni.scale.setScalar(.55+Math.max(0,n.y)*.16)),_e==null||_e.update(i,Xe.charging?Xe.charge:0),at.setCharge(0,Xe.charging?Xe.charge:0);const s=Xe.speed/23;zn.position.set(Xe.px*.55+(Math.random()-.5)*s*.05,3.1+Xe.py*.35,6.4-s*.7),zn.lookAt(Xe.px*.8,1+Xe.py*.5,-8),zn.fov=(innerWidth/innerHeight<1?64:50)+s*6,zn.updateProjectionMatrix(),_n.setRallySpeed(Xe.speed*2.2),_n.update(i,n.alive?n:null)}const oy=4.5;function cy(i){const e=Ze.ball;e.alive&&(e.px=e.x,e.py=e.y,e.pz=e.z,Us(e,i),e.y<Tt.RADIUS&&(e.y=Tt.RADIUS));for(const o of tn)o.netX!==void 0&&(o.x+=(o.netX-o.x)*Math.min(1,i*16),o.z+=(o.netZ-o.z)*Math.min(1,i*16));const t=ds();_e==null||_e.beginFrame();const n=t.move(0),s=t.aimDir?t.aimDir():n,r={t:"i",d:[-n.x,-n.z],a:[-s.x,-s.z],h:t.hitHeld(0)?1:0,as:Ss?1:0},a=t.hitPressed(0)||t.hitReleased(0);t.hitPressed(0)&&(r.p=1),t.hitReleased(0)&&(r.r=1),Fo+=i,(a||Fo>=1/30)&&(Fo=0,Fe==null||Fe.send(r)),yn.endFrame(),_e==null||_e.endFrame(),Vf()}let Xf="normal";function $f(i){var e;mt||(Xf=xt),mt=i,xt=i==="host"?"online-host":"online-guest",Wn.mirror=i==="guest"?-1:1,(e=document.getElementById("room"))==null||e.classList.add("hidden"),Bi()}function Na(i){if(mt){try{Fe==null||Fe.send({t:"bye"})}catch{}Fe==null||Fe.close(),Fe=null,mt=null,Bt=0,Wn.mirror=1,nn=!1,xt=Xf,document.querySelectorAll(".mode").forEach(e=>{e.classList.toggle("active",e.dataset.mode===xt)}),ys.reset(),ei=[yn,yn],di=[],nr=[],_e==null||_e.setEnabled(!1),at.hideResult(),at.showMenu(!0),i&&at.showCall(i,"","#ffd94d")}}function qf(){Fe.onMessage=i=>{i.t==="i"&&mt==="host"?ys.apply(i):i.t==="s"&&mt==="guest"?jx(i,Ze,tn):i.t==="e"&&mt==="guest"?Ze.events.push(...i.e):i.t==="start"&&mt==="guest"?$f("guest"):i.t==="again"?mt==="host"&&(at.hideResult(),Bi(),Fe.send({t:"restart"})):i.t==="restart"&&mt==="guest"?(at.hideResult(),nn=!0,_e==null||_e.setEnabled(!0)):i.t==="bye"&&Na("对方已离开")},Fe.onClose=()=>Na("连接已断开"),Fe.onError=i=>console.warn("[net]",(i==null?void 0:i.type)??i)}async function ly(){const i=document.getElementById("roomcode"),e=document.getElementById("roomstatus");Fe=new Bf,mt="host",qf();try{e.textContent="连接信令服务器…";const t=await Fe.host();i.textContent=t,e.textContent="把这四个字发给对方 · 等待加入…",Fe.onPeerJoin=()=>{Fe.send({t:"start"}),$f("host")}}catch(t){e.textContent=`建房失败：${(t==null?void 0:t.type)??(t==null?void 0:t.message)??t}（信令服务不可达？）`,mt=null}}async function Yf(){const i=document.getElementById("joincode"),e=document.getElementById("roomstatus"),t=i.value.trim();if(t.length<4){e.textContent="输入 4 位房间码";return}Fe=new Bf,mt="guest",qf();try{e.textContent="连接中…",await Fe.join(t),e.textContent="已连上，等待开局…"}catch(n){e.textContent=(n==null?void 0:n.type)==="peer-unavailable"?"没找到这个房间，检查一下码":`加入失败：${(n==null?void 0:n.type)??(n==null?void 0:n.message)??n}`,Fe==null||Fe.close(),Fe=null,mt=null}}function jf(i){requestAnimationFrame(jf);let e=Math.min(.1,(i-_r)/1e3);if(_r=i,at.update(e),nn&&Mr.update(e),nn){if(Ua>0&&(Ua-=e,e=0),Oc>0&&(Oc-=e,e*=.38),_i)ry(e);else if(mt==="guest")cy(e);else{Js+=e;let t=0;for(;Js>=Uo&&t<eu;)ty(Uo),Js-=Uo,t++;t===eu&&(Js=0),mt==="host"&&(Fe!=null&&Fe.connected)&&(No+=e,No>=1/30&&(No=0,Fe.send(Yx(Ze,tn))))}_i||at.setScore([Ze.score[Bt],Ze.score[1-Bt]],Wa(Ze.server),Ze.score[0]+Ze.score[1]+1,Ze.longestRally)}_i?ay(nn?e:Math.min(e,1/60)):sy(nn?e:Math.min(e,1/60)),La.render()}var nu,iu,su;Wi&&(document.querySelectorAll(".mode[data-needs-keyboard]").forEach(i=>{i.classList.remove("active"),i.remove()}),(nu=document.querySelector('.mode[data-mode="normal"]'))==null||nu.classList.add("active"),(iu=document.getElementById("tips-kb"))==null||iu.setAttribute("hidden",""),(su=document.getElementById("tips-touch"))==null||su.removeAttribute("hidden"));document.querySelectorAll(".mode").forEach(i=>{i.addEventListener("click",()=>{var e;if(i.dataset.mode==="online"){(e=document.getElementById("room"))==null||e.classList.remove("hidden"),document.getElementById("roomstatus").textContent="",document.getElementById("roomcode").textContent="····";return}document.querySelectorAll(".mode").forEach(t=>t.classList.remove("active")),i.classList.add("active"),xt=i.dataset.mode})});const ra=document.getElementById("assistchk");ra&&(ra.checked=Ss,ra.addEventListener("change",()=>{Ss=ra.checked,localStorage.setItem("sc-assist",Ss?"1":"0")}));var ru;(ru=document.getElementById("hostbtn"))==null||ru.addEventListener("click",ly);var au;(au=document.getElementById("joinbtn"))==null||au.addEventListener("click",Yf);var ou;(ou=document.getElementById("roomback"))==null||ou.addEventListener("click",()=>{var i;if(mt){try{Fe==null||Fe.close()}catch{}Fe=null,mt=null}(i=document.getElementById("room"))==null||i.classList.add("hidden")});var cu;(cu=document.getElementById("joincode"))==null||cu.addEventListener("keydown",i=>{i.key==="Enter"&&(i.stopPropagation(),Yf())});function Bi(){var e;Ot.unlock(),nr=[];const i=(t,n)=>{if(!Ss)return t;const s=new Nh(t,tn[n]);return nr.push(s),s};if(xt==="online-host"){di=[];const t=new Nh(ys,tn[1]);nr.push(t),ei=[i(ds(),0),t],Bt=0}else xt==="online-guest"?(di=[],ei=[ds(),ds()],Bt=1):xt==="duo"?(di=[],ei=[i(yn,0),i(yn,1)]):xt==="demo"?(di=[new Ro(tn[0],ui[0],"normal"),new Ro(tn[1],ui[1],"pro")],ei=[ui[0],ui[1]]):(di=[new Ro(tn[1],ui[1],xt)],ei=[i(ds(),0),ui[1]]);xt.startsWith("online")||(Bt=0),_e==null||_e.setEnabled(xt!=="demo"),_e==null||_e.setStickEnabled(!Ss),Wi&&((e=document.getElementById("pausebtn"))==null||e.classList.add("ingame")),at.setNames(ps(Bt),ps(1-Bt)),at.showMenu(!1),at.hideResult(),Ze.startMatch(),Xi.reset(),sr=0,Js=0,_r=performance.now(),nn=!0}document.getElementById("startbtn").addEventListener("click",()=>{xt==="snowrun"?Wf():(_i&&vl(),Bi())});document.getElementById("againbtn").addEventListener("click",()=>{if(xt==="snowrun"){at.hideResult(),Wf();return}mt==="guest"?(Fe==null||Fe.send({t:"again"}),document.getElementById("matchstats").textContent="已请求再来一局，等对方…"):mt==="host"?(at.hideResult(),Bi(),Fe==null||Fe.send({t:"restart"})):Bi()});addEventListener("keydown",i=>{i.code==="KeyV"?Wn.toggleView():i.code==="KeyT"?Fc=!Fc:i.code==="KeyM"?Ot.setEnabled(!Ot.enabled):i.code==="KeyR"&&nn?(Ze.startMatch(),at.hideResult()):i.code==="Escape"?(mt&&Na(),_i&&vl(),nn=!1,_e==null||_e.setEnabled(!1),at.showMenu(!0),at.hideResult()):(i.code==="Space"||i.code==="Enter")&&!nn&&document.getElementById("menu").classList.contains("hidden")===!1&&Bi()});var lu;(lu=document.getElementById("pausebtn"))==null||lu.addEventListener("click",()=>{var i;mt&&Na(),_i&&vl(),nn=!1,_e==null||_e.setEnabled(!1),(i=document.getElementById("pausebtn"))==null||i.classList.remove("ingame"),at.showMenu(!0),at.hideResult()});Ze.toServe();Ze.phase=Et.READY;requestAnimationFrame(i=>{_r=i,jf(i);const e=document.getElementById("splash");setTimeout(()=>e==null?void 0:e.classList.add("gone"),350),setTimeout(()=>e==null?void 0:e.remove(),950)});window.__shuttle={match:Ze,players:tn,audio:Ot,shotLog:ya,camera:zn,quality:Mr,snowRun:Xe,scene:Un,arena:Sr,snowArena:Va,renderer:zf,touch:_e,isTouch:Wi,mangaFx:_n,ono:ti,debugKeys:()=>[...yn.down].join(","),debugWiring:()=>({mode:xt,p1IsTouch:ei[0]===_e,p1IsKeyboard:ei[0]===yn,controllers:di.length,running:nn,netRole:mt,selfIdx:Bt,netConnected:(Fe==null?void 0:Fe.connected)??!1}),start(i){xt=i,Bi()},stats:()=>({phase:Ze.phase,score:[...Ze.score],rallyHits:Ze.rallyHits,longestRally:Ze.longestRally,maxSpeedKmh:Math.round(Ze.matchMaxSpeed*3.6)})};console.info("[shuttle-clash] 场地 %fm × %fm，网高 %fm，终端速度 %fm/s",ze.LENGTH,ze.HALF_WIDTH_SINGLES*2,ze.NET_HEIGHT_CENTER,Tt.TERMINAL_VELOCITY);
