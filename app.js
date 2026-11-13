var Dg=Object.defineProperty;var wd=(n,e)=>{for(var t in e)Dg(n,t,{get:e[t],enumerable:!0})};var Ng=0,Ed=1,Ug=2;var rc=1,Og=2,mi=3,Zn=0,pn=1,un=2;var qi=0,fr=1,Td=2,Ad=3,Rd=4,kg=5,xs=100,Fg=101,Bg=102,Cd=103,Pd=104,zg=200,Hg=201,Vg=202,Gg=203,Ml=204,Sl=205,Wg=206,qg=207,Xg=208,$g=209,Yg=210,Zg=211,jg=212,Kg=213,Jg=214,Qg=0,e0=1,t0=2,wa=3,n0=4,i0=5,s0=6,r0=7,ou=0,o0=1,a0=2,Xi=0,c0=1,l0=2,u0=3,h0=4,d0=5,f0=6,Ld="attached",p0="detached",hp=300,gr=301,_r=302,wl=303,El=304,oc=306,Ss=1e3,bn=1001,ao=1002,It=1003,Ea=1004;var no=1005;var ln=1006,au=1007;var Yi=1008;var $i=1009,m0=1010,g0=1011,cu=1012,dp=1013,Gi=1014,gi=1015,co=1016,fp=1017,pp=1018,vs=1020,_0=1021,Tn=1023,x0=1024,y0=1025,bs=1026,xr=1027,v0=1028,mp=1029,b0=1030,gp=1031,_p=1033,Gc=33776,Wc=33777,qc=33778,Xc=33779,Id=35840,Dd=35841,Nd=35842,Ud=35843,xp=36196,Od=37492,kd=37496,Fd=37808,Bd=37809,zd=37810,Hd=37811,Vd=37812,Gd=37813,Wd=37814,qd=37815,Xd=37816,$d=37817,Yd=37818,Zd=37819,jd=37820,Kd=37821,$c=36492,Jd=36494,Qd=36495,M0=36283,ef=36284,tf=36285,nf=36286,lu=2200,S0=2201,w0=2202,yr=2300,ws=2301,Yc=2302,cr=2400,lr=2401,Ta=2402,uu=2500,E0=2501,yp=0,ac=1,bo=2,vp=3e3,Ms=3001,T0=3200,A0=3201,hu=0,R0=1,An="",at="srgb",kt="srgb-linear",du="display-p3",cc="display-p3-linear",Aa="linear",mt="srgb",Ra="rec709",Ca="p3";var qs=7680;var sf=519,C0=512,P0=513,L0=514,bp=515,I0=516,D0=517,N0=518,U0=519,Tl=35044;var rf="300 es",Al=1035,_i=2e3,Pa=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],of=1234567,io=Math.PI/180,vr=180/Math.PI;function kn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function en(n,e,t){return Math.max(e,Math.min(t,n))}function fu(n,e){return(n%e+e)%e}function O0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function k0(n,e,t){return n!==e?(t-n)/(e-n):0}function so(n,e,t){return(1-t)*n+t*e}function F0(n,e,t,i){return so(n,e,1-Math.exp(-t*i))}function B0(n,e=1){return e-Math.abs(fu(n,e*2)-e)}function z0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function H0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function V0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function G0(n,e){return n+Math.random()*(e-n)}function W0(n){return n*(.5-Math.random())}function q0(n){n!==void 0&&(of=n);let e=of+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X0(n){return n*io}function $0(n){return n*vr}function Rl(n){return(n&n-1)===0&&n!==0}function Y0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function La(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Z0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function st(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Mp={DEG2RAD:io,RAD2DEG:vr,generateUUID:kn,clamp:en,euclideanModulo:fu,mapLinear:O0,inverseLerp:k0,lerp:so,damp:F0,pingpong:B0,smoothstep:z0,smootherstep:H0,randInt:V0,randFloat:G0,randFloatSpread:W0,seededRandom:q0,degToRad:X0,radToDeg:$0,isPowerOfTwo:Rl,ceilPowerOfTwo:Y0,floorPowerOfTwo:La,setQuaternionFromProperEuler:Z0,normalize:st,denormalize:Yn},Ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],M=s[7],R=s[2],A=s[5],P=s[8];return r[0]=o*_+a*y+c*R,r[3]=o*m+a*x+c*A,r[6]=o*p+a*M+c*P,r[1]=l*_+u*y+h*R,r[4]=l*m+u*x+h*A,r[7]=l*p+u*M+h*P,r[2]=d*_+f*y+g*R,r[5]=d*m+f*x+g*A,r[8]=d*p+f*M+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new Ye;function Sp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function j0(){let n=lo("canvas");return n.style.display="block",n}var af={};function ro(n){n in af||(af[n]=!0,console.warn(n))}var cf=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lf=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jo={[kt]:{transfer:Aa,primaries:Ra,toReference:n=>n,fromReference:n=>n},[at]:{transfer:mt,primaries:Ra,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[cc]:{transfer:Aa,primaries:Ca,toReference:n=>n.applyMatrix3(lf),fromReference:n=>n.applyMatrix3(cf)},[du]:{transfer:mt,primaries:Ca,toReference:n=>n.convertSRGBToLinear().applyMatrix3(lf),fromReference:n=>n.applyMatrix3(cf).convertLinearToSRGB()}},K0=new Set([kt,cc]),Qe={enabled:!0,_workingColorSpace:kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!K0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=jo[e].toReference,s=jo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return jo[n].primaries},getTransfer:function(n){return n===An?Aa:jo[n].transfer}};function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,Ia=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=lo("canvas")),Xs.width=e.width,Xs.height=e.height;let i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=lo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},J0=0,Da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kc(s[o].image)):r.push(Kc(s[o]))}else r=Kc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Q0=0,Yt=class n extends xi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=bn,s=bn,r=ln,o=Yi,a=Tn,c=$i,l=n.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=kn(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ms?at:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?Ms:vp}set encoding(e){ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ms?at:An}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=hp;Yt.DEFAULT_ANISOTROPY=1;var ct=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,M=(f+1)/2,R=(p+1)/2,A=(u+d)/4,P=(h+_)/4,k=(g+m)/4;return x>M&&x>R?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=A/i,r=P/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=k/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=P/r,s=k/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ms?at:An),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Yt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends Cl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Na=class extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a,p=c*d+l*f+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),A=Math.atan2(R,p*y);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let M=a*y;if(c=c*m+d*M,l=l*m+f*M,u=u*m+g*M,h=h*m+_*M,m===1-a){let R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jc=new I,uf=new yt,hn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Jo.subVectors(this.max,Zr),$s.subVectors(e.a,Zr),Ys.subVectors(e.b,Zr),Zs.subVectors(e.c,Zr),Fi.subVectors(Ys,$s),Bi.subVectors(Zs,Ys),fs.subVectors($s,Zs);let t=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-fs.z,fs.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,fs.z,0,-fs.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-fs.y,fs.x,0];return!Qc(t,$s,Ys,Zs,Jo)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,$s,Ys,Zs,Jo))?!1:(Qo.crossVectors(Fi,Bi),t=[Qo.x,Qo.y,Qo.z],Qc(t,$s,Ys,Zs,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new I,new I,new I,new I,new I,new I,new I,new I],Dn=new I,Ko=new hn,$s=new I,Ys=new I,Zs=new I,Fi=new I,Bi=new I,fs=new I,Zr=new I,Jo=new I,Qo=new I,ps=new I;function Qc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ps.fromArray(n,r);let a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),c=e.dot(ps),l=t.dot(ps),u=i.dot(ps);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var e_=new hn,jr=new I,el=new I,Mn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):e_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(jr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(el)),this.expandByPoint(jr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new I,tl=new I,ea=new I,zi=new I,nl=new I,ta=new I,il=new I,Es=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tl.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(tl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ea),a=zi.dot(this.direction),c=-zi.dot(ea),l=zi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(tl).addScaledVector(ea,d),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,s,r){nl.subVectors(t,e),ta.subVectors(i,e),il.crossVectors(nl,ta);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);let c=a*this.direction.dot(ta.crossVectors(zi,ta));if(c<0)return null;let l=a*this.direction.dot(nl.cross(zi));if(l<0||c+l>o)return null;let u=-a*zi.dot(il);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class n{constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/js.setFromMatrixColumn(e,0).length(),r=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,n_)}lookAt(e,t,i){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Hi.crossVectors(i,yn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Hi.crossVectors(i,yn)),Hi.normalize(),na.crossVectors(yn,Hi),s[0]=Hi.x,s[4]=na.x,s[8]=yn.x,s[1]=Hi.y,s[5]=na.y,s[9]=yn.y,s[2]=Hi.z,s[6]=na.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],x=i[7],M=i[11],R=i[15],A=s[0],P=s[4],k=s[8],v=s[12],w=s[1],B=s[5],$=s[9],J=s[13],U=s[2],z=s[6],E=s[10],D=s[14],L=s[3],O=s[7],Z=s[11],Y=s[15];return r[0]=o*A+a*w+c*U+l*L,r[4]=o*P+a*B+c*z+l*O,r[8]=o*k+a*$+c*E+l*Z,r[12]=o*v+a*J+c*D+l*Y,r[1]=u*A+h*w+d*U+f*L,r[5]=u*P+h*B+d*z+f*O,r[9]=u*k+h*$+d*E+f*Z,r[13]=u*v+h*J+d*D+f*Y,r[2]=g*A+_*w+m*U+p*L,r[6]=g*P+_*B+m*z+p*O,r[10]=g*k+_*$+m*E+p*Z,r[14]=g*v+_*J+m*D+p*Y,r[3]=y*A+x*w+M*U+R*L,r[7]=y*P+x*B+M*z+R*O,r[11]=y*k+x*$+M*E+R*Z,r[15]=y*v+x*J+M*D+R*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-i*o*d+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,x=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,M=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,R=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,A=t*y+i*x+s*M+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=y*P,e[1]=(_*d*r-h*m*r-_*s*f+i*m*f+h*s*p-i*d*p)*P,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*P,e[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*P,e[4]=x*P,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*P,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*P,e[8]=M*P,e[9]=(g*h*r-u*_*r-g*i*f+t*_*f+u*i*p-t*h*p)*P,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*f-t*a*f)*P,e[12]=R*P,e[13]=(u*_*s-g*h*s+g*i*d-t*_*d-u*i*m+t*h*m)*P,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*P,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*d+t*a*d)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,y=c*l,x=c*u,M=c*h,R=i.x,A=i.y,P=i.z;return s[0]=(1-(_+p))*R,s[1]=(f+M)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+x)*P,s[9]=(m-y)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=js.set(s[0],s[1],s[2]).length(),o=js.set(s[4],s[5],s[6]).length(),a=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let l=1/r,u=1/o,h=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=_i){let c=this.elements,l=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===_i)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=_i){let c=this.elements,l=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*l,f=(i+s)*u,g,_;if(a===_i)g=(o+r)*h,_=-2*h;else if(a===Pa)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},js=new I,Nn=new ze,t_=new I(0,0,0),n_=new I(1,1,1),Hi=new I,na=new I,yn=new I,hf=new ze,df=new yt,Ua=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return df.setFromEuler(this),this.setFromQuaternion(df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ua.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},i_=0,ff=new I,Ks=new yt,hi=new ze,ia=new I,Kr=new I,s_=new I,r_=new yt,pf=new I(1,0,0),mf=new I(0,1,0),gf=new I(0,0,1),o_={type:"added"},a_={type:"removed"},St=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Ua,i=new yt,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ye}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(pf,e)}rotateY(e){return this.rotateOnAxis(mf,e)}rotateZ(e){return this.rotateOnAxis(gf,e)}translateOnAxis(e,t){return ff.copy(e).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pf,e)}translateY(e){return this.translateOnAxis(mf,e)}translateZ(e){return this.translateOnAxis(gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ia.copy(e):ia.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Kr,ia,this.up):hi.lookAt(ia,Kr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(hi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(o_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a_)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,s_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,r_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};St.DEFAULT_UP=new I(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new I,di=new I,sl=new I,fi=new I,Js=new I,Qs=new I,_f=new I,rl=new I,ol=new I,al=new I,sa=!1,ur=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Un.subVectors(s,t),di.subVectors(i,t),sl.subVectors(e,t);let o=Un.dot(Un),a=Un.dot(di),c=Un.dot(sl),l=di.dot(di),u=di.dot(sl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,t,i,s,r,o,a,c){return sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sa=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static isFrontFacing(e,t,i,s){return Un.subVectors(i,t),di.subVectors(e,t),Un.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Un.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Js.subVectors(s,i),Qs.subVectors(r,i),rl.subVectors(e,i);let c=Js.dot(rl),l=Qs.dot(rl);if(c<=0&&l<=0)return t.copy(i);ol.subVectors(e,s);let u=Js.dot(ol),h=Qs.dot(ol);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Js,o);al.subVectors(e,r);let f=Js.dot(al),g=Qs.dot(al);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Qs,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return _f.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(_f,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function cl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=fu(e,1),t=en(t,0,1),i=en(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=cl(o,r,e+1/3),this.g=cl(o,r,e),this.b=cl(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=at){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=wp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=jc(e.r),this.g=jc(e.g),this.b=jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Qe.fromWorkingColorSpace(Qt.copy(this),e),Math.round(en(Qt.r*255,0,255))*65536+Math.round(en(Qt.g*255,0,255))*256+Math.round(en(Qt.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Qt.copy(this),t);let i=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=at){Qe.fromWorkingColorSpace(Qt.copy(this),e);let t=Qt.r,i=Qt.g,s=Qt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ra);let i=so(Vi.h,ra.h,t),s=so(Vi.s,ra.s,t),r=so(Vi.l,ra.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new xe;xe.NAMES=wp;var c_=0,mn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=fr,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ml&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wt=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new I,oa=new Ce,gt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}};var Oa=class extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ka=class extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var l_=0,En=new ze,ll=new St,er=new I,vn=new hn,Jr=new hn,Gt=new I,Et=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?ka:Oa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(vn.min,Jr.min),vn.expandByPoint(Gt),Gt.addVectors(vn.max,Jr.max),vn.expandByPoint(Gt)):(vn.expandByPoint(Jr.min),vn.expandByPoint(Jr.max))}vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Gt.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(e,l),Gt.add(er)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new I,u[w]=new I;let h=new I,d=new I,f=new I,g=new Ce,_=new Ce,m=new Ce,p=new I,y=new I;function x(w,B,$){h.fromArray(s,w*3),d.fromArray(s,B*3),f.fromArray(s,$*3),g.fromArray(o,w*2),_.fromArray(o,B*2),m.fromArray(o,$*2),d.sub(h),f.sub(h),_.sub(g),m.sub(g);let J=1/(_.x*m.y-m.x*_.y);isFinite(J)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(J),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(J),l[w].add(p),l[B].add(p),l[$].add(p),u[w].add(y),u[B].add(y),u[$].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,B=M.length;w<B;++w){let $=M[w],J=$.start,U=$.count;for(let z=J,E=J+U;z<E;z+=3)x(i[z+0],i[z+1],i[z+2])}let R=new I,A=new I,P=new I,k=new I;function v(w){P.fromArray(r,w*3),k.copy(P);let B=l[w];R.copy(B),R.sub(P.multiplyScalar(P.dot(B))).normalize(),A.crossVectors(k,B);let J=A.dot(u[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=J}for(let w=0,B=M.length;w<B;++w){let $=M[w],J=$.start,U=$.count;for(let z=J,E=J+U;z<E;z+=3)v(i[z+0]),v(i[z+1]),v(i[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new gt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xf=new ze,ms=new Es,aa=new Mn,yf=new I,tr=new I,nr=new I,ir=new I,ul=new I,ca=new I,la=new Ce,ua=new Ce,ha=new Ce,vf=new I,bf=new I,Mf=new I,da=new I,fa=new I,Ee=class extends St{constructor(e=new Et,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ca.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(ul.fromBufferAttribute(h,e),o?ca.addScaledVector(ul,u):ca.addScaledVector(ul.sub(t),u))}t.add(ca)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(aa.containsPoint(ms.origin)===!1&&(ms.intersectSphere(aa,yf)===null||ms.origin.distanceToSquared(yf)>(e.far-e.near)**2))&&(xf.copy(r).invert(),ms.copy(e.ray).applyMatrix4(xf),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=x;M<R;M+=3){let A=a.getX(M),P=a.getX(M+1),k=a.getX(M+2);s=pa(this,p,e,i,l,u,h,A,P,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=pa(this,o,e,i,l,u,h,y,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=x;M<R;M+=3){let A=M,P=M+1,k=M+2;s=pa(this,p,e,i,l,u,h,A,P,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,M=m+2;s=pa(this,o,e,i,l,u,h,y,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function u_(n,e,t,i,s,r,o,a){let c;if(e.side===pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Zn,a),c===null)return null;fa.copy(a),fa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(fa);return l<t.near||l>t.far?null:{distance:l,point:fa.clone(),object:n}}function pa(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,tr),n.getVertexPosition(c,nr),n.getVertexPosition(l,ir);let u=u_(n,e,t,i,tr,nr,ir,da);if(u){s&&(la.fromBufferAttribute(s,a),ua.fromBufferAttribute(s,c),ha.fromBufferAttribute(s,l),u.uv=ur.getInterpolation(da,tr,nr,ir,la,ua,ha,new Ce)),r&&(la.fromBufferAttribute(r,a),ua.fromBufferAttribute(r,c),ha.fromBufferAttribute(r,l),u.uv1=ur.getInterpolation(da,tr,nr,ir,la,ua,ha,new Ce),u.uv2=u.uv1),o&&(vf.fromBufferAttribute(o,a),bf.fromBufferAttribute(o,c),Mf.fromBufferAttribute(o,l),u.normal=ur.getInterpolation(da,tr,nr,ir,vf,bf,Mf,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new I,materialIndex:0};ur.getNormal(tr,nr,ir,h.normal),u.face=h}return u}var dn=class n extends Et{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(_,m,p,y,x,M,R,A,P,k,v){let w=M/P,B=R/k,$=M/2,J=R/2,U=A/2,z=P+1,E=k+1,D=0,L=0,O=new I;for(let Z=0;Z<E;Z++){let Y=Z*B-J;for(let Q=0;Q<z;Q++){let H=Q*w-$;O[_]=H*y,O[m]=Y*x,O[p]=U,l.push(O.x,O.y,O.z),O[_]=0,O[m]=0,O[p]=A>0?1:-1,u.push(O.x,O.y,O.z),h.push(Q/P),h.push(1-Z/k),D+=1}}for(let Z=0;Z<k;Z++)for(let Y=0;Y<P;Y++){let Q=d+Y+z*Z,H=d+Y+z*(Z+1),j=d+(Y+1)+z*(Z+1),se=d+(Y+1)+z*Z;c.push(Q,H,se),c.push(H,j,se),L+=6}a.addGroup(f,L,v),f+=L,d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function br(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function cn(n){let e={};for(let t=0;t<n.length;t++){let i=br(n[t]);for(let s in i)e[s]=i[s]}return e}function h_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ep(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}var d_={clone:br,merge:cn},f_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vi=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f_,this.fragmentShader=p_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=h_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Fa=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$t=class extends Fa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sr=-90,rr=1,Ll=class extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new $t(sr,rr,e,t);r.layers=this.layers,this.add(r);let o=new $t(sr,rr,e,t);o.layers=this.layers,this.add(o);let a=new $t(sr,rr,e,t);a.layers=this.layers,this.add(a);let c=new $t(sr,rr,e,t);c.layers=this.layers,this.add(c);let l=new $t(sr,rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ba=class extends Yt{constructor(e,t,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Il=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ms?at:An),this.texture=new Ba(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:qi});r.uniforms.tEquirect.value=t;let o=new Ee(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=ln),new Ll(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},hl=new I,m_=new I,g_=new Ye,On=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=hl.subVectors(i,t).cross(m_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(hl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||g_.getNormalMatrix(e),s=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gs=new Mn,ma=new I,ho=class{constructor(e=new On,t=new On,i=new On,s=new On,r=new On,o=new On){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],M=s[15];if(i[0].setComponents(c-r,d-l,m-f,M-p).normalize(),i[1].setComponents(c+r,d+l,m+f,M+p).normalize(),i[2].setComponents(c+o,d+u,m+g,M+y).normalize(),i[3].setComponents(c-o,d-u,m-g,M-y).normalize(),i[4].setComponents(c-a,d-h,m-_,M-x).normalize(),t===_i)i[5].setComponents(c+a,d+h,m+_,M+x).normalize();else if(t===Pa)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Tp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function __(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,u){let h=l.array,d=l.usage,f=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,u,h){let d=u.array,f=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,l),f.count===-1&&g.length===0&&n.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);if(h===void 0)i.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}var Mr=class n extends Et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let y=p*d-o;for(let x=0;x<l;x++){let M=x*h-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,M=y+l*(p+1),R=y+1+l*(p+1),A=y+1+l*p;f.push(x,M,A),f.push(M,R,A)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},x_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y_=`#ifdef USE_ALPHAHASH
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
#endif`,v_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,S_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
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
#endif`,E_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T_=`#ifdef USE_BATCHING
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
#endif`,A_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,R_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L_=`#ifdef USE_IRIDESCENCE
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
#endif`,I_=`#ifdef USE_BUMPMAP
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
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H_=`#define PI 3.141592653589793
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
} // validated`,V_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G_=`vec3 transformedNormal = objectNormal;
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
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z_=`
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
}`,j_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rx=`#ifdef USE_GRADIENTMAP
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
}`,ox=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#endif`,hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,_x=`struct PhysicalMaterial {
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
}`,xx=`
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rx=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
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
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,Nx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zx=`#ifdef USE_NORMALMAP
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
#endif`,Hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ny=`float getShadowMask() {
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
}`,iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,ay=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uy=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,dy=`#ifdef USE_TRANSMISSION
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`#include <common>
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
}`,wy=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,Ey=`#define DISTANCE
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
}`,Ty=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dy=`#define LAMBERT
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
}`,Ny=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Uy=`#define MATCAP
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
}`,Oy=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ky=`#define NORMAL
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
}`,Fy=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,By=`#define PHONG
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
}`,zy=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Hy=`#define STANDARD
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
}`,Vy=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gy=`#define TOON
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
}`,Wy=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qy=`uniform float size;
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
}`,Xy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$y=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Yy=`uniform vec3 color;
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
}`,Zy=`uniform float rotation;
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
}`,jy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ve={alphahash_fragment:x_,alphahash_pars_fragment:y_,alphamap_fragment:v_,alphamap_pars_fragment:b_,alphatest_fragment:M_,alphatest_pars_fragment:S_,aomap_fragment:w_,aomap_pars_fragment:E_,batching_pars_vertex:T_,batching_vertex:A_,begin_vertex:R_,beginnormal_vertex:C_,bsdfs:P_,iridescence_fragment:L_,bumpmap_pars_fragment:I_,clipping_planes_fragment:D_,clipping_planes_pars_fragment:N_,clipping_planes_pars_vertex:U_,clipping_planes_vertex:O_,color_fragment:k_,color_pars_fragment:F_,color_pars_vertex:B_,color_vertex:z_,common:H_,cube_uv_reflection_fragment:V_,defaultnormal_vertex:G_,displacementmap_pars_vertex:W_,displacementmap_vertex:q_,emissivemap_fragment:X_,emissivemap_pars_fragment:$_,colorspace_fragment:Y_,colorspace_pars_fragment:Z_,envmap_fragment:j_,envmap_common_pars_fragment:K_,envmap_pars_fragment:J_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:hx,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:sx,gradientmap_pars_fragment:rx,lightmap_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:cx,lights_lambert_pars_fragment:lx,lights_pars_begin:ux,lights_toon_fragment:dx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:xx,lights_fragment_maps:yx,lights_fragment_end:vx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:wx,map_fragment:Ex,map_pars_fragment:Tx,map_particle_fragment:Ax,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Px,morphcolor_vertex:Lx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Dx,morphtarget_vertex:Nx,normal_fragment_begin:Ux,normal_fragment_maps:Ox,normal_pars_fragment:kx,normal_pars_vertex:Fx,normal_vertex:Bx,normalmap_pars_fragment:zx,clearcoat_normal_fragment_begin:Hx,clearcoat_normal_fragment_maps:Vx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Wx,opaque_fragment:qx,packing:Xx,premultiplied_alpha_fragment:$x,project_vertex:Yx,dithering_fragment:Zx,dithering_pars_fragment:jx,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:ey,shadowmap_vertex:ty,shadowmask_pars_fragment:ny,skinbase_vertex:iy,skinning_pars_vertex:sy,skinning_vertex:ry,skinnormal_vertex:oy,specularmap_fragment:ay,specularmap_pars_fragment:cy,tonemapping_fragment:ly,tonemapping_pars_fragment:uy,transmission_fragment:hy,transmission_pars_fragment:dy,uv_pars_fragment:fy,uv_pars_vertex:py,uv_vertex:my,worldpos_vertex:gy,background_vert:_y,background_frag:xy,backgroundCube_vert:yy,backgroundCube_frag:vy,cube_vert:by,cube_frag:My,depth_vert:Sy,depth_frag:wy,distanceRGBA_vert:Ey,distanceRGBA_frag:Ty,equirect_vert:Ay,equirect_frag:Ry,linedashed_vert:Cy,linedashed_frag:Py,meshbasic_vert:Ly,meshbasic_frag:Iy,meshlambert_vert:Dy,meshlambert_frag:Ny,meshmatcap_vert:Uy,meshmatcap_frag:Oy,meshnormal_vert:ky,meshnormal_frag:Fy,meshphong_vert:By,meshphong_frag:zy,meshphysical_vert:Hy,meshphysical_frag:Vy,meshtoon_vert:Gy,meshtoon_frag:Wy,points_vert:qy,points_frag:Xy,shadow_vert:$y,shadow_frag:Yy,sprite_vert:Zy,sprite_frag:jy},ce={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},$n={basic:{uniforms:cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:cn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:cn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:cn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:cn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:cn([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:cn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:cn([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:cn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:cn([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:cn([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:cn([ce.lights,ce.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};$n.physical={uniforms:cn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var ga={r:0,b:0,g:0};function Ky(n,e,t,i,s,r,o){let a=new xe(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),y=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===oc)?(u===void 0&&(u=new Ee(new dn(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:br($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==mt,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ee(new Mr(2,2),new vi({name:"BackgroundMaterial",uniforms:br($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(ga,Ep(n)),i.buffers.color.setClear(ga.r,ga.g,ga.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Jy(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),l=c,u=!1;function h(U,z,E,D,L){let O=!1;if(o){let Z=_(D,E,z);l!==Z&&(l=Z,f(l.object)),O=p(U,D,E,L),O&&y(U,D,E,L)}else{let Z=z.wireframe===!0;(l.geometry!==D.id||l.program!==E.id||l.wireframe!==Z)&&(l.geometry=D.id,l.program=E.id,l.wireframe=Z,O=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,k(U,z,E,D),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(U){return i.isWebGL2?n.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function _(U,z,E){let D=E.wireframe===!0,L=a[U.id];L===void 0&&(L={},a[U.id]=L);let O=L[z.id];O===void 0&&(O={},L[z.id]=O);let Z=O[D];return Z===void 0&&(Z=m(d()),O[D]=Z),Z}function m(U){let z=[],E=[],D=[];for(let L=0;L<s;L++)z[L]=0,E[L]=0,D[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:E,attributeDivisors:D,object:U,attributes:{},index:null}}function p(U,z,E,D){let L=l.attributes,O=z.attributes,Z=0,Y=E.getAttributes();for(let Q in Y)if(Y[Q].location>=0){let j=L[Q],se=O[Q];if(se===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;Z++}return l.attributesNum!==Z||l.index!==D}function y(U,z,E,D){let L={},O=z.attributes,Z=0,Y=E.getAttributes();for(let Q in Y)if(Y[Q].location>=0){let j=O[Q];j===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(j=U.instanceColor));let se={};se.attribute=j,j&&j.data&&(se.data=j.data),L[Q]=se,Z++}l.attributes=L,l.attributesNum=Z,l.index=D}function x(){let U=l.newAttributes;for(let z=0,E=U.length;z<E;z++)U[z]=0}function M(U){R(U,0)}function R(U,z){let E=l.newAttributes,D=l.enabledAttributes,L=l.attributeDivisors;E[U]=1,D[U]===0&&(n.enableVertexAttribArray(U),D[U]=1),L[U]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),L[U]=z)}function A(){let U=l.newAttributes,z=l.enabledAttributes;for(let E=0,D=z.length;E<D;E++)z[E]!==U[E]&&(n.disableVertexAttribArray(E),z[E]=0)}function P(U,z,E,D,L,O,Z){Z===!0?n.vertexAttribIPointer(U,z,E,L,O):n.vertexAttribPointer(U,z,E,D,L,O)}function k(U,z,E,D){if(i.isWebGL2===!1&&(U.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let L=D.attributes,O=E.getAttributes(),Z=z.defaultAttributeValues;for(let Y in O){let Q=O[Y];if(Q.location>=0){let H=L[Y];if(H===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(H=U.instanceColor)),H!==void 0){let j=H.normalized,se=H.itemSize,oe=t.get(H);if(oe===void 0)continue;let fe=oe.buffer,Ae=oe.type,Oe=oe.bytesPerElement,Pe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||H.gpuType===dp);if(H.isInterleavedBufferAttribute){let Ke=H.data,V=Ke.stride,Xt=H.offset;if(Ke.isInstancedInterleavedBuffer){for(let we=0;we<Q.locationSize;we++)R(Q.location+we,Ke.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let we=0;we<Q.locationSize;we++)M(Q.location+we);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let we=0;we<Q.locationSize;we++)P(Q.location+we,se/Q.locationSize,Ae,j,V*Oe,(Xt+se/Q.locationSize*we)*Oe,Pe)}else{if(H.isInstancedBufferAttribute){for(let Ke=0;Ke<Q.locationSize;Ke++)R(Q.location+Ke,H.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ke=0;Ke<Q.locationSize;Ke++)M(Q.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let Ke=0;Ke<Q.locationSize;Ke++)P(Q.location+Ke,se/Q.locationSize,Ae,j,se*Oe,se/Q.locationSize*Ke*Oe,Pe)}}else if(Z!==void 0){let j=Z[Y];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(Q.location,j);break;case 3:n.vertexAttrib3fv(Q.location,j);break;case 4:n.vertexAttrib4fv(Q.location,j);break;default:n.vertexAttrib1fv(Q.location,j)}}}}A()}function v(){$();for(let U in a){let z=a[U];for(let E in z){let D=z[E];for(let L in D)g(D[L].object),delete D[L];delete z[E]}delete a[U]}}function w(U){if(a[U.id]===void 0)return;let z=a[U.id];for(let E in z){let D=z[E];for(let L in D)g(D[L].object),delete D[L];delete z[E]}delete a[U.id]}function B(U){for(let z in a){let E=a[z];if(E[U.id]===void 0)continue;let D=E[U.id];for(let L in D)g(D[L].object),delete D[L];delete E[U.id]}}function $(){J(),u=!0,l!==c&&(l=c,f(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:$,resetDefaultState:J,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function Qy(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function ev(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=o||e.has("OES_texture_float"),R=x&&M,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:A}}function tv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new On,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let y=r?0:i,x=y*4,M=p.clippingState||null;c.value=M,M=u(g,d,x,f);for(let R=0;R!==x;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function nv(n){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=gr:a===El&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===wl||a===El)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Il(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Zi=class extends Fa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hr=4,Sf=[.125,.215,.35,.446,.526,.582],ys=20,dl=new Zi,wf=new xe,fl=null,pl=0,ml=0,_s=(1+Math.sqrt(5))/2,or=1/_s,Ef=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,_s,or),new I(0,_s,-or),new I(or,0,_s),new I(-or,0,_s),new I(_s,or,0),new I(-_s,or,0)],za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,pl,ml),e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:co,format:Tn,colorSpace:kt,depthBuffer:!1},s=Tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(r)),this._blurMaterial=sv(r,e,t)}return s}_compileMaterial(e){let t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,i,s){let a=new $t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(wf),u.toneMapping=Xi,u.autoClear=!1;let f=new wt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Ee(new dn,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(wf),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;_a(s,y*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===gr||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;_a(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,dl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ef[(s-1)%Ef.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ee(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let p=[],y=0;for(let P=0;P<ys;++P){let k=P/_,v=Math.exp(-k*k/2);p.push(v),P===0?y+=v:P<m&&(y+=2*v)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let M=this._sizeLods[s],R=3*M*(s>x-hr?s-x+hr:0),A=4*(this._cubeSize-M);_a(t,R,A,3*M,2*M),c.setRenderTarget(t),c.render(h,dl)}};function iv(n){let e=[],t=[],i=[],s=n,r=n-hr+1+Sf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-hr?c=Sf[o-n+hr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,k=A>2?0:-1,v=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];y.set(v,_*g*A),x.set(d,m*g*A);let w=[A,A,A,A,A,A];M.set(w,p*g*A)}let R=new Et;R.setAttribute("position",new gt(y,_)),R.setAttribute("uv",new gt(x,m)),R.setAttribute("faceIndex",new gt(M,p)),e.push(R),s>hr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tf(n,e,t){let i=new yi(n,e,t);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sv(n,e,t){let i=new Float32Array(ys),s=new I(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Af(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Rf(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function rv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===wl||c===El,u=c===gr||c===_r;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new za(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new za(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ov(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function av(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(f!==null){let y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){let R=y[x+0],A=y[x+1],P=y[x+2];d.push(R,A,A,P,P,R)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let R=x+0,A=x+1,P=x+2;d.push(R,A,A,P,P,R)}}else return;let m=new(Sp(d)?ka:Oa)(d,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function cv(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,g){n.drawElements(r,g,a,f*c),t.update(g,r,1)}function h(f,g,_){if(_===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function lv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function uv(n,e){return n[0]-e[0]}function hv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function dv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new ct,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(u);if(_===void 0||_.count!==g){let U=function(){$.dispose(),r.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();let y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],P=u.morphAttributes.color||[],k=0;y===!0&&(k=1),x===!0&&(k=2),M===!0&&(k=3);let v=u.attributes.position.count*k,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let B=new Float32Array(v*w*4*g),$=new Na(B,v,w,g);$.type=gi,$.needsUpdate=!0;let J=k*4;for(let z=0;z<g;z++){let E=R[z],D=A[z],L=P[z],O=v*w*4*z;for(let Z=0;Z<E.count;Z++){let Y=Z*J;y===!0&&(o.fromBufferAttribute(E,Z),B[O+Y+0]=o.x,B[O+Y+1]=o.y,B[O+Y+2]=o.z,B[O+Y+3]=0),x===!0&&(o.fromBufferAttribute(D,Z),B[O+Y+4]=o.x,B[O+Y+5]=o.y,B[O+Y+6]=o.z,B[O+Y+7]=0),M===!0&&(o.fromBufferAttribute(L,Z),B[O+Y+8]=o.x,B[O+Y+9]=o.y,B[O+Y+10]=o.z,B[O+Y+11]=L.itemSize===4?o.w:1)}}_={count:g,texture:$,size:new Ce(v,w)},r.set(u,_),u.addEventListener("dispose",U)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=i[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];i[u.id]=g}for(let x=0;x<f;x++){let M=g[x];M[0]=x,M[1]=d[x]}g.sort(hv);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(uv);let _=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=a[x],R=M[0],A=M[1];R!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+x)!==_[R]&&u.setAttribute("morphTarget"+x,_[R]),m&&u.getAttribute("morphNormal"+x)!==m[R]&&u.setAttribute("morphNormal"+x,m[R]),s[x]=A,p+=A):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}let y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function fv(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Ha=class extends Yt{constructor(e,t,i,s,r,o,a,c,l,u){if(u=u!==void 0?u:bs,u!==bs&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===bs&&(i=Gi),i===void 0&&u===xr&&(i=vs),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=c!==void 0?c:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ap=new Yt,Rp=new Ha(1,1);Rp.compareFunction=bp;var Cp=new Na,Pp=new Pl,Lp=new Ba,Cf=[],Pf=[],Lf=new Float32Array(16),If=new Float32Array(9),Df=new Float32Array(4);function Pr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lc(n,e){let t=Pf[e];t===void 0&&(t=new Int32Array(e),Pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function _v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function xv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Df.set(i),n.uniformMatrix2fv(this.addr,!1,Df),Bt(t,i)}}function yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;If.set(i),n.uniformMatrix3fv(this.addr,!1,If),Bt(t,i)}}function vv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Lf.set(i),n.uniformMatrix4fv(this.addr,!1,Lf),Bt(t,i)}}function bv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function Ev(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function Cv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Rp:Ap;t.setTexture2D(e||r,s)}function Pv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Pp,s)}function Lv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Lp,s)}function Iv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cp,s)}function Dv(n){switch(n){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return _v;case 35674:return xv;case 35675:return yv;case 35676:return vv;case 5124:case 35670:return bv;case 35667:case 35671:return Mv;case 35668:case 35672:return Sv;case 35669:case 35673:return wv;case 5125:return Ev;case 36294:return Tv;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Nv(n,e){n.uniform1fv(this.addr,e)}function Uv(n,e){let t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ov(n,e){let t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function kv(n,e){let t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function Fv(n,e){let t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bv(n,e){let t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zv(n,e){let t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hv(n,e){n.uniform1iv(this.addr,e)}function Vv(n,e){n.uniform2iv(this.addr,e)}function Gv(n,e){n.uniform3iv(this.addr,e)}function Wv(n,e){n.uniform4iv(this.addr,e)}function qv(n,e){n.uniform1uiv(this.addr,e)}function Xv(n,e){n.uniform2uiv(this.addr,e)}function $v(n,e){n.uniform3uiv(this.addr,e)}function Yv(n,e){n.uniform4uiv(this.addr,e)}function Zv(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ap,r[o])}function jv(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Pp,r[o])}function Kv(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Lp,r[o])}function Jv(n,e,t){let i=this.cache,s=e.length,r=lc(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cp,r[o])}function Qv(n){switch(n){case 5126:return Nv;case 35664:return Uv;case 35665:return Ov;case 35666:return kv;case 35674:return Fv;case 35675:return Bv;case 35676:return zv;case 5124:case 35670:return Hv;case 35667:case 35671:return Vv;case 35668:case 35672:return Gv;case 35669:case 35673:return Wv;case 5125:return qv;case 36294:return Xv;case 36295:return $v;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Jv}}var Dl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dv(t.type)}},Nl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qv(t.type)}},Ul=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},gl=/(\w+)(\])?(\[|\.)?/g;function Nf(n,e){n.seq.push(e),n.map[e.id]=e}function eb(n,e,t){let i=n.name,s=i.length;for(gl.lastIndex=0;;){let r=gl.exec(i),o=gl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Nf(t,l===void 0?new Dl(a,n,e):new Nl(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Ul(a),Nf(t,h)),t=h}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);eb(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Uf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var tb=37297,nb=0;function ib(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function sb(n){let e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n),i;switch(e===t?i="":e===Ca&&t===Ra?i="LinearDisplayP3ToLinearSRGB":e===Ra&&t===Ca&&(i="LinearSRGBToLinearDisplayP3"),n){case kt:case cc:return[i,"LinearTransferOETF"];case at:case du:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Of(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ib(n.getShaderSource(e),o)}else return s}function rb(n,e){let t=sb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ob(n,e){let t;switch(e){case c0:t="Linear";break;case l0:t="Reinhard";break;case u0:t="OptimizedCineon";break;case h0:t="ACESFilmic";break;case f0:t="AgX";break;case d0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ab(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function cb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(dr).join(`
`)}function lb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ub(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dr(n){return n!==""}function kf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ff(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(n){return n.replace(hb,fb)}var db=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fb(n,e){let t=Ve[e];if(t===void 0){let i=db.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}var pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(n){return n.replace(pb,mb)}function mb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function _b(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===_r&&(e="ENVMAP_MODE_REFRACTION"),e}function yb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ou:e="ENVMAP_BLENDING_MULTIPLY";break;case o0:e="ENVMAP_BLENDING_MIX";break;case a0:e="ENVMAP_BLENDING_ADD";break}return e}function vb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=gb(t),l=_b(t),u=xb(t),h=yb(t),d=vb(t),f=t.isWebGL2?"":ab(t),g=cb(t),_=lb(r),m=s.createProgram(),p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),y.length>0&&(y+=`
`)):(p=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),y=[f,zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Xi?ob("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,rb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Ol(o),o=kf(o,t),o=Ff(o,t),a=Ol(a),a=kf(a,t),a=Ff(a,t),o=Bf(o),a=Bf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+o,R=x+y+a,A=Uf(s,s.VERTEX_SHADER,M),P=Uf(s,s.FRAGMENT_SHADER,R);s.attachShader(m,A),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k($){if(n.debug.checkShaderErrors){let J=s.getProgramInfoLog(m).trim(),U=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(P).trim(),E=!0,D=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(E=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,A,P);else{let L=Of(s,A,"vertex"),O=Of(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+L+`
`+O)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(U===""||z==="")&&(D=!1);D&&($.diagnostics={runnable:E,programLog:J,vertexShader:{log:U,prefix:p},fragmentShader:{log:z,prefix:y}})}s.deleteShader(A),s.deleteShader(P),v=new mr(s,m),w=ub(s,m)}let v;this.getUniforms=function(){return v===void 0&&k(this),v};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,tb)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=P,this}var Mb=0,kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fl(e),t.set(e,i)),i}},Fl=class{constructor(e){this.id=Mb++,this.code=e,this.usedTimes=0}};function Sb(n,e,t,i,s,r,o){let a=new uo,c=new kl,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,w,B,$,J){let U=$.fog,z=J.geometry,E=v.isMeshStandardMaterial?$.environment:null,D=(v.isMeshStandardMaterial?t:e).get(v.envMap||E),L=D&&D.mapping===oc?D.image.height:null,O=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Y=Z!==void 0?Z.length:0,Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let H,j,se,oe;if(O){let rn=$n[O];H=rn.vertexShader,j=rn.fragmentShader}else H=v.vertexShader,j=v.fragmentShader,c.update(v),se=c.getVertexShaderID(v),oe=c.getFragmentShaderID(v);let fe=n.getRenderTarget(),Ae=J.isInstancedMesh===!0,Oe=J.isBatchedMesh===!0,Pe=!!v.map,Ke=!!v.matcap,V=!!D,Xt=!!v.aoMap,we=!!v.lightMap,ke=!!v.bumpMap,ye=!!v.normalMap,bt=!!v.displacementMap,Ge=!!v.emissiveMap,T=!!v.metalnessMap,b=!!v.roughnessMap,W=v.anisotropy>0,ne=v.clearcoat>0,te=v.iridescence>0,ie=v.sheen>0,Me=v.transmission>0,he=W&&!!v.anisotropyMap,ge=ne&&!!v.clearcoatMap,Ie=ne&&!!v.clearcoatNormalMap,We=ne&&!!v.clearcoatRoughnessMap,ee=te&&!!v.iridescenceMap,it=te&&!!v.iridescenceThicknessMap,Ze=ie&&!!v.sheenColorMap,Ue=ie&&!!v.sheenRoughnessMap,Te=!!v.specularMap,_e=!!v.specularColorMap,He=!!v.specularIntensityMap,nt=Me&&!!v.transmissionMap,Rt=Me&&!!v.thicknessMap,Xe=!!v.gradientMap,ae=!!v.alphaMap,N=v.alphaTest>0,le=!!v.alphaHash,ue=!!v.extensions,De=!!z.attributes.uv1,Re=!!z.attributes.uv2,ht=!!z.attributes.uv3,dt=Xi;return v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(dt=n.toneMapping),{isWebGL2:u,shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:H,fragmentShader:j,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Oe,instancing:Ae,instancingColor:Ae&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:kt,map:Pe,matcap:Ke,envMap:V,envMapMode:V&&D.mapping,envMapCubeUVHeight:L,aoMap:Xt,lightMap:we,bumpMap:ke,normalMap:ye,displacementMap:d&&bt,emissiveMap:Ge,normalMapObjectSpace:ye&&v.normalMapType===R0,normalMapTangentSpace:ye&&v.normalMapType===hu,metalnessMap:T,roughnessMap:b,anisotropy:W,anisotropyMap:he,clearcoat:ne,clearcoatMap:ge,clearcoatNormalMap:Ie,clearcoatRoughnessMap:We,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:it,sheen:ie,sheenColorMap:Ze,sheenRoughnessMap:Ue,specularMap:Te,specularColorMap:_e,specularIntensityMap:He,transmission:Me,transmissionMap:nt,thicknessMap:Rt,gradientMap:Xe,opaque:v.transparent===!1&&v.blending===fr,alphaMap:ae,alphaTest:N,alphaHash:le,combine:v.combine,mapUv:Pe&&_(v.map.channel),aoMapUv:Xt&&_(v.aoMap.channel),lightMapUv:we&&_(v.lightMap.channel),bumpMapUv:ke&&_(v.bumpMap.channel),normalMapUv:ye&&_(v.normalMap.channel),displacementMapUv:bt&&_(v.displacementMap.channel),emissiveMapUv:Ge&&_(v.emissiveMap.channel),metalnessMapUv:T&&_(v.metalnessMap.channel),roughnessMapUv:b&&_(v.roughnessMap.channel),anisotropyMapUv:he&&_(v.anisotropyMap.channel),clearcoatMapUv:ge&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(v.sheenRoughnessMap.channel),specularMapUv:Te&&_(v.specularMap.channel),specularColorMapUv:_e&&_(v.specularColorMap.channel),specularIntensityMapUv:He&&_(v.specularIntensityMap.channel),transmissionMapUv:nt&&_(v.transmissionMap.channel),thicknessMapUv:Rt&&_(v.thicknessMap.channel),alphaMapUv:ae&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ye||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Re,vertexUv3s:ht,pointsUvs:J.isPoints===!0&&!!z.attributes.uv&&(Pe||ae),fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&Qe.getTransfer(v.map.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ue&&v.extensions.derivatives===!0,extensionFragDepth:ue&&v.extensions.fragDepth===!0,extensionDrawBuffers:ue&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let B in v.defines)w.push(B),w.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(y(w,v),x(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){let w=g[v.type],B;if(w){let $=$n[w];B=d_.clone($.uniforms)}else B=v.uniforms;return B}function R(v,w){let B;for(let $=0,J=l.length;$<J;$++){let U=l[$];if(U.cacheKey===w){B=U,++B.usedTimes;break}}return B===void 0&&(B=new bb(n,w,v,r),l.push(B)),B}function A(v){if(--v.usedTimes===0){let w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function P(v){c.remove(v)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:k}}function wb(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Eb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){let p=o(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Eb),i.length>1&&i.sort(d||Hf),s.length>1&&s.sort(d||Hf)}function u(){for(let h=e,d=n.length;h<d;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Tb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Vf,n.set(i,[o])):s>=r.length?(o=new Vf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ab(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new xe};break;case"SpotLight":t={position:new I,direction:new I,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Rb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Cb=0;function Pb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lb(n,e){let t=new Ab,i=Rb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);let r=new I,o=new ze,a=new ze;function c(u,h){let d=0,f=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,M=0,R=0,A=0,P=0,k=0,v=0;u.sort(Pb);let w=h===!0?Math.PI:1;for(let $=0,J=u.length;$<J;$++){let U=u[$],z=U.color,E=U.intensity,D=U.distance,L=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=z.r*E*w,f+=z.g*E*w,g+=z.b*E*w;else if(U.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(U.sh.coefficients[O],E);v++}else if(U.isDirectionalLight){let O=t.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){let Z=U.shadow,Y=i.get(U);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.directionalShadow[_]=Y,s.directionalShadowMap[_]=L,s.directionalShadowMatrix[_]=U.shadow.matrix,M++}s.directional[_]=O,_++}else if(U.isSpotLight){let O=t.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(z).multiplyScalar(E*w),O.distance=D,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,s.spot[p]=O;let Z=U.shadow;if(U.map&&(s.spotLightMap[P]=U.map,P++,Z.updateMatrices(U),U.castShadow&&k++),s.spotLightMatrix[p]=Z.matrix,U.castShadow){let Y=i.get(U);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.spotShadow[p]=Y,s.spotShadowMap[p]=L,A++}p++}else if(U.isRectAreaLight){let O=t.get(U);O.color.copy(z).multiplyScalar(E),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),s.rectArea[y]=O,y++}else if(U.isPointLight){let O=t.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity*w),O.distance=U.distance,O.decay=U.decay,U.castShadow){let Z=U.shadow,Y=i.get(U);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,s.pointShadow[m]=Y,s.pointShadowMap[m]=L,s.pointShadowMatrix[m]=U.shadow.matrix,R++}s.point[m]=O,m++}else if(U.isHemisphereLight){let O=t.get(U);O.skyColor.copy(U.color).multiplyScalar(E*w),O.groundColor.copy(U.groundColor).multiplyScalar(E*w),s.hemi[x]=O,x++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let B=s.hash;(B.directionalLength!==_||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==y||B.hemiLength!==x||B.numDirectionalShadows!==M||B.numPointShadows!==R||B.numSpotShadows!==A||B.numSpotMaps!==P||B.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=A+P-k,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=v,B.directionalLength=_,B.pointLength=m,B.spotLength=p,B.rectAreaLength=y,B.hemiLength=x,B.numDirectionalShadows=M,B.numPointShadows=R,B.numSpotShadows=A,B.numSpotMaps=P,B.numLightProbes=v,s.version=Cb++)}function l(u,h){let d=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){let M=u[y];if(M.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(M.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let R=s.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Gf(n,e){let t=new Lb(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ib(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Gf(n,e),t.set(r,[c])):o>=a.length?(c=new Gf(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var Bl=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zl=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nb=`uniform sampler2D shadow_pass;
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
}`;function Ub(n,e,t){let i=new ho,s=new Ce,r=new Ce,o=new ct,a=new Bl({depthPacking:A0}),c=new zl,l={},u=t.maxTextureSize,h={[Zn]:pn,[pn]:Zn,[un]:un},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Db,fragmentShader:Nb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Et;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let p=this.type;this.render=function(A,P,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let v=n.getRenderTarget(),w=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),$=n.state;$.setBlending(qi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let J=p!==mi&&this.type===mi,U=p===mi&&this.type!==mi;for(let z=0,E=A.length;z<E;z++){let D=A[z],L=D.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let O=L.getFrameExtents();if(s.multiply(O),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,L.mapSize.y=r.y)),L.map===null||J===!0||U===!0){let Y=this.type!==mi?{minFilter:It,magFilter:It}:{};L.map!==null&&L.map.dispose(),L.map=new yi(s.x,s.y,Y),L.map.texture.name=D.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();let Z=L.getViewportCount();for(let Y=0;Y<Z;Y++){let Q=L.getViewport(Y);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),$.viewport(o),L.updateMatrices(D,Y),i=L.getFrustum(),M(P,k,L.camera,D,this.type)}L.isPointLightShadow!==!0&&this.type===mi&&y(L,k),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,w,B)};function y(A,P){let k=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,k,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,k,f,_,null)}function x(A,P,k,v){let w=null,B=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)w=B;else if(w=k.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let $=w.uuid,J=P.uuid,U=l[$];U===void 0&&(U={},l[$]=U);let z=U[J];z===void 0&&(z=w.clone(),U[J]=z,P.addEventListener("dispose",R)),w=z}if(w.visible=P.visible,w.wireframe=P.wireframe,v===mi?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:h[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let $=n.properties.get(w);$.light=k}return w}function M(A,P,k,v,w){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);let J=e.update(A),U=A.material;if(Array.isArray(U)){let z=J.groups;for(let E=0,D=z.length;E<D;E++){let L=z[E],O=U[L.materialIndex];if(O&&O.visible){let Z=x(A,O,v,w);A.onBeforeShadow(n,A,P,k,J,Z,L),n.renderBufferDirect(k,null,J,Z,A,L),A.onAfterShadow(n,A,P,k,J,Z,L)}}}else if(U.visible){let z=x(A,U,v,w);A.onBeforeShadow(n,A,P,k,J,z,null),n.renderBufferDirect(k,null,J,z,A,null),A.onAfterShadow(n,A,P,k,J,z,null)}}let $=A.children;for(let J=0,U=$.length;J<U;J++)M($[J],P,k,v,w)}function R(A){A.target.removeEventListener("dispose",R);for(let k in l){let v=l[k],w=A.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function Ob(n,e,t){let i=t.isWebGL2;function s(){let N=!1,le=new ct,ue=null,De=new ct(0,0,0,0);return{setMask:function(Re){ue!==Re&&!N&&(n.colorMask(Re,Re,Re,Re),ue=Re)},setLocked:function(Re){N=Re},setClear:function(Re,ht,dt,Ht,rn){rn===!0&&(Re*=Ht,ht*=Ht,dt*=Ht),le.set(Re,ht,dt,Ht),De.equals(le)===!1&&(n.clearColor(Re,ht,dt,Ht),De.copy(le))},reset:function(){N=!1,ue=null,De.set(-1,0,0,0)}}}function r(){let N=!1,le=null,ue=null,De=null;return{setTest:function(Re){Re?Oe(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Re){le!==Re&&!N&&(n.depthMask(Re),le=Re)},setFunc:function(Re){if(ue!==Re){switch(Re){case Qg:n.depthFunc(n.NEVER);break;case e0:n.depthFunc(n.ALWAYS);break;case t0:n.depthFunc(n.LESS);break;case wa:n.depthFunc(n.LEQUAL);break;case n0:n.depthFunc(n.EQUAL);break;case i0:n.depthFunc(n.GEQUAL);break;case s0:n.depthFunc(n.GREATER);break;case r0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Re}},setLocked:function(Re){N=Re},setClear:function(Re){De!==Re&&(n.clearDepth(Re),De=Re)},reset:function(){N=!1,le=null,ue=null,De=null}}}function o(){let N=!1,le=null,ue=null,De=null,Re=null,ht=null,dt=null,Ht=null,rn=null;return{setTest:function(ft){N||(ft?Oe(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(ft){le!==ft&&!N&&(n.stencilMask(ft),le=ft)},setFunc:function(ft,on,Xn){(ue!==ft||De!==on||Re!==Xn)&&(n.stencilFunc(ft,on,Xn),ue=ft,De=on,Re=Xn)},setOp:function(ft,on,Xn){(ht!==ft||dt!==on||Ht!==Xn)&&(n.stencilOp(ft,on,Xn),ht=ft,dt=on,Ht=Xn)},setLocked:function(ft){N=ft},setClear:function(ft){rn!==ft&&(n.clearStencil(ft),rn=ft)},reset:function(){N=!1,le=null,ue=null,De=null,Re=null,ht=null,dt=null,Ht=null,rn=null}}}let a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,R=null,A=null,P=null,k=null,v=new xe(0,0,0),w=0,B=!1,$=null,J=null,U=null,z=null,E=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,O=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),L=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),L=O>=2);let Y=null,Q={},H=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),se=new ct().fromArray(H),oe=new ct().fromArray(j);function fe(N,le,ue,De){let Re=new Uint8Array(4),ht=n.createTexture();n.bindTexture(N,ht),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<ue;dt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(le+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return ht}let Ae={};Ae[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Oe(n.DEPTH_TEST),c.setFunc(wa),Ge(!1),T(Ed),Oe(n.CULL_FACE),ye(qi);function Oe(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Pe(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Ke(N,le){return f[N]!==le?(n.bindFramebuffer(N,le),f[N]=le,i&&(N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function V(N,le){let ue=_,De=!1;if(N)if(ue=g.get(le),ue===void 0&&(ue=[],g.set(le,ue)),N.isWebGLMultipleRenderTargets){let Re=N.texture;if(ue.length!==Re.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,dt=Re.length;ht<dt;ht++)ue[ht]=n.COLOR_ATTACHMENT0+ht;ue.length=Re.length,De=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,De=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,De=!0);De&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Xt(N){return m!==N?(n.useProgram(N),m=N,!0):!1}let we={[xs]:n.FUNC_ADD,[Fg]:n.FUNC_SUBTRACT,[Bg]:n.FUNC_REVERSE_SUBTRACT};if(i)we[Cd]=n.MIN,we[Pd]=n.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(we[Cd]=N.MIN_EXT,we[Pd]=N.MAX_EXT)}let ke={[zg]:n.ZERO,[Hg]:n.ONE,[Vg]:n.SRC_COLOR,[Ml]:n.SRC_ALPHA,[Yg]:n.SRC_ALPHA_SATURATE,[Xg]:n.DST_COLOR,[Wg]:n.DST_ALPHA,[Gg]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[$g]:n.ONE_MINUS_DST_COLOR,[qg]:n.ONE_MINUS_DST_ALPHA,[Zg]:n.CONSTANT_COLOR,[jg]:n.ONE_MINUS_CONSTANT_COLOR,[Kg]:n.CONSTANT_ALPHA,[Jg]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(N,le,ue,De,Re,ht,dt,Ht,rn,ft){if(N===qi){p===!0&&(Pe(n.BLEND),p=!1);return}if(p===!1&&(Oe(n.BLEND),p=!0),N!==kg){if(N!==y||ft!==B){if((x!==xs||A!==xs)&&(n.blendEquation(n.FUNC_ADD),x=xs,A=xs),ft)switch(N){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Td:n.blendFunc(n.ONE,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Td:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,R=null,P=null,k=null,v.set(0,0,0),w=0,y=N,B=ft}return}Re=Re||le,ht=ht||ue,dt=dt||De,(le!==x||Re!==A)&&(n.blendEquationSeparate(we[le],we[Re]),x=le,A=Re),(ue!==M||De!==R||ht!==P||dt!==k)&&(n.blendFuncSeparate(ke[ue],ke[De],ke[ht],ke[dt]),M=ue,R=De,P=ht,k=dt),(Ht.equals(v)===!1||rn!==w)&&(n.blendColor(Ht.r,Ht.g,Ht.b,rn),v.copy(Ht),w=rn),y=N,B=!1}function bt(N,le){N.side===un?Pe(n.CULL_FACE):Oe(n.CULL_FACE);let ue=N.side===pn;le&&(ue=!ue),Ge(ue),N.blending===fr&&N.transparent===!1?ye(qi):ye(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);let De=N.stencilWrite;l.setTest(De),De&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),W(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(N){$!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),$=N)}function T(N){N!==Ng?(Oe(n.CULL_FACE),N!==J&&(N===Ed?n.cullFace(n.BACK):N===Ug?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),J=N}function b(N){N!==U&&(L&&n.lineWidth(N),U=N)}function W(N,le,ue){N?(Oe(n.POLYGON_OFFSET_FILL),(z!==le||E!==ue)&&(n.polygonOffset(le,ue),z=le,E=ue)):Pe(n.POLYGON_OFFSET_FILL)}function ne(N){N?Oe(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function te(N){N===void 0&&(N=n.TEXTURE0+D-1),Y!==N&&(n.activeTexture(N),Y=N)}function ie(N,le,ue){ue===void 0&&(Y===null?ue=n.TEXTURE0+D-1:ue=Y);let De=Q[ue];De===void 0&&(De={type:void 0,texture:void 0},Q[ue]=De),(De.type!==N||De.texture!==le)&&(Y!==ue&&(n.activeTexture(ue),Y=ue),n.bindTexture(N,le||Ae[N]),De.type=N,De.texture=le)}function Me(){let N=Q[Y];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(N){se.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function nt(N){oe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),oe.copy(N))}function Rt(N,le){let ue=h.get(le);ue===void 0&&(ue=new WeakMap,h.set(le,ue));let De=ue.get(N);De===void 0&&(De=n.getUniformBlockIndex(le,N.name),ue.set(N,De))}function Xe(N,le){let De=h.get(le).get(N);u.get(le)!==De&&(n.uniformBlockBinding(le,De,N.__bindingPointIndex),u.set(le,De))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Y=null,Q={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,R=null,A=null,P=null,k=null,v=new xe(0,0,0),w=0,B=!1,$=null,J=null,U=null,z=null,E=null,se.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Oe,disable:Pe,bindFramebuffer:Ke,drawBuffers:V,useProgram:Xt,setBlending:ye,setMaterial:bt,setFlipSided:Ge,setCullFace:T,setLineWidth:b,setPolygonOffset:W,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:Te,texImage3D:_e,updateUBOMapping:Rt,uniformBlockBinding:Xe,texStorage2D:Ze,texStorage3D:Ue,texSubImage2D:Ie,texSubImage3D:We,compressedTexSubImage2D:ee,compressedTexSubImage3D:it,scissor:He,viewport:nt,reset:ae}}function kb(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return f?new OffscreenCanvas(T,b):lo("canvas")}function _(T,b,W,ne){let te=1;if((T.width>ne||T.height>ne)&&(te=ne/Math.max(T.width,T.height)),te<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ie=b?La:Math.floor,Me=ie(te*T.width),he=ie(te*T.height);h===void 0&&(h=g(Me,he));let ge=W?g(Me,he):h;return ge.width=Me,ge.height=he,ge.getContext("2d").drawImage(T,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Me+"x"+he+")."),ge}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Rl(T.width)&&Rl(T.height)}function p(T){return a?!1:T.wrapS!==bn||T.wrapT!==bn||T.minFilter!==It&&T.minFilter!==ln}function y(T,b){return T.generateMipmaps&&b&&T.minFilter!==It&&T.minFilter!==ln}function x(T){n.generateMipmap(T)}function M(T,b,W,ne,te=!1){if(a===!1)return b;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ie=b;if(b===n.RED&&(W===n.FLOAT&&(ie=n.R32F),W===n.HALF_FLOAT&&(ie=n.R16F),W===n.UNSIGNED_BYTE&&(ie=n.R8)),b===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.R8UI),W===n.UNSIGNED_SHORT&&(ie=n.R16UI),W===n.UNSIGNED_INT&&(ie=n.R32UI),W===n.BYTE&&(ie=n.R8I),W===n.SHORT&&(ie=n.R16I),W===n.INT&&(ie=n.R32I)),b===n.RG&&(W===n.FLOAT&&(ie=n.RG32F),W===n.HALF_FLOAT&&(ie=n.RG16F),W===n.UNSIGNED_BYTE&&(ie=n.RG8)),b===n.RGBA){let Me=te?Aa:Qe.getTransfer(ne);W===n.FLOAT&&(ie=n.RGBA32F),W===n.HALF_FLOAT&&(ie=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ie=Me===mt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(T,b,W){return y(T,W)===!0||T.isFramebufferTexture&&T.minFilter!==It&&T.minFilter!==ln?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function A(T){return T===It||T===Ea||T===no?n.NEAREST:n.LINEAR}function P(T){let b=T.target;b.removeEventListener("dispose",P),v(b),b.isVideoTexture&&u.delete(b)}function k(T){let b=T.target;b.removeEventListener("dispose",k),B(b)}function v(T){let b=i.get(T);if(b.__webglInit===void 0)return;let W=T.source,ne=d.get(W);if(ne){let te=ne[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(T),Object.keys(ne).length===0&&d.delete(W)}i.remove(T)}function w(T){let b=i.get(T);n.deleteTexture(b.__webglTexture);let W=T.source,ne=d.get(W);delete ne[b.__cacheKey],o.memory.textures--}function B(T){let b=T.texture,W=i.get(T),ne=i.get(b);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(W.__webglFramebuffer[te]))for(let ie=0;ie<W.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(W.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(W.__webglFramebuffer[te]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[te])}else{if(Array.isArray(W.__webglFramebuffer))for(let te=0;te<W.__webglFramebuffer.length;te++)n.deleteFramebuffer(W.__webglFramebuffer[te]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let te=0;te<W.__webglColorRenderbuffer.length;te++)W.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[te]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let te=0,ie=b.length;te<ie;te++){let Me=i.get(b[te]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(b[te])}i.remove(b),i.remove(T)}let $=0;function J(){$=0}function U(){let T=$;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),$+=1,T}function z(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function E(T,b){let W=i.get(T);if(T.isVideoTexture&&bt(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){let ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(W,T,b);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+b)}function D(T,b){let W=i.get(T);if(T.version>0&&W.__version!==T.version){se(W,T,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+b)}function L(T,b){let W=i.get(T);if(T.version>0&&W.__version!==T.version){se(W,T,b);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+b)}function O(T,b){let W=i.get(T);if(T.version>0&&W.__version!==T.version){oe(W,T,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+b)}let Z={[Ss]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[ao]:n.MIRRORED_REPEAT},Y={[It]:n.NEAREST,[Ea]:n.NEAREST_MIPMAP_NEAREST,[no]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[au]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Q={[C0]:n.NEVER,[U0]:n.ALWAYS,[P0]:n.LESS,[bp]:n.LEQUAL,[L0]:n.EQUAL,[N0]:n.GEQUAL,[I0]:n.GREATER,[D0]:n.NOTEQUAL};function H(T,b,W){if(W?(n.texParameteri(T,n.TEXTURE_WRAP_S,Z[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Z[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Z[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Y[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Y[b.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==bn||b.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,A(b.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,A(b.minFilter)),b.minFilter!==It&&b.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===It||b.minFilter!==no&&b.minFilter!==Yi||b.type===gi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===co&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(T,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function j(T,b){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",P));let ne=b.source,te=d.get(ne);te===void 0&&(te={},d.set(ne,te));let ie=z(b);if(ie!==T.__cacheKey){te[ie]===void 0&&(te[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[ie].usedTimes++;let Me=te[T.__cacheKey];Me!==void 0&&(te[T.__cacheKey].usedTimes--,Me.usedTimes===0&&w(b)),T.__cacheKey=ie,T.__webglTexture=te[ie].texture}return W}function se(T,b,W){let ne=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=n.TEXTURE_3D);let te=j(T,b),ie=b.source;t.bindTexture(ne,T.__webglTexture,n.TEXTURE0+W);let Me=i.get(ie);if(ie.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+W);let he=Qe.getPrimaries(Qe.workingColorSpace),ge=b.colorSpace===An?null:Qe.getPrimaries(b.colorSpace),Ie=b.colorSpace===An||he===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let We=p(b)&&m(b.image)===!1,ee=_(b.image,We,!1,s.maxTextureSize);ee=Ge(b,ee);let it=m(ee)||a,Ze=r.convert(b.format,b.colorSpace),Ue=r.convert(b.type),Te=M(b.internalFormat,Ze,Ue,b.colorSpace,b.isVideoTexture);H(ne,b,it);let _e,He=b.mipmaps,nt=a&&b.isVideoTexture!==!0&&Te!==xp,Rt=Me.__version===void 0||te===!0,Xe=R(b,ee,it);if(b.isDepthTexture)Te=n.DEPTH_COMPONENT,a?b.type===gi?Te=n.DEPTH_COMPONENT32F:b.type===Gi?Te=n.DEPTH_COMPONENT24:b.type===vs?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:b.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===bs&&Te===n.DEPTH_COMPONENT&&b.type!==cu&&b.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Gi,Ue=r.convert(b.type)),b.format===xr&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,b.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=vs,Ue=r.convert(b.type))),Rt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ze,Ue,null));else if(b.isDataTexture)if(He.length>0&&it){nt&&Rt&&t.texStorage2D(n.TEXTURE_2D,Xe,Te,He[0].width,He[0].height);for(let ae=0,N=He.length;ae<N;ae++)_e=He[ae],nt?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,_e.width,_e.height,Ze,Ue,_e.data):t.texImage2D(n.TEXTURE_2D,ae,Te,_e.width,_e.height,0,Ze,Ue,_e.data);b.generateMipmaps=!1}else nt?(Rt&&t.texStorage2D(n.TEXTURE_2D,Xe,Te,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Ze,Ue,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,Ze,Ue,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Te,He[0].width,He[0].height,ee.depth);for(let ae=0,N=He.length;ae<N;ae++)_e=He[ae],b.format!==Tn?Ze!==null?nt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,ee.depth,Ze,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Te,_e.width,_e.height,ee.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,ee.depth,Ze,Ue,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Te,_e.width,_e.height,ee.depth,0,Ze,Ue,_e.data)}else{nt&&Rt&&t.texStorage2D(n.TEXTURE_2D,Xe,Te,He[0].width,He[0].height);for(let ae=0,N=He.length;ae<N;ae++)_e=He[ae],b.format!==Tn?Ze!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,_e.width,_e.height,Ze,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,_e.width,_e.height,Ze,Ue,_e.data):t.texImage2D(n.TEXTURE_2D,ae,Te,_e.width,_e.height,0,Ze,Ue,_e.data)}else if(b.isDataArrayTexture)nt?(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ze,Ue,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,Ze,Ue,ee.data);else if(b.isData3DTexture)nt?(Rt&&t.texStorage3D(n.TEXTURE_3D,Xe,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ze,Ue,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,Ze,Ue,ee.data);else if(b.isFramebufferTexture){if(Rt)if(nt)t.texStorage2D(n.TEXTURE_2D,Xe,Te,ee.width,ee.height);else{let ae=ee.width,N=ee.height;for(let le=0;le<Xe;le++)t.texImage2D(n.TEXTURE_2D,le,Te,ae,N,0,Ze,Ue,null),ae>>=1,N>>=1}}else if(He.length>0&&it){nt&&Rt&&t.texStorage2D(n.TEXTURE_2D,Xe,Te,He[0].width,He[0].height);for(let ae=0,N=He.length;ae<N;ae++)_e=He[ae],nt?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Ze,Ue,_e):t.texImage2D(n.TEXTURE_2D,ae,Te,Ze,Ue,_e);b.generateMipmaps=!1}else nt?(Rt&&t.texStorage2D(n.TEXTURE_2D,Xe,Te,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ze,Ue,ee)):t.texImage2D(n.TEXTURE_2D,0,Te,Ze,Ue,ee);y(b,it)&&x(ne),Me.__version=ie.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function oe(T,b,W){if(b.image.length!==6)return;let ne=j(T,b),te=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+W);let ie=i.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+W);let Me=Qe.getPrimaries(Qe.workingColorSpace),he=b.colorSpace===An?null:Qe.getPrimaries(b.colorSpace),ge=b.colorSpace===An||Me===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,We=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!Ie&&!We?ee[ae]=_(b.image[ae],!1,!0,s.maxCubemapSize):ee[ae]=We?b.image[ae].image:b.image[ae],ee[ae]=Ge(b,ee[ae]);let it=ee[0],Ze=m(it)||a,Ue=r.convert(b.format,b.colorSpace),Te=r.convert(b.type),_e=M(b.internalFormat,Ue,Te,b.colorSpace),He=a&&b.isVideoTexture!==!0,nt=ie.__version===void 0||ne===!0,Rt=R(b,it,Ze);H(n.TEXTURE_CUBE_MAP,b,Ze);let Xe;if(Ie){He&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,_e,it.width,it.height);for(let ae=0;ae<6;ae++){Xe=ee[ae].mipmaps;for(let N=0;N<Xe.length;N++){let le=Xe[N];b.format!==Tn?Ue!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,le.width,le.height,Ue,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,_e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,le.width,le.height,Ue,Te,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,_e,le.width,le.height,0,Ue,Te,le.data)}}}else{Xe=b.mipmaps,He&&nt&&(Xe.length>0&&Rt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,_e,ee[0].width,ee[0].height));for(let ae=0;ae<6;ae++)if(We){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,Ue,Te,ee[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,ee[ae].width,ee[ae].height,0,Ue,Te,ee[ae].data);for(let N=0;N<Xe.length;N++){let ue=Xe[N].image[ae].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,ue.width,ue.height,Ue,Te,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,_e,ue.width,ue.height,0,Ue,Te,ue.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,Te,ee[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,Ue,Te,ee[ae]);for(let N=0;N<Xe.length;N++){let le=Xe[N];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,Ue,Te,le.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,_e,Ue,Te,le.image[ae])}}}y(b,Ze)&&x(n.TEXTURE_CUBE_MAP),ie.__version=te.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function fe(T,b,W,ne,te,ie){let Me=r.convert(W.format,W.colorSpace),he=r.convert(W.type),ge=M(W.internalFormat,Me,he,W.colorSpace);if(!i.get(b).__hasExternalTextures){let We=Math.max(1,b.width>>ie),ee=Math.max(1,b.height>>ie);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,ge,We,ee,b.depth,0,Me,he,null):t.texImage2D(te,ie,ge,We,ee,0,Me,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ye(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(W).__webglTexture,0,ke(b)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(W).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(T,b,W){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||ye(b)){let te=b.depthTexture;te&&te.isDepthTexture&&(te.type===gi?ne=n.DEPTH_COMPONENT32F:te.type===Gi&&(ne=n.DEPTH_COMPONENT24));let ie=ke(b);ye(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){let ne=ke(b);W&&ye(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,b.width,b.height):ye(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{let ne=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0;te<ne.length;te++){let ie=ne[te],Me=r.convert(ie.format,ie.colorSpace),he=r.convert(ie.type),ge=M(ie.internalFormat,Me,he,ie.colorSpace),Ie=ke(b);W&&ye(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ge,b.width,b.height):ye(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,ge,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ge,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),E(b.depthTexture,0);let ne=i.get(b.depthTexture).__webglTexture,te=ke(b);if(b.depthTexture.format===bs)ye(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(b.depthTexture.format===xr)ye(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Pe(T){let b=i.get(T),W=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Oe(b.__webglFramebuffer,T)}else if(W){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=n.createRenderbuffer(),Ae(b.__webglDepthbuffer[ne],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),Ae(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(T,b,W){let ne=i.get(T);b!==void 0&&fe(ne.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Pe(T)}function V(T){let b=T.texture,W=i.get(T),ne=i.get(b);T.addEventListener("dispose",k),T.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=b.version,o.memory.textures++);let te=T.isWebGLCubeRenderTarget===!0,ie=T.isWebGLMultipleRenderTargets===!0,Me=m(T)||a;if(te){W.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[he]=[];for(let ge=0;ge<b.mipmaps.length;ge++)W.__webglFramebuffer[he][ge]=n.createFramebuffer()}else W.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)W.__webglFramebuffer[he]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ie)if(s.drawBuffers){let he=T.texture;for(let ge=0,Ie=he.length;ge<Ie;ge++){let We=i.get(he[ge]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ye(T)===!1){let he=ie?b:[b];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){let Ie=he[ge];W.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ge]);let We=r.convert(Ie.format,Ie.colorSpace),ee=r.convert(Ie.type),it=M(Ie.internalFormat,We,ee,Ie.colorSpace,T.isXRRenderTarget===!0),Ze=ke(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,it,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,W.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(W.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),H(n.TEXTURE_CUBE_MAP,b,Me);for(let he=0;he<6;he++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)fe(W.__webglFramebuffer[he][ge],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else fe(W.__webglFramebuffer[he],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(b,Me)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let he=T.texture;for(let ge=0,Ie=he.length;ge<Ie;ge++){let We=he[ge],ee=i.get(We);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),H(n.TEXTURE_2D,We,Me),fe(W.__webglFramebuffer,T,We,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),y(We,Me)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),H(he,b,Me),a&&b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)fe(W.__webglFramebuffer[ge],T,b,n.COLOR_ATTACHMENT0,he,ge);else fe(W.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,he,0);y(b,Me)&&x(he),t.unbindTexture()}T.depthBuffer&&Pe(T)}function Xt(T){let b=m(T)||a,W=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0,te=W.length;ne<te;ne++){let ie=W[ne];if(y(ie,b)){let Me=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ie).__webglTexture;t.bindTexture(Me,he),x(Me),t.unbindTexture()}}}function we(T){if(a&&T.samples>0&&ye(T)===!1){let b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],W=T.width,ne=T.height,te=n.COLOR_BUFFER_BIT,ie=[],Me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(T),ge=T.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){ie.push(n.COLOR_ATTACHMENT0+Ie),T.depthBuffer&&ie.push(Me);let We=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(We===!1&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]),We===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),ge){let ee=i.get(b[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,W,ne,0,0,W,ne,te,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]);let We=i.get(b[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function ke(T){return Math.min(s.maxSamples,T.samples)}function ye(T){let b=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function bt(T){let b=o.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function Ge(T,b){let W=T.colorSpace,ne=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Al||W!==kt&&W!==An&&(Qe.getTransfer(W)===mt?a===!1?e.has("EXT_sRGB")===!0&&ne===Tn?(T.format=Al,T.minFilter=ln,T.generateMipmaps=!1):b=Ia.sRGBToLinear(b):(ne!==Tn||te!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}this.allocateTextureUnit=U,this.resetTextureUnits=J,this.setTexture2D=E,this.setTexture2DArray=D,this.setTexture3D=L,this.setTextureCube=O,this.rebindTextures=Ke,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ye}function Fb(n,e,t){let i=t.isWebGL2;function s(r,o=An){let a,c=Qe.getTransfer(o);if(r===$i)return n.UNSIGNED_BYTE;if(r===fp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===pp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===m0)return n.BYTE;if(r===g0)return n.SHORT;if(r===cu)return n.UNSIGNED_SHORT;if(r===dp)return n.INT;if(r===Gi)return n.UNSIGNED_INT;if(r===gi)return n.FLOAT;if(r===co)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===_0)return n.ALPHA;if(r===Tn)return n.RGBA;if(r===x0)return n.LUMINANCE;if(r===y0)return n.LUMINANCE_ALPHA;if(r===bs)return n.DEPTH_COMPONENT;if(r===xr)return n.DEPTH_STENCIL;if(r===Al)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===v0)return n.RED;if(r===mp)return n.RED_INTEGER;if(r===b0)return n.RG;if(r===gp)return n.RG_INTEGER;if(r===_p)return n.RGBA_INTEGER;if(r===Gc||r===Wc||r===qc||r===Xc)if(c===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===Dd||r===Nd||r===Ud)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Id)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ud)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Od||r===kd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Od)return c===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===kd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fd||r===Bd||r===zd||r===Hd||r===Vd||r===Gd||r===Wd||r===qd||r===Xd||r===$d||r===Yd||r===Zd||r===jd||r===Kd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Fd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$d)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$c||r===Jd||r===Qd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===$c)return c===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===M0||r===ef||r===tf||r===nf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===$c)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ef)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Hl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bb={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vl=class extends xi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,y=[],x=[],M=new Ce,R=null,A=new $t;A.layers.enable(1),A.viewport=new ct;let P=new $t;P.layers.enable(2),P.viewport=new ct;let k=[A,P],v=new Hl;v.layers.enable(1),v.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=y[H];return j===void 0&&(j=new oo,y[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=y[H];return j===void 0&&(j=new oo,y[H]=j),j.getGripSpace()},this.getHand=function(H){let j=y[H];return j===void 0&&(j=new oo,y[H]=j),j.getHandSpace()};function $(H){let j=x.indexOf(H.inputSource);if(j===-1)return;let se=y[j];se!==void 0&&(se.update(H.inputSource,H.frame,l||o),se.dispatchEvent({type:H.type,data:H.inputSource}))}function J(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",U);for(let H=0;H<y.length;H++){let j=x[H];j!==null&&(x[H]=null,y[H].disconnect(j))}w=null,B=null,e.setRenderTarget(m),f=null,d=null,h=null,s=null,p=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",J),s.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new yi(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,se=null,oe=null;_.depth&&(oe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?xr:bs,se=_.stencil?vs:Gi);let fe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new yi(d.textureWidth,d.textureHeight,{format:Tn,type:$i,depthTexture:new Ha(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ae=e.properties.get(p);Ae.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(H){for(let j=0;j<H.removed.length;j++){let se=H.removed[j],oe=x.indexOf(se);oe>=0&&(x[oe]=null,y[oe].disconnect(se))}for(let j=0;j<H.added.length;j++){let se=H.added[j],oe=x.indexOf(se);if(oe===-1){for(let Ae=0;Ae<y.length;Ae++)if(Ae>=x.length){x.push(se),oe=Ae;break}else if(x[Ae]===null){x[Ae]=se,oe=Ae;break}if(oe===-1)break}let fe=y[oe];fe&&fe.connect(se)}}let z=new I,E=new I;function D(H,j,se){z.setFromMatrixPosition(j.matrixWorld),E.setFromMatrixPosition(se.matrixWorld);let oe=z.distanceTo(E),fe=j.projectionMatrix.elements,Ae=se.projectionMatrix.elements,Oe=fe[14]/(fe[10]-1),Pe=fe[14]/(fe[10]+1),Ke=(fe[9]+1)/fe[5],V=(fe[9]-1)/fe[5],Xt=(fe[8]-1)/fe[0],we=(Ae[8]+1)/Ae[0],ke=Oe*Xt,ye=Oe*we,bt=oe/(-Xt+we),Ge=bt*-Xt;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ge),H.translateZ(bt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let T=Oe+bt,b=Pe+bt,W=ke-Ge,ne=ye+(oe-Ge),te=Ke*Pe/b*T,ie=V*Pe/b*T;H.projectionMatrix.makePerspective(W,ne,te,ie,T,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function L(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;v.near=P.near=A.near=H.near,v.far=P.far=A.far=H.far,(w!==v.near||B!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,B=v.far);let j=H.parent,se=v.cameras;L(v,j);for(let oe=0;oe<se.length;oe++)L(se[oe],j);se.length===2?D(v,A,P):v.projectionMatrix.copy(A.projectionMatrix),O(H,v,j)};function O(H,j,se){se===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(se.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=vr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let Z=null;function Y(H,j){if(u=j.getViewerPose(l||o),g=j,u!==null){let se=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let oe=!1;se.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let fe=0;fe<se.length;fe++){let Ae=se[fe],Oe=null;if(f!==null)Oe=f.getViewport(Ae);else{let Ke=h.getViewSubImage(d,Ae);Oe=Ke.viewport,fe===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let Pe=k[fe];Pe===void 0&&(Pe=new $t,Pe.layers.enable(fe),Pe.viewport=new ct,k[fe]=Pe),Pe.matrix.fromArray(Ae.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ae.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),fe===0&&(v.matrix.copy(Pe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(Pe)}}for(let se=0;se<y.length;se++){let oe=x[se],fe=y[se];oe!==null&&fe!==void 0&&fe.update(oe,j,l||o)}Z&&Z(H,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let Q=new Tp;Q.setAnimationLoop(Y),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}};function zb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ep(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hb(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let M=x.program;i.uniformBlockBinding(y,M)}function l(y,x){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",m));let R=x.program;i.updateUBOMapping(y,R);let A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){let x=h();y.__bindingPointIndex=x;let M=n.createBuffer(),R=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],M=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,P=M.length;A<P;A++){let k=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,w=k.length;v<w;v++){let B=k[v];if(f(B,A,v,R)===!0){let $=B.__offset,J=Array.isArray(B.value)?B.value:[B.value],U=0;for(let z=0;z<J.length;z++){let E=J[z],D=_(E);typeof E=="number"||typeof E=="boolean"?(B.__data[0]=E,n.bufferSubData(n.UNIFORM_BUFFER,$+U,B.__data)):E.isMatrix3?(B.__data[0]=E.elements[0],B.__data[1]=E.elements[1],B.__data[2]=E.elements[2],B.__data[3]=0,B.__data[4]=E.elements[3],B.__data[5]=E.elements[4],B.__data[6]=E.elements[5],B.__data[7]=0,B.__data[8]=E.elements[6],B.__data[9]=E.elements[7],B.__data[10]=E.elements[8],B.__data[11]=0):(E.toArray(B.__data,U),U+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,x,M,R){let A=y.value,P=x+"_"+M;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{let k=R[P];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return R[P]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(y){let x=y.uniforms,M=0,R=16;for(let P=0,k=x.length;P<k;P++){let v=Array.isArray(x[P])?x[P]:[x[P]];for(let w=0,B=v.length;w<B;w++){let $=v[w],J=Array.isArray($.value)?$.value:[$.value];for(let U=0,z=J.length;U<z;U++){let E=J[U],D=_(E),L=M%R;L!==0&&R-L<D.boundary&&(M+=R-L),$.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=D.storage}}}let A=M%R;return A>0&&(M+=R-A),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var fo=class{constructor(e={}){let{canvas:t=j0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;let x=this,M=!1,R=0,A=0,P=null,k=-1,v=null,w=new ct,B=new ct,$=null,J=new xe(0),U=0,z=t.width,E=t.height,D=1,L=null,O=null,Z=new ct(0,0,z,E),Y=new ct(0,0,z,E),Q=!1,H=new ho,j=!1,se=!1,oe=null,fe=new ze,Ae=new Ce,Oe=new I,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return P===null?D:1}let V=i;function Xt(S,F){for(let q=0;q<S.length;q++){let X=S[q],G=t.getContext(X,F);if(G!==null)return G}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",le,!1),V===null){let F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),V=Xt(F,S),V===null)throw Xt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let we,ke,ye,bt,Ge,T,b,W,ne,te,ie,Me,he,ge,Ie,We,ee,it,Ze,Ue,Te,_e,He,nt;function Rt(){we=new ov(V),ke=new ev(V,we,e),we.init(ke),_e=new Fb(V,we,ke),ye=new Ob(V,we,ke),bt=new lv(V),Ge=new wb,T=new kb(V,we,ye,Ge,ke,_e,bt),b=new nv(x),W=new rv(x),ne=new __(V,ke),He=new Jy(V,we,ne,ke),te=new av(V,ne,bt,He),ie=new fv(V,te,ne,bt),Ze=new dv(V,ke,T),We=new tv(Ge),Me=new Sb(x,b,W,we,ke,He,We),he=new zb(x,Ge),ge=new Tb,Ie=new Ib(we,ke),it=new Ky(x,b,W,ye,ie,d,c),ee=new Ub(x,ie,ke),nt=new Hb(V,bt,ke,ye),Ue=new Qy(V,we,bt,ke),Te=new cv(V,we,bt,ke),bt.programs=Me.programs,x.capabilities=ke,x.extensions=we,x.properties=Ge,x.renderLists=ge,x.shadowMap=ee,x.state=ye,x.info=bt}Rt();let Xe=new Vl(x,V);this.xr=Xe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let S=we.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=we.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(S){S!==void 0&&(D=S,this.setSize(z,E,!1))},this.getSize=function(S){return S.set(z,E)},this.setSize=function(S,F,q=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,E=F,t.width=Math.floor(S*D),t.height=Math.floor(F*D),q===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(z*D,E*D).floor()},this.setDrawingBufferSize=function(S,F,q){z=S,E=F,D=q,t.width=Math.floor(S*q),t.height=Math.floor(F*q),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,F,q,X){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,F,q,X),ye.viewport(w.copy(Z).multiplyScalar(D).floor())},this.getScissor=function(S){return S.copy(Y)},this.setScissor=function(S,F,q,X){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,F,q,X),ye.scissor(B.copy(Y).multiplyScalar(D).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(S){ye.setScissorTest(Q=S)},this.setOpaqueSort=function(S){L=S},this.setTransparentSort=function(S){O=S},this.getClearColor=function(S){return S.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(S=!0,F=!0,q=!0){let X=0;if(S){let G=!1;if(P!==null){let de=P.texture.format;G=de===_p||de===gp||de===mp}if(G){let de=P.texture.type,Se=de===$i||de===Gi||de===cu||de===vs||de===fp||de===pp,Le=it.getClearColor(),Ne=it.getClearAlpha(),qe=Le.r,Fe=Le.g,Be=Le.b;Se?(f[0]=qe,f[1]=Fe,f[2]=Be,f[3]=Ne,V.clearBufferuiv(V.COLOR,0,f)):(g[0]=qe,g[1]=Fe,g[2]=Be,g[3]=Ne,V.clearBufferiv(V.COLOR,0,g))}else X|=V.COLOR_BUFFER_BIT}F&&(X|=V.DEPTH_BUFFER_BIT),q&&(X|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ge.dispose(),Ie.dispose(),Ge.dispose(),b.dispose(),W.dispose(),ie.dispose(),He.dispose(),nt.dispose(),Me.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",rn),Xe.removeEventListener("sessionend",ft),oe&&(oe.dispose(),oe=null),on.stop()};function ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let S=bt.autoReset,F=ee.enabled,q=ee.autoUpdate,X=ee.needsUpdate,G=ee.type;Rt(),bt.autoReset=S,ee.enabled=F,ee.autoUpdate=q,ee.needsUpdate=X,ee.type=G}function le(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ue(S){let F=S.target;F.removeEventListener("dispose",ue),De(F)}function De(S){Re(S),Ge.remove(S)}function Re(S){let F=Ge.get(S).programs;F!==void 0&&(F.forEach(function(q){Me.releaseProgram(q)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,q,X,G,de){F===null&&(F=Pe);let Se=G.isMesh&&G.matrixWorld.determinant()<0,Le=Cg(S,F,q,X,G);ye.setMaterial(X,Se);let Ne=q.index,qe=1;if(X.wireframe===!0){if(Ne=te.getWireframeAttribute(q),Ne===void 0)return;qe=2}let Fe=q.drawRange,Be=q.attributes.position,Lt=Fe.start*qe,xn=(Fe.start+Fe.count)*qe;de!==null&&(Lt=Math.max(Lt,de.start*qe),xn=Math.min(xn,(de.start+de.count)*qe)),Ne!==null?(Lt=Math.max(Lt,0),xn=Math.min(xn,Ne.count)):Be!=null&&(Lt=Math.max(Lt,0),xn=Math.min(xn,Be.count));let Vt=xn-Lt;if(Vt<0||Vt===1/0)return;He.setup(G,X,Le,q,Ne);let ci,Mt=Ue;if(Ne!==null&&(ci=ne.get(Ne),Mt=Te,Mt.setIndex(ci)),G.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*Ke()),Mt.setMode(V.LINES)):Mt.setMode(V.TRIANGLES);else if(G.isLine){let $e=X.linewidth;$e===void 0&&($e=1),ye.setLineWidth($e*Ke()),G.isLineSegments?Mt.setMode(V.LINES):G.isLineLoop?Mt.setMode(V.LINE_LOOP):Mt.setMode(V.LINE_STRIP)}else G.isPoints?Mt.setMode(V.POINTS):G.isSprite&&Mt.setMode(V.TRIANGLES);if(G.isBatchedMesh)Mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Mt.renderInstances(Lt,Vt,G.count);else if(q.isInstancedBufferGeometry){let $e=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Bc=Math.min(q.instanceCount,$e);Mt.renderInstances(Lt,Vt,Bc)}else Mt.render(Lt,Vt)};function ht(S,F,q){S.transparent===!0&&S.side===un&&S.forceSinglePass===!1?(S.side=pn,S.needsUpdate=!0,Zo(S,F,q),S.side=Zn,S.needsUpdate=!0,Zo(S,F,q),S.side=un):Zo(S,F,q)}this.compile=function(S,F,q=null){q===null&&(q=S),m=Ie.get(q),m.init(),y.push(m),q.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),S!==q&&S.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);let X=new Set;return S.traverse(function(G){let de=G.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){let Le=de[Se];ht(Le,q,G),X.add(Le)}else ht(de,q,G),X.add(de)}),y.pop(),m=null,X},this.compileAsync=function(S,F,q=null){let X=this.compile(S,F,q);return new Promise(G=>{function de(){if(X.forEach(function(Se){Ge.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){G(S);return}setTimeout(de,10)}we.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let dt=null;function Ht(S){dt&&dt(S)}function rn(){on.stop()}function ft(){on.start()}let on=new Tp;on.setAnimationLoop(Ht),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(S){dt=S,Xe.setAnimationLoop(S),S===null?on.stop():on.start()},Xe.addEventListener("sessionstart",rn),Xe.addEventListener("sessionend",ft),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(F),F=Xe.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,P),m=Ie.get(S,y.length),m.init(),y.push(m),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H.setFromProjectionMatrix(fe),se=this.localClippingEnabled,j=We.init(this.clippingPlanes,se),_=ge.get(S,p.length),_.init(),p.push(_),Xn(S,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(L,O),this.info.render.frame++,j===!0&&We.beginShadows();let q=m.state.shadowsArray;if(ee.render(q,S,F),j===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(_,S),m.setupLights(x._useLegacyLights),F.isArrayCamera){let X=F.cameras;for(let G=0,de=X.length;G<de;G++){let Se=X[G];xd(_,S,Se,Se.viewport)}}else xd(_,S,F);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(x,S,F),He.resetDefaultState(),k=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Xn(S,F,q,X){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){X&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);let Se=ie.update(S),Le=S.material;Le.visible&&_.push(S,Se,Le,q,Oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){let Se=ie.update(S),Le=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Oe.copy(Se.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(Le)){let Ne=Se.groups;for(let qe=0,Fe=Ne.length;qe<Fe;qe++){let Be=Ne[qe],Lt=Le[Be.materialIndex];Lt&&Lt.visible&&_.push(S,Se,Lt,q,Oe.z,Be)}}else Le.visible&&_.push(S,Se,Le,q,Oe.z,null)}}let de=S.children;for(let Se=0,Le=de.length;Se<Le;Se++)Xn(de[Se],F,q,X)}function xd(S,F,q,X){let G=S.opaque,de=S.transmissive,Se=S.transparent;m.setupLightsView(q),j===!0&&We.setGlobalState(x.clippingPlanes,q),de.length>0&&Rg(G,de,F,q),X&&ye.viewport(w.copy(X)),G.length>0&&Yo(G,F,q),de.length>0&&Yo(de,F,q),Se.length>0&&Yo(Se,F,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Rg(S,F,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let de=ke.isWebGL2;oe===null&&(oe=new yi(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?co:$i,minFilter:Yi,samples:de?4:0})),x.getDrawingBufferSize(Ae),de?oe.setSize(Ae.x,Ae.y):oe.setSize(La(Ae.x),La(Ae.y));let Se=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(J),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();let Le=x.toneMapping;x.toneMapping=Xi,Yo(S,q,X),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe);let Ne=!1;for(let qe=0,Fe=F.length;qe<Fe;qe++){let Be=F[qe],Lt=Be.object,xn=Be.geometry,Vt=Be.material,ci=Be.group;if(Vt.side===un&&Lt.layers.test(X.layers)){let Mt=Vt.side;Vt.side=pn,Vt.needsUpdate=!0,yd(Lt,q,X,xn,Vt,ci),Vt.side=Mt,Vt.needsUpdate=!0,Ne=!0}}Ne===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe)),x.setRenderTarget(Se),x.setClearColor(J,U),x.toneMapping=Le}function Yo(S,F,q){let X=F.isScene===!0?F.overrideMaterial:null;for(let G=0,de=S.length;G<de;G++){let Se=S[G],Le=Se.object,Ne=Se.geometry,qe=X===null?Se.material:X,Fe=Se.group;Le.layers.test(q.layers)&&yd(Le,F,q,Ne,qe,Fe)}}function yd(S,F,q,X,G,de){S.onBeforeRender(x,F,q,X,G,de),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(x,F,q,X,S,de),G.transparent===!0&&G.side===un&&G.forceSinglePass===!1?(G.side=pn,G.needsUpdate=!0,x.renderBufferDirect(q,F,X,G,S,de),G.side=Zn,G.needsUpdate=!0,x.renderBufferDirect(q,F,X,G,S,de),G.side=un):x.renderBufferDirect(q,F,X,G,S,de),S.onAfterRender(x,F,q,X,G,de)}function Zo(S,F,q){F.isScene!==!0&&(F=Pe);let X=Ge.get(S),G=m.state.lights,de=m.state.shadowsArray,Se=G.state.version,Le=Me.getParameters(S,G.state,de,F,q),Ne=Me.getProgramCacheKey(Le),qe=X.programs;X.environment=S.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(S.isMeshStandardMaterial?W:b).get(S.envMap||X.environment),qe===void 0&&(S.addEventListener("dispose",ue),qe=new Map,X.programs=qe);let Fe=qe.get(Ne);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===Se)return bd(S,Le),Fe}else Le.uniforms=Me.getUniforms(S),S.onBuild(q,Le,x),S.onBeforeCompile(Le,x),Fe=Me.acquireProgram(Le,Ne),qe.set(Ne,Fe),X.uniforms=Le.uniforms;let Be=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=We.uniform),bd(S,Le),X.needsLights=Lg(S),X.lightsStateVersion=Se,X.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Fe,X.uniformsList=null,Fe}function vd(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=mr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function bd(S,F){let q=Ge.get(S);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Cg(S,F,q,X,G){F.isScene!==!0&&(F=Pe),T.resetTextureUnits();let de=F.fog,Se=X.isMeshStandardMaterial?F.environment:null,Le=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:kt,Ne=(X.isMeshStandardMaterial?W:b).get(X.envMap||Se),qe=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Fe=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!q.morphAttributes.position,Lt=!!q.morphAttributes.normal,xn=!!q.morphAttributes.color,Vt=Xi;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Vt=x.toneMapping);let ci=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=ci!==void 0?ci.length:0,$e=Ge.get(X),Bc=m.state.lights;if(j===!0&&(se===!0||S!==v)){let wn=S===v&&X.id===k;We.setState(X,S,wn)}let Ct=!1;X.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Bc.state.version||$e.outputColorSpace!==Le||G.isBatchedMesh&&$e.batching===!1||!G.isBatchedMesh&&$e.batching===!0||G.isInstancedMesh&&$e.instancing===!1||!G.isInstancedMesh&&$e.instancing===!0||G.isSkinnedMesh&&$e.skinning===!1||!G.isSkinnedMesh&&$e.skinning===!0||G.isInstancedMesh&&$e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$e.instancingColor===!1&&G.instanceColor!==null||$e.envMap!==Ne||X.fog===!0&&$e.fog!==de||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==We.numPlanes||$e.numIntersection!==We.numIntersection)||$e.vertexAlphas!==qe||$e.vertexTangents!==Fe||$e.morphTargets!==Be||$e.morphNormals!==Lt||$e.morphColors!==xn||$e.toneMapping!==Vt||ke.isWebGL2===!0&&$e.morphTargetsCount!==Mt)&&(Ct=!0):(Ct=!0,$e.__version=X.version);let hs=$e.currentProgram;Ct===!0&&(hs=Zo(X,F,G));let Md=!1,Yr=!1,zc=!1,Kt=hs.getUniforms(),ds=$e.uniforms;if(ye.useProgram(hs.program)&&(Md=!0,Yr=!0,zc=!0),X.id!==k&&(k=X.id,Yr=!0),Md||v!==S){Kt.setValue(V,"projectionMatrix",S.projectionMatrix),Kt.setValue(V,"viewMatrix",S.matrixWorldInverse);let wn=Kt.map.cameraPosition;wn!==void 0&&wn.setValue(V,Oe.setFromMatrixPosition(S.matrixWorld)),ke.logarithmicDepthBuffer&&Kt.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Kt.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Yr=!0,zc=!0)}if(G.isSkinnedMesh){Kt.setOptional(V,G,"bindMatrix"),Kt.setOptional(V,G,"bindMatrixInverse");let wn=G.skeleton;wn&&(ke.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Kt.setValue(V,"boneTexture",wn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Kt.setOptional(V,G,"batchingTexture"),Kt.setValue(V,"batchingTexture",G._matricesTexture,T));let Hc=q.morphAttributes;if((Hc.position!==void 0||Hc.normal!==void 0||Hc.color!==void 0&&ke.isWebGL2===!0)&&Ze.update(G,q,hs),(Yr||$e.receiveShadow!==G.receiveShadow)&&($e.receiveShadow=G.receiveShadow,Kt.setValue(V,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ds.envMap.value=Ne,ds.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Yr&&(Kt.setValue(V,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&Pg(ds,zc),de&&X.fog===!0&&he.refreshFogUniforms(ds,de),he.refreshMaterialUniforms(ds,X,D,E,oe),mr.upload(V,vd($e),ds,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(mr.upload(V,vd($e),ds,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Kt.setValue(V,"center",G.center),Kt.setValue(V,"modelViewMatrix",G.modelViewMatrix),Kt.setValue(V,"normalMatrix",G.normalMatrix),Kt.setValue(V,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let wn=X.uniformsGroups;for(let Vc=0,Ig=wn.length;Vc<Ig;Vc++)if(ke.isWebGL2){let Sd=wn[Vc];nt.update(Sd,hs),nt.bind(Sd,hs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hs}function Pg(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Lg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,F,q){Ge.get(S.texture).__webglTexture=F,Ge.get(S.depthTexture).__webglTexture=q;let X=Ge.get(S);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=q===void 0,X.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){let q=Ge.get(S);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,q=0){P=S,R=F,A=q;let X=!0,G=null,de=!1,Se=!1;if(S){let Ne=Ge.get(S);Ne.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(V.FRAMEBUFFER,null),X=!1):Ne.__webglFramebuffer===void 0?T.setupRenderTarget(S):Ne.__hasExternalTextures&&T.rebindTextures(S,Ge.get(S.texture).__webglTexture,Ge.get(S.depthTexture).__webglTexture);let qe=S.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Se=!0);let Fe=Ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?G=Fe[F][q]:G=Fe[F],de=!0):ke.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?G=Ge.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[q]:G=Fe,w.copy(S.viewport),B.copy(S.scissor),$=S.scissorTest}else w.copy(Z).multiplyScalar(D).floor(),B.copy(Y).multiplyScalar(D).floor(),$=Q;if(ye.bindFramebuffer(V.FRAMEBUFFER,G)&&ke.drawBuffers&&X&&ye.drawBuffers(S,G),ye.viewport(w),ye.scissor(B),ye.setScissorTest($),de){let Ne=Ge.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ne.__webglTexture,q)}else if(Se){let Ne=Ge.get(S.texture),qe=F||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ne.__webglTexture,q||0,qe)}k=-1},this.readRenderTargetPixels=function(S,F,q,X,G,de,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){ye.bindFramebuffer(V.FRAMEBUFFER,Le);try{let Ne=S.texture,qe=Ne.format,Fe=Ne.type;if(qe!==Tn&&_e.convert(qe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Be=Fe===co&&(we.has("EXT_color_buffer_half_float")||ke.isWebGL2&&we.has("EXT_color_buffer_float"));if(Fe!==$i&&_e.convert(Fe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===gi&&(ke.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-X&&q>=0&&q<=S.height-G&&V.readPixels(F,q,X,G,_e.convert(qe),_e.convert(Fe),de)}finally{let Ne=P!==null?Ge.get(P).__webglFramebuffer:null;ye.bindFramebuffer(V.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(S,F,q=0){let X=Math.pow(2,-q),G=Math.floor(F.image.width*X),de=Math.floor(F.image.height*X);T.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,q,0,0,S.x,S.y,G,de),ye.unbindTexture()},this.copyTextureToTexture=function(S,F,q,X=0){let G=F.image.width,de=F.image.height,Se=_e.convert(q.format),Le=_e.convert(q.type);T.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment),F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,X,S.x,S.y,G,de,Se,Le,F.image.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,X,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,Se,F.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,X,S.x,S.y,Se,Le,F.image),X===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,F,q,X,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let de=S.max.x-S.min.x+1,Se=S.max.y-S.min.y+1,Le=S.max.z-S.min.z+1,Ne=_e.convert(X.format),qe=_e.convert(X.type),Fe;if(X.isData3DTexture)T.setTexture3D(X,0),Fe=V.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),Fe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);let Be=V.getParameter(V.UNPACK_ROW_LENGTH),Lt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),xn=V.getParameter(V.UNPACK_SKIP_PIXELS),Vt=V.getParameter(V.UNPACK_SKIP_ROWS),ci=V.getParameter(V.UNPACK_SKIP_IMAGES),Mt=q.isCompressedTexture?q.mipmaps[G]:q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Mt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,S.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,S.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,S.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Fe,G,F.x,F.y,F.z,de,Se,Le,Ne,qe,Mt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Fe,G,F.x,F.y,F.z,de,Se,Le,Ne,Mt.data)):V.texSubImage3D(Fe,G,F.x,F.y,F.z,de,Se,Le,Ne,qe,Mt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Be),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Lt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,xn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Vt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ci),G===0&&X.generateMipmaps&&V.generateMipmap(Fe),ye.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,ye.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===du?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===cc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?Ms:vp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ms?at:kt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Gl=class extends fo{};Gl.prototype.isWebGL1Renderer=!0;var Va=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ga=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},po=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new I,mo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Wf=new I,qf=new ct,Xf=new ct,Vb=new I,$f=new ze,xa=new I,_l=new Mn,Yf=new ze,xl=new Es,Wa=class extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ld,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,xa),this.boundingBox.expandByPoint(xa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,xa),this.boundingSphere.expandByPoint(xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_l.copy(this.boundingSphere),_l.applyMatrix4(s),e.ray.intersectsSphere(_l)!==!1&&(Yf.copy(s).invert(),xl.copy(e.ray).applyMatrix4(Yf),!(this.boundingBox!==null&&xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ld?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===p0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;qf.fromBufferAttribute(s.attributes.skinIndex,e),Xf.fromBufferAttribute(s.attributes.skinWeight,e),Wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Xf.getComponent(r);if(o!==0){let a=qf.getComponent(r);$f.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Vb.copy(Wf).applyMatrix4($f),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},go=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wl=class extends Yt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=It,u=It,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zf=new ze,Gb=new ze,qa=class n{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Gb;Zf.multiplyMatrices(a,t[r]),Zf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Wl(t,e,e,Tn,gi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new go),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},Ts=class extends gt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ar=new ze,jf=new ze,ya=[],Kf=new hn,Wb=new ze,Qr=new Ee,eo=new Mn,Sr=class extends Ee{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Wb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),Kf.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(Kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),eo.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(i),e.ray.intersectsSphere(eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),jf.multiplyMatrices(i,ar),Qr.matrixWorld=jf,Qr.raycast(e,ya);for(let o=0,a=ya.length;o<a;o++){let c=ya[o];c.instanceId=r,c.object=this,t.push(c)}ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var _o=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jf=new I,Qf=new I,ep=new ze,yl=new Es,va=new Mn,wr=class extends St{constructor(e=new Et,t=new _o){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Jf.fromBufferAttribute(t,s-1),Qf.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Jf.distanceTo(Qf);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;ep.copy(s).invert(),yl.copy(e.ray).applyMatrix4(ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,h=new I,d=new I,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=f){let R=g.getX(x),A=g.getX(x+1);if(l.fromBufferAttribute(m,R),u.fromBufferAttribute(m,A),yl.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let k=e.ray.origin.distanceTo(d);k<e.near||k>e.far||t.push({distance:k,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,M=y-1;x<M;x+=f){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),yl.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},tp=new I,np=new I,Xa=class extends wr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)tp.fromBufferAttribute(t,s),np.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tp.distanceTo(np);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$a=class extends wr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bi=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ip=new ze,ql=new Es,ba=new Mn,Ma=new I,ji=class extends St{constructor(e=new Et,t=new bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;ip.copy(s).invert(),ql.copy(e.ray).applyMatrix4(ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=l.getX(g);Ma.fromBufferAttribute(h,m),sp(Ma,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ma.fromBufferAttribute(h,g),sp(Ma,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sp(n,e,t,i,s,r,o){let a=ql.distanceSqToPoint(n);if(a<t){let c=new I;ql.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Ya=class extends Yt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var As=class n extends Et{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,u=new Ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fn=class n extends Et{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,_=[],m=i/2,p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function y(){let M=new I,R=new I,A=0,P=(t-e)/i;for(let k=0;k<=r;k++){let v=[],w=k/r,B=w*(t-e)+e;for(let $=0;$<=s;$++){let J=$/s,U=J*c+a,z=Math.sin(U),E=Math.cos(U);R.x=B*z,R.y=-w*i+m,R.z=B*E,h.push(R.x,R.y,R.z),M.set(z,P,E).normalize(),d.push(M.x,M.y,M.z),f.push(J,1-w),v.push(g++)}_.push(v)}for(let k=0;k<s;k++)for(let v=0;v<r;v++){let w=_[v][k],B=_[v+1][k],$=_[v+1][k+1],J=_[v][k+1];u.push(w,B,J),u.push(B,$,J),A+=6}l.addGroup(p,A,0),p+=A}function x(M){let R=g,A=new Ce,P=new I,k=0,v=M===!0?e:t,w=M===!0?1:-1;for(let $=1;$<=s;$++)h.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let B=g;for(let $=0;$<=s;$++){let U=$/s*c+a,z=Math.cos(U),E=Math.sin(U);P.x=v*E,P.y=m*w,P.z=v*z,h.push(P.x,P.y,P.z),d.push(0,w,0),A.x=z*.5+.5,A.y=E*.5*w+.5,f.push(A.x,A.y),g++}for(let $=0;$<s;$++){let J=R+$,U=B+$;M===!0?u.push(U,U+1,J):u.push(U+1,U,J),k+=3}l.addGroup(p,k,M===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mi=class n extends Fn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xl=class n extends Et{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new I,M=new I,R=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],x),f(t[A+1],M),f(t[A+2],R),c(x,M,R,y)}function c(y,x,M,R){let A=R+1,P=[];for(let k=0;k<=A;k++){P[k]=[];let v=y.clone().lerp(M,k/A),w=x.clone().lerp(M,k/A),B=A-k;for(let $=0;$<=B;$++)$===0&&k===A?P[k][$]=v:P[k][$]=v.clone().lerp(w,$/B)}for(let k=0;k<A;k++)for(let v=0;v<2*(A-k)-1;v++){let w=Math.floor(v/2);v%2===0?(d(P[k][w+1]),d(P[k+1][w]),d(P[k][w])):(d(P[k][w+1]),d(P[k+1][w+1]),d(P[k+1][w]))}}function l(y){let x=new I;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function u(){let y=new I;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(M,1-R)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],R=o[y+4],A=Math.max(x,M,R),P=Math.min(x,M,R);A>.9&&P<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){let M=y*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){let y=new I,x=new I,M=new I,R=new I,A=new Ce,P=new Ce,k=new Ce;for(let v=0,w=0;v<r.length;v+=9,w+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),A.set(o[w+0],o[w+1]),P.set(o[w+2],o[w+3]),k.set(o[w+4],o[w+5]),R.copy(y).add(x).add(M).divideScalar(3);let B=m(R);_(A,w+0,y,B),_(P,w+2,x,B),_(k,w+4,M,B)}}function _(y,x,M,R){R<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var xo=class n extends Xl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Za=class n extends Et{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/s,f=new I,g=new Ce;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let y=p+m,x=y,M=y+i+1,R=y+i+2,A=y+1;a.push(x,M,A),a.push(M,R,A)}}this.setIndex(a),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Si=class n extends Et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let y=[],x=p/i,M=0;p===0&&o===0?M=.5/t:p===i&&c===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let A=R/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+M,1-x),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let x=u[p][y+1],M=u[p][y],R=u[p+1][y],A=u[p+1][y+1];(p!==0||o>0)&&f.push(x,M,A),(p!==i-1||c<Math.PI)&&f.push(M,R,A)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Er=class n extends Et{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new I,h=new I,d=new I;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Tr=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends Tr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zt=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Sa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Xb(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function rp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function Ip(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends Ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cr,endingEnd:cr}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lr:r=e,a=2*t-i;break;case Ta:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case lr:o=e,c=2*i-t;break;case Ta:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[u+R]+y*o[l+R]+x*o[c+R]+M*o[h+R];return r}},ja=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Yl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case ws:t=this.InterpolantFactoryMethodLinear;break;case Yc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&qb(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ws;var Ji=class extends Cn{};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=yr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Cn{};Ka.prototype.ValueTypeName="color";var wi=class extends Cn{};wi.prototype.ValueTypeName="number";var Zl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Bn=class extends Cn{InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}};Bn.prototype.ValueTypeName="quaternion";Bn.prototype.DefaultInterpolation=ws;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Cn{};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=yr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Cn{};jn.prototype.ValueTypeName="vector";var Rs=class{constructor(e,t=-1,i,s=uu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Yb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Cn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=Xb(c);c=rp(c,1,u),l=rp(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new wi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,d,f,g,_){if(f.length!==0){let m=[],p=[];Ip(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new wi(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{let f=".bones["+t[h].name+"]";i(jn,f+".position",d,"pos",s),i(Bn,f+".quaternion",d,"rot",s),i(jn,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function $b(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return jn;case"color":return Ka;case"quaternion":return Bn;case"bool":case"boolean":return Ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Yb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$b(n.type);if(n.times===void 0){let t=[],i=[];Ip(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Wi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},jl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Zb=new jl,Ei=class{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},Kl=class extends Error{constructor(e,t){super(e),this.response=t}},yo=class extends Ei{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:i,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=pi[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,P=u.length;A<P;A++){let k=u[A];k.onProgress&&k.onProgress(R)}p.enqueue(M),y()}})}}});return new Response(m)}else throw new Kl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Wi.add(e,l);let u=pi[e];delete pi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=pi[e];if(u===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Jl=class extends Ei{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=lo("img");function c(){u(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ja=class extends Ei{constructor(e){super(e)}load(e,t,i,s){let r=new Yt,o=new Jl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ar=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Qa=class extends Ar{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vl=new ze,op=new I,ap=new I,vo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ql=class extends vo{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=vr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ec=class extends Ar{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ql}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cp=new ze,to=new I,bl=new I,eu=class extends vo{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),to.setFromMatrixPosition(e.matrixWorld),i.position.copy(to),bl.copy(i.position),bl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bl),i.updateMatrixWorld(),s.makeTranslation(-to.x,-to.y,-to.z),cp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cp)}},tc=class extends Ar{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tu=class extends vo{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rr=class extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new tu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var es=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var nc=class extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,c),r.manager.itemStart(e)}};var ic=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=lp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function lp(){return(typeof performance>"u"?Date:performance).now()}var nu=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){yt.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let o=this._workIndex*r;yt.multiplyQuaternionsFlat(e,o,e,t,e,i),yt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[i+o]*s}}},mu="\\[\\]\\.:\\/",jb=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",Kb="[^"+mu.replace("\\.","")+"]",Jb=/((?:WC+[\/:])*)/.source.replace("WC",gu),Qb=/(WCOD+)?/.source.replace("WCOD",Kb),eM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),tM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),nM=new RegExp("^"+Jb+Qb+eM+tM+"$"),iM=["material","materials","bones","map"],iu=class{constructor(e,t,i){let s=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jb,"")}static parseTrackName(e){let t=nM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);iM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=iu;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var su=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:cr,endingEnd:cr};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=S0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case E0:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case uu:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,o=i===w0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===lu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=lr,s.endingEnd=lr):(e?s.endingStart=this.zeroSlopeAtStart?lr:cr:s.endingStart=Ta,t?s.endingEnd=this.zeroSlopeAtEnd?lr:cr:s.endingEnd=Ta)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}},sM=new Float32Array(1),Cr=class extends xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;g=new nu(ot.create(i,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new ja(new Float32Array(2),new Float32Array(2),1,sM),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Rs.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=uu),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new su(this,o,t,i);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?Rs.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var sc=class{constructor(e,t,i=0,s=1/0){this.ray=new Es(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ru(e,this,i,t),i.sort(up),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ru(e[s],this,i,t);return i.sort(up),i}};function up(n,e){return n.distance-e.distance}function ru(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)ru(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function Np(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Et,l=0;for(let u=0;u<n.length;++u){let h=n[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Dp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);let g=Dp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Dp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let o=new e(r),a=0;for(let l=0;l<n.length;++l)o.set(n[l].array,a),a+=n[l].array.length;let c=new gt(o,t,i);return s!==void 0&&(c.gpuType=s),c}function xu(n,e){if(e===yp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===bo||e===ac){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===bo)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var uc=class extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Eu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Fu(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=es.extractUrlBase(e);o=es.resolveURL(l,this.path)}else o=es.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new yo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Bp){try{o[je.KHR_BINARY_GLTF]=new Bu(e)}catch(h){s&&s(h);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Xu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new Su;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new zu(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new Hu;break;case je.KHR_MESH_QUANTIZATION:o[h]=new Vu;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function rM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Mu=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new xe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],kt);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Rr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new tc(u),l.distance=h;break;case"spot":l=new ec(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ns(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},Su=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return wt}extendParams(e,t,i){let s=[];e.color=new xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(s)}},wu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Eu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,at)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(a[0],a[1],a[2],kt),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Lu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(a[0],a[1],a[2],kt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,at)),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Uu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ou=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ku=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Fu=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Pn.TRIANGLES&&l.mode!==Pn.TRIANGLE_STRIP&&l.mode!==Pn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let g of h){let _=new ze,m=new I,p=new yt,y=new I(1,1,1),x=new Sr(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,_.compose(m,p,y));for(let M in c)if(M==="_COLOR_0"){let R=c[M];x.instanceColor=new Ts(R.array,R.itemSize,R.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);St.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Bp="glTF",Mo=12,Up={JSON:1313821514,BIN:5130562},Bu=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Mo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Mo,r=new DataView(e,Mo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Up.JSON){let l=new Uint8Array(e,Mo+o,a);this.content=i.decode(l)}else if(c===Up.BIN){let l=Mo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=Wu[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Wu[u]||u.toLowerCase();if(o[u]!==void 0){let d=i.accessors[e.attributes[u]],f=Lr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,kt,d)})})}},Hu=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Vu=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},hc=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+h;for(let M=0;M!==a;M++){let R=o[_+M+a],A=o[_+M+c]*u,P=o[g+M+a],k=o[g+M]*u;r[M]=y*R+x*A+m*P+p*k}return r}},oM=new yt,Gu=class extends hc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return oM.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Op={9728:It,9729:ln,9984:Ea,9985:au,9986:no,9987:Yi},kp={33071:bn,33648:ao,10497:Ss},yu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aM={CUBICSPLINE:void 0,LINEAR:ws,STEP:yr},vu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cM(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Tr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),n.DefaultMaterial}function Cs(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ns(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lM(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(i){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function uM(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hM(n){let e,t=n.extensions&&n.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bu(t.attributes):e=n.indices+":"+bu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+bu(n.targets[i]);return e}function bu(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function qu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dM(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var fM=new ze,Xu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Ja(this.options.manager):this.textureLoader=new nc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Cs(r,a,s),ns(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(es.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=yu[s.type],a=Lr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new gt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=yu[s.type],l=Lr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(f&&f!==h){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,x=t.cache.get(y);x||(_=new l(a,p*f,s.count*f/u),x=new po(_,f/u),t.cache.add(y,x)),m=new mo(x,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new gt(_,c,g);if(s.sparse!==void 0){let p=yu.SCALAR,y=Lr[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,R=new y(o[1],x,s.sparse.count*p),A=new l(o[2],M,s.sparse.count*c);a!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized));for(let P=0,k=R.length;P<k;P++){let v=R[P];if(m.setX(v,A[P*c]),c>=2&&m.setY(v,A[P*c+1]),c>=3&&m.setZ(v,A[P*c+2]),c>=4&&m.setW(v,A[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Op[d.magFilter]||ln,u.minFilter=Op[d.minFilter]||Yi,u.wrapS=kp[d.wrapS]||Ss,u.wrapT=kp[d.wrapT]||Ss,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Yt(_);m.needsUpdate=!0,d(m)}),t.load(es.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||dM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new bi,mn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new _o,mn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Tr}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let h=s[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new xe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],kt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,at)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=un);let u=r.alphaMode||vu.OPAQUE;if(u===vu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===vu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==wt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wt){let h=r.emissiveFactor;a.emissive=new xe().setRGB(h[0],h[1],h[2],kt)}return r.emissiveTexture!==void 0&&o!==wt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,at)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ns(h,r),t.associations.set(h,{materials:e}),r.extensions&&Cs(s,h,r),h})}createUniqueName(e){let t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Fp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=hM(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Fp(new Et,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?cM(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],m=o[f],p,y=l[f];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Wa(_,y):new Ee(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?p.geometry=xu(p.geometry,ac):m.mode===Pn.TRIANGLE_FAN&&(p.geometry=xu(p.geometry,bo));else if(m.mode===Pn.LINES)p=new Xa(_,y);else if(m.mode===Pn.LINE_STRIP)p=new wr(_,y);else if(m.mode===Pn.LINE_LOOP)p=new $a(_,y);else if(m.mode===Pn.POINTS)p=new ji(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&uM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ns(p,r),m.extensions&&Cs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Cs(s,h[0],r),h[0];let d=new xt;r.extensions&&Cs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new $t(Mp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Zi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ns(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new qa(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,x=d.length;y<x;y++){let M=d[y],R=f[y],A=g[y],P=_[y],k=m[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let v=i._createAnimationTracks(M,R,A,P,k);if(v)for(let w=0;w<v.length;w++)p.push(v[w])}return new Rs(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,fM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new go:l.length>1?u=new xt:l.length===1?u=l[0]:u=new St,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ns(u,r),r.extensions&&Cs(i,u,r),r.matrix!==void 0){let h=new ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new xt;i.name&&(r.name=s.createUniqueName(i.name)),ns(r,i),i.extensions&&Cs(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof mn||d instanceof Yt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];ts[r.path]===ts.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ts[r.path]){case ts.weights:l=wi;break;case ts.rotation:l=Bn;break;case ts.position:case ts.scale:l=jn;break;default:i.itemSize===1?l=wi:l=jn;break}let u=s.interpolation!==void 0?aM[s.interpolation]:ws,h=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+ts[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=qu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Bn?Gu:hc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function pM(n,e,t){let i=e.attributes,s=new hn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let u=qu(Lr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=qu(Lr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Mn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Fp(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=Wu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ns(n,e),pM(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?lM(n,e.targets,t):n})}var pe=22,Jn=-15,Kn=(n,e)=>n+e<Jn,ve={spawn:new I(1.8,0,1.6),kennel:new I(6.5,0,-1.5),kennelDoor:new I(4.6,0,.6),pens:[new I(8.2,0,-3.4),new I(8.6,0,-1.6),new I(8.6,0,.2),new I(6.8,0,-3.8),new I(5.2,0,-3.6)],bowl:new I(3.2,0,2.6),shopNpc:new I(-4.6,0,5.4),shop:new I(-6.2,0,4),questNpc:new I(-4.2,0,-3.6),gateZone:new I(-7.6,0,-7.6),exitRoad:new I(19.6,0,4.5),roadStart:new I(8.5,0,4.5),zoneCenter:new I(-13,0,-13),vet:new I(1.8,0,-6.4),vetHouse:new I(2.8,0,-7.4),fenceInner:new I(-6,0,-6)},Tt=mM(1337);function mM(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Dt={DIRT:0,COBBLE:1,SAND:2,GRASS:3,TOXIC:4,ASH:5},gM={[Dt.DIRT]:[10517074,10122318,10911832],[Dt.COBBLE]:[9276806,8158584,10131600,8684412],[Dt.SAND]:[14201980,13807222,14465154],[Dt.GRASS]:[7043642,6254131,7701570],[Dt.TOXIC]:[4860508,4137808,5582954,3811914],[Dt.ASH]:[5917264,5259850]},zp={0:"#8a6a4a",1:"#8d8d86",2:"#d8b47c",3:"#6b7a3a",4:"#5a2f72",5:"#5a4a50"};function _M(n,e){let t=n+e;if(t<Jn-1)return Tt()<.15?Dt.ASH:Dt.TOXIC;if(t<Jn+1)return Dt.ASH;let i=n-.5,s=e-.5;if(Math.abs(i)+Math.abs(s)*.9<8.5+Math.sin(n*1.3)*.8)return Tt()<.08?Dt.SAND:Dt.COBBLE;if(Math.abs(e-4.5)<1.3&&n>6||Math.abs(n-e)<1.6&&t<0&&t>Jn||Math.abs(n-9)<1.2&&e>3||Math.abs(e-9)<1.1&&n<2&&n>-12)return Dt.SAND;let r=Math.sin(n*.45)*Math.cos(e*.38)+Math.sin(n*.13+e*.21)*.5+Tt()*.25;return r>.8?Dt.GRASS:r<-.15?Dt.DIRT:Dt.SAND}var $u=new Map;function zn(n,e={}){let t=n+JSON.stringify(e);return $u.has(t)||$u.set(t,new Zt({color:n,flatShading:!0,...e})),$u.get(t)}function xM(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,64);for(let i=0;i<260;i++){let s=200+Math.floor(Tt()*55);e.fillStyle=`rgb(${s},${s},${s})`,e.fillRect(Tt()*64|0,Tt()*64|0,2,2)}e.strokeStyle="rgba(0,0,0,.28)",e.lineWidth=2,e.beginPath(),e.moveTo(0,30),e.lineTo(26,34),e.lineTo(40,22),e.lineTo(64,28),e.moveTo(26,34),e.lineTo(30,64),e.moveTo(40,22),e.lineTo(36,0),e.moveTo(48,64),e.lineTo(52,40),e.lineTo(64,44),e.stroke(),e.strokeStyle="rgba(0,0,0,.14)",e.strokeRect(1,1,62,62);let t=new Ya(n);return t.magFilter=It,t.colorSpace=at,t}function Hp(n,e){let t=[],i=[],s=[],r=[],o=pe*2,a=new dn(1,.3,1),c=new Zt({map:xM()}),l=new Sr(a,c,o*o),u=new ze,h=new xe,d=0;for(let E=0;E<o;E++){let D=[];for(let L=0;L<o;L++){let O=L-pe+.5,Z=E-pe+.5,Y=_M(O,Z);D.push(Y);let Q=gM[Y],H=(Y===Dt.COBBLE?Tt()*.05:Tt()*.03)-(Y===Dt.TOXIC?.04:0);u.makeTranslation(O,-.15+H,Z),l.setMatrixAt(d,u),h.setHex(Q[Tt()*Q.length|0]),l.setColorAt(d,h),d++}r.push(D)}l.receiveShadow=!0,n.add(l);let f=new Ee(new Mr(400,400),new Zt({color:6046e3}));f.rotation.x=-Math.PI/2,f.position.y=-.32,n.add(f);let g=new xt,_=(E,D,L,O,Z,Y,Q,H=0,j=0,se=0)=>{let oe=new Ee(new dn(E,D,L),zn(O));return oe.position.set(Z,Y,Q),oe.rotation.set(j,H,se),g.add(oe),oe},m=(E,D,L,O,Z,Y,Q,H=8,j=0,se=0)=>{let oe=new Ee(new Fn(E,D,L,H),zn(O));return oe.position.set(Z,Y,Q),oe.rotation.set(j,0,se),g.add(oe),oe},p=(E,D,L,O,Z,Y,Q=8,H=0)=>{let j=new Ee(new Mi(E,D,Q),zn(L));return j.position.set(O,Z,Y),j.rotation.y=H,g.add(j),j},y=(E,D,L,O)=>t.push({x0:Math.min(E,L),z0:Math.min(D,O),x1:Math.max(E,L),z1:Math.max(D,O)});{let E=ve.kennel.x,D=ve.kennel.z;_(6.2,.12,5.4,8016434,E,.06,D);for(let L=0;L<9;L++){let O=L%2?9133626:10251332;_(.68,1.7,.16,O,E-2.75+L*.69,.85,D-2.6)}for(let L=0;L<8;L++){let O=L%2?9133626:10251332;_(.16,1.7,.66,O,E+3,.85,D-2.3+L*.66)}for(let L=0;L<4;L++)_(.14,.9,.14,5912614,E-3,.45,D-2.4+L*1.6);_(.08,.12,5,7029808,E-3,.75,D-.1),_(.08,.12,5,7029808,E-3,.35,D-.1);for(let L=0;L<3;L++)_(.14,.9,.14,5912614,E-1.8+L*1.6,.45,D+2.6);_(3.4,.12,.08,7029808,E-.2,.75,D+2.6);for(let L=0;L<10;L++){let O=[11556666,10111538,11035711,9394756][L%4];_(.66,.08,6,O,E-2.9+L*.66,2.05-L*.05,D-.1,0,0,.09)}[[-3,2.6],[3,2.6],[-3,-2.6],[3,-2.6]].forEach(([L,O])=>_(.18,2,.18,4861470,E+L,1,D+O)),_(.08,.6,2.2,7029808,E+1,.3,D-1.5),_(2,.6,.08,7029808,E+2,.3,D-.6),_(1.8,.5,.08,15258280,E-3.05,1.55,D+1,Math.PI/2);for(let L=0;L<3;L++){let O=ve.pens[L];m(.55,.6,.08,14201946,O.x,.16,O.z,7)}_(1.1,.9,.9,7241615,E+2.2,.55,D+1.7),p(.78,.5,4872810,E+2.2,1.25,D+1.7,4,Math.PI/4),y(E-3,D-2.75,E+3.15,D-2.45),y(E+2.9,D-2.75,E+3.15,D+2.75),y(E-3.1,D-2.7,E-2.9,D-.6),y(E-3.1,D+1.6,E-2.9,D+2.7),y(E-1.9,D+2.5,E+3.1,D+2.7),s.push({id:"kennel",pos:ve.kennelDoor.clone(),r:1.8,label:"Criadero"})}{let E=ve.bowl;m(.45,.35,.22,12597547,E.x,.11,E.z,10),m(.36,.36,.05,9067050,E.x,.2,E.z,10),_(.5,.7,.4,14205066,E.x+.8,.35,E.z-.3,.3),_(.52,.12,.42,12597547,E.x+.8,.55,E.z-.3,.3),m(.28,.28,.7,4876938,E.x-.7,.35,E.z-.5,8),y(E.x+.5,E.z-.55,E.x+1.1,E.z-.05),s.push({id:"bowl",pos:E.clone(),r:1.9,label:"Comedero"})}let x=(E,D,L,O,Z)=>{m(L,L,1.2,15259832,E,.6,D,10),p(L*1.15,1.3,O,E,1.85,D,10);for(let Y=0;Y<5;Y++){let Q=Y/5*Math.PI*2;_(.06,1.25,.06,Z,E+Math.cos(Q)*L*.98,.6,D+Math.sin(Q)*L*.98)}m(.06,.06,.5,5912614,E,2.7,D,5),y(E-L,D-L,E+L,D+L)};x(ve.shop.x,ve.shop.z,1.6,12072236,8003096),_(1.6,.6,.6,8016434,ve.shop.x+1.2,.3,ve.shop.z+1.6,.6);for(let E=0;E<3;E++)m(.22,.22,.4,[12088115,10119738,10506797][E],ve.shop.x+.4+E*.45,.2,ve.shop.z+2.4,8);y(ve.shop.x+.5,ve.shop.z+1.2,ve.shop.x+1.9,ve.shop.z+2),s.push({id:"shop",pos:ve.shopNpc.clone(),r:2,label:"Tienda"});{let E=ve.vetHouse.x,D=ve.vetHouse.z;_(3.2,1.7,2.6,14209220,E,.85,D),_(3.5,.12,2.9,3828362,E,1.82,D),_(.7,1.15,.08,4861984,E-.4,.58,D+1.32),_(.5,.45,.06,10146047,E+.7,1.1,D+1.32),_(.12,.55,.06,12597547,E+1.2,1.2,D+1.33),_(.36,.12,.06,12597547,E+1.2,1.2,D+1.33),m(.18,.18,.7,12634320,E-1.3,.35,D+1.6,8),y(E-1.7,D-1.4,E+1.7,D+1.4),s.push({id:"vet",pos:ve.vet.clone(),r:2,label:"Veterinario"})}s.push({id:"fence",pos:ve.fenceInner.clone(),r:2.2,label:"Alambrado"}),x(-9,1,1.3,11026220,6956056),x(1,11,1.4,12872250,8010266);let M=(E,D,L)=>{let O=new xt;O.position.set(E,0,D),O.rotation.y=L;let Z=oe=>(O.add(oe),oe),Y=(oe,fe,Ae,Oe,Pe,Ke,V,Xt=0)=>{let we=new Ee(new dn(oe,fe,Ae),zn(Oe));we.position.set(Pe,Ke,V),we.rotation.z=Xt,Z(we)};Y(3,1.6,2.4,8018498,0,.8,0),Y(1.7,.1,2.9,3039134,-.75,1.95,0,.42),Y(1.7,.1,2.9,2774671,.75,1.95,0,-.42),Y(.7,1.1,.06,3810328,.4,.55,1.22),Y(.5,.4,.06,10146047,-.7,1,1.22),g.add(O);let Q=Math.abs(Math.cos(L)),H=Math.abs(Math.sin(L)),j=1.5*Q+1.2*H,se=1.5*H+1.2*Q;y(E-j,D-se,E+j,D+se)};M(10.5,8.8,.1),M(14,-3.5,-.2),M(8.5,12,.3),M(-12,7,-.4),M(-2,15,0);let R=(E,D,L=4876858)=>{m(.32,.32,.8,L,E,.4,D,9),m(.33,.33,.06,2763306,E,.55,D,9),y(E-.3,D-.3,E+.3,D+.3)},A=(E,D,L=.6,O=0)=>{_(L,L,L,10252352,E,L/2,D,O),_(L*1.02,.06,L*1.02,7029808,E,L*.75,D,O),y(E-L/2,D-L/2,E+L/2,D+L/2)},P=(E,D)=>{let L=new Ee(new Er(.32,.13,5,8),zn(2236962));L.rotation.x=Math.PI/2,L.position.set(E,.13,D),g.add(L)};R(2.2,-4.5,9058858),R(2.9,-4.2),R(-1.8,6.8,3824250),R(11.5,-6.5,9058858),R(-6.8,-1.5),A(-2.5,7.4),A(-3.2,7.9,.5,.4),A(12.4,-4.6,.7,.2),A(4,6.5,.55,.5),P(5.2,5.6),P(5.6,6.1),P(-8.5,4.8);let k=(E,D,L)=>{let O=new xt;O.position.set(E,0,D),O.rotation.y=L;let Z=(Y,Q,H,j,se,oe,fe)=>{let Ae=new Ee(new dn(Y,Q,H),zn(j));Ae.position.set(se,oe,fe),O.add(Ae)};Z(3,.7,1.4,9067066,0,.55,0),Z(1.6,.55,1.3,8014386,-.2,1.15,0),Z(1.5,.45,1.32,2767428,-.2,1.15,0),[[-1,.7],[1,.7],[-1,-.7],[1,-.7]].forEach(([Y,Q])=>{let H=new Ee(new Fn(.3,.3,.2,8),zn(1973790));H.rotation.x=Math.PI/2,H.position.set(Y,.25,Q),O.add(H)}),g.add(O),y(E-1.6,D-1.1,E+1.6,D+1.1)};k(15,-8,.5),k(-15,12,-.3),k(-3,-12.5,.8);let v=(E,D,L=1,O=4863014)=>{m(.12*L,.2*L,2.2*L,O,E,1.1*L,D,5),_(.08*L,.9*L,.08*L,O,E+.3*L,1.8*L,D,0,0,-.7),_(.08*L,.8*L,.08*L,O,E-.25*L,1.6*L,D+.1,0,.3,.8),y(E-.2,D-.2,E+.2,D+.2)},w=(E,D,L=6978090)=>{let O=new Ee(new xo(.42,0),zn(L));O.position.set(E,.28,D),O.scale.y=.7,g.add(O)};[[-11,-2],[12,-10],[17,6],[-17,3],[4,16],[16,15],[-8,16],[19,-14]].forEach(([E,D],L)=>v(E,D,.9+L%3*.2));for(let E=0;E<26;E++){let D=(Tt()-.5)*40,L=(Tt()-.5)*40;(Kn(D,L)||Math.abs(D)<9&&Math.abs(L)<9)&&(D=12+Tt()*8,L=4+Tt()*14),w(D,L,Tt()<.5?6978090:8227386)}{let E=new Ce(-pe-1,-15+pe+1),D=new Ce(-15+pe+1,-pe-1),L=E.distanceTo(D),O=D.clone().sub(E).normalize(),Z=Math.floor(L/1.4),Y=new Ce(ve.gateZone.x,ve.gateZone.z);for(let se=0;se<=Z;se++){let oe=E.clone().addScaledVector(O,se*1.4);if(!(oe.distanceTo(Y)<1.7)&&(_(.14,1.3,.14,6974058,oe.x,.65,oe.y),se<Z)){let fe=E.clone().addScaledVector(O,(se+.5)*1.4);if(fe.distanceTo(Y)<1.9)continue;let Ae=Math.atan2(O.x,O.y);_(.04,.05,1.4,10132122,fe.x,1.15,fe.y,Ae),_(.04,.05,1.4,10132122,fe.x,.75,fe.y,Ae),_(.04,.05,1.4,9079434,fe.x,.35,fe.y,Ae)}}let Q=Y.clone().addScaledVector(O,-1.6),H=Y.clone().addScaledVector(O,1.6);_(.3,2.2,.3,5912614,Q.x,1.1,Q.y),_(.3,2.2,.3,5912614,H.x,1.1,H.y);let j=Math.atan2(O.x,O.y);_(.1,.6,1.4,15909198,Q.x+.3,1.6,Q.y+.3,j),_(.12,.12,1,1710618,Q.x+.3,1.6,Q.y+.3,j,.8);for(let se=0;se<Z;se++){let oe=E.clone().addScaledVector(O,(se+.5)*1.4);oe.distanceTo(Y)<1.9||y(oe.x-.55,oe.y-.55,oe.x+.55,oe.y+.55)}}let B=new wt({color:11824127}),$=new wt({color:9305946});for(let E=0;E<16;E++){let D,L;do D=-pe+1+Tt()*16,L=-pe+1+Tt()*16;while(!Kn(D,L)||D+L>Jn-2.5);v(D,L,.8+Tt()*.6,2759216);let O=new Ee(new Si(.16,6,4),E%2?B:$);O.position.set(D+.5,.12,L+.3),O.scale.y=.6,g.add(O)}for(let E=0;E<7;E++){let D,L;do D=-pe+1+Tt()*18,L=-pe+1+Tt()*18;while(!Kn(D,L)||D+L>Jn-3);R(D,L,13160480);let O=new Ee(new Fn(.7,.7,.03,10),$);O.position.set(D+.4,.02,L+.3),g.add(O)}let J=new wt({color:10116056,transparent:!0,opacity:.18,depthWrite:!1});for(let E=0;E<(e==="low"?4:9);E++){let D=new Ee(new xo(1.4+Tt(),0),J),L,O;do L=-pe+2+Tt()*16,O=-pe+2+Tt()*16;while(!Kn(L,O));D.position.set(L,.6,O),D.scale.y=.35,n.add(D),i.push({kind:"cloud",obj:D,base:D.position.clone(),ph:Tt()*6})}{for(let Y=0;Y<7;Y++){let Q=Y/7*Math.PI*2;_(.3,.2,.25,7039846,-.8+Math.cos(Q)*.5,.1,-.6+Math.sin(Q)*.5,Q)}_(.9,.1,.12,4861470,-.8,.15,-.6,.6),_(.9,.1,.12,4861470,-.8,.18,-.6,-.6);let L=new xt;L.position.set(-.8,.2,-.6);let O=new Ee(new Mi(.28,.8,5),new wt({color:16747038})),Z=new Ee(new Mi(.16,.55,5),new wt({color:16769626}));O.position.y=.4,Z.position.y=.32,L.add(O,Z),n.add(L),i.push({kind:"fire",obj:L,f1:O,f2:Z}),y(-.8-.6,-.6-.6,-.8+.6,-.6+.6),m(.16,.16,1,7029808,-.8+1.3,.16,-.6+.4,6,0,Math.PI/2),m(.16,.16,1,7029808,-.8-.4,.16,-.6+1.4,6,Math.PI/2,0)}{m(.06,.06,3.2,5912614,-1.5,1.6,3.2,5);let E=new Ee(new Mr(1,.6,4,1),new Zt({color:15909198,side:un}));E.position.set(-1,2.9,3.2),n.add(E),i.push({kind:"flag",obj:E,base:E.geometry.attributes.position.array.slice()})}for(let E=-pe;E<pe;E+=1){let D=.5+Math.abs(Math.sin(E*1.7))*1.2,L=Kn(E,pe)?3811904:8022618;_(1,D,.6,L,E+.5,D/2,pe-.3),E+.5>3&&E+.5<6.2||_(.6,D*.9,1,Kn(pe,E)?3811904:8022618,pe-.3,D*.45,E+.5),_(1,D*1.1,.6,Kn(E,-pe)?3811904:8022618,E+.5,D*.55,-pe+.3),_(.6,D,1,Kn(-pe,E)?3811904:8022618,-pe+.3,D/2,E+.5)}y(-pe-2,pe-.6,pe+2,pe+2),y(-pe-2,-pe-2,pe+2,-pe+.6),y(pe-.6,-pe-2,pe+2,3),y(pe-.6,6.2,pe+2,pe+2),y(-pe-2,-pe-2,-pe+.6,pe+2),_(.3,2.4,.3,5912614,pe-.9,1.2,2.9),_(.3,2.4,.3,5912614,pe-.9,1.2,6.1),_(.2,.4,3.4,15258280,pe-.9,2.2,4.5),g.updateMatrixWorld(!0);let U=new Map;g.traverse(E=>{if(!E.isMesh)return;let D=E.geometry.index?E.geometry.toNonIndexed():E.geometry.clone();D.applyMatrix4(E.matrixWorld);for(let L of Object.keys(D.attributes))["position","normal","uv"].includes(L)||D.deleteAttribute(L);U.has(E.material)||U.set(E.material,[]),U.get(E.material).push(D)});let z=0;for(let[E,D]of U){let L=Np(D,!1),O=new Ee(L,E);O.castShadow=!E.isMeshBasicMaterial,O.receiveShadow=!0,n.add(O),z++,D.forEach(Z=>Z.dispose())}return{colliders:t,animated:i,interact:s,grid:r,drawCalls:z,tileTypes:Dt}}function Vp(n,e){for(let t of n)if(t.kind==="fire"){let i=1+Math.sin(e*14)*.12+Math.sin(e*23)*.06;t.f1.scale.set(1/i,i,1/i),t.f2.scale.set(i,1.1/i,i),t.obj.rotation.y=e*2}else if(t.kind==="cloud")t.obj.position.x=t.base.x+Math.sin(e*.2+t.ph)*1.5,t.obj.position.z=t.base.z+Math.cos(e*.17+t.ph)*1.2,t.obj.rotation.y=e*.1+t.ph;else if(t.kind==="flag"){let i=t.obj.geometry.attributes.position;for(let s=0;s<i.count;s++){let r=t.base[s*3];i.array[s*3+2]=Math.sin(e*5+r*4)*.08*(r+.5)}i.needsUpdate=!0}}function Yu(n,e,t){for(let i of t){let s=Math.max(i.x0,Math.min(n.x,i.x1)),r=Math.max(i.z0,Math.min(n.z,i.z1)),o=n.x-s,a=n.z-r,c=o*o+a*a;if(c<e*e)if(c>1e-6){let l=Math.sqrt(c);n.x+=o/l*(e-l),n.z+=a/l*(e-l)}else{let l=[[i.x0-e-n.x,0],[i.x1+e-n.x,0],[0,i.z0-e-n.z],[0,i.z1+e-n.z]];l.sort((u,h)=>Math.abs(u[0]+u[1])-Math.abs(h[0]+h[1])),n.x+=l[0][0],n.z+=l[0][1]}}n.x=Math.max(-pe+.8,Math.min(pe-.8,n.x)),n.z=Math.max(-pe+.8,Math.min(pe-.8,n.z))}function Zu(n){let e=new Map,t=new Map,i=n.clone();return Gp(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Gp(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Gp(n.children[i],e.children[i],t)}var Wp=new I,ju=new yt,Ku=new yt,yM=(n,e,t)=>n+(e-n)*t,zt=(n,e,t,i)=>yM(n,e,1-Math.exp(-t*i));function Eo(n,e,t,i){let s=(e-n+Math.PI)%(Math.PI*2)-Math.PI;return s<-Math.PI&&(s+=Math.PI*2),n+s*(1-Math.exp(-t*i))}function To(n={}){let e={skin:14724222,shirt:4025162,pants:3816008,hair:3810328,boots:2759186,scarf:12597547,...n},t=new xt,i=new xt;t.add(i);let s=(R,A,P,k,v=0,w=0,B=0,$=i)=>{let J=new Ee(new dn(R,A,P),zn(k));return J.position.set(v,w,B),J.castShadow=!0,$.add(J),J},r=(R,A,P,k=i)=>{let v=new xt;return v.position.set(R,A,P),k.add(v),v},o=r(-.13,.62,0),a=r(.13,.62,0);s(.2,.42,.22,e.pants,0,-.21,0,o),s(.22,.16,.3,e.boots,0,-.52,.04,o),s(.2,.42,.22,e.pants,0,-.21,0,a),s(.22,.16,.3,e.boots,0,-.52,.04,a);let c=r(0,.62,0);s(.5,.5,.3,e.shirt,0,.27,0,c),s(.52,.08,.32,4861470,0,.04,0,c),e.scarf&&s(.42,.12,.34,e.scarf,0,.5,.01,c),e.backpack&&(s(.36,.4,.18,e.backpack,0,.3,-.24,c),s(.38,.1,.2,3810328,0,.5,-.24,c)),e.apron&&s(.44,.48,.04,e.apron,0,.18,.17,c);let l=r(-.32,.48,0,c),u=r(.32,.48,0,c);s(.15,.4,.17,e.shirt,0,-.18,0,l),s(.13,.12,.13,e.skin,0,-.42,0,l),s(.15,.4,.17,e.shirt,0,-.18,0,u),s(.13,.12,.13,e.skin,0,-.42,0,u);let h=null;e.tool&&(h=r(0,-.44,.04,u),s(.07,.07,.7,8016434,0,0,.3,h),s(.14,.14,.2,9079434,0,0,.62,h));let d=r(0,.56,0,c),f=r(0,0,0,d);s(.5,.46,.46,e.skin,0,.26,0,f),s(.54,.16,.5,e.hair,0,.5,-.02,f),s(.54,.3,.12,e.hair,0,.36,-.22,f),s(.07,.09,.02,1710618,-.11,.27,.235,f),s(.07,.09,.02,1710618,.11,.27,.235,f),e.beard&&s(.4,.18,.08,e.beard,0,.1,.22,f),e.goggles&&(s(.52,.06,.04,2763306,0,.43,.23,f),s(.12,.1,.05,7000319,-.12,.43,.25,f),s(.12,.1,.05,7000319,.12,.43,.25,f)),e.hat==="cap"&&(s(.56,.12,.52,e.hatColor,0,.58,0,f),s(.4,.04,.22,e.hatColor,0,.53,.3,f)),e.hat==="helmet"&&(s(.58,.2,.54,e.hatColor,0,.58,0,f),s(.62,.04,.58,e.hatColor,0,.49,0,f)),e.hat==="scarf"&&s(.56,.2,.52,e.hatColor,0,.56,-.01,f);let g=new Ee(new As(.35,10),new wt({color:0,transparent:!0,opacity:.28,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.y=.02,t.add(g);let _=Math.random()*10,m=0,p=0,y=0,x=0,M=[];return i.traverse(R=>{R.isMesh&&(R.material=R.material.clone(),M.push(R.material))}),{root:t,body:i,head:f,height:1.65,attack(){p=.38},hurt(){y=.3},talk(){x=1.2},update(R,A,P){_+=R;let k=A>.15,v=k?P?1.05:.65:0;m+=R*(k?A*(P?2.3:2.9):0);let w=Math.sin(m);o.rotation.x=zt(o.rotation.x,w*v,18,R),a.rotation.x=zt(a.rotation.x,-w*v,18,R),l.rotation.x=zt(l.rotation.x,-w*v*.9,18,R);let B=w*v*.9;if(p>0){p-=R;let J=1-p/.38;B=J<.35?-2.6*(J/.35):-2.6+3.4*((J-.35)/.65)}u.rotation.x=zt(u.rotation.x,B,p>0?40:18,R);let $=Math.sin(_*2.2)*.015;i.position.y=k?Math.abs(Math.sin(m))*(P?.09:.05):$,c.rotation.x=zt(c.rotation.x,k?P?.22:.06:0,8,R),l.rotation.z=zt(l.rotation.z,k?0:-.08-Math.sin(_*2.2)*.03,6,R),u.rotation.z=zt(u.rotation.z,k?0:.08+Math.sin(_*2.2)*.03,6,R),f.rotation.y=k?0:Math.sin(_*.6)*.35,f.rotation.x=x>0?Math.sin(_*16)*.08:0,x>0&&(x-=R),y>0?(y-=R,M.forEach(J=>J.emissive.setHex(8912896))):M.forEach(J=>J.emissive.setHex(0))}}}function So(n,e,t,i,s=1,r=null){if(!e)return null;for(let[h,d]of n.rest)h.quaternion.copy(d);n.model.updateMatrixWorld(!0);let o=n.model.localToWorld(new I(...i));e.add(t),t.position.copy(e.worldToLocal(o));let a=new I;e.getWorldScale(a);let c=new I;n.model.getWorldScale(c),t.scale.setScalar(s*c.x/a.x);let l=new yt;e.getWorldQuaternion(l);let u=new yt;return n.model.getWorldQuaternion(u),t.quaternion.copy(l.invert().multiply(u).multiply(r||new yt)),t}var vM=.22;function qp(n){let e={};return n.traverse(t=>{(t.isBone||t.isObject3D&&t.type==="Bone")&&(e[t.name]=t,e[t.name.replace(/\./g,"")]=t)}),e}function Ti(n,e){if(!n||!n.length)return null;let t=e.map(i=>i.toLowerCase());for(let i of t){let s=n.find(r=>(r.name||"").toLowerCase()===i);if(s)return s}for(let i of t){let s=n.find(r=>(r.name||"").toLowerCase().includes(i));if(s)return s}return null}function Xp(n,e){n.updateMatrixWorld(!0);let t=new hn().setFromObject(n),i=t.max.y-t.min.y;if(!(i>.001))return 1;let s=e/i;n.scale.multiplyScalar(s),n.updateMatrixWorld(!0);let r=new hn().setFromObject(n);return n.position.y-=r.min.y,s}function $p(n,e){if(e)return e;let t=["pastor_aleman","rottweiler","gran_danes","dogo_argentino","dogo_burdeos","fila","caucasico","cane_corso","malinois","briard","cimarron","amstaff"],i=["chihuahua","teckel","pug","bulldog_frances","jack_russell","caniche","shiba","beagle","toy"];return t.includes(n)?"pastor":i.includes(n)?"pug":"husky"}var wo=class{constructor(e,{color:t=11565642,scale:i=1,name:s="Perro",coat:r=null,targetHeight:o=1.05}={}){this.root=new xt,this.lean=new xt,this.root.add(this.lean),this.model=Zu(e.scene),this.anims=e.animations||[],this.bones=qp(this.model),this.legacy=!!(this.bones.Bone002||this.bones.Bone001||this.bones.Bone);let a=new xt;a.add(this.model),this.lean.add(a),this.holder=a,this.legacy?(this.model.rotation.y=-Math.PI/2,this.model.position.set(.35,0,-.2)):this.model.rotation.y=0,this.mats=[];let c=r&&r.color!=null?r.color:t;this.model.traverse(h=>{if(h.isMesh||h.isSkinnedMesh)if(h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1,this.legacy){h.geometry.attributes.color&&h.geometry.deleteAttribute("color");let d=new Zt({color:c,flatShading:!0});h.material=d,this.mats.push(d)}else{let d=Array.isArray(h.material)?h.material[0]:h.material,f=d.clone();f.color&&r&&r.color!=null&&f.color.lerp(new xe(c),.22),Array.isArray(h.material)?h.material=h.material.map(g=>g===d?f:g):h.material=f,this.mats.push(f)}}),this.neck=this.bones.Neck1||this.bones.Neck||this.bones.Bone002||null,this.headB=this.bones.Head||this.bones.Bone003||null,this.tail=[this.bones.Tail1,this.bones.Tail2,this.bones.Tail3,this.bones["Tail3.001"],this.bones.Bone004,this.bones.Bone005,this.bones.Bone006].filter(Boolean),this.torso=this.bones.Torso||this.bones.Torso2||this.bones.Body||this.bones.Bone001||this.model,this.mixer=new Cr(this.model);let l=(h,d)=>{if(!h)return null;let f=this.mixer.clipAction(h);return f.enabled=!0,d&&d.loopOnce&&(f.setLoop(lu,1),f.clampWhenFinished=!0),f};this.aIdle=l(Ti(this.anims,["Idle","idle"])),this.aWalk=l(Ti(this.anims,["Walk","Walking","walk"])),this.aRun=l(Ti(this.anims,["Run","Gallop","run","gallop"])),this.aEat=l(Ti(this.anims,["Eating","Eat","Idle_Eating"])),this.aAttack=l(Ti(this.anims,["Attack","Punch","Slash"])),this.aHit=l(Ti(this.anims,["HitReact","Idle_HitReact1","HitReact_Left"])),this.aDeath=l(Ti(this.anims,["Death"])),this.aIdleLow=l(Ti(this.anims,["Idle_2_HeadLow","Idle_HeadLow","Idle2_HeadLow"])),this.aIdle&&(this.aIdle.play(),this.aIdle.setEffectiveWeight(1)),this.aIdleLow&&(this.aIdleLow.play(),this.aIdleLow.setEffectiveWeight(0)),this.aWalk&&(this.aWalk.play(),this.aWalk.setEffectiveWeight(0)),this.aRun&&(this.aRun.play(),this.aRun.setEffectiveWeight(0)),this.walkW=0,this.runW=0,this.legacy?this.setScale(i):(Xp(this.holder,o),this._fitBase=this.holder.scale.x||1,this.setScale(i)),r&&r.spots&&r.spots!=="none"&&this._addSpots(r),this.state="idle",this.speed=0,this.t=Math.random()*10,this.actionT=0,this.actionDur=0,this.hurtT=0,this.happy=1,this.yaw=0,this.baseEmissive=0,this.rest=Object.values(this.bones).map(h=>[h,h.quaternion.clone()]);let u=new Ee(new As(.42,10),new wt({color:0,transparent:!0,opacity:.25,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.02,u.scale.set(1.3,.7,1),this.root.add(u),this.blob=u,this.name=s,this.care={sick:!1,pregnant:!1,resting:!1},this._baseColors=this.mats.map(h=>h&&h.color?h.color.clone():null),this._addCareVisuals()}_addCareVisuals(){let e=new xt,t=new Zt({color:8015406,flatShading:!0}),i=new Zt({color:12868682,flatShading:!0}),s=new Zt({color:12755290,flatShading:!0}),r=new Ee(new dn(.95,.12,.7),t);r.position.set(0,.06,.05),e.add(r);let o=new Ee(new dn(.9,.08,.22),t);o.position.set(0,.14,-.28),e.add(o);let a=new Ee(new dn(.9,.08,.16),t);a.position.set(0,.12,.34),e.add(a);let c=new Ee(new Fn(.32,.38,.08,8),i);c.position.set(0,.14,.02),e.add(c);let l=new Ee(new As(.34,10),s);l.rotation.x=-Math.PI/2,l.position.y=.155,e.add(l),e.visible=!1,this.root.add(e),this.nest=e;let u=new Zt({color:12886138,flatShading:!0,transparent:!0,opacity:.85}),h=new Ee(new Si(.16,8,6),u);h.scale.set(1.2,.85,1.45),h.position.set(0,.42,.16),h.visible=!1,this.lean.add(h),this.belly=h;let d=5,f=new Float32Array(d*3);for(let p=0;p<d;p++)f.set([0,.7,0],p*3);let g=new Et;g.setAttribute("position",new gt(f,3));let _=new bi({color:10136200,size:.07,transparent:!0,opacity:.7,depthWrite:!1,sizeAttenuation:!0}),m=new ji(g,_);m.visible=!1,m.frustumCulled=!1,this.root.add(m),this.sickPts=m,this._sickN=d}setCareState({sick:e=!1,pregnant:t=!1,resting:i=!1}={}){this.care.sick=!!e,this.care.pregnant=!!t,this.care.resting=!!i,this.nest&&(this.nest.visible=!!(t||i)),this.belly&&(this.belly.visible=!!t),this.sickPts&&(this.sickPts.visible=!!e);let s=e?.45:1;this.mats.forEach((r,o)=>{if(!r||!r.color||!this._baseColors[o])return;let a=this._baseColors[o],c=(a.r+a.g+a.b)/3;r.color.setRGB(a.r*s+(c*.85+.05)*(1-s),a.g*s+(c*.9+.04)*(1-s),a.b*s+(c*.7+.02)*(1-s))})}_addSpots(e){let t=new Zt({color:e.spotsColor||3811872,flatShading:!0}),i=e.spots==="heavy"?5:3,s=new Si(.07,6,5);for(let r=0;r<i;r++){let o=new Ee(s,t);o.position.set((r-i/2)*.12,.55+r%2*.05,.12-r%3*.04),o.scale.set(1,.6,1.1),this.lean.add(o)}}setScale(e){if(this.s=e,this.legacy)this.holder.scale.setScalar(vM*e),this.height=1.05*e;else{let t=this._fitBase||1;this.holder.scale.setScalar(t*e),this.height=1.05*e}}setColor(e){this.mats.forEach(t=>{t&&t.color&&!t.map&&t.color.setHex(e)})}play(e,t=0){this.state=e,this.actionT=t,this.actionDur=t;let i={eat:this.aEat,attack:this.aAttack,hurt:this.aHit}[e];i&&(i.reset(),i.setEffectiveWeight(1),i.play())}hurt(){this.hurtT=.25,this.aHit&&(this.aHit.reset(),this.aHit.setEffectiveWeight(1),this.aHit.play())}_boneRot(e,t,i){if(!e||!i||(Wp.copy(t).transformDirection(this.model.matrixWorld),ju.setFromAxisAngle(Wp,i),!e.parent))return;e.parent.getWorldQuaternion(Ku);let s=Ku.clone().invert();ju.premultiply(s).multiply(Ku),e.quaternion.premultiply(ju)}update(e,t){this.t+=e,this.speed=t;let i=t>.2,s=t>3.6,r=i?1:0;this.walkW=zt(this.walkW,r,10,e),this.runW=zt(this.runW,i&&s&&this.aRun?1:0,8,e),this.aWalk&&this.aWalk.setEffectiveWeight(this.walkW*(1-this.runW)),this.aRun&&this.aRun.setEffectiveWeight(this.runW);let o=!i&&this.care&&(this.care.sick||this.care.pregnant||this.care.resting),a=1-this.walkW;this.aIdleLow?(this.aIdleLow.setEffectiveWeight(o?a:0),this.aIdle&&this.aIdle.setEffectiveWeight(o?0:a)):this.aIdle&&this.aIdle.setEffectiveWeight(a);let c=this.care&&this.care.sick?.7:1,l=(i?Math.min(2.6,.55+t*(s?.42:.5)/(this.s||1)):1)*c;this.aWalk&&(this.aWalk.timeScale=l),this.aRun&&(this.aRun.timeScale=l),this.aIdle&&(this.aIdle.timeScale=this.state==="eat"?.5:1),this.aIdleLow&&(this.aIdleLow.timeScale=.85);for(let[x,M]of this.rest)x.quaternion.copy(M);this.mixer.update(e),this.model.updateMatrixWorld(!0);let u=new I(1,0,0),h=new I(0,1,0),d=new I(0,0,1),f=0,g=0,_=0,m=0;if(s&&!this.aRun){let x=Math.sin(this.t*13);_=Math.max(0,x)*.09*this.s,g=x*.08,f=-x*.12}else i&&(_=Math.abs(Math.sin(this.t*9))*.02*this.s);if(this.actionT>0){this.actionT-=e;let x=1-this.actionT/(this.actionDur||1);if(this.state==="eat"&&!this.aEat&&(f=.95+Math.sin(this.t*14)*.12),this.state==="attack"&&!this.aAttack){let M=x<.4?x/.4:1-(x-.4)/.6;m=M*.55*this.s,f=x<.4?-.5*M:.6*M,g=-M*.25,_=M*.12*this.s}if(this.state==="bark"){let M=Math.sin(x*Math.PI);f=-.55*M+Math.sin(this.t*30)*.08*M,_=M*.08*this.s}this.state==="jump"&&(_=Math.sin(x*Math.PI)*.6*this.s,g=-.3*Math.cos(x*Math.PI)),this.actionT<=0&&(this.state=i?"walk":"idle")}else this.state=i?s?"run":"walk":"idle";let p=(i?.25:.55)*this.happy;this.tail.forEach((x,M)=>this._boneRot(x,h,Math.sin(this.t*(i?10:14)-M*.6)*p*(.6+M*.25))),this._boneRot(this.neck,d,-f),!i&&this.state==="idle"&&this._boneRot(this.headB,h,Math.sin(this.t*.7)*.25),this.lean.rotation.x=zt(this.lean.rotation.x,g,12,e),this.lean.position.y=zt(this.lean.position.y,_,20,e),this.lean.position.z=zt(this.lean.position.z,m,25,e),this.blob.scale.setScalar(this.s),this.blob.scale.y*=.6;let y=this.hurtT>0?10027008:this.baseEmissive;if(this.hurtT>0&&(this.hurtT-=e),this.mats.forEach(x=>{x.emissive&&x.emissive.setHex(y)}),o&&!this.aIdleLow&&this._boneRot(this.neck,d,-.35),this.sickPts&&this.sickPts.visible){let x=this.sickPts.geometry.attributes.position.array;for(let M=0;M<this._sickN;M++){let R=this.t*(.7+M*.23)+M;x[M*3]=Math.sin(R)*.16,x[M*3+1]=.85+M%3*.1+Math.sin(R*1.7)*.08,x[M*3+2]=Math.cos(R*.9)*.12}this.sickPts.geometry.attributes.position.needsUpdate=!0,this.sickPts.material.opacity=.45+Math.sin(this.t*2)*.15}}},dc=class extends wo{constructor(e,t={}){super(e,{color:t.color??5978734,scale:t.scale??1.25,targetHeight:t.targetHeight??1.25,coat:null}),this.baseEmissive=1703976,this.legacy&&this.model.position.set(.5,0,-.2);let i=new wt({color:10354506}),s=zn(3963434),r=new Si(1,6,4),o=this.headB;if(this.legacy){this.eyes=[-.03,-.59].map(l=>So(this,o,new Ee(r,i),[3.55,4.25,l],.16));let a=new Mi(1,2.6,4);[[this.bones.Bone001,[-.6,3.55,-.31],.28],[this.bones.Bone002,[.5,3.6,-.31],.32],[this.bones.Bone001,[-1.6,3.5,-.31],.22]].forEach(([l,u,h])=>So(this,l,new Ee(a,s),u,h))}else if(o){this.eyes=[-.06,.06].map(l=>{let u=new Ee(new Si(.035,6,4),i);return o.add(u),u.position.set(l,.06,.14),u});let a=new Mi(.04,.12,4),c=this.torso||this.lean;for(let l=0;l<3;l++){let u=new Ee(a,s);u.position.set(0,.12+l*.02,-.08+l*.05),u.rotation.x=-.6,this.lean.add(u)}}else this.eyes=[];this.dying=0}updateMonster(e,t){if(this.happy=0,this.update(e,t),this.eyes&&this.eyes[0]){this.eyeBase||(this.eyeBase=this.eyes[0].scale.x);let i=this.eyeBase*(.85+Math.sin(this.t*6)*.25);this.eyes.forEach(s=>s&&s.scale.setScalar(i))}if(this.dying>0){this.dying-=e;let i=1-Math.max(0,this.dying)/.8;this.lean.rotation.z=i*1.5,this.root.scale.setScalar(1-i*.7),this.root.position.y=-i*.2}}},Ps=class{constructor(e,{targetHeight:t=1.7,name:i="NPC"}={}){this.root=new xt,this.model=Zu(e.scene),this.root.add(this.model),this.anims=e.animations||[],this.bones=qp(this.model),this.model.traverse(o=>{(o.isMesh||o.isSkinnedMesh)&&(o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1)}),Xp(this.model,t),this.height=t,this.mixer=new Cr(this.model);let s=o=>{let a=Ti(this.anims,o);if(!a)return null;let c=this.mixer.clipAction(a);return c.play(),c.setEffectiveWeight(0),c};this.aIdle=s(["Idle"]),this.aWalk=s(["Walk"]),this.aWave=s(["Wave","Yes"]),this.aPunch=s(["Punch","Slash","Idle_Attack"]),this.aIdle&&this.aIdle.setEffectiveWeight(1),this.walkW=0,this.t=Math.random()*10,this.talkT=0,this.hurtT=0,this.dying=0,this.name=i;let r=new Ee(new As(.35,10),new wt({color:0,transparent:!0,opacity:.25,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.02,this.root.add(r)}play(e){e==="attack"?this.attack():e==="hurt"&&this.hurt()}attack(){this.aPunch&&(this.aPunch.reset(),this.aPunch.setEffectiveWeight(1),this.aPunch.play())}hurt(){this.hurtT=.3}talk(){this.talkT=1.2,this.aWave&&(this.aWave.reset(),this.aWave.setEffectiveWeight(1),this.aWave.play())}update(e,t){this.t+=e;let i=t>.15;if(this.walkW=zt(this.walkW,i?1:0,10,e),this.aWalk&&this.aWalk.setEffectiveWeight(this.walkW),this.aIdle&&this.aIdle.setEffectiveWeight(1-this.walkW),this.mixer.update(e),this.talkT>0&&(this.talkT-=e),this.hurtT>0&&(this.hurtT-=e),this.dying>0){this.dying-=e;let s=1-Math.max(0,this.dying)/.8;this.root.rotation.z=s*1.2,this.root.scale.setScalar(1-s*.5)}}updateMonster(e,t){this.update(e,t)}};function bM(n){let e=Number(n);return Number.isFinite(e)?(e%360+360)%360:0}function Yp(n){let e=bM(n);return e===90?-90:90}function Ju({x:n=0,y:e=0,vw:t,vh:i,forced:s=!1,rot:r=0}){let o=s?r||90:0,a=!!s&&o!==0;return{x:n,y:e,vw:t,vh:i,forced:a,rot:a?o:0,tx:t,ty:i,gameW:a?i:t,gameH:a?t:i}}function Zp(n){return!n.forced||!n.rot?{transform:"",origin:"",width:n.gameW,height:n.gameH}:n.rot===-90?{transform:`translateY(${n.ty}px) rotate(-90deg)`,origin:"top left",width:n.gameW,height:n.gameH}:{transform:`translateX(${n.tx}px) rotate(90deg)`,origin:"top left",width:n.gameW,height:n.gameH}}function jp(n,e,t){let i=n-t.x,s=e-t.y;return!t.forced||!t.rot?{x:i,y:s}:t.rot===90?{x:s,y:t.tx-i}:t.rot===-90?{x:t.ty-s,y:i}:{x:i,y:s}}function Kp(n,e,t){return!t.forced||!t.rot?{x:t.x+n,y:t.y+e}:t.rot===90?{x:t.x+t.tx-e,y:t.y+n}:t.rot===-90?{x:t.x+e,y:t.y+t.ty-n}:{x:t.x+n,y:t.y+e}}function Jp(n,e,t=50){let i=e.x-n.x,s=e.y-n.y,r=Math.hypot(i,s);return r>t&&r>0&&(i=i/r*t,s=s/r*t),{dx:i,dy:s,x:i/t,y:s/t}}function MM(n,e){let t=Math.hypot(n,e);t>1&&(n/=t,e/=t);let i=(n+e)*Math.SQRT1_2,s=(-n+e)*Math.SQRT1_2;return{wx:i,wz:s,mag:Math.min(1,t||0)}}function SM(n,e,t){if(!t)return{x:n,y:e};let i=s=>t.has?t.has(s):!!(t.includes&&t.includes(s));return(i("w")||i("arrowup"))&&(e-=1),(i("s")||i("arrowdown"))&&(e+=1),(i("a")||i("arrowleft"))&&(n-=1),(i("d")||i("arrowright"))&&(n+=1),{x:n,y:e}}function Qp(n,e,t,i=!1){let s=n,r=i?-e:e;return{x:s,y:r}=SM(s,r,t),MM(s,r)}var Ir="dogzone_save_v1";function fc(n,e){let t=e&&typeof e=="object"?{...e}:{};if(n==null||n==="")return{state:{...t,v:3},migrated:!1,from:null};let i;try{i=typeof n=="string"?JSON.parse(n):{...n}}catch{return{state:{...t,v:3},migrated:!1,from:null,error:"json"}}if(!i||typeof i!="object")return{state:{...t,v:3},migrated:!1,from:null};let s=i.v==null?1:i.v,r={...t,...i,settings:{...t.settings||{},...i.settings||{}}},o=(u,h)=>Object.prototype.hasOwnProperty.call(u,h),a=o(i,"latas")||o(i,"chapitas"),c=o(i,"dogCoins")||o(i,"pdogs");o(i,"dogCoins")||(r.dogCoins=o(i,"latas")?Number(i.latas)||0:t.dogCoins!=null?t.dogCoins:0),o(i,"pdogs")||(r.pdogs=o(i,"chapitas")?Number(i.chapitas)||0:t.pdogs!=null?t.pdogs:0),r.dogCoins==null&&(r.dogCoins=0),r.pdogs==null&&(r.pdogs=0),r.memorials||(r.memorials=[]),r.story||(r.story={tag:!1,notebook:!1,tracked:!1}),r.economy||(r.economy=em(r.lastTick||Date.now())),Array.isArray(r.dogs)||(r.dogs=t.dogs||[]),o(i,"potionUses")||(r.potionUses=o(i,"potions")?Math.max(0,Number(i.potions)||0):t.potionUses!=null?t.potionUses:3),r.potionUses==null&&(r.potionUses=0),r.potions=r.potionUses,r.settings||(r.settings={...t.settings||{}}),r.settings.trialTimers==null&&(r.settings.trialTimers=!!(t.settings&&t.settings.trialTimers)),r.clientRev==null&&(r.clientRev=0),r.updatedAt==null&&(r.updatedAt=r.lastTick||Date.now()),o(i,"playerName")||(r.playerName=t.playerName!=null?t.playerName:""),r.playerName==null&&(r.playerName=""),Array.isArray(r.dogs)&&(r.dogs=r.dogs.map(u=>(!u||typeof u!="object"||u.name==null||u.name==="",u))),r.v=Math.max(Number(s)||1,3);let l=s<3||a&&!c;return{state:r,migrated:l,from:s}}var wM=180*1e3;function Qu(n,e){let t=Number(n)||0,i=Number(e)||Date.now();return t&&i<t-wM?{frozen:!0,dt:0,rewind:!0,jumped:i-t}:{frozen:!1,dt:Math.max(0,i-(t||i)),rewind:!1,jumped:i-(t||i)}}function em(n=Date.now()){return{day:Ao(n),missions:0,missionById:{},combatDogs:0,cleanDone:!1,vetVisits:0,activityDogs:0,activityDay:{},activityById:{}}}function Ao(n=Date.now()){let e=new Date(n),t=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${i}-${s}`}function Qn(n,e=Date.now()){let t=Ao(e);if(!n||n.day!==t){let i=em(e);return n&&(n.carbonillaFound&&(i.carbonillaFound=!0),n.racePdogsWeek&&(i.racePdogsWeek=n.racePdogsWeek)),i}return n}function Ro(n){if(!n||n.__walletAliased)return n;n.dogCoins==null&&(n.dogCoins=n.latas!=null&&Number(n.latas)||0),n.pdogs==null&&(n.pdogs=n.chapitas!=null&&Number(n.chapitas)||0);let e=Object.getOwnPropertyDescriptor(n,"latas"),t=Object.getOwnPropertyDescriptor(n,"chapitas");(!e||e.writable||e.value!==void 0)&&(delete n.latas,Object.defineProperty(n,"latas",{get(){return this.dogCoins},set(s){this.dogCoins=s},enumerable:!0,configurable:!0})),(!t||t.writable||t.value!==void 0)&&(delete n.chapitas,Object.defineProperty(n,"chapitas",{get(){return this.pdogs},set(s){this.pdogs=s},enumerable:!0,configurable:!0})),n.potionUses==null&&n.potions!=null&&(n.potionUses=Number(n.potions)||0),n.potions==null&&n.potionUses!=null&&(n.potions=Number(n.potionUses)||0);let i=Object.getOwnPropertyDescriptor(n,"potions");return!n.__potionAliased&&(!i||i.writable||i.value!==void 0)&&(n.potionUses==null&&(n.potionUses=Number(n.potions)||0),delete n.potions,Object.defineProperty(n,"potions",{get(){return this.potionUses},set(s){this.potionUses=s},enumerable:!0,configurable:!0}),n.__potionAliased=!0),n.__walletAliased=!0,n}function is(n){let e={...n};return e.v=3,e.dogCoins=n.dogCoins,e.pdogs=n.pdogs,e.latas=n.dogCoins,e.chapitas=n.pdogs,e.potionUses=n.potionUses!=null?n.potionUses:n.potions,e.potions=e.potionUses,e.playerName=n.playerName!=null?n.playerName:"",delete e.__walletAliased,delete e.__potionAliased,JSON.stringify(e)}var et={feedPuppy:3,feedAdult:5,feedPregnant:7,potionCost:15,vetCost:15,kennelUpgrade:[250,500],shopMult:1.5,mestizoPrice:80,shopMaxBase:80,sellFactor:.5,sellMin:10,monsterReward:[1,3],combatDayCap:15,cleanReward:10,cleanOncePerDay:!0,missionSoftAfter:4,missionSoftFactor:.5,missions:{basural:{dur:45,base:5,hunger:8,stat:"olfato"},galpon:{dur:90,base:8,hunger:14,stat:"olfato"},patrulla:{dur:120,base:13,hunger:20,stat:"resistencia"}},firstBasuralDur:12,adoptPayout:8,potionUsesPerKit:3,activityDayCap:40};function Ai(n){if(!n||n.id==="mestizo")return et.mestizoPrice;let e=Number(n.precio)||et.mestizoPrice;return Math.max(10,Math.round(e*et.shopMult))}function eh(n,e,t){return t?et.feedPregnant:e==="cachorro"?et.feedPuppy:et.feedAdult}function tm(n=Math.random){let e=et.monsterReward[0],t=et.monsterReward[1];return e+(n()*(t-e+1)|0)}function th(n,e,t=Date.now()){let i={...n},s=Math.max(0,et.combatDayCap-(i.combatDogs||0)),r=Math.min(e,s);return i.combatDogs=(i.combatDogs||0)+r,{eco:i,paid:r,capped:r<e}}function nm(n){return et.cleanOncePerDay?!n.cleanDone:!0}function im(n){return{...n,cleanDone:!0}}function nh(n,e,t){let i={...n,missionById:{...n.missionById||{}}},s=i.missions||0,r=s>=et.missionSoftAfter?et.missionSoftFactor:1,o=Math.max(0,Math.round(t*r));return i.missions=s+1,i.missionById[e]=(i.missionById[e]||0)+1,{eco:i,paid:o,factor:r}}function ih(n,e){if(e&&n.id==="basural")return et.firstBasuralDur;let t=et.missions[n.id];return t?t.dur:n.dur}function sm(n){let e=et.missions[n.id];return e?e.base:n.base}var EM=["breed","feed","kennel","timer","potion","vet","dog","mission"];function rm(n){return!EM.includes(n)}var lt={trial:{gestMs:6e5,coolDamMs:12e5,coolSireMs:6e5},recommended:{gestMs:432e5,coolDamMs:1728e5,coolSireMs:864e5},gestMs:6e5,coolDamMs:12e5,coolSireMs:6e5,litter:[.6,.3,.1],lifeDam:3,lifeSire:5,feeBase:15,feePct:.04,feeMin:20,feeMax:50,defaultPrice:40,mut:[.2,.6,.2],vigorCapPure:3,vigorCapOneCross:2,adoptPayout:8,veteranFertility:.25},Co=["fuerza","velocidad","resistencia","olfato","lealtad"];function pc(n){return Co.reduce((e,t)=>e+(n[t]||0),0)}function Po(n){return n==="cruza"||n==="mestizo_linaje"||typeof n=="string"&&n.startsWith("cruza_")}function mc(n){let e=n&&n.parentUids;return Array.isArray(e)?e.filter(Boolean):[]}function TM(n,e){if(!n||!e||n.uid===e.uid)return n&&e&&n.uid===e.uid?"mismo":null;let t=new Set(mc(n)),i=new Set(mc(e));if(t.has(e.uid)||i.has(n.uid))return"padre-hijo";for(let s of t)if(i.has(s))return"hermanos";return null}function gc(n,e){let t=Number(n)||lt.defaultPrice,i=Number(e)||lt.defaultPrice,s=lt.feeBase+Math.round(lt.feePct*((t+i)/2));return Math.max(lt.feeMin,Math.min(lt.feeMax,s))}function AM(n){let e=n();return e<lt.mut[0]?-1:e<lt.mut[0]+lt.mut[1]?0:1}function RM(n,e,t,i,s=Math.random){let r={};for(let f of Co){let g=s()<.5?n[f]:e[f];r[f]=Math.max(1,Math.min(10,(g||1)+AM(s)))}let o=Po(t),a=Po(i),c=t===i&&!o&&!a,l=0,u=lt.vigorCapPure;if(o&&a?(l=0,u=0):o||a?(u=lt.vigorCapOneCross,s()<.5&&(l=1)):c||(l=1),l){let f=Co.filter(_=>r[_]===Math.min(...Co.map(m=>r[m])));f.length>1&&f.sort((_,m)=>Math.max(n[m]||0,e[m]||0)-Math.max(n[_]||0,e[_]||0));let g=f[0];r[g]<10&&(r[g]+=1)}let h=Math.max(pc(n),pc(e))+u,d=pc(r);for(;d>h;){let f=Co.filter(g=>r[g]>1).sort((g,_)=>r[_]-r[g]);if(!f.length)break;r[f[0]]-=1,d-=1}return{stats:r,vigor:!!l,cap:h,total:pc(r)}}function CM(n,e,t=Math.random){let i=n.coat||{color:n.color||11565642,spots:"none",spotsColor:3811874},s=e.coat||{color:e.color||11565642,spots:"none",spotsColor:3811874};return t()<.5?{color:i.color,spots:s.spots,spotsColor:s.spotsColor||i.spotsColor}:{color:s.color,spots:i.spots,spotsColor:i.spotsColor||s.spotsColor}}function PM(n,e,t,i){return n===e&&!Po(n)?{breed:n,label:t||n,kind:"pura"}:Po(n)||Po(e)?{breed:"mestizo_linaje",label:"Mestizo de linaje",kind:"linaje"}:{breed:"cruza",label:`Cruza ${t||n} \xD7 ${i||e}`,kind:"cruza",sireBreed:n,damBreed:e}}function LM(n=Math.random){let e=n();return e<lt.litter[0]?1:e<lt.litter[0]+lt.litter[1]?2:3}function _c(n,e,t={}){let i=t.now||Date.now(),s=t.stageOf||(m=>m.stage);if(!n||!e)return{ok:!1,reason:"faltan padres"};if(n.uid===e.uid)return{ok:!1,reason:"mismo perro"};let r=n.sex,o=e.sex;if(!(r==="M"&&o==="H"||r==="H"&&o==="M"))return{ok:!1,reason:"hace falta un macho y una hembra"};let a=r==="M"?n:e,c=r==="H"?n:e,l=s(a),u=s(c),h=typeof l=="string"?l:l&&l.id,d=typeof u=="string"?u:u&&u.id;if(h==="cachorro"||d==="cachorro")return{ok:!1,reason:"un cachorro no puede cruzar"};if(h==="retirado"||d==="retirado")return{ok:!1,reason:"un retirado no puede cruzar"};if(a.mission||c.mission)return{ok:!1,reason:"est\xE1n de misi\xF3n"};if((a.hunger??100)<=25||(c.hunger??100)<=25)return{ok:!1,reason:"tienen hambre: primero comen"};if((c.breedCount||0)>=lt.lifeDam)return{ok:!1,reason:"la hembra ya no puede tener m\xE1s camadas"};if((a.breedCount||0)>=lt.lifeSire)return{ok:!1,reason:"el macho ya no puede cruzar m\xE1s"};if(c.coolUntil&&i<c.coolUntil)return{ok:!1,reason:"la hembra est\xE1 en enfriamiento"};if(a.coolUntil&&i<a.coolUntil)return{ok:!1,reason:"el macho est\xE1 en enfriamiento"};if(c.pregnant)return{ok:!1,reason:"la hembra ya est\xE1 pre\xF1ada"};let f=TM(a,c);if(f==="padre-hijo"||f==="hermanos")return{ok:!1,reason:"est\xE1n emparentados (no se pueden cruzar padres, hijos ni hermanos)",kinship:f};let g=t.freeSlots;if(g!=null&&g<1)return{ok:!1,reason:"no hay lugar en el criadero"};let _=m=>m==="veterano";return _(h)||_(d)?{ok:!0,male:a,female:c,warning:"est\xE1 cansado",veteran:!0}:{ok:!0,male:a,female:c}}function om(n){return n?lt.trial:lt.recommended}function am(n,e,t,i=Date.now(),s=lt.gestMs){return n.pregnant={sireUid:e.uid,sireName:e.name,sireBreed:e.breed,start:i,due:i+s,fee:t},n.pregnant}function IM(n,e,t=Date.now(),i=lt){let s=i||lt;n.coolUntil=t+(s.coolDamMs||lt.coolDamMs),e.coolUntil=t+(s.coolSireMs||lt.coolSireMs),n.breedCount=(n.breedCount||0)+1,e.breedCount=(e.breedCount||0)+1,n.restUntil=n.coolUntil,delete n.pregnant}function cm({female:n,male:e,getStats:t,getLabel:i,getPrice:s,getCoat:r,freeSlots:o,now:a,rng:c,newUid:l,pickName:u,timers:h}){c=c||Math.random,a=a||Date.now();let d=LM(c),f=t(e),g=t(n),_=i(e),m=i(n),p=[];for(let R=0;R<d;R++){let A=RM(f,g,e.breed,n.breed,c),P=PM(e.breed,n.breed,_,m),k=CM({coat:r?r(e):e.coat,color:e.color},{coat:r?r(n):n.coat,color:n.color},c),v=c()<.5?"M":"H";p.push({uid:l?l():Math.random().toString(36).slice(2,9),name:u?u():"Cachorro",breed:P.breed,breedLabel:P.label,breedKind:P.kind,sex:v,born:a,hunger:80,hp:null,mission:null,wins:0,stats:A.stats,coat:k,parentUids:[e.uid,n.uid],lineage:{sire:{uid:e.uid,name:e.name,breed:e.breed,label:_},dam:{uid:n.uid,name:n.name,breed:n.breed,label:m},sireParents:mc(e).map(w=>({uid:w})),damParents:mc(n).map(w=>({uid:w}))},vigor:A.vigor})}let y=[],x=[],M=o;for(let R of p)M>0?(y.push(R),M-=1):x.push(R);return IM(n,e,a,h||lt),{kept:y,adopted:x,payout:x.length*lt.adoptPayout,size:d}}var DM=["dogo_argentino","pastor_aleman","rottweiler","dobermann","teckel","boxer","gran_danes","weimaraner","dogo_burdeos","caniche","briard","bulldog_frances","labrador","golden","beagle","border_collie","greyhound","jack_russell","bloodhound","malinois","cane_corso","galgo_espanol","chihuahua","akita","shiba","husky","borzoi","caucasico","cimarron","fila","amstaff"],NM=new Set(DM),lm="data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" rx="28" fill="#3a2f28"/>
    <ellipse cx="128" cy="200" rx="70" ry="28" fill="#2a221c"/>
    <path d="M70 150c8-50 40-78 58-78s50 28 58 78c-10 28-106 28-116 0z" fill="#8a6a4a"/>
    <circle cx="128" cy="118" r="36" fill="#7a5a3a"/>
    <ellipse cx="78" cy="100" rx="18" ry="28" fill="#6a4a2e"/>
    <ellipse cx="178" cy="100" rx="18" ry="28" fill="#6a4a2e"/>
    <circle cx="116" cy="112" r="5" fill="#1a120c"/>
    <circle cx="140" cy="112" r="5" fill="#1a120c"/>
    <ellipse cx="128" cy="128" rx="7" ry="5" fill="#2a1a12"/>
    <text x="128" y="236" text-anchor="middle" font-size="18" fill="#d8c8b0" font-family="sans-serif">Sin foto</text>
  </svg>`);function UM(n){return NM.has(n)}function OM(n){return UM(n)?typeof window<"u"&&window.__DZ_PORTRAITS&&window.__DZ_PORTRAITS[n]?"data:image/webp;base64,"+window.__DZ_PORTRAITS[n]:`assets/portraits/${n}.webp`:lm}function sh(n,e,t){let i=OM(n),s=e||"";return`<img${t?` class="${t}"`:' class="portrait"'} src="${i}" alt="${s}" width="256" height="256" loading="lazy" onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='${lm}';}">`}var Ls=null;async function oh(){if(Ls)return Ls;if(typeof window<"u"&&window.__DZ_CREDITS)return Ls=window.__DZ_CREDITS,Ls;try{Ls=await(await fetch("assets/credits/retratos-creditos.json")).json()}catch{Ls=null}return Ls}function rh(n){let e=String(n||"").toUpperCase();return e.includes("BY-SA")||e.includes("BY SA")?"BY-SA":e.includes("BY")?"BY":e.includes("CC0")||e.includes("PUBLIC DOMAIN")||e.includes("PD")?"CC0":"OTRA"}function um(n){let e=n&&n.retratos||[],t=e.filter(a=>{let c=rh(a.licencia||a.license||a.licence);return c==="BY"||c==="BY-SA"}),i=e.filter(a=>rh(a.licencia||a.license||a.licence)==="CC0"),s=a=>{let c=a.licencia||a.license||a.licence||"",l=rh(c),u=a.autor||a.author||"autor desconocido",h=a.commons_page||a.pagina||a.url||"",d=a.credito_adicional||a.atribucion||a.texto_atribucion||"",f=l==="BY-SA"||l==="BY"?`<span class="chip lic-${l}">CC ${l}</span>`:`<span class="chip">${c||l}</span>`,g=h?` <a href="${h}" target="_blank" rel="noopener">${a.commons_title||"fuente"}</a>`:"";return`<div class="credit-row"><b>${a.nombre||a.id}</b> ${f}<div class="s">Foto: ${u}.${g}${d?" "+d:""} ${c?"Licencia: "+c+".":""}</div></div>`},r=(n&&n.modelos_3d||[]).map(a=>`<div class="credit-row"><b>${a.archivo||a.pack||"Modelo 3D"}</b> <span class="chip">${a.licencia||"CC0"}</span><div class="s">${a.texto_atribucion||(a.autor||"")+(a.pack?" \u2014 "+a.pack:"")}</div></div>`).join(""),o=(n&&n.kenney||[]).map(a=>`<div class="credit-row"><b>${a.pack||"Kenney"}</b> <span class="chip">${a.licencia||"CC0 1.0"}</span><div class="s">${a.texto_atribucion||"Kenney Vleugels (Kenney.nl). "+(a.pack||"")}</div></div>`).join("");return`
    <div class="say">Cr\xE9ditos de Dog Zone: La Plaga. Las fotos con licencia CC BY y CC BY-SA se listan primero, porque hay que atribuirlas.</div>
    <div class="t" style="margin-top:8px">Retratos CC BY y CC BY-SA (obligatorio)</div>
    ${t.length?t.map(s).join(""):'<p class="note">No se pudieron cargar los cr\xE9ditos de los retratos.</p>'}
    ${i.length?`<div class="t" style="margin-top:8px">Retratos CC0 / dominio p\xFAblico</div>${i.map(s).join("")}`:""}
    <div class="t" style="margin-top:8px">Modelos 3D</div>
    ${r||'<p class="note">Modelos 3D: Quaternius (Ultimate Animated Animals y Zombie Apocalypse Kit), CC0 1.0. Perro y lobo originales: Animated Animales Low Poly (CC0).</p>'}
    <div class="t" style="margin-top:8px">\xCDtems e \xEDconos</div>
    ${o||'<p class="note">\xCDtems del botiqu\xEDn e \xEDconos de UI: Kenney Vleugels (www.kenney.nl), Generic Items y Game Icons, CC0 1.0. El botiqu\xEDn usa cruz azul sobre naranja, no cruz roja sobre blanco.</p>'}
    <p class="note">Motor: three.js (MIT). Fuentes: Pixelify Sans y Fredoka (SIL OFL 1.1). Datos de razas: est\xE1ndares FCI y fichas AKC.</p>
  `}var Sh={};wd(Sh,{AILMENTS:()=>hm,MISSION_AILMENT_CHANCE:()=>dm,MISSION_AILMENT_IDS:()=>ah,RABIA:()=>fn,ailmentDef:()=>Hn,applyDebuffs:()=>hh,blocksAction:()=>uh,canCatchToday:()=>xc,continueTreatment:()=>gm,currentAilment:()=>tn,disobeyRoll:()=>fh,disobeyText:()=>ph,eliseoText:()=>bh,fichaText:()=>Lo,finishCure:()=>yc,hasAilment:()=>lh,infect:()=>_h,isImmuneToRabia:()=>mm,potionMessage:()=>dh,rabiaImmuneMs:()=>pm,rabiaWaitMs:()=>ch,rollMissionAilment:()=>yh,rollRabiesAfterCombat:()=>xh,startTreatment:()=>vh,tickSelfCure:()=>vc,treatmentLabel:()=>Mh,trialMs:()=>fm,zoneBlockText:()=>mh});var fn={id:"rabia",chanceContagioCombate:.03,chanceContagioHerido:.06,contagiaEntrePerros:!1,apareceEnCriadero:!1,excluyeCachorros:!0,debuff:{fuerza:-.15,velocidad:-.15},chanceDesobedecer:.1,bloquea:["zona","carrera","combate"],duracionSinCurarHoras:72,duracionPruebaMs:9e5,tratamiento:{visitas:3,costoTotal:30,cobro:"al iniciar",esperaEntreVisitasHoras:24,esperaPrueba_min:2},puedeMatar:!1,empeora:!1,curaBotiquin:!1,curaPDogs:!1,inmunidadPostCuraHoras:48,inmunidadPruebaMs:3e5},hm={resfrio:{id:"resfrio",nombre:"Resfr\xEDo",costo:15,visitas:1,debuff:{velocidad:-.1},bloquea:[],duracionHoras:24,duracionPruebaMs:300*1e3,ficha:"Resfr\xEDo: est\xE1 un poco ca\xEDdo, con el hocico fr\xEDo. Tiene cura.",toast:n=>`${n} volvi\xF3 con un resfr\xEDo suave. Don Eliseo lo puede curar.`,eliseo:"Un resfr\xEDo de nada. Con este jarabe se le pasa.",curaBotiquin:!1},panza:{id:"panza",nombre:"Panza revuelta",costo:10,visitas:1,debuff:{resistencia:-.1},bloquea:[],duracionHoras:18,duracionPruebaMs:240*1e3,ficha:"Panza revuelta: no tiene ganas de comer tanto. Tiene cura.",toast:n=>`${n} tiene la panza revuelta. Don Eliseo tiene un t\xF3nico.`,eliseo:"Le doy un t\xF3nico y en un rato est\xE1 como nuevo.",curaBotiquin:!1},fiebre:{id:"fiebre",nombre:"Fiebre",costo:20,visitas:1,debuff:{fuerza:-.1,velocidad:-.1},bloquea:["zona","combate"],duracionHoras:36,duracionPruebaMs:480*1e3,ficha:"Fiebre: est\xE1 caliente y cansado. Tiene cura.",toast:n=>`${n} volvi\xF3 con fiebre. Mejor llevarlo con Don Eliseo.`,eliseo:"Tiene un poco de fiebre. Esto se pasa con cuidado y este jarabe.",curaBotiquin:!1},rabia:{id:"rabia",nombre:"Rabia del juego",costo:fn.tratamiento.costoTotal,visitas:fn.tratamiento.visitas,debuff:fn.debuff,bloquea:fn.bloquea,duracionHoras:fn.duracionSinCurarHoras,duracionPruebaMs:fn.duracionPruebaMs,ficha:"Rabia del juego: est\xE1 cansado y de mal humor. Tiene cura.",toast:n=>`Uy\u2026 ${n} volvi\xF3 muy cansado y gru\xF1e bajito. Mejor llevarlo con Don Eliseo.`,eliseo:"Tranquilo. Esto tiene cura. Con unos d\xEDas de cuidado, vuelve a ser el de siempre.",curaBotiquin:!1,icon:"cloud"}},dm=.08,ah=["resfrio","panza","fiebre"];function fm(n,e){return e&&n.duracionPruebaMs?n.duracionPruebaMs:(n.duracionHoras||24)*3600*1e3}function ch(n){return n?fn.tratamiento.esperaPrueba_min*60*1e3:fn.tratamiento.esperaEntreVisitasHoras*3600*1e3}function pm(n){return n?fn.inmunidadPruebaMs:fn.inmunidadPostCuraHoras*3600*1e3}function tn(n,e=Date.now()){let t=n&&n.ailment;return!t||!t.id?null:(t.until&&e>=t.until&&!(t.treatment&&t.treatment.started&&(t.treatment.visitsDone||0)<(t.treatment.visits||1)),t)}function lh(n,e=Date.now()){return!!tn(n,e)}function Hn(n){return hm[n]||null}function xc(n,e=Date.now(),t){if(lh(n,e)||!n||n.immuneUntil&&e<n.immuneUntil)return!1;if(!n.sickDay)return!0;if(typeof t=="function")return n.sickDay!==t(e);let i=new Date(e),s=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`;return n.sickDay!==s}function mm(n,e,t=Date.now()){return!!(!n||fn.excluyeCachorros&&(e==="cachorro"||n.pregnant)||n.immuneUntil&&t<n.immuneUntil)}function uh(n,e,t=Date.now()){let i=tn(n,t);if(!i)return!1;let s=Hn(i.id);return!!(s&&s.bloquea&&s.bloquea.includes(e))}function hh(n,e,t=Date.now()){let s={...n||{}},r=tn(e,t);if(!r)return s;let o=Hn(r.id);if(!o||!o.debuff)return s;for(let a of Object.keys(o.debuff)){let c=1+o.debuff[a];s[a]=Math.max(1,Math.round((s[a]||1)*c*10)/10)}return s}function dh(n,e=Date.now()){let t=tn(n,e);return t&&t.id==="rabia"?"El botiqu\xEDn cura heridas, no esto. Para esto, Don Eliseo.":t?"El botiqu\xEDn cura heridas, no esta enfermedad. Para esto, Don Eliseo.":null}function fh(n,e=Math.random,t=Date.now()){let i=tn(n,t);return!i||i.id!=="rabia"?!1:e()<fn.chanceDesobedecer}function ph(n){return`${n} gru\xF1\xF3 y no quiso moverse. Est\xE1 cansado.`}function mh(n){return`${n} necesita descansar y curarse primero.`}function gh(n){let e=new Date(n);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function _h(n,e,t=Date.now(),i=!1,s=gh){let r=Hn(e);return!r||!n?{ok:!1,reason:"desconocida"}:lh(n,t)?{ok:!1,reason:"ya est\xE1 enfermo"}:xc(n,t,s)?(n.ailment={id:r.id,start:t,until:t+fm(r,i),treatment:null},n.sickDay=s(t),{ok:!0,dog:n,toast:r.toast(n.name),ficha:r.ficha}):{ok:!1,reason:"ya se enferm\xF3 hoy"}}function xh(n,{hpRatio:e,stageId:t,rng:i=Math.random,now:s=Date.now(),trial:r=!1,dayKeyFn:o=gh}={}){if(!n)return{ok:!1};if(mm(n,t,s))return{ok:!1,reason:"inmune"};if(!xc(n,s,o))return{ok:!1,reason:"limite"};let a=e!=null&&e<.3?fn.chanceContagioHerido:fn.chanceContagioCombate;return i()>=a?{ok:!1,reason:"no-roll"}:_h(n,"rabia",s,r,o)}function yh(n,{rng:e=Math.random,now:t=Date.now(),trial:i=!1,dayKeyFn:s=gh}={}){if(!n)return{ok:!1};if(!xc(n,t,s))return{ok:!1,reason:"limite"};if(e()>=dm)return{ok:!1,reason:"no-roll"};let r=ah[e()*ah.length|0];return _h(n,r,t,i,s)}function vh(n,e=Date.now(),t=!1){let i=tn(n,e);if(!i)return{ok:!1,reason:"no est\xE1 enfermo"};let s=Hn(i.id),r=s.visitas||1,o=s.costo;return i.treatment&&i.treatment.started?gm(n,e,t):(i.treatment={started:!0,visits:r,visitsDone:(r<=1,1),nextAt:r<=1?0:e+ch(t),costPaid:o},r<=1?yc(n,e,t,"vet"):{ok:!0,ongoing:!0,cost:o,text:`Visita 1 de ${r} lista. Volv\xE9 ${t?"en 2 minutos":"ma\xF1ana"} para la pr\xF3xima.`})}function gm(n,e=Date.now(),t=!1){let i=tn(n,e);if(!i||!i.treatment||!i.treatment.started)return{ok:!1,reason:"no empez\xF3 el tratamiento"};let s=i.treatment;if(s.nextAt&&e<s.nextAt){let o=s.nextAt-e;return{ok:!1,reason:"espera",text:`Todav\xEDa no es la pr\xF3xima visita. Volv\xE9 ${t?`en ${Math.max(1,Math.ceil(o/6e4))} min`:"ma\xF1ana"}.`}}if(s.visitsDone=(s.visitsDone||0)+1,s.visitsDone>=s.visits)return yc(n,e,t,"vet");s.nextAt=e+ch(t);let r=t?"en 2 minutos":"ma\xF1ana";return{ok:!0,ongoing:!0,cost:0,text:`Visita ${s.visitsDone} de ${s.visits} lista. Volv\xE9 ${r} para la pr\xF3xima.`}}function yc(n,e=Date.now(),t=!1,i="vet"){let s=n.name,r=n.ailment&&n.ailment.id;n.ailment=null,r==="rabia"&&(n.immuneUntil=e+pm(t));let o=i==="self"?`${s} descans\xF3 mucho y se siente mejor. La pr\xF3xima, Don Eliseo lo cura m\xE1s r\xE1pido.`:`\xA1${s} est\xE1 curado! Volvi\xF3 a mover la cola.`;return{ok:!0,cured:!0,how:i,cost:0,text:o}}function vc(n,e=Date.now(),t=!1){let i=tn(n,e);return!i||i.treatment&&i.treatment.started&&(i.treatment.visitsDone||0)<(i.treatment.visits||1)?null:i.until&&e>=i.until?yc(n,e,t,"self"):null}function Lo(n,e=Date.now()){let t=tn(n,e);if(!t)return"";let i=Hn(t.id);return i?i.ficha:""}function bh(n,e=Date.now()){let t=tn(n,e);if(!t)return"Est\xE1 sano. Le reviso las patas y listo.";let i=Hn(t.id);return i?i.eliseo:"Lo puedo curar."}function Mh(n,e=Date.now()){let t=tn(n,e);if(!t)return"";let i=Hn(t.id);return i?t.treatment&&t.treatment.started&&i.visitas>1?`Siguiente visita (${(t.treatment.visitsDone||0)+1} de ${i.visitas})`:i.id==="rabia"?`Tratamiento (3 visitas) \u2014 ${i.costo} Dogs`:`Curar ${i.nombre} \u2014 ${i.costo} Dogs`:""}var Rh={};wd(Rh,{ACTIVITIES:()=>Is,ACTIVITY_DAY_CAP:()=>Io,ACTIVITY_LIST:()=>wh,alreadyDoneToday:()=>bc,applyActivityReward:()=>Th,canStartActivity:()=>Mc,siestaLoyalty:()=>Ah,startActivity:()=>Eh,weekKey:()=>_m});var Is={pastoreo:{id:"pastoreo",nombre:"Pastoreo de gallinas",dur:60,base:10,hunger:8,desc:"Llevar al perro a cuidar las gallinas un rato. Tranquilo, sin pelea.",bloqueaSi:[]},carrera:{id:"carrera",nombre:"Carrera al moj\xF3n",dur:45,base:10,hunger:10,desc:"Una carrera corta hasta el moj\xF3n del camino.",bloqueaSi:["carrera","zona"],weeklyPdogs:1},rescate:{id:"rescate",nombre:"Buscar a Carbonilla",dur:75,base:15,hunger:12,desc:"Salir a buscar a Carbonilla, la gata del pueblo, que se esconde cerca.",bloqueaSi:[],firstPdogs:1},siesta:{id:"siesta",nombre:"Siesta de cachorros",dur:40,base:6,hunger:4,desc:"Cuidar a los cachorros un rato. Suma un poco de lealtad si el perro es cachorro.",bloqueaSi:[],puppyLoyalty:1}},wh=Object.values(Is),Io=40;function _m(n=Date.now()){let e=new Date(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),i=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-i);let s=new Date(Date.UTC(t.getUTCFullYear(),0,1)),r=Math.ceil(((t-s)/864e5+1)/7);return`${t.getUTCFullYear()}-W${String(r).padStart(2,"0")}`}function bc(n,e){return!!(n&&n.activityDay&&n.activityDay[e])}function Mc(n,e,{eco:t,now:i=Date.now(),stageOf:s,blocksAction:r,isBusy:o}={}){let a=Is[e];if(!a)return{ok:!1,reason:"actividad desconocida"};if(!n)return{ok:!1,reason:"eleg\xED un perro"};let c=s?s(n):null;if(c&&c.id==="retirado")return{ok:!1,reason:`${n.name} ya est\xE1 retirado`};if(a.id==="siesta"&&c&&c.id!=="cachorro"&&c.id,n.pregnant)return{ok:!1,reason:`${n.name} est\xE1 en el nido`};if(n.mission||n.activity)return{ok:!1,reason:`${n.name} ya est\xE1 ocupado`};if(o&&o(n))return{ok:!1,reason:`${n.name} est\xE1 ocupado`};if(bc(t,e))return{ok:!1,reason:"esa actividad ya se hizo hoy"};if(r){for(let l of a.bloqueaSi)if(r(n,l,i))return{ok:!1,reason:`${n.name} necesita descansar y curarse primero.`}}return(n.hunger||0)<8?{ok:!1,reason:`${n.name} tiene mucha hambre. Primero dale de comer.`}:{ok:!0,def:a}}function Eh(n,e,t=Date.now()){let i=Is[e];return n.activity={id:e,start:t,end:t+i.dur*1e3,reward:i.base},n.hunger=Math.max(0,(n.hunger||0)-i.hunger),n.activity}function Th(n,e,t,i=Date.now(),s={}){let r={...n,activityDay:{...n.activityDay||{}},activityById:{...n.activityById||{}}};if(r.activityDay[e])return{eco:r,paid:0,pdogs:0,blocked:"already"};let o=Math.max(0,Io-(r.activityDogs||0)),a=Math.min(Math.max(0,Math.round(t)),o);r.activityDogs=(r.activityDogs||0)+a,r.activityDay[e]=!0,r.activityById[e]=(r.activityById[e]||0)+1;let c=0;if(e==="carrera"){let l=_m(i);r.racePdogsWeek!==l&&(c=Is.carrera.weeklyPdogs,r.racePdogsWeek=l)}return e==="rescate"&&!r.carbonillaFound&&s.firstCarbonilla!==!1&&(c+=Is.rescate.firstPdogs,r.carbonillaFound=!0),{eco:r,paid:a,pdogs:c,capped:a<t}}function Ah(n,e){return e==="cachorro"?Is.siesta.puppyLoyalty:0}var Dr={url:"https://lfurfomrqtznznoqwzng.supabase.co",anonKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdXJmb21ycXR6bnpub3F3em5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ1NzM4MTAsImV4cCI6MjExMDE0OTgxMH0.JfNL2NDv2aWQfJzAD_bUIliFdaPKUvDI1EREmhqTZ50",projectRef:"lfurfomrqtznznoqwzng"},xm="players.dogzone.local",Sc="dogzone_cloud_session_v1",Ch="dogzone_save_backup_v1",ym=/^[A-Za-z0-9_-]{3,20}$/,Ph=45e3,vm=12e3;function Dh(){return!!(Dr&&Dr.url&&Dr.anonKey)}function Lh(n){let e=String(n||"").trim();if(!ym.test(e))throw new Error("El usuario tiene que tener entre 3 y 20 caracteres: letras, n\xFAmeros, _ o -.");return e}function bm(n){return String(n||"").trim().toLowerCase()+"@"+xm}function kM(){let n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",e=new Uint8Array(12);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(e);else for(let i=0;i<12;i++)e[i]=Math.floor(Math.random()*256);let t="";for(let i of e)t+=n[i%n.length];return`${t.slice(0,4)}-${t.slice(4,8)}-${t.slice(8,12)}`}function Mm(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9]/g,"")}var FM=100;function pt(n,e=0){let t=Number(n);return Number.isFinite(t)?t:e}function Ih(n){if(!n||typeof n!="object")return!0;let e=Array.isArray(n.dogs)?n.dogs:[],t=n.quest||{},i=n.story||{},s=Array.isArray(n.memorials)?n.memorials:[],r=pt(n.dogCoins!=null?n.dogCoins:n.latas),o=pt(n.pdogs!=null?n.pdogs:n.chapitas),a=n.economy||{},c=e.some(u=>u&&u.pregnant),l=!!(i.tag||i.notebook||i.tracked);return e.length<=1&&r<=FM&&o<=0&&pt(n.kills)===0&&pt(t.i)===0&&pt(t.prog)===0&&s.length===0&&!l&&!c&&pt(a.activityDogs)===0&&pt(a.combatDogs)===0}function Sm(n){if(!n)return 0;let e=Array.isArray(n.dogs)?n.dogs:[],t=n.quest||{},i=Array.isArray(n.memorials)?n.memorials:[],s=pt(n.dogCoins!=null?n.dogCoins:n.latas),r=pt(n.pdogs!=null?n.pdogs:n.chapitas);return pt(t.i)*1e3+pt(t.prog)*20+e.length*50+s+r*100+pt(n.kills)*10+i.length*30}function wm(n){let e=n||{},t=(Array.isArray(e.dogs)?e.dogs:[]).map(i=>({uid:i&&i.uid,name:i&&i.name,breed:i&&i.breed,sex:i&&i.sex,wins:i&&i.wins||0}));return JSON.stringify({dogCoins:pt(e.dogCoins!=null?e.dogCoins:e.latas),pdogs:pt(e.pdogs!=null?e.pdogs:e.chapitas),dogs:t,playerName:String(e.playerName||""),quest:{i:pt(e.quest&&e.quest.i),prog:pt(e.quest&&e.quest.prog)},kills:pt(e.kills),memorials:(e.memorials||[]).length,story:{tag:!!(e.story&&e.story.tag),notebook:!!(e.story&&e.story.notebook),tracked:!!(e.story&&e.story.tracked)},potionUses:pt(e.potionUses!=null?e.potionUses:e.potions)})}function BM(n,e){return wm(n)===wm(e)}function Ec(n){let e=pt(n,0);if(!e)return"sin fecha";try{return new Date(e).toLocaleString("es-AR",{timeZone:"America/Buenos_Aires",dateStyle:"short",timeStyle:"short"})+" (America/Buenos_Aires)"}catch{return new Date(e).toISOString()}}function Ds(n,{savedAt:e,revision:t,source:i}={}){let s=n||{},r=Array.isArray(s.dogs)?s.dogs:[],o=s.quest||{},a=e??(s.updatedAt||null);return{playerName:s.playerName?String(s.playerName):"",dogCoins:pt(s.dogCoins!=null?s.dogCoins:s.latas),pdogs:pt(s.pdogs!=null?s.pdogs:s.chapitas),dogs:r.length,questI:pt(o.i),questProg:pt(o.prog),kills:pt(s.kills),revision:pt(t??(s.revision||s.clientRev)),savedAt:a?pt(a):0,savedAtLabel:Ec(a),source:i||"",fresh:Ih(s)}}function Nh(n,e,t={}){if(!e)return{action:"upload-local",reason:"no hay partida en la nube",equivalent:!1};let i=BM(n,e),s=Ih(n),r=Ih(e),o=Ds(n,{savedAt:n&&n.updatedAt,revision:n&&(n.revision||n.clientRev),source:"local"}),a=Ds(e,{savedAt:t.remoteUpdatedAt!=null?t.remoteUpdatedAt:e&&(e.updatedAt||e.updatedMs),revision:t.remoteRevision!=null?t.remoteRevision:e&&(e.revision||e.clientRev),source:"remote"});if(i)return{action:"noop",reason:"son la misma partida",equivalent:!0,localFresh:s,remoteFresh:r,localSum:o,remoteSum:a};if(s)return{action:"apply-remote",reason:r?"este tel\xE9fono tiene una partida nueva; se deja la de la cuenta":"este tel\xE9fono tiene una partida nueva y la nube tiene progreso",auto:!0,prefer:"remote",equivalent:!1,localFresh:s,remoteFresh:r,localSum:o,remoteSum:a};let c=null,l=Sm(n),u=Sm(e);return u>l?c="remote":l>u&&(c="local"),{action:"ask",reason:"hay una partida en la nube y otra en este tel\xE9fono",auto:!1,prefer:c,equivalent:!1,localFresh:s,remoteFresh:r,localSum:o,remoteSum:a,localScore:l,remoteScore:u}}function Ur(n,e,t=typeof localStorage<"u"?localStorage:null){if(!t)return null;let i={at:Date.now(),reason:e||"conflicto",payload:n};try{let s=JSON.parse(t.getItem(Ch)||"[]"),r=Array.isArray(s)?s:[];r.unshift(i);let o=Date.now()-7*864e5,a=r.filter(c=>c&&c.at>=o).slice(0,8);return t.setItem(Ch,JSON.stringify(a)),i}catch{return null}}function Uh(n,e){let t=n&&(n.message||n.error_description||n.error||n.msg||n),i=String(t||""),s=i.toLowerCase();return/already registered|already been registered|user already/.test(s)?new Error("Ese usuario ya est\xE1 registrado."):/invalid login|invalid_grant|invalid credentials/.test(s)?new Error("Usuario o contrase\xF1a incorrectos."):/email not confirmed|not confirmed/.test(s)?new Error("La cuenta todav\xEDa no est\xE1 confirmada. Si us\xE1s un mail sint\xE9tico, hay que apagar \xABConfirm email\xBB en el proyecto."):/password/.test(s)&&/at least|least 6|weak|short|characters/.test(s)?new Error("La contrase\xF1a tiene que tener al menos 6 caracteres."):/network|failed to fetch|abort|timeout|load failed|networkerror/.test(s)?new Error("No hay conexi\xF3n. Pod\xE9s seguir jugando como invitado en este tel\xE9fono."):/duplicate|unique|already exists/.test(s)?new Error("Ese usuario ya est\xE1 registrado."):/recovery|codigo|código/.test(s)&&/invalid|incorrect|wrong|no coincide/.test(s)?new Error("El c\xF3digo de recuperaci\xF3n no coincide."):new Error(e||i||"No se pudo conectar con la nube.")}function zM(n,e){try{return n?JSON.parse(n):e}catch{return e}}function gn(n,e,t){let i=t??vm,s=typeof AbortController<"u"?new AbortController:null,r=null,o=Object.assign({},e||{});return s&&!o.signal&&(o.signal=s.signal),i>0&&(r=setTimeout(()=>{try{s&&s.abort()}catch{}},i)),Promise.resolve().then(()=>fetch(n,o)).catch(a=>{throw Uh(a,"No hay conexi\xF3n. Pod\xE9s seguir jugando como invitado en este tel\xE9fono.")}).finally(()=>{r&&clearTimeout(r)})}function _n(n,e,t){let i={apikey:n,Authorization:"Bearer "+(e||n),"Content-Type":"application/json"};return t&&Object.keys(t).forEach(s=>{i[s]=t[s]}),i}async function Sn(n){let e=await n.text(),t=zM(e,e);if(!n.ok){let i=t&&typeof t=="object"?t:{message:String(e||n.status)};throw i.status=n.status,Uh(i)}return t}function wc(n){try{return JSON.parse(n.getItem(Sc)||"null")}catch{return null}}function Em(n,e){return e?n.setItem(Sc,JSON.stringify(e)):n.removeItem(Sc),e}function HM(n){if(!n)return{state:null,updatedMs:0,revision:0};let e=n.data||n.payload||(n.dogCoins!=null||n.dogs?n:null),t=n.updatedMs||(n.updated_at?Date.parse(n.updated_at):0)||e&&e.updatedAt||0,i=n.revision||n.clientRev||e&&(e.revision||e.clientRev)||0;return e&&typeof e=="object"&&(t&&(e.updatedAt=e.updatedAt||t),i&&(e.revision=e.revision||i,e.clientRev=e.clientRev||i)),{state:e,updatedMs:t,revision:i}}function Tm(n){return!!(n&&n.name==="mock")}async function Oh(n,e,t,i={}){let s=e||{},{state:r,updatedMs:o,revision:a}=HM(t),c=i.userId||n.getSession&&n.getSession()&&n.getSession().user_id||t&&t.user_id,l=Nh(s,r,{remoteUpdatedAt:o,remoteRevision:a}),u=async f=>{if(!(!n||!n.saveNow))return Tm(n)?n.saveNow(c,f):n.saveNow(f)},h=async(f,g)=>{if(!(!n||!n.backupSave))try{return Tm(n)?await n.backupSave(c,f,g):await n.backupSave(f,g)}catch{return!1}};if(l.action==="upload-local")return await u(s),{applied:"local",plan:l,backedUp:!1};if(l.action==="noop")return{applied:"none",plan:l,backedUp:!1};if(l.action==="apply-remote")return Ur(s,l.reason,i.store),i.applyRemote&&await i.applyRemote(r,l),{applied:"remote",plan:l,backedUp:!0};Ur(s,l.reason,i.store),await h(r,l.reason);let d=i.ask?await i.ask(l,{local:s,remote:r,updatedMs:o,revision:a}):l.prefer||"remote";return d==="local"?(Ur(r,"elegiste este tel\xE9fono",i.store),await h(r,"elegiste este tel\xE9fono"),await u(s),i.applyLocal&&await i.applyLocal(s,l),{applied:"local",plan:l,backedUp:!0,choice:d}):(Ur(s,"elegiste la nube",i.store),i.applyRemote&&await i.applyRemote(r,l),{applied:"remote",plan:l,backedUp:!0,choice:d})}function VM({url:n,anonKey:e,store:t}={}){let i=n||Dr.url,s=e||Dr.anonKey,r=t||(typeof localStorage<"u"?localStorage:{_d:{},getItem(c){return this._d[c]||null},setItem(c,l){this._d[c]=String(l)},removeItem(c){delete this._d[c]}}),o={pending:null,timer:null,inflight:null};return{name:"supabase",enabled:!!(i&&s),url:i,debounceMs:Ph,getSession(){return wc(r)},async usernameTaken(c){let l=await gn(i+"/rest/v1/rpc/username_taken",{method:"POST",headers:_n(s,null),body:JSON.stringify({p_username:String(c||"")})});return!!await Sn(l)},async displayNameTaken(c){let l=await gn(i+"/rest/v1/rpc/display_name_taken",{method:"POST",headers:_n(s,null),body:JSON.stringify({p_name:String(c||"")})});return!!await Sn(l)},async signUp(c,l,{recoveryCode:u,adultOk:h,displayName:d}={}){if(!h)throw new Error("La cuenta la tiene que crear un adulto o alguien con un adulto.");let f=Lh(c),g=String(l||"");if(g.length<6)throw new Error("La contrase\xF1a tiene que tener al menos 6 caracteres.");let _=!1;try{_=await this.usernameTaken(f)}catch{_=!1}if(_)throw new Error("Ese usuario ya est\xE1 registrado.");let m=d||f,p=!1;try{p=await this.displayNameTaken(m)}catch{p=!1}if(p)throw new Error("Ese nombre ya est\xE1 usado.");let y=u||kM(),x=await gn(i+"/auth/v1/signup",{method:"POST",headers:_n(s,null),body:JSON.stringify({email:bm(f),password:g,data:{username:f}})}),M=await Sn(x);(!M||!M.access_token)&&(M=await this._passwordGrant(f,g));let R=this._storeAuth(M,f);d&&(R.display_name=d);try{await this._upsertProfile(R,f),await this._setRecovery(R,y)}catch(A){throw Uh(A,"No se pudo terminar de crear la cuenta.")}return{session:R,recoveryCode:y}},async signIn(c,l){let u=Lh(c),h=await this._passwordGrant(u,String(l||""));return this._storeAuth(h,u)},async _passwordGrant(c,l){let u=await gn(i+"/auth/v1/token?grant_type=password",{method:"POST",headers:_n(s,null),body:JSON.stringify({email:bm(c),password:String(l||"")})});return Sn(u)},_storeAuth(c,l){if(!c||!c.access_token||!c.user||!c.user.id)throw new Error("No se pudo iniciar sesi\xF3n.");let u=c.user.user_metadata||{},h={access_token:c.access_token,refresh_token:c.refresh_token,expires_at:c.expires_at||Math.floor(Date.now()/1e3)+(c.expires_in||3600),user_id:c.user.id,username:u.username||l||"",email:c.user.email};return Em(r,h),h},async _upsertProfile(c,l){let u=await gn(i+"/rest/v1/profiles?on_conflict=id",{method:"POST",headers:_n(s,c.access_token,{Prefer:"resolution=merge-duplicates,return=minimal"}),body:JSON.stringify({id:c.user_id,username:l,display_name:c.display_name||l,updated_at:new Date().toISOString()})});await Sn(u)},async _setRecovery(c,l){let u=await gn(i+"/rest/v1/rpc/set_recovery_code",{method:"POST",headers:_n(s,c.access_token),body:JSON.stringify({p_code:Mm(l)})});await Sn(u)},async signOut(){let c=wc(r);if(Em(r,null),o.pending=null,o.timer&&(clearTimeout(o.timer),o.timer=null),c&&c.access_token)try{await gn(i+"/auth/v1/logout",{method:"POST",headers:_n(s,c.access_token)},4e3)}catch{}},async restoreSession(){let c=wc(r);if(!c||!c.refresh_token)return null;let l=(c.expires_at||0)*1e3;if(l&&Date.now()<l-3e4&&c.access_token)return c;try{let u=await gn(i+"/auth/v1/token?grant_type=refresh_token",{method:"POST",headers:_n(s,null),body:JSON.stringify({refresh_token:c.refresh_token})}),h=await Sn(u);return this._storeAuth(h,c.username)}catch{return l&&Date.now()<l&&c.access_token?c:null}},async ensureFresh(){let c=await this.restoreSession();if(!c||!c.access_token)throw new Error("No hay sesi\xF3n en la nube.");return c},async loadSave(c){let l=await this.ensureFresh(),u=c||l.user_id,h=await gn(i+"/rest/v1/saves?select=payload,updated_at,last_tick,revision,schema_version&user_id=eq."+encodeURIComponent(u),{method:"GET",headers:_n(s,l.access_token)}),d=await Sn(h);if(!d||!d.length)return null;let f=d[0];return{data:f.payload||null,payload:f.payload||null,updated_at:f.updated_at||null,updatedMs:f.updated_at?Date.parse(f.updated_at):0,lastTick:f.last_tick,clientRev:f.revision,revision:f.revision,schema_version:f.schema_version}},async saveNow(c){let l=await this.ensureFresh(),u=new Date().toISOString(),h={user_id:l.user_id,payload:c||{},updated_at:u,last_tick:c&&c.lastTick||Date.now(),revision:c&&(c.revision||c.clientRev)||0,schema_version:c&&(c.schemaVersion||c.v)||3},d=await gn(i+"/rest/v1/saves?on_conflict=user_id",{method:"POST",headers:_n(s,l.access_token,{Prefer:"resolution=merge-duplicates,return=minimal"}),body:JSON.stringify(h),keepalive:!0});await Sn(d);try{let f=await gn(i+"/rest/v1/wallets?on_conflict=user_id",{method:"POST",headers:_n(s,l.access_token,{Prefer:"resolution=merge-duplicates,return=minimal"}),body:JSON.stringify({user_id:l.user_id,dog_coins:Math.max(0,Math.floor(Number(c&&c.dogCoins||0))),pdogs:Math.max(0,Math.floor(Number(c&&c.pdogs||0))),revision:c&&(c.revision||c.clientRev)||0,updated_at:u}),keepalive:!0});await Sn(f)}catch{}return!0},async backupSave(c,l){let u=await this.ensureFresh(),h=await gn(i+"/rest/v1/save_backups",{method:"POST",headers:_n(s,u.access_token,{Prefer:"return=representation"}),body:JSON.stringify({user_id:u.user_id,payload:c||{},reason:l||"conflicto"})});return await Sn(h),!0},async listBackups(){let c=await this.ensureFresh(),l=await gn(i+"/rest/v1/save_backups?select=id,payload,reason,created_at&order=created_at.desc",{method:"GET",headers:_n(s,c.access_token)}),u=await Sn(l);return(Array.isArray(u)?u:[]).map(d=>({id:d.id,reason:d.reason,created_at:d.created_at,createdMs:d.created_at?Date.parse(d.created_at):0,payload:d.payload,summary:Ds(d.payload,{savedAt:d.created_at?Date.parse(d.created_at):0})}))},scheduleSave(c){try{o.pending={state:typeof c=="object"?JSON.parse(JSON.stringify(c)):{}}}catch{o.pending={state:c||{}}}o.timer||(o.timer=setTimeout(()=>{o.timer=null,this.flushSave().catch(()=>{})},Ph))},flushSave(){o.timer&&(clearTimeout(o.timer),o.timer=null);let c=o.pending;if(o.pending=null,!c||!wc(r))return Promise.resolve(!1);let l=()=>this.saveNow(c.state).catch(u=>(console.warn("No se pudo guardar en la nube",u),!1));return o.inflight?o.inflight=o.inflight.then(l,l):o.inflight=l(),o.inflight},async recover(c,l,u){let h=Lh(c);if(String(u||"").length<6)throw new Error("La contrase\xF1a tiene que tener al menos 6 caracteres.");let d=await gn(i+"/rest/v1/rpc/recover_account",{method:"POST",headers:_n(s,null),body:JSON.stringify({p_username:h,p_code:Mm(l),p_new_password:String(u)})});if(await Sn(d)===!1)throw new Error("El c\xF3digo de recuperaci\xF3n no coincide.");return!0}}}var Nr=null;function ei(){return Nr||(Dh()?(Nr=VM(),Nr):(Nr={name:"off",enabled:!1,getSession(){return null},scheduleSave(){},flushSave(){return Promise.resolve(!1)}},Nr))}function Or(n){return n?{dogCoins:Math.max(0,Math.floor(Number(n.dogCoins)||0)),pdogs:Math.max(0,Math.floor(Number(n.pdogs)||0))}:{dogCoins:0,pdogs:0}}function kh(n,{dogCoins:e=0,pdogs:t=0}={}){let i=Or(n);return i.dogCoins>=e&&i.pdogs>=t}function Ri(n,{dogCoins:e=0,pdogs:t=0,reason:i="credit"}={}){if(!n)return{ok:!1,reason:"sin estado"};let s=Math.max(0,Math.floor(Number(e)||0)),r=Math.max(0,Math.floor(Number(t)||0));return n.dogCoins=Or(n).dogCoins+s,n.pdogs=Or(n).pdogs+r,n.walletLog=(n.walletLog||[]).slice(-40),n.walletLog.push({t:Date.now(),op:"credit",dogCoins:s,pdogs:r,reason:i}),{ok:!0,...Or(n)}}function Ci(n,{dogCoins:e=0,pdogs:t=0,reason:i="debit",use:s=null}={}){if(!n)return{ok:!1,reason:"sin estado"};let r=Math.max(0,Math.floor(Number(e)||0)),o=Math.max(0,Math.floor(Number(t)||0));if(o&&s&&!rm(s))return{ok:!1,reason:"las PDogs no sirven para esto"};let a=Or(n);return a.dogCoins<r||a.pdogs<o?{ok:!1,reason:"no te alcanzan las monedas"}:(n.dogCoins=a.dogCoins-r,n.pdogs=a.pdogs-o,n.walletLog=(n.walletLog||[]).slice(-40),n.walletLog.push({t:Date.now(),op:"debit",dogCoins:r,pdogs:o,reason:i,use:s}),{ok:!0,...Or(n)})}var GM=["Toby","Luna","Rocco","Negra","Chispa","Pancho","Lola","Firulais","Kira","Bruno","Mora","Coco","Rayo","Nala","Tango","Sol","Pampa","Nina","Roco","Canela"],WM=["Sol","Nico","Luna","Paz","Ariel","Ciro","Vera","Mar","Azul","Leo","Quinn","Nahi","Tomi","Valen","Ari"],kr=null;function Tc(n){return kr=Array.isArray(n)?n.map(e=>Fh(e)).filter(Boolean):[],kr}async function Am(){if(kr)return kr;if(typeof window<"u"&&window.__DZ_BANNED&&Array.isArray(window.__DZ_BANNED.words||window.__DZ_BANNED)){let n=window.__DZ_BANNED.words||window.__DZ_BANNED;return Tc(n)}try{if(typeof process<"u"&&process.versions&&process.versions.node){let{readFileSync:n}=await import("fs"),{join:e,dirname:t}=await import("path"),{fileURLToPath:i}=await import("url"),s=e(t(i(import.meta.url)),"../data/banned_names.json");return Tc(JSON.parse(n(s,"utf8")).words)}}catch{}try{let e=await(await fetch("data/banned_names.json")).json();return Tc(e.words||[])}catch{return Tc([])}}function Fh(n){let e=String(n||"").toLowerCase().normalize("NFD").replace(/\p{M}/gu,""),t={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t","@":"a",$:"s","!":"i"};return e=e.replace(/[013457@$!]/g,i=>t[i]||i),e=e.replace(/[^a-z]/g,""),e}function qM(n){return String(n||"").trim().split(/[\s._\-]+/).filter(Boolean)}function XM(n){if(!kr)return!1;let e=Fh(n),t=e.replace(/\d+$/,""),i=new Set(kr);if(i.has(e)||t&&i.has(t))return!0;for(let s of qM(n)){let r=Fh(s),o=r.replace(/\d+$/,"");if(i.has(r)||o&&i.has(o))return!0}return!1}function ti(n){if(n==null)return{ok:!1,reason:"Escrib\xED un nombre."};let e=String(n).trim();return e.length<1?{ok:!1,reason:"El nombre no puede quedar vac\xEDo."}:e.length>16?{ok:!1,reason:"El nombre puede tener hasta 16 caracteres."}:XM(e)?{ok:!1,reason:"Ese nombre no se puede usar. Prob\xE1 con otro."}:{ok:!0,name:e}}function Rm(n,e=[],t=Math.random){let i=new Set((e||[]).map(r=>String(r||"").trim().toLowerCase())),s=(n||[]).filter(r=>{let o=ti(r);return o.ok&&!i.has(o.name.toLowerCase())});if(s.length)return s[t()*s.length|0];for(let r=2;r<100;r++){let c=`${(n&&n[0]||"Nube").slice(0,Math.max(1,16-String(r).length))}${r}`,l=ti(c);if(l.ok&&!i.has(l.name.toLowerCase()))return l.name}return"Nube"}function Ns(n,e){return Rm(GM,n,e)}function Do(n,e){return Rm(WM,n,e)}function No(n,e=[]){let t=new Set((e||[]).map(s=>String(s||"").trim().toLowerCase())),i=String(n||"").trim()||"Sol";if(!t.has(i.toLowerCase())&&ti(i).ok)return i;for(let s=2;s<100;s++){let r=String(s),a=`${i.slice(0,Math.max(1,16-r.length))}${r}`,c=ti(a);if(c.ok&&!t.has(c.name.toLowerCase()))return c.name}return"Sol2"}function Ac(n){let e=String(n||"").normalize("NFD").replace(/\p{M}/gu,"");return e=e.replace(/\s+/g,"_").replace(/[^A-Za-z0-9_-]/g,""),e.length>20&&(e=e.slice(0,20)),e.length<3&&(e=(e+"_ok").slice(0,20)),e||(e="criador"),e}function Bh(n,e={}){return String(n??"").replace(/\{(perro|dog|criador|player|nombre)\}/gi,(t,i)=>{let s=String(i).toLowerCase();return s==="perro"||s==="dog"?e.dog||e.perro||"":e.player||e.criador||e.nombre||""})}function Rc(n){if(!n)return!0;let e=n.playerName;return e==null||String(e).trim()===""}var Fo="0.3",zm=3,re=n=>document.querySelector(n),me=()=>Date.now(),as=(n,e,t)=>Math.max(e,Math.min(t,n)),qh=new URLSearchParams(location.search),Ln=!1,At={hungerPerSec:100/(6*3600),feedCost:et.feedAdult,feedAmount:45,playerWalk:3.2,playerRun:5.4,kennelStart:3,kennelMax:5,kennelUpgrade:et.kennelUpgrade,potionCost:et.potionCost,potionHeal:.5,vetCost:et.vetCost,monsterCount:5,monsterHp:28,monsterDmg:3,monsterRespawn:25,monsterReward:et.monsterReward,sellFactor:.5},Lc=[{id:"basural",nombre:"Basural de la ruta",dur:45,base:5,stat:"olfato",hunger:8,desc:"Buscar restos en la chatarra. Corta, con premio chico y techo diario."},{id:"galpon",nombre:"Galp\xF3n abandonado",dur:90,base:8,stat:"olfato",hunger:14,desc:"Rastrear en el galp\xF3n. Rinde m\xE1s con buen olfato."},{id:"patrulla",nombre:"Patrulla del alambrado",dur:120,base:13,stat:"resistencia",hunger:20,desc:"Recorrer el cerco. Rinde m\xE1s con resistencia."}],$M=[{id:"cachorro",nombre:"Cachorro",until:1.5,scale:.62,mult:.4},{id:"joven",nombre:"Joven",until:4.5,scale:.82,mult:.75},{id:"adulto",nombre:"Adulto",until:13,scale:1,mult:1},{id:"veterano",nombre:"Veterano",until:17,scale:.96,mult:.8},{id:"retirado",nombre:"Retirado",until:1/0,scale:.94,mult:0}],In=[{id:"feed",title:n=>`Dale de comer a ${n}`,goal:1,ev:"feed",reward:10,npc:"capitan"},{id:"talk",title:()=>"Habl\xE1 con el Capit\xE1n Iriarte",goal:1,ev:"talk",reward:0,npc:"capitan"},{id:"mission",title:n=>`Mand\xE1 a ${n} de misi\xF3n`,goal:1,ev:"mission_done",reward:15,npc:"capitan"},{id:"kill",title:()=>"Derrot\xE1 infectados",goal:3,ev:"kill",reward:60,npc:"capitan"},{id:"buy",title:()=>"Compr\xE1 otro perro",goal:1,ev:"buy",reward:20,npc:"rosa"},{id:"pair",title:()=>"Una pareja para el criadero",goal:1,ev:"pair",reward:25,npc:"capitan"},{id:"nest",title:()=>"El nido en espera",goal:1,ev:"litter",reward:40,npc:"capitan"},{id:"tag",title:()=>"La chapita en el barro",goal:1,ev:"tag_found",reward:60,npc:"capitan"},{id:"nose",title:()=>"Un hocico nuevo",goal:1,ev:"track_shed",reward:80,npc:"capitan"},{id:"notebook",title:()=>"El cuaderno del galp\xF3n",goal:1,ev:"notebook",reward:100,npc:"capitan"},{id:"clean",title:()=>"Limpi\xE1 la zona infectada",goal:6,ev:"kill",reward:10,npc:"capitan",daily:!0}],Cm=["Toby","Luna","Rocco","Negra","Chispa","Pancho","Lola","Firulais","Kira","Bruno","Mora","Coco","Rayo","Nala","Tango"],id={mestizo:11565642,dogo_argentino:15921128,pastor_aleman:9067050,rottweiler:3024418,dobermann:3023390,teckel:10111522,boxer:12614202,gran_danes:6974066,weimaraner:10132128,dogo_burdeos:11558954,caniche:15788252,briard:6969928,bulldog_frances:14205088,labrador:14725216,golden:14196816,beagle:12618314,border_collie:3026478,greyhound:10127994,jack_russell:15788256,bloodhound:9062954,malinois:11565626,cane_corso:3815998,galgo_espanol:12622442,chihuahua:14198904,akita:14191178,shiba:13662266,husky:9079446,borzoi:15788252,caucasico:10123866,cimarron:11565626,fila:11564090,amstaff:8022626},Pt={};async function YM(){let n=window.__DZ_BREEDS;if(!n)try{n=await(await fetch("data/breeds.json")).json()}catch{n={razas:[]}}for(let e of n.razas){let t=ZM(e.real.alzada_cm_macho),i=t?as(.5+t/100,.66,1.42):.66;Pt[e.id]={id:e.id,nombre:e.nombre,pais:e.pais_origen,nivel:e.juego.nivel,stats:e.juego.stats,precio:e.juego.precio_latas_estimado,oficios:e.juego.oficios,scale:i,real:e.real,fuentes:e.fuentes}}Pt.mestizo={id:"mestizo",nombre:"Mestizo",pais:"Del asentamiento",nivel:"d\xE9bil",stats:{fuerza:4,velocidad:5,resistencia:5,olfato:5,lealtad:6},precio:40,oficios:["de todo un poco"],scale:1,real:null,fuentes:[]}}function ZM(n){if(!n)return null;let e=String(n).replace(/,/g,".").replace(/[≈≥>]/g,"").split(/[–-]/).map(Number).filter(t=>!isNaN(t));return e.length?e.reduce((t,i)=>t+i,0)/e.length:null}var sd=864e5;function Hm(n,e,t,i){let s={color:id[n]??11565642,spots:Math.random()<.35?"light":"none",spotsColor:3811874},r=i==="M"||i==="H"?i:Math.random()<.5?"M":"H";return{uid:Math.random().toString(36).slice(2,9),name:t||Cm[Math.random()*Cm.length|0],breed:n,sex:r,born:me()-e*sd,hunger:70,hp:null,mission:null,activity:null,wins:0,coat:s,parentUids:[],breedCount:0}}function Xh(){let n=Hm("mestizo",5,"Toby");return n.hunger=52,n.sex="M",{v:3,schemaVersion:zm,dogCoins:100,pdogs:0,potionUses:3,potions:3,kennelCap:At.kennelStart,dogs:[n],active:n.uid,player:{x:ve.spawn.x,z:ve.spawn.z,hp:100},quest:{i:0,prog:0},tut:0,kills:0,firstMission:!0,memorials:[],story:{tag:!1,notebook:!1,tracked:!1},economy:{day:"",missions:0,missionById:{},combatDogs:0,cleanDone:!1,activityDogs:0,activityDay:{},activityById:{}},settings:{sound:!0,quality:"auto",pixel:!1,invertY:!1,playPortrait:!1,trialTimers:!1},lastTick:me(),created:me(),updatedAt:me(),clientRev:0,revision:0,playerName:""}}var C;function jM(){try{let e=localStorage.getItem(Ir),{state:t}=fc(e,Xh());return Ro(t),t.settings&&t.settings.playPortrait&&(Ln=!0),t}catch{}let n=Xh();return Ro(n),n}var zh=0;function Je(){let n=me();Qu(C.lastTick,n).rewind||(C.lastTick=n),C.updatedAt=n,C.schemaVersion=zm,C.revision=(Number(C.revision||C.clientRev)||0)+1,C.clientRev=C.revision,C.economy=Qn(C.economy||{},n);try{localStorage.setItem(Ir,is(C))}catch{}let t=ei();if(t&&t.enabled&&t.getSession&&t.getSession()&&t.scheduleSave)try{t.scheduleSave(JSON.parse(is(C)))}catch{}}function us(){return!!(C&&C.settings&&C.settings.trialTimers)}function zo(){return om(us())}function rd(n){return!!(n&&n.sex==="H"&&n.restUntil&&me()<n.restUntil)}function Gs(n,e){return n?n.pregnant&&["zona","mision","combate","carrera"].includes(e)?`${n.name} est\xE1 en el nido`:rd(n)&&["zona","mision","combate","carrera"].includes(e)?`${n.name} est\xE1 en descanso despu\xE9s del parto`:uh(n,e,me())?mh(n.name):"":""}function KM(n){if(!n||!n.pregnant)return"";let e=n.pregnant.start||n.pregnant.due-zo().gestMs,t=Math.max(1,n.pregnant.due-e),i=Math.max(0,n.pregnant.due-me());return`<div class="gest"><div class="gest-bar"><i style="width:${Math.max(0,Math.min(100,100*(1-i/t)))}%"></i></div><span>Nace en ${cs(i)}</span></div>`}function JM(n){let e=tn(n,me());if(!e)return"";let t=Hn(e.id),i=e.id==="rabia"?' <span class="ail-cloud" title="nubecita gris">\u2601</span>':"";return`<span class="chip ail">${t&&t.nombre||e.id}${i}</span>`}function QM(n,e){!e||!e.actor||!e.actor.setCareState||e.actor.setCareState({sick:!!tn(n,me()),pregnant:!!n.pregnant,resting:rd(n)})}function Vm(n){return typeof window<"u"&&window.__DZ_ITEMS&&window.__DZ_ITEMS[n]?"data:image/png;base64,"+window.__DZ_ITEMS[n]:"assets/items/generic-items/"+n}function Pm(){return C&&C.playerName?String(C.playerName):"criador"}function Lm(n){return n&&n.name?String(n.name):"tu perro"}function Fs(n){return Bh(n,{dog:Lm(Nt()),player:Pm(),criador:Pm(),perro:Lm(Nt())})}function Ho(n){return(C.dogs||[]).filter(e=>e.uid!==n).map(e=>e.name).filter(Boolean)}function od({title:n,suggested:e,onOk:t,note:i}){let s=e||Ns(Ho());_t(n||"Nombre",`
    <div class="say">${i||"Eleg\xED un nombre. Pod\xE9s usar el sugerido o escribir otro."}</div>
    <div class="menu-row"><span>Nombre</span><input id="nm-in" maxlength="16" value="${s.replace(/"/g,"&quot;")}"></div>
    <button class="pill" id="nm-rnd">Otro sugerido</button>
    <button class="pill alt" id="nm-ok">Listo</button>
    <p class="note" id="nm-err">De 1 a 16 caracteres, sin espacios al principio ni al final.</p>`,r=>{let o=r.querySelector("#nm-in"),a=r.querySelector("#nm-err");r.querySelector("#nm-rnd").onclick=()=>{o.value=Ns(Ho().concat([o.value]))},r.querySelector("#nm-ok").onclick=()=>{let c=ti(o.value);if(!c.ok){a.textContent=c.reason;return}t(c.name)}})}function kc(n,e){let t=ti(e);if(!t.ok)return t;n.name=t.name;let i=Ot.get(n.uid);return i&&i.actor&&(i.actor.name=t.name),Je(),t}function Vo({force:n=!1,suggested:e}={}){return new Promise(t=>{if(!n&&!Rc(C)){t(C.playerName);return}let i=e||C.playerName||Do([C.playerName].filter(Boolean));_t("Tu nombre",`
      <div class="say">\xBFC\xF3mo te llam\xE1s? Este es el nombre de tu criador. Si m\xE1s adelante cre\xE1s una cuenta, puede ser tu nombre p\xFAblico, as\xED que tiene que ser \xFAnico en ese caso.</div>
      <div class="menu-row"><span>Nombre</span><input id="pn-in" maxlength="16" value="${String(i).replace(/"/g,"&quot;")}"></div>
      <button class="pill" id="pn-rnd">Otro sugerido</button>
      <button class="pill alt" id="pn-ok">Listo</button>
      <p class="note" id="pn-err">De 1 a 16 caracteres, sin espacios al principio ni al final.</p>`,s=>{let r=s.querySelector("#pn-in"),o=s.querySelector("#pn-err");s.querySelector("#pn-rnd").onclick=()=>{r.value=Do([r.value])},s.querySelector("#pn-ok").onclick=async()=>{let a=ti(r.value);if(!a.ok){o.textContent=a.reason;return}let c=ei(),l=c.getSession&&c.getSession();if(l&&c.displayNameTaken)try{let u=await c.displayNameTaken(a.name),h=String(C.playerName||l.display_name||"").toLowerCase()===a.name.toLowerCase();if(u&&!h){let d=No(a.name);r.value=d,o.textContent="Ese nombre ya est\xE1 usado. Prob\xE1 con "+d+".";return}}catch{}C.playerName=a.name,Je(),rt(),t(a.name)}})})}function eS(n,{title:e,note:t}={}){return new Promise(i=>{let s=n.name||Ns(Ho(n.uid));od({title:e||"Pon\xE9le un nombre",suggested:s,note:t||"Naci\xF3 un cachorro. \xBFC\xF3mo se llama?",onOk:r=>{kc(n,r),n.pendingName=!1,Je(),rt(),i(r)}})})}async function $h(){let n=(C.dogs||[]).filter(e=>e.pendingName);for(let e of n)await eS(e,{note:`Naci\xF3 un cachorro (${Di(e)}). \xBFC\xF3mo se llama?`})}var rs=n=>C.dogs.find(e=>e.uid===n),Nt=()=>rs(C.active);function ut(n){let e=(me()-n.born)/sd;return $M.find(t=>e<t.until)}function ki(n){return hh(n.stats||Pt[n.breed]?.stats||Pt.mestizo.stats,n,me())}function Di(n){return n.breedLabel||Pt[n.breed]?.nombre||"Mestizo"}function Go(n){return n.coat||{color:id[n.breed]??11565642,spots:"none",spotsColor:3811874}}function tS(n){return nn&&nn[n]||nn&&nn.dog}function $r(n){let e=ki(n);return Math.round((40+e.fuerza*4+e.resistencia*3)*Math.max(.5,ut(n).mult))}var Gm=matchMedia("(pointer:coarse)").matches,Oo,Wn=new fo({antialias:!Gm,powerPreference:"high-performance"});Wn.outputColorSpace=at;re("#game").appendChild(Wn.domElement);var qt=new Ga;qt.background=new xe(2759188);qt.fog=new Va(2759188,26,44);var Vn=new Zi(-10,10,10,-10,.1,200),nS=new I(14,14,14),os=1,iS=new Qa(16769728,4862016,1.25);qt.add(iS);var Ii=new Rr(16763024,1.9);Ii.position.set(8,14,5);qt.add(Ii);qt.add(Ii.target);function Ic(){Oo=C.settings.quality==="auto"?Gm&&(navigator.hardwareConcurrency||4)<=4?"low":"high":C.settings.quality;let n=Math.min(window.devicePixelRatio||1,Oo==="low"?1:1.6);Wn.setPixelRatio(C.settings.pixel?Math.max(.34,n*.4):n),document.body.classList.toggle("pixel",!!C.settings.pixel),Wn.shadowMap.enabled=Oo!=="low",Wn.shadowMap.type=rc,Ii.castShadow=Oo!=="low",Ii.shadow.mapSize.set(1024,1024);let e=Ii.shadow.camera;e.left=-14,e.right=14,e.top=14,e.bottom=-14,e.near=1,e.far=50,e.updateProjectionMatrix(),Ii.shadow.bias=-.0015,qt.traverse(t=>{t.material&&(t.material.needsUpdate=!0)})}function Wo(){let n=window.visualViewport;return n&&n.width&&n.height?{x:n.offsetLeft,y:n.offsetTop,w:n.width,h:n.height}:{x:0,y:0,w:innerWidth,h:innerHeight}}function sS(){return matchMedia("(pointer:coarse)").matches||matchMedia("(max-width: 900px)").matches}function Uc(){return document.body.classList.contains("forced-landscape")}function Yh(){try{if(screen.orientation&&typeof screen.orientation.angle=="number")return screen.orientation.angle}catch{}return typeof window.orientation=="number"?window.orientation:0}var Zh=null,jh=null,ri=Ju({vw:1,vh:1,forced:!1,rot:0});function Vr(){let n=re("#stage");if(n&&n.clientWidth&&n.clientHeight)return{w:n.clientWidth,h:n.clientHeight};if(ri&&ri.gameW)return{w:ri.gameW,h:ri.gameH};let e=Wo();return Uc()?{w:e.h,h:e.w}:{w:e.w,h:e.h}}function Bs(n,e){return jp(n,e,ri)}function rS(n,e){return Kp(n,e,ri)}function oS(){let n=re("#stage");if(!n)return;let e=Wo(),t=e.h>e.w+20,i=t&&!Ln&&sS(),s=jh??Yh(),r=i?Zh??Yp(s):0;document.body.classList.toggle("forced-landscape",i),document.body.classList.toggle("forced-rot-90",i&&r===90),document.body.classList.toggle("forced-rot-neg90",i&&r===-90),document.body.classList.toggle("landscape-layout",!t||i),document.body.classList.toggle("play-portrait",!!(t&&Ln));let o=i?e.w:e.h;document.body.classList.toggle("short-hud",o<=480),ri=Ju({x:e.x,y:e.y,vw:e.w,vh:e.h,forced:i,rot:r});let a=Zp(ri);n.style.left=e.x+"px",n.style.top=e.y+"px",n.style.width=a.width+"px",n.style.height=a.height+"px",n.style.transformOrigin=a.origin||"",n.style.transform=a.transform}function Wt(){oS();let{w:n,h:e}=Vr();if(!n||!e)return;let t=n/e;Wn.setSize(n,e,!1);let i=t<1?8:7.4,s=i*t;Vn.left=-s*os,Vn.right=s*os,Vn.top=i*os,Vn.bottom=-i*os,Vn.updateProjectionMatrix(),Vs()}async function aS(n){let e=new uc,t=async g=>{if(window.__DZ_MODELS&&window.__DZ_MODELS[g]){let _=Uint8Array.from(atob(window.__DZ_MODELS[g]),m=>m.charCodeAt(0));return e.parseAsync(_.buffer,"")}return e.loadAsync(`assets/models/${g}.glb`)},i=async g=>{try{return await t(g)}catch(_){return console.warn("modelo no carg\xF3",g,_),null}},s=await t("dog");n(.35);let r=await t("wolf");n(.45);let o=await i("pastor");n(.55);let a=await i("husky");n(.65);let c=await i("pug");n(.72);let l=await i("wolf_q");n(.8);let u=await i("zombie_basic");n(.86);let h=await i("npc_matt");n(.9);let d=await i("npc_lis");n(.95);let f=await i("npc_shaun");return n(1),{dog:s,wolf:r,pastor:o,husky:a,pug:c,wolf_q:l,zombie_basic:u,npc_matt:h,npc_lis:d,npc_shaun:f}}var ls,nn,K,Hs=[],Ot=new Map,oi=[],Wm=re("#tags");function zr(n,{role:e="",hp:t=!1,enemy:i=!1,mark:s=""}={}){let r=document.createElement("div");return r.className="ntag"+(i?" enemy":""),r.innerHTML=`${s?`<div class="mark">${s}</div>`:""}${e?`<div class="role">${e}</div>`:""}<div class="n">${n}</div>${t?'<div class="hp"><i></i></div>':""}`,Wm.appendChild(r),r}function cS(){let n=To({shirt:4025162,pants:4866104,scarf:12597547,backpack:9067050,goggles:!0,hair:2759186,tool:!0});n.root.position.set(C.player.x,0,C.player.z),qt.add(n.root),K={actor:n,pos:n.root.position,yaw:0,vel:new I,hp:C.player.hp,maxHp:100,attackCd:0,run:!1,moved:0,hurtCd:0},K.tag=zr("Vos",{hp:!0})}function lS(){let n=nn.npc_matt?new Ps(nn.npc_matt,{targetHeight:1.72,name:"Capit\xE1n Iriarte"}):To({shirt:5925434,pants:3815984,scarf:9079402,hair:13684944,beard:14211288,skin:14196848,hat:"helmet",hatColor:4872762});n.root.position.copy(ve.questNpc),n.root.rotation.y=Math.PI*.25,qt.add(n.root);let e=nn.npc_lis?new Ps(nn.npc_lis,{targetHeight:1.62,name:"Do\xF1a Rosa"}):To({shirt:11558970,pants:5913130,scarf:15909198,hair:3807760,skin:12618330,apron:15259832,hat:"scarf",hatColor:12597547});e.root.position.copy(ve.shopNpc),e.root.rotation.y=Math.PI*.15,qt.add(e.root);let t=nn.npc_shaun?new Ps(nn.npc_shaun,{targetHeight:1.68,name:"Veterinario"}):To({shirt:14477038,pants:3816008,hair:4861984,skin:14724222,scarf:6987976,hat:"cap",hatColor:15922938});t.root.position.copy(ve.vet),t.root.rotation.y=-Math.PI*.3,qt.add(t.root),Hs=[{id:"capitan",name:"Capit\xE1n Iriarte",role:"Misiones",actor:n,pos:n.root.position,tag:zr("Capit\xE1n Iriarte",{role:"Misiones",hp:!0,mark:"!"})},{id:"rosa",name:"Do\xF1a Rosa",role:"Tienda",actor:e,pos:e.root.position,tag:zr("Do\xF1a Rosa",{role:"Tienda",hp:!0})},{id:"vet",name:"Don Eliseo",role:"Veterinario",actor:t,pos:t.root.position,tag:zr("Don Eliseo",{role:"Veterinario",hp:!0})}],ls.interact.push({id:"capitan",pos:ve.questNpc.clone(),r:2,label:"Hablar"})}function Ui(n){let e=Ot.get(n.uid),t=Pt[n.breed]||Pt.mestizo,i=ut(n);if(!e){let s=$p(n.breed),r=tS(s)||nn.dog,o=new wo(r,{color:Go(n).color,scale:t.scale*i.scale,name:n.name,coat:Go(n),targetHeight:1.05});o.legacy&&uS(o,n),qt.add(o.root),e={actor:o,pos:o.root.position,mode:"kennel",path:[],yaw:0,attackCd:0,target:null,bonus:1,speedNow:0,tag:zr(n.name,{hp:!0}),think:0,barkCd:0},e.tagName=e.tag.querySelector(".n"),e.tagHp=e.tag.querySelector(".hp i"),Ot.set(n.uid,e);let a=ve.pens[C.dogs.indexOf(n)%ve.pens.length];e.pos.set(a.x,0,a.z)}return e.actor.setScale(t.scale*i.scale),e}function uS(n,e){let t=new I(.54,.84,0).normalize(),i=new yt().setFromUnitVectors(new I(0,0,1),t);So(n,n.neck,new Ee(new Er(1,.22,5,12),new Zt({color:14039594,flatShading:!0})),[2.05,2.95,-.31],.62,i),So(n,n.neck,new Ee(new Fn(1,1,.3,6),new Zt({color:15909198,flatShading:!0})),[2.45,2.45,-.31],.2,new yt().setFromAxisAngle(new I(0,0,1),Math.PI/2-.6))}function hS(){for(let n=0;n<At.monsterCount;n++){let e=n>=3&&nn.zombie_basic,t=e?new Ps(nn.zombie_basic,{targetHeight:1.55,name:"Infectado"}):new dc(nn.wolf_q||nn.wolf,{scale:1.2,targetHeight:1.2});qt.add(t.root);let i={actor:t,pos:t.root.position,hp:At.monsterHp,maxHp:At.monsterHp,state:"wander",wander:new I,think:0,cd:0,respawnAt:0,stun:0,yaw:0,speedNow:0,kind:e?"zombie":"wolf",tag:zr(e?"Zombi":"Infectado",{hp:!0,enemy:!0})};i.tagHp=i.tag.querySelector(".hp i"),Xm(i),oi.push(i)}}function qm(n,e=3){let t,i;do t=-pe+2+Math.random()*18,i=-pe+2+Math.random()*18;while(t+i>Jn-e);return n.set(t,0,i)}function Xm(n){qm(n.pos,4),n.hp=n.maxHp,n.state="wander",n.actor.dying=0,n.actor.root.scale.setScalar(1),n.actor.lean&&(n.actor.lean.rotation.z=0),n.actor.root.position.y=0,n.actor.root.visible=!0,n.wander.copy(n.pos)}var jt={x:0,y:0,keys:new Set,joyActive:!1},Gn={active:!1,x:0,z:0},qn=new Ee(new Za(.22,.4,20),new wt({color:16765786,transparent:!0,opacity:.8,side:un,depthWrite:!1}));qn.rotation.x=-Math.PI/2;qn.position.y=.05;qn.visible=!1;qt.add(qn);function Bo(){Gn.active=!1,qn.visible=!1}{let n=re("#joy"),e=re("#joyknob"),t=null,i=null,s=0,r=0,o=50,a=(d,f)=>{let g=Bs(d,f),_=Jp({x:s,y:r},g,o);e.style.transform=`translate(${_.dx}px,${_.dy}px)`,jt.x=_.x,jt.y=_.y},c=(d,f)=>{let g=n.getBoundingClientRect(),_=Bs((g.left+g.right)/2,(g.top+g.bottom)/2);s=_.x,r=_.y,jt.joyActive=!0,Bo(),a(d,f),vt.unlock()},l=()=>{t=null,i=null,jt.joyActive=!1,jt.x=jt.y=0,e.style.transform=""};n.addEventListener("pointerdown",d=>{if(!(t!=null||i!=null)&&!(d.pointerType==="mouse"&&d.button!==0)){d.preventDefault(),t=d.pointerId;try{n.setPointerCapture(t)}catch{}c(d.clientX,d.clientY)}}),n.addEventListener("pointermove",d=>{d.pointerId===t&&(d.preventDefault(),a(d.clientX,d.clientY))});let u=d=>{d.pointerId===t&&(d.preventDefault(),l())};n.addEventListener("pointerup",u),n.addEventListener("pointercancel",u),n.addEventListener("lostpointercapture",d=>{d.pointerId===t&&l()}),n.addEventListener("touchstart",d=>{if(t!=null||i!=null)return;let f=d.changedTouches[0];f&&(d.preventDefault(),i=f.identifier,c(f.clientX,f.clientY))},{passive:!1}),n.addEventListener("touchmove",d=>{if(i==null)return;let f=[...d.changedTouches].find(g=>g.identifier===i);f&&(d.preventDefault(),a(f.clientX,f.clientY))},{passive:!1});let h=d=>{i!=null&&[...d.changedTouches].some(f=>f.identifier===i)&&(d.preventDefault(),l())};n.addEventListener("touchend",h,{passive:!1}),n.addEventListener("touchcancel",h,{passive:!1}),addEventListener("keydown",d=>{jt.keys.add(d.key.toLowerCase()),d.key===" "&&(dd(),d.preventDefault()),d.key.toLowerCase()==="e"&&hd(),d.key==="Shift"&&Kh(!0),vt.unlock()}),addEventListener("keyup",d=>{jt.keys.delete(d.key.toLowerCase()),d.key==="Shift"&&Kh(!1)}),addEventListener("wheel",d=>{os=as(os*(d.deltaY>0?1.08:.93),.65,1.5),Wt()},{passive:!0})}var Im=new Ce,dS=new On(new I(0,1,0),0),Hh=new I,Dm=new sc;function fS(n,e){let{w:t,h:i}=Vr();if(!t||!i)return null;let s=Bs(n,e);return Im.set(s.x/t*2-1,-(s.y/i)*2+1),Dm.setFromCamera(Im,Vn),Dm.ray.intersectPlane(dS,Hh)?{x:as(Hh.x,-pe+.6,pe-.6),z:as(Hh.z,-pe+.6,pe-.6)}:null}function $m(n){return!!(n&&n.closest&&n.closest("#joy, #actions, #sidebtns, #hud-tl, #hud-tr, #hud-br, #btn-bark, #portrait, #quest, #coins, #minimap, #modal, #tutcard, #loading, #rotate, button"))}function Ym(n,e){if(jt.joyActive||!re("#modal").classList.contains("hidden"))return!1;let t=fS(n,e);return t?(Gn.active=!0,Gn.x=t.x,Gn.z=t.z,qn.position.set(t.x,.05,t.z),qn.visible=!0,vt.unlock(),!0):!1}var ii=null,Os=null,Xo=Wn.domElement;Xo.addEventListener("pointerdown",n=>{$m(n.target)||n.pointerType==="mouse"&&n.button!==0||(ii={id:n.pointerId,x:n.clientX,y:n.clientY,t:me()})});Xo.addEventListener("pointerup",n=>{if(!ii||n.pointerId!==ii.id)return;let e=n.clientX-ii.x,t=n.clientY-ii.y,i=me()-ii.t;ii=null,!(Math.hypot(e,t)>22||i>550)&&Ym(n.clientX,n.clientY)});Xo.addEventListener("pointercancel",n=>{ii&&n.pointerId===ii.id&&(ii=null)});Xo.addEventListener("touchstart",n=>{if($m(n.target))return;let e=n.changedTouches[0];e&&(Os={id:e.identifier,x:e.clientX,y:e.clientY,t:me()})},{passive:!0});Xo.addEventListener("touchend",n=>{if(!Os)return;let e=[...n.changedTouches].find(r=>r.identifier===Os.id);if(!e)return;let t=e.clientX-Os.x,i=e.clientY-Os.y,s=me()-Os.t;Os=null,!(Math.hypot(t,i)>22||s>550)&&Ym(e.clientX,e.clientY)},{passive:!0});function Zm(){let n=!!(C&&C.settings&&C.settings.invertY);return Qp(jt.x,jt.y,jt.keys,n)}function pS(n){C.settings.invertY=!!n,Je()}function Kh(n){K.run=n??!K.run,re("#btn-run").textContent=K.run?"CORRER":"CAMINAR",re("#btn-run").classList.toggle("on",K.run)}var vt={ctx:null,unlock(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch{}},tone(n,e=.1,t="sine",i=.12,s){if(!C.settings.sound||!this.ctx)return;let r=this.ctx,o=r.createOscillator(),a=r.createGain();o.type=t,o.frequency.setValueAtTime(n,r.currentTime),s&&o.frequency.exponentialRampToValueAtTime(s,r.currentTime+e),a.gain.setValueAtTime(i,r.currentTime),a.gain.exponentialRampToValueAtTime(.001,r.currentTime+e),o.connect(a).connect(r.destination),o.start(),o.stop(r.currentTime+e)},coin(){this.tone(880,.08,"square",.06),setTimeout(()=>this.tone(1320,.12,"square",.06),70)},bark(){this.tone(520,.12,"sawtooth",.12,240),setTimeout(()=>this.tone(560,.1,"sawtooth",.1,260),160)},hit(){this.tone(160,.12,"square",.1,60)},ok(){this.tone(660,.1,"triangle",.1),setTimeout(()=>this.tone(990,.16,"triangle",.1),90)}},ad={dog:n=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><path d='M14 18 L8 40 L20 34Z M50 18 L56 40 L44 34Z' fill='${Vh(n,-40)}' stroke='#000' stroke-width='2'/><ellipse cx='32' cy='36' rx='18' ry='17' fill='${Vh(n,0)}' stroke='#000' stroke-width='2.5'/><ellipse cx='32' cy='45' rx='10' ry='7' fill='${Vh(n,35)}' stroke='#000' stroke-width='2'/><ellipse cx='32' cy='41' rx='4' ry='3' fill='#1a1a1a'/><circle cx='24' cy='32' r='3' fill='#1a1a1a'/><circle cx='40' cy='32' r='3' fill='#1a1a1a'/><circle cx='25' cy='31' r='1' fill='#fff'/><circle cx='41' cy='31' r='1' fill='#fff'/><path d='M28 49 Q32 52 36 49' stroke='#000' stroke-width='1.6' fill='none'/><rect x='20' y='52' width='24' height='5' rx='2' fill='#d63a2a' stroke='#000'/></svg>`)}`,capitan:`data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect x='14' y='18' width='36' height='34' rx='6' fill='#d8a070' stroke='#000' stroke-width='2.5'/><rect x='10' y='10' width='44' height='14' rx='4' fill='#4a5a3a' stroke='#000' stroke-width='2.5'/><rect x='16' y='38' width='32' height='16' rx='5' fill='#e0e0e0' stroke='#000' stroke-width='2'/><rect x='22' y='29' width='5' height='6' fill='#1a1a1a'/><rect x='37' y='29' width='5' height='6' fill='#1a1a1a'/></svg>")}`,rosa:`data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect x='14' y='18' width='36' height='34' rx='6' fill='#c08a5a' stroke='#000' stroke-width='2.5'/><path d='M10 24 Q32 2 54 24 L54 30 L10 30Z' fill='#c0392b' stroke='#000' stroke-width='2.5'/><rect x='22' y='33' width='5' height='6' fill='#1a1a1a'/><rect x='37' y='33' width='5' height='6' fill='#1a1a1a'/><path d='M26 45 Q32 49 38 45' stroke='#000' stroke-width='2' fill='none'/></svg>")}`};function Vh(n,e){let t;if(typeof n=="number")t=n;else if(typeof n=="string"&&n.startsWith("rgb")){let o=n.match(/\d+/g)||[0,0,0];t=(+o[0]<<16)+(+o[1]<<8)+ +o[2]}else t=parseInt(String(n).replace("#",""),16)||0;let i=as((t>>16&255)+e,0,255),s=as((t>>8&255)+e,0,255),r=as((t&255)+e,0,255);return`rgb(${i},${s},${r})`}var jm=n=>ad.dog(id[n.breed]??11565642),Jh="";function mS(){let n=Nt(),e=ki(n),t=ut(n),i=Math.round(n.hp??$r(n)),s=[C.latas,C.chapitas,C.potionUses,n.uid,i,Math.round(n.hunger),C.quest.i,C.quest.prog,t.id,n.mission?1:0,n.activity?1:0,n.pregnant?n.pregnant.due:0,n.ailment&&n.ailment.id].join("|"),r=re("#mission-timer"),o=C.dogs.filter(l=>l.mission||l.activity);if(r.textContent=o.length?cs(Math.max(0,Math.min(...o.map(l=>(l.mission||l.activity).end))-me())):"",s===Jh)return;Jh=s,re("#latas").textContent=C.latas,re("#chapitas").textContent=C.chapitas,re("#potions").textContent=C.potionUses!=null?C.potionUses:C.potions;let a=re("#gest-hud");a&&(n.pregnant?(a.classList.remove("hidden"),a.innerHTML="Nido: "+cs(Math.max(0,n.pregnant.due-me()))):a.classList.add("hidden")),re("#pdogname").textContent=n.name,re("#dogface").style.backgroundImage=`url("${jm(n)}")`,re("#st-fue").textContent=e.fuerza,re("#st-hp").textContent=i,re("#st-vel").textContent=e.velocidad,re("#st-olf").textContent=e.olfato,re("#hungerbar").style.width=`${n.hunger}%`,re("#hungertxt").textContent=`${Math.round(n.hunger)}%`,re(".meter.hunger").classList.toggle("low",n.hunger<25),re("#pstage").textContent=`${t.nombre} \xB7 ${Pt[n.breed]?.nombre||"Mestizo"}${n.mission?" \xB7 de misi\xF3n":""}`;let c=In[Math.min(C.quest.i,In.length-1)];re("#qtitle").textContent=c.title(n.name),re("#qprog").textContent=`${Math.min(C.quest.prog,c.goal)}/${c.goal}`,re("#quest .qface").style.backgroundImage=`url("${ad[c.npc]}")`}var cs=n=>{let e=Math.ceil(n/1e3);return e>=60?`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`:`${e}s`},Nm=0;function be(n,e=2200){let t=re("#toast");t.innerHTML=n,t.classList.add("show"),clearTimeout(Nm),Nm=setTimeout(()=>t.classList.remove("show"),e)}function Oi(n,e,t="#ffd35a"){let i=Gr(n);if(!i)return;let s=document.createElement("div");s.className="float",s.style.left=i.x+"px",s.style.top=i.y+"px",s.style.color=t,s.textContent=e,(Wm||re("#stage")||document.body).appendChild(s),setTimeout(()=>s.remove(),1e3)}var Us=new I;function Gr(n,e=0){if(Us.set(n.x,(n.y||0)+e,n.z).project(Vn),Us.x<-1.2||Us.x>1.2||Us.y<-1.2||Us.y>1.2)return null;let{w:t,h:i}=Vr();return{x:(Us.x*.5+.5)*t,y:(-Us.y*.5+.5)*i}}function Uo(n,e,t,i=!0,s=0){let r=i?Gr(e,t):null;if(!r){n.style.display!=="none"&&(n.style.display="none");return}n.style.display==="none"&&(n.style.display=""),n.style.transform=`translate3d(${r.x+s|0}px,${r.y|0}px,0) translate(-50%,-100%)`}var Km=0,Um=0;function _t(n,e,t){re("#mtitle").textContent=n,re("#mbody").innerHTML=e,re("#modal").classList.remove("hidden"),Km=me()+800;let i=re("#mbody");i.style.pointerEvents="none",clearTimeout(Um),Um=setTimeout(()=>{i.style.pointerEvents=""},800),t&&t(re("#mbody")),Xr("modal:"+n)}function rt(){re("#modal").classList.add("hidden")}re("#mclose").onclick=rt;re("#modal").addEventListener("pointerdown",n=>{n.target.id==="modal"&&me()>=Km&&rt()});function Jm(n){let e={fuerza:"Fuerza",velocidad:"Velocidad",resistencia:"Resistencia",olfato:"Olfato",lealtad:"Lealtad"};return`<div class="statgrid">${Object.keys(e).map(t=>`<span>${e[t]}</span><div class="sbar"><i style="width:${n[t]*10}%"></i></div><b>${n[t]}</b>`).join("")}</div>`}function zs(){let n=C.dogs.map(t=>{let i=Pt[t.breed]||Pt.mestizo,s=ut(t),r=((me()-t.born)/sd).toFixed(1),o=t.uid===C.active,a=t.mission,c=eh(t,s.id,!!t.pregnant),l=t.hunger>25?`\u2248${Math.round((t.hunger-25)/At.hungerPerSec/3600*10)/10} h para tener hambre`:"\xA1Tiene hambre!",u=t.pregnant?KM(t):rd(t)?`<div class="s">En descanso ${cs(Math.max(0,t.restUntil-me()))}</div>`:"",h=t.activity?`<span class="chip">actividad: ${cs(t.activity.end-me())}</span>`:"";return`<div class="card">${sh(t.breed,Di(t),"portrait av-photo")}<div class="info">
      <div class="t">${t.name} ${t.sex==="M"?"\u2642":"\u2640"} ${o?'<span class="chip">con vos</span>':""} ${JM(t)}</div>
      <div class="s">${Di(t)} \xB7 ${s.nombre} (${r} d\xEDas) \xB7 Hambre ${Math.round(t.hunger)}% \xB7 ${l}</div>
      ${u}
      ${Lo(t,me())?`<div class="s ail-txt">${Lo(t,me())}</div>`:""}
      <div class="chips"><span class="chip ${i.nivel||""}">${i.nivel||Di(t)}</span>${a?`<span class="chip">de misi\xF3n: ${cs(a.end-me())}</span>`:""}${h}${s.id==="retirado"?'<span class="chip">retirado</span>':""}</div>
      ${Jm(ki(t))}
      <div class="chips" style="margin-top:6px">
        ${!o&&!a?`<button class="pill alt" data-act="take" data-id="${t.uid}">Llevar conmigo</button>`:""}
        ${a?"":`<button class="pill" data-act="feed" data-id="${t.uid}">Dar de comer (${c})</button>`}
        ${!o&&!a&&C.dogs.length>1&&s.id!=="retirado"?`<button class="pill gray" data-act="sell" data-id="${t.uid}">Vender (${Qh(t)})</button>`:""}
        <button class="pill" data-act="lineage" data-id="${t.uid}">Linaje</button>
        <button class="pill" data-act="rename" data-id="${t.uid}">Cambiar nombre</button>
        ${s.id==="retirado"?`<button class="pill" data-act="farewell" data-id="${t.uid}">Despedida</button>`:""}
      </div></div></div>`}).join(""),e=C.kennelCap<At.kennelMax?At.kennelUpgrade[C.kennelCap-At.kennelStart]:null;_t("Bolso y criadero",`${n}
    <div class="menu-row"><span>Lugares en el criadero: <b>${C.dogs.length}/${C.kennelCap}</b></span>${e?`<button class="pill" data-act="upgrade">Ampliar (${e} Dogs)</button>`:'<span class="note">Al m\xE1ximo</span>'}</div>
    <div class="menu-row"><span>Cr\xEDa</span><button class="pill" data-act="breed">Cruzar</button></div>
    ${C.memorials&&C.memorials.length?`<p class="note">Recuerdos: ${C.memorials.map(t=>`${t.name} (${t.breedLabel||t.breed})`).join(", ")}.</p>`:""}
    <div class="menu-row"><span>Botiqu\xEDn: <b>${C.potionUses!=null?C.potionUses:C.potions}</b> usos</span><span class="note">Cura vida y heridas (3 usos por kit). No cura enfermedades.</span></div>
    <p class="note">La comida baja con el tiempo real, aunque cierres el juego. Los perros crecen: cachorro \u2192 joven \u2192 adulto \u2192 veterano. Valores de prueba, a ajustar.</p>`,t=>{t.querySelectorAll("[data-act]").forEach(i=>i.onclick=()=>{let s=rs(i.dataset.id),r=i.dataset.act;r==="take"&&(Qm(s.uid),rt()),r==="feed"&&(rt(),mg(s)),r==="sell"&&confirm(`\xBFVender a ${s.name} por ${Qh(s)} Dogs?`)&&(gS(s),zs()),r==="upgrade"&&(Ci(C,{dogCoins:e,reason:"kennel",use:"kennel"}).ok?(C.kennelCap++,vt.ok(),be("\xA1Criadero ampliado!"),Je(),zs()):be("No te alcanzan los Dogs")),r==="lineage"&&lg(s),r==="rename"&&od({title:"Cambiar nombre",suggested:s.name,note:"El cambio es gratis. El nombre tiene de 1 a 16 caracteres.",onOk:o=>{kc(s,o),rt(),be(`${o} qued\xF3 anotado.`),zs()}}),r==="farewell"&&ug(s),r==="breed"&&hg()})})}function Qh(n){let e=Pt[n.breed]||Pt.mestizo;return Math.max(et.sellMin,Math.round(Ai(e)*et.sellFactor*Math.max(.3,ut(n).mult)))}function gS(n){Ri(C,{dogCoins:Qh(n),reason:"sell-dog"});let e=Ot.get(n.uid);e&&(qt.remove(e.actor.root),e.tag.remove(),Ot.delete(n.uid)),C.dogs=C.dogs.filter(t=>t!==n),vt.coin(),Je()}function Qm(n){let e=Ot.get(C.active);e&&(e.mode="kennel"),C.active=n;let t=Ui(Nt());t.mode="follow",be(`${Nt().name} viene con vos`),Je()}function $o(){let n=Object.values(Pt).filter(t=>t.precio<=et.shopMaxBase&&t.id!=="mestizo").sort((t,i)=>Ai(t)-Ai(i)),e=C.dogs.length>=C.kennelCap;_t("Tienda de Do\xF1a Rosa",`<div class="say">${Fs("\xA1Hola, {criador}! Tengo perros humildes y baratos. Llegan j\xF3venes, as\xED ya pueden salir a misiones cortas. Eleg\xED macho o hembra: sale lo mismo.")}</div>
    ${n.map(t=>`<div class="card shop-dog">${sh(t.id,t.nombre,"portrait av-photo")}
      <div class="info">
      <div class="t">${t.nombre}</div><div class="s">${t.pais}${t.real?"":" (raza del juego)"} \xB7 ${t.oficios.join(", ")}</div>
      <div class="chips"><span class="chip ${t.nivel}">${t.nivel}</span><span class="chip">F ${t.stats.fuerza}</span><span class="chip">V ${t.stats.velocidad}</span><span class="chip">R ${t.stats.resistencia}</span><span class="chip">O ${t.stats.olfato}</span><span class="chip">L ${t.stats.lealtad}</span></div></div>
      <div class="price sex-buy"><b><span class="ic i-lata sm"></span> ${Ai(t)}</b>
        <button class="pill" data-buy="${t.id}" data-sex="M" ${e||C.latas<Ai(t)?"disabled":""}>Macho</button>
        <button class="pill" data-buy="${t.id}" data-sex="H" ${e||C.latas<Ai(t)?"disabled":""}>Hembra</button>
      </div></div>`).join("")}
    <div class="card"><img class="portrait av-photo" src="${Vm("genericItem_color_102.png")}" alt="Botiqu\xEDn" width="117" height="117">
      <div class="info"><div class="t">Botiqu\xEDn</div><div class="s">Caja naranja con cruz azul. 3 usos: solo vida y heridas, no enfermedades. ${At.potionCost} Dogs.</div></div>
      <div class="price"><b><span class="ic i-lata sm"></span> ${At.potionCost}</b><button class="pill" data-potion ${C.latas<At.potionCost?"disabled":""}>Comprar</button></div></div>
    <div class="card" style="opacity:.6"><span class="ic i-chapita lg"></span><div class="info"><div class="t">Cosm\xE9ticos con PDogs</div><div class="s">Solo cosm\xE9tica: nunca poder, ni acelerar cr\xEDa, ni comida. El nombre del perro se cambia gratis desde el Bolso. Nada se paga con plata real.</div></div></div>
    ${e?'<p class="note">El criadero est\xE1 lleno. Ampli\xE1lo desde el Bolso o vend\xE9 un perro.</p>':""}
    <p class="note">Precios en Dogs (ESTIMADO, propuesta de QA). Datos reales de cada raza (origen, tama\xF1o, vida) en data/breeds.json, con fuentes FCI y AKC. Los PDogs no compran perros ni mejoras.</p>`,t=>{t.querySelectorAll("[data-buy]").forEach(s=>s.onclick=()=>eg(s.dataset.buy,s.dataset.sex));let i=t.querySelector("[data-potion]");i&&(i.onclick=()=>{if(!Ci(C,{dogCoins:At.potionCost,reason:"buy-potion",use:"potion"}).ok){be("No te alcanzan los Dogs");return}C.potionUses=(C.potionUses||0)+(et.potionUsesPerKit||3),vt.coin(),Je(),$o()})}),Hs[1].actor.talk()}function eg(n,e){let t=Pt[n],i=Ai(t);if(!t||C.dogs.length>=C.kennelCap||!kh(C,{dogCoins:i})||!Ci(C,{dogCoins:i,reason:"buy-dog",use:"dog"}).ok)return;let s=e==="H"?"H":"M",r=Ns(Ho()),o=Hm(n,2,r,s);C.dogs.push(o),Ui(o),vt.ok(),ai("buy"),fd(),Je(),od({title:"Pon\xE9le un nombre",suggested:r,note:`Lleg\xF3 un ${t.nombre} ${s==="H"?"hembra":"macho"}. \xBFC\xF3mo se llama?`,onOk:a=>{kc(o,a),rt(),be(`\xA1${a} (${t.nombre}) lleg\xF3 al criadero!`,2600)}})}function tg(){let n=Nt(),e=ut(n);if(n.mission){_t("Misi\xF3n en curso",`<div class="say">${n.name} est\xE1 en "${Lc.find(i=>i.id===n.mission.id)?.nombre}". Vuelve en <b>${cs(n.mission.end-me())}</b> con unos <b>${n.mission.reward}</b> Dogs.</div><p class="note">Mientras tanto pod\xE9s llevar a otro perro del criadero (Bolso).</p>`);return}let t=e.mult>0&&e.id!=="cachorro";_t("Mandar de misi\xF3n",`<div class="say">Eleg\xED a d\xF3nde va <b>${n.name}</b>. Sale solo y vuelve con Dogs cuando termina el tiempo. Despu\xE9s de 4 misiones en el d\xEDa, el premio se reduce a la mitad.</div>
    ${Lc.map(i=>{let s=ng(n,i),r=ih(i,C.firstMission);return`<div class="card"><span class="ic i-map lg"></span><div class="info"><div class="t">${i.nombre}</div><div class="s">${i.desc}<br>Tiempo: ${cs(r*1e3)} \xB7 Hambre \u2212${i.hunger}%</div></div>
      <div class="price"><b><span class="ic i-lata sm"></span> +${s}</b><button class="pill alt" data-m="${i.id}" ${t?"":"disabled"}>Enviar</button></div></div>`}).join("")}
    ${t?"":`<p class="note">${n.name} es ${e.nombre.toLowerCase()}: todav\xEDa no puede salir.</p>`}
    <p class="note">Recompensa estimada = base \xD7 (1 + 0,05 \xD7 atributo) \xD7 edad \xD7 hambre (f\xF3rmula del white paper; n\xFAmeros de prueba).</p>`,i=>{i.querySelectorAll("[data-m]").forEach(s=>s.onclick=()=>{rt(),ig(n,Lc.find(r=>r.id===s.dataset.m))})})}function ng(n,e){let t=ki(n),i=sm(e),s=Math.round(i*(1+.05*t[e.stat])*Math.max(.4,ut(n).mult)*(n.hunger<25?.6:1)),o=(C.economy&&C.economy.missions||0)>=et.missionSoftAfter?et.missionSoftFactor:1;return Math.max(0,Math.round(s*o))}function ig(n,e){if(ut(n).id==="retirado"||ut(n).id==="cachorro"){be(`${n.name} no puede salir de misi\xF3n (${ut(n).nombre})`);return}let t=Gs(n,"mision");if(t){be(t);return}if(n.hunger<8){be(`${n.name} tiene mucha hambre. Primero dale de comer.`);return}if(fh(n,Math.random,me())){be(ph(n.name));return}let i=ih(e,C.firstMission);C.firstMission=!1,n.mission={id:e.id,start:me(),end:me()+i*1e3,reward:ng(n,e)},n.hunger=Math.max(0,n.hunger-e.hunger);let s=Ui(n);s.mode="mission_out",s.path=[ve.roadStart.clone(),ve.exitRoad.clone()],be(`\xA1${n.name} sali\xF3 de misi\xF3n!`),vt.bark(),s.actor.play("bark",.6),Je(),Xr("mission_sent")}function sg(n,e){let t=n.mission.id,i=n.mission.reward;C.economy=Qn(C.economy||{},me());let s=nh(C.economy,t,i);C.economy=s.eco;let r=s.paid;r&&Ri(C,{dogCoins:r,reason:"mission-"+t}),n.mission=null,n.wins=(n.wins||0)+1;let o=yh(n,{now:me(),trial:us(),dayKeyFn:Ao});if(o&&o.ok&&o.toast&&!e&&be(o.toast,3200),!e){let a=Ot.get(n.uid);Oi(a?a.pos:K.pos,`+${r} Dogs`,"#ffd35a"),be(`\xA1${n.name} volvi\xF3 con ${r} Dogs!`),vt.coin()}t==="galpon"&&In[C.quest.i]&&In[C.quest.i].id==="notebook"&&(_t("El cuaderno del galp\xF3n",`<div class="say">Bajo un mont\xF3n de latas vac\xEDas, ${n.name} encontr\xF3 un cuaderno mojado. Junto al Capit\xE1n se lee una sola frase, escrita torcida: \xAB\xBFPor qu\xE9 los perros no se enferman?\xBB</div>
      <p class="note">La pregunta queda abierta. Ma\xF1ana hay que dar de comer, y el cachorro sigue creciendo.</p>
      <button class="pill alt" id="nb-ok">Volver a la aldea</button>`,a=>a.querySelector("#nb-ok").onclick=rt),ai("notebook")),ai("mission_done"),Je()}function cd(){Hs[0].actor.talk(),In[C.quest.i].id==="talk"&&ai("talk");let t=In[C.quest.i],i={feed:Fs("Un perro con hambre no rinde, {criador}. Primero llen\xE1 su plato en el comedero, al lado del criadero."),talk:Fs("\xA1Bien, {criador}! Ac\xE1 en el asentamiento todos dependemos de los perros: son los \xFAnicos inmunes a la plaga."),mission:Fs("Mand\xE1 a {perro} al basural de la ruta. Vuelve con Dogs, y con eso compr\xE1s comida y m\xE1s perros."),kill:"Detr\xE1s del alambrado, al norte, est\xE1 la Zona Infectada. Los infectados no cruzan el cerco. Entr\xE1 con tu perro y derrot\xE1 3. Tu perro pelea solo; vos ayud\xE1s con \xA1Atacar!",buy:"Do\xF1a Rosa vende perros humildes. Un criadero con un solo perro es un criadero triste.",pair:"Un solo perro es poco. Si hay pareja, el criadero puede crecer. Fijate el sexo en el Bolso (\u2642 / \u2640) y, si falta uno, compralo en la tienda.",nest:"Si son de razas distintas, a veces el cachorro sale un poquito m\xE1s capaz. Registr\xE1 la cruza en el criadero, pag\xE1 la tasa en Dogs (nunca en PDogs) y cuid\xE1 a la madre.",tag:"Anoche se oy\xF3 un ladrido raro, cerca del cerco. No parec\xEDa lobo. And\xE1 al alambrado, del lado del pueblo, con un perro.",nose:"Este olor no es de ac\xE1. Hace falta un hocico m\xE1s fino, nacido en tu casa. Cruz\xE1 un Beagle o un Shiba con otro perro, esper\xE1 a que el cachorro sea joven y segu\xED el rastro hasta el galp\xF3n.",notebook:"El rastro va al Galp\xF3n abandonado. Mand\xE1 a tu rastreador de misi\xF3n al galp\xF3n y tra\xE9 lo que encuentre. Hay un susto chico, nada m\xE1s.",clean:'Segu\xED limpiando la zona. Cada infectado deja pocos Dogs, con un tope por d\xEDa. "Limpi\xE1 la zona" se puede completar una vez al d\xEDa.'};_t("Capit\xE1n Iriarte",`<div class="card"><div class="av" style="background-image:url(&quot;${ad.capitan}&quot;)"></div><div class="info"><div class="say">${i[t.id]}</div></div></div>
    <div class="menu-row"><span>Misi\xF3n: <b>${t.title(Nt().name)}</b> (${Math.min(C.quest.prog,t.goal)}/${t.goal})</span><span>${t.reward?`<span class="ic i-lata sm"></span> ${t.reward}`:""}</span></div>
    <button class="pill alt" id="cap-ok">\xA1Entendido!</button>`,s=>{s.querySelector("#cap-ok").onclick=rt}),Xr("talk")}function Br(){let n=C.settings;_t("Men\xFA",`
    <div class="menu-row"><span>Sonido</span><button class="pill" data-set="sound">${n.sound?"S\xED":"No"}</button></div>
    <div class="menu-row"><span>Calidad gr\xE1fica</span><button class="pill" data-set="quality">${{auto:"Autom\xE1tica",high:"Alta",low:"Baja (m\xE1s r\xE1pida)"}[n.quality]}</button></div>
    <div class="menu-row"><span>Estilo p\xEDxel (como la referencia)</span><button class="pill" data-set="pixel">${n.pixel?"S\xED":"No"}</button></div>
    <div class="menu-row"><span>Invertir arriba/abajo</span><button class="pill" data-set="invertY" id="m-inverty">${n.invertY?"S\xED":"No"}</button></div>
    <div class="menu-row"><span>Zoom</span><span><button class="pill" data-zoom="-1">\u2212</button> <button class="pill" data-zoom="1">+</button></span></div>
    <div class="menu-row"><span>Pantalla completa</span><button class="pill" id="m-fs">${Fc()?"Salir":"Entrar"}</button></div>
    <div class="menu-row"><span>Jugar en vertical</span><button class="pill" id="m-portrait">${Ln?"S\xED":"No"}</button></div>
    <div class="menu-row"><span>Modo prueba (relojes cortos)</span><button class="pill" data-set="trialTimers" id="m-trial">${n.trialTimers?"S\xED":"No"}</button></div>
    <div class="menu-row"><span>Tu nombre</span><button class="pill" id="m-name">${C.playerName||"Elegir"}</button></div>
    <div class="menu-row"><span>Cuenta (opcional)</span><button class="pill" id="m-account">${ei().getSession&&ei().getSession()?"Entraste como "+ei().getSession().username:"Invitado"}</button></div>
    <div class="menu-row"><span>Cr\xE9ditos</span><button class="pill" id="m-credits">Ver</button></div>
    <div class="menu-row"><span>Ver el tutorial de nuevo</span><button class="pill" id="m-tut">Ver</button></div>
    <div class="menu-row"><span>Borrar partida</span><button class="pill gray" id="m-reset">Borrar</button></div>
    <p class="note"><b>Dog Zone: La Plaga</b> \xB7 prototipo <span class="ver-tag">v${Fo}</span>. Monedas: <b>Dogs</b> (comunes) y <b>PDogs</b> (valiosas, solo cosm\xE9tica). Pod\xE9s jugar sin cuenta, con el guardado en este tel\xE9fono. La cuenta es opcional, para respaldo o para cambiar de aparato. Sin compras. Si no ves v${Fo}, recarg\xE1 forzado o borr\xE1 los datos del sitio.</p>`,e=>{let t=re("#mtitle");if(t){t.textContent="Men\xFA";let o=document.createElement("span");o.className="ver-tag",o.id="menu-ver",o.textContent="v"+Fo,t.appendChild(o)}e.querySelectorAll("[data-set]").forEach(o=>o.onclick=()=>{let a=o.dataset.set;a==="sound"&&(n.sound=!n.sound),a==="quality"&&(n.quality={auto:"high",high:"low",low:"auto"}[n.quality]),a==="pixel"&&(n.pixel=!n.pixel),a==="invertY"&&(n.invertY=!n.invertY),a==="trialTimers"&&(n.trialTimers=!n.trialTimers),Ic(),Wt(),Je(),Br()});let i=e.querySelector("#m-credits");i&&(i.onclick=()=>rg());let s=e.querySelector("#m-account");s&&(s.onclick=()=>Wr());let r=e.querySelector("#m-name");r&&(r.onclick=()=>Vo({force:!0}).then(()=>Br())),e.querySelectorAll("[data-zoom]").forEach(o=>o.onclick=()=>{os=as(os*(o.dataset.zoom==="1"?.88:1.14),.65,1.5),Wt()}),e.querySelector("#m-fs").onclick=()=>{md(),setTimeout(()=>Br(),250)},e.querySelector("#m-portrait").onclick=()=>{gd(!Ln),Br()},e.querySelector("#m-tut").onclick=()=>{C.tut=0,rt(),_d()},e.querySelector("#m-reset").onclick=()=>{confirm("\xBFBorrar toda la partida? No se puede deshacer.")&&(localStorage.removeItem(Ir),location.reload())}})}function rg(){oh().then(n=>{_t("Cr\xE9ditos",um(n))})}function Wr(){let n=ei(),e=n.getSession&&n.getSession();if(!n.enabled||!Dh()){_t("Cuenta",`<div class="say">El guardado en la nube todav\xEDa no est\xE1 conectado en este build. Pod\xE9s seguir jugando como invitado: tu partida se guarda en este tel\xE9fono.</div>
      <div class="menu-row"><span>Tu nombre</span><button class="pill" id="acc-name">${C.playerName||"Elegir"}</button></div>
      <p class="note">La cuenta es opcional. Lo ideal es que la cree un adulto. No pedimos un mail real. Si m\xE1s adelante cre\xE1s una cuenta, este nombre puede ser tu nombre p\xFAblico y tiene que ser \xFAnico.</p>`,t=>{let i=t.querySelector("#acc-name");i&&(i.onclick=()=>Vo({force:!0}).then(()=>Wr()))});return}if(e){_t("Cuenta",`<div class="say">Entraste como <b>${e.username}</b>. Nombre p\xFAblico: <b>${C.playerName||e.display_name||e.username}</b>. El progreso se respalda en la nube (y tambi\xE9n queda en este tel\xE9fono).</div>
      <div class="menu-row"><span>Tu nombre</span><button class="pill" id="acc-name">Cambiar</button></div>
      <div class="menu-row"><span>Respaldos</span><button class="pill" id="acc-backups">Ver y restaurar</button></div>
      <button class="pill gray" id="acc-out">Cerrar sesi\xF3n</button>
      <p class="note">Cerrar sesi\xF3n no borra la partida local. El juego sigue andando como invitado. Si cambi\xE1s el nombre p\xFAblico y ya est\xE1 usado, te vamos a avisar.</p>`,t=>{let i=t.querySelector("#acc-name");i&&(i.onclick=()=>Vo({force:!0}).then(()=>Wr()));let s=t.querySelector("#acc-backups");s&&(s.onclick=()=>ld()),t.querySelector("#acc-out").onclick=async()=>{try{await n.signOut()}catch{}be("Quedaste como invitado."),rt()}});return}_t("Cuenta",`
    <div class="say">La cuenta es opcional: sirve para respaldar la partida o cambiar de aparato. Se puede seguir jugando como invitado. Lo ideal es que la cree un adulto. No pedimos un mail real.</div>
    <div class="menu-row"><span>Nombre p\xFAblico</span><input id="acc-display" maxlength="16" placeholder="tu nombre de criador" value="${(C.playerName||"").replace(/"/g,"&quot;")}"></div>
    <div class="menu-row"><span>Usuario (para entrar)</span><input id="acc-user" maxlength="20" placeholder="se arma solo si lo dej\xE1s vac\xEDo"></div>
    <div class="menu-row"><span>Contrase\xF1a</span><input id="acc-pass" type="password" minlength="6" placeholder="m\xEDnimo 6"></div>
    <label class="note"><input type="checkbox" id="acc-adult"> Soy un adulto o estoy con un adulto.</label>
    <div class="chips" style="margin-top:8px">
      <button class="pill alt" id="acc-up">Crear cuenta</button>
      <button class="pill" id="acc-in">Entrar</button>
    </div>
    <button class="pill gray" id="acc-rec">Olvid\xE9 la contrase\xF1a</button>
    <p class="note" id="acc-err"></p>`,t=>{let i=o=>{t.querySelector("#acc-err").textContent=o||""},s=()=>t.querySelector("#acc-user").value,r=()=>t.querySelector("#acc-pass").value;t.querySelector("#acc-up").onclick=async()=>{i("");try{let o=ti(t.querySelector("#acc-display").value||C.playerName);if(!o.ok){i(o.reason);return}let a=!1;try{a=await n.displayNameTaken(o.name)}catch{a=!1}if(a){let u=No(o.name);t.querySelector("#acc-display").value=u,i("Ese nombre ya est\xE1 usado. Prob\xE1 con "+u+".");return}let c=String(s()||"").trim()||Ac(o.name);try{if(await n.usernameTaken(c)){let u=Ac(No(o.name));t.querySelector("#acc-user").value=u,i("Ese usuario ya est\xE1 registrado. Prob\xE1 con "+u+".");return}}catch{}C.playerName=o.name,Je();let l=await n.signUp(c,r(),{adultOk:t.querySelector("#acc-adult").checked,displayName:o.name});await Oc(n,l.session,!0),rt(),_t("Anot\xE1 tu c\xF3digo",`<div class="say">Este c\xF3digo te sirve para recuperar la cuenta. Anotalo en un papel: no lo vamos a volver a mostrar.</div>
          <p class="recovery-code">${l.recoveryCode}</p>
          <p class="note">No uses un mail real. El usuario es ${l.session.username}.</p>
          <button class="pill alt" id="rec-ok">Ya lo anot\xE9</button>`,u=>{u.querySelector("#rec-ok").onclick=rt})}catch(o){i(o.message||String(o))}},t.querySelector("#acc-in").onclick=async()=>{i("");try{let o=await n.signIn(s(),r());await Oc(n,o,!1),be("Entraste. El progreso se respalda en la nube."),rt()}catch(o){i(o.message||String(o))}},t.querySelector("#acc-rec").onclick=()=>_S()})}function _S(){let n=ei();_t("Recuperar cuenta",`
    <div class="say">Escrib\xED tu usuario, el c\xF3digo que anotaste al registrarte y una contrase\xF1a nueva.</div>
    <div class="menu-row"><span>Usuario</span><input id="rec-user" maxlength="20"></div>
    <div class="menu-row"><span>C\xF3digo</span><input id="rec-code" placeholder="XXXX-XXXX-XXXX"></div>
    <div class="menu-row"><span>Nueva contrase\xF1a</span><input id="rec-pass" type="password" minlength="6"></div>
    <button class="pill alt" id="rec-go">Cambiar contrase\xF1a</button>
    <p class="note" id="rec-err"></p>`,e=>{e.querySelector("#rec-go").onclick=async()=>{let t=e.querySelector("#rec-err");t.textContent="";try{await n.recover(e.querySelector("#rec-user").value,e.querySelector("#rec-code").value,e.querySelector("#rec-pass").value),be("Listo. Entr\xE1 con la contrase\xF1a nueva."),rt()}catch(i){t.textContent=i.message||String(i)}}})}function Li(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function xS(n){let e=n&&n.quest&&n.quest.i||0,t=In[e],i=n&&n.dogs&&n.dogs[0]&&n.dogs[0].name||"tu perro";return`${t?typeof t.title=="function"?t.title(i):t.title:"\u2014"} (${Math.min(n&&n.quest&&n.quest.prog||0,t?t.goal:0)}/${t?t.goal:0})`}function Om(n,e,t,i){let s=t.source==="remote"?"\xDAltimo guardado en el servidor: "+(t.savedAtLabel||"sin fecha"):"En este tel\xE9fono: "+(t.savedAtLabel||"sin fecha");return`<div class="card"><div class="t">${Li(n)}${i?" \xB7 sugerida":""}</div>
    <div class="s">Criador: <b>${Li(t.playerName||"\u2014")}</b></div>
    <div class="s">${t.dogCoins} Dogs \xB7 ${t.pdogs} PDogs \xB7 ${t.dogs} perro${t.dogs===1?"":"s"}</div>
    <div class="s">Misi\xF3n de historia: ${Li(xS(e))}</div>
    <div class="s">${Li(s)}</div></div>`}async function Oc(n,e,t){let i=null;try{i=await n.loadSave(e&&e.user_id)}catch{i=null}let s=JSON.parse(is(C));(await Oh(n,s,i,{userId:e&&e.user_id,applyRemote:async o=>{og(o);try{localStorage.setItem(Ir,is(C))}catch{}},ask:(o,a)=>new Promise(c=>{let l=o.prefer==="remote",u=o.prefer==="local";_t("Hay dos partidas",`<div class="say">Encontramos una partida en la nube y otra en este tel\xE9fono. Eleg\xED cu\xE1l quer\xE9s usar. La otra queda de respaldo.</div>
        ${Om("En la nube",a.remote,o.remoteSum,l)}
        ${Om("En este tel\xE9fono",a.local,o.localSum,u)}
        <button class="pill${l?" alt":""}" id="cf-cloud">Usar la de la nube</button>
        <button class="pill${u?" alt":""}" id="cf-local">Usar la de este tel\xE9fono</button>
        <p class="note">Nunca se pisa una partida sin respaldo. El reloj de este aparato no decide.</p>`,h=>{h.querySelector("#cf-cloud").onclick=()=>{rt(),c("remote")},h.querySelector("#cf-local").onclick=()=>{rt(),c("local")}})})})).applied==="remote"&&i&&(i.data||i.payload)&&location.reload()}async function ld(){let n=ei(),e=[];try{e=await n.listBackups()}catch(i){be(i.message||"No se pudieron leer los respaldos.");return}if(!e.length){_t("Respaldos",`<div class="say">No hay respaldos guardados en la cuenta todav\xEDa.</div>
      <button class="pill" id="bk-back">Volver</button>`,i=>i.querySelector("#bk-back").onclick=()=>Wr());return}let t=e.map((i,s)=>{let r=i.summary||Ds(i.payload,{savedAt:i.createdMs});return`<div class="card">
      <div class="t">${Li(Ec(i.createdMs))}</div>
      <div class="s">${Li(i.reason||"respaldo")} \xB7 Criador: <b>${Li(r.playerName||"\u2014")}</b></div>
      <div class="s">${r.dogCoins} Dogs \xB7 ${r.pdogs} PDogs \xB7 ${r.dogs} perro${r.dogs===1?"":"s"}</div>
      <button class="pill" data-restore="${s}">Restaurar este</button>
    </div>`}).join("");_t("Respaldos",`<div class="say">Estos son los respaldos de tu cuenta. Restaurar reemplaza la partida actual (antes se guarda un respaldo).</div>
    ${t}
    <button class="pill gray" id="bk-back">Volver</button>`,i=>{i.querySelector("#bk-back").onclick=()=>Wr(),i.querySelectorAll("[data-restore]").forEach(s=>{s.onclick=()=>{let r=e[Number(s.dataset.restore)];if(!r)return;let o=r.summary||Ds(r.payload,{savedAt:r.createdMs});_t("\xBFRestaurar este respaldo?",`<div class="say">Se va a reemplazar la partida de ahora por la del ${Li(Ec(r.createdMs))}: <b>${Li(o.playerName||"\u2014")}</b>, ${o.dogCoins} Dogs, ${o.dogs} perro${o.dogs===1?"":"s"}.</div>
          <button class="pill alt" id="bk-yes">S\xED, restaurar</button>
          <button class="pill gray" id="bk-no">Cancelar</button>
          <p class="note">La partida actual queda de respaldo antes de restaurar.</p>`,a=>{a.querySelector("#bk-no").onclick=()=>ld(),a.querySelector("#bk-yes").onclick=async()=>{let c=JSON.parse(is(C));Ur(c,"antes de restaurar un respaldo");try{await n.backupSave(c,"antes de restaurar un respaldo")}catch{}og(r.payload);try{localStorage.setItem(Ir,is(C))}catch{}try{await n.saveNow(JSON.parse(is(C)))}catch{}be("Se restaur\xF3 el respaldo."),rt(),location.reload()}})}})})}function og(n){let{state:e}=fc(n,Xh());Ro(e),C=e}async function yS(){let n=ei();if(!(!n.enabled||!n.restoreSession))try{let e=await n.restoreSession();if(!e)return;await Oc(n,e,!1)}catch{}}function ag(){let n=Nt();C.economy=Qn(C.economy||{},me());let e=wh.map(t=>{let i=Mc(n,t.id,{eco:C.economy,now:me(),stageOf:ut,blocksAction:(r,o,a)=>!!Gs(r,o)}),s=bc(C.economy,t.id);return`<div class="card"><div class="info">
      <div class="t">${t.nombre}</div>
      <div class="s">${t.desc} \xB7 ${t.dur}s \xB7 ${t.base} Dogs</div>
      <button class="pill" data-act="${t.id}" ${!i.ok||s?"disabled":""}>${s?"Ya se hizo hoy":i.ok?"Enviar":i.reason}</button>
    </div></div>`}).join("");_t("Actividades del d\xEDa",`<div class="say">Cosas sin pelea, una vez por d\xEDa cada una. Hay un tope conjunto de ${Io} Dogs. Las PDogs no aceleran ni compran poder.</div>${e}
    <p class="note">Hoy llev\xE1s ${C.economy.activityDogs||0} / ${Io} Dogs de actividades.</p>`,t=>{t.querySelectorAll("[data-act]").forEach(i=>i.onclick=()=>vS(n,i.dataset.act))})}function vS(n,e){C.economy=Qn(C.economy||{},me());let t=Mc(n,e,{eco:C.economy,now:me(),stageOf:ut,blocksAction:(s,r)=>!!Gs(s,r)});if(!t.ok){be(t.reason);return}Eh(n,e,me());let i=Ui(n);i.mode="mission_out",i.path=[ve.roadStart.clone(),ve.exitRoad.clone()],be(`\xA1${n.name} sali\xF3 a ${t.def.nombre}!`),vt.ok(),Je(),rt()}function cg(n,e){let t=n.activity;if(!t)return;C.economy=Qn(C.economy||{},me());let i=Th(C.economy,t.id,t.reward,me());if(C.economy=i.eco,i.paid&&Ri(C,{dogCoins:i.paid,reason:"activity-"+t.id}),i.pdogs&&Ri(C,{pdogs:i.pdogs,reason:"activity-pdogs-"+t.id}),t.id==="siesta"){let s=Ah(n,ut(n).id);s&&n.stats&&(n.stats.lealtad=Math.min(10,(n.stats.lealtad||1)+s))}if(n.activity=null,!e){let s=i.pdogs?` y ${i.pdogs} PDogs`:"";be(`\xA1${n.name} volvi\xF3 de la actividad con ${i.paid} Dogs${s}!`),vt.coin()}Je()}function lg(n){let e=n.lineage,t=[];if(t.push(`<div class="t">${n.name}</div><div class="s">${Di(n)} \xB7 ${n.sex==="M"?"macho":"hembra"}</div>`),e&&(e.sire||e.dam)){t.push(`<p class="note">Padres: ${e.sire?`${e.sire.name} (${e.sire.label||e.sire.breed})`:"\u2014"} y ${e.dam?`${e.dam.name} (${e.dam.label||e.dam.breed})`:"\u2014"}.</p>`);let s=[...e.sireParents||[],...e.damParents||[]];s.length&&t.push(`<p class="note">Abuelos conocidos: ${s.map(r=>r.name||r.uid).join(", ")}.</p>`)}else t.push('<p class="note">No hay un \xE1rbol cargado: este perro no naci\xF3 de una cruza registrada en tu criadero.</p>');let i=Go(n);t.push(`<p class="note">Pelaje: color ${"#"+i.color.toString(16).padStart(6,"0")}, manchas: ${i.spots==="none"?"no":i.spots}.</p>`),t.push(Jm(ki(n))),_t("Libro de linajes",t.join(""),s=>{})}function ug(n){if(ut(n).id!=="retirado"){be("Todav\xEDa no se retira");return}C.memorials=C.memorials||[],C.memorials.push({uid:n.uid,name:n.name,breed:n.breed,breedLabel:Di(n),born:n.born,retiredAt:me(),coat:Go(n)});let e=Ot.get(n.uid);e&&(qt.remove(e.actor.root),e.tag.remove(),Ot.delete(n.uid)),C.dogs=C.dogs.filter(t=>t!==n),C.active===n.uid&&C.dogs[0]&&Qm(C.dogs[0].uid),vt.ok(),be(`Qued\xF3 la medalla de ${n.name} en el criadero. El lugar qued\xF3 libre.`,2800),Je(),rt(),zs()}function hg(){let n=C.dogs,e=`<div class="say">Eleg\xED un macho y una hembra. El cachorro toma el color de uno y las manchas del otro. No se puede cruzar padres, hijos ni hermanos. Se paga en Dogs, nunca en PDogs, y no se puede acelerar la espera.</div>
    <div class="menu-row"><span>Macho</span><select id="br-sire">${n.filter(t=>t.sex==="M").map(t=>`<option value="${t.uid}">${t.name} \xB7 ${Di(t)} \xB7 ${ut(t).nombre}</option>`).join("")||'<option value="">(no hay)</option>'}</select></div>
    <div class="menu-row"><span>Hembra</span><select id="br-dam">${n.filter(t=>t.sex==="H").map(t=>`<option value="${t.uid}">${t.name} \xB7 ${Di(t)} \xB7 ${ut(t).nombre}</option>`).join("")||'<option value="">(no hay)</option>'}</select></div>
    <button class="pill alt" id="br-go">Registrar cruza</button>
    <p class="note" id="br-note"></p>`;_t("Cruzar",e,t=>{let i=t.querySelector("#br-note"),s=t.querySelector("#br-go"),r=()=>{let o=rs(t.querySelector("#br-sire").value),a=rs(t.querySelector("#br-dam").value);if(!o||!a){i.textContent="Hace falta un macho y una hembra.",s.disabled=!0;return}let c=_c(o,a,{now:me(),stageOf:ut,freeSlots:C.kennelCap-C.dogs.length}),l=o&&a?gc((Pt[o.breed]||Pt.mestizo).precio,(Pt[a.breed]||Pt.mestizo).precio):0;if(!c.ok){i.textContent=c.reason,s.disabled=!0;return}let u=zo(),h=us()?`${Math.round(u.gestMs/6e4)} min (modo prueba)`:`${Math.round(u.gestMs/36e5)} h`;i.textContent=`Tasa: ${l} Dogs.${c.warning?" "+c.warning+".":""} Gestaci\xF3n: ${h}. Las PDogs no aceleran.`,s.disabled=!1,s.dataset.fee=l};t.querySelector("#br-sire").onchange=r,t.querySelector("#br-dam").onchange=r,r(),s.onclick=()=>{let o=rs(t.querySelector("#br-sire").value),a=rs(t.querySelector("#br-dam").value),c=_c(o,a,{now:me(),stageOf:ut,freeSlots:C.kennelCap-C.dogs.length});if(!c.ok){be(c.reason);return}let l=gc((Pt[o.breed]||Pt.mestizo).precio,(Pt[a.breed]||Pt.mestizo).precio);if(!kh(C,{dogCoins:l})){be("No te alcanzan los Dogs para la tasa. Las PDogs no sirven para esto.");return}if(c.veteran&&Math.random()>=lt.veteranFertility){be("Est\xE1 cansado: esta vez no prendi\xF3. No se cobr\xF3.");return}Ci(C,{dogCoins:l,reason:"breed",use:"breed"}).ok&&(am(a,o,l,me(),zo().gestMs),vt.ok(),be(`Registramos la cruza. ${a.name} est\xE1 en el nido.`),Je(),rt(),fd())}})}function dg(n,e){let t=n.pregnant;if(!t)return"";let i=rs(t.sireUid)||{uid:t.sireUid,name:t.sireName,breed:t.sireBreed,coat:{color:11565642,spots:"none"},parentUids:[]},s=Math.max(0,C.kennelCap-C.dogs.length),r=cm({female:n,male:i,getStats:ki,getLabel:Di,getCoat:Go,freeSlots:s,now:me(),timers:zo(),pickName:()=>Ns(Ho())});for(let a of r.kept)a.pendingName=!0,C.dogs.push(a),Ui(a);r.payout&&Ri(C,{dogCoins:r.payout,reason:"adopt"});let o=`Nacieron ${r.size}. ${r.kept.map(a=>a.name).join(", ")||"Ninguno"} qued\xF3 en casa.`;return r.adopted.length&&(o+=` ${r.adopted.map(a=>a.name).join(", ")} se va a otra casa del pueblo (+${r.payout} Dogs).`),e||be(o,3600),ai("litter"),Je(),r.kept.length&&!e&&setTimeout(()=>$h(),400),o}function fg(){let n=Nt(),e=tn(n,me()),t=e?Hn(e.id):null,i=et.vetCost,s=bh(n,me()),r=t?Mh(n,me()):"",o=!!(e&&e.treatment&&e.treatment.started),a=o?0:t?t.costo:0,c=Vm("genericItem_color_110.png");_t("Veterinario \u2014 Don Eliseo",`
    <div class="say"><img class="item-inline" src="${c}" alt=""> ${s}</div>
    ${e?`<p class="note">${Lo(n,me())}</p>`:""}
    ${t?`<button class="pill alt" id="vet-treat" ${!o&&C.latas<a?"disabled":""}>${r}</button>`:""}
    <button class="pill" id="vet-go" ${C.latas<i?"disabled":""}>Revisar heridas (${i} Dogs)</button>
    <p class="note">Las PDogs no se aceptan. El botiqu\xEDn no cura enfermedades.</p>`,l=>{let u=l.querySelector("#vet-go");u&&(u.onclick=()=>{if(!Ci(C,{dogCoins:i,reason:"vet-heal",use:"vet"}).ok){be("No te alcanzan los Dogs");return}let d=$r(n);n.hp=d,K.hp=Math.min(K.maxHp,K.hp+30),C.economy=Qn(C.economy||{},me()),C.economy.vetVisits=(C.economy.vetVisits||0)+1,vt.ok(),be(`${n.name}: heridas curadas.`),Je(),rt()});let h=l.querySelector("#vet-treat");h&&(h.onclick=()=>{if(!o&&a&&!Ci(C,{dogCoins:a,reason:"vet-ailment",use:"vet"}).ok){be("No te alcanzan los Dogs");return}let d=vh(n,me(),us());if(!d.ok){d.text?be(d.text):be(d.reason||"Todav\xEDa no.");return}C.economy=Qn(C.economy||{},me()),C.economy.vetVisits=(C.economy.vetVisits||0)+1,vt.ok(),be(d.text,3200),Je(),rt()})})}function pg(){let n=In[C.quest.i];if(n&&n.id==="tag"&&!C.story.tag){C.story.tag=!0,ai("tag_found"),_t("La chapita en el barro",`<div class="say">${Fs("Tu perro {perro} olfatea el barro, junto al cerco. Hay una chapita sucia, con un dibujo que parece una bata. Este olor no es de la aldea.")}</div>
      <p class="note">La chapita queda en el criadero como objeto de historia: no sube stats.</p>
      <button class="pill alt" id="tag-ok">Llev\xE1rsela al Capit\xE1n</button>`,e=>{e.querySelector("#tag-ok").onclick=rt});return}if(n&&n.id==="nose"){let e=C.dogs.find(t=>t.parentUids&&t.parentUids.length&&["joven","adulto","veterano"].includes(ut(t).id)&&(t.breed==="cruza"||t.breed==="mestizo_linaje"||t.lineage&&t.lineage.sire&&t.lineage.dam&&t.lineage.sire.breed!==t.lineage.dam.breed)&&(ki(t).olfato>=7||["beagle","shiba"].includes(t.lineage?.sire?.breed)||["beagle","shiba"].includes(t.lineage?.dam?.breed)));if(!e){be("Hace falta un hocico nuevo, nacido de una cruza tuya (Beagle o Shiba con otra raza) y que ya sea joven.");return}C.story.tracked=!0,ai("track_shed"),_t("Un hocico nuevo",`<div class="say">${Fs(e.name+" sigue el olor de la chapita. El rastro va hacia el Galp\xF3n abandonado. Mandalo de misi\xF3n al galp\xF3n cuando quieras.")}</div><button class="pill alt" id="tr-ok">Entendido</button>`,t=>t.querySelector("#tr-ok").onclick=rt);return}be("El alambrado est\xE1 quieto. Del otro lado, la zona infectada.")}function ud(n){return eh(n,ut(n).id,!!n.pregnant)}function mg(n){let e=ud(n);if(C.latas<e){be("No ten\xE9s Dogs para comida. \xA1Mand\xE1 a un perro de misi\xF3n!");return}if(n.hunger>=98){be(`${n.name} ya est\xE1 lleno`);return}let t=Ui(n);t.mode="to_bowl",t.returnMode=n.uid===C.active?"follow":"kennel",be(`${n.name} va al comedero\u2026`)}function bS(n,e){let t=ud(n);if(!Ci(C,{dogCoins:t,reason:"feed",use:"feed"}).ok){be("No te alcanzan los Dogs");return}n.hunger=Math.min(100,n.hunger+At.feedAmount),e.actor.play("eat",2.6),e.mode="eating",e.eatT=2.6,vt.tone(300,.2,"triangle",.08),Oi(e.pos,`\u2212${t} Dogs`,"#ffb38a"),Je(),ai("feed"),Xr("feed")}var Pi=null;function hd(){if(Pi){if(Pi.id==="bowl"){let n=Nt();if(n.mission){be(`${n.name} est\xE1 de misi\xF3n`);return}mg(n)}Pi.id==="shop"&&$o(),Pi.id==="capitan"&&cd(),Pi.id==="kennel"&&zs(),Pi.id==="vet"&&fg(),Pi.id==="fence"&&pg()}}function dd(){if(K.attackCd>0||K.dead)return;K.attackCd=.5,K.actor.attack(),vt.unlock();let n=null,e=2.3;for(let r of oi)if(r.state!=="dead"){let o=r.pos.distanceTo(K.pos);o<e&&(e=o,n=r)}let t=Ot.get(C.active),i=null,s=8;for(let r of oi)if(r.state!=="dead"){let o=r.pos.distanceTo(K.pos);o<s&&(s=o,i=r)}if(t&&i&&(t.mode==="follow"||t.mode==="fight")){let r=Gs(Nt(),"combate");r?be(r):(t.mode="fight",t.target=i,t.bonus=1.6,t._fought=!0)}n?setTimeout(()=>{n.state!=="dead"&&gg(n,5,K.pos)},140):i||be("No hay infectados cerca",1200)}function gg(n,e,t){n.hp-=e,n.actor.hurt(),vt.hit(),Oi(n.pos,`\u2212${Math.round(e)}`,"#e7b6ff");let i=n.pos.clone().sub(t).setY(0).normalize().multiplyScalar(.35);n.pos.add(i),n.state==="wander"&&(n.state="chase"),n.hp<=0&&MS(n)}function MS(n){n.state="dead",n.actor.dying=.8,n.respawnAt=me()+At.monsterRespawn*1e3,C.economy=Qn(C.economy||{},me());let e=tm(),t=th(C.economy,e,me());C.economy=t.eco;let i=t.paid;i&&Ri(C,{dogCoins:i,reason:"combat"}),C.kills++,Ni(n.pos,10354506,18),Oi(n.pos,i?`+${i} Dogs`:"tope diario"),vt.coin();let s=Nt();s.wins=(s.wins||0)+1;let r=Ot.get(C.active);r&&(r.mode==="fight"||r._fought)&&_g(s,r),ai("kill"),Je()}function _g(n,e){if(!n)return;let t=$r(n),i=n.hp==null?t:n.hp,s=xh(n,{hpRatio:t?i/t:1,stageId:ut(n).id,now:me(),trial:us(),dayKeyFn:Ao});e&&(e._fought=!1),s&&s.ok&&s.toast&&be(s.toast,3400)}function xg(){let n=Nt();if((C.potionUses||0)<=0){be("No ten\xE9s usos de botiqu\xEDn. Compr\xE1 en la tienda.");return}let e=$r(n);if((n.hp??e)>=e&&K.hp>=K.maxHp){be("Est\xE1n sanos");return}let t=dh(n,me());C.potionUses=(C.potionUses||0)-1,n.hp=Math.min(e,(n.hp??e)+e*At.potionHeal),K.hp=Math.min(K.maxHp,K.hp+40);let i=Ot.get(n.uid);Ni(i?i.pos:K.pos,16739179,10),vt.ok(),t&&be(t,2800),Je()}function SS(){let n=Ot.get(C.active);if(!(!n||n.barkCd>0||!["follow","fight"].includes(n.mode))){n.barkCd=3,n.actor.play("bark",.7),vt.bark(),Oi(n.pos.clone().setY(n.actor.height+.5),"\xA1Guau!","#fff3d6");for(let e of oi)e.state!=="dead"&&e.pos.distanceTo(n.pos)<5&&(e.stun=1.2,Oi(e.pos,"\xA1!","#ffd35a"))}}function sn(n,e,t=!1){if(!n)return;let i=0,s=r=>{let o=performance.now();o-i<280||(i=o,e(r))};n.addEventListener(t?"pointerdown":"pointerup",r=>{if(!(r.pointerType==="mouse"&&r.button!==0)){if(!t){let o=n.getBoundingClientRect();if(r.clientX<o.left||r.clientX>o.right||r.clientY<o.top||r.clientY>o.bottom)return}r.preventDefault(),s(r)}}),n.addEventListener("click",r=>{r.preventDefault(),s(r)})}sn(re("#btn-bag"),zs);sn(re("#btn-shop"),$o);sn(re("#btn-mission"),tg);re("#btn-act")&&sn(re("#btn-act"),ag);sn(re("#btn-menu"),Br);sn(re("#btn-attack"),()=>dd(),!0);sn(re("#btn-potion"),xg);sn(re("#btn-bark"),SS);sn(re("#btn-run"),()=>Kh());sn(re("#btn-context"),hd);sn(re("#quest"),()=>{In[C.quest.i].npc==="rosa"?$o():cd()});function ai(n){let e=In[C.quest.i];if(!(!e||e.ev!==n)&&!(e.daily&&(C.economy=Qn(C.economy||{},me()),!nm(C.economy)))){if(C.quest.prog++,C.quest.prog>=e.goal){e.daily&&(C.economy=im(C.economy||{}));let t=e.daily?et.cleanReward:e.reward;t&&(Ri(C,{dogCoins:t,reason:"quest-"+e.id}),Oi(K.pos.clone().setY(2),`+${t} Dogs`)),e.id==="notebook"&&(C.potionUses=(C.potionUses||0)+(et.potionUsesPerKit||3),C.story.notebook=!0,be("Tambi\xE9n encontraste un botiqu\xEDn (3 usos).",2e3)),vt.ok(),be(`\xA1Misi\xF3n cumplida: ${e.title(Nt().name)}!${t?` +${t} Dogs`:""}`,2600),re("#quest").classList.remove("done"),re("#quest").offsetWidth,re("#quest").classList.add("done"),!e.repeat&&!e.daily&&(C.quest.i=Math.min(C.quest.i+1,In.length-1)),C.quest.prog=0}Jh="",Je()}}function fd(){C.dogs.some(e=>e.sex==="M"&&["joven","adulto"].includes(ut(e).id)&&!e.mission)&&C.dogs.some(e=>e.sex==="H"&&["joven","adulto"].includes(ut(e).id)&&!e.mission)&&ai("pair")}var Ws=160,qo=new Et,si=new Float32Array(Ws*3),Dc=new Float32Array(Ws*3),ks=new Float32Array(Ws*3),Nc=new Float32Array(Ws);qo.setAttribute("position",new gt(si,3));qo.setAttribute("color",new gt(Dc,3));var wS=new bi({size:7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1}),yg=new ji(qo,wS);yg.frustumCulled=!1;qt.add(yg);var km=0;for(let n=0;n<Ws;n++)si[n*3+1]=-99;function Ni(n,e,t=8,i=1){let s=new xe(e);for(let r=0;r<t;r++){let o=km=(km+1)%Ws;si[o*3]=n.x+(Math.random()-.5)*.4,si[o*3+1]=.3+Math.random()*.5,si[o*3+2]=n.z+(Math.random()-.5)*.4,ks[o*3]=(Math.random()-.5)*2.4*i,ks[o*3+1]=1+Math.random()*2,ks[o*3+2]=(Math.random()-.5)*2.4*i,Dc[o*3]=s.r,Dc[o*3+1]=s.g,Dc[o*3+2]=s.b,Nc[o]=.6+Math.random()*.5}}function ES(n){for(let e=0;e<Ws;e++)Nc[e]<=0||(Nc[e]-=n,ks[e*3+1]-=4*n,si[e*3]+=ks[e*3]*n,si[e*3+1]=Math.max(.05,si[e*3+1]+ks[e*3+1]*n),si[e*3+2]+=ks[e*3+2]*n,Nc[e]<=0&&(si[e*3+1]=-99));qo.attributes.position.needsUpdate=!0,qo.attributes.color.needsUpdate=!0}var Fr=new I;function ss(n,e,t,i,s=.3){Fr.copy(e).sub(n).setY(0);let r=Fr.length();if(r<.01)return{d:r,yaw:null};let o=Math.min(r,t*i);return n.addScaledVector(Fr.divideScalar(r),o),s&&Yu(n,s,ls.colliders),{d:r,yaw:Math.atan2(Fr.x,Fr.z)}}function TS(n){return(2.8+ki(n).velocidad*.32)*(n.hunger<25?.75:1)*(ut(n).id==="veterano"?.8:1)}var Fm=null;function AS(n){let e=Zm();if(e.mag>.05)Bo();else if(Gn.active&&!K.dead){let o=Gn.x-K.pos.x,a=Gn.z-K.pos.z,c=Math.hypot(o,a);c<.2?(Bo(),e={wx:0,wz:0,mag:0}):e={wx:o/c,wz:a/c,mag:1}}qn.visible&&(qn.material.opacity=.4+.4*Math.sin(me()/120));let t=jt.joyActive&&e.mag>.92,i=K.run||t,s=(i?At.playerRun:At.playerWalk)*e.mag;if(K.dead){Bo(),K.deadT-=n,K.deadT<=0&&RS(),K.actor.update(n,0,!1);return}if(e.mag>.05){let o=K.pos.clone();K.pos.x+=e.wx*s*n,K.pos.z+=e.wz*s*n,Yu(K.pos,.32,ls.colliders),K.moved+=o.distanceTo(K.pos),K.yaw=Eo(K.yaw,Math.atan2(e.wx,e.wz),14,n),i&&Math.random()<n*8&&Ni(K.pos,13150328,1,.3)}K.actor.root.rotation.y=K.yaw,K.actor.update(n,s,i),K.attackCd>0&&(K.attackCd-=n),K.hurtCd>0?K.hurtCd-=n:K.hp<K.maxHp&&(K.hp=Math.min(K.maxHp,K.hp+2*n)),C.player.x=K.pos.x,C.player.z=K.pos.z,C.player.hp=K.hp;let r=Kn(K.pos.x,K.pos.z)?"zone":"village";if(r!==Fm){Fm=r;let o=re("#zonename");if(o.textContent=r==="zone"?"\u26A0 ZONA INFECTADA \u26A0":"Aldea Criadero",o.classList.toggle("danger",r==="zone"),o.classList.add("show"),setTimeout(()=>o.classList.remove("show"),2200),r==="zone"){Xr("zone");let a=Nt(),c=Ot.get(C.active),l=Gs(a,"zona");l&&c&&c.mode==="follow"&&(c.mode="kennel",be(l))}}K.moved>3&&Xr("moved")}function RS(){K.dead=!1,K.hp=K.maxHp,K.pos.copy(ve.spawn),K.actor.root.visible=!0,be("Te despertaste en el criadero. \xA1Cuidado con los infectados!")}function CS(n){K.dead||(K.hp-=n,K.hurtCd=4,K.actor.hurt(),vt.hit(),Oi(K.pos.clone().setY(1.6),`\u2212${n}`,"#ff6b6b"),K.hp<=0&&(K.dead=!0,K.deadT=2,Ni(K.pos,16777215,14),K.actor.root.visible=!1))}function PS(n){let e=me();for(let t of C.dogs){t.hunger=Math.max(0,t.hunger-At.hungerPerSec*n),t.pregnant&&e>=t.pregnant.due&&dg(t,!1);let i=vc(t,e,us());i&&i.text&&(be(i.text,3200),Je()),ut(t).id==="retirado"&&!t.retireNoted&&(t.retireNoted=!0,be(`${t.name} se retir\xF3: pod\xE9s hacerle una despedida en el criadero`,2800),Je());let s=Ui(t),r=$r(t);t.hp==null&&(t.hp=r),QM(t,s);let o=0,a=null,c=TS(t);switch(s.barkCd>0&&(s.barkCd-=n),s.attackCd>0&&(s.attackCd-=n),t.mission&&!["mission_out","away","mission_back"].includes(s.mode)&&(s.mode=e>=t.mission.end?"mission_back":"away",s.mode==="away"?s.actor.root.visible=!1:s.pos.copy(ve.exitRoad)),t.uid===C.active&&s.mode==="kennel"&&!t.mission&&(s.mode="follow"),s.mode){case"follow":{let l=Fr.set(-Math.sin(K.yaw),0,-Math.cos(K.yaw)).multiplyScalar(1.85).add(K.pos),u=s.pos.distanceTo(l);if(u>14&&s.pos.copy(l),u>.45){let h=u>3,d=Math.min(h?c*1.6:c,u*3.2),f=ss(s.pos,l.clone(),d,n,.25);o=d,a=f.yaw}else a=Math.atan2(K.pos.x-s.pos.x,K.pos.z-s.pos.z);if(t.hp>r*.15&&!Gs(t,"combate")){for(let h of oi)if(h.state==="chase"&&h.pos.distanceTo(K.pos)<7){s.mode="fight",s.target=h,s._fought=!0;break}}t.hp<r&&(t.hp=Math.min(r,t.hp+1.5*n));break}case"fight":{let l=s.target;if(!l||l.state==="dead"||l.pos.distanceTo(K.pos)>12){s.mode="follow",s.target=null,s.bonus=1;break}if(s.pos.distanceTo(l.pos)>1.25){let h=ss(s.pos,l.pos,c*1.65,n,.25);o=c*1.65,a=h.yaw}else if(a=Math.atan2(l.pos.x-s.pos.x,l.pos.z-s.pos.z),s.attackCd<=0){let h=ki(t);s.attackCd=Math.max(.55,1.25-h.velocidad*.05),s.actor.play("attack",.42);let d=(3+h.fuerza*.85)*Math.max(.5,ut(t).mult)*s.bonus;s.bonus=1,setTimeout(()=>{l.state!=="dead"&&s.pos.distanceTo(l.pos)<1.9&&gg(l,d,s.pos)},170)}t.hp<=0&&(t.hp=0,s.mode="tired",be(`${t.name} se cans\xF3 y vuelve al criadero a descansar`),Ni(s.pos,16777215,8),_g(t,s));break}case"tired":case"kennel":{let l=ve.pens[C.dogs.indexOf(t)%ve.pens.length],u=s.pos.distanceTo(l);if(u>.3){let h=s.mode==="tired"?c*1.2:c*.6,d=ss(s.pos,l,h,n,.22);o=h,a=d.yaw,u>25&&s.pos.copy(l)}else s.think-=n,s.think<=0&&(s.think=3+Math.random()*5,s.idleYaw=Math.random()*Math.PI*2,Math.random()<.3&&s.actor.play("bark",.5)),a=s.idleYaw??0;t.hp=Math.min(r,t.hp+(s.mode==="tired"?4:2)*n),s.mode==="tired"&&t.hp>r*.6&&(s.mode=t.uid===C.active?"follow":"kennel",t.uid===C.active&&be(`${t.name} descans\xF3 y vuelve con vos`));break}case"to_bowl":{let l=s.pos.distanceTo(ve.bowl);if(l>.7){let u=c*1.4,h=ss(s.pos,ve.bowl,u,n,.2);o=u,a=h.yaw,l>30&&s.pos.copy(ve.bowl)}else bS(t,s);break}case"eating":{a=Math.atan2(ve.bowl.x-s.pos.x,ve.bowl.z-s.pos.z),s.eatT-=n,s.eatT<=0&&(s.mode=s.returnMode||"follow",s.actor.happy=1.3,s.actor.play("jump",.5),Ni(s.pos,16765786,6));break}case"mission_out":{s.actor.root.visible=!0;let l=s.path[0];if(!l){s.mode="away",s.actor.root.visible=!1;break}let u=ss(s.pos,l,c*1.5,n,0);o=c*1.5,a=u.yaw,u.d<.4&&s.path.shift();let h=t.mission&&t.mission.end||t.activity&&t.activity.end;h&&e>=h&&(s.mode="mission_back",s.pos.copy(ve.roadStart),s.path=[],s.actor.root.visible=!0);break}case"away":{s.actor.root.visible=!1;let l=t.mission&&t.mission.end||t.activity&&t.activity.end;l&&e>=l&&(s.mode="mission_back",s.pos.copy(ve.roadStart),s.actor.root.visible=!0,s.path=[]);break}case"mission_back":{s.actor.root.visible=!0;let l=t.uid===C.active?K.pos:ve.pens[C.dogs.indexOf(t)%ve.pens.length],u=s.path[0]||l,h=ss(s.pos,u,c*1.7,n,s.path.length?0:.22);o=c*1.7,a=h.yaw;let d=()=>{t.mission?sg(t):t.activity&&cg(t),s.mode=t.uid===C.active?"follow":"kennel"};if(h.d<(s.path.length?.4:1.8))if(s.path.length)s.path.shift();else{d(),s.actor.play("jump",.5);break}let f=t.mission&&t.mission.end||t.activity&&t.activity.end;f&&(h.d>28||e-f>8e3)&&(d(),s.pos.copy(l));break}}a!=null&&(s.yaw=Eo(s.yaw,a,9,n)),s.actor.root.rotation.y=s.yaw,s.speedNow=zt(s.speedNow,o,12,n),s.actor.happy=zt(s.actor.happy,t.hunger<25?.25:1,1,n),s.actor.update(n,s.speedNow),s.mode==="follow"&&o>4&&Math.random()<n*6&&Ni(s.pos,13150328,1,.3)}}function LS(n){let e=me(),t=Ot.get(C.active),i=Nt();for(let s of oi){if(s.state==="dead"){s.actor.updateMonster(n,0),s.actor.dying<=0&&(s.actor.root.visible=!1),e>=s.respawnAt&&(Xm(s),Ni(s.pos,10705919,12));continue}let r=0,o=null;if(s.stun>0){s.stun-=n,s.actor.updateMonster(n,0);continue}s.cd>0&&(s.cd-=n);let a=K.dead?99:s.pos.distanceTo(K.pos),c=t&&t.mode==="fight"&&t.target===s,l=t&&t.actor.root.visible?s.pos.distanceTo(t.pos):99;if(s.state==="wander"){s.think-=n,(s.think<=0||s.pos.distanceTo(s.wander)<.5)&&(s.think=3+Math.random()*4,qm(s.wander,2));let h=ss(s.pos,s.wander,1.1,n,.4);r=1.1,o=h.yaw,(a<6||l<4)&&(s.state="chase")}else if(s.state==="chase"){let h=c||l<a,d=h?t.pos:K.pos,f=h?l:a;if(f>11)s.state="wander";else if(f>1.3){let g=ss(s.pos,d,2.5,n,.4);r=2.5,o=g.yaw}else o=Math.atan2(d.x-s.pos.x,d.z-s.pos.z),s.cd<=0&&(s.cd=1.5,s.actor.play("attack",.45),setTimeout(()=>{s.state!=="dead"&&(h&&t&&i.hp>0?(i.hp=Math.max(0,i.hp-At.monsterDmg),t.actor.hurt(),Oi(t.pos.clone().setY(1),`\u2212${At.monsterDmg}`,"#ff6b6b"),vt.hit()):!h&&s.pos.distanceTo(K.pos)<1.9&&CS(At.monsterDmg+2))},200))}let u=s.pos.x+s.pos.z;if(u>Jn-.6){let h=(u-(Jn-.6))/2;s.pos.x-=h,s.pos.z-=h}o!=null&&(s.yaw=Eo(s.yaw,o,7,n)),s.actor.root.rotation.y=s.yaw,s.speedNow=zt(s.speedNow,r*1.4,10,n),s.actor.updateMonster(n,s.speedNow),Math.random()<n*1.5&&Ni(s.pos,10705919,1,.2)}}var ni=new I,ed=!0;function ko(n,e){let t=K.pos;ed&&(e?ni.copy(t):(ni.x=zt(ni.x,t.x,6,n),ni.z=zt(ni.z,t.z,6,n))),Vn.position.copy(ni).add(nS),Vn.lookAt(ni),Ii.position.set(ni.x+8,14,ni.z+5),Ii.target.position.copy(ni)}var IS=0;function Cc(n,e,t=14){if(n.distanceTo(K.pos)>t)return!1;let i=Gr(n,e),{w:s,h:r}=Vr(),o=s>r,a=o?108:155,c=o?118:135,l=10;return!!(i&&i.y>a&&i.y<r-c&&i.x>l&&i.x<s-l)}function DS(){Uo(K.tag,K.pos,2.05,!K.dead&&Cc(K.pos,2.05,20),-22),K.tag.querySelector(".hp i").style.width=`${K.hp/K.maxHp*100}%`;for(let t of Hs)Uo(t.tag,t.pos,2.05,Cc(t.pos,2.05,12));let n=In[C.quest.i];Hs[0].tag.querySelector(".mark").style.visibility=n.npc==="capitan"?"visible":"hidden";for(let t of C.dogs){let i=Ot.get(t.uid);if(!i)continue;Uo(i.tag,i.pos,i.actor.height+.55,i.actor.root.visible&&Cc(i.pos,i.actor.height+.55,16),26);let s=$r(t);i.tagHp.style.width=`${(t.hp??s)/s*100}%`;let r=t.hunger<25?' <span class="ic i-bone sm"></span>':"",o=t.name+r;i.tagLabel!==o&&(i.tagName.innerHTML=o,i.tagLabel=o)}oi.filter(t=>t.state!=="dead").sort((t,i)=>t.pos.distanceTo(K.pos)-i.pos.distanceTo(K.pos)).forEach((t,i)=>{t.tagHp.style.width=`${t.hp/t.maxHp*100}%`,Uo(t.tag,t.pos,1.5,i<2&&Cc(t.pos,1.5,8))});for(let t of oi)t.state==="dead"&&Uo(t.tag,t.pos,1.5,!1)}var vg=null,Gh=0;function NS(){let n=pe*2,e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d");ls.grid.forEach((i,s)=>i.forEach((r,o)=>{t.fillStyle=zp[r],t.fillRect(o,s,1,1)})),t.fillStyle="#7a5232",t.fillRect(ve.kennel.x-3+pe,ve.kennel.z-2.7+pe,6,5.4),t.fillStyle="#b8352c",t.fillRect(ve.shop.x-1.5+pe,ve.shop.z-1.5+pe,3,3),vg=e}function US(){let n=re("#mm"),e=n.getContext("2d"),t=n.width,i=pe*2,s=t/(i*1.42);e.fillStyle="#1b120d",e.fillRect(0,0,t,t),e.save(),e.translate(t/2,t/2),e.rotate(Math.PI/4),e.scale(s,s),e.imageSmoothingEnabled=!1,e.drawImage(vg,-pe,-pe);let r=(o,a,c)=>{e.fillStyle=a,e.beginPath(),e.arc(o.x,o.z,c/s,0,7),e.fill()};for(let o of oi)o.state!=="dead"&&r(o.pos,"#d34cff",2.2);for(let o of Hs)r(o.pos,"#ffd35a",2.4);for(let o of C.dogs){let a=Ot.get(o.uid);a&&a.actor.root.visible&&r(a.pos,"#5fc3ff",2)}r(K.pos,"#ff3b2f",3.2),e.restore(),re("#mmcoord").textContent=`(${Math.round(K.pos.x/2)},${Math.round(-K.pos.z/2)})`}function OS(){let n=null,e=99;for(let t of ls.interact){let i=t.pos.distanceTo(K.pos);i<t.r&&i<e&&(e=i,n=t)}if(n!==Pi){Pi=n;let t=re("#btn-context");n?(t.classList.remove("hidden"),t.textContent={bowl:`Dar de comer (${ud(Nt())} Dogs)`,shop:"Abrir tienda",capitan:"Hablar",kennel:"Ver criadero",vet:"Veterinario",fence:"Mirar el alambrado"}[n.id]):t.classList.add("hidden")}}var bg=!1,pd=!1;function kS(){let n=Wo();return n.h>n.w+20}function FS(){return pd||Ln?!1:Uc()}function Vs(){let n=FS();document.body.classList.toggle("need-rotate",n);let e=re("#rotate");e&&e.classList.toggle("hidden",!n)}function Hr(){if(Ln)return!1;try{let n=screen.orientation;if(n&&typeof n.lock=="function"){let e=n.lock("landscape");return e&&typeof e.catch=="function"&&e.catch(()=>{}),!0}}catch{}return!1}function BS(){bg=!0,Hr()}function Fc(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}async function md(){try{if(Fc()){let n=document.exitFullscreen||document.webkitExitFullscreen;n&&await n.call(document)}else{let n=document.documentElement,e=n.requestFullscreen||n.webkitRequestFullscreen||n.webkitRequestFullScreen;e&&await e.call(n)}}catch{}Hr(),td(),setTimeout(Wt,80)}function td(){let n=Fc(),e=re("#btn-fs");if(e){let i=e.querySelector(".ic"),s=e.querySelector("small");i&&(i.className="ic "+(n?"i-fs-exit":"i-fs")+" lg"),s&&(s.textContent=n?"Salir":"Pantalla completa"),e.setAttribute("aria-label",n?"Salir de pantalla completa":"Pantalla completa")}let t=re("#m-fs");t&&(t.textContent=n?"Salir":"Entrar")}function gd(n){Ln=!!n,Ln&&(pd=!0),C&&C.settings&&(C.settings.playPortrait=Ln,Je()),Wt()}function Mg(){gd(!0)}function Sg(){pd=!0,Vs()}function zS(){["pointerdown","touchstart","click","keydown"].forEach(t=>{addEventListener(t,BS,{capture:!0,passive:!0})}),document.addEventListener("fullscreenchange",()=>{Hr(),td(),setTimeout(Wt,80)}),document.addEventListener("webkitfullscreenchange",()=>{Hr(),td(),setTimeout(Wt,80)});let n=()=>{bg&&Hr();try{Wt()}catch{}setTimeout(()=>{try{Wt()}catch{}},80),setTimeout(()=>{try{Wt()}catch{}},280)};addEventListener("orientationchange",n),addEventListener("resize",Wt);try{screen.orientation&&screen.orientation.addEventListener&&screen.orientation.addEventListener("change",n)}catch{}window.visualViewport&&(visualViewport.addEventListener("resize",Wt),visualViewport.addEventListener("scroll",Wt)),sn(re("#btn-fs"),()=>md()),sn(re("#btn-portrait-ok"),Mg);let e=re("#btn-rotate-ok");e&&sn(e,Sg),Vs()}var qr=[{text:"\xA1Hola, {criador}! En Dog Zone una plaga convierte a los animales en monstruos. <b>Solo los perros son inmunes.</b> Vas a cuidar a tu perro, {perro}.",btn:"\xA1Dale!",pos:"high"},{text:"Mov\xE9 al criador con el <b>c\xEDrculo de abajo a la izquierda</b> (en la compu: W A S D). Tambi\xE9n pod\xE9s <b>tocar el suelo</b> para ir hasta ah\xED. Si empuj\xE1s el c\xEDrculo hasta el borde, corre.",target:"#joy",wait:"moved",pos:"high"},{text:'Esta barra es el <b>hambre</b> de {perro}. \xA1Est\xE1 bajando! And\xE1 al <b>comedero rojo</b> y toc\xE1 "Dar de comer".',target:()=>ve.bowl,also:".meter.hunger",wait:"feed"},{text:"Ahora habl\xE1 con el <b>Capit\xE1n Iriarte</b>, el del signo <b>!</b> amarillo.",target:()=>ve.questNpc,wait:"talk"},{text:"Toc\xE1 <b>Misi\xF3n</b> y mand\xE1 a {perro} al basural. Vuelve solo, \xA1con Dogs!",target:"#btn-mission",wait:"mission_sent",pos:"high"},{text:"Arriba a la derecha ves tus <b>Dogs</b> (la moneda com\xFAn, la gan\xE1s jugando). Con ellos compr\xE1s comida y perros en la <b>Tienda</b>. Las <b>PDogs</b> son la moneda valiosa y solo sirven para cosm\xE9tica.",target:"#coins",btn:"Entendido",pos:"high"},{text:"Al norte, detr\xE1s del alambrado, est\xE1 la <b>Zona Infectada</b>. Tu perro pelea solo; vos ayud\xE1s con <b>\xA1Atacar!</b>. Los monstruos no salen de su zona.",target:"#btn-attack",btn:"\xA1A jugar!",pos:"high"}],nd=null;function _d(){if(C.tut>=qr.length){re("#tut").classList.add("hidden"),Vs();return}let n=qr[C.tut];re("#tut").classList.remove("hidden"),re("#tuttext").innerHTML=Fs(n.text),re("#tutnext").style.display=n.btn?"":"none",re("#tutnext").textContent=n.btn||"",re("#tutcard").className="panel "+(n.pos||"low"),re(".tutdog").style.backgroundImage=`url("${jm(Nt())}")`,nd=typeof n.target=="function"?n.target:null,wg(),Vs()}function wg(){if(re("#tut").classList.contains("hidden"))return;let n=qr[C.tut];if(!n)return;let e=re("#tutarrow"),t=re("#tutring"),i=null,s=70;if(typeof n.target=="string"){let r=re(n.target);if(r){let o=r.getBoundingClientRect(),a=Bs((o.left+o.right)/2,(o.top+o.bottom)/2),c=Bs(o.left,o.top),l=Bs(o.right,o.bottom);i=a,s=Math.max(Math.abs(l.x-c.x),Math.abs(l.y-c.y))+16}}else nd&&(i=Gr(nd(),.4),s=80);if(!i){e.style.display=t.style.display="none";return}e.style.display=t.style.display="block",e.style.left=i.x+"px",e.style.top=i.y-s/2-4+"px",t.style.left=i.x+"px",t.style.top=i.y+"px",t.style.width=t.style.height=s+"px"}function Eg(){C.tut++,Je(),_d()}function Xr(n){let e=qr[C.tut];e&&e.wait===n&&setTimeout(Eg,400)}sn(re("#tutnext"),Eg);sn(re("#tutskip"),()=>{C.tut=qr.length,Je(),re("#tut").classList.add("hidden")});function HS(){let n=me(),e=Qu(C.lastTick,n);if(e.rewind)return;let t=Math.min((e.dt||n-(C.lastTick||n))/1e3,3*86400),i=[];for(let s of C.dogs){if(s.hunger=Math.max(0,s.hunger-At.hungerPerSec*t),s.mission&&n>=s.mission.end&&(i.push(`${s.name} volvi\xF3 de misi\xF3n`),sg(s,!0)),s.activity&&n>=s.activity.end&&(i.push(`${s.name} volvi\xF3 de la actividad`),cg(s,!0)),s.pregnant&&n>=s.pregnant.due){let o=dg(s,!0);o&&i.push(o)}let r=vc(s,n,us());r&&r.text&&i.push(r.text),ut(s).id==="retirado"&&!s.retireNoted&&(s.retireNoted=!0,i.push(`${s.name} se retir\xF3: pod\xE9s hacerle una despedida en el criadero y queda un recuerdo`))}i.length&&setTimeout(()=>be("Mientras no estabas: "+i.join(" \xB7 "),4e3),800)}var Tg=new ic,Pc=0,Wh=0,Ag=60,Bm=0;function VS(){let n=Math.min(Tg.getDelta(),.05);Bm+=n,AS(n),PS(n),LS(n);for(let e of Hs){e.actor.update(n,0,!1);let t=K.pos.x-e.pos.x,i=K.pos.z-e.pos.z;t*t+i*i<16&&(e.actor.root.rotation.y=Eo(e.actor.root.rotation.y,Math.atan2(t,i),4,n))}Vp(ls.animated,Bm),ES(n),ko(n),OS(),Wn.render(qt,Vn),IS+=n,DS(),Gh+=n,Gh>.2&&(Gh=0,US(),mS(),wg()),zh+=n,zh>5&&(zh=0,Je()),Pc+=n,Wh++,Pc>1&&(Ag=Math.round(Wh/Pc),Pc=0,Wh=0)}async function GS(){let n=re("#loadbar"),e=i=>n.style.width=`${Math.round(i*100)}%`;C=jM(),e(.1),oh().catch(()=>{}),await yS(),await YM(),e(.25),rs(C.active)||(C.active=C.dogs[0].uid),Ic(),Wt(),ls=Hp(qt,Oo),e(.4),nn=await aS(e),cS(),lS(),hS(),C.dogs.forEach(i=>Ui(i));let t=Ui(Nt());Nt().mission||(t.mode="follow",t.pos.set(K.pos.x-1,0,K.pos.z-.5)),HS(),NS(),ko(0,!0),e(1),document.addEventListener("visibilitychange",()=>{document.hidden&&Je(),Tg.getDelta()}),addEventListener("pagehide",Je),zS(),setTimeout(async()=>{re("#loading").classList.add("hidden"),re("#hud").classList.remove("hidden");try{await Am()}catch{}qh.has("nosw")&&!qh.has("promptname")?(Rc(C)&&(C.playerName=Do(),Je()),(C.dogs||[]).forEach(s=>{s.pendingName&&(s.pendingName=!1)})):(await Vo(),await $h()),_d()},250),Wn.setAnimationLoop(VS),WS(),window.__dz={get S(){return C},get fps(){return Ag},get drawCalls(){return Wn.info.render.calls},get tris(){return Wn.info.render.triangles},player:K,monsters:oi,dogActors:Ot,world:ls,POI:ve,camera:Vn,input:jt,walk:Gn,VERSION:Fo,tp(i,s){K.pos.set(i,0,s),ko(0,!0);let r=Ot.get(C.active);r&&r.mode==="follow"&&r.pos.set(i-1,0,s-.6)},face(i){K.yaw=i},move(i,s){jt.x=i,jt.y=s,jt.joyActive=!!(i||s),(i||s)&&Bo()},walkTo(i,s){Gn.active=!0,Gn.x=i,Gn.z=s,qn.position.set(i,.05,s),qn.visible=!0},attack:dd,context:hd,openBag:zs,openShop:$o,openMissions:tg,openMenu:Br,talkCaptain:cd,closeModal:rt,buyDog:eg,sendMission:i=>ig(Nt(),Lc.find(s=>s.id===i)),skipTut(){C.tut=qr.length,re("#tut").classList.add("hidden"),Vs()},openBreed:hg,openVet:fg,openLineage:lg,openCredits:rg,openAccount:Wr,openActivities:ag,inspectFence:pg,farewellDog:ug,checkPairQuest:fd,validateName:ti,suggestDogName:Ns,suggestBreederName:Do,suggestAlternative:No,slugForUsername:Ac,fillTemplate:Bh,needsBreederName:Rc,promptBreederName:Vo,renameDog:kc,promptPendingPupNames:$h,planCloudMerge:Nh,summarizeSave:Ds,reconcileOnLogin:Oh,openRestoreBackups:ld,mergeCloudAfterLogin:Oc,canBreed:_c,breedFee:gc,migrateSave:fc,attachWalletAliases:Ro,shopPrice:Ai,applyCombatReward:th,applyMissionReward:nh,credit:Ri,debit:Ci,Ail:Sh,Act:Rh,trialOn:us,currentTimers:zo,blockedFor:Gs,usePotion:xg,finishMissions(){C.dogs.forEach(i=>{if(!i.mission)return;i.mission.end=me();let s=Ot.get(i.uid);s&&(s.mode="mission_back",s.pos.copy(ve.roadStart),s.path=[],s.actor.root.visible=!0)})},ff(i){let s=me()+i*1e3;C.dogs.forEach(r=>{r.hunger=Math.max(0,r.hunger-At.hungerPerSec*i),r.pregnant&&(r.pregnant.due=Math.min(r.pregnant.due,s)),r.activity&&(r.activity.end=Math.min(r.activity.end,s)),r.mission&&(r.mission.end=Math.min(r.mission.end,s)),r.ailment&&r.ailment.until&&(r.ailment.until=Math.min(r.ailment.until,s))})},setTrial(i){C.settings.trialTimers=!!i,Je()},setPixel(i){C.settings.pixel=i,Ic(),Wt()},setQuality(i){C.settings.quality=i,Ic()},tryLockLandscape:Hr,toggleFullscreen:md,isFullscreen:Fc,allowPortraitPlay:Mg,setPlayPortrait:gd,syncOrientation:Vs,isPortrait:kS,resize:Wt,project:Gr,clientToGame:Bs,gameToClient:rS,gameSize:Vr,viewportMetrics:Wo,readMove:Zm,dismissRotateTip:Sg,setInvertY:pS,orientationAngle:Yh,isForcedLandscape:Uc,screenOfPlayer(){return ko(0,!1),Gr(K.pos,1.2)},setCamFollow(i){ed=!!i,ed&&ko(0,!0)},setForcedRotate(i){Zh=i,Wt()},setTestAngle(i){jh=i,Wt()},get playPortrait(){return Ln},get needRotate(){return document.body.classList.contains("need-rotate")},get invertY(){return!!(C&&C.settings&&C.settings.invertY)},get layout(){return{forced:Uc(),landscape:document.body.classList.contains("landscape-layout"),playPortrait:Ln,size:Vr(),viewport:Wo(),rot:ri.rot,angle:Yh(),invertY:!!(C&&C.settings&&C.settings.invertY),stage:{...ri},version:Fo}},ready:!0}}function WS(){if(!("serviceWorker"in navigator)||!location.protocol.startsWith("http")||qh.has("nosw"))return;let n=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{n||(n=!0,location.reload())}),navigator.serviceWorker.register("sw.js").then(e=>{let t=i=>{try{i&&i.postMessage({type:"SKIP_WAITING"})}catch{}};e.waiting&&t(e.waiting),e.addEventListener("updatefound",()=>{let i=e.installing;i&&i.addEventListener("statechange",()=>{i.state==="installed"&&navigator.serviceWorker.controller&&t(i)})})}).catch(()=>{})}GS().catch(n=>{console.error(n),re("#loadtxt").textContent="Error al cargar: "+n.message});
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
