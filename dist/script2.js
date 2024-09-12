var pe=(I,v)=>()=>(v||I((v={exports:{}}).exports,v),v.exports);var be=pe((Ce,P)=>{var P={};(function I(v,T,k,x){var A=!!(v.Worker&&v.Blob&&v.Promise&&v.OffscreenCanvas&&v.OffscreenCanvasRenderingContext2D&&v.HTMLCanvasElement&&v.HTMLCanvasElement.prototype.transferControlToOffscreen&&v.URL&&v.URL.createObjectURL),L=typeof Path2D=="function"&&typeof DOMMatrix=="function",_=function(){if(!v.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var a=r.transferToImageBitmap();try{e.createPattern(a,"no-repeat")}catch{return!1}return!0}();function N(){}function E(r){var e=T.exports.Promise,a=e!==void 0?e:v.Promise;return typeof a=="function"?new a(r):(r(N,N),null)}var F=function(r,e){return{transform:function(a){if(r)return a;if(e.has(a))return e.get(a);var t=new OffscreenCanvas(a.width,a.height),o=t.getContext("2d");return o.drawImage(a,0,0),e.set(a,t),t},clear:function(){e.clear()}}}(_,new Map),S=function(){var r=Math.floor(16.666666666666668),e,a,t={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var l=Math.random();return t[l]=requestAnimationFrame(function n(s){o===s||o+r-1<s?(o=s,delete t[l],i()):t[l]=requestAnimationFrame(n)}),l},a=function(i){t[i]&&cancelAnimationFrame(t[i])}):(e=function(i){return setTimeout(i,r)},a=function(i){return clearTimeout(i)}),{frame:e,cancel:a}}(),q=function(){var r,e,a={};function t(o){function i(l,n){o.postMessage({options:l||{},callback:n})}o.init=function(n){var s=n.transferControlToOffscreen();o.postMessage({canvas:s},[s])},o.fire=function(n,s,u){if(e)return i(n,null),e;var d=Math.random().toString(36).slice(2);return e=E(function(h){function f(g){g.data.callback===d&&(delete a[d],o.removeEventListener("message",f),e=null,F.clear(),u(),h())}o.addEventListener("message",f),i(n,d),a[d]=f.bind(null,{data:{callback:d}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var n in a)a[n](),delete a[n]}}return function(){if(r)return r;if(!k&&A){var o=["var CONFETTI, SIZE = {}, module = {};","("+I.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}t(r)}return r}}(),H={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function G(r,e){return e?e(r):r}function J(r){return r!=null}function m(r,e,a){return G(r&&J(r[e])?r[e]:H[e],a)}function K(r){return r<0?0:Math.floor(r)}function Q(r,e){return Math.floor(Math.random()*(e-r))+r}function O(r){return parseInt(r,16)}function $(r){return r.map(X)}function X(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:O(e.substring(0,2)),g:O(e.substring(2,4)),b:O(e.substring(4,6))}}function Y(r){var e=m(r,"origin",Object);return e.x=m(e,"x",Number),e.y=m(e,"y",Number),e}function ee(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function re(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ae(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function ne(r,e,a,t,o,i,l,n,s){r.save(),r.translate(e,a),r.rotate(i),r.scale(t,o),r.arc(0,0,1,l,n,s),r.restore()}function te(r){var e=r.angle*(Math.PI/180),a=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function oe(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,t=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",r.beginPath(),L&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(le(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(i-t)*.1,Math.abs(l-o)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var n=Math.PI/10*e.wobble,s=Math.abs(i-t)*.1,u=Math.abs(l-o)*.1,d=e.shape.bitmap.width*e.scalar,h=e.shape.bitmap.height*e.scalar,f=new DOMMatrix([Math.cos(n)*s,Math.sin(n)*s,-Math.sin(n)*u,Math.cos(n)*u,e.x,e.y]);f.multiplySelf(new DOMMatrix(e.shape.matrix));var g=r.createPattern(F.transform(e.shape.bitmap),"no-repeat");g.setTransform(f),r.globalAlpha=1-a,r.fillStyle=g,r.fillRect(e.x-d/2,e.y-h/2,d,h),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):ne(r,e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var c=Math.PI/2*3,M=4*e.scalar,p=8*e.scalar,y=e.x,w=e.y,C=5,b=Math.PI/C;C--;)y=e.x+Math.cos(c)*p,w=e.y+Math.sin(c)*p,r.lineTo(y,w),c+=b,y=e.x+Math.cos(c)*M,w=e.y+Math.sin(c)*M,r.lineTo(y,w),c+=b;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(o)),r.lineTo(Math.floor(i),Math.floor(l)),r.lineTo(Math.floor(t),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function ie(r,e,a,t,o){var i=e.slice(),l=r.getContext("2d"),n,s,u=E(function(d){function h(){n=s=null,l.clearRect(0,0,t.width,t.height),F.clear(),o(),d()}function f(){k&&!(t.width===x.width&&t.height===x.height)&&(t.width=r.width=x.width,t.height=r.height=x.height),!t.width&&!t.height&&(a(r),t.width=r.width,t.height=r.height),l.clearRect(0,0,t.width,t.height),i=i.filter(function(g){return oe(l,g)}),i.length?n=S.frame(f):h()}n=S.frame(f),s=h});return{addFettis:function(d){return i=i.concat(d),u},canvas:r,promise:u,reset:function(){n&&S.cancel(n),s&&s()}}}function W(r,e){var a=!r,t=!!m(e||{},"resize"),o=!1,i=m(e,"disableForReducedMotion",Boolean),l=A&&!!m(e||{},"useWorker"),n=l?q():null,s=a?ee:re,u=r&&n?!!r.__confetti_initialized:!1,d=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,h;function f(c,M,p){for(var y=m(c,"particleCount",K),w=m(c,"angle",Number),C=m(c,"spread",Number),b=m(c,"startVelocity",Number),ue=m(c,"decay",Number),he=m(c,"gravity",Number),de=m(c,"drift",Number),z=m(c,"colors",$),fe=m(c,"ticks",Number),D=m(c,"shapes"),ve=m(c,"scalar"),me=!!m(c,"flat"),U=Y(c),V=y,B=[],ge=r.width*U.x,Me=r.height*U.y;V--;)B.push(te({x:ge,y:Me,angle:w,spread:C,startVelocity:b,color:z[V%z.length],shape:D[Q(0,D.length)],ticks:fe,decay:ue,gravity:he,drift:de,scalar:ve,flat:me}));return h?h.addFettis(B):(h=ie(r,B,s,M,p),h.promise)}function g(c){var M=i||m(c,"disableForReducedMotion",Boolean),p=m(c,"zIndex",Number);if(M&&d)return E(function(b){b()});a&&h?r=h.canvas:a&&!r&&(r=ae(p),document.body.appendChild(r)),t&&!u&&s(r);var y={width:r.width,height:r.height};n&&!u&&n.init(r),u=!0,n&&(r.__confetti_initialized=!0);function w(){if(n){var b={getBoundingClientRect:function(){if(!a)return r.getBoundingClientRect()}};s(b),n.postMessage({resize:{width:b.width,height:b.height}});return}y.width=y.height=null}function C(){h=null,t&&(o=!1,v.removeEventListener("resize",w)),a&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,u=!1)}return t&&!o&&(o=!0,v.addEventListener("resize",w,!1)),n?n.fire(c,y,C):f(c,y,C)}return g.reset=function(){n&&n.reset(),h&&h.reset()},g}var R;function j(){return R||(R=W(null,{useWorker:!0,resize:!0})),R}function le(r,e,a,t,o,i,l){var n=new Path2D(r),s=new Path2D;s.addPath(n,new DOMMatrix(e));var u=new Path2D;return u.addPath(s,new DOMMatrix([Math.cos(l)*o,Math.sin(l)*o,-Math.sin(l)*i,Math.cos(l)*i,a,t])),u}function se(r){if(!L)throw new Error("path confetti are not supported in this browser");var e,a;typeof r=="string"?e=r:(e=r.path,a=r.matrix);var t=new Path2D(e),o=document.createElement("canvas"),i=o.getContext("2d");if(!a){for(var l=1e3,n=l,s=l,u=0,d=0,h,f,g=0;g<l;g+=2)for(var c=0;c<l;c+=2)i.isPointInPath(t,g,c,"nonzero")&&(n=Math.min(n,g),s=Math.min(s,c),u=Math.max(u,g),d=Math.max(d,c));h=u-n,f=d-s;var M=10,p=Math.min(M/h,M/f);a=[p,0,0,p,-Math.round(h/2+n)*p,-Math.round(f/2+s)*p]}return{type:"path",path:e,matrix:a}}function ce(r){var e,a=1,t="#000000",o='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,a="scalar"in r?r.scalar:a,o="fontFamily"in r?r.fontFamily:o,t="color"in r?r.color:t);var i=10*a,l=""+i+"px "+o,n=new OffscreenCanvas(i,i),s=n.getContext("2d");s.font=l;var u=s.measureText(e),d=Math.ceil(u.actualBoundingBoxRight+u.actualBoundingBoxLeft),h=Math.ceil(u.actualBoundingBoxAscent+u.actualBoundingBoxDescent),f=2,g=u.actualBoundingBoxLeft+f,c=u.actualBoundingBoxAscent+f;d+=f+f,h+=f+f,n=new OffscreenCanvas(d,h),s=n.getContext("2d"),s.font=l,s.fillStyle=t,s.fillText(e,g,c);var M=1/a;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[M,0,0,M,-d*M/2,-h*M/2]}}T.exports=function(){return j().apply(this,arguments)},T.exports.reset=function(){j().reset()},T.exports.create=W,T.exports.shapeFromPath=se,T.exports.shapeFromText=ce})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),P,!1);const ye=P.exports;P.exports.create;var Z=document.createElement("canvas");document.body.appendChild(Z);chrome.runtime.onMessage.addListener(I=>{if(I.message==="correct"){console.log("confetti msg mil gya");var v=ye.create(Z,{resize:!0,useWorker:!0});v({particleCount:100,spread:160})}})});export default be();