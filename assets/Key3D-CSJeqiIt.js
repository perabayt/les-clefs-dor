import{n as e,t}from"./index-CVtV0BZi.js";var n=e(),r={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a=1e3,o=1001,s=1002,c=1003,l=1004,u=1005,d=1006,f=1007,p=1008,m=1009,h=1010,g=1011,_=1012,v=1013,y=1014,b=1015,x=1016,S=1017,C=1018,w=1020,T=35902,E=35899,D=1021,O=1022,k=1023,A=1026,j=1027,M=1028,N=1029,P=1030,ee=1031,te=1033,ne=33776,re=33777,ie=33778,ae=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,fe=37496,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,F=37821,Ee=36492,De=36494,Oe=36495,I=36283,ke=36284,L=36285,Ae=36286,je=2300,Me=2301,Ne=2302,Pe=2400,Fe=2401,Ie=2402,Le=3200,Re=3201,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function R(...e){let t=`THREE.`+e.shift();console.warn(t,...e)}function z(...e){let t=`THREE.`+e.shift();console.error(t,...e)}function Ze(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,R(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},et=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),tt=1234567,nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(et[e&255]+et[e>>8&255]+et[e>>16&255]+et[e>>24&255]+`-`+et[t&255]+et[t>>8&255]+`-`+et[t>>16&15|64]+et[t>>24&255]+`-`+et[n&63|128]+et[n>>8&255]+`-`+et[n>>16&255]+et[n>>24&255]+et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function at(e,t){return(e%t+t)%t}function ot(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function st(e,t,n){return e===t?0:(n-e)/(t-e)}function ct(e,t,n){return(1-n)*e+n*t}function lt(e,t,n,r){return ct(e,t,1-Math.exp(-n*r))}function ut(e,t=1){return t-Math.abs(at(e,t*2)-t)}function dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function pt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function mt(e,t){return e+Math.random()*(t-e)}function ht(e){return e*(.5-Math.random())}function gt(e){e!==void 0&&(tt=e);let t=tt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _t(e){return e*nt}function vt(e){return e*rt}function yt(e){return!(e&e-1)&&e!==0}function bt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function xt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function St(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Tt={DEG2RAD:nt,RAD2DEG:rt,generateUUID:it,clamp:B,euclideanModulo:at,mapLinear:ot,inverseLerp:st,lerp:ct,damp:lt,pingpong:ut,smoothstep:dt,smootherstep:ft,randInt:pt,randFloat:mt,randFloatSpread:ht,seededRandom:gt,degToRad:_t,radToDeg:vt,isPowerOfTwo:yt,ceilPowerOfTwo:bt,floorPowerOfTwo:xt,setQuaternionFromProperEuler:St,normalize:wt,denormalize:Ct},V=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o<=0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o>=1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ot.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ot.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dt.copy(this).projectOnVector(e),this.sub(Dt)}reflect(e){return this.sub(Dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dt=new H,Ot=new Et,U=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kt.makeScale(e,t)),this}rotate(e){return this.premultiply(kt.makeRotation(-e)),this}translate(e,t){return this.premultiply(kt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kt=new U,At=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jt=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mt(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Pt(e.r),e.g=Pt(e.g),e.b=Pt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var Nt=Mt();function Pt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ft(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var It,Lt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{It===void 0&&(It=qe(`canvas`)),It.width=e.width,It.height=e.height;let t=It.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=It}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Pt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Pt(t[e]/255)*255):t[e]=Pt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Rt=0,zt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Bt(r[t].image)):e.push(Bt(r[t]))}else e=Bt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Bt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Lt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Vt=0,Ht=new H,Ut=class e extends $e{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=o,i=o,a=d,s=p,c=k,l=m,u=e.DEFAULT_ANISOTROPY,f=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=it(),this.name=``,this.source=new zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ht).x}get height(){return this.source.getSize(Ht).y}get depth(){return this.source.getSize(Ht).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case a:e.x-=Math.floor(e.x);break;case o:e.x=e.x<0?0:1;break;case s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case a:e.y-=Math.floor(e.y);break;case o:e.y=e.y<0?0:1;break;case s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=300,Ut.DEFAULT_ANISOTROPY=1;var Wt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gt=class extends $e{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:d,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let r=new Ut({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:d,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new zt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Kt=class extends Gt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qt=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=c,this.minFilter=c,this.wrapR=o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jt=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=c,this.minFilter=c,this.wrapR=o,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yt=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zt):Zt.fromBufferAttribute(r,t),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qt.copy(e.boundingBox)),Qt.applyMatrix4(e.matrixWorld),this.union(Qt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(on),sn.subVectors(this.max,on),$t.subVectors(e.a,on),en.subVectors(e.b,on),tn.subVectors(e.c,on),nn.subVectors(en,$t),rn.subVectors(tn,en),an.subVectors($t,tn);let t=[0,-nn.z,nn.y,0,-rn.z,rn.y,0,-an.z,an.y,nn.z,0,-nn.x,rn.z,0,-rn.x,an.z,0,-an.x,-nn.y,nn.x,0,-rn.y,rn.x,0,-an.y,an.x,0];return!un(t,$t,en,tn,sn)||(t=[1,0,0,0,1,0,0,0,1],!un(t,$t,en,tn,sn))?!1:(cn.crossVectors(nn,rn),t=[cn.x,cn.y,cn.z],un(t,$t,en,tn,sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xt=[new H,new H,new H,new H,new H,new H,new H,new H],Zt=new H,Qt=new Yt,$t=new H,en=new H,tn=new H,nn=new H,rn=new H,an=new H,on=new H,sn=new H,cn=new H,ln=new H;function un(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ln.fromArray(e,a);let o=i.x*Math.abs(ln.x)+i.y*Math.abs(ln.y)+i.z*Math.abs(ln.z),s=t.dot(ln),c=n.dot(ln),l=r.dot(ln);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dn=new Yt,fn=new H,pn=new H,mn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?dn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fn.subVectors(e,this.center);let t=fn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(fn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fn.copy(e.center).add(pn)),this.expandByPoint(fn.copy(e.center).sub(pn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hn=new H,gn=new H,_n=new H,vn=new H,yn=new H,bn=new H,xn=new H,Sn=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gn.copy(e).add(t).multiplyScalar(.5),_n.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(gn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(_n),o=vn.dot(this.direction),s=-vn.dot(_n),c=vn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gn).addScaledVector(_n,d),f}intersectSphere(e,t){hn.subVectors(e.center,this.origin);let n=hn.dot(this.direction),r=hn.dot(hn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,i){yn.subVectors(t,e),bn.subVectors(n,e),xn.crossVectors(yn,bn);let a=this.direction.dot(xn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,e);let s=o*this.direction.dot(bn.crossVectors(vn,bn));if(s<0)return null;let c=o*this.direction.dot(yn.cross(vn));if(c<0||s+c>a)return null;let l=-o*vn.dot(xn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/wn.setFromMatrixColumn(e,0).length(),i=1/wn.setFromMatrixColumn(e,1).length(),a=1/wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(En,e,Dn)}lookAt(e,t,n){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),On.crossVectors(n,An),On.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),On.crossVectors(n,An)),On.normalize(),kn.crossVectors(An,On),r[0]=On.x,r[4]=kn.x,r[8]=An.x,r[1]=On.y,r[5]=kn.y,r[9]=An.y,r[2]=On.z,r[6]=kn.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=wn.set(r[0],r[1],r[2]).length(),a=wn.set(r[4],r[5],r[6]).length(),o=wn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);let s=1/i,c=1/a,l=1/o;return Tn.elements[0]*=s,Tn.elements[1]*=s,Tn.elements[2]*=s,Tn.elements[4]*=c,Tn.elements[5]*=c,Tn.elements[6]*=c,Tn.elements[8]*=l,Tn.elements[9]*=l,Tn.elements[10]*=l,t.setFromRotationMatrix(Tn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wn=new H,Tn=new Cn,En=new H(0,0,0),Dn=new H(1,1,1),On=new H,kn=new H,An=new H,jn=new Cn,Mn=new Et,Nn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mn.setFromEuler(this),this.setFromQuaternion(Mn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER=`XYZ`;var Pn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Fn=0,In=new H,Ln=new Et,Rn=new Cn,zn=new H,Bn=new H,Vn=new H,Hn=new Et,Un=new H(1,0,0),Wn=new H(0,1,0),Gn=new H(0,0,1),Kn={type:`added`},qn={type:`removed`},Jn={type:`childadded`,child:null},Yn={type:`childremoved`,child:null},Xn=class e extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fn++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Nn,r=new Et,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Cn},normalMatrix:{value:new U}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.premultiply(Ln),this}rotateX(e){return this.rotateOnAxis(Un,e)}rotateY(e){return this.rotateOnAxis(Wn,e)}rotateZ(e){return this.rotateOnAxis(Gn,e)}translateOnAxis(e,t){return In.copy(e).applyQuaternion(this.quaternion),this.position.add(In.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Un,e)}translateY(e){return this.translateOnAxis(Wn,e)}translateZ(e){return this.translateOnAxis(Gn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zn.copy(e):zn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Bn,zn,this.up):Rn.lookAt(zn,Bn,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),Ln.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ln.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qn),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,e,Vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,Hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Xn.DEFAULT_UP=new H(0,1,0),Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new H,Qn=new H,$n=new H,er=new H,tr=new H,nr=new H,rr=new H,ir=new H,ar=new H,or=new H,sr=new Wt,cr=new Wt,lr=new Wt,ur=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Zn.subVectors(r,t),Qn.subVectors(n,t),$n.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Qn),s=Zn.dot($n),c=Qn.dot(Qn),l=Qn.dot($n),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,er)!==null&&er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,er)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,er.x),s.addScaledVector(a,er.y),s.addScaledVector(o,er.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return sr.setScalar(0),cr.setScalar(0),lr.setScalar(0),sr.fromBufferAttribute(e,t),cr.fromBufferAttribute(e,n),lr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sr,i.x),a.addScaledVector(cr,i.y),a.addScaledVector(lr,i.z),a}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Qn.subVectors(e,t),Zn.cross(Qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Zn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;tr.subVectors(r,n),nr.subVectors(i,n),ir.subVectors(e,n);let s=tr.dot(ir),c=nr.dot(ir);if(s<=0&&c<=0)return t.copy(n);ar.subVectors(e,r);let l=tr.dot(ar),u=nr.dot(ar);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(tr,a);or.subVectors(e,i);let f=tr.dot(or),p=nr.dot(or);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(nr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return rr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(rr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},pr={h:0,s:0,l:0};function mr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Nt.workingColorSpace){if(e=at(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=mr(i,r,e+1/3),this.g=mr(i,r,e),this.b=mr(i,r,e-1/3)}return Nt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=dr[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pt(e.r),this.g=Pt(e.g),this.b=Pt(e.b),this}copyLinearToSRGB(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Nt.workingToColorSpace(hr.copy(this),e),Math.round(B(hr.r*255,0,255))*65536+Math.round(B(hr.g*255,0,255))*256+Math.round(B(hr.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(hr.copy(this),t);let n=hr.r,r=hr.g,i=hr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(hr.copy(this),t),e.r=hr.r,e.g=hr.g,e.b=hr.b,e}getStyle(e=ze){Nt.workingToColorSpace(hr.copy(this),e);let t=hr.r,n=hr.g,r=hr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(pr);let n=ct(fr.h,pr.h,t),r=ct(fr.s,pr.s,t),i=ct(fr.l,pr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hr=new W;W.NAMES=dr;var gr=0,_r=class extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},vr=class extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yr=new H,br=new V,xr=0,Sr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=b,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix4(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyNormalMatrix(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.transformDirection(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ct(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ct(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ct(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ct(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),r=wt(r,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Cr=class extends Sr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},wr=class extends Sr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Tr=class extends Sr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Er=0,Dr=new Cn,Or=new Xn,kr=new H,Ar=new Yt,jr=new Yt,Mr=new H,Nr=class e extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Er++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ke(e)?wr:Cr)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Tr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Sr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Sr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Sr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=new Cn,Fr=new Sn,Ir=new mn,Lr=new H,Rr=new H,zr=new H,Br=new H,Vr=new H,Hr=new H,Ur=new H,Wr=new H,Gr=class extends Xn{constructor(e=new Nr,t=new vr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Hr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Vr.fromBufferAttribute(s,e),a?Hr.addScaledVector(Vr,r):Hr.addScaledVector(Vr.sub(t),r))}t.add(Hr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Fr.copy(e.ray).recast(e.near),Ir.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Ir,Lr)===null||Fr.origin.distanceToSquared(Lr)>(e.far-e.near)**2)||(Pr.copy(i).invert(),Fr.copy(e.ray).applyMatrix4(Pr),(n.boundingBox===null||Fr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=qr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=qr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=qr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=qr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Kr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Wr.copy(s),Wr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Wr);return l<n.near||l>n.far?null:{distance:l,point:Wr.clone(),object:e}}function qr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Rr),e.getVertexPosition(c,zr),e.getVertexPosition(l,Br);let u=Kr(e,t,n,r,Rr,zr,Br,Ur);if(u){let e=new H;ur.getBarycoord(Ur,Rr,zr,Br,e),i&&(u.uv=ur.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=ur.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=ur.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};ur.getNormal(Rr,zr,Br,t.normal),u.face=t,u.barycoord=e}return u}var Jr=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Tr(c,3)),this.setAttribute(`normal`,new Tr(l,3)),this.setAttribute(`uv`,new Tr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Yr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Xr(e){let t={};for(let n=0;n<e.length;n++){let r=Yr(e[n]);for(let e in r)t[e]=r[e]}return t}function Zr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Qr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}var $r={clone:Yr,merge:Xr},ei=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ti=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ei,this.fragmentShader=ti,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=Zr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ri=class extends Xn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new H,ai=new V,oi=new V,si=class extends ri{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,ai,oi),t.subVectors(oi,ai)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ci=-90,li=1,ui=class extends Xn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new si(ci,li,e,t);r.layers=this.layers,this.add(r);let i=new si(ci,li,e,t);i.layers=this.layers,this.add(i);let a=new si(ci,li,e,t);a.layers=this.layers,this.add(a);let o=new si(ci,li,e,t);o.layers=this.layers,this.add(o);let s=new si(ci,li,e,t);s.layers=this.layers,this.add(s);let c=new si(ci,li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},di=class extends Ut{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fi=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new di(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jr(5,5,5),i=new ni({name:`CubemapFromEquirect`,uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Gr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=d),new ui(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},pi=class extends Xn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},mi={type:`move`},hi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mi)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gi=class extends Xn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_i=class extends Ut{constructor(e=null,t=1,n=1,r,i,a,o,s,l=c,u=c,d,f){super(null,a,o,s,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vi=class extends Sr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yi=new Cn,bi=new Cn,xi=[],Si=new Yt,Ci=new Cn,wi=new Gr,Ti=new mn,Ei=class extends Gr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ci)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Si.copy(e.boundingBox).applyMatrix4(yi),this.boundingBox.union(Si)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Ti.copy(e.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(Ti)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(wi.geometry=this.geometry,wi.material=this.material,wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ti.copy(this.boundingSphere),Ti.applyMatrix4(n),e.ray.intersectsSphere(Ti)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,yi),bi.multiplyMatrices(n,yi),wi.matrixWorld=bi,wi.raycast(e,xi);for(let e=0,n=xi.length;e<n;e++){let n=xi[e];n.instanceId=i,n.object=this,t.push(n)}xi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(r*this.count),r,this.count,M,b));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Di=new H,Oi=new H,ki=new U,Ai=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Di.subVectors(n,t).cross(Oi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Di),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ki.getNormalMatrix(e),r=this.coplanarPoint(Di).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new mn,Mi=new V(.5,.5),Ni=new H,Pi=class{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,i=new Ai,a=new Ai){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476+Mi.distanceTo(e.center),ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ni.x=r.normal.x>0?e.max.x:e.min.x,Ni.y=r.normal.y>0?e.max.y:e.min.y,Ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=class extends Ut{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class extends Ut{constructor(e,t,n=y,r,i,a,o=c,s=c,l,u=A,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,s,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Li=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ri=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new Cn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(B(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(B(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zi=class extends Ri{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bi=class extends zi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Vi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Hi=new H,Ui=new Vi,Wi=new Vi,Gi=new Vi,Ki=class extends Ri{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Hi.subVectors(r[0],r[1]).add(r[0]),c=Hi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Hi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Hi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ui.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Wi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Gi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ui.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Wi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Gi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ui.calc(s),Wi.calc(s),Gi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ji(e,t){let n=1-e;return n*n*t}function Yi(e,t){return 2*(1-e)*e*t}function Xi(e,t){return e*e*t}function Zi(e,t,n,r){return Ji(e,t)+Yi(e,n)+Xi(e,r)}function Qi(e,t){let n=1-e;return n*n*n*t}function $i(e,t){let n=1-e;return 3*n*n*e*t}function ea(e,t){return 3*(1-e)*e*e*t}function ta(e,t){return e*e*e*t}function na(e,t,n,r,i){return Qi(e,t)+$i(e,n)+ea(e,r)+ta(e,i)}var ra=class extends Ri{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(na(e,r.x,i.x,a.x,o.x),na(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends Ri{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(na(e,r.x,i.x,a.x,o.x),na(e,r.y,i.y,a.y,o.y),na(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},aa=class extends Ri{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Ri{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Ri{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Zi(e,r.x,i.x,a.x),Zi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Ri{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Zi(e,r.x,i.x,a.x),Zi(e,r.y,i.y,a.y),Zi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(qi(o,s.x,c.x,l.x,u.x),qi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},ua=Object.freeze({__proto__:null,ArcCurve:Bi,CatmullRomCurve3:Ki,CubicBezierCurve:ra,CubicBezierCurve3:ia,EllipseCurve:zi,LineCurve:aa,LineCurve3:oa,QuadraticBezierCurve:sa,QuadraticBezierCurve3:ca,SplineCurve:la}),da=class extends Ri{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ua[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ua[n.type]().fromJSON(n))}return this}},fa=class extends da{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new aa(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new sa(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ra(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new la([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new zi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pa=class extends fa{constructor(e){super(e),this.uuid=it(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new fa().fromJSON(n))}return this}};function ma(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ha(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Sa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return _a(a,o,n,s,c,l,0),o}function ha(e,t,n,r,i){let a;if(i===Ka(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ua(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ua(i/r|0,e[i],e[i+1],a);return a&&Fa(a,a.next)&&(Wa(a),a=a.next),a}function ga(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Fa(n,n.next)||Pa(n.prev,n,n.next)===0)){if(Wa(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function _a(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Da(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ya(e,r,i,a):va(e))t.push(c.i,e.i,l.i),Wa(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=ba(ga(e),t),_a(e,t,n,r,i,a,2)):o===2&&xa(e,t,n,r,i,a):_a(ga(e),t,n,r,i,a,1);break}}}function va(e){let t=e.prev,n=e,r=e.next;if(Pa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ma(i,s,a,c,o,l,m.x,m.y)&&Pa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ya(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Pa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ka(p,m,t,n,r),v=ka(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ma(s,u,c,d,l,f,y.x,y.y)&&Pa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ma(s,u,c,d,l,f,b.x,b.y)&&Pa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ma(s,u,c,d,l,f,y.x,y.y)&&Pa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ma(s,u,c,d,l,f,b.x,b.y)&&Pa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ba(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Fa(r,i)&&Ia(r,n,n.next,i)&&Ba(r,i)&&Ba(i,r)&&(t.push(r.i,n.i,i.i),Wa(n),Wa(n.next),n=e=i),n=n.next}while(n!==e);return ga(n)}function xa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Na(o,e)){let s=Ha(o,e);o=ga(o,o.next),s=ga(s,s.next),_a(o,t,n,r,i,a,0),_a(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Sa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ha(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Aa(o))}i.sort(Ca);for(let e=0;e<i.length;e++)n=wa(i[e],n);return n}function Ca(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function wa(e,t){let n=Ta(e,t);if(!n)return t;let r=Ha(n,e);return ga(r,r.next),ga(n,n.next)}function Ta(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Fa(e,n))return n;do{if(Fa(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ja(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ba(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ea(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ea(e,t){return Pa(e.prev,e,t.prev)<0&&Pa(t.next,e,e.next)<0}function Da(e,t,n,r){let i=e;do i.z===0&&(i.z=ka(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Oa(i)}function Oa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ka(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Aa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ja(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ma(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ja(e,t,n,r,i,a,o,s)}function Na(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!za(e,t)&&(Ba(e,t)&&Ba(t,e)&&Va(e,t)&&(Pa(e.prev,e,t.prev)||Pa(e,t.prev,t))||Fa(e,t)&&Pa(e.prev,e,e.next)>0&&Pa(t.prev,t,t.next)>0)}function Pa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Fa(e,t){return e.x===t.x&&e.y===t.y}function Ia(e,t,n,r){let i=Ra(Pa(e,t,n)),a=Ra(Pa(e,t,r)),o=Ra(Pa(n,r,e)),s=Ra(Pa(n,r,t));return!!(i!==a&&o!==s||i===0&&La(e,n,t)||a===0&&La(e,r,t)||o===0&&La(n,e,r)||s===0&&La(n,t,r))}function La(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ra(e){return e>0?1:e<0?-1:0}function za(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ia(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ba(e,t){return Pa(e.prev,e,e.next)<0?Pa(e,t,e.next)>=0&&Pa(e,e.prev,t)>=0:Pa(e,t,e.prev)<0||Pa(e,e.next,t)<0}function Va(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ha(e,t){let n=Ga(e.i,e.x,e.y),r=Ga(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ua(e,t,n,r){let i=Ga(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Wa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ga(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ka(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var qa=class{static triangulate(e,t,n=2){return ma(e,t,n)}},Ja=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ya(e),Xa(n,e);let a=e.length;t.forEach(Ya);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Xa(n,t[e]);let o=qa.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ya(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Xa(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Za=class e extends Nr{constructor(e=new pa([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Tr(r,3)),this.setAttribute(`uv`,new Tr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Qa:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new H,b=new H,x=new H),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ja.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ja.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||z(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let ee;if(p===0)ee=Ja.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);oe(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);oe(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ee=Ja.triangulateShape(e,t)}let te=ee.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<te;e++){let n=ee[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<te;e++){let n=ee[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<te;e++){let t=ee[e];se(t[2],t[1],t[0])}for(let e=0;e<te;e++){let t=ee[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){le(e),le(t),le(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ue(o[0]),ue(o[1]),ue(o[2])}function ce(e,t,i,a){le(e),le(t),le(a),le(t),le(i),le(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ue(s[0]),ue(s[1]),ue(s[3]),ue(s[1]),ue(s[2]),ue(s[3])}function le(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ue(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $a(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ua[i.type]().fromJSON(i)),new e(r,t.options)}},Qa={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function $a(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var eo=class e extends Nr{constructor(e=[new V(0,-.5),new V(.5,0),new V(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=B(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new H,d=new V,f=new H,p=new H,m=new H,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Tr(a,3)),this.setAttribute(`uv`,new Tr(o,2)),this.setAttribute(`normal`,new Tr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},to=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Tr(p,3)),this.setAttribute(`normal`,new Tr(m,3)),this.setAttribute(`uv`,new Tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},no=class e extends Nr{constructor(e=new ca(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,s=new H,c=new V,l=new H,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Tr(u,3)),this.setAttribute(`normal`,new Tr(d,3)),this.setAttribute(`uv`,new Tr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ua[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},ro=class extends _r{constructor(e){super(),this.isShadowMaterial=!0,this.type=`ShadowMaterial`,this.color=new W(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},io=class extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ao=class extends io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return B(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},oo=class extends _r{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},so=class extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Le,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},co=class extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function lo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function uo(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var fo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},po=class extends fo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pe,endingEnd:Pe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fe:i=e,o=2*t-n;break;case Ie:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Fe:a=e,s=2*n-t;break;case Ie:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},mo=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ho=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},go=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new po(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case je:t=this.InterpolantFactoryMethodDiscrete;break;case Me:t=this.InterpolantFactoryMethodLinear;break;case Ne:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return je;case this.InterpolantFactoryMethodLinear:return Me;case this.InterpolantFactoryMethodSmooth:return Ne}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&uo(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ne,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};go.prototype.ValueTypeName=``,go.prototype.TimeBufferType=Float32Array,go.prototype.ValueBufferType=Float32Array,go.prototype.DefaultInterpolation=Me;var _o=class extends go{constructor(e,t,n){super(e,t,n)}};_o.prototype.ValueTypeName=`bool`,_o.prototype.ValueBufferType=Array,_o.prototype.DefaultInterpolation=je,_o.prototype.InterpolantFactoryMethodLinear=void 0,_o.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}};vo.prototype.ValueTypeName=`color`;var yo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}};yo.prototype.ValueTypeName=`number`;var bo=class extends fo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Et.slerpFlat(i,0,a,c-o,a,c,s);return i}},xo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new bo(this.times,this.values,this.getValueSize(),e)}};xo.prototype.ValueTypeName=`quaternion`,xo.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends go{constructor(e,t,n){super(e,t,n)}};So.prototype.ValueTypeName=`string`,So.prototype.ValueBufferType=Array,So.prototype.DefaultInterpolation=je,So.prototype.InterpolantFactoryMethodLinear=void 0,So.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends go{constructor(e,t,n,r){super(e,t,n,r)}};Co.prototype.ValueTypeName=`vector`;var wo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},To=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Eo=class{constructor(e){this.manager=e===void 0?To:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Eo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Do={},Oo=class extends Error{constructor(e,t){super(e),this.response=t}},ko=class extends Eo{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=wo.get(`file:${e}`);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(Do[e]!==void 0){Do[e].push({onLoad:t,onProgress:n,onError:r});return}Do[e]=[],Do[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&R(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Do[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Oo(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{wo.add(`file:${e}`,t);let n=Do[e];delete Do[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Do[e];if(n===void 0)throw this.manager.itemError(e),t;delete Do[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ao=class extends Xn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},jo=new Cn,Mo=new H,No=new H,Po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=m,this.map=null,this.mapPass=null,this.matrix=new Cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Mo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mo),No.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(No),t.updateMatrixWorld(),jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fo=new Cn,Io=new H,Lo=new H,Ro=class extends Po{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new V(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),n.position.copy(Io),Lo.copy(n.position),Lo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lo),n.updateMatrixWorld(),r.makeTranslation(-Io.x,-Io.y,-Io.z),Fo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo,n.coordinateSystem,n.reversedDepth)}},zo=class extends Ao{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ro}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Bo=class extends ri{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vo=class extends Po{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ho=class extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new Vo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Uo=class extends Ao{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Wo=class extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Go=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Ko=`\\[\\]\\.:\\/`,qo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Jo=`[^\\[\\]\\.:\\/]`,Yo=`[^`+Ko.replace(`\\.`,``)+`]`,Xo=`((?:WC+[\\/:])*)`.replace(`WC`,Jo),Zo=`(WCOD+)?`.replace(`WCOD`,Yo),Qo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Jo),$o=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Jo),es=RegExp(`^`+Xo+Zo+Qo+$o+`$`),ts=[`material`,`materials`,`bones`,`map`],ns=class{constructor(e,t,n){let r=n||rs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(qo,``)}static parseTrackName(e){let t=es.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ts.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rs.Composite=ns,rs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},rs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},rs.prototype.GetterByBindingType=[rs.prototype._getValue_direct,rs.prototype._getValue_array,rs.prototype._getValue_arrayElement,rs.prototype._getValue_toArray],rs.prototype.SetterByBindingTypeAndVersioning=[[rs.prototype._setValue_direct,rs.prototype._setValue_direct_setNeedsUpdate,rs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rs.prototype._setValue_array,rs.prototype._setValue_array_setNeedsUpdate,rs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rs.prototype._setValue_arrayElement,rs.prototype._setValue_arrayElement_setNeedsUpdate,rs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rs.prototype._setValue_fromArray,rs.prototype._setValue_fromArray_setNeedsUpdate,rs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var is=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=B(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(B(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},as=class{constructor(){this.type=`ShapePath`,this.color=new W,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new fa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,i,a){return this.currentPath.bezierCurveTo(e,t,n,r,i,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n],i=new pa;i.curves=r.curves,t.push(i)}return t}function n(e,t){let n=t.length,r=!1;for(let i=n-1,a=0;a<n;i=a++){let n=t[i],o=t[a],s=o.x-n.x,c=o.y-n.y;if(Math.abs(c)>2**-52){if(c<0&&(n=t[a],s=-s,o=t[i],c=-c),e.y<n.y||e.y>o.y)continue;if(e.y===n.y){if(e.x===n.x)return!0}else{let t=c*(e.x-n.x)-s*(e.y-n.y);if(t===0)return!0;if(t<0)continue;r=!r}}else{if(e.y!==n.y)continue;if(o.x<=e.x&&e.x<=n.x||n.x<=e.x&&e.x<=o.x)return!0}}return r}let r=Ja.isClockWise,i=this.subPaths;if(i.length===0)return[];let a,o,s,c=[];if(i.length===1)return o=i[0],s=new pa,s.curves=o.curves,c.push(s),c;let l=!r(i[0].getPoints());l=e?!l:l;let u=[],d=[],f=[],p=0,m;d[p]=void 0,f[p]=[];for(let t=0,n=i.length;t<n;t++)o=i[t],m=o.getPoints(),a=r(m),a=e?!a:a,a?(!l&&d[p]&&p++,d[p]={s:new pa,p:m},d[p].s.curves=o.curves,l&&p++,f[p]=[]):f[p].push({h:o,p:m[0]});if(!d[0])return t(i);if(d.length>1){let e=!1,t=0;for(let e=0,t=d.length;e<t;e++)u[e]=[];for(let r=0,i=d.length;r<i;r++){let i=f[r];for(let a=0;a<i.length;a++){let o=i[a],s=!0;for(let i=0;i<d.length;i++)n(o.p,d[i].p)&&(r!==i&&t++,s?(s=!1,u[i].push(o)):e=!0);s&&u[r].push(o)}}t>0&&e===!1&&(f=u)}let h;for(let e=0,t=d.length;e<t;e++){s=d[e].s,c.push(s),h=f[e];for(let e=0,t=h.length;e<t;e++)s.holes.push(h[e].h)}return c}},os=class extends $e{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e===void 0?R(`Controls: connect() now requires an element.`):(this.domElement!==null&&this.disconnect(),this.domElement=e)}disconnect(){}dispose(){}update(){}};function ss(e,t,n,r){let i=cs(r);switch(n){case D:return e*t;case M:return e*t/i.components*i.byteLength;case N:return e*t/i.components*i.byteLength;case P:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case O:return e*t*3/i.components*i.byteLength;case k:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case ne:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case F:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case I:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case L:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function cs(e){switch(e){case m:case h:return{byteLength:1,components:1};case _:case g:case x:return{byteLength:2,components:1};case S:case C:return{byteLength:2,components:4};case y:case v:case b:return{byteLength:4,components:1};case T:case E:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`181`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`181`);function ls(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function us(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},ds={basic:{uniforms:Xr([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:Xr([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:Xr([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:Xr([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:Xr([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:Xr([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:Xr([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:Xr([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:Xr([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:Xr([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:Xr([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distanceRGBA:{uniforms:Xr([K.common,K.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distanceRGBA_vert,fragmentShader:G.distanceRGBA_frag},shadow:{uniforms:Xr([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};ds.physical={uniforms:Xr([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var fs={r:0,b:0,g:0},ps=new Nn,ms=new Cn;function hs(e,t,n,r,i,a,o){let s=new W(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Gr(new Jr(1,1,1),new ni({name:`BackgroundCubeMaterial`,uniforms:Yr(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ps.copy(n.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ms.makeRotationFromEuler(ps)),u.material.toneMapped=Nt.getTransfer(r.colorSpace)!==He,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Gr(new to(2,2),new ni({name:`BackgroundMaterial`,uniforms:Yr(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Nt.getTransfer(r.colorSpace)!==He,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(fs,Qr(e)),r.buffers.color.setClear(fs.r,fs.g,fs.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function gs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function _s(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function vs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function ys(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ai,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function bs(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new fi(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var xs=4,Ss=[.125,.215,.35,.446,.526,.582],Cs=20,ws=256,Ts=new Bo,Es=new W,Ds=null,Os=0,ks=0,As=!1,js=new H,Ms=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=js}=i;Ds=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ds,Os,ks),this._renderer.xr.enabled=As,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ds=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:d,minFilter:d,generateMipmaps:!1,type:x,format:k,colorSpace:Be,depthBuffer:!1},r=Ps(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ps(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ns(r)),this._blurMaterial=Ls(r,e,t),this._ggxMaterial=Is(r,e,t)}return r}_compileMaterial(e){let t=new Gr(new Nr,e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,r,i){let a=new si(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Es),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gr(new Jr,new vr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Es),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Fs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Fs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ts)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(.05+c*.95),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-xs?n-d+xs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Fs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ts),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Fs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ts)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&z(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Cs;m>Cs&&R(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);let h=[],g=0;for(let e=0;e<Cs;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Fs(t,3*v*(r>_-xs?r-_+xs:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ts)}};function Ns(e){let t=[],n=[],r=[],i=e,a=e-xs+1+Ss.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-xs?s=Ss[o-e+xs-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Nr;h.setAttribute(`position`,new Sr(f,3)),h.setAttribute(`uv`,new Sr(p,2)),h.setAttribute(`faceIndex`,new Sr(m,1)),r.push(new Gr(h,null)),i>xs&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Ps(e,t,n){let r=new Kt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Fs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Is(e,t,n){return new ni({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ls(e,t,n){let r=new Float32Array(Cs),i=new H(0,1,0);return new ni({name:`SphericalGaussianBlur`,defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rs(){return new ni({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function zs(){return new ni({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bs(){return`

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
	`}function Vs(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Ms(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Ms(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Hs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Us(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Ke(n)?wr:Cr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ws(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Gs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ks(e,t,n){let r=new WeakMap,i=new Wt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new qt(h,p,m,u);g.type=b,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function qs(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var Js=new Ut,Ys=new Ii(1,1),Xs=new qt,Zs=new Jt,Qs=new di,$s=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),rc=new Float32Array(4);function ic(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=$s[i];if(a===void 0&&(a=new Float32Array(i),$s[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ac(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function oc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function sc(e,t){let n=ec[t];n===void 0&&(n=new Int32Array(t),ec[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function cc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ac(n,t))return;e.uniform2fv(this.addr,t),oc(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ac(n,t))return;e.uniform3fv(this.addr,t),oc(n,t)}}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ac(n,t))return;e.uniform4fv(this.addr,t),oc(n,t)}}function fc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ac(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),oc(n,t)}else{if(ac(n,r))return;rc.set(r),e.uniformMatrix2fv(this.addr,!1,rc),oc(n,r)}}function pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ac(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),oc(n,t)}else{if(ac(n,r))return;nc.set(r),e.uniformMatrix3fv(this.addr,!1,nc),oc(n,r)}}function mc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ac(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),oc(n,t)}else{if(ac(n,r))return;tc.set(r),e.uniformMatrix4fv(this.addr,!1,tc),oc(n,r)}}function hc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ac(n,t))return;e.uniform2iv(this.addr,t),oc(n,t)}}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ac(n,t))return;e.uniform3iv(this.addr,t),oc(n,t)}}function vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ac(n,t))return;e.uniform4iv(this.addr,t),oc(n,t)}}function yc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ac(n,t))return;e.uniform2uiv(this.addr,t),oc(n,t)}}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ac(n,t))return;e.uniform3uiv(this.addr,t),oc(n,t)}}function Sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ac(n,t))return;e.uniform4uiv(this.addr,t),oc(n,t)}}function Cc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ys.compareFunction=515,a=Ys):a=Js,n.setTexture2D(t||a,i)}function wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Zs,i)}function Tc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Qs,i)}function Ec(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Xs,i)}function Dc(e){switch(e){case 5126:return cc;case 35664:return lc;case 35665:return uc;case 35666:return dc;case 35674:return fc;case 35675:return pc;case 35676:return mc;case 5124:case 35670:return hc;case 35667:case 35671:return gc;case 35668:case 35672:return _c;case 35669:case 35673:return vc;case 5125:return yc;case 36294:return bc;case 36295:return xc;case 36296:return Sc;case 35678:case 36198:case 36298:case 36306:case 35682:return Cc;case 35679:case 36299:case 36307:return wc;case 35680:case 36300:case 36308:case 36293:return Tc;case 36289:case 36303:case 36311:case 36292:return Ec}}function Oc(e,t){e.uniform1fv(this.addr,t)}function kc(e,t){let n=ic(t,this.size,2);e.uniform2fv(this.addr,n)}function Ac(e,t){let n=ic(t,this.size,3);e.uniform3fv(this.addr,n)}function jc(e,t){let n=ic(t,this.size,4);e.uniform4fv(this.addr,n)}function Mc(e,t){let n=ic(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Nc(e,t){let n=ic(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Pc(e,t){let n=ic(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Fc(e,t){e.uniform1iv(this.addr,t)}function Ic(e,t){e.uniform2iv(this.addr,t)}function Lc(e,t){e.uniform3iv(this.addr,t)}function Rc(e,t){e.uniform4iv(this.addr,t)}function zc(e,t){e.uniform1uiv(this.addr,t)}function Bc(e,t){e.uniform2uiv(this.addr,t)}function Vc(e,t){e.uniform3uiv(this.addr,t)}function Hc(e,t){e.uniform4uiv(this.addr,t)}function Uc(e,t,n){let r=this.cache,i=t.length,a=sc(n,i);ac(r,a)||(e.uniform1iv(this.addr,a),oc(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Js,a[e])}function Wc(e,t,n){let r=this.cache,i=t.length,a=sc(n,i);ac(r,a)||(e.uniform1iv(this.addr,a),oc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Zs,a[e])}function Gc(e,t,n){let r=this.cache,i=t.length,a=sc(n,i);ac(r,a)||(e.uniform1iv(this.addr,a),oc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Qs,a[e])}function Kc(e,t,n){let r=this.cache,i=t.length,a=sc(n,i);ac(r,a)||(e.uniform1iv(this.addr,a),oc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Xs,a[e])}function qc(e){switch(e){case 5126:return Oc;case 35664:return kc;case 35665:return Ac;case 35666:return jc;case 35674:return Mc;case 35675:return Nc;case 35676:return Pc;case 5124:case 35670:return Fc;case 35667:case 35671:return Ic;case 35668:case 35672:return Lc;case 35669:case 35673:return Rc;case 5125:return zc;case 36294:return Bc;case 36295:return Vc;case 36296:return Hc;case 35678:case 36198:case 36298:case 36306:case 35682:return Uc;case 35679:case 36299:case 36307:return Wc;case 35680:case 36300:case 36308:case 36293:return Gc;case 36289:case 36303:case 36311:case 36292:return Kc}}var Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dc(t.type)}},Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qc(t.type)}},Xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function Qc(e,t){e.seq.push(t),e.map[t.id]=t}function $c(e,t,n){let r=e.name,i=r.length;for(Zc.lastIndex=0;;){let a=Zc.exec(r),o=Zc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Qc(n,l===void 0?new Jc(s,e,t):new Yc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Xc(s),Qc(n,e)),n=e}}}var el=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);$c(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function tl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var nl=37297,rl=0;function il(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var al=new U;function ol(e){Nt._getMatrix(al,Nt.workingColorSpace,e);let t=`mat3( ${al.elements.map(e=>e.toFixed(4))} )`;switch(Nt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function sl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+il(e.getShaderSource(t),r)}return i}function cl(e,t){let n=ol(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function ll(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:R(`WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ul=new H;function dl(){return Nt.getLuminanceCoefficients(ul),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ul.x.toFixed(4)}, ${ul.y.toFixed(4)}, ${ul.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function fl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(hl).join(`
`)}function pl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ml(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function hl(e){return e!==``}function gl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vl=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(e){return e.replace(vl,xl)}var bl=new Map;function xl(e,t){let n=G[t];if(n===void 0){let e=bl.get(t);if(e!==void 0)n=G[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return yl(n)}var Sl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(e){return e.replace(Sl,wl)}function wl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Tl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function El(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Dl(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ol(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function kl(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Al(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function jl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=El(n),l=Dl(n),u=Ol(n),d=kl(n),f=Al(n),p=fl(n),m=pl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(hl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(hl).join(`
`),_.length>0&&(_+=`
`)):(g=[Tl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(hl).join(`
`),_=[Tl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:ll(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,cl(`linearToOutputTexel`,n.outputColorSpace),dl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(hl).join(`
`)),o=yl(o),o=gl(o,n),o=_l(o,n),s=yl(s),s=gl(s,n),s=_l(s,n),o=Cl(o),s=Cl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=tl(i,i.VERTEX_SHADER,y),S=tl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=sl(i,x,`vertex`),n=sl(i,S,`fragment`);z(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new el(i,h),T=ml(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,nl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ml=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pl(e),t.set(e,n)),n}},Pl=class{constructor(e){this.id=Ml++,this.code=e,this.usedTimes=0}};function Fl(e,t,n,r,i,a,o){let s=new Pn,c=new Nl,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&R(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ds[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=_.isInstancedMesh===!0,P=_.isBatchedMesh===!0,ee=!!a.map,te=!!a.matcap,ne=!!x,re=!!a.aoMap,ie=!!a.lightMap,ae=!!a.bumpMap,oe=!!a.normalMap,se=!!a.displacementMap,ce=!!a.emissiveMap,le=!!a.metalnessMap,ue=!!a.roughnessMap,de=a.anisotropy>0,fe=a.clearcoat>0,pe=a.dispersion>0,me=a.iridescence>0,he=a.sheen>0,ge=a.transmission>0,_e=de&&!!a.anisotropyMap,ve=fe&&!!a.clearcoatMap,ye=fe&&!!a.clearcoatNormalMap,be=fe&&!!a.clearcoatRoughnessMap,xe=me&&!!a.iridescenceMap,Se=me&&!!a.iridescenceThicknessMap,Ce=he&&!!a.sheenColorMap,we=he&&!!a.sheenRoughnessMap,Te=!!a.specularMap,F=!!a.specularColorMap,Ee=!!a.specularIntensityMap,De=ge&&!!a.transmissionMap,Oe=ge&&!!a.thicknessMap,I=!!a.gradientMap,ke=!!a.alphaMap,L=a.alphaTest>0,Ae=!!a.alphaHash,je=!!a.extensions,Me=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:P,batchingColor:P&&_._colorsTexture!==null,instancing:N,instancingColor:N&&_.instanceColor!==null,instancingMorph:N&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Be,alphaToCoverage:!!a.alphaToCoverage,map:ee,matcap:te,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:f&&se,emissiveMap:ce,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:_e,clearcoat:fe,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:F,specularIntensityMap:Ee,transmission:ge,transmissionMap:De,thicknessMap:Oe,gradientMap:I,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:ke,alphaTest:L,alphaHash:Ae,combine:a.combine,mapUv:ee&&h(a.map.channel),aoMapUv:re&&h(a.aoMap.channel),lightMapUv:ie&&h(a.lightMap.channel),bumpMapUv:ae&&h(a.bumpMap.channel),normalMapUv:oe&&h(a.normalMap.channel),displacementMapUv:se&&h(a.displacementMap.channel),emissiveMapUv:ce&&h(a.emissiveMap.channel),metalnessMapUv:le&&h(a.metalnessMap.channel),roughnessMapUv:ue&&h(a.roughnessMap.channel),anisotropyMapUv:_e&&h(a.anisotropyMap.channel),clearcoatMapUv:ve&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:ye&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:we&&h(a.sheenRoughnessMap.channel),specularMapUv:Te&&h(a.specularMap.channel),specularColorMapUv:F&&h(a.specularColorMap.channel),specularIntensityMapUv:Ee&&h(a.specularIntensityMap.channel),transmissionMapUv:De&&h(a.transmissionMap.channel),thicknessMapUv:Oe&&h(a.thicknessMap.channel),alphaMapUv:ke&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(oe||de),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(ee||ke),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0&&a.wireframe===!1,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:ee&&a.map.isVideoTexture===!0&&Nt.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&a.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:je&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&a.extensions.multiDraw===!0||P)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),t.gradientMap&&s.enable(22),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=ds[t];n=$r.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new jl(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Il(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ll(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Rl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Ll),r.length>1&&r.sort(t||Rl),i.length>1&&i.sort(t||Rl)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Bl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new zl,e.set(t,[i])):n>=r.length?(i=new zl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Vl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Hl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ul=0;function Wl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Gl(e){let t=new Vl,n=Hl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new Cn,o=new Cn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Wl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Ul++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Kl(e){let t=new Gl(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function ql(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Kl(e),t.set(n,[a])):r>=i.length?(a=new Kl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Jl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yl=`uniform sampler2D shadow_pass;
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
}`;function Xl(e,t,n){let r=new Pi,i=new V,a=new V,o=new Wt,s=new so({depthPacking:Re}),l=new co,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Jl,fragmentShader:Yl}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Nr;h.setAttribute(`position`,new Sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Gr(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){R(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();if(i.multiply(g),a.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/g.x),i.x=a.x*g.x,f.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/g.y),i.y=a.y*g.y,f.mapSize.y=a.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:c,magFilter:c};f.map!==null&&f.map.dispose(),f.map=new Kt(i.x,i.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),p.viewport(o),f.updateMatrices(u,e),r=f.getFrustum(),x(n,s,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,s),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Kt(i.x,i.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var Zl={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Ql(e,t){function n(){let t=!1,n=new Wt,r=null,i=new Wt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Zl[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let ee=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Wt().fromArray(ne),ae=new Wt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),ce(e.CULL_FACE),he(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return m!==t&&(e.useProgram(t),m=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(le(e.BLEND),h=!1);else if(h===!1&&(ce(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(pe[n],pe[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function ve(t){t===0?le(e.CULL_FACE):(ce(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function ye(t){t!==O&&(M&&e.lineWidth(t),O=t)}function be(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?ce(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+j-1),ee!==t&&(e.activeTexture(t),ee=t)}function Ce(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+j-1:ee);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function we(){let t=te[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){e(`WebGLState:`,e)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(e){e(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){e(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){e(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){e(`WebGLState:`,e)}}function I(){try{e.compressedTexSubImage3D(...arguments)}catch(e){e(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){e(`WebGLState:`,e)}}function L(){try{e.texStorage3D(...arguments)}catch(e){e(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){e(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){e(`WebGLState:`,e)}}function Me(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Ne(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},ee=null,te={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new W(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:F,texImage2D:Ae,texImage3D:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:ke,texStorage3D:L,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:I,scissor:Me,viewport:Ne,reset:Ie}}function $l(e,t,n,r,i,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):qe(`canvas`)}function w(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?Ve:Nt.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),P(t),t.isVideoTexture&&y.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),te(t)}function P(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=x.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ee(e),Object.keys(i).length===0&&x.delete(n)}r.remove(e)}function ee(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=x.get(i);delete a[n.__cacheKey],h.memory.textures--}function te(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(i[t])}r.remove(t)}let ne=0;function re(){ne=0}function ie(){let e=ne;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),ne+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,i){let a=r.get(t);if(t.isVideoTexture&&ke(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?_e(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ce(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?_e(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ve(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[a]:e.REPEAT,[o]:e.CLAMP_TO_EDGE,[s]:e.MIRRORED_REPEAT},de={[c]:e.NEAREST,[l]:e.NEAREST_MIPMAP_NEAREST,[u]:e.NEAREST_MIPMAP_LINEAR,[d]:e.LINEAR,[f]:e.LINEAR_MIPMAP_NEAREST,[p]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=ae(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ee(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=he(n.start,r.width,4),c=he(t.start,r.width,4);n.start<=i+1&&a===c&&he(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function _e(t,a,o){let s=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(s=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(s=e.TEXTURE_3D);let c=me(t,a),l=a.source;n.bindTexture(s,t.__webglTexture,e.TEXTURE0+o);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+o);let t=Nt.getPrimaries(Nt.workingColorSpace),r=a.colorSpace===``?null:Nt.getPrimaries(a.colorSpace),d=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=w(a.image,!1,i.maxTextureSize);f=L(a,f);let p=m.convert(a.format,a.colorSpace),h=m.convert(a.type),g=O(a.internalFormat,p,h,a.colorSpace,a.isVideoTexture);pe(s,a);let _,v=a.mipmaps,y=a.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(a,f);if(a.isDepthTexture)g=k(a.format===j,a.type),b&&(y?n.texStorage2D(e.TEXTURE_2D,1,g,f.width,f.height):n.texImage2D(e.TEXTURE_2D,0,g,f.width,f.height,0,p,h,null));else if(a.isDataTexture){if(v.length>0){y&&b&&n.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,p,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,p,h,_.data);a.generateMipmaps=!1}else y?(b&&n.texStorage2D(e.TEXTURE_2D,S,g,f.width,f.height),x&&ge(a,f,p,h)):n.texImage2D(e.TEXTURE_2D,0,g,f.width,f.height,0,p,h,f.data)}else if(a.isCompressedTexture){if(a.isCompressedArrayTexture){y&&b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,f.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],a.format!==1023){if(p!==null){if(y){if(x){if(a.layerUpdates.size>0){let r=ss(_.width,_.height,a.format,a.type);for(let i of a.layerUpdates){let a=_.data.subarray(i*r/_.data.BYTES_PER_ELEMENT,(i+1)*r/_.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,_.width,_.height,1,p,a)}a.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,f.depth,p,_.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,f.depth,0,_.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,f.depth,p,h,_.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,f.depth,0,p,h,_.data)}else{y&&b&&n.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],a.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,p,h,_.data):n.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,p,h,_.data):p===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,p,_.data):n.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(a.isDataArrayTexture){if(y){if(b&&n.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,f.width,f.height,f.depth),x){if(a.layerUpdates.size>0){let t=ss(f.width,f.height,a.format,a.type);for(let r of a.layerUpdates){let i=f.data.subarray(r*t/f.data.BYTES_PER_ELEMENT,(r+1)*t/f.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,f.width,f.height,1,p,h,i)}a.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,f.width,f.height,f.depth,p,h,f.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,g,f.width,f.height,f.depth,0,p,h,f.data)}else if(a.isData3DTexture)y?(b&&n.texStorage3D(e.TEXTURE_3D,S,g,f.width,f.height,f.depth),x&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,f.width,f.height,f.depth,p,h,f.data)):n.texImage3D(e.TEXTURE_3D,0,g,f.width,f.height,f.depth,0,p,h,f.data);else if(a.isFramebufferTexture){if(b){if(y)n.texStorage2D(e.TEXTURE_2D,S,g,f.width,f.height);else{let t=f.width,r=f.height;for(let i=0;i<S;i++)n.texImage2D(e.TEXTURE_2D,i,g,t,r,0,p,h,null),t>>=1,r>>=1}}}else if(v.length>0){if(y&&b){let t=Ae(v[0]);n.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,r=v.length;t<r;t++)_=v[t],y?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,p,h,_):n.texImage2D(e.TEXTURE_2D,t,g,p,h,_);a.generateMipmaps=!1}else if(y){if(b){let t=Ae(f);n.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p,h,f)}else n.texImage2D(e.TEXTURE_2D,0,g,p,h,f);T(a)&&E(s),u.__version=l.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function ve(t,a,o){if(a.image.length!==6)return;let s=me(t,a),c=a.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+o);let l=r.get(c);if(c.version!==l.__version||s===!0){n.activeTexture(e.TEXTURE0+o);let t=Nt.getPrimaries(Nt.workingColorSpace),r=a.colorSpace===``?null:Nt.getPrimaries(a.colorSpace),u=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,u);let d=a.isCompressedTexture||a.image[0].isCompressedTexture,f=a.image[0]&&a.image[0].isDataTexture,p=[];for(let e=0;e<6;e++)!d&&!f?p[e]=w(a.image[e],!0,i.maxCubemapSize):p[e]=f?a.image[e].image:a.image[e],p[e]=L(a,p[e]);let h=p[0],g=m.convert(a.format,a.colorSpace),_=m.convert(a.type),v=O(a.internalFormat,g,_,a.colorSpace),y=a.isVideoTexture!==!0,b=l.__version===void 0||s===!0,x=c.dataReady,S=A(a,h);pe(e.TEXTURE_CUBE_MAP,a);let C;if(d){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=p[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];a.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=a.mipmaps,y&&b){C.length>0&&S++;let t=Ae(p[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(f){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,p[t].width,p[t].height,g,_,p[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,p[t].width,p[t].height,0,g,_,p[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,p[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,p[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}T(a)&&E(e.TEXTURE_CUBE_MAP),l.__version=c.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function ye(t,i,a,o,s,c){let l=m.convert(a.format,a.colorSpace),u=m.convert(a.type),d=O(a.internalFormat,l,u,a.colorSpace),f=r.get(i),p=r.get(a);if(p.__renderTarget=i,!f.__hasExternalTextures){let t=Math.max(1,i.width>>c),r=Math.max(1,i.height>>c);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?n.texImage3D(s,c,d,t,r,i.depth,0,l,u,null):n.texImage2D(s,c,d,t,r,0,l,u,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),I(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,s,p.__webglTexture,0,Oe(i)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,s,p.__webglTexture,c),n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=Oe(n);I(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,c,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=O(a.internalFormat,o,s,a.colorSpace),l=Oe(n);r&&I(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):I(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,a.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),oe(i.depthTexture,0);let o=a.__webglTexture,s=Oe(i);if(i.depthTexture.format===1026)I(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(i.depthTexture.format===1027)I(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw Error(`Unknown depthTexture format`)}function Se(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);let e=t.texture.mipmaps;e&&e.length>0?xe(i.__webglFramebuffer[0],t):xe(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),be(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),be(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,i){let a=r.get(t);n!==void 0&&ye(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Se(t)}function we(t){let i=t.texture,a=r.get(t),o=r.get(i);t.addEventListener(`dispose`,N);let s=t.textures,c=t.isWebGLCubeRenderTarget===!0,l=s.length>1;if(l||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=i.version,h.memory.textures++),c){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(l)for(let t=0,n=s.length;t<n;t++){let n=r.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&I(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=m.convert(r.format,r.colorSpace),o=m.convert(r.type),c=O(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),l=Oe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),be(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ye(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ye(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);T(i)&&E(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(l){for(let i=0,o=s.length;i<o;i++){let o=s[i],c=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,c.__webglTexture),pe(l,o),ye(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,l,0),T(o)&&E(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,o.__webglTexture),pe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ye(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ye(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);T(i)&&E(r),n.unbindTexture()}t.depthBuffer&&Se(t)}function Te(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(T(a)){let t=D(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),E(t),n.unbindTexture()}}}let F=[],Ee=[];function De(t){if(t.samples>0){if(I(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(F.length=0,Ee.length=0,F.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(F.push(c),Ee.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,F))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Oe(e){return Math.min(i.maxSamples,e.samples)}function I(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ke(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function L(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Nt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=re,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=I}function eu(e,t){function n(n,r=``){let i,a=Nt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var tu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nu=`
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

}`,ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Li(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ni({vertexShader:tu,fragmentShader:nu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gr(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},iu=class extends $e{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,h=typeof XRWebGLBinding<`u`,g=new ru,_={},v=t.getContextAttributes(),b=null,x=null,S=[],C=[],T=new V,E=null,D=new si;D.viewport=new Wt;let O=new si;O.viewport=new Wt;let M=[D,O],N=new Wo,P=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new hi,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new hi,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new hi,S[e]=t),t.getHandSpace()};function te(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}P=null,ee=null,g.reset();for(let e in _)delete _[e];e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?j:A,a=v.stencil?w:y);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Kt(d.textureWidth,d.textureHeight,{format:k,type:m,depthTexture:new Ii(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Kt(f.framebufferWidth,f.framebufferHeight,{format:k,type:m,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let ie=new H,ae=new H;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),N.near=O.near=D.near=t,N.far=O.far=D.far=n,(P!==N.near||ee!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,ee=N.far),N.layers.mask=e.layers.mask|6,D.layers.mask=N.layers.mask&3,O.layers.mask=N.layers.mask&5;let i=e.parent,a=N.cameras;se(N,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(N,D,O):N.projectionMatrix.copy(D.projectionMatrix),ce(e,N,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(e){return _[e]};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=M[n];o===void 0&&(o=new si,o.layers.enable(n),o.viewport=new Wt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new Li,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let de=new ls;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},au=new Nn,ou=new Cn;function su(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Qr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,au.copy(o),au.x*=-1,au.y*=-1,au.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(au.y*=-1,au.z*=-1),e.envMapRotation.value.setFromMatrix4(ou.makeRotationFromEuler(au)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var lu=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),uu=null;function du(){return uu===null&&(uu=new _i(lu,32,32,P,x),uu.minFilter=d,uu.magFilter=d,uu.wrapS=o,uu.wrapT=o,uu.generateMipmaps=!1,uu.needsUpdate=!0),uu}var fu=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let h=new Set([te,ee,N]),g=new Set([m,y,_,w,S,C]),v=new Uint32Array(4),b=new Int32Array(4),T=null,E=null,D=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,A=!1;this._outputColorSpace=ze;let j=0,M=0,P=null,ne=-1,re=null,ie=new Wt,ae=new Wt,oe=null,se=new W(0),ce=0,le=t.width,ue=t.height,de=1,fe=null,pe=null,me=new Wt(0,0,le,ue),he=new Wt(0,0,le,ue),ge=!1,_e=new Pi,ve=!1,ye=!1,be=new Cn,xe=new H,Se=new Wt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Te(){return P===null?de:1}let F=n;function Ee(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r181`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,B,!1),t.addEventListener(`webglcontextcreationerror`,at,!1),F===null){let t=`webgl2`;if(F=Ee(t,e),F===null)throw Ee(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw e(`WebGLRenderer: `+e.message),e}let De,Oe,I,ke,L,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,Ve,He,Ue,We,Ke,qe,Ye,$e,et,tt;function nt(){De=new Hs(F),De.init(),$e=new eu(F,De),Oe=new vs(F,De,e,$e),I=new Ql(F,De),Oe.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),ke=new Gs(F),L=new Il,Ae=new $l(F,De,I,L,Oe,$e,ke),je=new bs(k),Me=new Vs(k),Ne=new us(F),et=new gs(F,Ne),Pe=new Us(F,Ne,ke,et),Fe=new qs(F,Pe,Ne,ke),Ke=new Ks(F,Oe,Ae),He=new ys(L),Ie=new Fl(k,je,Me,De,Oe,et,He),Le=new su(k,L),Re=new Bl,Ve=new ql(De),We=new hs(k,je,Me,I,Fe,f,s),Ue=new Xl(k,Fe,Oe),tt=new cu(F,ke,Oe,I),qe=new _s(F,De,ke),Ye=new Ws(F,De,ke),ke.programs=Ie.programs,k.capabilities=Oe,k.extensions=De,k.properties=L,k.renderLists=Re,k.shadowMap=Ue,k.state=I,k.info=ke}nt();let rt=new iu(k,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=De.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=De.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(le,ue,!1))},this.getSize=function(e){return e.set(le,ue)},this.setSize=function(e,n,r=!0){rt.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(le=e,ue=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(le*de,ue*de).floor()},this.setDrawingBufferSize=function(e,n,r){le=e,ue=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(ie)},this.getViewport=function(e){return e.copy(me)},this.setViewport=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),I.viewport(ie.copy(me).multiplyScalar(de).round())},this.getScissor=function(e){return e.copy(he)},this.setScissor=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),I.scissor(ae.copy(he).multiplyScalar(de).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(e){I.setScissorTest(ge=e)},this.setOpaqueSort=function(e){fe=e},this.setTransparentSort=function(e){pe=e},this.getClearColor=function(e){return e.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=h.has(t)}if(e){let e=P.texture.type,t=g.has(e),n=We.getClearColor(),r=We.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferuiv(F.COLOR,0,v)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,F.clearBufferiv(F.COLOR,0,b))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,B,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),We.dispose(),Re.dispose(),Ve.dispose(),L.dispose(),je.dispose(),Me.dispose(),Fe.dispose(),et.dispose(),tt.dispose(),Ie.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,ft),rt.removeEventListener(`sessionend`,pt),mt.stop()};function it(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),A=!0}function B(){Xe(`WebGLRenderer: Context Restored.`),A=!1;let e=ke.autoReset,t=Ue.enabled,n=Ue.autoUpdate,r=Ue.needsUpdate,i=Ue.type;nt(),ke.autoReset=e,Ue.enabled=t,Ue.autoUpdate=n,Ue.needsUpdate=r,Ue.type=i}function at(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ot(e){let t=e.target;t.removeEventListener(`dispose`,ot),st(t)}function st(e){ct(e),L.remove(e)}function ct(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ie.releaseProgram(e)}),e.isShaderMaterial&&Ie.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ce);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Ct(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=qe;if(c!==null&&(h=Ne.get(c),g=Ye,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Te()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Te()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)Ze(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(De.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function lt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,bt(e,t,n),e.side=0,e.needsUpdate=!0,bt(e,t,n),e.side=2):bt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),E=Ve.get(n),E.init(t),O.push(E),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),E.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];lt(a,n,e),r.add(a)}else lt(t,n,e),r.add(t)}}),E=O.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){L.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}De.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function dt(e){ut&&ut(e)}function ft(){mt.stop()}function pt(){mt.start()}let mt=new ls;mt.setAnimationLoop(dt),typeof self<`u`&&mt.setContext(self),this.setAnimationLoop=function(e){ut=e,rt.setAnimationLoop(e),e===null?mt.stop():mt.start()},rt.addEventListener(`sessionstart`,ft),rt.addEventListener(`sessionend`,pt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(A===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,P),E=Ve.get(e,O.length),E.init(t),O.push(E),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),_e.setFromProjectionMatrix(be,Ge,t.reversedDepth),ye=this.localClippingEnabled,ve=He.init(this.clippingPlanes,ye),T=Re.get(e,D.length),T.init(),D.push(T),rt.enabled===!0&&rt.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&ht(e,t,-1/0,k.sortObjects)}ht(e,t,0,k.sortObjects),T.finish(),k.sortObjects===!0&&T.sort(fe,pe),we=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,we&&We.addToRenderList(T,e),this.info.render.frame++,ve===!0&&He.beginShadows();let n=E.state.shadowsArray;Ue.render(n,e,t),ve===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=T.opaque,i=T.transmissive;if(E.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];_t(r,i,e,a)}we&&We.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];gt(T,e,r,r.viewport)}}else i.length>0&&_t(r,i,e,t),we&&We.render(e),gt(T,e,t);P!==null&&M===0&&(Ae.updateMultisampleRenderTarget(P),Ae.updateRenderTargetMipmap(P)),e.isScene===!0&&e.onAfterRender(k,e,t),et.resetDefaultState(),ne=-1,re=null,O.pop(),O.length>0?(E=O[O.length-1],ve===!0&&He.setGlobalState(k.clippingPlanes,E.state.camera)):E=null,D.pop(),T=D.length>0?D[D.length-1]:null};function ht(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)E.pushLight(e),e.castShadow&&E.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||_e.intersectsSprite(e)){r&&Se.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let t=Fe.update(e),i=e.material;i.visible&&T.push(e,t,i,n,Se.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||_e.intersectsObject(e))){let t=Fe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Se.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Se.copy(e.boundingSphere.center)),Se.applyMatrix4(e.matrixWorld).applyMatrix4(be)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&T.push(e,t,s,n,Se.z,o)}}else i.visible&&T.push(e,t,i,n,Se.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ht(i[e],t,n,r)}function gt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;E.setupLightsView(n),ve===!0&&He.setGlobalState(k.clippingPlanes,n),r&&I.viewport(ie.copy(r)),i.length>0&&vt(i,t,n),a.length>0&&vt(a,t,n),o.length>0&&vt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function _t(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[r.id]===void 0&&(E.state.transmissionRenderTarget[r.id]=new Kt(1,1,{generateMipmaps:!0,type:De.has(`EXT_color_buffer_half_float`)||De.has(`EXT_color_buffer_float`)?x:m,minFilter:p,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));let a=E.state.transmissionRenderTarget[r.id],o=r.viewport||ie;a.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(se),ce=k.getClearAlpha(),ce<1&&k.setClearColor(16777215,.5),k.clear(),we&&We.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),E.setupLightsView(r),ve===!0&&He.setGlobalState(k.clippingPlanes,r),vt(e,n,r),Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a),De.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,yt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a))}k.setRenderTarget(s,c,l),k.setClearColor(se,ce),d!==void 0&&(r.viewport=d),k.toneMapping=u}function vt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&yt(o,t,n,s,l,c)}}function yt(e,t,n,r,i,a){e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function bt(e,t,n){t.isScene!==!0&&(t=Ce);let r=L.get(e),i=E.state.lights,a=E.state.shadowsArray,o=i.state.version,s=Ie.getParameters(e,i.state,a,t,n),c=Ie.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Me:je).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ot),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return St(e,s),u}else s.uniforms=Ie.getUniforms(e),e.onBeforeCompile(s,k),u=Ie.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=He.uniform),St(e,s),r.needsLights=Tt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function xt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=el.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function St(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ct(e,t,n,r,i){t.isScene!==!0&&(t=Ce),Ae.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=P===null?k.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Be,c=(r.isMeshStandardMaterial?Me:je).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(m=k.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=L.get(r),v=E.state.lights;if(ve===!0&&(ye===!0||e!==re)){let t=e===re&&r.id===ne;He.setState(r,e,t)}let y=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?y=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?y=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==He.numPlanes||_.numIntersection!==He.numIntersection)?y=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(y=!0):y=!0:y=!0:y=!0:(y=!0,_.__version=r.version);let b=_.currentProgram;y===!0&&(b=bt(r,t,i));let x=!1,S=!1,C=!1,w=b.getUniforms(),T=_.uniforms;if(I.useProgram(b.program)&&(x=!0,S=!0,C=!0),r.id!==ne&&(ne=r.id,S=!0),x||re!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),w.setValue(F,`projectionMatrix`,e.projectionMatrix),w.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=w.map.cameraPosition;t!==void 0&&t.setValue(F,xe.setFromMatrixPosition(e.matrixWorld)),Oe.logarithmicDepthBuffer&&w.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&w.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),re!==e&&(re=e,S=!0,C=!0)}if(i.isSkinnedMesh){w.setOptional(F,i,`bindMatrix`),w.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),w.setValue(F,`boneTexture`,e.boneTexture,Ae))}i.isBatchedMesh&&(w.setOptional(F,i,`batchingTexture`),w.setValue(F,`batchingTexture`,i._matricesTexture,Ae),w.setOptional(F,i,`batchingIdTexture`),w.setValue(F,`batchingIdTexture`,i._indirectTexture,Ae),w.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&w.setValue(F,`batchingColorTexture`,i._colorsTexture,Ae));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ke.update(i,n,b),(S||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,w.setValue(F,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(T.envMap.value=c,T.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(T.envMapIntensity.value=t.environmentIntensity),T.dfgLUT!==void 0&&(T.dfgLUT.value=du()),S&&(w.setValue(F,`toneMappingExposure`,k.toneMappingExposure),_.needsLights&&wt(T,C),a&&r.fog===!0&&Le.refreshFogUniforms(T,a),Le.refreshMaterialUniforms(T,r,de,ue,E.state.transmissionRenderTarget[e.id]),el.upload(F,xt(_),T,Ae)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(el.upload(F,xt(_),T,Ae),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&w.setValue(F,`center`,i.center),w.setValue(F,`modelViewMatrix`,i.modelViewMatrix),w.setValue(F,`normalMatrix`,i.normalMatrix),w.setValue(F,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,b),tt.bind(n,b)}}return b}function wt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Tt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let V=F.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){P=e,j=t,M=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=L.get(e);if(s.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(F.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)Ae.setupRenderTarget(e);else if(s.__hasExternalTextures)Ae.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);Ae.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&Ae.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,ie.copy(e.viewport),ae.copy(e.scissor),oe=e.scissorTest}else ie.copy(me).multiplyScalar(de).floor(),ae.copy(he).multiplyScalar(de).floor(),oe=ge;if(n!==0&&(i=V),I.bindFramebuffer(F.FRAMEBUFFER,i)&&r&&I.drawBuffers(e,i),I.viewport(ie),I.scissor(ae),I.setScissorTest(oe),a){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ne=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!Oe.textureFormatReadable(c)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Oe.textureTypeReadable(l)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),F.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a))}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!Oe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Oe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),F.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0);let f=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,f);let p=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qe(F,p,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(d),F.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ae.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()};let Et=F.createFramebuffer(),Dt=F.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(Ze(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Ae.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ae.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Ae.setTexture2D(t,0),v=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(F.UNPACK_ROW_LENGTH),b=F.getParameter(F.UNPACK_IMAGE_HEIGHT),x=F.getParameter(F.UNPACK_SKIP_PIXELS),S=F.getParameter(F.UNPACK_SKIP_ROWS),C=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,l),F.pixelStorei(F.UNPACK_SKIP_ROWS,u),F.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,Et),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,Dt);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(F.UNPACK_ROW_LENGTH,y),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(F.UNPACK_SKIP_PIXELS,x),F.pixelStorei(F.UNPACK_SKIP_ROWS,S),F.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&Ae.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ae.setTextureCube(e,0):e.isData3DTexture?Ae.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ae.setTexture2DArray(e,0):Ae.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){j=0,M=0,P=null,I.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}},pu={type:`change`},mu={type:`start`},hu={type:`end`},gu=new Sn,_u=new Ai,vu=Math.cos(70*Tt.DEG2RAD),yu=new H,bu=2*Math.PI,xu={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Su=1e-6,Cu=class extends os{constructor(e,t=null){super(e,t),this.state=xu.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:r.ROTATE,MIDDLE:r.DOLLY,RIGHT:r.PAN},this.touches={ONE:i.ROTATE,TWO:i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Et,this._lastTargetPosition=new H,this._quat=new Et().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new is,this._sphericalDelta=new is,this._scale=1,this._panOffset=new H,this._rotateStart=new V,this._rotateEnd=new V,this._rotateDelta=new V,this._panStart=new V,this._panEnd=new V,this._panDelta=new V,this._dollyStart=new V,this._dollyEnd=new V,this._dollyDelta=new V,this._dollyDirection=new H,this._mouse=new V,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tu.bind(this),this._onPointerDown=wu.bind(this),this._onPointerUp=Eu.bind(this),this._onContextMenu=Nu.bind(this),this._onMouseWheel=ku.bind(this),this._onKeyDown=Au.bind(this),this._onTouchStart=ju.bind(this),this._onTouchMove=Mu.bind(this),this._onMouseDown=Du.bind(this),this._onMouseMove=Ou.bind(this),this._interceptControlDown=Pu.bind(this),this._interceptControlUp=Fu.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pu),this.update(),this.state=xu.NONE}update(e=null){let t=this.object.position;yu.copy(t).sub(this.target),yu.applyQuaternion(this._quat),this._spherical.setFromVector3(yu),this.autoRotate&&this.state===xu.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=bu:n>Math.PI&&(n-=bu),r<-Math.PI?r+=bu:r>Math.PI&&(r-=bu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(yu.setFromSpherical(this._spherical),yu.applyQuaternion(this._quatInverse),t.copy(this.target).add(yu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=yu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new H(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new H(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=yu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(gu.origin.copy(this.object.position),gu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gu.direction))<vu?this.object.lookAt(this.target):(_u.setFromNormalAndCoplanarPoint(this.object.up,this.target),gu.intersectPlane(_u,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Su||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Su||this._lastTargetPosition.distanceToSquared(this.target)>Su?(this.dispatchEvent(pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?bu/60/60*this.autoRotateSpeed:bu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yu.setFromMatrixColumn(t,0),yu.multiplyScalar(-e),this._panOffset.add(yu)}_panUp(e,t){this.screenSpacePanning===!0?yu.setFromMatrixColumn(t,1):(yu.setFromMatrixColumn(t,0),yu.crossVectors(this.object.up,yu)),yu.multiplyScalar(e),this._panOffset.add(yu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;yu.copy(r).sub(this.target);let i=yu.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bu*this._rotateDelta.x/t.clientHeight),this._rotateUp(bu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bu*this._rotateDelta.x/t.clientHeight),this._rotateUp(bu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new V,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function wu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.domElement.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e)))}function Tu(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Eu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(hu),this.state=xu.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Du(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=xu.DOLLY;break;case r.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=xu.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=xu.ROTATE}break;case r.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=xu.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=xu.PAN}break;default:this.state=xu.NONE}this.state!==xu.NONE&&this.dispatchEvent(mu)}function Ou(e){switch(this.state){case xu.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case xu.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case xu.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function ku(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===xu.NONE&&(e.preventDefault(),this.dispatchEvent(mu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(hu))}function Au(e){this.enabled!==!1&&this._handleKeyDown(e)}function ju(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=xu.TOUCH_ROTATE;break;case i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=xu.TOUCH_PAN;break;default:this.state=xu.NONE}break;case 2:switch(this.touches.TWO){case i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=xu.TOUCH_DOLLY_PAN;break;case i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=xu.TOUCH_DOLLY_ROTATE;break;default:this.state=xu.NONE}break;default:this.state=xu.NONE}this.state!==xu.NONE&&this.dispatchEvent(mu)}function Mu(e){switch(this._trackPointer(e),this.state){case xu.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case xu.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case xu.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case xu.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=xu.NONE}}function Nu(e){this.enabled!==!1&&e.preventDefault()}function Pu(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Fu(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Iu=class extends gi{constructor(){super();let e=new Jr;e.deleteAttribute(`uv`);let t=new io({side:1}),n=new io,r=new zo(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new Gr(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Ei(e,n,6),o=new Xn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new Gr(e,Lu(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new Gr(e,Lu(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new Gr(e,Lu(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new Gr(e,Lu(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Gr(e,Lu(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Gr(e,Lu(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Lu(e){return new oo({color:0,emissive:16777215,emissiveIntensity:e})}String.prototype.codePointAt||(function(){var e=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch{}return n}(),t=function(e){if(this==null)throw TypeError();var t=String(this),n=t.length,r=e?Number(e):0;if(r!=r&&(r=0),!(r<0||r>=n)){var i=t.charCodeAt(r),a;return i>=55296&&i<=56319&&n>r+1&&(a=t.charCodeAt(r+1),a>=56320&&a<=57343)?(i-55296)*1024+a-56320+65536:i}};e?e(String.prototype,`codePointAt`,{value:t,configurable:!0,writable:!0}):String.prototype.codePointAt=t})();var Ru=0,zu=-3;function Bu(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function Vu(e,t){this.source=e,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=t,this.destLen=0,this.ltree=new Bu,this.dtree=new Bu}var Hu=new Bu,Uu=new Bu,Wu=new Uint8Array(30),Gu=new Uint16Array(30),Ku=new Uint8Array(30),qu=new Uint16Array(30),Ju=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Yu=new Bu,Xu=new Uint8Array(320);function Zu(e,t,n,r){for(var i=0,a;i<n;++i)e[i]=0;for(i=0;i<30-n;++i)e[i+n]=i/n|0;for(a=r,i=0;i<30;++i)t[i]=a,a+=1<<e[i]}function Qu(e,t){for(var n=0;n<7;++n)e.table[n]=0;for(e.table[7]=24,e.table[8]=152,e.table[9]=112,n=0;n<24;++n)e.trans[n]=256+n;for(n=0;n<144;++n)e.trans[24+n]=n;for(n=0;n<8;++n)e.trans[168+n]=280+n;for(n=0;n<112;++n)e.trans[176+n]=144+n;for(n=0;n<5;++n)t.table[n]=0;for(t.table[5]=32,n=0;n<32;++n)t.trans[n]=n}var $u=new Uint16Array(16);function ed(e,t,n,r){for(var i=0,a;i<16;++i)e.table[i]=0;for(i=0;i<r;++i)e.table[t[n+i]]++;for(e.table[0]=0,a=0,i=0;i<16;++i)$u[i]=a,a+=e.table[i];for(i=0;i<r;++i)t[n+i]&&(e.trans[$u[t[n+i]]++]=i)}function td(e){e.bitcount--||(e.tag=e.source[e.sourceIndex++],e.bitcount=7);var t=e.tag&1;return e.tag>>>=1,t}function nd(e,t,n){if(!t)return n;for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var r=e.tag&65535>>>16-t;return e.tag>>>=t,e.bitcount-=t,r+n}function rd(e,t){for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var n=0,r=0,i=0,a=e.tag;do r=2*r+(a&1),a>>>=1,++i,n+=t.table[i],r-=t.table[i];while(r>=0);return e.tag=a,e.bitcount-=i,t.trans[n+r]}function id(e,t,n){for(var r=nd(e,5,257),i=nd(e,5,1),a=nd(e,4,4),o=0,s,c;o<19;++o)Xu[o]=0;for(o=0;o<a;++o){var l=nd(e,3,0);Xu[Ju[o]]=l}for(ed(Yu,Xu,0,19),s=0;s<r+i;){var u=rd(e,Yu);switch(u){case 16:var d=Xu[s-1];for(c=nd(e,2,3);c;--c)Xu[s++]=d;break;case 17:for(c=nd(e,3,3);c;--c)Xu[s++]=0;break;case 18:for(c=nd(e,7,11);c;--c)Xu[s++]=0;break;default:Xu[s++]=u}}ed(t,Xu,0,r),ed(n,Xu,r,i)}function ad(e,t,n){for(;;){var r=rd(e,t);if(r===256)return Ru;if(r<256)e.dest[e.destLen++]=r;else{var i,a,o,s;for(r-=257,i=nd(e,Wu[r],Gu[r]),a=rd(e,n),o=e.destLen-nd(e,Ku[a],qu[a]),s=o;s<o+i;++s)e.dest[e.destLen++]=e.dest[s]}}}function od(e){for(var t,n,r;e.bitcount>8;)e.sourceIndex--,e.bitcount-=8;if(t=e.source[e.sourceIndex+1],t=256*t+e.source[e.sourceIndex],n=e.source[e.sourceIndex+3],n=256*n+e.source[e.sourceIndex+2],t!==(~n&65535))return zu;for(e.sourceIndex+=4,r=t;r;--r)e.dest[e.destLen++]=e.source[e.sourceIndex++];return e.bitcount=0,Ru}function sd(e,t){var n=new Vu(e,t),r,i,a;do{switch(r=td(n),i=nd(n,2,0),i){case 0:a=od(n);break;case 1:a=ad(n,Hu,Uu);break;case 2:id(n,n.ltree,n.dtree),a=ad(n,n.ltree,n.dtree);break;default:a=zu}if(a!==Ru)throw Error(`Data error`)}while(!r);return n.destLen<n.dest.length?typeof n.dest.slice==`function`?n.dest.slice(0,n.destLen):n.dest.subarray(0,n.destLen):n.dest}Qu(Hu,Uu),Zu(Wu,Gu,4,3),Zu(Ku,qu,2,1),Wu[28]=0,Gu[28]=258;var cd=sd;function ld(e,t,n,r,i){return(1-i)**3*e+3*(1-i)**2*i*t+3*(1-i)*i**2*n+i**3*r}function ud(){this.x1=NaN,this.y1=NaN,this.x2=NaN,this.y2=NaN}ud.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)},ud.prototype.addPoint=function(e,t){typeof e==`number`&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=e,this.x2=e),e<this.x1&&(this.x1=e),e>this.x2&&(this.x2=e)),typeof t==`number`&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=t,this.y2=t),t<this.y1&&(this.y1=t),t>this.y2&&(this.y2=t))},ud.prototype.addX=function(e){this.addPoint(e,null)},ud.prototype.addY=function(e){this.addPoint(null,e)},ud.prototype.addBezier=function(e,t,n,r,i,a,o,s){var c=[e,t],l=[n,r],u=[i,a],d=[o,s];this.addPoint(e,t),this.addPoint(o,s);for(var f=0;f<=1;f++){var p=6*c[f]-12*l[f]+6*u[f],m=-3*c[f]+9*l[f]-9*u[f]+3*d[f],h=3*l[f]-3*c[f];if(m===0){if(p===0)continue;var g=-h/p;0<g&&g<1&&(f===0&&this.addX(ld(c[f],l[f],u[f],d[f],g)),f===1&&this.addY(ld(c[f],l[f],u[f],d[f],g)))}else{var _=p**2-4*h*m;if(!(_<0)){var v=(-p+Math.sqrt(_))/(2*m);0<v&&v<1&&(f===0&&this.addX(ld(c[f],l[f],u[f],d[f],v)),f===1&&this.addY(ld(c[f],l[f],u[f],d[f],v)));var y=(-p-Math.sqrt(_))/(2*m);0<y&&y<1&&(f===0&&this.addX(ld(c[f],l[f],u[f],d[f],y)),f===1&&this.addY(ld(c[f],l[f],u[f],d[f],y)))}}}},ud.prototype.addQuad=function(e,t,n,r,i,a){var o=e+2/3*(n-e),s=t+2/3*(r-t),c=o+1/3*(i-e),l=s+1/3*(a-t);this.addBezier(e,t,o,s,c,l,i,a)};function dd(){this.commands=[],this.fill=`black`,this.stroke=null,this.strokeWidth=1}dd.prototype.moveTo=function(e,t){this.commands.push({type:`M`,x:e,y:t})},dd.prototype.lineTo=function(e,t){this.commands.push({type:`L`,x:e,y:t})},dd.prototype.curveTo=dd.prototype.bezierCurveTo=function(e,t,n,r,i,a){this.commands.push({type:`C`,x1:e,y1:t,x2:n,y2:r,x:i,y:a})},dd.prototype.quadTo=dd.prototype.quadraticCurveTo=function(e,t,n,r){this.commands.push({type:`Q`,x1:e,y1:t,x:n,y:r})},dd.prototype.close=dd.prototype.closePath=function(){this.commands.push({type:`Z`})},dd.prototype.extend=function(e){if(e.commands)e=e.commands;else if(e instanceof ud){var t=e;this.moveTo(t.x1,t.y1),this.lineTo(t.x2,t.y1),this.lineTo(t.x2,t.y2),this.lineTo(t.x1,t.y2),this.close();return}Array.prototype.push.apply(this.commands,e)},dd.prototype.getBoundingBox=function(){for(var e=new ud,t=0,n=0,r=0,i=0,a=0;a<this.commands.length;a++){var o=this.commands[a];switch(o.type){case`M`:e.addPoint(o.x,o.y),t=r=o.x,n=i=o.y;break;case`L`:e.addPoint(o.x,o.y),r=o.x,i=o.y;break;case`Q`:e.addQuad(r,i,o.x1,o.y1,o.x,o.y),r=o.x,i=o.y;break;case`C`:e.addBezier(r,i,o.x1,o.y1,o.x2,o.y2,o.x,o.y),r=o.x,i=o.y;break;case`Z`:r=t,i=n;break;default:throw Error(`Unexpected path command `+o.type)}}return e.isEmpty()&&e.addPoint(0,0),e},dd.prototype.draw=function(e){e.beginPath();for(var t=0;t<this.commands.length;t+=1){var n=this.commands[t];n.type===`M`?e.moveTo(n.x,n.y):n.type===`L`?e.lineTo(n.x,n.y):n.type===`C`?e.bezierCurveTo(n.x1,n.y1,n.x2,n.y2,n.x,n.y):n.type===`Q`?e.quadraticCurveTo(n.x1,n.y1,n.x,n.y):n.type===`Z`&&e.closePath()}this.fill&&(e.fillStyle=this.fill,e.fill()),this.stroke&&(e.strokeStyle=this.stroke,e.lineWidth=this.strokeWidth,e.stroke())},dd.prototype.toPathData=function(e){e=e===void 0?2:e;function t(t){return Math.round(t)===t?``+Math.round(t):t.toFixed(e)}function n(){for(var e=arguments,n=``,r=0;r<arguments.length;r+=1){var i=e[r];i>=0&&r>0&&(n+=` `),n+=t(i)}return n}for(var r=``,i=0;i<this.commands.length;i+=1){var a=this.commands[i];a.type===`M`?r+=`M`+n(a.x,a.y):a.type===`L`?r+=`L`+n(a.x,a.y):a.type===`C`?r+=`C`+n(a.x1,a.y1,a.x2,a.y2,a.x,a.y):a.type===`Q`?r+=`Q`+n(a.x1,a.y1,a.x,a.y):a.type===`Z`&&(r+=`Z`)}return r},dd.prototype.toSVG=function(e){var t=`<path d="`;return t+=this.toPathData(e),t+=`"`,this.fill&&this.fill!==`black`&&(this.fill===null?t+=` fill="none"`:t+=` fill="`+this.fill+`"`),this.stroke&&(t+=` stroke="`+this.stroke+`" stroke-width="`+this.strokeWidth+`"`),t+=`/>`,t},dd.prototype.toDOMElement=function(e){var t=this.toPathData(e),n=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return n.setAttribute(`d`,t),n};function fd(e){throw Error(e)}function pd(e,t){e||fd(t)}var q={fail:fd,argument:pd,assert:pd},md=32768,hd=2147483648,gd={},J={},Y={};function _d(e){return function(){return e}}J.BYTE=function(e){return q.argument(e>=0&&e<=255,`Byte value should be between 0 and 255.`),[e]},Y.BYTE=_d(1),J.CHAR=function(e){return[e.charCodeAt(0)]},Y.CHAR=_d(1),J.CHARARRAY=function(e){e===void 0&&(e=``,console.warn(`Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name.`));for(var t=[],n=0;n<e.length;n+=1)t[n]=e.charCodeAt(n);return t},Y.CHARARRAY=function(e){return e===void 0?0:e.length},J.USHORT=function(e){return[e>>8&255,e&255]},Y.USHORT=_d(2),J.SHORT=function(e){return e>=md&&(e=-(2*md-e)),[e>>8&255,e&255]},Y.SHORT=_d(2),J.UINT24=function(e){return[e>>16&255,e>>8&255,e&255]},Y.UINT24=_d(3),J.ULONG=function(e){return[e>>24&255,e>>16&255,e>>8&255,e&255]},Y.ULONG=_d(4),J.LONG=function(e){return e>=hd&&(e=-(2*hd-e)),[e>>24&255,e>>16&255,e>>8&255,e&255]},Y.LONG=_d(4),J.FIXED=J.ULONG,Y.FIXED=Y.ULONG,J.FWORD=J.SHORT,Y.FWORD=Y.SHORT,J.UFWORD=J.USHORT,Y.UFWORD=Y.USHORT,J.LONGDATETIME=function(e){return[0,0,0,0,e>>24&255,e>>16&255,e>>8&255,e&255]},Y.LONGDATETIME=_d(8),J.TAG=function(e){return q.argument(e.length===4,`Tag should be exactly 4 ASCII characters.`),[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]},Y.TAG=_d(4),J.Card8=J.BYTE,Y.Card8=Y.BYTE,J.Card16=J.USHORT,Y.Card16=Y.USHORT,J.OffSize=J.BYTE,Y.OffSize=Y.BYTE,J.SID=J.USHORT,Y.SID=Y.USHORT,J.NUMBER=function(e){return e>=-107&&e<=107?[e+139]:e>=108&&e<=1131?(e-=108,[(e>>8)+247,e&255]):e>=-1131&&e<=-108?(e=-e-108,[(e>>8)+251,e&255]):e>=-32768&&e<=32767?J.NUMBER16(e):J.NUMBER32(e)},Y.NUMBER=function(e){return J.NUMBER(e).length},J.NUMBER16=function(e){return[28,e>>8&255,e&255]},Y.NUMBER16=_d(3),J.NUMBER32=function(e){return[29,e>>24&255,e>>16&255,e>>8&255,e&255]},Y.NUMBER32=_d(5),J.REAL=function(e){var t=e.toString(),n=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);if(n){var r=parseFloat(`1e`+((n[2]?+n[2]:0)+n[1].length));t=(Math.round(e*r)/r).toString()}for(var i=``,a=0,o=t.length;a<o;a+=1){var s=t[a];i+=s===`e`?t[++a]===`-`?`c`:`b`:s===`.`?`a`:s===`-`?`e`:s}i+=i.length&1?`f`:`ff`;for(var c=[30],l=0,u=i.length;l<u;l+=2)c.push(parseInt(i.substr(l,2),16));return c},Y.REAL=function(e){return J.REAL(e).length},J.NAME=J.CHARARRAY,Y.NAME=Y.CHARARRAY,J.STRING=J.CHARARRAY,Y.STRING=Y.CHARARRAY,gd.UTF8=function(e,t,n){for(var r=[],i=n,a=0;a<i;a++,t+=1)r[a]=e.getUint8(t);return String.fromCharCode.apply(null,r)},gd.UTF16=function(e,t,n){for(var r=[],i=n/2,a=0;a<i;a++,t+=2)r[a]=e.getUint16(t);return String.fromCharCode.apply(null,r)},J.UTF16=function(e){for(var t=[],n=0;n<e.length;n+=1){var r=e.charCodeAt(n);t[t.length]=r>>8&255,t[t.length]=r&255}return t},Y.UTF16=function(e){return e.length*2};var vd={"x-mac-croatian":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č…\xA0ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ`,"x-mac-cyrillic":`АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»…\xA0ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю`,"x-mac-gaelic":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»…\xA0ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ`,"x-mac-greek":`Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»…\xA0ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­`,"x-mac-icelandic":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ`,"x-mac-inuit":`ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ…\xA0ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł`,"x-mac-ce":`ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»…\xA0ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ`,macintosh:`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ`,"x-mac-romanian":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ`,"x-mac-turkish":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ`};gd.MACSTRING=function(e,t,n,r){var i=vd[r];if(i!==void 0){for(var a=``,o=0;o<n;o++){var s=e.getUint8(t+o);a+=s<=127?String.fromCharCode(s):i[s&127]}return a}};var yd=typeof WeakMap==`function`&&new WeakMap,bd,xd=function(e){if(!bd)for(var t in bd={},vd)bd[t]=new String(t);var n=bd[e];if(n!==void 0){if(yd){var r=yd.get(n);if(r!==void 0)return r}var i=vd[e];if(i!==void 0){for(var a={},o=0;o<i.length;o++)a[i.charCodeAt(o)]=o+128;return yd&&yd.set(n,a),a}}};J.MACSTRING=function(e,t){var n=xd(t);if(n!==void 0){for(var r=[],i=0;i<e.length;i++){var a=e.charCodeAt(i);if(a>=128&&(a=n[a],a===void 0))return;r[i]=a}return r}},Y.MACSTRING=function(e,t){var n=J.MACSTRING(e,t);return n===void 0?0:n.length};function Sd(e){return e>=-128&&e<=127}function Cd(e,t,n){for(var r=0,i=e.length;t<i&&r<64&&e[t]===0;)++t,++r;return n.push(128|r-1),t}function wd(e,t,n){for(var r=0,i=e.length,a=t;a<i&&r<64;){var o=e[a];if(!Sd(o)||o===0&&a+1<i&&e[a+1]===0)break;++a,++r}n.push(r-1);for(var s=t;s<a;++s)n.push(e[s]+256&255);return a}function Td(e,t,n){for(var r=0,i=e.length,a=t;a<i&&r<64;){var o=e[a];if(o===0||Sd(o)&&a+1<i&&Sd(e[a+1]))break;++a,++r}n.push(64|r-1);for(var s=t;s<a;++s){var c=e[s];n.push(c+65536>>8&255,c+256&255)}return a}J.VARDELTAS=function(e){for(var t=0,n=[];t<e.length;){var r=e[t];t=r===0?Cd(e,t,n):r>=-128&&r<=127?wd(e,t,n):Td(e,t,n)}return n},J.INDEX=function(e){for(var t=1,n=[t],r=[],i=0;i<e.length;i+=1){var a=J.OBJECT(e[i]);Array.prototype.push.apply(r,a),t+=a.length,n.push(t)}if(r.length===0)return[0,0];for(var o=[],s=1+Math.floor(Math.log(t)/Math.log(2))/8|0,c=[void 0,J.BYTE,J.USHORT,J.UINT24,J.ULONG][s],l=0;l<n.length;l+=1){var u=c(n[l]);Array.prototype.push.apply(o,u)}return Array.prototype.concat(J.Card16(e.length),J.OffSize(s),o,r)},Y.INDEX=function(e){return J.INDEX(e).length},J.DICT=function(e){for(var t=[],n=Object.keys(e),r=n.length,i=0;i<r;i+=1){var a=parseInt(n[i],0),o=e[a];t=t.concat(J.OPERAND(o.value,o.type)),t=t.concat(J.OPERATOR(a))}return t},Y.DICT=function(e){return J.DICT(e).length},J.OPERATOR=function(e){return e<1200?[e]:[12,e-1200]},J.OPERAND=function(e,t){var n=[];if(Array.isArray(t))for(var r=0;r<t.length;r+=1)q.argument(e.length===t.length,`Not enough arguments given for type`+t),n=n.concat(J.OPERAND(e[r],t[r]));else if(t===`SID`)n=n.concat(J.NUMBER(e));else if(t===`offset`)n=n.concat(J.NUMBER32(e));else if(t===`number`)n=n.concat(J.NUMBER(e));else if(t===`real`)n=n.concat(J.REAL(e));else throw Error(`Unknown operand type `+t);return n},J.OP=J.BYTE,Y.OP=Y.BYTE;var Ed=typeof WeakMap==`function`&&new WeakMap;J.CHARSTRING=function(e){if(Ed){var t=Ed.get(e);if(t!==void 0)return t}for(var n=[],r=e.length,i=0;i<r;i+=1){var a=e[i];n=n.concat(J[a.type](a.value))}return Ed&&Ed.set(e,n),n},Y.CHARSTRING=function(e){return J.CHARSTRING(e).length},J.OBJECT=function(e){var t=J[e.type];return q.argument(t!==void 0,`No encoding function for type `+e.type),t(e.value)},Y.OBJECT=function(e){var t=Y[e.type];return q.argument(t!==void 0,`No sizeOf function for type `+e.type),t(e.value)},J.TABLE=function(e){for(var t=[],n=e.fields.length,r=[],i=[],a=0;a<n;a+=1){var o=e.fields[a],s=J[o.type];q.argument(s!==void 0,`No encoding function for field type `+o.type+` (`+o.name+`)`);var c=e[o.name];c===void 0&&(c=o.value);var l=s(c);o.type===`TABLE`?(i.push(t.length),t=t.concat([0,0]),r.push(l)):t=t.concat(l)}for(var u=0;u<r.length;u+=1){var d=i[u],f=t.length;q.argument(f<65536,`Table `+e.tableName+` too big.`),t[d]=f>>8,t[d+1]=f&255,t=t.concat(r[u])}return t},Y.TABLE=function(e){for(var t=0,n=e.fields.length,r=0;r<n;r+=1){var i=e.fields[r],a=Y[i.type];q.argument(a!==void 0,`No sizeOf function for field type `+i.type+` (`+i.name+`)`);var o=e[i.name];o===void 0&&(o=i.value),t+=a(o),i.type===`TABLE`&&(t+=2)}return t},J.RECORD=J.TABLE,Y.RECORD=Y.TABLE,J.LITERAL=function(e){return e},Y.LITERAL=function(e){return e.length};function Dd(e,t,n){if(t.length&&(t[0].name!==`coverageFormat`||t[0].value===1))for(var r=0;r<t.length;r+=1){var i=t[r];this[i.name]=i.value}if(this.tableName=e,this.fields=t,n)for(var a=Object.keys(n),o=0;o<a.length;o+=1){var s=a[o],c=n[s];this[s]!==void 0&&(this[s]=c)}}Dd.prototype.encode=function(){return J.TABLE(this)},Dd.prototype.sizeOf=function(){return Y.TABLE(this)};function Od(e,t,n){n===void 0&&(n=t.length);var r=Array(t.length+1);r[0]={name:e+`Count`,type:`USHORT`,value:n};for(var i=0;i<t.length;i++)r[i+1]={name:e+i,type:`USHORT`,value:t[i]};return r}function kd(e,t,n){var r=t.length,i=Array(r+1);i[0]={name:e+`Count`,type:`USHORT`,value:r};for(var a=0;a<r;a++)i[a+1]={name:e+a,type:`TABLE`,value:n(t[a],a)};return i}function Ad(e,t,n){var r=t.length,i=[];i[0]={name:e+`Count`,type:`USHORT`,value:r};for(var a=0;a<r;a++)i=i.concat(n(t[a],a));return i}function jd(e){e.format===1?Dd.call(this,`coverageTable`,[{name:`coverageFormat`,type:`USHORT`,value:1}].concat(Od(`glyph`,e.glyphs))):e.format===2?Dd.call(this,`coverageTable`,[{name:`coverageFormat`,type:`USHORT`,value:2}].concat(Ad(`rangeRecord`,e.ranges,function(e){return[{name:`startGlyphID`,type:`USHORT`,value:e.start},{name:`endGlyphID`,type:`USHORT`,value:e.end},{name:`startCoverageIndex`,type:`USHORT`,value:e.index}]}))):q.assert(!1,`Coverage format must be 1 or 2.`)}jd.prototype=Object.create(Dd.prototype),jd.prototype.constructor=jd;function Md(e){Dd.call(this,`scriptListTable`,Ad(`scriptRecord`,e,function(e,t){var n=e.script,r=n.defaultLangSys;return q.assert(!!r,`Unable to write GSUB: script `+e.tag+` has no default language system.`),[{name:`scriptTag`+t,type:`TAG`,value:e.tag},{name:`script`+t,type:`TABLE`,value:new Dd(`scriptTable`,[{name:`defaultLangSys`,type:`TABLE`,value:new Dd(`defaultLangSys`,[{name:`lookupOrder`,type:`USHORT`,value:0},{name:`reqFeatureIndex`,type:`USHORT`,value:r.reqFeatureIndex}].concat(Od(`featureIndex`,r.featureIndexes)))}].concat(Ad(`langSys`,n.langSysRecords,function(e,t){var n=e.langSys;return[{name:`langSysTag`+t,type:`TAG`,value:e.tag},{name:`langSys`+t,type:`TABLE`,value:new Dd(`langSys`,[{name:`lookupOrder`,type:`USHORT`,value:0},{name:`reqFeatureIndex`,type:`USHORT`,value:n.reqFeatureIndex}].concat(Od(`featureIndex`,n.featureIndexes)))}]})))}]}))}Md.prototype=Object.create(Dd.prototype),Md.prototype.constructor=Md;function Nd(e){Dd.call(this,`featureListTable`,Ad(`featureRecord`,e,function(e,t){var n=e.feature;return[{name:`featureTag`+t,type:`TAG`,value:e.tag},{name:`feature`+t,type:`TABLE`,value:new Dd(`featureTable`,[{name:`featureParams`,type:`USHORT`,value:n.featureParams}].concat(Od(`lookupListIndex`,n.lookupListIndexes)))}]}))}Nd.prototype=Object.create(Dd.prototype),Nd.prototype.constructor=Nd;function Pd(e,t){Dd.call(this,`lookupListTable`,kd(`lookup`,e,function(e){var n=t[e.lookupType];return q.assert(!!n,`Unable to write GSUB lookup type `+e.lookupType+` tables.`),new Dd(`lookupTable`,[{name:`lookupType`,type:`USHORT`,value:e.lookupType},{name:`lookupFlag`,type:`USHORT`,value:e.lookupFlag}].concat(kd(`subtable`,e.subtables,n)))}))}Pd.prototype=Object.create(Dd.prototype),Pd.prototype.constructor=Pd;var X={Table:Dd,Record:Dd,Coverage:jd,ScriptList:Md,FeatureList:Nd,LookupList:Pd,ushortList:Od,tableList:kd,recordList:Ad};function Fd(e,t){return e.getUint8(t)}function Id(e,t){return e.getUint16(t,!1)}function Ld(e,t){return e.getInt16(t,!1)}function Rd(e,t){return e.getUint32(t,!1)}function zd(e,t){return e.getInt16(t,!1)+e.getUint16(t+2,!1)/65535}function Bd(e,t){for(var n=``,r=t;r<t+4;r+=1)n+=String.fromCharCode(e.getInt8(r));return n}function Vd(e,t,n){for(var r=0,i=0;i<n;i+=1)r<<=8,r+=e.getUint8(t+i);return r}function Hd(e,t,n){for(var r=[],i=t;i<n;i+=1)r.push(e.getUint8(i));return r}function Ud(e){for(var t=``,n=0;n<e.length;n+=1)t+=String.fromCharCode(e[n]);return t}var Wd={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function Z(e,t){this.data=e,this.offset=t,this.relativeOffset=0}Z.prototype.parseByte=function(){var e=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},Z.prototype.parseChar=function(){var e=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},Z.prototype.parseCard8=Z.prototype.parseByte,Z.prototype.parseUShort=function(){var e=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},Z.prototype.parseCard16=Z.prototype.parseUShort,Z.prototype.parseSID=Z.prototype.parseUShort,Z.prototype.parseOffset16=Z.prototype.parseUShort,Z.prototype.parseShort=function(){var e=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},Z.prototype.parseF2Dot14=function(){var e=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,e},Z.prototype.parseULong=function(){var e=Rd(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},Z.prototype.parseOffset32=Z.prototype.parseULong,Z.prototype.parseFixed=function(){var e=zd(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},Z.prototype.parseString=function(e){var t=this.data,n=this.offset+this.relativeOffset,r=``;this.relativeOffset+=e;for(var i=0;i<e;i++)r+=String.fromCharCode(t.getUint8(n+i));return r},Z.prototype.parseTag=function(){return this.parseString(4)},Z.prototype.parseLongDateTime=function(){var e=Rd(this.data,this.offset+this.relativeOffset+4);return e-=2082844800,this.relativeOffset+=8,e},Z.prototype.parseVersion=function(e){var t=Id(this.data,this.offset+this.relativeOffset),n=Id(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,e===void 0&&(e=4096),t+n/e/10},Z.prototype.skip=function(e,t){t===void 0&&(t=1),this.relativeOffset+=Wd[e]*t},Z.prototype.parseULongList=function(e){e===void 0&&(e=this.parseULong());for(var t=Array(e),n=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)t[i]=n.getUint32(r),r+=4;return this.relativeOffset+=e*4,t},Z.prototype.parseOffset16List=Z.prototype.parseUShortList=function(e){e===void 0&&(e=this.parseUShort());for(var t=Array(e),n=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)t[i]=n.getUint16(r),r+=2;return this.relativeOffset+=e*2,t},Z.prototype.parseShortList=function(e){for(var t=Array(e),n=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)t[i]=n.getInt16(r),r+=2;return this.relativeOffset+=e*2,t},Z.prototype.parseByteList=function(e){for(var t=Array(e),n=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)t[i]=n.getUint8(r++);return this.relativeOffset+=e,t},Z.prototype.parseList=function(e,t){t||(t=e,e=this.parseUShort());for(var n=Array(e),r=0;r<e;r++)n[r]=t.call(this);return n},Z.prototype.parseList32=function(e,t){t||(t=e,e=this.parseULong());for(var n=Array(e),r=0;r<e;r++)n[r]=t.call(this);return n},Z.prototype.parseRecordList=function(e,t){t||(t=e,e=this.parseUShort());for(var n=Array(e),r=Object.keys(t),i=0;i<e;i++){for(var a={},o=0;o<r.length;o++){var s=r[o];a[s]=t[s].call(this)}n[i]=a}return n},Z.prototype.parseRecordList32=function(e,t){t||(t=e,e=this.parseULong());for(var n=Array(e),r=Object.keys(t),i=0;i<e;i++){for(var a={},o=0;o<r.length;o++){var s=r[o];a[s]=t[s].call(this)}n[i]=a}return n},Z.prototype.parseStruct=function(e){if(typeof e==`function`)return e.call(this);for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];n[i]=e[i].call(this)}return n},Z.prototype.parseValueRecord=function(e){if(e===void 0&&(e=this.parseUShort()),e!==0){var t={};return e&1&&(t.xPlacement=this.parseShort()),e&2&&(t.yPlacement=this.parseShort()),e&4&&(t.xAdvance=this.parseShort()),e&8&&(t.yAdvance=this.parseShort()),e&16&&(t.xPlaDevice=void 0,this.parseShort()),e&32&&(t.yPlaDevice=void 0,this.parseShort()),e&64&&(t.xAdvDevice=void 0,this.parseShort()),e&128&&(t.yAdvDevice=void 0,this.parseShort()),t}},Z.prototype.parseValueRecordList=function(){for(var e=this.parseUShort(),t=this.parseUShort(),n=Array(t),r=0;r<t;r++)n[r]=this.parseValueRecord(e);return n},Z.prototype.parsePointer=function(e){var t=this.parseOffset16();if(t>0)return new Z(this.data,this.offset+t).parseStruct(e)},Z.prototype.parsePointer32=function(e){var t=this.parseOffset32();if(t>0)return new Z(this.data,this.offset+t).parseStruct(e)},Z.prototype.parseListOfLists=function(e){for(var t=this.parseOffset16List(),n=t.length,r=this.relativeOffset,i=Array(n),a=0;a<n;a++){var o=t[a];if(o===0)i[a]=void 0;else if(this.relativeOffset=o,e){for(var s=this.parseOffset16List(),c=Array(s.length),l=0;l<s.length;l++)this.relativeOffset=o+s[l],c[l]=e.call(this);i[a]=c}else i[a]=this.parseUShortList()}return this.relativeOffset=r,i},Z.prototype.parseCoverage=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort(),n=this.parseUShort();if(t===1)return{format:1,glyphs:this.parseUShortList(n)};if(t===2){for(var r=Array(n),i=0;i<n;i++)r[i]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:r}}throw Error(`0x`+e.toString(16)+`: Coverage format must be 1 or 2.`)},Z.prototype.parseClassDef=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(t===2)return{format:2,ranges:this.parseRecordList({start:Z.uShort,end:Z.uShort,classId:Z.uShort})};throw Error(`0x`+e.toString(16)+`: ClassDef format must be 1 or 2.`)},Z.list=function(e,t){return function(){return this.parseList(e,t)}},Z.list32=function(e,t){return function(){return this.parseList32(e,t)}},Z.recordList=function(e,t){return function(){return this.parseRecordList(e,t)}},Z.recordList32=function(e,t){return function(){return this.parseRecordList32(e,t)}},Z.pointer=function(e){return function(){return this.parsePointer(e)}},Z.pointer32=function(e){return function(){return this.parsePointer32(e)}},Z.tag=Z.prototype.parseTag,Z.byte=Z.prototype.parseByte,Z.uShort=Z.offset16=Z.prototype.parseUShort,Z.uShortList=Z.prototype.parseUShortList,Z.uLong=Z.offset32=Z.prototype.parseULong,Z.uLongList=Z.prototype.parseULongList,Z.struct=Z.prototype.parseStruct,Z.coverage=Z.prototype.parseCoverage,Z.classDef=Z.prototype.parseClassDef;var Gd={reserved:Z.uShort,reqFeatureIndex:Z.uShort,featureIndexes:Z.uShortList};Z.prototype.parseScriptList=function(){return this.parsePointer(Z.recordList({tag:Z.tag,script:Z.pointer({defaultLangSys:Z.pointer(Gd),langSysRecords:Z.recordList({tag:Z.tag,langSys:Z.pointer(Gd)})})}))||[]},Z.prototype.parseFeatureList=function(){return this.parsePointer(Z.recordList({tag:Z.tag,feature:Z.pointer({featureParams:Z.offset16,lookupListIndexes:Z.uShortList})}))||[]},Z.prototype.parseLookupList=function(e){return this.parsePointer(Z.list(Z.pointer(function(){var t=this.parseUShort();q.argument(1<=t&&t<=9,`GPOS/GSUB lookup type `+t+` unknown.`);var n=this.parseUShort(),r=n&16;return{lookupType:t,lookupFlag:n,subtables:this.parseList(Z.pointer(e[t])),markFilteringSet:r?this.parseUShort():void 0}})))||[]},Z.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var e=this.parseUShort(),t=this.parseUShort();return q.argument(e===1&&t<1,`GPOS/GSUB feature variations table unknown.`),this.parseRecordList32({conditionSetOffset:Z.offset32,featureTableSubstitutionOffset:Z.offset32})})||[]};var Q={getByte:Fd,getCard8:Fd,getUShort:Id,getCard16:Id,getShort:Ld,getULong:Rd,getFixed:zd,getTag:Bd,getOffset:Vd,getBytes:Hd,bytesToString:Ud,Parser:Z};function Kd(e,t){t.parseUShort(),e.length=t.parseULong(),e.language=t.parseULong();var n;e.groupCount=n=t.parseULong(),e.glyphIndexMap={};for(var r=0;r<n;r+=1)for(var i=t.parseULong(),a=t.parseULong(),o=t.parseULong(),s=i;s<=a;s+=1)e.glyphIndexMap[s]=o,o++}function qd(e,t,n,r,i){e.length=t.parseUShort(),e.language=t.parseUShort();var a;e.segCount=a=t.parseUShort()>>1,t.skip(`uShort`,3),e.glyphIndexMap={};for(var o=new Q.Parser(n,r+i+14),s=new Q.Parser(n,r+i+16+a*2),c=new Q.Parser(n,r+i+16+a*4),l=new Q.Parser(n,r+i+16+a*6),u=r+i+16+a*8,d=0;d<a-1;d+=1)for(var f=void 0,p=o.parseUShort(),m=s.parseUShort(),h=c.parseShort(),g=l.parseUShort(),_=m;_<=p;_+=1)g===0?f=_+h&65535:(u=l.offset+l.relativeOffset-2,u+=g,u+=(_-m)*2,f=Q.getUShort(n,u),f!==0&&(f=f+h&65535)),e.glyphIndexMap[_]=f}function Jd(e,t){var n={};n.version=Q.getUShort(e,t),q.argument(n.version===0,`cmap table version should be 0.`),n.numTables=Q.getUShort(e,t+2);for(var r=-1,i=n.numTables-1;i>=0;--i){var a=Q.getUShort(e,t+4+i*8),o=Q.getUShort(e,t+4+i*8+2);if(a===3&&(o===0||o===1||o===10)||a===0&&(o===0||o===1||o===2||o===3||o===4)){r=Q.getULong(e,t+4+i*8+4);break}}if(r===-1)throw Error(`No valid cmap sub-tables found.`);var s=new Q.Parser(e,t+r);if(n.format=s.parseUShort(),n.format===12)Kd(n,s);else if(n.format===4)qd(n,s,e,t,r);else throw Error(`Only format 4 and 12 cmap tables are supported (found format `+n.format+`).`);return n}function Yd(e,t,n){e.segments.push({end:t,start:t,delta:-(t-n),offset:0,glyphIndex:n})}function Xd(e){e.segments.push({end:65535,start:65535,delta:1,offset:0})}function Zd(e){for(var t=!0,n=e.length-1;n>0;--n)if(e.get(n).unicode>65535){console.log(`Adding CMAP format 12 (needed!)`),t=!1;break}var r=[{name:`version`,type:`USHORT`,value:0},{name:`numTables`,type:`USHORT`,value:t?1:2},{name:`platformID`,type:`USHORT`,value:3},{name:`encodingID`,type:`USHORT`,value:1},{name:`offset`,type:`ULONG`,value:t?12:20}];t||(r=r.concat([{name:`cmap12PlatformID`,type:`USHORT`,value:3},{name:`cmap12EncodingID`,type:`USHORT`,value:10},{name:`cmap12Offset`,type:`ULONG`,value:0}])),r=r.concat([{name:`format`,type:`USHORT`,value:4},{name:`cmap4Length`,type:`USHORT`,value:0},{name:`language`,type:`USHORT`,value:0},{name:`segCountX2`,type:`USHORT`,value:0},{name:`searchRange`,type:`USHORT`,value:0},{name:`entrySelector`,type:`USHORT`,value:0},{name:`rangeShift`,type:`USHORT`,value:0}]);var i=new X.Table(`cmap`,r);for(i.segments=[],n=0;n<e.length;n+=1){for(var a=e.get(n),o=0;o<a.unicodes.length;o+=1)Yd(i,a.unicodes[o],n);i.segments=i.segments.sort(function(e,t){return e.start-t.start})}Xd(i);var s=i.segments.length,c=0,l=[],u=[],d=[],f=[],p=[],m=[];for(n=0;n<s;n+=1){var h=i.segments[n];h.end<=65535&&h.start<=65535?(l=l.concat({name:`end_`+n,type:`USHORT`,value:h.end}),u=u.concat({name:`start_`+n,type:`USHORT`,value:h.start}),d=d.concat({name:`idDelta_`+n,type:`SHORT`,value:h.delta}),f=f.concat({name:`idRangeOffset_`+n,type:`USHORT`,value:h.offset}),h.glyphId!==void 0&&(p=p.concat({name:`glyph_`+n,type:`USHORT`,value:h.glyphId}))):c+=1,!t&&h.glyphIndex!==void 0&&(m=m.concat({name:`cmap12Start_`+n,type:`ULONG`,value:h.start}),m=m.concat({name:`cmap12End_`+n,type:`ULONG`,value:h.end}),m=m.concat({name:`cmap12Glyph_`+n,type:`ULONG`,value:h.glyphIndex}))}if(i.segCountX2=(s-c)*2,i.searchRange=2**Math.floor(Math.log(s-c)/Math.log(2))*2,i.entrySelector=Math.log(i.searchRange/2)/Math.log(2),i.rangeShift=i.segCountX2-i.searchRange,i.fields=i.fields.concat(l),i.fields.push({name:`reservedPad`,type:`USHORT`,value:0}),i.fields=i.fields.concat(u),i.fields=i.fields.concat(d),i.fields=i.fields.concat(f),i.fields=i.fields.concat(p),i.cmap4Length=14+l.length*2+2+u.length*2+d.length*2+f.length*2+p.length*2,!t){var g=16+m.length*4;i.cmap12Offset=20+i.cmap4Length,i.fields=i.fields.concat([{name:`cmap12Format`,type:`USHORT`,value:12},{name:`cmap12Reserved`,type:`USHORT`,value:0},{name:`cmap12Length`,type:`ULONG`,value:g},{name:`cmap12Language`,type:`ULONG`,value:0},{name:`cmap12nGroups`,type:`ULONG`,value:m.length/3}]),i.fields=i.fields.concat(m)}return i}var Qd={parse:Jd,make:Zd},$d=`.notdef,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quoteright,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,quoteleft,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,exclamdown,cent,sterling,fraction,yen,florin,section,currency,quotesingle,quotedblleft,guillemotleft,guilsinglleft,guilsinglright,fi,fl,endash,dagger,daggerdbl,periodcentered,paragraph,bullet,quotesinglbase,quotedblbase,quotedblright,guillemotright,ellipsis,perthousand,questiondown,grave,acute,circumflex,tilde,macron,breve,dotaccent,dieresis,ring,cedilla,hungarumlaut,ogonek,caron,emdash,AE,ordfeminine,Lslash,Oslash,OE,ordmasculine,ae,dotlessi,lslash,oslash,oe,germandbls,onesuperior,logicalnot,mu,trademark,Eth,onehalf,plusminus,Thorn,onequarter,divide,brokenbar,degree,thorn,threequarters,twosuperior,registered,minus,eth,multiply,threesuperior,copyright,Aacute,Acircumflex,Adieresis,Agrave,Aring,Atilde,Ccedilla,Eacute,Ecircumflex,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Ntilde,Oacute,Ocircumflex,Odieresis,Ograve,Otilde,Scaron,Uacute,Ucircumflex,Udieresis,Ugrave,Yacute,Ydieresis,Zcaron,aacute,acircumflex,adieresis,agrave,aring,atilde,ccedilla,eacute,ecircumflex,edieresis,egrave,iacute,icircumflex,idieresis,igrave,ntilde,oacute,ocircumflex,odieresis,ograve,otilde,scaron,uacute,ucircumflex,udieresis,ugrave,yacute,ydieresis,zcaron,exclamsmall,Hungarumlautsmall,dollaroldstyle,dollarsuperior,ampersandsmall,Acutesmall,parenleftsuperior,parenrightsuperior,266 ff,onedotenleader,zerooldstyle,oneoldstyle,twooldstyle,threeoldstyle,fouroldstyle,fiveoldstyle,sixoldstyle,sevenoldstyle,eightoldstyle,nineoldstyle,commasuperior,threequartersemdash,periodsuperior,questionsmall,asuperior,bsuperior,centsuperior,dsuperior,esuperior,isuperior,lsuperior,msuperior,nsuperior,osuperior,rsuperior,ssuperior,tsuperior,ff,ffi,ffl,parenleftinferior,parenrightinferior,Circumflexsmall,hyphensuperior,Gravesmall,Asmall,Bsmall,Csmall,Dsmall,Esmall,Fsmall,Gsmall,Hsmall,Ismall,Jsmall,Ksmall,Lsmall,Msmall,Nsmall,Osmall,Psmall,Qsmall,Rsmall,Ssmall,Tsmall,Usmall,Vsmall,Wsmall,Xsmall,Ysmall,Zsmall,colonmonetary,onefitted,rupiah,Tildesmall,exclamdownsmall,centoldstyle,Lslashsmall,Scaronsmall,Zcaronsmall,Dieresissmall,Brevesmall,Caronsmall,Dotaccentsmall,Macronsmall,figuredash,hypheninferior,Ogoneksmall,Ringsmall,Cedillasmall,questiondownsmall,oneeighth,threeeighths,fiveeighths,seveneighths,onethird,twothirds,zerosuperior,foursuperior,fivesuperior,sixsuperior,sevensuperior,eightsuperior,ninesuperior,zeroinferior,oneinferior,twoinferior,threeinferior,fourinferior,fiveinferior,sixinferior,seveninferior,eightinferior,nineinferior,centinferior,dollarinferior,periodinferior,commainferior,Agravesmall,Aacutesmall,Acircumflexsmall,Atildesmall,Adieresissmall,Aringsmall,AEsmall,Ccedillasmall,Egravesmall,Eacutesmall,Ecircumflexsmall,Edieresissmall,Igravesmall,Iacutesmall,Icircumflexsmall,Idieresissmall,Ethsmall,Ntildesmall,Ogravesmall,Oacutesmall,Ocircumflexsmall,Otildesmall,Odieresissmall,OEsmall,Oslashsmall,Ugravesmall,Uacutesmall,Ucircumflexsmall,Udieresissmall,Yacutesmall,Thornsmall,Ydieresissmall,001.000,001.001,001.002,001.003,Black,Bold,Book,Light,Medium,Regular,Roman,Semibold`.split(`,`),ef=`................................space.exclam.quotedbl.numbersign.dollar.percent.ampersand.quoteright.parenleft.parenright.asterisk.plus.comma.hyphen.period.slash.zero.one.two.three.four.five.six.seven.eight.nine.colon.semicolon.less.equal.greater.question.at.A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.bracketleft.backslash.bracketright.asciicircum.underscore.quoteleft.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.braceleft.bar.braceright.asciitilde...................................exclamdown.cent.sterling.fraction.yen.florin.section.currency.quotesingle.quotedblleft.guillemotleft.guilsinglleft.guilsinglright.fi.fl..endash.dagger.daggerdbl.periodcentered..paragraph.bullet.quotesinglbase.quotedblbase.quotedblright.guillemotright.ellipsis.perthousand..questiondown..grave.acute.circumflex.tilde.macron.breve.dotaccent.dieresis..ring.cedilla..hungarumlaut.ogonek.caron.emdash.................AE..ordfeminine.....Lslash.Oslash.OE.ordmasculine......ae....dotlessi...lslash.oslash.oe.germandbls`.split(`.`),tf=`................................space.exclamsmall.Hungarumlautsmall..dollaroldstyle.dollarsuperior.ampersandsmall.Acutesmall.parenleftsuperior.parenrightsuperior.twodotenleader.onedotenleader.comma.hyphen.period.fraction.zerooldstyle.oneoldstyle.twooldstyle.threeoldstyle.fouroldstyle.fiveoldstyle.sixoldstyle.sevenoldstyle.eightoldstyle.nineoldstyle.colon.semicolon.commasuperior.threequartersemdash.periodsuperior.questionsmall..asuperior.bsuperior.centsuperior.dsuperior.esuperior...isuperior...lsuperior.msuperior.nsuperior.osuperior...rsuperior.ssuperior.tsuperior..ff.fi.fl.ffi.ffl.parenleftinferior..parenrightinferior.Circumflexsmall.hyphensuperior.Gravesmall.Asmall.Bsmall.Csmall.Dsmall.Esmall.Fsmall.Gsmall.Hsmall.Ismall.Jsmall.Ksmall.Lsmall.Msmall.Nsmall.Osmall.Psmall.Qsmall.Rsmall.Ssmall.Tsmall.Usmall.Vsmall.Wsmall.Xsmall.Ysmall.Zsmall.colonmonetary.onefitted.rupiah.Tildesmall...................................exclamdownsmall.centoldstyle.Lslashsmall...Scaronsmall.Zcaronsmall.Dieresissmall.Brevesmall.Caronsmall..Dotaccentsmall...Macronsmall...figuredash.hypheninferior...Ogoneksmall.Ringsmall.Cedillasmall....onequarter.onehalf.threequarters.questiondownsmall.oneeighth.threeeighths.fiveeighths.seveneighths.onethird.twothirds...zerosuperior.onesuperior.twosuperior.threesuperior.foursuperior.fivesuperior.sixsuperior.sevensuperior.eightsuperior.ninesuperior.zeroinferior.oneinferior.twoinferior.threeinferior.fourinferior.fiveinferior.sixinferior.seveninferior.eightinferior.nineinferior.centinferior.dollarinferior.periodinferior.commainferior.Agravesmall.Aacutesmall.Acircumflexsmall.Atildesmall.Adieresissmall.Aringsmall.AEsmall.Ccedillasmall.Egravesmall.Eacutesmall.Ecircumflexsmall.Edieresissmall.Igravesmall.Iacutesmall.Icircumflexsmall.Idieresissmall.Ethsmall.Ntildesmall.Ogravesmall.Oacutesmall.Ocircumflexsmall.Otildesmall.Odieresissmall.OEsmall.Oslashsmall.Ugravesmall.Uacutesmall.Ucircumflexsmall.Udieresissmall.Yacutesmall.Thornsmall.Ydieresissmall`.split(`.`),nf=`.notdef,.null,nonmarkingreturn,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quotesingle,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,grave,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,Adieresis,Aring,Ccedilla,Eacute,Ntilde,Odieresis,Udieresis,aacute,agrave,acircumflex,adieresis,atilde,aring,ccedilla,eacute,egrave,ecircumflex,edieresis,iacute,igrave,icircumflex,idieresis,ntilde,oacute,ograve,ocircumflex,odieresis,otilde,uacute,ugrave,ucircumflex,udieresis,dagger,degree,cent,sterling,section,bullet,paragraph,germandbls,registered,copyright,trademark,acute,dieresis,notequal,AE,Oslash,infinity,plusminus,lessequal,greaterequal,yen,mu,partialdiff,summation,product,pi,integral,ordfeminine,ordmasculine,Omega,ae,oslash,questiondown,exclamdown,logicalnot,radical,florin,approxequal,Delta,guillemotleft,guillemotright,ellipsis,nonbreakingspace,Agrave,Atilde,Otilde,OE,oe,endash,emdash,quotedblleft,quotedblright,quoteleft,quoteright,divide,lozenge,ydieresis,Ydieresis,fraction,currency,guilsinglleft,guilsinglright,fi,fl,daggerdbl,periodcentered,quotesinglbase,quotedblbase,perthousand,Acircumflex,Ecircumflex,Aacute,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Oacute,Ocircumflex,apple,Ograve,Uacute,Ucircumflex,Ugrave,dotlessi,circumflex,tilde,macron,breve,dotaccent,ring,cedilla,hungarumlaut,ogonek,caron,Lslash,lslash,Scaron,scaron,Zcaron,zcaron,brokenbar,Eth,eth,Yacute,yacute,Thorn,thorn,minus,multiply,onesuperior,twosuperior,threesuperior,onehalf,onequarter,threequarters,franc,Gbreve,gbreve,Idotaccent,Scedilla,scedilla,Cacute,cacute,Ccaron,ccaron,dcroat`.split(`,`);function rf(e){this.font=e}rf.prototype.charToGlyphIndex=function(e){var t=e.codePointAt(0),n=this.font.glyphs;if(n){for(var r=0;r<n.length;r+=1)for(var i=n.get(r),a=0;a<i.unicodes.length;a+=1)if(i.unicodes[a]===t)return r}return null};function af(e){this.cmap=e}af.prototype.charToGlyphIndex=function(e){return this.cmap.glyphIndexMap[e.codePointAt(0)]||0};function of(e,t){this.encoding=e,this.charset=t}of.prototype.charToGlyphIndex=function(e){var t=e.codePointAt(0),n=this.encoding[t];return this.charset.indexOf(n)};function sf(e){switch(e.version){case 1:this.names=nf.slice();break;case 2:this.names=Array(e.numberOfGlyphs);for(var t=0;t<e.numberOfGlyphs;t++)e.glyphNameIndex[t]<nf.length?this.names[t]=nf[e.glyphNameIndex[t]]:this.names[t]=e.names[e.glyphNameIndex[t]-nf.length];break;case 2.5:this.names=Array(e.numberOfGlyphs);for(var n=0;n<e.numberOfGlyphs;n++)this.names[n]=nf[n+e.glyphNameIndex[n]];break;case 3:this.names=[];break;default:this.names=[]}}sf.prototype.nameToGlyphIndex=function(e){return this.names.indexOf(e)},sf.prototype.glyphIndexToName=function(e){return this.names[e]};function cf(e){for(var t,n=e.tables.cmap.glyphIndexMap,r=Object.keys(n),i=0;i<r.length;i+=1){var a=r[i],o=n[a];t=e.glyphs.get(o),t.addUnicode(parseInt(a))}for(var s=0;s<e.glyphs.length;s+=1)t=e.glyphs.get(s),e.cffEncoding?e.isCIDFont?t.name=`gid`+s:t.name=e.cffEncoding.charset[s]:e.glyphNames.names&&(t.name=e.glyphNames.glyphIndexToName(s))}function lf(e){e._IndexToUnicodeMap={};for(var t=e.tables.cmap.glyphIndexMap,n=Object.keys(t),r=0;r<n.length;r+=1){var i=n[r],a=t[i];e._IndexToUnicodeMap[a]===void 0?e._IndexToUnicodeMap[a]={unicodes:[parseInt(i)]}:e._IndexToUnicodeMap[a].unicodes.push(parseInt(i))}}function uf(e,t){t.lowMemory?lf(e):cf(e)}function df(e,t,n,r,i){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.stroke()}var ff={line:df};function pf(e,t){var n=t||new dd;return{configurable:!0,get:function(){return typeof n==`function`&&(n=n()),n},set:function(e){n=e}}}function mf(e){this.bindConstructorValues(e)}mf.prototype.bindConstructorValues=function(e){this.index=e.index||0,this.name=e.name||null,this.unicode=e.unicode||void 0,this.unicodes=e.unicodes||e.unicode!==void 0?[e.unicode]:[],`xMin`in e&&(this.xMin=e.xMin),`yMin`in e&&(this.yMin=e.yMin),`xMax`in e&&(this.xMax=e.xMax),`yMax`in e&&(this.yMax=e.yMax),`advanceWidth`in e&&(this.advanceWidth=e.advanceWidth),Object.defineProperty(this,"path",pf(this,e.path))},mf.prototype.addUnicode=function(e){this.unicodes.length===0&&(this.unicode=e),this.unicodes.push(e)},mf.prototype.getBoundingBox=function(){return this.path.getBoundingBox()},mf.prototype.getPath=function(e,t,n,r,i){e=e===void 0?0:e,t=t===void 0?0:t,n=n===void 0?72:n;var a,o;r||={};var s=r.xScale,c=r.yScale;if(r.hinting&&i&&i.hinting&&(o=this.path&&i.hinting.exec(this,n)),o)a=i.hinting.getCommands(o),e=Math.round(e),t=Math.round(t),s=c=1;else{a=this.path.commands;var l=1/(this.path.unitsPerEm||1e3)*n;s===void 0&&(s=l),c===void 0&&(c=l)}for(var u=new dd,d=0;d<a.length;d+=1){var f=a[d];f.type===`M`?u.moveTo(e+f.x*s,t+-f.y*c):f.type===`L`?u.lineTo(e+f.x*s,t+-f.y*c):f.type===`Q`?u.quadraticCurveTo(e+f.x1*s,t+-f.y1*c,e+f.x*s,t+-f.y*c):f.type===`C`?u.curveTo(e+f.x1*s,t+-f.y1*c,e+f.x2*s,t+-f.y2*c,e+f.x*s,t+-f.y*c):f.type===`Z`&&u.closePath()}return u},mf.prototype.getContours=function(){if(this.points===void 0)return[];for(var e=[],t=[],n=0;n<this.points.length;n+=1){var r=this.points[n];t.push(r),r.lastPointOfContour&&(e.push(t),t=[])}return q.argument(t.length===0,`There are still points left in the current contour.`),e},mf.prototype.getMetrics=function(){for(var e=this.path.commands,t=[],n=[],r=0;r<e.length;r+=1){var i=e[r];i.type!==`Z`&&(t.push(i.x),n.push(i.y)),(i.type===`Q`||i.type===`C`)&&(t.push(i.x1),n.push(i.y1)),i.type===`C`&&(t.push(i.x2),n.push(i.y2))}var a={xMin:Math.min.apply(null,t),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,t),yMax:Math.max.apply(null,n),leftSideBearing:this.leftSideBearing};return isFinite(a.xMin)||(a.xMin=0),isFinite(a.xMax)||(a.xMax=this.advanceWidth),isFinite(a.yMin)||(a.yMin=0),isFinite(a.yMax)||(a.yMax=0),a.rightSideBearing=this.advanceWidth-a.leftSideBearing-(a.xMax-a.xMin),a},mf.prototype.draw=function(e,t,n,r,i){this.getPath(t,n,r,i).draw(e)},mf.prototype.drawPoints=function(e,t,n,r){function i(t,n,r,i){e.beginPath();for(var a=0;a<t.length;a+=1)e.moveTo(n+t[a].x*i,r+t[a].y*i),e.arc(n+t[a].x*i,r+t[a].y*i,2,0,Math.PI*2,!1);e.closePath(),e.fill()}t=t===void 0?0:t,n=n===void 0?0:n,r=r===void 0?24:r;for(var a=1/this.path.unitsPerEm*r,o=[],s=[],c=this.path,l=0;l<c.commands.length;l+=1){var u=c.commands[l];u.x!==void 0&&o.push({x:u.x,y:-u.y}),u.x1!==void 0&&s.push({x:u.x1,y:-u.y1}),u.x2!==void 0&&s.push({x:u.x2,y:-u.y2})}e.fillStyle=`blue`,i(o,t,n,a),e.fillStyle=`red`,i(s,t,n,a)},mf.prototype.drawMetrics=function(e,t,n,r){var i;t=t===void 0?0:t,n=n===void 0?0:n,r=r===void 0?24:r,i=1/this.path.unitsPerEm*r,e.lineWidth=1,e.strokeStyle=`black`,ff.line(e,t,-1e4,t,1e4),ff.line(e,-1e4,n,1e4,n);var a=this.xMin||0,o=this.yMin||0,s=this.xMax||0,c=this.yMax||0,l=this.advanceWidth||0;e.strokeStyle=`blue`,ff.line(e,t+a*i,-1e4,t+a*i,1e4),ff.line(e,t+s*i,-1e4,t+s*i,1e4),ff.line(e,-1e4,n+-o*i,1e4,n+-o*i),ff.line(e,-1e4,n+-c*i,1e4,n+-c*i),e.strokeStyle=`green`,ff.line(e,t+l*i,-1e4,t+l*i,1e4)};function hf(e,t,n){Object.defineProperty(e,t,{get:function(){return e.path,e[n]},set:function(t){e[n]=t},enumerable:!0,configurable:!0})}function gf(e,t){if(this.font=e,this.glyphs={},Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];r.path.unitsPerEm=e.unitsPerEm,this.glyphs[n]=r}this.length=t&&t.length||0}gf.prototype.get=function(e){if(this.glyphs[e]===void 0){this.font._push(e),typeof this.glyphs[e]==`function`&&(this.glyphs[e]=this.glyphs[e]());var t=this.glyphs[e],n=this.font._IndexToUnicodeMap[e];if(n)for(var r=0;r<n.unicodes.length;r++)t.addUnicode(n.unicodes[r]);this.font.cffEncoding?t.name=this.font.isCIDFont?`gid`+e:this.font.cffEncoding.charset[e]:this.font.glyphNames.names&&(t.name=this.font.glyphNames.glyphIndexToName(e)),this.glyphs[e].advanceWidth=this.font._hmtxTableData[e].advanceWidth,this.glyphs[e].leftSideBearing=this.font._hmtxTableData[e].leftSideBearing}else typeof this.glyphs[e]==`function`&&(this.glyphs[e]=this.glyphs[e]());return this.glyphs[e]},gf.prototype.push=function(e,t){this.glyphs[e]=t,this.length++};function _f(e,t){return new mf({index:t,font:e})}function vf(e,t,n,r,i,a){return function(){var o=new mf({index:t,font:e});return o.path=function(){n(o,r,i);var t=a(e.glyphs,o);return t.unitsPerEm=e.unitsPerEm,t},hf(o,`xMin`,`_xMin`),hf(o,`xMax`,`_xMax`),hf(o,`yMin`,`_yMin`),hf(o,`yMax`,`_yMax`),o}}function yf(e,t,n,r){return function(){var i=new mf({index:t,font:e});return i.path=function(){var t=n(e,i,r);return t.unitsPerEm=e.unitsPerEm,t},i}}var bf={GlyphSet:gf,glyphLoader:_f,ttfGlyphLoader:vf,cffGlyphLoader:yf};function xf(e,t){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n+=1)if(!xf(e[n],t[n]))return!1;return!0}return!1}function Sf(e){return e.length<1240?107:e.length<33900?1131:32768}function Cf(e,t,n){var r=[],i=[],a=Q.getCard16(e,t),o,s;if(a!==0){var c=Q.getByte(e,t+2);o=t+(a+1)*c+2;for(var l=t+3,u=0;u<a+1;u+=1)r.push(Q.getOffset(e,l,c)),l+=c;s=o+r[a]}else s=t+2;for(var d=0;d<r.length-1;d+=1){var f=Q.getBytes(e,o+r[d],o+r[d+1]);n&&(f=n(f)),i.push(f)}return{objects:i,startOffset:t,endOffset:s}}function wf(e,t){var n=[],r=Q.getCard16(e,t),i,a;if(r!==0){var o=Q.getByte(e,t+2);i=t+(r+1)*o+2;for(var s=t+3,c=0;c<r+1;c+=1)n.push(Q.getOffset(e,s,o)),s+=o;a=i+n[r]}else a=t+2;return{offsets:n,startOffset:t,endOffset:a}}function Tf(e,t,n,r,i){var a=Q.getCard16(n,r),o=0;if(a!==0){var s=Q.getByte(n,r+2);o=r+(a+1)*s+2}var c=Q.getBytes(n,o+t[e],o+t[e+1]);return i&&(c=i(c)),c}function Ef(e){for(var t=``,n=15,r=[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`.`,`E`,`E-`,null,`-`];;){var i=e.parseByte(),a=i>>4,o=i&15;if(a===n||(t+=r[a],o===n))break;t+=r[o]}return parseFloat(t)}function Df(e,t){var n,r,i,a;if(t===28)return n=e.parseByte(),r=e.parseByte(),n<<8|r;if(t===29)return n=e.parseByte(),r=e.parseByte(),i=e.parseByte(),a=e.parseByte(),n<<24|r<<16|i<<8|a;if(t===30)return Ef(e);if(t>=32&&t<=246)return t-139;if(t>=247&&t<=250)return n=e.parseByte(),(t-247)*256+n+108;if(t>=251&&t<=254)return n=e.parseByte(),-(t-251)*256-n-108;throw Error(`Invalid b0 `+t)}function Of(e){for(var t={},n=0;n<e.length;n+=1){var r=e[n][0],i=e[n][1],a=void 0;if(a=i.length===1?i[0]:i,t.hasOwnProperty(r)&&!isNaN(t[r]))throw Error(`Object `+t+` already has key `+r);t[r]=a}return t}function kf(e,t,n){t=t===void 0?0:t;var r=new Q.Parser(e,t),i=[],a=[];for(n=n===void 0?e.length:n;r.relativeOffset<n;){var o=r.parseByte();o<=21?(o===12&&(o=1200+r.parseByte()),i.push([o,a]),a=[]):a.push(Df(r,o))}return Of(i)}function Af(e,t){return t=t<=390?$d[t]:e[t-391],t}function jf(e,t,n){for(var r={},i,a=0;a<t.length;a+=1){var o=t[a];if(Array.isArray(o.type)){var s=[];s.length=o.type.length;for(var c=0;c<o.type.length;c++)i=e[o.op]===void 0?void 0:e[o.op][c],i===void 0&&(i=o.value!==void 0&&o.value[c]!==void 0?o.value[c]:null),o.type[c]===`SID`&&(i=Af(n,i)),s[c]=i;r[o.name]=s}else i=e[o.op],i===void 0&&(i=o.value===void 0?null:o.value),o.type===`SID`&&(i=Af(n,i)),r[o.name]=i}return r}function Mf(e,t){var n={};return n.formatMajor=Q.getCard8(e,t),n.formatMinor=Q.getCard8(e,t+1),n.size=Q.getCard8(e,t+2),n.offsetSize=Q.getCard8(e,t+3),n.startOffset=t,n.endOffset=t+4,n}var Nf=[{name:`version`,op:0,type:`SID`},{name:`notice`,op:1,type:`SID`},{name:`copyright`,op:1200,type:`SID`},{name:`fullName`,op:2,type:`SID`},{name:`familyName`,op:3,type:`SID`},{name:`weight`,op:4,type:`SID`},{name:`isFixedPitch`,op:1201,type:`number`,value:0},{name:`italicAngle`,op:1202,type:`number`,value:0},{name:`underlinePosition`,op:1203,type:`number`,value:-100},{name:`underlineThickness`,op:1204,type:`number`,value:50},{name:`paintType`,op:1205,type:`number`,value:0},{name:`charstringType`,op:1206,type:`number`,value:2},{name:`fontMatrix`,op:1207,type:[`real`,`real`,`real`,`real`,`real`,`real`],value:[.001,0,0,.001,0,0]},{name:`uniqueId`,op:13,type:`number`},{name:`fontBBox`,op:5,type:[`number`,`number`,`number`,`number`],value:[0,0,0,0]},{name:`strokeWidth`,op:1208,type:`number`,value:0},{name:`xuid`,op:14,type:[],value:null},{name:`charset`,op:15,type:`offset`,value:0},{name:`encoding`,op:16,type:`offset`,value:0},{name:`charStrings`,op:17,type:`offset`,value:0},{name:`private`,op:18,type:[`number`,`offset`],value:[0,0]},{name:`ros`,op:1230,type:[`SID`,`SID`,`number`]},{name:`cidFontVersion`,op:1231,type:`number`,value:0},{name:`cidFontRevision`,op:1232,type:`number`,value:0},{name:`cidFontType`,op:1233,type:`number`,value:0},{name:`cidCount`,op:1234,type:`number`,value:8720},{name:`uidBase`,op:1235,type:`number`},{name:`fdArray`,op:1236,type:`offset`},{name:`fdSelect`,op:1237,type:`offset`},{name:`fontName`,op:1238,type:`SID`}],Pf=[{name:`subrs`,op:19,type:`offset`,value:0},{name:`defaultWidthX`,op:20,type:`number`,value:0},{name:`nominalWidthX`,op:21,type:`number`,value:0}];function Ff(e,t){return jf(kf(e,0,e.byteLength),Nf,t)}function If(e,t,n,r){return jf(kf(e,t,n),Pf,r)}function Lf(e,t,n,r){for(var i=[],a=0;a<n.length;a+=1){var o=Ff(new DataView(new Uint8Array(n[a]).buffer),r);o._subrs=[],o._subrsBias=0,o._defaultWidthX=0,o._nominalWidthX=0;var s=o.private[0],c=o.private[1];if(s!==0&&c!==0){var l=If(e,c+t,s,r);o._defaultWidthX=l.defaultWidthX,o._nominalWidthX=l.nominalWidthX,l.subrs!==0&&(o._subrs=Cf(e,c+l.subrs+t).objects,o._subrsBias=Sf(o._subrs)),o._privateDict=l}i.push(o)}return i}function Rf(e,t,n,r){var i,a,o=new Q.Parser(e,t);--n;var s=[`.notdef`],c=o.parseCard8();if(c===0)for(var l=0;l<n;l+=1)i=o.parseSID(),s.push(Af(r,i));else if(c===1)for(;s.length<=n;){i=o.parseSID(),a=o.parseCard8();for(var u=0;u<=a;u+=1)s.push(Af(r,i)),i+=1}else if(c===2)for(;s.length<=n;){i=o.parseSID(),a=o.parseCard16();for(var d=0;d<=a;d+=1)s.push(Af(r,i)),i+=1}else throw Error(`Unknown charset format `+c);return s}function zf(e,t,n){var r,i={},a=new Q.Parser(e,t),o=a.parseCard8();if(o===0)for(var s=a.parseCard8(),c=0;c<s;c+=1)r=a.parseCard8(),i[r]=c;else if(o===1){var l=a.parseCard8();r=1;for(var u=0;u<l;u+=1)for(var d=a.parseCard8(),f=a.parseCard8(),p=d;p<=d+f;p+=1)i[p]=r,r+=1}else throw Error(`Unknown encoding format `+o);return new of(i,n)}function Bf(e,t,n){var r,i,a,o,s=new dd,c=[],l=0,u=!1,d=!1,f=0,p=0,m,h,g,_;if(e.isCIDFont){var v=e.tables.cff.topDict._fdSelect[t.index],y=e.tables.cff.topDict._fdArray[v];m=y._subrs,h=y._subrsBias,g=y._defaultWidthX,_=y._nominalWidthX}else m=e.tables.cff.topDict._subrs,h=e.tables.cff.topDict._subrsBias,g=e.tables.cff.topDict._defaultWidthX,_=e.tables.cff.topDict._nominalWidthX;var b=g;function x(e,t){d&&s.closePath(),s.moveTo(e,t),d=!0}function S(){c.length%2!=0&&!u&&(b=c.shift()+_),l+=c.length>>1,c.length=0,u=!0}function C(n){for(var g,v,y,w,T,E,D,O,k,A,j,M,N=0;N<n.length;){var P=n[N];switch(N+=1,P){case 1:S();break;case 3:S();break;case 4:c.length>1&&!u&&(b=c.shift()+_,u=!0),p+=c.pop(),x(f,p);break;case 5:for(;c.length>0;)f+=c.shift(),p+=c.shift(),s.lineTo(f,p);break;case 6:for(;c.length>0&&(f+=c.shift(),s.lineTo(f,p),c.length!==0);)p+=c.shift(),s.lineTo(f,p);break;case 7:for(;c.length>0&&(p+=c.shift(),s.lineTo(f,p),c.length!==0);)f+=c.shift(),s.lineTo(f,p);break;case 8:for(;c.length>0;)r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+c.shift(),s.curveTo(r,i,a,o,f,p);break;case 10:T=c.pop()+h,E=m[T],E&&C(E);break;case 11:return;case 12:switch(P=n[N],N+=1,P){case 35:r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),D=a+c.shift(),O=o+c.shift(),k=D+c.shift(),A=O+c.shift(),j=k+c.shift(),M=A+c.shift(),f=j+c.shift(),p=M+c.shift(),c.shift(),s.curveTo(r,i,a,o,D,O),s.curveTo(k,A,j,M,f,p);break;case 34:r=f+c.shift(),i=p,a=r+c.shift(),o=i+c.shift(),D=a+c.shift(),O=o,k=D+c.shift(),A=o,j=k+c.shift(),M=p,f=j+c.shift(),s.curveTo(r,i,a,o,D,O),s.curveTo(k,A,j,M,f,p);break;case 36:r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),D=a+c.shift(),O=o,k=D+c.shift(),A=o,j=k+c.shift(),M=A+c.shift(),f=j+c.shift(),s.curveTo(r,i,a,o,D,O),s.curveTo(k,A,j,M,f,p);break;case 37:r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),D=a+c.shift(),O=o+c.shift(),k=D+c.shift(),A=O+c.shift(),j=k+c.shift(),M=A+c.shift(),Math.abs(j-f)>Math.abs(M-p)?f=j+c.shift():p=M+c.shift(),s.curveTo(r,i,a,o,D,O),s.curveTo(k,A,j,M,f,p);break;default:console.log(`Glyph `+t.index+`: unknown operator 1200`+P),c.length=0}break;case 14:c.length>0&&!u&&(b=c.shift()+_,u=!0),d&&=(s.closePath(),!1);break;case 18:S();break;case 19:case 20:S(),N+=l+7>>3;break;case 21:c.length>2&&!u&&(b=c.shift()+_,u=!0),p+=c.pop(),f+=c.pop(),x(f,p);break;case 22:c.length>1&&!u&&(b=c.shift()+_,u=!0),f+=c.pop(),x(f,p);break;case 23:S();break;case 24:for(;c.length>2;)r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+c.shift(),s.curveTo(r,i,a,o,f,p);f+=c.shift(),p+=c.shift(),s.lineTo(f,p);break;case 25:for(;c.length>6;)f+=c.shift(),p+=c.shift(),s.lineTo(f,p);r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+c.shift(),s.curveTo(r,i,a,o,f,p);break;case 26:for(c.length%2&&(f+=c.shift());c.length>0;)r=f,i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a,p=o+c.shift(),s.curveTo(r,i,a,o,f,p);break;case 27:for(c.length%2&&(p+=c.shift());c.length>0;)r=f+c.shift(),i=p,a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o,s.curveTo(r,i,a,o,f,p);break;case 28:g=n[N],v=n[N+1],c.push((g<<24|v<<16)>>16),N+=2;break;case 29:T=c.pop()+e.gsubrsBias,E=e.gsubrs[T],E&&C(E);break;case 30:for(;c.length>0&&(r=f,i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+(c.length===1?c.shift():0),s.curveTo(r,i,a,o,f,p),c.length!==0);)r=f+c.shift(),i=p,a=r+c.shift(),o=i+c.shift(),p=o+c.shift(),f=a+(c.length===1?c.shift():0),s.curveTo(r,i,a,o,f,p);break;case 31:for(;c.length>0&&(r=f+c.shift(),i=p,a=r+c.shift(),o=i+c.shift(),p=o+c.shift(),f=a+(c.length===1?c.shift():0),s.curveTo(r,i,a,o,f,p),c.length!==0);)r=f,i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+(c.length===1?c.shift():0),s.curveTo(r,i,a,o,f,p);break;default:P<32?console.log(`Glyph `+t.index+`: unknown operator `+P):P<247?c.push(P-139):P<251?(g=n[N],N+=1,c.push((P-247)*256+g+108)):P<255?(g=n[N],N+=1,c.push(-(P-251)*256-g-108)):(g=n[N],v=n[N+1],y=n[N+2],w=n[N+3],N+=4,c.push((g<<24|v<<16|y<<8|w)/65536))}}}return C(n),t.advanceWidth=b,s}function Vf(e,t,n,r){var i=[],a,o=new Q.Parser(e,t),s=o.parseCard8();if(s===0)for(var c=0;c<n;c++){if(a=o.parseCard8(),a>=r)throw Error(`CFF table CID Font FDSelect has bad FD index value `+a+` (FD count `+r+`)`);i.push(a)}else if(s===3){var l=o.parseCard16(),u=o.parseCard16();if(u!==0)throw Error(`CFF Table CID Font FDSelect format 3 range has bad initial GID `+u);for(var d,f=0;f<l;f++){if(a=o.parseCard8(),d=o.parseCard16(),a>=r)throw Error(`CFF table CID Font FDSelect has bad FD index value `+a+` (FD count `+r+`)`);if(d>n)throw Error(`CFF Table CID Font FDSelect format 3 range has bad GID `+d);for(;u<d;u++)i.push(a);u=d}if(d!==n)throw Error(`CFF Table CID Font FDSelect format 3 range has bad final GID `+d)}else throw Error(`CFF Table CID Font FDSelect table has unsupported format `+s);return i}function Hf(e,t,n,r){n.tables.cff={};var i=Cf(e,Cf(e,Mf(e,t).endOffset,Q.bytesToString).endOffset),a=Cf(e,i.endOffset,Q.bytesToString);n.gsubrs=Cf(e,a.endOffset).objects,n.gsubrsBias=Sf(n.gsubrs);var o=Lf(e,t,i.objects,a.objects);if(o.length!==1)throw Error(`CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = `+o.length);var s=o[0];if(n.tables.cff.topDict=s,s._privateDict&&(n.defaultWidthX=s._privateDict.defaultWidthX,n.nominalWidthX=s._privateDict.nominalWidthX),s.ros[0]!==void 0&&s.ros[1]!==void 0&&(n.isCIDFont=!0),n.isCIDFont){var c=s.fdArray,l=s.fdSelect;if(c===0||l===0)throw Error(`Font is marked as a CID font, but FDArray and/or FDSelect information is missing`);c+=t;var u=Lf(e,t,Cf(e,c).objects,a.objects);s._fdArray=u,l+=t,s._fdSelect=Vf(e,l,n.numGlyphs,u.length)}var d=t+s.private[1],f=If(e,d,s.private[0],a.objects);n.defaultWidthX=f.defaultWidthX,n.nominalWidthX=f.nominalWidthX,f.subrs===0?(n.subrs=[],n.subrsBias=0):(n.subrs=Cf(e,d+f.subrs).objects,n.subrsBias=Sf(n.subrs));var p;r.lowMemory?(p=wf(e,t+s.charStrings),n.nGlyphs=p.offsets.length):(p=Cf(e,t+s.charStrings),n.nGlyphs=p.objects.length);var m=Rf(e,t+s.charset,n.nGlyphs,a.objects);if(n.cffEncoding=s.encoding===0?new of(ef,m):s.encoding===1?new of(tf,m):zf(e,t+s.encoding,m),n.encoding=n.encoding||n.cffEncoding,n.glyphs=new bf.GlyphSet(n),r.lowMemory)n._push=function(r){var i=Tf(r,p.offsets,e,t+s.charStrings);n.glyphs.push(r,bf.cffGlyphLoader(n,r,Bf,i))};else for(var h=0;h<n.nGlyphs;h+=1){var g=p.objects[h];n.glyphs.push(h,bf.cffGlyphLoader(n,h,Bf,g))}}function Uf(e,t){var n,r=$d.indexOf(e);return r>=0&&(n=r),r=t.indexOf(e),r>=0?n=r+$d.length:(n=$d.length+t.length,t.push(e)),n}function Wf(){return new X.Record(`Header`,[{name:`major`,type:`Card8`,value:1},{name:`minor`,type:`Card8`,value:0},{name:`hdrSize`,type:`Card8`,value:4},{name:`major`,type:`Card8`,value:1}])}function Gf(e){var t=new X.Record(`Name INDEX`,[{name:`names`,type:`INDEX`,value:[]}]);t.names=[];for(var n=0;n<e.length;n+=1)t.names.push({name:`name_`+n,type:`NAME`,value:e[n]});return t}function Kf(e,t,n){for(var r={},i=0;i<e.length;i+=1){var a=e[i],o=t[a.name];o!==void 0&&!xf(o,a.value)&&(a.type===`SID`&&(o=Uf(o,n)),r[a.op]={name:a.name,type:a.type,value:o})}return r}function qf(e,t){var n=new X.Record(`Top DICT`,[{name:`dict`,type:`DICT`,value:{}}]);return n.dict=Kf(Nf,e,t),n}function Jf(e){var t=new X.Record(`Top DICT INDEX`,[{name:`topDicts`,type:`INDEX`,value:[]}]);return t.topDicts=[{name:`topDict_0`,type:`TABLE`,value:e}],t}function Yf(e){var t=new X.Record(`String INDEX`,[{name:`strings`,type:`INDEX`,value:[]}]);t.strings=[];for(var n=0;n<e.length;n+=1)t.strings.push({name:`string_`+n,type:`STRING`,value:e[n]});return t}function Xf(){return new X.Record(`Global Subr INDEX`,[{name:`subrs`,type:`INDEX`,value:[]}])}function Zf(e,t){for(var n=new X.Record(`Charsets`,[{name:`format`,type:`Card8`,value:0}]),r=0;r<e.length;r+=1){var i=e[r],a=Uf(i,t);n.fields.push({name:`glyph_`+r,type:`SID`,value:a})}return n}function Qf(e){var t=[],n=e.path;t.push({name:`width`,type:`NUMBER`,value:e.advanceWidth});for(var r=0,i=0,a=0;a<n.commands.length;a+=1){var o=void 0,s=void 0,c=n.commands[a];if(c.type===`Q`){var l=1/3,u=2/3;c={type:`C`,x:c.x,y:c.y,x1:Math.round(l*r+u*c.x1),y1:Math.round(l*i+u*c.y1),x2:Math.round(l*c.x+u*c.x1),y2:Math.round(l*c.y+u*c.y1)}}if(c.type===`M`)o=Math.round(c.x-r),s=Math.round(c.y-i),t.push({name:`dx`,type:`NUMBER`,value:o}),t.push({name:`dy`,type:`NUMBER`,value:s}),t.push({name:`rmoveto`,type:`OP`,value:21}),r=Math.round(c.x),i=Math.round(c.y);else if(c.type===`L`)o=Math.round(c.x-r),s=Math.round(c.y-i),t.push({name:`dx`,type:`NUMBER`,value:o}),t.push({name:`dy`,type:`NUMBER`,value:s}),t.push({name:`rlineto`,type:`OP`,value:5}),r=Math.round(c.x),i=Math.round(c.y);else if(c.type===`C`){var d=Math.round(c.x1-r),f=Math.round(c.y1-i),p=Math.round(c.x2-c.x1),m=Math.round(c.y2-c.y1);o=Math.round(c.x-c.x2),s=Math.round(c.y-c.y2),t.push({name:`dx1`,type:`NUMBER`,value:d}),t.push({name:`dy1`,type:`NUMBER`,value:f}),t.push({name:`dx2`,type:`NUMBER`,value:p}),t.push({name:`dy2`,type:`NUMBER`,value:m}),t.push({name:`dx`,type:`NUMBER`,value:o}),t.push({name:`dy`,type:`NUMBER`,value:s}),t.push({name:`rrcurveto`,type:`OP`,value:8}),r=Math.round(c.x),i=Math.round(c.y)}}return t.push({name:`endchar`,type:`OP`,value:14}),t}function $f(e){for(var t=new X.Record(`CharStrings INDEX`,[{name:`charStrings`,type:`INDEX`,value:[]}]),n=0;n<e.length;n+=1){var r=e.get(n),i=Qf(r);t.charStrings.push({name:r.name,type:`CHARSTRING`,value:i})}return t}function ep(e,t){var n=new X.Record(`Private DICT`,[{name:`dict`,type:`DICT`,value:{}}]);return n.dict=Kf(Pf,e,t),n}function tp(e,t){for(var n=new X.Table(`CFF `,[{name:`header`,type:`RECORD`},{name:`nameIndex`,type:`RECORD`},{name:`topDictIndex`,type:`RECORD`},{name:`stringIndex`,type:`RECORD`},{name:`globalSubrIndex`,type:`RECORD`},{name:`charsets`,type:`RECORD`},{name:`charStringsIndex`,type:`RECORD`},{name:`privateDict`,type:`RECORD`}]),r=1/t.unitsPerEm,i={version:t.version,fullName:t.fullName,familyName:t.familyName,weight:t.weightName,fontBBox:t.fontBBox||[0,0,0,0],fontMatrix:[r,0,0,r,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},a={},o=[],s,c=1;c<e.length;c+=1)s=e.get(c),o.push(s.name);var l=[];n.header=Wf(),n.nameIndex=Gf([t.postScriptName]);var u=qf(i,l);return n.topDictIndex=Jf(u),n.globalSubrIndex=Xf(),n.charsets=Zf(o,l),n.charStringsIndex=$f(e),n.privateDict=ep(a,l),n.stringIndex=Yf(l),i.charset=n.header.sizeOf()+n.nameIndex.sizeOf()+n.topDictIndex.sizeOf()+n.stringIndex.sizeOf()+n.globalSubrIndex.sizeOf(),i.encoding=0,i.charStrings=i.charset+n.charsets.sizeOf(),i.private[1]=i.charStrings+n.charStringsIndex.sizeOf(),u=qf(i,l),n.topDictIndex=Jf(u),n}var np={parse:Hf,make:tp};function rp(e,t){var n={},r=new Q.Parser(e,t);return n.version=r.parseVersion(),n.fontRevision=Math.round(r.parseFixed()*1e3)/1e3,n.checkSumAdjustment=r.parseULong(),n.magicNumber=r.parseULong(),q.argument(n.magicNumber===1594834165,`Font header has wrong magic number.`),n.flags=r.parseUShort(),n.unitsPerEm=r.parseUShort(),n.created=r.parseLongDateTime(),n.modified=r.parseLongDateTime(),n.xMin=r.parseShort(),n.yMin=r.parseShort(),n.xMax=r.parseShort(),n.yMax=r.parseShort(),n.macStyle=r.parseUShort(),n.lowestRecPPEM=r.parseUShort(),n.fontDirectionHint=r.parseShort(),n.indexToLocFormat=r.parseShort(),n.glyphDataFormat=r.parseShort(),n}function ip(e){var t=Math.round(new Date().getTime()/1e3)+2082844800,n=t;return e.createdTimestamp&&(n=e.createdTimestamp+2082844800),new X.Table(`head`,[{name:`version`,type:`FIXED`,value:65536},{name:`fontRevision`,type:`FIXED`,value:65536},{name:`checkSumAdjustment`,type:`ULONG`,value:0},{name:`magicNumber`,type:`ULONG`,value:1594834165},{name:`flags`,type:`USHORT`,value:0},{name:`unitsPerEm`,type:`USHORT`,value:1e3},{name:`created`,type:`LONGDATETIME`,value:n},{name:`modified`,type:`LONGDATETIME`,value:t},{name:`xMin`,type:`SHORT`,value:0},{name:`yMin`,type:`SHORT`,value:0},{name:`xMax`,type:`SHORT`,value:0},{name:`yMax`,type:`SHORT`,value:0},{name:`macStyle`,type:`USHORT`,value:0},{name:`lowestRecPPEM`,type:`USHORT`,value:0},{name:`fontDirectionHint`,type:`SHORT`,value:2},{name:`indexToLocFormat`,type:`SHORT`,value:0},{name:`glyphDataFormat`,type:`SHORT`,value:0}],e)}var ap={parse:rp,make:ip};function op(e,t){var n={},r=new Q.Parser(e,t);return n.version=r.parseVersion(),n.ascender=r.parseShort(),n.descender=r.parseShort(),n.lineGap=r.parseShort(),n.advanceWidthMax=r.parseUShort(),n.minLeftSideBearing=r.parseShort(),n.minRightSideBearing=r.parseShort(),n.xMaxExtent=r.parseShort(),n.caretSlopeRise=r.parseShort(),n.caretSlopeRun=r.parseShort(),n.caretOffset=r.parseShort(),r.relativeOffset+=8,n.metricDataFormat=r.parseShort(),n.numberOfHMetrics=r.parseUShort(),n}function sp(e){return new X.Table(`hhea`,[{name:`version`,type:`FIXED`,value:65536},{name:`ascender`,type:`FWORD`,value:0},{name:`descender`,type:`FWORD`,value:0},{name:`lineGap`,type:`FWORD`,value:0},{name:`advanceWidthMax`,type:`UFWORD`,value:0},{name:`minLeftSideBearing`,type:`FWORD`,value:0},{name:`minRightSideBearing`,type:`FWORD`,value:0},{name:`xMaxExtent`,type:`FWORD`,value:0},{name:`caretSlopeRise`,type:`SHORT`,value:1},{name:`caretSlopeRun`,type:`SHORT`,value:0},{name:`caretOffset`,type:`SHORT`,value:0},{name:`reserved1`,type:`SHORT`,value:0},{name:`reserved2`,type:`SHORT`,value:0},{name:`reserved3`,type:`SHORT`,value:0},{name:`reserved4`,type:`SHORT`,value:0},{name:`metricDataFormat`,type:`SHORT`,value:0},{name:`numberOfHMetrics`,type:`USHORT`,value:0}],e)}var cp={parse:op,make:sp};function lp(e,t,n,r,i){for(var a,o,s=new Q.Parser(e,t),c=0;c<r;c+=1){c<n&&(a=s.parseUShort(),o=s.parseShort());var l=i.get(c);l.advanceWidth=a,l.leftSideBearing=o}}function up(e,t,n,r,i){e._hmtxTableData={};for(var a,o,s=new Q.Parser(t,n),c=0;c<i;c+=1)c<r&&(a=s.parseUShort(),o=s.parseShort()),e._hmtxTableData[c]={advanceWidth:a,leftSideBearing:o}}function dp(e,t,n,r,i,a,o){o.lowMemory?up(e,t,n,r,i):lp(t,n,r,i,a)}function fp(e){for(var t=new X.Table(`hmtx`,[]),n=0;n<e.length;n+=1){var r=e.get(n),i=r.advanceWidth||0,a=r.leftSideBearing||0;t.fields.push({name:`advanceWidth_`+n,type:`USHORT`,value:i}),t.fields.push({name:`leftSideBearing_`+n,type:`SHORT`,value:a})}return t}var pp={parse:dp,make:fp};function mp(e){for(var t=new X.Table(`ltag`,[{name:`version`,type:`ULONG`,value:1},{name:`flags`,type:`ULONG`,value:0},{name:`numTags`,type:`ULONG`,value:e.length}]),n=``,r=12+e.length*4,i=0;i<e.length;++i){var a=n.indexOf(e[i]);a<0&&(a=n.length,n+=e[i]),t.fields.push({name:`offset `+i,type:`USHORT`,value:r+a}),t.fields.push({name:`length `+i,type:`USHORT`,value:e[i].length})}return t.fields.push({name:`stringPool`,type:`CHARARRAY`,value:n}),t}function hp(e,t){var n=new Q.Parser(e,t),r=n.parseULong();q.argument(r===1,`Unsupported ltag table version.`),n.skip(`uLong`,1);for(var i=n.parseULong(),a=[],o=0;o<i;o++){for(var s=``,c=t+n.parseUShort(),l=n.parseUShort(),u=c;u<c+l;++u)s+=String.fromCharCode(e.getInt8(u));a.push(s)}return a}var gp={make:mp,parse:hp};function _p(e,t){var n={},r=new Q.Parser(e,t);return n.version=r.parseVersion(),n.numGlyphs=r.parseUShort(),n.version===1&&(n.maxPoints=r.parseUShort(),n.maxContours=r.parseUShort(),n.maxCompositePoints=r.parseUShort(),n.maxCompositeContours=r.parseUShort(),n.maxZones=r.parseUShort(),n.maxTwilightPoints=r.parseUShort(),n.maxStorage=r.parseUShort(),n.maxFunctionDefs=r.parseUShort(),n.maxInstructionDefs=r.parseUShort(),n.maxStackElements=r.parseUShort(),n.maxSizeOfInstructions=r.parseUShort(),n.maxComponentElements=r.parseUShort(),n.maxComponentDepth=r.parseUShort()),n}function vp(e){return new X.Table(`maxp`,[{name:`version`,type:`FIXED`,value:20480},{name:`numGlyphs`,type:`USHORT`,value:e}])}var yp={parse:_p,make:vp},bp=[`copyright`,`fontFamily`,`fontSubfamily`,`uniqueID`,`fullName`,`version`,`postScriptName`,`trademark`,`manufacturer`,`designer`,`description`,`manufacturerURL`,`designerURL`,`license`,`licenseURL`,`reserved`,`preferredFamily`,`preferredSubfamily`,`compatibleFullName`,`sampleText`,`postScriptFindFontName`,`wwsFamily`,`wwsSubfamily`],xp={0:`en`,1:`fr`,2:`de`,3:`it`,4:`nl`,5:`sv`,6:`es`,7:`da`,8:`pt`,9:`no`,10:`he`,11:`ja`,12:`ar`,13:`fi`,14:`el`,15:`is`,16:`mt`,17:`tr`,18:`hr`,19:`zh-Hant`,20:`ur`,21:`hi`,22:`th`,23:`ko`,24:`lt`,25:`pl`,26:`hu`,27:`es`,28:`lv`,29:`se`,30:`fo`,31:`fa`,32:`ru`,33:`zh`,34:`nl-BE`,35:`ga`,36:`sq`,37:`ro`,38:`cz`,39:`sk`,40:`si`,41:`yi`,42:`sr`,43:`mk`,44:`bg`,45:`uk`,46:`be`,47:`uz`,48:`kk`,49:`az-Cyrl`,50:`az-Arab`,51:`hy`,52:`ka`,53:`mo`,54:`ky`,55:`tg`,56:`tk`,57:`mn-CN`,58:`mn`,59:`ps`,60:`ks`,61:`ku`,62:`sd`,63:`bo`,64:`ne`,65:`sa`,66:`mr`,67:`bn`,68:`as`,69:`gu`,70:`pa`,71:`or`,72:`ml`,73:`kn`,74:`ta`,75:`te`,76:`si`,77:`my`,78:`km`,79:`lo`,80:`vi`,81:`id`,82:`tl`,83:`ms`,84:`ms-Arab`,85:`am`,86:`ti`,87:`om`,88:`so`,89:`sw`,90:`rw`,91:`rn`,92:`ny`,93:`mg`,94:`eo`,128:`cy`,129:`eu`,130:`ca`,131:`la`,132:`qu`,133:`gn`,134:`ay`,135:`tt`,136:`ug`,137:`dz`,138:`jv`,139:`su`,140:`gl`,141:`af`,142:`br`,143:`iu`,144:`gd`,145:`gv`,146:`ga`,147:`to`,148:`el-polyton`,149:`kl`,150:`az`,151:`nn`},Sp={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Cp={1078:`af`,1052:`sq`,1156:`gsw`,1118:`am`,5121:`ar-DZ`,15361:`ar-BH`,3073:`ar`,2049:`ar-IQ`,11265:`ar-JO`,13313:`ar-KW`,12289:`ar-LB`,4097:`ar-LY`,6145:`ary`,8193:`ar-OM`,16385:`ar-QA`,1025:`ar-SA`,10241:`ar-SY`,7169:`aeb`,14337:`ar-AE`,9217:`ar-YE`,1067:`hy`,1101:`as`,2092:`az-Cyrl`,1068:`az`,1133:`ba`,1069:`eu`,1059:`be`,2117:`bn`,1093:`bn-IN`,8218:`bs-Cyrl`,5146:`bs`,1150:`br`,1026:`bg`,1027:`ca`,3076:`zh-HK`,5124:`zh-MO`,2052:`zh`,4100:`zh-SG`,1028:`zh-TW`,1155:`co`,1050:`hr`,4122:`hr-BA`,1029:`cs`,1030:`da`,1164:`prs`,1125:`dv`,2067:`nl-BE`,1043:`nl`,3081:`en-AU`,10249:`en-BZ`,4105:`en-CA`,9225:`en-029`,16393:`en-IN`,6153:`en-IE`,8201:`en-JM`,17417:`en-MY`,5129:`en-NZ`,13321:`en-PH`,18441:`en-SG`,7177:`en-ZA`,11273:`en-TT`,2057:`en-GB`,1033:`en`,12297:`en-ZW`,1061:`et`,1080:`fo`,1124:`fil`,1035:`fi`,2060:`fr-BE`,3084:`fr-CA`,1036:`fr`,5132:`fr-LU`,6156:`fr-MC`,4108:`fr-CH`,1122:`fy`,1110:`gl`,1079:`ka`,3079:`de-AT`,1031:`de`,5127:`de-LI`,4103:`de-LU`,2055:`de-CH`,1032:`el`,1135:`kl`,1095:`gu`,1128:`ha`,1037:`he`,1081:`hi`,1038:`hu`,1039:`is`,1136:`ig`,1057:`id`,1117:`iu`,2141:`iu-Latn`,2108:`ga`,1076:`xh`,1077:`zu`,1040:`it`,2064:`it-CH`,1041:`ja`,1099:`kn`,1087:`kk`,1107:`km`,1158:`quc`,1159:`rw`,1089:`sw`,1111:`kok`,1042:`ko`,1088:`ky`,1108:`lo`,1062:`lv`,1063:`lt`,2094:`dsb`,1134:`lb`,1071:`mk`,2110:`ms-BN`,1086:`ms`,1100:`ml`,1082:`mt`,1153:`mi`,1146:`arn`,1102:`mr`,1148:`moh`,1104:`mn`,2128:`mn-CN`,1121:`ne`,1044:`nb`,2068:`nn`,1154:`oc`,1096:`or`,1123:`ps`,1045:`pl`,1046:`pt`,2070:`pt-PT`,1094:`pa`,1131:`qu-BO`,2155:`qu-EC`,3179:`qu`,1048:`ro`,1047:`rm`,1049:`ru`,9275:`smn`,4155:`smj-NO`,5179:`smj`,3131:`se-FI`,1083:`se`,2107:`se-SE`,8251:`sms`,6203:`sma-NO`,7227:`sms`,1103:`sa`,7194:`sr-Cyrl-BA`,3098:`sr`,6170:`sr-Latn-BA`,2074:`sr-Latn`,1132:`nso`,1074:`tn`,1115:`si`,1051:`sk`,1060:`sl`,11274:`es-AR`,16394:`es-BO`,13322:`es-CL`,9226:`es-CO`,5130:`es-CR`,7178:`es-DO`,12298:`es-EC`,17418:`es-SV`,4106:`es-GT`,18442:`es-HN`,2058:`es-MX`,19466:`es-NI`,6154:`es-PA`,15370:`es-PY`,10250:`es-PE`,20490:`es-PR`,3082:`es`,1034:`es`,21514:`es-US`,14346:`es-UY`,8202:`es-VE`,2077:`sv-FI`,1053:`sv`,1114:`syr`,1064:`tg`,2143:`tzm`,1097:`ta`,1092:`tt`,1098:`te`,1054:`th`,1105:`bo`,1055:`tr`,1090:`tk`,1152:`ug`,1058:`uk`,1070:`hsb`,1056:`ur`,2115:`uz-Cyrl`,1091:`uz`,1066:`vi`,1106:`cy`,1160:`wo`,1157:`sah`,1144:`ii`,1130:`yo`};function wp(e,t,n){switch(e){case 0:if(t===65535)return`und`;if(n)return n[t];break;case 1:return xp[t];case 3:return Cp[t]}}var Tp=`utf-16`,Ep={0:`macintosh`,1:`x-mac-japanese`,2:`x-mac-chinesetrad`,3:`x-mac-korean`,6:`x-mac-greek`,7:`x-mac-cyrillic`,9:`x-mac-devanagai`,10:`x-mac-gurmukhi`,11:`x-mac-gujarati`,12:`x-mac-oriya`,13:`x-mac-bengali`,14:`x-mac-tamil`,15:`x-mac-telugu`,16:`x-mac-kannada`,17:`x-mac-malayalam`,18:`x-mac-sinhalese`,19:`x-mac-burmese`,20:`x-mac-khmer`,21:`x-mac-thai`,22:`x-mac-lao`,23:`x-mac-georgian`,24:`x-mac-armenian`,25:`x-mac-chinesesimp`,26:`x-mac-tibetan`,27:`x-mac-mongolian`,28:`x-mac-ethiopic`,29:`x-mac-ce`,30:`x-mac-vietnamese`,31:`x-mac-extarabic`},Dp={15:`x-mac-icelandic`,17:`x-mac-turkish`,18:`x-mac-croatian`,24:`x-mac-ce`,25:`x-mac-ce`,26:`x-mac-ce`,27:`x-mac-ce`,28:`x-mac-ce`,30:`x-mac-icelandic`,37:`x-mac-romanian`,38:`x-mac-ce`,39:`x-mac-ce`,40:`x-mac-ce`,143:`x-mac-inuit`,146:`x-mac-gaelic`};function Op(e,t,n){switch(e){case 0:return Tp;case 1:return Dp[n]||Ep[t];case 3:if(t===1||t===10)return Tp}}function kp(e,t,n){for(var r={},i=new Q.Parser(e,t),a=i.parseUShort(),o=i.parseUShort(),s=i.offset+i.parseUShort(),c=0;c<o;c++){var l=i.parseUShort(),u=i.parseUShort(),d=i.parseUShort(),f=i.parseUShort(),p=bp[f]||f,m=i.parseUShort(),h=i.parseUShort(),g=wp(l,d,n),_=Op(l,u,d);if(_!==void 0&&g!==void 0){var v=void 0;if(v=_===Tp?gd.UTF16(e,s+h,m):gd.MACSTRING(e,s+h,m,_),v){var y=r[p];y===void 0&&(y=r[p]={}),y[g]=v}}}return a===1&&i.parseUShort(),r}function Ap(e){var t={};for(var n in e)t[e[n]]=parseInt(n);return t}function jp(e,t,n,r,i,a){return new X.Record(`NameRecord`,[{name:`platformID`,type:`USHORT`,value:e},{name:`encodingID`,type:`USHORT`,value:t},{name:`languageID`,type:`USHORT`,value:n},{name:`nameID`,type:`USHORT`,value:r},{name:`length`,type:`USHORT`,value:i},{name:`offset`,type:`USHORT`,value:a}])}function Mp(e,t){var n=e.length,r=t.length-n+1;loop:for(var i=0;i<r;i++)for(;i<r;i++){for(var a=0;a<n;a++)if(t[i+a]!==e[a])continue loop;return i}return-1}function Np(e,t){var n=Mp(e,t);if(n<0){n=t.length;for(var r=0,i=e.length;r<i;++r)t.push(e[r])}return n}function Pp(e,t){var n,r=[],i={},a=Ap(bp);for(var o in e){var s=a[o];if(s===void 0&&(s=o),n=parseInt(s),isNaN(n))throw Error(`Name table entry "`+o+`" does not exist, see nameTableNames for complete list.`);i[n]=e[o],r.push(n)}for(var c=Ap(xp),l=Ap(Cp),u=[],d=[],f=0;f<r.length;f++){n=r[f];var p=i[n];for(var m in p){var h=p[m],g=1,_=c[m],v=Sp[_],y=Op(g,v,_),b=J.MACSTRING(h,y);b===void 0&&(g=0,_=t.indexOf(m),_<0&&(_=t.length,t.push(m)),v=4,b=J.UTF16(h));var x=Np(b,d);u.push(jp(g,v,_,n,b.length,x));var S=l[m];if(S!==void 0){var C=J.UTF16(h),w=Np(C,d);u.push(jp(3,1,S,n,C.length,w))}}}u.sort(function(e,t){return e.platformID-t.platformID||e.encodingID-t.encodingID||e.languageID-t.languageID||e.nameID-t.nameID});for(var T=new X.Table(`name`,[{name:`format`,type:`USHORT`,value:0},{name:`count`,type:`USHORT`,value:u.length},{name:`stringOffset`,type:`USHORT`,value:6+u.length*12}]),E=0;E<u.length;E++)T.fields.push({name:`record_`+E,type:`RECORD`,value:u[E]});return T.fields.push({name:`strings`,type:`LITERAL`,value:d}),T}var Fp={parse:kp,make:Pp},Ip=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function Lp(e){for(var t=0;t<Ip.length;t+=1){var n=Ip[t];if(e>=n.begin&&e<n.end)return t}return-1}function Rp(e,t){var n={},r=new Q.Parser(e,t);n.version=r.parseUShort(),n.xAvgCharWidth=r.parseShort(),n.usWeightClass=r.parseUShort(),n.usWidthClass=r.parseUShort(),n.fsType=r.parseUShort(),n.ySubscriptXSize=r.parseShort(),n.ySubscriptYSize=r.parseShort(),n.ySubscriptXOffset=r.parseShort(),n.ySubscriptYOffset=r.parseShort(),n.ySuperscriptXSize=r.parseShort(),n.ySuperscriptYSize=r.parseShort(),n.ySuperscriptXOffset=r.parseShort(),n.ySuperscriptYOffset=r.parseShort(),n.yStrikeoutSize=r.parseShort(),n.yStrikeoutPosition=r.parseShort(),n.sFamilyClass=r.parseShort(),n.panose=[];for(var i=0;i<10;i++)n.panose[i]=r.parseByte();return n.ulUnicodeRange1=r.parseULong(),n.ulUnicodeRange2=r.parseULong(),n.ulUnicodeRange3=r.parseULong(),n.ulUnicodeRange4=r.parseULong(),n.achVendID=String.fromCharCode(r.parseByte(),r.parseByte(),r.parseByte(),r.parseByte()),n.fsSelection=r.parseUShort(),n.usFirstCharIndex=r.parseUShort(),n.usLastCharIndex=r.parseUShort(),n.sTypoAscender=r.parseShort(),n.sTypoDescender=r.parseShort(),n.sTypoLineGap=r.parseShort(),n.usWinAscent=r.parseUShort(),n.usWinDescent=r.parseUShort(),n.version>=1&&(n.ulCodePageRange1=r.parseULong(),n.ulCodePageRange2=r.parseULong()),n.version>=2&&(n.sxHeight=r.parseShort(),n.sCapHeight=r.parseShort(),n.usDefaultChar=r.parseUShort(),n.usBreakChar=r.parseUShort(),n.usMaxContent=r.parseUShort()),n}function zp(e){return new X.Table(`OS/2`,[{name:`version`,type:`USHORT`,value:3},{name:`xAvgCharWidth`,type:`SHORT`,value:0},{name:`usWeightClass`,type:`USHORT`,value:0},{name:`usWidthClass`,type:`USHORT`,value:0},{name:`fsType`,type:`USHORT`,value:0},{name:`ySubscriptXSize`,type:`SHORT`,value:650},{name:`ySubscriptYSize`,type:`SHORT`,value:699},{name:`ySubscriptXOffset`,type:`SHORT`,value:0},{name:`ySubscriptYOffset`,type:`SHORT`,value:140},{name:`ySuperscriptXSize`,type:`SHORT`,value:650},{name:`ySuperscriptYSize`,type:`SHORT`,value:699},{name:`ySuperscriptXOffset`,type:`SHORT`,value:0},{name:`ySuperscriptYOffset`,type:`SHORT`,value:479},{name:`yStrikeoutSize`,type:`SHORT`,value:49},{name:`yStrikeoutPosition`,type:`SHORT`,value:258},{name:`sFamilyClass`,type:`SHORT`,value:0},{name:`bFamilyType`,type:`BYTE`,value:0},{name:`bSerifStyle`,type:`BYTE`,value:0},{name:`bWeight`,type:`BYTE`,value:0},{name:`bProportion`,type:`BYTE`,value:0},{name:`bContrast`,type:`BYTE`,value:0},{name:`bStrokeVariation`,type:`BYTE`,value:0},{name:`bArmStyle`,type:`BYTE`,value:0},{name:`bLetterform`,type:`BYTE`,value:0},{name:`bMidline`,type:`BYTE`,value:0},{name:`bXHeight`,type:`BYTE`,value:0},{name:`ulUnicodeRange1`,type:`ULONG`,value:0},{name:`ulUnicodeRange2`,type:`ULONG`,value:0},{name:`ulUnicodeRange3`,type:`ULONG`,value:0},{name:`ulUnicodeRange4`,type:`ULONG`,value:0},{name:`achVendID`,type:`CHARARRAY`,value:`XXXX`},{name:`fsSelection`,type:`USHORT`,value:0},{name:`usFirstCharIndex`,type:`USHORT`,value:0},{name:`usLastCharIndex`,type:`USHORT`,value:0},{name:`sTypoAscender`,type:`SHORT`,value:0},{name:`sTypoDescender`,type:`SHORT`,value:0},{name:`sTypoLineGap`,type:`SHORT`,value:0},{name:`usWinAscent`,type:`USHORT`,value:0},{name:`usWinDescent`,type:`USHORT`,value:0},{name:`ulCodePageRange1`,type:`ULONG`,value:0},{name:`ulCodePageRange2`,type:`ULONG`,value:0},{name:`sxHeight`,type:`SHORT`,value:0},{name:`sCapHeight`,type:`SHORT`,value:0},{name:`usDefaultChar`,type:`USHORT`,value:0},{name:`usBreakChar`,type:`USHORT`,value:0},{name:`usMaxContext`,type:`USHORT`,value:0}],e)}var Bp={parse:Rp,make:zp,unicodeRanges:Ip,getUnicodeRange:Lp};function Vp(e,t){var n={},r=new Q.Parser(e,t);switch(n.version=r.parseVersion(),n.italicAngle=r.parseFixed(),n.underlinePosition=r.parseShort(),n.underlineThickness=r.parseShort(),n.isFixedPitch=r.parseULong(),n.minMemType42=r.parseULong(),n.maxMemType42=r.parseULong(),n.minMemType1=r.parseULong(),n.maxMemType1=r.parseULong(),n.version){case 1:n.names=nf.slice();break;case 2:n.numberOfGlyphs=r.parseUShort(),n.glyphNameIndex=Array(n.numberOfGlyphs);for(var i=0;i<n.numberOfGlyphs;i++)n.glyphNameIndex[i]=r.parseUShort();n.names=[];for(var a=0;a<n.numberOfGlyphs;a++)if(n.glyphNameIndex[a]>=nf.length){var o=r.parseChar();n.names.push(r.parseString(o))}break;case 2.5:n.numberOfGlyphs=r.parseUShort(),n.offset=Array(n.numberOfGlyphs);for(var s=0;s<n.numberOfGlyphs;s++)n.offset[s]=r.parseChar()}return n}function Hp(){return new X.Table(`post`,[{name:`version`,type:`FIXED`,value:196608},{name:`italicAngle`,type:`FIXED`,value:0},{name:`underlinePosition`,type:`FWORD`,value:0},{name:`underlineThickness`,type:`FWORD`,value:0},{name:`isFixedPitch`,type:`ULONG`,value:0},{name:`minMemType42`,type:`ULONG`,value:0},{name:`maxMemType42`,type:`ULONG`,value:0},{name:`minMemType1`,type:`ULONG`,value:0},{name:`maxMemType1`,type:`ULONG`,value:0}])}var Up={parse:Vp,make:Hp},Wp=Array(9);Wp[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(Z.coverage),deltaGlyphId:this.parseUShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(Z.coverage),substitute:this.parseOffset16List()};q.assert(!1,`0x`+e.toString(16)+`: lookup type 1 format must be 1 or 2.`)},Wp[2]=function(){var e=this.parseUShort();return q.argument(e===1,`GSUB Multiple Substitution Subtable identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(Z.coverage),sequences:this.parseListOfLists()}},Wp[3]=function(){var e=this.parseUShort();return q.argument(e===1,`GSUB Alternate Substitution Subtable identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(Z.coverage),alternateSets:this.parseListOfLists()}},Wp[4]=function(){var e=this.parseUShort();return q.argument(e===1,`GSUB ligature table identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(Z.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var Gp={sequenceIndex:Z.uShort,lookupListIndex:Z.uShort};Wp[5]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(Z.coverage),ruleSets:this.parseListOfLists(function(){var e=this.parseUShort(),t=this.parseUShort();return{input:this.parseUShortList(e-1),lookupRecords:this.parseRecordList(t,Gp)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(Z.coverage),classDef:this.parsePointer(Z.classDef),classSets:this.parseListOfLists(function(){var e=this.parseUShort(),t=this.parseUShort();return{classes:this.parseUShortList(e-1),lookupRecords:this.parseRecordList(t,Gp)}})};if(t===3){var n=this.parseUShort(),r=this.parseUShort();return{substFormat:t,coverages:this.parseList(n,Z.pointer(Z.coverage)),lookupRecords:this.parseRecordList(r,Gp)}}q.assert(!1,`0x`+e.toString(16)+`: lookup type 5 format must be 1, 2 or 3.`)},Wp[6]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(Z.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Gp)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(Z.coverage),backtrackClassDef:this.parsePointer(Z.classDef),inputClassDef:this.parsePointer(Z.classDef),lookaheadClassDef:this.parsePointer(Z.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Gp)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(Z.pointer(Z.coverage)),inputCoverage:this.parseList(Z.pointer(Z.coverage)),lookaheadCoverage:this.parseList(Z.pointer(Z.coverage)),lookupRecords:this.parseRecordList(Gp)};q.assert(!1,`0x`+e.toString(16)+`: lookup type 6 format must be 1, 2 or 3.`)},Wp[7]=function(){var e=this.parseUShort();q.argument(e===1,`GSUB Extension Substitution subtable identifier-format must be 1`);var t=this.parseUShort(),n=new Z(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:Wp[t].call(n)}},Wp[8]=function(){var e=this.parseUShort();return q.argument(e===1,`GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(Z.coverage),backtrackCoverage:this.parseList(Z.pointer(Z.coverage)),lookaheadCoverage:this.parseList(Z.pointer(Z.coverage)),substitutes:this.parseUShortList()}};function Kp(e,t){t||=0;var n=new Z(e,t),r=n.parseVersion(1);return q.argument(r===1||r===1.1,`Unsupported GSUB table version.`),r===1?{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(Wp)}:{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(Wp),variations:n.parseFeatureVariationsList()}}var qp=Array(9);qp[1]=function(e){return e.substFormat===1?new X.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new X.Coverage(e.coverage)},{name:`deltaGlyphID`,type:`USHORT`,value:e.deltaGlyphId}]):new X.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:2},{name:`coverage`,type:`TABLE`,value:new X.Coverage(e.coverage)}].concat(X.ushortList(`substitute`,e.substitute)))},qp[2]=function(e){return q.assert(e.substFormat===1,`Lookup type 2 substFormat must be 1.`),new X.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new X.Coverage(e.coverage)}].concat(X.tableList(`seqSet`,e.sequences,function(e){return new X.Table(`sequenceSetTable`,X.ushortList(`sequence`,e))})))},qp[3]=function(e){return q.assert(e.substFormat===1,`Lookup type 3 substFormat must be 1.`),new X.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new X.Coverage(e.coverage)}].concat(X.tableList(`altSet`,e.alternateSets,function(e){return new X.Table(`alternateSetTable`,X.ushortList(`alternate`,e))})))},qp[4]=function(e){return q.assert(e.substFormat===1,`Lookup type 4 substFormat must be 1.`),new X.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new X.Coverage(e.coverage)}].concat(X.tableList(`ligSet`,e.ligatureSets,function(e){return new X.Table(`ligatureSetTable`,X.tableList(`ligature`,e,function(e){return new X.Table(`ligatureTable`,[{name:`ligGlyph`,type:`USHORT`,value:e.ligGlyph}].concat(X.ushortList(`component`,e.components,e.components.length+1)))}))})))},qp[6]=function(e){if(e.substFormat===1)return new X.Table(`chainContextTable`,[{name:`substFormat`,type:`USHORT`,value:e.substFormat},{name:`coverage`,type:`TABLE`,value:new X.Coverage(e.coverage)}].concat(X.tableList(`chainRuleSet`,e.chainRuleSets,function(e){return new X.Table(`chainRuleSetTable`,X.tableList(`chainRule`,e,function(e){var t=X.ushortList(`backtrackGlyph`,e.backtrack,e.backtrack.length).concat(X.ushortList(`inputGlyph`,e.input,e.input.length+1)).concat(X.ushortList(`lookaheadGlyph`,e.lookahead,e.lookahead.length)).concat(X.ushortList(`substitution`,[],e.lookupRecords.length));return e.lookupRecords.forEach(function(e,n){t=t.concat({name:`sequenceIndex`+n,type:`USHORT`,value:e.sequenceIndex}).concat({name:`lookupListIndex`+n,type:`USHORT`,value:e.lookupListIndex})}),new X.Table(`chainRuleTable`,t)}))})));if(e.substFormat===2)q.assert(!1,`lookup type 6 format 2 is not yet supported.`);else if(e.substFormat===3){var t=[{name:`substFormat`,type:`USHORT`,value:e.substFormat}];return t.push({name:`backtrackGlyphCount`,type:`USHORT`,value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(e,n){t.push({name:`backtrackCoverage`+n,type:`TABLE`,value:new X.Coverage(e)})}),t.push({name:`inputGlyphCount`,type:`USHORT`,value:e.inputCoverage.length}),e.inputCoverage.forEach(function(e,n){t.push({name:`inputCoverage`+n,type:`TABLE`,value:new X.Coverage(e)})}),t.push({name:`lookaheadGlyphCount`,type:`USHORT`,value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(e,n){t.push({name:`lookaheadCoverage`+n,type:`TABLE`,value:new X.Coverage(e)})}),t.push({name:`substitutionCount`,type:`USHORT`,value:e.lookupRecords.length}),e.lookupRecords.forEach(function(e,n){t=t.concat({name:`sequenceIndex`+n,type:`USHORT`,value:e.sequenceIndex}).concat({name:`lookupListIndex`+n,type:`USHORT`,value:e.lookupListIndex})}),new X.Table(`chainContextTable`,t)}q.assert(!1,`lookup type 6 format must be 1, 2 or 3.`)};function Jp(e){return new X.Table(`GSUB`,[{name:`version`,type:`ULONG`,value:65536},{name:`scripts`,type:`TABLE`,value:new X.ScriptList(e.scripts)},{name:`features`,type:`TABLE`,value:new X.FeatureList(e.features)},{name:`lookups`,type:`TABLE`,value:new X.LookupList(e.lookups,qp)}])}var Yp={parse:Kp,make:Jp};function Xp(e,t){var n=new Q.Parser(e,t),r=n.parseULong();q.argument(r===1,`Unsupported META table version.`),n.parseULong(),n.parseULong();for(var i=n.parseULong(),a={},o=0;o<i;o++){var s=n.parseTag(),c=n.parseULong(),l=n.parseULong();a[s]=gd.UTF8(e,t+c,l)}return a}function Zp(e){var t=Object.keys(e).length,n=``,r=16+t*12,i=new X.Table(`meta`,[{name:`version`,type:`ULONG`,value:1},{name:`flags`,type:`ULONG`,value:0},{name:`offset`,type:`ULONG`,value:r},{name:`numTags`,type:`ULONG`,value:t}]);for(var a in e){var o=n.length;n+=e[a],i.fields.push({name:`tag `+a,type:`TAG`,value:a}),i.fields.push({name:`offset `+a,type:`ULONG`,value:r+o}),i.fields.push({name:`length `+a,type:`ULONG`,value:e[a].length})}return i.fields.push({name:`stringPool`,type:`CHARARRAY`,value:n}),i}var Qp={parse:Xp,make:Zp};function $p(e,t){var n=new Z(e,t),r=n.parseUShort();q.argument(r===0,`Only COLRv0 supported.`);var i=n.parseUShort(),a=n.parseOffset32(),o=n.parseOffset32(),s=n.parseUShort();n.relativeOffset=a;var c=n.parseRecordList(i,{glyphID:Z.uShort,firstLayerIndex:Z.uShort,numLayers:Z.uShort});return n.relativeOffset=o,{version:r,baseGlyphRecords:c,layerRecords:n.parseRecordList(s,{glyphID:Z.uShort,paletteIndex:Z.uShort})}}function em(e){var t=e.version;t===void 0&&(t=0);var n=e.baseGlyphRecords;n===void 0&&(n=[]);var r=e.layerRecords;r===void 0&&(r=[]),q.argument(t===0,`Only COLRv0 supported.`);var i=14,a=i+n.length*6;return new X.Table(`COLR`,[{name:`version`,type:`USHORT`,value:t},{name:`numBaseGlyphRecords`,type:`USHORT`,value:n.length},{name:`baseGlyphRecordsOffset`,type:`ULONG`,value:i},{name:`layerRecordsOffset`,type:`ULONG`,value:a},{name:`numLayerRecords`,type:`USHORT`,value:r.length}].concat(n.map(function(e,t){return[{name:`glyphID_`+t,type:`USHORT`,value:e.glyphID},{name:`firstLayerIndex_`+t,type:`USHORT`,value:e.firstLayerIndex},{name:`numLayers_`+t,type:`USHORT`,value:e.numLayers}]}).flat(),r.map(function(e,t){return[{name:`LayerGlyphID_`+t,type:`USHORT`,value:e.glyphID},{name:`paletteIndex_`+t,type:`USHORT`,value:e.paletteIndex}]}).flat()))}var tm={parse:$p,make:em};function nm(e,t){var n=new Z(e,t),r=n.parseShort(),i=n.parseShort(),a=n.parseShort(),o=n.parseShort(),s=n.parseOffset32(),c=n.parseUShortList(a);return n.relativeOffset=s,{version:r,numPaletteEntries:i,colorRecords:n.parseULongList(o),colorRecordIndices:c}}function rm(e){var t=e.version;t===void 0&&(t=0);var n=e.numPaletteEntries;n===void 0&&(n=0);var r=e.colorRecords;r===void 0&&(r=[]);var i=e.colorRecordIndices;return i===void 0&&(i=[0]),q.argument(t===0,`Only CPALv0 are supported.`),q.argument(r.length,`No colorRecords given.`),q.argument(i.length,`No colorRecordIndices given.`),q.argument(!n&&i.length==1,`Can't infer numPaletteEntries on multiple colorRecordIndices`),new X.Table(`CPAL`,[{name:`version`,type:`USHORT`,value:t},{name:`numPaletteEntries`,type:`USHORT`,value:n||r.length},{name:`numPalettes`,type:`USHORT`,value:i.length},{name:`numColorRecords`,type:`USHORT`,value:r.length},{name:`colorRecordsArrayOffset`,type:`ULONG`,value:12+2*i.length}].concat(i.map(function(e,t){return{name:`colorRecordIndices_`+t,type:`USHORT`,value:e}}),r.map(function(e,t){return{name:`colorRecords_`+t,type:`ULONG`,value:e}})))}var im={parse:nm,make:rm};function am(e){return Math.log(e)/Math.log(2)|0}function om(e){for(;e.length%4!=0;)e.push(0);for(var t=0,n=0;n<e.length;n+=4)t+=(e[n]<<24)+(e[n+1]<<16)+(e[n+2]<<8)+e[n+3];return t%=2**32,t}function sm(e,t,n,r){return new X.Record(`Table Record`,[{name:`tag`,type:`TAG`,value:e===void 0?``:e},{name:`checkSum`,type:`ULONG`,value:t===void 0?0:t},{name:`offset`,type:`ULONG`,value:n===void 0?0:n},{name:`length`,type:`ULONG`,value:r===void 0?0:r}])}function cm(e){var t=new X.Table(`sfnt`,[{name:`version`,type:`TAG`,value:`OTTO`},{name:`numTables`,type:`USHORT`,value:0},{name:`searchRange`,type:`USHORT`,value:0},{name:`entrySelector`,type:`USHORT`,value:0},{name:`rangeShift`,type:`USHORT`,value:0}]);t.tables=e,t.numTables=e.length;var n=2**am(t.numTables);t.searchRange=16*n,t.entrySelector=am(n),t.rangeShift=t.numTables*16-t.searchRange;for(var r=[],i=[],a=t.sizeOf()+sm().sizeOf()*t.numTables;a%4!=0;)a+=1,i.push({name:`padding`,type:`BYTE`,value:0});for(var o=0;o<e.length;o+=1){var s=e[o];q.argument(s.tableName.length===4,`Table name`+s.tableName+` is invalid.`);var c=s.sizeOf(),l=sm(s.tableName,om(s.encode()),a,c);for(r.push({name:l.tag+` Table Record`,type:`RECORD`,value:l}),i.push({name:s.tableName+` table`,type:`RECORD`,value:s}),a+=c,q.argument(!isNaN(a),`Something went wrong calculating the offset.`);a%4!=0;)a+=1,i.push({name:`padding`,type:`BYTE`,value:0})}return r.sort(function(e,t){return e.value.tag>t.value.tag?1:-1}),t.fields=t.fields.concat(r),t.fields=t.fields.concat(i),t}function lm(e,t,n){for(var r=0;r<t.length;r+=1){var i=e.charToGlyphIndex(t[r]);if(i>0)return e.glyphs.get(i).getMetrics()}return n}function um(e){for(var t=0,n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function dm(e){for(var t=[],n=[],r=[],i=[],a=[],o=[],s=[],c,l=0,u=0,d=0,f=0,p=0,m=0;m<e.glyphs.length;m+=1){var h=e.glyphs.get(m),g=h.unicode|0;if(isNaN(h.advanceWidth))throw Error(`Glyph `+h.name+` (`+m+`): advanceWidth is not a number.`);(c>g||c===void 0)&&g>0&&(c=g),l<g&&(l=g);var _=Bp.getUnicodeRange(g);if(_<32)u|=1<<_;else if(_<64)d|=1<<_-32;else if(_<96)f|=1<<_-64;else if(_<123)p|=1<<_-96;else throw Error(`Unicode ranges bits > 123 are reserved for internal usage`);if(h.name!==`.notdef`){var v=h.getMetrics();t.push(v.xMin),n.push(v.yMin),r.push(v.xMax),i.push(v.yMax),o.push(v.leftSideBearing),s.push(v.rightSideBearing),a.push(h.advanceWidth)}}var y={xMin:Math.min.apply(null,t),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,r),yMax:Math.max.apply(null,i),advanceWidthMax:Math.max.apply(null,a),advanceWidthAvg:um(a),minLeftSideBearing:Math.min.apply(null,o),maxLeftSideBearing:Math.max.apply(null,o),minRightSideBearing:Math.min.apply(null,s)};y.ascender=e.ascender,y.descender=e.descender;var b=ap.make({flags:3,unitsPerEm:e.unitsPerEm,xMin:y.xMin,yMin:y.yMin,xMax:y.xMax,yMax:y.yMax,lowestRecPPEM:3,createdTimestamp:e.createdTimestamp}),x=cp.make({ascender:y.ascender,descender:y.descender,advanceWidthMax:y.advanceWidthMax,minLeftSideBearing:y.minLeftSideBearing,minRightSideBearing:y.minRightSideBearing,xMaxExtent:y.maxLeftSideBearing+(y.xMax-y.xMin),numberOfHMetrics:e.glyphs.length}),S=yp.make(e.glyphs.length),C=Bp.make(Object.assign({xAvgCharWidth:Math.round(y.advanceWidthAvg),usFirstCharIndex:c,usLastCharIndex:l,ulUnicodeRange1:u,ulUnicodeRange2:d,ulUnicodeRange3:f,ulUnicodeRange4:p,sTypoAscender:y.ascender,sTypoDescender:y.descender,sTypoLineGap:0,usWinAscent:y.yMax,usWinDescent:Math.abs(y.yMin),ulCodePageRange1:1,sxHeight:lm(e,`xyvw`,{yMax:Math.round(y.ascender/2)}).yMax,sCapHeight:lm(e,`HIKLEFJMNTZBDPRAGOQSUVWXY`,y).yMax,usDefaultChar:e.hasChar(` `)?32:0,usBreakChar:e.hasChar(` `)?32:0},e.tables.os2)),w=pp.make(e.glyphs),T=Qd.make(e.glyphs),E=e.getEnglishName(`fontFamily`),D=e.getEnglishName(`fontSubfamily`),O=E+` `+D,k=e.getEnglishName(`postScriptName`);k||=E.replace(/\s/g,``)+`-`+D;var A={};for(var j in e.names)A[j]=e.names[j];A.uniqueID||={en:e.getEnglishName(`manufacturer`)+`:`+O},A.postScriptName||={en:k},A.preferredFamily||=e.names.fontFamily,A.preferredSubfamily||=e.names.fontSubfamily;var M=[],N=Fp.make(A,M),P=M.length>0?gp.make(M):void 0,ee=Up.make(),te=np.make(e.glyphs,{version:e.getEnglishName(`version`),fullName:O,familyName:E,weightName:D,postScriptName:k,unitsPerEm:e.unitsPerEm,fontBBox:[0,y.yMin,y.ascender,y.advanceWidthMax]}),ne=e.metas&&Object.keys(e.metas).length>0?Qp.make(e.metas):void 0,re=[b,x,S,C,N,T,ee,te,w];P&&re.push(P),e.tables.gsub&&re.push(Yp.make(e.tables.gsub)),e.tables.cpal&&re.push(im.make(e.tables.cpal)),e.tables.colr&&re.push(tm.make(e.tables.colr)),ne&&re.push(ne);for(var ie=cm(re),ae=om(ie.encode()),oe=ie.fields,se=!1,ce=0;ce<oe.length;ce+=1)if(oe[ce].name===`head table`){oe[ce].value.checkSumAdjustment=2981146554-ae,se=!0;break}if(!se)throw Error(`Could not find head table with checkSum to adjust.`);return ie}var fm={make:cm,fontToTable:dm,computeCheckSum:om};function pm(e,t){for(var n=0,r=e.length-1;n<=r;){var i=n+r>>>1,a=e[i].tag;if(a===t)return i;a<t?n=i+1:r=i-1}return-n-1}function mm(e,t){for(var n=0,r=e.length-1;n<=r;){var i=n+r>>>1,a=e[i];if(a===t)return i;a<t?n=i+1:r=i-1}return-n-1}function hm(e,t){for(var n,r=0,i=e.length-1;r<=i;){var a=r+i>>>1;n=e[a];var o=n.start;if(o===t)return n;o<t?r=a+1:i=a-1}if(r>0)return n=e[r-1],t>n.end?0:n}function gm(e,t){this.font=e,this.tableName=t}gm.prototype={searchTag:pm,binSearch:mm,getTable:function(e){var t=this.font.tables[this.tableName];return!t&&e&&(t=this.font.tables[this.tableName]=this.createDefaultTable()),t},getScriptNames:function(){var e=this.getTable();return e?e.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var e=this.getTable();if(e){for(var t=!1,n=0;n<e.scripts.length;n++){var r=e.scripts[n].tag;if(r===`DFLT`)return r;r===`latn`&&(t=!0)}if(t)return`latn`}},getScriptTable:function(e,t){var n=this.getTable(t);if(n){e||=`DFLT`;var r=n.scripts,i=pm(n.scripts,e);if(i>=0)return r[i].script;if(t){var a={tag:e,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return r.splice(-1-i,0,a),a.script}}},getLangSysTable:function(e,t,n){var r=this.getScriptTable(e,n);if(r){if(!t||t===`dflt`||t===`DFLT`)return r.defaultLangSys;var i=pm(r.langSysRecords,t);if(i>=0)return r.langSysRecords[i].langSys;if(n){var a={tag:t,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return r.langSysRecords.splice(-1-i,0,a),a.langSys}}},getFeatureTable:function(e,t,n,r){var i=this.getLangSysTable(e,t,r);if(i){for(var a,o=i.featureIndexes,s=this.font.tables[this.tableName].features,c=0;c<o.length;c++)if(a=s[o[c]],a.tag===n)return a.feature;if(r){var l=s.length;return q.assert(l===0||n>=s[l-1].tag,`Features must be added in alphabetical order.`),a={tag:n,feature:{params:0,lookupListIndexes:[]}},s.push(a),o.push(l),a.feature}}},getLookupTables:function(e,t,n,r,i){var a=this.getFeatureTable(e,t,n,i),o=[];if(a){for(var s,c=a.lookupListIndexes,l=this.font.tables[this.tableName].lookups,u=0;u<c.length;u++)s=l[c[u]],s.lookupType===r&&o.push(s);if(o.length===0&&i){s={lookupType:r,lookupFlag:0,subtables:[],markFilteringSet:void 0};var d=l.length;return l.push(s),c.push(d),[s]}}return o},getGlyphClass:function(e,t){switch(e.format){case 1:return e.startGlyph<=t&&t<e.startGlyph+e.classes.length?e.classes[t-e.startGlyph]:0;case 2:var n=hm(e.ranges,t);return n?n.classId:0}},getCoverageIndex:function(e,t){switch(e.format){case 1:var n=mm(e.glyphs,t);return n>=0?n:-1;case 2:var r=hm(e.ranges,t);return r?r.index+t-r.start:-1}},expandCoverage:function(e){if(e.format===1)return e.glyphs;for(var t=[],n=e.ranges,r=0;r<n.length;r++)for(var i=n[r],a=i.start,o=i.end,s=a;s<=o;s++)t.push(s);return t}};function _m(e){gm.call(this,e,`gpos`)}_m.prototype=gm.prototype,_m.prototype.init=function(){var e=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(e)},_m.prototype.getKerningValue=function(e,t,n){for(var r=0;r<e.length;r++)for(var i=e[r].subtables,a=0;a<i.length;a++){var o=i[a],s=this.getCoverageIndex(o.coverage,t);if(!(s<0))switch(o.posFormat){case 1:for(var c=o.pairSets[s],l=0;l<c.length;l++){var u=c[l];if(u.secondGlyph===n)return u.value1&&u.value1.xAdvance||0}break;case 2:var d=this.getGlyphClass(o.classDef1,t),f=this.getGlyphClass(o.classDef2,n),p=o.classRecords[d][f];return p.value1&&p.value1.xAdvance||0}}return 0},_m.prototype.getKerningTables=function(e,t){if(this.font.tables.gpos)return this.getLookupTables(e,t,`kern`,2)};function vm(e){gm.call(this,e,`gsub`)}function ym(e,t){var n=e.length;if(n!==t.length)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function bm(e,t,n){for(var r=e.subtables,i=0;i<r.length;i++){var a=r[i];if(a.substFormat===t)return a}if(n)return r.push(n),n}vm.prototype=gm.prototype,vm.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:`DFLT`,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}},vm.prototype.getSingle=function(e,t,n){for(var r=[],i=this.getLookupTables(t,n,e,1),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++){var c=o[s],l=this.expandCoverage(c.coverage),u=void 0;if(c.substFormat===1){var d=c.deltaGlyphId;for(u=0;u<l.length;u++){var f=l[u];r.push({sub:f,by:f+d})}}else{var p=c.substitute;for(u=0;u<l.length;u++)r.push({sub:l[u],by:p[u]})}}return r},vm.prototype.getMultiple=function(e,t,n){for(var r=[],i=this.getLookupTables(t,n,e,2),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++){var c=o[s],l=this.expandCoverage(c.coverage),u=void 0;for(u=0;u<l.length;u++){var d=l[u],f=c.sequences[u];r.push({sub:d,by:f})}}return r},vm.prototype.getAlternates=function(e,t,n){for(var r=[],i=this.getLookupTables(t,n,e,3),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++)for(var c=o[s],l=this.expandCoverage(c.coverage),u=c.alternateSets,d=0;d<l.length;d++)r.push({sub:l[d],by:u[d]});return r},vm.prototype.getLigatures=function(e,t,n){for(var r=[],i=this.getLookupTables(t,n,e,4),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++)for(var c=o[s],l=this.expandCoverage(c.coverage),u=c.ligatureSets,d=0;d<l.length;d++)for(var f=l[d],p=u[d],m=0;m<p.length;m++){var h=p[m];r.push({sub:[f].concat(h.components),by:h.ligGlyph})}return r},vm.prototype.addSingle=function(e,t,n,r){var i=this.getLookupTables(n,r,e,1,!0)[0],a=bm(i,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});q.assert(a.coverage.format===1,`Single: unable to modify coverage table format `+a.coverage.format);var o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.substitute.splice(s,0,0)),a.substitute[s]=t.by},vm.prototype.addMultiple=function(e,t,n,r){q.assert(t.by instanceof Array&&t.by.length>1,`Multiple: "by" must be an array of two or more ids`);var i=this.getLookupTables(n,r,e,2,!0)[0],a=bm(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});q.assert(a.coverage.format===1,`Multiple: unable to modify coverage table format `+a.coverage.format);var o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.sequences.splice(s,0,0)),a.sequences[s]=t.by},vm.prototype.addAlternate=function(e,t,n,r){var i=this.getLookupTables(n,r,e,3,!0)[0],a=bm(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});q.assert(a.coverage.format===1,`Alternate: unable to modify coverage table format `+a.coverage.format);var o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.alternateSets.splice(s,0,0)),a.alternateSets[s]=t.by},vm.prototype.addLigature=function(e,t,n,r){var i=this.getLookupTables(n,r,e,4,!0)[0],a=i.subtables[0];a||(a={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},i.subtables[0]=a),q.assert(a.coverage.format===1,`Ligature: unable to modify coverage table format `+a.coverage.format);var o=t.sub[0],s=t.sub.slice(1),c={ligGlyph:t.by,components:s},l=this.binSearch(a.coverage.glyphs,o);if(l>=0){for(var u=a.ligatureSets[l],d=0;d<u.length;d++)if(ym(u[d].components,s))return;u.push(c)}else l=-1-l,a.coverage.glyphs.splice(l,0,o),a.ligatureSets.splice(l,0,[c])},vm.prototype.getFeature=function(e,t,n){if(/ss\d\d/.test(e))return this.getSingle(e,t,n);switch(e){case`aalt`:case`salt`:return this.getSingle(e,t,n).concat(this.getAlternates(e,t,n));case`dlig`:case`liga`:case`rlig`:return this.getLigatures(e,t,n);case`ccmp`:return this.getMultiple(e,t,n).concat(this.getLigatures(e,t,n));case`stch`:return this.getMultiple(e,t,n)}},vm.prototype.add=function(e,t,n,r){if(/ss\d\d/.test(e))return this.addSingle(e,t,n,r);switch(e){case`aalt`:case`salt`:return typeof t.by==`number`?this.addSingle(e,t,n,r):this.addAlternate(e,t,n,r);case`dlig`:case`liga`:case`rlig`:return this.addLigature(e,t,n,r);case`ccmp`:return t.by instanceof Array?this.addMultiple(e,t,n,r):this.addLigature(e,t,n,r)}};function xm(e,t){if(!e)throw t}function Sm(e,t,n,r,i){var a;return(t&r)>0?(a=e.parseByte(),(t&i)===0&&(a=-a),a=n+a):a=(t&i)>0?n:n+e.parseShort(),a}function Cm(e,t,n){var r=new Q.Parser(t,n);e.numberOfContours=r.parseShort(),e._xMin=r.parseShort(),e._yMin=r.parseShort(),e._xMax=r.parseShort(),e._yMax=r.parseShort();var i,a;if(e.numberOfContours>0){for(var o=e.endPointIndices=[],s=0;s<e.numberOfContours;s+=1)o.push(r.parseUShort());e.instructionLength=r.parseUShort(),e.instructions=[];for(var c=0;c<e.instructionLength;c+=1)e.instructions.push(r.parseByte());var l=o[o.length-1]+1;i=[];for(var u=0;u<l;u+=1)if(a=r.parseByte(),i.push(a),(a&8)>0)for(var d=r.parseByte(),f=0;f<d;f+=1)i.push(a),u+=1;if(q.argument(i.length===l,`Bad flags.`),o.length>0){var p=[],m;if(l>0){for(var h=0;h<l;h+=1)a=i[h],m={},m.onCurve=!!(a&1),m.lastPointOfContour=o.indexOf(h)>=0,p.push(m);for(var g=0,_=0;_<l;_+=1)a=i[_],m=p[_],m.x=Sm(r,a,g,2,16),g=m.x;for(var v=0,y=0;y<l;y+=1)a=i[y],m=p[y],m.y=Sm(r,a,v,4,32),v=m.y}e.points=p}else e.points=[]}else if(e.numberOfContours===0)e.points=[];else{e.isComposite=!0,e.points=[],e.components=[];for(var b=!0;b;){i=r.parseUShort();var x={glyphIndex:r.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(i&1)>0?(i&2)>0?(x.dx=r.parseShort(),x.dy=r.parseShort()):x.matchedPoints=[r.parseUShort(),r.parseUShort()]:(i&2)>0?(x.dx=r.parseChar(),x.dy=r.parseChar()):x.matchedPoints=[r.parseByte(),r.parseByte()],(i&8)>0?x.xScale=x.yScale=r.parseF2Dot14():(i&64)>0?(x.xScale=r.parseF2Dot14(),x.yScale=r.parseF2Dot14()):(i&128)>0&&(x.xScale=r.parseF2Dot14(),x.scale01=r.parseF2Dot14(),x.scale10=r.parseF2Dot14(),x.yScale=r.parseF2Dot14()),e.components.push(x),b=!!(i&32)}if(i&256){e.instructionLength=r.parseUShort(),e.instructions=[];for(var S=0;S<e.instructionLength;S+=1)e.instructions.push(r.parseByte())}}}function wm(e,t){for(var n=[],r=0;r<e.length;r+=1){var i=e[r],a={x:t.xScale*i.x+t.scale01*i.y+t.dx,y:t.scale10*i.x+t.yScale*i.y+t.dy,onCurve:i.onCurve,lastPointOfContour:i.lastPointOfContour};n.push(a)}return n}function Tm(e){for(var t=[],n=[],r=0;r<e.length;r+=1){var i=e[r];n.push(i),i.lastPointOfContour&&(t.push(n),n=[])}return q.argument(n.length===0,`There are still points left in the current contour.`),t}function Em(e){var t=new dd;if(!e)return t;for(var n=Tm(e),r=0;r<n.length;++r){var i=n[r],a=null,o=i[i.length-1],s=i[0];if(o.onCurve)t.moveTo(o.x,o.y);else if(s.onCurve)t.moveTo(s.x,s.y);else{var c={x:(o.x+s.x)*.5,y:(o.y+s.y)*.5};t.moveTo(c.x,c.y)}for(var l=0;l<i.length;++l)if(a=o,o=s,s=i[(l+1)%i.length],o.onCurve)t.lineTo(o.x,o.y);else{var u=s;a.onCurve||((o.x+a.x)*.5,(o.y+a.y)*.5),s.onCurve||(u={x:(o.x+s.x)*.5,y:(o.y+s.y)*.5}),t.quadraticCurveTo(o.x,o.y,u.x,u.y)}t.closePath()}return t}function Dm(e,t){if(t.isComposite)for(var n=0;n<t.components.length;n+=1){var r=t.components[n],i=e.get(r.glyphIndex);if(i.getPath(),i.points){var a=void 0;if(r.matchedPoints===void 0)a=wm(i.points,r);else{if(r.matchedPoints[0]>t.points.length-1||r.matchedPoints[1]>i.points.length-1)throw Error(`Matched points out of range in `+t.name);var o=t.points[r.matchedPoints[0]],s=i.points[r.matchedPoints[1]],c={xScale:r.xScale,scale01:r.scale01,scale10:r.scale10,yScale:r.yScale,dx:0,dy:0};s=wm([s],c)[0],c.dx=o.x-s.x,c.dy=o.y-s.y,a=wm(i.points,c)}t.points=t.points.concat(a)}}return Em(t.points)}function Om(e,t,n,r){for(var i=new bf.GlyphSet(r),a=0;a<n.length-1;a+=1){var o=n[a];o===n[a+1]?i.push(a,bf.glyphLoader(r,a)):i.push(a,bf.ttfGlyphLoader(r,a,Cm,e,t+o,Dm))}return i}function km(e,t,n,r){var i=new bf.GlyphSet(r);return r._push=function(a){var o=n[a];o===n[a+1]?i.push(a,bf.glyphLoader(r,a)):i.push(a,bf.ttfGlyphLoader(r,a,Cm,e,t+o,Dm))},i}function Am(e,t,n,r,i){return i.lowMemory?km(e,t,n,r):Om(e,t,n,r)}var jm={getPath:Em,parse:Am},Mm,Nm,Pm,Fm;function Im(e){this.font=e,this.getCommands=function(e){return jm.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function Lm(e){return e}function Rm(e){return Math.sign(e)*Math.round(Math.abs(e))}function zm(e){return Math.sign(e)*Math.round(Math.abs(e*2))/2}function Bm(e){return Math.sign(e)*(Math.round(Math.abs(e)+.5)-.5)}function Vm(e){return Math.sign(e)*Math.ceil(Math.abs(e))}function Hm(e){return Math.sign(e)*Math.floor(Math.abs(e))}var Um=function(e){var t=this.srPeriod,n=this.srPhase,r=this.srThreshold,i=1;return e<0&&(e=-e,i=-1),e+=r-n,e=Math.trunc(e/t)*t,e+=n,e<0?n*i:e*i},Wm={x:1,y:0,axis:`x`,distance:function(e,t,n,r){return(n?e.xo:e.x)-(r?t.xo:t.x)},interpolate:function(e,t,n,r){var i,a,o,s,c,l,u;if(!r||r===this){if(i=e.xo-t.xo,a=e.xo-n.xo,c=t.x-t.xo,l=n.x-n.xo,o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){e.x=e.xo+(c+l)/2;return}e.x=e.xo+(c*s+l*o)/u}else i=r.distance(e,t,!0,!0),a=r.distance(e,n,!0,!0),c=r.distance(t,t,!1,!0),l=r.distance(n,n,!1,!0),o=Math.abs(i),s=Math.abs(a),u=o+s,u===0?Wm.setRelative(e,e,(c+l)/2,r,!0):Wm.setRelative(e,e,(c*s+l*o)/u,r,!0)},normalSlope:-1/0,setRelative:function(e,t,n,r,i){if(!r||r===this)e.x=(i?t.xo:t.x)+n;else{var a=i?t.xo:t.x,o=i?t.yo:t.y,s=a+n*r.x,c=o+n*r.y;e.x=s+(e.y-c)/r.normalSlope}},slope:0,touch:function(e){e.xTouched=!0},touched:function(e){return e.xTouched},untouch:function(e){e.xTouched=!1}},Gm={x:0,y:1,axis:`y`,distance:function(e,t,n,r){return(n?e.yo:e.y)-(r?t.yo:t.y)},interpolate:function(e,t,n,r){var i,a,o,s,c,l,u;if(!r||r===this){if(i=e.yo-t.yo,a=e.yo-n.yo,c=t.y-t.yo,l=n.y-n.yo,o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){e.y=e.yo+(c+l)/2;return}e.y=e.yo+(c*s+l*o)/u}else i=r.distance(e,t,!0,!0),a=r.distance(e,n,!0,!0),c=r.distance(t,t,!1,!0),l=r.distance(n,n,!1,!0),o=Math.abs(i),s=Math.abs(a),u=o+s,u===0?Gm.setRelative(e,e,(c+l)/2,r,!0):Gm.setRelative(e,e,(c*s+l*o)/u,r,!0)},normalSlope:0,setRelative:function(e,t,n,r,i){if(!r||r===this)e.y=(i?t.yo:t.y)+n;else{var a=i?t.xo:t.x,o=i?t.yo:t.y,s=a+n*r.x;e.y=o+n*r.y+r.normalSlope*(e.x-s)}},slope:1/0,touch:function(e){e.yTouched=!0},touched:function(e){return e.yTouched},untouch:function(e){e.yTouched=!1}};Object.freeze(Wm),Object.freeze(Gm);function Km(e,t){this.x=e,this.y=t,this.axis=void 0,this.slope=t/e,this.normalSlope=-e/t,Object.freeze(this)}Km.prototype.distance=function(e,t,n,r){return this.x*Wm.distance(e,t,n,r)+this.y*Gm.distance(e,t,n,r)},Km.prototype.interpolate=function(e,t,n,r){var i,a,o=r.distance(e,t,!0,!0),s=r.distance(e,n,!0,!0),c,l,u;i=r.distance(t,t,!1,!0),a=r.distance(n,n,!1,!0),c=Math.abs(o),l=Math.abs(s),u=c+l,u===0?this.setRelative(e,e,(i+a)/2,r,!0):this.setRelative(e,e,(i*l+a*c)/u,r,!0)},Km.prototype.setRelative=function(e,t,n,r,i){r||=this;var a=i?t.xo:t.x,o=i?t.yo:t.y,s=a+n*r.x,c=o+n*r.y,l=r.normalSlope,u=this.slope,d=e.x,f=e.y;e.x=(u*d-l*s+c-f)/(u-l),e.y=u*(e.x-d)+f},Km.prototype.touch=function(e){e.xTouched=!0,e.yTouched=!0};function qm(e,t){var n=Math.sqrt(e*e+t*t);return e/=n,t/=n,e===1&&t===0?Wm:e===0&&t===1?Gm:new Km(e,t)}function Jm(e,t,n,r){this.x=this.xo=Math.round(e*64)/64,this.y=this.yo=Math.round(t*64)/64,this.lastPointOfContour=n,this.onCurve=r,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Jm.prototype.nextTouched=function(e){for(var t=this.nextPointOnContour;!e.touched(t)&&t!==this;)t=t.nextPointOnContour;return t},Jm.prototype.prevTouched=function(e){for(var t=this.prevPointOnContour;!e.touched(t)&&t!==this;)t=t.prevPointOnContour;return t};var Ym=Object.freeze(new Jm(0,0)),Xm={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function Zm(e,t){switch(this.env=e,this.stack=[],this.prog=t,e){case`glyf`:this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case`prep`:this.fv=this.pv=this.dpv=Wm,this.round=Rm}}Im.prototype.exec=function(e,t){if(typeof t!=`number`)throw Error(`Point size is not a number!`);if(!(this._errorState>2)){var n=this.font,r=this._prepState;if(!r||r.ppem!==t){var i=this._fpgmState;if(!i){Zm.prototype=Xm,i=this._fpgmState=new Zm(`fpgm`,n.tables.fpgm),i.funcs=[],i.font=n,exports.DEBUG&&(console.log(`---EXEC FPGM---`),i.step=-1);try{Nm(i)}catch(e){console.log(`Hinting error in FPGM:`+e),this._errorState=3;return}}Zm.prototype=i,r=this._prepState=new Zm(`prep`,n.tables.prep),r.ppem=t;var a=n.tables.cvt;if(a)for(var o=r.cvt=Array(a.length),s=t/n.unitsPerEm,c=0;c<a.length;c++)o[c]=a[c]*s;else r.cvt=[];exports.DEBUG&&(console.log(`---EXEC PREP---`),r.step=-1);try{Nm(r)}catch(e){this._errorState<2&&console.log(`Hinting error in PREP:`+e),this._errorState=2}}if(!(this._errorState>1))try{return Pm(e,r)}catch(e){this._errorState<1&&(console.log(`Hinting error:`+e),console.log(`Note: further hinting errors are silenced`)),this._errorState=1;return}}},Pm=function(e,t){var n=t.ppem/t.font.unitsPerEm,r=n,i=e.components,a,o,s;if(Zm.prototype=t,!i)s=new Zm(`glyf`,e.instructions),exports.DEBUG&&(console.log(`---EXEC GLYPH---`),s.step=-1),Fm(e,s,n,r),o=s.gZone;else{var c=t.font;o=[],a=[];for(var l=0;l<i.length;l++){var u=i[l],d=c.glyphs.get(u.glyphIndex);s=new Zm(`glyf`,d.instructions),exports.DEBUG&&(console.log(`---EXEC COMP `+l+`---`),s.step=-1),Fm(d,s,n,r);for(var f=Math.round(u.dx*n),p=Math.round(u.dy*r),m=s.gZone,h=s.contours,g=0;g<m.length;g++){var _=m[g];_.xTouched=_.yTouched=!1,_.xo=_.x+=f,_.yo=_.y+=p}var v=o.length;o.push.apply(o,m);for(var y=0;y<h.length;y++)a.push(h[y]+v)}e.instructions&&!s.inhibitGridFit&&(s=new Zm(`glyf`,e.instructions),s.gZone=s.z0=s.z1=s.z2=o,s.contours=a,o.push(new Jm(0,0),new Jm(Math.round(e.advanceWidth*n),0)),exports.DEBUG&&(console.log(`---EXEC COMPOSITE---`),s.step=-1),Nm(s),o.length-=2)}return o},Fm=function(e,t,n,r){for(var i=e.points||[],a=i.length,o=t.gZone=t.z0=t.z1=t.z2=[],s=t.contours=[],c,l=0;l<a;l++)c=i[l],o[l]=new Jm(c.x*n,c.y*r,c.lastPointOfContour,c.onCurve);for(var u,d,f=0;f<a;f++)c=o[f],u||(u=c,s.push(f)),c.lastPointOfContour?(c.nextPointOnContour=u,u.prevPointOnContour=c,u=void 0):(d=o[f+1],c.nextPointOnContour=d,d.prevPointOnContour=c);if(!t.inhibitGridFit){if(exports.DEBUG){console.log(`PROCESSING GLYPH`,t.stack);for(var p=0;p<a;p++)console.log(p,o[p].x,o[p].y)}if(o.push(new Jm(0,0),new Jm(Math.round(e.advanceWidth*n),0)),Nm(t),o.length-=2,exports.DEBUG){console.log(`FINISHED GLYPH`,t.stack);for(var m=0;m<a;m++)console.log(m,o[m].x,o[m].y)}}},Nm=function(e){var t=e.prog;if(t){var n=t.length,r;for(e.ip=0;e.ip<n;e.ip++){if(exports.DEBUG&&e.step++,r=Mm[t[e.ip]],!r)throw Error(`unknown instruction: 0x`+Number(t[e.ip]).toString(16));r(e)}}};function Qm(e){for(var t=e.tZone=Array(e.gZone.length),n=0;n<t.length;n++)t[n]=new Jm(0,0)}function $m(e,t){var n=e.prog,r=e.ip,i=1,a;do if(a=n[++r],a===88)i++;else if(a===89)i--;else if(a===64)r+=n[r+1]+1;else if(a===65)r+=2*n[r+1]+1;else if(a>=176&&a<=183)r+=a-176+1;else if(a>=184&&a<=191)r+=(a-184+1)*2;else if(t&&i===1&&a===27)break;while(i>0);e.ip=r}function eh(e,t){exports.DEBUG&&console.log(t.step,`SVTCA[`+e.axis+`]`),t.fv=t.pv=t.dpv=e}function th(e,t){exports.DEBUG&&console.log(t.step,`SPVTCA[`+e.axis+`]`),t.pv=t.dpv=e}function nh(e,t){exports.DEBUG&&console.log(t.step,`SFVTCA[`+e.axis+`]`),t.fv=e}function rh(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z2[r],o=t.z1[i];exports.DEBUG&&console.log(`SPVTL[`+e+`]`,r,i);var s,c;e?(s=a.y-o.y,c=o.x-a.x):(s=o.x-a.x,c=o.y-a.y),t.pv=t.dpv=qm(s,c)}function ih(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z2[r],o=t.z1[i];exports.DEBUG&&console.log(`SFVTL[`+e+`]`,r,i);var s,c;e?(s=a.y-o.y,c=o.x-a.x):(s=o.x-a.x,c=o.y-a.y),t.fv=qm(s,c)}function ah(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`SPVFS[]`,n,r),e.pv=e.dpv=qm(r,n)}function oh(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`SPVFS[]`,n,r),e.fv=qm(r,n)}function sh(e){var t=e.stack,n=e.pv;exports.DEBUG&&console.log(e.step,`GPV[]`),t.push(n.x*16384),t.push(n.y*16384)}function ch(e){var t=e.stack,n=e.fv;exports.DEBUG&&console.log(e.step,`GFV[]`),t.push(n.x*16384),t.push(n.y*16384)}function lh(e){e.fv=e.pv,exports.DEBUG&&console.log(e.step,`SFVTPV[]`)}function uh(e){var t=e.stack,n=t.pop(),r=t.pop(),i=t.pop(),a=t.pop(),o=t.pop(),s=e.z0,c=e.z1,l=s[n],u=s[r],d=c[i],f=c[a],p=e.z2[o];exports.DEBUG&&console.log(`ISECT[], `,n,r,i,a,o);var m=l.x,h=l.y,g=u.x,_=u.y,v=d.x,y=d.y,b=f.x,x=f.y,S=(m-g)*(y-x)-(h-_)*(v-b),C=m*_-h*g,w=v*x-y*b;p.x=(C*(v-b)-w*(m-g))/S,p.y=(C*(y-x)-w*(h-_))/S}function dh(e){e.rp0=e.stack.pop(),exports.DEBUG&&console.log(e.step,`SRP0[]`,e.rp0)}function fh(e){e.rp1=e.stack.pop(),exports.DEBUG&&console.log(e.step,`SRP1[]`,e.rp1)}function ph(e){e.rp2=e.stack.pop(),exports.DEBUG&&console.log(e.step,`SRP2[]`,e.rp2)}function mh(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`SZP0[]`,t),e.zp0=t,t){case 0:e.tZone||Qm(e),e.z0=e.tZone;break;case 1:e.z0=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function hh(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`SZP1[]`,t),e.zp1=t,t){case 0:e.tZone||Qm(e),e.z1=e.tZone;break;case 1:e.z1=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function gh(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`SZP2[]`,t),e.zp2=t,t){case 0:e.tZone||Qm(e),e.z2=e.tZone;break;case 1:e.z2=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function _h(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`SZPS[]`,t),e.zp0=e.zp1=e.zp2=t,t){case 0:e.tZone||Qm(e),e.z0=e.z1=e.z2=e.tZone;break;case 1:e.z0=e.z1=e.z2=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function vh(e){e.loop=e.stack.pop(),exports.DEBUG&&console.log(e.step,`SLOOP[]`,e.loop)}function yh(e){exports.DEBUG&&console.log(e.step,`RTG[]`),e.round=Rm}function bh(e){exports.DEBUG&&console.log(e.step,`RTHG[]`),e.round=Bm}function xh(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SMD[]`,t),e.minDis=t/64}function Sh(e){exports.DEBUG&&console.log(e.step,`ELSE[]`),$m(e,!1)}function Ch(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`JMPR[]`,t),e.ip+=t-1}function wh(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SCVTCI[]`,t),e.cvCutIn=t/64}function Th(e){var t=e.stack;exports.DEBUG&&console.log(e.step,`DUP[]`),t.push(t[t.length-1])}function Eh(e){exports.DEBUG&&console.log(e.step,`POP[]`),e.stack.pop()}function Dh(e){exports.DEBUG&&console.log(e.step,`CLEAR[]`),e.stack.length=0}function Oh(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`SWAP[]`),t.push(n),t.push(r)}function kh(e){var t=e.stack;exports.DEBUG&&console.log(e.step,`DEPTH[]`),t.push(t.length)}function Ah(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`LOOPCALL[]`,n,r);var i=e.ip,a=e.prog;e.prog=e.funcs[n];for(var o=0;o<r;o++)Nm(e),exports.DEBUG&&console.log(++e.step,o+1<r?`next loopcall`:`done loopcall`,o);e.ip=i,e.prog=a}function jh(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`CALL[]`,t);var n=e.ip,r=e.prog;e.prog=e.funcs[t],Nm(e),e.ip=n,e.prog=r,exports.DEBUG&&console.log(++e.step,`returning from`,t)}function Mh(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`CINDEX[]`,n),t.push(t[t.length-n])}function Nh(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`MINDEX[]`,n),t.push(t.splice(t.length-n,1)[0])}function Ph(e){if(e.env!==`fpgm`)throw Error(`FDEF not allowed here`);var t=e.stack,n=e.prog,r=e.ip,i=t.pop(),a=r;for(exports.DEBUG&&console.log(e.step,`FDEF[]`,i);n[++r]!==45;);e.ip=r,e.funcs[i]=n.slice(a+1,r)}function Fh(e,t){var n=t.stack.pop(),r=t.z0[n],i=t.fv,a=t.pv;exports.DEBUG&&console.log(t.step,`MDAP[`+e+`]`,n);var o=a.distance(r,Ym);e&&(o=t.round(o)),i.setRelative(r,Ym,o,a),i.touch(r),t.rp0=t.rp1=n}function Ih(e,t){var n=t.z2,r=n.length-2,i,a,o;exports.DEBUG&&console.log(t.step,`IUP[`+e.axis+`]`);for(var s=0;s<r;s++)i=n[s],e.touched(i)||(a=i.prevTouched(e),a!==i&&(o=i.nextTouched(e),a===o&&e.setRelative(i,i,e.distance(a,a,!1,!0),e,!0),e.interpolate(i,a,o,e)))}function Lh(e,t){for(var n=t.stack,r=e?t.rp1:t.rp2,i=(e?t.z0:t.z1)[r],a=t.fv,o=t.pv,s=t.loop,c=t.z2;s--;){var l=n.pop(),u=c[l],d=o.distance(i,i,!1,!0);a.setRelative(u,u,d,o),a.touch(u),exports.DEBUG&&console.log(t.step,(t.loop>1?`loop `+(t.loop-s)+`: `:``)+`SHP[`+(e?`rp1`:`rp2`)+`]`,l)}t.loop=1}function Rh(e,t){var n=t.stack,r=e?t.rp1:t.rp2,i=(e?t.z0:t.z1)[r],a=t.fv,o=t.pv,s=n.pop(),c=t.z2[t.contours[s]],l=c;exports.DEBUG&&console.log(t.step,`SHC[`+e+`]`,s);var u=o.distance(i,i,!1,!0);do l!==i&&a.setRelative(l,l,u,o),l=l.nextPointOnContour;while(l!==c)}function zh(e,t){var n=t.stack,r=e?t.rp1:t.rp2,i=(e?t.z0:t.z1)[r],a=t.fv,o=t.pv,s=n.pop();exports.DEBUG&&console.log(t.step,`SHZ[`+e+`]`,s);var c;switch(s){case 0:c=t.tZone;break;case 1:c=t.gZone;break;default:throw Error(`Invalid zone`)}for(var l,u=o.distance(i,i,!1,!0),d=c.length-2,f=0;f<d;f++)l=c[f],a.setRelative(l,l,u,o)}function Bh(e){for(var t=e.stack,n=e.loop,r=e.fv,i=t.pop()/64,a=e.z2;n--;){var o=t.pop(),s=a[o];exports.DEBUG&&console.log(e.step,(e.loop>1?`loop `+(e.loop-n)+`: `:``)+`SHPIX[]`,o,i),r.setRelative(s,s,i),r.touch(s)}e.loop=1}function Vh(e){for(var t=e.stack,n=e.rp1,r=e.rp2,i=e.loop,a=e.z0[n],o=e.z1[r],s=e.fv,c=e.dpv,l=e.z2;i--;){var u=t.pop(),d=l[u];exports.DEBUG&&console.log(e.step,(e.loop>1?`loop `+(e.loop-i)+`: `:``)+`IP[]`,u,n,`<->`,r),s.interpolate(d,a,o,c),s.touch(d)}e.loop=1}function Hh(e,t){var n=t.stack,r=n.pop()/64,i=n.pop(),a=t.z1[i],o=t.z0[t.rp0],s=t.fv,c=t.pv;s.setRelative(a,o,r,c),s.touch(a),exports.DEBUG&&console.log(t.step,`MSIRP[`+e+`]`,r,i),t.rp1=t.rp0,t.rp2=i,e&&(t.rp0=i)}function Uh(e){for(var t=e.stack,n=e.rp0,r=e.z0[n],i=e.loop,a=e.fv,o=e.pv,s=e.z1;i--;){var c=t.pop(),l=s[c];exports.DEBUG&&console.log(e.step,(e.loop>1?`loop `+(e.loop-i)+`: `:``)+`ALIGNRP[]`,c),a.setRelative(l,r,0,o),a.touch(l)}e.loop=1}function Wh(e){exports.DEBUG&&console.log(e.step,`RTDG[]`),e.round=zm}function Gh(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z0[i],o=t.fv,s=t.pv,c=t.cvt[r];exports.DEBUG&&console.log(t.step,`MIAP[`+e+`]`,r,`(`,c,`)`,i);var l=s.distance(a,Ym);e&&(Math.abs(l-c)<t.cvCutIn&&(l=c),l=t.round(l)),o.setRelative(a,Ym,l,s),t.zp0===0&&(a.xo=a.x,a.yo=a.y),o.touch(a),t.rp0=t.rp1=i}function Kh(e){var t=e.prog,n=e.ip,r=e.stack,i=t[++n];exports.DEBUG&&console.log(e.step,`NPUSHB[]`,i);for(var a=0;a<i;a++)r.push(t[++n]);e.ip=n}function qh(e){var t=e.ip,n=e.prog,r=e.stack,i=n[++t];exports.DEBUG&&console.log(e.step,`NPUSHW[]`,i);for(var a=0;a<i;a++){var o=n[++t]<<8|n[++t];o&32768&&(o=-((o^65535)+1)),r.push(o)}e.ip=t}function Jh(e){var t=e.stack,n=e.store;n||=e.store=[];var r=t.pop(),i=t.pop();exports.DEBUG&&console.log(e.step,`WS`,r,i),n[i]=r}function Yh(e){var t=e.stack,n=e.store,r=t.pop();exports.DEBUG&&console.log(e.step,`RS`,r);var i=n&&n[r]||0;t.push(i)}function Xh(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`WCVTP`,n,r),e.cvt[r]=n/64}function Zh(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`RCVT`,n),t.push(e.cvt[n]*64)}function Qh(e,t){var n=t.stack,r=n.pop(),i=t.z2[r];exports.DEBUG&&console.log(t.step,`GC[`+e+`]`,r),n.push(t.dpv.distance(i,Ym,e,!1)*64)}function $h(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z1[r],o=t.z0[i],s=t.dpv.distance(o,a,e,e);exports.DEBUG&&console.log(t.step,`MD[`+e+`]`,r,i,`->`,s),t.stack.push(Math.round(s*64))}function eg(e){exports.DEBUG&&console.log(e.step,`MPPEM[]`),e.stack.push(e.ppem)}function tg(e){exports.DEBUG&&console.log(e.step,`FLIPON[]`),e.autoFlip=!0}function ng(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`LT[]`,n,r),t.push(+(r<n))}function rg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`LTEQ[]`,n,r),t.push(+(r<=n))}function ig(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`GT[]`,n,r),t.push(+(r>n))}function ag(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`GTEQ[]`,n,r),t.push(+(r>=n))}function og(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`EQ[]`,n,r),t.push(+(n===r))}function sg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`NEQ[]`,n,r),t.push(n===r?0:1)}function cg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`ODD[]`,n),t.push(Math.trunc(n)%2?1:0)}function lg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`EVEN[]`,n),t.push(Math.trunc(n)%2?0:1)}function ug(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`IF[]`,t),t||($m(e,!0),exports.DEBUG&&console.log(e.step,`EIF[]`))}function dg(e){exports.DEBUG&&console.log(e.step,`EIF[]`)}function fg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`AND[]`,n,r),t.push(n&&r?1:0)}function pg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`OR[]`,n,r),t.push(n||r?1:0)}function mg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`NOT[]`,n),t.push(+!n)}function hg(e,t){var n=t.stack,r=n.pop(),i=t.fv,a=t.pv,o=t.ppem,s=t.deltaBase+(e-1)*16,c=t.deltaShift,l=t.z0;exports.DEBUG&&console.log(t.step,`DELTAP[`+e+`]`,r,n);for(var u=0;u<r;u++){var d=n.pop(),f=n.pop();if(s+((f&240)>>4)===o){var p=(f&15)-8;p>=0&&p++,exports.DEBUG&&console.log(t.step,`DELTAPFIX`,d,`by`,p*c);var m=l[d];i.setRelative(m,m,p*c,a)}}}function gg(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SDB[]`,t),e.deltaBase=t}function _g(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SDS[]`,t),e.deltaShift=.5**t}function vg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`ADD[]`,n,r),t.push(r+n)}function yg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`SUB[]`,n,r),t.push(r-n)}function bg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`DIV[]`,n,r),t.push(r*64/n)}function xg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`MUL[]`,n,r),t.push(r*n/64)}function Sg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`ABS[]`,n),t.push(Math.abs(n))}function Cg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`NEG[]`,n),t.push(-n)}function wg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`FLOOR[]`,n),t.push(Math.floor(n/64)*64)}function Tg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`CEILING[]`,n),t.push(Math.ceil(n/64)*64)}function Eg(e,t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,`ROUND[]`),n.push(t.round(r/64)*64)}function Dg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`WCVTF[]`,n,r),e.cvt[r]=n*e.ppem/e.font.unitsPerEm}function Og(e,t){var n=t.stack,r=n.pop(),i=t.ppem,a=t.deltaBase+(e-1)*16,o=t.deltaShift;exports.DEBUG&&console.log(t.step,`DELTAC[`+e+`]`,r,n);for(var s=0;s<r;s++){var c=n.pop(),l=n.pop();if(a+((l&240)>>4)===i){var u=(l&15)-8;u>=0&&u++;var d=u*o;exports.DEBUG&&console.log(t.step,`DELTACFIX`,c,`by`,d),t.cvt[c]+=d}}}function kg(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SROUND[]`,t),e.round=Um;var n;switch(t&192){case 0:n=.5;break;case 64:n=1;break;case 128:n=2;break;default:throw Error(`invalid SROUND value`)}switch(e.srPeriod=n,t&48){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*n;break;case 32:e.srPhase=.5*n;break;case 48:e.srPhase=.75*n;break;default:throw Error(`invalid SROUND value`)}t&=15,e.srThreshold=t===0?0:(t/8-.5)*n}function Ag(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`S45ROUND[]`,t),e.round=Um;var n;switch(t&192){case 0:n=Math.sqrt(2)/2;break;case 64:n=Math.sqrt(2);break;case 128:n=2*Math.sqrt(2);break;default:throw Error(`invalid S45ROUND value`)}switch(e.srPeriod=n,t&48){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*n;break;case 32:e.srPhase=.5*n;break;case 48:e.srPhase=.75*n;break;default:throw Error(`invalid S45ROUND value`)}t&=15,e.srThreshold=t===0?0:(t/8-.5)*n}function jg(e){exports.DEBUG&&console.log(e.step,`ROFF[]`),e.round=Lm}function Mg(e){exports.DEBUG&&console.log(e.step,`RUTG[]`),e.round=Vm}function Ng(e){exports.DEBUG&&console.log(e.step,`RDTG[]`),e.round=Hm}function Pg(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SCANCTRL[]`,t)}function Fg(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z2[r],o=t.z1[i];exports.DEBUG&&console.log(t.step,`SDPVTL[`+e+`]`,r,i);var s,c;e?(s=a.y-o.y,c=o.x-a.x):(s=o.x-a.x,c=o.y-a.y),t.dpv=qm(s,c)}function Ig(e){var t=e.stack,n=t.pop(),r=0;exports.DEBUG&&console.log(e.step,`GETINFO[]`,n),n&1&&(r=35),n&32&&(r|=4096),t.push(r)}function Lg(e){var t=e.stack,n=t.pop(),r=t.pop(),i=t.pop();exports.DEBUG&&console.log(e.step,`ROLL[]`),t.push(r),t.push(n),t.push(i)}function Rg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`MAX[]`,n,r),t.push(Math.max(r,n))}function zg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`MIN[]`,n,r),t.push(Math.min(r,n))}function Bg(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SCANTYPE[]`,t)}function Vg(e){var t=e.stack.pop(),n=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`INSTCTRL[]`,t,n),t){case 1:e.inhibitGridFit=!!n;return;case 2:e.ignoreCvt=!!n;return;default:throw Error(`invalid INSTCTRL[] selector`)}}function Hg(e,t){var n=t.stack,r=t.prog,i=t.ip;exports.DEBUG&&console.log(t.step,`PUSHB[`+e+`]`);for(var a=0;a<e;a++)n.push(r[++i]);t.ip=i}function Ug(e,t){var n=t.ip,r=t.prog,i=t.stack;exports.DEBUG&&console.log(t.ip,`PUSHW[`+e+`]`);for(var a=0;a<e;a++){var o=r[++n]<<8|r[++n];o&32768&&(o=-((o^65535)+1)),i.push(o)}t.ip=n}function $(e,t,n,r,i,a){var o=a.stack,s=e&&o.pop(),c=o.pop(),l=a.rp0,u=a.z0[l],d=a.z1[c],f=a.minDis,p=a.fv,m=a.dpv,h,g=h=m.distance(d,u,!0,!0),_=g>=0?1:-1,v;g=Math.abs(g),e&&(v=a.cvt[s],r&&Math.abs(g-v)<a.cvCutIn&&(g=v)),n&&g<f&&(g=f),r&&(g=a.round(g)),p.setRelative(d,u,_*g,m),p.touch(d),exports.DEBUG&&console.log(a.step,(e?`MIRP[`:`MDRP[`)+(t?`M`:`m`)+(n?`>`:`_`)+(r?`R`:`_`)+(i===0?`Gr`:i===1?`Bl`:i===2?`Wh`:``)+`]`,e?s+`(`+a.cvt[s]+`,`+v+`)`:``,c,`(d =`,h,`->`,_*g,`)`),a.rp1=a.rp0,a.rp2=c,t&&(a.rp0=c)}Mm=[eh.bind(void 0,Gm),eh.bind(void 0,Wm),th.bind(void 0,Gm),th.bind(void 0,Wm),nh.bind(void 0,Gm),nh.bind(void 0,Wm),rh.bind(void 0,0),rh.bind(void 0,1),ih.bind(void 0,0),ih.bind(void 0,1),ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,void 0,void 0,Th,Eh,Dh,Oh,kh,Mh,Nh,void 0,void 0,void 0,Ah,jh,Ph,void 0,Fh.bind(void 0,0),Fh.bind(void 0,1),Ih.bind(void 0,Gm),Ih.bind(void 0,Wm),Lh.bind(void 0,0),Lh.bind(void 0,1),Rh.bind(void 0,0),Rh.bind(void 0,1),zh.bind(void 0,0),zh.bind(void 0,1),Bh,Vh,Hh.bind(void 0,0),Hh.bind(void 0,1),Uh,Wh,Gh.bind(void 0,0),Gh.bind(void 0,1),Kh,qh,Jh,Yh,Xh,Zh,Qh.bind(void 0,0),Qh.bind(void 0,1),void 0,$h.bind(void 0,0),$h.bind(void 0,1),eg,void 0,tg,void 0,void 0,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg.bind(void 0,1),gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg.bind(void 0,0),Eg.bind(void 0,1),Eg.bind(void 0,2),Eg.bind(void 0,3),void 0,void 0,void 0,void 0,Dg,hg.bind(void 0,2),hg.bind(void 0,3),Og.bind(void 0,1),Og.bind(void 0,2),Og.bind(void 0,3),kg,Ag,void 0,void 0,jg,void 0,Mg,Ng,Eh,Eh,void 0,void 0,void 0,void 0,void 0,Pg,Fg.bind(void 0,0),Fg.bind(void 0,1),Ig,void 0,Lg,Rg,zg,Bg,Vg,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,Hg.bind(void 0,1),Hg.bind(void 0,2),Hg.bind(void 0,3),Hg.bind(void 0,4),Hg.bind(void 0,5),Hg.bind(void 0,6),Hg.bind(void 0,7),Hg.bind(void 0,8),Ug.bind(void 0,1),Ug.bind(void 0,2),Ug.bind(void 0,3),Ug.bind(void 0,4),Ug.bind(void 0,5),Ug.bind(void 0,6),Ug.bind(void 0,7),Ug.bind(void 0,8),$.bind(void 0,0,0,0,0,0),$.bind(void 0,0,0,0,0,1),$.bind(void 0,0,0,0,0,2),$.bind(void 0,0,0,0,0,3),$.bind(void 0,0,0,0,1,0),$.bind(void 0,0,0,0,1,1),$.bind(void 0,0,0,0,1,2),$.bind(void 0,0,0,0,1,3),$.bind(void 0,0,0,1,0,0),$.bind(void 0,0,0,1,0,1),$.bind(void 0,0,0,1,0,2),$.bind(void 0,0,0,1,0,3),$.bind(void 0,0,0,1,1,0),$.bind(void 0,0,0,1,1,1),$.bind(void 0,0,0,1,1,2),$.bind(void 0,0,0,1,1,3),$.bind(void 0,0,1,0,0,0),$.bind(void 0,0,1,0,0,1),$.bind(void 0,0,1,0,0,2),$.bind(void 0,0,1,0,0,3),$.bind(void 0,0,1,0,1,0),$.bind(void 0,0,1,0,1,1),$.bind(void 0,0,1,0,1,2),$.bind(void 0,0,1,0,1,3),$.bind(void 0,0,1,1,0,0),$.bind(void 0,0,1,1,0,1),$.bind(void 0,0,1,1,0,2),$.bind(void 0,0,1,1,0,3),$.bind(void 0,0,1,1,1,0),$.bind(void 0,0,1,1,1,1),$.bind(void 0,0,1,1,1,2),$.bind(void 0,0,1,1,1,3),$.bind(void 0,1,0,0,0,0),$.bind(void 0,1,0,0,0,1),$.bind(void 0,1,0,0,0,2),$.bind(void 0,1,0,0,0,3),$.bind(void 0,1,0,0,1,0),$.bind(void 0,1,0,0,1,1),$.bind(void 0,1,0,0,1,2),$.bind(void 0,1,0,0,1,3),$.bind(void 0,1,0,1,0,0),$.bind(void 0,1,0,1,0,1),$.bind(void 0,1,0,1,0,2),$.bind(void 0,1,0,1,0,3),$.bind(void 0,1,0,1,1,0),$.bind(void 0,1,0,1,1,1),$.bind(void 0,1,0,1,1,2),$.bind(void 0,1,0,1,1,3),$.bind(void 0,1,1,0,0,0),$.bind(void 0,1,1,0,0,1),$.bind(void 0,1,1,0,0,2),$.bind(void 0,1,1,0,0,3),$.bind(void 0,1,1,0,1,0),$.bind(void 0,1,1,0,1,1),$.bind(void 0,1,1,0,1,2),$.bind(void 0,1,1,0,1,3),$.bind(void 0,1,1,1,0,0),$.bind(void 0,1,1,1,0,1),$.bind(void 0,1,1,1,0,2),$.bind(void 0,1,1,1,0,3),$.bind(void 0,1,1,1,1,0),$.bind(void 0,1,1,1,1,1),$.bind(void 0,1,1,1,1,2),$.bind(void 0,1,1,1,1,3)];function Wg(e){this.char=e,this.state={},this.activeState=null}function Gg(e,t,n){this.contextName=n,this.startIndex=e,this.endOffset=t}function Kg(e,t,n){this.contextName=e,this.openRange=null,this.ranges=[],this.checkStart=t,this.checkEnd=n}function qg(e,t){this.context=e,this.index=t,this.length=e.length,this.current=e[t],this.backtrack=e.slice(0,t),this.lookahead=e.slice(t+1)}function Jg(e){this.eventId=e,this.subscribers=[]}function Yg(e){var t=this,n=[`start`,`end`,`next`,`newToken`,`contextStart`,`contextEnd`,`insertToken`,`removeToken`,`removeRange`,`replaceToken`,`replaceRange`,`composeRUD`,`updateContextsRanges`];n.forEach(function(e){Object.defineProperty(t.events,e,{value:new Jg(e)})}),e&&n.forEach(function(n){var r=e[n];typeof r==`function`&&t.events[n].subscribe(r)}),[`insertToken`,`removeToken`,`removeRange`,`replaceToken`,`replaceRange`,`composeRUD`].forEach(function(e){t.events[e].subscribe(t.updateContextsRanges)})}function Xg(e){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],Yg.call(this,e)}Wg.prototype.setState=function(e,t){return this.state[e]=t,this.activeState={key:e,value:this.state[e]},this.activeState},Wg.prototype.getState=function(e){return this.state[e]||null},Xg.prototype.inboundIndex=function(e){return e>=0&&e<this.tokens.length},Xg.prototype.composeRUD=function(e){var t=this,n=!0,r=e.map(function(e){return t[e[0]].apply(t,e.slice(1).concat(n))}),i=function(e){return typeof e==`object`&&e.hasOwnProperty(`FAIL`)};if(r.every(i))return{FAIL:`composeRUD: one or more operations hasn't completed successfully`,report:r.filter(i)};this.dispatch(`composeRUD`,[r.filter(function(e){return!i(e)})])},Xg.prototype.replaceRange=function(e,t,n,r){t=t===null?this.tokens.length:t;var i=n.every(function(e){return e instanceof Wg});if(!isNaN(e)&&this.inboundIndex(e)&&i){var a=this.tokens.splice.apply(this.tokens,[e,t].concat(n));return r||this.dispatch(`replaceToken`,[e,t,n]),[a,n]}return{FAIL:`replaceRange: invalid tokens or startIndex.`}},Xg.prototype.replaceToken=function(e,t,n){if(!isNaN(e)&&this.inboundIndex(e)&&t instanceof Wg){var r=this.tokens.splice(e,1,t);return n||this.dispatch(`replaceToken`,[e,t]),[r[0],t]}return{FAIL:`replaceToken: invalid token or index.`}},Xg.prototype.removeRange=function(e,t,n){t=isNaN(t)?this.tokens.length:t;var r=this.tokens.splice(e,t);return n||this.dispatch(`removeRange`,[r,e,t]),r},Xg.prototype.removeToken=function(e,t){if(!isNaN(e)&&this.inboundIndex(e)){var n=this.tokens.splice(e,1);return t||this.dispatch(`removeToken`,[n,e]),n}return{FAIL:`removeToken: invalid token index.`}},Xg.prototype.insertToken=function(e,t,n){return e.every(function(e){return e instanceof Wg})?(this.tokens.splice.apply(this.tokens,[t,0].concat(e)),n||this.dispatch(`insertToken`,[e,t]),e):{FAIL:`insertToken: invalid token(s).`}},Xg.prototype.registerModifier=function(e,t,n){this.events.newToken.subscribe(function(r,i){var a=[r,i],o=t===null||t.apply(this,a)===!0,s=[r,i];if(o){var c=n.apply(this,s);r.setState(e,c)}}),this.registeredModifiers.push(e)},Jg.prototype.subscribe=function(e){return typeof e==`function`?this.subscribers.push(e)-1:{FAIL:`invalid '`+this.eventId+`' event handler`}},Jg.prototype.unsubscribe=function(e){this.subscribers.splice(e,1)},qg.prototype.setCurrentIndex=function(e){this.index=e,this.current=this.context[e],this.backtrack=this.context.slice(0,e),this.lookahead=this.context.slice(e+1)},qg.prototype.get=function(e){switch(!0){case e===0:return this.current;case e<0&&Math.abs(e)<=this.backtrack.length:return this.backtrack.slice(e)[0];case e>0&&e<=this.lookahead.length:return this.lookahead[e-1];default:return null}},Xg.prototype.rangeToText=function(e){if(e instanceof Gg)return this.getRangeTokens(e).map(function(e){return e.char}).join(``)},Xg.prototype.getText=function(){return this.tokens.map(function(e){return e.char}).join(``)},Xg.prototype.getContext=function(e){return this.registeredContexts[e]||null},Xg.prototype.on=function(e,t){var n=this.events[e];return n?n.subscribe(t):null},Xg.prototype.dispatch=function(e,t){var n=this,r=this.events[e];r instanceof Jg&&r.subscribers.forEach(function(e){e.apply(n,t||[])})},Xg.prototype.registerContextChecker=function(e,t,n){if(this.getContext(e))return{FAIL:`context name '`+e+`' is already registered.`};if(typeof t!=`function`)return{FAIL:`missing context start check.`};if(typeof n!=`function`)return{FAIL:`missing context end check.`};var r=new Kg(e,t,n);return this.registeredContexts[e]=r,this.contextCheckers.push(r),r},Xg.prototype.getRangeTokens=function(e){var t=e.startIndex+e.endOffset;return[].concat(this.tokens.slice(e.startIndex,t))},Xg.prototype.getContextRanges=function(e){var t=this.getContext(e);return t?t.ranges:{FAIL:`context checker '`+e+`' is not registered.`}},Xg.prototype.resetContextsRanges=function(){var e=this.registeredContexts;for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];n.ranges=[]}},Xg.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var e=this.tokens.map(function(e){return e.char}),t=0;t<e.length;t++){var n=new qg(e,t);this.runContextCheck(n)}this.dispatch(`updateContextsRanges`,[this.registeredContexts])},Xg.prototype.setEndOffset=function(e,t){var n=this.getContext(t).openRange.startIndex,r=new Gg(n,e,t),i=this.getContext(t).ranges;return r.rangeId=t+`.`+i.length,i.push(r),this.getContext(t).openRange=null,r},Xg.prototype.runContextCheck=function(e){var t=this,n=e.index;this.contextCheckers.forEach(function(r){var i=r.contextName,a=t.getContext(i).openRange;if(!a&&r.checkStart(e)&&(a=new Gg(n,null,i),t.getContext(i).openRange=a,t.dispatch(`contextStart`,[i,n])),a&&r.checkEnd(e)){var o=n-a.startIndex+1,s=t.setEndOffset(o,i);t.dispatch(`contextEnd`,[i,s])}})},Xg.prototype.tokenize=function(e){this.tokens=[],this.resetContextsRanges();var t=Array.from(e);this.dispatch(`start`);for(var n=0;n<t.length;n++){var r=t[n],i=new qg(t,n);this.dispatch(`next`,[i]),this.runContextCheck(i);var a=new Wg(r);this.tokens.push(a),this.dispatch(`newToken`,[a,i])}return this.dispatch(`end`,[this.tokens]),this.tokens};function Zg(e){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e)}function Qg(e){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(e)}function $g(e){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e)}function e_(e){return/[A-z]/.test(e)}function t_(e){return/\s/.test(e)}function n_(e){this.font=e,this.features={}}function r_(e){this.id=e.id,this.tag=e.tag,this.substitution=e.substitution}function i_(e,t){if(!e)return-1;switch(t.format){case 1:return t.glyphs.indexOf(e);case 2:for(var n=t.ranges,r=0;r<n.length;r++){var i=n[r];if(e>=i.start&&e<=i.end){var a=e-i.start;return i.index+a}}break;default:return-1}return-1}function a_(e,t){return i_(e,t.coverage)===-1?null:e+t.deltaGlyphId}function o_(e,t){var n=i_(e,t.coverage);return n===-1?null:t.substitute[n]}function s_(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r],a=t.current;a=Array.isArray(a)?a[0]:a;var o=i_(a,i);o!==-1&&n.push(o)}return n.length===e.length?n:-1}function c_(e,t){var n=t.inputCoverage.length+t.lookaheadCoverage.length+t.backtrackCoverage.length;if(e.context.length<n)return[];var r=s_(t.inputCoverage,e);if(r===-1)return[];var i=t.inputCoverage.length-1;if(e.lookahead.length<t.lookaheadCoverage.length)return[];for(var a=e.lookahead.slice(i);a.length&&$g(a[0].char);)a.shift();var o=new qg(a,0),s=s_(t.lookaheadCoverage,o),c=[].concat(e.backtrack);for(c.reverse();c.length&&$g(c[0].char);)c.shift();if(c.length<t.backtrackCoverage.length)return[];var l=new qg(c,0),u=s_(t.backtrackCoverage,l),d=r.length===t.inputCoverage.length&&s.length===t.lookaheadCoverage.length&&u.length===t.backtrackCoverage.length,f=[];if(d)for(var p=0;p<t.lookupRecords.length;p++)for(var m=t.lookupRecords[p].lookupListIndex,h=this.getLookupByIndex(m),g=0;g<h.subtables.length;g++){var _=h.subtables[g],v=this.getLookupMethod(h,_);if(this.getSubstitutionType(h,_)===`12`)for(var y=0;y<r.length;y++){var b=v(e.get(y));b&&f.push(b)}}return f}function l_(e,t){var n=e.current,r=i_(n,t.coverage);if(r===-1)return null;for(var i,a=t.ligatureSets[r],o=0;o<a.length;o++){i=a[o];for(var s=0;s<i.components.length&&e.lookahead[s]===i.components[s];s++)if(s===i.components.length-1)return i}return null}function u_(e,t){var n=i_(e,t.coverage);return n===-1?null:t.sequences[n]}n_.prototype.getDefaultScriptFeaturesIndexes=function(){for(var e=this.font.tables.gsub.scripts,t=0;t<e.length;t++){var n=e[t];if(n.tag===`DFLT`)return n.script.defaultLangSys.featureIndexes}return[]},n_.prototype.getScriptFeaturesIndexes=function(e){if(!this.font.tables.gsub)return[];if(!e)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,n=0;n<t.length;n++){var r=t[n];if(r.tag===e&&r.script.defaultLangSys)return r.script.defaultLangSys.featureIndexes;var i=r.langSysRecords;if(i)for(var a=0;a<i.length;a++){var o=i[a];if(o.tag===e)return o.langSys.featureIndexes}}return this.getDefaultScriptFeaturesIndexes()},n_.prototype.mapTagsToFeatures=function(e,t){for(var n={},r=0;r<e.length;r++){var i=e[r].tag;n[i]=e[r].feature}this.features[t].tags=n},n_.prototype.getScriptFeatures=function(e){var t=this.features[e];if(this.features.hasOwnProperty(e))return t;var n=this.getScriptFeaturesIndexes(e);if(!n)return null;var r=this.font.tables.gsub;return t=n.map(function(e){return r.features[e]}),this.features[e]=t,this.mapTagsToFeatures(t,e),t},n_.prototype.getSubstitutionType=function(e,t){return e.lookupType.toString()+t.substFormat.toString()},n_.prototype.getLookupMethod=function(e,t){var n=this;switch(this.getSubstitutionType(e,t)){case`11`:return function(e){return a_.apply(n,[e,t])};case`12`:return function(e){return o_.apply(n,[e,t])};case`63`:return function(e){return c_.apply(n,[e,t])};case`41`:return function(e){return l_.apply(n,[e,t])};case`21`:return function(e){return u_.apply(n,[e,t])};default:throw Error(`lookupType: `+e.lookupType+` - substFormat: `+t.substFormat+` is not yet supported`)}},n_.prototype.lookupFeature=function(e){var t=e.contextParams,n=t.index,r=this.getFeature({tag:e.tag,script:e.script});if(!r)return Error(`font '`+this.font.names.fullName.en+`' doesn't support feature '`+e.tag+`' for script '`+e.script+`'.`);for(var i=this.getFeatureLookups(r),a=[].concat(t.context),o=0;o<i.length;o++)for(var s=i[o],c=this.getLookupSubtables(s),l=0;l<c.length;l++){var u=c[l],d=this.getSubstitutionType(s,u),f=this.getLookupMethod(s,u),p=void 0;switch(d){case`11`:p=f(t.current),p&&a.splice(n,1,new r_({id:11,tag:e.tag,substitution:p}));break;case`12`:p=f(t.current),p&&a.splice(n,1,new r_({id:12,tag:e.tag,substitution:p}));break;case`63`:p=f(t),Array.isArray(p)&&p.length&&a.splice(n,1,new r_({id:63,tag:e.tag,substitution:p}));break;case`41`:p=f(t),p&&a.splice(n,1,new r_({id:41,tag:e.tag,substitution:p}));break;case`21`:p=f(t.current),p&&a.splice(n,1,new r_({id:21,tag:e.tag,substitution:p}))}t=new qg(a,n),(!Array.isArray(p)||p.length)&&(p=null)}return a.length?a:null},n_.prototype.supports=function(e){if(!e.script)return!1;this.getScriptFeatures(e.script);var t=this.features.hasOwnProperty(e.script);if(!e.tag)return t;var n=this.features[e.script].some(function(t){return t.tag===e.tag});return t&&n},n_.prototype.getLookupSubtables=function(e){return e.subtables||null},n_.prototype.getLookupByIndex=function(e){return this.font.tables.gsub.lookups[e]||null},n_.prototype.getFeatureLookups=function(e){return e.lookupListIndexes.map(this.getLookupByIndex.bind(this))},n_.prototype.getFeature=function(e){if(!this.font)return{FAIL:`No font was found`};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:`No feature for script `+e.script}};function d_(e){var t=e.current,n=e.get(-1);return n===null&&Zg(t)||!Zg(n)&&Zg(t)}function f_(e){var t=e.get(1);return t===null||!Zg(t)}var p_={startCheck:d_,endCheck:f_};function m_(e){var t=e.current,n=e.get(-1);return(Zg(t)||$g(t))&&!Zg(n)}function h_(e){var t=e.get(1);switch(!0){case t===null:return!0;case!Zg(t)&&!$g(t):var n=t_(t);if(!n)return!0;if(n){var r=!1;if(r=e.lookahead.some(function(e){return Zg(e)||$g(e)}),!r)return!0}break;default:return!1}}var g_={startCheck:m_,endCheck:h_};function __(e,t,n){t[n].setState(e.tag,e.substitution)}function v_(e,t,n){t[n].setState(e.tag,e.substitution)}function y_(e,t,n){e.substitution.forEach(function(r,i){t[n+i].setState(e.tag,r)})}function b_(e,t,n){var r=t[n];r.setState(e.tag,e.substitution.ligGlyph);for(var i=e.substitution.components.length,a=0;a<i;a++)r=t[n+a+1],r.setState(`deleted`,!0)}var x_={11:__,12:v_,63:y_,41:b_};function S_(e,t,n){e instanceof r_&&x_[e.id]&&x_[e.id](e,t,n)}function C_(e){for(var t=[].concat(e.backtrack),n=t.length-1;n>=0;n--){var r=t[n],i=Qg(r),a=$g(r);if(!i&&!a)return!0;if(i)return!1}return!1}function w_(e){if(Qg(e.current))return!1;for(var t=0;t<e.lookahead.length;t++){var n=e.lookahead[t];if(!$g(n))return!0}return!1}function T_(e){var t=this,n=`arab`,r=this.featuresTags[n],i=this.tokenizer.getRangeTokens(e);if(i.length!==1){var a=new qg(i.map(function(e){return e.getState(`glyphIndex`)}),0),o=new qg(i.map(function(e){return e.char}),0);i.forEach(function(e,s){if(!$g(e.char)){a.setCurrentIndex(s),o.setCurrentIndex(s);var c=0;C_(o)&&(c|=1),w_(o)&&(c|=2);var l;switch(c){case 1:l=`fina`;break;case 2:l=`init`;break;case 3:l=`medi`}if(r.indexOf(l)!==-1){var u=t.query.lookupFeature({tag:l,script:n,contextParams:a});if(u instanceof Error)return console.info(u.message);u.forEach(function(e,t){e instanceof r_&&(S_(e,i,t),a.context[t]=e.substitution)})}}})}}function E_(e,t){return new qg(e.map(function(e){return e.activeState.value}),t||0)}function D_(e){var t=this,n=`arab`,r=this.tokenizer.getRangeTokens(e),i=E_(r);i.context.forEach(function(e,a){i.setCurrentIndex(a);var o=t.query.lookupFeature({tag:`rlig`,script:n,contextParams:i});o.length&&(o.forEach(function(e){return S_(e,r,a)}),i=E_(r))})}function O_(e){var t=e.current,n=e.get(-1);return n===null&&e_(t)||!e_(n)&&e_(t)}function k_(e){var t=e.get(1);return t===null||!e_(t)}var A_={startCheck:O_,endCheck:k_};function j_(e,t){return new qg(e.map(function(e){return e.activeState.value}),t||0)}function M_(e){var t=this,n=`latn`,r=this.tokenizer.getRangeTokens(e),i=j_(r);i.context.forEach(function(e,a){i.setCurrentIndex(a);var o=t.query.lookupFeature({tag:`liga`,script:n,contextParams:i});o.length&&(o.forEach(function(e){return S_(e,r,a)}),i=j_(r))})}function N_(e){this.baseDir=e||`ltr`,this.tokenizer=new Xg,this.featuresTags={}}N_.prototype.setText=function(e){this.text=e},N_.prototype.contextChecks={latinWordCheck:A_,arabicWordCheck:p_,arabicSentenceCheck:g_};function P_(e){var t=this.contextChecks[e+`Check`];return this.tokenizer.registerContextChecker(e,t.startCheck,t.endCheck)}function F_(){return P_.call(this,`latinWord`),P_.call(this,`arabicWord`),P_.call(this,`arabicSentence`),this.tokenizer.tokenize(this.text)}function I_(){var e=this;this.tokenizer.getContextRanges(`arabicSentence`).forEach(function(t){var n=e.tokenizer.getRangeTokens(t);e.tokenizer.replaceRange(t.startIndex,t.endOffset,n.reverse())})}N_.prototype.registerFeatures=function(e,t){var n=this,r=t.filter(function(t){return n.query.supports({script:e,tag:t})});this.featuresTags.hasOwnProperty(e)?this.featuresTags[e]=this.featuresTags[e].concat(r):this.featuresTags[e]=r},N_.prototype.applyFeatures=function(e,t){if(!e)throw Error(`No valid font was provided to apply features`);this.query||=new n_(e);for(var n=0;n<t.length;n++){var r=t[n];this.query.supports({script:r.script})&&this.registerFeatures(r.script,r.tags)}},N_.prototype.registerModifier=function(e,t,n){this.tokenizer.registerModifier(e,t,n)};function L_(){if(this.tokenizer.registeredModifiers.indexOf(`glyphIndex`)===-1)throw Error(`glyphIndex modifier is required to apply arabic presentation features.`)}function R_(){var e=this;this.featuresTags.hasOwnProperty(`arab`)&&(L_.call(this),this.tokenizer.getContextRanges(`arabicWord`).forEach(function(t){T_.call(e,t)}))}function z_(){var e=this,t=`arab`;this.featuresTags.hasOwnProperty(t)&&this.featuresTags[t].indexOf(`rlig`)!==-1&&(L_.call(this),this.tokenizer.getContextRanges(`arabicWord`).forEach(function(t){D_.call(e,t)}))}function B_(){var e=this,t=`latn`;this.featuresTags.hasOwnProperty(t)&&this.featuresTags[t].indexOf(`liga`)!==-1&&(L_.call(this),this.tokenizer.getContextRanges(`latinWord`).forEach(function(t){M_.call(e,t)}))}N_.prototype.checkContextReady=function(e){return!!this.tokenizer.getContext(e)},N_.prototype.applyFeaturesToContexts=function(){this.checkContextReady(`arabicWord`)&&(R_.call(this),z_.call(this)),this.checkContextReady(`latinWord`)&&B_.call(this),this.checkContextReady(`arabicSentence`)&&I_.call(this)},N_.prototype.processText=function(e){this.text&&this.text===e||(this.setText(e),F_.call(this),this.applyFeaturesToContexts())},N_.prototype.getBidiText=function(e){return this.processText(e),this.tokenizer.getText()},N_.prototype.getTextGlyphs=function(e){this.processText(e);for(var t=[],n=0;n<this.tokenizer.tokens.length;n++){var r=this.tokenizer.tokens[n];if(!r.state.deleted){var i=r.activeState.value;t.push(Array.isArray(i)?i[0]:i)}}return t};function V_(e){e||={},e.tables=e.tables||{},e.empty||(xm(e.familyName,`When creating a new Font object, familyName is required.`),xm(e.styleName,`When creating a new Font object, styleName is required.`),xm(e.unitsPerEm,`When creating a new Font object, unitsPerEm is required.`),xm(e.ascender,`When creating a new Font object, ascender is required.`),xm(e.descender<=0,`When creating a new Font object, negative descender value is required.`),this.names={fontFamily:{en:e.familyName||` `},fontSubfamily:{en:e.styleName||` `},fullName:{en:e.fullName||e.familyName+` `+e.styleName},postScriptName:{en:e.postScriptName||(e.familyName+e.styleName).replace(/\s/g,``)},designer:{en:e.designer||` `},designerURL:{en:e.designerURL||` `},manufacturer:{en:e.manufacturer||` `},manufacturerURL:{en:e.manufacturerURL||` `},license:{en:e.license||` `},licenseURL:{en:e.licenseURL||` `},version:{en:e.version||`Version 0.1`},description:{en:e.description||` `},copyright:{en:e.copyright||` `},trademark:{en:e.trademark||` `}},this.unitsPerEm=e.unitsPerEm||1e3,this.ascender=e.ascender,this.descender=e.descender,this.createdTimestamp=e.createdTimestamp,this.tables=Object.assign(e.tables,{os2:Object.assign({usWeightClass:e.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:e.widthClass||this.usWidthClasses.MEDIUM,fsSelection:e.fsSelection||this.fsSelectionValues.REGULAR},e.tables.os2)})),this.supported=!0,this.glyphs=new bf.GlyphSet(this,e.glyphs||[]),this.encoding=new rf(this),this.position=new _m(this),this.substitution=new vm(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat===`truetype`)return this._hinting=new Im(this)}})}V_.prototype.hasChar=function(e){return this.encoding.charToGlyphIndex(e)!==null},V_.prototype.charToGlyphIndex=function(e){return this.encoding.charToGlyphIndex(e)},V_.prototype.charToGlyph=function(e){var t=this.charToGlyphIndex(e),n=this.glyphs.get(t);return n||=this.glyphs.get(0),n},V_.prototype.updateFeatures=function(e){return this.defaultRenderOptions.features.map(function(t){return t.script===`latn`?{script:`latn`,tags:t.tags.filter(function(t){return e[t]})}:t})},V_.prototype.stringToGlyphs=function(e,t){var n=this,r=new N_;r.registerModifier(`glyphIndex`,null,function(e){return n.charToGlyphIndex(e.char)});var i=t?this.updateFeatures(t.features):this.defaultRenderOptions.features;r.applyFeatures(this,i);for(var a=r.getTextGlyphs(e),o=a.length,s=Array(o),c=this.glyphs.get(0),l=0;l<o;l+=1)s[l]=this.glyphs.get(a[l])||c;return s},V_.prototype.nameToGlyphIndex=function(e){return this.glyphNames.nameToGlyphIndex(e)},V_.prototype.nameToGlyph=function(e){var t=this.nameToGlyphIndex(e),n=this.glyphs.get(t);return n||=this.glyphs.get(0),n},V_.prototype.glyphIndexToName=function(e){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(e):``},V_.prototype.getKerningValue=function(e,t){e=e.index||e,t=t.index||t;var n=this.position.defaultKerningTables;return n?this.position.getKerningValue(n,e,t):this.kerningPairs[e+`,`+t]||0},V_.prototype.defaultRenderOptions={kerning:!0,features:[{script:`arab`,tags:[`init`,`medi`,`fina`,`rlig`]},{script:`latn`,tags:[`liga`,`rlig`]}]},V_.prototype.forEachGlyph=function(e,t,n,r,i,a){t=t===void 0?0:t,n=n===void 0?0:n,r=r===void 0?72:r,i=Object.assign({},this.defaultRenderOptions,i);var o=1/this.unitsPerEm*r,s=this.stringToGlyphs(e,i),c;if(i.kerning){var l=i.script||this.position.getDefaultScriptName();c=this.position.getKerningTables(l,i.language)}for(var u=0;u<s.length;u+=1){var d=s[u];if(a.call(this,d,t,n,r,i),d.advanceWidth&&(t+=d.advanceWidth*o),i.kerning&&u<s.length-1){var f=c?this.position.getKerningValue(c,d.index,s[u+1].index):this.getKerningValue(d,s[u+1]);t+=f*o}i.letterSpacing?t+=i.letterSpacing*r:i.tracking&&(t+=i.tracking/1e3*r)}return t},V_.prototype.getPath=function(e,t,n,r,i){var a=new dd;return this.forEachGlyph(e,t,n,r,i,function(e,t,n,r){var o=e.getPath(t,n,r,i,this);a.extend(o)}),a},V_.prototype.getPaths=function(e,t,n,r,i){var a=[];return this.forEachGlyph(e,t,n,r,i,function(e,t,n,r){var o=e.getPath(t,n,r,i,this);a.push(o)}),a},V_.prototype.getAdvanceWidth=function(e,t,n){return this.forEachGlyph(e,0,0,t,n,function(){})},V_.prototype.draw=function(e,t,n,r,i,a){this.getPath(t,n,r,i,a).draw(e)},V_.prototype.drawPoints=function(e,t,n,r,i,a){this.forEachGlyph(t,n,r,i,a,function(t,n,r,i){t.drawPoints(e,n,r,i)})},V_.prototype.drawMetrics=function(e,t,n,r,i,a){this.forEachGlyph(t,n,r,i,a,function(t,n,r,i){t.drawMetrics(e,n,r,i)})},V_.prototype.getEnglishName=function(e){var t=this.names[e];if(t)return t.en},V_.prototype.validate=function(){var e=this;function t(t){var n=e.getEnglishName(t);n&&n.trim().length}t(`fontFamily`),t(`weightName`),t(`manufacturer`),t(`copyright`),t(`version`),this.unitsPerEm},V_.prototype.toTables=function(){return fm.fontToTable(this)},V_.prototype.toBuffer=function(){return console.warn(`Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.`),this.toArrayBuffer()},V_.prototype.toArrayBuffer=function(){for(var e=this.toTables().encode(),t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r<e.length;r++)n[r]=e[r];return t},V_.prototype.download=function(e){var t=this.getEnglishName(`fontFamily`),n=this.getEnglishName(`fontSubfamily`);e||=t.replace(/\s/g,``)+`-`+n+`.otf`;var r=this.toArrayBuffer();if(window.URL=window.URL||window.webkitURL,window.URL){var i=new DataView(r),a=new Blob([i],{type:`font/opentype`}),o=document.createElement(`a`);o.href=window.URL.createObjectURL(a),o.download=e;var s=document.createEvent(`MouseEvents`);s.initEvent(`click`,!0,!1),o.dispatchEvent(s)}else console.warn(`Font file could not be downloaded. Try using a different browser.`)},V_.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512},V_.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9},V_.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function H_(e,t){var n=JSON.stringify(e),r=256;for(var i in t){var a=parseInt(i);if(!(!a||a<256)){if(JSON.stringify(t[i])===n)return a;r<=a&&(r=a+1)}}return t[r]=e,r}function U_(e,t,n){var r=H_(t.name,n);return[{name:`tag_`+e,type:`TAG`,value:t.tag},{name:`minValue_`+e,type:`FIXED`,value:t.minValue<<16},{name:`defaultValue_`+e,type:`FIXED`,value:t.defaultValue<<16},{name:`maxValue_`+e,type:`FIXED`,value:t.maxValue<<16},{name:`flags_`+e,type:`USHORT`,value:0},{name:`nameID_`+e,type:`USHORT`,value:r}]}function W_(e,t,n){var r={},i=new Q.Parser(e,t);return r.tag=i.parseTag(),r.minValue=i.parseFixed(),r.defaultValue=i.parseFixed(),r.maxValue=i.parseFixed(),i.skip(`uShort`,1),r.name=n[i.parseUShort()]||{},r}function G_(e,t,n,r){for(var i=H_(t.name,r),a=[{name:`nameID_`+e,type:`USHORT`,value:i},{name:`flags_`+e,type:`USHORT`,value:0}],o=0;o<n.length;++o){var s=n[o].tag;a.push({name:`axis_`+e+` `+s,type:`FIXED`,value:t.coordinates[s]<<16})}return a}function K_(e,t,n,r){var i={},a=new Q.Parser(e,t);i.name=r[a.parseUShort()]||{},a.skip(`uShort`,1),i.coordinates={};for(var o=0;o<n.length;++o)i.coordinates[n[o].tag]=a.parseFixed();return i}function q_(e,t){var n=new X.Table(`fvar`,[{name:`version`,type:`ULONG`,value:65536},{name:`offsetToData`,type:`USHORT`,value:0},{name:`countSizePairs`,type:`USHORT`,value:2},{name:`axisCount`,type:`USHORT`,value:e.axes.length},{name:`axisSize`,type:`USHORT`,value:20},{name:`instanceCount`,type:`USHORT`,value:e.instances.length},{name:`instanceSize`,type:`USHORT`,value:4+e.axes.length*4}]);n.offsetToData=n.sizeOf();for(var r=0;r<e.axes.length;r++)n.fields=n.fields.concat(U_(r,e.axes[r],t));for(var i=0;i<e.instances.length;i++)n.fields=n.fields.concat(G_(i,e.instances[i],e.axes,t));return n}function J_(e,t,n){var r=new Q.Parser(e,t),i=r.parseULong();q.argument(i===65536,`Unsupported fvar table version.`);var a=r.parseOffset16();r.skip(`uShort`,1);for(var o=r.parseUShort(),s=r.parseUShort(),c=r.parseUShort(),l=r.parseUShort(),u=[],d=0;d<o;d++)u.push(W_(e,t+a+d*s,n));for(var f=[],p=t+a+o*s,m=0;m<c;m++)f.push(K_(e,p+m*l,u,n));return{axes:u,instances:f}}var Y_={make:q_,parse:J_},X_=function(){return{coverage:this.parsePointer(Z.coverage),attachPoints:this.parseList(Z.pointer(Z.uShortList))}},Z_=function(){var e=this.parseUShort();if(q.argument(e===1||e===2||e===3,`Unsupported CaretValue table version.`),e===1)return{coordinate:this.parseShort()};if(e===2)return{pointindex:this.parseShort()};if(e===3)return{coordinate:this.parseShort()}},Q_=function(){return this.parseList(Z.pointer(Z_))},$_=function(){return{coverage:this.parsePointer(Z.coverage),ligGlyphs:this.parseList(Z.pointer(Q_))}},ev=function(){return this.parseUShort(),this.parseList(Z.pointer(Z.coverage))};function tv(e,t){t||=0;var n=new Z(e,t),r=n.parseVersion(1);q.argument(r===1||r===1.2||r===1.3,`Unsupported GDEF table version.`);var i={version:r,classDef:n.parsePointer(Z.classDef),attachList:n.parsePointer(X_),ligCaretList:n.parsePointer($_),markAttachClassDef:n.parsePointer(Z.classDef)};return r>=1.2&&(i.markGlyphSets=n.parsePointer(ev)),i}var nv={parse:tv},rv=Array(10);rv[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(Z.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(Z.coverage),values:this.parseValueRecordList()};q.assert(!1,`0x`+e.toString(16)+`: GPOS lookup type 1 format must be 1 or 2.`)},rv[2]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();q.assert(t===1||t===2,`0x`+e.toString(16)+`: GPOS lookup type 2 format must be 1 or 2.`);var n=this.parsePointer(Z.coverage),r=this.parseUShort(),i=this.parseUShort();if(t===1)return{posFormat:t,coverage:n,valueFormat1:r,valueFormat2:i,pairSets:this.parseList(Z.pointer(Z.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(r),value2:this.parseValueRecord(i)}})))};if(t===2){var a=this.parsePointer(Z.classDef),o=this.parsePointer(Z.classDef),s=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:n,valueFormat1:r,valueFormat2:i,classDef1:a,classDef2:o,class1Count:s,class2Count:c,classRecords:this.parseList(s,Z.list(c,function(){return{value1:this.parseValueRecord(r),value2:this.parseValueRecord(i)}}))}}},rv[3]=function(){return{error:`GPOS Lookup 3 not supported`}},rv[4]=function(){return{error:`GPOS Lookup 4 not supported`}},rv[5]=function(){return{error:`GPOS Lookup 5 not supported`}},rv[6]=function(){return{error:`GPOS Lookup 6 not supported`}},rv[7]=function(){return{error:`GPOS Lookup 7 not supported`}},rv[8]=function(){return{error:`GPOS Lookup 8 not supported`}},rv[9]=function(){return{error:`GPOS Lookup 9 not supported`}};function iv(e,t){t||=0;var n=new Z(e,t),r=n.parseVersion(1);return q.argument(r===1||r===1.1,`Unsupported GPOS table version `+r),r===1?{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(rv)}:{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(rv),variations:n.parseFeatureVariationsList()}}var av=Array(10);function ov(e){return new X.Table(`GPOS`,[{name:`version`,type:`ULONG`,value:65536},{name:`scripts`,type:`TABLE`,value:new X.ScriptList(e.scripts)},{name:`features`,type:`TABLE`,value:new X.FeatureList(e.features)},{name:`lookups`,type:`TABLE`,value:new X.LookupList(e.lookups,av)}])}var sv={parse:iv,make:ov};function cv(e){var t={};e.skip(`uShort`);var n=e.parseUShort();q.argument(n===0,`Unsupported kern sub-table version.`),e.skip(`uShort`,2);var r=e.parseUShort();e.skip(`uShort`,3);for(var i=0;i<r;i+=1){var a=e.parseUShort(),o=e.parseUShort(),s=e.parseShort();t[a+`,`+o]=s}return t}function lv(e){var t={};e.skip(`uShort`),e.parseULong()>1&&console.warn(`Only the first kern subtable is supported.`),e.skip(`uLong`);var n=e.parseUShort()&255;if(e.skip(`uShort`),n===0){var r=e.parseUShort();e.skip(`uShort`,3);for(var i=0;i<r;i+=1){var a=e.parseUShort(),o=e.parseUShort(),s=e.parseShort();t[a+`,`+o]=s}}return t}function uv(e,t){var n=new Q.Parser(e,t),r=n.parseUShort();if(r===0)return cv(n);if(r===1)return lv(n);throw Error(`Unsupported kern table version (`+r+`).`)}var dv={parse:uv};function fv(e,t,n,r){for(var i=new Q.Parser(e,t),a=r?i.parseUShort:i.parseULong,o=[],s=0;s<n+1;s+=1){var c=a.call(i);r&&(c*=2),o.push(c)}return o}var pv={parse:fv};function mv(e,t){var n=new XMLHttpRequest;n.open(`get`,e,!0),n.responseType=`arraybuffer`,n.onload=function(){return n.response?t(null,n.response):t(`Font could not be loaded: `+n.statusText)},n.onerror=function(){t(`Font could not be loaded`)},n.send()}function hv(e,t){for(var n=[],r=12,i=0;i<t;i+=1){var a=Q.getTag(e,r),o=Q.getULong(e,r+4),s=Q.getULong(e,r+8),c=Q.getULong(e,r+12);n.push({tag:a,checksum:o,offset:s,length:c,compression:!1}),r+=16}return n}function gv(e,t){for(var n=[],r=44,i=0;i<t;i+=1){var a=Q.getTag(e,r),o=Q.getULong(e,r+4),s=Q.getULong(e,r+8),c=Q.getULong(e,r+12),l=void 0;l=s<c&&`WOFF`,n.push({tag:a,offset:o,compression:l,compressedLength:s,length:c}),r+=20}return n}function _v(e,t){if(t.compression===`WOFF`){var n=new Uint8Array(e.buffer,t.offset+2,t.compressedLength-2),r=new Uint8Array(t.length);if(cd(n,r),r.byteLength!==t.length)throw Error(`Decompression error: `+t.tag+` decompressed length doesn't match recorded length`);return{data:new DataView(r.buffer,0),offset:0}}return{data:e,offset:t.offset}}function vv(e,t){t??={};var n,r,i=new V_({empty:!0}),a=new DataView(e,0),o,s=[],c=Q.getTag(a,0);if(c===`\0\0\0`||c===`true`||c===`typ1`)i.outlinesFormat=`truetype`,o=Q.getUShort(a,4),s=hv(a,o);else if(c===`OTTO`)i.outlinesFormat=`cff`,o=Q.getUShort(a,4),s=hv(a,o);else if(c===`wOFF`){var l=Q.getTag(a,4);if(l===`\0\0\0`)i.outlinesFormat=`truetype`;else if(l===`OTTO`)i.outlinesFormat=`cff`;else throw Error(`Unsupported OpenType flavor `+c);o=Q.getUShort(a,12),s=gv(a,o)}else throw Error(`Unsupported OpenType signature `+c);for(var u,d,f,p,m,h,g,_,v,y,b,x,S=0;S<o;S+=1){var C=s[S],w=void 0;switch(C.tag){case`cmap`:w=_v(a,C),i.tables.cmap=Qd.parse(w.data,w.offset),i.encoding=new af(i.tables.cmap);break;case`cvt `:w=_v(a,C),x=new Q.Parser(w.data,w.offset),i.tables.cvt=x.parseShortList(C.length/2);break;case`fvar`:d=C;break;case`fpgm`:w=_v(a,C),x=new Q.Parser(w.data,w.offset),i.tables.fpgm=x.parseByteList(C.length);break;case`head`:w=_v(a,C),i.tables.head=ap.parse(w.data,w.offset),i.unitsPerEm=i.tables.head.unitsPerEm,n=i.tables.head.indexToLocFormat;break;case`hhea`:w=_v(a,C),i.tables.hhea=cp.parse(w.data,w.offset),i.ascender=i.tables.hhea.ascender,i.descender=i.tables.hhea.descender,i.numberOfHMetrics=i.tables.hhea.numberOfHMetrics;break;case`hmtx`:g=C;break;case`ltag`:w=_v(a,C),r=gp.parse(w.data,w.offset);break;case`COLR`:w=_v(a,C),i.tables.colr=tm.parse(w.data,w.offset);break;case`CPAL`:w=_v(a,C),i.tables.cpal=im.parse(w.data,w.offset);break;case`maxp`:w=_v(a,C),i.tables.maxp=yp.parse(w.data,w.offset),i.numGlyphs=i.tables.maxp.numGlyphs;break;case`name`:y=C;break;case`OS/2`:w=_v(a,C),i.tables.os2=Bp.parse(w.data,w.offset);break;case`post`:w=_v(a,C),i.tables.post=Up.parse(w.data,w.offset),i.glyphNames=new sf(i.tables.post);break;case`prep`:w=_v(a,C),x=new Q.Parser(w.data,w.offset),i.tables.prep=x.parseByteList(C.length);break;case`glyf`:f=C;break;case`loca`:v=C;break;case`CFF `:u=C;break;case`kern`:_=C;break;case`GDEF`:p=C;break;case`GPOS`:m=C;break;case`GSUB`:h=C;break;case`meta`:b=C}}var T=_v(a,y);if(i.tables.name=Fp.parse(T.data,T.offset,r),i.names=i.tables.name,f&&v){var E=n===0,D=_v(a,v),O=pv.parse(D.data,D.offset,i.numGlyphs,E),k=_v(a,f);i.glyphs=jm.parse(k.data,k.offset,O,i,t)}else if(u){var A=_v(a,u);np.parse(A.data,A.offset,i,t)}else throw Error(`Font doesn't contain TrueType or CFF outlines.`);var j=_v(a,g);if(pp.parse(i,j.data,j.offset,i.numberOfHMetrics,i.numGlyphs,i.glyphs,t),uf(i,t),_){var M=_v(a,_);i.kerningPairs=dv.parse(M.data,M.offset)}else i.kerningPairs={};if(p){var N=_v(a,p);i.tables.gdef=nv.parse(N.data,N.offset)}if(m){var P=_v(a,m);i.tables.gpos=sv.parse(P.data,P.offset),i.position.init()}if(h){var ee=_v(a,h);i.tables.gsub=Yp.parse(ee.data,ee.offset)}if(d){var te=_v(a,d);i.tables.fvar=Y_.parse(te.data,te.offset,i.names)}if(b){var ne=_v(a,b);i.tables.meta=Qp.parse(ne.data,ne.offset),i.metas=i.tables.meta}return i}function yv(e,t,n){return n??={},new Promise(function(r,i){mv(e,function(e,a){if(e){if(t)return t(e);i(e)}var o;try{o=vv(a,n)}catch(e){if(t)return t(e,null);i(e)}if(t)return t(null,o);r(o)})})}var bv=Object.freeze({__proto__:null,Font:V_,Glyph:mf,Path:dd,BoundingBox:ud,_parse:Q,parse:vv,load:yv}),xv=class extends Eo{constructor(e){super(e),this.reversed=!1}load(e,t,n,r){let i=this,a=new ko(this.manager);a.setPath(this.path),a.setResponseType(`arraybuffer`),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e){function t(e,t){let r=Math.round,i={},a=1e5/((e.unitsPerEm||2048)*72),o=e.encoding.cmap.glyphIndexMap,s=Object.keys(o);for(let c=0;c<s.length;c++){let l=s[c],u=e.glyphs.glyphs[o[l]];if(l!==void 0){let e={ha:r(u.advanceWidth*a),x_min:r(u.xMin*a),x_max:r(u.xMax*a),o:``};t&&(u.path.commands=n(u.path.commands)),u.path.commands.forEach(function(t){t.type.toLowerCase()===`c`&&(t.type=`b`),e.o+=t.type.toLowerCase()+` `,t.x!==void 0&&t.y!==void 0&&(e.o+=r(t.x*a)+` `+r(t.y*a)+` `),t.x1!==void 0&&t.y1!==void 0&&(e.o+=r(t.x1*a)+` `+r(t.y1*a)+` `),t.x2!==void 0&&t.y2!==void 0&&(e.o+=r(t.x2*a)+` `+r(t.y2*a)+` `)}),Array.isArray(u.unicodes)&&u.unicodes.length>0?u.unicodes.forEach(function(t){i[String.fromCodePoint(t)]=e}):i[String.fromCodePoint(u.unicode)]=e}}return{glyphs:i,familyName:e.getEnglishName(`fullName`),ascender:r(e.ascender*a),descender:r(e.descender*a),underlinePosition:e.tables.post.underlinePosition,underlineThickness:e.tables.post.underlineThickness,boundingBox:{xMin:e.tables.head.xMin,xMax:e.tables.head.xMax,yMin:e.tables.head.yMin,yMax:e.tables.head.yMax},resolution:1e3,original_font_information:e.tables.name}}function n(e){let t=[],n;e.forEach(function(e){e.type.toLowerCase()===`m`?(n=[e],t.push(n)):e.type.toLowerCase()!==`z`&&n.push(e)});let r=[];return t.forEach(function(e){let t={type:`m`,x:e[e.length-1].x,y:e[e.length-1].y};r.push(t);for(let t=e.length-1;t>0;t--){let n=e[t],i={type:n.type};n.x2!==void 0&&n.y2!==void 0?(i.x1=n.x2,i.y1=n.y2,i.x2=n.x1,i.y2=n.y1):n.x1!==void 0&&n.y1!==void 0&&(i.x1=n.x1,i.y1=n.y1),i.x=e[t-1].x,i.y=e[t-1].y,r.push(i)}}),r}return t(bv.parse(e),this.reversed)}},Sv=class{constructor(e){this.isFont=!0,this.type=`Font`,this.data=e}generateShapes(e,t=100,n=`ltr`){let r=[],i=Cv(e,t,this.data,n);for(let e=0,t=i.length;e<t;e++)r.push(...i[e].toShapes());return r}};function Cv(e,t,n,r){let i=Array.from(e),a=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*a,s=[],c=0,l=0;(r==`rtl`||r==`tb`)&&i.reverse();for(let e=0;e<i.length;e++){let t=i[e];if(t===`
`)c=0,l-=o;else{let e=wv(t,a,c,l,n);r==`tb`?(c=0,l+=n.ascender*a):c+=e.offsetX,s.push(e.path)}}return s}function wv(e,t,n,r,i){let a=i.glyphs[e]||i.glyphs[`?`];if(!a){console.error(`THREE.Font: character "`+e+`" does not exists in font family `+i.familyName+`.`);return}let o=new as,s,c,l,u,d,f,p,m;if(a.o){let e=a._cachedOutline||=a.o.split(` `);for(let i=0,a=e.length;i<a;)switch(e[i++]){case`m`:s=e[i++]*t+n,c=e[i++]*t+r,o.moveTo(s,c);break;case`l`:s=e[i++]*t+n,c=e[i++]*t+r,o.lineTo(s,c);break;case`q`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,o.quadraticCurveTo(d,f,l,u);break;case`b`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,p=e[i++]*t+n,m=e[i++]*t+r,o.bezierCurveTo(d,f,p,m,l,u)}}return{offsetX:a.ha*t,path:o}}var Tv=class extends Za{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let r=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type=`TextGeometry`}},Ev=t(),Dv=.36,Ov=.44,kv=(e,t,n)=>{let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25},Av=(e,t)=>(n,r)=>e.reduce((e,[i,a,o])=>kv(e,Math.hypot(n-i,r-a)-o,t),1e9);function jv(e,t,n,r=520){let i=[];for(let a=0;a<r;a++){let o=a/r*Math.PI*2,s=Math.cos(o),c=Math.sin(o),l=0,u=.004;for(;u<2&&e(t+s*u,n+c*u)<0;)l=u,u+=.004;for(let r=0;r<24;r++){let r=(l+u)/2;e(t+s*r,n+c*r)<0?l=r:u=r}i.push(new V(t+s*l,n+c*l))}return i}var Mv=.32,Nv=Av([[Dv,0,Ov],[0,Dv,Ov],[-.36,0,Ov],[0,-.36,Ov]],.05),Pv=Av([[Dv,.01,Mv],[0,Dv,Mv],[-.36,.01,Mv],[0,.02,.17]],.07);function Fv(){let e=new pa(jv(Nv,0,0));e.holes.push(new fa(jv(Pv,0,.05).reverse()));let t=new Za(e,{depth:.09,bevelEnabled:!0,bevelThickness:.045,bevelSize:.04,bevelSegments:8,curveSegments:64,steps:1});return t.translate(0,0,-.045),t.computeVertexNormals(),t}function Iv(){return new eo([[0,.06],[.07,.06],[.11,.03],[.125,-.02],[.125,-.07],[.095,-.1],[.088,-.12],[.15,-.16],[.158,-.21],[.15,-.26],[.1,-.3],[.086,-.33],[.112,-.37],[.112,-.41],[.08,-.45],[.072,-.5],[.068,-1.6],[.066,-2.28],[.078,-2.31],[.108,-2.35],[.112,-2.4],[.108,-2.45],[.078,-2.49],[.068,-2.52],[.068,-3.12],[.086,-3.16],[.09,-3.2],[.075,-3.25],[.04,-3.28],[0,-3.29]].map(([e,t])=>new V(e*1.32,t)),96)}function Lv(){let e=.62,t=.06,n=new pa;n.moveTo(t,-.62/2),n.lineTo(.6499999999999999,-.62/2),n.quadraticCurveTo(.7,-.62/2,.7,-.26),n.lineTo(.7,e/2-.05),n.quadraticCurveTo(.7,e/2,.6499999999999999,e/2),n.lineTo(t,e/2),n.lineTo(t,-.62/2);let r=.085,i=.19,a=new fa;a.moveTo(.315,o(-.19)),a.lineTo(.48500000000000004,o(-.19)),a.lineTo(.48500000000000004,o(-.085)),a.lineTo(.5900000000000001,o(-.085)),a.lineTo(.5900000000000001,o(r)),a.lineTo(.48500000000000004,o(r)),a.lineTo(.48500000000000004,o(i)),a.lineTo(.315,o(i)),a.lineTo(.315,o(r)),a.lineTo(.21000000000000002,o(r)),a.lineTo(.21000000000000002,o(-.085)),a.lineTo(.315,o(-.085)),a.lineTo(.315,o(-.19));function o(e){return e}n.holes.push(a);let s=new Za(n,{depth:.07,bevelEnabled:!0,bevelThickness:.03,bevelSize:.026,bevelSegments:6,curveSegments:24});return s.translate(0,0,-.035),s.computeVertexNormals(),s}function Rv(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createImageData(256,256);for(let e=0;e<65536;e++){let t=Math.floor(e/256),r=150+Math.random()*50+Math.sin(t*.9)*8;n.data[e*4]=n.data[e*4+1]=n.data[e*4+2]=r,n.data[e*4+3]=255}t.putImageData(n,0,0);let r=new Fi(e);return r.wrapS=r.wrapT=a,r.repeat.set(3,3),r}function zv(e,t,n,r){let i=(r.x-n.x)/2,a=.3,o=(i*i+a*a)/(2*a),s=n.y-a+o,c=Math.asin(i/o),l=new pi,u=[];for(let e=0;e<=80;e++){let t=e/80,i=-c+t*c*2;u.push(new H(o*Math.sin(i),s-o*Math.cos(i),n.z+(r.z-n.z)*t))}l.add(new Gr(new no(new Ki(u),160,.03,16),t));let d=new Tv(`Clefsd’Or`,{font:e,size:.42,depth:.07,curveSegments:12,bevelEnabled:!0,bevelThickness:.014,bevelSize:.009,bevelSegments:3});d.computeBoundingBox();let f=d.boundingBox,p=2/(f.max.x-f.min.x);d.scale(p,p,1),d.computeBoundingBox(),f=d.boundingBox,d.translate(-(f.max.x+f.min.x)/2,0,-(f.max.z+f.min.z)/2);let m=o-.06,h=d.attributes.position;for(let e=0;e<h.count;e++){let t=h.getX(e),n=h.getY(e),r=t/m,i=m-n;h.setXY(e,i*Math.sin(r),s-i*Math.cos(r))}return h.needsUpdate=!0,d.computeVertexNormals(),l.add(new Gr(d,t)),l.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),l}function Bv(e,t){let n=new pi,r=new Gr(t.bow,e);r.position.y=.8;let i=new Gr(t.shank,e),a=new Gr(t.bit,e);a.position.y=-2.82,[r,i,a].forEach(e=>{e.castShadow=!0,e.receiveShadow=!0,n.add(e)}),n.position.y=.845;let o=new pi;return o.add(n),o}function Vv({className:e,label:t}){let r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=r.current,t=matchMedia(`(prefers-reduced-motion: reduce)`).matches,n=new fu({antialias:!0,alpha:!0,powerPreference:`high-performance`});n.setPixelRatio(Math.min(2,devicePixelRatio)),n.outputColorSpace=ze,n.toneMapping=4,n.toneMappingExposure=1.18,n.shadowMap.enabled=!0,n.shadowMap.type=2,e.appendChild(n.domElement);let i=new gi,a=new Ms(n),o=a.fromScene(new Iu,.03).texture;i.environment=o;let s=new si(30,1,.1,100);s.position.set(0,.15,10.2);let c=new Ho(16773590,2.6);c.position.set(4,5,6),c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.bias=-4e-4;let l=new Ho(16767392,.9);l.position.set(-6,-1,3);let u=new Ho(16777215,2.2);u.position.set(-2,4,-6);let d=new zo(16762219,18,20);d.position.set(3,-3,-3),i.add(c,l,u,d,new Uo(2759948,.6));let f=Rv(),p=new ao({color:new W(1,.64,.2),metalness:1,roughness:.17,roughnessMap:f,clearcoat:.12,clearcoatRoughness:.06,envMapIntensity:1.7,specularColor:new W(1,.85,.55)}),m={bow:Fv(),shank:Iv(),bit:Lv()},h=new pi,g=Bv(p,m);g.rotation.z=Tt.degToRad(38),g.position.z=.11;let _=Bv(p,m);_.scale.x=-1,_.rotation.z=Tt.degToRad(-38),_.position.z=-.11,h.add(g,_),h.position.y=.06,i.add(h);let v=null,y=!1;new xv().load(`/les-clefs-dor/fonts/cg-600i.woff`,e=>{if(y)return;h.updateMatrixWorld(!0);let t=e=>h.worldToLocal(e.children[0].localToWorld(new H(0,-3.2,0))),n=t(g),r=t(_),[i,a]=n.x<r.x?[n,r]:[r,n];v=zv(new Sv(e),p,i,a),h.add(v)});let b=new Gr(new to(12,12),new ro({opacity:.28}));b.rotation.x=-Math.PI/2,b.position.y=-2.9,b.receiveShadow=!0,i.add(b);let x=new Cu(s,n.domElement);x.enableZoom=!1,x.enablePan=!1,x.enableDamping=!0,x.dampingFactor=.06,x.rotateSpeed=.9,x.minPolarAngle=.25,x.maxPolarAngle=Math.PI-.25,x.autoRotate=!t,x.autoRotateSpeed=1.6;let S;x.addEventListener(`start`,()=>{x.autoRotate=!1,clearTimeout(S),e.classList.add(`grabbing`)}),x.addEventListener(`end`,()=>{e.classList.remove(`grabbing`),t||(S=window.setTimeout(()=>{x.autoRotate=!0},2600))});let C=()=>{let t=e.clientWidth,r=e.clientHeight;t&&r&&(n.setSize(t,r,!1),s.aspect=t/r,s.position.z=t/r<.9?11.2:9.7,s.updateProjectionMatrix())},w=new ResizeObserver(C);w.observe(e),C();let T=!0,E=0,D=new IntersectionObserver(([e])=>{T=e.isIntersecting,T&&k()},{threshold:0});D.observe(e);let O=new Go;function k(){if(cancelAnimationFrame(E),!T)return;E=requestAnimationFrame(k);let e=O.getElapsedTime();t||(h.position.y=.06+Math.sin(e*1.1)*.06),x.update(),n.render(i,s)}return k(),requestAnimationFrame(()=>e.classList.add(`ready`)),()=>{y=!0,v?.traverse(e=>e.geometry?.dispose()),cancelAnimationFrame(E),D.disconnect(),w.disconnect(),clearTimeout(S),x.dispose(),Object.values(m).forEach(e=>e.dispose()),p.dispose(),f.dispose(),o.dispose(),a.dispose(),n.dispose(),n.domElement.remove()}},[]),(0,Ev.jsx)(`div`,{ref:r,className:`key3d `+(e||``),role:`img`,"aria-label":t||`Les Clefs d’Or altın anahtarları`})}export{Vv as default};