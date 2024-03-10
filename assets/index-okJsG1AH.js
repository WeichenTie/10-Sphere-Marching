(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rc="162",Zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eM=0,Jf=1,tM=2,Td=1,nM=2,Ri=3,tr=0,yn=1,Ci=2,ji=0,_s=1,jf=2,Qf=3,eh=4,iM=5,xr=100,rM=101,sM=102,th=103,nh=104,aM=200,oM=201,lM=202,cM=203,vc=204,xc=205,uM=206,fM=207,hM=208,dM=209,pM=210,mM=211,_M=212,gM=213,vM=214,xM=0,MM=1,SM=2,vo=3,EM=4,TM=5,yM=6,AM=7,yd=0,bM=1,wM=2,Qi=0,Ad=1,RM=2,CM=3,LM=4,PM=5,DM=6,UM=7,bd=300,vs=301,xs=302,Mc=303,Sc=304,Ao=306,Ec=1e3,ni=1001,Tc=1002,gn=1003,ih=1004,Vs=1005,Tn=1006,Gl=1007,Sr=1008,er=1009,IM=1010,NM=1011,Cc=1012,wd=1013,Ji=1014,Li=1015,$s=1016,Rd=1017,Cd=1018,Er=1020,OM=1021,ii=1023,FM=1024,BM=1025,Tr=1026,Ms=1027,zM=1028,Ld=1029,GM=1030,Pd=1031,Dd=1033,Hl=33776,Vl=33777,Wl=33778,kl=33779,rh=35840,sh=35841,ah=35842,oh=35843,Ud=36196,lh=37492,ch=37496,uh=37808,fh=37809,hh=37810,dh=37811,ph=37812,mh=37813,_h=37814,gh=37815,vh=37816,xh=37817,Mh=37818,Sh=37819,Eh=37820,Th=37821,Xl=36492,yh=36494,Ah=36495,HM=36283,bh=36284,wh=36285,Rh=36286,VM=3200,WM=3201,kM=0,XM=1,$i="",ti="srgb",nr="srgb-linear",Lc="display-p3",bo="display-p3-linear",xo="linear",Ot="srgb",Mo="rec709",So="p3",Jr=7680,Ch=519,qM=512,YM=513,KM=514,Id=515,ZM=516,$M=517,JM=518,jM=519,Lh=35044,yc="300 es",Ac=1035,Pi=2e3,Eo=2001;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const Ks=Math.PI/180,Js=180/Math.PI;function Es(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function fn(s,e,t){return Math.max(e,Math.min(t,s))}function Pc(s,e){return(s%e+e)%e}function QM(s,e,t,i,a){return i+(s-e)*(a-i)/(t-e)}function eS(s,e,t){return s!==e?(t-s)/(e-s):0}function Zs(s,e,t){return(1-t)*s+t*e}function tS(s,e,t,i){return Zs(s,e,1-Math.exp(-t*i))}function nS(s,e=1){return e-Math.abs(Pc(s,e*2)-e)}function iS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function rS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function sS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function aS(s,e){return s+Math.random()*(e-s)}function oS(s){return s*(.5-Math.random())}function lS(s){s!==void 0&&(Ph=s);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cS(s){return s*Ks}function uS(s){return s*Js}function bc(s){return(s&s-1)===0&&s!==0}function fS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function To(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hS(s,e,t,i,a){const l=Math.cos,u=Math.sin,c=l(t/2),h=u(t/2),d=l((e+i)/2),p=u((e+i)/2),_=l((e-i)/2),v=u((e-i)/2),M=l((i-e)/2),T=u((i-e)/2);switch(a){case"XYX":s.set(c*p,h*_,h*v,c*d);break;case"YZY":s.set(h*v,c*p,h*_,c*d);break;case"ZXZ":s.set(h*_,h*v,c*p,c*d);break;case"XZX":s.set(c*p,h*T,h*M,c*d);break;case"YXY":s.set(h*M,c*p,h*T,c*d);break;case"ZYZ":s.set(h*T,h*M,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ds(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dS={DEG2RAD:Ks,RAD2DEG:Js,generateUUID:Es,clamp:fn,euclideanModulo:Pc,mapLinear:QM,inverseLerp:eS,lerp:Zs,damp:tS,pingpong:nS,smoothstep:iS,smootherstep:rS,randInt:sS,randFloat:aS,randFloatSpread:oS,seededRandom:lS,degToRad:cS,radToDeg:uS,isPowerOfTwo:bc,ceilPowerOfTwo:fS,floorPowerOfTwo:To,setQuaternionFromProperEuler:hS,normalize:mn,denormalize:ds};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*i-u*a+e.x,this.y=l*a+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,a,l,u,c,h,d){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,u,c,h,d)}set(e,t,i,a,l,u,c,h,d){const p=this.elements;return p[0]=e,p[1]=a,p[2]=c,p[3]=t,p[4]=l,p[5]=h,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,u=i[0],c=i[3],h=i[6],d=i[1],p=i[4],_=i[7],v=i[2],M=i[5],T=i[8],w=a[0],g=a[3],m=a[6],N=a[1],R=a[4],D=a[7],V=a[2],B=a[5],U=a[8];return l[0]=u*w+c*N+h*V,l[3]=u*g+c*R+h*B,l[6]=u*m+c*D+h*U,l[1]=d*w+p*N+_*V,l[4]=d*g+p*R+_*B,l[7]=d*m+p*D+_*U,l[2]=v*w+M*N+T*V,l[5]=v*g+M*R+T*B,l[8]=v*m+M*D+T*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*l*p+i*c*h+a*l*d-a*u*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=p*u-c*d,v=c*h-p*l,M=d*l-u*h,T=t*_+i*v+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(a*d-p*i)*w,e[2]=(c*i-a*u)*w,e[3]=v*w,e[4]=(p*t-a*h)*w,e[5]=(a*l-c*t)*w,e[6]=M*w,e[7]=(i*h-d*t)*w,e[8]=(u*t-i*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,u,c){const h=Math.cos(l),d=Math.sin(l);return this.set(i*h,i*d,-i*(h*u+d*c)+u+e,-a*d,a*h,-a*(-d*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new pt;function Nd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pS(){const s=js("canvas");return s.style.display="block",s}const Dh={};function mS(s){s in Dh||(Dh[s]=!0,console.warn(s))}const Uh=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ih=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ya={[nr]:{transfer:xo,primaries:Mo,toReference:s=>s,fromReference:s=>s},[ti]:{transfer:Ot,primaries:Mo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[bo]:{transfer:xo,primaries:So,toReference:s=>s.applyMatrix3(Ih),fromReference:s=>s.applyMatrix3(Uh)},[Lc]:{transfer:Ot,primaries:So,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ih),fromReference:s=>s.applyMatrix3(Uh).convertLinearToSRGB()}},_S=new Set([nr,bo]),Rt={enabled:!0,_workingColorSpace:nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!_S.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Ya[e].toReference,a=Ya[t].fromReference;return a(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ya[s].primaries},getTransfer:function(s){return s===$i?xo:Ya[s].transfer}};function gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jr;class Od{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jr===void 0&&(jr=js("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=gs(l[u]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gs(t[i]/255)*255):t[i]=gs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gS=0;class Fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,c=a.length;u<c;u++)a[u].isDataTexture?l.push(Kl(a[u].image)):l.push(Kl(a[u]))}else l=Kl(a);i.url=l}return t||(e.images[this.uuid]=i),i}}function Kl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Od.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vS=0;class An extends wr{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,i=ni,a=ni,l=Tn,u=Sr,c=ii,h=er,d=An.DEFAULT_ANISOTROPY,p=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Es(),this.name="",this.source=new Fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=bd;An.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,i=0,a=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*i+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*i+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*i+u[11]*a+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l;const h=e.elements,d=h[0],p=h[4],_=h[8],v=h[1],M=h[5],T=h[9],w=h[2],g=h[6],m=h[10];if(Math.abs(p-v)<.01&&Math.abs(_-w)<.01&&Math.abs(T-g)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+w)<.1&&Math.abs(T+g)<.1&&Math.abs(d+M+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,D=(M+1)/2,V=(m+1)/2,B=(p+v)/4,U=(_+w)/4,$=(T+g)/4;return R>D&&R>V?R<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(R),a=B/i,l=U/i):D>V?D<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(D),i=B/a,l=$/a):V<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(V),i=U/l,a=$/l),this.set(i,a,l,t),this}let N=Math.sqrt((g-T)*(g-T)+(_-w)*(_-w)+(v-p)*(v-p));return Math.abs(N)<.001&&(N=1),this.x=(g-T)/N,this.y=(_-w)/N,this.z=(v-p)/N,this.w=Math.acos((d+M+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xS extends wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const l=new An(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends xS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bd extends An{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class MS extends An{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=gn,this.minFilter=gn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,l,u,c){let h=i[a+0],d=i[a+1],p=i[a+2],_=i[a+3];const v=l[u+0],M=l[u+1],T=l[u+2],w=l[u+3];if(c===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=M,e[t+2]=T,e[t+3]=w;return}if(_!==w||h!==v||d!==M||p!==T){let g=1-c;const m=h*v+d*M+p*T+_*w,N=m>=0?1:-1,R=1-m*m;if(R>Number.EPSILON){const V=Math.sqrt(R),B=Math.atan2(V,m*N);g=Math.sin(g*B)/V,c=Math.sin(c*B)/V}const D=c*N;if(h=h*g+v*D,d=d*g+M*D,p=p*g+T*D,_=_*g+w*D,g===1-c){const V=1/Math.sqrt(h*h+d*d+p*p+_*_);h*=V,d*=V,p*=V,_*=V}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,l,u){const c=i[a],h=i[a+1],d=i[a+2],p=i[a+3],_=l[u],v=l[u+1],M=l[u+2],T=l[u+3];return e[t]=c*T+p*_+h*M-d*v,e[t+1]=h*T+p*v+d*_-c*M,e[t+2]=d*T+p*M+c*v-h*_,e[t+3]=p*T-c*_-h*v-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,l=e._z,u=e._order,c=Math.cos,h=Math.sin,d=c(i/2),p=c(a/2),_=c(l/2),v=h(i/2),M=h(a/2),T=h(l/2);switch(u){case"XYZ":this._x=v*p*_+d*M*T,this._y=d*M*_-v*p*T,this._z=d*p*T+v*M*_,this._w=d*p*_-v*M*T;break;case"YXZ":this._x=v*p*_+d*M*T,this._y=d*M*_-v*p*T,this._z=d*p*T-v*M*_,this._w=d*p*_+v*M*T;break;case"ZXY":this._x=v*p*_-d*M*T,this._y=d*M*_+v*p*T,this._z=d*p*T+v*M*_,this._w=d*p*_-v*M*T;break;case"ZYX":this._x=v*p*_-d*M*T,this._y=d*M*_+v*p*T,this._z=d*p*T-v*M*_,this._w=d*p*_+v*M*T;break;case"YZX":this._x=v*p*_+d*M*T,this._y=d*M*_+v*p*T,this._z=d*p*T-v*M*_,this._w=d*p*_-v*M*T;break;case"XZY":this._x=v*p*_-d*M*T,this._y=d*M*_-v*p*T,this._z=d*p*T+v*M*_,this._w=d*p*_+v*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],l=t[8],u=t[1],c=t[5],h=t[9],d=t[2],p=t[6],_=t[10],v=i+c+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(p-h)*M,this._y=(l-d)*M,this._z=(u-a)*M}else if(i>c&&i>_){const M=2*Math.sqrt(1+i-c-_);this._w=(p-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+d)/M}else if(c>_){const M=2*Math.sqrt(1+c-i-_);this._w=(l-d)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+p)/M}else{const M=2*Math.sqrt(1+_-i-c);this._w=(u-a)/M,this._x=(l+d)/M,this._y=(h+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,l=e._z,u=e._w,c=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+a*d-l*h,this._y=a*p+u*h+l*c-i*d,this._z=l*p+u*d+i*h-a*c,this._w=u*p-i*c-a*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,l=this._z,u=this._w;let c=u*e._w+i*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*i+t*this._x,this._y=M*a+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=a*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,l=e.x,u=e.y,c=e.z,h=e.w,d=2*(u*a-c*i),p=2*(c*t-l*a),_=2*(l*i-u*t);return this.x=t+h*d+u*_-c*p,this.y=i+h*p+c*d-l*_,this.z=a+h*_+l*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,l=e.z,u=t.x,c=t.y,h=t.z;return this.x=a*h-l*c,this.y=l*u-i*h,this.z=i*c-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new q,Nh=new br;class ea{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,jn):jn.fromBufferAttribute(l,u),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Za.subVectors(this.max,Ws),Qr.subVectors(e.a,Ws),es.subVectors(e.b,Ws),ts.subVectors(e.c,Ws),Wi.subVectors(es,Qr),ki.subVectors(ts,es),hr.subVectors(Qr,ts);let t=[0,-Wi.z,Wi.y,0,-ki.z,ki.y,0,-hr.z,hr.y,Wi.z,0,-Wi.x,ki.z,0,-ki.x,hr.z,0,-hr.x,-Wi.y,Wi.x,0,-ki.y,ki.x,0,-hr.y,hr.x,0];return!$l(t,Qr,es,ts,Za)||(t=[1,0,0,0,1,0,0,0,1],!$l(t,Qr,es,ts,Za))?!1:($a.crossVectors(Wi,ki),t=[$a.x,$a.y,$a.z],$l(t,Qr,es,ts,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new q,new q,new q,new q,new q,new q,new q,new q],jn=new q,Ka=new ea,Qr=new q,es=new q,ts=new q,Wi=new q,ki=new q,hr=new q,Ws=new q,Za=new q,$a=new q,dr=new q;function $l(s,e,t,i,a){for(let l=0,u=s.length-3;l<=u;l+=3){dr.fromArray(s,l);const c=a.x*Math.abs(dr.x)+a.y*Math.abs(dr.y)+a.z*Math.abs(dr.z),h=e.dot(dr),d=t.dot(dr),p=i.dot(dr);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const SS=new ea,ks=new q,Jl=new q;class Dc{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):SS.setFromPoints(e).getCenter(i);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(ks,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Jl)),this.expandByPoint(ks.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new q,jl=new q,Ja=new q,Xi=new q,Ql=new q,ja=new q,ec=new q;class zd{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){jl.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(jl);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ja),c=Xi.dot(this.direction),h=-Xi.dot(Ja),d=Xi.lengthSq(),p=Math.abs(1-u*u);let _,v,M,T;if(p>0)if(_=u*h-c,v=u*c-h,T=l*p,_>=0)if(v>=-T)if(v<=T){const w=1/p;_*=w,v*=w,M=_*(_+u*v+2*c)+v*(u*_+v+2*h)+d}else v=l,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*h)+d;else v=-l,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*h)+d;else v<=-T?(_=Math.max(0,-(-u*l+c)),v=_>0?-l:Math.min(Math.max(-l,-h),l),M=-_*_+v*(v+2*h)+d):v<=T?(_=0,v=Math.min(Math.max(-l,-h),l),M=v*(v+2*h)+d):(_=Math.max(0,-(u*l+c)),v=_>0?l:Math.min(Math.max(-l,-h),l),M=-_*_+v*(v+2*h)+d);else v=u>0?-l:l,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(jl).addScaledVector(Ja,v),M}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),a=Ti.dot(Ti)-i*i,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),c=i-u,h=i+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,u,c,h;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,a=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,a=(e.min.x-v.x)*d),p>=0?(l=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(l=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),i>u||l>a||((l>i||isNaN(i))&&(i=l),(u<a||isNaN(a))&&(a=u),_>=0?(c=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),i>h||c>a)||((c>i||i!==i)&&(i=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,a,l){Ql.subVectors(t,e),ja.subVectors(i,e),ec.crossVectors(Ql,ja);let u=this.direction.dot(ec),c;if(u>0){if(a)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Xi.subVectors(this.origin,e);const h=c*this.direction.dot(ja.crossVectors(Xi,ja));if(h<0)return null;const d=c*this.direction.dot(Ql.cross(Xi));if(d<0||h+d>u)return null;const p=-c*Xi.dot(ec);return p<0?null:this.at(p/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,i,a,l,u,c,h,d,p,_,v,M,T,w,g){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,u,c,h,d,p,_,v,M,T,w,g)}set(e,t,i,a,l,u,c,h,d,p,_,v,M,T,w,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=a,m[1]=l,m[5]=u,m[9]=c,m[13]=h,m[2]=d,m[6]=p,m[10]=_,m[14]=v,m[3]=M,m[7]=T,m[11]=w,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ns.setFromMatrixColumn(e,0).length(),l=1/ns.setFromMatrixColumn(e,1).length(),u=1/ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,l=e.z,u=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a),p=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*p,M=u*_,T=c*p,w=c*_;t[0]=h*p,t[4]=-h*_,t[8]=d,t[1]=M+T*d,t[5]=v-w*d,t[9]=-c*h,t[2]=w-v*d,t[6]=T+M*d,t[10]=u*h}else if(e.order==="YXZ"){const v=h*p,M=h*_,T=d*p,w=d*_;t[0]=v+w*c,t[4]=T*c-M,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=M*c-T,t[6]=w+v*c,t[10]=u*h}else if(e.order==="ZXY"){const v=h*p,M=h*_,T=d*p,w=d*_;t[0]=v-w*c,t[4]=-u*_,t[8]=T+M*c,t[1]=M+T*c,t[5]=u*p,t[9]=w-v*c,t[2]=-u*d,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const v=u*p,M=u*_,T=c*p,w=c*_;t[0]=h*p,t[4]=T*d-M,t[8]=v*d+w,t[1]=h*_,t[5]=w*d+v,t[9]=M*d-T,t[2]=-d,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,M=u*d,T=c*h,w=c*d;t[0]=h*p,t[4]=w-v*_,t[8]=T*_+M,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=M*_+T,t[10]=v-w*_}else if(e.order==="XZY"){const v=u*h,M=u*d,T=c*h,w=c*d;t[0]=h*p,t[4]=-_,t[8]=d*p,t[1]=v*_+w,t[5]=u*p,t[9]=M*_-T,t[2]=T*_-M,t[6]=c*p,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,TS)}lookAt(e,t,i){const a=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),qi.crossVectors(i,Dn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),qi.crossVectors(i,Dn)),qi.normalize(),Qa.crossVectors(Dn,qi),a[0]=qi.x,a[4]=Qa.x,a[8]=Dn.x,a[1]=qi.y,a[5]=Qa.y,a[9]=Dn.y,a[2]=qi.z,a[6]=Qa.z,a[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,u=i[0],c=i[4],h=i[8],d=i[12],p=i[1],_=i[5],v=i[9],M=i[13],T=i[2],w=i[6],g=i[10],m=i[14],N=i[3],R=i[7],D=i[11],V=i[15],B=a[0],U=a[4],$=a[8],xe=a[12],A=a[1],I=a[5],Me=a[9],_e=a[13],z=a[2],re=a[6],te=a[10],le=a[14],ee=a[3],ce=a[7],ue=a[11],ge=a[15];return l[0]=u*B+c*A+h*z+d*ee,l[4]=u*U+c*I+h*re+d*ce,l[8]=u*$+c*Me+h*te+d*ue,l[12]=u*xe+c*_e+h*le+d*ge,l[1]=p*B+_*A+v*z+M*ee,l[5]=p*U+_*I+v*re+M*ce,l[9]=p*$+_*Me+v*te+M*ue,l[13]=p*xe+_*_e+v*le+M*ge,l[2]=T*B+w*A+g*z+m*ee,l[6]=T*U+w*I+g*re+m*ce,l[10]=T*$+w*Me+g*te+m*ue,l[14]=T*xe+w*_e+g*le+m*ge,l[3]=N*B+R*A+D*z+V*ee,l[7]=N*U+R*I+D*re+V*ce,l[11]=N*$+R*Me+D*te+V*ue,l[15]=N*xe+R*_e+D*le+V*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],u=e[1],c=e[5],h=e[9],d=e[13],p=e[2],_=e[6],v=e[10],M=e[14],T=e[3],w=e[7],g=e[11],m=e[15];return T*(+l*h*_-a*d*_-l*c*v+i*d*v+a*c*M-i*h*M)+w*(+t*h*M-t*d*v+l*u*v-a*u*M+a*d*p-l*h*p)+g*(+t*d*_-t*c*M-l*u*_+i*u*M+l*c*p-i*d*p)+m*(-a*c*p-t*h*_+t*c*v+a*u*_-i*u*v+i*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=e[9],v=e[10],M=e[11],T=e[12],w=e[13],g=e[14],m=e[15],N=_*g*d-w*v*d+w*h*M-c*g*M-_*h*m+c*v*m,R=T*v*d-p*g*d-T*h*M+u*g*M+p*h*m-u*v*m,D=p*w*d-T*_*d+T*c*M-u*w*M-p*c*m+u*_*m,V=T*_*h-p*w*h-T*c*v+u*w*v+p*c*g-u*_*g,B=t*N+i*R+a*D+l*V;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return e[0]=N*U,e[1]=(w*v*l-_*g*l-w*a*M+i*g*M+_*a*m-i*v*m)*U,e[2]=(c*g*l-w*h*l+w*a*d-i*g*d-c*a*m+i*h*m)*U,e[3]=(_*h*l-c*v*l-_*a*d+i*v*d+c*a*M-i*h*M)*U,e[4]=R*U,e[5]=(p*g*l-T*v*l+T*a*M-t*g*M-p*a*m+t*v*m)*U,e[6]=(T*h*l-u*g*l-T*a*d+t*g*d+u*a*m-t*h*m)*U,e[7]=(u*v*l-p*h*l+p*a*d-t*v*d-u*a*M+t*h*M)*U,e[8]=D*U,e[9]=(T*_*l-p*w*l-T*i*M+t*w*M+p*i*m-t*_*m)*U,e[10]=(u*w*l-T*c*l+T*i*d-t*w*d-u*i*m+t*c*m)*U,e[11]=(p*c*l-u*_*l-p*i*d+t*_*d+u*i*M-t*c*M)*U,e[12]=V*U,e[13]=(p*w*a-T*_*a+T*i*v-t*w*v-p*i*g+t*_*g)*U,e[14]=(T*c*a-u*w*a-T*i*h+t*w*h+u*i*g-t*c*g)*U,e[15]=(u*_*a-p*c*a+p*i*h-t*_*h-u*i*v+t*c*v)*U,this}scale(e){const t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),l=1-i,u=e.x,c=e.y,h=e.z,d=l*u,p=l*c;return this.set(d*u+i,d*c-a*h,d*h+a*c,0,d*c+a*h,p*c+i,p*h-a*u,0,d*h-a*c,p*h+a*u,l*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,l,u){return this.set(1,i,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,l=t._x,u=t._y,c=t._z,h=t._w,d=l+l,p=u+u,_=c+c,v=l*d,M=l*p,T=l*_,w=u*p,g=u*_,m=c*_,N=h*d,R=h*p,D=h*_,V=i.x,B=i.y,U=i.z;return a[0]=(1-(w+m))*V,a[1]=(M+D)*V,a[2]=(T-R)*V,a[3]=0,a[4]=(M-D)*B,a[5]=(1-(v+m))*B,a[6]=(g+N)*B,a[7]=0,a[8]=(T+R)*U,a[9]=(g-N)*U,a[10]=(1-(v+w))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let l=ns.set(a[0],a[1],a[2]).length();const u=ns.set(a[4],a[5],a[6]).length(),c=ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Qn.copy(this);const d=1/l,p=1/u,_=1/c;return Qn.elements[0]*=d,Qn.elements[1]*=d,Qn.elements[2]*=d,Qn.elements[4]*=p,Qn.elements[5]*=p,Qn.elements[6]*=p,Qn.elements[8]*=_,Qn.elements[9]*=_,Qn.elements[10]*=_,t.setFromRotationMatrix(Qn),i.x=l,i.y=u,i.z=c,this}makePerspective(e,t,i,a,l,u,c=Pi){const h=this.elements,d=2*l/(t-e),p=2*l/(i-a),_=(t+e)/(t-e),v=(i+a)/(i-a);let M,T;if(c===Pi)M=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(c===Eo)M=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,l,u,c=Pi){const h=this.elements,d=1/(t-e),p=1/(i-a),_=1/(u-l),v=(t+e)*d,M=(i+a)*p;let T,w;if(c===Pi)T=(u+l)*_,w=-2*_;else if(c===Eo)T=l*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ns=new q,Qn=new $t,ES=new q(0,0,0),TS=new q(1,1,1),qi=new q,Qa=new q,Dn=new q,Oh=new $t,Fh=new br;class Di{constructor(e=0,t=0,i=0,a=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,l=a[0],u=a[4],c=a[8],h=a[1],d=a[5],p=a[9],_=a[2],v=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(fn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-fn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yS=0;const Bh=new q,is=new br,yi=new $t,eo=new q,Xs=new q,AS=new q,bS=new br,zh=new q(1,0,0),Gh=new q(0,1,0),Hh=new q(0,0,1),wS={type:"added"},RS={type:"removed"},tc={type:"childadded",child:null},nc={type:"childremoved",child:null};class In extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new q,t=new Di,i=new br,a=new q(1,1,1);function l(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new pt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(zh,e)}rotateY(e){return this.rotateOnAxis(Gh,e)}rotateZ(e){return this.rotateOnAxis(Hh,e)}translateOnAxis(e,t){return Bh.copy(e).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zh,e)}translateY(e){return this.translateOnAxis(Gh,e)}translateZ(e){return this.translateOnAxis(Hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eo.copy(e):eo.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Xs,eo,this.up):yi.lookAt(eo,Xs,this.up),this.quaternion.setFromRotationMatrix(yi),a&&(yi.extractRotation(a.matrixWorld),is.setFromRotationMatrix(yi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wS),tc.child=e,this.dispatchEvent(tc),tc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RS),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,bS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const l=t[i];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const _=h[d];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),v=u(e.skeletons),M=u(e.animations),T=u(e.nodes);c.length>0&&(i.geometries=c),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),M.length>0&&(i.animations=M),T.length>0&&(i.nodes=T)}return i.object=a,i;function u(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}In.DEFAULT_UP=new q(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new q,Ai=new q,ic=new q,bi=new q,rs=new q,ss=new q,Vh=new q,rc=new q,sc=new q,ac=new q;class ci{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),ei.subVectors(e,t),a.cross(ei);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){ei.subVectors(a,t),Ai.subVectors(i,t),ic.subVectors(e,t);const u=ei.dot(ei),c=ei.dot(Ai),h=ei.dot(ic),d=Ai.dot(Ai),p=Ai.dot(ic),_=u*d-c*c;if(_===0)return l.set(0,0,0),null;const v=1/_,M=(d*h-c*p)*v,T=(u*p-c*h)*v;return l.set(1-M-T,T,M)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,a,l,u,c,h){return this.getBarycoord(e,t,i,a,bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,bi.x),h.addScaledVector(u,bi.y),h.addScaledVector(c,bi.z),h)}static isFrontFacing(e,t,i,a){return ei.subVectors(i,t),Ai.subVectors(e,t),ei.cross(Ai).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ei.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,l){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,l=this.c;let u,c;rs.subVectors(a,i),ss.subVectors(l,i),rc.subVectors(e,i);const h=rs.dot(rc),d=ss.dot(rc);if(h<=0&&d<=0)return t.copy(i);sc.subVectors(e,a);const p=rs.dot(sc),_=ss.dot(sc);if(p>=0&&_<=p)return t.copy(a);const v=h*_-p*d;if(v<=0&&h>=0&&p<=0)return u=h/(h-p),t.copy(i).addScaledVector(rs,u);ac.subVectors(e,l);const M=rs.dot(ac),T=ss.dot(ac);if(T>=0&&M<=T)return t.copy(l);const w=M*d-h*T;if(w<=0&&d>=0&&T<=0)return c=d/(d-T),t.copy(i).addScaledVector(ss,c);const g=p*T-M*_;if(g<=0&&_-p>=0&&M-T>=0)return Vh.subVectors(l,a),c=(_-p)/(_-p+(M-T)),t.copy(a).addScaledVector(Vh,c);const m=1/(g+w+v);return u=w*m,c=v*m,t.copy(i).addScaledVector(rs,u).addScaledVector(ss,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},to={h:0,s:0,l:0};function oc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Rt.workingColorSpace){if(e=Pc(e,1),t=fn(t,0,1),i=fn(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,u=2*i-l;this.r=oc(u,l,e+1/3),this.g=oc(u,l,e),this.b=oc(u,l,e-1/3)}return Rt.toWorkingColorSpace(this,a),this}setStyle(e,t=ti){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],c=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const i=Hd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Yl(e.r),this.g=Yl(e.g),this.b=Yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Rt.fromWorkingColorSpace(un.copy(this),e),Math.round(fn(un.r*255,0,255))*65536+Math.round(fn(un.g*255,0,255))*256+Math.round(fn(un.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(un.copy(this),t);const i=un.r,a=un.g,l=un.b,u=Math.max(i,a,l),c=Math.min(i,a,l);let h,d;const p=(c+u)/2;if(c===u)h=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-i)/_+2;break;case l:h=(i-a)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=ti){Rt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,i=un.g,a=un.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(to);const i=Zs(Yi.h,to.h,t),a=Zs(Yi.s,to.s,t),l=Zs(Yi.l,to.l,t);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*a,this.g=l[1]*t+l[4]*i+l[7]*a,this.b=l[2]*t+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Ct;Ct.NAMES=Hd;let CS=0;class wo extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=_s,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const u=[];for(const c in l){const h=l[c];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vd extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new q,no=new lt;class fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),a=mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),a=mn(a,this.array),l=mn(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lh&&(e.usage=this.usage),e}}class Wd extends fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kd extends fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yr extends fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let LS=0;const kn=new $t,lc=new In,as=new q,Un=new ea,qs=new ea,tn=new q;class Rr extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nd(e)?kd:Wd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new pt().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const l=e[i];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new yr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];Un.setFromBufferAttribute(l),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];qs.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(Un.min,qs.min),Un.expandByPoint(tn),tn.addVectors(Un.max,qs.max),Un.expandByPoint(tn)):(Un.expandByPoint(qs.min),Un.expandByPoint(qs.max))}Un.getCenter(i);let a=0;for(let l=0,u=e.count;l<u;l++)tn.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(tn));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)tn.fromBufferAttribute(c,d),h&&(as.fromBufferAttribute(e,d),tn.add(as)),a=Math.max(a,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let $=0;$<i.count;$++)c[$]=new q,h[$]=new q;const d=new q,p=new q,_=new q,v=new lt,M=new lt,T=new lt,w=new q,g=new q;function m($,xe,A){d.fromBufferAttribute(i,$),p.fromBufferAttribute(i,xe),_.fromBufferAttribute(i,A),v.fromBufferAttribute(l,$),M.fromBufferAttribute(l,xe),T.fromBufferAttribute(l,A),p.sub(d),_.sub(d),M.sub(v),T.sub(v);const I=1/(M.x*T.y-T.x*M.y);isFinite(I)&&(w.copy(p).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(I),g.copy(_).multiplyScalar(M.x).addScaledVector(p,-T.x).multiplyScalar(I),c[$].add(w),c[xe].add(w),c[A].add(w),h[$].add(g),h[xe].add(g),h[A].add(g))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let $=0,xe=N.length;$<xe;++$){const A=N[$],I=A.start,Me=A.count;for(let _e=I,z=I+Me;_e<z;_e+=3)m(e.getX(_e+0),e.getX(_e+1),e.getX(_e+2))}const R=new q,D=new q,V=new q,B=new q;function U($){V.fromBufferAttribute(a,$),B.copy(V);const xe=c[$];R.copy(xe),R.sub(V.multiplyScalar(V.dot(xe))).normalize(),D.crossVectors(B,xe);const I=D.dot(h[$])<0?-1:1;u.setXYZW($,R.x,R.y,R.z,I)}for(let $=0,xe=N.length;$<xe;++$){const A=N[$],I=A.start,Me=A.count;for(let _e=I,z=I+Me;_e<z;_e+=3)U(e.getX(_e+0)),U(e.getX(_e+1)),U(e.getX(_e+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,M=i.count;v<M;v++)i.setXYZ(v,0,0,0);const a=new q,l=new q,u=new q,c=new q,h=new q,d=new q,p=new q,_=new q;if(e)for(let v=0,M=e.count;v<M;v+=3){const T=e.getX(v+0),w=e.getX(v+1),g=e.getX(v+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,g),p.subVectors(u,l),_.subVectors(a,l),p.cross(_),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,g),c.add(p),h.add(p),d.add(p),i.setXYZ(T,c.x,c.y,c.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let v=0,M=t.count;v<M;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,l),_.subVectors(a,l),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(c,h){const d=c.array,p=c.itemSize,_=c.normalized,v=new d.constructor(h.length*p);let M=0,T=0;for(let w=0,g=h.length;w<g;w++){c.isInterleavedBufferAttribute?M=h[w]*c.data.stride+c.offset:M=h[w]*p;for(let m=0;m<p;m++)v[T++]=d[M++]}return new fi(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rr,i=this.index.array,a=this.attributes;for(const c in a){const h=a[c],d=e(h,i);t.setAttribute(c,d)}const l=this.morphAttributes;for(const c in l){const h=[],d=l[c];for(let p=0,_=d.length;p<_;p++){const v=d[p],M=e(v,i);h.push(M)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let _=0,v=d.length;_<v;_++){const M=d[_];p.push(M.toJSON(e.data))}p.length>0&&(a[h]=p,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const p=a[d];this.setAttribute(d,p.clone(t))}const l=e.morphAttributes;for(const d in l){const p=[],_=l[d];for(let v=0,M=_.length;v<M;v++)p.push(_[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wh=new $t,pr=new zd,io=new Dc,kh=new q,os=new q,ls=new q,cs=new q,cc=new q,ro=new q,so=new lt,ao=new lt,oo=new lt,Xh=new q,qh=new q,Yh=new q,lo=new q,co=new q;class ui extends In{constructor(e=new Rr,t=new Vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){ro.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const p=c[h],_=l[h];p!==0&&(cc.fromBufferAttribute(_,e),u?ro.addScaledVector(cc,p):ro.addScaledVector(cc.sub(t),p))}t.add(ro)}return t}raycast(e,t){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(l),pr.copy(e.ray).recast(e.near),!(io.containsPoint(pr.origin)===!1&&(pr.intersectSphere(io,kh)===null||pr.origin.distanceToSquared(kh)>(e.far-e.near)**2))&&(Wh.copy(l).invert(),pr.copy(e.ray).applyMatrix4(Wh),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,i){let a;const l=this.geometry,u=this.material,c=l.index,h=l.attributes.position,d=l.attributes.uv,p=l.attributes.uv1,_=l.attributes.normal,v=l.groups,M=l.drawRange;if(c!==null)if(Array.isArray(u))for(let T=0,w=v.length;T<w;T++){const g=v[T],m=u[g.materialIndex],N=Math.max(g.start,M.start),R=Math.min(c.count,Math.min(g.start+g.count,M.start+M.count));for(let D=N,V=R;D<V;D+=3){const B=c.getX(D),U=c.getX(D+1),$=c.getX(D+2);a=uo(this,m,e,i,d,p,_,B,U,$),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const T=Math.max(0,M.start),w=Math.min(c.count,M.start+M.count);for(let g=T,m=w;g<m;g+=3){const N=c.getX(g),R=c.getX(g+1),D=c.getX(g+2);a=uo(this,u,e,i,d,p,_,N,R,D),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,w=v.length;T<w;T++){const g=v[T],m=u[g.materialIndex],N=Math.max(g.start,M.start),R=Math.min(h.count,Math.min(g.start+g.count,M.start+M.count));for(let D=N,V=R;D<V;D+=3){const B=D,U=D+1,$=D+2;a=uo(this,m,e,i,d,p,_,B,U,$),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const T=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let g=T,m=w;g<m;g+=3){const N=g,R=g+1,D=g+2;a=uo(this,u,e,i,d,p,_,N,R,D),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function PS(s,e,t,i,a,l,u,c){let h;if(e.side===yn?h=i.intersectTriangle(u,l,a,!0,c):h=i.intersectTriangle(a,l,u,e.side===tr,c),h===null)return null;co.copy(c),co.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(co);return d<t.near||d>t.far?null:{distance:d,point:co.clone(),object:s}}function uo(s,e,t,i,a,l,u,c,h,d){s.getVertexPosition(c,os),s.getVertexPosition(h,ls),s.getVertexPosition(d,cs);const p=PS(s,e,t,i,os,ls,cs,lo);if(p){a&&(so.fromBufferAttribute(a,c),ao.fromBufferAttribute(a,h),oo.fromBufferAttribute(a,d),p.uv=ci.getInterpolation(lo,os,ls,cs,so,ao,oo,new lt)),l&&(so.fromBufferAttribute(l,c),ao.fromBufferAttribute(l,h),oo.fromBufferAttribute(l,d),p.uv1=ci.getInterpolation(lo,os,ls,cs,so,ao,oo,new lt)),u&&(Xh.fromBufferAttribute(u,c),qh.fromBufferAttribute(u,h),Yh.fromBufferAttribute(u,d),p.normal=ci.getInterpolation(lo,os,ls,cs,Xh,qh,Yh,new q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:h,c:d,normal:new q,materialIndex:0};ci.getNormal(os,ls,cs,_.normal),p.face=_}return p}class ta extends Rr{constructor(e=1,t=1,i=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:u};const c=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],d=[],p=[],_=[];let v=0,M=0;T("z","y","x",-1,-1,i,t,e,u,l,0),T("z","y","x",1,-1,i,t,-e,u,l,1),T("x","z","y",1,1,e,i,t,a,u,2),T("x","z","y",1,-1,e,i,-t,a,u,3),T("x","y","z",1,-1,e,t,i,a,l,4),T("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(h),this.setAttribute("position",new yr(d,3)),this.setAttribute("normal",new yr(p,3)),this.setAttribute("uv",new yr(_,2));function T(w,g,m,N,R,D,V,B,U,$,xe){const A=D/U,I=V/$,Me=D/2,_e=V/2,z=B/2,re=U+1,te=$+1;let le=0,ee=0;const ce=new q;for(let ue=0;ue<te;ue++){const ge=ue*I-_e;for(let De=0;De<re;De++){const Qe=De*A-Me;ce[w]=Qe*N,ce[g]=ge*R,ce[m]=z,d.push(ce.x,ce.y,ce.z),ce[w]=0,ce[g]=0,ce[m]=B>0?1:-1,p.push(ce.x,ce.y,ce.z),_.push(De/U),_.push(1-ue/$),le+=1}}for(let ue=0;ue<$;ue++)for(let ge=0;ge<U;ge++){const De=v+ge+re*ue,Qe=v+ge+re*(ue+1),j=v+(ge+1)+re*(ue+1),he=v+(ge+1)+re*ue;h.push(De,Qe,he),h.push(Qe,j,he),ee+=6}c.addGroup(M,ee,xe),M+=ee,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function _n(s){const e={};for(let t=0;t<s.length;t++){const i=Ss(s[t]);for(const a in i)e[a]=i[a]}return e}function DS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xd(s){return s.getRenderTarget()===null?s.outputColorSpace:Rt.workingColorSpace}const US={clone:Ss,merge:_n};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=DS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qd extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new q,Kh=new lt,Zh=new lt;class Xn extends qd{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Kh,Zh),t.subVectors(Zh,Kh)}setViewOffset(e,t,i,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*i/d,a*=u.width/h,i*=u.height/d}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,fs=1;class OS extends In{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(us,fs,e,t);a.layers=this.layers,this.add(a);const l=new Xn(us,fs,e,t);l.layers=this.layers,this.add(l);const u=new Xn(us,fs,e,t);u.layers=this.layers,this.add(u);const c=new Xn(us,fs,e,t);c.layers=this.layers,this.add(c);const h=new Xn(us,fs,e,t);h.layers=this.layers,this.add(h);const d=new Xn(us,fs,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,l,u,c,h]=t;for(const d of t)this.remove(d);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,h,d,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,l),e.setRenderTarget(i,1,a),e.render(t,u),e.setRenderTarget(i,2,a),e.render(t,c),e.setRenderTarget(i,3,a),e.render(t,h),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(_,v,M),e.xr.enabled=T,i.texture.needsPMREMUpdate=!0}}class Uc extends An{constructor(e,t,i,a,l,u,c,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,i,a,l,u,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FS extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Uc(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ta(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:ji});l.uniforms.tEquirect.value=t;const u=new ui(a,l),c=t.minFilter;return t.minFilter===Sr&&(t.minFilter=Tn),new OS(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,a);e.setRenderTarget(l)}}const uc=new q,BS=new q,zS=new pt;class Zi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=uc.subVectors(i,t).cross(BS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(uc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zS.getNormalMatrix(e),a=this.coplanarPoint(uc).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Dc,fo=new q;class Yd{constructor(e=new Zi,t=new Zi,i=new Zi,a=new Zi,l=new Zi,u=new Zi){this.planes=[e,t,i,a,l,u]}set(e,t,i,a,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(a),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,a=e.elements,l=a[0],u=a[1],c=a[2],h=a[3],d=a[4],p=a[5],_=a[6],v=a[7],M=a[8],T=a[9],w=a[10],g=a[11],m=a[12],N=a[13],R=a[14],D=a[15];if(i[0].setComponents(h-l,v-d,g-M,D-m).normalize(),i[1].setComponents(h+l,v+d,g+M,D+m).normalize(),i[2].setComponents(h+u,v+p,g+T,D+N).normalize(),i[3].setComponents(h-u,v-p,g-T,D-N).normalize(),i[4].setComponents(h-c,v-_,g-w,D-R).normalize(),t===Pi)i[5].setComponents(h+c,v+_,g+w,D+R).normalize();else if(t===Eo)i[5].setComponents(c,_,w,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(fo.x=a.normal.x>0?e.max.x:e.min.x,fo.y=a.normal.y>0?e.max.y:e.min.y,fo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kd(){let s=null,e=!1,t=null,i=null;function a(l,u){t(l,u),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function GS(s,e){const t=e.isWebGL2,i=new WeakMap;function a(d,p){const _=d.array,v=d.usage,M=_.byteLength,T=s.createBuffer();s.bindBuffer(p,T),s.bufferData(p,_,v),d.onUploadCallback();let w;if(_ instanceof Float32Array)w=s.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=s.SHORT;else if(_ instanceof Uint32Array)w=s.UNSIGNED_INT;else if(_ instanceof Int32Array)w=s.INT;else if(_ instanceof Int8Array)w=s.BYTE;else if(_ instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:T,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:M}}function l(d,p,_){const v=p.array,M=p._updateRange,T=p.updateRanges;if(s.bindBuffer(_,d),M.count===-1&&T.length===0&&s.bufferSubData(_,0,v),T.length!==0){for(let w=0,g=T.length;w<g;w++){const m=T[w];t?s.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v,m.start,m.count):s.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v.subarray(m.start,m.start+m.count))}p.clearUpdateRanges()}M.count!==-1&&(t?s.bufferSubData(_,M.offset*v.BYTES_PER_ELEMENT,v,M.offset,M.count):s.bufferSubData(_,M.offset*v.BYTES_PER_ELEMENT,v.subarray(M.offset,M.offset+M.count)),M.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(s.deleteBuffer(p.buffer),i.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,a(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(_.buffer,d,p),_.version=d.version}}return{get:u,remove:c,update:h}}class na extends Rr{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const l=e/2,u=t/2,c=Math.floor(i),h=Math.floor(a),d=c+1,p=h+1,_=e/c,v=t/h,M=[],T=[],w=[],g=[];for(let m=0;m<p;m++){const N=m*v-u;for(let R=0;R<d;R++){const D=R*_-l;T.push(D,-N,0),w.push(0,0,1),g.push(R/c),g.push(1-m/h)}}for(let m=0;m<h;m++)for(let N=0;N<c;N++){const R=N+d*m,D=N+d*(m+1),V=N+1+d*(m+1),B=N+1+d*m;M.push(R,D,B),M.push(D,V,B)}this.setIndex(M),this.setAttribute("position",new yr(T,3)),this.setAttribute("normal",new yr(w,3)),this.setAttribute("uv",new yr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}var HS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
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
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YS=`#ifdef USE_AOMAP
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
#endif`,KS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,JS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eE=`#ifdef USE_IRIDESCENCE
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
#endif`,tE=`#ifdef USE_BUMPMAP
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
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uE=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,fE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hE=`vec3 transformedNormal = objectNormal;
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
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gE="gl_FragColor = linearToOutputTexel( gl_FragColor );",vE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xE=`#ifdef USE_ENVMAP
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
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SE=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RE=`#ifdef USE_GRADIENTMAP
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
}`,CE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UE=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,NE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zE=`PhysicalMaterial material;
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
#endif`,GE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,HE=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,VE=`#if defined( RE_IndirectDiffuse )
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
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JE=`#if defined( USE_POINTS_UV )
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
#endif`,jE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uT=`#ifdef USE_NORMALMAP
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
#endif`,fT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_T=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,gT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ST=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ET=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RT=`#ifdef USE_SKINNING
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
#endif`,CT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LT=`#ifdef USE_SKINNING
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
#endif`,PT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IT=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NT=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VT=`uniform sampler2D t2D;
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`#include <common>
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
}`,KT=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ZT=`#define DISTANCE
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
}`,$T=`#define DISTANCE
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
}`,JT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`uniform float scale;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#define LAMBERT
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
}`,ry=`#define LAMBERT
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
}`,sy=`#define MATCAP
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
}`,ay=`#define MATCAP
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
}`,oy=`#define NORMAL
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
}`,ly=`#define NORMAL
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
}`,cy=`#define PHONG
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
}`,uy=`#define PHONG
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
}`,fy=`#define STANDARD
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
}`,hy=`#define STANDARD
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
}`,dy=`#define TOON
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
}`,py=`#define TOON
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
}`,my=`uniform float size;
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
}`,_y=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,vy=`uniform vec3 color;
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
}`,xy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,My=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:HS,alphahash_pars_fragment:VS,alphamap_fragment:WS,alphamap_pars_fragment:kS,alphatest_fragment:XS,alphatest_pars_fragment:qS,aomap_fragment:YS,aomap_pars_fragment:KS,batching_pars_vertex:ZS,batching_vertex:$S,begin_vertex:JS,beginnormal_vertex:jS,bsdfs:QS,iridescence_fragment:eE,bumpmap_pars_fragment:tE,clipping_planes_fragment:nE,clipping_planes_pars_fragment:iE,clipping_planes_pars_vertex:rE,clipping_planes_vertex:sE,color_fragment:aE,color_pars_fragment:oE,color_pars_vertex:lE,color_vertex:cE,common:uE,cube_uv_reflection_fragment:fE,defaultnormal_vertex:hE,displacementmap_pars_vertex:dE,displacementmap_vertex:pE,emissivemap_fragment:mE,emissivemap_pars_fragment:_E,colorspace_fragment:gE,colorspace_pars_fragment:vE,envmap_fragment:xE,envmap_common_pars_fragment:ME,envmap_pars_fragment:SE,envmap_pars_vertex:EE,envmap_physical_pars_fragment:IE,envmap_vertex:TE,fog_vertex:yE,fog_pars_vertex:AE,fog_fragment:bE,fog_pars_fragment:wE,gradientmap_pars_fragment:RE,lightmap_fragment:CE,lightmap_pars_fragment:LE,lights_lambert_fragment:PE,lights_lambert_pars_fragment:DE,lights_pars_begin:UE,lights_toon_fragment:NE,lights_toon_pars_fragment:OE,lights_phong_fragment:FE,lights_phong_pars_fragment:BE,lights_physical_fragment:zE,lights_physical_pars_fragment:GE,lights_fragment_begin:HE,lights_fragment_maps:VE,lights_fragment_end:WE,logdepthbuf_fragment:kE,logdepthbuf_pars_fragment:XE,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:YE,map_fragment:KE,map_pars_fragment:ZE,map_particle_fragment:$E,map_particle_pars_fragment:JE,metalnessmap_fragment:jE,metalnessmap_pars_fragment:QE,morphinstance_vertex:eT,morphcolor_vertex:tT,morphnormal_vertex:nT,morphtarget_pars_vertex:iT,morphtarget_vertex:rT,normal_fragment_begin:sT,normal_fragment_maps:aT,normal_pars_fragment:oT,normal_pars_vertex:lT,normal_vertex:cT,normalmap_pars_fragment:uT,clearcoat_normal_fragment_begin:fT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:pT,opaque_fragment:mT,packing:_T,premultiplied_alpha_fragment:gT,project_vertex:vT,dithering_fragment:xT,dithering_pars_fragment:MT,roughnessmap_fragment:ST,roughnessmap_pars_fragment:ET,shadowmap_pars_fragment:TT,shadowmap_pars_vertex:yT,shadowmap_vertex:AT,shadowmask_pars_fragment:bT,skinbase_vertex:wT,skinning_pars_vertex:RT,skinning_vertex:CT,skinnormal_vertex:LT,specularmap_fragment:PT,specularmap_pars_fragment:DT,tonemapping_fragment:UT,tonemapping_pars_fragment:IT,transmission_fragment:NT,transmission_pars_fragment:OT,uv_pars_fragment:FT,uv_pars_vertex:BT,uv_vertex:zT,worldpos_vertex:GT,background_vert:HT,background_frag:VT,backgroundCube_vert:WT,backgroundCube_frag:kT,cube_vert:XT,cube_frag:qT,depth_vert:YT,depth_frag:KT,distanceRGBA_vert:ZT,distanceRGBA_frag:$T,equirect_vert:JT,equirect_frag:jT,linedashed_vert:QT,linedashed_frag:ey,meshbasic_vert:ty,meshbasic_frag:ny,meshlambert_vert:iy,meshlambert_frag:ry,meshmatcap_vert:sy,meshmatcap_frag:ay,meshnormal_vert:oy,meshnormal_frag:ly,meshphong_vert:cy,meshphong_frag:uy,meshphysical_vert:fy,meshphysical_frag:hy,meshtoon_vert:dy,meshtoon_frag:py,points_vert:my,points_frag:_y,shadow_vert:gy,shadow_frag:vy,sprite_vert:xy,sprite_frag:My},Te={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},li={basic:{uniforms:_n([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:_n([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ct(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:_n([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:_n([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:_n([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ct(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:_n([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:_n([Te.points,Te.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:_n([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:_n([Te.common,Te.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:_n([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:_n([Te.sprite,Te.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:_n([Te.common,Te.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:_n([Te.lights,Te.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};li.physical={uniforms:_n([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const ho={r:0,b:0,g:0},_r=new Di,Sy=new $t;function Ey(s,e,t,i,a,l,u){const c=new Ct(0);let h=l===!0?0:1,d,p,_=null,v=0,M=null;function T(g,m){let N=!1,R=m.isScene===!0?m.background:null;R&&R.isTexture&&(R=(m.backgroundBlurriness>0?t:e).get(R)),R===null?w(c,h):R&&R.isColor&&(w(R,1),N=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||N)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Ao)?(p===void 0&&(p=new ui(new ta(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Ss(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,B,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),_r.copy(m.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),p.material.uniforms.envMap.value=R,p.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(_r)),p.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Ot,(_!==R||v!==R.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,M=s.toneMapping),p.layers.enableAll(),g.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new ui(new na(2,2),new Ui({name:"BackgroundMaterial",uniforms:Ss(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Ot,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||M!==s.toneMapping)&&(d.material.needsUpdate=!0,_=R,v=R.version,M=s.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null))}function w(g,m){g.getRGB(ho,Xd(s)),i.buffers.color.setClear(ho.r,ho.g,ho.b,m,u)}return{getClearColor:function(){return c},setClearColor:function(g,m=1){c.set(g),h=m,w(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,w(c,h)},render:T}}function Ty(s,e,t,i){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||l!==null,c={},h=g(null);let d=h,p=!1;function _(z,re,te,le,ee){let ce=!1;if(u){const ue=w(le,te,re);d!==ue&&(d=ue,M(d.object)),ce=m(z,le,te,ee),ce&&N(z,le,te,ee)}else{const ue=re.wireframe===!0;(d.geometry!==le.id||d.program!==te.id||d.wireframe!==ue)&&(d.geometry=le.id,d.program=te.id,d.wireframe=ue,ce=!0)}ee!==null&&t.update(ee,s.ELEMENT_ARRAY_BUFFER),(ce||p)&&(p=!1,$(z,re,te,le),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function v(){return i.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function M(z){return i.isWebGL2?s.bindVertexArray(z):l.bindVertexArrayOES(z)}function T(z){return i.isWebGL2?s.deleteVertexArray(z):l.deleteVertexArrayOES(z)}function w(z,re,te){const le=te.wireframe===!0;let ee=c[z.id];ee===void 0&&(ee={},c[z.id]=ee);let ce=ee[re.id];ce===void 0&&(ce={},ee[re.id]=ce);let ue=ce[le];return ue===void 0&&(ue=g(v()),ce[le]=ue),ue}function g(z){const re=[],te=[],le=[];for(let ee=0;ee<a;ee++)re[ee]=0,te[ee]=0,le[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:te,attributeDivisors:le,object:z,attributes:{},index:null}}function m(z,re,te,le){const ee=d.attributes,ce=re.attributes;let ue=0;const ge=te.getAttributes();for(const De in ge)if(ge[De].location>=0){const j=ee[De];let he=ce[De];if(he===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(he=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(he=z.instanceColor)),j===void 0||j.attribute!==he||he&&j.data!==he.data)return!0;ue++}return d.attributesNum!==ue||d.index!==le}function N(z,re,te,le){const ee={},ce=re.attributes;let ue=0;const ge=te.getAttributes();for(const De in ge)if(ge[De].location>=0){let j=ce[De];j===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(j=z.instanceColor));const he={};he.attribute=j,j&&j.data&&(he.data=j.data),ee[De]=he,ue++}d.attributes=ee,d.attributesNum=ue,d.index=le}function R(){const z=d.newAttributes;for(let re=0,te=z.length;re<te;re++)z[re]=0}function D(z){V(z,0)}function V(z,re){const te=d.newAttributes,le=d.enabledAttributes,ee=d.attributeDivisors;te[z]=1,le[z]===0&&(s.enableVertexAttribArray(z),le[z]=1),ee[z]!==re&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,re),ee[z]=re)}function B(){const z=d.newAttributes,re=d.enabledAttributes;for(let te=0,le=re.length;te<le;te++)re[te]!==z[te]&&(s.disableVertexAttribArray(te),re[te]=0)}function U(z,re,te,le,ee,ce,ue){ue===!0?s.vertexAttribIPointer(z,re,te,ee,ce):s.vertexAttribPointer(z,re,te,le,ee,ce)}function $(z,re,te,le){if(i.isWebGL2===!1&&(z.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const ee=le.attributes,ce=te.getAttributes(),ue=re.defaultAttributeValues;for(const ge in ce){const De=ce[ge];if(De.location>=0){let Qe=ee[ge];if(Qe===void 0&&(ge==="instanceMatrix"&&z.instanceMatrix&&(Qe=z.instanceMatrix),ge==="instanceColor"&&z.instanceColor&&(Qe=z.instanceColor)),Qe!==void 0){const j=Qe.normalized,he=Qe.itemSize,we=t.get(Qe);if(we===void 0)continue;const Ze=we.buffer,Ne=we.type,Re=we.bytesPerElement,xt=i.isWebGL2===!0&&(Ne===s.INT||Ne===s.UNSIGNED_INT||Qe.gpuType===wd);if(Qe.isInterleavedBufferAttribute){const Ve=Qe.data,k=Ve.stride,Ht=Qe.offset;if(Ve.isInstancedInterleavedBuffer){for(let Ue=0;Ue<De.locationSize;Ue++)V(De.location+Ue,Ve.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Ue=0;Ue<De.locationSize;Ue++)D(De.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let Ue=0;Ue<De.locationSize;Ue++)U(De.location+Ue,he/De.locationSize,Ne,j,k*Re,(Ht+he/De.locationSize*Ue)*Re,xt)}else{if(Qe.isInstancedBufferAttribute){for(let Ve=0;Ve<De.locationSize;Ve++)V(De.location+Ve,Qe.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Ve=0;Ve<De.locationSize;Ve++)D(De.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let Ve=0;Ve<De.locationSize;Ve++)U(De.location+Ve,he/De.locationSize,Ne,j,he*Re,he/De.locationSize*Ve*Re,xt)}}else if(ue!==void 0){const j=ue[ge];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(De.location,j);break;case 3:s.vertexAttrib3fv(De.location,j);break;case 4:s.vertexAttrib4fv(De.location,j);break;default:s.vertexAttrib1fv(De.location,j)}}}}B()}function xe(){Me();for(const z in c){const re=c[z];for(const te in re){const le=re[te];for(const ee in le)T(le[ee].object),delete le[ee];delete re[te]}delete c[z]}}function A(z){if(c[z.id]===void 0)return;const re=c[z.id];for(const te in re){const le=re[te];for(const ee in le)T(le[ee].object),delete le[ee];delete re[te]}delete c[z.id]}function I(z){for(const re in c){const te=c[re];if(te[z.id]===void 0)continue;const le=te[z.id];for(const ee in le)T(le[ee].object),delete le[ee];delete te[z.id]}}function Me(){_e(),p=!0,d!==h&&(d=h,M(d.object))}function _e(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:_,reset:Me,resetDefaultState:_e,dispose:xe,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:D,disableUnusedAttributes:B}}function yy(s,e,t,i){const a=i.isWebGL2;let l;function u(p){l=p}function c(p,_){s.drawArrays(l,p,_),t.update(_,l,1)}function h(p,_,v){if(v===0)return;let M,T;if(a)M=s,T="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[T](l,p,_,v),t.update(_,l,v)}function d(p,_,v){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<v;T++)this.render(p[T],_[T]);else{M.multiDrawArraysWEBGL(l,p,0,_,0,v);let T=0;for(let w=0;w<v;w++)T+=_[w];t.update(T,l,1)}}this.setMode=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function Ay(s,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,D=u||e.has("OES_texture_float"),V=R&&D,B=u?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:T,maxAttributes:w,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:N,vertexTextures:R,floatFragmentTextures:D,floatVertexTextures:V,maxSamples:B}}function by(s){const e=this;let t=null,i=0,a=!1,l=!1;const u=new Zi,c=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||i!==0||a;return a=v,i=_.length,M},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,M){const T=_.clippingPlanes,w=_.clipIntersection,g=_.clipShadows,m=s.get(_);if(!a||T===null||T.length===0||l&&!g)l?p(null):d();else{const N=l?0:i,R=N*4;let D=m.clippingState||null;h.value=D,D=p(T,v,R,M);for(let V=0;V!==R;++V)D[V]=t[V];m.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,v,M,T){const w=_!==null?_.length:0;let g=null;if(w!==0){if(g=h.value,T!==!0||g===null){const m=M+w*4,N=v.matrixWorldInverse;c.getNormalMatrix(N),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,D=M;R!==w;++R,D+=4)u.copy(_[R]).applyMatrix4(N,c),u.normal.toArray(g,D),g[D+3]=u.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,g}}function wy(s){let e=new WeakMap;function t(u,c){return c===Mc?u.mapping=vs:c===Sc&&(u.mapping=xs),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Mc||c===Sc)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new FS(h.height);return d.fromEquirectangularTexture(s,u),e.set(u,d),u.addEventListener("dispose",a),t(d.texture,u.mapping)}else return null}}return u}function a(u){const c=u.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}class Ry extends qd{constructor(e=-1,t=1,i=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,u=i+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,$h=[.125,.215,.35,.446,.526,.582],Mr=20,fc=new Ry,Jh=new Ct;let hc=null,dc=0,pc=0;const vr=(1+Math.sqrt(5))/2,hs=1/vr,jh=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,vr,hs),new q(0,vr,-hs),new q(hs,0,vr),new q(-hs,0,vr),new q(vr,hs,0),new q(-vr,hs,0)];class Qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,dc,pc),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:$s,format:ii,colorSpace:nr,depthBuffer:!1},a=ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cy(l)),this._blurMaterial=Ly(l,e,t)}return a}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,fc)}_sceneToCubeUV(e,t,i,a){const c=new Xn(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(Jh),p.toneMapping=Qi,p.autoClear=!1;const M=new Vd({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),T=new ui(new ta,M);let w=!1;const g=e.background;g?g.isColor&&(M.color.copy(g),e.background=null,w=!0):(M.color.copy(Jh),w=!0);for(let m=0;m<6;m++){const N=m%3;N===0?(c.up.set(0,h[m],0),c.lookAt(d[m],0,0)):N===1?(c.up.set(0,0,h[m]),c.lookAt(0,d[m],0)):(c.up.set(0,h[m],0),c.lookAt(0,0,d[m]));const R=this._cubeSize;po(a,N*R,m>2?R:0,R,R),p.setRenderTarget(a),w&&p.render(T,c),p.render(e,c)}T.geometry.dispose(),T.material.dispose(),p.toneMapping=v,p.autoClear=_,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===vs||e.mapping===xs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new ui(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;po(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(u,fc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=jh[(a-1)%jh.length];this._blur(e,a-1,a,l,u)}t.autoClear=i}_blur(e,t,i,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,a,"latitudinal",l),this._halfBlur(u,e,i,i,a,"longitudinal",l)}_halfBlur(e,t,i,a,l,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new ui(this._lodPlanes[a],d),v=d.uniforms,M=this._sizeLods[i]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),w=l/T,g=isFinite(l)?1+Math.floor(p*w):Mr;g>Mr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mr}`);const m=[];let N=0;for(let U=0;U<Mr;++U){const $=U/w,xe=Math.exp(-$*$/2);m.push(xe),U===0?N+=xe:U<g&&(N+=2*xe)}for(let U=0;U<m.length;U++)m[U]=m[U]/N;v.envMap.value=e.texture,v.samples.value=g,v.weights.value=m,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:R}=this;v.dTheta.value=T,v.mipInt.value=R-i;const D=this._sizeLods[a],V=3*D*(a>R-ps?a-R+ps:0),B=4*(this._cubeSize-D);po(t,V,B,3*D,2*D),h.setRenderTarget(t),h.render(_,fc)}}function Cy(s){const e=[],t=[],i=[];let a=s;const l=s-ps+1+$h.length;for(let u=0;u<l;u++){const c=Math.pow(2,a);t.push(c);let h=1/c;u>s-ps?h=$h[u-s+ps-1]:u===0&&(h=0),i.push(h);const d=1/(c-2),p=-d,_=1+d,v=[p,p,_,p,_,_,p,p,_,_,p,_],M=6,T=6,w=3,g=2,m=1,N=new Float32Array(w*T*M),R=new Float32Array(g*T*M),D=new Float32Array(m*T*M);for(let B=0;B<M;B++){const U=B%3*2/3-1,$=B>2?0:-1,xe=[U,$,0,U+2/3,$,0,U+2/3,$+1,0,U,$,0,U+2/3,$+1,0,U,$+1,0];N.set(xe,w*T*B),R.set(v,g*T*B);const A=[B,B,B,B,B,B];D.set(A,m*T*B)}const V=new Rr;V.setAttribute("position",new fi(N,w)),V.setAttribute("uv",new fi(R,g)),V.setAttribute("faceIndex",new fi(D,m)),e.push(V),a>ps&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ed(s,e,t){const i=new Ar(s,e,t);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function Ly(s,e,t){const i=new Float32Array(Mr),a=new q(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function td(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function nd(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function Py(s){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const h=c.mapping,d=h===Mc||h===Sc,p=h===vs||h===xs;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new Qh(s)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||p&&_&&a(_)){t===null&&(t=new Qh(s));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",l),v.texture}else return null}}}return c}function a(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function l(c){const h=c.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function Dy(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Uy(s,e,t,i){const a={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);for(const T in v.morphAttributes){const w=v.morphAttributes[T];for(let g=0,m=w.length;g<m;g++)e.remove(w[g])}v.removeEventListener("dispose",u),delete a[v.id];const M=l.get(v);M&&(e.remove(M),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const T in v)e.update(v[T],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const T in M){const w=M[T];for(let g=0,m=w.length;g<m;g++)e.update(w[g],s.ARRAY_BUFFER)}}function d(_){const v=[],M=_.index,T=_.attributes.position;let w=0;if(M!==null){const N=M.array;w=M.version;for(let R=0,D=N.length;R<D;R+=3){const V=N[R+0],B=N[R+1],U=N[R+2];v.push(V,B,B,U,U,V)}}else if(T!==void 0){const N=T.array;w=T.version;for(let R=0,D=N.length/3-1;R<D;R+=3){const V=R+0,B=R+1,U=R+2;v.push(V,B,B,U,U,V)}}else return;const g=new(Nd(v)?kd:Wd)(v,1);g.version=w;const m=l.get(_);m&&e.remove(m),l.set(_,g)}function p(_){const v=l.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&d(_)}else d(_);return l.get(_)}return{get:c,update:h,getWireframeAttribute:p}}function Iy(s,e,t,i){const a=i.isWebGL2;let l;function u(M){l=M}let c,h;function d(M){c=M.type,h=M.bytesPerElement}function p(M,T){s.drawElements(l,T,c,M*h),t.update(T,l,1)}function _(M,T,w){if(w===0)return;let g,m;if(a)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](l,T,c,M*h,w),t.update(T,l,w)}function v(M,T,w){if(w===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<w;m++)this.render(M[m]/h,T[m]);else{g.multiDrawElementsWEBGL(l,T,0,c,M,0,w);let m=0;for(let N=0;N<w;N++)m+=T[N];t.update(m,l,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function Ny(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,c){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Oy(s,e){return s[0]-e[0]}function Fy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function By(s,e,t){const i={},a=new Float32Array(8),l=new WeakMap,u=new sn,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function h(d,p,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const T=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=T!==void 0?T.length:0;let g=l.get(p);if(g===void 0||g.count!==w){let _e=function(){I.dispose(),l.delete(p),p.removeEventListener("dispose",_e)};var M=_e;g!==void 0&&g.texture.dispose();const m=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,R=p.morphAttributes.color!==void 0,D=p.morphAttributes.position||[],V=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let U=0;m===!0&&(U=1),N===!0&&(U=2),R===!0&&(U=3);let $=p.attributes.position.count*U,xe=1;$>e.maxTextureSize&&(xe=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const A=new Float32Array($*xe*4*w),I=new Bd(A,$,xe,w);I.type=Li,I.needsUpdate=!0;const Me=U*4;for(let z=0;z<w;z++){const re=D[z],te=V[z],le=B[z],ee=$*xe*4*z;for(let ce=0;ce<re.count;ce++){const ue=ce*Me;m===!0&&(u.fromBufferAttribute(re,ce),A[ee+ue+0]=u.x,A[ee+ue+1]=u.y,A[ee+ue+2]=u.z,A[ee+ue+3]=0),N===!0&&(u.fromBufferAttribute(te,ce),A[ee+ue+4]=u.x,A[ee+ue+5]=u.y,A[ee+ue+6]=u.z,A[ee+ue+7]=0),R===!0&&(u.fromBufferAttribute(le,ce),A[ee+ue+8]=u.x,A[ee+ue+9]=u.y,A[ee+ue+10]=u.z,A[ee+ue+11]=le.itemSize===4?u.w:1)}}g={count:w,texture:I,size:new lt($,xe)},l.set(p,g),p.addEventListener("dispose",_e)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let m=0;for(let R=0;R<v.length;R++)m+=v[R];const N=p.morphTargetsRelative?1:1-m;_.getUniforms().setValue(s,"morphTargetBaseInfluence",N),_.getUniforms().setValue(s,"morphTargetInfluences",v)}_.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),_.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const T=v===void 0?0:v.length;let w=i[p.id];if(w===void 0||w.length!==T){w=[];for(let D=0;D<T;D++)w[D]=[D,0];i[p.id]=w}for(let D=0;D<T;D++){const V=w[D];V[0]=D,V[1]=v[D]}w.sort(Fy);for(let D=0;D<8;D++)D<T&&w[D][1]?(c[D][0]=w[D][0],c[D][1]=w[D][1]):(c[D][0]=Number.MAX_SAFE_INTEGER,c[D][1]=0);c.sort(Oy);const g=p.morphAttributes.position,m=p.morphAttributes.normal;let N=0;for(let D=0;D<8;D++){const V=c[D],B=V[0],U=V[1];B!==Number.MAX_SAFE_INTEGER&&U?(g&&p.getAttribute("morphTarget"+D)!==g[B]&&p.setAttribute("morphTarget"+D,g[B]),m&&p.getAttribute("morphNormal"+D)!==m[B]&&p.setAttribute("morphNormal"+D,m[B]),a[D]=U,N+=U):(g&&p.hasAttribute("morphTarget"+D)===!0&&p.deleteAttribute("morphTarget"+D),m&&p.hasAttribute("morphNormal"+D)===!0&&p.deleteAttribute("morphNormal"+D),a[D]=0)}const R=p.morphTargetsRelative?1:1-N;_.getUniforms().setValue(s,"morphTargetBaseInfluence",R),_.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function zy(s,e,t,i){let a=new WeakMap;function l(h){const d=i.render.frame,p=h.geometry,_=e.get(h,p);if(a.get(_)!==d&&(e.update(_),a.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==d&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==d&&(v.update(),a.set(v,d))}return _}function u(){a=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:u}}class Zd extends An{constructor(e,t,i,a,l,u,c,h,d,p){if(p=p!==void 0?p:Tr,p!==Tr&&p!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Tr&&(i=Ji),i===void 0&&p===Ms&&(i=Er),super(null,a,l,u,c,h,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:gn,this.minFilter=h!==void 0?h:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $d=new An,Jd=new Zd(1,1);Jd.compareFunction=Id;const jd=new Bd,Qd=new MS,ep=new Uc,id=[],rd=[],sd=new Float32Array(16),ad=new Float32Array(9),od=new Float32Array(4);function Ts(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let l=id[a];if(l===void 0&&(l=new Float32Array(a),id[a]=l),e!==0){i.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,s[u].toArray(l,c)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function jt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ro(s,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Gy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),jt(t,e)}}function Vy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),jt(t,e)}}function Wy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),jt(t,e)}}function ky(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,i))return;od.set(i),s.uniformMatrix2fv(this.addr,!1,od),jt(t,i)}}function Xy(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,i))return;ad.set(i),s.uniformMatrix3fv(this.addr,!1,ad),jt(t,i)}}function qy(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,i))return;sd.set(i),s.uniformMatrix4fv(this.addr,!1,sd),jt(t,i)}}function Yy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ky(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),jt(t,e)}}function Zy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),jt(t,e)}}function $y(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),jt(t,e)}}function Jy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),jt(t,e)}}function Qy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),jt(t,e)}}function eA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),jt(t,e)}}function tA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?Jd:$d;t.setTexture2D(e||l,a)}function nA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Qd,a)}function iA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||ep,a)}function rA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||jd,a)}function sA(s){switch(s){case 5126:return Gy;case 35664:return Hy;case 35665:return Vy;case 35666:return Wy;case 35674:return ky;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return Ky;case 35668:case 35672:return Zy;case 35669:case 35673:return $y;case 5125:return Jy;case 36294:return jy;case 36295:return Qy;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}function aA(s,e){s.uniform1fv(this.addr,e)}function oA(s,e){const t=Ts(e,this.size,2);s.uniform2fv(this.addr,t)}function lA(s,e){const t=Ts(e,this.size,3);s.uniform3fv(this.addr,t)}function cA(s,e){const t=Ts(e,this.size,4);s.uniform4fv(this.addr,t)}function uA(s,e){const t=Ts(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fA(s,e){const t=Ts(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hA(s,e){const t=Ts(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dA(s,e){s.uniform1iv(this.addr,e)}function pA(s,e){s.uniform2iv(this.addr,e)}function mA(s,e){s.uniform3iv(this.addr,e)}function _A(s,e){s.uniform4iv(this.addr,e)}function gA(s,e){s.uniform1uiv(this.addr,e)}function vA(s,e){s.uniform2uiv(this.addr,e)}function xA(s,e){s.uniform3uiv(this.addr,e)}function MA(s,e){s.uniform4uiv(this.addr,e)}function SA(s,e,t){const i=this.cache,a=e.length,l=Ro(t,a);Jt(i,l)||(s.uniform1iv(this.addr,l),jt(i,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||$d,l[u])}function EA(s,e,t){const i=this.cache,a=e.length,l=Ro(t,a);Jt(i,l)||(s.uniform1iv(this.addr,l),jt(i,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Qd,l[u])}function TA(s,e,t){const i=this.cache,a=e.length,l=Ro(t,a);Jt(i,l)||(s.uniform1iv(this.addr,l),jt(i,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||ep,l[u])}function yA(s,e,t){const i=this.cache,a=e.length,l=Ro(t,a);Jt(i,l)||(s.uniform1iv(this.addr,l),jt(i,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||jd,l[u])}function AA(s){switch(s){case 5126:return aA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return hA;case 5124:case 35670:return dA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return _A;case 5125:return gA;case 36294:return vA;case 36295:return xA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return yA}}class bA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sA(t.type)}}class wA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AA(t.type)}}class RA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const c=a[l];c.setValue(e,t[c.id],i)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function ld(s,e){s.seq.push(e),s.map[e.id]=e}function CA(s,e,t){const i=s.name,a=i.length;for(mc.lastIndex=0;;){const l=mc.exec(i),u=mc.lastIndex;let c=l[1];const h=l[2]==="]",d=l[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===a){ld(t,d===void 0?new bA(c,s,e):new wA(c,s,e));break}else{let _=t.map[c];_===void 0&&(_=new RA(c),ld(t,_)),t=_}}}class go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);CA(l,u,this)}}setValue(e,t,i,a){const l=this.map[t];l!==void 0&&l.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let l=0,u=t.length;l!==u;++l){const c=t[l],h=i[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&i.push(u)}return i}}function cd(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const LA=37297;let PA=0;function DA(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function UA(s){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(s);let i;switch(e===t?i="":e===So&&t===Mo?i="LinearDisplayP3ToLinearSRGB":e===Mo&&t===So&&(i="LinearSRGBToLinearDisplayP3"),s){case nr:case bo:return[i,"LinearTransferOETF"];case ti:case Lc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function ud(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+DA(s.getShaderSource(e),u)}else return a}function IA(s,e){const t=UA(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function NA(s,e){let t;switch(e){case Ad:t="Linear";break;case RM:t="Reinhard";break;case CM:t="OptimizedCineon";break;case LM:t="ACESFilmic";break;case DM:t="AgX";break;case UM:t="Neutral";break;case PM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function OA(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function FA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function BA(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zA(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(e,a),u=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:c}}return t}function ms(s){return s!==""}function fd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GA=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(s){return s.replace(GA,VA)}const HA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function VA(s,e){let t=dt[e];if(t===void 0){const i=HA.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}const WA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(s){return s.replace(WA,kA)}function kA(s,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function pd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function qA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function KA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yd:e="ENVMAP_BLENDING_MULTIPLY";break;case bM:e="ENVMAP_BLENDING_MIX";break;case wM:e="ENVMAP_BLENDING_ADD";break}return e}function ZA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $A(s,e,t,i){const a=s.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=XA(t),d=qA(t),p=YA(t),_=KA(t),v=ZA(t),M=t.isWebGL2?"":OA(t),T=FA(t),w=BA(l),g=a.createProgram();let m,N,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ms).join(`
`),m.length>0&&(m+=`
`),N=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ms).join(`
`),N.length>0&&(N+=`
`)):(m=[pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),N=[M,pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?dt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?NA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,IA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),u=wc(u),u=fd(u,t),u=hd(u,t),c=wc(c),c=fd(c,t),c=hd(c,t),u=dd(u),c=dd(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,N=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N);const D=R+m+u,V=R+N+c,B=cd(a,a.VERTEX_SHADER,D),U=cd(a,a.FRAGMENT_SHADER,V);a.attachShader(g,B),a.attachShader(g,U),t.index0AttributeName!==void 0?a.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function $(Me){if(s.debug.checkShaderErrors){const _e=a.getProgramInfoLog(g).trim(),z=a.getShaderInfoLog(B).trim(),re=a.getShaderInfoLog(U).trim();let te=!0,le=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,g,B,U);else{const ee=ud(a,B,"vertex"),ce=ud(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+Me.name+`
Material Type: `+Me.type+`

Program Info Log: `+_e+`
`+ee+`
`+ce)}else _e!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_e):(z===""||re==="")&&(le=!1);le&&(Me.diagnostics={runnable:te,programLog:_e,vertexShader:{log:z,prefix:m},fragmentShader:{log:re,prefix:N}})}a.deleteShader(B),a.deleteShader(U),xe=new go(a,g),A=zA(a,g)}let xe;this.getUniforms=function(){return xe===void 0&&$(this),xe};let A;this.getAttributes=function(){return A===void 0&&$(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(g,LA)),I},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=B,this.fragmentShader=U,this}let JA=0;class jA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QA(e),t.set(e,i)),i}}class QA{constructor(e){this.id=JA++,this.code=e,this.usedTimes=0}}function eb(s,e,t,i,a,l,u){const c=new Gd,h=new jA,d=new Set,p=[],_=a.isWebGL2,v=a.logarithmicDepthBuffer,M=a.vertexTextures;let T=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return d.add(A),A===0?"uv":`uv${A}`}function m(A,I,Me,_e,z){const re=_e.fog,te=z.geometry,le=A.isMeshStandardMaterial?_e.environment:null,ee=(A.isMeshStandardMaterial?t:e).get(A.envMap||le),ce=ee&&ee.mapping===Ao?ee.image.height:null,ue=w[A.type];A.precision!==null&&(T=a.getMaxPrecision(A.precision),T!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",T,"instead."));const ge=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,De=ge!==void 0?ge.length:0;let Qe=0;te.morphAttributes.position!==void 0&&(Qe=1),te.morphAttributes.normal!==void 0&&(Qe=2),te.morphAttributes.color!==void 0&&(Qe=3);let j,he,we,Ze;if(ue){const St=li[ue];j=St.vertexShader,he=St.fragmentShader}else j=A.vertexShader,he=A.fragmentShader,h.update(A),we=h.getVertexShaderID(A),Ze=h.getFragmentShaderID(A);const Ne=s.getRenderTarget(),Re=z.isInstancedMesh===!0,xt=z.isBatchedMesh===!0,Ve=!!A.map,k=!!A.matcap,Ht=!!ee,Ue=!!A.aoMap,$e=!!A.lightMap,He=!!A.bumpMap,je=!!A.normalMap,et=!!A.displacementMap,at=!!A.emissiveMap,Et=!!A.metalnessMap,C=!!A.roughnessMap,S=A.anisotropy>0,Q=A.clearcoat>0,se=A.iridescence>0,pe=A.sheen>0,de=A.transmission>0,Ke=S&&!!A.anisotropyMap,Ge=Q&&!!A.clearcoatMap,Ee=Q&&!!A.clearcoatNormalMap,ye=Q&&!!A.clearcoatRoughnessMap,Je=se&&!!A.iridescenceMap,Se=se&&!!A.iridescenceThicknessMap,Dt=pe&&!!A.sheenColorMap,it=pe&&!!A.sheenRoughnessMap,ze=!!A.specularMap,Le=!!A.specularColorMap,Oe=!!A.specularIntensityMap,L=de&&!!A.transmissionMap,oe=de&&!!A.thicknessMap,Ie=!!A.gradientMap,O=!!A.alphaMap,ve=A.alphaTest>0,X=!!A.alphaHash,me=!!A.extensions;let be=Qi;A.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(be=s.toneMapping);const ft={isWebGL2:_,shaderID:ue,shaderType:A.type,shaderName:A.name,vertexShader:j,fragmentShader:he,defines:A.defines,customVertexShaderID:we,customFragmentShaderID:Ze,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:T,batching:xt,instancing:Re,instancingColor:Re&&z.instanceColor!==null,instancingMorph:Re&&z.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:nr,alphaToCoverage:!!A.alphaToCoverage,map:Ve,matcap:k,envMap:Ht,envMapMode:Ht&&ee.mapping,envMapCubeUVHeight:ce,aoMap:Ue,lightMap:$e,bumpMap:He,normalMap:je,displacementMap:M&&et,emissiveMap:at,normalMapObjectSpace:je&&A.normalMapType===XM,normalMapTangentSpace:je&&A.normalMapType===kM,metalnessMap:Et,roughnessMap:C,anisotropy:S,anisotropyMap:Ke,clearcoat:Q,clearcoatMap:Ge,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ye,iridescence:se,iridescenceMap:Je,iridescenceThicknessMap:Se,sheen:pe,sheenColorMap:Dt,sheenRoughnessMap:it,specularMap:ze,specularColorMap:Le,specularIntensityMap:Oe,transmission:de,transmissionMap:L,thicknessMap:oe,gradientMap:Ie,opaque:A.transparent===!1&&A.blending===_s&&A.alphaToCoverage===!1,alphaMap:O,alphaTest:ve,alphaHash:X,combine:A.combine,mapUv:Ve&&g(A.map.channel),aoMapUv:Ue&&g(A.aoMap.channel),lightMapUv:$e&&g(A.lightMap.channel),bumpMapUv:He&&g(A.bumpMap.channel),normalMapUv:je&&g(A.normalMap.channel),displacementMapUv:et&&g(A.displacementMap.channel),emissiveMapUv:at&&g(A.emissiveMap.channel),metalnessMapUv:Et&&g(A.metalnessMap.channel),roughnessMapUv:C&&g(A.roughnessMap.channel),anisotropyMapUv:Ke&&g(A.anisotropyMap.channel),clearcoatMapUv:Ge&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:it&&g(A.sheenRoughnessMap.channel),specularMapUv:ze&&g(A.specularMap.channel),specularColorMapUv:Le&&g(A.specularColorMap.channel),specularIntensityMapUv:Oe&&g(A.specularIntensityMap.channel),transmissionMapUv:L&&g(A.transmissionMap.channel),thicknessMapUv:oe&&g(A.thicknessMap.channel),alphaMapUv:O&&g(A.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(je||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(Ve||O),fog:!!re,useFog:A.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Qe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&Me.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ve&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Ot,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ci,flipSided:A.side===yn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:me&&A.extensions.derivatives===!0,extensionFragDepth:me&&A.extensions.fragDepth===!0,extensionDrawBuffers:me&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:me&&A.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ft.vertexUv1s=d.has(1),ft.vertexUv2s=d.has(2),ft.vertexUv3s=d.has(3),d.clear(),ft}function N(A){const I=[];if(A.shaderID?I.push(A.shaderID):(I.push(A.customVertexShaderID),I.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Me in A.defines)I.push(Me),I.push(A.defines[Me]);return A.isRawShaderMaterial===!1&&(R(I,A),D(I,A),I.push(s.outputColorSpace)),I.push(A.customProgramCacheKey),I.join()}function R(A,I){A.push(I.precision),A.push(I.outputColorSpace),A.push(I.envMapMode),A.push(I.envMapCubeUVHeight),A.push(I.mapUv),A.push(I.alphaMapUv),A.push(I.lightMapUv),A.push(I.aoMapUv),A.push(I.bumpMapUv),A.push(I.normalMapUv),A.push(I.displacementMapUv),A.push(I.emissiveMapUv),A.push(I.metalnessMapUv),A.push(I.roughnessMapUv),A.push(I.anisotropyMapUv),A.push(I.clearcoatMapUv),A.push(I.clearcoatNormalMapUv),A.push(I.clearcoatRoughnessMapUv),A.push(I.iridescenceMapUv),A.push(I.iridescenceThicknessMapUv),A.push(I.sheenColorMapUv),A.push(I.sheenRoughnessMapUv),A.push(I.specularMapUv),A.push(I.specularColorMapUv),A.push(I.specularIntensityMapUv),A.push(I.transmissionMapUv),A.push(I.thicknessMapUv),A.push(I.combine),A.push(I.fogExp2),A.push(I.sizeAttenuation),A.push(I.morphTargetsCount),A.push(I.morphAttributeCount),A.push(I.numDirLights),A.push(I.numPointLights),A.push(I.numSpotLights),A.push(I.numSpotLightMaps),A.push(I.numHemiLights),A.push(I.numRectAreaLights),A.push(I.numDirLightShadows),A.push(I.numPointLightShadows),A.push(I.numSpotLightShadows),A.push(I.numSpotLightShadowsWithMaps),A.push(I.numLightProbes),A.push(I.shadowMapType),A.push(I.toneMapping),A.push(I.numClippingPlanes),A.push(I.numClipIntersection),A.push(I.depthPacking)}function D(A,I){c.disableAll(),I.isWebGL2&&c.enable(0),I.supportsVertexTextures&&c.enable(1),I.instancing&&c.enable(2),I.instancingColor&&c.enable(3),I.instancingMorph&&c.enable(4),I.matcap&&c.enable(5),I.envMap&&c.enable(6),I.normalMapObjectSpace&&c.enable(7),I.normalMapTangentSpace&&c.enable(8),I.clearcoat&&c.enable(9),I.iridescence&&c.enable(10),I.alphaTest&&c.enable(11),I.vertexColors&&c.enable(12),I.vertexAlphas&&c.enable(13),I.vertexUv1s&&c.enable(14),I.vertexUv2s&&c.enable(15),I.vertexUv3s&&c.enable(16),I.vertexTangents&&c.enable(17),I.anisotropy&&c.enable(18),I.alphaHash&&c.enable(19),I.batching&&c.enable(20),A.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.skinning&&c.enable(4),I.morphTargets&&c.enable(5),I.morphNormals&&c.enable(6),I.morphColors&&c.enable(7),I.premultipliedAlpha&&c.enable(8),I.shadowMapEnabled&&c.enable(9),I.useLegacyLights&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.alphaToCoverage&&c.enable(20),A.push(c.mask)}function V(A){const I=w[A.type];let Me;if(I){const _e=li[I];Me=US.clone(_e.uniforms)}else Me=A.uniforms;return Me}function B(A,I){let Me;for(let _e=0,z=p.length;_e<z;_e++){const re=p[_e];if(re.cacheKey===I){Me=re,++Me.usedTimes;break}}return Me===void 0&&(Me=new $A(s,I,A,l),p.push(Me)),Me}function U(A){if(--A.usedTimes===0){const I=p.indexOf(A);p[I]=p[p.length-1],p.pop(),A.destroy()}}function $(A){h.remove(A)}function xe(){h.dispose()}return{getParameters:m,getProgramCacheKey:N,getUniforms:V,acquireProgram:B,releaseProgram:U,releaseShaderCache:$,programs:p,dispose:xe}}function tb(){let s=new WeakMap;function e(l){let u=s.get(l);return u===void 0&&(u={},s.set(l,u)),u}function t(l){s.delete(l)}function i(l,u,c){s.get(l)[u]=c}function a(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function nb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function md(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _d(){const s=[];let e=0;const t=[],i=[],a=[];function l(){e=0,t.length=0,i.length=0,a.length=0}function u(_,v,M,T,w,g){let m=s[e];return m===void 0?(m={id:_.id,object:_,geometry:v,material:M,groupOrder:T,renderOrder:_.renderOrder,z:w,group:g},s[e]=m):(m.id=_.id,m.object=_,m.geometry=v,m.material=M,m.groupOrder=T,m.renderOrder=_.renderOrder,m.z=w,m.group=g),e++,m}function c(_,v,M,T,w,g){const m=u(_,v,M,T,w,g);M.transmission>0?i.push(m):M.transparent===!0?a.push(m):t.push(m)}function h(_,v,M,T,w,g){const m=u(_,v,M,T,w,g);M.transmission>0?i.unshift(m):M.transparent===!0?a.unshift(m):t.unshift(m)}function d(_,v){t.length>1&&t.sort(_||nb),i.length>1&&i.sort(v||md),a.length>1&&a.sort(v||md)}function p(){for(let _=e,v=s.length;_<v;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:l,push:c,unshift:h,finish:p,sort:d}}function ib(){let s=new WeakMap;function e(i,a){const l=s.get(i);let u;return l===void 0?(u=new _d,s.set(i,[u])):a>=l.length?(u=new _d,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function rb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Ct};break;case"SpotLight":t={position:new q,direction:new q,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function sb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ab=0;function ob(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lb(s,e){const t=new rb,i=sb(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new q);const l=new q,u=new $t,c=new $t;function h(p,_){let v=0,M=0,T=0;for(let Me=0;Me<9;Me++)a.probe[Me].set(0,0,0);let w=0,g=0,m=0,N=0,R=0,D=0,V=0,B=0,U=0,$=0,xe=0;p.sort(ob);const A=_===!0?Math.PI:1;for(let Me=0,_e=p.length;Me<_e;Me++){const z=p[Me],re=z.color,te=z.intensity,le=z.distance,ee=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=re.r*te*A,M+=re.g*te*A,T+=re.b*te*A;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)a.probe[ce].addScaledVector(z.sh.coefficients[ce],te);xe++}else if(z.isDirectionalLight){const ce=t.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity*A),z.castShadow){const ue=z.shadow,ge=i.get(z);ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize=ue.mapSize,a.directionalShadow[w]=ge,a.directionalShadowMap[w]=ee,a.directionalShadowMatrix[w]=z.shadow.matrix,D++}a.directional[w]=ce,w++}else if(z.isSpotLight){const ce=t.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(re).multiplyScalar(te*A),ce.distance=le,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,a.spot[m]=ce;const ue=z.shadow;if(z.map&&(a.spotLightMap[U]=z.map,U++,ue.updateMatrices(z),z.castShadow&&$++),a.spotLightMatrix[m]=ue.matrix,z.castShadow){const ge=i.get(z);ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize=ue.mapSize,a.spotShadow[m]=ge,a.spotShadowMap[m]=ee,B++}m++}else if(z.isRectAreaLight){const ce=t.get(z);ce.color.copy(re).multiplyScalar(te),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),a.rectArea[N]=ce,N++}else if(z.isPointLight){const ce=t.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity*A),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const ue=z.shadow,ge=i.get(z);ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize=ue.mapSize,ge.shadowCameraNear=ue.camera.near,ge.shadowCameraFar=ue.camera.far,a.pointShadow[g]=ge,a.pointShadowMap[g]=ee,a.pointShadowMatrix[g]=z.shadow.matrix,V++}a.point[g]=ce,g++}else if(z.isHemisphereLight){const ce=t.get(z);ce.skyColor.copy(z.color).multiplyScalar(te*A),ce.groundColor.copy(z.groundColor).multiplyScalar(te*A),a.hemi[R]=ce,R++}}N>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Te.LTC_FLOAT_1,a.rectAreaLTC2=Te.LTC_FLOAT_2):(a.rectAreaLTC1=Te.LTC_HALF_1,a.rectAreaLTC2=Te.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Te.LTC_FLOAT_1,a.rectAreaLTC2=Te.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Te.LTC_HALF_1,a.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=v,a.ambient[1]=M,a.ambient[2]=T;const I=a.hash;(I.directionalLength!==w||I.pointLength!==g||I.spotLength!==m||I.rectAreaLength!==N||I.hemiLength!==R||I.numDirectionalShadows!==D||I.numPointShadows!==V||I.numSpotShadows!==B||I.numSpotMaps!==U||I.numLightProbes!==xe)&&(a.directional.length=w,a.spot.length=m,a.rectArea.length=N,a.point.length=g,a.hemi.length=R,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=V,a.pointShadowMap.length=V,a.spotShadow.length=B,a.spotShadowMap.length=B,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=V,a.spotLightMatrix.length=B+U-$,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=$,a.numLightProbes=xe,I.directionalLength=w,I.pointLength=g,I.spotLength=m,I.rectAreaLength=N,I.hemiLength=R,I.numDirectionalShadows=D,I.numPointShadows=V,I.numSpotShadows=B,I.numSpotMaps=U,I.numLightProbes=xe,a.version=ab++)}function d(p,_){let v=0,M=0,T=0,w=0,g=0;const m=_.matrixWorldInverse;for(let N=0,R=p.length;N<R;N++){const D=p[N];if(D.isDirectionalLight){const V=a.directional[v];V.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),V.direction.sub(l),V.direction.transformDirection(m),v++}else if(D.isSpotLight){const V=a.spot[T];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(m),V.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),V.direction.sub(l),V.direction.transformDirection(m),T++}else if(D.isRectAreaLight){const V=a.rectArea[w];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(m),c.identity(),u.copy(D.matrixWorld),u.premultiply(m),c.extractRotation(u),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),V.halfWidth.applyMatrix4(c),V.halfHeight.applyMatrix4(c),w++}else if(D.isPointLight){const V=a.point[M];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(m),M++}else if(D.isHemisphereLight){const V=a.hemi[g];V.direction.setFromMatrixPosition(D.matrixWorld),V.direction.transformDirection(m),g++}}}return{setup:h,setupView:d,state:a}}function gd(s,e){const t=new lb(s,e),i=[],a=[];function l(){i.length=0,a.length=0}function u(_){i.push(_)}function c(_){a.push(_)}function h(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:l,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:h,setupLightsView:d,pushLight:u,pushShadow:c}}function cb(s,e){let t=new WeakMap;function i(l,u=0){const c=t.get(l);let h;return c===void 0?(h=new gd(s,e),t.set(l,[h])):u>=c.length?(h=new gd(s,e),c.push(h)):h=c[u],h}function a(){t=new WeakMap}return{get:i,dispose:a}}class ub extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fb extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,db=`uniform sampler2D shadow_pass;
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
}`;function pb(s,e,t){let i=new Yd;const a=new lt,l=new lt,u=new sn,c=new ub({depthPacking:WM}),h=new fb,d={},p=t.maxTextureSize,_={[tr]:yn,[yn]:tr,[Ci]:Ci},v=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:hb,fragmentShader:db}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const T=new Rr;T.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ui(T,v),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let m=this.type;this.render=function(B,U,$){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||B.length===0)return;const xe=s.getRenderTarget(),A=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),Me=s.state;Me.setBlending(ji),Me.buffers.color.setClear(1,1,1,1),Me.buffers.depth.setTest(!0),Me.setScissorTest(!1);const _e=m!==Ri&&this.type===Ri,z=m===Ri&&this.type!==Ri;for(let re=0,te=B.length;re<te;re++){const le=B[re],ee=le.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;a.copy(ee.mapSize);const ce=ee.getFrameExtents();if(a.multiply(ce),l.copy(ee.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(l.x=Math.floor(p/ce.x),a.x=l.x*ce.x,ee.mapSize.x=l.x),a.y>p&&(l.y=Math.floor(p/ce.y),a.y=l.y*ce.y,ee.mapSize.y=l.y)),ee.map===null||_e===!0||z===!0){const ge=this.type!==Ri?{minFilter:gn,magFilter:gn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Ar(a.x,a.y,ge),ee.map.texture.name=le.name+".shadowMap",ee.camera.updateProjectionMatrix()}s.setRenderTarget(ee.map),s.clear();const ue=ee.getViewportCount();for(let ge=0;ge<ue;ge++){const De=ee.getViewport(ge);u.set(l.x*De.x,l.y*De.y,l.x*De.z,l.y*De.w),Me.viewport(u),ee.updateMatrices(le,ge),i=ee.getFrustum(),D(U,$,ee.camera,le,this.type)}ee.isPointLightShadow!==!0&&this.type===Ri&&N(ee,$),ee.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(xe,A,I)};function N(B,U){const $=e.update(w);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ar(a.x,a.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(U,null,$,v,w,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(U,null,$,M,w,null)}function R(B,U,$,xe){let A=null;const I=$.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(I!==void 0)A=I;else if(A=$.isPointLight===!0?h:c,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Me=A.uuid,_e=U.uuid;let z=d[Me];z===void 0&&(z={},d[Me]=z);let re=z[_e];re===void 0&&(re=A.clone(),z[_e]=re,U.addEventListener("dispose",V)),A=re}if(A.visible=U.visible,A.wireframe=U.wireframe,xe===Ri?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:_[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,$.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Me=s.properties.get(A);Me.light=$}return A}function D(B,U,$,xe,A){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&A===Ri)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,B.matrixWorld);const _e=e.update(B),z=B.material;if(Array.isArray(z)){const re=_e.groups;for(let te=0,le=re.length;te<le;te++){const ee=re[te],ce=z[ee.materialIndex];if(ce&&ce.visible){const ue=R(B,ce,xe,A);B.onBeforeShadow(s,B,U,$,_e,ue,ee),s.renderBufferDirect($,null,_e,ue,B,ee),B.onAfterShadow(s,B,U,$,_e,ue,ee)}}}else if(z.visible){const re=R(B,z,xe,A);B.onBeforeShadow(s,B,U,$,_e,re,null),s.renderBufferDirect($,null,_e,re,B,null),B.onAfterShadow(s,B,U,$,_e,re,null)}}const Me=B.children;for(let _e=0,z=Me.length;_e<z;_e++)D(Me[_e],U,$,xe,A)}function V(B){B.target.removeEventListener("dispose",V);for(const $ in d){const xe=d[$],A=B.target.uuid;A in xe&&(xe[A].dispose(),delete xe[A])}}}function mb(s,e,t){const i=t.isWebGL2;function a(){let O=!1;const ve=new sn;let X=null;const me=new sn(0,0,0,0);return{setMask:function(be){X!==be&&!O&&(s.colorMask(be,be,be,be),X=be)},setLocked:function(be){O=be},setClear:function(be,ft,St,At,Ft){Ft===!0&&(be*=At,ft*=At,St*=At),ve.set(be,ft,St,At),me.equals(ve)===!1&&(s.clearColor(be,ft,St,At),me.copy(ve))},reset:function(){O=!1,X=null,me.set(-1,0,0,0)}}}function l(){let O=!1,ve=null,X=null,me=null;return{setTest:function(be){be?Re(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(be){ve!==be&&!O&&(s.depthMask(be),ve=be)},setFunc:function(be){if(X!==be){switch(be){case xM:s.depthFunc(s.NEVER);break;case MM:s.depthFunc(s.ALWAYS);break;case SM:s.depthFunc(s.LESS);break;case vo:s.depthFunc(s.LEQUAL);break;case EM:s.depthFunc(s.EQUAL);break;case TM:s.depthFunc(s.GEQUAL);break;case yM:s.depthFunc(s.GREATER);break;case AM:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}X=be}},setLocked:function(be){O=be},setClear:function(be){me!==be&&(s.clearDepth(be),me=be)},reset:function(){O=!1,ve=null,X=null,me=null}}}function u(){let O=!1,ve=null,X=null,me=null,be=null,ft=null,St=null,At=null,Ft=null;return{setTest:function(Mt){O||(Mt?Re(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(Mt){ve!==Mt&&!O&&(s.stencilMask(Mt),ve=Mt)},setFunc:function(Mt,bt,Qt){(X!==Mt||me!==bt||be!==Qt)&&(s.stencilFunc(Mt,bt,Qt),X=Mt,me=bt,be=Qt)},setOp:function(Mt,bt,Qt){(ft!==Mt||St!==bt||At!==Qt)&&(s.stencilOp(Mt,bt,Qt),ft=Mt,St=bt,At=Qt)},setLocked:function(Mt){O=Mt},setClear:function(Mt){Ft!==Mt&&(s.clearStencil(Mt),Ft=Mt)},reset:function(){O=!1,ve=null,X=null,me=null,be=null,ft=null,St=null,At=null,Ft=null}}}const c=new a,h=new l,d=new u,p=new WeakMap,_=new WeakMap;let v={},M={},T=new WeakMap,w=[],g=null,m=!1,N=null,R=null,D=null,V=null,B=null,U=null,$=null,xe=new Ct(0,0,0),A=0,I=!1,Me=null,_e=null,z=null,re=null,te=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ce=0;const ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ee=ce>=1):ue.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ee=ce>=2);let ge=null,De={};const Qe=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),he=new sn().fromArray(Qe),we=new sn().fromArray(j);function Ze(O,ve,X,me){const be=new Uint8Array(4),ft=s.createTexture();s.bindTexture(O,ft),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let St=0;St<X;St++)i&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(ve,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(ve+St,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return ft}const Ne={};Ne[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),Ne[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ne[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Re(s.DEPTH_TEST),h.setFunc(vo),et(!1),at(Jf),Re(s.CULL_FACE),He(ji);function Re(O){v[O]!==!0&&(s.enable(O),v[O]=!0)}function xt(O){v[O]!==!1&&(s.disable(O),v[O]=!1)}function Ve(O,ve){return M[O]!==ve?(s.bindFramebuffer(O,ve),M[O]=ve,i&&(O===s.DRAW_FRAMEBUFFER&&(M[s.FRAMEBUFFER]=ve),O===s.FRAMEBUFFER&&(M[s.DRAW_FRAMEBUFFER]=ve)),!0):!1}function k(O,ve){let X=w,me=!1;if(O){X=T.get(ve),X===void 0&&(X=[],T.set(ve,X));const be=O.textures;if(X.length!==be.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,St=be.length;ft<St;ft++)X[ft]=s.COLOR_ATTACHMENT0+ft;X.length=be.length,me=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,me=!0);if(me)if(t.isWebGL2)s.drawBuffers(X);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ht(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Ue={[xr]:s.FUNC_ADD,[rM]:s.FUNC_SUBTRACT,[sM]:s.FUNC_REVERSE_SUBTRACT};if(i)Ue[th]=s.MIN,Ue[nh]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ue[th]=O.MIN_EXT,Ue[nh]=O.MAX_EXT)}const $e={[aM]:s.ZERO,[oM]:s.ONE,[lM]:s.SRC_COLOR,[vc]:s.SRC_ALPHA,[pM]:s.SRC_ALPHA_SATURATE,[hM]:s.DST_COLOR,[uM]:s.DST_ALPHA,[cM]:s.ONE_MINUS_SRC_COLOR,[xc]:s.ONE_MINUS_SRC_ALPHA,[dM]:s.ONE_MINUS_DST_COLOR,[fM]:s.ONE_MINUS_DST_ALPHA,[mM]:s.CONSTANT_COLOR,[_M]:s.ONE_MINUS_CONSTANT_COLOR,[gM]:s.CONSTANT_ALPHA,[vM]:s.ONE_MINUS_CONSTANT_ALPHA};function He(O,ve,X,me,be,ft,St,At,Ft,Mt){if(O===ji){m===!0&&(xt(s.BLEND),m=!1);return}if(m===!1&&(Re(s.BLEND),m=!0),O!==iM){if(O!==N||Mt!==I){if((R!==xr||B!==xr)&&(s.blendEquation(s.FUNC_ADD),R=xr,B=xr),Mt)switch(O){case _s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jf:s.blendFunc(s.ONE,s.ONE);break;case Qf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case _s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}D=null,V=null,U=null,$=null,xe.set(0,0,0),A=0,N=O,I=Mt}return}be=be||ve,ft=ft||X,St=St||me,(ve!==R||be!==B)&&(s.blendEquationSeparate(Ue[ve],Ue[be]),R=ve,B=be),(X!==D||me!==V||ft!==U||St!==$)&&(s.blendFuncSeparate($e[X],$e[me],$e[ft],$e[St]),D=X,V=me,U=ft,$=St),(At.equals(xe)===!1||Ft!==A)&&(s.blendColor(At.r,At.g,At.b,Ft),xe.copy(At),A=Ft),N=O,I=!1}function je(O,ve){O.side===Ci?xt(s.CULL_FACE):Re(s.CULL_FACE);let X=O.side===yn;ve&&(X=!X),et(X),O.blending===_s&&O.transparent===!1?He(ji):He(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),h.setFunc(O.depthFunc),h.setTest(O.depthTest),h.setMask(O.depthWrite),c.setMask(O.colorWrite);const me=O.stencilWrite;d.setTest(me),me&&(d.setMask(O.stencilWriteMask),d.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),d.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),C(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(O){Me!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),Me=O)}function at(O){O!==eM?(Re(s.CULL_FACE),O!==_e&&(O===Jf?s.cullFace(s.BACK):O===tM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),_e=O}function Et(O){O!==z&&(ee&&s.lineWidth(O),z=O)}function C(O,ve,X){O?(Re(s.POLYGON_OFFSET_FILL),(re!==ve||te!==X)&&(s.polygonOffset(ve,X),re=ve,te=X)):xt(s.POLYGON_OFFSET_FILL)}function S(O){O?Re(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function Q(O){O===void 0&&(O=s.TEXTURE0+le-1),ge!==O&&(s.activeTexture(O),ge=O)}function se(O,ve,X){X===void 0&&(ge===null?X=s.TEXTURE0+le-1:X=ge);let me=De[X];me===void 0&&(me={type:void 0,texture:void 0},De[X]=me),(me.type!==O||me.texture!==ve)&&(ge!==X&&(s.activeTexture(X),ge=X),s.bindTexture(O,ve||Ne[O]),me.type=O,me.texture=ve)}function pe(){const O=De[ge];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(O){he.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),he.copy(O))}function Oe(O){we.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),we.copy(O))}function L(O,ve){let X=_.get(ve);X===void 0&&(X=new WeakMap,_.set(ve,X));let me=X.get(O);me===void 0&&(me=s.getUniformBlockIndex(ve,O.name),X.set(O,me))}function oe(O,ve){const me=_.get(ve).get(O);p.get(ve)!==me&&(s.uniformBlockBinding(ve,me,O.__bindingPointIndex),p.set(ve,me))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ge=null,De={},M={},T=new WeakMap,w=[],g=null,m=!1,N=null,R=null,D=null,V=null,B=null,U=null,$=null,xe=new Ct(0,0,0),A=0,I=!1,Me=null,_e=null,z=null,re=null,te=null,he.set(0,0,s.canvas.width,s.canvas.height),we.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Re,disable:xt,bindFramebuffer:Ve,drawBuffers:k,useProgram:Ht,setBlending:He,setMaterial:je,setFlipSided:et,setCullFace:at,setLineWidth:Et,setPolygonOffset:C,setScissorTest:S,activeTexture:Q,bindTexture:se,unbindTexture:pe,compressedTexImage2D:de,compressedTexImage3D:Ke,texImage2D:it,texImage3D:ze,updateUBOMapping:L,uniformBlockBinding:oe,texStorage2D:Se,texStorage3D:Dt,texSubImage2D:Ge,texSubImage3D:Ee,compressedTexSubImage2D:ye,compressedTexSubImage3D:Je,scissor:Le,viewport:Oe,reset:Ie}}function _b(s,e,t,i,a,l,u){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new lt,_=new WeakMap;let v;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,S){return T?new OffscreenCanvas(C,S):js("canvas")}function g(C,S,Q,se){let pe=1;const de=Et(C);if((de.width>se||de.height>se)&&(pe=se/Math.max(de.width,de.height)),pe<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ke=S?To:Math.floor,Ge=Ke(pe*de.width),Ee=Ke(pe*de.height);v===void 0&&(v=w(Ge,Ee));const ye=Q?w(Ge,Ee):v;return ye.width=Ge,ye.height=Ee,ye.getContext("2d").drawImage(C,0,0,Ge,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ge+"x"+Ee+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),C;return C}function m(C){const S=Et(C);return bc(S.width)&&bc(S.height)}function N(C){return c?!1:C.wrapS!==ni||C.wrapT!==ni||C.minFilter!==gn&&C.minFilter!==Tn}function R(C,S){return C.generateMipmaps&&S&&C.minFilter!==gn&&C.minFilter!==Tn}function D(C){s.generateMipmap(C)}function V(C,S,Q,se,pe=!1){if(c===!1)return S;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de=S;if(S===s.RED&&(Q===s.FLOAT&&(de=s.R32F),Q===s.HALF_FLOAT&&(de=s.R16F),Q===s.UNSIGNED_BYTE&&(de=s.R8)),S===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.R8UI),Q===s.UNSIGNED_SHORT&&(de=s.R16UI),Q===s.UNSIGNED_INT&&(de=s.R32UI),Q===s.BYTE&&(de=s.R8I),Q===s.SHORT&&(de=s.R16I),Q===s.INT&&(de=s.R32I)),S===s.RG&&(Q===s.FLOAT&&(de=s.RG32F),Q===s.HALF_FLOAT&&(de=s.RG16F),Q===s.UNSIGNED_BYTE&&(de=s.RG8)),S===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RG8UI),Q===s.UNSIGNED_SHORT&&(de=s.RG16UI),Q===s.UNSIGNED_INT&&(de=s.RG32UI),Q===s.BYTE&&(de=s.RG8I),Q===s.SHORT&&(de=s.RG16I),Q===s.INT&&(de=s.RG32I)),S===s.RGBA){const Ke=pe?xo:Rt.getTransfer(se);Q===s.FLOAT&&(de=s.RGBA32F),Q===s.HALF_FLOAT&&(de=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(de=Ke===Ot?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function B(C,S,Q){return R(C,Q)===!0||C.isFramebufferTexture&&C.minFilter!==gn&&C.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function U(C){return C===gn||C===ih||C===Vs?s.NEAREST:s.LINEAR}function $(C){const S=C.target;S.removeEventListener("dispose",$),A(S),S.isVideoTexture&&_.delete(S)}function xe(C){const S=C.target;S.removeEventListener("dispose",xe),Me(S)}function A(C){const S=i.get(C);if(S.__webglInit===void 0)return;const Q=C.source,se=M.get(Q);if(se){const pe=se[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&I(C),Object.keys(se).length===0&&M.delete(Q)}i.remove(C)}function I(C){const S=i.get(C);s.deleteTexture(S.__webglTexture);const Q=C.source,se=M.get(Q);delete se[S.__cacheKey],u.memory.textures--}function Me(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let pe=0;pe<S.__webglFramebuffer[se].length;pe++)s.deleteFramebuffer(S.__webglFramebuffer[se][pe]);else s.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)s.deleteFramebuffer(S.__webglFramebuffer[se]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Q=C.textures;for(let se=0,pe=Q.length;se<pe;se++){const de=i.get(Q[se]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),i.remove(Q[se])}i.remove(C)}let _e=0;function z(){_e=0}function re(){const C=_e;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),_e+=1,C}function te(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function le(C,S){const Q=i.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){const se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(Q,C,S);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+S)}function ee(C,S){const Q=i.get(C);if(C.version>0&&Q.__version!==C.version){we(Q,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+S)}function ce(C,S){const Q=i.get(C);if(C.version>0&&Q.__version!==C.version){we(Q,C,S);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+S)}function ue(C,S){const Q=i.get(C);if(C.version>0&&Q.__version!==C.version){Ze(Q,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+S)}const ge={[Ec]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[Tc]:s.MIRRORED_REPEAT},De={[gn]:s.NEAREST,[ih]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[Gl]:s.LINEAR_MIPMAP_NEAREST,[Sr]:s.LINEAR_MIPMAP_LINEAR},Qe={[qM]:s.NEVER,[jM]:s.ALWAYS,[YM]:s.LESS,[Id]:s.LEQUAL,[KM]:s.EQUAL,[JM]:s.GEQUAL,[ZM]:s.GREATER,[$M]:s.NOTEQUAL};function j(C,S,Q){if(S.type===Li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===Gl||S.magFilter===Vs||S.magFilter===Sr||S.minFilter===Tn||S.minFilter===Gl||S.minFilter===Vs||S.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Q?(s.texParameteri(C,s.TEXTURE_WRAP_S,ge[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ge[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ge[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,De[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,De[S.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==ni||S.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,U(S.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,U(S.minFilter)),S.minFilter!==gn&&S.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Qe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gn||S.minFilter!==Vs&&S.minFilter!==Sr||S.type===Li&&e.has("OES_texture_float_linear")===!1||c===!1&&S.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function he(C,S){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",$));const se=S.source;let pe=M.get(se);pe===void 0&&(pe={},M.set(se,pe));const de=te(S);if(de!==C.__cacheKey){pe[de]===void 0&&(pe[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),pe[de].usedTimes++;const Ke=pe[C.__cacheKey];Ke!==void 0&&(pe[C.__cacheKey].usedTimes--,Ke.usedTimes===0&&I(S)),C.__cacheKey=de,C.__webglTexture=pe[de].texture}return Q}function we(C,S,Q){let se=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=s.TEXTURE_3D);const pe=he(C,S),de=S.source;t.bindTexture(se,C.__webglTexture,s.TEXTURE0+Q);const Ke=i.get(de);if(de.version!==Ke.__version||pe===!0){t.activeTexture(s.TEXTURE0+Q);const Ge=Rt.getPrimaries(Rt.workingColorSpace),Ee=S.colorSpace===$i?null:Rt.getPrimaries(S.colorSpace),ye=S.colorSpace===$i||Ge===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Je=N(S)&&m(S.image)===!1;let Se=g(S.image,Je,!1,a.maxTextureSize);Se=at(S,Se);const Dt=m(Se)||c,it=l.convert(S.format,S.colorSpace);let ze=l.convert(S.type),Le=V(S.internalFormat,it,ze,S.colorSpace,S.isVideoTexture);j(se,S,Dt);let Oe;const L=S.mipmaps,oe=c&&S.isVideoTexture!==!0&&Le!==Ud,Ie=Ke.__version===void 0||pe===!0,O=de.dataReady,ve=B(S,Se,Dt);if(S.isDepthTexture)Le=s.DEPTH_COMPONENT,c?S.type===Li?Le=s.DEPTH_COMPONENT32F:S.type===Ji?Le=s.DEPTH_COMPONENT24:S.type===Er?Le=s.DEPTH24_STENCIL8:Le=s.DEPTH_COMPONENT16:S.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Tr&&Le===s.DEPTH_COMPONENT&&S.type!==Cc&&S.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ji,ze=l.convert(S.type)),S.format===Ms&&Le===s.DEPTH_COMPONENT&&(Le=s.DEPTH_STENCIL,S.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Er,ze=l.convert(S.type))),Ie&&(oe?t.texStorage2D(s.TEXTURE_2D,1,Le,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,Le,Se.width,Se.height,0,it,ze,null));else if(S.isDataTexture)if(L.length>0&&Dt){oe&&Ie&&t.texStorage2D(s.TEXTURE_2D,ve,Le,L[0].width,L[0].height);for(let X=0,me=L.length;X<me;X++)Oe=L[X],oe?O&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,Oe.width,Oe.height,it,ze,Oe.data):t.texImage2D(s.TEXTURE_2D,X,Le,Oe.width,Oe.height,0,it,ze,Oe.data);S.generateMipmaps=!1}else oe?(Ie&&t.texStorage2D(s.TEXTURE_2D,ve,Le,Se.width,Se.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,it,ze,Se.data)):t.texImage2D(s.TEXTURE_2D,0,Le,Se.width,Se.height,0,it,ze,Se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){oe&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,Le,L[0].width,L[0].height,Se.depth);for(let X=0,me=L.length;X<me;X++)Oe=L[X],S.format!==ii?it!==null?oe?O&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Oe.width,Oe.height,Se.depth,it,Oe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Le,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Oe.width,Oe.height,Se.depth,it,ze,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Le,Oe.width,Oe.height,Se.depth,0,it,ze,Oe.data)}else{oe&&Ie&&t.texStorage2D(s.TEXTURE_2D,ve,Le,L[0].width,L[0].height);for(let X=0,me=L.length;X<me;X++)Oe=L[X],S.format!==ii?it!==null?oe?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,Oe.width,Oe.height,it,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Le,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?O&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,Oe.width,Oe.height,it,ze,Oe.data):t.texImage2D(s.TEXTURE_2D,X,Le,Oe.width,Oe.height,0,it,ze,Oe.data)}else if(S.isDataArrayTexture)oe?(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,Le,Se.width,Se.height,Se.depth),O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,it,ze,Se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,Se.width,Se.height,Se.depth,0,it,ze,Se.data);else if(S.isData3DTexture)oe?(Ie&&t.texStorage3D(s.TEXTURE_3D,ve,Le,Se.width,Se.height,Se.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,it,ze,Se.data)):t.texImage3D(s.TEXTURE_3D,0,Le,Se.width,Se.height,Se.depth,0,it,ze,Se.data);else if(S.isFramebufferTexture){if(Ie)if(oe)t.texStorage2D(s.TEXTURE_2D,ve,Le,Se.width,Se.height);else{let X=Se.width,me=Se.height;for(let be=0;be<ve;be++)t.texImage2D(s.TEXTURE_2D,be,Le,X,me,0,it,ze,null),X>>=1,me>>=1}}else if(L.length>0&&Dt){if(oe&&Ie){const X=Et(L[0]);t.texStorage2D(s.TEXTURE_2D,ve,Le,X.width,X.height)}for(let X=0,me=L.length;X<me;X++)Oe=L[X],oe?O&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,it,ze,Oe):t.texImage2D(s.TEXTURE_2D,X,Le,it,ze,Oe);S.generateMipmaps=!1}else if(oe){if(Ie){const X=Et(Se);t.texStorage2D(s.TEXTURE_2D,ve,Le,X.width,X.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,it,ze,Se)}else t.texImage2D(s.TEXTURE_2D,0,Le,it,ze,Se);R(S,Dt)&&D(se),Ke.__version=de.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ze(C,S,Q){if(S.image.length!==6)return;const se=he(C,S),pe=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Q);const de=i.get(pe);if(pe.version!==de.__version||se===!0){t.activeTexture(s.TEXTURE0+Q);const Ke=Rt.getPrimaries(Rt.workingColorSpace),Ge=S.colorSpace===$i?null:Rt.getPrimaries(S.colorSpace),Ee=S.colorSpace===$i||Ke===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ye=S.isCompressedTexture||S.image[0].isCompressedTexture,Je=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let X=0;X<6;X++)!ye&&!Je?Se[X]=g(S.image[X],!1,!0,a.maxCubemapSize):Se[X]=Je?S.image[X].image:S.image[X],Se[X]=at(S,Se[X]);const Dt=Se[0],it=m(Dt)||c,ze=l.convert(S.format,S.colorSpace),Le=l.convert(S.type),Oe=V(S.internalFormat,ze,Le,S.colorSpace),L=c&&S.isVideoTexture!==!0,oe=de.__version===void 0||se===!0,Ie=pe.dataReady;let O=B(S,Dt,it);j(s.TEXTURE_CUBE_MAP,S,it);let ve;if(ye){L&&oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Oe,Dt.width,Dt.height);for(let X=0;X<6;X++){ve=Se[X].mipmaps;for(let me=0;me<ve.length;me++){const be=ve[me];S.format!==ii?ze!==null?L?Ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,be.width,be.height,ze,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,Oe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,be.width,be.height,ze,Le,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,Oe,be.width,be.height,0,ze,Le,be.data)}}}else{if(ve=S.mipmaps,L&&oe){ve.length>0&&O++;const X=Et(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,O,Oe,X.width,X.height)}for(let X=0;X<6;X++)if(Je){L?Ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Se[X].width,Se[X].height,ze,Le,Se[X].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,Se[X].width,Se[X].height,0,ze,Le,Se[X].data);for(let me=0;me<ve.length;me++){const ft=ve[me].image[X].image;L?Ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,ft.width,ft.height,ze,Le,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,Oe,ft.width,ft.height,0,ze,Le,ft.data)}}else{L?Ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ze,Le,Se[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,ze,Le,Se[X]);for(let me=0;me<ve.length;me++){const be=ve[me];L?Ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,ze,Le,be.image[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,Oe,ze,Le,be.image[X])}}}R(S,it)&&D(s.TEXTURE_CUBE_MAP),de.__version=pe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ne(C,S,Q,se,pe,de){const Ke=l.convert(Q.format,Q.colorSpace),Ge=l.convert(Q.type),Ee=V(Q.internalFormat,Ke,Ge,Q.colorSpace);if(!i.get(S).__hasExternalTextures){const Je=Math.max(1,S.width>>de),Se=Math.max(1,S.height>>de);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,de,Ee,Je,Se,S.depth,0,Ke,Ge,null):t.texImage2D(pe,de,Ee,Je,Se,0,Ke,Ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),je(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,pe,i.get(Q).__webglTexture,0,He(S)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,pe,i.get(Q).__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(C,S,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let se=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Q||je(S)){const pe=S.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Li?se=s.DEPTH_COMPONENT32F:pe.type===Ji&&(se=s.DEPTH_COMPONENT24));const de=He(S);je(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,se,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,de,se,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,se,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const se=He(S);Q&&je(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,S.width,S.height):je(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const se=S.textures;for(let pe=0;pe<se.length;pe++){const de=se[pe],Ke=l.convert(de.format,de.colorSpace),Ge=l.convert(de.type),Ee=V(de.internalFormat,Ke,Ge,de.colorSpace),ye=He(S);Q&&je(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,Ee,S.width,S.height):je(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,Ee,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),le(S.depthTexture,0);const se=i.get(S.depthTexture).__webglTexture,pe=He(S);if(S.depthTexture.format===Tr)je(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(S.depthTexture.format===Ms)je(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ve(C){const S=i.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");xt(S.__webglFramebuffer,C)}else if(Q){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]=s.createRenderbuffer(),Re(S.__webglDepthbuffer[se],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Re(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function k(C,S,Q){const se=i.get(C);S!==void 0&&Ne(se.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ve(C)}function Ht(C){const S=C.texture,Q=i.get(C),se=i.get(S);C.addEventListener("dispose",xe);const pe=C.textures,de=C.isWebGLCubeRenderTarget===!0,Ke=pe.length>1,Ge=m(C)||c;if(Ke||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=S.version,u.memory.textures++),de){Q.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(c&&S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer[Ee]=[];for(let ye=0;ye<S.mipmaps.length;ye++)Q.__webglFramebuffer[Ee][ye]=s.createFramebuffer()}else Q.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(c&&S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)Q.__webglFramebuffer[Ee]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ke)if(a.drawBuffers)for(let Ee=0,ye=pe.length;Ee<ye;Ee++){const Je=i.get(pe[Ee]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&je(C)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){const ye=pe[Ee];Q.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee]);const Je=l.convert(ye.format,ye.colorSpace),Se=l.convert(ye.type),Dt=V(ye.internalFormat,Je,Se,ye.colorSpace,C.isXRRenderTarget===!0),it=He(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,Dt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(Q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),j(s.TEXTURE_CUBE_MAP,S,Ge);for(let Ee=0;Ee<6;Ee++)if(c&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Ne(Q.__webglFramebuffer[Ee][ye],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye);else Ne(Q.__webglFramebuffer[Ee],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);R(S,Ge)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ee=0,ye=pe.length;Ee<ye;Ee++){const Je=pe[Ee],Se=i.get(Je);t.bindTexture(s.TEXTURE_2D,Se.__webglTexture),j(s.TEXTURE_2D,Je,Ge),Ne(Q.__webglFramebuffer,C,Je,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,0),R(Je,Ge)&&D(s.TEXTURE_2D)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?Ee=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,se.__webglTexture),j(Ee,S,Ge),c&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)Ne(Q.__webglFramebuffer[ye],C,S,s.COLOR_ATTACHMENT0,Ee,ye);else Ne(Q.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,Ee,0);R(S,Ge)&&D(Ee),t.unbindTexture()}C.depthBuffer&&Ve(C)}function Ue(C){const S=m(C)||c,Q=C.textures;for(let se=0,pe=Q.length;se<pe;se++){const de=Q[se];if(R(de,S)){const Ke=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ge=i.get(de).__webglTexture;t.bindTexture(Ke,Ge),D(Ke),t.unbindTexture()}}}function $e(C){if(c&&C.samples>0&&je(C)===!1){const S=C.textures,Q=C.width,se=C.height;let pe=s.COLOR_BUFFER_BIT;const de=[],Ke=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=i.get(C),Ee=S.length>1;if(Ee)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){de.push(s.COLOR_ATTACHMENT0+ye),C.depthBuffer&&de.push(Ke);const Je=Ge.__ignoreDepthValues!==void 0?Ge.__ignoreDepthValues:!1;if(Je===!1&&(C.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Ee&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[ye]),Je===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ke]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ke])),Ee){const Se=i.get(S[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,Q,se,0,0,Q,se,pe,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[ye]);const Je=i.get(S[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}}function He(C){return Math.min(a.maxSamples,C.samples)}function je(C){const S=i.get(C);return c&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function et(C){const S=u.render.frame;_.get(C)!==S&&(_.set(C,S),C.update())}function at(C,S){const Q=C.colorSpace,se=C.format,pe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ac||Q!==nr&&Q!==$i&&(Rt.getTransfer(Q)===Ot?c===!1?e.has("EXT_sRGB")===!0&&se===ii?(C.format=Ac,C.minFilter=Tn,C.generateMipmaps=!1):S=Od.sRGBToLinear(S):(se!==ii||pe!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),S}function Et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=z,this.setTexture2D=le,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=ue,this.rebindTextures=k,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=je}function gb(s,e,t){const i=t.isWebGL2;function a(l,u=$i){let c;const h=Rt.getTransfer(u);if(l===er)return s.UNSIGNED_BYTE;if(l===Rd)return s.UNSIGNED_SHORT_4_4_4_4;if(l===Cd)return s.UNSIGNED_SHORT_5_5_5_1;if(l===IM)return s.BYTE;if(l===NM)return s.SHORT;if(l===Cc)return s.UNSIGNED_SHORT;if(l===wd)return s.INT;if(l===Ji)return s.UNSIGNED_INT;if(l===Li)return s.FLOAT;if(l===$s)return i?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===OM)return s.ALPHA;if(l===ii)return s.RGBA;if(l===FM)return s.LUMINANCE;if(l===BM)return s.LUMINANCE_ALPHA;if(l===Tr)return s.DEPTH_COMPONENT;if(l===Ms)return s.DEPTH_STENCIL;if(l===Ac)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===zM)return s.RED;if(l===Ld)return s.RED_INTEGER;if(l===GM)return s.RG;if(l===Pd)return s.RG_INTEGER;if(l===Dd)return s.RGBA_INTEGER;if(l===Hl||l===Vl||l===Wl||l===kl)if(h===Ot)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Hl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Vl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Hl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Vl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Wl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===kl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===rh||l===sh||l===ah||l===oh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===oh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Ud)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===lh||l===ch)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===lh)return h===Ot?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===ch)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===uh||l===fh||l===hh||l===dh||l===ph||l===mh||l===_h||l===gh||l===vh||l===xh||l===Mh||l===Sh||l===Eh||l===Th)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===uh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===fh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===hh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===dh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===ph)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===mh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===_h)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===gh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===vh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===xh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Mh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Sh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Eh)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Th)return h===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Xl||l===yh||l===Ah)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Xl)return h===Ot?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Ah)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===HM||l===bh||l===wh||l===Rh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Xl)return c.COMPRESSED_RED_RGTC1_EXT;if(l===bh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===wh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Rh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Er?i?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class vb extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mo extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xb={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const g=t.getJointPose(w,i),m=this._getHandJoint(d,w);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=p.position.distanceTo(_.position),M=.02,T=.005;d.inputState.pinching&&v>M+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=M-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(xb)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Eb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new An,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,a=new Ui({extensions:{fragDepth:!0},vertexShader:Mb,fragmentShader:Sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new na(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Tb extends wr{constructor(e,t){super();const i=this;let a=null,l=1,u=null,c="local-floor",h=1,d=null,p=null,_=null,v=null,M=null,T=null;const w=new Eb,g=t.getContextAttributes();let m=null,N=null;const R=[],D=[],V=new lt;let B=null;const U=new Xn;U.layers.enable(1),U.viewport=new sn;const $=new Xn;$.layers.enable(2),$.viewport=new sn;const xe=[U,$],A=new vb;A.layers.enable(1),A.layers.enable(2);let I=null,Me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=R[j];return he===void 0&&(he=new _c,R[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=R[j];return he===void 0&&(he=new _c,R[j]=he),he.getGripSpace()},this.getHand=function(j){let he=R[j];return he===void 0&&(he=new _c,R[j]=he),he.getHandSpace()};function _e(j){const he=D.indexOf(j.inputSource);if(he===-1)return;const we=R[he];we!==void 0&&(we.update(j.inputSource,j.frame,d||u),we.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){a.removeEventListener("select",_e),a.removeEventListener("selectstart",_e),a.removeEventListener("selectend",_e),a.removeEventListener("squeeze",_e),a.removeEventListener("squeezestart",_e),a.removeEventListener("squeezeend",_e),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",re);for(let j=0;j<R.length;j++){const he=D[j];he!==null&&(D[j]=null,R[j].disconnect(he))}I=null,Me=null,w.reset(),e.setRenderTarget(m),M=null,v=null,_=null,a=null,N=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){c=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(j){d=j},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",_e),a.addEventListener("selectstart",_e),a.addEventListener("selectend",_e),a.addEventListener("squeeze",_e),a.addEventListener("squeezestart",_e),a.addEventListener("squeezeend",_e),a.addEventListener("end",z),a.addEventListener("inputsourceschange",re),g.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(V),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:a.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Ar(M.framebufferWidth,M.framebufferHeight,{format:ii,type:er,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,we=null,Ze=null;g.depth&&(Ze=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?Ms:Tr,we=g.stencil?Er:Ji);const Ne={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:l};_=new XRWebGLBinding(a,t),v=_.createProjectionLayer(Ne),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new Ar(v.textureWidth,v.textureHeight,{format:ii,type:er,depthTexture:new Zd(v.textureWidth,v.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(N);Re.__ignoreDepthValues=v.ignoreDepthValues}N.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await a.requestReferenceSpace(c),Qe.setContext(a),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function re(j){for(let he=0;he<j.removed.length;he++){const we=j.removed[he],Ze=D.indexOf(we);Ze>=0&&(D[Ze]=null,R[Ze].disconnect(we))}for(let he=0;he<j.added.length;he++){const we=j.added[he];let Ze=D.indexOf(we);if(Ze===-1){for(let Re=0;Re<R.length;Re++)if(Re>=D.length){D.push(we),Ze=Re;break}else if(D[Re]===null){D[Re]=we,Ze=Re;break}if(Ze===-1)break}const Ne=R[Ze];Ne&&Ne.connect(we)}}const te=new q,le=new q;function ee(j,he,we){te.setFromMatrixPosition(he.matrixWorld),le.setFromMatrixPosition(we.matrixWorld);const Ze=te.distanceTo(le),Ne=he.projectionMatrix.elements,Re=we.projectionMatrix.elements,xt=Ne[14]/(Ne[10]-1),Ve=Ne[14]/(Ne[10]+1),k=(Ne[9]+1)/Ne[5],Ht=(Ne[9]-1)/Ne[5],Ue=(Ne[8]-1)/Ne[0],$e=(Re[8]+1)/Re[0],He=xt*Ue,je=xt*$e,et=Ze/(-Ue+$e),at=et*-Ue;he.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(at),j.translateZ(et),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Et=xt+et,C=Ve+et,S=He-at,Q=je+(Ze-at),se=k*Ve/C*Et,pe=Ht*Ve/C*Et;j.projectionMatrix.makePerspective(S,Q,se,pe,Et,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ce(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;w.texture!==null&&(j.near=w.depthNear,j.far=w.depthFar),A.near=$.near=U.near=j.near,A.far=$.far=U.far=j.far,(I!==A.near||Me!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,Me=A.far,U.near=I,U.far=Me,$.near=I,$.far=Me,U.updateProjectionMatrix(),$.updateProjectionMatrix(),j.updateProjectionMatrix());const he=j.parent,we=A.cameras;ce(A,he);for(let Ze=0;Ze<we.length;Ze++)ce(we[Ze],he);we.length===2?ee(A,U,$):A.projectionMatrix.copy(U.projectionMatrix),ue(j,A,he)};function ue(j,he,we){we===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Js*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&M===null))return h},this.setFoveation=function(j){h=j,v!==null&&(v.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return w.texture!==null};let ge=null;function De(j,he){if(p=he.getViewerPose(d||u),T=he,p!==null){const we=p.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Ze=!1;we.length!==A.cameras.length&&(A.cameras.length=0,Ze=!0);for(let Re=0;Re<we.length;Re++){const xt=we[Re];let Ve=null;if(M!==null)Ve=M.getViewport(xt);else{const Ht=_.getViewSubImage(v,xt);Ve=Ht.viewport,Re===0&&(e.setRenderTargetTextures(N,Ht.colorTexture,v.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(N))}let k=xe[Re];k===void 0&&(k=new Xn,k.layers.enable(Re),k.viewport=new sn,xe[Re]=k),k.matrix.fromArray(xt.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(xt.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Re===0&&(A.matrix.copy(k.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ze===!0&&A.cameras.push(k)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Re=_.getDepthInformation(we[0]);Re&&Re.isValid&&Re.texture&&w.init(e,Re,a.renderState)}}for(let we=0;we<R.length;we++){const Ze=D[we],Ne=R[we];Ze!==null&&Ne!==void 0&&Ne.update(Ze,he,d||u)}w.render(e,A),ge&&ge(j,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),T=null}const Qe=new Kd;Qe.setAnimationLoop(De),this.setAnimationLoop=function(j){ge=j},this.dispose=function(){}}}const gr=new Di,yb=new $t;function Ab(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Xd(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function a(g,m,N,R,D){m.isMeshBasicMaterial||m.isMeshLambertMaterial?l(g,m):m.isMeshToonMaterial?(l(g,m),_(g,m)):m.isMeshPhongMaterial?(l(g,m),p(g,m)):m.isMeshStandardMaterial?(l(g,m),v(g,m),m.isMeshPhysicalMaterial&&M(g,m,D)):m.isMeshMatcapMaterial?(l(g,m),T(g,m)):m.isMeshDepthMaterial?l(g,m):m.isMeshDistanceMaterial?(l(g,m),w(g,m)):m.isMeshNormalMaterial?l(g,m):m.isLineBasicMaterial?(u(g,m),m.isLineDashedMaterial&&c(g,m)):m.isPointsMaterial?h(g,m,N,R):m.isSpriteMaterial?d(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function l(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===yn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===yn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const N=e.get(m),R=N.envMap,D=N.envMapRotation;if(R&&(g.envMap.value=R,gr.copy(D),gr.x*=-1,gr.y*=-1,gr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.envMapRotation.value.setFromMatrix4(yb.makeRotationFromEuler(gr)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const V=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*V,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function c(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function h(g,m,N,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*N,g.scale.value=R*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function p(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function _(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function v(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function M(g,m,N){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=N.texture,g.transmissionSamplerSize.value.set(N.width,N.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function T(g,m){m.matcap&&(g.matcap.value=m.matcap)}function w(g,m){const N=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(N.matrixWorld),g.nearDistance.value=N.shadow.camera.near,g.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function bb(s,e,t,i){let a={},l={},u=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(N,R){const D=R.program;i.uniformBlockBinding(N,D)}function d(N,R){let D=a[N.id];D===void 0&&(T(N),D=p(N),a[N.id]=D,N.addEventListener("dispose",g));const V=R.program;i.updateUBOMapping(N,V);const B=e.render.frame;l[N.id]!==B&&(v(N),l[N.id]=B)}function p(N){const R=_();N.__bindingPointIndex=R;const D=s.createBuffer(),V=N.__size,B=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,V,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,D),D}function _(){for(let N=0;N<c;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const R=a[N.id],D=N.uniforms,V=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let B=0,U=D.length;B<U;B++){const $=Array.isArray(D[B])?D[B]:[D[B]];for(let xe=0,A=$.length;xe<A;xe++){const I=$[xe];if(M(I,B,xe,V)===!0){const Me=I.__offset,_e=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let re=0;re<_e.length;re++){const te=_e[re],le=w(te);typeof te=="number"||typeof te=="boolean"?(I.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,Me+z,I.__data)):te.isMatrix3?(I.__data[0]=te.elements[0],I.__data[1]=te.elements[1],I.__data[2]=te.elements[2],I.__data[3]=0,I.__data[4]=te.elements[3],I.__data[5]=te.elements[4],I.__data[6]=te.elements[5],I.__data[7]=0,I.__data[8]=te.elements[6],I.__data[9]=te.elements[7],I.__data[10]=te.elements[8],I.__data[11]=0):(te.toArray(I.__data,z),z+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Me,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,R,D,V){const B=N.value,U=R+"_"+D;if(V[U]===void 0)return typeof B=="number"||typeof B=="boolean"?V[U]=B:V[U]=B.clone(),!0;{const $=V[U];if(typeof B=="number"||typeof B=="boolean"){if($!==B)return V[U]=B,!0}else if($.equals(B)===!1)return $.copy(B),!0}return!1}function T(N){const R=N.uniforms;let D=0;const V=16;for(let U=0,$=R.length;U<$;U++){const xe=Array.isArray(R[U])?R[U]:[R[U]];for(let A=0,I=xe.length;A<I;A++){const Me=xe[A],_e=Array.isArray(Me.value)?Me.value:[Me.value];for(let z=0,re=_e.length;z<re;z++){const te=_e[z],le=w(te),ee=D%V;ee!==0&&V-ee<le.boundary&&(D+=V-ee),Me.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),Me.__offset=D,D+=le.storage}}}const B=D%V;return B>0&&(D+=V-B),N.__size=D,N.__cache={},this}function w(N){const R={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(R.boundary=4,R.storage=4):N.isVector2?(R.boundary=8,R.storage=8):N.isVector3||N.isColor?(R.boundary=16,R.storage=12):N.isVector4?(R.boundary=16,R.storage=16):N.isMatrix3?(R.boundary=48,R.storage=48):N.isMatrix4?(R.boundary=64,R.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),R}function g(N){const R=N.target;R.removeEventListener("dispose",g);const D=u.indexOf(R.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function m(){for(const N in a)s.deleteBuffer(a[N]);u=[],a={},l={}}return{bind:h,update:d,dispose:m}}class tp{constructor(e={}){const{canvas:t=pS(),context:i=null,depth:a=!0,stencil:l=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const M=new Uint32Array(4),T=new Int32Array(4);let w=null,g=null;const m=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const R=this;let D=!1,V=0,B=0,U=null,$=-1,xe=null;const A=new sn,I=new sn;let Me=null;const _e=new Ct(0);let z=0,re=t.width,te=t.height,le=1,ee=null,ce=null;const ue=new sn(0,0,re,te),ge=new sn(0,0,re,te);let De=!1;const Qe=new Yd;let j=!1,he=!1,we=null;const Ze=new $t,Ne=new lt,Re=new q,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return U===null?le:1}let k=i;function Ht(b,W){for(let K=0;K<b.length;K++){const J=b[K],Y=t.getContext(J,W);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rc}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",ve,!1),k===null){const W=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&W.shift(),k=Ht(W,b),k===null)throw Ht(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,$e,He,je,et,at,Et,C,S,Q,se,pe,de,Ke,Ge,Ee,ye,Je,Se,Dt,it,ze,Le,Oe;function L(){Ue=new Dy(k),$e=new Ay(k,Ue,e),Ue.init($e),ze=new gb(k,Ue,$e),He=new mb(k,Ue,$e),je=new Ny(k),et=new tb,at=new _b(k,Ue,He,et,$e,ze,je),Et=new wy(R),C=new Py(R),S=new GS(k,$e),Le=new Ty(k,Ue,S,$e),Q=new Uy(k,S,je,Le),se=new zy(k,Q,S,je),Se=new By(k,$e,at),Ee=new by(et),pe=new eb(R,Et,C,Ue,$e,Le,Ee),de=new Ab(R,et),Ke=new ib,Ge=new cb(Ue,$e),Je=new Ey(R,Et,C,He,se,v,h),ye=new pb(R,se,$e),Oe=new bb(k,je,$e,He),Dt=new yy(k,Ue,je,$e),it=new Iy(k,Ue,je,$e),je.programs=pe.programs,R.capabilities=$e,R.extensions=Ue,R.properties=et,R.renderLists=Ke,R.shadowMap=ye,R.state=He,R.info=je}L();const oe=new Tb(R,k);this.xr=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(b){b!==void 0&&(le=b,this.setSize(re,te,!1))},this.getSize=function(b){return b.set(re,te)},this.setSize=function(b,W,K=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=b,te=W,t.width=Math.floor(b*le),t.height=Math.floor(W*le),K===!0&&(t.style.width=b+"px",t.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(re*le,te*le).floor()},this.setDrawingBufferSize=function(b,W,K){re=b,te=W,le=K,t.width=Math.floor(b*K),t.height=Math.floor(W*K),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(ue)},this.setViewport=function(b,W,K,J){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,W,K,J),He.viewport(A.copy(ue).multiplyScalar(le).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,W,K,J){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,W,K,J),He.scissor(I.copy(ge).multiplyScalar(le).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){He.setScissorTest(De=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(b=!0,W=!0,K=!0){let J=0;if(b){let Y=!1;if(U!==null){const Ce=U.texture.format;Y=Ce===Dd||Ce===Pd||Ce===Ld}if(Y){const Ce=U.texture.type,Fe=Ce===er||Ce===Ji||Ce===Cc||Ce===Er||Ce===Rd||Ce===Cd,ke=Je.getClearColor(),Xe=Je.getClearAlpha(),ct=ke.r,tt=ke.g,rt=ke.b;Fe?(M[0]=ct,M[1]=tt,M[2]=rt,M[3]=Xe,k.clearBufferuiv(k.COLOR,0,M)):(T[0]=ct,T[1]=tt,T[2]=rt,T[3]=Xe,k.clearBufferiv(k.COLOR,0,T))}else J|=k.COLOR_BUFFER_BIT}W&&(J|=k.DEPTH_BUFFER_BIT),K&&(J|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ke.dispose(),Ge.dispose(),et.dispose(),Et.dispose(),C.dispose(),se.dispose(),Le.dispose(),Oe.dispose(),pe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ft),oe.removeEventListener("sessionend",Mt),we&&(we.dispose(),we=null),bt.stop()};function Ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=je.autoReset,W=ye.enabled,K=ye.autoUpdate,J=ye.needsUpdate,Y=ye.type;L(),je.autoReset=b,ye.enabled=W,ye.autoUpdate=K,ye.needsUpdate=J,ye.type=Y}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function X(b){const W=b.target;W.removeEventListener("dispose",X),me(W)}function me(b){be(b),et.remove(b)}function be(b){const W=et.get(b).programs;W!==void 0&&(W.forEach(function(K){pe.releaseProgram(K)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,K,J,Y,Ce){W===null&&(W=xt);const Fe=Y.isMesh&&Y.matrixWorld.determinant()<0,ke=Lo(b,W,K,J,Y);He.setMaterial(J,Fe);let Xe=K.index,ct=1;if(J.wireframe===!0){if(Xe=Q.getWireframeAttribute(K),Xe===void 0)return;ct=2}const tt=K.drawRange,rt=K.attributes.position;let Bt=tt.start*ct,an=(tt.start+tt.count)*ct;Ce!==null&&(Bt=Math.max(Bt,Ce.start*ct),an=Math.min(an,(Ce.start+Ce.count)*ct)),Xe!==null?(Bt=Math.max(Bt,0),an=Math.min(an,Xe.count)):rt!=null&&(Bt=Math.max(Bt,0),an=Math.min(an,rt.count));const Wt=an-Bt;if(Wt<0||Wt===1/0)return;Le.setup(Y,J,ke,K,Xe);let Yn,It=Dt;if(Xe!==null&&(Yn=S.get(Xe),It=it,It.setIndex(Yn)),Y.isMesh)J.wireframe===!0?(He.setLineWidth(J.wireframeLinewidth*Ve()),It.setMode(k.LINES)):It.setMode(k.TRIANGLES);else if(Y.isLine){let ot=J.linewidth;ot===void 0&&(ot=1),He.setLineWidth(ot*Ve()),Y.isLineSegments?It.setMode(k.LINES):Y.isLineLoop?It.setMode(k.LINE_LOOP):It.setMode(k.LINE_STRIP)}else Y.isPoints?It.setMode(k.POINTS):Y.isSprite&&It.setMode(k.TRIANGLES);if(Y.isBatchedMesh)It.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)It.renderInstances(Bt,Wt,Y.count);else if(K.isInstancedBufferGeometry){const ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ys=Math.min(K.instanceCount,ot);It.renderInstances(Bt,Wt,ys)}else It.render(Bt,Wt)};function ft(b,W,K){b.transparent===!0&&b.side===Ci&&b.forceSinglePass===!1?(b.side=yn,b.needsUpdate=!0,Pr(b,W,K),b.side=tr,b.needsUpdate=!0,Pr(b,W,K),b.side=Ci):Pr(b,W,K)}this.compile=function(b,W,K=null){K===null&&(K=b),g=Ge.get(K),g.init(),N.push(g),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),b!==K&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(R._useLegacyLights);const J=new Set;return b.traverse(function(Y){const Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Fe=0;Fe<Ce.length;Fe++){const ke=Ce[Fe];ft(ke,K,Y),J.add(ke)}else ft(Ce,K,Y),J.add(Ce)}),N.pop(),g=null,J},this.compileAsync=function(b,W,K=null){const J=this.compile(b,W,K);return new Promise(Y=>{function Ce(){if(J.forEach(function(Fe){et.get(Fe).currentProgram.isReady()&&J.delete(Fe)}),J.size===0){Y(b);return}setTimeout(Ce,10)}Ue.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let St=null;function At(b){St&&St(b)}function Ft(){bt.stop()}function Mt(){bt.start()}const bt=new Kd;bt.setAnimationLoop(At),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(b){St=b,oe.setAnimationLoop(b),b===null?bt.stop():bt.start()},oe.addEventListener("sessionstart",Ft),oe.addEventListener("sessionend",Mt),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,W,U),g=Ge.get(b,N.length),g.init(),N.push(g),Ze.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Qe.setFromProjectionMatrix(Ze),he=this.localClippingEnabled,j=Ee.init(this.clippingPlanes,he),w=Ke.get(b,m.length),w.init(),m.push(w),Qt(b,W,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(ee,ce),this.info.render.frame++,j===!0&&Ee.beginShadows();const K=g.state.shadowsArray;if(ye.render(K,b,W),j===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1)&&Je.render(w,b),g.setupLights(R._useLegacyLights),W.isArrayCamera){const J=W.cameras;for(let Y=0,Ce=J.length;Y<Ce;Y++){const Fe=J[Y];qn(w,b,Fe,Fe.viewport)}}else qn(w,b,W);U!==null&&(at.updateMultisampleRenderTarget(U),at.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(R,b,W),Le.resetDefaultState(),$=-1,xe=null,N.pop(),N.length>0?g=N[N.length-1]:g=null,m.pop(),m.length>0?w=m[m.length-1]:w=null};function Qt(b,W,K,J){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Qe.intersectsSprite(b)){J&&Re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ze);const Fe=se.update(b),ke=b.material;ke.visible&&w.push(b,Fe,ke,K,Re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Qe.intersectsObject(b))){const Fe=se.update(b),ke=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Re.copy(b.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Re.copy(Fe.boundingSphere.center)),Re.applyMatrix4(b.matrixWorld).applyMatrix4(Ze)),Array.isArray(ke)){const Xe=Fe.groups;for(let ct=0,tt=Xe.length;ct<tt;ct++){const rt=Xe[ct],Bt=ke[rt.materialIndex];Bt&&Bt.visible&&w.push(b,Fe,Bt,K,Re.z,rt)}}else ke.visible&&w.push(b,Fe,ke,K,Re.z,null)}}const Ce=b.children;for(let Fe=0,ke=Ce.length;Fe<ke;Fe++)Qt(Ce[Fe],W,K,J)}function qn(b,W,K,J){const Y=b.opaque,Ce=b.transmissive,Fe=b.transparent;g.setupLightsView(K),j===!0&&Ee.setGlobalState(R.clippingPlanes,K),Ce.length>0&&Cr(Y,Ce,W,K),J&&He.viewport(A.copy(J)),Y.length>0&&Lr(Y,W,K),Ce.length>0&&Lr(Ce,W,K),Fe.length>0&&Lr(Fe,W,K),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Cr(b,W,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Ce=$e.isWebGL2;we===null&&(we=new Ar(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?$s:er,minFilter:Sr,samples:Ce?4:0})),R.getDrawingBufferSize(Ne),Ce?we.setSize(Ne.x,Ne.y):we.setSize(To(Ne.x),To(Ne.y));const Fe=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(_e),z=R.getClearAlpha(),z<1&&R.setClearColor(16777215,.5),R.clear();const ke=R.toneMapping;R.toneMapping=Qi,Lr(b,K,J),at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we);let Xe=!1;for(let ct=0,tt=W.length;ct<tt;ct++){const rt=W[ct],Bt=rt.object,an=rt.geometry,Wt=rt.material,Yn=rt.group;if(Wt.side===Ci&&Bt.layers.test(J.layers)){const It=Wt.side;Wt.side=yn,Wt.needsUpdate=!0,ia(Bt,K,J,an,Wt,Yn),Wt.side=It,Wt.needsUpdate=!0,Xe=!0}}Xe===!0&&(at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we)),R.setRenderTarget(Fe),R.setClearColor(_e,z),R.toneMapping=ke}function Lr(b,W,K){const J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Ce=b.length;Y<Ce;Y++){const Fe=b[Y],ke=Fe.object,Xe=Fe.geometry,ct=J===null?Fe.material:J,tt=Fe.group;ke.layers.test(K.layers)&&ia(ke,W,K,Xe,ct,tt)}}function ia(b,W,K,J,Y,Ce){b.onBeforeRender(R,W,K,J,Y,Ce),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(R,W,K,J,b,Ce),Y.transparent===!0&&Y.side===Ci&&Y.forceSinglePass===!1?(Y.side=yn,Y.needsUpdate=!0,R.renderBufferDirect(K,W,J,Y,b,Ce),Y.side=tr,Y.needsUpdate=!0,R.renderBufferDirect(K,W,J,Y,b,Ce),Y.side=Ci):R.renderBufferDirect(K,W,J,Y,b,Ce),b.onAfterRender(R,W,K,J,Y,Ce)}function Pr(b,W,K){W.isScene!==!0&&(W=xt);const J=et.get(b),Y=g.state.lights,Ce=g.state.shadowsArray,Fe=Y.state.version,ke=pe.getParameters(b,Y.state,Ce,W,K),Xe=pe.getProgramCacheKey(ke);let ct=J.programs;J.environment=b.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(b.isMeshStandardMaterial?C:Et).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,ct===void 0&&(b.addEventListener("dispose",X),ct=new Map,J.programs=ct);let tt=ct.get(Xe);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Fe)return sa(b,ke),tt}else ke.uniforms=pe.getUniforms(b),b.onBuild(K,ke,R),b.onBeforeCompile(ke,R),tt=pe.acquireProgram(ke,Xe),ct.set(Xe,tt),J.uniforms=ke.uniforms;const rt=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(rt.clippingPlanes=Ee.uniform),sa(b,ke),J.needsLights=aa(b),J.lightsStateVersion=Fe,J.needsLights&&(rt.ambientLightColor.value=Y.state.ambient,rt.lightProbe.value=Y.state.probe,rt.directionalLights.value=Y.state.directional,rt.directionalLightShadows.value=Y.state.directionalShadow,rt.spotLights.value=Y.state.spot,rt.spotLightShadows.value=Y.state.spotShadow,rt.rectAreaLights.value=Y.state.rectArea,rt.ltc_1.value=Y.state.rectAreaLTC1,rt.ltc_2.value=Y.state.rectAreaLTC2,rt.pointLights.value=Y.state.point,rt.pointLightShadows.value=Y.state.pointShadow,rt.hemisphereLights.value=Y.state.hemi,rt.directionalShadowMap.value=Y.state.directionalShadowMap,rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,rt.spotShadowMap.value=Y.state.spotShadowMap,rt.spotLightMatrix.value=Y.state.spotLightMatrix,rt.spotLightMap.value=Y.state.spotLightMap,rt.pointShadowMap.value=Y.state.pointShadowMap,rt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function ra(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=go.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function sa(b,W){const K=et.get(b);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Lo(b,W,K,J,Y){W.isScene!==!0&&(W=xt),at.resetTextureUnits();const Ce=W.fog,Fe=J.isMeshStandardMaterial?W.environment:null,ke=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:nr,Xe=(J.isMeshStandardMaterial?C:Et).get(J.envMap||Fe),ct=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,tt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),rt=!!K.morphAttributes.position,Bt=!!K.morphAttributes.normal,an=!!K.morphAttributes.color;let Wt=Qi;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Wt=R.toneMapping);const Yn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,It=Yn!==void 0?Yn.length:0,ot=et.get(J),ys=g.state.lights;if(j===!0&&(he===!0||b!==xe)){const vn=b===xe&&J.id===$;Ee.setState(J,b,vn)}let Lt=!1;J.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==ys.state.version||ot.outputColorSpace!==ke||Y.isBatchedMesh&&ot.batching===!1||!Y.isBatchedMesh&&ot.batching===!0||Y.isInstancedMesh&&ot.instancing===!1||!Y.isInstancedMesh&&ot.instancing===!0||Y.isSkinnedMesh&&ot.skinning===!1||!Y.isSkinnedMesh&&ot.skinning===!0||Y.isInstancedMesh&&ot.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ot.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ot.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ot.instancingMorph===!1&&Y.morphTexture!==null||ot.envMap!==Xe||J.fog===!0&&ot.fog!==Ce||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Ee.numPlanes||ot.numIntersection!==Ee.numIntersection)||ot.vertexAlphas!==ct||ot.vertexTangents!==tt||ot.morphTargets!==rt||ot.morphNormals!==Bt||ot.morphColors!==an||ot.toneMapping!==Wt||$e.isWebGL2===!0&&ot.morphTargetsCount!==It)&&(Lt=!0):(Lt=!0,ot.__version=J.version);let ri=ot.currentProgram;Lt===!0&&(ri=Pr(J,W,Y));let As=!1,hi=!1,bs=!1;const Yt=ri.getUniforms(),Nn=ot.uniforms;if(He.useProgram(ri.program)&&(As=!0,hi=!0,bs=!0),J.id!==$&&($=J.id,hi=!0),As||xe!==b){Yt.setValue(k,"projectionMatrix",b.projectionMatrix),Yt.setValue(k,"viewMatrix",b.matrixWorldInverse);const vn=Yt.map.cameraPosition;vn!==void 0&&vn.setValue(k,Re.setFromMatrixPosition(b.matrixWorld)),$e.logarithmicDepthBuffer&&Yt.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Yt.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),xe!==b&&(xe=b,hi=!0,bs=!0)}if(Y.isSkinnedMesh){Yt.setOptional(k,Y,"bindMatrix"),Yt.setOptional(k,Y,"bindMatrixInverse");const vn=Y.skeleton;vn&&($e.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Yt.setValue(k,"boneTexture",vn.boneTexture,at)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Yt.setOptional(k,Y,"batchingTexture"),Yt.setValue(k,"batchingTexture",Y._matricesTexture,at));const Dr=K.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0&&$e.isWebGL2===!0)&&Se.update(Y,K,ri),(hi||ot.receiveShadow!==Y.receiveShadow)&&(ot.receiveShadow=Y.receiveShadow,Yt.setValue(k,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Nn.envMap.value=Xe,Nn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),hi&&(Yt.setValue(k,"toneMappingExposure",R.toneMappingExposure),ot.needsLights&&Po(Nn,bs),Ce&&J.fog===!0&&de.refreshFogUniforms(Nn,Ce),de.refreshMaterialUniforms(Nn,J,le,te,we),go.upload(k,ra(ot),Nn,at)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(go.upload(k,ra(ot),Nn,at),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Yt.setValue(k,"center",Y.center),Yt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Yt.setValue(k,"normalMatrix",Y.normalMatrix),Yt.setValue(k,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const vn=J.uniformsGroups;for(let Ur=0,oa=vn.length;Ur<oa;Ur++)if($e.isWebGL2){const Ir=vn[Ur];Oe.update(Ir,ri),Oe.bind(Ir,ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ri}function Po(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function aa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,W,K){et.get(b.texture).__webglTexture=W,et.get(b.depthTexture).__webglTexture=K;const J=et.get(b);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const K=et.get(b);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,K=0){U=b,V=W,B=K;let J=!0,Y=null,Ce=!1,Fe=!1;if(b){const Xe=et.get(b);Xe.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(k.FRAMEBUFFER,null),J=!1):Xe.__webglFramebuffer===void 0?at.setupRenderTarget(b):Xe.__hasExternalTextures&&at.rebindTextures(b,et.get(b.texture).__webglTexture,et.get(b.depthTexture).__webglTexture);const ct=b.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Fe=!0);const tt=et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?Y=tt[W][K]:Y=tt[W],Ce=!0):$e.isWebGL2&&b.samples>0&&at.useMultisampledRTT(b)===!1?Y=et.get(b).__webglMultisampledFramebuffer:Array.isArray(tt)?Y=tt[K]:Y=tt,A.copy(b.viewport),I.copy(b.scissor),Me=b.scissorTest}else A.copy(ue).multiplyScalar(le).floor(),I.copy(ge).multiplyScalar(le).floor(),Me=De;if(He.bindFramebuffer(k.FRAMEBUFFER,Y)&&$e.drawBuffers&&J&&He.drawBuffers(b,Y),He.viewport(A),He.scissor(I),He.setScissorTest(Me),Ce){const Xe=et.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Xe.__webglTexture,K)}else if(Fe){const Xe=et.get(b.texture),ct=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.__webglTexture,K||0,ct)}$=-1},this.readRenderTargetPixels=function(b,W,K,J,Y,Ce,Fe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){He.bindFramebuffer(k.FRAMEBUFFER,ke);try{const Xe=b.texture,ct=Xe.format,tt=Xe.type;if(ct!==ii&&ze.convert(ct)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=tt===$s&&(Ue.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(tt!==er&&ze.convert(tt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Li&&($e.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-J&&K>=0&&K<=b.height-Y&&k.readPixels(W,K,J,Y,ze.convert(ct),ze.convert(tt),Ce)}finally{const Xe=U!==null?et.get(U).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(b,W,K=0){const J=Math.pow(2,-K),Y=Math.floor(W.image.width*J),Ce=Math.floor(W.image.height*J);at.setTexture2D(W,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,b.x,b.y,Y,Ce),He.unbindTexture()},this.copyTextureToTexture=function(b,W,K,J=0){const Y=W.image.width,Ce=W.image.height,Fe=ze.convert(K.format),ke=ze.convert(K.type);at.setTexture2D(K,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment),W.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,J,b.x,b.y,Y,Ce,Fe,ke,W.image.data):W.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,J,b.x,b.y,W.mipmaps[0].width,W.mipmaps[0].height,Fe,W.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,J,b.x,b.y,Fe,ke,W.image),J===0&&K.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(b,W,K,J,Y=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=Math.round(b.max.x-b.min.x),Fe=Math.round(b.max.y-b.min.y),ke=b.max.z-b.min.z+1,Xe=ze.convert(J.format),ct=ze.convert(J.type);let tt;if(J.isData3DTexture)at.setTexture3D(J,0),tt=k.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)at.setTexture2DArray(J,0),tt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,J.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,J.unpackAlignment);const rt=k.getParameter(k.UNPACK_ROW_LENGTH),Bt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),an=k.getParameter(k.UNPACK_SKIP_PIXELS),Wt=k.getParameter(k.UNPACK_SKIP_ROWS),Yn=k.getParameter(k.UNPACK_SKIP_IMAGES),It=K.isCompressedTexture?K.mipmaps[Y]:K.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,It.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,It.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),K.isDataTexture||K.isData3DTexture?k.texSubImage3D(tt,Y,W.x,W.y,W.z,Ce,Fe,ke,Xe,ct,It.data):J.isCompressedArrayTexture?k.compressedTexSubImage3D(tt,Y,W.x,W.y,W.z,Ce,Fe,ke,Xe,It.data):k.texSubImage3D(tt,Y,W.x,W.y,W.z,Ce,Fe,ke,Xe,ct,It),k.pixelStorei(k.UNPACK_ROW_LENGTH,rt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Bt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,an),k.pixelStorei(k.UNPACK_SKIP_ROWS,Wt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Yn),Y===0&&J.generateMipmaps&&k.generateMipmap(tt),He.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?at.setTextureCube(b,0):b.isData3DTexture?at.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?at.setTexture2DArray(b,0):at.setTexture2D(b,0),He.unbindTexture()},this.resetState=function(){V=0,B=0,U=null,He.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Lc?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===bo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wb extends tp{}wb.prototype.isWebGL1Renderer=!0;class Rb extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Cb{constructor(e,t,i){const a=this;let l=!1,u=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){c++,l===!1&&a.onStart!==void 0&&a.onStart(p,u,c),l=!0},this.itemEnd=function(p){u++,a.onProgress!==void 0&&a.onProgress(p,u,c),u===c&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return d.push(p,_),this},this.removeHandler=function(p){const _=d.indexOf(p);return _!==-1&&d.splice(_,2),this},this.getHandler=function(p){for(let _=0,v=d.length;_<v;_+=2){const M=d[_],T=d[_+1];if(M.global&&(M.lastIndex=0),M.test(p))return T}return null}}}const Lb=new Cb;class Co{constructor(e){this.manager=e!==void 0?e:Lb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,l){i.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class Pb extends Error{constructor(e,t){super(e),this.response=t}}class Db extends Co{constructor(e){super(e)}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Qs.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:i,onError:a});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:i,onError:a});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,h=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=wi[e],_=d.body.getReader(),v=d.headers.get("Content-Length")||d.headers.get("X-File-Size"),M=v?parseInt(v):0,T=M!==0;let w=0;const g=new ReadableStream({start(m){N();function N(){_.read().then(({done:R,value:D})=>{if(R)m.close();else{w+=D.byteLength;const V=new ProgressEvent("progress",{lengthComputable:T,loaded:w,total:M});for(let B=0,U=p.length;B<U;B++){const $=p[B];$.onProgress&&$.onProgress(V)}m.enqueue(D),N()}})}}});return new Response(g)}else throw new Pb(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return d.json();default:if(c===void 0)return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(c),v=_&&_[1]?_[1].toLowerCase():void 0,M=new TextDecoder(v);return d.arrayBuffer().then(T=>M.decode(T))}}}).then(d=>{Qs.add(e,d);const p=wi[e];delete wi[e];for(let _=0,v=p.length;_<v;_++){const M=p[_];M.onLoad&&M.onLoad(d)}}).catch(d=>{const p=wi[e];if(p===void 0)throw this.manager.itemError(e),d;delete wi[e];for(let _=0,v=p.length;_<v;_++){const M=p[_];M.onError&&M.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ub extends Co{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Qs.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const c=js("img");function h(){p(),Qs.add(e,this),t&&t(this),l.manager.itemEnd(e)}function d(_){p(),a&&a(_),l.manager.itemError(e),l.manager.itemEnd(e)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class Ib extends Co{constructor(e){super(e)}load(e,t,i,a){const l=new Uc;l.colorSpace=ti;const u=new Ub(this.manager);u.setCrossOrigin(this.crossOrigin),u.setPath(this.path);let c=0;function h(d){u.load(e[d],function(p){l.images[d]=p,c++,c===6&&(l.needsUpdate=!0,t&&t(l))},void 0,a)}for(let d=0;d<e.length;++d)h(d);return l}}class Nb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vd(){return(typeof performance>"u"?Date:performance).now()}class xd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(fn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);var Ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */yo.exports;(function(s,e){(function(){var t,i="4.17.21",a=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,v=2,M=4,T=1,w=2,g=1,m=2,N=4,R=8,D=16,V=32,B=64,U=128,$=256,xe=512,A=30,I="...",Me=800,_e=16,z=1,re=2,te=3,le=1/0,ee=9007199254740991,ce=17976931348623157e292,ue=NaN,ge=4294967295,De=ge-1,Qe=ge>>>1,j=[["ary",U],["bind",g],["bindKey",m],["curry",R],["curryRight",D],["flip",xe],["partial",V],["partialRight",B],["rearg",$]],he="[object Arguments]",we="[object Array]",Ze="[object AsyncFunction]",Ne="[object Boolean]",Re="[object Date]",xt="[object DOMException]",Ve="[object Error]",k="[object Function]",Ht="[object GeneratorFunction]",Ue="[object Map]",$e="[object Number]",He="[object Null]",je="[object Object]",et="[object Promise]",at="[object Proxy]",Et="[object RegExp]",C="[object Set]",S="[object String]",Q="[object Symbol]",se="[object Undefined]",pe="[object WeakMap]",de="[object WeakSet]",Ke="[object ArrayBuffer]",Ge="[object DataView]",Ee="[object Float32Array]",ye="[object Float64Array]",Je="[object Int8Array]",Se="[object Int16Array]",Dt="[object Int32Array]",it="[object Uint8Array]",ze="[object Uint8ClampedArray]",Le="[object Uint16Array]",Oe="[object Uint32Array]",L=/\b__p \+= '';/g,oe=/\b(__p \+=) '' \+/g,Ie=/(__e\(.*?\)|\b__t\)) \+\n'';/g,O=/&(?:amp|lt|gt|quot|#39);/g,ve=/[&<>"']/g,X=RegExp(O.source),me=RegExp(ve.source),be=/<%-([\s\S]+?)%>/g,ft=/<%([\s\S]+?)%>/g,St=/<%=([\s\S]+?)%>/g,At=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ft=/^\w*$/,Mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bt=/[\\^$.*+?()[\]{}|]/g,Qt=RegExp(bt.source),qn=/^\s+/,Cr=/\s/,Lr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ia=/\{\n\/\* \[wrapped with (.+)\] \*/,Pr=/,? & /,ra=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,sa=/[()=,{}\[\]\/\s]/,Lo=/\\(\\)?/g,Po=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,aa=/\w*$/,b=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,K=/^\[object .+?Constructor\]$/,J=/^0o[0-7]+$/i,Y=/^(?:0|[1-9]\d*)$/,Ce=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fe=/($^)/,ke=/['\n\r\u2028\u2029\\]/g,Xe="\\ud800-\\udfff",ct="\\u0300-\\u036f",tt="\\ufe20-\\ufe2f",rt="\\u20d0-\\u20ff",Bt=ct+tt+rt,an="\\u2700-\\u27bf",Wt="a-z\\xdf-\\xf6\\xf8-\\xff",Yn="\\xac\\xb1\\xd7\\xf7",It="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ot="\\u2000-\\u206f",ys=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Lt="A-Z\\xc0-\\xd6\\xd8-\\xde",ri="\\ufe0e\\ufe0f",As=Yn+It+ot+ys,hi="['’]",bs="["+Xe+"]",Yt="["+As+"]",Nn="["+Bt+"]",Dr="\\d+",vn="["+an+"]",Ur="["+Wt+"]",oa="[^"+Xe+As+Dr+an+Wt+Lt+"]",Ir="\\ud83c[\\udffb-\\udfff]",np="(?:"+Nn+"|"+Ir+")",Nc="[^"+Xe+"]",Do="(?:\\ud83c[\\udde6-\\uddff]){2}",Uo="[\\ud800-\\udbff][\\udc00-\\udfff]",Nr="["+Lt+"]",Oc="\\u200d",Fc="(?:"+Ur+"|"+oa+")",ip="(?:"+Nr+"|"+oa+")",Bc="(?:"+hi+"(?:d|ll|m|re|s|t|ve))?",zc="(?:"+hi+"(?:D|LL|M|RE|S|T|VE))?",Gc=np+"?",Hc="["+ri+"]?",rp="(?:"+Oc+"(?:"+[Nc,Do,Uo].join("|")+")"+Hc+Gc+")*",sp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ap="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Vc=Hc+Gc+rp,op="(?:"+[vn,Do,Uo].join("|")+")"+Vc,lp="(?:"+[Nc+Nn+"?",Nn,Do,Uo,bs].join("|")+")",cp=RegExp(hi,"g"),up=RegExp(Nn,"g"),Io=RegExp(Ir+"(?="+Ir+")|"+lp+Vc,"g"),fp=RegExp([Nr+"?"+Ur+"+"+Bc+"(?="+[Yt,Nr,"$"].join("|")+")",ip+"+"+zc+"(?="+[Yt,Nr+Fc,"$"].join("|")+")",Nr+"?"+Fc+"+"+Bc,Nr+"+"+zc,ap,sp,Dr,op].join("|"),"g"),hp=RegExp("["+Oc+Xe+Bt+ri+"]"),dp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,pp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],mp=-1,Nt={};Nt[Ee]=Nt[ye]=Nt[Je]=Nt[Se]=Nt[Dt]=Nt[it]=Nt[ze]=Nt[Le]=Nt[Oe]=!0,Nt[he]=Nt[we]=Nt[Ke]=Nt[Ne]=Nt[Ge]=Nt[Re]=Nt[Ve]=Nt[k]=Nt[Ue]=Nt[$e]=Nt[je]=Nt[Et]=Nt[C]=Nt[S]=Nt[pe]=!1;var Ut={};Ut[he]=Ut[we]=Ut[Ke]=Ut[Ge]=Ut[Ne]=Ut[Re]=Ut[Ee]=Ut[ye]=Ut[Je]=Ut[Se]=Ut[Dt]=Ut[Ue]=Ut[$e]=Ut[je]=Ut[Et]=Ut[C]=Ut[S]=Ut[Q]=Ut[it]=Ut[ze]=Ut[Le]=Ut[Oe]=!0,Ut[Ve]=Ut[k]=Ut[pe]=!1;var _p={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},gp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},xp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mp=parseFloat,Sp=parseInt,Wc=typeof Ys=="object"&&Ys&&Ys.Object===Object&&Ys,Ep=typeof self=="object"&&self&&self.Object===Object&&self,nn=Wc||Ep||Function("return this")(),No=e&&!e.nodeType&&e,ir=No&&!0&&s&&!s.nodeType&&s,kc=ir&&ir.exports===No,Oo=kc&&Wc.process,On=function(){try{var G=ir&&ir.require&&ir.require("util").types;return G||Oo&&Oo.binding&&Oo.binding("util")}catch{}}(),Xc=On&&On.isArrayBuffer,qc=On&&On.isDate,Yc=On&&On.isMap,Kc=On&&On.isRegExp,Zc=On&&On.isSet,$c=On&&On.isTypedArray;function bn(G,ne,Z){switch(Z.length){case 0:return G.call(ne);case 1:return G.call(ne,Z[0]);case 2:return G.call(ne,Z[0],Z[1]);case 3:return G.call(ne,Z[0],Z[1],Z[2])}return G.apply(ne,Z)}function Tp(G,ne,Z,Pe){for(var nt=-1,Tt=G==null?0:G.length;++nt<Tt;){var Kt=G[nt];ne(Pe,Kt,Z(Kt),G)}return Pe}function Fn(G,ne){for(var Z=-1,Pe=G==null?0:G.length;++Z<Pe&&ne(G[Z],Z,G)!==!1;);return G}function yp(G,ne){for(var Z=G==null?0:G.length;Z--&&ne(G[Z],Z,G)!==!1;);return G}function Jc(G,ne){for(var Z=-1,Pe=G==null?0:G.length;++Z<Pe;)if(!ne(G[Z],Z,G))return!1;return!0}function Ii(G,ne){for(var Z=-1,Pe=G==null?0:G.length,nt=0,Tt=[];++Z<Pe;){var Kt=G[Z];ne(Kt,Z,G)&&(Tt[nt++]=Kt)}return Tt}function la(G,ne){var Z=G==null?0:G.length;return!!Z&&Or(G,ne,0)>-1}function Fo(G,ne,Z){for(var Pe=-1,nt=G==null?0:G.length;++Pe<nt;)if(Z(ne,G[Pe]))return!0;return!1}function zt(G,ne){for(var Z=-1,Pe=G==null?0:G.length,nt=Array(Pe);++Z<Pe;)nt[Z]=ne(G[Z],Z,G);return nt}function Ni(G,ne){for(var Z=-1,Pe=ne.length,nt=G.length;++Z<Pe;)G[nt+Z]=ne[Z];return G}function Bo(G,ne,Z,Pe){var nt=-1,Tt=G==null?0:G.length;for(Pe&&Tt&&(Z=G[++nt]);++nt<Tt;)Z=ne(Z,G[nt],nt,G);return Z}function Ap(G,ne,Z,Pe){var nt=G==null?0:G.length;for(Pe&&nt&&(Z=G[--nt]);nt--;)Z=ne(Z,G[nt],nt,G);return Z}function zo(G,ne){for(var Z=-1,Pe=G==null?0:G.length;++Z<Pe;)if(ne(G[Z],Z,G))return!0;return!1}var bp=Go("length");function wp(G){return G.split("")}function Rp(G){return G.match(ra)||[]}function jc(G,ne,Z){var Pe;return Z(G,function(nt,Tt,Kt){if(ne(nt,Tt,Kt))return Pe=Tt,!1}),Pe}function ca(G,ne,Z,Pe){for(var nt=G.length,Tt=Z+(Pe?1:-1);Pe?Tt--:++Tt<nt;)if(ne(G[Tt],Tt,G))return Tt;return-1}function Or(G,ne,Z){return ne===ne?Gp(G,ne,Z):ca(G,Qc,Z)}function Cp(G,ne,Z,Pe){for(var nt=Z-1,Tt=G.length;++nt<Tt;)if(Pe(G[nt],ne))return nt;return-1}function Qc(G){return G!==G}function eu(G,ne){var Z=G==null?0:G.length;return Z?Vo(G,ne)/Z:ue}function Go(G){return function(ne){return ne==null?t:ne[G]}}function Ho(G){return function(ne){return G==null?t:G[ne]}}function tu(G,ne,Z,Pe,nt){return nt(G,function(Tt,Kt,Pt){Z=Pe?(Pe=!1,Tt):ne(Z,Tt,Kt,Pt)}),Z}function Lp(G,ne){var Z=G.length;for(G.sort(ne);Z--;)G[Z]=G[Z].value;return G}function Vo(G,ne){for(var Z,Pe=-1,nt=G.length;++Pe<nt;){var Tt=ne(G[Pe]);Tt!==t&&(Z=Z===t?Tt:Z+Tt)}return Z}function Wo(G,ne){for(var Z=-1,Pe=Array(G);++Z<G;)Pe[Z]=ne(Z);return Pe}function Pp(G,ne){return zt(ne,function(Z){return[Z,G[Z]]})}function nu(G){return G&&G.slice(0,au(G)+1).replace(qn,"")}function wn(G){return function(ne){return G(ne)}}function ko(G,ne){return zt(ne,function(Z){return G[Z]})}function ws(G,ne){return G.has(ne)}function iu(G,ne){for(var Z=-1,Pe=G.length;++Z<Pe&&Or(ne,G[Z],0)>-1;);return Z}function ru(G,ne){for(var Z=G.length;Z--&&Or(ne,G[Z],0)>-1;);return Z}function Dp(G,ne){for(var Z=G.length,Pe=0;Z--;)G[Z]===ne&&++Pe;return Pe}var Up=Ho(_p),Ip=Ho(gp);function Np(G){return"\\"+xp[G]}function Op(G,ne){return G==null?t:G[ne]}function Fr(G){return hp.test(G)}function Fp(G){return dp.test(G)}function Bp(G){for(var ne,Z=[];!(ne=G.next()).done;)Z.push(ne.value);return Z}function Xo(G){var ne=-1,Z=Array(G.size);return G.forEach(function(Pe,nt){Z[++ne]=[nt,Pe]}),Z}function su(G,ne){return function(Z){return G(ne(Z))}}function Oi(G,ne){for(var Z=-1,Pe=G.length,nt=0,Tt=[];++Z<Pe;){var Kt=G[Z];(Kt===ne||Kt===p)&&(G[Z]=p,Tt[nt++]=Z)}return Tt}function ua(G){var ne=-1,Z=Array(G.size);return G.forEach(function(Pe){Z[++ne]=Pe}),Z}function zp(G){var ne=-1,Z=Array(G.size);return G.forEach(function(Pe){Z[++ne]=[Pe,Pe]}),Z}function Gp(G,ne,Z){for(var Pe=Z-1,nt=G.length;++Pe<nt;)if(G[Pe]===ne)return Pe;return-1}function Hp(G,ne,Z){for(var Pe=Z+1;Pe--;)if(G[Pe]===ne)return Pe;return Pe}function Br(G){return Fr(G)?Wp(G):bp(G)}function Kn(G){return Fr(G)?kp(G):wp(G)}function au(G){for(var ne=G.length;ne--&&Cr.test(G.charAt(ne)););return ne}var Vp=Ho(vp);function Wp(G){for(var ne=Io.lastIndex=0;Io.test(G);)++ne;return ne}function kp(G){return G.match(Io)||[]}function Xp(G){return G.match(fp)||[]}var qp=function G(ne){ne=ne==null?nn:zr.defaults(nn.Object(),ne,zr.pick(nn,pp));var Z=ne.Array,Pe=ne.Date,nt=ne.Error,Tt=ne.Function,Kt=ne.Math,Pt=ne.Object,qo=ne.RegExp,Yp=ne.String,Bn=ne.TypeError,fa=Z.prototype,Kp=Tt.prototype,Gr=Pt.prototype,ha=ne["__core-js_shared__"],da=Kp.toString,wt=Gr.hasOwnProperty,Zp=0,ou=function(){var n=/[^.]+$/.exec(ha&&ha.keys&&ha.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),pa=Gr.toString,$p=da.call(Pt),Jp=nn._,jp=qo("^"+da.call(wt).replace(bt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ma=kc?ne.Buffer:t,Fi=ne.Symbol,_a=ne.Uint8Array,lu=ma?ma.allocUnsafe:t,ga=su(Pt.getPrototypeOf,Pt),cu=Pt.create,uu=Gr.propertyIsEnumerable,va=fa.splice,fu=Fi?Fi.isConcatSpreadable:t,Rs=Fi?Fi.iterator:t,rr=Fi?Fi.toStringTag:t,xa=function(){try{var n=cr(Pt,"defineProperty");return n({},"",{}),n}catch{}}(),Qp=ne.clearTimeout!==nn.clearTimeout&&ne.clearTimeout,em=Pe&&Pe.now!==nn.Date.now&&Pe.now,tm=ne.setTimeout!==nn.setTimeout&&ne.setTimeout,Ma=Kt.ceil,Sa=Kt.floor,Yo=Pt.getOwnPropertySymbols,nm=ma?ma.isBuffer:t,hu=ne.isFinite,im=fa.join,rm=su(Pt.keys,Pt),Zt=Kt.max,on=Kt.min,sm=Pe.now,am=ne.parseInt,du=Kt.random,om=fa.reverse,Ko=cr(ne,"DataView"),Cs=cr(ne,"Map"),Zo=cr(ne,"Promise"),Hr=cr(ne,"Set"),Ls=cr(ne,"WeakMap"),Ps=cr(Pt,"create"),Ea=Ls&&new Ls,Vr={},lm=ur(Ko),cm=ur(Cs),um=ur(Zo),fm=ur(Hr),hm=ur(Ls),Ta=Fi?Fi.prototype:t,Ds=Ta?Ta.valueOf:t,pu=Ta?Ta.toString:t;function E(n){if(Vt(n)&&!st(n)&&!(n instanceof gt)){if(n instanceof zn)return n;if(wt.call(n,"__wrapped__"))return _f(n)}return new zn(n)}var Wr=function(){function n(){}return function(r){if(!Gt(r))return{};if(cu)return cu(r);n.prototype=r;var o=new n;return n.prototype=t,o}}();function ya(){}function zn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}E.templateSettings={escape:be,evaluate:ft,interpolate:St,variable:"",imports:{_:E}},E.prototype=ya.prototype,E.prototype.constructor=E,zn.prototype=Wr(ya.prototype),zn.prototype.constructor=zn;function gt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ge,this.__views__=[]}function dm(){var n=new gt(this.__wrapped__);return n.__actions__=xn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=xn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=xn(this.__views__),n}function pm(){if(this.__filtered__){var n=new gt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function mm(){var n=this.__wrapped__.value(),r=this.__dir__,o=st(n),f=r<0,x=o?n.length:0,y=w_(0,x,this.__views__),P=y.start,F=y.end,H=F-P,ie=f?F:P-1,ae=this.__iteratees__,fe=ae.length,Ae=0,Be=on(H,this.__takeCount__);if(!o||!f&&x==H&&Be==H)return Bu(n,this.__actions__);var qe=[];e:for(;H--&&Ae<Be;){ie+=r;for(var ht=-1,Ye=n[ie];++ht<fe;){var _t=ae[ht],vt=_t.iteratee,Ln=_t.type,pn=vt(Ye);if(Ln==re)Ye=pn;else if(!pn){if(Ln==z)continue e;break e}}qe[Ae++]=Ye}return qe}gt.prototype=Wr(ya.prototype),gt.prototype.constructor=gt;function sr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var f=n[r];this.set(f[0],f[1])}}function _m(){this.__data__=Ps?Ps(null):{},this.size=0}function gm(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function vm(n){var r=this.__data__;if(Ps){var o=r[n];return o===h?t:o}return wt.call(r,n)?r[n]:t}function xm(n){var r=this.__data__;return Ps?r[n]!==t:wt.call(r,n)}function Mm(n,r){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=Ps&&r===t?h:r,this}sr.prototype.clear=_m,sr.prototype.delete=gm,sr.prototype.get=vm,sr.prototype.has=xm,sr.prototype.set=Mm;function di(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var f=n[r];this.set(f[0],f[1])}}function Sm(){this.__data__=[],this.size=0}function Em(n){var r=this.__data__,o=Aa(r,n);if(o<0)return!1;var f=r.length-1;return o==f?r.pop():va.call(r,o,1),--this.size,!0}function Tm(n){var r=this.__data__,o=Aa(r,n);return o<0?t:r[o][1]}function ym(n){return Aa(this.__data__,n)>-1}function Am(n,r){var o=this.__data__,f=Aa(o,n);return f<0?(++this.size,o.push([n,r])):o[f][1]=r,this}di.prototype.clear=Sm,di.prototype.delete=Em,di.prototype.get=Tm,di.prototype.has=ym,di.prototype.set=Am;function pi(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var f=n[r];this.set(f[0],f[1])}}function bm(){this.size=0,this.__data__={hash:new sr,map:new(Cs||di),string:new sr}}function wm(n){var r=Fa(this,n).delete(n);return this.size-=r?1:0,r}function Rm(n){return Fa(this,n).get(n)}function Cm(n){return Fa(this,n).has(n)}function Lm(n,r){var o=Fa(this,n),f=o.size;return o.set(n,r),this.size+=o.size==f?0:1,this}pi.prototype.clear=bm,pi.prototype.delete=wm,pi.prototype.get=Rm,pi.prototype.has=Cm,pi.prototype.set=Lm;function ar(n){var r=-1,o=n==null?0:n.length;for(this.__data__=new pi;++r<o;)this.add(n[r])}function Pm(n){return this.__data__.set(n,h),this}function Dm(n){return this.__data__.has(n)}ar.prototype.add=ar.prototype.push=Pm,ar.prototype.has=Dm;function Zn(n){var r=this.__data__=new di(n);this.size=r.size}function Um(){this.__data__=new di,this.size=0}function Im(n){var r=this.__data__,o=r.delete(n);return this.size=r.size,o}function Nm(n){return this.__data__.get(n)}function Om(n){return this.__data__.has(n)}function Fm(n,r){var o=this.__data__;if(o instanceof di){var f=o.__data__;if(!Cs||f.length<a-1)return f.push([n,r]),this.size=++o.size,this;o=this.__data__=new pi(f)}return o.set(n,r),this.size=o.size,this}Zn.prototype.clear=Um,Zn.prototype.delete=Im,Zn.prototype.get=Nm,Zn.prototype.has=Om,Zn.prototype.set=Fm;function mu(n,r){var o=st(n),f=!o&&fr(n),x=!o&&!f&&Vi(n),y=!o&&!f&&!x&&Yr(n),P=o||f||x||y,F=P?Wo(n.length,Yp):[],H=F.length;for(var ie in n)(r||wt.call(n,ie))&&!(P&&(ie=="length"||x&&(ie=="offset"||ie=="parent")||y&&(ie=="buffer"||ie=="byteLength"||ie=="byteOffset")||vi(ie,H)))&&F.push(ie);return F}function _u(n){var r=n.length;return r?n[al(0,r-1)]:t}function Bm(n,r){return Ba(xn(n),or(r,0,n.length))}function zm(n){return Ba(xn(n))}function $o(n,r,o){(o!==t&&!$n(n[r],o)||o===t&&!(r in n))&&mi(n,r,o)}function Us(n,r,o){var f=n[r];(!(wt.call(n,r)&&$n(f,o))||o===t&&!(r in n))&&mi(n,r,o)}function Aa(n,r){for(var o=n.length;o--;)if($n(n[o][0],r))return o;return-1}function Gm(n,r,o,f){return Bi(n,function(x,y,P){r(f,x,o(x),P)}),f}function gu(n,r){return n&&ai(r,en(r),n)}function Hm(n,r){return n&&ai(r,Sn(r),n)}function mi(n,r,o){r=="__proto__"&&xa?xa(n,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[r]=o}function Jo(n,r){for(var o=-1,f=r.length,x=Z(f),y=n==null;++o<f;)x[o]=y?t:Pl(n,r[o]);return x}function or(n,r,o){return n===n&&(o!==t&&(n=n<=o?n:o),r!==t&&(n=n>=r?n:r)),n}function Gn(n,r,o,f,x,y){var P,F=r&_,H=r&v,ie=r&M;if(o&&(P=x?o(n,f,x,y):o(n)),P!==t)return P;if(!Gt(n))return n;var ae=st(n);if(ae){if(P=C_(n),!F)return xn(n,P)}else{var fe=ln(n),Ae=fe==k||fe==Ht;if(Vi(n))return Hu(n,F);if(fe==je||fe==he||Ae&&!x){if(P=H||Ae?{}:of(n),!F)return H?v_(n,Hm(P,n)):g_(n,gu(P,n))}else{if(!Ut[fe])return x?n:{};P=L_(n,fe,F)}}y||(y=new Zn);var Be=y.get(n);if(Be)return Be;y.set(n,P),Of(n)?n.forEach(function(Ye){P.add(Gn(Ye,r,o,Ye,n,y))}):If(n)&&n.forEach(function(Ye,_t){P.set(_t,Gn(Ye,r,o,_t,n,y))});var qe=ie?H?gl:_l:H?Sn:en,ht=ae?t:qe(n);return Fn(ht||n,function(Ye,_t){ht&&(_t=Ye,Ye=n[_t]),Us(P,_t,Gn(Ye,r,o,_t,n,y))}),P}function Vm(n){var r=en(n);return function(o){return vu(o,n,r)}}function vu(n,r,o){var f=o.length;if(n==null)return!f;for(n=Pt(n);f--;){var x=o[f],y=r[x],P=n[x];if(P===t&&!(x in n)||!y(P))return!1}return!0}function xu(n,r,o){if(typeof n!="function")throw new Bn(u);return Gs(function(){n.apply(t,o)},r)}function Is(n,r,o,f){var x=-1,y=la,P=!0,F=n.length,H=[],ie=r.length;if(!F)return H;o&&(r=zt(r,wn(o))),f?(y=Fo,P=!1):r.length>=a&&(y=ws,P=!1,r=new ar(r));e:for(;++x<F;){var ae=n[x],fe=o==null?ae:o(ae);if(ae=f||ae!==0?ae:0,P&&fe===fe){for(var Ae=ie;Ae--;)if(r[Ae]===fe)continue e;H.push(ae)}else y(r,fe,f)||H.push(ae)}return H}var Bi=qu(si),Mu=qu(Qo,!0);function Wm(n,r){var o=!0;return Bi(n,function(f,x,y){return o=!!r(f,x,y),o}),o}function ba(n,r,o){for(var f=-1,x=n.length;++f<x;){var y=n[f],P=r(y);if(P!=null&&(F===t?P===P&&!Cn(P):o(P,F)))var F=P,H=y}return H}function km(n,r,o,f){var x=n.length;for(o=ut(o),o<0&&(o=-o>x?0:x+o),f=f===t||f>x?x:ut(f),f<0&&(f+=x),f=o>f?0:Bf(f);o<f;)n[o++]=r;return n}function Su(n,r){var o=[];return Bi(n,function(f,x,y){r(f,x,y)&&o.push(f)}),o}function rn(n,r,o,f,x){var y=-1,P=n.length;for(o||(o=D_),x||(x=[]);++y<P;){var F=n[y];r>0&&o(F)?r>1?rn(F,r-1,o,f,x):Ni(x,F):f||(x[x.length]=F)}return x}var jo=Yu(),Eu=Yu(!0);function si(n,r){return n&&jo(n,r,en)}function Qo(n,r){return n&&Eu(n,r,en)}function wa(n,r){return Ii(r,function(o){return xi(n[o])})}function lr(n,r){r=Gi(r,n);for(var o=0,f=r.length;n!=null&&o<f;)n=n[oi(r[o++])];return o&&o==f?n:t}function Tu(n,r,o){var f=r(n);return st(n)?f:Ni(f,o(n))}function hn(n){return n==null?n===t?se:He:rr&&rr in Pt(n)?b_(n):z_(n)}function el(n,r){return n>r}function Xm(n,r){return n!=null&&wt.call(n,r)}function qm(n,r){return n!=null&&r in Pt(n)}function Ym(n,r,o){return n>=on(r,o)&&n<Zt(r,o)}function tl(n,r,o){for(var f=o?Fo:la,x=n[0].length,y=n.length,P=y,F=Z(y),H=1/0,ie=[];P--;){var ae=n[P];P&&r&&(ae=zt(ae,wn(r))),H=on(ae.length,H),F[P]=!o&&(r||x>=120&&ae.length>=120)?new ar(P&&ae):t}ae=n[0];var fe=-1,Ae=F[0];e:for(;++fe<x&&ie.length<H;){var Be=ae[fe],qe=r?r(Be):Be;if(Be=o||Be!==0?Be:0,!(Ae?ws(Ae,qe):f(ie,qe,o))){for(P=y;--P;){var ht=F[P];if(!(ht?ws(ht,qe):f(n[P],qe,o)))continue e}Ae&&Ae.push(qe),ie.push(Be)}}return ie}function Km(n,r,o,f){return si(n,function(x,y,P){r(f,o(x),y,P)}),f}function Ns(n,r,o){r=Gi(r,n),n=ff(n,r);var f=n==null?n:n[oi(Vn(r))];return f==null?t:bn(f,n,o)}function yu(n){return Vt(n)&&hn(n)==he}function Zm(n){return Vt(n)&&hn(n)==Ke}function $m(n){return Vt(n)&&hn(n)==Re}function Os(n,r,o,f,x){return n===r?!0:n==null||r==null||!Vt(n)&&!Vt(r)?n!==n&&r!==r:Jm(n,r,o,f,Os,x)}function Jm(n,r,o,f,x,y){var P=st(n),F=st(r),H=P?we:ln(n),ie=F?we:ln(r);H=H==he?je:H,ie=ie==he?je:ie;var ae=H==je,fe=ie==je,Ae=H==ie;if(Ae&&Vi(n)){if(!Vi(r))return!1;P=!0,ae=!1}if(Ae&&!ae)return y||(y=new Zn),P||Yr(n)?rf(n,r,o,f,x,y):y_(n,r,H,o,f,x,y);if(!(o&T)){var Be=ae&&wt.call(n,"__wrapped__"),qe=fe&&wt.call(r,"__wrapped__");if(Be||qe){var ht=Be?n.value():n,Ye=qe?r.value():r;return y||(y=new Zn),x(ht,Ye,o,f,y)}}return Ae?(y||(y=new Zn),A_(n,r,o,f,x,y)):!1}function jm(n){return Vt(n)&&ln(n)==Ue}function nl(n,r,o,f){var x=o.length,y=x,P=!f;if(n==null)return!y;for(n=Pt(n);x--;){var F=o[x];if(P&&F[2]?F[1]!==n[F[0]]:!(F[0]in n))return!1}for(;++x<y;){F=o[x];var H=F[0],ie=n[H],ae=F[1];if(P&&F[2]){if(ie===t&&!(H in n))return!1}else{var fe=new Zn;if(f)var Ae=f(ie,ae,H,n,r,fe);if(!(Ae===t?Os(ae,ie,T|w,f,fe):Ae))return!1}}return!0}function Au(n){if(!Gt(n)||I_(n))return!1;var r=xi(n)?jp:K;return r.test(ur(n))}function Qm(n){return Vt(n)&&hn(n)==Et}function e_(n){return Vt(n)&&ln(n)==C}function t_(n){return Vt(n)&&ka(n.length)&&!!Nt[hn(n)]}function bu(n){return typeof n=="function"?n:n==null?En:typeof n=="object"?st(n)?Cu(n[0],n[1]):Ru(n):Zf(n)}function il(n){if(!zs(n))return rm(n);var r=[];for(var o in Pt(n))wt.call(n,o)&&o!="constructor"&&r.push(o);return r}function n_(n){if(!Gt(n))return B_(n);var r=zs(n),o=[];for(var f in n)f=="constructor"&&(r||!wt.call(n,f))||o.push(f);return o}function rl(n,r){return n<r}function wu(n,r){var o=-1,f=Mn(n)?Z(n.length):[];return Bi(n,function(x,y,P){f[++o]=r(x,y,P)}),f}function Ru(n){var r=xl(n);return r.length==1&&r[0][2]?cf(r[0][0],r[0][1]):function(o){return o===n||nl(o,n,r)}}function Cu(n,r){return Sl(n)&&lf(r)?cf(oi(n),r):function(o){var f=Pl(o,n);return f===t&&f===r?Dl(o,n):Os(r,f,T|w)}}function Ra(n,r,o,f,x){n!==r&&jo(r,function(y,P){if(x||(x=new Zn),Gt(y))i_(n,r,P,o,Ra,f,x);else{var F=f?f(Tl(n,P),y,P+"",n,r,x):t;F===t&&(F=y),$o(n,P,F)}},Sn)}function i_(n,r,o,f,x,y,P){var F=Tl(n,o),H=Tl(r,o),ie=P.get(H);if(ie){$o(n,o,ie);return}var ae=y?y(F,H,o+"",n,r,P):t,fe=ae===t;if(fe){var Ae=st(H),Be=!Ae&&Vi(H),qe=!Ae&&!Be&&Yr(H);ae=H,Ae||Be||qe?st(F)?ae=F:kt(F)?ae=xn(F):Be?(fe=!1,ae=Hu(H,!0)):qe?(fe=!1,ae=Vu(H,!0)):ae=[]:Hs(H)||fr(H)?(ae=F,fr(F)?ae=zf(F):(!Gt(F)||xi(F))&&(ae=of(H))):fe=!1}fe&&(P.set(H,ae),x(ae,H,f,y,P),P.delete(H)),$o(n,o,ae)}function Lu(n,r){var o=n.length;if(o)return r+=r<0?o:0,vi(r,o)?n[r]:t}function Pu(n,r,o){r.length?r=zt(r,function(y){return st(y)?function(P){return lr(P,y.length===1?y[0]:y)}:y}):r=[En];var f=-1;r=zt(r,wn(We()));var x=wu(n,function(y,P,F){var H=zt(r,function(ie){return ie(y)});return{criteria:H,index:++f,value:y}});return Lp(x,function(y,P){return __(y,P,o)})}function r_(n,r){return Du(n,r,function(o,f){return Dl(n,f)})}function Du(n,r,o){for(var f=-1,x=r.length,y={};++f<x;){var P=r[f],F=lr(n,P);o(F,P)&&Fs(y,Gi(P,n),F)}return y}function s_(n){return function(r){return lr(r,n)}}function sl(n,r,o,f){var x=f?Cp:Or,y=-1,P=r.length,F=n;for(n===r&&(r=xn(r)),o&&(F=zt(n,wn(o)));++y<P;)for(var H=0,ie=r[y],ae=o?o(ie):ie;(H=x(F,ae,H,f))>-1;)F!==n&&va.call(F,H,1),va.call(n,H,1);return n}function Uu(n,r){for(var o=n?r.length:0,f=o-1;o--;){var x=r[o];if(o==f||x!==y){var y=x;vi(x)?va.call(n,x,1):cl(n,x)}}return n}function al(n,r){return n+Sa(du()*(r-n+1))}function a_(n,r,o,f){for(var x=-1,y=Zt(Ma((r-n)/(o||1)),0),P=Z(y);y--;)P[f?y:++x]=n,n+=o;return P}function ol(n,r){var o="";if(!n||r<1||r>ee)return o;do r%2&&(o+=n),r=Sa(r/2),r&&(n+=n);while(r);return o}function mt(n,r){return yl(uf(n,r,En),n+"")}function o_(n){return _u(Kr(n))}function l_(n,r){var o=Kr(n);return Ba(o,or(r,0,o.length))}function Fs(n,r,o,f){if(!Gt(n))return n;r=Gi(r,n);for(var x=-1,y=r.length,P=y-1,F=n;F!=null&&++x<y;){var H=oi(r[x]),ie=o;if(H==="__proto__"||H==="constructor"||H==="prototype")return n;if(x!=P){var ae=F[H];ie=f?f(ae,H,F):t,ie===t&&(ie=Gt(ae)?ae:vi(r[x+1])?[]:{})}Us(F,H,ie),F=F[H]}return n}var Iu=Ea?function(n,r){return Ea.set(n,r),n}:En,c_=xa?function(n,r){return xa(n,"toString",{configurable:!0,enumerable:!1,value:Il(r),writable:!0})}:En;function u_(n){return Ba(Kr(n))}function Hn(n,r,o){var f=-1,x=n.length;r<0&&(r=-r>x?0:x+r),o=o>x?x:o,o<0&&(o+=x),x=r>o?0:o-r>>>0,r>>>=0;for(var y=Z(x);++f<x;)y[f]=n[f+r];return y}function f_(n,r){var o;return Bi(n,function(f,x,y){return o=r(f,x,y),!o}),!!o}function Ca(n,r,o){var f=0,x=n==null?f:n.length;if(typeof r=="number"&&r===r&&x<=Qe){for(;f<x;){var y=f+x>>>1,P=n[y];P!==null&&!Cn(P)&&(o?P<=r:P<r)?f=y+1:x=y}return x}return ll(n,r,En,o)}function ll(n,r,o,f){var x=0,y=n==null?0:n.length;if(y===0)return 0;r=o(r);for(var P=r!==r,F=r===null,H=Cn(r),ie=r===t;x<y;){var ae=Sa((x+y)/2),fe=o(n[ae]),Ae=fe!==t,Be=fe===null,qe=fe===fe,ht=Cn(fe);if(P)var Ye=f||qe;else ie?Ye=qe&&(f||Ae):F?Ye=qe&&Ae&&(f||!Be):H?Ye=qe&&Ae&&!Be&&(f||!ht):Be||ht?Ye=!1:Ye=f?fe<=r:fe<r;Ye?x=ae+1:y=ae}return on(y,De)}function Nu(n,r){for(var o=-1,f=n.length,x=0,y=[];++o<f;){var P=n[o],F=r?r(P):P;if(!o||!$n(F,H)){var H=F;y[x++]=P===0?0:P}}return y}function Ou(n){return typeof n=="number"?n:Cn(n)?ue:+n}function Rn(n){if(typeof n=="string")return n;if(st(n))return zt(n,Rn)+"";if(Cn(n))return pu?pu.call(n):"";var r=n+"";return r=="0"&&1/n==-le?"-0":r}function zi(n,r,o){var f=-1,x=la,y=n.length,P=!0,F=[],H=F;if(o)P=!1,x=Fo;else if(y>=a){var ie=r?null:E_(n);if(ie)return ua(ie);P=!1,x=ws,H=new ar}else H=r?[]:F;e:for(;++f<y;){var ae=n[f],fe=r?r(ae):ae;if(ae=o||ae!==0?ae:0,P&&fe===fe){for(var Ae=H.length;Ae--;)if(H[Ae]===fe)continue e;r&&H.push(fe),F.push(ae)}else x(H,fe,o)||(H!==F&&H.push(fe),F.push(ae))}return F}function cl(n,r){return r=Gi(r,n),n=ff(n,r),n==null||delete n[oi(Vn(r))]}function Fu(n,r,o,f){return Fs(n,r,o(lr(n,r)),f)}function La(n,r,o,f){for(var x=n.length,y=f?x:-1;(f?y--:++y<x)&&r(n[y],y,n););return o?Hn(n,f?0:y,f?y+1:x):Hn(n,f?y+1:0,f?x:y)}function Bu(n,r){var o=n;return o instanceof gt&&(o=o.value()),Bo(r,function(f,x){return x.func.apply(x.thisArg,Ni([f],x.args))},o)}function ul(n,r,o){var f=n.length;if(f<2)return f?zi(n[0]):[];for(var x=-1,y=Z(f);++x<f;)for(var P=n[x],F=-1;++F<f;)F!=x&&(y[x]=Is(y[x]||P,n[F],r,o));return zi(rn(y,1),r,o)}function zu(n,r,o){for(var f=-1,x=n.length,y=r.length,P={};++f<x;){var F=f<y?r[f]:t;o(P,n[f],F)}return P}function fl(n){return kt(n)?n:[]}function hl(n){return typeof n=="function"?n:En}function Gi(n,r){return st(n)?n:Sl(n,r)?[n]:mf(yt(n))}var h_=mt;function Hi(n,r,o){var f=n.length;return o=o===t?f:o,!r&&o>=f?n:Hn(n,r,o)}var Gu=Qp||function(n){return nn.clearTimeout(n)};function Hu(n,r){if(r)return n.slice();var o=n.length,f=lu?lu(o):new n.constructor(o);return n.copy(f),f}function dl(n){var r=new n.constructor(n.byteLength);return new _a(r).set(new _a(n)),r}function d_(n,r){var o=r?dl(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function p_(n){var r=new n.constructor(n.source,aa.exec(n));return r.lastIndex=n.lastIndex,r}function m_(n){return Ds?Pt(Ds.call(n)):{}}function Vu(n,r){var o=r?dl(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function Wu(n,r){if(n!==r){var o=n!==t,f=n===null,x=n===n,y=Cn(n),P=r!==t,F=r===null,H=r===r,ie=Cn(r);if(!F&&!ie&&!y&&n>r||y&&P&&H&&!F&&!ie||f&&P&&H||!o&&H||!x)return 1;if(!f&&!y&&!ie&&n<r||ie&&o&&x&&!f&&!y||F&&o&&x||!P&&x||!H)return-1}return 0}function __(n,r,o){for(var f=-1,x=n.criteria,y=r.criteria,P=x.length,F=o.length;++f<P;){var H=Wu(x[f],y[f]);if(H){if(f>=F)return H;var ie=o[f];return H*(ie=="desc"?-1:1)}}return n.index-r.index}function ku(n,r,o,f){for(var x=-1,y=n.length,P=o.length,F=-1,H=r.length,ie=Zt(y-P,0),ae=Z(H+ie),fe=!f;++F<H;)ae[F]=r[F];for(;++x<P;)(fe||x<y)&&(ae[o[x]]=n[x]);for(;ie--;)ae[F++]=n[x++];return ae}function Xu(n,r,o,f){for(var x=-1,y=n.length,P=-1,F=o.length,H=-1,ie=r.length,ae=Zt(y-F,0),fe=Z(ae+ie),Ae=!f;++x<ae;)fe[x]=n[x];for(var Be=x;++H<ie;)fe[Be+H]=r[H];for(;++P<F;)(Ae||x<y)&&(fe[Be+o[P]]=n[x++]);return fe}function xn(n,r){var o=-1,f=n.length;for(r||(r=Z(f));++o<f;)r[o]=n[o];return r}function ai(n,r,o,f){var x=!o;o||(o={});for(var y=-1,P=r.length;++y<P;){var F=r[y],H=f?f(o[F],n[F],F,o,n):t;H===t&&(H=n[F]),x?mi(o,F,H):Us(o,F,H)}return o}function g_(n,r){return ai(n,Ml(n),r)}function v_(n,r){return ai(n,sf(n),r)}function Pa(n,r){return function(o,f){var x=st(o)?Tp:Gm,y=r?r():{};return x(o,n,We(f,2),y)}}function kr(n){return mt(function(r,o){var f=-1,x=o.length,y=x>1?o[x-1]:t,P=x>2?o[2]:t;for(y=n.length>3&&typeof y=="function"?(x--,y):t,P&&dn(o[0],o[1],P)&&(y=x<3?t:y,x=1),r=Pt(r);++f<x;){var F=o[f];F&&n(r,F,f,y)}return r})}function qu(n,r){return function(o,f){if(o==null)return o;if(!Mn(o))return n(o,f);for(var x=o.length,y=r?x:-1,P=Pt(o);(r?y--:++y<x)&&f(P[y],y,P)!==!1;);return o}}function Yu(n){return function(r,o,f){for(var x=-1,y=Pt(r),P=f(r),F=P.length;F--;){var H=P[n?F:++x];if(o(y[H],H,y)===!1)break}return r}}function x_(n,r,o){var f=r&g,x=Bs(n);function y(){var P=this&&this!==nn&&this instanceof y?x:n;return P.apply(f?o:this,arguments)}return y}function Ku(n){return function(r){r=yt(r);var o=Fr(r)?Kn(r):t,f=o?o[0]:r.charAt(0),x=o?Hi(o,1).join(""):r.slice(1);return f[n]()+x}}function Xr(n){return function(r){return Bo(Yf(qf(r).replace(cp,"")),n,"")}}function Bs(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=Wr(n.prototype),f=n.apply(o,r);return Gt(f)?f:o}}function M_(n,r,o){var f=Bs(n);function x(){for(var y=arguments.length,P=Z(y),F=y,H=qr(x);F--;)P[F]=arguments[F];var ie=y<3&&P[0]!==H&&P[y-1]!==H?[]:Oi(P,H);if(y-=ie.length,y<o)return Qu(n,r,Da,x.placeholder,t,P,ie,t,t,o-y);var ae=this&&this!==nn&&this instanceof x?f:n;return bn(ae,this,P)}return x}function Zu(n){return function(r,o,f){var x=Pt(r);if(!Mn(r)){var y=We(o,3);r=en(r),o=function(F){return y(x[F],F,x)}}var P=n(r,o,f);return P>-1?x[y?r[P]:P]:t}}function $u(n){return gi(function(r){var o=r.length,f=o,x=zn.prototype.thru;for(n&&r.reverse();f--;){var y=r[f];if(typeof y!="function")throw new Bn(u);if(x&&!P&&Oa(y)=="wrapper")var P=new zn([],!0)}for(f=P?f:o;++f<o;){y=r[f];var F=Oa(y),H=F=="wrapper"?vl(y):t;H&&El(H[0])&&H[1]==(U|R|V|$)&&!H[4].length&&H[9]==1?P=P[Oa(H[0])].apply(P,H[3]):P=y.length==1&&El(y)?P[F]():P.thru(y)}return function(){var ie=arguments,ae=ie[0];if(P&&ie.length==1&&st(ae))return P.plant(ae).value();for(var fe=0,Ae=o?r[fe].apply(this,ie):ae;++fe<o;)Ae=r[fe].call(this,Ae);return Ae}})}function Da(n,r,o,f,x,y,P,F,H,ie){var ae=r&U,fe=r&g,Ae=r&m,Be=r&(R|D),qe=r&xe,ht=Ae?t:Bs(n);function Ye(){for(var _t=arguments.length,vt=Z(_t),Ln=_t;Ln--;)vt[Ln]=arguments[Ln];if(Be)var pn=qr(Ye),Pn=Dp(vt,pn);if(f&&(vt=ku(vt,f,x,Be)),y&&(vt=Xu(vt,y,P,Be)),_t-=Pn,Be&&_t<ie){var Xt=Oi(vt,pn);return Qu(n,r,Da,Ye.placeholder,o,vt,Xt,F,H,ie-_t)}var Jn=fe?o:this,Si=Ae?Jn[n]:n;return _t=vt.length,F?vt=G_(vt,F):qe&&_t>1&&vt.reverse(),ae&&H<_t&&(vt.length=H),this&&this!==nn&&this instanceof Ye&&(Si=ht||Bs(Si)),Si.apply(Jn,vt)}return Ye}function Ju(n,r){return function(o,f){return Km(o,n,r(f),{})}}function Ua(n,r){return function(o,f){var x;if(o===t&&f===t)return r;if(o!==t&&(x=o),f!==t){if(x===t)return f;typeof o=="string"||typeof f=="string"?(o=Rn(o),f=Rn(f)):(o=Ou(o),f=Ou(f)),x=n(o,f)}return x}}function pl(n){return gi(function(r){return r=zt(r,wn(We())),mt(function(o){var f=this;return n(r,function(x){return bn(x,f,o)})})})}function Ia(n,r){r=r===t?" ":Rn(r);var o=r.length;if(o<2)return o?ol(r,n):r;var f=ol(r,Ma(n/Br(r)));return Fr(r)?Hi(Kn(f),0,n).join(""):f.slice(0,n)}function S_(n,r,o,f){var x=r&g,y=Bs(n);function P(){for(var F=-1,H=arguments.length,ie=-1,ae=f.length,fe=Z(ae+H),Ae=this&&this!==nn&&this instanceof P?y:n;++ie<ae;)fe[ie]=f[ie];for(;H--;)fe[ie++]=arguments[++F];return bn(Ae,x?o:this,fe)}return P}function ju(n){return function(r,o,f){return f&&typeof f!="number"&&dn(r,o,f)&&(o=f=t),r=Mi(r),o===t?(o=r,r=0):o=Mi(o),f=f===t?r<o?1:-1:Mi(f),a_(r,o,f,n)}}function Na(n){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=Wn(r),o=Wn(o)),n(r,o)}}function Qu(n,r,o,f,x,y,P,F,H,ie){var ae=r&R,fe=ae?P:t,Ae=ae?t:P,Be=ae?y:t,qe=ae?t:y;r|=ae?V:B,r&=~(ae?B:V),r&N||(r&=~(g|m));var ht=[n,r,x,Be,fe,qe,Ae,F,H,ie],Ye=o.apply(t,ht);return El(n)&&hf(Ye,ht),Ye.placeholder=f,df(Ye,n,r)}function ml(n){var r=Kt[n];return function(o,f){if(o=Wn(o),f=f==null?0:on(ut(f),292),f&&hu(o)){var x=(yt(o)+"e").split("e"),y=r(x[0]+"e"+(+x[1]+f));return x=(yt(y)+"e").split("e"),+(x[0]+"e"+(+x[1]-f))}return r(o)}}var E_=Hr&&1/ua(new Hr([,-0]))[1]==le?function(n){return new Hr(n)}:Fl;function ef(n){return function(r){var o=ln(r);return o==Ue?Xo(r):o==C?zp(r):Pp(r,n(r))}}function _i(n,r,o,f,x,y,P,F){var H=r&m;if(!H&&typeof n!="function")throw new Bn(u);var ie=f?f.length:0;if(ie||(r&=~(V|B),f=x=t),P=P===t?P:Zt(ut(P),0),F=F===t?F:ut(F),ie-=x?x.length:0,r&B){var ae=f,fe=x;f=x=t}var Ae=H?t:vl(n),Be=[n,r,o,f,x,ae,fe,y,P,F];if(Ae&&F_(Be,Ae),n=Be[0],r=Be[1],o=Be[2],f=Be[3],x=Be[4],F=Be[9]=Be[9]===t?H?0:n.length:Zt(Be[9]-ie,0),!F&&r&(R|D)&&(r&=~(R|D)),!r||r==g)var qe=x_(n,r,o);else r==R||r==D?qe=M_(n,r,F):(r==V||r==(g|V))&&!x.length?qe=S_(n,r,o,f):qe=Da.apply(t,Be);var ht=Ae?Iu:hf;return df(ht(qe,Be),n,r)}function tf(n,r,o,f){return n===t||$n(n,Gr[o])&&!wt.call(f,o)?r:n}function nf(n,r,o,f,x,y){return Gt(n)&&Gt(r)&&(y.set(r,n),Ra(n,r,t,nf,y),y.delete(r)),n}function T_(n){return Hs(n)?t:n}function rf(n,r,o,f,x,y){var P=o&T,F=n.length,H=r.length;if(F!=H&&!(P&&H>F))return!1;var ie=y.get(n),ae=y.get(r);if(ie&&ae)return ie==r&&ae==n;var fe=-1,Ae=!0,Be=o&w?new ar:t;for(y.set(n,r),y.set(r,n);++fe<F;){var qe=n[fe],ht=r[fe];if(f)var Ye=P?f(ht,qe,fe,r,n,y):f(qe,ht,fe,n,r,y);if(Ye!==t){if(Ye)continue;Ae=!1;break}if(Be){if(!zo(r,function(_t,vt){if(!ws(Be,vt)&&(qe===_t||x(qe,_t,o,f,y)))return Be.push(vt)})){Ae=!1;break}}else if(!(qe===ht||x(qe,ht,o,f,y))){Ae=!1;break}}return y.delete(n),y.delete(r),Ae}function y_(n,r,o,f,x,y,P){switch(o){case Ge:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Ke:return!(n.byteLength!=r.byteLength||!y(new _a(n),new _a(r)));case Ne:case Re:case $e:return $n(+n,+r);case Ve:return n.name==r.name&&n.message==r.message;case Et:case S:return n==r+"";case Ue:var F=Xo;case C:var H=f&T;if(F||(F=ua),n.size!=r.size&&!H)return!1;var ie=P.get(n);if(ie)return ie==r;f|=w,P.set(n,r);var ae=rf(F(n),F(r),f,x,y,P);return P.delete(n),ae;case Q:if(Ds)return Ds.call(n)==Ds.call(r)}return!1}function A_(n,r,o,f,x,y){var P=o&T,F=_l(n),H=F.length,ie=_l(r),ae=ie.length;if(H!=ae&&!P)return!1;for(var fe=H;fe--;){var Ae=F[fe];if(!(P?Ae in r:wt.call(r,Ae)))return!1}var Be=y.get(n),qe=y.get(r);if(Be&&qe)return Be==r&&qe==n;var ht=!0;y.set(n,r),y.set(r,n);for(var Ye=P;++fe<H;){Ae=F[fe];var _t=n[Ae],vt=r[Ae];if(f)var Ln=P?f(vt,_t,Ae,r,n,y):f(_t,vt,Ae,n,r,y);if(!(Ln===t?_t===vt||x(_t,vt,o,f,y):Ln)){ht=!1;break}Ye||(Ye=Ae=="constructor")}if(ht&&!Ye){var pn=n.constructor,Pn=r.constructor;pn!=Pn&&"constructor"in n&&"constructor"in r&&!(typeof pn=="function"&&pn instanceof pn&&typeof Pn=="function"&&Pn instanceof Pn)&&(ht=!1)}return y.delete(n),y.delete(r),ht}function gi(n){return yl(uf(n,t,xf),n+"")}function _l(n){return Tu(n,en,Ml)}function gl(n){return Tu(n,Sn,sf)}var vl=Ea?function(n){return Ea.get(n)}:Fl;function Oa(n){for(var r=n.name+"",o=Vr[r],f=wt.call(Vr,r)?o.length:0;f--;){var x=o[f],y=x.func;if(y==null||y==n)return x.name}return r}function qr(n){var r=wt.call(E,"placeholder")?E:n;return r.placeholder}function We(){var n=E.iteratee||Nl;return n=n===Nl?bu:n,arguments.length?n(arguments[0],arguments[1]):n}function Fa(n,r){var o=n.__data__;return U_(r)?o[typeof r=="string"?"string":"hash"]:o.map}function xl(n){for(var r=en(n),o=r.length;o--;){var f=r[o],x=n[f];r[o]=[f,x,lf(x)]}return r}function cr(n,r){var o=Op(n,r);return Au(o)?o:t}function b_(n){var r=wt.call(n,rr),o=n[rr];try{n[rr]=t;var f=!0}catch{}var x=pa.call(n);return f&&(r?n[rr]=o:delete n[rr]),x}var Ml=Yo?function(n){return n==null?[]:(n=Pt(n),Ii(Yo(n),function(r){return uu.call(n,r)}))}:Bl,sf=Yo?function(n){for(var r=[];n;)Ni(r,Ml(n)),n=ga(n);return r}:Bl,ln=hn;(Ko&&ln(new Ko(new ArrayBuffer(1)))!=Ge||Cs&&ln(new Cs)!=Ue||Zo&&ln(Zo.resolve())!=et||Hr&&ln(new Hr)!=C||Ls&&ln(new Ls)!=pe)&&(ln=function(n){var r=hn(n),o=r==je?n.constructor:t,f=o?ur(o):"";if(f)switch(f){case lm:return Ge;case cm:return Ue;case um:return et;case fm:return C;case hm:return pe}return r});function w_(n,r,o){for(var f=-1,x=o.length;++f<x;){var y=o[f],P=y.size;switch(y.type){case"drop":n+=P;break;case"dropRight":r-=P;break;case"take":r=on(r,n+P);break;case"takeRight":n=Zt(n,r-P);break}}return{start:n,end:r}}function R_(n){var r=n.match(ia);return r?r[1].split(Pr):[]}function af(n,r,o){r=Gi(r,n);for(var f=-1,x=r.length,y=!1;++f<x;){var P=oi(r[f]);if(!(y=n!=null&&o(n,P)))break;n=n[P]}return y||++f!=x?y:(x=n==null?0:n.length,!!x&&ka(x)&&vi(P,x)&&(st(n)||fr(n)))}function C_(n){var r=n.length,o=new n.constructor(r);return r&&typeof n[0]=="string"&&wt.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function of(n){return typeof n.constructor=="function"&&!zs(n)?Wr(ga(n)):{}}function L_(n,r,o){var f=n.constructor;switch(r){case Ke:return dl(n);case Ne:case Re:return new f(+n);case Ge:return d_(n,o);case Ee:case ye:case Je:case Se:case Dt:case it:case ze:case Le:case Oe:return Vu(n,o);case Ue:return new f;case $e:case S:return new f(n);case Et:return p_(n);case C:return new f;case Q:return m_(n)}}function P_(n,r){var o=r.length;if(!o)return n;var f=o-1;return r[f]=(o>1?"& ":"")+r[f],r=r.join(o>2?", ":" "),n.replace(Lr,`{
/* [wrapped with `+r+`] */
`)}function D_(n){return st(n)||fr(n)||!!(fu&&n&&n[fu])}function vi(n,r){var o=typeof n;return r=r??ee,!!r&&(o=="number"||o!="symbol"&&Y.test(n))&&n>-1&&n%1==0&&n<r}function dn(n,r,o){if(!Gt(o))return!1;var f=typeof r;return(f=="number"?Mn(o)&&vi(r,o.length):f=="string"&&r in o)?$n(o[r],n):!1}function Sl(n,r){if(st(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||Cn(n)?!0:Ft.test(n)||!At.test(n)||r!=null&&n in Pt(r)}function U_(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function El(n){var r=Oa(n),o=E[r];if(typeof o!="function"||!(r in gt.prototype))return!1;if(n===o)return!0;var f=vl(o);return!!f&&n===f[0]}function I_(n){return!!ou&&ou in n}var N_=ha?xi:zl;function zs(n){var r=n&&n.constructor,o=typeof r=="function"&&r.prototype||Gr;return n===o}function lf(n){return n===n&&!Gt(n)}function cf(n,r){return function(o){return o==null?!1:o[n]===r&&(r!==t||n in Pt(o))}}function O_(n){var r=Va(n,function(f){return o.size===d&&o.clear(),f}),o=r.cache;return r}function F_(n,r){var o=n[1],f=r[1],x=o|f,y=x<(g|m|U),P=f==U&&o==R||f==U&&o==$&&n[7].length<=r[8]||f==(U|$)&&r[7].length<=r[8]&&o==R;if(!(y||P))return n;f&g&&(n[2]=r[2],x|=o&g?0:N);var F=r[3];if(F){var H=n[3];n[3]=H?ku(H,F,r[4]):F,n[4]=H?Oi(n[3],p):r[4]}return F=r[5],F&&(H=n[5],n[5]=H?Xu(H,F,r[6]):F,n[6]=H?Oi(n[5],p):r[6]),F=r[7],F&&(n[7]=F),f&U&&(n[8]=n[8]==null?r[8]:on(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=x,n}function B_(n){var r=[];if(n!=null)for(var o in Pt(n))r.push(o);return r}function z_(n){return pa.call(n)}function uf(n,r,o){return r=Zt(r===t?n.length-1:r,0),function(){for(var f=arguments,x=-1,y=Zt(f.length-r,0),P=Z(y);++x<y;)P[x]=f[r+x];x=-1;for(var F=Z(r+1);++x<r;)F[x]=f[x];return F[r]=o(P),bn(n,this,F)}}function ff(n,r){return r.length<2?n:lr(n,Hn(r,0,-1))}function G_(n,r){for(var o=n.length,f=on(r.length,o),x=xn(n);f--;){var y=r[f];n[f]=vi(y,o)?x[y]:t}return n}function Tl(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var hf=pf(Iu),Gs=tm||function(n,r){return nn.setTimeout(n,r)},yl=pf(c_);function df(n,r,o){var f=r+"";return yl(n,P_(f,H_(R_(f),o)))}function pf(n){var r=0,o=0;return function(){var f=sm(),x=_e-(f-o);if(o=f,x>0){if(++r>=Me)return arguments[0]}else r=0;return n.apply(t,arguments)}}function Ba(n,r){var o=-1,f=n.length,x=f-1;for(r=r===t?f:r;++o<r;){var y=al(o,x),P=n[y];n[y]=n[o],n[o]=P}return n.length=r,n}var mf=O_(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(Mt,function(o,f,x,y){r.push(x?y.replace(Lo,"$1"):f||o)}),r});function oi(n){if(typeof n=="string"||Cn(n))return n;var r=n+"";return r=="0"&&1/n==-le?"-0":r}function ur(n){if(n!=null){try{return da.call(n)}catch{}try{return n+""}catch{}}return""}function H_(n,r){return Fn(j,function(o){var f="_."+o[0];r&o[1]&&!la(n,f)&&n.push(f)}),n.sort()}function _f(n){if(n instanceof gt)return n.clone();var r=new zn(n.__wrapped__,n.__chain__);return r.__actions__=xn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function V_(n,r,o){(o?dn(n,r,o):r===t)?r=1:r=Zt(ut(r),0);var f=n==null?0:n.length;if(!f||r<1)return[];for(var x=0,y=0,P=Z(Ma(f/r));x<f;)P[y++]=Hn(n,x,x+=r);return P}function W_(n){for(var r=-1,o=n==null?0:n.length,f=0,x=[];++r<o;){var y=n[r];y&&(x[f++]=y)}return x}function k_(){var n=arguments.length;if(!n)return[];for(var r=Z(n-1),o=arguments[0],f=n;f--;)r[f-1]=arguments[f];return Ni(st(o)?xn(o):[o],rn(r,1))}var X_=mt(function(n,r){return kt(n)?Is(n,rn(r,1,kt,!0)):[]}),q_=mt(function(n,r){var o=Vn(r);return kt(o)&&(o=t),kt(n)?Is(n,rn(r,1,kt,!0),We(o,2)):[]}),Y_=mt(function(n,r){var o=Vn(r);return kt(o)&&(o=t),kt(n)?Is(n,rn(r,1,kt,!0),t,o):[]});function K_(n,r,o){var f=n==null?0:n.length;return f?(r=o||r===t?1:ut(r),Hn(n,r<0?0:r,f)):[]}function Z_(n,r,o){var f=n==null?0:n.length;return f?(r=o||r===t?1:ut(r),r=f-r,Hn(n,0,r<0?0:r)):[]}function $_(n,r){return n&&n.length?La(n,We(r,3),!0,!0):[]}function J_(n,r){return n&&n.length?La(n,We(r,3),!0):[]}function j_(n,r,o,f){var x=n==null?0:n.length;return x?(o&&typeof o!="number"&&dn(n,r,o)&&(o=0,f=x),km(n,r,o,f)):[]}function gf(n,r,o){var f=n==null?0:n.length;if(!f)return-1;var x=o==null?0:ut(o);return x<0&&(x=Zt(f+x,0)),ca(n,We(r,3),x)}function vf(n,r,o){var f=n==null?0:n.length;if(!f)return-1;var x=f-1;return o!==t&&(x=ut(o),x=o<0?Zt(f+x,0):on(x,f-1)),ca(n,We(r,3),x,!0)}function xf(n){var r=n==null?0:n.length;return r?rn(n,1):[]}function Q_(n){var r=n==null?0:n.length;return r?rn(n,le):[]}function eg(n,r){var o=n==null?0:n.length;return o?(r=r===t?1:ut(r),rn(n,r)):[]}function tg(n){for(var r=-1,o=n==null?0:n.length,f={};++r<o;){var x=n[r];f[x[0]]=x[1]}return f}function Mf(n){return n&&n.length?n[0]:t}function ng(n,r,o){var f=n==null?0:n.length;if(!f)return-1;var x=o==null?0:ut(o);return x<0&&(x=Zt(f+x,0)),Or(n,r,x)}function ig(n){var r=n==null?0:n.length;return r?Hn(n,0,-1):[]}var rg=mt(function(n){var r=zt(n,fl);return r.length&&r[0]===n[0]?tl(r):[]}),sg=mt(function(n){var r=Vn(n),o=zt(n,fl);return r===Vn(o)?r=t:o.pop(),o.length&&o[0]===n[0]?tl(o,We(r,2)):[]}),ag=mt(function(n){var r=Vn(n),o=zt(n,fl);return r=typeof r=="function"?r:t,r&&o.pop(),o.length&&o[0]===n[0]?tl(o,t,r):[]});function og(n,r){return n==null?"":im.call(n,r)}function Vn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function lg(n,r,o){var f=n==null?0:n.length;if(!f)return-1;var x=f;return o!==t&&(x=ut(o),x=x<0?Zt(f+x,0):on(x,f-1)),r===r?Hp(n,r,x):ca(n,Qc,x,!0)}function cg(n,r){return n&&n.length?Lu(n,ut(r)):t}var ug=mt(Sf);function Sf(n,r){return n&&n.length&&r&&r.length?sl(n,r):n}function fg(n,r,o){return n&&n.length&&r&&r.length?sl(n,r,We(o,2)):n}function hg(n,r,o){return n&&n.length&&r&&r.length?sl(n,r,t,o):n}var dg=gi(function(n,r){var o=n==null?0:n.length,f=Jo(n,r);return Uu(n,zt(r,function(x){return vi(x,o)?+x:x}).sort(Wu)),f});function pg(n,r){var o=[];if(!(n&&n.length))return o;var f=-1,x=[],y=n.length;for(r=We(r,3);++f<y;){var P=n[f];r(P,f,n)&&(o.push(P),x.push(f))}return Uu(n,x),o}function Al(n){return n==null?n:om.call(n)}function mg(n,r,o){var f=n==null?0:n.length;return f?(o&&typeof o!="number"&&dn(n,r,o)?(r=0,o=f):(r=r==null?0:ut(r),o=o===t?f:ut(o)),Hn(n,r,o)):[]}function _g(n,r){return Ca(n,r)}function gg(n,r,o){return ll(n,r,We(o,2))}function vg(n,r){var o=n==null?0:n.length;if(o){var f=Ca(n,r);if(f<o&&$n(n[f],r))return f}return-1}function xg(n,r){return Ca(n,r,!0)}function Mg(n,r,o){return ll(n,r,We(o,2),!0)}function Sg(n,r){var o=n==null?0:n.length;if(o){var f=Ca(n,r,!0)-1;if($n(n[f],r))return f}return-1}function Eg(n){return n&&n.length?Nu(n):[]}function Tg(n,r){return n&&n.length?Nu(n,We(r,2)):[]}function yg(n){var r=n==null?0:n.length;return r?Hn(n,1,r):[]}function Ag(n,r,o){return n&&n.length?(r=o||r===t?1:ut(r),Hn(n,0,r<0?0:r)):[]}function bg(n,r,o){var f=n==null?0:n.length;return f?(r=o||r===t?1:ut(r),r=f-r,Hn(n,r<0?0:r,f)):[]}function wg(n,r){return n&&n.length?La(n,We(r,3),!1,!0):[]}function Rg(n,r){return n&&n.length?La(n,We(r,3)):[]}var Cg=mt(function(n){return zi(rn(n,1,kt,!0))}),Lg=mt(function(n){var r=Vn(n);return kt(r)&&(r=t),zi(rn(n,1,kt,!0),We(r,2))}),Pg=mt(function(n){var r=Vn(n);return r=typeof r=="function"?r:t,zi(rn(n,1,kt,!0),t,r)});function Dg(n){return n&&n.length?zi(n):[]}function Ug(n,r){return n&&n.length?zi(n,We(r,2)):[]}function Ig(n,r){return r=typeof r=="function"?r:t,n&&n.length?zi(n,t,r):[]}function bl(n){if(!(n&&n.length))return[];var r=0;return n=Ii(n,function(o){if(kt(o))return r=Zt(o.length,r),!0}),Wo(r,function(o){return zt(n,Go(o))})}function Ef(n,r){if(!(n&&n.length))return[];var o=bl(n);return r==null?o:zt(o,function(f){return bn(r,t,f)})}var Ng=mt(function(n,r){return kt(n)?Is(n,r):[]}),Og=mt(function(n){return ul(Ii(n,kt))}),Fg=mt(function(n){var r=Vn(n);return kt(r)&&(r=t),ul(Ii(n,kt),We(r,2))}),Bg=mt(function(n){var r=Vn(n);return r=typeof r=="function"?r:t,ul(Ii(n,kt),t,r)}),zg=mt(bl);function Gg(n,r){return zu(n||[],r||[],Us)}function Hg(n,r){return zu(n||[],r||[],Fs)}var Vg=mt(function(n){var r=n.length,o=r>1?n[r-1]:t;return o=typeof o=="function"?(n.pop(),o):t,Ef(n,o)});function Tf(n){var r=E(n);return r.__chain__=!0,r}function Wg(n,r){return r(n),n}function za(n,r){return r(n)}var kg=gi(function(n){var r=n.length,o=r?n[0]:0,f=this.__wrapped__,x=function(y){return Jo(y,n)};return r>1||this.__actions__.length||!(f instanceof gt)||!vi(o)?this.thru(x):(f=f.slice(o,+o+(r?1:0)),f.__actions__.push({func:za,args:[x],thisArg:t}),new zn(f,this.__chain__).thru(function(y){return r&&!y.length&&y.push(t),y}))});function Xg(){return Tf(this)}function qg(){return new zn(this.value(),this.__chain__)}function Yg(){this.__values__===t&&(this.__values__=Ff(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function Kg(){return this}function Zg(n){for(var r,o=this;o instanceof ya;){var f=_f(o);f.__index__=0,f.__values__=t,r?x.__wrapped__=f:r=f;var x=f;o=o.__wrapped__}return x.__wrapped__=n,r}function $g(){var n=this.__wrapped__;if(n instanceof gt){var r=n;return this.__actions__.length&&(r=new gt(this)),r=r.reverse(),r.__actions__.push({func:za,args:[Al],thisArg:t}),new zn(r,this.__chain__)}return this.thru(Al)}function Jg(){return Bu(this.__wrapped__,this.__actions__)}var jg=Pa(function(n,r,o){wt.call(n,o)?++n[o]:mi(n,o,1)});function Qg(n,r,o){var f=st(n)?Jc:Wm;return o&&dn(n,r,o)&&(r=t),f(n,We(r,3))}function ev(n,r){var o=st(n)?Ii:Su;return o(n,We(r,3))}var tv=Zu(gf),nv=Zu(vf);function iv(n,r){return rn(Ga(n,r),1)}function rv(n,r){return rn(Ga(n,r),le)}function sv(n,r,o){return o=o===t?1:ut(o),rn(Ga(n,r),o)}function yf(n,r){var o=st(n)?Fn:Bi;return o(n,We(r,3))}function Af(n,r){var o=st(n)?yp:Mu;return o(n,We(r,3))}var av=Pa(function(n,r,o){wt.call(n,o)?n[o].push(r):mi(n,o,[r])});function ov(n,r,o,f){n=Mn(n)?n:Kr(n),o=o&&!f?ut(o):0;var x=n.length;return o<0&&(o=Zt(x+o,0)),Xa(n)?o<=x&&n.indexOf(r,o)>-1:!!x&&Or(n,r,o)>-1}var lv=mt(function(n,r,o){var f=-1,x=typeof r=="function",y=Mn(n)?Z(n.length):[];return Bi(n,function(P){y[++f]=x?bn(r,P,o):Ns(P,r,o)}),y}),cv=Pa(function(n,r,o){mi(n,o,r)});function Ga(n,r){var o=st(n)?zt:wu;return o(n,We(r,3))}function uv(n,r,o,f){return n==null?[]:(st(r)||(r=r==null?[]:[r]),o=f?t:o,st(o)||(o=o==null?[]:[o]),Pu(n,r,o))}var fv=Pa(function(n,r,o){n[o?0:1].push(r)},function(){return[[],[]]});function hv(n,r,o){var f=st(n)?Bo:tu,x=arguments.length<3;return f(n,We(r,4),o,x,Bi)}function dv(n,r,o){var f=st(n)?Ap:tu,x=arguments.length<3;return f(n,We(r,4),o,x,Mu)}function pv(n,r){var o=st(n)?Ii:Su;return o(n,Wa(We(r,3)))}function mv(n){var r=st(n)?_u:o_;return r(n)}function _v(n,r,o){(o?dn(n,r,o):r===t)?r=1:r=ut(r);var f=st(n)?Bm:l_;return f(n,r)}function gv(n){var r=st(n)?zm:u_;return r(n)}function vv(n){if(n==null)return 0;if(Mn(n))return Xa(n)?Br(n):n.length;var r=ln(n);return r==Ue||r==C?n.size:il(n).length}function xv(n,r,o){var f=st(n)?zo:f_;return o&&dn(n,r,o)&&(r=t),f(n,We(r,3))}var Mv=mt(function(n,r){if(n==null)return[];var o=r.length;return o>1&&dn(n,r[0],r[1])?r=[]:o>2&&dn(r[0],r[1],r[2])&&(r=[r[0]]),Pu(n,rn(r,1),[])}),Ha=em||function(){return nn.Date.now()};function Sv(n,r){if(typeof r!="function")throw new Bn(u);return n=ut(n),function(){if(--n<1)return r.apply(this,arguments)}}function bf(n,r,o){return r=o?t:r,r=n&&r==null?n.length:r,_i(n,U,t,t,t,t,r)}function wf(n,r){var o;if(typeof r!="function")throw new Bn(u);return n=ut(n),function(){return--n>0&&(o=r.apply(this,arguments)),n<=1&&(r=t),o}}var wl=mt(function(n,r,o){var f=g;if(o.length){var x=Oi(o,qr(wl));f|=V}return _i(n,f,r,o,x)}),Rf=mt(function(n,r,o){var f=g|m;if(o.length){var x=Oi(o,qr(Rf));f|=V}return _i(r,f,n,o,x)});function Cf(n,r,o){r=o?t:r;var f=_i(n,R,t,t,t,t,t,r);return f.placeholder=Cf.placeholder,f}function Lf(n,r,o){r=o?t:r;var f=_i(n,D,t,t,t,t,t,r);return f.placeholder=Lf.placeholder,f}function Pf(n,r,o){var f,x,y,P,F,H,ie=0,ae=!1,fe=!1,Ae=!0;if(typeof n!="function")throw new Bn(u);r=Wn(r)||0,Gt(o)&&(ae=!!o.leading,fe="maxWait"in o,y=fe?Zt(Wn(o.maxWait)||0,r):y,Ae="trailing"in o?!!o.trailing:Ae);function Be(Xt){var Jn=f,Si=x;return f=x=t,ie=Xt,P=n.apply(Si,Jn),P}function qe(Xt){return ie=Xt,F=Gs(_t,r),ae?Be(Xt):P}function ht(Xt){var Jn=Xt-H,Si=Xt-ie,$f=r-Jn;return fe?on($f,y-Si):$f}function Ye(Xt){var Jn=Xt-H,Si=Xt-ie;return H===t||Jn>=r||Jn<0||fe&&Si>=y}function _t(){var Xt=Ha();if(Ye(Xt))return vt(Xt);F=Gs(_t,ht(Xt))}function vt(Xt){return F=t,Ae&&f?Be(Xt):(f=x=t,P)}function Ln(){F!==t&&Gu(F),ie=0,f=H=x=F=t}function pn(){return F===t?P:vt(Ha())}function Pn(){var Xt=Ha(),Jn=Ye(Xt);if(f=arguments,x=this,H=Xt,Jn){if(F===t)return qe(H);if(fe)return Gu(F),F=Gs(_t,r),Be(H)}return F===t&&(F=Gs(_t,r)),P}return Pn.cancel=Ln,Pn.flush=pn,Pn}var Ev=mt(function(n,r){return xu(n,1,r)}),Tv=mt(function(n,r,o){return xu(n,Wn(r)||0,o)});function yv(n){return _i(n,xe)}function Va(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Bn(u);var o=function(){var f=arguments,x=r?r.apply(this,f):f[0],y=o.cache;if(y.has(x))return y.get(x);var P=n.apply(this,f);return o.cache=y.set(x,P)||y,P};return o.cache=new(Va.Cache||pi),o}Va.Cache=pi;function Wa(n){if(typeof n!="function")throw new Bn(u);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function Av(n){return wf(2,n)}var bv=h_(function(n,r){r=r.length==1&&st(r[0])?zt(r[0],wn(We())):zt(rn(r,1),wn(We()));var o=r.length;return mt(function(f){for(var x=-1,y=on(f.length,o);++x<y;)f[x]=r[x].call(this,f[x]);return bn(n,this,f)})}),Rl=mt(function(n,r){var o=Oi(r,qr(Rl));return _i(n,V,t,r,o)}),Df=mt(function(n,r){var o=Oi(r,qr(Df));return _i(n,B,t,r,o)}),wv=gi(function(n,r){return _i(n,$,t,t,t,r)});function Rv(n,r){if(typeof n!="function")throw new Bn(u);return r=r===t?r:ut(r),mt(n,r)}function Cv(n,r){if(typeof n!="function")throw new Bn(u);return r=r==null?0:Zt(ut(r),0),mt(function(o){var f=o[r],x=Hi(o,0,r);return f&&Ni(x,f),bn(n,this,x)})}function Lv(n,r,o){var f=!0,x=!0;if(typeof n!="function")throw new Bn(u);return Gt(o)&&(f="leading"in o?!!o.leading:f,x="trailing"in o?!!o.trailing:x),Pf(n,r,{leading:f,maxWait:r,trailing:x})}function Pv(n){return bf(n,1)}function Dv(n,r){return Rl(hl(r),n)}function Uv(){if(!arguments.length)return[];var n=arguments[0];return st(n)?n:[n]}function Iv(n){return Gn(n,M)}function Nv(n,r){return r=typeof r=="function"?r:t,Gn(n,M,r)}function Ov(n){return Gn(n,_|M)}function Fv(n,r){return r=typeof r=="function"?r:t,Gn(n,_|M,r)}function Bv(n,r){return r==null||vu(n,r,en(r))}function $n(n,r){return n===r||n!==n&&r!==r}var zv=Na(el),Gv=Na(function(n,r){return n>=r}),fr=yu(function(){return arguments}())?yu:function(n){return Vt(n)&&wt.call(n,"callee")&&!uu.call(n,"callee")},st=Z.isArray,Hv=Xc?wn(Xc):Zm;function Mn(n){return n!=null&&ka(n.length)&&!xi(n)}function kt(n){return Vt(n)&&Mn(n)}function Vv(n){return n===!0||n===!1||Vt(n)&&hn(n)==Ne}var Vi=nm||zl,Wv=qc?wn(qc):$m;function kv(n){return Vt(n)&&n.nodeType===1&&!Hs(n)}function Xv(n){if(n==null)return!0;if(Mn(n)&&(st(n)||typeof n=="string"||typeof n.splice=="function"||Vi(n)||Yr(n)||fr(n)))return!n.length;var r=ln(n);if(r==Ue||r==C)return!n.size;if(zs(n))return!il(n).length;for(var o in n)if(wt.call(n,o))return!1;return!0}function qv(n,r){return Os(n,r)}function Yv(n,r,o){o=typeof o=="function"?o:t;var f=o?o(n,r):t;return f===t?Os(n,r,t,o):!!f}function Cl(n){if(!Vt(n))return!1;var r=hn(n);return r==Ve||r==xt||typeof n.message=="string"&&typeof n.name=="string"&&!Hs(n)}function Kv(n){return typeof n=="number"&&hu(n)}function xi(n){if(!Gt(n))return!1;var r=hn(n);return r==k||r==Ht||r==Ze||r==at}function Uf(n){return typeof n=="number"&&n==ut(n)}function ka(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ee}function Gt(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Vt(n){return n!=null&&typeof n=="object"}var If=Yc?wn(Yc):jm;function Zv(n,r){return n===r||nl(n,r,xl(r))}function $v(n,r,o){return o=typeof o=="function"?o:t,nl(n,r,xl(r),o)}function Jv(n){return Nf(n)&&n!=+n}function jv(n){if(N_(n))throw new nt(l);return Au(n)}function Qv(n){return n===null}function e0(n){return n==null}function Nf(n){return typeof n=="number"||Vt(n)&&hn(n)==$e}function Hs(n){if(!Vt(n)||hn(n)!=je)return!1;var r=ga(n);if(r===null)return!0;var o=wt.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&da.call(o)==$p}var Ll=Kc?wn(Kc):Qm;function t0(n){return Uf(n)&&n>=-ee&&n<=ee}var Of=Zc?wn(Zc):e_;function Xa(n){return typeof n=="string"||!st(n)&&Vt(n)&&hn(n)==S}function Cn(n){return typeof n=="symbol"||Vt(n)&&hn(n)==Q}var Yr=$c?wn($c):t_;function n0(n){return n===t}function i0(n){return Vt(n)&&ln(n)==pe}function r0(n){return Vt(n)&&hn(n)==de}var s0=Na(rl),a0=Na(function(n,r){return n<=r});function Ff(n){if(!n)return[];if(Mn(n))return Xa(n)?Kn(n):xn(n);if(Rs&&n[Rs])return Bp(n[Rs]());var r=ln(n),o=r==Ue?Xo:r==C?ua:Kr;return o(n)}function Mi(n){if(!n)return n===0?n:0;if(n=Wn(n),n===le||n===-le){var r=n<0?-1:1;return r*ce}return n===n?n:0}function ut(n){var r=Mi(n),o=r%1;return r===r?o?r-o:r:0}function Bf(n){return n?or(ut(n),0,ge):0}function Wn(n){if(typeof n=="number")return n;if(Cn(n))return ue;if(Gt(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Gt(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=nu(n);var o=W.test(n);return o||J.test(n)?Sp(n.slice(2),o?2:8):b.test(n)?ue:+n}function zf(n){return ai(n,Sn(n))}function o0(n){return n?or(ut(n),-ee,ee):n===0?n:0}function yt(n){return n==null?"":Rn(n)}var l0=kr(function(n,r){if(zs(r)||Mn(r)){ai(r,en(r),n);return}for(var o in r)wt.call(r,o)&&Us(n,o,r[o])}),Gf=kr(function(n,r){ai(r,Sn(r),n)}),qa=kr(function(n,r,o,f){ai(r,Sn(r),n,f)}),c0=kr(function(n,r,o,f){ai(r,en(r),n,f)}),u0=gi(Jo);function f0(n,r){var o=Wr(n);return r==null?o:gu(o,r)}var h0=mt(function(n,r){n=Pt(n);var o=-1,f=r.length,x=f>2?r[2]:t;for(x&&dn(r[0],r[1],x)&&(f=1);++o<f;)for(var y=r[o],P=Sn(y),F=-1,H=P.length;++F<H;){var ie=P[F],ae=n[ie];(ae===t||$n(ae,Gr[ie])&&!wt.call(n,ie))&&(n[ie]=y[ie])}return n}),d0=mt(function(n){return n.push(t,nf),bn(Hf,t,n)});function p0(n,r){return jc(n,We(r,3),si)}function m0(n,r){return jc(n,We(r,3),Qo)}function _0(n,r){return n==null?n:jo(n,We(r,3),Sn)}function g0(n,r){return n==null?n:Eu(n,We(r,3),Sn)}function v0(n,r){return n&&si(n,We(r,3))}function x0(n,r){return n&&Qo(n,We(r,3))}function M0(n){return n==null?[]:wa(n,en(n))}function S0(n){return n==null?[]:wa(n,Sn(n))}function Pl(n,r,o){var f=n==null?t:lr(n,r);return f===t?o:f}function E0(n,r){return n!=null&&af(n,r,Xm)}function Dl(n,r){return n!=null&&af(n,r,qm)}var T0=Ju(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=pa.call(r)),n[r]=o},Il(En)),y0=Ju(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=pa.call(r)),wt.call(n,r)?n[r].push(o):n[r]=[o]},We),A0=mt(Ns);function en(n){return Mn(n)?mu(n):il(n)}function Sn(n){return Mn(n)?mu(n,!0):n_(n)}function b0(n,r){var o={};return r=We(r,3),si(n,function(f,x,y){mi(o,r(f,x,y),f)}),o}function w0(n,r){var o={};return r=We(r,3),si(n,function(f,x,y){mi(o,x,r(f,x,y))}),o}var R0=kr(function(n,r,o){Ra(n,r,o)}),Hf=kr(function(n,r,o,f){Ra(n,r,o,f)}),C0=gi(function(n,r){var o={};if(n==null)return o;var f=!1;r=zt(r,function(y){return y=Gi(y,n),f||(f=y.length>1),y}),ai(n,gl(n),o),f&&(o=Gn(o,_|v|M,T_));for(var x=r.length;x--;)cl(o,r[x]);return o});function L0(n,r){return Vf(n,Wa(We(r)))}var P0=gi(function(n,r){return n==null?{}:r_(n,r)});function Vf(n,r){if(n==null)return{};var o=zt(gl(n),function(f){return[f]});return r=We(r),Du(n,o,function(f,x){return r(f,x[0])})}function D0(n,r,o){r=Gi(r,n);var f=-1,x=r.length;for(x||(x=1,n=t);++f<x;){var y=n==null?t:n[oi(r[f])];y===t&&(f=x,y=o),n=xi(y)?y.call(n):y}return n}function U0(n,r,o){return n==null?n:Fs(n,r,o)}function I0(n,r,o,f){return f=typeof f=="function"?f:t,n==null?n:Fs(n,r,o,f)}var Wf=ef(en),kf=ef(Sn);function N0(n,r,o){var f=st(n),x=f||Vi(n)||Yr(n);if(r=We(r,4),o==null){var y=n&&n.constructor;x?o=f?new y:[]:Gt(n)?o=xi(y)?Wr(ga(n)):{}:o={}}return(x?Fn:si)(n,function(P,F,H){return r(o,P,F,H)}),o}function O0(n,r){return n==null?!0:cl(n,r)}function F0(n,r,o){return n==null?n:Fu(n,r,hl(o))}function B0(n,r,o,f){return f=typeof f=="function"?f:t,n==null?n:Fu(n,r,hl(o),f)}function Kr(n){return n==null?[]:ko(n,en(n))}function z0(n){return n==null?[]:ko(n,Sn(n))}function G0(n,r,o){return o===t&&(o=r,r=t),o!==t&&(o=Wn(o),o=o===o?o:0),r!==t&&(r=Wn(r),r=r===r?r:0),or(Wn(n),r,o)}function H0(n,r,o){return r=Mi(r),o===t?(o=r,r=0):o=Mi(o),n=Wn(n),Ym(n,r,o)}function V0(n,r,o){if(o&&typeof o!="boolean"&&dn(n,r,o)&&(r=o=t),o===t&&(typeof r=="boolean"?(o=r,r=t):typeof n=="boolean"&&(o=n,n=t)),n===t&&r===t?(n=0,r=1):(n=Mi(n),r===t?(r=n,n=0):r=Mi(r)),n>r){var f=n;n=r,r=f}if(o||n%1||r%1){var x=du();return on(n+x*(r-n+Mp("1e-"+((x+"").length-1))),r)}return al(n,r)}var W0=Xr(function(n,r,o){return r=r.toLowerCase(),n+(o?Xf(r):r)});function Xf(n){return Ul(yt(n).toLowerCase())}function qf(n){return n=yt(n),n&&n.replace(Ce,Up).replace(up,"")}function k0(n,r,o){n=yt(n),r=Rn(r);var f=n.length;o=o===t?f:or(ut(o),0,f);var x=o;return o-=r.length,o>=0&&n.slice(o,x)==r}function X0(n){return n=yt(n),n&&me.test(n)?n.replace(ve,Ip):n}function q0(n){return n=yt(n),n&&Qt.test(n)?n.replace(bt,"\\$&"):n}var Y0=Xr(function(n,r,o){return n+(o?"-":"")+r.toLowerCase()}),K0=Xr(function(n,r,o){return n+(o?" ":"")+r.toLowerCase()}),Z0=Ku("toLowerCase");function $0(n,r,o){n=yt(n),r=ut(r);var f=r?Br(n):0;if(!r||f>=r)return n;var x=(r-f)/2;return Ia(Sa(x),o)+n+Ia(Ma(x),o)}function J0(n,r,o){n=yt(n),r=ut(r);var f=r?Br(n):0;return r&&f<r?n+Ia(r-f,o):n}function j0(n,r,o){n=yt(n),r=ut(r);var f=r?Br(n):0;return r&&f<r?Ia(r-f,o)+n:n}function Q0(n,r,o){return o||r==null?r=0:r&&(r=+r),am(yt(n).replace(qn,""),r||0)}function ex(n,r,o){return(o?dn(n,r,o):r===t)?r=1:r=ut(r),ol(yt(n),r)}function tx(){var n=arguments,r=yt(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var nx=Xr(function(n,r,o){return n+(o?"_":"")+r.toLowerCase()});function ix(n,r,o){return o&&typeof o!="number"&&dn(n,r,o)&&(r=o=t),o=o===t?ge:o>>>0,o?(n=yt(n),n&&(typeof r=="string"||r!=null&&!Ll(r))&&(r=Rn(r),!r&&Fr(n))?Hi(Kn(n),0,o):n.split(r,o)):[]}var rx=Xr(function(n,r,o){return n+(o?" ":"")+Ul(r)});function sx(n,r,o){return n=yt(n),o=o==null?0:or(ut(o),0,n.length),r=Rn(r),n.slice(o,o+r.length)==r}function ax(n,r,o){var f=E.templateSettings;o&&dn(n,r,o)&&(r=t),n=yt(n),r=qa({},r,f,tf);var x=qa({},r.imports,f.imports,tf),y=en(x),P=ko(x,y),F,H,ie=0,ae=r.interpolate||Fe,fe="__p += '",Ae=qo((r.escape||Fe).source+"|"+ae.source+"|"+(ae===St?Po:Fe).source+"|"+(r.evaluate||Fe).source+"|$","g"),Be="//# sourceURL="+(wt.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++mp+"]")+`
`;n.replace(Ae,function(Ye,_t,vt,Ln,pn,Pn){return vt||(vt=Ln),fe+=n.slice(ie,Pn).replace(ke,Np),_t&&(F=!0,fe+=`' +
__e(`+_t+`) +
'`),pn&&(H=!0,fe+=`';
`+pn+`;
__p += '`),vt&&(fe+=`' +
((__t = (`+vt+`)) == null ? '' : __t) +
'`),ie=Pn+Ye.length,Ye}),fe+=`';
`;var qe=wt.call(r,"variable")&&r.variable;if(!qe)fe=`with (obj) {
`+fe+`
}
`;else if(sa.test(qe))throw new nt(c);fe=(H?fe.replace(L,""):fe).replace(oe,"$1").replace(Ie,"$1;"),fe="function("+(qe||"obj")+`) {
`+(qe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(F?", __e = _.escape":"")+(H?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var ht=Kf(function(){return Tt(y,Be+"return "+fe).apply(t,P)});if(ht.source=fe,Cl(ht))throw ht;return ht}function ox(n){return yt(n).toLowerCase()}function lx(n){return yt(n).toUpperCase()}function cx(n,r,o){if(n=yt(n),n&&(o||r===t))return nu(n);if(!n||!(r=Rn(r)))return n;var f=Kn(n),x=Kn(r),y=iu(f,x),P=ru(f,x)+1;return Hi(f,y,P).join("")}function ux(n,r,o){if(n=yt(n),n&&(o||r===t))return n.slice(0,au(n)+1);if(!n||!(r=Rn(r)))return n;var f=Kn(n),x=ru(f,Kn(r))+1;return Hi(f,0,x).join("")}function fx(n,r,o){if(n=yt(n),n&&(o||r===t))return n.replace(qn,"");if(!n||!(r=Rn(r)))return n;var f=Kn(n),x=iu(f,Kn(r));return Hi(f,x).join("")}function hx(n,r){var o=A,f=I;if(Gt(r)){var x="separator"in r?r.separator:x;o="length"in r?ut(r.length):o,f="omission"in r?Rn(r.omission):f}n=yt(n);var y=n.length;if(Fr(n)){var P=Kn(n);y=P.length}if(o>=y)return n;var F=o-Br(f);if(F<1)return f;var H=P?Hi(P,0,F).join(""):n.slice(0,F);if(x===t)return H+f;if(P&&(F+=H.length-F),Ll(x)){if(n.slice(F).search(x)){var ie,ae=H;for(x.global||(x=qo(x.source,yt(aa.exec(x))+"g")),x.lastIndex=0;ie=x.exec(ae);)var fe=ie.index;H=H.slice(0,fe===t?F:fe)}}else if(n.indexOf(Rn(x),F)!=F){var Ae=H.lastIndexOf(x);Ae>-1&&(H=H.slice(0,Ae))}return H+f}function dx(n){return n=yt(n),n&&X.test(n)?n.replace(O,Vp):n}var px=Xr(function(n,r,o){return n+(o?" ":"")+r.toUpperCase()}),Ul=Ku("toUpperCase");function Yf(n,r,o){return n=yt(n),r=o?t:r,r===t?Fp(n)?Xp(n):Rp(n):n.match(r)||[]}var Kf=mt(function(n,r){try{return bn(n,t,r)}catch(o){return Cl(o)?o:new nt(o)}}),mx=gi(function(n,r){return Fn(r,function(o){o=oi(o),mi(n,o,wl(n[o],n))}),n});function _x(n){var r=n==null?0:n.length,o=We();return n=r?zt(n,function(f){if(typeof f[1]!="function")throw new Bn(u);return[o(f[0]),f[1]]}):[],mt(function(f){for(var x=-1;++x<r;){var y=n[x];if(bn(y[0],this,f))return bn(y[1],this,f)}})}function gx(n){return Vm(Gn(n,_))}function Il(n){return function(){return n}}function vx(n,r){return n==null||n!==n?r:n}var xx=$u(),Mx=$u(!0);function En(n){return n}function Nl(n){return bu(typeof n=="function"?n:Gn(n,_))}function Sx(n){return Ru(Gn(n,_))}function Ex(n,r){return Cu(n,Gn(r,_))}var Tx=mt(function(n,r){return function(o){return Ns(o,n,r)}}),yx=mt(function(n,r){return function(o){return Ns(n,o,r)}});function Ol(n,r,o){var f=en(r),x=wa(r,f);o==null&&!(Gt(r)&&(x.length||!f.length))&&(o=r,r=n,n=this,x=wa(r,en(r)));var y=!(Gt(o)&&"chain"in o)||!!o.chain,P=xi(n);return Fn(x,function(F){var H=r[F];n[F]=H,P&&(n.prototype[F]=function(){var ie=this.__chain__;if(y||ie){var ae=n(this.__wrapped__),fe=ae.__actions__=xn(this.__actions__);return fe.push({func:H,args:arguments,thisArg:n}),ae.__chain__=ie,ae}return H.apply(n,Ni([this.value()],arguments))})}),n}function Ax(){return nn._===this&&(nn._=Jp),this}function Fl(){}function bx(n){return n=ut(n),mt(function(r){return Lu(r,n)})}var wx=pl(zt),Rx=pl(Jc),Cx=pl(zo);function Zf(n){return Sl(n)?Go(oi(n)):s_(n)}function Lx(n){return function(r){return n==null?t:lr(n,r)}}var Px=ju(),Dx=ju(!0);function Bl(){return[]}function zl(){return!1}function Ux(){return{}}function Ix(){return""}function Nx(){return!0}function Ox(n,r){if(n=ut(n),n<1||n>ee)return[];var o=ge,f=on(n,ge);r=We(r),n-=ge;for(var x=Wo(f,r);++o<n;)r(o);return x}function Fx(n){return st(n)?zt(n,oi):Cn(n)?[n]:xn(mf(yt(n)))}function Bx(n){var r=++Zp;return yt(n)+r}var zx=Ua(function(n,r){return n+r},0),Gx=ml("ceil"),Hx=Ua(function(n,r){return n/r},1),Vx=ml("floor");function Wx(n){return n&&n.length?ba(n,En,el):t}function kx(n,r){return n&&n.length?ba(n,We(r,2),el):t}function Xx(n){return eu(n,En)}function qx(n,r){return eu(n,We(r,2))}function Yx(n){return n&&n.length?ba(n,En,rl):t}function Kx(n,r){return n&&n.length?ba(n,We(r,2),rl):t}var Zx=Ua(function(n,r){return n*r},1),$x=ml("round"),Jx=Ua(function(n,r){return n-r},0);function jx(n){return n&&n.length?Vo(n,En):0}function Qx(n,r){return n&&n.length?Vo(n,We(r,2)):0}return E.after=Sv,E.ary=bf,E.assign=l0,E.assignIn=Gf,E.assignInWith=qa,E.assignWith=c0,E.at=u0,E.before=wf,E.bind=wl,E.bindAll=mx,E.bindKey=Rf,E.castArray=Uv,E.chain=Tf,E.chunk=V_,E.compact=W_,E.concat=k_,E.cond=_x,E.conforms=gx,E.constant=Il,E.countBy=jg,E.create=f0,E.curry=Cf,E.curryRight=Lf,E.debounce=Pf,E.defaults=h0,E.defaultsDeep=d0,E.defer=Ev,E.delay=Tv,E.difference=X_,E.differenceBy=q_,E.differenceWith=Y_,E.drop=K_,E.dropRight=Z_,E.dropRightWhile=$_,E.dropWhile=J_,E.fill=j_,E.filter=ev,E.flatMap=iv,E.flatMapDeep=rv,E.flatMapDepth=sv,E.flatten=xf,E.flattenDeep=Q_,E.flattenDepth=eg,E.flip=yv,E.flow=xx,E.flowRight=Mx,E.fromPairs=tg,E.functions=M0,E.functionsIn=S0,E.groupBy=av,E.initial=ig,E.intersection=rg,E.intersectionBy=sg,E.intersectionWith=ag,E.invert=T0,E.invertBy=y0,E.invokeMap=lv,E.iteratee=Nl,E.keyBy=cv,E.keys=en,E.keysIn=Sn,E.map=Ga,E.mapKeys=b0,E.mapValues=w0,E.matches=Sx,E.matchesProperty=Ex,E.memoize=Va,E.merge=R0,E.mergeWith=Hf,E.method=Tx,E.methodOf=yx,E.mixin=Ol,E.negate=Wa,E.nthArg=bx,E.omit=C0,E.omitBy=L0,E.once=Av,E.orderBy=uv,E.over=wx,E.overArgs=bv,E.overEvery=Rx,E.overSome=Cx,E.partial=Rl,E.partialRight=Df,E.partition=fv,E.pick=P0,E.pickBy=Vf,E.property=Zf,E.propertyOf=Lx,E.pull=ug,E.pullAll=Sf,E.pullAllBy=fg,E.pullAllWith=hg,E.pullAt=dg,E.range=Px,E.rangeRight=Dx,E.rearg=wv,E.reject=pv,E.remove=pg,E.rest=Rv,E.reverse=Al,E.sampleSize=_v,E.set=U0,E.setWith=I0,E.shuffle=gv,E.slice=mg,E.sortBy=Mv,E.sortedUniq=Eg,E.sortedUniqBy=Tg,E.split=ix,E.spread=Cv,E.tail=yg,E.take=Ag,E.takeRight=bg,E.takeRightWhile=wg,E.takeWhile=Rg,E.tap=Wg,E.throttle=Lv,E.thru=za,E.toArray=Ff,E.toPairs=Wf,E.toPairsIn=kf,E.toPath=Fx,E.toPlainObject=zf,E.transform=N0,E.unary=Pv,E.union=Cg,E.unionBy=Lg,E.unionWith=Pg,E.uniq=Dg,E.uniqBy=Ug,E.uniqWith=Ig,E.unset=O0,E.unzip=bl,E.unzipWith=Ef,E.update=F0,E.updateWith=B0,E.values=Kr,E.valuesIn=z0,E.without=Ng,E.words=Yf,E.wrap=Dv,E.xor=Og,E.xorBy=Fg,E.xorWith=Bg,E.zip=zg,E.zipObject=Gg,E.zipObjectDeep=Hg,E.zipWith=Vg,E.entries=Wf,E.entriesIn=kf,E.extend=Gf,E.extendWith=qa,Ol(E,E),E.add=zx,E.attempt=Kf,E.camelCase=W0,E.capitalize=Xf,E.ceil=Gx,E.clamp=G0,E.clone=Iv,E.cloneDeep=Ov,E.cloneDeepWith=Fv,E.cloneWith=Nv,E.conformsTo=Bv,E.deburr=qf,E.defaultTo=vx,E.divide=Hx,E.endsWith=k0,E.eq=$n,E.escape=X0,E.escapeRegExp=q0,E.every=Qg,E.find=tv,E.findIndex=gf,E.findKey=p0,E.findLast=nv,E.findLastIndex=vf,E.findLastKey=m0,E.floor=Vx,E.forEach=yf,E.forEachRight=Af,E.forIn=_0,E.forInRight=g0,E.forOwn=v0,E.forOwnRight=x0,E.get=Pl,E.gt=zv,E.gte=Gv,E.has=E0,E.hasIn=Dl,E.head=Mf,E.identity=En,E.includes=ov,E.indexOf=ng,E.inRange=H0,E.invoke=A0,E.isArguments=fr,E.isArray=st,E.isArrayBuffer=Hv,E.isArrayLike=Mn,E.isArrayLikeObject=kt,E.isBoolean=Vv,E.isBuffer=Vi,E.isDate=Wv,E.isElement=kv,E.isEmpty=Xv,E.isEqual=qv,E.isEqualWith=Yv,E.isError=Cl,E.isFinite=Kv,E.isFunction=xi,E.isInteger=Uf,E.isLength=ka,E.isMap=If,E.isMatch=Zv,E.isMatchWith=$v,E.isNaN=Jv,E.isNative=jv,E.isNil=e0,E.isNull=Qv,E.isNumber=Nf,E.isObject=Gt,E.isObjectLike=Vt,E.isPlainObject=Hs,E.isRegExp=Ll,E.isSafeInteger=t0,E.isSet=Of,E.isString=Xa,E.isSymbol=Cn,E.isTypedArray=Yr,E.isUndefined=n0,E.isWeakMap=i0,E.isWeakSet=r0,E.join=og,E.kebabCase=Y0,E.last=Vn,E.lastIndexOf=lg,E.lowerCase=K0,E.lowerFirst=Z0,E.lt=s0,E.lte=a0,E.max=Wx,E.maxBy=kx,E.mean=Xx,E.meanBy=qx,E.min=Yx,E.minBy=Kx,E.stubArray=Bl,E.stubFalse=zl,E.stubObject=Ux,E.stubString=Ix,E.stubTrue=Nx,E.multiply=Zx,E.nth=cg,E.noConflict=Ax,E.noop=Fl,E.now=Ha,E.pad=$0,E.padEnd=J0,E.padStart=j0,E.parseInt=Q0,E.random=V0,E.reduce=hv,E.reduceRight=dv,E.repeat=ex,E.replace=tx,E.result=D0,E.round=$x,E.runInContext=G,E.sample=mv,E.size=vv,E.snakeCase=nx,E.some=xv,E.sortedIndex=_g,E.sortedIndexBy=gg,E.sortedIndexOf=vg,E.sortedLastIndex=xg,E.sortedLastIndexBy=Mg,E.sortedLastIndexOf=Sg,E.startCase=rx,E.startsWith=sx,E.subtract=Jx,E.sum=jx,E.sumBy=Qx,E.template=ax,E.times=Ox,E.toFinite=Mi,E.toInteger=ut,E.toLength=Bf,E.toLower=ox,E.toNumber=Wn,E.toSafeInteger=o0,E.toString=yt,E.toUpper=lx,E.trim=cx,E.trimEnd=ux,E.trimStart=fx,E.truncate=hx,E.unescape=dx,E.uniqueId=Bx,E.upperCase=px,E.upperFirst=Ul,E.each=yf,E.eachRight=Af,E.first=Mf,Ol(E,function(){var n={};return si(E,function(r,o){wt.call(E.prototype,o)||(n[o]=r)}),n}(),{chain:!1}),E.VERSION=i,Fn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Fn(["drop","take"],function(n,r){gt.prototype[n]=function(o){o=o===t?1:Zt(ut(o),0);var f=this.__filtered__&&!r?new gt(this):this.clone();return f.__filtered__?f.__takeCount__=on(o,f.__takeCount__):f.__views__.push({size:on(o,ge),type:n+(f.__dir__<0?"Right":"")}),f},gt.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Fn(["filter","map","takeWhile"],function(n,r){var o=r+1,f=o==z||o==te;gt.prototype[n]=function(x){var y=this.clone();return y.__iteratees__.push({iteratee:We(x,3),type:o}),y.__filtered__=y.__filtered__||f,y}}),Fn(["head","last"],function(n,r){var o="take"+(r?"Right":"");gt.prototype[n]=function(){return this[o](1).value()[0]}}),Fn(["initial","tail"],function(n,r){var o="drop"+(r?"":"Right");gt.prototype[n]=function(){return this.__filtered__?new gt(this):this[o](1)}}),gt.prototype.compact=function(){return this.filter(En)},gt.prototype.find=function(n){return this.filter(n).head()},gt.prototype.findLast=function(n){return this.reverse().find(n)},gt.prototype.invokeMap=mt(function(n,r){return typeof n=="function"?new gt(this):this.map(function(o){return Ns(o,n,r)})}),gt.prototype.reject=function(n){return this.filter(Wa(We(n)))},gt.prototype.slice=function(n,r){n=ut(n);var o=this;return o.__filtered__&&(n>0||r<0)?new gt(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),r!==t&&(r=ut(r),o=r<0?o.dropRight(-r):o.take(r-n)),o)},gt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},gt.prototype.toArray=function(){return this.take(ge)},si(gt.prototype,function(n,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),f=/^(?:head|last)$/.test(r),x=E[f?"take"+(r=="last"?"Right":""):r],y=f||/^find/.test(r);x&&(E.prototype[r]=function(){var P=this.__wrapped__,F=f?[1]:arguments,H=P instanceof gt,ie=F[0],ae=H||st(P),fe=function(_t){var vt=x.apply(E,Ni([_t],F));return f&&Ae?vt[0]:vt};ae&&o&&typeof ie=="function"&&ie.length!=1&&(H=ae=!1);var Ae=this.__chain__,Be=!!this.__actions__.length,qe=y&&!Ae,ht=H&&!Be;if(!y&&ae){P=ht?P:new gt(this);var Ye=n.apply(P,F);return Ye.__actions__.push({func:za,args:[fe],thisArg:t}),new zn(Ye,Ae)}return qe&&ht?n.apply(this,F):(Ye=this.thru(fe),qe?f?Ye.value()[0]:Ye.value():Ye)})}),Fn(["pop","push","shift","sort","splice","unshift"],function(n){var r=fa[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var x=arguments;if(f&&!this.__chain__){var y=this.value();return r.apply(st(y)?y:[],x)}return this[o](function(P){return r.apply(st(P)?P:[],x)})}}),si(gt.prototype,function(n,r){var o=E[r];if(o){var f=o.name+"";wt.call(Vr,f)||(Vr[f]=[]),Vr[f].push({name:r,func:o})}}),Vr[Da(t,m).name]=[{name:"wrapper",func:t}],gt.prototype.clone=dm,gt.prototype.reverse=pm,gt.prototype.value=mm,E.prototype.at=kg,E.prototype.chain=Xg,E.prototype.commit=qg,E.prototype.next=Yg,E.prototype.plant=Zg,E.prototype.reverse=$g,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=Jg,E.prototype.first=E.prototype.head,Rs&&(E.prototype[Rs]=Kg),E},zr=qp();ir?((ir.exports=zr)._=zr,No._=zr):nn._=zr}).call(Ys)})(yo,yo.exports);var Ob=yo.exports;const Md={type:"change"},gc={type:"start"},Sd={type:"end"},_o=new zd,Ed=new Zi,Fb=Math.cos(70*dS.DEG2RAD);class Bb extends wr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:$r.ROTATE,TWO:$r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Ge),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ge),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Md),i.update(),l=a.NONE},this.update=function(){const L=new q,oe=new br().setFromUnitVectors(e.up,new q(0,1,0)),Ie=oe.clone().invert(),O=new q,ve=new br,X=new q,me=2*Math.PI;return function(ft=null){const St=i.object.position;L.copy(St).sub(i.target),L.applyQuaternion(oe),c.setFromVector3(L),i.autoRotate&&l===a.NONE&&Me(A(ft)),i.enableDamping?(c.theta+=h.theta*i.dampingFactor,c.phi+=h.phi*i.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let At=i.minAzimuthAngle,Ft=i.maxAzimuthAngle;isFinite(At)&&isFinite(Ft)&&(At<-Math.PI?At+=me:At>Math.PI&&(At-=me),Ft<-Math.PI?Ft+=me:Ft>Math.PI&&(Ft-=me),At<=Ft?c.theta=Math.max(At,Math.min(Ft,c.theta)):c.theta=c.theta>(At+Ft)/2?Math.max(At,c.theta):Math.min(Ft,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Mt=!1;if(i.zoomToCursor&&B||i.object.isOrthographicCamera)c.radius=ue(c.radius);else{const bt=c.radius;c.radius=ue(c.radius*d),Mt=bt!=c.radius}if(L.setFromSpherical(c),L.applyQuaternion(Ie),St.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&B){let bt=null;if(i.object.isPerspectiveCamera){const Qt=L.length();bt=ue(Qt*d);const qn=Qt-bt;i.object.position.addScaledVector(D,qn),i.object.updateMatrixWorld(),Mt=!!qn}else if(i.object.isOrthographicCamera){const Qt=new q(V.x,V.y,0);Qt.unproject(i.object);const qn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Mt=qn!==i.object.zoom;const Cr=new q(V.x,V.y,0);Cr.unproject(i.object),i.object.position.sub(Cr).add(Qt),i.object.updateMatrixWorld(),bt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;bt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(bt).add(i.object.position):(_o.origin.copy(i.object.position),_o.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(_o.direction))<Fb?e.lookAt(i.target):(Ed.setFromNormalAndCoplanarPoint(i.object.up,i.target),_o.intersectPlane(Ed,i.target))))}else if(i.object.isOrthographicCamera){const bt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),bt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Mt=!0)}return d=1,B=!1,Mt||O.distanceToSquared(i.object.position)>u||8*(1-ve.dot(i.object.quaternion))>u||X.distanceToSquared(i.target)>u?(i.dispatchEvent(Md),O.copy(i.object.position),ve.copy(i.object.quaternion),X.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Je),i.domElement.removeEventListener("pointerdown",at),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",Et),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",de,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ge),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const u=1e-6,c=new xd,h=new xd;let d=1;const p=new q,_=new lt,v=new lt,M=new lt,T=new lt,w=new lt,g=new lt,m=new lt,N=new lt,R=new lt,D=new q,V=new lt;let B=!1;const U=[],$={};let xe=!1;function A(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function I(L){const oe=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*oe)}function Me(L){h.theta-=L}function _e(L){h.phi-=L}const z=function(){const L=new q;return function(Ie,O){L.setFromMatrixColumn(O,0),L.multiplyScalar(-Ie),p.add(L)}}(),re=function(){const L=new q;return function(Ie,O){i.screenSpacePanning===!0?L.setFromMatrixColumn(O,1):(L.setFromMatrixColumn(O,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ie),p.add(L)}}(),te=function(){const L=new q;return function(Ie,O){const ve=i.domElement;if(i.object.isPerspectiveCamera){const X=i.object.position;L.copy(X).sub(i.target);let me=L.length();me*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Ie*me/ve.clientHeight,i.object.matrix),re(2*O*me/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(Ie*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),re(O*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function le(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(L,oe){if(!i.zoomToCursor)return;B=!0;const Ie=i.domElement.getBoundingClientRect(),O=L-Ie.left,ve=oe-Ie.top,X=Ie.width,me=Ie.height;V.x=O/X*2-1,V.y=-(ve/me)*2+1,D.set(V.x,V.y,1).unproject(i.object).sub(i.object.position).normalize()}function ue(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function ge(L){_.set(L.clientX,L.clientY)}function De(L){ce(L.clientX,L.clientX),m.set(L.clientX,L.clientY)}function Qe(L){T.set(L.clientX,L.clientY)}function j(L){v.set(L.clientX,L.clientY),M.subVectors(v,_).multiplyScalar(i.rotateSpeed);const oe=i.domElement;Me(2*Math.PI*M.x/oe.clientHeight),_e(2*Math.PI*M.y/oe.clientHeight),_.copy(v),i.update()}function he(L){N.set(L.clientX,L.clientY),R.subVectors(N,m),R.y>0?le(I(R.y)):R.y<0&&ee(I(R.y)),m.copy(N),i.update()}function we(L){w.set(L.clientX,L.clientY),g.subVectors(w,T).multiplyScalar(i.panSpeed),te(g.x,g.y),T.copy(w),i.update()}function Ze(L){ce(L.clientX,L.clientY),L.deltaY<0?ee(I(L.deltaY)):L.deltaY>0&&le(I(L.deltaY)),i.update()}function Ne(L){let oe=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?_e(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(0,i.keyPanSpeed),oe=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?_e(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(0,-i.keyPanSpeed),oe=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?Me(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(i.keyPanSpeed,0),oe=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?Me(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(-i.keyPanSpeed,0),oe=!0;break}oe&&(L.preventDefault(),i.update())}function Re(L){if(U.length===1)_.set(L.pageX,L.pageY);else{const oe=Le(L),Ie=.5*(L.pageX+oe.x),O=.5*(L.pageY+oe.y);_.set(Ie,O)}}function xt(L){if(U.length===1)T.set(L.pageX,L.pageY);else{const oe=Le(L),Ie=.5*(L.pageX+oe.x),O=.5*(L.pageY+oe.y);T.set(Ie,O)}}function Ve(L){const oe=Le(L),Ie=L.pageX-oe.x,O=L.pageY-oe.y,ve=Math.sqrt(Ie*Ie+O*O);m.set(0,ve)}function k(L){i.enableZoom&&Ve(L),i.enablePan&&xt(L)}function Ht(L){i.enableZoom&&Ve(L),i.enableRotate&&Re(L)}function Ue(L){if(U.length==1)v.set(L.pageX,L.pageY);else{const Ie=Le(L),O=.5*(L.pageX+Ie.x),ve=.5*(L.pageY+Ie.y);v.set(O,ve)}M.subVectors(v,_).multiplyScalar(i.rotateSpeed);const oe=i.domElement;Me(2*Math.PI*M.x/oe.clientHeight),_e(2*Math.PI*M.y/oe.clientHeight),_.copy(v)}function $e(L){if(U.length===1)w.set(L.pageX,L.pageY);else{const oe=Le(L),Ie=.5*(L.pageX+oe.x),O=.5*(L.pageY+oe.y);w.set(Ie,O)}g.subVectors(w,T).multiplyScalar(i.panSpeed),te(g.x,g.y),T.copy(w)}function He(L){const oe=Le(L),Ie=L.pageX-oe.x,O=L.pageY-oe.y,ve=Math.sqrt(Ie*Ie+O*O);N.set(0,ve),R.set(0,Math.pow(N.y/m.y,i.zoomSpeed)),le(R.y),m.copy(N);const X=(L.pageX+oe.x)*.5,me=(L.pageY+oe.y)*.5;ce(X,me)}function je(L){i.enableZoom&&He(L),i.enablePan&&$e(L)}function et(L){i.enableZoom&&He(L),i.enableRotate&&Ue(L)}function at(L){i.enabled!==!1&&(U.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Et),i.domElement.addEventListener("pointerup",C)),!it(L)&&(Se(L),L.pointerType==="touch"?Ee(L):S(L)))}function Et(L){i.enabled!==!1&&(L.pointerType==="touch"?ye(L):Q(L))}function C(L){switch(Dt(L),U.length){case 0:i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Et),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(Sd),l=a.NONE;break;case 1:const oe=U[0],Ie=$[oe];Ee({pointerId:oe,pageX:Ie.x,pageY:Ie.y});break}}function S(L){let oe;switch(L.button){case 0:oe=i.mouseButtons.LEFT;break;case 1:oe=i.mouseButtons.MIDDLE;break;case 2:oe=i.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Zr.DOLLY:if(i.enableZoom===!1)return;De(L),l=a.DOLLY;break;case Zr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;Qe(L),l=a.PAN}else{if(i.enableRotate===!1)return;ge(L),l=a.ROTATE}break;case Zr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ge(L),l=a.ROTATE}else{if(i.enablePan===!1)return;Qe(L),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(gc)}function Q(L){switch(l){case a.ROTATE:if(i.enableRotate===!1)return;j(L);break;case a.DOLLY:if(i.enableZoom===!1)return;he(L);break;case a.PAN:if(i.enablePan===!1)return;we(L);break}}function se(L){i.enabled===!1||i.enableZoom===!1||l!==a.NONE||(L.preventDefault(),i.dispatchEvent(gc),Ze(pe(L)),i.dispatchEvent(Sd))}function pe(L){const oe=L.deltaMode,Ie={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(oe){case 1:Ie.deltaY*=16;break;case 2:Ie.deltaY*=100;break}return L.ctrlKey&&!xe&&(Ie.deltaY*=10),Ie}function de(L){L.key==="Control"&&(xe=!0,i.domElement.getRootNode().addEventListener("keyup",Ke,{passive:!0,capture:!0}))}function Ke(L){L.key==="Control"&&(xe=!1,i.domElement.getRootNode().removeEventListener("keyup",Ke,{passive:!0,capture:!0}))}function Ge(L){i.enabled===!1||i.enablePan===!1||Ne(L)}function Ee(L){switch(ze(L),U.length){case 1:switch(i.touches.ONE){case $r.ROTATE:if(i.enableRotate===!1)return;Re(L),l=a.TOUCH_ROTATE;break;case $r.PAN:if(i.enablePan===!1)return;xt(L),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(i.touches.TWO){case $r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;k(L),l=a.TOUCH_DOLLY_PAN;break;case $r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ht(L),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(gc)}function ye(L){switch(ze(L),l){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(L),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;$e(L),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;je(L),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;et(L),i.update();break;default:l=a.NONE}}function Je(L){i.enabled!==!1&&L.preventDefault()}function Se(L){U.push(L.pointerId)}function Dt(L){delete $[L.pointerId];for(let oe=0;oe<U.length;oe++)if(U[oe]==L.pointerId){U.splice(oe,1);return}}function it(L){for(let oe=0;oe<U.length;oe++)if(U[oe]==L.pointerId)return!0;return!1}function ze(L){let oe=$[L.pointerId];oe===void 0&&(oe=new lt,$[L.pointerId]=oe),oe.set(L.pageX,L.pageY)}function Le(L){const oe=L.pointerId===U[0]?U[1]:U[0];return $[oe]}i.domElement.addEventListener("contextmenu",Je),i.domElement.addEventListener("pointerdown",at),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",se,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}async function zb(){Qs.enabled=!0;const s=new Db,e=new Ib;window.addEventListener("resize",Ob.throttle(t,50,{leading:!1}));function t(){const T=window.innerWidth,w=window.innerHeight;v.aspect=T/w,v.updateProjectionMatrix(),_.setSize(T,w),_.getContext().canvas.width=window.innerWidth,_.getContext().canvas.height=window.innerHeight,_.getContext().canvas.style="height: 100lvh !important;",M.material.uniforms.u_WindowWidth={value:_.getContext().canvas.width},M.material.uniforms.u_WindowHeight={value:_.getContext().canvas.height}}let i=new Nb,a=0,l=1/60;function u(T){const w=i.getDelta();a+=w,a>l&&(M.material.uniforms.u_Time={value:T*5e-4},_.render(p,v),a=a%l),requestAnimationFrame(u)}const c=s.loadAsync("shaders/spheretracing/vert.glsl"),h=s.loadAsync("shaders/spheretracing/frag.glsl"),d=e.setPath("cubemaps/aurora/").loadAsync(["px.webp","nx.webp","py.webp","ny.webp","pz.webp","nz.webp"]),p=new Rb,_=new tp({canvas:document.getElementById("hero-canvas"),antialias:!0});_.toneMapping=Ad;const v=new Xn(50,_.getContext().canvas.width/_.getContext().canvas.height,.1,2e3);v.position.x=12,v.position.z=-5,v.lookAt(0,0,0),new Bb(v,_.getContext().canvas);const M=new ui(new na(2,2),new Ui({vertexShader:await c,fragmentShader:await h,depthWrite:!1,depthTest:!1,glslVersion:yc,uniforms:{u_Time:{value:0},u_WindowWidth:{value:_.getContext().canvas.width},u_WindowHeight:{value:_.getContext().canvas.height},u_InvProjection:{value:v.projectionMatrixInverse},u_CameraToWorld:{value:v.matrixWorld},u_CameraPosition:{value:v.position},u_CubeMapTex:{value:await d}}}));p.add(M),t(),requestAnimationFrame(u)}zb();
