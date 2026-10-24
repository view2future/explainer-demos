(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const vl="180",Lu=0,jl=1,Iu=2,xh=1,Mh=2,jn=3,mi=0,Qe=1,ee=2,di=0,Fi=1,sa=2,Ql=3,tc=4,Du=5,Pi=100,Uu=101,Nu=102,Fu=103,Ou=104,Bu=200,zu=201,ku=202,Hu=203,Mo=204,yo=205,Vu=206,Gu=207,Wu=208,qu=209,Xu=210,Yu=211,$u=212,Ku=213,Ju=214,So=0,Eo=1,wo=2,vr=3,bo=4,To=5,Ao=6,Ro=7,xl=0,Zu=1,ju=2,pi=0,Qu=1,tf=2,ef=3,yh=4,nf=5,rf=6,sf=7,Sh=300,xr=301,Mr=302,Co=303,Po=304,_a=306,Qr=1e3,Ii=1001,Lo=1002,Cn=1003,af=1004,_s=1005,On=1006,Ra=1007,Di=1008,Vn=1009,Eh=1010,wh=1011,ts=1012,Ml=1013,zi=1014,ei=1015,us=1016,yl=1017,Sl=1018,es=1020,bh=35902,Th=35899,Ah=1021,Rh=1022,Rn=1023,ns=1026,is=1027,Ch=1028,El=1029,Ph=1030,wl=1031,bl=1033,Js=33776,Zs=33777,js=33778,Qs=33779,Io=35840,Do=35841,Uo=35842,No=35843,Fo=36196,Oo=37492,Bo=37496,zo=37808,ko=37809,Ho=37810,Vo=37811,Go=37812,Wo=37813,qo=37814,Xo=37815,Yo=37816,$o=37817,Ko=37818,Jo=37819,Zo=37820,jo=37821,Qo=36492,tl=36494,el=36495,nl=36283,il=36284,rl=36285,sl=36286,of=3200,lf=3201,Tl=0,cf=1,fi="",Ze="srgb",yr="srgb-linear",aa="linear",ce="srgb",qi=7680,ec=519,hf=512,uf=513,ff=514,Lh=515,df=516,pf=517,mf=518,gf=519,al=35044,Cr=35048,nc="300 es",Bn=2e3,oa=2001;class wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ca=Math.PI/180,la=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function _f(i,t){return(i%t+t)%t}function Pa(i,t,e){return(1-e)*i+e*t}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const g=s[a+0],u=s[a+1],m=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=g,t[e+1]=u,t[e+2]=m,t[e+3]=v;return}if(f!==v||l!==g||c!==u||h!==m){let p=1-o;const d=l*g+c*u+h*m+f*v,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const w=Math.sqrt(y),T=Math.atan2(w,d*M);p=Math.sin(p*T)/w,o=Math.sin(o*T)/w}const _=o*M;if(l=l*p+g*_,c=c*p+u*_,h=h*p+m*_,f=f*p+v*_,p===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],g=s[a+1],u=s[a+2],m=s[a+3];return t[e]=o*m+h*f+l*u-c*g,t[e+1]=l*m+h*g+c*f-o*u,t[e+2]=c*m+h*u+o*g-l*f,t[e+3]=h*m-o*f-l*g-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),g=l(n/2),u=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=g*h*f+c*u*m,this._y=c*u*f-g*h*m,this._z=c*h*m+g*u*f,this._w=c*h*f-g*u*m;break;case"YXZ":this._x=g*h*f+c*u*m,this._y=c*u*f-g*h*m,this._z=c*h*m-g*u*f,this._w=c*h*f+g*u*m;break;case"ZXY":this._x=g*h*f-c*u*m,this._y=c*u*f+g*h*m,this._z=c*h*m+g*u*f,this._w=c*h*f-g*u*m;break;case"ZYX":this._x=g*h*f-c*u*m,this._y=c*u*f+g*h*m,this._z=c*h*m-g*u*f,this._w=c*h*f+g*u*m;break;case"YZX":this._x=g*h*f+c*u*m,this._y=c*u*f+g*h*m,this._z=c*h*m-g*u*f,this._w=c*h*f-g*u*m;break;case"XZY":this._x=g*h*f-c*u*m,this._y=c*u*f-g*h*m,this._z=c*h*m+g*u*f,this._w=c*h*f+g*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],g=n+o+f;if(g>0){const u=.5/Math.sqrt(g+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-r)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+c)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(s-c)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(a-r)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*r+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,g=Math.sin(e*h)/c;return this._w=a*f+this._w*g,this._x=n*f+this._x*g,this._y=r*f+this._y*g,this._z=s*f+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new C,ic=new Gi;class Kt{constructor(t,e,n,r,s,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],g=n[2],u=n[5],m=n[8],v=r[0],p=r[3],d=r[6],M=r[1],y=r[4],_=r[7],w=r[2],T=r[5],R=r[8];return s[0]=a*v+o*M+l*w,s[3]=a*p+o*y+l*T,s[6]=a*d+o*_+l*R,s[1]=c*v+h*M+f*w,s[4]=c*p+h*y+f*T,s[7]=c*d+h*_+f*R,s[2]=g*v+u*M+m*w,s[5]=g*p+u*y+m*T,s[8]=g*d+u*_+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,g=o*l-h*s,u=c*s-a*l,m=e*f+n*g+r*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(r*c-h*n)*v,t[2]=(o*n-r*a)*v,t[3]=g*v,t[4]=(h*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Kt;function Ih(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vf(){const i=rs("canvas");return i.style.display="block",i}const rc={};function ss(i){i in rc||(rc[i]=!0,console.warn(i))}function xf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const sc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){const i={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ce&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?aa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yr]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:sc,fromXYZ:ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:sc,fromXYZ:ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}const re=Mf();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class yf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xi===void 0&&(Xi=rs("canvas")),Xi.width=t.width,Xi.height=t.height;const r=Xi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ii(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sf=0;class Al{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Da(r[a].image)):s.push(Da(r[a]))}else s=Da(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ef=0;const Ua=new C;class Xe extends wr{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Ii,r=Ii,s=On,a=Di,o=Rn,l=Vn,c=Xe.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=ni(),this.name="",this.source=new Al(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Sh;Xe.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,r=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],f=l[8],g=l[1],u=l[5],m=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-g)<.01&&Math.abs(f-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+g)<.1&&Math.abs(f+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(u+1)/2,w=(d+1)/2,T=(h+g)/4,R=(f+v)/4,L=(m+p)/4;return y>_&&y>w?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=R/n):_>w?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=T/r,s=L/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=R/s,r=L/s),this.set(n,r,s,e),this}let M=Math.sqrt((p-m)*(p-m)+(f-v)*(f-v)+(g-h)*(g-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(f-v)/M,this.z=(g-h)/M,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wf extends wr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Xe(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Al(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dh extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bf extends Xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),xs.subVectors(this.max,Pr),Yi.subVectors(t.a,Pr),$i.subVectors(t.b,Pr),Ki.subVectors(t.c,Pr),ri.subVectors($i,Yi),si.subVectors(Ki,$i),yi.subVectors(Yi,Ki);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-yi.z,yi.y,ri.z,0,-ri.x,si.z,0,-si.x,yi.z,0,-yi.x,-ri.y,ri.x,0,-si.y,si.x,0,-yi.y,yi.x,0];return!Na(e,Yi,$i,Ki,xs)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,Yi,$i,Ki,xs))?!1:(Ms.crossVectors(ri,si),e=[Ms.x,Ms.y,Ms.z],Na(e,Yi,$i,Ki,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xn=[new C,new C,new C,new C,new C,new C,new C,new C],yn=new C,vs=new br,Yi=new C,$i=new C,Ki=new C,ri=new C,si=new C,yi=new C,Pr=new C,xs=new C,Ms=new C,Si=new C;function Na(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Si.fromArray(i,s);const o=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tf=new br,Lr=new C,Fa=new C;class va{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);const e=Lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Lr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Fa)),this.expandByPoint(Lr.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Yn=new C,Oa=new C,ys=new C,ai=new C,Ba=new C,Ss=new C,za=new C;class Uh{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Oa.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Oa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ys),o=ai.dot(this.direction),l=-ai.dot(ys),c=ai.lengthSq(),h=Math.abs(1-a*a);let f,g,u,m;if(h>0)if(f=a*l-o,g=a*o-l,m=s*h,f>=0)if(g>=-m)if(g<=m){const v=1/h;f*=v,g*=v,u=f*(f+a*g+2*o)+g*(a*f+g+2*l)+c}else g=s,f=Math.max(0,-(a*g+o)),u=-f*f+g*(g+2*l)+c;else g=-s,f=Math.max(0,-(a*g+o)),u=-f*f+g*(g+2*l)+c;else g<=-m?(f=Math.max(0,-(-a*s+o)),g=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+g*(g+2*l)+c):g<=m?(f=0,g=Math.min(Math.max(-s,-l),s),u=g*(g+2*l)+c):(f=Math.max(0,-(a*s+o)),g=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+g*(g+2*l)+c);else g=a>0?-s:s,f=Math.max(0,-(a*g+o)),u=-f*f+g*(g+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Oa).addScaledVector(ys,g),u}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,g=this.origin;return c>=0?(n=(t.min.x-g.x)*c,r=(t.max.x-g.x)*c):(n=(t.max.x-g.x)*c,r=(t.min.x-g.x)*c),h>=0?(s=(t.min.y-g.y)*h,a=(t.max.y-g.y)*h):(s=(t.max.y-g.y)*h,a=(t.min.y-g.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-g.z)*f,l=(t.max.z-g.z)*f):(o=(t.max.z-g.z)*f,l=(t.min.z-g.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,r,s){Ba.subVectors(e,t),Ss.subVectors(n,t),za.crossVectors(Ba,Ss);let a=this.direction.dot(za),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,t);const l=o*this.direction.dot(Ss.crossVectors(ai,Ss));if(l<0)return null;const c=o*this.direction.dot(Ba.cross(ai));if(c<0||l+c>a)return null;const h=-o*ai.dot(za);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,r,s,a,o,l,c,h,f,g,u,m,v,p){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,f,g,u,m,v,p)}set(t,e,n,r,s,a,o,l,c,h,f,g,u,m,v,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=g,d[3]=u,d[7]=m,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ji.setFromMatrixColumn(t,0).length(),s=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const g=a*h,u=a*f,m=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+m*c,e[5]=g-v*c,e[9]=-o*l,e[2]=v-g*c,e[6]=m+u*c,e[10]=a*l}else if(t.order==="YXZ"){const g=l*h,u=l*f,m=c*h,v=c*f;e[0]=g+v*o,e[4]=m*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-m,e[6]=v+g*o,e[10]=a*l}else if(t.order==="ZXY"){const g=l*h,u=l*f,m=c*h,v=c*f;e[0]=g-v*o,e[4]=-a*f,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*h,e[9]=v-g*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const g=a*h,u=a*f,m=o*h,v=o*f;e[0]=l*h,e[4]=m*c-u,e[8]=g*c+v,e[1]=l*f,e[5]=v*c+g,e[9]=u*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const g=a*l,u=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=v-g*f,e[8]=m*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+m,e[10]=g-v*f}else if(t.order==="XZY"){const g=a*l,u=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=g*f+v,e[5]=a*h,e[9]=u*f-m,e[2]=m*f-u,e[6]=o*h,e[10]=v*f+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,Rf)}lookAt(t,e,n){const r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),oi.crossVectors(n,an),oi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),oi.crossVectors(n,an)),oi.normalize(),Es.crossVectors(an,oi),r[0]=oi.x,r[4]=Es.x,r[8]=an.x,r[1]=oi.y,r[5]=Es.y,r[9]=an.y,r[2]=oi.z,r[6]=Es.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],g=n[9],u=n[13],m=n[2],v=n[6],p=n[10],d=n[14],M=n[3],y=n[7],_=n[11],w=n[15],T=r[0],R=r[4],L=r[8],E=r[12],x=r[1],P=r[5],D=r[9],B=r[13],V=r[2],G=r[6],W=r[10],K=r[14],H=r[3],U=r[7],$=r[11],nt=r[15];return s[0]=a*T+o*x+l*V+c*H,s[4]=a*R+o*P+l*G+c*U,s[8]=a*L+o*D+l*W+c*$,s[12]=a*E+o*B+l*K+c*nt,s[1]=h*T+f*x+g*V+u*H,s[5]=h*R+f*P+g*G+u*U,s[9]=h*L+f*D+g*W+u*$,s[13]=h*E+f*B+g*K+u*nt,s[2]=m*T+v*x+p*V+d*H,s[6]=m*R+v*P+p*G+d*U,s[10]=m*L+v*D+p*W+d*$,s[14]=m*E+v*B+p*K+d*nt,s[3]=M*T+y*x+_*V+w*H,s[7]=M*R+y*P+_*G+w*U,s[11]=M*L+y*D+_*W+w*$,s[15]=M*E+y*B+_*K+w*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],g=t[10],u=t[14],m=t[3],v=t[7],p=t[11],d=t[15];return m*(+s*l*f-r*c*f-s*o*g+n*c*g+r*o*u-n*l*u)+v*(+e*l*u-e*c*g+s*a*g-r*a*u+r*c*h-s*l*h)+p*(+e*c*f-e*o*u-s*a*f+n*a*u+s*o*h-n*c*h)+d*(-r*o*h-e*l*f+e*o*g+r*a*f-n*a*g+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],g=t[10],u=t[11],m=t[12],v=t[13],p=t[14],d=t[15],M=f*p*c-v*g*c+v*l*u-o*p*u-f*l*d+o*g*d,y=m*g*c-h*p*c-m*l*u+a*p*u+h*l*d-a*g*d,_=h*v*c-m*f*c+m*o*u-a*v*u-h*o*d+a*f*d,w=m*f*l-h*v*l-m*o*g+a*v*g+h*o*p-a*f*p,T=e*M+n*y+r*_+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=M*R,t[1]=(v*g*s-f*p*s-v*r*u+n*p*u+f*r*d-n*g*d)*R,t[2]=(o*p*s-v*l*s+v*r*c-n*p*c-o*r*d+n*l*d)*R,t[3]=(f*l*s-o*g*s-f*r*c+n*g*c+o*r*u-n*l*u)*R,t[4]=y*R,t[5]=(h*p*s-m*g*s+m*r*u-e*p*u-h*r*d+e*g*d)*R,t[6]=(m*l*s-a*p*s-m*r*c+e*p*c+a*r*d-e*l*d)*R,t[7]=(a*g*s-h*l*s+h*r*c-e*g*c-a*r*u+e*l*u)*R,t[8]=_*R,t[9]=(m*f*s-h*v*s-m*n*u+e*v*u+h*n*d-e*f*d)*R,t[10]=(a*v*s-m*o*s+m*n*c-e*v*c-a*n*d+e*o*d)*R,t[11]=(h*o*s-a*f*s-h*n*c+e*f*c+a*n*u-e*o*u)*R,t[12]=w*R,t[13]=(h*v*r-m*f*r+m*n*g-e*v*g-h*n*p+e*f*p)*R,t[14]=(m*o*r-a*v*r-m*n*l+e*v*l+a*n*p-e*o*p)*R,t[15]=(a*f*r-h*o*r+h*n*l-e*f*l-a*n*g+e*o*g)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,f=o+o,g=s*c,u=s*h,m=s*f,v=a*h,p=a*f,d=o*f,M=l*c,y=l*h,_=l*f,w=n.x,T=n.y,R=n.z;return r[0]=(1-(v+d))*w,r[1]=(u+_)*w,r[2]=(m-y)*w,r[3]=0,r[4]=(u-_)*T,r[5]=(1-(g+d))*T,r[6]=(p+M)*T,r[7]=0,r[8]=(m+y)*R,r[9]=(p-M)*R,r[10]=(1-(g+v))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const a=Ji.set(r[4],r[5],r[6]).length(),o=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Sn.copy(this);const c=1/s,h=1/a,f=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Bn,l=!1){const c=this.elements,h=2*s/(e-t),f=2*s/(n-r),g=(e+t)/(e-t),u=(n+r)/(n-r);let m,v;if(l)m=s/(a-s),v=a*s/(a-s);else if(o===Bn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===oa)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Bn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-r),g=-(e+t)/(e-t),u=-(n+r)/(n-r);let m,v;if(l)m=1/(a-s),v=a/(a-s);else if(o===Bn)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===oa)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=g,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new C,Sn=new pe,Af=new C(0,0,0),Rf=new C(1,1,1),oi=new C,Es=new C,an=new C,oc=new pe,lc=new Gi;class Pn{constructor(t=0,e=0,n=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],g=r[6],u=r[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Nh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cf=0;const cc=new C,Zi=new Gi,$n=new pe,ws=new C,Ir=new C,Pf=new C,Lf=new Gi,hc=new C(1,0,0),uc=new C(0,1,0),fc=new C(0,0,1),dc={type:"added"},If={type:"removed"},ji={type:"childadded",child:null},ka={type:"childremoved",child:null};class Te extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new C,e=new Pn,n=new Gi,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Kt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ws.copy(t):ws.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ir,ws,this.up):$n.lookAt(ws,Ir,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix($n),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(If),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,Pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),g=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),g.length>0&&(n.skeletons=g),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Te.DEFAULT_UP=new C(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new C,Kn=new C,Ha=new C,Jn=new C,Qi=new C,tr=new C,pc=new C,Va=new C,Ga=new C,Wa=new C,qa=new ue,Xa=new ue,Ya=new ue;class Mn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),En.subVectors(t,e),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){En.subVectors(r,e),Kn.subVectors(n,e),Ha.subVectors(t,e);const a=En.dot(En),o=En.dot(Kn),l=En.dot(Ha),c=Kn.dot(Kn),h=Kn.dot(Ha),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const g=1/f,u=(c*l-o*h)*g,m=(a*h-o*l)*g;return s.set(1-u-m,m,u)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return qa.setScalar(0),Xa.setScalar(0),Ya.setScalar(0),qa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(qa,s.x),a.addScaledVector(Xa,s.y),a.addScaledVector(Ya,s.z),a}static isFrontFacing(t,e,n,r){return En.subVectors(n,e),Kn.subVectors(t,e),En.cross(Kn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),En.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Qi.subVectors(r,n),tr.subVectors(s,n),Va.subVectors(t,n);const l=Qi.dot(Va),c=tr.dot(Va);if(l<=0&&c<=0)return e.copy(n);Ga.subVectors(t,r);const h=Qi.dot(Ga),f=tr.dot(Ga);if(h>=0&&f<=h)return e.copy(r);const g=l*f-h*c;if(g<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Qi,a);Wa.subVectors(t,s);const u=Qi.dot(Wa),m=tr.dot(Wa);if(m>=0&&u<=m)return e.copy(s);const v=u*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(tr,o);const p=h*m-u*f;if(p<=0&&f-h>=0&&u-m>=0)return pc.subVectors(s,r),o=(f-h)/(f-h+(u-m)),e.copy(r).addScaledVector(pc,o);const d=1/(p+v+g);return a=v*d,o=g*d,e.copy(n).addScaledVector(Qi,a).addScaledVector(tr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},bs={h:0,s:0,l:0};function $a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=re.workingColorSpace){if(t=_f(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=$a(a,s,t+1/3),this.g=$a(a,s,t),this.b=$a(a,s,t-1/3)}return re.colorSpaceToWorking(this,r),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=Fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return re.workingToColorSpace(We.copy(this),t),Math.round(jt(We.r*255,0,255))*65536+Math.round(jt(We.g*255,0,255))*256+Math.round(jt(We.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(We.copy(this),e);const n=We.r,r=We.g,s=We.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ze){re.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,r=We.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(bs);const n=Pa(li.h,bs.h,e),r=Pa(li.s,bs.s,e),s=Pa(li.l,bs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new It;It.NAMES=Fh;let Df=0;class gi extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Fi,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=yo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ie extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new C,Ts=new ft;let Uf=0;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),t}}class Oh extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bh extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nf=0;const mn=new pe,Ka=new Te,er=new C,on=new br,Dr=new br,He=new C;class Me extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?Bh:Oh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(on.min,Dr.min),on.expandByPoint(He),He.addVectors(on.max,Dr.max),on.expandByPoint(He)):(on.expandByPoint(Dr.min),on.expandByPoint(Dr.max))}on.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)He.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(He));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(t,c),He.add(er)),r=Math.max(r,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new C,l[L]=new C;const c=new C,h=new C,f=new C,g=new ft,u=new ft,m=new ft,v=new C,p=new C;function d(L,E,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,x),g.fromBufferAttribute(s,L),u.fromBufferAttribute(s,E),m.fromBufferAttribute(s,x),h.sub(c),f.sub(c),u.sub(g),m.sub(g);const P=1/(u.x*m.y-m.x*u.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(P),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(P),o[L].add(v),o[E].add(v),o[x].add(v),l[L].add(p),l[E].add(p),l[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,E=M.length;L<E;++L){const x=M[L],P=x.start,D=x.count;for(let B=P,V=P+D;B<V;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new C,_=new C,w=new C,T=new C;function R(L){w.fromBufferAttribute(r,L),T.copy(w);const E=o[L];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),_.crossVectors(T,E);const P=_.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,E=M.length;L<E;++L){const x=M[L],P=x.start,D=x.count;for(let B=P,V=P+D;B<V;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,u=n.count;g<u;g++)n.setXYZ(g,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(t)for(let g=0,u=t.count;g<u;g+=3){const m=t.getX(g+0),v=t.getX(g+1),p=t.getX(g+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let g=0,u=e.count;g<u;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(g+0,h.x,h.y,h.z),n.setXYZ(g+1,h.x,h.y,h.z),n.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,g=new c.constructor(l.length*h);let u=0,m=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let d=0;d<h;d++)g[m++]=c[u++]}return new hn(g,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const g=c[h],u=t(g,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,g=c.length;f<g;f++){const u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let g=0,u=f.length;g<u;g++)h.push(f[g].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new pe,Ei=new Uh,As=new va,gc=new C,Rs=new C,Cs=new C,Ps=new C,Ja=new C,Ls=new C,_c=new C,Is=new C;class je extends Te{constructor(t=new Me,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Ja.fromBufferAttribute(f,t),a?Ls.addScaledVector(Ja,h):Ls.addScaledVector(Ja.sub(e),h))}e.add(Ls)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),Ei.copy(t.ray).recast(t.near),!(As.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(As,gc)===null||Ei.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(s).invert(),Ei.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,g=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=g.length;m<v;m++){const p=g[m],d=a[p.materialIndex],M=Math.max(p.start,u.start),y=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let _=M,w=y;_<w;_+=3){const T=o.getX(_),R=o.getX(_+1),L=o.getX(_+2);r=Ds(this,d,t,n,c,h,f,T,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let p=m,d=v;p<d;p+=3){const M=o.getX(p),y=o.getX(p+1),_=o.getX(p+2);r=Ds(this,a,t,n,c,h,f,M,y,_),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=g.length;m<v;m++){const p=g[m],d=a[p.materialIndex],M=Math.max(p.start,u.start),y=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let _=M,w=y;_<w;_+=3){const T=_,R=_+1,L=_+2;r=Ds(this,d,t,n,c,h,f,T,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let p=m,d=v;p<d;p+=3){const M=p,y=p+1,_=p+2;r=Ds(this,a,t,n,c,h,f,M,y,_),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Ff(i,t,e,n,r,s,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===mi,o),l===null)return null;Is.copy(o),Is.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Is);return c<e.near||c>e.far?null:{distance:c,point:Is.clone(),object:i}}function Ds(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Rs),i.getVertexPosition(l,Cs),i.getVertexPosition(c,Ps);const h=Ff(i,t,e,n,Rs,Cs,Ps,_c);if(h){const f=new C;Mn.getBarycoord(_c,Rs,Cs,Ps,f),r&&(h.uv=Mn.getInterpolatedAttribute(r,o,l,c,f,new ft)),s&&(h.uv1=Mn.getInterpolatedAttribute(s,o,l,c,f,new ft)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const g={a:o,b:l,c,normal:new C,materialIndex:0};Mn.getNormal(Rs,Cs,Ps,g.normal),h.face=g,h.barycoord=f}return h}class _i extends Me{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let g=0,u=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,r,a,2),m("x","z","y",1,-1,t,n,-e,r,a,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(f,2));function m(v,p,d,M,y,_,w,T,R,L,E){const x=_/R,P=w/L,D=_/2,B=w/2,V=T/2,G=R+1,W=L+1;let K=0,H=0;const U=new C;for(let $=0;$<W;$++){const nt=$*P-B;for(let Dt=0;Dt<G;Dt++){const St=Dt*x-D;U[v]=St*M,U[p]=nt*y,U[d]=V,c.push(U.x,U.y,U.z),U[v]=0,U[p]=0,U[d]=T>0?1:-1,h.push(U.x,U.y,U.z),f.push(Dt/R),f.push(1-$/L),K+=1}}for(let $=0;$<L;$++)for(let nt=0;nt<R;nt++){const Dt=g+nt+G*$,St=g+nt+G*($+1),Ft=g+(nt+1)+G*($+1),Rt=g+(nt+1)+G*$;l.push(Dt,St,Rt),l.push(St,Ft,Rt),H+=6}o.addGroup(u,H,E),u+=H,g+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=Sr(i[e]);for(const r in n)t[r]=n[r]}return t}function Of(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Bf={clone:Sr,merge:Ke};var zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kh extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new C,vc=new ft,xc=new ft;class nn extends kh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=la*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,vc,xc),e.subVectors(xc,vc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const nr=-90,ir=1;class Hf extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(nr,ir,t,e);r.layers=this.layers,this.add(r);const s=new nn(nr,ir,t,e);s.layers=this.layers,this.add(s);const a=new nn(nr,ir,t,e);a.layers=this.layers,this.add(a);const o=new nn(nr,ir,t,e);o.layers=this.layers,this.add(o);const l=new nn(nr,ir,t,e);l.layers=this.layers,this.add(l);const c=new nn(nr,ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=t.getRenderTarget(),g=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,g,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Hh extends Xe{constructor(t=[],e=xr,n,r,s,a,o,l,c,h){super(t,e,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vf extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Hh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _i(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:di});s.uniforms.tEquirect.value=e;const a=new je(r,s),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=On),new Hf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class te extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gf={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],g=h.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&g>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&g<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Rl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new Rl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vh extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=al,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new C;class ca{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ca(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gh extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let rr;const Ur=new C,sr=new C,ar=new C,or=new ft,Nr=new ft,Wh=new pe,Us=new C,Fr=new C,Ns=new C,Mc=new ft,ja=new ft,yc=new ft;class qf extends Te{constructor(t=new Gh){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wf(e,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new ca(n,3,0,!1)),rr.setAttribute("uv",new ca(n,2,3,!1))}this.geometry=rr,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),Wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-ar.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Fs(Us.set(-.5,-.5,0),ar,a,sr,r,s),Fs(Fr.set(.5,-.5,0),ar,a,sr,r,s),Fs(Ns.set(.5,.5,0),ar,a,sr,r,s),Mc.set(0,0),ja.set(1,0),yc.set(1,1);let o=t.ray.intersectTriangle(Us,Fr,Ns,!1,Ur);if(o===null&&(Fs(Fr.set(-.5,.5,0),ar,a,sr,r,s),ja.set(0,1),o=t.ray.intersectTriangle(Us,Ns,Fr,!1,Ur),o===null))return;const l=t.ray.origin.distanceTo(Ur);l<t.near||l>t.far||e.push({distance:l,point:Ur.clone(),uv:Mn.getInterpolation(Ur,Us,Fr,Ns,Mc,ja,yc,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fs(i,t,e,n,r,s){or.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Nr.x=s*or.x-r*or.y,Nr.y=r*or.x+s*or.y):Nr.copy(or),i.copy(t),i.x+=Nr.x,i.y+=Nr.y,i.applyMatrix4(Wh)}class Or extends hn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qa=new C,Xf=new C,Yf=new Kt;class Ri{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Qa.subVectors(n,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yf.getNormalMatrix(t),r=this.coplanarPoint(Qa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new va,$f=new ft(.5,.5),Os=new C;class Cl{constructor(t=new Ri,e=new Ri,n=new Ri,r=new Ri,s=new Ri,a=new Ri){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],g=s[6],u=s[7],m=s[8],v=s[9],p=s[10],d=s[11],M=s[12],y=s[13],_=s[14],w=s[15];if(r[0].setComponents(c-a,u-h,d-m,w-M).normalize(),r[1].setComponents(c+a,u+h,d+m,w+M).normalize(),r[2].setComponents(c+o,u+f,d+v,w+y).normalize(),r[3].setComponents(c-o,u-f,d-v,w-y).normalize(),n)r[4].setComponents(l,g,p,_).normalize(),r[5].setComponents(c-l,u-g,d-p,w-_).normalize();else if(r[4].setComponents(c-l,u-g,d-p,w-_).normalize(),e===Bn)r[5].setComponents(c+l,u+g,d+p,w+_).normalize();else if(e===oa)r[5].setComponents(l,g,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);const e=$f.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Os.x=r.normal.x>0?t.max.x:t.min.x,Os.y=r.normal.y>0?t.max.y:t.min.y,Os.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fs extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ha=new C,ua=new C,Sc=new pe,Br=new Uh,Bs=new va,to=new C,Ec=new C;class xa extends Te{constructor(t=new Me,e=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ha.fromBufferAttribute(e,r-1),ua.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ha.distanceTo(ua);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),Bs.radius+=s,t.ray.intersectsSphere(Bs)===!1)return;Sc.copy(r).invert(),Br.copy(t.ray).applyMatrix4(Sc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,g=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=u,p=m-1;v<p;v+=c){const d=h.getX(v),M=h.getX(v+1),y=zs(this,t,Br,l,d,M,v);y&&e.push(y)}if(this.isLineLoop){const v=h.getX(m-1),p=h.getX(u),d=zs(this,t,Br,l,v,p,m-1);d&&e.push(d)}}else{const u=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let v=u,p=m-1;v<p;v+=c){const d=zs(this,t,Br,l,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){const v=zs(this,t,Br,l,m-1,u,m-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zs(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(ha.fromBufferAttribute(o,r),ua.fromBufferAttribute(o,s),e.distanceSqToSegment(ha,ua,to,Ec)>n)return;to.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(to);if(!(c<t.near||c>t.far))return{distance:c,point:Ec.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class ds extends Xe{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qh extends Xe{constructor(t,e,n=zi,r,s,a,o=Cn,l=Cn,c,h=ns,f=1){if(h!==ns&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:f};super(g,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Al(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Xh extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Tn extends Me{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new C,h=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,g=3;f<=e;f++,g+=3){const u=n+f/e*r;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[g]/t+1)/2,h.y=(a[g+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Be extends Me{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],g=[],u=[];let m=0;const v=[],p=n/2;let d=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(u,2));function M(){const _=new C,w=new C;let T=0;const R=(e-t)/n;for(let L=0;L<=s;L++){const E=[],x=L/s,P=x*(e-t)+t;for(let D=0;D<=r;D++){const B=D/r,V=B*l+o,G=Math.sin(V),W=Math.cos(V);w.x=P*G,w.y=-x*n+p,w.z=P*W,f.push(w.x,w.y,w.z),_.set(G,R,W).normalize(),g.push(_.x,_.y,_.z),u.push(B,1-x),E.push(m++)}v.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const x=v[E][L],P=v[E+1][L],D=v[E+1][L+1],B=v[E][L+1];(t>0||E!==0)&&(h.push(x,P,B),T+=3),(e>0||E!==s-1)&&(h.push(P,D,B),T+=3)}c.addGroup(d,T,0),d+=T}function y(_){const w=m,T=new ft,R=new C;let L=0;const E=_===!0?t:e,x=_===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,p*x,0),g.push(0,x,0),u.push(.5,.5),m++;const P=m;for(let D=0;D<=r;D++){const V=D/r*l+o,G=Math.cos(V),W=Math.sin(V);R.x=E*W,R.y=p*x,R.z=E*G,f.push(R.x,R.y,R.z),g.push(0,x,0),T.x=G*.5+.5,T.y=W*.5*x+.5,u.push(T.x,T.y),m++}for(let D=0;D<r;D++){const B=w+D,V=P+D;_===!0?h.push(V,V+1,B):h.push(V+1,V,B),L+=3}c.addGroup(d,L,_===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ps extends Be{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ps(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],g=n[r+1]-h,u=(a-h)/g;return(r+u)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new ft:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,r=[],s=[],a=[],o=new C,l=new pe;for(let u=0;u<=t;u++){const m=u/t;r[u]=this.getTangentAt(m,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),g=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),g<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(r[u-1],r[u]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(jt(r[u-1].dot(r[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(o,m))}a[u].crossVectors(r[u],s[u])}if(e===!0){let u=Math.acos(jt(s[0].dot(s[t]),-1,1));u/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(u=-u);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],u*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pl extends Wn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),g=l-this.aX,u=c-this.aY;l=g*h-u*f+this.aX,c=g*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Kf extends Pl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let g=(a-s)/c-(o-s)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;g*=h,u*=h,r(a,o,g,u)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const ks=new C,eo=new Ll,no=new Ll,io=new Ll;class Il extends Wn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new C){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(ks.subVectors(r[0],r[1]).add(r[0]),c=ks);const f=r[o%s],g=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(ks.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ks),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(g),u),p=Math.pow(g.distanceToSquared(h),u);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),eo.initNonuniformCatmullRom(c.x,f.x,g.x,h.x,m,v,p),no.initNonuniformCatmullRom(c.y,f.y,g.y,h.y,m,v,p),io.initNonuniformCatmullRom(c.z,f.z,g.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(eo.initCatmullRom(c.x,f.x,g.x,h.x,this.tension),no.initCatmullRom(c.y,f.y,g.y,h.y,this.tension),io.initCatmullRom(c.z,f.z,g.z,h.z,this.tension));return n.set(eo.calc(l),no.calc(l),io.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new C().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function Jf(i,t){const e=1-i;return e*e*t}function Zf(i,t){return 2*(1-i)*i*t}function jf(i,t){return i*i*t}function Yr(i,t,e,n){return Jf(i,t)+Zf(i,e)+jf(i,n)}function Qf(i,t){const e=1-i;return e*e*e*t}function td(i,t){const e=1-i;return 3*e*e*i*t}function ed(i,t){return 3*(1-i)*i*i*t}function nd(i,t){return i*i*i*t}function $r(i,t,e,n,r){return Qf(i,t)+td(i,e)+ed(i,n)+nd(i,r)}class Yh extends Wn{constructor(t=new ft,e=new ft,n=new ft,r=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ft){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set($r(t,r.x,s.x,a.x,o.x),$r(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class id extends Wn{constructor(t=new C,e=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set($r(t,r.x,s.x,a.x,o.x),$r(t,r.y,s.y,a.y,o.y),$r(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $h extends Wn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rd extends Wn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends Wn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Yr(t,r.x,s.x,a.x),Yr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends Wn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Yr(t,r.x,s.x,a.x),Yr(t,r.y,s.y,a.y),Yr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(wc(o,l.x,c.x,h.x,f.x),wc(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ft().fromArray(r))}return this}}var ol=Object.freeze({__proto__:null,ArcCurve:Kf,CatmullRomCurve3:Il,CubicBezierCurve:Yh,CubicBezierCurve3:id,EllipseCurve:Pl,LineCurve:$h,LineCurve3:rd,QuadraticBezierCurve:Kh,QuadraticBezierCurve3:Jh,SplineCurve:Zh});class sd extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ol[r.type]().fromJSON(r))}return this}}class bc extends sd{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new $h(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Kh(this.currentPoint.clone(),new ft(t,e),new ft(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new Yh(this.currentPoint.clone(),new ft(t,e),new ft(n,r),new ft(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new Pl(t,e,n,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Dl extends bc{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new bc().fromJSON(r))}return this}}function ad(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=jh(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=ud(i,t,s,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,f=-1/0;for(let g=e;g<r;g+=e){const u=i[g],m=i[g+1];u<o&&(o=u),m<l&&(l=m),u>h&&(h=u),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return as(s,a,e,o,l,c,0),a}function jh(i,t,e,n,r){let s;if(r===Sd(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=Tc(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=Tc(a/n|0,i[a],i[a+1],s);return s&&Er(s,s.next)&&(ls(s),s=s.next),s}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Er(e,e.next)||we(e.prev,e,e.next)===0)){if(ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function as(i,t,e,n,r,s,a){if(!i)return;!a&&s&&gd(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?ld(i,n,r,s):od(i)){t.push(l.i,i.i,c.i),ls(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=cd(Hi(i),t),as(i,t,e,n,r,s,2)):a===2&&hd(i,t,e,n,r,s):as(Hi(i),t,e,n,r,s,1);break}}}function od(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(r,s,a),f=Math.min(o,l,c),g=Math.max(r,s,a),u=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=g&&m.y>=f&&m.y<=u&&Gr(r,o,s,l,a,c,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ld(i,t,e,n){const r=i.prev,s=i,a=i.next;if(we(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,f=s.y,g=a.y,u=Math.min(o,l,c),m=Math.min(h,f,g),v=Math.max(o,l,c),p=Math.max(h,f,g),d=ll(u,m,t,e,n),M=ll(v,p,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=d&&_&&_.z<=M;){if(y.x>=u&&y.x<=v&&y.y>=m&&y.y<=p&&y!==r&&y!==a&&Gr(o,h,l,f,c,g,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=u&&_.x<=v&&_.y>=m&&_.y<=p&&_!==r&&_!==a&&Gr(o,h,l,f,c,g,_.x,_.y)&&we(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=d;){if(y.x>=u&&y.x<=v&&y.y>=m&&y.y<=p&&y!==r&&y!==a&&Gr(o,h,l,f,c,g,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=u&&_.x<=v&&_.y>=m&&_.y<=p&&_!==r&&_!==a&&Gr(o,h,l,f,c,g,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function cd(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Er(n,r)&&tu(n,e,e.next,r)&&os(n,r)&&os(r,n)&&(t.push(n.i,e.i,r.i),ls(e),ls(e.next),e=i=r),e=e.next}while(e!==i);return Hi(e)}function hd(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xd(a,o)){let l=eu(a,o);a=Hi(a,a.next),l=Hi(l,l.next),as(a,t,e,n,r,s,0),as(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function ud(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=jh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(vd(c))}r.sort(fd);for(let s=0;s<r.length;s++)e=dd(r[s],e);return e}function fd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function dd(i,t){const e=pd(i,t);if(!e)return t;const n=eu(e,i);return Hi(n,n.next),Hi(e,e.next)}function pd(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(Er(i,e))return e;do{if(Er(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qh(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const f=Math.abs(r-e.y)/(n-e.x);os(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&md(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function md(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function gd(i,t,e,n){let r=i;do r.z===0&&(r.z=ll(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,_d(r)}function _d(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function ll(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qh(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Gr(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&Qh(i,t,e,n,r,s,a,o)}function xd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Md(i,t)&&(os(i,t)&&os(t,i)&&yd(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||Er(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Er(i,t){return i.x===t.x&&i.y===t.y}function tu(i,t,e,n){const r=Vs(we(i,t,e)),s=Vs(we(i,t,n)),a=Vs(we(e,n,i)),o=Vs(we(e,n,t));return!!(r!==s&&a!==o||r===0&&Hs(i,e,t)||s===0&&Hs(i,n,t)||a===0&&Hs(e,i,n)||o===0&&Hs(e,t,n))}function Hs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vs(i){return i>0?1:i<0?-1:0}function Md(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&tu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function os(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function yd(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function eu(i,t){const e=cl(i.i,i.x,i.y),n=cl(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Tc(i,t,e,n){const r=cl(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sd(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Ed{static triangulate(t,e,n=2){return ad(t,e,n)}}class Kr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Kr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Ac(t),Rc(n,t);let a=t.length;e.forEach(Ac);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Rc(n,e[l]);const o=Ed.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Ac(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ul extends Me{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=jt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,f=new C,g=new ft,u=new C,m=new C,v=new C;let p=0,d=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,u.x=d*1,u.y=-p,u.z=d*0,v.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,u.x=d*1,u.y=-p,u.z=d*0,m.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),l.push(u.x,u.y,u.z),v.copy(m)}for(let M=0;M<=e;M++){const y=n+M*h*r,_=Math.sin(y),w=Math.cos(y);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*_,f.y=t[T].y,f.z=t[T].x*w,a.push(f.x,f.y,f.z),g.x=M/e,g.y=T/(t.length-1),o.push(g.x,g.y);const R=l[3*T+0]*_,L=l[3*T+1],E=l[3*T+0]*w;c.push(R,L,E)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){const _=y+M*t.length,w=_,T=_+t.length,R=_+t.length+1,L=_+1;s.push(w,T,L),s.push(R,L,T)}this.setIndex(s),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.points,t.segments,t.phiStart,t.phiLength)}}class kn extends Me{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=t/o,g=e/l,u=[],m=[],v=[],p=[];for(let d=0;d<h;d++){const M=d*g-a;for(let y=0;y<c;y++){const _=y*f-s;m.push(_,-M,0),v.push(0,0,1),p.push(y/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const y=M+c*d,_=M+c*(d+1),w=M+1+c*(d+1),T=M+1+c*d;u.push(y,_,T),u.push(_,w,T)}this.setIndex(u),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ma extends Me{constructor(t=new Dl([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(s,3)),this.setAttribute("uv",new ne(a,2));function c(h){const f=r.length/3,g=h.extractPoints(e);let u=g.shape;const m=g.holes;Kr.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,d=m.length;p<d;p++){const M=m[p];Kr.isClockWise(M)===!0&&(m[p]=M.reverse())}const v=Kr.triangulateShape(u,m);for(let p=0,d=m.length;p<d;p++){const M=m[p];u=u.concat(M)}for(let p=0,d=u.length;p<d;p++){const M=u[p];r.push(M.x,M.y,0),s.push(0,0,1),a.push(M.x,M.y)}for(let p=0,d=v.length;p<d;p++){const M=v[p],y=M[0]+f,_=M[1]+f,w=M[2]+f;n.push(y,_,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return wd(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new Ma(n,t.curveSegments)}}function wd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class ya extends Me{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new C,g=new C,u=[],m=[],v=[],p=[];for(let d=0;d<=n;d++){const M=[],y=d/n;let _=0;d===0&&a===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const T=w/e;f.x=-t*Math.cos(r+T*s)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(r+T*s)*Math.sin(a+y*o),m.push(f.x,f.y,f.z),g.copy(f).normalize(),v.push(g.x,g.y,g.z),p.push(T+_,1-y),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const y=h[d][M+1],_=h[d][M],w=h[d+1][M],T=h[d+1][M+1];(d!==0||a>0)&&u.push(y,_,T),(d!==n-1||l<Math.PI)&&u.push(_,w,T)}this.setIndex(u),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ln extends Me{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new C,f=new C,g=new C;for(let u=0;u<=n;u++)for(let m=0;m<=r;m++){const v=m/r*s,p=u/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(f,h).normalize(),l.push(g.x,g.y,g.z),c.push(m/r),c.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=r;m++){const v=(r+1)*u+m-1,p=(r+1)*(u-1)+m-1,d=(r+1)*(u-1)+m,M=(r+1)*u+m;a.push(v,p,M),a.push(p,d,M)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nl extends Me{constructor(t=new Jh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new ft;let h=new C;const f=[],g=[],u=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(u,2));function v(){for(let y=0;y<e;y++)p(y);p(s===!1?e:0),M(),d()}function p(y){h=t.getPointAt(y/e,h);const _=a.normals[y],w=a.binormals[y];for(let T=0;T<=r;T++){const R=T/r*Math.PI*2,L=Math.sin(R),E=-Math.cos(R);l.x=E*_.x+L*w.x,l.y=E*_.y+L*w.y,l.z=E*_.z+L*w.z,l.normalize(),g.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function d(){for(let y=1;y<=e;y++)for(let _=1;_<=r;_++){const w=(r+1)*(y-1)+(_-1),T=(r+1)*y+(_-1),R=(r+1)*y+_,L=(r+1)*(y-1)+_;m.push(w,T,L),m.push(T,R,L)}}function M(){for(let y=0;y<=e;y++)for(let _=0;_<=r;_++)c.x=y/e,c.y=_/r,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Nl(new ol[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Zt extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zn extends Zt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class bd extends gi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new It(16777215),this.specular=new It(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Td extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ad extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Rd extends fs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const ro={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Cd{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,g=c.length;f<g;f+=2){const u=c[f],m=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Pd=new Cd;class Fl{constructor(t){this.manager=t!==void 0?t:Pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";const lr=new WeakMap;class Ld extends Fl{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ro.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let f=lr.get(a);f===void 0&&(f=[],lr.set(a,f)),f.push({onLoad:e,onError:r})}return a}const o=rs("img");function l(){h(),e&&e(this);const f=lr.get(this)||[];for(let g=0;g<f.length;g++){const u=f[g];u.onLoad&&u.onLoad(this)}lr.delete(this),s.manager.itemEnd(t)}function c(f){h(),r&&r(f),ro.remove(`image:${t}`);const g=lr.get(this)||[];for(let u=0;u<g.length;u++){const m=g[u];m.onError&&m.onError(f)}lr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ro.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class nu extends Fl{constructor(t){super(t)}load(t,e,n,r){const s=new Xe,a=new Ld(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Sa extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Id extends Sa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const so=new pe,Cc=new C,Pc=new C;class Ol{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Dd extends Ol{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=la*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class iu extends Sa{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Dd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Lc=new pe,zr=new C,ao=new C;class Ud extends Ol{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zr.setFromMatrixPosition(t.matrixWorld),n.position.copy(zr),ao.copy(n.position),ao.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ao),n.updateMatrixWorld(),r.makeTranslation(-zr.x,-zr.y,-zr.z),Lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc,n.coordinateSystem,n.reversedDepth)}}class Nd extends Sa{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ud}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ru extends kh{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fd extends Ol{constructor(){super(new ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oo extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Fd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Od extends Me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Bd extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ic=new C;let Gs,lo;class Dc extends Te{constructor(t=new C(0,0,1),e=new C(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Gs===void 0&&(Gs=new Me,Gs.setAttribute("position",new ne([0,0,0,0,1,0],3)),lo=new ps(.5,1,5,1),lo.translate(0,-.5,0)),this.position.copy(e),this.line=new xa(Gs,new fs({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new je(lo,new Ie({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ic.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ic,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function Uc(i,t,e,n){const r=zd(n);switch(e){case Ah:return i*t;case Ch:return i*t/r.components*r.byteLength;case El:return i*t/r.components*r.byteLength;case Ph:return i*t*2/r.components*r.byteLength;case wl:return i*t*2/r.components*r.byteLength;case Rh:return i*t*3/r.components*r.byteLength;case Rn:return i*t*4/r.components*r.byteLength;case bl:return i*t*4/r.components*r.byteLength;case Js:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:case No:return Math.max(i,16)*Math.max(t,8)/4;case Io:case Uo:return Math.max(i,8)*Math.max(t,8)/2;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qo:case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case rl:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zd(i){switch(i){case Vn:case Eh:return{byteLength:1,components:1};case ts:case wh:case us:return{byteLength:2,components:1};case yl:case Sl:return{byteLength:2,components:4};case zi:case Ml:case ei:return{byteLength:4,components:1};case bh:case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);function su(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function kd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,g=i.createBuffer();i.bindBuffer(l,g),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,m)=>u.start-m.start);let g=0;for(let u=1;u<f.length;u++){const m=f[g],v=f[u];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++g,f[g]=v)}f.length=g+1;for(let u=0,m=f.length;u<m;u++){const v=f[u];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,ep=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hp=`#define PI 3.141592653589793
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
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
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
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bp=`PhysicalMaterial material;
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
#endif`,zp=`struct PhysicalMaterial {
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
}`,kp=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
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
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
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
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const km=`varying vec2 vUv;
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`#include <common>
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
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
}`,t0=`#include <common>
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define LAMBERT
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
}`,r0=`#define MATCAP
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
}`,s0=`#define MATCAP
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
}`,a0=`#define NORMAL
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
}`,o0=`#define NORMAL
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
}`,l0=`#define PHONG
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
}`,c0=`#define PHONG
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
}`,h0=`#define STANDARD
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
}`,u0=`#define STANDARD
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
}`,f0=`#define TOON
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
}`,d0=`#define TOON
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
}`,p0=`uniform float size;
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#include <common>
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
}`,_0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
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
}`,x0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Hd,alphahash_pars_fragment:Vd,alphamap_fragment:Gd,alphamap_pars_fragment:Wd,alphatest_fragment:qd,alphatest_pars_fragment:Xd,aomap_fragment:Yd,aomap_pars_fragment:$d,batching_pars_vertex:Kd,batching_vertex:Jd,begin_vertex:Zd,beginnormal_vertex:jd,bsdfs:Qd,iridescence_fragment:tp,bumpmap_pars_fragment:ep,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:rp,clipping_planes_vertex:sp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:lp,color_vertex:cp,common:hp,cube_uv_reflection_fragment:up,defaultnormal_vertex:fp,displacementmap_pars_vertex:dp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:_p,colorspace_pars_fragment:vp,envmap_fragment:xp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:yp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Dp,envmap_vertex:Ep,fog_vertex:wp,fog_pars_vertex:bp,fog_fragment:Tp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Ip,lights_toon_fragment:Up,lights_toon_pars_fragment:Np,lights_phong_fragment:Fp,lights_phong_pars_fragment:Op,lights_physical_fragment:Bp,lights_physical_pars_fragment:zp,lights_fragment_begin:kp,lights_fragment_maps:Hp,lights_fragment_end:Vp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Xp,map_fragment:Yp,map_pars_fragment:$p,map_particle_fragment:Kp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:jp,morphinstance_vertex:Qp,morphcolor_vertex:tm,morphnormal_vertex:em,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:rm,normal_fragment_maps:sm,normal_pars_fragment:am,normal_pars_vertex:om,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:fm,iridescence_pars_fragment:dm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:_m,dithering_fragment:vm,dithering_pars_fragment:xm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:bm,skinbase_vertex:Tm,skinning_pars_vertex:Am,skinning_vertex:Rm,skinnormal_vertex:Cm,specularmap_fragment:Pm,specularmap_pars_fragment:Lm,tonemapping_fragment:Im,tonemapping_pars_fragment:Dm,transmission_fragment:Um,transmission_pars_fragment:Nm,uv_pars_fragment:Fm,uv_pars_vertex:Om,uv_vertex:Bm,worldpos_vertex:zm,background_vert:km,background_frag:Hm,backgroundCube_vert:Vm,backgroundCube_frag:Gm,cube_vert:Wm,cube_frag:qm,depth_vert:Xm,depth_frag:Ym,distanceRGBA_vert:$m,distanceRGBA_frag:Km,equirect_vert:Jm,equirect_frag:Zm,linedashed_vert:jm,linedashed_frag:Qm,meshbasic_vert:t0,meshbasic_frag:e0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:r0,meshmatcap_frag:s0,meshnormal_vert:a0,meshnormal_frag:o0,meshphong_vert:l0,meshphong_frag:c0,meshphysical_vert:h0,meshphysical_frag:u0,meshtoon_vert:f0,meshtoon_frag:d0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:_0,sprite_vert:v0,sprite_frag:x0},dt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Nn={basic:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ke([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ke([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new It(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ke([dt.points,dt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ke([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ke([dt.common,dt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ke([dt.sprite,dt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ke([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ke([dt.lights,dt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Nn.physical={uniforms:Ke([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Ws={r:0,b:0,g:0},bi=new Pn,M0=new pe;function y0(i,t,e,n,r,s,a){const o=new It(0);let l=s===!0?0:1,c,h,f=null,g=0,u=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const w=m(y);w===null?d(o,l):w&&w.isColor&&(d(w,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,_){const w=m(_);w&&(w.isCubeTexture||w.mapping===_a)?(h===void 0&&(h=new je(new _i(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Sr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),bi.copy(_.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(M0.makeRotationFromEuler(bi)),h.material.toneMapped=re.getTransfer(w.colorSpace)!==ce,(f!==w||g!==w.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=w,g=w.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new je(new kn(2,2),new Ln({name:"BackgroundMaterial",uniforms:Sr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=re.getTransfer(w.colorSpace)!==ce,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||g!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,g=w.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,_){y.getRGB(Ws,zh(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,_,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:v,addToRenderList:p,dispose:M}}function S0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,a=!1;function o(x,P,D,B,V){let G=!1;const W=f(B,D,P);s!==W&&(s=W,c(s.object)),G=u(x,B,D,V),G&&m(x,B,D,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(x,P,D,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,P,D){const B=D.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let G=V[P.id];G===void 0&&(G={},V[P.id]=G);let W=G[B];return W===void 0&&(W=g(l()),G[B]=W),W}function g(x){const P=[],D=[],B=[];for(let V=0;V<e;V++)P[V]=0,D[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:B,object:x,attributes:{},index:null}}function u(x,P,D,B){const V=s.attributes,G=P.attributes;let W=0;const K=D.getAttributes();for(const H in K)if(K[H].location>=0){const $=V[H];let nt=G[H];if(nt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),$===void 0||$.attribute!==nt||nt&&$.data!==nt.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function m(x,P,D,B){const V={},G=P.attributes;let W=0;const K=D.getAttributes();for(const H in K)if(K[H].location>=0){let $=G[H];$===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&($=x.instanceColor));const nt={};nt.attribute=$,$&&$.data&&(nt.data=$.data),V[H]=nt,W++}s.attributes=V,s.attributesNum=W,s.index=B}function v(){const x=s.newAttributes;for(let P=0,D=x.length;P<D;P++)x[P]=0}function p(x){d(x,0)}function d(x,P){const D=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;D[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),V[x]!==P&&(i.vertexAttribDivisor(x,P),V[x]=P)}function M(){const x=s.newAttributes,P=s.enabledAttributes;for(let D=0,B=P.length;D<B;D++)P[D]!==x[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function y(x,P,D,B,V,G,W){W===!0?i.vertexAttribIPointer(x,P,D,V,G):i.vertexAttribPointer(x,P,D,B,V,G)}function _(x,P,D,B){v();const V=B.attributes,G=D.getAttributes(),W=P.defaultAttributeValues;for(const K in G){const H=G[K];if(H.location>=0){let U=V[K];if(U===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(U=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(U=x.instanceColor)),U!==void 0){const $=U.normalized,nt=U.itemSize,Dt=t.get(U);if(Dt===void 0)continue;const St=Dt.buffer,Ft=Dt.type,Rt=Dt.bytesPerElement,Y=Ft===i.INT||Ft===i.UNSIGNED_INT||U.gpuType===Ml;if(U.isInterleavedBufferAttribute){const J=U.data,ot=J.stride,Et=U.offset;if(J.isInstancedInterleavedBuffer){for(let vt=0;vt<H.locationSize;vt++)d(H.location+vt,J.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let vt=0;vt<H.locationSize;vt++)p(H.location+vt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let vt=0;vt<H.locationSize;vt++)y(H.location+vt,nt/H.locationSize,Ft,$,ot*Rt,(Et+nt/H.locationSize*vt)*Rt,Y)}else{if(U.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)d(H.location+J,U.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let J=0;J<H.locationSize;J++)p(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,St);for(let J=0;J<H.locationSize;J++)y(H.location+J,nt/H.locationSize,Ft,$,nt*Rt,nt/H.locationSize*J*Rt,Y)}}else if(W!==void 0){const $=W[K];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(H.location,$);break;case 3:i.vertexAttrib3fv(H.location,$);break;case 4:i.vertexAttrib4fv(H.location,$);break;default:i.vertexAttrib1fv(H.location,$)}}}}M()}function w(){L();for(const x in n){const P=n[x];for(const D in P){const B=P[D];for(const V in B)h(B[V].object),delete B[V];delete P[D]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const D in P){const B=P[D];for(const V in B)h(B[V].object),delete B[V];delete P[D]}delete n[x.id]}function R(x){for(const P in n){const D=n[P];if(D[x.id]===void 0)continue;const B=D[x.id];for(const V in B)h(B[V].object),delete B[V];delete D[x.id]}}function L(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function E0(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let m=0;m<f;m++)u+=h[m];e.update(u,n,1)}function l(c,h,f,g){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<c.length;m++)a(c[m],h[m],g[m]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,g,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v]*g[v];e.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function w0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ei&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:u,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:w,maxSamples:T}}function b0(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Ri,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){const u=f.length!==0||g||n!==0||r;return r=g,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,g){e=h(f,g,0)},this.setState=function(f,g,u){const m=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!r||m===null||m.length===0||s&&!p)s?h(null):c();else{const M=s?0:n,y=M*4;let _=d.clippingState||null;l.value=_,_=h(m,g,y,u);for(let w=0;w!==y;++w)_[w]=e[w];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,g,u,m){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const d=u+v*4,M=g.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,_=u;y!==v;++y,_+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function T0(i){let t=new WeakMap;function e(a,o){return o===Co?a.mapping=xr:o===Po&&(a.mapping=Mr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Co||o===Po)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const dr=4,Nc=[.125,.215,.35,.446,.526,.582],Li=20,co=new ru,Fc=new It;let ho=null,uo=0,fo=0,po=!1;const Ci=(1+Math.sqrt(5))/2,cr=1/Ci,Oc=[new C(-Ci,cr,0),new C(Ci,cr,0),new C(-cr,0,Ci),new C(cr,0,Ci),new C(0,Ci,-cr),new C(0,Ci,cr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],A0=new C;class hl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=A0}=s;ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ho,uo,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:us,format:Rn,colorSpace:yr,depthBuffer:!1},r=Bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R0(s)),this._blurMaterial=C0(s,t,e)}return r}_compileMaterial(t){const e=new je(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,r,s){const l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,u=f.toneMapping;f.getClearColor(Fc),f.toneMapping=pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new Ie({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),p=new je(new _i,v);let d=!1;const M=t.background;M?M.isColor&&(v.color.copy(M),t.background=null,d=!0):(v.color.copy(Fc),d=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const w=this._cubeSize;qs(r,_*w,y>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(p,l),f.render(t,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=u,f.autoClear=g,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===xr||t.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Oc[(r-s-1)%Oc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new je(this._lodPlanes[r],c),g=c.uniforms,u=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Li-1),v=s/m,p=isFinite(s)?1+Math.floor(h*v):Li;p>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const d=[];let M=0;for(let R=0;R<Li;++R){const L=R/v,E=Math.exp(-L*L/2);d.push(E),R===0?M+=E:R<p&&(M+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;g.envMap.value=t.texture,g.samples.value=p,g.weights.value=d,g.latitudinal.value=a==="latitudinal",o&&(g.poleAxis.value=o);const{_lodMax:y}=this;g.dTheta.value=m,g.mipInt.value=y-n;const _=this._sizeLods[r],w=3*_*(r>y-dr?r-y+dr:0),T=4*(this._cubeSize-_);qs(e,w,T,3*_,2*_),l.setRenderTarget(e),l.render(f,co)}}function R0(i){const t=[],e=[],n=[];let r=i;const s=i-dr+1+Nc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-dr?l=Nc[a-i+dr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,g=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,m=6,v=3,p=2,d=1,M=new Float32Array(v*m*u),y=new Float32Array(p*m*u),_=new Float32Array(d*m*u);for(let T=0;T<u;T++){const R=T%3*2/3-1,L=T>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];M.set(E,v*m*T),y.set(g,p*m*T);const x=[T,T,T,T,T,T];_.set(x,d*m*T)}const w=new Me;w.setAttribute("position",new hn(M,v)),w.setAttribute("uv",new hn(y,p)),w.setAttribute("faceIndex",new hn(_,d)),t.push(w),r>dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bc(i,t,e){const n=new ki(i,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function C0(i,t,e){const n=new Float32Array(Li),r=new C(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function zc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function kc(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function P0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Co||l===Po,h=l===xr||l===Mr;if(c||h){let f=t.get(o);const g=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return e===null&&(e=new hl(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const u=o.image;return c&&u&&u.height>0||h&&u&&r(u)?(e===null&&(e=new hl(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function L0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ss("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function I0(i,t,e,n){const r={},s=new WeakMap;function a(f){const g=f.target;g.index!==null&&t.remove(g.index);for(const m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete r[g.id];const u=s.get(g);u&&(t.remove(u),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function o(f,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,e.memory.geometries++),g}function l(f){const g=f.attributes;for(const u in g)t.update(g[u],i.ARRAY_BUFFER)}function c(f){const g=[],u=f.index,m=f.attributes.position;let v=0;if(u!==null){const M=u.array;v=u.version;for(let y=0,_=M.length;y<_;y+=3){const w=M[y+0],T=M[y+1],R=M[y+2];g.push(w,T,T,R,R,w)}}else if(m!==void 0){const M=m.array;v=m.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const w=y+0,T=y+1,R=y+2;g.push(w,T,T,R,R,w)}}else return;const p=new(Ih(g)?Bh:Oh)(g,1);p.version=v;const d=s.get(f);d&&t.remove(d),s.set(f,p)}function h(f){const g=s.get(f);if(g){const u=f.index;u!==null&&g.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function D0(i,t,e){let n;function r(g){n=g}let s,a;function o(g){s=g.type,a=g.bytesPerElement}function l(g,u){i.drawElements(n,u,s,g*a),e.update(u,n,1)}function c(g,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,g*a,m),e.update(u,n,m))}function h(g,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,g,0,m);let p=0;for(let d=0;d<m;d++)p+=u[d];e.update(p,n,1)}function f(g,u,m,v){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<g.length;d++)c(g[d]/a,u[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,s,g,0,v,0,m);let d=0;for(let M=0;M<m;M++)d+=u[M]*v[M];e.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function U0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function N0(i,t,e){const n=new WeakMap,r=new ue;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let g=n.get(o);if(g===void 0||g.count!==f){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var u=x;g!==void 0&&g.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let w=o.attributes.position.count*_,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*T*4*f),L=new Dh(R,w,T,f);L.type=ei,L.needsUpdate=!0;const E=_*4;for(let P=0;P<f;P++){const D=d[P],B=M[P],V=y[P],G=w*T*4*P;for(let W=0;W<D.count;W++){const K=W*E;m===!0&&(r.fromBufferAttribute(D,W),R[G+K+0]=r.x,R[G+K+1]=r.y,R[G+K+2]=r.z,R[G+K+3]=0),v===!0&&(r.fromBufferAttribute(B,W),R[G+K+4]=r.x,R[G+K+5]=r.y,R[G+K+6]=r.z,R[G+K+7]=0),p===!0&&(r.fromBufferAttribute(V,W),R[G+K+8]=r.x,R[G+K+9]=r.y,R[G+K+10]=r.z,R[G+K+11]=V.itemSize===4?r.w:1)}}g={count:f,texture:L,size:new ft(w,T)},n.set(o,g),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function F0(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const g=l.skeleton;r.get(g)!==c&&(g.update(),r.set(g,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const au=new Xe,Hc=new qh(1,1),ou=new Dh,lu=new bf,cu=new Hh,Vc=[],Gc=[],Wc=new Float32Array(16),qc=new Float32Array(9),Xc=new Float32Array(4);function Tr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Vc[r];if(s===void 0&&(s=new Float32Array(r),Vc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ea(i,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function O0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function H0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),ke(e,n)}}function V0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),ke(e,n)}}function G0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),ke(e,n)}}function W0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function j0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hc.compareFunction=Lh,s=Hc):s=au,e.setTexture2D(t||s,r)}function Q0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||lu,r)}function tg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||cu,r)}function eg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ou,r)}function ng(i){switch(i){case 5126:return O0;case 35664:return B0;case 35665:return z0;case 35666:return k0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return q0;case 35668:case 35672:return X0;case 35669:case 35673:return Y0;case 5125:return $0;case 36294:return K0;case 36295:return J0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}function ig(i,t){i.uniform1fv(this.addr,t)}function rg(i,t){const e=Tr(t,this.size,2);i.uniform2fv(this.addr,e)}function sg(i,t){const e=Tr(t,this.size,3);i.uniform3fv(this.addr,e)}function ag(i,t){const e=Tr(t,this.size,4);i.uniform4fv(this.addr,e)}function og(i,t){const e=Tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lg(i,t){const e=Tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cg(i,t){const e=Tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hg(i,t){i.uniform1iv(this.addr,t)}function ug(i,t){i.uniform2iv(this.addr,t)}function fg(i,t){i.uniform3iv(this.addr,t)}function dg(i,t){i.uniform4iv(this.addr,t)}function pg(i,t){i.uniform1uiv(this.addr,t)}function mg(i,t){i.uniform2uiv(this.addr,t)}function gg(i,t){i.uniform3uiv(this.addr,t)}function _g(i,t){i.uniform4uiv(this.addr,t)}function vg(i,t,e){const n=this.cache,r=t.length,s=Ea(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||au,s[a])}function xg(i,t,e){const n=this.cache,r=t.length,s=Ea(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||lu,s[a])}function Mg(i,t,e){const n=this.cache,r=t.length,s=Ea(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||cu,s[a])}function yg(i,t,e){const n=this.cache,r=t.length,s=Ea(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ou,s[a])}function Sg(i){switch(i){case 5126:return ig;case 35664:return rg;case 35665:return sg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return fg;case 35669:case 35673:return dg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return yg}}class Eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ng(e.type)}}class wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sg(e.type)}}class bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Yc(i,t){i.seq.push(t),i.map[t.id]=t}function Tg(i,t,e){const n=i.name,r=n.length;for(mo.lastIndex=0;;){const s=mo.exec(n),a=mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yc(e,c===void 0?new Eg(o,i,t):new wg(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new bg(o),Yc(e,f)),e=f}}}class ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Tg(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function $c(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ag=37297;let Rg=0;function Cg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Kc=new Kt;function Pg(i){re._getMatrix(Kc,re.workingColorSpace,i);const t=`mat3( ${Kc.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Cg(i.getShaderSource(t),o)}else return s}function Lg(i,t){const e=Pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ig(i,t){let e;switch(t){case Qu:e="Linear";break;case tf:e="Reinhard";break;case ef:e="Cineon";break;case yh:e="ACESFilmic";break;case rf:e="AgX";break;case sf:e="Neutral";break;case nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new C;function Dg(){re.getLuminanceCoefficients(Xs);const i=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Ng(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wr(i){return i!==""}function Zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Og,zg)}const Bg=new Map;function zg(i,t){let e=Jt[t];if(e===void 0){const n=Bg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(kg,Hg)}function Hg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function th(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Vg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case Mr:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Mr&&(t="ENVMAP_MODE_REFRACTION"),t}function qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case ju:t="ENVMAP_BLENDING_ADD";break}return t}function Xg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Yg(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Vg(e),c=Gg(e),h=Wg(e),f=qg(e),g=Xg(e),u=Ug(e),m=Ng(s),v=r.createProgram();let p,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wr).join(`
`),d.length>0&&(d+=`
`)):(p=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),d=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==pi?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),a=ul(a),a=Zc(a,e),a=jc(a,e),o=ul(o),o=Zc(o,e),o=jc(o,e),a=Qc(a),o=Qc(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+p+a,_=M+d+o,w=$c(r,r.VERTEX_SHADER,y),T=$c(r,r.FRAGMENT_SHADER,_);r.attachShader(v,w),r.attachShader(v,T),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(w)||"",V=r.getShaderInfoLog(T)||"",G=D.trim(),W=B.trim(),K=V.trim();let H=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,w,T);else{const $=Jc(r,w,"vertex"),nt=Jc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+$+`
`+nt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||K==="")&&(U=!1);U&&(P.diagnostics={runnable:H,programLog:G,vertexShader:{log:W,prefix:p},fragmentShader:{log:K,prefix:d}})}r.deleteShader(w),r.deleteShader(T),L=new ta(r,v),E=Fg(r,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,Ag)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let $g=0;class Kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jg(t),e.set(t,n)),n}}class Jg{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}}function Zg(i,t,e,n,r,s,a){const o=new Nh,l=new Kg,c=new Set,h=[],f=r.logarithmicDepthBuffer,g=r.vertexTextures;let u=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,x,P,D,B){const V=D.fog,G=B.geometry,W=E.isMeshStandardMaterial?D.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),H=K&&K.mapping===_a?K.image.height:null,U=m[E.type];E.precision!==null&&(u=r.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const $=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=$!==void 0?$.length:0;let Dt=0;G.morphAttributes.position!==void 0&&(Dt=1),G.morphAttributes.normal!==void 0&&(Dt=2),G.morphAttributes.color!==void 0&&(Dt=3);let St,Ft,Rt,Y;if(U){const ae=Nn[U];St=ae.vertexShader,Ft=ae.fragmentShader}else St=E.vertexShader,Ft=E.fragmentShader,l.update(E),Rt=l.getVertexShaderID(E),Y=l.getFragmentShaderID(E);const J=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),Et=B.isInstancedMesh===!0,vt=B.isBatchedMesh===!0,kt=!!E.map,F=!!E.matcap,b=!!K,Mt=!!E.aoMap,et=!!E.lightMap,rt=!!E.bumpMap,Q=!!E.normalMap,Ut=!!E.displacementMap,yt=!!E.emissiveMap,Ot=!!E.metalnessMap,Ae=!!E.roughnessMap,Ue=E.anisotropy>0,I=E.clearcoat>0,S=E.dispersion>0,k=E.iridescence>0,j=E.sheen>0,it=E.transmission>0,Z=Ue&&!!E.anisotropyMap,Nt=I&&!!E.clearcoatMap,ht=I&&!!E.clearcoatNormalMap,Ct=I&&!!E.clearcoatRoughnessMap,Pt=k&&!!E.iridescenceMap,lt=k&&!!E.iridescenceThicknessMap,xt=j&&!!E.sheenColorMap,Gt=j&&!!E.sheenRoughnessMap,Lt=!!E.specularMap,gt=!!E.specularColorMap,$t=!!E.specularIntensityMap,N=it&&!!E.transmissionMap,ct=it&&!!E.thicknessMap,ut=!!E.gradientMap,bt=!!E.alphaMap,st=E.alphaTest>0,tt=!!E.alphaHash,At=!!E.extensions;let Xt=pi;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const me={shaderID:U,shaderType:E.type,shaderName:E.name,vertexShader:St,fragmentShader:Ft,defines:E.defines,customVertexShaderID:Rt,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:vt,batchingColor:vt&&B._colorsTexture!==null,instancing:Et,instancingColor:Et&&B.instanceColor!==null,instancingMorph:Et&&B.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:yr,alphaToCoverage:!!E.alphaToCoverage,map:kt,matcap:F,envMap:b,envMapMode:b&&K.mapping,envMapCubeUVHeight:H,aoMap:Mt,lightMap:et,bumpMap:rt,normalMap:Q,displacementMap:g&&Ut,emissiveMap:yt,normalMapObjectSpace:Q&&E.normalMapType===cf,normalMapTangentSpace:Q&&E.normalMapType===Tl,metalnessMap:Ot,roughnessMap:Ae,anisotropy:Ue,anisotropyMap:Z,clearcoat:I,clearcoatMap:Nt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Ct,dispersion:S,iridescence:k,iridescenceMap:Pt,iridescenceThicknessMap:lt,sheen:j,sheenColorMap:xt,sheenRoughnessMap:Gt,specularMap:Lt,specularColorMap:gt,specularIntensityMap:$t,transmission:it,transmissionMap:N,thicknessMap:ct,gradientMap:ut,opaque:E.transparent===!1&&E.blending===Fi&&E.alphaToCoverage===!1,alphaMap:bt,alphaTest:st,alphaHash:tt,combine:E.combine,mapUv:kt&&v(E.map.channel),aoMapUv:Mt&&v(E.aoMap.channel),lightMapUv:et&&v(E.lightMap.channel),bumpMapUv:rt&&v(E.bumpMap.channel),normalMapUv:Q&&v(E.normalMap.channel),displacementMapUv:Ut&&v(E.displacementMap.channel),emissiveMapUv:yt&&v(E.emissiveMap.channel),metalnessMapUv:Ot&&v(E.metalnessMap.channel),roughnessMapUv:Ae&&v(E.roughnessMap.channel),anisotropyMapUv:Z&&v(E.anisotropyMap.channel),clearcoatMapUv:Nt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ht&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&v(E.sheenRoughnessMap.channel),specularMapUv:Lt&&v(E.specularMap.channel),specularColorMapUv:gt&&v(E.specularColorMap.channel),specularIntensityMapUv:$t&&v(E.specularIntensityMap.channel),transmissionMapUv:N&&v(E.transmissionMap.channel),thicknessMapUv:ct&&v(E.thicknessMap.channel),alphaMapUv:bt&&v(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Q||Ue),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(kt||bt),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ot,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:kt&&E.map.isVideoTexture===!0&&re.getTransfer(E.map.colorSpace)===ce,decodeVideoTextureEmissive:yt&&E.emissiveMap.isVideoTexture===!0&&re.getTransfer(E.emissiveMap.colorSpace)===ce,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ee,flipSided:E.side===Qe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:At&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&E.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function d(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)x.push(P),x.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(M(x,E),y(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function M(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function y(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const x=m[E.type];let P;if(x){const D=Nn[x];P=Bf.clone(D.uniforms)}else P=E.uniforms;return P}function w(E,x){let P;for(let D=0,B=h.length;D<B;D++){const V=h[D];if(V.cacheKey===x){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Yg(i,x,E,s),h.push(P)),P}function T(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:_,acquireProgram:w,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:L}}function jg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Qg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,g,u,m,v,p){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:g,material:u,groupOrder:m,renderOrder:f.renderOrder,z:v,group:p},i[t]=d):(d.id=f.id,d.object=f,d.geometry=g,d.material=u,d.groupOrder=m,d.renderOrder=f.renderOrder,d.z=v,d.group=p),t++,d}function o(f,g,u,m,v,p){const d=a(f,g,u,m,v,p);u.transmission>0?n.push(d):u.transparent===!0?r.push(d):e.push(d)}function l(f,g,u,m,v,p){const d=a(f,g,u,m,v,p);u.transmission>0?n.unshift(d):u.transparent===!0?r.unshift(d):e.unshift(d)}function c(f,g){e.length>1&&e.sort(f||Qg),n.length>1&&n.sort(g||eh),r.length>1&&r.sort(g||eh)}function h(){for(let f=t,g=i.length;f<g;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function t_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new nh,i.set(n,[a])):r>=s.length?(a=new nh,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new It};break;case"SpotLight":e={position:new C,direction:new C,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function n_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let i_=0;function r_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function s_(i){const t=new e_,e=n_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,s=new pe,a=new pe;function o(c){let h=0,f=0,g=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,m=0,v=0,p=0,d=0,M=0,y=0,_=0,w=0,T=0,R=0;c.sort(r_);for(let E=0,x=c.length;E<x;E++){const P=c[E],D=P.color,B=P.intensity,V=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*B,f+=D.g*B,g+=D.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],B);R++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[u]=H,n.directionalShadowMap[u]=G,n.directionalShadowMatrix[u]=P.shadow.matrix,M++}n.directional[u]=W,u++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(B),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;const K=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,K.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=K.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=G,_++}v++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(D).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=W,p++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=W,m++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[d]=W,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=g;const L=n.hash;(L.directionalLength!==u||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==_||L.numSpotMaps!==w||L.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=p,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=u,L.pointLength=m,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=_,L.numSpotMaps=w,L.numLightProbes=R,n.version=i_++)}function l(c,h){let f=0,g=0,u=0,m=0,v=0;const p=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const y=c[d];if(y.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),f++}else if(y.isSpotLight){const _=n.spot[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),u++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const _=n.point[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),g++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function ih(i){const t=new s_(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function a_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ih(i),t.set(r,[o])):s>=a.length?(o=new ih(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
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
}`;function c_(i,t,e){let n=new Cl;const r=new ft,s=new ft,a=new ue,o=new Td({depthPacking:lf}),l=new Ad,c={},h=e.maxTextureSize,f={[mi]:Qe,[Qe]:mi,[ee]:ee},g=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:o_,fragmentShader:l_}),u=g.clone();u.defines.HORIZONTAL_PASS=1;const m=new Me;m.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new je(m,g),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let d=this.type;this.render=function(T,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(di),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=d!==jn&&this.type===jn,V=d===jn&&this.type!==jn;for(let G=0,W=T.length;G<W;G++){const K=T[G],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const U=H.getFrameExtents();if(r.multiply(U),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,H.mapSize.y=s.y)),H.map===null||B===!0||V===!0){const nt=this.type!==jn?{minFilter:Cn,magFilter:Cn}:{};H.map!==null&&H.map.dispose(),H.map=new ki(r.x,r.y,nt),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const $=H.getViewportCount();for(let nt=0;nt<$;nt++){const Dt=H.getViewport(nt);a.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),D.viewport(a),H.updateMatrices(K,nt),n=H.getFrustum(),_(R,L,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===jn&&M(H,L),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(E,x,P)};function M(T,R){const L=t.update(v);g.defines.VSM_SAMPLES!==T.blurSamples&&(g.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,g.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ki(r.x,r.y)),g.uniforms.shadow_pass.value=T.map.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,g,v,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,u,v,null)}function y(T,R,L,E){let x=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)x=P;else if(x=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=x.uuid,B=R.uuid;let V=c[D];V===void 0&&(V={},c[D]=V);let G=V[B];G===void 0&&(G=x.clone(),V[B]=G,R.addEventListener("dispose",w)),x=G}if(x.visible=R.visible,x.wireframe=R.wireframe,E===jn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=L}return x}function _(T,R,L,E,x){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===jn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const B=t.update(T),V=T.material;if(Array.isArray(V)){const G=B.groups;for(let W=0,K=G.length;W<K;W++){const H=G[W],U=V[H.materialIndex];if(U&&U.visible){const $=y(T,U,E,x);T.onBeforeShadow(i,T,R,L,B,$,H),i.renderBufferDirect(L,null,B,$,T,H),T.onAfterShadow(i,T,R,L,B,$,H)}}}else if(V.visible){const G=y(T,V,E,x);T.onBeforeShadow(i,T,R,L,B,G,null),i.renderBufferDirect(L,null,B,G,T,null),T.onAfterShadow(i,T,R,L,B,G,null)}}const D=T.children;for(let B=0,V=D.length;B<V;B++)_(D[B],R,L,E,x)}function w(T){T.target.removeEventListener("dispose",w);for(const L in c){const E=c[L],x=T.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const h_={[So]:Eo,[wo]:Ao,[bo]:Ro,[vr]:To,[Eo]:So,[Ao]:wo,[Ro]:bo,[To]:vr};function u_(i,t){function e(){let N=!1;const ct=new ue;let ut=null;const bt=new ue(0,0,0,0);return{setMask:function(st){ut!==st&&!N&&(i.colorMask(st,st,st,st),ut=st)},setLocked:function(st){N=st},setClear:function(st,tt,At,Xt,me){me===!0&&(st*=Xt,tt*=Xt,At*=Xt),ct.set(st,tt,At,Xt),bt.equals(ct)===!1&&(i.clearColor(st,tt,At,Xt),bt.copy(ct))},reset:function(){N=!1,ut=null,bt.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,ut=null,bt=null,st=null;return{setReversed:function(tt){if(ct!==tt){const At=t.get("EXT_clip_control");tt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ct=tt;const Xt=st;st=null,this.setClear(Xt)}},getReversed:function(){return ct},setTest:function(tt){tt?J(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(tt){ut!==tt&&!N&&(i.depthMask(tt),ut=tt)},setFunc:function(tt){if(ct&&(tt=h_[tt]),bt!==tt){switch(tt){case So:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case wo:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case Ao:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=tt}},setLocked:function(tt){N=tt},setClear:function(tt){st!==tt&&(ct&&(tt=1-tt),i.clearDepth(tt),st=tt)},reset:function(){N=!1,ut=null,bt=null,st=null,ct=!1}}}function r(){let N=!1,ct=null,ut=null,bt=null,st=null,tt=null,At=null,Xt=null,me=null;return{setTest:function(ae){N||(ae?J(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(ae){ct!==ae&&!N&&(i.stencilMask(ae),ct=ae)},setFunc:function(ae,qn,In){(ut!==ae||bt!==qn||st!==In)&&(i.stencilFunc(ae,qn,In),ut=ae,bt=qn,st=In)},setOp:function(ae,qn,In){(tt!==ae||At!==qn||Xt!==In)&&(i.stencilOp(ae,qn,In),tt=ae,At=qn,Xt=In)},setLocked:function(ae){N=ae},setClear:function(ae){me!==ae&&(i.clearStencil(ae),me=ae)},reset:function(){N=!1,ct=null,ut=null,bt=null,st=null,tt=null,At=null,Xt=null,me=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},g=new WeakMap,u=[],m=null,v=!1,p=null,d=null,M=null,y=null,_=null,w=null,T=null,R=new It(0,0,0),L=0,E=!1,x=null,P=null,D=null,B=null,V=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=K>=2);let U=null,$={};const nt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),St=new ue().fromArray(nt),Ft=new ue().fromArray(Dt);function Rt(N,ct,ut,bt){const st=new Uint8Array(4),tt=i.createTexture();i.bindTexture(N,tt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ut;At++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(ct+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return tt}const Y={};Y[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(vr),rt(!1),Q(jl),J(i.CULL_FACE),Mt(di);function J(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ot(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Et(N,ct){return f[N]!==ct?(i.bindFramebuffer(N,ct),f[N]=ct,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function vt(N,ct){let ut=u,bt=!1;if(N){ut=g.get(ct),ut===void 0&&(ut=[],g.set(ct,ut));const st=N.textures;if(ut.length!==st.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,At=st.length;tt<At;tt++)ut[tt]=i.COLOR_ATTACHMENT0+tt;ut.length=st.length,bt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,bt=!0);bt&&i.drawBuffers(ut)}function kt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const F={[Pi]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Nu]:i.FUNC_REVERSE_SUBTRACT};F[Fu]=i.MIN,F[Ou]=i.MAX;const b={[Bu]:i.ZERO,[zu]:i.ONE,[ku]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Vu]:i.DST_ALPHA,[Hu]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[Gu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[$u]:i.ONE_MINUS_CONSTANT_COLOR,[Ku]:i.CONSTANT_ALPHA,[Ju]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(N,ct,ut,bt,st,tt,At,Xt,me,ae){if(N===di){v===!0&&(ot(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),N!==Du){if(N!==p||ae!==E){if((d!==Pi||_!==Pi)&&(i.blendEquation(i.FUNC_ADD),d=Pi,_=Pi),ae)switch(N){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sa:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ql:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,y=null,w=null,T=null,R.set(0,0,0),L=0,p=N,E=ae}return}st=st||ct,tt=tt||ut,At=At||bt,(ct!==d||st!==_)&&(i.blendEquationSeparate(F[ct],F[st]),d=ct,_=st),(ut!==M||bt!==y||tt!==w||At!==T)&&(i.blendFuncSeparate(b[ut],b[bt],b[tt],b[At]),M=ut,y=bt,w=tt,T=At),(Xt.equals(R)===!1||me!==L)&&(i.blendColor(Xt.r,Xt.g,Xt.b,me),R.copy(Xt),L=me),p=N,E=!1}function et(N,ct){N.side===ee?ot(i.CULL_FACE):J(i.CULL_FACE);let ut=N.side===Qe;ct&&(ut=!ut),rt(ut),N.blending===Fi&&N.transparent===!1?Mt(di):Mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const bt=N.stencilWrite;o.setTest(bt),bt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),yt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function Q(N){N!==Lu?(J(i.CULL_FACE),N!==P&&(N===jl?i.cullFace(i.BACK):N===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),P=N}function Ut(N){N!==D&&(W&&i.lineWidth(N),D=N)}function yt(N,ct,ut){N?(J(i.POLYGON_OFFSET_FILL),(B!==ct||V!==ut)&&(i.polygonOffset(ct,ut),B=ct,V=ut)):ot(i.POLYGON_OFFSET_FILL)}function Ot(N){N?J(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function Ae(N){N===void 0&&(N=i.TEXTURE0+G-1),U!==N&&(i.activeTexture(N),U=N)}function Ue(N,ct,ut){ut===void 0&&(U===null?ut=i.TEXTURE0+G-1:ut=U);let bt=$[ut];bt===void 0&&(bt={type:void 0,texture:void 0},$[ut]=bt),(bt.type!==N||bt.texture!==ct)&&(U!==ut&&(i.activeTexture(ut),U=ut),i.bindTexture(N,ct||Y[N]),bt.type=N,bt.texture=ct)}function I(){const N=$[U];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(N){St.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),St.copy(N))}function Gt(N){Ft.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ft.copy(N))}function Lt(N,ct){let ut=c.get(ct);ut===void 0&&(ut=new WeakMap,c.set(ct,ut));let bt=ut.get(N);bt===void 0&&(bt=i.getUniformBlockIndex(ct,N.name),ut.set(N,bt))}function gt(N,ct){const bt=c.get(ct).get(N);l.get(ct)!==bt&&(i.uniformBlockBinding(ct,bt,N.__bindingPointIndex),l.set(ct,bt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},U=null,$={},f={},g=new WeakMap,u=[],m=null,v=!1,p=null,d=null,M=null,y=null,_=null,w=null,T=null,R=new It(0,0,0),L=0,E=!1,x=null,P=null,D=null,B=null,V=null,St.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ot,bindFramebuffer:Et,drawBuffers:vt,useProgram:kt,setBlending:Mt,setMaterial:et,setFlipSided:rt,setCullFace:Q,setLineWidth:Ut,setPolygonOffset:yt,setScissorTest:Ot,activeTexture:Ae,bindTexture:Ue,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:Pt,texImage3D:lt,updateUBOMapping:Lt,uniformBlockBinding:gt,texStorage2D:ht,texStorage3D:Ct,texSubImage2D:j,texSubImage3D:it,compressedTexSubImage2D:Z,compressedTexSubImage3D:Nt,scissor:xt,viewport:Gt,reset:$t}}function f_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap;let f;const g=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return u?new OffscreenCanvas(I,S):rs("canvas")}function v(I,S,k){let j=1;const it=Ue(I);if((it.width>k||it.height>k)&&(j=k/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Z=Math.floor(j*it.width),Nt=Math.floor(j*it.height);f===void 0&&(f=m(Z,Nt));const ht=S?m(Z,Nt):f;return ht.width=Z,ht.height=Nt,ht.getContext("2d").drawImage(I,0,0,Z,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Z+"x"+Nt+")."),ht}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function p(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,S,k,j,it=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=S;if(S===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),S===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),S===i.RGBA){const Nt=it?aa:re.getTransfer(j);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=Nt===ce?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(I,S){let k;return I?S===null||S===zi||S===es?k=i.DEPTH24_STENCIL8:S===ei?k=i.DEPTH32F_STENCIL8:S===ts&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zi||S===es?k=i.DEPTH_COMPONENT24:S===ei?k=i.DEPTH_COMPONENT32F:S===ts&&(k=i.DEPTH_COMPONENT16),k}function w(I,S){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Cn&&I.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function T(I){const S=I.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&h.delete(S)}function R(I){const S=I.target;S.removeEventListener("dispose",R),x(S)}function L(I){const S=n.get(I);if(S.__webglInit===void 0)return;const k=I.source,j=g.get(k);if(j){const it=j[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(I),Object.keys(j).length===0&&g.delete(k)}n.remove(I)}function E(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const k=I.source,j=g.get(k);delete j[S.__cacheKey],a.memory.textures--}function x(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let it=0;it<S.__webglFramebuffer[j].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[j][it]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=I.textures;for(let j=0,it=k.length;j<it;j++){const Z=n.get(k[j]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(I)}let P=0;function D(){P=0}function B(){const I=P;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),P+=1,I}function V(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function G(I,S){const k=n.get(I);if(I.isVideoTexture&&Ot(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){const j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,I,S);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function W(I,S){const k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Y(k,I,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function K(I,S){const k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){Y(k,I,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function H(I,S){const k=n.get(I);if(I.version>0&&k.__version!==I.version){J(k,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const U={[Qr]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},$={[Cn]:i.NEAREST,[af]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},nt={[hf]:i.NEVER,[gf]:i.ALWAYS,[uf]:i.LESS,[Lh]:i.LEQUAL,[ff]:i.EQUAL,[mf]:i.GEQUAL,[df]:i.GREATER,[pf]:i.NOTEQUAL};function Dt(I,S){if(S.type===ei&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===On||S.magFilter===Ra||S.magFilter===_s||S.magFilter===Di||S.minFilter===On||S.minFilter===Ra||S.minFilter===_s||S.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,U[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,U[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,U[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,$[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,$[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==_s&&S.minFilter!==Di||S.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function St(I,S){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",T));const j=S.source;let it=g.get(j);it===void 0&&(it={},g.set(j,it));const Z=V(S);if(Z!==I.__cacheKey){it[Z]===void 0&&(it[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),it[Z].usedTimes++;const Nt=it[I.__cacheKey];Nt!==void 0&&(it[I.__cacheKey].usedTimes--,Nt.usedTimes===0&&E(S)),I.__cacheKey=Z,I.__webglTexture=it[Z].texture}return k}function Ft(I,S,k){return Math.floor(Math.floor(I/k)/S)}function Rt(I,S,k,j){const Z=I.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,j,S.data);else{Z.sort((lt,xt)=>lt.start-xt.start);let Nt=0;for(let lt=1;lt<Z.length;lt++){const xt=Z[Nt],Gt=Z[lt],Lt=xt.start+xt.count,gt=Ft(Gt.start,S.width,4),$t=Ft(xt.start,S.width,4);Gt.start<=Lt+1&&gt===$t&&Ft(Gt.start+Gt.count-1,S.width,4)===gt?xt.count=Math.max(xt.count,Gt.start+Gt.count-xt.start):(++Nt,Z[Nt]=Gt)}Z.length=Nt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let lt=0,xt=Z.length;lt<xt;lt++){const Gt=Z[lt],Lt=Math.floor(Gt.start/4),gt=Math.ceil(Gt.count/4),$t=Lt%S.width,N=Math.floor(Lt/S.width),ct=gt,ut=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,$t,N,ct,ut,k,j,S.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function Y(I,S,k){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const it=St(I,S),Z=S.source;e.bindTexture(j,I.__webglTexture,i.TEXTURE0+k);const Nt=n.get(Z);if(Z.version!==Nt.__version||it===!0){e.activeTexture(i.TEXTURE0+k);const ht=re.getPrimaries(re.workingColorSpace),Ct=S.colorSpace===fi?null:re.getPrimaries(S.colorSpace),Pt=S.colorSpace===fi||ht===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let lt=v(S.image,!1,r.maxTextureSize);lt=Ae(S,lt);const xt=s.convert(S.format,S.colorSpace),Gt=s.convert(S.type);let Lt=y(S.internalFormat,xt,Gt,S.colorSpace,S.isVideoTexture);Dt(j,S);let gt;const $t=S.mipmaps,N=S.isVideoTexture!==!0,ct=Nt.__version===void 0||it===!0,ut=Z.dataReady,bt=w(S,lt);if(S.isDepthTexture)Lt=_(S.format===is,S.type),ct&&(N?e.texStorage2D(i.TEXTURE_2D,1,Lt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,lt.width,lt.height,0,xt,Gt,null));else if(S.isDataTexture)if($t.length>0){N&&ct&&e.texStorage2D(i.TEXTURE_2D,bt,Lt,$t[0].width,$t[0].height);for(let st=0,tt=$t.length;st<tt;st++)gt=$t[st],N?ut&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,gt.width,gt.height,xt,Gt,gt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,gt.width,gt.height,0,xt,Gt,gt.data);S.generateMipmaps=!1}else N?(ct&&e.texStorage2D(i.TEXTURE_2D,bt,Lt,lt.width,lt.height),ut&&Rt(S,lt,xt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Lt,lt.width,lt.height,0,xt,Gt,lt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Lt,$t[0].width,$t[0].height,lt.depth);for(let st=0,tt=$t.length;st<tt;st++)if(gt=$t[st],S.format!==Rn)if(xt!==null)if(N){if(ut)if(S.layerUpdates.size>0){const At=Uc(gt.width,gt.height,S.format,S.type);for(const Xt of S.layerUpdates){const me=gt.data.subarray(Xt*At/gt.data.BYTES_PER_ELEMENT,(Xt+1)*At/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Xt,gt.width,gt.height,1,xt,me)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,lt.depth,xt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Lt,gt.width,gt.height,lt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,gt.width,gt.height,lt.depth,xt,Gt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Lt,gt.width,gt.height,lt.depth,0,xt,Gt,gt.data)}else{N&&ct&&e.texStorage2D(i.TEXTURE_2D,bt,Lt,$t[0].width,$t[0].height);for(let st=0,tt=$t.length;st<tt;st++)gt=$t[st],S.format!==Rn?xt!==null?N?ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ut&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,gt.width,gt.height,xt,Gt,gt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,gt.width,gt.height,0,xt,Gt,gt.data)}else if(S.isDataArrayTexture)if(N){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Lt,lt.width,lt.height,lt.depth),ut)if(S.layerUpdates.size>0){const st=Uc(lt.width,lt.height,S.format,S.type);for(const tt of S.layerUpdates){const At=lt.data.subarray(tt*st/lt.data.BYTES_PER_ELEMENT,(tt+1)*st/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,xt,Gt,At)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,xt,Gt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,lt.width,lt.height,lt.depth,0,xt,Gt,lt.data);else if(S.isData3DTexture)N?(ct&&e.texStorage3D(i.TEXTURE_3D,bt,Lt,lt.width,lt.height,lt.depth),ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,xt,Gt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,lt.width,lt.height,lt.depth,0,xt,Gt,lt.data);else if(S.isFramebufferTexture){if(ct)if(N)e.texStorage2D(i.TEXTURE_2D,bt,Lt,lt.width,lt.height);else{let st=lt.width,tt=lt.height;for(let At=0;At<bt;At++)e.texImage2D(i.TEXTURE_2D,At,Lt,st,tt,0,xt,Gt,null),st>>=1,tt>>=1}}else if($t.length>0){if(N&&ct){const st=Ue($t[0]);e.texStorage2D(i.TEXTURE_2D,bt,Lt,st.width,st.height)}for(let st=0,tt=$t.length;st<tt;st++)gt=$t[st],N?ut&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,xt,Gt,gt):e.texImage2D(i.TEXTURE_2D,st,Lt,xt,Gt,gt);S.generateMipmaps=!1}else if(N){if(ct){const st=Ue(lt);e.texStorage2D(i.TEXTURE_2D,bt,Lt,st.width,st.height)}ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Gt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,xt,Gt,lt);p(S)&&d(j),Nt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function J(I,S,k){if(S.image.length!==6)return;const j=St(I,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+k);const Z=n.get(it);if(it.version!==Z.__version||j===!0){e.activeTexture(i.TEXTURE0+k);const Nt=re.getPrimaries(re.workingColorSpace),ht=S.colorSpace===fi?null:re.getPrimaries(S.colorSpace),Ct=S.colorSpace===fi||Nt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Pt=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Pt&&!lt?xt[tt]=v(S.image[tt],!0,r.maxCubemapSize):xt[tt]=lt?S.image[tt].image:S.image[tt],xt[tt]=Ae(S,xt[tt]);const Gt=xt[0],Lt=s.convert(S.format,S.colorSpace),gt=s.convert(S.type),$t=y(S.internalFormat,Lt,gt,S.colorSpace),N=S.isVideoTexture!==!0,ct=Z.__version===void 0||j===!0,ut=it.dataReady;let bt=w(S,Gt);Dt(i.TEXTURE_CUBE_MAP,S);let st;if(Pt){N&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,$t,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){st=xt[tt].mipmaps;for(let At=0;At<st.length;At++){const Xt=st[At];S.format!==Rn?Lt!==null?N?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,0,0,Xt.width,Xt.height,Lt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,$t,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,0,0,Xt.width,Xt.height,Lt,gt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At,$t,Xt.width,Xt.height,0,Lt,gt,Xt.data)}}}else{if(st=S.mipmaps,N&&ct){st.length>0&&bt++;const tt=Ue(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){N?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,Lt,gt,xt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,xt[tt].width,xt[tt].height,0,Lt,gt,xt[tt].data);for(let At=0;At<st.length;At++){const me=st[At].image[tt].image;N?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,0,0,me.width,me.height,Lt,gt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,$t,me.width,me.height,0,Lt,gt,me.data)}}else{N?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,gt,xt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Lt,gt,xt[tt]);for(let At=0;At<st.length;At++){const Xt=st[At];N?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,0,0,Lt,gt,Xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,At+1,$t,Lt,gt,Xt.image[tt])}}}p(S)&&d(i.TEXTURE_CUBE_MAP),Z.__version=it.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ot(I,S,k,j,it,Z){const Nt=s.convert(k.format,k.colorSpace),ht=s.convert(k.type),Ct=y(k.internalFormat,Nt,ht,k.colorSpace),Pt=n.get(S),lt=n.get(k);if(lt.__renderTarget=S,!Pt.__hasExternalTextures){const xt=Math.max(1,S.width>>Z),Gt=Math.max(1,S.height>>Z);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Z,Ct,xt,Gt,S.depth,0,Nt,ht,null):e.texImage2D(it,Z,Ct,xt,Gt,0,Nt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),yt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,it,lt.__webglTexture,0,Ut(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,it,lt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(I,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const j=S.depthTexture,it=j&&j.isDepthTexture?j.type:null,Z=_(S.stencilBuffer,it),Nt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Ut(S);yt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Z,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,I)}else{const j=S.textures;for(let it=0;it<j.length;it++){const Z=j[it],Nt=s.convert(Z.format,Z.colorSpace),ht=s.convert(Z.type),Ct=y(Z.internalFormat,Nt,ht,Z.colorSpace),Pt=Ut(S);k&&yt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Ct,S.width,S.height):yt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,Ct,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const it=j.__webglTexture,Z=Ut(S);if(S.depthTexture.format===ns)yt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(S.depthTexture.format===is)yt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function kt(I){const S=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=j}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const j=I.texture.mipmaps;j&&j.length>0?vt(S.__webglFramebuffer[0],I):vt(S.__webglFramebuffer,I)}else if(k){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),Et(S.__webglDepthbuffer[j],I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Z)}}else{const j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Et(S.__webglDepthbuffer,I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(I,S,k){const j=n.get(I);S!==void 0&&ot(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&kt(I)}function b(I){const S=I.texture,k=n.get(I),j=n.get(S);I.addEventListener("dispose",R);const it=I.textures,Z=I.isWebGLCubeRenderTarget===!0,Nt=it.length>1;if(Nt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)k.__webglFramebuffer[ht][Ct]=i.createFramebuffer()}else k.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)k.__webglFramebuffer[ht]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let ht=0,Ct=it.length;ht<Ct;ht++){const Pt=n.get(it[ht]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&yt(I)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<it.length;ht++){const Ct=it[ht];k.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);const Pt=s.convert(Ct.format,Ct.colorSpace),lt=s.convert(Ct.type),xt=y(Ct.internalFormat,Pt,lt,Ct.colorSpace,I.isXRRenderTarget===!0),Gt=Ut(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)ot(k.__webglFramebuffer[ht][Ct],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct);else ot(k.__webglFramebuffer[ht],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let ht=0,Ct=it.length;ht<Ct;ht++){const Pt=it[ht],lt=n.get(Pt);let xt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,lt.__webglTexture),Dt(xt,Pt),ot(k.__webglFramebuffer,I,Pt,i.COLOR_ATTACHMENT0+ht,xt,0),p(Pt)&&d(xt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),Dt(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)ot(k.__webglFramebuffer[Ct],I,S,i.COLOR_ATTACHMENT0,ht,Ct);else ot(k.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,ht,0);p(S)&&d(ht),e.unbindTexture()}I.depthBuffer&&kt(I)}function Mt(I){const S=I.textures;for(let k=0,j=S.length;k<j;k++){const it=S[k];if(p(it)){const Z=M(I),Nt=n.get(it).__webglTexture;e.bindTexture(Z,Nt),d(Z),e.unbindTexture()}}}const et=[],rt=[];function Q(I){if(I.samples>0){if(yt(I)===!1){const S=I.textures,k=I.width,j=I.height;let it=i.COLOR_BUFFER_BIT;const Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(I),ht=S.length>1;if(ht)for(let Pt=0;Pt<S.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Ct=I.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Pt=0;Pt<S.length;Pt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);const lt=n.get(S[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,it,i.NEAREST),l===!0&&(et.length=0,rt.length=0,et.push(i.COLOR_ATTACHMENT0+Pt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(et.push(Z),rt.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Pt=0;Pt<S.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);const lt=n.get(S[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ut(I){return Math.min(r.maxSamples,I.samples)}function yt(I){const S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ot(I){const S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Ae(I,S){const k=I.colorSpace,j=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==yr&&k!==fi&&(re.getTransfer(k)===ce?(j!==Rn||it!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=F,this.setupRenderTarget=b,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=yt}function d_(i,t){function e(n,r=fi){let s;const a=re.getTransfer(r);if(n===Vn)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===wh)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===us)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===Rh)return i.RGB;if(n===Rn)return i.RGBA;if(n===ns)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Ch)return i.RED;if(n===El)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Js||n===Zs||n===js||n===Qs)if(a===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Do||n===Uo||n===No)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fo||n===Oo||n===Bo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fo||n===Oo)return a===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zo||n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===qo||n===Xo||n===Yo||n===$o||n===Ko||n===Jo||n===Zo||n===jo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return a===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===tl||n===el)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Qo)return a===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===il||n===rl||n===sl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const p_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m_=`
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

}`;class g_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ln({vertexShader:p_,fragmentShader:m_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new je(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class __ extends wr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,g=null,u=null,m=null;const v=typeof XRWebGLBinding<"u",p=new g_,d={},M=e.getContextAttributes();let y=null,_=null;const w=[],T=[],R=new ft;let L=null;const E=new nn;E.viewport=new ue;const x=new nn;x.viewport=new ue;const P=[E,x],D=new Bd;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=w[Y];return J===void 0&&(J=new Za,w[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=w[Y];return J===void 0&&(J=new Za,w[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=w[Y];return J===void 0&&(J=new Za,w[Y]=J),J.getHandSpace()};function G(Y){const J=T.indexOf(Y.inputSource);if(J===-1)return;const ot=w[J];ot!==void 0&&(ot.update(Y.inputSource,Y.frame,c||a),ot.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<w.length;Y++){const J=T[Y];J!==null&&(T[Y]=null,w[Y].disconnect(J))}B=null,V=null,p.reset();for(const Y in d)delete d[Y];t.setRenderTarget(y),u=null,g=null,f=null,r=null,_=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return g!==null?g:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Et=null,vt=null;M.depth&&(vt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=M.stencil?is:ns,Et=M.stencil?es:zi);const kt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};f=this.getBinding(),g=f.createProjectionLayer(kt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),_=new ki(g.textureWidth,g.textureHeight,{format:Rn,type:Vn,depthTexture:new qh(g.textureWidth,g.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new ki(u.framebufferWidth,u.framebufferHeight,{format:Rn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Rt.setContext(r),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(Y){for(let J=0;J<Y.removed.length;J++){const ot=Y.removed[J],Et=T.indexOf(ot);Et>=0&&(T[Et]=null,w[Et].disconnect(ot))}for(let J=0;J<Y.added.length;J++){const ot=Y.added[J];let Et=T.indexOf(ot);if(Et===-1){for(let kt=0;kt<w.length;kt++)if(kt>=T.length){T.push(ot),Et=kt;break}else if(T[kt]===null){T[kt]=ot,Et=kt;break}if(Et===-1)break}const vt=w[Et];vt&&vt.connect(ot)}}const H=new C,U=new C;function $(Y,J,ot){H.setFromMatrixPosition(J.matrixWorld),U.setFromMatrixPosition(ot.matrixWorld);const Et=H.distanceTo(U),vt=J.projectionMatrix.elements,kt=ot.projectionMatrix.elements,F=vt[14]/(vt[10]-1),b=vt[14]/(vt[10]+1),Mt=(vt[9]+1)/vt[5],et=(vt[9]-1)/vt[5],rt=(vt[8]-1)/vt[0],Q=(kt[8]+1)/kt[0],Ut=F*rt,yt=F*Q,Ot=Et/(-rt+Q),Ae=Ot*-rt;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(Ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),vt[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ue=F+Ot,I=b+Ot,S=Ut-Ae,k=yt+(Et-Ae),j=Mt*b/I*Ue,it=et*b/I*Ue;Y.projectionMatrix.makePerspective(S,k,j,it,Ue,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,ot=Y.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(ot=p.depthFar)),D.near=x.near=E.near=J,D.far=x.far=E.far=ot,(B!==D.near||V!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,V=D.far),D.layers.mask=Y.layers.mask|6,E.layers.mask=D.layers.mask&3,x.layers.mask=D.layers.mask&5;const Et=Y.parent,vt=D.cameras;nt(D,Et);for(let kt=0;kt<vt.length;kt++)nt(vt[kt],Et);vt.length===2?$(D,E,x):D.projectionMatrix.copy(E.projectionMatrix),Dt(Y,D,Et)};function Dt(Y,J,ot){ot===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ot.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=la*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(g===null&&u===null))return l},this.setFoveation=function(Y){l=Y,g!==null&&(g.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(Y){return d[Y]};let St=null;function Ft(Y,J){if(h=J.getViewerPose(c||a),m=J,h!==null){const ot=h.views;u!==null&&(t.setRenderTargetFramebuffer(_,u.framebuffer),t.setRenderTarget(_));let Et=!1;ot.length!==D.cameras.length&&(D.cameras.length=0,Et=!0);for(let b=0;b<ot.length;b++){const Mt=ot[b];let et=null;if(u!==null)et=u.getViewport(Mt);else{const Q=f.getViewSubImage(g,Mt);et=Q.viewport,b===0&&(t.setRenderTargetTextures(_,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(_))}let rt=P[b];rt===void 0&&(rt=new nn,rt.layers.enable(b),rt.viewport=new ue,P[b]=rt),rt.matrix.fromArray(Mt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Mt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(et.x,et.y,et.width,et.height),b===0&&(D.matrix.copy(rt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Et===!0&&D.cameras.push(rt)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const b=f.getDepthInformation(ot[0]);b&&b.isValid&&b.texture&&p.init(b,r.renderState)}if(vt&&vt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let b=0;b<ot.length;b++){const Mt=ot[b].camera;if(Mt){let et=d[Mt];et||(et=new Xh,d[Mt]=et);const rt=f.getCameraImage(Mt);et.sourceTexture=rt}}}}for(let ot=0;ot<w.length;ot++){const Et=T[ot],vt=w[ot];Et!==null&&vt!==void 0&&vt.update(Et,J,c||a)}St&&St(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Rt=new su;Rt.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}}const Ti=new Pn,v_=new pe;function x_(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,zh(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,M,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),g(p,d),d.isMeshPhysicalMaterial&&u(p,d,_)):d.isMeshMatcapMaterial?(s(p,d),m(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,M,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Qe&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Qe&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=t.get(d),y=M.envMap,_=M.envMapRotation;y&&(p.envMap.value=y,Ti.copy(_),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),p.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(Ti)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=y*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function g(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function u(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qe&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function M_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const _=y.program;n.uniformBlockBinding(M,_)}function c(M,y){let _=r[M.id];_===void 0&&(m(M),_=h(M),r[M.id]=_,M.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(M,w);const T=t.render.frame;s[M.id]!==T&&(g(M),s[M.id]=T)}function h(M){const y=f();M.__bindingPointIndex=y;const _=i.createBuffer(),w=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(M){const y=r[M.id],_=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=_.length;T<R;T++){const L=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,x=L.length;E<x;E++){const P=L[E];if(u(P,T,E,w)===!0){const D=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let G=0;G<B.length;G++){const W=B[G],K=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,D+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,y,_,w){const T=M.value,R=y+"_"+_;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const L=w[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return w[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function m(M){const y=M.uniforms;let _=0;const w=16;for(let R=0,L=y.length;R<L;R++){const E=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,P=E.length;x<P;x++){const D=E[x],B=Array.isArray(D.value)?D.value:[D.value];for(let V=0,G=B.length;V<G;V++){const W=B[V],K=v(W),H=_%w,U=H%K.boundary,$=H+U;_+=U,$!==0&&w-$<K.storage&&(_+=w-$),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=K.storage}}}const T=_%w;return T>0&&(_+=w-T),M.__size=_,M.__cache={},this}function v(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class y_{constructor(t={}){const{canvas:e=vf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),v=new Int32Array(4);let p=null,d=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=Ze;let T=0,R=0,L=null,E=-1,x=null;const P=new ue,D=new ue;let B=null;const V=new It(0);let G=0,W=e.width,K=e.height,H=1,U=null,$=null;const nt=new ue(0,0,W,K),Dt=new ue(0,0,W,K);let St=!1;const Ft=new Cl;let Rt=!1,Y=!1;const J=new pe,ot=new C,Et=new ue,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function F(){return L===null?H:1}let b=n;function Mt(A,O){return e.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",st,!1),b===null){const O="webgl2";if(b=Mt(O,A),b===null)throw Mt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,rt,Q,Ut,yt,Ot,Ae,Ue,I,S,k,j,it,Z,Nt,ht,Ct,Pt,lt,xt,Gt,Lt,gt,$t;function N(){et=new L0(b),et.init(),Lt=new d_(b,et),rt=new w0(b,et,t,Lt),Q=new u_(b,et),rt.reversedDepthBuffer&&g&&Q.buffers.depth.setReversed(!0),Ut=new U0(b),yt=new jg,Ot=new f_(b,et,Q,yt,rt,Lt,Ut),Ae=new T0(_),Ue=new P0(_),I=new kd(b),gt=new S0(b,I),S=new I0(b,I,Ut,gt),k=new F0(b,S,I,Ut),lt=new N0(b,rt,Ot),ht=new b0(yt),j=new Zg(_,Ae,Ue,et,rt,gt,ht),it=new x_(_,yt),Z=new t_,Nt=new a_(et),Pt=new y0(_,Ae,Ue,Q,k,u,l),Ct=new c_(_,k,rt),$t=new M_(b,Ut,rt,Q),xt=new E0(b,et,Ut),Gt=new D0(b,et,Ut),Ut.programs=j.programs,_.capabilities=rt,_.extensions=et,_.properties=yt,_.renderLists=Z,_.shadowMap=Ct,_.state=Q,_.info=Ut}N();const ct=new __(_,b);this.xr=ct,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(W,K,!1))},this.getSize=function(A){return A.set(W,K)},this.setSize=function(A,O,q=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,K=O,e.width=Math.floor(A*H),e.height=Math.floor(O*H),q===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(W*H,K*H).floor()},this.setDrawingBufferSize=function(A,O,q){W=A,K=O,H=q,e.width=Math.floor(A*q),e.height=Math.floor(O*q),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(nt)},this.setViewport=function(A,O,q,X){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,O,q,X),Q.viewport(P.copy(nt).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(Dt)},this.setScissor=function(A,O,q,X){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,O,q,X),Q.scissor(D.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Q.setScissorTest(St=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,q=!0){let X=0;if(A){let z=!1;if(L!==null){const at=L.texture.format;z=at===bl||at===wl||at===El}if(z){const at=L.texture.type,_t=at===Vn||at===zi||at===ts||at===es||at===yl||at===Sl,Tt=Pt.getClearColor(),wt=Pt.getClearAlpha(),Vt=Tt.r,Wt=Tt.g,Bt=Tt.b;_t?(m[0]=Vt,m[1]=Wt,m[2]=Bt,m[3]=wt,b.clearBufferuiv(b.COLOR,0,m)):(v[0]=Vt,v[1]=Wt,v[2]=Bt,v[3]=wt,b.clearBufferiv(b.COLOR,0,v))}else X|=b.COLOR_BUFFER_BIT}O&&(X|=b.DEPTH_BUFFER_BIT),q&&(X|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Pt.dispose(),Z.dispose(),Nt.dispose(),yt.dispose(),Ae.dispose(),Ue.dispose(),k.dispose(),gt.dispose(),$t.dispose(),j.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",In),ct.removeEventListener("sessionend",Xl),xi.stop()};function ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Ut.autoReset,O=Ct.enabled,q=Ct.autoUpdate,X=Ct.needsUpdate,z=Ct.type;N(),Ut.autoReset=A,Ct.enabled=O,Ct.autoUpdate=q,Ct.needsUpdate=X,Ct.type=z}function st(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){const O=A.target;O.removeEventListener("dispose",tt),At(O)}function At(A){Xt(A),yt.remove(A)}function Xt(A){const O=yt.get(A).programs;O!==void 0&&(O.forEach(function(q){j.releaseProgram(q)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,q,X,z,at){O===null&&(O=vt);const _t=z.isMesh&&z.matrixWorld.determinant()<0,Tt=bu(A,O,q,X,z);Q.setMaterial(X,_t);let wt=q.index,Vt=1;if(X.wireframe===!0){if(wt=S.getWireframeAttribute(q),wt===void 0)return;Vt=2}const Wt=q.drawRange,Bt=q.attributes.position;let Qt=Wt.start*Vt,le=(Wt.start+Wt.count)*Vt;at!==null&&(Qt=Math.max(Qt,at.start*Vt),le=Math.min(le,(at.start+at.count)*Vt)),wt!==null?(Qt=Math.max(Qt,0),le=Math.min(le,wt.count)):Bt!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,Bt.count));const Re=le-Qt;if(Re<0||Re===1/0)return;gt.setup(z,X,Tt,q,wt);let ge,fe=xt;if(wt!==null&&(ge=I.get(wt),fe=Gt,fe.setIndex(ge)),z.isMesh)X.wireframe===!0?(Q.setLineWidth(X.wireframeLinewidth*F()),fe.setMode(b.LINES)):fe.setMode(b.TRIANGLES);else if(z.isLine){let zt=X.linewidth;zt===void 0&&(zt=1),Q.setLineWidth(zt*F()),z.isLineSegments?fe.setMode(b.LINES):z.isLineLoop?fe.setMode(b.LINE_LOOP):fe.setMode(b.LINE_STRIP)}else z.isPoints?fe.setMode(b.POINTS):z.isSprite&&fe.setMode(b.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const zt=z._multiDrawStarts,ye=z._multiDrawCounts,ie=z._multiDrawCount,rn=wt?I.get(wt).bytesPerElement:1,Wi=yt.get(X).currentProgram.getUniforms();for(let sn=0;sn<ie;sn++)Wi.setValue(b,"_gl_DrawID",sn),fe.render(zt[sn]/rn,ye[sn])}else if(z.isInstancedMesh)fe.renderInstances(Qt,Re,z.count);else if(q.isInstancedBufferGeometry){const zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ye=Math.min(q.instanceCount,zt);fe.renderInstances(Qt,Re,ye)}else fe.render(Qt,Re)};function me(A,O,q){A.transparent===!0&&A.side===ee&&A.forceSinglePass===!1?(A.side=Qe,A.needsUpdate=!0,gs(A,O,q),A.side=mi,A.needsUpdate=!0,gs(A,O,q),A.side=ee):gs(A,O,q)}this.compile=function(A,O,q=null){q===null&&(q=A),d=Nt.get(q),d.init(O),y.push(d),q.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),A!==q&&A.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const X=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const at=z.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const Tt=at[_t];me(Tt,q,z),X.add(Tt)}else me(at,q,z),X.add(at)}),d=y.pop(),X},this.compileAsync=function(A,O,q=null){const X=this.compile(A,O,q);return new Promise(z=>{function at(){if(X.forEach(function(_t){yt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){z(A);return}setTimeout(at,10)}et.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ae=null;function qn(A){ae&&ae(A)}function In(){xi.stop()}function Xl(){xi.start()}const xi=new su;xi.setAnimationLoop(qn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(A){ae=A,ct.setAnimationLoop(A),A===null?xi.stop():xi.start()},ct.addEventListener("sessionstart",In),ct.addEventListener("sessionend",Xl),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,O,L),d=Nt.get(A,y.length),d.init(O),y.push(d),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ft.setFromProjectionMatrix(J,Bn,O.reversedDepth),Y=this.localClippingEnabled,Rt=ht.init(this.clippingPlanes,Y),p=Z.get(A,M.length),p.init(),M.push(p),ct.enabled===!0&&ct.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&Ta(at,O,-1/0,_.sortObjects)}Ta(A,O,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(U,$),kt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,kt&&Pt.addToRenderList(p,A),this.info.render.frame++,Rt===!0&&ht.beginShadows();const q=d.state.shadowsArray;Ct.render(q,A,O),Rt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,z=p.transmissive;if(d.setupLights(),O.isArrayCamera){const at=O.cameras;if(z.length>0)for(let _t=0,Tt=at.length;_t<Tt;_t++){const wt=at[_t];$l(X,z,A,wt)}kt&&Pt.render(A);for(let _t=0,Tt=at.length;_t<Tt;_t++){const wt=at[_t];Yl(p,A,wt,wt.viewport)}}else z.length>0&&$l(X,z,A,O),kt&&Pt.render(A),Yl(p,A,O);L!==null&&R===0&&(Ot.updateMultisampleRenderTarget(L),Ot.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(_,A,O),gt.resetDefaultState(),E=-1,x=null,y.pop(),y.length>0?(d=y[y.length-1],Rt===!0&&ht.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function Ta(A,O,q,X){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ft.intersectsSprite(A)){X&&Et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const _t=k.update(A),Tt=A.material;Tt.visible&&p.push(A,_t,Tt,q,Et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ft.intersectsObject(A))){const _t=k.update(A),Tt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Et.copy(A.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Et.copy(_t.boundingSphere.center)),Et.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(Tt)){const wt=_t.groups;for(let Vt=0,Wt=wt.length;Vt<Wt;Vt++){const Bt=wt[Vt],Qt=Tt[Bt.materialIndex];Qt&&Qt.visible&&p.push(A,_t,Qt,q,Et.z,Bt)}}else Tt.visible&&p.push(A,_t,Tt,q,Et.z,null)}}const at=A.children;for(let _t=0,Tt=at.length;_t<Tt;_t++)Ta(at[_t],O,q,X)}function Yl(A,O,q,X){const z=A.opaque,at=A.transmissive,_t=A.transparent;d.setupLightsView(q),Rt===!0&&ht.setGlobalState(_.clippingPlanes,q),X&&Q.viewport(P.copy(X)),z.length>0&&ms(z,O,q),at.length>0&&ms(at,O,q),_t.length>0&&ms(_t,O,q),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function $l(A,O,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new ki(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?us:Vn,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const at=d.state.transmissionRenderTarget[X.id],_t=X.viewport||P;at.setSize(_t.z*_.transmissionResolutionScale,_t.w*_.transmissionResolutionScale);const Tt=_.getRenderTarget(),wt=_.getActiveCubeFace(),Vt=_.getActiveMipmapLevel();_.setRenderTarget(at),_.getClearColor(V),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),kt&&Pt.render(q);const Wt=_.toneMapping;_.toneMapping=pi;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),Rt===!0&&ht.setGlobalState(_.clippingPlanes,X),ms(A,q,X),Ot.updateMultisampleRenderTarget(at),Ot.updateRenderTargetMipmap(at),et.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let le=0,Re=O.length;le<Re;le++){const ge=O[le],fe=ge.object,zt=ge.geometry,ye=ge.material,ie=ge.group;if(ye.side===ee&&fe.layers.test(X.layers)){const rn=ye.side;ye.side=Qe,ye.needsUpdate=!0,Kl(fe,q,X,zt,ye,ie),ye.side=rn,ye.needsUpdate=!0,Qt=!0}}Qt===!0&&(Ot.updateMultisampleRenderTarget(at),Ot.updateRenderTargetMipmap(at))}_.setRenderTarget(Tt,wt,Vt),_.setClearColor(V,G),Bt!==void 0&&(X.viewport=Bt),_.toneMapping=Wt}function ms(A,O,q){const X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,at=A.length;z<at;z++){const _t=A[z],Tt=_t.object,wt=_t.geometry,Vt=_t.group;let Wt=_t.material;Wt.allowOverride===!0&&X!==null&&(Wt=X),Tt.layers.test(q.layers)&&Kl(Tt,O,q,wt,Wt,Vt)}}function Kl(A,O,q,X,z,at){A.onBeforeRender(_,O,q,X,z,at),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(_,O,q,X,A,at),z.transparent===!0&&z.side===ee&&z.forceSinglePass===!1?(z.side=Qe,z.needsUpdate=!0,_.renderBufferDirect(q,O,X,z,A,at),z.side=mi,z.needsUpdate=!0,_.renderBufferDirect(q,O,X,z,A,at),z.side=ee):_.renderBufferDirect(q,O,X,z,A,at),A.onAfterRender(_,O,q,X,z,at)}function gs(A,O,q){O.isScene!==!0&&(O=vt);const X=yt.get(A),z=d.state.lights,at=d.state.shadowsArray,_t=z.state.version,Tt=j.getParameters(A,z.state,at,O,q),wt=j.getProgramCacheKey(Tt);let Vt=X.programs;X.environment=A.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(A.isMeshStandardMaterial?Ue:Ae).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",tt),Vt=new Map,X.programs=Vt);let Wt=Vt.get(wt);if(Wt!==void 0){if(X.currentProgram===Wt&&X.lightsStateVersion===_t)return Zl(A,Tt),Wt}else Tt.uniforms=j.getUniforms(A),A.onBeforeCompile(Tt,_),Wt=j.acquireProgram(Tt,wt),Vt.set(wt,Wt),X.uniforms=Tt.uniforms;const Bt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=ht.uniform),Zl(A,Tt),X.needsLights=Au(A),X.lightsStateVersion=_t,X.needsLights&&(Bt.ambientLightColor.value=z.state.ambient,Bt.lightProbe.value=z.state.probe,Bt.directionalLights.value=z.state.directional,Bt.directionalLightShadows.value=z.state.directionalShadow,Bt.spotLights.value=z.state.spot,Bt.spotLightShadows.value=z.state.spotShadow,Bt.rectAreaLights.value=z.state.rectArea,Bt.ltc_1.value=z.state.rectAreaLTC1,Bt.ltc_2.value=z.state.rectAreaLTC2,Bt.pointLights.value=z.state.point,Bt.pointLightShadows.value=z.state.pointShadow,Bt.hemisphereLights.value=z.state.hemi,Bt.directionalShadowMap.value=z.state.directionalShadowMap,Bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Bt.spotShadowMap.value=z.state.spotShadowMap,Bt.spotLightMatrix.value=z.state.spotLightMatrix,Bt.spotLightMap.value=z.state.spotLightMap,Bt.pointShadowMap.value=z.state.pointShadowMap,Bt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Wt,X.uniformsList=null,Wt}function Jl(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=ta.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Zl(A,O){const q=yt.get(A);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function bu(A,O,q,X,z){O.isScene!==!0&&(O=vt),Ot.resetTextureUnits();const at=O.fog,_t=X.isMeshStandardMaterial?O.environment:null,Tt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:yr,wt=(X.isMeshStandardMaterial?Ue:Ae).get(X.envMap||_t),Vt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Wt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Bt=!!q.morphAttributes.position,Qt=!!q.morphAttributes.normal,le=!!q.morphAttributes.color;let Re=pi;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Re=_.toneMapping);const ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=ge!==void 0?ge.length:0,zt=yt.get(X),ye=d.state.lights;if(Rt===!0&&(Y===!0||A!==x)){const Ye=A===x&&X.id===E;ht.setState(X,A,Ye)}let ie=!1;X.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ye.state.version||zt.outputColorSpace!==Tt||z.isBatchedMesh&&zt.batching===!1||!z.isBatchedMesh&&zt.batching===!0||z.isBatchedMesh&&zt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&zt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&zt.instancing===!1||!z.isInstancedMesh&&zt.instancing===!0||z.isSkinnedMesh&&zt.skinning===!1||!z.isSkinnedMesh&&zt.skinning===!0||z.isInstancedMesh&&zt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&zt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&zt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&zt.instancingMorph===!1&&z.morphTexture!==null||zt.envMap!==wt||X.fog===!0&&zt.fog!==at||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ht.numPlanes||zt.numIntersection!==ht.numIntersection)||zt.vertexAlphas!==Vt||zt.vertexTangents!==Wt||zt.morphTargets!==Bt||zt.morphNormals!==Qt||zt.morphColors!==le||zt.toneMapping!==Re||zt.morphTargetsCount!==fe)&&(ie=!0):(ie=!0,zt.__version=X.version);let rn=zt.currentProgram;ie===!0&&(rn=gs(X,O,z));let Wi=!1,sn=!1,Rr=!1;const Se=rn.getUniforms(),dn=zt.uniforms;if(Q.useProgram(rn.program)&&(Wi=!0,sn=!0,Rr=!0),X.id!==E&&(E=X.id,sn=!0),Wi||x!==A){Q.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Se.setValue(b,"projectionMatrix",A.projectionMatrix),Se.setValue(b,"viewMatrix",A.matrixWorldInverse);const tn=Se.map.cameraPosition;tn!==void 0&&tn.setValue(b,ot.setFromMatrixPosition(A.matrixWorld)),rt.logarithmicDepthBuffer&&Se.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Se.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,sn=!0,Rr=!0)}if(z.isSkinnedMesh){Se.setOptional(b,z,"bindMatrix"),Se.setOptional(b,z,"bindMatrixInverse");const Ye=z.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Se.setValue(b,"boneTexture",Ye.boneTexture,Ot))}z.isBatchedMesh&&(Se.setOptional(b,z,"batchingTexture"),Se.setValue(b,"batchingTexture",z._matricesTexture,Ot),Se.setOptional(b,z,"batchingIdTexture"),Se.setValue(b,"batchingIdTexture",z._indirectTexture,Ot),Se.setOptional(b,z,"batchingColorTexture"),z._colorsTexture!==null&&Se.setValue(b,"batchingColorTexture",z._colorsTexture,Ot));const pn=q.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&lt.update(z,q,rn),(sn||zt.receiveShadow!==z.receiveShadow)&&(zt.receiveShadow=z.receiveShadow,Se.setValue(b,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(dn.envMap.value=wt,dn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(dn.envMapIntensity.value=O.environmentIntensity),sn&&(Se.setValue(b,"toneMappingExposure",_.toneMappingExposure),zt.needsLights&&Tu(dn,Rr),at&&X.fog===!0&&it.refreshFogUniforms(dn,at),it.refreshMaterialUniforms(dn,X,H,K,d.state.transmissionRenderTarget[A.id]),ta.upload(b,Jl(zt),dn,Ot)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ta.upload(b,Jl(zt),dn,Ot),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Se.setValue(b,"center",z.center),Se.setValue(b,"modelViewMatrix",z.modelViewMatrix),Se.setValue(b,"normalMatrix",z.normalMatrix),Se.setValue(b,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ye=X.uniformsGroups;for(let tn=0,Aa=Ye.length;tn<Aa;tn++){const Mi=Ye[tn];$t.update(Mi,rn),$t.bind(Mi,rn)}}return rn}function Tu(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Au(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,O,q){const X=yt.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),yt.get(A.texture).__webglTexture=O,yt.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){const q=yt.get(A);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const Ru=b.createFramebuffer();this.setRenderTarget=function(A,O=0,q=0){L=A,T=O,R=q;let X=!0,z=null,at=!1,_t=!1;if(A){const wt=yt.get(A);if(wt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(b.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)Ot.setupRenderTarget(A);else if(wt.__hasExternalTextures)Ot.rebindTextures(A,yt.get(A.texture).__webglTexture,yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Bt=A.depthTexture;if(wt.__boundDepthTexture!==Bt){if(Bt!==null&&yt.has(Bt)&&(A.width!==Bt.image.width||A.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(A)}}const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(_t=!0);const Wt=yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[O])?z=Wt[O][q]:z=Wt[O],at=!0):A.samples>0&&Ot.useMultisampledRTT(A)===!1?z=yt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?z=Wt[q]:z=Wt,P.copy(A.viewport),D.copy(A.scissor),B=A.scissorTest}else P.copy(nt).multiplyScalar(H).floor(),D.copy(Dt).multiplyScalar(H).floor(),B=St;if(q!==0&&(z=Ru),Q.bindFramebuffer(b.FRAMEBUFFER,z)&&X&&Q.drawBuffers(A,z),Q.viewport(P),Q.scissor(D),Q.setScissorTest(B),at){const wt=yt.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,q)}else if(_t){const wt=O;for(let Vt=0;Vt<A.textures.length;Vt++){const Wt=yt.get(A.textures[Vt]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,q,wt)}}else if(A!==null&&q!==0){const wt=yt.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,wt.__webglTexture,q)}E=-1},this.readRenderTargetPixels=function(A,O,q,X,z,at,_t,Tt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt){Q.bindFramebuffer(b.FRAMEBUFFER,wt);try{const Vt=A.textures[Tt],Wt=Vt.format,Bt=Vt.type;if(!rt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-X&&q>=0&&q<=A.height-z&&(A.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Tt),b.readPixels(O,q,X,z,Lt.convert(Wt),Lt.convert(Bt),at))}finally{const Vt=L!==null?yt.get(L).__webglFramebuffer:null;Q.bindFramebuffer(b.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,O,q,X,z,at,_t,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt)if(O>=0&&O<=A.width-X&&q>=0&&q<=A.height-z){Q.bindFramebuffer(b.FRAMEBUFFER,wt);const Vt=A.textures[Tt],Wt=Vt.format,Bt=Vt.type;if(!rt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Qt),b.bufferData(b.PIXEL_PACK_BUFFER,at.byteLength,b.STREAM_READ),A.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Tt),b.readPixels(O,q,X,z,Lt.convert(Wt),Lt.convert(Bt),0);const le=L!==null?yt.get(L).__webglFramebuffer:null;Q.bindFramebuffer(b.FRAMEBUFFER,le);const Re=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await xf(b,Re,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Qt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,at),b.deleteBuffer(Qt),b.deleteSync(Re),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,q=0){const X=Math.pow(2,-q),z=Math.floor(A.image.width*X),at=Math.floor(A.image.height*X),_t=O!==null?O.x:0,Tt=O!==null?O.y:0;Ot.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,q,0,0,_t,Tt,z,at),Q.unbindTexture()};const Cu=b.createFramebuffer(),Pu=b.createFramebuffer();this.copyTextureToTexture=function(A,O,q=null,X=null,z=0,at=null){at===null&&(z!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=z,z=0):at=0);let _t,Tt,wt,Vt,Wt,Bt,Qt,le,Re;const ge=A.isCompressedTexture?A.mipmaps[at]:A.image;if(q!==null)_t=q.max.x-q.min.x,Tt=q.max.y-q.min.y,wt=q.isBox3?q.max.z-q.min.z:1,Vt=q.min.x,Wt=q.min.y,Bt=q.isBox3?q.min.z:0;else{const pn=Math.pow(2,-z);_t=Math.floor(ge.width*pn),Tt=Math.floor(ge.height*pn),A.isDataArrayTexture?wt=ge.depth:A.isData3DTexture?wt=Math.floor(ge.depth*pn):wt=1,Vt=0,Wt=0,Bt=0}X!==null?(Qt=X.x,le=X.y,Re=X.z):(Qt=0,le=0,Re=0);const fe=Lt.convert(O.format),zt=Lt.convert(O.type);let ye;O.isData3DTexture?(Ot.setTexture3D(O,0),ye=b.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ot.setTexture2DArray(O,0),ye=b.TEXTURE_2D_ARRAY):(Ot.setTexture2D(O,0),ye=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const ie=b.getParameter(b.UNPACK_ROW_LENGTH),rn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Wi=b.getParameter(b.UNPACK_SKIP_PIXELS),sn=b.getParameter(b.UNPACK_SKIP_ROWS),Rr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ge.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ge.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Vt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Wt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Bt);const Se=A.isDataArrayTexture||A.isData3DTexture,dn=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){const pn=yt.get(A),Ye=yt.get(O),tn=yt.get(pn.__renderTarget),Aa=yt.get(Ye.__renderTarget);Q.bindFramebuffer(b.READ_FRAMEBUFFER,tn.__webglFramebuffer),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let Mi=0;Mi<wt;Mi++)Se&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,yt.get(A).__webglTexture,z,Bt+Mi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,yt.get(O).__webglTexture,at,Re+Mi)),b.blitFramebuffer(Vt,Wt,_t,Tt,Qt,le,_t,Tt,b.DEPTH_BUFFER_BIT,b.NEAREST);Q.bindFramebuffer(b.READ_FRAMEBUFFER,null),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||yt.has(A)){const pn=yt.get(A),Ye=yt.get(O);Q.bindFramebuffer(b.READ_FRAMEBUFFER,Cu),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,Pu);for(let tn=0;tn<wt;tn++)Se?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,pn.__webglTexture,z,Bt+tn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,pn.__webglTexture,z),dn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ye.__webglTexture,at,Re+tn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ye.__webglTexture,at),z!==0?b.blitFramebuffer(Vt,Wt,_t,Tt,Qt,le,_t,Tt,b.COLOR_BUFFER_BIT,b.NEAREST):dn?b.copyTexSubImage3D(ye,at,Qt,le,Re+tn,Vt,Wt,_t,Tt):b.copyTexSubImage2D(ye,at,Qt,le,Vt,Wt,_t,Tt);Q.bindFramebuffer(b.READ_FRAMEBUFFER,null),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?b.texSubImage3D(ye,at,Qt,le,Re,_t,Tt,wt,fe,zt,ge.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(ye,at,Qt,le,Re,_t,Tt,wt,fe,ge.data):b.texSubImage3D(ye,at,Qt,le,Re,_t,Tt,wt,fe,zt,ge):A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,at,Qt,le,_t,Tt,fe,zt,ge.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,at,Qt,le,ge.width,ge.height,fe,ge.data):b.texSubImage2D(b.TEXTURE_2D,at,Qt,le,_t,Tt,fe,zt,ge);b.pixelStorei(b.UNPACK_ROW_LENGTH,ie),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Wi),b.pixelStorei(b.UNPACK_SKIP_ROWS,sn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Rr),at===0&&O.generateMipmaps&&b.generateMipmap(ye),Q.unbindTexture()},this.initRenderTarget=function(A){yt.get(A).__webglFramebuffer===void 0&&Ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ot.setTextureCube(A,0):A.isData3DTexture?Ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ot.setTexture2DArray(A,0):Ot.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,Q.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const De=(i,t=0,e=1)=>i<t?t:i>e?e:i,hr=i=>{const t=De(i);return t*t*t*(t*(t*6-15)+10)},S_=i=>typeof i=="number"?Math.abs(i):Math.hypot(i[0],i[1],i[2]),E_=[0,0,0,1];function hu(i,t){return{time:i,pose:{pos:t.pos,quat:t.quat??E_},quantities:t.quantities??{},flags:t.flags??{}}}const Pe=(i,t)=>({value:i,unit:t});function w_(i,t){return e=>t(e<0?0:e>i?i:e)}function zl(i){return typeof i=="number"?Math.abs(i):S_(i)}function b_(i,t){const e=t.quantities[i.id]?.value;return e===void 0?!1:i.threshold===void 0?!0:zl(e)>=i.threshold}function uu(i,t){const e=i.signed&&typeof t=="number"?t:zl(t);return{number:i.format?i.format(e):e.toFixed(1),unit:i.unit}}function T_(i,t,e="实时数据"){const n=i.filter(r=>r.views.aria).map(r=>{const s=t.quantities[r.id]?.value;if(s===void 0)return null;const{number:a,unit:o}=uu(r,s);return`${r.label} ${a} ${o}`}).filter(r=>r!==null);return n.length?`${e}。${n.join("。")}。`:e}function A_(i,t){return i.filter(e=>e.views.panel).map(e=>{const n=t.quantities[e.id]?.value,r=n===void 0?0:zl(n),{number:s,unit:a}=n===void 0?{number:"—",unit:e.unit}:uu(e,n);return{spec:e,active:b_(e,t),number:s,unit:a,magnitude:r}})}function R_(i){const{root:t,panel:e,controls:n,scrubber:r}=i,s=i.narrowAt??801,a=i.gutter??12,o=i.gap??16,l=t.getBoundingClientRect(),c=l.width<s,h=e?.getBoundingClientRect(),f=n?.getBoundingClientRect(),g=r?.getBoundingClientRect();return{left:a,right:c||!h?l.width-a:h.left-l.left-o,top:f?f.bottom-l.top+a:a,bottom:c||!h?h?h.top-l.top-a:l.height-a:g?g.top-l.top-o:l.height-a}}function C_(i,t,e,n){i.setViewOffset(t,e,t/2-(n.left+n.right)/2,e/2-(n.top+n.bottom)/2,t,e),i.updateProjectionMatrix()}function P_(i,t){return Math.abs(i.left-t.left)<.5&&Math.abs(i.right-t.right)<.5&&Math.abs(i.top-t.top)<.5&&Math.abs(i.bottom-t.bottom)<.5}class L_{constructor(t){this.opts=t}opts;raf=0;last=0;running=!1;paused=!1;dirty=!0;start(){this.running||(this.running=!0,this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))}stop(){this.running=!1,this.raf&&cancelAnimationFrame(this.raf),this.raf=0}requestRender(){this.dirty=!0}pause(){this.paused=!0}resume(){this.paused=!1,this.last=performance.now(),this.dirty=!0}get isPaused(){return this.paused}renderNow(t=1/60){this.opts.render(t,performance.now()),this.dirty=!1}tick=t=>{if(!this.running)return;this.raf=requestAnimationFrame(this.tick);const e=Math.max(0,(t-this.last)/1e3);this.last=t,!this.paused&&(this.opts.advance?.(e),(this.dirty||this.opts.shouldRender())&&(this.opts.render(e,t),this.dirty=!1))}}function I_(i){const t=i.api,e=typeof location<"u"&&new URLSearchParams(location.search).get("capture")==="1",n=t;e&&(n.captureFrame=(a,o=1/60)=>{t.setTime(a,!1),t.renderFrame(o)});const r=()=>JSON.stringify({coordinate_system:i.coordinateSystem??"meters; Y up; right-handed",time:t.app.time,playing:t.app.playing,rate:t.app.rate,camera:t.app.camera,duration:t.app.duration,viewport:t.app.viewport,state:t.getState(),...i.extra?.()??{}}),s=globalThis;return s.__EXPLAINER__=n,s.render_game_to_text=r,n}function D_(){return typeof location>"u"?!1:new URLSearchParams(location.search).get("capture")==="1"}class U_{rows=[];host;constructor(t){this.host=t.host;const e=t.showUnit??!0,n=document.createElement("div");if(n.className="eq-panel-head",n.innerHTML=`<h2>${t.title??"量"}</h2>`,t.markerToggle){const s=document.createElement("button");s.type="button",s.className="eq-toggle",s.setAttribute("aria-pressed","true"),s.textContent="箭头";let a=!0;s.addEventListener("click",()=>{a=!a,s.setAttribute("aria-pressed",String(a)),t.onToggleMarkers?.(a)}),n.appendChild(s)}this.host.appendChild(n);const r=document.createElement("div");r.className="eq-panel-list",this.host.appendChild(r);for(const s of t.registry){if(!s.views.panel)continue;const a=document.createElement("div");a.className="eq-row",a.style.setProperty("--row-color",s.color);const o=document.createElement("span");o.className="eq-swatch";const l=document.createElement("span");l.className="eq-name",l.textContent=s.label;const c=document.createElement("span");c.className="eq-number",a.append(o,l,c);let h=null;if(t.bars){const f=document.createElement("span");f.className="eq-bar",f.setAttribute("aria-hidden","true"),h=document.createElement("i"),f.appendChild(h),a.appendChild(f)}if(r.appendChild(a),e){const f=document.createElement("small");f.className="eq-unit",f.textContent=s.unit,c.appendChild(f)}this.rows.push({spec:s,root:a,number:c,fill:h,peak:1e-9})}}update(t){const e=A_(this.rows.map(n=>n.spec),t);for(let n=0;n<this.rows.length;n++){const r=this.rows[n],s=e[n];r.root.classList.toggle("is-inactive",!s.active);const a=r.number.querySelector(".eq-unit"),o=r.number.firstChild,l=s.number;if(o&&o.nodeType===Node.TEXT_NODE?o.textContent!==l&&(o.textContent=l):r.number.insertBefore(document.createTextNode(l),r.number.firstChild),a&&a.textContent!==s.unit&&(a.textContent=s.unit),r.fill&&Number.isFinite(s.magnitude)){s.magnitude>r.peak&&(r.peak=s.magnitude);const c=r.spec.barMax??r.peak,h=c>0?Math.max(0,Math.min(100,s.magnitude/c*100)):0;r.fill.style.width=h.toFixed(1)+"%"}}}}function N_(i){const t=Math.floor(i),e=Math.floor((i-t)*100+1e-5);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}.${String(e).padStart(2,"0")}`}function F_(i){const{host:t,duration:e,chapters:n}=i,r=i.formatTime??N_,s=i.rates??[.25,.5,1,2];let a=!1,o=0;const l=document.createElement("section");l.className="eq-timeline",l.setAttribute("aria-label","时间轴");const c=document.createElement("div");c.className="eq-transport";const h=document.createElement("button");h.type="button",h.className="eq-play",h.setAttribute("aria-label","播放 / 暂停（空格）");const f=document.createElement("button");f.type="button",f.className="eq-icon-btn",f.setAttribute("aria-label","重播（R）"),f.textContent="↺";const g=document.createElement("div");g.className="eq-timecode";const u=document.createElement("select");u.className="eq-rate",u.setAttribute("aria-label","播放速度");for(const T of s){const R=document.createElement("option");R.value=String(T),R.textContent=T===.25?"¼×":T===.5?"½×":`${T}×`,T===1&&(R.selected=!0),u.appendChild(R)}c.append(h,f,g,u);const m=document.createElement("div");m.className="eq-track";const v=document.createElement("div");v.className="eq-progress";const p=document.createElement("input");p.type="range",p.min="0",p.max=String(e),p.step="0.005",p.value="0",p.className="eq-range",p.setAttribute("aria-label","演示时间（秒）"),m.append(v,p);const d=document.createElement("nav");d.className="eq-chapters",d.setAttribute("aria-label","跳转到某一节");const M=[];for(const T of n){const R=document.createElement("button");R.type="button",R.textContent=T.label,R.style.left=`${T.at/e*100}%`,R.dataset.at=String(T.at),R.setAttribute("aria-label",`${T.label}，跳到 ${T.at} 秒`),R.addEventListener("click",()=>{y(!1),_(T.at)}),d.appendChild(R),M.push(R)}l.append(c,m,d),t.appendChild(l);function y(T){a!==T&&(a=T,i.onPlayStateChange(a))}function _(T){o=Math.max(0,Math.min(e,T)),i.onSeek(o),w()}h.addEventListener("click",()=>{o>=e&&_(0),y(!a)}),f.addEventListener("click",()=>{y(!1),_(0)}),p.addEventListener("pointerdown",()=>y(!1)),p.addEventListener("input",()=>_(Number(p.value))),u.addEventListener("change",()=>{i.onRateChange?.(Number(u.value))});function w(){g.innerHTML=`<span>${r(o)}</span><span class="eq-divider">/</span><span>${r(e)}</span>`,p.value=String(o),v.style.width=`${o/e*100}%`,h.textContent=a?"❚❚":"▶",h.setAttribute("aria-pressed",String(a)),p.setAttribute("aria-valuetext",`${o.toFixed(2)} 秒`)}return w(),{update(T,R,L){o=T,a!==R&&(a=R),w();for(const E of M)E.setAttribute("aria-current",String(Number(E.dataset.at)===n[L]?.at))},setPlaying:y,get playing(){return a},get time(){return o}}}function O_(i){const t=e=>{if(i.shouldIgnore?.())return;const n=e.target;if(!(n&&(n.tagName==="INPUT"||n.tagName==="SELECT"))&&!(e.metaKey||e.ctrlKey||e.altKey))if(e.code==="Space")e.preventDefault(),i.getTime()>=i.duration&&i.seek(0),i.setPlaying(!i.isPlaying());else if(e.code==="ArrowLeft"||e.code==="ArrowRight"){e.preventDefault(),i.setPlaying(!1);const r=e.shiftKey?1:.1,s=e.code==="ArrowLeft"?-1:1;i.seek(Math.max(0,Math.min(i.duration,i.getTime()+s*r)))}else e.code==="KeyR"&&(i.setPlaying(!1),i.seek(0))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)}function B_(i,t){return i.find(e=>e.when(t))}function z_(i,t){return{title:typeof i.title=="function"?i.title(t):i.title,body:typeof i.body=="function"?i.body(t):i.body}}class k_{host;narrative;concepts;title;body;equation;points;takeaway;detailsBtn;dialog;onDetails;currentConcept;lastRuleId="";constructor(t){this.host=t.host,this.narrative=t.narrative,this.concepts=new Map(t.concepts.map(r=>[r.id,r])),this.onDetails=t.onDetails;const e=document.createElement("section");e.className="eq-narrative";const n=document.createElement("div");if(n.className="eq-narrative-head",this.title=document.createElement("h3"),this.detailsBtn=document.createElement("button"),this.detailsBtn.type="button",this.detailsBtn.className="eq-details",this.detailsBtn.textContent="详情",n.append(this.title,this.detailsBtn),this.body=document.createElement("div"),this.body.className="eq-narrative-body",this.equation=document.createElement("div"),this.equation.className="eq-narrative-equation",this.points=document.createElement("details"),this.points.className="eq-points",this.points.innerHTML='<summary>教学要点</summary><ul class="eq-points-list"></ul>',this.points.hidden=!0,this.takeaway=document.createElement("p"),this.takeaway.className="eq-takeaway",this.takeaway.hidden=!0,e.append(n,this.body,this.equation,this.points,this.takeaway),this.host.appendChild(e),this.dialog=this.onDetails?null:H_(),this.detailsBtn.addEventListener("click",()=>this.showDetails()),t.disclaimer){const r=document.createElement("p");r.className="eq-disclaimer",r.textContent=t.disclaimer,this.host.appendChild(r)}}update(t){const e=B_(this.narrative,t);if(e&&e.id!==this.lastRuleId){this.lastRuleId=e.id;const n=z_(e,t);this.title.textContent=n.title,this.body.innerHTML=n.body,this.equation.textContent=e.equation??"",this.equation.hidden=!e.equation,this.currentConcept=e.concept?this.concepts.get(e.concept):void 0,this.detailsBtn.hidden=!this.currentConcept,this.renderPoints(e.points,e.takeaway),this.host.scrollTop=0}}get currentConceptId(){return this.currentConcept?.id}renderPoints(t,e){const n=this.points.querySelector(".eq-points-list");if(n.innerHTML="",t?.length){for(const r of t){const s=document.createElement("li");r.tone&&(s.className=`tone-${r.tone}`);const a=document.createElement("strong");a.textContent=r.title;const o=document.createElement("span");if(o.innerHTML=r.text,s.append(a,o),r.cite){const l=document.createElement("em");l.className="eq-points-cite",l.textContent=r.cite,s.appendChild(l)}n.appendChild(s)}this.points.hidden=!1}else this.points.hidden=!0;e?(this.takeaway.innerHTML=e,this.takeaway.hidden=!1):this.takeaway.hidden=!0}showDetails(){const t=this.currentConcept;if(t){if(this.onDetails){this.onDetails(t);return}V_(this.dialog,t),this.dialog.showModal()}}}function H_(){const i=document.createElement("dialog");return i.className="eq-dialog",i.innerHTML=`
    <form method="dialog" class="eq-dialog-head">
      <h2 class="eq-dialog-title"></h2>
      <button type="submit" class="eq-icon-btn" aria-label="关闭">✕</button>
    </form>
    <div class="eq-dialog-body">
      <div class="eq-dialog-equation"></div>
      <p class="eq-dialog-principle"></p>
      <h4>常见误解</h4>
      <ul class="eq-dialog-pitfalls"></ul>
      <p class="eq-dialog-source"></p>
    </div>`,document.body.appendChild(i),i.addEventListener("click",t=>{t.target===i&&i.close()}),i}function V_(i,t){i.querySelector(".eq-dialog-title").textContent=t.name,i.querySelector(".eq-dialog-equation").textContent=t.equation,i.querySelector(".eq-dialog-principle").textContent=t.principle;const e=i.querySelector(".eq-dialog-pitfalls");e.innerHTML="";for(const r of t.pitfalls){const s=document.createElement("li");s.textContent=r,e.appendChild(s)}const n=i.querySelector(".eq-dialog-source");n.innerHTML=`出处：<a href="${t.source.url}" target="_blank" rel="noopener noreferrer">${t.source.label}</a>`+(t.illustrative?'<br><span class="eq-illustrative">数值为示意值，非实测数据。</span>':"")}const Yt=9.81,ve=2e3,en=.59,vi=850,un=36,se={x:-3,z:5,radius:10,endAngle:170*Math.PI/180,deckAngle:185*Math.PI/180},Ve={mass:350,com:.42,rollInertia:180,suction:2*ve*Yt,drive:4e4,friction:.9},kl=se.radius-en,fl=Math.sqrt((se.radius-.398)**2-1.46**2)-(en-.398),go=kl-fl,pr={x:se.x+fl*Math.sin(se.endAngle),y:se.radius-fl*Math.cos(se.endAngle)},Hl=3.2,wn=2*(pr.y-en)/(Yt*Hl),G_=Hl-wn,Ys=Yt*wn/G_,fa=pr.x-17.7,Ui=fa-3.52,_r=Ui+(Math.PI*5/4.4+8)*(2.6/2),Vl=.7,W_=1.2,qr=Yt*W_,Qn=qr/Vl,rh=.5*Qn*Vl**2,q_=_r+47.76,fu=[12,16,20,25,31].map(i=>_r+i),dl=12+se.radius*se.endAngle,du=dl+fa-Ui,pu=du+5*Math.PI,mu=pu+_r-Ui,X_=mu+8*(30.8-27),sh=[0,2.5,4,10,11,16,17.2,19.2,24.4,27,27.7,28.9,30.1,30.8],Oi=24.4,Y_=Math.PI,ti=[0,0,0,1];function xn(i,t){const e=t/2,n=Math.sin(e);return[i[0]*n,i[1]*n,i[2]*n,Math.cos(e)]}function $_(i,t){const[e,n,r,s]=i,[a,o,l,c]=t;return[e*c+s*a+n*l-r*o,n*c+s*o+r*a-e*l,r*c+s*l+e*o-n*a,s*c-e*a-n*o-r*l]}function gu(...i){return i.reduce((t,e)=>$_(t,e),ti)}function Jr(i,t){const[e,n,r,s]=i,a=2*(n*t[2]-r*t[1]),o=2*(r*t[0]-e*t[2]),l=2*(e*t[1]-n*t[0]);return[t[0]+s*a+(n*l-r*o),t[1]+s*o+(r*a-e*l),t[2]+s*l+(e*o-n*a)]}const Ai={x:[1,0,0],y:[0,1,0],z:[0,0,1]},Ni=(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],vn=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],ah=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],K_=i=>Math.hypot(i[0],i[1],i[2]);function da(i,t,e,n,r=0,s=0){const a=De(i/t),o=a*a,l=o*a;return{p:(2*l-3*o+1)*e+(l-2*o+a)*t*r+(-2*l+3*o)*n+(l-o)*t*s,v:((6*o-6*a)*e+(3*o-4*a+1)*t*r+(-6*o+6*a)*n+(3*o-2*a)*t*s)/t,a:((12*a-6)*e+(6*a-4)*t*r+(-12*a+6)*n+(6*a-2)*t*s)/(t*t)}}const oh=i=>{const t=De(i);return t**6-3*t**5+2.5*t**4};function J_(i){return i<10?da(i-4,6,0,Math.PI/2,4.5/kl,0):i<11?{p:Math.PI/2,v:0,a:0}:i<15?da(i-11,4,Math.PI/2,se.endAngle):{p:se.endAngle,v:0,a:0}}function Z_(i){let t=3*oh((i-2.5)/1.5);t+=2*De(i-4,0,12),t+=.2*De(i-19.2,0,5.2),t+=.4*De(i-24.4,0,2.6);const e=De((i-30.8)/4);return t+=.8*(e-oh(e)),120*t}function j_(i){let t=0;for(let e=sh.length-1;e>=0;e--)if(i>=sh[e]){t=e;break}return t}let ea=Q_();function Q_(){return{wheelDistance:0,fanPhase:0,fan:0,attitude:0,contact:!0,contactKind:1,lift:0,rear:0,front:0,thrust:[0,0,0],normal:[0,1,0],tangent:[1,0,0],trial:"ramp",stopped:null,rollTurns:0,pitch:0,roll:0,tireN:0,angularVelocity:0,velocity:[0,0,0],thrustV:0,thrustH:0,airUse:0,acc:[0,0,0],rollAccel:0}}function Ar(){return ea}function tv(i){const t=De(i,0,un);let e=[0,en,se.z],n=[0,0,0],r=[0,0,0],s=ti,a=[0,1,0],o=[1,0,0],l=[0,0,0],c=0,h=!0,f=0,g=0,u=ve*Yt,m=0,v=0,p=0,d=0,M=0,y=0,_=0,w=0,T=0;if(t<4){const x=da(t,4,-15,se.x,0,4.5);e=[x.p,en,se.z],n=[x.v,0,0],r=[x.a,0,0],c=2*hr((t-2.5)/1.5),m=ve*x.a,u=ve*Yt*(1+c),M=x.p+15}else if(t<16){const x=J_(t);g=x.p;const P=De(x.p/.18),D=30*P**2*(1-P)**2,B=60*P*(1-P)*(1-2*P),V=kl-go*hr(P),G=go*D*x.v/.18,W=go*(B/.18**2*x.v*x.v+D/.18*x.a);e=[se.x+V*Math.sin(x.p),se.radius-V*Math.cos(x.p),se.z],o=[Math.cos(x.p),Math.sin(x.p),0],a=[-Math.sin(x.p),Math.cos(x.p),0],n=Ni(vn(o,V*x.v),vn(a,G)),r=Ni(vn(o,V*x.a-2*G*x.v),vn(a,V*x.v*x.v+W)),s=xn(Ai.z,x.p),c=2,u=ve*(ah(r,a)+Yt*Math.cos(x.p)+c*Yt),m=ve*(ah(r,o)+Yt*Math.sin(x.p)),y=x.v,M=12+se.radius*x.p}else if(t<19.2){const x=t-16;h=!1,u=0;let P,D,B;x<.5?(P=pr.x-6*x*x,D=-12*x,B=-12,v=.65):(P=pr.x-1.5-6*(x-.5),D=-6,B=0);let V,G,W;if(x<wn)V=pr.y-.5*Yt*x*x,G=-Yt*x,W=-Yt;else{const U=x-wn;V=pr.y-.5*Yt*wn**2-Yt*wn*U+.5*Ys*U*U,G=-Yt*wn+Ys*U,W=Ys,p=(Ys+Yt)/Yt/3}e=[P,V,se.z],n=[D,G,0],r=[B,W,0];const K=De(x/wn),H=hr(K);f=Math.PI*(1-H),s=gu(xn(Ai.y,Math.PI),xn(Ai.x,f),xn(Ai.z,(se.endAngle-Math.PI)*(1-H))),g=(se.endAngle-Math.PI)*(1-H),y=-Math.PI/wn*30*K**2*(1-K)**2,_=-Math.PI/(wn*wn)*60*K*(1-K)*(1-2*K),T=De(Math.abs(_)/13),l=vn(Ni(r,[0,Yt,0]),ve),M=dl,w=.18*De(x/Hl)}else if(t<20){const x=t-19.2,P=da(x,.8,fa,Ui,-6,-Math.PI*5/4.4);e=[P.p,en,se.z],n=[P.v,0,0],r=[P.a,0,0],s=xn(Ai.y,Math.PI),g=0,m=-ve*P.a,c=.2,M=dl+fa-P.p,w=.18}else if(t<24.4){const x=(t-20)/4.4,P=Math.PI*x,D=Math.PI/4.4;e=[Ui-5*Math.sin(P),en,5*Math.cos(P)],n=[-5*D*Math.cos(P),0,-5*D*Math.sin(P)],r=[5*D*D*Math.sin(P),0,-5*D*D*Math.cos(P)],s=xn(Ai.y,Math.PI-P),g=0,c=.2,M=du+5*P,w=.18}else if(t<27){const x=t-24.4,P=Math.PI*5/4.4,D=(8-P)/2.6;e=[Ui+P*x+.5*D*x*x,en,-5],n=[P+D*x,0,0],r=[D,0,0],s=ti,g=0,v=.25*hr(x/.25),l=[ve*D*.65,0,0],m=ve*D*.35,c=.4,M=pu+e[0]-Ui,w=.18+.04*x/2.6}else if(t<30.8){const x=t-27;if(e=[e[0],e[1],-5],h=!1,u=0,t<27.7)e=[_r+8*x+4*x*x,en+.5*Qn*x*x,-5],n=[8+8*x,Qn*x,0],r=[8,Qn,0],p=(Qn+Yt)/Yt/3,v=.45;else if(t<30.1){const P=x-Vl;e=[_r+7.56+13.6*P,en+rh+qr*P-.5*Yt*P*P,-5],n=[13.6,qr-Yt*P,0],r=[0,-Yt,0];const D=De((x-.8)/2.2);f=2*Math.PI*hr(D),y=2*Math.PI/2.2*30*D**2*(1-D)**2,_=2*Math.PI/(2.2*2.2)*60*D*(1-D)*(1-2*D),T=De(Math.abs(_)/8)}else{const P=x-3.1;e=[_r+40.2+13.6*P-4*P*P,en+rh-qr*P+.5*Qn*P*P,-5],n=[13.6-8*P,-qr+Qn*P,0],r=[-8,Qn,0],p=(Qn+Yt)/Yt/3,v=0,f=2*Math.PI}s=xn(Ai.x,f),g=0,l=vn(Ni(r,[0,Yt,0]),ve),M=mu+x*8,w=.22+.36*x/3.8}else{const x=De(t-30.8,0,4);e=[q_+8*x-x*x,en,-5],n=[8-2*x,0,0],r=[t<34.8?-2:0,0,0],s=ti,g=0,m=ve*r[0],c=.2*(1-hr(x/4)),M=X_+8*x-x*x,w=.58}h&&!(t>=4&&t<16)&&(u=ve*Yt*(1+c)),ea={wheelDistance:M,fanPhase:Z_(t),fan:c,attitude:T,contact:h,contactKind:t>=4&&t<16?2:h?1:0,lift:p,rear:v,front:d,thrust:l,normal:a,tangent:o,trial:t<Oi?"ramp":"flight",stopped:null,pitch:g,roll:f,tireN:m,angularVelocity:y,velocity:n,thrustV:l[1],thrustH:Math.hypot(l[0],l[2]),airUse:w,acc:r,rollAccel:_,rollTurns:t>=30.1?1:t>=Oi?f/(2*Math.PI):t>=19.2?-.5:t>=16?(f-Math.PI)/(2*Math.PI):0};const R=K_(n),L=vi*_,E=Math.max(0,e[1]-en);return hu(t,{pos:e,quat:s,quantities:{gravity:Pe([0,-ve*Yt/1e3,0],"kN"),suction:Pe(vn(a,-c*ve*Yt/1e3),"kN"),contact:Pe(vn(a,u/1e3),"kN"),tire:Pe(ev(e,n,r,a,u,c,l,h),"kN"),thrust:Pe(vn(l,1/1e3),"kN"),rollMoment:Pe(L/1e3,"kN·m"),altitude:Pe(E,"m"),speed:Pe(R,"m/s"),verticalSpeed:Pe(n[1],"m/s"),rollTurns:Pe(ea.rollTurns,"圈"),thrustWeight:Pe(Math.max(0,l[1])/(ve*Yt),"×")},flags:{contact:h?1:0,contactKind:ea.contactKind,chapter:j_(t),trial:t<Oi?0:1,fan:c,airUse:w}})}function ev(i,t,e,n,r,s,a,o){if(!o)return[0,0,0];const l=[0,-ve*Yt,0],c=vn(n,-s*ve*Yt),h=vn(n,r),f=Ni(Ni(l,c),Ni(h,a)),g=[ve*e[0]-f[0],ve*e[1]-f[1],ve*e[2]-f[2]];return vn(g,1/1e3)}const Hn=w_(un,tv);function nv(i,t){const e=i*Yt,n=Ve.suction,r=53250;return{weight:e,wallRatio:Ve.friction*n/e,ceilingRatio:n/e,liftRatio:r/e,wall:Ve.friction*n>=e,ceiling:n>e,lift:r>e,turns:vi/t}}new C;new C;new C;new C;new C;new C;new C;const iv=[["roadster","Roadster",1650,4.88,2.07,1.23,.6260606061,.398,2.91,14541798],["f1","F1 car",800,5.45,1.9,1.08,.32,.35,3.4,15958816],["tricycle","Tricycle",12,1.12,.65,.85,.36,.24,.75,14498096],["moped","Moped",100,1.82,.68,1.19,.58,.25,1.24,6928814],["kart","Go-kart",140,1.94,1.35,.94,.32,.19,1.26,14501178],["motorcycle","Motorcycle",230,2.14,.81,1.21,.56,.34,1.46,14316831],["cart","Shopping cart",28,1.02,.64,1.06,.54,.085,.69,10070190],["golf","Golf cart",500,2.48,1.24,1.85,.66,.255,1.7,3438690],["compact","Compact car",1250,4.04,1.76,1.48,.64,.31,2.55,5077164],["pickup","Pickup truck",2600,5.74,2.04,1.92,.88,.41,3.55,11749941],["van","Delivery van",4100,6.05,2.08,2.64,1.06,.37,3.68,14213087],["bus","School bus",11650,10.42,2.5,3.18,1.42,.49,6.5,14724136],["semi","18-wheeler",35650,17.5,2.55,4.02,1.7,.51,14.07,3627129]],pl=iv.map(([i,t,e,n,r,s,a,o,l,c])=>{const h=e+Ve.mass,f=i==="roadster"?en:(e*a+Ve.mass*Ve.com)/h,g=i==="roadster"?vi:e*(r*r+s*s)/12+Ve.rollInertia+e*(a-f)**2+Ve.mass*(Ve.com-f)**2;return{id:i,name:t,chassisMass:e,mass:h,length:n,width:r,height:s,com:f,inertia:g,wheelRadius:o,wheelbase:l,color:c}});function Vi(i){return pl.find(t=>t.id===i)??pl[0]}new Zt({color:857632,metalness:.9,roughness:.08,transparent:!0,opacity:.72});new Zt({color:1053720,metalness:.3,roughness:.7});new Zt({color:921361,metalness:.05,roughness:.95});new Zt({color:10135214,metalness:.95,roughness:.18});new Zt({color:14281983,emissive:new It(7317718),emissiveIntensity:1.4,roughness:.2});new Zt({color:16726570,emissive:new It(9376776),emissiveIntensity:1.6,roughness:.3});new C(0,0,1);new Zt({color:11577504,metalness:.86,roughness:.29,side:ee});new Zt({color:2306106,metalness:.6,roughness:.46});new Zt({color:7043717,metalness:.86,roughness:.29,side:ee});const Ce=1/240,ui=Math.round(un/Ce)+1,lh=Math.round(Oi/Ce),Xr={x:[1,0,0],y:[0,1,0],z:[0,0,1]},qt={p:0,v:3,a:6,q:9,n:13,t:16,thrust:19,suction:22,contact:25,tire:28,fan:31,rear:32,lift:33,attitude:34,roll:35,omega:36,moment:37,distance:38,contactKind:39,pitch:40,alpha:41,front:42},ur=43,_u=fu.map((i,t)=>({x:i,z:-5,halfX:t===3?1.18:1.04,halfZ:t===3?3.35:2.52,height:t===3?4.02:t===4?1.72:1.38,name:t===3?"the tall truck":`parked vehicle ${t+1}`}));function rv(i){Hn(i);const t=Ar();return{pos:Hn(i).pose.pos,q:Hn(i).pose.quat,vel:t.velocity,acc:t.acc,tangent:t.tangent,normal:t.normal,roll:t.roll,omega:t.angularVelocity,alpha:t.rollAccel,rollMoment:vi*t.rollAccel,fan:t.fan,rear:t.rear,lift:t.lift,attitude:t.attitude,thrust:t.thrust,fanPhase:t.fanPhase,airUse:t.airUse,chapter:0}}function sv(){const i=new Array(ui);for(let t=0;t<ui;t++){const e=Hn(t*Ce),n=Ar();i[t]={pos:e.pose.pos,q:e.pose.quat,vel:n.velocity,acc:n.acc,tangent:n.tangent,normal:n.normal,roll:n.roll,omega:n.angularVelocity,alpha:n.rollAccel,rollMoment:vi*n.rollAccel,fan:n.fan,rear:n.rear,lift:n.lift,attitude:n.attitude,thrust:n.thrust,fanPhase:n.fanPhase,airUse:n.airUse,chapter:Number(e.flags.chapter??0)}}return i}function av(i){const t=i.wheelbase,e=i.wheelRadius,n=se.radius-e,r=i.com-e,s=Math.asin(t/(2*n)),a=n*Math.cos(s)-r,o=12-t/2,l=[];let c=o,h=null;const f=(p,d,M)=>{h&&(c+=Math.hypot(p-h.x,d-h.y)),h={x:p,y:d,pitch:M,s:c,angle:0,curvature:0},l.push(h)};for(let p=0;p<=800;p++){const d=2*s*p/800,M=n*(1-Math.cos(d)),y=Math.sqrt(Math.max(0,t*t-M*M)),_=Math.atan2(M,y),w=se.x+n*Math.sin(d);f(w-y/2-r*Math.sin(_),e+M/2+r*Math.cos(_),_)}for(let p=1;p<=1800;p++){const d=s+(se.deckAngle-s)*p/1800;f(se.x+a*Math.sin(d),se.radius-a*Math.cos(d),d)}let g=0;for(let p=0;p<l.length;p++){const d=l[Math.max(0,p-1)],M=l[Math.min(l.length-1,p+1)];let y=p===0?0:Math.atan2(M.y-d.y,M.x-d.x);for(;y<g-Math.PI;)y+=Math.PI*2;l[p].angle=y,g=y}for(let p=0;p<l.length;p++){const d=l[Math.max(0,p-1)],M=l[Math.min(l.length-1,p+1)];l[p].curvature=(M.angle-d.angle)/(M.s-d.s||1)}function u(p,d){let M=0,y=l.length-1;for(;y-M>1;){const _=M+y>>1;l[_][d]<=p?M=_:y=_}return[l[M],l[y]]}function m(p){if(p<=o)return{pos:[-15+p,i.com,se.z],tangent:[1,0,0],normal:[0,1,0],pitch:0,curvature:0};const[d,M]=u(p,"s"),y=De((p-d.s)/(M.s-d.s||1)),_=d.angle+(M.angle-d.angle)*y;return{pos:[d.x+(M.x-d.x)*y,d.y+(M.y-d.y)*y,se.z],tangent:[Math.cos(_),Math.sin(_),0],normal:[-Math.sin(_),Math.cos(_),0],pitch:d.pitch+(M.pitch-d.pitch)*y,curvature:d.curvature+(M.curvature-d.curvature)*y}}function v(p){const[d,M]=u(p,"pitch");return d.s+(M.s-d.s)*De((p-d.pitch)/(M.pitch-d.pitch||1))}return{at:m,atPitch:v,flatEnd:o,halfAngle:s,wrapR:a}}function ch(i,t,e,n,r){const s=vi/i.inertia;if(e==="flight"){const l=(t>=30.1?Math.PI*2:r.roll)*s;return{q:xn(Xr.x,l),roll:l,omega:t>=27&&t<30.8?r.omega*s:0,alpha:t>=27&&t<30.8?r.alpha*s:0}}const a=t<16?0:t>=19.2?1:De((Math.PI-r.roll)/Math.PI),o=Math.PI-Math.PI*a*s;return{q:gu(xn(Xr.y,Math.PI),xn(Xr.x,o),xn(Xr.z,(n-Math.PI)*(1-a))),roll:o,omega:t>=16&&t<19.2?r.omega*s:0,alpha:t>=16&&t<19.2?r.alpha*s:0}}function vu(i,t,e){const n=[0,i.height/2-i.com,0],r=Jr(e,n),s=[t[0]+r[0],t[1]+r[1],t[2]+r[2]],a=ov(e),o=[i.length/2,i.height/2,i.width/2],l=[Math.abs(a[0])*o[0]+Math.abs(a[3])*o[1]+Math.abs(a[6])*o[2],Math.abs(a[1])*o[0]+Math.abs(a[4])*o[1]+Math.abs(a[7])*o[2],Math.abs(a[2])*o[0]+Math.abs(a[5])*o[1]+Math.abs(a[8])*o[2]];return{min:[s[0]-l[0],s[1]-l[1],s[2]-l[2]],max:[s[0]+l[0],s[1]+l[1],s[2]+l[2]]}}function ov(i){const[t,e,n,r]=i;return[1-2*(e*e+n*n),2*(t*e+n*r),2*(t*n-e*r),2*(t*e-n*r),1-2*(t*t+n*n),2*(e*n+t*r),2*(t*n+e*r),2*(e*n-t*r),1-2*(t*t+e*e)]}function lv(i,t,e){const n=vu(i,t,e);return _u.find(r=>n.max[0]>r.x-r.halfX&&n.min[0]<r.x+r.halfX&&n.max[2]>r.z-r.halfZ&&n.min[2]<r.z+r.halfZ&&n.min[1]<r.height&&n.max[1]>0)??null}function cv(i){const t=i.mass*Yt,e=Ve.suction,n=53250;return{weight:t,wallRatio:Ve.friction*e/t,ceilingRatio:e/t,liftRatio:n/t,wall:Ve.friction*e>=t,ceiling:e>t,lift:n>t,turns:vi/i.inertia}}const hh=sv();function hv(i){const t=Vi(i),e=performance.now(),n=t.mass,r=av(t),s=r.at(12).pitch,a=hh.map((R,L)=>{if(L*Ce<4)return R.pos[0]+15;const E=Math.atan2(R.tangent[1],R.tangent[0]);return r.atPitch(s+Math.max(0,E)/se.endAngle*(se.endAngle-s))}),o=cv(t),l=new Float64Array(ui*ur),c={ramp:{maxHeight:0,maxAngle:0,stop:null,lifted:!1},flight:{maxHeight:0,maxAngle:0,stop:null,lifted:!1}};let h=[-15,t.com,se.z],f=[0,0,0],g=ti,u=0,m=0,v=0,p="ramp",d=!0,M=0,y=null;for(let R=0;R<ui;R++){const L=R*Ce,E=hh[R];R===lh&&(p="flight",d=!0,y=null,h=[E.pos[0],t.com,E.pos[2]],f=[...E.vel],g=ti,v=0);const x=R*ur;if(y){l.set(y,x);continue}let P=[0,1,0],D=[1,0,0],B=[0,0,0],V=[0,0,0],G=[0,0,0],W=[0,0,0],K=[0,0,0],H=0,U=0,$=0,nt=0,Dt=0,St=0,Ft=0;if(d){if(p==="ramp"){const kt=r.at(u);H=kt.pitch,Ft=kt.curvature,D=kt.tangent,P=kt.normal,h=kt.pos,f=[D[0]*m,D[1]*m,D[2]*m],g=xn(Xr.z,H)}else h=[h[0],t.com,h[2]],f=[f[0],0,f[2]],g=ti;W=Jr(g,uh(E.q??ti,E.thrust));const ot=E.fan*ve*Yt,Et=p==="ramp"?m*m*Ft:0,vt=ot+n*(Yt*P[1]+Et)-_o(W,P);if(vt<-1e-4)d=!1,M=H,c[p].lifted=!0;else{const kt=Math.max(0,vt),F=Math.min(Ve.drive,Ve.friction*kt);let b;if(p==="ramp")if(L<16){const rt=a[R],Q=a[Math.max(0,R-1)],Ut=a[R+1]??rt,yt=L<4?E.vel[0]:(Ut-Q)/(2*Ce);b=(L<4?E.acc[0]:(Ut-2*rt+Q)/(Ce*Ce))+2.4*(rt-u)+3.2*(yt-m)}else b=-4*m;else b=E.acc[0]+2.4*(E.pos[0]-h[0])+3.2*(E.vel[0]-f[0]);const Mt=n*(b+Yt*D[1])-_o(W,D),et=De(Mt,-F,F);B=hi(P,-ot),V=hi(P,kt),G=hi(D,et),K=hi([W[0]+B[0]+V[0]+G[0],W[1]+B[1]+V[1]+G[1],W[2]+B[2]+V[2]+G[2]],1/n),K=[K[0],K[1]-Yt,K[2]],St=_o(K,D),Dt=p==="ramp"&&H>.001?2:1,$=p==="ramp"?m*Ft:0}}if(!d){const ot=ch(t,L,p,M,E);g=ot.q,U=ot.roll,$=ot.omega,nt=ot.alpha,W=Jr(g,uh(E.q??ti,E.thrust)),B=[0,0,0],V=[0,0,0],G=[0,0,0],K=[W[0]/n,W[1]/n-Yt,W[2]/n]}Dn(l,x+qt.p,h),Dn(l,x+qt.v,f),Dn(l,x+qt.a,K),Dn(l,x+qt.q,g),Dn(l,x+qt.n,P),Dn(l,x+qt.t,D),Dn(l,x+qt.thrust,W),Dn(l,x+qt.suction,B),Dn(l,x+qt.contact,V),Dn(l,x+qt.tire,G),l[x+qt.fan]=E.fan,l[x+qt.rear]=E.rear,l[x+qt.lift]=E.lift,l[x+qt.attitude]=E.attitude,l[x+qt.roll]=U,l[x+qt.omega]=$,l[x+qt.moment]=d?0:E.rollMoment,l[x+qt.distance]=v,l[x+qt.contactKind]=Dt,l[x+qt.pitch]=H,l[x+qt.alpha]=nt,l[x+qt.front]=L>30.1&&L<30.8?.3:0;const Rt=c[p];if(Rt.maxHeight=Math.max(Rt.maxHeight,h[1]-t.com),Rt.maxAngle=Math.max(Rt.maxAngle,H),R===ui-1)break;const Y=[h[0],h[1],h[2]],J=[f[0],f[1],f[2]];if(d&&p==="ramp")u+=m*Ce+.5*St*Ce*Ce,m+=St*Ce,v+=m*Ce;else{for(let F=0;F<3;F++)Y[F]=h[F]+f[F]*Ce+.5*K[F]*Ce*Ce,J[F]=f[F]+K[F]*Ce;d&&(Y[1]=t.com,J[1]=0,v+=f[0]*Ce);const ot=d?g:ch(t,L+Ce,p,M,E).q,Et=vu(t,Y,ot),vt=p==="flight"?lv(t,Y,ot):null,kt=!d&&Et.min[1]<0&&J[1]<0;if(vt||kt){const F=Jr(ot,[0,1,0]),b=kt&&Math.abs(J[1])<2&&F[1]>.985;Rt.stop={time:L,kind:vt?"obstacle":b?"touchdown":"impact",obstacle:vt?.name??null,speed:Math.hypot(J[0],J[1],J[2]),verticalSpeed:J[1],position:[h[0],h[1],h[2]],soft:b,title:vt?"Obstacle contact":b?"Touchdown":"Ground impact"},y=l.slice(x,x+ur)}else h=[Y[0],Y[1],Y[2]],f=[J[0],J[1],J[2]]}}const _=Math.round(30.8/Ce)*ur;c.flight.referenceLandingHeight=Math.max(0,l[_+qt.p+1]-t.com);const w=vi/t.inertia,T=R=>{const L=De(R,0,un),E=Math.min(ui-1,Math.floor(L/Ce+1e-9)),x=Math.min(ui-1,E+1),P=x===lh?0:De(L/Ce-E),D=E*ur,B=x*ur,V=et=>l[D+et]+(l[B+et]-l[D+et])*P,G=et=>[V(et),V(et+1),V(et+2)],W=[l[D+qt.q],l[D+qt.q+1],l[D+qt.q+2],l[D+qt.q+3]],K=[l[B+qt.q],l[B+qt.q+1],l[B+qt.q+2],l[B+qt.q+3]],H=fv(W,K,P),U=L<Oi?"ramp":"flight",$=c[U].stop,nt=$&&L>=$.time?$:null,Dt=G(qt.p),St=G(qt.v),Ft=G(qt.thrust),Rt=uv(G(qt.n)),Y=l[D+qt.contactKind]>0,J=l[D+qt.contactKind],ot=V(qt.roll),Et=V(qt.fan),vt=Et*ve*Yt,kt=Math.hypot(l[D+qt.contact],l[D+qt.contact+1],l[D+qt.contact+2]),F=Math.hypot(St[0],St[1],St[2]),b=Math.max(0,Dt[1]-t.com),Mt=Math.max(0,Ft[1])/(n*Yt);return hu(L,{pos:Dt,quat:H,quantities:{gravity:Pe([0,-n*Yt/1e3,0],"kN"),suction:Pe(hi(Rt,-vt/1e3),"kN"),contact:Pe(hi(Rt,kt/1e3),"kN"),tire:Pe(hi(G(qt.tire),1/1e3),"kN"),thrust:Pe(hi(Ft,1/1e3),"kN"),rollMoment:Pe(V(qt.moment)/1e3,"kN·m"),altitude:Pe(b,"m"),speed:Pe(F,"m/s"),verticalSpeed:Pe(St[1],"m/s"),rollTurns:Pe(U==="flight"?ot/(2*Math.PI):Y?0:(ot-Math.PI)/(2*Math.PI),"圈"),thrustWeight:Pe(Mt,"×")},flags:{contact:Y?1:0,contactKind:J,chapter:rv(nt?.time??L).chapter,trial:U==="flight"?1:0,stopped:nt?1:0,stopKind:nt?.kind==="obstacle"?1:nt?.kind==="touchdown"?2:nt?.kind==="impact"?3:0,stopObstacle:nt?.obstacle?Math.max(0,_u.findIndex(et=>et.name===nt.obstacle)):-1,tooHeavy:o.lift?0:1,neverLifted:c[U].lifted?0:1,fan:Et}})};return{vehicle:t,limits:o,results:{...c,turns:w},sample:T,computeMs:performance.now()-e,frames:ui}}function _o(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function hi(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function uv(i){const t=Math.hypot(i[0],i[1],i[2]);return t<1e-9?[0,0,0]:[i[0]/t,i[1]/t,i[2]/t]}function Dn(i,t,e){i[t]=e[0],i[t+1]=e[1],i[t+2]=e[2]}function uh(i,t){return Jr([-i[0],-i[1],-i[2],i[3]],t)}function fv(i,t,e){let[n,r,s,a]=i,[o,l,c,h]=t,f=n*o+r*l+s*c+a*h;if(f<0&&(o=-o,l=-l,c=-c,h=-h,f=-f),f>.9995){const p=n+(o-n)*e,d=r+(l-r)*e,M=s+(c-s)*e,y=a+(h-a)*e,_=Math.hypot(p,d,M,y)||1;return[p/_,d/_,M/_,y/_]}const g=Math.acos(De(f,-1,1)),u=Math.sin(g),m=Math.sin((1-e)*g)/u,v=Math.sin(e*g)/u;return[n*m+o*v,r*m+l*v,s*m+c*v,a*m+h*v]}const gn={fan:"https://www.youtube.com/watch?v=qt5p-_tE8d0&t=491s",thrust:"https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/thrust-force/",friction:"https://openstax.org/books/university-physics-volume-1/pages/6-2-friction",torque:"https://openstax.org/books/college-physics-2e/pages/10-3-dynamics-of-rotational-motion-rotational-inertia",condensation:"https://scied.ucar.edu/learning-zone/clouds/how-clouds-form"},xu=[{id:"friction-static",name:"Tire grip",equation:"Fₜ ≤ μN",principle:"N 是压在轮胎与路面之间的力，μ 描述两者的抓地能力。电机要的是轮胎力，但可用摩擦限制了能交付多少 —— 超过就打滑。",source:{label:"OpenStax · University Physics Vol.1 §6.2",url:gn.friction},pitfalls:["把摩擦力当成固定的 μmg —— 它随正压力 N 变化","以为打滑时的摩擦与静摩擦一样大（实际更小）"],illustrative:!0},{id:"fan-suction",name:"Fan suction",equation:"Fₛ = Δp · A",principle:"风扇把车底空气抽走、降低那里的压力，外部更高的压力把车压向路面。所以吸附不是「吸引力」，是压差。额外的下压力让轮胎抓地更强，低速时也能起作用 —— 这与依赖速度的机翼完全不同。",source:{label:"Tesla 发布会（fan explanation）",url:gn.fan},pitfalls:["把吸附当成「风扇把车吸住了」，像磁铁一样","以为吸附能当升力用（它朝表面，不朝天空）"],illustrative:!0},{id:"centripetal",name:"Climbing the ramp",equation:"ΣFₙ = mv²/r",principle:"电机转动车轮；吸附并不驱动车前进，它把轮胎压向路面，让摩擦能沿着路面推。路径弯曲还需要一个指向曲率中心的合力 —— 那是上面这些力的结果，不是额外的一个力。",source:{label:"OpenStax · University Physics Vol.1",url:gn.friction},pitfalls:["把「向心力」当成独立的一种力画进自由体图","以为吸附本身在推车向上"],illustrative:!0},{id:"wall-hold",name:"Vertical hold",equation:"μN ≥ mg",principle:"吸附把车压向墙，不是向上。它增大轮胎的正压力，让静摩擦可以向上抵消重力。于是车能停在这里而不靠速度支撑自己。按 2mg 的示意吸附值，这个保持需要 μ ≥ 0.5 —— 那是模型条件，不是实测轮胎规格。",source:{label:"OpenStax · University Physics Vol.1 §6.2",url:gn.friction},pitfalls:["以为车是被「吸在墙上」的（其实是被压向墙、再由摩擦托住）","忽略 μ 的取值是假设"],illustrative:!0},{id:"inverted",name:"Inverted grip",equation:"N = Fₛ − mg",principle:"坡道弯过来时，吸附跟着表面走而不是竖直。接近顶点时它朝上拉，重力仍朝下。吸附足够大，轮胎才能被压在头顶的路面上。注意：这条坡道停在离完全倒吊 10° 的地方，所以严格平衡还要算上那个角度。",source:{label:"Tesla 发布会（fan explanation）",url:gn.fan},pitfalls:["以为完全倒吊时「吸附 > 重力」是充分条件（还要看路面能不能推）","忽略坡道并没有真的到 180°"],illustrative:!0},{id:"thrust",name:"Gas thrust",equation:"T = ṁvₑ + (pₑ − pₐ)Aₑ",principle:"压缩空气从喷口喷出，反作用力推动车。这个力不需要轮胎接触地面。能量来自储存的高压空气，不是喷口里的燃烧。所以推力是有上限的 —— 气瓶里的气用完就没有了。",source:{label:"NASA · Beginner's Guide to Aeronautics",url:gn.thrust},pitfalls:["把这当成「火箭发动机」（没有燃烧）","以为可以无限悬停（储气量有限）"],illustrative:!0},{id:"ballistic",name:"Lift-off is not lift",equation:"aᵧ = Tᵧ/m − g",principle:"轮胎不能把地面往上拉。起跳时正压力掉到零，剩下推力与重力决定竖直加速度。这是推力支撑的运动，不是机翼产生的升力。",source:{label:"NASA",url:gn.thrust},pitfalls:["把这种「飞起来」当成空气动力学升力","以为离地瞬间速度为零（其实是加速度在变）"],illustrative:!0},{id:"torque",name:"Controlling the roll",equation:"Στ = Iα",principle:"角加速度由净力矩与滚转惯量决定。一对平衡的力偶可以让车身转起来，而不改变质心的轨迹。在这个理想化里，车一边做抛体运动、一边按独立的时间表翻滚。",source:{label:"OpenStax · College Physics §10.3",url:gn.torque},pitfalls:["以为「转动」本身会改变飞行轨迹（质心不受影响）","忽略惯量：同样的力矩，惯量不同则转法不同"],illustrative:!0},{id:"apex",name:"After the apex",equation:"aᵧ = −g",principle:"到达最高点时向上速度为零，然后变成向下。重力全程都在作用，车并没有「悬停」。同时相反的脉冲正在把翻转停下来，准备落地。",source:{label:"NASA",url:gn.thrust},pitfalls:["把「最高点速度为零」误解为「加速度为零」","以为轨迹是抛物线就一定没有额外力"],illustrative:!0},{id:"landing-burn",name:"Landing burn",equation:"∫(Tᵧ − mg)dt = Δpᵧ",principle:"车下降、轮子朝下。向上的推力超过重力，于是把下落减速而不是反转。这个着陆反推消耗的是储存的空气 —— 燃烧时长因此有上限。",source:{label:"NASA",url:gn.thrust},pitfalls:["以为「推力大于重力」就一定会上升（取决于当前速度方向）","忽略储气量对燃烧时长的限制"],illustrative:!0},{id:"normal-force",name:"Touchdown",equation:"ΣF = ma",principle:"轮胎重新接触地面，地面再次支撑车。刹车时水平轮胎力与运动方向相反；停下之后合力为零：向上支持力平衡重力与残余吸附。重力全程从未关闭。",source:{label:"OpenStax · University Physics Vol.1",url:gn.friction},pitfalls:["以为停车后就没有力了（重力与支持力仍在，只是平衡）","把「合力为零」误解为「不受力」"],illustrative:!0},{id:"condensation",name:"The white wake",equation:"—",principle:"那道白色尾迹来自喷流爆发，不是牵引风扇。高速膨胀的空气降温、水汽凝结成可见的雾 —— 与云形成的机制类似。",source:{label:"UCAR · How clouds form",url:gn.condensation},pitfalls:["以为白烟是「风扇吹出的气流」（它主要是凝结的水汽）","把尾迹当成推力的直接可视化"],illustrative:!0}],dv="本页是教学重建，不是 Tesla 实拍，也不是录制遥测。时序、尺寸与车辆质量均为示意值。风扇吸附 39.24 kN、起跳推力 53.25 kN 竖直 + 16 kN 水平，来自参考教学模型而非实测遥测，且不随所选车身缩放。假设：摩擦系数 μ = 0.9、驱动上限 40 kN、密封接触面理想化。未建模：气动阻力、气瓶压力衰减、空气质量变化、悬架、密封泄漏、结构强度。",kr=i=>(i/1e3).toFixed(1),pv="质量为示意值，接触面按理想密封处理。真实装配、强度、悬架、气动力与气瓶压力衰减均未建模。",mv=`这个教学模型固定最大吸附 <strong class="inline-strong">${(Ve.suction/1e3).toFixed(1)} kN</strong>、向上起跳推力 <strong class="inline-strong">53.3 kN</strong>。两者都不随车身重量缩放。`,ml=[{id:"gravity",label:"重力",short:"mg",color:"#edc18f",kind:"vector",unit:"kN",views:{panel:!0,scene:!0,diagram:!0,aria:!0},threshold:1},{id:"suction",label:"吸附",short:"Fₛ",color:"#8ecde5",kind:"vector",unit:"kN",views:{panel:!0,scene:!0,diagram:!0,aria:!0},threshold:.2},{id:"contact",label:"路面支持",short:"N",color:"#d7e3e8",kind:"vector",unit:"kN",views:{panel:!0,scene:!0,diagram:!0,aria:!0},threshold:.2},{id:"tire",label:"轮胎摩擦",short:"Fₜ",color:"#8dc7ac",kind:"vector",unit:"kN",views:{panel:!0,scene:!0,diagram:!0,aria:!0},threshold:.2},{id:"thrust",label:"燃气推力",short:"T",color:"#f97d70",kind:"vector",unit:"kN",views:{panel:!0,scene:!0,diagram:!0,aria:!0},threshold:.2},{id:"rollMoment",signed:!0,label:"滚转力矩",short:"τ",color:"#c6b1e8",kind:"torque",unit:"kN·m",views:{panel:!0,scene:!0,diagram:!0,aria:!0},threshold:.1},{id:"altitude",label:"高度",color:"#a8c0d4",kind:"scalar",unit:"m",views:{panel:!0,aria:!0}},{id:"speed",label:"速度",color:"#b7c7d2",kind:"scalar",unit:"m/s",views:{panel:!0,aria:!0}},{id:"verticalSpeed",signed:!0,label:"竖直速度",color:"#8fa8b8",kind:"scalar",unit:"m/s",views:{panel:!0,aria:!0}},{id:"rollTurns",label:"滚转",color:"#d9c8f2",kind:"scalar",unit:"圈",views:{panel:!0,aria:!0}}],gv=[{t:0,offset:[10.4,3.2,6.8],look:[2,.7,0],fov:40},{t:2,offset:[9.2,4.2,12],look:[1.2,.8,0],fov:42},{t:4,offset:[10,6.7,18],look:[0,1.3,0],fov:45},{t:7,offset:[11,2.8,17],look:[0,.6,0],fov:43},{t:10,offset:[11,1.2,17],look:[0,.6,0],fov:43},{t:13,offset:[8,-2.1,17],look:[0,-.4,0],fov:42},{t:15,offset:[8,-4.5,17],look:[0,-1.2,0],fov:42},{t:16,offset:[9,-4,18],look:[-.8,-2.4,0],fov:43},{t:18,offset:[8,5,19],look:[-1,1.2,0],fov:43},{t:19.5,offset:[7,3.8,12],look:[-.4,.4,0],fov:41},{t:22,offset:[8,4.4,13],look:[0,.4,0],fov:41},{t:24.4,offset:[8,3.3,-12],look:[1,.5,0],fov:41},{t:26,offset:[8,4.5,-17],look:[2,1,0],fov:43},{t:27,offset:[8,5.3,-22],look:[3,0,0],fov:43},{t:28.4,offset:[7,5.4,-28],look:[2,-4.3,0],fov:44},{t:29.3,offset:[2,4.7,-28],look:[0,-4.3,0],fov:43},{t:30.3,offset:[8,4,-15],look:[0,.5,0],fov:42},{t:32,offset:[7,3.1,-11],look:[0,.4,0],fov:40},{t:36,offset:[6.4,2.9,-10],look:[0,.25,0],fov:39}],_v=[{id:"stopped-obstacle",when:i=>i.flags.stopped===1&&i.flags.stopKind===1,concept:"fan-suction",title:"撞上停放车辆，试验在首次接触时停止",body:()=>`共享装备还是那套 —— ${na.suctionKN.toFixed(1)} kN 吸附、${na.liftKN.toFixed(2)} kN 起跳推力，不随车身变大。车身重了，同样的推力就带不动它。<br>画面停在这里：碰撞冲量、变形与撞击后的运动不在模型范围内。`,equation:"ΣF = ma",points:[{tone:"contact",title:"首次接触即停止",text:"画面冻结在撞击前的一帧，碰撞冲量与变形不在模型范围内。"},{tone:"thrust",title:"装备没有变强",text:"吸附与推力仍是那套数值，重车带不动。"},{tone:"tire",title:"轮胎力也有上限",text:"μN 与 40 kN 驱动上限都固定，重车更难加速到位。"}],takeaway:"这个「失败」本身就是教学内容：同一套特技，换车就做不成。"},{id:"stopped-impact",when:i=>i.flags.stopped===1&&i.flags.stopKind===3,concept:"normal-force",title:"硬着陆：没能在限制内跟上参考轨迹",body:"车身质量与惯量不同，同样的驱动上限与摩擦力上限会让它跟不上。<br>冻结帧展示的是撞击前的受力快照。",equation:"Fₜ ≤ μN",points:[{tone:"contact",title:"硬着陆意味着没跟上",text:"质量与惯量不同，同样的驱动与摩擦上限让它跟不上参考轨迹。"},{tone:"tire",title:"摩擦力有天花板",text:"需要的减速度超过了 μN 能给的上限。"},{tone:"gravity",title:"重力不会配合",text:"它始终是 mg，不会因为车更重就变小。"}],takeaway:"冻结帧展示的是撞击前的受力快照 —— 不编造碰撞动画。"},{id:"too-heavy",when:i=>i.flags.tooHeavy===1,concept:"thrust",title:"太重了：起跳推力小于车重",body:()=>`共享装备的起跳推力是 ${na.liftKN.toFixed(2)} kN，不随车身变大。车重超过它时，向上合力仍是负的 —— 有推力，但不会离地。<br>这就是为什么换成校车或半挂，同一个特技就做不成了。`,equation:"Tᵧ < mg ⇒ aᵧ < 0",points:[{tone:"thrust",title:"推力是固定的",text:"53.3 kN 不随车身缩放，这是整个对比的前提。"},{tone:"gravity",title:"车重会变",text:"换成校车或半挂，重量翻数倍，同样的推力就不够了。"},{tone:"contact",title:"所以它不会离地",text:"向上合力仍为负，车被地面托着 —— 有推力，但不飞。"}],takeaway:"这就是「硬件不随车身变」这句话的具体后果。"},{id:"flight-roll",when:i=>i.time>=27.7&&i.time<30.1,concept:"torque",title:"控制翻滚",body:i=>`关掉起跳喷口后，向上的动量还在，重力正在减速。不均匀的喷流脉冲产生力矩，开始并停止翻滚。滚转力矩 <strong class="hl">${kr(Number(i.quantities.rollMoment.value)*1e3)} kN·m</strong>。<br>转动车身本身并不会弯曲飞行路径。`,equation:"Στ = Iα",points:[{tone:"torque",title:"力偶让车身转，不改变轨迹",text:"一对平衡的力偶可以让车身原地翻转，而质心照旧走抛物线。"},{tone:"gravity",title:"翻滚是单独的节目",text:"平移与转动可以分开编排 —— 这是理想化处理。"},{tone:"thrust",title:"惯量决定转法",text:"同样的力矩，惯量不同则角加速度不同；换成重车就转不出同样的圈数。"}],takeaway:"所以「转得起来」和「飞得过去」是两件事，需要分别设计。"},{id:"flight-landing-burn",when:i=>i.time>=30.45&&i.time<30.8,concept:"landing-burn",title:"着陆反推",body:i=>`车正在下降、轮子朝下。向上的推力超过重力，把下落减速而不是反转。此刻竖直速度 <strong class="hl">${Number(i.quantities.verticalSpeed.value).toFixed(1)} m/s</strong>。<br>燃烧时长受储气量限制 —— 不能无限悬停。`,equation:"∫(Tᵧ − mg)dt = Δpᵧ",points:[{tone:"thrust",title:"推力大于重力才算反推",text:"向下落时向上推，先减速再谈落地。"},{tone:"gravity",title:"燃烧时长受储气量限制",text:"气瓶容量有限，不能无限悬停。",cite:"Tesla"},{tone:"contact",title:"最后仍要交回地面",text:"反推只是把撞击速度降下来，落地仍靠接触力。"}],takeaway:"反推是「减小冲击」，不是「抵消重力」—— 两者的时间尺度完全不同。"},{id:"flight-apex",when:i=>i.time>=30.1&&i.time<30.45,concept:"apex",title:"过顶点之后",body:i=>`最高点向上速度为零，然后变成向下 —— 重力全程都在作用，车并没有悬停。此刻高度 <strong class="hl">${Number(i.quantities.altitude.value).toFixed(1)} m</strong>。<br>相反的脉冲正在把翻转停下来，准备落地。`,equation:"aᵧ = −g",points:[{tone:"gravity",title:"顶点速度为零，加速度不为零",text:"竖直速度过零，但重力全程都在作用。"},{tone:"thrust",title:"喷流已经关闭",text:"此后是纯抛体运动，靠惯性上冲再下落。"},{tone:"torque",title:"翻滚要提前停住",text:"为了轮子朝下落地，停止翻转的脉冲必须提前安排。"}],takeaway:"「最高点不受力」是最常见的误解之一 —— 这里可以当场验证。"},{id:"flight-liftoff",when:i=>i.time>=27&&i.time<27.7,concept:"ballistic",title:"离地：推力支撑，不是升力",body:i=>`轮胎不能把地面往上拉。起跳时正压力掉到零，剩下推力与重力决定竖直加速度。此刻竖直速度 <strong class="hl">${Number(i.quantities.verticalSpeed.value).toFixed(1)} m/s</strong>。`,equation:"aᵧ = Tᵧ/m − g",points:[{tone:"contact",title:"轮胎拉不动地面",text:"车不能靠轮胎把自己往上拽；一旦离地，地面支持力归零。"},{tone:"thrust",title:"起飞靠的是推力",text:"起跳瞬间决定竖直加速度的，只剩推力与重力。"},{tone:"gravity",title:"离地不等于失速",text:"速度还在，只是竖直方向的受力关系换了。"}],takeaway:"这是<strong>推力支撑</strong>的运动，不是机翼产生的升力 —— 两者常被混为一谈。"},{id:"flight-runup",when:i=>i.time>=Oi&&i.time<27,concept:"thrust",title:"一次独立的飞行 trial",body:i=>`每一次都在同起点、同样的 <strong class="hl">${Number(i.quantities.speed.value).toFixed(2)} m/s</strong> 助跑速度重新开始。<br>这不是从坡道那次失败里「自动救回来」的。`,equation:"ΣF = ma",points:[{tone:"gravity",title:"每次从同一起点重来",text:"第二次 trial 会重置到相同位置与助跑速度 —— 这不是从失败中自动救回。"},{tone:"thrust",title:"助跑速度是给定的",text:"3.57 m/s 是模型设定，不是从上一段自然延续。"},{tone:"tire",title:"这一段仍靠轮胎",text:"尚未起跳，地面摩擦是唯一的水平驱动力。"}],takeaway:"把两次 trial 拆开，是为了让「换车」这件事有可比较的基准。"},{id:"kickflip",when:i=>i.time>=20&&i.time<24.4,concept:"condensation",title:"贴地翻转",body:"后喷口让车沿地面滑行，车身绕自身轴翻一整圈。<br>那道白色尾迹来自喷流爆发，不是牵引风扇。",equation:"∫T dt = Δp",points:[{tone:"thrust",title:"后喷口沿地面推进",text:"气流向后，反作用力向前 —— 不需要轮胎抓地。"},{tone:"torque",title:"车身绕自身轴翻一圈",text:"滚转由力偶驱动，与前进速度无关。"},{tone:"contact",title:"白烟不是牵引风扇",text:"尾迹来自喷流爆发后水汽凝结，与云形成的机制类似。",cite:"UCAR"}],takeaway:"贴地翻转说明：推进与转向可以分别设计，不必都靠轮胎。"},{id:"landing",when:i=>i.time>=19.2&&i.time<20,concept:"normal-force",title:"回到地面",body:i=>`轮胎触地，地面再次支撑车。轮胎力让它减速，并把方向引向下一跳。此刻竖直速度 <strong class="hl">${Number(i.quantities.verticalSpeed.value).toFixed(1)} m/s</strong>，起跳喷口已关闭。`,equation:"ΣF = ma",points:[{tone:"contact",title:"地面重新支撑",text:"轮胎触地，支持力回到非零，竖直速度被迅速吃掉。"},{tone:"tire",title:"水平方向也在刹车",text:"轮胎力与前进方向相反，把车速降下来。"},{tone:"thrust",title:"喷口已经关闭",text:"这一段没有推力参与，全靠地面。"}],takeaway:"落地不是「软着陆魔法」，而是接触力与摩擦在几个毫秒内做功。"},{id:"eject",when:i=>i.time>=16&&i.time<19.2,concept:"thrust",title:"脱出坡道",body:i=>`离开坡道后进入抛体运动，同时车身翻转 <strong class="hl">${Math.round(Y_/Math.PI*180)}°</strong>。高度 <strong class="hl">${Number(i.quantities.altitude.value).toFixed(1)} m</strong>。<br>这段衔接是<strong>编排出来的连接</strong>，不是连续录制的。`,equation:"aᵧ = Tᵧ/m − g",points:[{tone:"thrust",title:"脱出后进入抛体运动",text:"离开坡道后，剩下的只有推力与重力，轨迹是抛物线。"},{tone:"torque",title:"翻转与平移同时发生",text:"车身翻转 180°，但质心照旧走抛物线 —— 两件事独立。"},{tone:"contact",title:"此时没有接触力",text:"正压力归零，轮胎帮不上忙。"}],takeaway:"这一段是<strong>编排出来的连接</strong>，不是连续录制的画面。"},{id:"inverted",when:i=>i.time>=11&&i.time<16,concept:"inverted",title:"倒吊抓地",body:i=>`坡道弯过去，吸附跟着表面走而不是竖直。接近顶点时它朝上拉，重力仍朝下。正压力 <strong class="hl">${$s(i,"contact").toFixed(1)} kN</strong>。<br>这条坡道停在离完全倒吊 ${Math.round(180-se.endAngle/Math.PI*180)}° 的地方。`,equation:"N = Fₛ − mg",points:[{tone:"fan",title:"吸附跟着表面走",text:"弯过顶点后它朝上拉，而重力仍朝下 —— 两个方向相反。"},{tone:"contact",title:"正压力必须为正",text:"N = Fₛ − mg 要大于零，轮胎才贴着路面。"},{tone:"gravity",title:"并没有完全倒吊",text:"坡道停在离 180° 还差 10° 的位置，严格平衡要算上这个角度。"}],takeaway:"这是全片最反直觉的一段：<strong>吸附的方向随表面转</strong>，不是永远向上。"},{id:"wall",when:i=>i.time>=10&&i.time<11,concept:"wall-hold",title:"竖直墙面上的静止保持",body:i=>`吸附把车压向墙，不是向上。它增大轮胎正压力，让静摩擦向上抵消重力。此时吸附 <strong class="hl">${kr($s(i,"suction")*1e3)} kN</strong>，车重 ${kr(ve*Yt)} kN。`,equation:"μN ≥ mg",points:[{tone:"fan",title:"吸附朝墙，不朝上",text:"它把车压向墙面，从而放大轮胎的正压力 N。"},{tone:"tire",title:"托住车的是摩擦",text:"正压力变大后，静摩擦才有能力向上抵消重力。"},{tone:"gravity",title:"这是模型条件",text:"按 2mg 的示意吸附，这个保持需要 μ ≥ 0.5 —— 不是实测轮胎规格。"}],takeaway:"所以「车被吸在墙上」这个说法是错的：车是被<strong>压</strong>在墙上，再由摩擦托住。"},{id:"climb",when:i=>i.time>=4&&i.time<10,concept:"centripetal",title:"爬上坡道",body:"电机转动车轮；吸附并不驱动车前进，它把轮胎压向路面，让摩擦能沿着路面推。<br>路径弯曲还需要一个指向曲率中心的合力 —— 那是结果，不是外加的力。",equation:"ΣFₙ = mv²/r",points:[{tone:"tire",title:"吸附不推车前进",text:"它只做一件事：把轮胎压向路面，让摩擦能沿着路面推。"},{tone:"gravity",title:"重力仍然向下",text:"爬坡时重力沿路面的分量需要被轮胎力抵消，否则会下滑。"},{tone:"fan",title:"低速也有效",text:"吸附靠压差，不靠速度 —— 这正是它和机翼下压力的区别。",cite:"Tesla"}],takeaway:"路径弯曲所需的向心合力，是上面这些力合成的结果，不是额外再加的一个力。"},{id:"suction-on",when:i=>i.time>=2.5&&i.time<4,concept:"fan-suction",title:"吸附在爬坡前就开始建立",body:i=>`风扇把车底空气抽走、降低那里的压力，外部大气压把车压向路面。此刻吸附 <strong class="hl">${kr($s(i,"suction")*1e3)} kN</strong>。<br>吸附不是吸引力，是压差。`,equation:"Fₛ = Δp · A",points:[{tone:"fan",title:"吸附是压差，不是磁力",text:"风扇把车底空气抽走、降低那里的压力；外部大气压把车压向路面。"},{tone:"tire",title:"它先于爬坡建立",text:"在车到达坡道前就把车压住，轮胎才有抓地余量。"},{tone:"contact",title:"它不承担升力",text:"吸附朝表面，不朝天。真正把车送上天的是喷流。"}],takeaway:"理解这一点，后面「吸附托住车」的直觉就不会再出现。"},{id:"approach",when:i=>i.time<2.5,concept:"friction-static",title:"轮胎抓地",body:i=>`轮胎向后推地面，地面向前推车。向上的接触力支撑重量。此刻轮胎力 <strong class="hl">${kr($s(i,"tire")*1e3)} kN</strong>。`,equation:"Fₜ ≤ μN",points:[{tone:"gravity",title:"装备是有重量的",text:'车体与载荷 <strong class="inline-strong">1,650 kg</strong>，加上同一套 350 kg 的风扇与喷流装备，合计 <strong class="inline-strong">2,000 kg</strong>。这些是示例质量，不是厂家规格。'},{tone:"fan",title:"硬件不会跟着变大",text:mv,cite:"Tesla"},{tone:"thrust",title:"飞行程序是固定的",text:"同样的喷流力与燃烧时长被重放。质量更小则加速度更大；惯量不同则翻转方式不同。",cite:"NASA"}],takeaway:`<strong>剖视</strong>会露出整套全尺寸共享装备 —— 平时为看车身清晰而隐藏。空中运动是重新计算的，不是把 Roadster 的轨迹拉伸。${pv}`},{id:"coast",when:()=>!0,concept:"normal-force",title:"运动中",body:"各力共同决定加速度。拖动时间轴可以停在任意时刻。",equation:"ΣF = ma",points:[{tone:"gravity",title:"重力全程在场",text:"任何时候竖直方向都有 mg 向下。"},{tone:"contact",title:"地面是否支撑要看接触",text:"离地则正压力归零，接触则平衡一部分重量。"},{tone:"tire",title:"水平方向的力来自摩擦",text:"它受 μN 限制，不是想给多少就给多少。"}],takeaway:"把时间轴停在任意时刻，都能读出这一帧的完整受力。"}];function $s(i,t){const e=i.quantities[t]?.value??0;return typeof e=="number"?Math.abs(e):Math.hypot(...e)}function vv(){const i={};for(const t of ml)i[t.id]=1e-9;for(let t=0;t<=un;t+=.05){const e=Hn(t);for(const n of ml){const r=e.quantities[n.id]?.value;if(r===void 0)continue;const s=typeof r=="number"?Math.abs(r):Math.hypot(...r);Number.isFinite(s)&&s>i[n.id]&&(i[n.id]=s)}}return i}const xv=vv(),Mv=ml.map(i=>({...i,barMax:xv[i.id]??1})),Gn={slug:"roadster",title:"Roadster · 可交互的物理解释",duration:un,fps:60,chapters:[{at:0,label:"逼近"},{at:4,label:"爬坡"},{at:11,label:"倒吊"},{at:16,label:"脱出"},{at:24.4,label:"助跑"},{at:27.7,label:"翻滚"},{at:30.8,label:"落地"}],quantities:Mv,camera:gv,narrative:_v,concepts:xu,disclaimer:dv},na={suctionKN:Ve.suction/1e3,liftKN:53.25,rigMass:Ve.mass},gl=fu,yv=new C(0,1,0);function Gl(i){const t=Hn(i),e=Ar();return{time:i,pos:new C(t.pose.pos[0],t.pose.pos[1],t.pose.pos[2]),q:new Gi(t.pose.quat[0],t.pose.quat[1],t.pose.quat[2],t.pose.quat[3]),vel:new C(e.velocity[0],e.velocity[1],e.velocity[2]),acc:new C(e.acc[0],e.acc[1],e.acc[2]),normal:new C(e.normal[0],e.normal[1],e.normal[2]),tangent:new C(e.tangent[0],e.tangent[1],e.tangent[2]),thrust:new C(e.thrust[0],e.thrust[1],e.thrust[2]),suctionVector:new C(-e.normal[0]*e.fan*2e3*9.81,-e.normal[1]*e.fan*2e3*9.81,-e.normal[2]*e.fan*2e3*9.81),contactVector:new C(0,0,0),tireVector:void 0,fan:e.fan,fanPhase:e.fanPhase,wheelDistance:e.wheelDistance,contact:e.contact,contactKind:e.contactKind,roll:e.roll,pitch:e.pitch,rear:e.rear,lift:e.lift,front:void 0,attitude:e.attitude,rollAngularAcceleration:e.rollAccel,chapter:Number(t.flags.chapter??0),mass:2e3,altitude:Math.max(0,t.pose.pos[1]-.59),bodyCOM:.59}}function Sv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Me;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let g=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;s[u]===void 0&&(s[u]=[]),s[u].push(f.attributes[u]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in f.morphAttributes){if(!r.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const f=[];for(let g=0;g<i.length;++g){const u=i[g].index;for(let m=0;m<u.count;++m)f.push(u.getX(m)+h);h+=i[g].attributes.position.count}l.setIndex(f)}for(const h in s){const f=fh(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let g=0;g<f;++g){const u=[];for(let v=0;v<a[h].length;++v)u.push(a[h][v][g]);const m=fh(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function fh(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new hn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let g=0,u=h.count;g<u;g++)for(let m=0;m<e;m++){const v=h.getComponent(g,m);o.setComponent(g+f,m,v)}}else a.set(h.array,l);l+=h.count*e}return r!==void 0&&(o.gpuType=r),o}const Hr=new C;function _n(i,t,e,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Hr.copy(t),Hr[n]=0,Hr.normalize();const c=.5*a/(a+o),h=1-Hr.angleTo(i)/l;return Math.sign(Hr[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Wl extends _i{constructor(t=1,e=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new C,c=new C,h=new C(t,e,n).divideScalar(2).subScalar(s),f=this.attributes.position.array,g=this.attributes.normal.array,u=this.attributes.uv.array,m=f.length/6,v=new C,p=.5/a;for(let d=0,M=0;d<f.length;d+=3,M+=2)switch(l.fromArray(f,d),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[d+0]=h.x*Math.sign(l.x)+c.x*s,f[d+1]=h.y*Math.sign(l.y)+c.y*s,f[d+2]=h.z*Math.sign(l.z)+c.z*s,g[d+0]=c.x,g[d+1]=c.y,g[d+2]=c.z,Math.floor(d/m)){case 0:v.set(1,0,0),u[M+0]=_n(v,c,"z","y",s,n),u[M+1]=1-_n(v,c,"y","z",s,e);break;case 1:v.set(-1,0,0),u[M+0]=1-_n(v,c,"z","y",s,n),u[M+1]=1-_n(v,c,"y","z",s,e);break;case 2:v.set(0,1,0),u[M+0]=1-_n(v,c,"x","z",s,t),u[M+1]=_n(v,c,"z","x",s,n);break;case 3:v.set(0,-1,0),u[M+0]=1-_n(v,c,"x","z",s,t),u[M+1]=1-_n(v,c,"z","x",s,n);break;case 4:v.set(0,0,1),u[M+0]=1-_n(v,c,"x","y",s,t),u[M+1]=1-_n(v,c,"y","x",s,e);break;case 5:v.set(0,0,-1),u[M+0]=_n(v,c,"x","y",s,t),u[M+1]=1-_n(v,c,"y","x",s,e);break}}static fromJSON(t){return new Wl(t.width,t.height,t.depth,t.segments,t.radius)}}function Ht(i,t,e,n=[0,0,0],r=[0,0,0]){const s=new je(i,t);return s.position.set(...n),s.rotation.set(...r),s.castShadow=!0,s.receiveShadow=!0,e&&e.add(s),s}function pt(i,t,e,n=[0,0,0],r=0,s=[0,0,0]){const a=r>0?new Wl(...e,2,r):new _i(...e);return Ht(a,t,i,n,s)}function Ee(i,t,e,n,r=.1,s=!1){const a=new C(...e),o=new C(...n),l=o.clone().sub(a),c=s?new _i(r,l.length(),r):new Be(r/2,r/2,l.length(),8),h=Ht(c,t,i);return h.position.copy(a.add(o).multiplyScalar(.5)),h.quaternion.setFromUnitVectors(new C(0,1,0),l.normalize()),h}function Ne(i,t,e,n,r){const s=[],a=[],o=[];for(let c=0;c<=e;c++)for(let h=0;h<=n;h++){const f=r(c/e,h/n);s.push(...f),a.push(c/e,h/n)}for(let c=0;c<e;c++)for(let h=0;h<n;h++){const f=c*(n+1)+h,g=f+n+1;o.push(f,f+1,g,g,f+1,g+1)}const l=new Me;return l.setAttribute("position",new ne(s,3)),l.setAttribute("uv",new ne(a,2)),l.setIndex(o),l.computeVertexNormals(),Ht(l,t,i)}function Le(i,t,e,n=!1){const r=[],s=[];e.forEach(o=>r.push(...o));for(let o=1;o<e.length-1;o++)s.push(0,o,o+1);const a=new Me;return a.setAttribute("position",new ne(r,3)),a.setIndex(s),a.computeVertexNormals(),n&&(t.side=ee),Ht(a,t,i)}function oe(i,t,e,n=.007,r=48,s=!1){const a=new Il(e.map(o=>new C(...o)),s);return Ht(new Nl(a,r,n,5,s),t,i)}function Oe(i){i.updateMatrixWorld(!0);const t=new Map,e=[],n=new pe().copy(i.matrixWorld).invert();i.traverse(r=>{if(!r.isMesh||r.userData.dynamic||Array.isArray(r.material)||r.parent!==i)return;const s=r.geometry.clone(),a=new pe().multiplyMatrices(n,r.matrixWorld);s.applyMatrix4(a);const o=s.index?s.toNonIndexed():s;o.attributes.normal||o.computeVertexNormals(),o.attributes.uv||o.setAttribute("uv",new ne(new Float32Array(o.attributes.position.count*2),2));for(const l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);t.has(r.material)||t.set(r.material,[]),t.get(r.material).push(o),e.push(r)}),e.forEach(r=>{i.remove(r),r.geometry.dispose()});for(const[r,s]of t){const a=Sv(s,!1);a&&Ht(a,r,i),s.forEach(o=>o.dispose())}}function Zr(i){for(const t of[...i.children])if(t.isGroup){Zr(t),t.updateMatrix();for(const e of[...t.children])e.applyMatrix4(t.matrix),i.add(e);i.remove(t)}}function An(i,t,e,n,r=[0,1,0],s=48){const a=Ht(new Ul(e.map(o=>new ft(...o)),s),t,i,n);return a.quaternion.setFromUnitVectors(new C(0,1,0),new C(...r).normalize()),a}function Mu(i,t={}){const e=document.createElement("canvas");e.width=t.width||1024,e.height=t.height||128;const n=e.getContext("2d");t.bg&&(n.fillStyle=t.bg,n.fillRect(0,0,e.width,e.height)),n.fillStyle=t.color||"#cbd1d4",n.textAlign="center",n.textBaseline="middle",n.font=`${t.weight||500} ${t.fontSize||58}px "Satoshi", sans-serif`,n.fillText(i,e.width/2,e.height/2);const r=new ds(e);return r.colorSpace=Ze,r}function yu(i=1381){let t=i;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function jr(i=512,t="concrete"){const e=document.createElement("canvas");e.width=e.height=i;const n=e.getContext("2d"),r=n.createImageData(i,i),s=yu();for(let o=0;o<i;o++)for(let l=0;l<i;l++){const c=(o*i+l)*4;let h;if(t==="carbon"){const f=Math.floor(l/8),g=Math.floor(o/8);h=((f+g)%2===0?30:15)+s()*8+4*Math.sin(((f+g)%2===0?l:o)*Math.PI/2)}else t==="metal"?h=135+s()*18+8*Math.sin(l*.035)+4*Math.sin(o*.65):t==="rubber"?h=(l%96<5||l%96>90?25:85)+s()*22+(Math.sin(l*.7+o*.08)>.92?-20:0):h=122+s()*44+12*Math.sin(l*.06)*Math.sin(o*.04);r.data[c]=r.data[c+1]=r.data[c+2]=h,r.data[c+3]=255}n.putImageData(r,0,0);const a=new ds(e);return a.wrapS=a.wrapT=Qr,a.anisotropy=8,a}function Ev(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=yu(940);for(let n=0;n<45;n++){const r=64+(e()-.5)*55,s=64+(e()-.5)*55,a=10+e()*27,o=t.createRadialGradient(r,s,0,r,s,a);o.addColorStop(0,`rgba(255,255,255,${.04+e()*.11})`),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,128,128)}return new ds(i)}function wv(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,.8)"),e.addColorStop(.08,"rgba(255,255,255,.35)"),e.addColorStop(.28,"rgba(255,255,255,.08)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new ds(i)}function bv(){const i=document.createElement("canvas");i.width=256,i.height=128;const t=i.getContext("2d");t.scale(2,1);const e=t.createRadialGradient(64,64,16,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.38,"rgba(255,255,255,.92)"),e.addColorStop(.68,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new ds(i)}function Tv(i){const t=new Vh;t.background=new It(2369842);const e=new je(new ya(80,32,16),new Ie({color:1382686,side:Qe}));t.add(e);const n=(a,o,l,c=[0,0,0])=>{const h=new je(new kn(...l),new Ie({color:a,side:ee}));h.position.set(...o),h.rotation.set(...c),t.add(h)};n(new It(4,4,3.8),[0,9,0],[16,8],[-Math.PI/2,0,0]),n(new It(2.5,2.6,2.9),[6,4,9],[12,6],[0,Math.PI,0]),n(new It(.75,.86,1.15),[-10,3,-7],[12,5],[0,.8,0]),n(new It(.9,.13,.09),[-6,1.4,10],[12,.3],[0,Math.PI,0]),n(new It(.5,.55,.65),[10,2,-4],[6,5],[0,-Math.PI/2,0]);const r=new hl(i);r.compileCubemapShader();const s=r.fromScene(t,.055,.1,120);return t.traverse(a=>{a.geometry?.dispose(),a.material?.dispose()}),r.dispose(),s.texture}const dh=9.81,ph=2e3,_l=.59,_e={x:-3,z:5,radius:10,width:4.8,deckAngle:185*Math.PI/180},cn=(i,t=0,e=1)=>Math.max(t,Math.min(e,i)),de=(i,t,e)=>i+(t-i)*e;function mh(i){const t=i.mass??ph,e=new C(0,-t*dh,0),n=i.suctionVector?.clone()??i.normal.clone().multiplyScalar(-i.fan*ph*dh),r=i.contactVector?.clone()??i.normal.clone().multiplyScalar(i.contact?i.normalN:0),s=i.thrust.clone(),a=i.tireVector?.clone()??(i.contact?i.acc.clone().multiplyScalar(t).sub(e).sub(n).sub(r).sub(s):new C);return[{id:"gravity",name:"Gravity",color:"#edc18f",vector:e},{id:"suction",name:"Suction",color:"#8ecde5",vector:n},{id:"contact",name:"Road contact",color:"#d7e3e8",vector:r},{id:"tire",name:"Tire friction",color:"#8dc7ac",vector:a},{id:"thrust",name:"Gas thrust",color:"#f97d70",vector:s}]}function Un(i,t){for(let e=1;e<t.length;e++)if(i<=t[e][0]){const n=t[e-1],r=t[e];return de(n[1],r[1],cn((i-n[0])/(r[0]-n[0])))}return t.at(-1)[1]}const vo=i=>Un(i,[[-2.44,.87],[-2.2,1],[-1.5,1.035],[-.6,.978],[.5,.965],[1.43,1.015],[1.9,.986],[2.4,.864]]),Av=i=>Un(i,[[-2.44,.78],[-2.2,.795],[-1.5,.865],[-.9,.82],[.6,.77],[1.03,.723],[1.55,.634],[2.4,.465]]),gh=i=>Un(i,[[-2.44,.785],[-2.15,.805],[-1.47,.865],[-.9,.79],[.3,.735],[.9,.775],[1.43,.87],[1.85,.724],[2.4,.464]]);function Rv(){const i=new te;i.name="Roadster";const t=new te;t.position.y=-_l,i.add(t);const e=new te,n=new te,r=new te,s=new te;t.add(e,n,r,s);const a=jr(512,"carbon");a.repeat.set(30,30);const o=jr(256,"metal");o.repeat.set(8,8);const l=jr(512,"rubber");l.repeat.set(8,1);const c=new zn({color:14869990,metalness:.4,roughness:.24,clearcoat:1,clearcoatRoughness:.16,envMapIntensity:1.05,side:ee}),h=c.clone();h.color.set(13949662),h.roughness=.28;const f=new Zt({color:461067,roughness:.4,metalness:.45,side:ee}),g=new zn({color:1382684,metalness:.3,roughness:.35,bumpMap:a,bumpScale:.0025,clearcoat:.55,side:ee}),u=new zn({color:2631466,metalness:.17,roughness:.11,clearcoat:1,clearcoatRoughness:.07,envMapIntensity:1.8,side:ee}),m=new Zt({color:11581117,metalness:1,roughness:.23,side:ee}),v=new Zt({color:3423042,metalness:.9,roughness:.32,side:ee}),p=new Zt({color:10989493,metalness:.62,roughness:.29,envMapIntensity:1.1,side:ee}),d=new Zt({color:11575417,metalness:.86,roughness:.29,side:ee}),M=new Zt({color:1052947,metalness:0,roughness:.92,bumpMap:l,bumpScale:.006,side:ee}),y=new Zt({color:8225414,metalness:0,roughness:.92,bumpMap:o,bumpScale:.001}),_=new Ie({color:new It(3.6,3.75,4),toneMapped:!1}),w=new Ie({color:new It(1.3,.0015,8e-4),toneMapped:!1}),T=new Ie({color:new It(1.7,.37,.025),toneMapped:!1}),R=new Zt({color:2239022,roughness:.6});Ne(e,c,110,28,(F,b)=>{const Mt=de(-2.44,2.4,F),et=(b*2-1)*vo(Mt),rt=de(Av(Mt),gh(Mt),Math.pow(Math.abs(b*2-1),2.4));return[Mt,rt,et]});for(const F of[-1,1]){const b=new Dl;b.moveTo(-2.44,.785);for(let Q=1;Q<=85;Q++){const Ut=de(-2.44,2.4,Q/85);b.lineTo(Ut,gh(Ut))}b.lineTo(2.4,.255),b.lineTo(1.89,.235),b.lineTo(1.89,.398),b.absarc(1.46,.398,.43,0,Math.PI,!1),b.lineTo(1.03,.235),b.lineTo(-1.015,.235),b.lineTo(-1.015,.398),b.absarc(-1.45,.398,.435,0,Math.PI,!1),b.lineTo(-1.885,.255),b.lineTo(-2.44,.4),b.closePath();const Mt=new Ma(b,48),et=Mt.attributes.position;for(let Q=0;Q<et.count;Q++){const Ut=et.getX(Q),yt=et.getY(Q);et.setZ(Q,F*(vo(Ut)-.03*Math.max(0,(.5-yt)/.4)))}Mt.computeVertexNormals(),Ht(Mt,h,e);for(const Q of[-1.45,1.46]){const Ut=[];for(let Ot=0;Ot<=44;Ot++){const Ae=Math.PI*Ot/44;Ut.push([Q+.439*Math.cos(Ae),.398+.439*Math.sin(Ae),F*(vo(Q+.439*Math.cos(Ae))+.002)])}oe(e,c,Ut,.014,56);const yt=Ut.map(Ot=>[Ot[0],Ot[1]-.01,Ot[2]-F*.028]);oe(n,f,yt,.019,56)}const rt=[[-1.05,.238,F*.98],[.97,.238,F*.972],[.99,.15,F*1.006],[-1.12,.14,F*1.015]];Le(n,g,rt,!0),oe(n,v,[[-1.04,.222,F*.992],[.92,.222,F*.989]],.008,3),oe(e,R,[[.87,.746,F*.968],[.71,.63,F*.974],[.48,.26,F*.968],[-.78,.254,F*.984],[-.92,.58,F*.983],[-1.03,.784,F*.986]],.0028,60),pt(e,v,[.21,.014,.007],[-.61,.699,F*.985],.003),Le(n,f,[[.86,.666,F*1.001],[1.1,.695,F*1.018],[1.09,.634,F*1.018],[.85,.612,F*.995]],!0),pt(n,T,[.14,.012,.007],[1,.663,F*1.02],.003),Ee(n,f,[.8,.8,F*.88],[.72,.81,F*1.075],.025),pt(n,f,[.19,.065,.12],[.73,.825,F*1.08],.025,[0,.15*F,0])}Ne(e,u,38,30,(F,b)=>{const Mt=de(1.04,.1,F),et=de(.795,.681,F),rt=(2*b-1)*et,Q=de(.736,1.176,F)+.048*Math.sin(Math.PI*F)+.026*(1-(2*b-1)**2);return[Mt,Q,rt]}),Ne(e,u,30,24,(F,b)=>{const Mt=de(.1,-.81,F),et=de(.681,.67,F),rt=(2*b-1)*et,Q=1.176+.021*Math.sin(Math.PI*F)+.019*(1-(2*b-1)**2);return[Mt,Q,rt]}),Ne(e,u,35,26,(F,b)=>{const Mt=de(-.81,-1.9,F),et=de(.67,.405,F),rt=(2*b-1)*et,Q=de(1.176,.837,F)+.024*Math.sin(Math.PI*F)+.015*(1-(2*b-1)**2);return[Mt,Q,rt]});for(const F of[-1,1]){const b=[[1.055,.742,F*.802],[.105,1.177,F*.684],[-.79,1.18,F*.678],[-1.57,.884,F*.834]];oe(e,c,b,.025,60);const Mt=[[1.008,.749,F*.811],[.096,1.154,F*.705],[-.758,1.155,F*.696],[-1.5,.899,F*.835],[-1.38,.835,F*.909],[-.22,.783,F*.961]];Le(e,u,Mt,!0),oe(e,f,Mt,.01,48,!0),oe(e,R,[[-.72,1.157,F*.708],[-.93,.819,F*.934]],.007,6),Le(e,c,[[-.8,1.175,F*.701],[-1.62,.875,F*.874],[-2.2,.8,F*.995],[-1.9,.849,F*.42],[-.8,1.192,F*.666]],!0),oe(e,c,[[1.05,.751,F*.812],[-.12,.792,F*.957],[-1.39,.84,F*.923]],.013,36)}Le(e,c,[[2.4,.465,-.864],[2.4,.465,.864],[2.42,.282,.91],[2.42,.282,-.91]],!0),pt(n,f,[.035,.057,1.79],[2.422,.445,0],.01),pt(n,_,[.039,.011,1.751],[2.444,.461,0],.003),pt(n,f,[.06,.145,1.77],[2.429,.335,0],.019),pt(n,g,[.31,.05,1.88],[2.37,.215,0],.018);for(const F of[-1,1]){pt(n,_,[.027,.18,.01],[2.437,.365,F*.885],.003,[0,0,-.1]),Le(e,c,[[2.4,.452,F*.878],[2.1,.571,F*.967],[2.12,.27,F*.977],[2.39,.255,F*.91]],!0),pt(n,f,[.1,.075,.29],[2.454,.305,F*.7],.009);for(let b=0;b<4;b++)pt(n,v,[.034,.067,.007],[2.46,.305,F*.7+(b-1.5)*.055],.001);oe(e,R,[[2.15,.516,F*.63],[1.52,.656,F*.71],[1.03,.743,F*.8]],.0032,24)}Le(e,c,[[-2.44,.786,-.87],[-2.44,.786,.87],[-2.48,.54,.92],[-2.48,.54,-.92]],!0),pt(n,f,[.065,.059,1.87],[-2.471,.714,0],.005),pt(n,w,[.07,.014,1.79],[-2.508,.722,0],.003),pt(n,g,[.16,.27,1.83],[-2.438,.44,0],.019),pt(n,f,[.1,.2,1.33],[-2.516,.34,0],.012),pt(n,g,[.72,.065,1.78],[-2.2,.19,0],.02);for(let F=0;F<7;F++){const b=(F-3)*.265;Le(n,g,[[-2.63,.15,b],[-2.55,.33,b],[-1.73,.25,b],[-1.71,.15,b]],!0)}const L=[],E=(F,b,Mt,et)=>{const rt=An(n,d,[[.05,0],[.043,.015],[.031,.095],[.033,.135],[.065,.235],[.088,.285],[.09,.298],[.076,.3],[.064,.264],[.028,.13],[.026,.08],[.04,.01]],F,b,48),Q=new C(...F).addScaledVector(new C(...b),.012);Ht(new Tn(.039,32),f,n,Q.toArray()).quaternion.setFromUnitVectors(new C(0,0,1),new C(...b));const Ut=new C(...F).addScaledVector(new C(...b),.298);return L.push({position:Ut.clone().sub(new C(0,_l,0)),direction:new C(...b),type:Mt,index:et}),rt};[-.59,-.197,.197,.59].forEach((F,b)=>E([-2.3,.342,F],[-1,0,0],"rear",b));for(const F of[-1.53,1.53])for(const b of[-.79,.79])pt(n,f,[.3,.065,.28],[F,.191,b],.035),E([F,.31,b],[0,-1,0],"lift",L.length);for(const F of[-.58,.58])E([2.17,.319,F],[1,0,0],"front",L.length);const x=new te;x.position.set(-2.065,.735,0),t.add(x),pt(x,g,[.42,.039,1.77],[0,.09,0],.018,[0,0,-.065]),pt(x,c,[.42,.026,1.77],[0,.114,0],.012,[0,0,-.065]);for(const F of[-.59,.59])Ee(x,v,[.09,-.04,F],[-.02,.085,F],.03),Ee(x,m,[-.06,-.05,F],[-.1,.074,F],.012);Oe(x),pt(n,g,[3.8,.073,1.6],[0,.142,0],.09);for(let F=0;F<12;F++){const b=-1.55+F*.28;pt(n,v,[.01,.008,1.25],[b,.097,0],.001)}const P=new zn({color:2570301,roughness:.32,metalness:.4,bumpMap:a,bumpScale:.003,clearcoat:.65}),D=new Ie({map:Mu("HIGH PRESSURE  /  AIR",{fontSize:48,color:"#a8b3ba"}),transparent:!0,depthWrite:!1});for(const F of[-.43,.43]){An(s,P,[[0,-.97],[.09,-.945],[.17,-.88],[.205,-.74],[.208,.7],[.17,.84],[.08,.92],[0,.94]],[0,.45,F],[1,0,0],64);for(const b of[-.62,.58])Ht(new ln(.214,.014,8,48),m,s,[b,.45,F],[0,Math.PI/2,0]);pt(s,D,[.67,.001,.105],[0,.657,F],0),An(s,d,[[.05,0],[.05,.08],[.034,.08],[.034,.15]],[.94,.45,F],[1,0,0],24),oe(s,m,[[1.075,.45,F],[1.12,.47,F],[1.14,.48,0],[.96,.51,0]],.018,24)}pt(s,d,[.34,.17,.25],[1.06,.45,0],.022),pt(s,v,[.18,.2,.13],[.89,.46,0],.02);for(const F of[-.77,.77]){oe(s,m,[[1.13,.45,0],[1.21,.37,F],[.5,.28,F],[-1.7,.28,F],[-2.18,.34,F*.75]],.016,55);for(const b of[-1.53,1.53])oe(s,m,[[b-.1,.29,F],[b,.29,F],[b,.22,F]],.015,10);pt(s,d,[.18,.11,.13],[1.25,.29,F],.018),pt(s,d,[.18,.11,.13],[-1.49,.29,F],.018)}for(const F of[-.9,.9])pt(s,v,[3.68,.17,.078],[0,.33,F],.03);Oe(s),s.visible=!1;const B=new te;B.name="Suction extractors",t.add(B);const V=[],G=[],W=[],K=new Zt({color:12113119,metalness:.75,roughness:.3,side:ee}),H=new Zt({color:5278621,metalness:.65,roughness:.33}),U=new Ie({color:8903925,transparent:!0,opacity:.65,depthWrite:!1}),$=new Ie({color:7720167,transparent:!0,opacity:.1,depthWrite:!1,side:ee}),nt=new Ie({color:6605802,transparent:!0,opacity:.07,depthWrite:!1}),Dt=pt(B,nt,[3.05,.065,1.35],[-.04,.23,0],.04);Dt.castShadow=!1;for(const F of[-1,1]){const b=F*.47,Mt=new te;Mt.position.set(-1.7,.5,b),Mt.rotation.z=Math.PI/2,B.add(Mt),An(Mt,H,[[.29,-.12],[.325,-.09],[.329,.09],[.308,.14],[.283,.12],[.283,-.09],[.29,-.12]],[0,0,0],[0,1,0],48);const et=new te;et.position.y=.07,Mt.add(et),Ht(new Be(.06,.076,.08,24),m,et);for(let rt=0;rt<9;rt++){const Q=new te;Q.rotation.y=rt*Math.PI*2/9,et.add(Q),Le(Q,K,[[.06,0,-.018],[.259,-.035,-.1],[.278,.007,.008],[.104,.04,.053]],!0),Zr(Q),Oe(Q)}Zr(et),Oe(et),V.push(et);for(let rt=0;rt<3;rt++){const Q=rt*2*Math.PI/3;Ee(Mt,m,[Math.cos(Q)*.08,.145,Math.sin(Q)*.08],[Math.cos(Q)*.287,.145,Math.sin(Q)*.287],.012)}Oe(Mt),oe(B,$,[[.9,.23,b],[-.4,.23,b],[-1.2,.27,b],[-1.48,.5,b]],.16,28);for(const rt of[-.6,.65]){const Q=new Il([new C(rt,.2,F*1.18),new C(rt,.24,F*.63),new C(-.85,.25,b),new C(-1.35,.42,b),new C(-1.7,.5,b),new C(-2.18,.5,b),new C(-2.9,.54,F*.62)]);G.push(Q);const Ut=new xa(new Me().setFromPoints(Q.getPoints(48)),new fs({color:7390691,transparent:!0,opacity:.18,depthWrite:!1}));B.add(Ut);for(let yt=0;yt<4;yt++){const Ot=Ht(new ps(.055,.17,7),U,B);Ot.castShadow=!1,Ot.receiveShadow=!1,W.push({arrow:Ot,curve:Q,phase:yt/4,side:F})}}}B.visible=!1,pt(r,g,[2.15,.12,1.49],[-.11,.47,0],.05);for(const F of[-.42,.42]){pt(r,y,[.56,.1,.45],[-.32,.48,F],.05,[0,0,.06]),pt(r,y,[.105,.48,.44],[-.66,.7,F],.045,[0,0,-.23]),pt(r,y,[.12,.19,.26],[-.75,.985,F],.036,[0,0,-.18]);for(const b of[-1,1])pt(r,f,[.4,.14,.075],[-.32,.55,F+b*.22],.028);oe(r,f,[[-.73,.98,F+.17],[-.55,.7,F-.11],[-.36,.51,F-.19]],.019,20)}pt(r,g,[.33,.21,1.39],[.72,.68,0],.065),pt(r,f,[.022,.25,.37],[.51,.81,0],.012,[0,0,-.1]);const St=new Ie({color:2306105});pt(r,St,[.025,.207,.337],[.494,.819,0],.002,[0,0,-.1]);const Ft=new te;Ft.position.set(.46,.794,.42),r.add(Ft),oe(Ft,f,[[0,.062,-.148],[0,.102,-.104],[0,.09,.104],[0,.058,.148],[0,-.06,.141],[0,-.08,.06],[0,-.05,-.06],[0,-.073,-.143]],.014,42,!0),pt(Ft,v,[.06,.079,.19],[0,0,0],.018),Oe(Ft),Oe(r);const Rt=[];for(const F of[-1.45,1.46])for(const b of[-1,1]){const Mt=new te;Mt.position.set(F,.398,b*.92),Mt.scale.set(1.105,1.105,1.035),t.add(Mt);const et=new te;Mt.add(et),An(et,M,[[.259,-.139],[.306,-.155],[.342,-.138],[.357,-.098],[.36,-.055],[.36,.055],[.357,.098],[.342,.138],[.306,.155],[.259,.139],[.259,-.139]],[0,0,0],[0,0,1],80),An(et,v,[[.249,-.139],[.26,-.132],[.267,.138],[.25,.143],[.24,.118],[.239,-.12],[.249,-.139]],[0,0,0],[0,0,1],64);const rt=b*.15;Ht(new ln(.269,.007,8,64),m,et,[0,0,rt]),Ht(new ln(.244,.006,8,64),v,et,[0,0,rt+b*.004]);for(let Q=0;Q<5;Q++){const Ut=new te;Ut.rotation.z=Q*2*Math.PI/5,et.add(Ut),Le(Ut,p,[[.039,-.019,rt+b*.002],[.26,-.004,rt+b*.002],[.207,.145,rt-b*.005],[.062,.071,rt+b*.01]],!0),Le(Ut,f,[[.05,-.03,rt+b*.013],[.258,-.018,rt+b*.008],[.26,.006,rt+b*.009],[.05,.019,rt+b*.014]],!0),Ee(Ut,v,[.079,.047,rt+b*.018],[.25,.025,rt+b*.014],.006),Oe(Ut)}Ht(new Be(.058,.058,.028,32),v,et,[0,0,rt+b*.02],[Math.PI/2,0,0]),Ht(new ln(.049,.003,6,32),m,et,[0,0,rt+b*.036]);for(let Q=0;Q<5;Q++){const Ut=Q*Math.PI*2/5;Ht(new Be(.009,.009,.012,6),m,et,[Math.cos(Ut)*.079,Math.sin(Ut)*.079,rt+b*.008],[Math.PI/2,0,0])}Ht(new Be(.224,.224,.018,64),m,Mt,[0,0,b*.098],[Math.PI/2,0,0]);for(let Q=0;Q<28;Q++){const Ut=Q*Math.PI*2/28;Ht(new Tn(.006,5),f,Mt,[Math.cos(Ut)*.193,Math.sin(Ut)*.193,b*.11],b===1?[0,0,0]:[0,Math.PI,0])}pt(Mt,d,[.07,.195,.05],[.167,.025,b*.119],.027,[0,0,-.24]);for(const Q of[-.074,-.026,.026,.074])Ht(new ln(.359,.0023,5,80),f,et,[0,0,Q]);Zr(et),Oe(et),Oe(Mt),Rt.push({root:Mt,spin:et})}Oe(e),Oe(n);const Y=new Te;Y.position.set(11,.1,0),t.add(Y);const J=new iu(14149105,38,26,.36,.8,1.6);J.position.set(2.3,.51,0),J.target=Y,t.add(J);const ot=[c,h,u];let Et=-1;function vt(F){if(!(Math.abs(F-Et)<.001)){Et=F;for(const b of ot)b.transparent=F>.001,b.opacity=b===u?de(1,.035,F):de(1,.085,F),b.depthWrite=F<.5,b.needsUpdate=!0;r.visible=F<.6,s.visible=F>.05,B.visible=F>.05}}function kt(F,b=0){i.position.copy(F.pos),i.quaternion.copy(F.q);for(const et of Rt)et.spin.rotation.z=-F.wheelDistance/.398;V.forEach((et,rt)=>et.rotation.y=F.fanPhase*.052*(rt?1:-1));const Mt=cn(F.fan/2);nt.opacity=.035+Mt*.12,U.opacity=.2+Mt*.65;for(const{arrow:et,curve:rt,phase:Q}of W){et.visible=Mt>.005;const Ut=(F.fanPhase*.0045+Q)%1;et.position.copy(rt.getPointAt(Ut)),et.quaternion.setFromUnitVectors(new C(0,1,0),rt.getTangentAt(Ut).normalize())}x.position.y=.735+.155*cn(F.fan/2),x.rotation.z=-.07*cn(F.fan/2),vt(b),J.intensity=b>.5?5:38}return{group:i,model:t,shell:e,detail:n,hardware:s,fanSystem:B,flowArrows:W,flowPaths:G,interior:r,wheels:Rt,fans:V,wing:x,nozzles:L,update:kt,setCutaway:vt}}function Vr(i,t=3489611){const e=new te,n=new zn({color:t,metalness:.5,roughness:.26,clearcoat:1,clearcoatRoughness:.2}),r=new zn({color:330257,metalness:.12,roughness:.17,clearcoat:.55,envMapIntensity:.45}),s=new Zt({color:724240,roughness:.8}),a=new Zt({color:6646384,metalness:.8,roughness:.25}),o=new Ie({color:new It(1.1,1.15,1.2)});if(i==="semi"){Ne(e,n,18,20,(l,c)=>{const h=de(-2.35,2.3,l),f=Un(h,[[-2.35,1.04],[-1,1.15],[1.7,1.03],[2.3,.77]]),g=Un(h,[[-2.35,3.7],[-1.1,3.98],[.2,3.82],[1.3,2.9],[2.3,1.15]]),u=(c*2-1)*f;return[h,g-.17*(c*2-1)**2,u]});for(const l of[-1,1])Le(e,n,[[-2.35,.61,l*1.04],[-2.35,3.7,l*1.04],[-1.1,3.98,l*1.15],[.2,3.82,l*1.12],[1.3,2.9,l*1.06],[2.3,1.15,l*.77],[2.3,.42,l*.85]],!0),Le(e,r,[[1.41,2.8,l*1.038],[.15,3.23,l*1.126],[-1.5,3.2,l*1.105],[-1.48,2.01,l*1.08],[.81,1.89,l*1.057]],!0),oe(e,a,[[-1.58,.68,l*1.09],[-1.55,3.4,l*1.1]],.007,3);Le(e,r,[[.38,3.46,-1.105],[.38,3.46,1.105],[1.47,2.65,1.01],[1.47,2.65,-1.01]],!0),pt(e,n,[.17,.83,1.8],[2.23,.88,0],.08),pt(e,s,[.2,.24,1.8],[2.25,.54,0],.06);for(const l of[-1,1])pt(e,o,[.19,.027,.49],[2.325,1.07,l*.55],.004);pt(e,s,[1.6,.24,1.65],[-2.8,.7,0],.05);for(const l of[-2.8,-1.9,1.39])for(const c of[-1,1])An(e,s,[[.25,-.18],[.43,-.2],[.47,-.13],[.47,.13],[.43,.2],[.25,.18]],[l,.47,c*1.04],[0,0,1],32),Ht(new Be(.31,.31,.035,28),a,e,[l,.47,c*1.245],[Math.PI/2,0,0])}else{const l=i==="truck",c=l?1.02:.96,h=l?.425:.365,f=l?1.52:1.44,g=l?[[-2.48,.85],[-1.52,1.05],[0,1],[1.52,1.04],[2.48,.78]]:[[-2.4,.66],[-1.44,.84],[-.5,.77],[.6,.75],[1.44,.84],[2.4,.53]],u=l?[[-2.48,.93],[-1.65,1.03],[.4,1.03],[1.52,1.02],[2.48,.83]]:[[-2.4,.69],[-1.6,.86],[-.7,.82],[.5,.79],[1.3,.75],[2.4,.54]],m=l?2.48:2.4,v=_=>c*(.94+.065*Math.exp(-(((Math.abs(_)-f)/.5)**2))-.08*(Math.abs(_)/m)**6);Ne(e,n,72,24,(_,w)=>{const T=de(-m,m,_),R=w*2-1;return[T,de(Un(T,u),Un(T,g),Math.abs(R)**2.2),v(T)*R]});const p=h+.06;for(const _ of[-1,1]){const w=new Dl;w.moveTo(-m,Un(-m,g));for(let x=1;x<=72;x++){const P=de(-m,m,x/72);w.lineTo(P,Un(P,g))}w.lineTo(m,.23),w.lineTo(f+p,.23),w.lineTo(f+p,h),w.absarc(f,h,p,0,Math.PI,!1),w.lineTo(f-p,.21),w.lineTo(-f+p,.21),w.lineTo(-f+p,h),w.absarc(-f,h,p,0,Math.PI,!1),w.lineTo(-f-p,.25),w.lineTo(-m,.3),w.closePath();const T=new Ma(w,32),R=T.attributes.position;for(let x=0;x<R.count;x++){const P=R.getX(x),D=R.getY(x);R.setZ(x,_*(v(P)-.035*Math.max(0,.65-D)))}T.computeVertexNormals(),Ht(T,n,e);for(const x of[-f,f]){const P=[];for(let D=0;D<=30;D++){const B=D/30*Math.PI;P.push([x+Math.cos(B)*p,h+Math.sin(B)*p,_*(v(x+Math.cos(B)*p)+.004)])}oe(e,l?s:n,P,l?.036:.01,36)}pt(e,s,[2.05,.09,.065],[0,.215,_*(c-.045)],.015),oe(e,s,[[.35,.24,_*(v(.35)-.02)],[.35,.76,_*v(.35)]],.003,2),pt(e,a,[.16,.012,.009],[-.05,.713,_*(v(-.05)+.005)],.002);const L=l?[[1.15,1.1,_*.945],[.12,1.63,_*.83],[-.98,1.61,_*.83],[-1.6,1.16,_*.93]]:[[1.1,.811,_*.859],[.23,1.298,_*.71],[-.73,1.306,_*.7],[-1.48,.884,_*.849],[-.8,.803,_*.912]];Le(e,r,L,!0),oe(e,s,L,.018,30,!0);const E=l?[[1.21,1.086,_*.955],[.12,1.663,_*.838],[-1.02,1.645,_*.842],[-1.7,1.13,_*.945]]:[[1.14,.8,_*.872],[.24,1.323,_*.723],[-.73,1.33,_*.716],[-1.56,.871,_*.871]];oe(e,n,E,l?.032:.038,38),oe(e,s,l?[[-.58,1.63,_*.837],[-.58,1.071,_*.951]]:[[-.45,1.31,_*.711],[-.6,.809,_*.915]],.013,6),pt(e,n,[.2,.075,.115],[.89,l?1.17:.86,_*1],.035),Ee(e,s,[.86,l?1.16:.835,_*.87],[.86,l?1.16:.835,_*1.01],.022)}if(l){Le(e,r,[[.13,1.657,-.815],[.13,1.657,.815],[1.27,1.08,.948],[1.27,1.08,-.948]],!0),Le(e,n,[[-1.05,1.66,-.84],[-1.05,1.66,.84],[.13,1.675,.84],[.13,1.675,-.84]],!0),Le(e,s,[[-2.4,.961,-.89],[-2.4,.961,.89],[-1.1,1.06,.88],[-1.1,1.06,-.88]],!0);for(let _=-2.3;_<-1.1;_+=.1)Ee(e,a,[_,1.018,-.86],[_,1.018,.86],.009)}else Ne(e,r,24,18,(_,w)=>{const T=de(1.12,.25,_),R=de(.86,.709,_),L=(w*2-1)*R;return[T,de(.808,1.323,_)+Math.sin(Math.PI*_)*.032+.015*(1-(2*w-1)**2),L]}),Ne(e,n,24,18,(_,w)=>{const T=de(.25,-.73,_),R=(w*2-1)*.706;return[T,1.323+.045*Math.sin(Math.PI*_)+.016*(1-(2*w-1)**2),R]}),Ne(e,r,24,18,(_,w)=>{const T=de(-.73,-1.59,_),R=de(.7,.83,_),L=(w*2-1)*R;return[T,de(1.332,.873,_)+.012*(1-(2*w-1)**2),L]});const d=v(m),M=Un(m,u);if(pt(e,n,[.16,M-.23,d*1.99],[m-.036,(M+.23)/2,0],l?.035:.095),pt(e,s,[.175,.105,d*1.51],[m+.018,.32,0],.028),pt(e,n,[.15,.32,v(-m)*1.97],[-m+.025,.46,0],.06),l)pt(e,o,[.06,.022,d*1.96],[m+.05,M-.025,0],.004);else for(const _ of[-1,1]){const w=[[m+.046,.535,_*.67],[m-.025,.591,_*.88],[m-.14,.641,_*.94],[m+.062,.567,_*.66]];Le(e,o,w,!0),oe(e,s,[[m+.057,.532,_*.64],[m-.12,.635,_*.94]],.021,8),oe(e,o,[[m+.069,.551,_*.66],[m-.12,.639,_*.94]],.009,8)}const y=new Ie({color:9249818});pt(e,y,[.07,.023,v(-m)*1.86],[-m-.048,.639,0],.005);for(const _ of[-f,f])for(const w of[-1,1]){const T=w*(c-.09);An(e,s,[[h*.73,-.135],[h*.93,-.145],[h,-.086],[h,.086],[h*.93,.145],[h*.73,.135]],[_,h,T],[0,0,1],48),Ht(new Be(h*.78,h*.78,.025,40),s,e,[_,h,T+w*.149],[Math.PI/2,0,0]),Ht(new ln(h*.79,.008,6,40),a,e,[_,h,T+w*.165]);for(let R=0;R<5;R++){const L=R*Math.PI*2/5,E=L+.47;Le(e,a,[[_+Math.cos(L)*h*.17,h+Math.sin(L)*h*.17,T+w*.17],[_+Math.cos(L)*h*.77,h+Math.sin(L)*h*.77,T+w*.17],[_+Math.cos(E)*h*.77,h+Math.sin(E)*h*.77,T+w*.166],[_+Math.cos(E)*h*.24,h+Math.sin(E)*h*.24,T+w*.172]],!0)}Ht(new Be(.048,.048,.02,16),a,e,[_,h,T+w*.177],[Math.PI/2,0,0])}}return Oe(e),e}function Cv(i){return{paint:new zn({color:i,metalness:.36,roughness:.26,clearcoat:1,clearcoatRoughness:.16}),glass:new zn({color:1384746,metalness:.18,roughness:.13,clearcoat:1,envMapIntensity:1.4,side:ee}),rubber:new Zt({color:1119257,roughness:.89}),metal:new Zt({color:11187644,metalness:.91,roughness:.25}),dark:new Zt({color:2436403,metalness:.6,roughness:.4}),seat:new Zt({color:3157032,roughness:.9}),white:new zn({color:14278363,metalness:.2,roughness:.37,clearcoat:.65}),red:new Zt({color:9314068,emissive:13183513,emissiveIntensity:.42,roughness:.24}),lamp:new Zt({color:14805483,emissive:13953261,emissiveIntensity:.9,roughness:.18})}}function Pv(i){const t=new te,e=new te,n=[],r=Cv(i.color);t.add(e);const s=(u,m,v,p=.02,d)=>pt(e,r[u]||u,m,v,p,d),a=(u,m,v,p=.035)=>Ee(e,r[u]||u,m,v,p),o=(u,m,v,p=.15,d="alloy")=>{const M=new te;M.position.set(u,v,m),t.add(M);const y=new te;M.add(y),An(y,r.rubber,[[v*.68,-p/2],[v*.91,-p*.57],[v,-p*.34],[v,p*.34],[v*.91,p*.57],[v*.68,p/2]],[0,0,0],[0,0,1],40);const _=v*.71;for(const w of[-1,1]){const T=w*(p*.5+.005);if(Ht(new ln(_,.009,6,32),r.metal,y,[0,0,T]),d==="racing"){Ht(new Be(_*.98,_*.98,.016,40),r.carbon,y,[0,0,T],[Math.PI/2,0,0]),Ht(new ln(v*.875,.006,5,48),r.tireMark,y,[0,0,T]);for(let R=0;R<10;R++){const L=R*Math.PI/5;Ht(new Tn(v*.031,8),r.metal,y,[Math.cos(L)*_*.76,Math.sin(L)*_*.76,T+w*.012],w>0?[0,0,0]:[0,Math.PI,0])}}else if(d==="steel"){Ht(new Be(_*.95,_*.95,.018,28),r.metal,y,[0,0,T],[Math.PI/2,0,0]);for(let R=0;R<8;R++){const L=R*Math.PI/4;Ht(new Tn(v*.07,10),r.dark,y,[Math.cos(L)*v*.47,Math.sin(L)*v*.47,T+w*.012],w>0?[0,0,0]:[0,Math.PI,0])}}else for(let R=0;R<(d==="spoke"?16:5);R++){const L=R*Math.PI*2/(d==="spoke"?16:5);Ee(y,r.metal,[0,0,T],[Math.cos(L)*_,Math.sin(L)*_,T],d==="spoke"?.008:.036)}Ht(new Be(v*.15,v*.15,.06,16),r.dark,y,[0,0,T],[Math.PI/2,0,0])}return Oe(y),n.push({spin:y,radius:v}),M},l=(u,m,v,p,d="alloy")=>{for(const M of[-u/2,u/2])for(const y of[-1,1])o(M,y*p/2,m,v,d)},c=(u,m,v=0,p=.43)=>{s("seat",[.48,.11,p],[u,m,v],.045),s("seat",[.1,.48,p],[u-.2,m+.24,v],.04,[0,0,-.12])},h=(u,m,v=0,p=.13)=>{const d=Ht(new ln(p,.012,8,28),r.dark,e,[u,m,v],[0,Math.PI/2-.3,0]);return a("metal",[u+.13,m-.33,v],[u,m,v],.024),d},f=u=>Le(e,r.glass,u,!0),g=(u,m,v,p)=>{for(const d of[-1,1])s("lamp",[.04,.12,.23],[u,v,d*p],.025),s("red",[.035,.14,.18],[m,v,d*p],.014)};if(i.id==="f1"){r.carbon=new Zt({color:1515559,roughness:.43,metalness:.48,side:ee}),r.tireMark=new Zt({color:14071116,roughness:.72}),r.paint.side=ee;const u=(p,d)=>{const M=d*(p.length-1),y=Math.min(p.length-2,Math.floor(M)),_=M-y;return p[y].map((w,T)=>de(w,p[y+1][T],_))},m=(p,d,M=0)=>Ne(e,r[p],60,40,(y,_)=>{const[w,T,R,L]=u(d,y),E=-_*Math.PI*2;return[w,T+Math.sin(E)*R,M+Math.cos(E)*L]});for(const p of[-1,1])o(1.7,p*.78,.35,.3,"racing"),o(-1.7,p*.75,.35,.39,"racing");s("carbon",[3.86,.044,1.48],[-.24,.125,0],.025),s("dark",[3.3,.035,.28],[-.25,.088,0],.012);for(const p of[-1,1]){for(const d of[1.7,-1.7]){for(const M of[.24,.44])a("carbon",[d-.53,M,p*.23],[d,.35,p*.66],.024),a("carbon",[d+.25,M,p*.23],[d,.35,p*.66],.024);a("metal",[d-.39,.52,p*.26],[d,.35,p*.66],.015),s("carbon",[.18,.18,.09],[d+.015,.35,p*.57],.025)}s("carbon",[2.72,.065,.075],[-.29,.18,p*.75],.015);for(let d=0;d<5;d++)s("carbon",[.55,.14,.014],[-1.91,.2,p*(.12+d*.12)],.003,[0,0,-.18])}const v=[[.28,.45,.17,.31],[.62,.46,.145,.27],[1.16,.43,.105,.19],[1.78,.37,.068,.125],[2.34,.285,.044,.086],[2.46,.278,.005,.012]];m("paint",v),Ne(e,r.white,60,1,(p,d)=>{const[M,y,_]=u(v,p);return[M,y+_+.004,(d-.5)*.047]});for(const p of[-1,1]){m("paint",[[-1.73,.3,.015,.035],[-1.32,.35,.1,.15],[-.74,.4,.145,.21],[-.12,.45,.165,.255],[.39,.46,.15,.26],[.67,.43,.09,.21]],p*.51),Ht(new Tn(.112,32),r.carbon,e,[.682,.43,p*.51],[0,Math.PI/2,0]).scale.set(1.75,.78,1),s("carbon",[.32,.045,.5],[.5,.33,p*.49],.025,[0,0,.14]);for(let d=0;d<7;d++)s("carbon",[.035,.012,.17],[-.53-d*.084,.545-d*.018,p*.59],.003,[0,0,-.16]);a("carbon",[.33,.6,p*.29],[.33,.69,p*.65],.016),s("paint",[.19,.065,.11],[.35,.69,p*.65],.025)}m("paint",[[-2.09,.29,.015,.022],[-1.7,.37,.09,.17],[-1.15,.48,.19,.23],[-.87,.61,.265,.21],[-.67,.65,.25,.12],[-.57,.64,.07,.06]]),Le(e,r.paint,[[-1.73,.47,0],[-1.64,.76,0],[-.84,.94,0],[-.85,.64,0]],!0),s("carbon",[1.04,.22,.61],[-.22,.395,0],.09),s("seat",[.58,.065,.35],[-.31,.49,0],.025),s("seat",[.09,.3,.36],[-.54,.58,0],.025,[0,0,-.28]),Ht(new ln(.275,.045,10,48),r.paint,e,[-.24,.57,0],[Math.PI/2,0,0]).scale.set(1.7,1,1),s("carbon",[.055,.12,.29],[.22,.59,0],.025,[0,0,-.3]),s("glass",[.015,.055,.1],[.251,.605,0],.008,[0,0,-.3]),oe(e,r.carbon,[[-.66,.67,-.29],[-.42,.84,-.33],[.17,.865,-.24],[.44,.81,0],[.17,.865,.24],[-.42,.84,.33],[-.66,.67,.29]],.029,60),a("carbon",[.44,.81,0],[.61,.51,0],.027),Ht(new Be(.116,.116,.17,32),r.paint,e,[-.72,.934,0],[0,0,-Math.PI/2]),Ht(new Tn(.089,32),r.carbon,e,[-.63,.934,0],[0,Math.PI/2,0]),Ne(e,r.carbon,16,36,(p,d)=>[2.19+.48*p,.15+.078*p*p+.022*Math.cos(d*Math.PI*2),(d-.5)*1.84]),Ne(e,r.paint,12,36,(p,d)=>[2.17+.21*p,.235+.062*p,(d-.5)*1.64]);for(const p of[-1,1])s("paint",[.48,.21,.028],[2.41,.225,p*.932],.016),a("carbon",[2.28,.17,p*.095],[2.28,.3,p*.095],.025),a("carbon",[-1.95,.31,p*.22],[-2.21,.88,p*.22],.043),s("carbon",[.48,.34,.025],[-2.38,.88,p*.58],.02),s("paint",[.28,.08,.03],[-2.36,.985,p*.598],.01);Ne(e,r.carbon,16,28,(p,d)=>[-2.6+.4*p,.8+.09*p*p,(d-.5)*1.13]),Ne(e,r.paint,12,28,(p,d)=>[-2.57+.25*p,.97+.085*p,(d-.5)*1.13]),s("red",[.055,.065,.09],[-2.15,.32,0],.006)}else if(i.id==="tricycle"){o(.375,0,.24,.08,"spoke");for(const u of[-1,1])o(-.375,u*.28,.24,.075,"steel");a("paint",[-.36,.23,0],[.17,.39,0],.065),a("paint",[.17,.39,0],[-.12,.54,0],.065),a("paint",[-.12,.54,0],[-.28,.25,0],.045),a("metal",[-.375,.24,-.31],[-.375,.24,.31],.035);for(const u of[-.058,.058])a("paint",[.4,.24,u],[.23,.73,u],.035);a("metal",[.23,.73,0],[.2,.86,0],.03),oe(e,r.metal,[[.18,.84,-.25],[.2,.86,-.13],[.2,.86,.13],[.18,.84,.25]],.016,12);for(const u of[-1,1])s("rubber",[.07,.035,.13],[.18,.84,u*.225],.014),a("metal",[.4,.24,u*.06],[.4+u*.09,.24,u*.13],.018),s("rubber",[.09,.035,.07],[.4+u*.09,.24,u*.16],.007);s("seat",[.29,.05,.25],[-.16,.57,0],.05),s("paint",[.26,.04,.46],[-.34,.2,0],.02)}else if(i.id==="moped"){o(.62,0,.25,.13,"steel"),o(-.62,0,.25,.14,"steel"),s("paint",[1.25,.11,.41],[-.06,.3,0],.055),s("paint",[.78,.34,.47],[-.39,.45,0],.15),s("paint",[.15,.61,.42],[.42,.62,0],.06,[0,0,.16]),s("seat",[.68,.1,.39],[-.25,.7,0],.06);for(const u of[-.07,.07])a("metal",[.62,.25,u],[.49,.89,u],.038);s("paint",[.53,.065,.19],[.61,.49,0],.035),a("metal",[.49,.89,0],[.42,1.02,0],.05),a("metal",[.42,1.02,-.31],[.42,1.02,.31],.034),Ht(new Be(.1,.11,.12,32),r.paint,e,[.47,1.02,0],[0,0,-Math.PI/2]),Ht(new Tn(.083,32),r.lamp,e,[.535,1.02,0],[0,Math.PI/2,0]);for(const u of[-1,1])a("metal",[.42,1.02,u*.22],[.35,1.18,u*.28],.012),s("metal",[.08,.052,.09],[.35,1.18,u*.28],.024),s("rubber",[.06,.04,.12],[.42,1.02,u*.31],.016);s("red",[.028,.08,.2],[-.83,.52,0],.016),a("dark",[-.4,.24,.19],[-.83,.24,.19],.07)}else if(i.id==="motorcycle"){o(.73,0,.34,.14,"spoke"),o(-.73,0,.34,.19,"spoke");for(const u of[-1,1])a("dark",[-.73,.34,u*.1],[-.14,.48,u*.12],.052),a("dark",[-.14,.48,u*.12],[.43,.8,u*.09],.046),a("metal",[.73,.34,u*.07],[.44,1.03,u*.07],.045),a("metal",[-.68,.34,u*.11],[-.31,.72,u*.11],.038),oe(e,r.metal,[[.08,.5,u*.16],[.18,.29,u*.21],[-.4,.24,u*.24],[-.91,.32,u*.24]],.034,24),s("dark",[.23,.29,.045],[-.05,.43,u*.17],.02,[0,0,-.18]);s("dark",[.39,.35,.34],[-.02,.42,0],.06);for(let u=0;u<7;u++)s("metal",[.34,.013,.36],[-.02,.34+u*.034,0],.004);s("paint",[.61,.3,.43],[.11,.77,0],.14,[0,0,-.1]),s("seat",[.62,.1,.31],[-.48,.78,0],.055),s("paint",[.33,.07,.27],[-.82,.8,0],.025,[0,0,.13]),s("paint",[.55,.048,.19],[.73,.64,0],.025),oe(e,r.metal,[[.38,1.05,-.36],[.47,1.03,-.18],[.47,1.03,.18],[.38,1.05,.36]],.018,14),Ht(new Be(.13,.13,.12,32),r.dark,e,[.58,1.02,0],[0,0,-Math.PI/2]),Ht(new Tn(.112,32),r.lamp,e,[.645,1.02,0],[0,Math.PI/2,0]),s("red",[.025,.045,.18],[-1,.79,0],.006)}else if(i.id==="kart"){l(1.26,.19,.23,1.1);for(const u of[-1,1])oe(e,r.paint,[[-.78,.18,u*.5],[.73,.18,u*.5],[.87,.22,u*.35]],.035,16),s("paint",[.73,.19,.14],[-.06,.28,u*.51],.05);s("dark",[1.38,.03,.82],[0,.14,0],.025),c(-.21,.28,0,.39),h(.3,.61),s("paint",[.33,.13,.78],[.82,.23,0],.04),s("paint",[.46,.41,.07],[.61,.51,0],.03,[Math.PI/2,0,-.34]),s("dark",[.3,.3,.26],[-.65,.35,.4],.04);for(let u=0;u<6;u++)s("metal",[.29,.015,.25],[-.65,.32+u*.035,.4],.003);a("metal",[-.84,.23,-.58],[-.84,.23,.58],.035)}else if(i.id==="cart"){l(.69,.085,.045,.49,"steel");for(const u of[-1,1]){oe(e,r.metal,[[-.45,.17,u*.27],[.34,.14,u*.25],[.42,.5,u*.28],[.38,.98,u*.31]],.023,18),a("metal",[-.36,.14,u*.25],[-.23,.55,u*.24],.024),a("metal",[-.36,.57,u*.22],[.4,.57,u*.26],.015),a("metal",[-.48,.98,u*.31],[.4,.98,u*.31],.018);for(let m=0;m<=10;m++){const v=-.38+m*.077;a("metal",[v,.59,u*.25],[v-.07,.98,u*.31],.008)}for(const m of[.67,.76,.86])a("metal",[-.43,m,u*(.25+(m-.59)*.15)],[.4,m,u*(.25+(m-.59)*.15)],.007)}for(let u=0;u<9;u++){const m=-.29+u*.073;a("metal",[.4,.58,m*.84],[.4,.98,m],.008),a("metal",[-.35,.58,m*.84],[-.48,.98,m],.008),a("metal",[-.35,.58,m*.84],[.4,.58,m*.84],.008)}for(const u of[.65,.75,.85,.98])a("metal",[.4,u,-.3],[.4,u,.3],.008);a("metal",[-.49,1.04,-.31],[-.49,1.04,.31],.033),s("red",[.055,.055,.54],[-.49,1.04,0],.02)}else if(i.id==="golf"){l(1.7,.255,.2,.99),s("dark",[2.06,.1,1.11],[0,.3,0],.04),s("paint",[.73,.38,1.09],[.75,.53,0],.11),s("paint",[.51,.31,1.09],[-.93,.48,0],.08),c(-.16,.69,-.28,.49),c(-.16,.69,.28,.49),s("dark",[.18,.22,1],[.53,.7,0],.028),h(.37,.99,.28,.15);for(const u of[-1,1])a("dark",[.56,.65,u*.54],[.36,1.68,u*.54],.038),a("dark",[-.85,.59,u*.54],[-.85,1.66,u*.54],.038),a("dark",[-.45,.76,u*.56],[.03,.76,u*.56],.028);f([[.51,.86,-.51],[.51,.86,.51],[.37,1.6,.51],[.37,1.6,-.51]]),s("white",[2.18,.11,1.27],[-.18,1.75,0],.08),g(1.13,-1.2,.54,.37)}else if(["compact","pickup","van"].includes(i.id)){const{length:u,width:m,height:v,wheelbase:p,wheelRadius:d}=i;l(p,d,i.id==="pickup"?.27:.22,m-.2,"alloy"),s("dark",[u*.9,.15,m*.87],[0,d*.64,0],.035);const M=d*.82,y=i.id==="compact"?.83:i.id==="pickup"?1.09:1.18;s("paint",[u,.3,m],[0,M+.15,0],.08),s("paint",[u,.26,m*.96],[0,y-.13,0],.065);for(const _ of[-1,1]){s("paint",[p-d*2,.42,.065],[0,(M+y)/2,_*(m/2-.01)],.015);for(const w of[-p/2,p/2]){const T=[];for(let R=0;R<=30;R++){const L=R/30*Math.PI;T.push([w+(d+.075)*Math.cos(L),d+(d+.075)*Math.sin(L),_*(m/2+.01)])}oe(e,r.dark,T,.027,32)}}if(i.id==="compact"){s("paint",[.94,.11,m*.94],[u/2-.52,.87,0],.035,[0,0,-.08]);const _=.27,w=-1.22,T=v-.06,R=m*.4;s("paint",[1.6,.09,m*.82],[-.48,T,0],.045),f([[1.09,.88,-m*.46],[1.09,.88,m*.46],[_,T,R],[_,T,-R]]),f([[-1.85,.89,-m*.46],[-1.85,.89,m*.46],[w,T,R],[w,T,-R]]);for(const L of[-1,1]){f([[1.06,.88,L*m*.47],[_,T,L*R],[w,T,L*R],[-1.82,.9,L*m*.46]]);for(const E of[-.56,.26])a("paint",[E,.88,L*m*.47],[E,T,L*R],.045);a("paint",[1.08,.88,L*m*.47],[_,T,L*R],.05),a("paint",[-1.84,.89,L*m*.46],[w,T,L*R],.07),s("metal",[.18,.025,.012],[.01,.81,L*m*.495],.004),s("paint",[.19,.08,.13],[.85,1.02,L*m*.53],.035)}}else if(i.id==="pickup"){const _=v-.06;s("paint",[2.43,.1,m*.83],[.54,_,0],.05),s("paint",[1.2,.18,m*.94],[2.18,1.14,0],.05),f([[1.8,1.17,-m*.46],[1.8,1.17,m*.46],[1.22,_,m*.4],[1.22,_,-m*.4]]),f([[-.7,1.14,-m*.45],[-.7,1.14,m*.45],[-.67,_,m*.4],[-.67,_,-m*.4]]);for(const w of[-1,1]){f([[1.75,1.13,w*m*.47],[1.22,_,w*m*.4],[-.67,_,w*m*.4],[-.7,1.12,w*m*.47]]);for(const T of[-.68,.37,1.21])a("paint",[T,1.1,w*m*.48],[T,_,w*m*.4],.06);a("paint",[1.78,1.15,w*m*.47],[1.22,_,w*m*.4],.065),s("paint",[1.98,.37,.1],[-1.83,1.1,w*(m/2-.03)],.025),s("dark",[1.98,.028,.14],[-1.83,1.31,w*(m/2-.03)],.01),s("metal",[.2,.027,.018],[.12,1,w*m*.5],.004),s("dark",[.24,.14,.15],[1.44,1.29,w*m*.56],.03),s("dark",[2.65,.065,.19],[.32,.41,w*m*.51],.014)}s("dark",[1.88,.03,m*.88],[-1.83,.92,0],.01);for(let w=0;w<13;w++)s("metal",[1.78,.012,.014],[-1.83,.95,(w-6)*.13],.002);s("paint",[.09,.39,m],[-u/2+.02,1.1,0],.02)}else{s("paint",[3.93,v-1.05,m],[-1.04,(v+1.05)/2,0],.12),s("paint",[1.8,.11,m*.91],[1.84,v-.24,0],.065),s("paint",[1.53,.2,m*.96],[2.16,1.25,0],.055),f([[2.88,1.46,-m*.45],[2.88,1.46,m*.45],[2.31,v-.25,m*.43],[2.31,v-.25,-m*.43]]);for(const _ of[-1,1])f([[2.82,1.4,_*m*.48],[2.31,v-.28,_*m*.45],[1.02,v-.28,_*m*.45],[1.02,1.41,_*m*.48]]),a("paint",[2.9,1.42,_*m*.49],[2.32,v-.24,_*m*.45],.085),a("paint",[.98,1.11,_*m*.5],[.98,v-.25,_*m*.47],.08),s("dark",[u*.96,.09,.027],[0,.91,_*(m/2+.006)],.01),a("dark",[-.12,1.02,_*(m/2+.01)],[-.12,v-.16,_*(m/2+.01)],.01),a("dark",[-2.68,1.02,_*(m/2+.01)],[-2.68,v-.16,_*(m/2+.01)],.009),s("dark",[.23,.035,.035],[.1,1.45,_*m*.51],.006),s("dark",[.19,.27,.18],[2.55,1.63,_*m*.56],.035);a("dark",[-u/2-.005,1.04,0],[-u/2-.005,v-.14,0],.012);for(const _ of[-.12,.12])s("dark",[.025,.17,.035],[-u/2-.012,1.55,_],.004)}s("dark",[.06,.18,m*.67],[u/2+.02,y-.21,0],.028),s("metal",[.07,.07,m*.92],[u/2+.02,M+.08,0],.025),g(u/2+.035,-u/2-.025,y-.04,m*.36)}else if(i.id==="bus"){l(6.5,.49,.28,2.14,"steel"),s("dark",[9.8,.22,2.22],[-.18,.63,0],.035),s("paint",[8.95,1.22,2.48],[-.56,1.28,0],.075),s("paint",[8.95,.19,2.48],[-.56,3.05,0],.07),s("paint",[1.4,.51,2.09],[4.51,1.07,0],.13),s("paint",[.14,1.83,2.45],[-5.06,2.08,0],.04);for(const m of[-1,1]){for(let v=0;v<9;v++){const p=-4.47+v*.94;s("glass",[.78,.76,.027],[p,2.5,m*1.25],.03),a("dark",[p-.39,2.49,m*1.27],[p+.39,2.49,m*1.27],.012),s("paint",[.1,1.12,.07],[p+.44,2.48,m*1.24],.012)}for(const v of[1.05,1.34,1.68])s("dark",[9.12,.065,.035],[-.55,v,m*1.263],.006);s("metal",[.32,.035,.023],[-4.74,1.9,m*1.28],.005),a("metal",[3.64,2.02,m*1.22],[3.9,2.27,m*1.55],.024),s("dark",[.12,.36,.2],[3.9,2.3,m*1.55],.035)}f([[3.96,1.91,-1.15],[3.96,1.91,1.15],[3.92,2.89,1.15],[3.92,2.89,-1.15]]),a("paint",[3.97,1.91,0],[3.94,2.92,0],.08),s("dark",[.11,.32,1.1],[5.24,1.1,0],.03);for(let m=0;m<10;m++)s("metal",[.12,.014,1.03],[5.26,.98+m*.027,0],.003);s("dark",[.15,.21,2.47],[5.28,.66,0],.025),g(5.26,-5.16,1.27,.87);for(const m of[-4.8,3.8])for(const v of[-.83,.83])s("red",[.06,.13,.17],[m,2.97,v],.045);const u=new Ie({map:Mu("SCHOOL BUS",{width:512,height:96,fontSize:50,color:"#171c1f",bg:"#dbae31"}),side:ee});Ht(new kn(1.35,.25),u,e,[3.99,3.03,0],[0,Math.PI/2,0])}else if(i.id==="semi"){for(const u of[-1,1]){o(7.035,u*1.09,.51,.28,"steel");for(const m of[3.03,1.85,-5.72,-7.035])for(const v of[u*.86,u*1.18])o(m,v,.51,.27,"steel")}s("dark",[7.45,.24,2.05],[4.49,.67,0],.04),s("paint",[2.14,2.08,2.32],[5.83,1.74,0],.1),s("paint",[1.82,.95,2.15],[7.7,1.39,0],.09),s("paint",[1.47,2.89,2.33],[4.14,2.12,0],.13),s("paint",[2.46,.18,2.34],[5.39,3.08,0],.1),f([[6.96,2,-1.1],[6.96,2,1.1],[6.77,2.92,1.03],[6.77,2.92,-1.03]]);for(const u of[-1,1])f([[6.73,2.01,u*1.17],[6.65,2.89,u*1.17],[5.21,2.89,u*1.17],[5.21,2.02,u*1.17]]),s("dark",[.22,.033,.022],[5.08,1.8,u*1.18],.006),a("metal",[5.05,2.33,u*1.16],[5.58,2.46,u*1.58],.035),s("metal",[.16,.48,.19],[5.6,2.5,u*1.58],.036),An(e,r.metal,[[.23,-.64],[.29,-.6],[.29,.6],[.23,.64]],[4.1,.74,u*1.03],[1,0,0],32),a("metal",[4.84,.67,u*1.11],[4.84,3.72,u*1.11],.115),s("metal",[.2,.055,.15],[4.85,3.77,u*1.11],.02,[0,0,.2]),s("metal",[1.46,.11,.32],[5.79,.72,u*1.24],.02),s("metal",[1.17,.11,.27],[5.68,1.01,u*1.24],.02);s("dark",[.1,.95,1.54],[8.7,1.3,0],.06);for(let u=0;u<14;u++)s("metal",[.13,.018,1.45],[8.72,.88+u*.061,0],.004);s("metal",[.19,.25,2.51],[8.73,.61,0],.035),g(8.73,2.23,1.41,.99),s("white",[11.74,2.83,2.55],[-2.87,2.59,0],.035),s("metal",[11.82,.12,2.58],[-2.87,1.15,0],.01),s("metal",[11.82,.065,2.58],[-2.87,4.02,0],.01);for(const u of[-1,1]){for(let m=0;m<38;m++)s("metal",[.016,2.69,.016],[-8.51+m*.306,2.58,u*1.28],.002);for(let m=0;m<23;m++)s(m%2?"white":"red",[.44,.048,.018],[-8.48+m*.5,1.19,u*1.3],.003);s("metal",[5.83,.16,.08],[-1.53,.67,u*1.12],.007);for(const m of[-3.6,.3])a("dark",[m,.68,u*1.12],[m,1.15,u*1.12],.046)}for(const u of[-.57,.57]){s("white",[.065,2.7,1.18],[-8.78,2.58,u],.013);for(const m of[u-.38,u+.38])a("metal",[-8.83,1.32,m],[-8.83,3.82,m],.025);s("metal",[.085,.09,.2],[-8.85,2.1,u],.012)}s("metal",[.16,.15,2.42],[-8.67,.63,0],.009),g(-8.81,-8.84,1.03,1)}return Zr(e),Oe(e),{group:t,wheels:n,materials:r,open:["f1","tricycle","moped","motorcycle","kart","cart","golf"].includes(i.id)}}function Lv(i,t){const e=new te,n=t.hardware.clone(!0),r=t.fanSystem.clone(!0),s=new te;e.add(n,r,s);const a=[],o=[];t.fanSystem.traverse(p=>a.push(p)),r.traverse(p=>o.push(p));const l=t.fans.map(p=>o[a.indexOf(p)]),c=t.flowArrows.map(p=>({...p,arrow:o[a.indexOf(p.arrow)]})),h=new Zt({color:8096143,metalness:.82,roughness:.32}),f=new Zt({color:2304816,metalness:.6,roughness:.46}),g=new Zt({color:11575417,metalness:.86,roughness:.29,side:ee}),u=Math.min(2.8,Math.max(.72,i.wheelbase*.43)),m=Math.max(.44,i.length/2-.18);for(const p of[-.79,.79])pt(s,f,[2*Math.max(u,m)+.07,.045,.045],[0,.32,p],.008);for(const p of[-u,u,-m,m])pt(s,h,[.032,.04,1.62],[p,.32,0],.006);const v=t.nozzles.map(p=>{const d=p.type==="rear"?-Math.max(.44,i.length/2-.18):p.type==="front"?Math.max(.44,i.length/2-.18):Math.sign(p.position.x)*Math.min(2.8,Math.max(.72,i.wheelbase*.43)),M=new C(d,p.type==="lift"?.31:.34,p.position.z);An(e,g,[[.05,0],[.043,.015],[.031,.095],[.033,.135],[.065,.235],[.088,.285],[.09,.298],[.076,.3],[.064,.264],[.028,.13],[.026,.08],[.04,.01]],M.toArray(),p.direction.toArray(),32),Ht(new Tn(.035,24),f,e,M.toArray()).quaternion.setFromUnitVectors(new C(0,0,1),p.direction),p.type==="lift"&&Ee(s,h,[d,.32,p.position.z],[d,.32,0],.03);const y=M.addScaledVector(p.direction,.298);return y.y-=i.com,{...p,position:y,direction:p.direction.clone()}});return Oe(s),Oe(e),{group:e,hardware:n,fanSystem:r,supports:s,fans:l,arrows:c,nozzles:v}}function Iv(i,t){const e=new Map;let n=t,r=null;function s(a){if(n.group.visible=!1,r=a,a.id==="roadster")n=t;else{if(!e.has(a.id)){const o=new te,l=new te;l.position.y=-a.com,o.add(l);const c=Pv(a),h=Lv(a,t);l.add(c.group,h.group),i.add(o),o.name=a.name;let f=-1;const g=(u,m=0)=>{o.position.copy(u.pos),o.quaternion.copy(u.q);for(const v of c.wheels)v.spin.rotation.z=-u.wheelDistance/v.radius;h.fans.forEach((v,p)=>v.rotation.y=u.fanPhase*.052*(p?1:-1));for(const{arrow:v,curve:p,phase:d}of h.arrows){v.visible=u.fan>.01;const M=(u.fanPhase*.0045+d)%1;v.position.copy(p.getPointAt(M)),v.quaternion.setFromUnitVectors(yv,p.getTangentAt(M).normalize())}if(h.hardware.visible=m>.05,h.fanSystem.visible=m>.05,h.supports.visible=!0,Math.abs(m-f)>.001){f=m;for(const v of["paint","glass","white","carbon"]){const p=c.materials[v];p&&(p.transparent=m>.001,p.opacity=de(1,c.open?.34:.08,m),p.depthWrite=m<.5,p.needsUpdate=!0)}}};e.set(a.id,{group:o,model:l,body:c,rig:h,nozzles:h.nozzles,update:g})}n=e.get(a.id)}return n.group.visible=!0,n}return{setVehicle:s,update:(a,o)=>n.update(a,o),get active(){return n},get profile(){return r},get nozzles(){return n.nozzles},get variantCount(){return e.size}}}function Dv(i,t){i.background=new It(527635),i.fog=new Rl(527635,.012);const e=new te;i.add(e);const n=new Zt({color:3424073,metalness:.82,roughness:.48}),r=new Zt({color:1713198,metalness:.72,roughness:.54}),s=new Zt({color:6909293,roughness:.92}),a=new Ie({color:new It(1.3,.0015,8e-4),toneMapped:!1}),o=new Ie({color:new It(3.2,3.4,3.5),toneMapped:!1}),l=new Zt({color:9673369,metalness:0,roughness:.89}),c=jr(512);c.repeat.set(105*2e3/340,72*1600/240);const h=new bd({color:12042700,shininess:20,specular:1581612,bumpMap:c,bumpScale:.011});let f=12;const g=new nu;g.setCrossOrigin("anonymous"),g.load("./assets/asphalt-albedo.webp",U=>{U.colorSpace=Ze,U.wrapS=U.wrapT=Qr,U.repeat.set(64*2e3/340,48*1600/240),U.anisotropy=Math.min(f,t.capabilities.getMaxAnisotropy()),h.map=U,h.needsUpdate=!0},void 0,()=>{});const u=Ht(new kn(2e3,1600),h,i,[5,-.035,-5],[-Math.PI/2,0,0]);u.castShadow=!1;const m=new Zt({color:2370609,roughness:.96});for(let U=-70;U<=100;U+=10)pt(e,m,[.021,.003,120],[U,-.03,-10]);for(let U=-65;U<=45;U+=10)pt(e,m,[180,.003,.021],[10,-.03,U]);for(const U of[1.95,8.05,-9,-1])pt(e,l,[93,.005,.065],[8,-.023,U]);for(let U=-41;U<62;U+=5)U<-4&&pt(e,l,[2,.007,.06],[U,-.021,5]),(U<-11||U>35)&&pt(e,l,[2,.007,.06],[U,-.021,-5]);const v=jr(512,"metal");v.repeat.set(14,3);const p=new zn({color:7436927,metalness:.52,roughness:.52,bumpMap:v,bumpScale:.006,envMapIntensity:.48,side:ee}),d=new te;e.add(d);const M=(U,$,nt=0)=>[_e.x+(_e.radius+nt)*Math.sin(U),_e.radius-(_e.radius+nt)*Math.cos(U),_e.z+$];Ne(d,p,180,18,(U,$)=>M(U*_e.deckAngle,($-.5)*_e.width)),Ne(d,r,120,4,(U,$)=>M(U*_e.deckAngle,($-.5)*_e.width,.17));for(const U of[-1,1]){Ne(d,n,140,1,(St,Ft)=>M(St*_e.deckAngle,U*_e.width/2,.19*Ft)),Ne(d,a,180,1,(St,Ft)=>M(St*_e.deckAngle,U*_e.width/2+(Ft-.5)*.044,-.023));for(let St=0;St<25;St++){const Ft=St*_e.deckAngle/25,Rt=(St+1)*_e.deckAngle/25,Y=M(Ft,U*2.6,.22),J=M(Rt,U*2.6,.22),ot=M(Ft,U*2.6,.81),Et=M(Rt,U*2.6,.81);Ee(d,n,Y,J,.095,!0),Ee(d,n,ot,Et,.1,!0),Ee(d,r,Y,Et,.072,!0),Ee(d,n,J,Et,.073,!0),St%2===0&&Ee(d,r,J,M(Rt,-U*2.6,.25),.06,!0)}const $=9,nt=_e.z+U*2.68;pt(d,s,[1.8,.34,1.6],[$,.13,nt],.03),pt(d,n,[1.1,.06,1.06],[$,.33,nt],.025);for(const St of[-.4,.4])Ee(d,n,[$+St,.36,nt],[$+St,20,nt],.15,!0);for(let St=.45;St<20;St+=2.15)Ee(d,n,[$-.4,St,nt],[$+.4,Math.min(20,St+2.15),nt],.071,!0),Ee(d,n,[$+.4,St,nt],[$-.4,Math.min(20,St+2.15),nt],.071,!0);for(const St of[55,80,105,130,155,170]){const Ft=St*Math.PI/180,Rt=M(Ft,U*2.65,.78);Ee(d,n,[$,Rt[1],nt],Rt,.14,!0),Ee(d,r,[$,Math.max(.4,Rt[1]-2.2),nt],Rt,.091,!0)}const Dt=M(_e.deckAngle,U*2.62,.7);Ee(d,n,[9.45,20,nt],[Dt[0],Dt[1],nt],.14,!0)}for(let U=1;U<37;U++){const $=_e.deckAngle*U/37;Ee(d,r,M($,-2.38,-.007),M($,2.38,-.007),.009)}Ne(d,l,180,1,(U,$)=>M(U*_e.deckAngle,($-.5)*.057,-.011)),Oe(d);for(const U of[-9,-1]){pt(e,r,[48,.13,.15],[13,.055,U],.025),pt(e,a,[48,.022,.028],[13,.123,U],.005);for(let $=-10;$<=36;$+=6)pt(e,n,[.3,.045,.5],[$,.016,U],.006)}const y=[Vr("sedan",2375260),Vr("sedan",7743265),Vr("sedan",4672593),Vr("semi",13094093),Vr("truck",6844022)],_=bv();y.forEach((U,$)=>{U.position.set(gl[$],0,-5),U.rotation.y=Math.PI/2,i.add(U);const nt=new Ie({map:_,color:0,transparent:!0,opacity:.92,depthWrite:!1}),Dt=Ht(new kn(6.2,3.3),nt,i,[gl[$],-.015,-5],[-Math.PI/2,0,Math.PI/2]);Dt.castShadow=!1});const w=new te;e.add(w),pt(w,new Zt({color:2108212,metalness:.35,roughness:.82}),[58,11,18],[23,5.45,-48],.05),pt(w,r,[60,.48,20],[23,11.05,-48],.07);const T=new Zt({color:3161157,metalness:.6,roughness:.68});for(let U=-5;U<52;U+=1.25)pt(w,T,[.07,10,.075],[U,5.3,-38.95]);pt(w,r,[21,7.9,.1],[16,3.94,-38.88]);for(let U=.5;U<7.8;U+=.48)pt(w,r,[20.9,.037,.026],[16,U,-38.79]);for(const U of[-2,39,46])pt(w,r,[2.9,2.1,.12],[U,6.4,-38.8]),pt(w,new Ie({color:4543579}),[2.52,1.74,.13],[U,6.4,-38.77]),pt(w,n,[.048,1.75,.15],[U,6.4,-38.7]);for(const U of[40,45,50]){Ht(new Be(1.65,1.65,6,28),n,w,[U,3.1,-29]),Ht(new ya(1.65,24,12,0,Math.PI*2,0,Math.PI/2),n,w,[U,6.1,-29]);for(const $ of[1.3,4.8])Ht(new ln(1.66,.055,6,32),r,w,[U,$,-29],[Math.PI/2,0,0]);pt(w,s,[4,.25,4],[U,.05,-29],.02)}Oe(w);const R=new br().setFromObject(w).expandByScalar(.8),L=wv(),E=[],x=(U,$,nt,Dt)=>{pt(e,s,[1.5,.35,1.5],[U,.1,$],.04),Ee(e,r,[U,.25,$],[U,nt,$],.21,!0),pt(e,n,[2.7,.15,.25],[U,nt,$],.02);for(let Et=0;Et<4;Et++){const vt=U+(Et-1.5)*.56;pt(e,r,[.46,.32,.26],[vt,nt-.17,$],.045,[-.35,0,0]),pt(e,o,[.36,.22,.045],[vt,nt-.18,$+.15],.02,[-.35,0,0])}const St=new iu(13230578,700,85,.48,.72,2);St.position.set(U,nt-.3,$),St.target.position.set(...Dt),i.add(St,St.target);const Ft=new qf(new Gh({map:L,color:12179954,opacity:.2,depthWrite:!1,blending:sa}));Ft.position.set(U,nt,$+.2),Ft.scale.set(7,4.5,1),i.add(Ft);const Rt=new C(...Dt).sub(new C(U,nt-.3,$)),Y=Rt.length(),J=new Ln({uniforms:{color:{value:new It(9287381)},opacity:{value:.047}},vertexShader:"varying vec3 vNormal;varying vec3 vView;varying vec2 vUv;void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vView=normalize(-mv.xyz);vNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vNormal;varying vec3 vView;varying vec2 vUv;uniform vec3 color;uniform float opacity;void main(){float rim=pow(abs(dot(normalize(vNormal),normalize(vView))),.7);float fall=pow(vUv.y,1.4);gl_FragColor=vec4(color,opacity*rim*fall);}",transparent:!0,depthWrite:!1,side:ee,blending:sa}),ot=Ht(new ps(Y*.24,Y,32,1,!0),J,i);ot.position.copy(new C(U,nt-.3,$).addScaledVector(Rt.normalize(),Y/2)),ot.quaternion.setFromUnitVectors(new C(0,-1,0),Rt),ot.castShadow=!1,E.push(ot)};x(-18,-20,14,[-16,0,4]),x(5,17,23,[-2,8,5]),x(30,-18,15,[18,0,-5]),x(53,10,16,[35,0,-5]);const P=new Id(11584729,3752008,.52);i.add(P);const D=new oo(15003130,1.65);D.position.set(-11,29,18),i.add(D),D.castShadow=!0,D.shadow.mapSize.set(2048,2048),D.shadow.camera.left=-30,D.shadow.camera.right=30,D.shadow.camera.top=30,D.shadow.camera.bottom=-30,D.shadow.camera.near=1,D.shadow.camera.far=140,D.shadow.normalBias=.025,D.shadow.bias=-6e-5,D.shadow.radius=3,D.target.position.set(2,0,0),i.add(D.target);const B=new oo(10733547,1.3);B.position.set(4,8,-22),i.add(B);const V=new oo(16770508,.35);V.position.set(-30,10,16),i.add(V);for(const U of[-7,4,17,31]){const $=new Nd(16721176,40,12,1.5);$.position.set(U,.35,-1),i.add($)}const G=_,W=new Ie({map:G,color:0,transparent:!0,opacity:.75,depthWrite:!1}),K=Ht(new kn(6.3,3.2),W,i,[0,-.016,0],[-Math.PI/2,0,0]);K.castShadow=!1;const H=Ne(i,new Ie({map:_,color:0,transparent:!0,opacity:.67,depthWrite:!1,side:ee}),30,4,(U,$)=>[U,$,0]);return H.castShadow=!1,H.visible=!1,Oe(e),{key:D,hemi:P,rim:B,cones:E,cameraBounds:R,update(U){const $=Math.max(0,U.pos.y-20);D.position.set(U.pos.x-13,29+$,U.pos.z+18),D.target.position.set(U.pos.x,$,U.pos.z),K.position.set(U.pos.x,-.017,U.pos.z);const nt=Math.max(0,U.pos.y-(U.bodyCOM??_l)),Dt=1+nt*.09;W.opacity=.96*Math.exp(-nt*.65),K.scale.set(Dt*(U.dimensions?.length??4.88)/4.88,Dt*(U.dimensions?.width??2.07)/2.07,1);const St=new C(1,0,0).applyQuaternion(U.q);if(K.rotation.z=-Math.atan2(St.z,St.x),H.visible=U.contact&&(U.contactKind===2||U.contactKind===void 0&&U.time>=4&&U.time<16),H.visible){const Ft=H.geometry.attributes.position;let Rt=0;for(let Y=0;Y<=30;Y++)for(let J=0;J<=4;J++){const ot=U.pitch+(Y/30-.5)*(U.dimensions?.length+1||5.9)/_e.radius,Et=(J/4-.5)*(U.dimensions?.width+1||3.1);Ft.setXYZ(Rt++,_e.x+(_e.radius-.025)*Math.sin(ot),_e.radius-(_e.radius-.025)*Math.cos(ot),_e.z+Et)}Ft.needsUpdate=!0,H.geometry.computeBoundingSphere()}},setQuality(U){f=U?12:1,h.map&&(h.map.anisotropy=Math.min(f,t.capabilities.getMaxAnisotropy()),h.map.needsUpdate=!0),D.shadow.mapSize.set(U?2048:1024,U?2048:1024),D.shadow.map&&(D.shadow.map.dispose(),D.shadow.map=null)}}}const Zn=i=>{const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};class Uv{constructor(t,e,n=Gl){this.sampler=n,this.nozzles=e,this.steps=461,this.copies=1,this.rate=96,this.count=e.length*this.steps*this.copies;const r=new kn(1,1),s=new Od;s.index=r.index,s.setAttribute("position",r.attributes.position),s.setAttribute("uv",r.attributes.uv),this.positions=new Float32Array(this.count*3),this.sizes=new Float32Array(this.count*2),this.alphas=new Float32Array(this.count),this.rotations=new Float32Array(this.count),this.shades=new Float32Array(this.count),s.setAttribute("aCenter",new Or(this.positions,3).setUsage(Cr)),s.setAttribute("aSize",new Or(this.sizes,2).setUsage(Cr)),s.setAttribute("aAlpha",new Or(this.alphas,1).setUsage(Cr)),s.setAttribute("aRotation",new Or(this.rotations,1).setUsage(Cr)),s.setAttribute("aShade",new Or(this.shades,1).setUsage(Cr)),s.instanceCount=0,this.material=new Ln({uniforms:{map:{value:Ev()}},vertexShader:`
        attribute vec3 aCenter;attribute vec2 aSize;
        attribute float aAlpha;attribute float aRotation;attribute float aShade;
        varying vec2 vUv;varying float vAlpha;varying float vShade;varying float vHeight;
        void main(){
          vUv=uv;vAlpha=aAlpha;vShade=aShade;
          vec4 mv=modelViewMatrix*vec4(aCenter,1.);
          float c=cos(aRotation),s=sin(aRotation);
          vec2 offset=mat2(c,-s,s,c)*(position.xy*aSize);
          mv.xy+=offset;
          vHeight=aCenter.y+viewMatrix[1][0]*offset.x+viewMatrix[1][1]*offset.y;
          gl_Position=projectionMatrix*mv;
        }`,fragmentShader:`
        uniform sampler2D map;varying vec2 vUv;varying float vAlpha;varying float vShade;varying float vHeight;
        void main(){
          vec4 cloud=texture2D(map,vUv);
          float edge=1.-smoothstep(.67,1.,length(vUv*2.-1.));
          if(cloud.a*edge<.003)discard;
          float floorFade=smoothstep(.02,.5,vHeight);
          float density=cloud.a*edge*vAlpha*2.1;
          float alpha=(1.-1./(1.+density+.48*density*density))*floorFade;
          if(alpha<.003)discard;
          float lighting=clamp(.48+.40*cloud.r+.10*vUv.y+vShade,.48,.99);
          vec3 coldWhite=vec3(lighting*.97,lighting*.985,lighting);
          gl_FragColor=vec4(coldWhite,alpha);
        }`,transparent:!0,depthWrite:!1,blending:Fi,side:ee}),this.points=new je(s,this.material),this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points),this.cores=new te,this.jets=[],t.add(this.cores);const a=new Be(.29,.025,1,20,4,!0);for(const l of e){const c=new Ln({uniforms:{power:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;void main(){vUv=uv;vec4 mv=modelViewMatrix*vec4(position,1.);vView=normalize(-mv.xyz);vNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}",fragmentShader:`
          varying vec2 vUv;varying vec3 vNormal;varying vec3 vView;
          uniform float power;uniform float time;
          float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
          float noise(vec2 p){
            vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
            return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);
          }
          void main(){
            float side=pow(abs(dot(normalize(vNormal),normalize(vView))),.9);
            float turbulence=.7+.3*noise(vec2(vUv.x*7.,vUv.y*8.-time*8.));
            float fade=sin(vUv.y*3.14159)*pow(1.-vUv.y,.4);
            float bands=.84+.16*cos(vUv.y*45.-time*2.);
            gl_FragColor=vec4(.93,.96,.99,sqrt(power)*.4*side*fade*turbulence*bands);
          }`,transparent:!0,depthWrite:!1,side:ee}),h=new je(a,c);h.castShadow=!1,h.renderOrder=3,h.quaternion.setFromUnitVectors(new C(0,1,0),l.direction),this.cores.add(h),this.jets.push(h)}const o=new nu;o.setCrossOrigin("anonymous"),o.load("./assets/cold-gas-vapor.webp",l=>{this.material.uniforms.map.value.dispose(),this.material.uniforms.map.value=l},void 0,()=>{}),this.lastTime=-100,this.particles=[]}power(t,e,n){if(t.stopped)return 0;if(e.type==="rear")return t.rear;if(e.type==="front")return t.front??(t.time>30.1&&t.time<30.8?.3:0);let r=t.lift;if(t.attitude>.01){const s=t.rollAngularAcceleration>0;e.position.z<0===s&&(r+=t.attitude*.46)}return r}setSource(t,e){this.nozzles=t,this.sampler=e,this.lastTime=-100,this.jets.forEach((n,r)=>n.quaternion.setFromUnitVectors(new C(0,1,0),t[r].direction))}update(t,e){if(t!==this.lastTime){this.lastTime=t,this.particles.length=0;const n=this.sampler(t);this.cores.position.copy(n.pos),this.cores.quaternion.copy(n.q),this.jets.forEach((a,o)=>{const l=this.power(n,this.nozzles[o],t),c=.7+Math.sqrt(l)*2.3;a.visible=l>.02,a.material.uniforms.power.value=l,a.material.uniforms.time.value=t,a.scale.y=c,a.position.copy(this.nozzles[o].position).addScaledVector(this.nozzles[o].direction,c*.5)});const r=this.steps/this.rate,s=Math.floor(t*this.rate);for(let a=0;a<this.steps;a++){const o=s-a,l=o/this.rate,c=t-l;if(l<0)continue;const h=o%8===0,f=cn((c-.4)/.6);if(!h&&c>.8)continue;const g=h?1:1-cn((c-.42)/.38),u=this.sampler(l);for(let m=0;m<this.nozzles.length;m++){const v=this.nozzles[m],p=this.power(u,v,l);if(p<.004)continue;const d=v.position.clone().applyQuaternion(u.q).add(u.pos),M=v.direction.clone().applyQuaternion(u.q),y=M.clone().cross(new C(Math.abs(M.y)<.9?0:1,Math.abs(M.y)<.9?1:0,0)).normalize(),_=M.clone().cross(y).normalize();for(let w=0;w<this.copies;w++){const T=(s-a)*37+m*271+w*1141,R=Zn(T)*Math.PI*2,L=Math.sqrt(Zn(T+12)),E=(.035+c*(.38+p*.48)+c*c*.045)*L,x=(24+p*10+Zn(T+2)*7)*(.24*(1-Math.exp(-c/.24))+c*.055),P=.36*(1-Math.exp(-c/.36)),D=d.clone().addScaledVector(M,x).addScaledVector(y,Math.cos(R)*E).addScaledVector(_,Math.sin(R)*E).addScaledVector(u.vel,P);D.x+=c*.18,D.z+=c*.07,D.y+=c*c*.035;const B=(.33+Math.pow(c,.72)*(1.6+Zn(T+5)*1.1))*(.82+Math.sqrt(p)*.4)*(h?1+.3*f:1);let V=!1;if(D.y<.5){const H=cn((.5-D.y)/.65),U=H*H*(3-2*H),$=(Math.sqrt(Math.max(0,.18-D.y))*1.45+c*.22)*U;D.x+=Math.cos(R)*$,D.z+=Math.sin(R)*$,D.y+=(.16+B*.17+Zn(T+3)*.15+c*.04-D.y)*U,V=!0}const G=cn(c/.035),W=Math.pow(1-cn(c/r),1.25),K=Math.sqrt(p)*(.55+Zn(T+6)*.3)*(h?1+.8*f:1)*G*W*g;K<.003||this.particles.push({p:D,size:B,aspect:V?1.35:1.03+Zn(T+9)*.2,alpha:K,rotation:R+c*(Zn(T+8)-.5)*.6,shade:(Zn(T+4)-.5)*.12,depth:0})}}}}for(const n of this.particles)n.depth=n.p.clone().applyMatrix4(e.matrixWorldInverse).z;this.particles.sort((n,r)=>n.depth-r.depth),this.particles.forEach((n,r)=>{n.p.toArray(this.positions,r*3),this.sizes[r*2]=n.size*n.aspect,this.sizes[r*2+1]=n.size,this.alphas[r]=n.alpha,this.rotations[r]=n.rotation,this.shades[r]=n.shade});for(const[n,r]of Object.entries(this.points.geometry.attributes))n.startsWith("a")&&(r.needsUpdate=!0);this.points.geometry.instanceCount=this.particles.length,this.points.visible=this.particles.length>0}resize(){}}class Nv{constructor(t,e){this.container=e,this.items=[];for(const o of mh(Gl(0))){const l=new Dc(new C(0,1,0),new C,1,o.color,.2,.095);for(const h of[l.line.material,l.cone.material])h.depthTest=!1,h.transparent=!0,h.opacity=.9;l.renderOrder=25,l.line.renderOrder=25,l.cone.renderOrder=25,t.add(l);const c=document.createElement("div");c.className=`force-marker ${o.id}`,c.style.setProperty("--force-color",o.color),c.innerHTML=`<span class="marker-name">${o.name}</span><span class="marker-number"></span>`,e.appendChild(c),this.items.push({arrow:l,label:c,end:new C,id:o.id})}this.enabled=!0,this.torqueGroup=new te,t.add(this.torqueGroup);const n=[];for(let o=0;o<=64;o++){const l=-.4+o/64*4.9;n.push(new C(0,1.6*Math.cos(l),1.6*Math.sin(l)))}const r=new xa(new Me().setFromPoints(n),new fs({color:13021672,transparent:!0,opacity:.9,depthTest:!1}));r.renderOrder=26,this.torqueGroup.add(r);const s=4.5,a=new Dc(new C(0,-Math.sin(s),Math.cos(s)),n.at(-1),.22,13021672,.21,.1);a.line.material.depthTest=a.cone.material.depthTest=!1,a.renderOrder=26,this.torqueGroup.add(a),this.torqueLabel=document.createElement("div"),this.torqueLabel.className="force-marker torque",this.torqueLabel.style.setProperty("--force-color","#c6b1e8"),e.appendChild(this.torqueLabel)}update(t,e,n,r,s=!0,a={left:12,right:n-12,top:72,bottom:r-150},o=[]){this.enabled=s;const l=mh(t),c=[];l.forEach((g,u)=>{const m=this.items[u],v=g.vector.length(),p=s&&v>200;if(m.arrow.visible=p,m.label.hidden=!p,!p)return;const d=cn(e.position.distanceTo(t.pos)/17,.38,1),M=cn(v*83e-6,.5,5.4)*d,y=g.vector.clone().normalize(),_=t.pos.clone();_.z+=(u-2)*.2,_.x+=u===2?.14:u===1?-.14:0,m.arrow.position.copy(_),m.arrow.setDirection(y),m.arrow.setLength(M,.19,.092),m.end.copy(_).addScaledVector(y,M+.22);const w=m.end.clone().project(e),T=(w.x*.5+.5)*n,R=(-w.y*.5+.5)*r,L=w.z<1&&T>12&&T<n-12&&R>12&&R<r-12;m.label.hidden=!L,L&&c.push({item:m,x:T,y:R}),m.label.querySelector(".marker-number").textContent=`${(v/1e3).toFixed(1)} kN`});const h=s&&Math.abs(t.rollMoment)>100;if(this.torqueGroup.visible=h,this.torqueLabel.hidden=!h,h){this.torqueGroup.position.copy(t.pos),this.torqueGroup.quaternion.copy(t.q),this.torqueGroup.scale.set(1,1,t.rollMoment>0?1:-1);const g=new C(0,1.9,0).applyQuaternion(t.q).add(t.pos).project(e);this.torqueLabel.innerHTML=`<span class="marker-name">Roll torque</span><span class="marker-number">${(Math.abs(t.rollMoment)/1e3).toFixed(1)} kN·m</span>`,this.torqueLabel.hidden=g.z>1||Math.abs(g.x)>1||Math.abs(g.y)>1,this.torqueLabel.hidden||c.push({item:{label:this.torqueLabel},x:(g.x*.5+.5)*n+(n<801?58:110),y:(-g.y*.5+.5)*r-22})}c.sort((g,u)=>g.y-u.y);const f=[...o];for(const g of c){const u=g.item.label.offsetWidth,m=g.item.label.offsetHeight,v=a.left+u/2,p=a.right-u/2,d=a.top+m/2,M=a.bottom-m/2;let y=null;for(const _ of[0,-1,1,-2,2,-3,3])for(const w of[0,-1,1]){const T=cn(g.x+w*(u+14),v,p),R=cn(g.y+_*(m+10),d,M);let L=(T-g.x)**2+(R-g.y)**2;for(const E of f){const x=(u+E.rw)/2+8-Math.abs(T-E.x),P=(m+E.rh)/2+6-Math.abs(R-E.y);x>0&&P>0&&(L+=1e6+x*P)}(!y||L<y.penalty)&&(y={x:T,y:R,rw:u,rh:m,penalty:L})}f.push(y),g.item.label.style.transform=`translate(${y.x}px,${y.y}px) translate(-50%,-50%)`}}}function Fv(i,t=Gl,e=[[16,19.2],[27,30.8]]){const n=new te;for(const[r,s]of e){const a=[];for(let c=r;c<s;c+=.035)a.push(t(c).pos);a.push(t(s).pos);const o=new Me().setFromPoints(a),l=new xa(o,new Rd({color:11717080,transparent:!0,opacity:.34,dashSize:.25,gapSize:.24,depthTest:!1}));l.computeLineDistances(),l.renderOrder=11,n.add(l)}return n.visible=!1,i.add(n),n}gl.map((i,t)=>({x:i,z:-5,halfX:t===3?1.18:1.04,halfZ:t===3?2.35:2.52,height:t===3?4.02:t===4?1.72:1.38,name:t===3?"the tall truck":`parked vehicle ${t+1}`}));const Ov=new Gi;function Bv(i){return i===void 0?new C(0,0,0):typeof i=="number"?new C(0,i,0):new C(i[0],i[1],i[2])}function Su(i,t,e){const n=a=>{const o=i.quantities[a]?.value;return o===void 0?0:typeof o=="number"?o:Math.hypot(o[0],o[1],o[2])},r=i.pose.pos,s=i.pose.quat;return{time:i.time,pos:new C(r[0],r[1],r[2]),q:Ov.set(s[0],s[1],s[2],s[3]),vel:e?new C(e.velocity[0],e.velocity[1],e.velocity[2]):new C(0,0,0),acc:e?new C(e.acc[0],e.acc[1],e.acc[2]):new C(0,0,0),thrust:e?new C(e.thrust[0],e.thrust[1],e.thrust[2]):Bv(i.quantities.thrust?.value),normal:e?new C(e.normal[0],e.normal[1],e.normal[2]):new C(0,1,0),tangent:e?new C(e.tangent[0],e.tangent[1],e.tangent[2]):new C(1,0,0),fan:e?e.fan:Number(i.flags.fan??0),fanPhase:e?e.fanPhase:Number(i.flags.fanPhase??0),wheelDistance:e?e.wheelDistance:Number(i.flags.wheelDistance??0),contact:(i.flags.contact??0)===1,contactKind:Number(i.flags.contactKind??0),roll:e?e.roll:Number(i.flags.roll??0),pitch:e?e.pitch:Number(i.flags.pitch??0),attitude:e?e.attitude:0,rear:e?e.rear:0,lift:e?e.lift:0,front:e?e.front:0,rollAngularAcceleration:e?e.rollAccel:0,rollMoment:n("rollMoment")*1e3,altitude:n("altitude"),speed:n("speed"),verticalSpeed:n("verticalSpeed"),bodyCOM:t.com,dimensions:t,chapter:Number(i.flags.chapter??0),thrustWeight:n("thrustWeight")}}const zv=[{t:0,p:[-10,3.2,6.8],l:[2,.7,0],f:40},{t:2,p:[-9,4.2,12],l:[1.2,.8,0],f:42},{t:4,p:[-10,6.7,18],l:[0,1.3,0],f:45},{t:7,p:[-11,2.8,17],l:[0,.6,0],f:43},{t:10,p:[-11,1.2,17],l:[0,.6,0],f:43},{t:13,p:[-8,-2.1,17],l:[0,-.4,0],f:42},{t:15,p:[-8,-4.5,17],l:[0,-1.2,0],f:42},{t:16,p:[-9,-4,18],l:[-.8,-2.4,0],f:43},{t:18,p:[-8,5,19],l:[-1,1.2,0],f:43},{t:19.5,p:[-7,3.8,12],l:[-.4,.4,0],f:41},{t:22,p:[-8,4.4,13],l:[0,.4,0],f:41},{t:24.4,p:[-8,3.3,-12],l:[1,.5,0],f:41},{t:26,p:[-8,4.5,-17],l:[2,1,0],f:43},{t:27,p:[-8,5.3,-22],l:[3,0,0],f:43},{t:28.4,p:[-7,5.4,-28],l:[2,-4.3,0],f:44},{t:29.3,p:[2,4.7,-28],l:[0,-4.3,0],f:43},{t:30.3,p:[8,4,-15],l:[0,.5,0],f:42},{t:32,p:[7,3.1,-11],l:[0,.4,0],f:40},{t:36,p:[6.4,2.9,-10],l:[0,.25,0],f:39}],Ks=(i,t,e)=>i+(t-i)*e,kv=i=>{const t=i<0?0:i>1?1:i;return t*t*t*(t*(t*6-15)+10)};function Hv(i){return Math.max(.42,Math.pow(i.length/4.88,.66))}function Vv(i){const{time:t,pos:e,quat:n,vehicle:r,inspect:s,viewport:a,safe:o}=i,l=zv;let c=0;for(let P=l.length-1;P>=0;P--)if(t>=l[P].t){c=P;break}c=Math.min(c,l.length-2);const h=l[c],f=l[c+1],g=kv((t-h.t)/(f.t-h.t)),u=Math.hypot(h.p[0],h.p[2]),m=Math.hypot(f.p[0],f.p[2]),v=Math.atan2(h.p[0],h.p[2]),p=Math.atan2(f.p[0],f.p[2]),d=Math.atan2(Math.sin(p-v),Math.cos(p-v)),M=v+d*g,y=Ks(u,m,g),_=new C(Math.sin(M)*y,Ks(h.p[1],f.p[1],g),Math.cos(M)*y),w=new C(...h.l).lerp(new C(...f.l),g);if(r.id!=="roadster"&&w.set(0,r.height/2-r.com,0),a.width<801&&(_.multiplyScalar(1.1),w.y=.2,w.x=0),s>.001){const P=new C(-6.5,3.7,6.4).applyQuaternion(n);a.width<801&&P.multiplyScalar(1.82),P.y=Math.max(.25-e.y,P.y),_.lerp(P,s),w.lerp(new C(-.3,.1,0).applyQuaternion(n),s)}const T=Hv(r);_.multiplyScalar(T),w.multiplyScalar(Math.min(1,T));const R=Math.max(Ks(1,2.65,s),Math.hypot(r.length,r.height,r.width)/2),L=Math.max(90,Math.min(o.right-o.left,o.bottom-o.top)),E=Ks(h.f,f.f,g),x=R/Math.tan(E*Math.PI/360)*(a.height/L)*1.06;return _.length()<x&&_.setLength(x),{position:e.clone().add(_),target:e.clone().add(w),fov:E}}const xe=i=>document.querySelector(i),_h=xe("#experience"),Gv=xe("#stage"),Eu=xe("#markers"),be=new y_({antialias:!0,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!0}),Wv=Math.min(window.devicePixelRatio||1,1.75);be.setPixelRatio(Wv);be.toneMapping=yh;be.toneMappingExposure=1.05;be.outputColorSpace=Ze;be.shadowMap.enabled=!0;be.shadowMap.type=Mh;be.info.autoReset=!1;Gv.appendChild(be.domElement);const fn=new Vh,Je=new nn(42,1,.08,1e4);fn.environment=Tv(be);const qv=Dv(fn,be),wu=Rv();fn.add(wu.group);const cs=Iv(fn,wu);cs.setVehicle(Vi("roadster"));function pa(i){const t=Vi(i);cs.setVehicle(t),wa=Xv(i),jv(t),t1()}let wa=Hn;const vh=new Map;let mr=null;function Xv(i){if(i==="roadster")return mr=null,Hn;let t=vh.get(i);return t||(t=hv(i),vh.set(i,t)),mr=t,t.sample}const mt={time:0,playing:!1,rate:1,camera:"director",markers:!0,systems:!1,path:!1,ready:!1,duration:un,vehicleId:"roadster",viewport:{width:1,height:1},safeArea:{left:12,right:100,top:12,bottom:100}};let bn=Hn(0),ia=0;function ba(i){const t=wa(i);return Su(t,Vi(mt.vehicleId),mt.vehicleId==="roadster"?Ar():null)}const ma=new Uv(fn,cs.active?.nozzles??[],ba);fn.add(ma.points);fn.add(ma.cores);const Yv=Fv(fn,ba),$v=new U_({host:xe("#readout"),registry:Gn.quantities,title:"受力",bars:!0,markerToggle:!0,onToggleMarkers:i=>{mt.markers=i,ql.setVisible(i),qe()}}),Kv=new k_({host:xe("#narrative"),narrative:Gn.narrative,concepts:xu,disclaimer:Gn.disclaimer}),Bi=F_({host:xe("#timeline-host"),duration:Gn.duration,chapters:Gn.chapters,onSeek:i=>fr(i),onPlayStateChange:i=>{mt.playing=i,Bi.setPlaying(i),qe()},onRateChange:i=>{mt.rate=i}}),hs=new Nv(fn,Eu),Jv={gravity:"重力",suction:"吸附",contact:"路面支持",tire:"轮胎摩擦",thrust:"燃气推力"};for(const i of hs.items){const t=Jv[i.id],e=i.label.querySelector(".marker-name");t&&e&&(e.textContent=t)}{const t=hs.torqueLabel?.querySelector(".marker-name");t&&(t.textContent="滚转力矩")}const ql={update(i,t,e,n){hs.update(ba(i.time),t,e.width,e.height,mt.markers,n,[])},setVisible(i){if(hs.enabled=i,!i)for(const t of Array.from(Eu.children))t.hidden=!0}};function Zv(){const t=hs.torqueLabel?.querySelector(".marker-name");t&&t.textContent!=="滚转力矩"&&(t.textContent="滚转力矩")}function jv(i){const t=nv(i.mass,i.inertia),e=(s,a,o,l)=>{const c=document.getElementById(s);c&&(c.textContent=a?o:l,c.dataset.pass=String(a))};e("wall-result",t.wall,"能保持","会打滑"),e("ceiling-result",t.ceiling,"能保持","会脱落"),e("lift-result",t.lift,"能起飞","起不来");const n=document.getElementById("selected-mass");n&&(n.textContent=`${Math.round(i.mass).toLocaleString("en-US")} kg`);const r=document.getElementById("rig-mass");r&&(r.textContent=`含 ${na.rigMass} kg 共享装备`)}function Qv(i){if(!i)return"障碍物";if(i==="the tall truck")return"那台高箱货车";const t=i.match(/parked vehicle (\d+)/);return t?`停放车辆 ${t[1]}`:i}function t1(){const i=document.getElementById("trial-results");if(!i)return;if(!mr){i.innerHTML='<div class="row"><span>轨迹</span><strong>解析解（参考车）</strong></div>';return}const{results:t}=mr,e=(r,s)=>`<div class="row"><span>${r}</span><strong>${s}</strong></div>`,n=r=>r.stop?`${r.stop.kind==="obstacle"?`撞上${Qv(r.stop.obstacle)}`:r.stop.kind==="touchdown"?"正常落地":"硬着陆"} @ ${r.stop.time.toFixed(2)}s`:r.lifted?`离地 · 最高 ${r.maxHeight.toFixed(1)}m`:`未离地 · 最高 ${r.maxHeight.toFixed(1)}m`;i.innerHTML=e("积分",`${mr.frames} 帧 @240Hz · ${mr.computeMs.toFixed(1)} 毫秒`)+e("坡道",n(t.ramp))+e("飞行",n(t.flight))}function xo(){const i=_h.getBoundingClientRect();mt.viewport.width=Math.max(1,i.width),mt.viewport.height=Math.max(1,i.height);const t=R_({root:_h,panel:xe("#panel"),controls:xe("#controls"),scrubber:xe("#timeline-host")}),e=!P_(t,mt.safeArea);mt.safeArea=t;const n=Math.min(window.devicePixelRatio||1,1.75,be.capabilities.maxTextureSize/mt.viewport.width,be.capabilities.maxTextureSize/mt.viewport.height);return be.getPixelRatio()!==n&&be.setPixelRatio(n),be.setSize(mt.viewport.width,mt.viewport.height,!1),Je.aspect=mt.viewport.width/mt.viewport.height,C_(Je,mt.viewport.width,mt.viewport.height,t),e}function e1(i){return Vv({time:mt.time,pos:i.pos,quat:i.q,vehicle:Vi(mt.vehicleId),inspect:ia,viewport:mt.viewport,safe:mt.safeArea})}function ga(i=1/60){if(!mt.ready)return;bn=wa(mt.time);const t=Vi(mt.vehicleId),e=mt.vehicleId==="roadster"?Ar():null,n=Su(bn,t,e);cs.update(n,mt.systems?1:0);const r=cs.active?.nozzles;r?.length&&ma.setSource(r,ba),ma.update(mt.time,Je),Yv.visible=mt.path;const s=mt.systems?1:0;ia=i?ia+(s-ia)*(1-Math.exp(-i*10)):s;const a=e1(n);if(mt.camera==="director")Je.position.copy(a.position),Je.fov=a.fov,Je.lookAt(a.target);else if(mt.camera==="wide"){const m=bn.pose.pos;Je.position.set(m[0]-26,16,m[2]+48),Je.fov=48,Je.lookAt(m[0],Math.max(0,m[1]),m[2])}Je.updateProjectionMatrix(),qv.update(n),$v.update(bn),Kv.update(bn),ql.update(bn,Je,mt.viewport,mt.safeArea),Zv();const o=Math.max(0,Gn.chapters.findLastIndex(m=>mt.time>=m.at));Bi.update(mt.time,mt.playing,o);const l=Number(bn.flags.contactKind??0),c=document.getElementById("status-contact");if(c){const m=l===2?"在坡道上":l===1?"在地面":"在空中";c.textContent!==m&&(c.textContent=m),c.dataset.air=String(l===0)}const h=document.getElementById("status-vehicle");if(h){const m=mt.vehicleId==="roadster"?"Roadster（参考）":Vi(mt.vehicleId).name;h.textContent!==m&&(h.textContent=m)}const f=document.getElementById("status-trial");if(f){const m=Number(bn.flags.trial??0)===1?"飞行试次":"坡道试次";f.textContent!==m&&(f.textContent=m)}const g=T_(Gn.quantities,bn,"实时受力数据");xe("#stage").setAttribute("aria-label",`三维场景：${g}`);const u=xe("#force-readout");u&&(u.textContent=g),be.info.reset(),be.render(fn,Je)}const ra=new L_({render:i=>ga(i),shouldRender:()=>mt.playing,advance:i=>{mt.playing&&(mt.time=Math.min(un,mt.time+i*mt.rate),mt.time>=un&&(mt.playing=!1,Bi.setPlaying(!1)),qe())}});function qe(){ra.requestRender()}function fr(i){mt.time=Math.max(0,Math.min(un,i)),qe()}I_({api:{app:mt,sample:i=>wa(i),getState:()=>bn,camera:Je,renderer:be,scene:fn,setTime:(i,t=!0)=>{mt.time=Math.max(0,Math.min(un,i)),t?ga():qe()},setPlaying:i=>{mt.playing=i,Bi.setPlaying(i),qe()},setCamera:i=>{mt.camera=i,qe()},setVariant:i=>{mt.vehicleId=i,pa(i),qe()},setVehicle:i=>{mt.vehicleId=i,pa(i),qe()},variantCount:13,renderFrame:()=>ga(),precompile:async()=>{await be.compileAsync(fn,Je)}},coordinateSystem:"meters; X along lanes; Y up; Z across lanes; gravity −Y",extra:()=>({safeArea:mt.safeArea,vehicle:mt.vehicleId,chapter:Gn.chapters[Math.max(0,Gn.chapters.findLastIndex(i=>mt.time>=i.at))]?.label,render:{calls:be.info.render.calls,triangles:be.info.render.triangles}})});async function n1(){pa("roadster"),xo(),await be.compileAsync(fn,Je),mt.ready=!0,ga(),xe("#loader")?.classList.add("is-ready"),D_()||ra.start(),O_({getTime:()=>mt.time,isPlaying:()=>mt.playing,duration:un,seek:s=>fr(s),setPlaying:s=>{mt.playing=s,Bi.setPlaying(s),qe()},shouldIgnore:()=>!!document.querySelector("dialog[open]")});const i=new ResizeObserver(()=>{xo()&&qe()});i.observe(xe("#panel")),i.observe(xe("#controls")),i.observe(xe("#timeline-host")),window.addEventListener("resize",()=>{xo(),qe()}),document.addEventListener("visibilitychange",()=>{document.hidden?ra.pause():ra.resume()}),be.domElement.addEventListener("webglcontextlost",s=>{s.preventDefault(),mt.playing=!1;const a=xe("#render-error");a&&(a.hidden=!1)});const t=()=>{const s=/(?:^|&)v=([\w-]+)/.exec(location.hash.replace(/^#/,""));if(!s)return null;try{return pl.some(a=>a.id===s[1])?s[1]:null}catch{return null}},e=()=>{const s=t();s&&s!==mt.vehicleId&&(mt.vehicleId=s,pa(s),qe())};e(),window.addEventListener("hashchange",e),document.querySelectorAll("[data-camera]").forEach(s=>{s.addEventListener("click",()=>{mt.camera=s.dataset.camera,document.querySelectorAll("[data-camera]").forEach(a=>{a.setAttribute("aria-pressed",String(a===s))}),qe()})});const n=(s,a,o)=>{const l=document.getElementById(s);l?.addEventListener("click",()=>{const c=l.getAttribute("aria-pressed")!=="true";l.setAttribute("aria-pressed",String(c)),a==="markers"?(mt.markers=c,ql.setVisible(c)):(mt[a]=c,document.body.classList.toggle("inspecting",a==="systems"&&c)),qe()})};n("systems-toggle","systems"),n("path-toggle","path"),n("forces-toggle","markers"),xe("#play-button")?.addEventListener("click",()=>{mt.time>=un&&fr(0),mt.playing=!mt.playing,Bi.setPlaying(mt.playing),qe()}),xe("#restart-button")?.addEventListener("click",()=>{mt.playing=!1,Bi.setPlaying(!1),fr(0)}),xe("#ramp-trial")?.addEventListener("click",()=>{mt.playing=!1,fr(0)}),xe("#flight-trial")?.addEventListener("click",()=>{mt.playing=!1,fr(Oi)});const r=document.getElementById("about-dialog");xe("#moment-button")?.addEventListener("click",()=>{r?.showModal()}),xe("#close-about")?.addEventListener("click",()=>r?.close()),r?.addEventListener("click",s=>{s.target===r&&r.close()})}n1().catch(i=>{console.error("初始化失败",i),xe("#loader")?.classList.add("is-ready");const t=xe("#render-error");t&&(t.hidden=!1)});Object.defineProperty(window,"__APP__",{get:()=>({app:mt,state:bn,spec:Gn,sample:Hn,extras:Ar})});
