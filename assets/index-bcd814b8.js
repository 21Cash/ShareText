function sy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kp={exports:{}},vl={},xp={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),ly=Symbol.for("react.portal"),ay=Symbol.for("react.fragment"),uy=Symbol.for("react.strict_mode"),cy=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),hy=Symbol.for("react.context"),fy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),my=Symbol.for("react.memo"),gy=Symbol.for("react.lazy"),th=Symbol.iterator;function _y(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var Pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rp=Object.assign,Np={};function Qr(t,e,n){this.props=t,this.context=e,this.refs=Np,this.updater=n||Pp}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ap(){}Ap.prototype=Qr.prototype;function sc(t,e,n){this.props=t,this.context=e,this.refs=Np,this.updater=n||Pp}var oc=sc.prototype=new Ap;oc.constructor=sc;Rp(oc,Qr.prototype);oc.isPureReactComponent=!0;var nh=Array.isArray,Op=Object.prototype.hasOwnProperty,lc={current:null},Dp={key:!0,ref:!0,__self:!0,__source:!0};function Lp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Op.call(e,r)&&!Dp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Es,type:t,key:s,ref:o,props:i,_owner:lc.current}}function vy(t,e){return{$$typeof:Es,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ac(t){return typeof t=="object"&&t!==null&&t.$$typeof===Es}function yy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rh=/\/+/g;function ta(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yy(""+t.key):e.toString(36)}function oo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Es:case ly:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ta(o,0):r,nh(i)?(n="",t!=null&&(n=t.replace(rh,"$&/")+"/"),oo(i,e,n,"",function(u){return u})):i!=null&&(ac(i)&&(i=vy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",nh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ta(s,l);o+=oo(s,e,n,a,i)}else if(a=_y(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ta(s,l++),o+=oo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bs(t,e,n){if(t==null)return t;var r=[],i=0;return oo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Re={current:null},lo={transition:null},Ey={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:lo,ReactCurrentOwner:lc};j.Children={map:Bs,forEach:function(t,e,n){Bs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bs(t,function(){e++}),e},toArray:function(t){return Bs(t,function(e){return e})||[]},only:function(t){if(!ac(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=Qr;j.Fragment=ay;j.Profiler=cy;j.PureComponent=sc;j.StrictMode=uy;j.Suspense=py;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Rp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Op.call(e,a)&&!Dp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Es,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:hy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dy,_context:t},t.Consumer=t};j.createElement=Lp;j.createFactory=function(t){var e=Lp.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:fy,render:t}};j.isValidElement=ac;j.lazy=function(t){return{$$typeof:gy,_payload:{_status:-1,_result:t},_init:wy}};j.memo=function(t,e){return{$$typeof:my,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=lo.transition;lo.transition={};try{t()}finally{lo.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return Re.current.useCallback(t,e)};j.useContext=function(t){return Re.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Re.current.useDeferredValue(t)};j.useEffect=function(t,e){return Re.current.useEffect(t,e)};j.useId=function(){return Re.current.useId()};j.useImperativeHandle=function(t,e,n){return Re.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Re.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Re.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Re.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Re.current.useReducer(t,e,n)};j.useRef=function(t){return Re.current.useRef(t)};j.useState=function(t){return Re.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Re.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Re.current.useTransition()};j.version="18.2.0";xp.exports=j;var C=xp.exports;const Cy=oy(C),Sy=sy({__proto__:null,default:Cy},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=C,Ty=Symbol.for("react.element"),ky=Symbol.for("react.fragment"),xy=Object.prototype.hasOwnProperty,Py=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ry={key:!0,ref:!0,__self:!0,__source:!0};function Mp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xy.call(e,r)&&!Ry.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ty,type:t,key:s,ref:o,props:i,_owner:Py.current}}vl.Fragment=ky;vl.jsx=Mp;vl.jsxs=Mp;kp.exports=vl;var w=kp.exports,Va={},bp={exports:{}},$e={},Fp={exports:{}},Up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,D){var L=x.length;x.push(D);e:for(;0<L;){var re=L-1>>>1,de=x[re];if(0<i(de,D))x[re]=D,x[L]=de,L=re;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var D=x[0],L=x.pop();if(L!==D){x[0]=L;e:for(var re=0,de=x.length,Us=de>>>1;re<Us;){var An=2*(re+1)-1,ea=x[An],On=An+1,js=x[On];if(0>i(ea,L))On<de&&0>i(js,ea)?(x[re]=js,x[On]=L,re=On):(x[re]=ea,x[An]=L,re=An);else if(On<de&&0>i(js,L))x[re]=js,x[On]=L,re=On;else break e}}return D}function i(x,D){var L=x.sortIndex-D.sortIndex;return L!==0?L:x.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,_=!1,g=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=x)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function y(x){if(v=!1,m(x),!g)if(n(a)!==null)g=!0,Jl(I);else{var D=n(u);D!==null&&Zl(y,D.startTime-x)}}function I(x,D){g=!1,v&&(v=!1,p(N),N=-1),_=!0;var L=h;try{for(m(D),d=n(a);d!==null&&(!(d.expirationTime>D)||x&&!Ze());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var de=re(d.expirationTime<=D);D=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(a)&&r(a),m(D)}else r(a);d=n(a)}if(d!==null)var Us=!0;else{var An=n(u);An!==null&&Zl(y,An.startTime-D),Us=!1}return Us}finally{d=null,h=L,_=!1}}var P=!1,R=null,N=-1,K=5,F=-1;function Ze(){return!(t.unstable_now()-F<K)}function ui(){if(R!==null){var x=t.unstable_now();F=x;var D=!0;try{D=R(!0,x)}finally{D?ci():(P=!1,R=null)}}else P=!1}var ci;if(typeof f=="function")ci=function(){f(ui)};else if(typeof MessageChannel<"u"){var eh=new MessageChannel,iy=eh.port2;eh.port1.onmessage=ui,ci=function(){iy.postMessage(null)}}else ci=function(){T(ui,0)};function Jl(x){R=x,P||(P=!0,ci())}function Zl(x,D){N=T(function(){x(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){g||_||(g=!0,Jl(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(x){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return x()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,D){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=h;h=x;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(x,D,L){var re=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?re+L:re):L=re,x){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=L+de,x={id:c++,callback:D,priorityLevel:x,startTime:L,expirationTime:de,sortIndex:-1},L>re?(x.sortIndex=L,e(u,x),n(a)===null&&x===n(u)&&(v?(p(N),N=-1):v=!0,Zl(y,L-re))):(x.sortIndex=de,e(a,x),g||_||(g=!0,Jl(I))),x},t.unstable_shouldYield=Ze,t.unstable_wrapCallback=function(x){var D=h;return function(){var L=h;h=D;try{return x.apply(this,arguments)}finally{h=L}}}})(Up);Fp.exports=Up;var Ny=Fp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=C,Ve=Ny;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,Vi={};function sr(t,e){br(t,e),br(t+"Capture",e)}function br(t,e){for(Vi[t]=e,t=0;t<e.length;t++)Bp.add(e[t])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$a=Object.prototype.hasOwnProperty,Ay=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},sh={};function Oy(t){return $a.call(sh,t)?!0:$a.call(ih,t)?!1:Ay.test(t)?sh[t]=!0:(ih[t]=!0,!1)}function Dy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ly(t,e,n,r){if(e===null||typeof e>"u"||Dy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ne(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Ne(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Ne(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Ne(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Ne(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Ne(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Ne(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Ne(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Ne(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Ne(t,5,!1,t.toLowerCase(),null,!1,!1)});var uc=/[\-:]([a-z])/g;function cc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uc,cc);ye[e]=new Ne(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uc,cc);ye[e]=new Ne(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uc,cc);ye[e]=new Ne(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Ne(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Ne(t,1,!1,t.toLowerCase(),null,!0,!0)});function dc(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ly(e,n,i,r)&&(n=null),r||i===null?Oy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zs=Symbol.for("react.element"),dr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),Ha=Symbol.for("react.profiler"),zp=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),pc=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),oh=Symbol.iterator;function di(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,na;function Si(t){if(na===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);na=e&&e[1]||""}return`
`+na+t}var ra=!1;function ia(t,e){if(!t||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Si(t):""}function My(t){switch(t.tag){case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return t=ia(t.type,!1),t;case 11:return t=ia(t.type.render,!1),t;case 1:return t=ia(t.type,!0),t;default:return""}}function qa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case dr:return"Portal";case Ha:return"Profiler";case hc:return"StrictMode";case Ga:return"Suspense";case Ka:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wp:return(t.displayName||"Context")+".Consumer";case zp:return(t._context.displayName||"Context")+".Provider";case fc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pc:return e=t.displayName||null,e!==null?e:qa(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return qa(t(e))}catch{}}return null}function by(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qa(e);case 8:return e===hc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _n(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fy(t){var e=$p(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ws(t){t._valueTracker||(t._valueTracker=Fy(t))}function Hp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$p(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function So(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qa(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_n(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gp(t,e){e=e.checked,e!=null&&dc(t,"checked",e,!1)}function Ya(t,e){Gp(t,e);var n=_n(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xa(t,e.type,_n(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ah(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xa(t,e,n){(e!=="number"||So(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ii=Array.isArray;function kr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_n(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ja(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ii(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_n(n)}}function Kp(t,e){var n=_n(e.value),r=_n(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,Qp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $i(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uy=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(t){Uy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ri[e]=Ri[t]})});function Yp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ri.hasOwnProperty(t)&&Ri[t]?(""+e).trim():e+"px"}function Xp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jy=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eu(t,e){if(e){if(jy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function tu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nu=null;function mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ru=null,xr=null,Pr=null;function dh(t){if(t=Is(t)){if(typeof ru!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Sl(e),ru(t.stateNode,t.type,e))}}function Jp(t){xr?Pr?Pr.push(t):Pr=[t]:xr=t}function Zp(){if(xr){var t=xr,e=Pr;if(Pr=xr=null,dh(t),e)for(t=0;t<e.length;t++)dh(e[t])}}function em(t,e){return t(e)}function tm(){}var sa=!1;function nm(t,e,n){if(sa)return t(e,n);sa=!0;try{return em(t,e,n)}finally{sa=!1,(xr!==null||Pr!==null)&&(tm(),Zp())}}function Hi(t,e){var n=t.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var iu=!1;if(Dt)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){iu=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{iu=!1}function By(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ni=!1,Io=null,To=!1,su=null,zy={onError:function(t){Ni=!0,Io=t}};function Wy(t,e,n,r,i,s,o,l,a){Ni=!1,Io=null,By.apply(zy,arguments)}function Vy(t,e,n,r,i,s,o,l,a){if(Wy.apply(this,arguments),Ni){if(Ni){var u=Io;Ni=!1,Io=null}else throw Error(E(198));To||(To=!0,su=u)}}function or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hh(t){if(or(t)!==t)throw Error(E(188))}function $y(t){var e=t.alternate;if(!e){if(e=or(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hh(i),t;if(s===r)return hh(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function im(t){return t=$y(t),t!==null?sm(t):null}function sm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sm(t);if(e!==null)return e;t=t.sibling}return null}var om=Ve.unstable_scheduleCallback,fh=Ve.unstable_cancelCallback,Hy=Ve.unstable_shouldYield,Gy=Ve.unstable_requestPaint,ie=Ve.unstable_now,Ky=Ve.unstable_getCurrentPriorityLevel,gc=Ve.unstable_ImmediatePriority,lm=Ve.unstable_UserBlockingPriority,ko=Ve.unstable_NormalPriority,qy=Ve.unstable_LowPriority,am=Ve.unstable_IdlePriority,yl=null,gt=null;function Qy(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Jy,Yy=Math.log,Xy=Math.LN2;function Jy(t){return t>>>=0,t===0?32:31-(Yy(t)/Xy|0)|0}var $s=64,Hs=4194304;function Ti(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ti(l):(s&=o,s!==0&&(r=Ti(s)))}else o=n&~i,o!==0?r=Ti(o):s!==0&&(r=Ti(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-at(e),i=1<<n,r|=t[n],e&=~i;return r}function Zy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-at(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Zy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function um(){var t=$s;return $s<<=1,!($s&4194240)&&($s=64),t}function oa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-at(e),t[e]=n}function t0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-at(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function _c(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-at(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function cm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dm,vc,hm,fm,pm,lu=!1,Gs=[],nn=null,rn=null,sn=null,Gi=new Map,Ki=new Map,Kt=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(t,e){switch(t){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Gi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ki.delete(e.pointerId)}}function fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Is(e),e!==null&&vc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function r0(t,e,n,r,i){switch(e){case"focusin":return nn=fi(nn,t,e,n,r,i),!0;case"dragenter":return rn=fi(rn,t,e,n,r,i),!0;case"mouseover":return sn=fi(sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,fi(Gi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ki.set(s,fi(Ki.get(s)||null,t,e,n,r,i)),!0}return!1}function mm(t){var e=Fn(t.target);if(e!==null){var n=or(e);if(n!==null){if(e=n.tag,e===13){if(e=rm(n),e!==null){t.blockedOn=e,pm(t.priority,function(){hm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=au(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nu=r,n.target.dispatchEvent(r),nu=null}else return e=Is(n),e!==null&&vc(e),t.blockedOn=n,!1;e.shift()}return!0}function mh(t,e,n){ao(t)&&n.delete(e)}function i0(){lu=!1,nn!==null&&ao(nn)&&(nn=null),rn!==null&&ao(rn)&&(rn=null),sn!==null&&ao(sn)&&(sn=null),Gi.forEach(mh),Ki.forEach(mh)}function pi(t,e){t.blockedOn===e&&(t.blockedOn=null,lu||(lu=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,i0)))}function qi(t){function e(i){return pi(i,t)}if(0<Gs.length){pi(Gs[0],t);for(var n=1;n<Gs.length;n++){var r=Gs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nn!==null&&pi(nn,t),rn!==null&&pi(rn,t),sn!==null&&pi(sn,t),Gi.forEach(e),Ki.forEach(e),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)mm(n),n.blockedOn===null&&Kt.shift()}var Rr=jt.ReactCurrentBatchConfig,Po=!0;function s0(t,e,n,r){var i=W,s=Rr.transition;Rr.transition=null;try{W=1,yc(t,e,n,r)}finally{W=i,Rr.transition=s}}function o0(t,e,n,r){var i=W,s=Rr.transition;Rr.transition=null;try{W=4,yc(t,e,n,r)}finally{W=i,Rr.transition=s}}function yc(t,e,n,r){if(Po){var i=au(t,e,n,r);if(i===null)ga(t,e,r,Ro,n),ph(t,r);else if(r0(i,t,e,n,r))r.stopPropagation();else if(ph(t,r),e&4&&-1<n0.indexOf(t)){for(;i!==null;){var s=Is(i);if(s!==null&&dm(s),s=au(t,e,n,r),s===null&&ga(t,e,r,Ro,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ga(t,e,r,null,n)}}var Ro=null;function au(t,e,n,r){if(Ro=null,t=mc(r),t=Fn(t),t!==null)if(e=or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ro=t,null}function gm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ky()){case gc:return 1;case lm:return 4;case ko:case qy:return 16;case am:return 536870912;default:return 16}default:return 16}}var Zt=null,wc=null,uo=null;function _m(){if(uo)return uo;var t,e=wc,n=e.length,r,i="value"in Zt?Zt.value:Zt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uo=i.slice(t,1<r?1-r:void 0)}function co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ks(){return!0}function gh(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ks:gh,this.isPropagationStopped=gh,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=He(Yr),Ss=te({},Yr,{view:0,detail:0}),l0=He(Ss),la,aa,mi,wl=te({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mi&&(mi&&t.type==="mousemove"?(la=t.screenX-mi.screenX,aa=t.screenY-mi.screenY):aa=la=0,mi=t),la)},movementY:function(t){return"movementY"in t?t.movementY:aa}}),_h=He(wl),a0=te({},wl,{dataTransfer:0}),u0=He(a0),c0=te({},Ss,{relatedTarget:0}),ua=He(c0),d0=te({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=He(d0),f0=te({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p0=He(f0),m0=te({},Yr,{data:0}),vh=He(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v0[t])?!!e[t]:!1}function Cc(){return y0}var w0=te({},Ss,{key:function(t){if(t.key){var e=g0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E0=He(w0),C0=te({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yh=He(C0),S0=te({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),I0=He(S0),T0=te({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=He(T0),x0=te({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P0=He(x0),R0=[9,13,27,32],Sc=Dt&&"CompositionEvent"in window,Ai=null;Dt&&"documentMode"in document&&(Ai=document.documentMode);var N0=Dt&&"TextEvent"in window&&!Ai,vm=Dt&&(!Sc||Ai&&8<Ai&&11>=Ai),wh=String.fromCharCode(32),Eh=!1;function ym(t,e){switch(t){case"keyup":return R0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function A0(t,e){switch(t){case"compositionend":return wm(e);case"keypress":return e.which!==32?null:(Eh=!0,wh);case"textInput":return t=e.data,t===wh&&Eh?null:t;default:return null}}function O0(t,e){if(fr)return t==="compositionend"||!Sc&&ym(t,e)?(t=_m(),uo=wc=Zt=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vm&&e.locale!=="ko"?null:e.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!D0[t.type]:e==="textarea"}function Em(t,e,n,r){Jp(r),e=No(e,"onChange"),0<e.length&&(n=new Ec("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Oi=null,Qi=null;function L0(t){Om(t,0)}function El(t){var e=gr(t);if(Hp(e))return t}function M0(t,e){if(t==="change")return e}var Cm=!1;if(Dt){var ca;if(Dt){var da="oninput"in document;if(!da){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),da=typeof Sh.oninput=="function"}ca=da}else ca=!1;Cm=ca&&(!document.documentMode||9<document.documentMode)}function Ih(){Oi&&(Oi.detachEvent("onpropertychange",Sm),Qi=Oi=null)}function Sm(t){if(t.propertyName==="value"&&El(Qi)){var e=[];Em(e,Qi,t,mc(t)),nm(L0,e)}}function b0(t,e,n){t==="focusin"?(Ih(),Oi=e,Qi=n,Oi.attachEvent("onpropertychange",Sm)):t==="focusout"&&Ih()}function F0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(Qi)}function U0(t,e){if(t==="click")return El(e)}function j0(t,e){if(t==="input"||t==="change")return El(e)}function B0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dt=typeof Object.is=="function"?Object.is:B0;function Yi(t,e){if(dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$a.call(e,i)||!dt(t[i],e[i]))return!1}return!0}function Th(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kh(t,e){var n=Th(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Th(n)}}function Im(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Im(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tm(){for(var t=window,e=So();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=So(t.document)}return e}function Ic(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function z0(t){var e=Tm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Im(n.ownerDocument.documentElement,n)){if(r!==null&&Ic(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kh(n,s);var o=kh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W0=Dt&&"documentMode"in document&&11>=document.documentMode,pr=null,uu=null,Di=null,cu=!1;function xh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cu||pr==null||pr!==So(r)||(r=pr,"selectionStart"in r&&Ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Yi(Di,r)||(Di=r,r=No(uu,"onSelect"),0<r.length&&(e=new Ec("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pr)))}function qs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},ha={},km={};Dt&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Cl(t){if(ha[t])return ha[t];if(!mr[t])return t;var e=mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in km)return ha[t]=e[n];return t}var xm=Cl("animationend"),Pm=Cl("animationiteration"),Rm=Cl("animationstart"),Nm=Cl("transitionend"),Am=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,e){Am.set(t,e),sr(e,[t])}for(var fa=0;fa<Ph.length;fa++){var pa=Ph[fa],V0=pa.toLowerCase(),$0=pa[0].toUpperCase()+pa.slice(1);In(V0,"on"+$0)}In(xm,"onAnimationEnd");In(Pm,"onAnimationIteration");In(Rm,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Nm,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Rh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Vy(r,e,void 0,t),t.currentTarget=null}function Om(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Rh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Rh(i,l,u),s=a}}}if(To)throw t=su,To=!1,su=null,t}function q(t,e){var n=e[mu];n===void 0&&(n=e[mu]=new Set);var r=t+"__bubble";n.has(r)||(Dm(e,t,2,!1),n.add(r))}function ma(t,e,n){var r=0;e&&(r|=4),Dm(n,t,r,e)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[Qs]){t[Qs]=!0,Bp.forEach(function(n){n!=="selectionchange"&&(H0.has(n)||ma(n,!1,t),ma(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qs]||(e[Qs]=!0,ma("selectionchange",!1,e))}}function Dm(t,e,n,r){switch(gm(e)){case 1:var i=s0;break;case 4:i=o0;break;default:i=yc}n=i.bind(null,e,n,t),i=void 0,!iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ga(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}nm(function(){var u=s,c=mc(n),d=[];e:{var h=Am.get(t);if(h!==void 0){var _=Ec,g=t;switch(t){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":_=E0;break;case"focusin":g="focus",_=ua;break;case"focusout":g="blur",_=ua;break;case"beforeblur":case"afterblur":_=ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=I0;break;case xm:case Pm:case Rm:_=h0;break;case Nm:_=k0;break;case"scroll":_=l0;break;case"wheel":_=P0;break;case"copy":case"cut":case"paste":_=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=yh}var v=(e&4)!==0,T=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Hi(f,p),y!=null&&v.push(Ji(f,y,m)))),T)break;f=f.return}0<v.length&&(h=new _(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==nu&&(g=n.relatedTarget||n.fromElement)&&(Fn(g)||g[Lt]))break e;if((_||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,_?(g=n.relatedTarget||n.toElement,_=u,g=g?Fn(g):null,g!==null&&(T=or(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(_=null,g=u),_!==g)){if(v=_h,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=yh,y="onPointerLeave",p="onPointerEnter",f="pointer"),T=_==null?h:gr(_),m=g==null?h:gr(g),h=new v(y,f+"leave",_,n,c),h.target=T,h.relatedTarget=m,y=null,Fn(c)===u&&(v=new v(p,f+"enter",g,n,c),v.target=m,v.relatedTarget=T,y=v),T=y,_&&g)t:{for(v=_,p=g,f=0,m=v;m;m=ur(m))f++;for(m=0,y=p;y;y=ur(y))m++;for(;0<f-m;)v=ur(v),f--;for(;0<m-f;)p=ur(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=ur(v),p=ur(p)}v=null}else v=null;_!==null&&Nh(d,h,_,v,!1),g!==null&&T!==null&&Nh(d,T,g,v,!0)}}e:{if(h=u?gr(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var I=M0;else if(Ch(h))if(Cm)I=j0;else{I=F0;var P=b0}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=U0);if(I&&(I=I(t,u))){Em(d,I,n,c);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Xa(h,"number",h.value)}switch(P=u?gr(u):window,t){case"focusin":(Ch(P)||P.contentEditable==="true")&&(pr=P,uu=u,Di=null);break;case"focusout":Di=uu=pr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,xh(d,n,c);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":xh(d,n,c)}var R;if(Sc)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else fr?ym(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(vm&&n.locale!=="ko"&&(fr||N!=="onCompositionStart"?N==="onCompositionEnd"&&fr&&(R=_m()):(Zt=c,wc="value"in Zt?Zt.value:Zt.textContent,fr=!0)),P=No(u,N),0<P.length&&(N=new vh(N,t,null,n,c),d.push({event:N,listeners:P}),R?N.data=R:(R=wm(n),R!==null&&(N.data=R)))),(R=N0?A0(t,n):O0(t,n))&&(u=No(u,"onBeforeInput"),0<u.length&&(c=new vh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}Om(d,e)})}function Ji(t,e,n){return{instance:t,listener:e,currentTarget:n}}function No(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Hi(t,n),s!=null&&r.unshift(Ji(t,s,i)),s=Hi(t,e),s!=null&&r.push(Ji(t,s,i))),t=t.return}return r}function ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Hi(n,s),a!=null&&o.unshift(Ji(n,a,l))):i||(a=Hi(n,s),a!=null&&o.push(Ji(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var G0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function Ah(t){return(typeof t=="string"?t:""+t).replace(G0,`
`).replace(K0,"")}function Ys(t,e,n){if(e=Ah(e),Ah(t)!==e&&n)throw Error(E(425))}function Ao(){}var du=null,hu=null;function fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(t){return Oh.resolve(null).then(t).catch(Y0)}:pu;function Y0(t){setTimeout(function(){throw t})}function _a(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(e)}function on(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),mt="__reactFiber$"+Xr,Zi="__reactProps$"+Xr,Lt="__reactContainer$"+Xr,mu="__reactEvents$"+Xr,X0="__reactListeners$"+Xr,J0="__reactHandles$"+Xr;function Fn(t){var e=t[mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lt]||n[mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dh(t);t!==null;){if(n=t[mt])return n;t=Dh(t)}return e}t=n,n=t.parentNode}return null}function Is(t){return t=t[mt]||t[Lt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Sl(t){return t[Zi]||null}var gu=[],_r=-1;function Tn(t){return{current:t}}function Y(t){0>_r||(t.current=gu[_r],gu[_r]=null,_r--)}function G(t,e){_r++,gu[_r]=t.current,t.current=e}var vn={},Ie=Tn(vn),Me=Tn(!1),Kn=vn;function Fr(t,e){var n=t.type.contextTypes;if(!n)return vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function be(t){return t=t.childContextTypes,t!=null}function Oo(){Y(Me),Y(Ie)}function Lh(t,e,n){if(Ie.current!==vn)throw Error(E(168));G(Ie,e),G(Me,n)}function Lm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,by(t)||"Unknown",i));return te({},n,r)}function Do(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vn,Kn=Ie.current,G(Ie,t),G(Me,Me.current),!0}function Mh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Lm(t,e,Kn),r.__reactInternalMemoizedMergedChildContext=t,Y(Me),Y(Ie),G(Ie,t)):Y(Me),G(Me,n)}var Tt=null,Il=!1,va=!1;function Mm(t){Tt===null?Tt=[t]:Tt.push(t)}function Z0(t){Il=!0,Mm(t)}function kn(){if(!va&&Tt!==null){va=!0;var t=0,e=W;try{var n=Tt;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tt=null,Il=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(t+1)),om(gc,kn),i}finally{W=e,va=!1}}return null}var vr=[],yr=0,Lo=null,Mo=0,Ke=[],qe=0,qn=null,kt=1,xt="";function Dn(t,e){vr[yr++]=Mo,vr[yr++]=Lo,Lo=t,Mo=e}function bm(t,e,n){Ke[qe++]=kt,Ke[qe++]=xt,Ke[qe++]=qn,qn=t;var r=kt;t=xt;var i=32-at(r)-1;r&=~(1<<i),n+=1;var s=32-at(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-at(e)+i|n<<i|r,xt=s+t}else kt=1<<s|n<<i|r,xt=t}function Tc(t){t.return!==null&&(Dn(t,1),bm(t,1,0))}function kc(t){for(;t===Lo;)Lo=vr[--yr],vr[yr]=null,Mo=vr[--yr],vr[yr]=null;for(;t===qn;)qn=Ke[--qe],Ke[qe]=null,xt=Ke[--qe],Ke[qe]=null,kt=Ke[--qe],Ke[qe]=null}var We=null,ze=null,X=!1,it=null;function Fm(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,We=t,ze=on(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,We=t,ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qn!==null?{id:kt,overflow:xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,We=t,ze=null,!0):!1;default:return!1}}function _u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vu(t){if(X){var e=ze;if(e){var n=e;if(!bh(t,e)){if(_u(t))throw Error(E(418));e=on(n.nextSibling);var r=We;e&&bh(t,e)?Fm(r,n):(t.flags=t.flags&-4097|2,X=!1,We=t)}}else{if(_u(t))throw Error(E(418));t.flags=t.flags&-4097|2,X=!1,We=t}}}function Fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;We=t}function Xs(t){if(t!==We)return!1;if(!X)return Fh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fu(t.type,t.memoizedProps)),e&&(e=ze)){if(_u(t))throw Um(),Error(E(418));for(;e;)Fm(t,e),e=on(e.nextSibling)}if(Fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ze=on(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ze=null}}else ze=We?on(t.stateNode.nextSibling):null;return!0}function Um(){for(var t=ze;t;)t=on(t.nextSibling)}function Ur(){ze=We=null,X=!1}function xc(t){it===null?it=[t]:it.push(t)}var ew=jt.ReactCurrentBatchConfig;function nt(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var bo=Tn(null),Fo=null,wr=null,Pc=null;function Rc(){Pc=wr=Fo=null}function Nc(t){var e=bo.current;Y(bo),t._currentValue=e}function yu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Nr(t,e){Fo=t,Pc=wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function Xe(t){var e=t._currentValue;if(Pc!==t)if(t={context:t,memoizedValue:e,next:null},wr===null){if(Fo===null)throw Error(E(308));wr=t,Fo.dependencies={lanes:0,firstContext:t}}else wr=wr.next=t;return e}var Un=null;function Ac(t){Un===null?Un=[t]:Un.push(t)}function jm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ac(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ln(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ac(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mt(t,n)}function ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_c(t,n)}}function Uh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uo(t,e,n,r){var i=t.updateQueue;Gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,v=l;switch(h=e,_=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(_,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(_,d,h):g,h==null)break e;d=te({},d,h);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=d):c=c.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yn|=o,t.lanes=o,t.memoizedState=d}}function jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var zm=new jp.Component().refs;function wu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=un(t),s=At(r,i);s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ut(e,t,i,r),ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=un(t),s=At(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ut(e,t,i,r),ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pe(),r=un(t),i=At(n,r);i.tag=2,e!=null&&(i.callback=e),e=ln(t,i,r),e!==null&&(ut(e,t,r,n),ho(e,t,r))}};function Bh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,s):!0}function Wm(t,e,n){var r=!1,i=vn,s=e.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(i=be(e)?Kn:Ie.current,r=e.contextTypes,s=(r=r!=null)?Fr(t,i):vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function Eu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=zm,Oc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xe(s):(s=be(e)?Kn:Ie.current,i.context=Fr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tl.enqueueReplaceState(i,i.state,null),Uo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===zm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Js(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wh(t){var e=t._init;return e(t._payload)}function Vm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=cn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=Ta(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var I=m.type;return I===hr?c(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&Wh(I)===f.type)?(y=i(f,m.props),y.ref=gi(p,f,m),y.return=p,y):(y=vo(m.type,m.key,m.props,null,p.mode,y),y.ref=gi(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ka(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,y,I){return f===null||f.tag!==7?(f=Vn(m,p.mode,y,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ta(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zs:return m=vo(f.type,f.key,f.props,null,p.mode,m),m.ref=gi(p,null,f),m.return=p,m;case dr:return f=ka(f,p.mode,m),f.return=p,f;case Ht:var y=f._init;return d(p,y(f._payload),m)}if(Ii(f)||di(f))return f=Vn(f,p.mode,m,null),f.return=p,f;Js(p,f)}return null}function h(p,f,m,y){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zs:return m.key===I?a(p,f,m,y):null;case dr:return m.key===I?u(p,f,m,y):null;case Ht:return I=m._init,h(p,f,I(m._payload),y)}if(Ii(m)||di(m))return I!==null?null:c(p,f,m,y,null);Js(p,m)}return null}function _(p,f,m,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zs:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,I);case dr:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,I);case Ht:var P=y._init;return _(p,f,m,P(y._payload),I)}if(Ii(y)||di(y))return p=p.get(m)||null,c(f,p,y,I,null);Js(f,y)}return null}function g(p,f,m,y){for(var I=null,P=null,R=f,N=f=0,K=null;R!==null&&N<m.length;N++){R.index>N?(K=R,R=null):K=R.sibling;var F=h(p,R,m[N],y);if(F===null){R===null&&(R=K);break}t&&R&&F.alternate===null&&e(p,R),f=s(F,f,N),P===null?I=F:P.sibling=F,P=F,R=K}if(N===m.length)return n(p,R),X&&Dn(p,N),I;if(R===null){for(;N<m.length;N++)R=d(p,m[N],y),R!==null&&(f=s(R,f,N),P===null?I=R:P.sibling=R,P=R);return X&&Dn(p,N),I}for(R=r(p,R);N<m.length;N++)K=_(R,p,N,m[N],y),K!==null&&(t&&K.alternate!==null&&R.delete(K.key===null?N:K.key),f=s(K,f,N),P===null?I=K:P.sibling=K,P=K);return t&&R.forEach(function(Ze){return e(p,Ze)}),X&&Dn(p,N),I}function v(p,f,m,y){var I=di(m);if(typeof I!="function")throw Error(E(150));if(m=I.call(m),m==null)throw Error(E(151));for(var P=I=null,R=f,N=f=0,K=null,F=m.next();R!==null&&!F.done;N++,F=m.next()){R.index>N?(K=R,R=null):K=R.sibling;var Ze=h(p,R,F.value,y);if(Ze===null){R===null&&(R=K);break}t&&R&&Ze.alternate===null&&e(p,R),f=s(Ze,f,N),P===null?I=Ze:P.sibling=Ze,P=Ze,R=K}if(F.done)return n(p,R),X&&Dn(p,N),I;if(R===null){for(;!F.done;N++,F=m.next())F=d(p,F.value,y),F!==null&&(f=s(F,f,N),P===null?I=F:P.sibling=F,P=F);return X&&Dn(p,N),I}for(R=r(p,R);!F.done;N++,F=m.next())F=_(R,p,N,F.value,y),F!==null&&(t&&F.alternate!==null&&R.delete(F.key===null?N:F.key),f=s(F,f,N),P===null?I=F:P.sibling=F,P=F);return t&&R.forEach(function(ui){return e(p,ui)}),X&&Dn(p,N),I}function T(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===hr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case zs:e:{for(var I=m.key,P=f;P!==null;){if(P.key===I){if(I=m.type,I===hr){if(P.tag===7){n(p,P.sibling),f=i(P,m.props.children),f.return=p,p=f;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&Wh(I)===P.type){n(p,P.sibling),f=i(P,m.props),f.ref=gi(p,P,m),f.return=p,p=f;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===hr?(f=Vn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=vo(m.type,m.key,m.props,null,p.mode,y),y.ref=gi(p,f,m),y.return=p,p=y)}return o(p);case dr:e:{for(P=m.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ka(m,p.mode,y),f.return=p,p=f}return o(p);case Ht:return P=m._init,T(p,f,P(m._payload),y)}if(Ii(m))return g(p,f,m,y);if(di(m))return v(p,f,m,y);Js(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ta(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return T}var jr=Vm(!0),$m=Vm(!1),Ts={},_t=Tn(Ts),es=Tn(Ts),ts=Tn(Ts);function jn(t){if(t===Ts)throw Error(E(174));return t}function Dc(t,e){switch(G(ts,e),G(es,t),G(_t,Ts),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Za(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Za(e,t)}Y(_t),G(_t,e)}function Br(){Y(_t),Y(es),Y(ts)}function Hm(t){jn(ts.current);var e=jn(_t.current),n=Za(e,t.type);e!==n&&(G(es,t),G(_t,n))}function Lc(t){es.current===t&&(Y(_t),Y(es))}var J=Tn(0);function jo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ya=[];function Mc(){for(var t=0;t<ya.length;t++)ya[t]._workInProgressVersionPrimary=null;ya.length=0}var fo=jt.ReactCurrentDispatcher,wa=jt.ReactCurrentBatchConfig,Qn=0,ee=null,le=null,fe=null,Bo=!1,Li=!1,ns=0,tw=0;function we(){throw Error(E(321))}function bc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dt(t[n],e[n]))return!1;return!0}function Fc(t,e,n,r,i,s){if(Qn=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fo.current=t===null||t.memoizedState===null?sw:ow,t=n(r,i),Li){s=0;do{if(Li=!1,ns=0,25<=s)throw Error(E(301));s+=1,fe=le=null,e.updateQueue=null,fo.current=lw,t=n(r,i)}while(Li)}if(fo.current=zo,e=le!==null&&le.next!==null,Qn=0,fe=le=ee=null,Bo=!1,e)throw Error(E(300));return t}function Uc(){var t=ns!==0;return ns=0,t}function pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ee.memoizedState=fe=t:fe=fe.next=t,fe}function Je(){if(le===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=fe===null?ee.memoizedState:fe.next;if(e!==null)fe=e,le=t;else{if(t===null)throw Error(E(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},fe===null?ee.memoizedState=fe=t:fe=fe.next=t}return fe}function rs(t,e){return typeof e=="function"?e(t):e}function Ea(t){var e=Je(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Qn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ee.lanes|=c,Yn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,dt(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,Yn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ca(t){var e=Je(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dt(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gm(){}function Km(t,e){var n=ee,r=Je(),i=e(),s=!dt(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,jc(Ym.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,is(9,Qm.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(E(349));Qn&30||qm(n,e,i)}return i}function qm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qm(t,e,n,r){e.value=n,e.getSnapshot=r,Xm(e)&&Jm(t)}function Ym(t,e,n){return n(function(){Xm(e)&&Jm(t)})}function Xm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dt(t,n)}catch{return!0}}function Jm(t){var e=Mt(t,1);e!==null&&ut(e,t,1,-1)}function Vh(t){var e=pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},e.queue=t,t=t.dispatch=iw.bind(null,ee,t),[e.memoizedState,t]}function is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zm(){return Je().memoizedState}function po(t,e,n,r){var i=pt();ee.flags|=t,i.memoizedState=is(1|e,n,void 0,r===void 0?null:r)}function kl(t,e,n,r){var i=Je();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&bc(r,o.deps)){i.memoizedState=is(e,n,s,r);return}}ee.flags|=t,i.memoizedState=is(1|e,n,s,r)}function $h(t,e){return po(8390656,8,t,e)}function jc(t,e){return kl(2048,8,t,e)}function eg(t,e){return kl(4,2,t,e)}function tg(t,e){return kl(4,4,t,e)}function ng(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rg(t,e,n){return n=n!=null?n.concat([t]):null,kl(4,4,ng.bind(null,e,t),n)}function Bc(){}function ig(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sg(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function og(t,e,n){return Qn&21?(dt(n,e)||(n=um(),ee.lanes|=n,Yn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function nw(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=wa.transition;wa.transition={};try{t(!1),e()}finally{W=n,wa.transition=r}}function lg(){return Je().memoizedState}function rw(t,e,n){var r=un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ag(t))ug(e,n);else if(n=jm(t,e,n,r),n!==null){var i=Pe();ut(n,t,r,i),cg(n,e,r)}}function iw(t,e,n){var r=un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ag(t))ug(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dt(l,o)){var a=e.interleaved;a===null?(i.next=i,Ac(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=jm(t,e,i,r),n!==null&&(i=Pe(),ut(n,t,r,i),cg(n,e,r))}}function ag(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function ug(t,e){Li=Bo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_c(t,n)}}var zo={readContext:Xe,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},sw={readContext:Xe,useCallback:function(t,e){return pt().memoizedState=[t,e===void 0?null:e],t},useContext:Xe,useEffect:$h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,po(4194308,4,ng.bind(null,e,t),n)},useLayoutEffect:function(t,e){return po(4194308,4,t,e)},useInsertionEffect:function(t,e){return po(4,2,t,e)},useMemo:function(t,e){var n=pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rw.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=pt();return t={current:t},e.memoizedState=t},useState:Vh,useDebugValue:Bc,useDeferredValue:function(t){return pt().memoizedState=t},useTransition:function(){var t=Vh(!1),e=t[0];return t=nw.bind(null,t[1]),pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=pt();if(X){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ge===null)throw Error(E(349));Qn&30||qm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$h(Ym.bind(null,r,s,t),[t]),r.flags|=2048,is(9,Qm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pt(),e=ge.identifierPrefix;if(X){var n=xt,r=kt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ow={readContext:Xe,useCallback:ig,useContext:Xe,useEffect:jc,useImperativeHandle:rg,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:sg,useReducer:Ea,useRef:Zm,useState:function(){return Ea(rs)},useDebugValue:Bc,useDeferredValue:function(t){var e=Je();return og(e,le.memoizedState,t)},useTransition:function(){var t=Ea(rs)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Gm,useSyncExternalStore:Km,useId:lg,unstable_isNewReconciler:!1},lw={readContext:Xe,useCallback:ig,useContext:Xe,useEffect:jc,useImperativeHandle:rg,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:sg,useReducer:Ca,useRef:Zm,useState:function(){return Ca(rs)},useDebugValue:Bc,useDeferredValue:function(t){var e=Je();return le===null?e.memoizedState=t:og(e,le.memoizedState,t)},useTransition:function(){var t=Ca(rs)[0],e=Je().memoizedState;return[t,e]},useMutableSource:Gm,useSyncExternalStore:Km,useId:lg,unstable_isNewReconciler:!1};function zr(t,e){try{var n="",r=e;do n+=My(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aw=typeof WeakMap=="function"?WeakMap:Map;function dg(t,e,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vo||(Vo=!0,Ou=r),Cu(t,e)},n}function hg(t,e,n){n=At(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cu(t,e),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Cw.bind(null,t,e,n),e.then(t,t))}function Gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=At(-1,1),e.tag=2,ln(n,e,1))),n.lanes|=1),t)}var uw=jt.ReactCurrentOwner,De=!1;function ke(t,e,n,r){e.child=t===null?$m(e,null,n,r):jr(e,t.child,n,r)}function qh(t,e,n,r,i){n=n.render;var s=e.ref;return Nr(e,i),r=Fc(t,e,n,r,s,i),n=Uc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(X&&n&&Tc(e),e.flags|=1,ke(t,e,r,i),e.child)}function Qh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fg(t,e,s,r,i)):(t=vo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(o,r)&&t.ref===e.ref)return bt(t,e,i)}return e.flags|=1,t=cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function fg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,bt(t,e,i)}return Su(t,e,n,r,i)}function pg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Cr,Be),Be|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(Cr,Be),Be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(Cr,Be),Be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(Cr,Be),Be|=r;return ke(t,e,i,n),e.child}function mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Su(t,e,n,r,i){var s=be(n)?Kn:Ie.current;return s=Fr(e,s),Nr(e,i),n=Fc(t,e,n,r,s,i),r=Uc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(X&&r&&Tc(e),e.flags|=1,ke(t,e,n,i),e.child)}function Yh(t,e,n,r,i){if(be(n)){var s=!0;Do(e)}else s=!1;if(Nr(e,i),e.stateNode===null)mo(t,e),Wm(e,n,r),Eu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=be(n)?Kn:Ie.current,u=Fr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&zh(e,o,r,u),Gt=!1;var h=e.memoizedState;o.state=h,Uo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Me.current||Gt?(typeof c=="function"&&(wu(e,n,c,r),a=e.memoizedState),(l=Gt||Bh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:nt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=be(n)?Kn:Ie.current,a=Fr(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&zh(e,o,r,a),Gt=!1,h=e.memoizedState,o.state=h,Uo(e,r,o,i);var g=e.memoizedState;l!==d||h!==g||Me.current||Gt?(typeof _=="function"&&(wu(e,n,_,r),g=e.memoizedState),(u=Gt||Bh(e,n,u,r,h,g,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Iu(t,e,n,r,s,i)}function Iu(t,e,n,r,i,s){mg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mh(e,n,!1),bt(t,e,s);r=e.stateNode,uw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jr(e,t.child,null,s),e.child=jr(e,null,l,s)):ke(t,e,l,s),e.memoizedState=r.state,i&&Mh(e,n,!0),e.child}function gg(t){var e=t.stateNode;e.pendingContext?Lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lh(t,e.context,!1),Dc(t,e.containerInfo)}function Xh(t,e,n,r,i){return Ur(),xc(i),e.flags|=256,ke(t,e,n,r),e.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function _g(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(J,i&1),t===null)return vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rl(o,r,0,null),t=Vn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ku(n),e.memoizedState=Tu,t):zc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return cw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cn(l,s):(s=Vn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ku(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tu,r}return s=t.child,t=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zc(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zs(t,e,n,r){return r!==null&&xc(r),jr(e,t.child,null,n),t=zc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sa(Error(E(422))),Zs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rl({mode:"visible",children:r.children},i,0,null),s=Vn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&jr(e,t.child,null,o),e.child.memoizedState=ku(o),e.memoizedState=Tu,s);if(!(e.mode&1))return Zs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Sa(s,r,void 0),Zs(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),ut(r,t,i,-1))}return Kc(),r=Sa(Error(E(421))),Zs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ze=on(i.nextSibling),We=e,X=!0,it=null,t!==null&&(Ke[qe++]=kt,Ke[qe++]=xt,Ke[qe++]=qn,kt=t.id,xt=t.overflow,qn=e),e=zc(e,r.children),e.flags|=4096,e)}function Jh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yu(t.return,e,n)}function Ia(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,n,e);else if(t.tag===19)Jh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ia(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ia(e,!0,n,null,s);break;case"together":Ia(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dw(t,e,n){switch(e.tag){case 3:gg(e),Ur();break;case 5:Hm(e);break;case 1:be(e.type)&&Do(e);break;case 4:Dc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?_g(t,e,n):(G(J,J.current&1),t=bt(t,e,n),t!==null?t.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,pg(t,e,n)}return bt(t,e,n)}var yg,xu,wg,Eg;yg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xu=function(){};wg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jn(_t.current);var s=null;switch(n){case"input":i=Qa(t,i),r=Qa(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=Ja(t,i),r=Ja(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ao)}eu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Eg=function(t,e,n,r){n!==r&&(e.flags|=4)};function _i(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hw(t,e,n){var r=e.pendingProps;switch(kc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return be(e.type)&&Oo(),Ee(e),null;case 3:return r=e.stateNode,Br(),Y(Me),Y(Ie),Mc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,it!==null&&(Mu(it),it=null))),xu(t,e),Ee(e),null;case 5:Lc(e);var i=jn(ts.current);if(n=e.type,t!==null&&e.stateNode!=null)wg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ee(e),null}if(t=jn(_t.current),Xs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mt]=e,r[Zi]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)q(ki[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":lh(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":uh(r,s),q("invalid",r)}eu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",""+l]):Vi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Ws(r),ah(r,s,!0);break;case"textarea":Ws(r),ch(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ao)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mt]=e,t[Zi]=r,yg(t,e,!1,!1),e.stateNode=t;e:{switch(o=tu(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)q(ki[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":lh(t,r),i=Qa(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),q("invalid",t);break;case"textarea":uh(t,r),i=Ja(t,r),q("invalid",t);break;default:i=r}eu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Xp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&$i(t,a):typeof a=="number"&&$i(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&dc(t,s,a,o))}switch(n){case"input":Ws(t),ah(t,r,!1);break;case"textarea":Ws(t),ch(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_n(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?kr(t,!!r.multiple,s,!1):r.defaultValue!=null&&kr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)Eg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=jn(ts.current),jn(_t.current),Xs(e)){if(r=e.stateNode,n=e.memoizedProps,r[mt]=e,(s=r.nodeValue!==n)&&(t=We,t!==null))switch(t.tag){case 3:Ys(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=e,e.stateNode=r}return Ee(e),null;case 13:if(Y(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&ze!==null&&e.mode&1&&!(e.flags&128))Um(),Ur(),e.flags|=98560,s=!1;else if(s=Xs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[mt]=e}else Ur(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else it!==null&&(Mu(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?ce===0&&(ce=3):Kc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Br(),xu(t,e),t===null&&Xi(e.stateNode.containerInfo),Ee(e),null;case 10:return Nc(e.type._context),Ee(e),null;case 17:return be(e.type)&&Oo(),Ee(e),null;case 19:if(Y(J),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_i(s,!1);else{if(ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jo(t),o!==null){for(e.flags|=128,_i(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Wr&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304)}else{if(!r)if(t=jo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_i(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Ee(e),null}else 2*ie()-s.renderingStartTime>Wr&&n!==1073741824&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=J.current,G(J,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Gc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Be&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function fw(t,e){switch(kc(e),e.tag){case 1:return be(e.type)&&Oo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Br(),Y(Me),Y(Ie),Mc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lc(e),null;case 13:if(Y(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(J),null;case 4:return Br(),null;case 10:return Nc(e.type._context),null;case 22:case 23:return Gc(),null;case 24:return null;default:return null}}var eo=!1,Ce=!1,pw=typeof WeakSet=="function"?WeakSet:Set,k=null;function Er(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function Pu(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Zh=!1;function mw(t,e){if(du=Po,t=Tm(),Ic(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(hu={focusedElem:t,selectionRange:n},Po=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,T=g.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:nt(e.type,v),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){ne(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return g=Zh,Zh=!1,g}function Mi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pu(e,n,s)}i=i.next}while(i!==r)}}function xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ru(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cg(t){var e=t.alternate;e!==null&&(t.alternate=null,Cg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mt],delete e[Zi],delete e[mu],delete e[X0],delete e[J0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sg(t){return t.tag===5||t.tag===3||t.tag===4}function ef(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ao));else if(r!==4&&(t=t.child,t!==null))for(Nu(t,e,n),t=t.sibling;t!==null;)Nu(t,e,n),t=t.sibling}function Au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}var _e=null,rt=!1;function Wt(t,e,n){for(n=n.child;n!==null;)Ig(t,e,n),n=n.sibling}function Ig(t,e,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Ce||Er(n,e);case 6:var r=_e,i=rt;_e=null,Wt(t,e,n),_e=r,rt=i,_e!==null&&(rt?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(rt?(t=_e,n=n.stateNode,t.nodeType===8?_a(t.parentNode,n):t.nodeType===1&&_a(t,n),qi(t)):_a(_e,n.stateNode));break;case 4:r=_e,i=rt,_e=n.stateNode.containerInfo,rt=!0,Wt(t,e,n),_e=r,rt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pu(n,e,o),i=i.next}while(i!==r)}Wt(t,e,n);break;case 1:if(!Ce&&(Er(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Wt(t,e,n),Ce=r):Wt(t,e,n);break;default:Wt(t,e,n)}}function tf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pw),e.forEach(function(r){var i=Iw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,rt=!1;break e;case 3:_e=l.stateNode.containerInfo,rt=!0;break e;case 4:_e=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(_e===null)throw Error(E(160));Ig(s,o,i),_e=null,rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tg(e,t),e=e.sibling}function Tg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),ft(t),r&4){try{Mi(3,t,t.return),xl(3,t)}catch(v){ne(t,t.return,v)}try{Mi(5,t,t.return)}catch(v){ne(t,t.return,v)}}break;case 1:et(e,t),ft(t),r&512&&n!==null&&Er(n,n.return);break;case 5:if(et(e,t),ft(t),r&512&&n!==null&&Er(n,n.return),t.flags&32){var i=t.stateNode;try{$i(i,"")}catch(v){ne(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gp(i,s),tu(l,o);var u=tu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Xp(i,d):c==="dangerouslySetInnerHTML"?Qp(i,d):c==="children"?$i(i,d):dc(i,c,d,u)}switch(l){case"input":Ya(i,s);break;case"textarea":Kp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?kr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?kr(i,!!s.multiple,s.defaultValue,!0):kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zi]=s}catch(v){ne(t,t.return,v)}}break;case 6:if(et(e,t),ft(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ne(t,t.return,v)}}break;case 3:if(et(e,t),ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(e.containerInfo)}catch(v){ne(t,t.return,v)}break;case 4:et(e,t),ft(t);break;case 13:et(e,t),ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($c=ie())),r&4&&tf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(u=Ce)||c,et(e,t),Ce=u):et(e,t),ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(d=k=c;k!==null;){switch(h=k,_=h.child,h.tag){case 0:case 11:case 14:case 15:Mi(4,h,h.return);break;case 1:Er(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){ne(r,n,v)}}break;case 5:Er(h,h.return);break;case 22:if(h.memoizedState!==null){rf(d);continue}}_!==null?(_.return=h,k=_):rf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Yp("display",o))}catch(v){ne(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ne(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:et(e,t),ft(t),r&4&&tf(t);break;case 21:break;default:et(e,t),ft(t)}}function ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($i(i,""),r.flags&=-33);var s=ef(t);Au(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ef(t);Nu(t,l,o);break;default:throw Error(E(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gw(t,e,n){k=t,kg(t)}function kg(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||eo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=eo;var u=Ce;if(eo=o,(Ce=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?sf(i):a!==null?(a.return=o,k=a):sf(i);for(;s!==null;)k=s,kg(s),s=s.sibling;k=i,eo=l,Ce=u}nf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):nf(t)}}function nf(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&qi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||e.flags&512&&Ru(e)}catch(h){ne(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function rf(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function sf(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xl(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{Ru(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{Ru(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var _w=Math.ceil,Wo=jt.ReactCurrentDispatcher,Wc=jt.ReactCurrentOwner,Ye=jt.ReactCurrentBatchConfig,B=0,ge=null,oe=null,ve=0,Be=0,Cr=Tn(0),ce=0,ss=null,Yn=0,Pl=0,Vc=0,bi=null,Oe=null,$c=0,Wr=1/0,It=null,Vo=!1,Ou=null,an=null,to=!1,en=null,$o=0,Fi=0,Du=null,go=-1,_o=0;function Pe(){return B&6?ie():go!==-1?go:go=ie()}function un(t){return t.mode&1?B&2&&ve!==0?ve&-ve:ew.transition!==null?(_o===0&&(_o=um()),_o):(t=W,t!==0||(t=window.event,t=t===void 0?16:gm(t.type)),t):1}function ut(t,e,n,r){if(50<Fi)throw Fi=0,Du=null,Error(E(185));Cs(t,n,r),(!(B&2)||t!==ge)&&(t===ge&&(!(B&2)&&(Pl|=n),ce===4&&qt(t,ve)),Fe(t,r),n===1&&B===0&&!(e.mode&1)&&(Wr=ie()+500,Il&&kn()))}function Fe(t,e){var n=t.callbackNode;e0(t,e);var r=xo(t,t===ge?ve:0);if(r===0)n!==null&&fh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fh(n),e===1)t.tag===0?Z0(of.bind(null,t)):Mm(of.bind(null,t)),Q0(function(){!(B&6)&&kn()}),n=null;else{switch(cm(r)){case 1:n=gc;break;case 4:n=lm;break;case 16:n=ko;break;case 536870912:n=am;break;default:n=ko}n=Lg(n,xg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xg(t,e){if(go=-1,_o=0,B&6)throw Error(E(327));var n=t.callbackNode;if(Ar()&&t.callbackNode!==n)return null;var r=xo(t,t===ge?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ho(t,r);else{e=r;var i=B;B|=2;var s=Rg();(ge!==t||ve!==e)&&(It=null,Wr=ie()+500,Wn(t,e));do try{ww();break}catch(l){Pg(t,l)}while(1);Rc(),Wo.current=s,B=i,oe!==null?e=0:(ge=null,ve=0,e=ce)}if(e!==0){if(e===2&&(i=ou(t),i!==0&&(r=i,e=Lu(t,i))),e===1)throw n=ss,Wn(t,0),qt(t,r),Fe(t,ie()),n;if(e===6)qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!vw(i)&&(e=Ho(t,r),e===2&&(s=ou(t),s!==0&&(r=s,e=Lu(t,s))),e===1))throw n=ss,Wn(t,0),qt(t,r),Fe(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Ln(t,Oe,It);break;case 3:if(qt(t,r),(r&130023424)===r&&(e=$c+500-ie(),10<e)){if(xo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=pu(Ln.bind(null,t,Oe,It),e);break}Ln(t,Oe,It);break;case 4:if(qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-at(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_w(r/1960))-r,10<r){t.timeoutHandle=pu(Ln.bind(null,t,Oe,It),r);break}Ln(t,Oe,It);break;case 5:Ln(t,Oe,It);break;default:throw Error(E(329))}}}return Fe(t,ie()),t.callbackNode===n?xg.bind(null,t):null}function Lu(t,e){var n=bi;return t.current.memoizedState.isDehydrated&&(Wn(t,e).flags|=256),t=Ho(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&Mu(e)),t}function Mu(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function vw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qt(t,e){for(e&=~Vc,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-at(e),r=1<<n;t[n]=-1,e&=~r}}function of(t){if(B&6)throw Error(E(327));Ar();var e=xo(t,0);if(!(e&1))return Fe(t,ie()),null;var n=Ho(t,e);if(t.tag!==0&&n===2){var r=ou(t);r!==0&&(e=r,n=Lu(t,r))}if(n===1)throw n=ss,Wn(t,0),qt(t,e),Fe(t,ie()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ln(t,Oe,It),Fe(t,ie()),null}function Hc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Wr=ie()+500,Il&&kn())}}function Xn(t){en!==null&&en.tag===0&&!(B&6)&&Ar();var e=B;B|=1;var n=Ye.transition,r=W;try{if(Ye.transition=null,W=1,t)return t()}finally{W=r,Ye.transition=n,B=e,!(B&6)&&kn()}}function Gc(){Be=Cr.current,Y(Cr)}function Wn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(kc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:Br(),Y(Me),Y(Ie),Mc();break;case 5:Lc(r);break;case 4:Br();break;case 13:Y(J);break;case 19:Y(J);break;case 10:Nc(r.type._context);break;case 22:case 23:Gc()}n=n.return}if(ge=t,oe=t=cn(t.current,null),ve=Be=e,ce=0,ss=null,Vc=Pl=Yn=0,Oe=bi=null,Un!==null){for(e=0;e<Un.length;e++)if(n=Un[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Un=null}return t}function Pg(t,e){do{var n=oe;try{if(Rc(),fo.current=zo,Bo){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bo=!1}if(Qn=0,fe=le=ee=null,Li=!1,ns=0,Wc.current=null,n===null||n.return===null){ce=1,ss=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=Gh(o);if(_!==null){_.flags&=-257,Kh(_,o,l,s,e),_.mode&1&&Hh(s,u,e),e=_,a=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(a),e.updateQueue=v}else g.add(a);break e}else{if(!(e&1)){Hh(s,u,e),Kc();break e}a=Error(E(426))}}else if(X&&l.mode&1){var T=Gh(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Kh(T,o,l,s,e),xc(zr(a,l));break e}}s=a=zr(a,l),ce!==4&&(ce=2),bi===null?bi=[s]:bi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=dg(s,a,e);Uh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(an===null||!an.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=hg(s,l,e);Uh(s,y);break e}}s=s.return}while(s!==null)}Ag(n)}catch(I){e=I,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Rg(){var t=Wo.current;return Wo.current=zo,t===null?zo:t}function Kc(){(ce===0||ce===3||ce===2)&&(ce=4),ge===null||!(Yn&268435455)&&!(Pl&268435455)||qt(ge,ve)}function Ho(t,e){var n=B;B|=2;var r=Rg();(ge!==t||ve!==e)&&(It=null,Wn(t,e));do try{yw();break}catch(i){Pg(t,i)}while(1);if(Rc(),B=n,Wo.current=r,oe!==null)throw Error(E(261));return ge=null,ve=0,ce}function yw(){for(;oe!==null;)Ng(oe)}function ww(){for(;oe!==null&&!Hy();)Ng(oe)}function Ng(t){var e=Dg(t.alternate,t,Be);t.memoizedProps=t.pendingProps,e===null?Ag(t):oe=e,Wc.current=null}function Ag(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fw(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ce=6,oe=null;return}}else if(n=hw(n,e,Be),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ce===0&&(ce=5)}function Ln(t,e,n){var r=W,i=Ye.transition;try{Ye.transition=null,W=1,Ew(t,e,n,r)}finally{Ye.transition=i,W=r}return null}function Ew(t,e,n,r){do Ar();while(en!==null);if(B&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t0(t,s),t===ge&&(oe=ge=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,Lg(ko,function(){return Ar(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=W;W=1;var l=B;B|=4,Wc.current=null,mw(t,n),Tg(n,t),z0(hu),Po=!!du,hu=du=null,t.current=n,gw(n),Gy(),B=l,W=o,Ye.transition=s}else t.current=n;if(to&&(to=!1,en=t,$o=i),s=t.pendingLanes,s===0&&(an=null),Qy(n.stateNode),Fe(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,t=Ou,Ou=null,t;return $o&1&&t.tag!==0&&Ar(),s=t.pendingLanes,s&1?t===Du?Fi++:(Fi=0,Du=t):Fi=0,kn(),null}function Ar(){if(en!==null){var t=cm($o),e=Ye.transition,n=W;try{if(Ye.transition=null,W=16>t?16:t,en===null)var r=!1;else{if(t=en,en=null,$o=0,B&6)throw Error(E(331));var i=B;for(B|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:Mi(8,c,s)}var d=c.child;if(d!==null)d.return=c,k=d;else for(;k!==null;){c=k;var h=c.sibling,_=c.return;if(Cg(c),c===u){k=null;break}if(h!==null){h.return=_,k=h;break}k=_}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Mi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xl(9,l)}}catch(I){ne(l,l.return,I)}if(l===o){k=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,k=y;break e}k=l.return}}if(B=i,kn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(yl,t)}catch{}r=!0}return r}finally{W=n,Ye.transition=e}}return!1}function lf(t,e,n){e=zr(n,e),e=dg(t,e,1),t=ln(t,e,1),e=Pe(),t!==null&&(Cs(t,1,e),Fe(t,e))}function ne(t,e,n){if(t.tag===3)lf(t,t,n);else for(;e!==null;){if(e.tag===3){lf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){t=zr(n,t),t=hg(e,t,1),e=ln(e,t,1),t=Pe(),e!==null&&(Cs(e,1,t),Fe(e,t));break}}e=e.return}}function Cw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ve&n)===n&&(ce===4||ce===3&&(ve&130023424)===ve&&500>ie()-$c?Wn(t,0):Vc|=n),Fe(t,e)}function Og(t,e){e===0&&(t.mode&1?(e=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):e=1);var n=Pe();t=Mt(t,e),t!==null&&(Cs(t,e,n),Fe(t,n))}function Sw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Og(t,n)}function Iw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Og(t,n)}var Dg;Dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,dw(t,e,n);De=!!(t.flags&131072)}else De=!1,X&&e.flags&1048576&&bm(e,Mo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mo(t,e),t=e.pendingProps;var i=Fr(e,Ie.current);Nr(e,n),i=Fc(null,e,r,t,i,n);var s=Uc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,be(r)?(s=!0,Do(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oc(e),i.updater=Tl,e.stateNode=i,i._reactInternals=e,Eu(e,r,t,n),e=Iu(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Tc(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kw(r),t=nt(r,t),i){case 0:e=Su(null,e,r,t,n);break e;case 1:e=Yh(null,e,r,t,n);break e;case 11:e=qh(null,e,r,t,n);break e;case 14:e=Qh(null,e,r,nt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Su(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Yh(t,e,r,i,n);case 3:e:{if(gg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bm(t,e),Uo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zr(Error(E(423)),e),e=Xh(t,e,r,n,i);break e}else if(r!==i){i=zr(Error(E(424)),e),e=Xh(t,e,r,n,i);break e}else for(ze=on(e.stateNode.containerInfo.firstChild),We=e,X=!0,it=null,n=$m(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===i){e=bt(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return Hm(e),t===null&&vu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fu(r,i)?o=null:s!==null&&fu(r,s)&&(e.flags|=32),mg(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&vu(e),null;case 13:return _g(t,e,n);case 4:return Dc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jr(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),qh(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(bo,r._currentValue),r._currentValue=o,s!==null)if(dt(s.value,o)){if(s.children===i.children&&!Me.current){e=bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=At(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),yu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Nr(e,n),i=Xe(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),Qh(t,e,r,i,n);case 15:return fg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),mo(t,e),e.tag=1,be(r)?(t=!0,Do(e)):t=!1,Nr(e,n),Wm(e,r,i),Eu(e,r,i,n),Iu(null,e,r,!0,t,n);case 19:return vg(t,e,n);case 22:return pg(t,e,n)}throw Error(E(156,e.tag))};function Lg(t,e){return om(t,e)}function Tw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new Tw(t,e,n,r)}function qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kw(t){if(typeof t=="function")return qc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fc)return 11;if(t===pc)return 14}return 2}function cn(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hr:return Vn(n.children,i,s,e);case hc:o=8,i|=8;break;case Ha:return t=Qe(12,n,e,i|2),t.elementType=Ha,t.lanes=s,t;case Ga:return t=Qe(13,n,e,i),t.elementType=Ga,t.lanes=s,t;case Ka:return t=Qe(19,n,e,i),t.elementType=Ka,t.lanes=s,t;case Vp:return Rl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zp:o=10;break e;case Wp:o=9;break e;case fc:o=11;break e;case pc:o=14;break e;case Ht:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vn(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function Rl(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=Vp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ta(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function ka(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qc(t,e,n,r,i,s,o,l,a){return t=new xw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(s),t}function Pw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Mg(t){if(!t)return vn;t=t._reactInternals;e:{if(or(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(be(n))return Lm(t,n,e)}return e}function bg(t,e,n,r,i,s,o,l,a){return t=Qc(n,r,!0,t,i,s,o,l,a),t.context=Mg(null),n=t.current,r=Pe(),i=un(n),s=At(r,i),s.callback=e??null,ln(n,s,i),t.current.lanes=i,Cs(t,i,r),Fe(t,r),t}function Nl(t,e,n,r){var i=e.current,s=Pe(),o=un(i);return n=Mg(n),e.context===null?e.context=n:e.pendingContext=n,e=At(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ln(i,e,o),t!==null&&(ut(t,i,o,s),ho(t,i,o)),o}function Go(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function af(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yc(t,e){af(t,e),(t=t.alternate)&&af(t,e)}function Rw(){return null}var Fg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xc(t){this._internalRoot=t}Al.prototype.render=Xc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Nl(t,e,null,null)};Al.prototype.unmount=Xc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xn(function(){Nl(null,t,null,null)}),e[Lt]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var e=fm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kt.length&&e!==0&&e<Kt[n].priority;n++);Kt.splice(n,0,t),n===0&&mm(t)}};function Jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uf(){}function Nw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Go(o);s.call(u)}}var o=bg(e,r,t,0,null,!1,!1,"",uf);return t._reactRootContainer=o,t[Lt]=o.current,Xi(t.nodeType===8?t.parentNode:t),Xn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Go(a);l.call(u)}}var a=Qc(t,0,!1,null,null,!1,!1,"",uf);return t._reactRootContainer=a,t[Lt]=a.current,Xi(t.nodeType===8?t.parentNode:t),Xn(function(){Nl(e,a,n,r)}),a}function Dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Go(o);l.call(a)}}Nl(e,o,t,i)}else o=Nw(n,e,t,i,r);return Go(o)}dm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ti(e.pendingLanes);n!==0&&(_c(e,n|1),Fe(e,ie()),!(B&6)&&(Wr=ie()+500,kn()))}break;case 13:Xn(function(){var r=Mt(t,1);if(r!==null){var i=Pe();ut(r,t,1,i)}}),Yc(t,1)}};vc=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=Pe();ut(e,t,134217728,n)}Yc(t,134217728)}};hm=function(t){if(t.tag===13){var e=un(t),n=Mt(t,e);if(n!==null){var r=Pe();ut(n,t,e,r)}Yc(t,e)}};fm=function(){return W};pm=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};ru=function(t,e,n){switch(e){case"input":if(Ya(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sl(r);if(!i)throw Error(E(90));Hp(r),Ya(r,i)}}}break;case"textarea":Kp(t,n);break;case"select":e=n.value,e!=null&&kr(t,!!n.multiple,e,!1)}};em=Hc;tm=Xn;var Aw={usingClientEntryPoint:!1,Events:[Is,gr,Sl,Jp,Zp,Hc]},vi={findFiberByHostInstance:Fn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ow={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=im(t),t===null?null:t.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||Rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{yl=no.inject(Ow),gt=no}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw;$e.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jc(e))throw Error(E(200));return Pw(t,e,null,n)};$e.createRoot=function(t,e){if(!Jc(t))throw Error(E(299));var n=!1,r="",i=Fg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qc(t,1,!1,null,null,n,!1,r,i),t[Lt]=e.current,Xi(t.nodeType===8?t.parentNode:t),new Xc(e)};$e.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=im(e),t=t===null?null:t.stateNode,t};$e.flushSync=function(t){return Xn(t)};$e.hydrate=function(t,e,n){if(!Ol(e))throw Error(E(200));return Dl(null,t,e,!0,n)};$e.hydrateRoot=function(t,e,n){if(!Jc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bg(e,null,t,1,n??null,i,!1,s,o),t[Lt]=e.current,Xi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Al(e)};$e.render=function(t,e,n){if(!Ol(e))throw Error(E(200));return Dl(null,t,e,!1,n)};$e.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(E(40));return t._reactRootContainer?(Xn(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[Lt]=null})}),!0):!1};$e.unstable_batchedUpdates=Hc;$e.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ol(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Dl(t,e,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(t){console.error(t)}}Ug(),bp.exports=$e;var Dw=bp.exports,cf=Dw;Va.createRoot=cf.createRoot,Va.hydrateRoot=cf.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},os.apply(this,arguments)}var tn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tn||(tn={}));const df="popstate";function Lw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return bu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ko(i)}return bw(e,n,null,t)}function se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Zc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Mw(){return Math.random().toString(36).substr(2,8)}function hf(t,e){return{usr:t.state,key:t.key,idx:e}}function bu(t,e,n,r){return n===void 0&&(n=null),os({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Jr(e):e,{state:n,key:e&&e.key||r||Mw()})}function Ko(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Jr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tn.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(os({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=tn.Pop;let T=c(),p=T==null?null:T-u;u=T,a&&a({action:l,location:v.location,delta:p})}function h(T,p){l=tn.Push;let f=bu(v.location,T,p);n&&n(f,T),u=c()+1;let m=hf(f,u),y=v.createHref(f);try{o.pushState(m,"",y)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(y)}s&&a&&a({action:l,location:v.location,delta:1})}function _(T,p){l=tn.Replace;let f=bu(v.location,T,p);n&&n(f,T),u=c();let m=hf(f,u),y=v.createHref(f);o.replaceState(m,"",y),s&&a&&a({action:l,location:v.location,delta:0})}function g(T){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:Ko(T);return se(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(T){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(df,d),a=T,()=>{i.removeEventListener(df,d),a=null}},createHref(T){return e(i,T)},createURL:g,encodeLocation(T){let p=g(T);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:_,go(T){return o.go(T)}};return v}var ff;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ff||(ff={}));function Fw(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Jr(e):e,i=ed(r.pathname||"/",n);if(i==null)return null;let s=jg(t);Uw(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=Kw(s[l],Yw(i));return o}function jg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(se(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=dn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jg(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Hw(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Bg(s.path))i(s,o,a)}),e}function Bg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Bg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Uw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Gw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jw=/^:\w+$/,Bw=3,zw=2,Ww=1,Vw=10,$w=-2,pf=t=>t==="*";function Hw(t,e){let n=t.split("/"),r=n.length;return n.some(pf)&&(r+=$w),e&&(r+=zw),n.filter(i=>!pf(i)).reduce((i,s)=>i+(jw.test(s)?Bw:s===""?Ww:Vw),r)}function Gw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Kw(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=qw({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:dn([i,c.pathname]),pathnameBase:eE(dn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dn([i,c.pathnameBase]))}return s}function qw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Qw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=Xw(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Qw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Zc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Yw(t){try{return decodeURI(t)}catch(e){return Zc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Xw(t,e){try{return decodeURIComponent(t)}catch(n){return Zc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ed(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Jw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Jr(t):t;return{pathname:n?n.startsWith("/")?n:Zw(n,e):e,search:tE(r),hash:nE(i)}}function Zw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function td(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function nd(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Jr(t):(i=os({},t),se(!i.pathname||!i.pathname.includes("?"),xa("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),xa("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),xa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=Jw(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const dn=t=>t.join("/").replace(/\/\/+/g,"/"),eE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zg=["post","put","patch","delete"];new Set(zg);const iE=["get",...zg];new Set(iE);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qo.apply(this,arguments)}const rd=C.createContext(null),sE=C.createContext(null),Zr=C.createContext(null),Ll=C.createContext(null),Bt=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Wg=C.createContext(null);function oE(t,e){let{relative:n}=e===void 0?{}:e;ei()||se(!1);let{basename:r,navigator:i}=C.useContext(Zr),{hash:s,pathname:o,search:l}=Hg(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:dn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function ei(){return C.useContext(Ll)!=null}function ks(){return ei()||se(!1),C.useContext(Ll).location}function Vg(t){C.useContext(Zr).static||C.useLayoutEffect(t)}function xn(){let{isDataRoute:t}=C.useContext(Bt);return t?yE():lE()}function lE(){ei()||se(!1);let t=C.useContext(rd),{basename:e,navigator:n}=C.useContext(Zr),{matches:r}=C.useContext(Bt),{pathname:i}=ks(),s=JSON.stringify(td(r).map(a=>a.pathnameBase)),o=C.useRef(!1);return Vg(()=>{o.current=!0}),C.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=nd(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:dn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function $g(){let{matches:t}=C.useContext(Bt),e=t[t.length-1];return e?e.params:{}}function Hg(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(Bt),{pathname:i}=ks(),s=JSON.stringify(td(r).map(o=>o.pathnameBase));return C.useMemo(()=>nd(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function aE(t,e){return uE(t,e)}function uE(t,e,n){ei()||se(!1);let{navigator:r}=C.useContext(Zr),{matches:i}=C.useContext(Bt),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=ks(),u;if(e){var c;let v=typeof e=="string"?Jr(e):e;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||se(!1),u=v}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",_=Fw(t,{pathname:h}),g=pE(_&&_.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:dn([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:dn([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&g?C.createElement(Ll.Provider,{value:{location:qo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tn.Pop}},g):g}function cE(){let t=vE(),e=rE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const dE=C.createElement(cE,null);class hE extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(Bt.Provider,{value:this.props.routeContext},C.createElement(Wg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fE(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(rd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Bt.Provider,{value:e},r)}function pE(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||se(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||dE);let h=e.concat(s.slice(0,u+1)),_=()=>{let g;return c?g=d:a.route.Component?g=C.createElement(a.route.Component,null):a.route.element?g=a.route.element:g=l,C.createElement(fE,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:g})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?C.createElement(hE,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var Gg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Gg||{}),Qo=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Qo||{});function mE(t){let e=C.useContext(rd);return e||se(!1),e}function gE(t){let e=C.useContext(sE);return e||se(!1),e}function _E(t){let e=C.useContext(Bt);return e||se(!1),e}function Kg(t){let e=_E(),n=e.matches[e.matches.length-1];return n.route.id||se(!1),n.route.id}function vE(){var t;let e=C.useContext(Wg),n=gE(Qo.UseRouteError),r=Kg(Qo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function yE(){let{router:t}=mE(Gg.UseNavigateStable),e=Kg(Qo.UseNavigateStable),n=C.useRef(!1);return Vg(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,qo({fromRouteId:e},s)))},[t,e])}function wE(t){let{to:e,replace:n,state:r,relative:i}=t;ei()||se(!1);let{matches:s}=C.useContext(Bt),{pathname:o}=ks(),l=xn(),a=nd(e,td(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(a);return C.useEffect(()=>l(JSON.parse(u),{replace:n,state:r,relative:i}),[l,u,i,n,r]),null}function Ge(t){se(!1)}function EE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tn.Pop,navigator:s,static:o=!1}=t;ei()&&se(!1);let l=e.replace(/^\/*/,"/"),a=C.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Jr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:_="default"}=r,g=C.useMemo(()=>{let v=ed(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:_},navigationType:i}},[l,u,c,d,h,_,i]);return g==null?null:C.createElement(Zr.Provider,{value:a},C.createElement(Ll.Provider,{children:n,value:g}))}function CE(t){let{children:e,location:n}=t;return aE(Fu(e),n)}new Promise(()=>{});function Fu(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,Fu(r.props.children,s));return}r.type!==Ge&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uu(){return Uu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uu.apply(this,arguments)}function SE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function IE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TE(t,e){return t.button===0&&(!e||e==="_self")&&!IE(t)}const kE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xE="startTransition",mf=Sy[xE];function PE(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=Lw({window:i,v5Compat:!0}));let o=s.current,[l,a]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=C.useCallback(d=>{u&&mf?mf(()=>a(d)):a(d)},[a,u]);return C.useLayoutEffect(()=>o.listen(c),[o,c]),C.createElement(EE,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o})}const RE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sr=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=SE(e,kE),{basename:_}=C.useContext(Zr),g,v=!1;if(typeof u=="string"&&NE.test(u)&&(g=u,RE))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),I=ed(y.pathname,_);y.origin===m.origin&&I!=null?u=I+y.search+y.hash:v=!0}catch{}let T=oE(u,{relative:i}),p=AE(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i,unstable_viewTransition:d});function f(m){r&&r(m),m.defaultPrevented||p(m)}return C.createElement("a",Uu({},h,{href:g||T,onClick:v||s?r:f,ref:n,target:a}))});var gf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(gf||(gf={}));var _f;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_f||(_f={}));function AE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=xn(),u=ks(),c=Hg(t,{relative:o});return C.useCallback(d=>{if(TE(d,n)){d.preventDefault();let h=r!==void 0?r:Ko(u)===Ko(c);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,c,r,i,n,t,s,o,l])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw ti(e)},ti=function(t){return new Error("Firebase Database ("+qg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[c],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new DE;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yg=function(t){const e=Qg(t);return id.encodeByteArray(e,!0)},Yo=function(t){return Yg(t).replace(/\./g,"")},Xo=function(t){try{return id.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){return Xg(void 0,t)}function Xg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ME(n)||(t[n]=Xg(t[n],e[n]));return t}function ME(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=()=>bE().__FIREBASE_DEFAULTS__,UE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xo(t[1]);return e&&JSON.parse(e)},sd=()=>{try{return FE()||UE()||jE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jg=t=>{var e,n;return(n=(e=sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BE=t=>{const e=Jg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zg=()=>{var t;return(t=sd())===null||t===void 0?void 0:t.config},e_=t=>{var e;return(e=sd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Yo(JSON.stringify(n)),Yo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function WE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VE(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function n_(){return qg.NODE_ADMIN===!0}function $E(){try{return typeof indexedDB=="object"}catch{return!1}}function HE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GE,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function KE(t,e){return t.replace(qE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return JSON.parse(t)}function ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ls(Xo(s[0])||""),n=ls(Xo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},QE=function(t){const e=r_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},YE=function(t){const e=r_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vf(s)&&vf(o)){if(!Zo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function JE(t,e){const n=new ZE(t,e);return n.subscribe.bind(n)}class ZE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pa),i.error===void 0&&(i.error=Pa),i.complete===void 0&&(i.complete=Pa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pa(){}function bl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ml;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iC(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rC(t){return t===Mn?void 0:t}function iC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const oC={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},lC=V.INFO,aC={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},uC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ld{constructor(e){this.name=e,this._logLevel=lC,this._logHandler=uC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const cC=(t,e)=>e.some(n=>t instanceof n);let yf,wf;function dC(){return yf||(yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hC(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i_=new WeakMap,Bu=new WeakMap,s_=new WeakMap,Ra=new WeakMap,ad=new WeakMap;function fC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&i_.set(n,t)}).catch(()=>{}),ad.set(e,t),e}function pC(t){if(Bu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bu.set(t,e)}let zu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||s_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mC(t){zu=t(zu)}function gC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Na(this),e,...n);return s_.set(r,e.sort?e.sort():[e]),hn(r)}:hC().includes(t)?function(...e){return t.apply(Na(this),e),hn(i_.get(this))}:function(...e){return hn(t.apply(Na(this),e))}}function _C(t){return typeof t=="function"?gC(t):(t instanceof IDBTransaction&&pC(t),cC(t,dC())?new Proxy(t,zu):t)}function hn(t){if(t instanceof IDBRequest)return fC(t);if(Ra.has(t))return Ra.get(t);const e=_C(t);return e!==t&&(Ra.set(t,e),ad.set(e,t)),e}const Na=t=>ad.get(t);function vC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(hn(o.result),a.oldVersion,a.newVersion,hn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const yC=["get","getKey","getAll","getAllKeys","count"],wC=["put","add","delete","clear"],Aa=new Map;function Ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Aa.get(e))return Aa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Aa.set(e,s),s}mC(t=>({...t,get:(e,n,r)=>Ef(e,n)||t.get(e,n,r),has:(e,n)=>!!Ef(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wu="@firebase/app",Cf="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new ld("@firebase/app"),SC="@firebase/app-compat",IC="@firebase/analytics-compat",TC="@firebase/analytics",kC="@firebase/app-check-compat",xC="@firebase/app-check",PC="@firebase/auth",RC="@firebase/auth-compat",NC="@firebase/database",AC="@firebase/database-compat",OC="@firebase/functions",DC="@firebase/functions-compat",LC="@firebase/installations",MC="@firebase/installations-compat",bC="@firebase/messaging",FC="@firebase/messaging-compat",UC="@firebase/performance",jC="@firebase/performance-compat",BC="@firebase/remote-config",zC="@firebase/remote-config-compat",WC="@firebase/storage",VC="@firebase/storage-compat",$C="@firebase/firestore",HC="@firebase/firestore-compat",GC="firebase",KC="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="[DEFAULT]",qC={[Wu]:"fire-core",[SC]:"fire-core-compat",[TC]:"fire-analytics",[IC]:"fire-analytics-compat",[xC]:"fire-app-check",[kC]:"fire-app-check-compat",[PC]:"fire-auth",[RC]:"fire-auth-compat",[NC]:"fire-rtdb",[AC]:"fire-rtdb-compat",[OC]:"fire-fn",[DC]:"fire-fn-compat",[LC]:"fire-iid",[MC]:"fire-iid-compat",[bC]:"fire-fcm",[FC]:"fire-fcm-compat",[UC]:"fire-perf",[jC]:"fire-perf-compat",[BC]:"fire-rc",[zC]:"fire-rc-compat",[WC]:"fire-gcs",[VC]:"fire-gcs-compat",[$C]:"fire-fst",[HC]:"fire-fst-compat","fire-js":"fire-js",[GC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Map,$u=new Map;function QC(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $r(t){const e=t.name;if($u.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;$u.set(e,t);for(const n of el.values())QC(n,t);return!0}function ud(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fn=new xs("app","Firebase",YC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=KC;function o_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(n||(n=Zg()),!n)throw fn.create("no-options");const s=el.get(i);if(s){if(Zo(n,s.options)&&Zo(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new sC(i);for(const a of $u.values())o.addComponent(a);const l=new XC(n,r,o);return el.set(i,l),l}function l_(t=Vu){const e=el.get(t);if(!e&&t===Vu&&Zg())return o_();if(!e)throw fn.create("no-app",{appName:t});return e}function pn(t,e,n){var r;let i=(r=qC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(l.join(" "));return}$r(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="firebase-heartbeat-database",ZC=1,as="firebase-heartbeat-store";let Oa=null;function a_(){return Oa||(Oa=vC(JC,ZC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}}).catch(t=>{throw fn.create("idb-open",{originalErrorMessage:t.message})})),Oa}async function eS(t){try{return await(await a_()).transaction(as).objectStore(as).get(u_(t))}catch(e){if(e instanceof Pn)Zn.warn(e.message);else{const n=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function Sf(t,e){try{const r=(await a_()).transaction(as,"readwrite");await r.objectStore(as).put(e,u_(t)),await r.done}catch(n){if(n instanceof Pn)Zn.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function u_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=1024,nS=30*24*60*60*1e3;class rS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=If();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=nS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=If(),{heartbeatsToSend:r,unsentEntries:i}=iS(this._heartbeatsCache.heartbeats),s=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function If(){return new Date().toISOString().substring(0,10)}function iS(t,e=tS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $E()?HE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tf(t){return Yo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){$r(new Jn("platform-logger",e=>new EC(e),"PRIVATE")),$r(new Jn("heartbeat",e=>new rS(e),"PRIVATE")),pn(Wu,Cf,t),pn(Wu,Cf,"esm2017"),pn("fire-js","")}oS("");function cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function c_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lS=c_,d_=new xs("auth","Firebase",c_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new ld("@firebase/auth");function aS(t,...e){tl.logLevel<=V.WARN&&tl.warn(`Auth (${ri}): ${t}`,...e)}function yo(t,...e){tl.logLevel<=V.ERROR&&tl.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw dd(t,...e)}function vt(t,...e){return dd(t,...e)}function uS(t,e,n){const r=Object.assign(Object.assign({},lS()),{[e]:n});return new xs("auth","Firebase",r).create(e,{appName:t.name})}function dd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return d_.create(t,...e)}function O(t,e,...n){if(!t)throw dd(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function Ft(t,e){t||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cS(){return kf()==="http:"||kf()==="https:"}function kf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cS()||WE()||"connection"in navigator)?navigator.onLine:!0}function hS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||t_()}get(){return dS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new Ps(3e4,6e4);function Rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nn(t,e,n,r,i={}){return f_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ni(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),h_.fetch()(p_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function f_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fS),e);try{const i=new gS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ro(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ro(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uS(t,c,u);ht(t,c)}}catch(i){if(i instanceof Pn)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function Rs(t,e,n,r,i={}){const s=await Nn(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function p_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hd(t.config,i):`${t.config.apiScheme}://${i}`}function mS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),pS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}function xf(t){return t!==void 0&&t.enterprise!==void 0}class _S{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function vS(t,e){return Nn(t,"GET","/v2/recaptchaConfig",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(t,e){return Nn(t,"POST","/v1/accounts:delete",e)}async function wS(t,e){return Nn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ES(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),i=fd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ui(Da(i.auth_time)),issuedAtTime:Ui(Da(i.iat)),expirationTime:Ui(Da(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Da(t){return Number(t)*1e3}function fd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xo(n);return i?JSON.parse(i):(yo("Failed to decode base64 JWT payload"),null)}catch(i){return yo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function CS(t){const e=fd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&SS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await us(t,wS(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xS(s.providerUserInfo):[],l=kS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new m_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function TS(t){const e=Ae(t);await nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xS(t){return t.map(e=>{var{providerId:n}=e,r=cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e){const n=await f_(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=p_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",h_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RS(t,e){return Nn(t,"POST","/v2/accounts:revokeToken",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cs;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new m_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await us(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ES(this,e)}reload(){return TS(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await us(this,yS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:I,providerData:P,stsTokenManager:R}=n;O(m&&R,e,"internal-error");const N=cs.fromJSON(this.name,R);O(typeof m=="string",e,"internal-error"),Vt(d,e.name),Vt(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof I=="boolean",e,"internal-error"),Vt(_,e.name),Vt(g,e.name),Vt(v,e.name),Vt(T,e.name),Vt(p,e.name),Vt(f,e.name);const K=new $n({uid:m,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:I,photoURL:g,phoneNumber:_,tenantId:v,stsTokenManager:N,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&(K.providerData=P.map(F=>Object.assign({},F))),T&&(K._redirectEventId=T),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new cs;i.updateFromServerResponse(n);const s=new $n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function Rt(t){Ft(t instanceof Function,"Expected a class definition");let e=Pf.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g_.type="NONE";const Rf=g_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Or{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wo(this.userKey,i.apiKey,s),this.fullPersistenceKey=wo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Or(Rt(Rf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rt(Rf);const o=wo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=$n._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Or(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Or(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(__(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E_(e))return"Blackberry";if(C_(e))return"Webos";if(pd(e))return"Safari";if((e.includes("chrome/")||v_(e))&&!e.includes("edge/"))return"Chrome";if(w_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function __(t=Te()){return/firefox\//i.test(t)}function pd(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v_(t=Te()){return/crios\//i.test(t)}function y_(t=Te()){return/iemobile/i.test(t)}function w_(t=Te()){return/android/i.test(t)}function E_(t=Te()){return/blackberry/i.test(t)}function C_(t=Te()){return/webos/i.test(t)}function Ul(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NS(t=Te()){var e;return Ul(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AS(){return VE()&&document.documentMode===10}function S_(t=Te()){return Ul(t)||w_(t)||C_(t)||E_(t)||/windows phone/i.test(t)||y_(t)}function OS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e=[]){let n;switch(t){case"Browser":n=Nf(Te());break;case"Worker":n=`${Nf(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t,e={}){return Nn(t,"GET","/v2/passwordPolicy",Rn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=6;class bS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.beforeStateQueue=new DS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Or.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LS(this),n=new bS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function lr(t){return Ae(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=JE(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function T_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",US().appendChild(r)})}function jS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BS="https://www.google.com/recaptcha/enterprise.js?render=",zS="recaptcha-enterprise",WS="NO_RECAPTCHA";class VS{constructor(e){this.type=zS,this.auth=lr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{vS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new _S(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;xf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(WS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&xf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}T_(BS+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Of(t,e,n,r=!1){const i=new VS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Of(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Of(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t,e){const n=ud(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zo(s,e??{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function HS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GS(t,e,n){const r=lr(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=k_(e),{host:o,port:l}=KS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qS()}function k_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KS(t){const e=k_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Df(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Df(o)}}}function Df(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function QS(t,e){return Nn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return Rs(t,"POST","/v1/accounts:signInWithPassword",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e){return Rs(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}async function JS(t,e){return Rs(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends md{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ds(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ds(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gu(e,n,"signInWithPassword",YS);case"emailLink":return XS(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gu(e,r,"signUpPassword",QS);case"emailLink":return JS(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e){return Rs(t,"POST","/v1/accounts:signInWithIdp",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="http://localhost";class er extends md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new er(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}buildRequest(){const e={requestUri:ZS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tI(t){const e=xi(Pi(t)).link,n=e?xi(Pi(e)).deep_link_id:null,r=xi(Pi(t)).deep_link_id;return(r?xi(Pi(r)).link:null)||r||n||e||t}class gd{constructor(e){var n,r,i,s,o,l;const a=xi(Pi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=eI((i=a.mode)!==null&&i!==void 0?i:null);O(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=tI(e);try{return new gd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(e,n){return ds._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gd.parseLink(n);return O(r,"argument-error"),ds._fromEmailAndCode(e,r.code,r.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends x_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ns{constructor(){super("facebook.com")}static credential(e){return er._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return er._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ns{constructor(){super("github.com")}static credential(e){return er._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ns{constructor(){super("twitter.com")}static credential(e,n){return er._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return Rs(t,"POST","/v1/accounts:signUp",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $n._fromIdTokenResponse(e,r,i),o=Lf(r);return new tr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lf(r);return new tr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends Pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rl(e,n,r,i)}}function P_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rl._fromErrorAndOperation(t,s,e,r):s})}async function rI(t,e,n=!1){const r=await us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await us(t,P_(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=fd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),tr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e,n=!1){const r="signIn",i=await P_(t,r,e),s=await tr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function sI(t,e){return R_(lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(t){const e=lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oI(t,e,n){const r=lr(t),o=await Gu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nI).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&N_(t),a}),l=await tr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function lI(t,e,n){return sI(Ae(t),ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&N_(t),r})}function aI(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function uI(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function cI(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}const il="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(il,"1"),this.storage.removeItem(il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){const t=Te();return pd(t)||Ul(t)}const hI=1e3,fI=10;class O_ extends A_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dI()&&OS(),this.fallbackToPolling=S_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}O_.type="LOCAL";const pI=O_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_ extends A_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D_.type="SESSION";const L_=D_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await mI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=_d("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return window}function _I(t){yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function vI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wI(){return M_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="firebaseLocalStorageDb",EI=1,sl="firebaseLocalStorage",F_="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bl(t,e){return t.transaction([sl],e?"readwrite":"readonly").objectStore(sl)}function CI(){const t=indexedDB.deleteDatabase(b_);return new As(t).toPromise()}function Ku(){const t=indexedDB.open(b_,EI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sl,{keyPath:F_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sl)?e(r):(r.close(),await CI(),e(await Ku()))})})}async function Mf(t,e,n){const r=Bl(t,!0).put({[F_]:e,value:n});return new As(r).toPromise()}async function SI(t,e){const n=Bl(t,!1).get(e),r=await new As(n).toPromise();return r===void 0?null:r.value}function bf(t,e){const n=Bl(t,!0).delete(e);return new As(n).toPromise()}const II=800,TI=3;class U_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ku(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(wI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vI(),!this.activeServiceWorker)return;this.sender=new gI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ku();return await Mf(e,il,"1"),await bf(e,il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bl(i,!1).getAll();return new As(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U_.type="LOCAL";const kI=U_;new Ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t,e){return e?Rt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PI(t){return R_(t.auth,new vd(t),t.bypassAuthState)}function RI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),iI(n,new vd(t),t.bypassAuthState)}async function NI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),rI(n,new vd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PI;case"linkViaPopup":case"linkViaRedirect":return NI;case"reauthViaPopup":case"reauthViaRedirect":return RI;default:ht(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new Ps(2e3,1e4);class Ir extends j_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=_d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AI.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="pendingRedirect",Eo=new Map;class DI extends j_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const r=await LI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LI(t,e){const n=FI(e),r=bI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function MI(t,e){Eo.set(t._key(),e)}function bI(t){return Rt(t._redirectPersistence)}function FI(t){return wo(OI,t.config.apiKey,t.name)}async function UI(t,e,n=!1){const r=lr(t),i=xI(r,e),o=await new DI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=10*60*1e3;class BI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ff(e))}saveEventToCache(e){this.cachedEventUids.add(Ff(e)),this.lastProcessedEventTime=Date.now()}}function Ff(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(t,e={}){return Nn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$I=/^https?/;async function HI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WI(t);for(const n of e)try{if(GI(n))return}catch{}ht(t,"unauthorized-domain")}function GI(t){const e=Hu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$I.test(n))return!1;if(VI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new Ps(3e4,6e4);function Uf(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qI(t){return new Promise((e,n)=>{var r,i,s;function o(){Uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uf(),n(vt(t,"network-request-failed"))},timeout:KI.get()})}if(!((i=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yt().gapi)===null||s===void 0)&&s.load)o();else{const l=jS("iframefcb");return yt()[l]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},T_(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Co=null,e})}let Co=null;function QI(t){return Co=Co||qI(t),Co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new Ps(5e3,15e3),XI="__/auth/iframe",JI="emulator/auth/iframe",ZI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tT(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hd(e,JI):`https://${t.config.authDomain}/${XI}`,r={apiKey:e.apiKey,appName:t.name,v:ri},i=eT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ni(r).slice(1)}`}async function nT(t){const e=await QI(t),n=yt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:tT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),l=yt().setTimeout(()=>{s(o)},YI.get());function a(){yt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iT=500,sT=600,oT="_blank",lT="http://localhost";class jf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aT(t,e,n,r=iT,i=sT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},rT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(l=v_(u)?oT:n),__(u)&&(e=e||lT,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[_,g])=>`${h}${_}=${g},`,"");if(NS(u)&&l!=="_self")return uT(e||"",l),new jf(null);const d=window.open(e||"",l,c);O(d,t,"popup-blocked");try{d.focus()}catch{}return new jf(d)}function uT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="__/auth/handler",dT="emulator/auth/handler",hT=encodeURIComponent("fac");async function Bf(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(e instanceof x_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ns){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${hT}=${encodeURIComponent(a)}`:"";return`${fT(t)}?${ni(l).slice(1)}${u}`}function fT({config:t}){return t.emulator?hd(t,dT):`https://${t.authDomain}/${cT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="webStorageSupport";class pT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L_,this._completeRedirectFn=UI,this._overrideRedirectResult=MI}async _openPopup(e,n,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Bf(e,n,r,Hu(),i);return aT(e,o,_d())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Bf(e,n,r,Hu(),i);return _I(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nT(e),r=new BI(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(La,{type:La},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[La];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S_()||pd()||Ul()}}const mT=pT;var zf="@firebase/auth",Wf="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vT(t){$r(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I_(t)},u=new FS(r,i,s,a);return HS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$r(new Jn("auth-internal",e=>{const n=lr(e.getProvider("auth").getImmediate());return(r=>new gT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(zf,Wf,_T(t)),pn(zf,Wf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=5*60,wT=e_("authIdTokenMaxAge")||yT;let Vf=null;const ET=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wT)return;const i=n==null?void 0:n.token;Vf!==i&&(Vf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yn(t=l_()){const e=ud(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$S(t,{popupRedirectResolver:mT,persistence:[kI,pI,L_]}),r=e_("authTokenSyncURL");if(r){const s=ET(r);uI(n,s,()=>s(n.currentUser)),aI(n,o=>s(o))}const i=Jg("auth");return i&&GS(n,`http://${i}`),n}vT("Browser");const CT=()=>{const[t,e]=C.useState("");return C.useEffect(()=>{const n=yn(),r=cI(n,i=>{if(i){const s=i.email,o=s.substring(0,s.indexOf("@"));e(o)}else e("")});return()=>r()},[]),w.jsxs("div",{style:$t.navbar,children:[w.jsx("div",{style:$t.logo,children:w.jsx(Sr,{to:"/Homepage",style:$t.link,children:"ShareText"})}),w.jsx("div",{style:$t.navLinks,children:t?w.jsxs(w.Fragment,{children:[w.jsx("a",{href:"/Logout",style:$t.link,children:"Logout"}),w.jsx(Sr,{to:"/Me",style:$t.profileButton,children:t})]}):w.jsxs(w.Fragment,{children:[w.jsx(Sr,{to:"/Login",style:$t.link,children:"Login"}),w.jsx(Sr,{to:"/Signup",style:$t.link,children:"Signup"})]})})]})},$t={profileButton:{padding:"8px 12px",textDecoration:"none",color:"#ecf0f1",backgroundColor:"#3498db",borderRadius:"5px",transition:"background-color 0.3s ease",fontWeight:"bold",marginLeft:"10px"},navbar:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem",backgroundColor:"#2c3e50",color:"#ecf0f1",position:"fixed",top:"0",left:"0",right:"0",zIndex:"1000"},logo:{fontSize:"1.5rem",fontWeight:"bold",margin:"0"},navLinks:{display:"flex",alignItems:"center"},link:{margin:"0 1rem",textDecoration:"none",color:"#ecf0f1"}},$f="@firebase/database",Hf="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z_="";function ST(t){z_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IT(e)}}catch{}return new TT},Bn=W_("localStorage"),qu=W_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new ld("@firebase/database"),kT=function(){let t=1;return function(){return t++}}(),V_=function(t){const e=tC(t),n=new XE;n.update(e);const r=n.digest();return id.encodeByteArray(r)},Os=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Os.apply(null,r):typeof r=="object"?e+=ae(r):e+=r,e+=" "}return e};let Hn=null,Gf=!0;const xT=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Lr.logLevel=V.VERBOSE,Hn=Lr.log.bind(Lr),e&&qu.set("logging_enabled",!0)):typeof t=="function"?Hn=t:(Hn=null,qu.remove("logging_enabled"))},Se=function(...t){if(Gf===!0&&(Gf=!1,Hn===null&&qu.get("logging_enabled")===!0&&xT(!0)),Hn){const e=Os.apply(null,t);Hn(e)}},Ds=function(t){return function(...e){Se(t,...e)}},Qu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Os(...t);Lr.error(e)},Ut=function(...t){const e=`FIREBASE FATAL ERROR: ${Os(...t)}`;throw Lr.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+Os(...t);Lr.warn(e)},PT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},RT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},nr="[MIN_NAME]",wn="[MAX_NAME]",si=function(t,e){if(t===e)return 0;if(t===nr||e===wn)return-1;if(e===nr||t===wn)return 1;{const n=Kf(t),r=Kf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},NT=function(t,e){return t===e?0:t<e?-1:1},yi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ae(e))},wd=function(t){if(typeof t!="object"||t===null)return ae(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ae(e[r]),n+=":",n+=wd(t[e[r]]);return n+="}",n},$_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const H_=function(t){S(!yd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},AT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const LT=new RegExp("^-?(0*)\\d{1,10}$"),MT=-2147483648,bT=2147483647,Kf=function(t){if(LT.test(t)){const e=Number(t);if(e>=MT&&e<=bT)return e}return null},oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},FT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class Mr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="5",G_="v",K_="s",q_="r",Q_="f",Y_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,X_="ls",J_="p",Yu="ac",Z_="websocket",ev="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function nv(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===Z_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ev)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BT(t)&&(n.ns=t.namespace);const i=[];return je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.counters_={}}incrementCounter(e,n=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return LE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={},ba={};function Cd(t){const e=t.toString();return Ma[e]||(Ma[e]=new zT),Ma[e]}function WT(t,e){const n=t.toString();return ba[n]||(ba[n]=e()),ba[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="start",$T="close",HT="pLPCommand",GT="pRTLPCB",rv="id",iv="pw",sv="ser",KT="cb",qT="seg",QT="ts",YT="d",XT="dframe",ov=1870,lv=30,JT=ov-lv,ZT=25e3,ek=3e4;class Tr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ds(e),this.stats_=Cd(n),this.urlFn=a=>(this.appCheckToken&&(a[Yu]=this.appCheckToken),nv(n,ev,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ek)),RT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sd((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qf)this.id=l,this.password=a;else if(o===$T)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[qf]="t",r[sv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[KT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[G_]=Ed,this.transportSessionId&&(r[K_]=this.transportSessionId),this.lastSessionId&&(r[X_]=this.lastSessionId),this.applicationId&&(r[J_]=this.applicationId),this.appCheckToken&&(r[Yu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Y_.test(location.hostname)&&(r[q_]=Q_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tr.forceAllow_=!0}static forceDisallow(){Tr.forceDisallow_=!0}static isAvailable(){return Tr.forceAllow_?!0:!Tr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AT()&&!OT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yg(n),i=$_(r,JT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[XT]="t",r[rv]=e,r[iv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kT(),window[HT+this.uniqueCallbackIdentifier]=e,window[GT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rv]=this.myID,e[iv]=this.myPW,e[sv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lv+r.length<=ov;){const o=this.pendingSegs.shift();r=r+"&"+qT+i+"="+o.seg+"&"+QT+i+"="+o.ts+"&"+YT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ZT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=16384,nk=45e3;let ol=null;typeof MozWebSocket<"u"?ol=MozWebSocket:typeof WebSocket<"u"&&(ol=WebSocket);class st{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ds(this.connId),this.stats_=Cd(n),this.connURL=st.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[G_]=Ed,typeof location<"u"&&location.hostname&&Y_.test(location.hostname)&&(o[q_]=Q_),n&&(o[K_]=n),r&&(o[X_]=r),i&&(o[Yu]=i),s&&(o[J_]=s),nv(e,Z_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let r;n_(),this.mySock=new ol(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ol!==null&&!st.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ls(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$_(n,tk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tr,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=st&&st.isAvailable();let r=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[st];else{const i=this.transports_=[];for(const s of hs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);hs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=6e4,ik=5e3,sk=10*1024,ok=100*1024,Fa="t",Qf="d",lk="s",Yf="r",ak="e",Xf="o",Jf="a",Zf="n",ep="p",uk="h";class ck{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ds("c:"+this.id+":"),this.transportManager_=new hs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ok?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fa in e){const n=e[Fa];n===Jf?this.upgradeIfSecondaryHealthy_():n===Yf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=yi("t",e),r=yi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ep,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=yi("t",e),r=yi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=yi(Fa,e);if(Qf in e){const r=e[Qf];if(n===uk){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Zf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lk?this.onConnectionShutdown_(r):n===Yf?this.onReset_(r):n===ak?Qu("Server Error: "+r):n===Xf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ed!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ik))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ep,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends uv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!od()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ll}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=32,np=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new $("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function En(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function cv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function dv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return xe(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fv(t,e){if(En(t)!==En(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(En(t)>En(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class hk{constructor(e,n){this.errorPrefix_=n,this.parts_=dv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Fl(this.parts_[r]);pv(this)}}function fk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fl(e),pv(t)}function pk(t){const e=t.parts_.pop();t.byteLength_-=Fl(e),t.parts_.length>0&&(t.byteLength_-=1)}function pv(t){if(t.byteLength_>np)throw new Error(t.errorPrefix_+"has a key path longer than "+np+" bytes ("+t.byteLength_+").");if(t.parts_.length>tp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tp+") or object contains a cycle "+bn(t))}function bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends uv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Id}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=1e3,mk=60*5*1e3,rp=30*1e3,gk=1.3,_k=3e4,vk="server_kill",ip=3;class Ot extends av{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=Ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wi,this.maxReconnectDelay_=mk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!n_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Id.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ae(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ml,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ot.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Et(e,"w")){const r=Vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=QE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ae(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qu("Unrecognized action received from server: "+ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_k&&(this.reconnectDelay_=wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new ck(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ue(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(vk)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ue(d),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ju(this.interruptReasons_)&&(this.reconnectDelay_=wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>wd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ip&&(this.reconnectDelay_=rp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ip&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+z_.replace(/\./g,"-")]=1,od()?e["framework.cordova"]=1:t_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ll.getInstance().currentlyOnline();return ju(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(nr,e),i=new b(nr,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;class mv extends zl{static get __EMPTY_NODE(){return io}static set __EMPTY_NODE(e){io=e}compare(e,n){return si(e.name,n.name)}isDefinedOn(e){throw ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(wn,io)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,io)}toString(){return".key"}}const Gn=new mv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pe.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class yk{copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new so(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new so(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new yk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t,e){return si(t.name,e.name)}function Td(t,e){return si(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;function Ek(t){Xu=t}const gv=function(t){return typeof t=="number"?"number:"+H_(t):"string:"+t},_v=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else S(t===Xu||t.isEmpty(),"priority of unexpected type.");S(t===Xu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_v(this.priorityNode_)}static set __childrenNodeConstructor(e){sp=e}static get __childrenNodeConstructor(){return sp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:U(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||En(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=H_(this.value_):e+=this.value_,this.lazyHash_=V_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),s=he.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vv,yv;function Ck(t){vv=t}function Sk(t){yv=t}class Ik extends zl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?si(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(wn,new he("[PRIORITY-POST]",yv))}makePost(e,n){const r=vv(e);return new b(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new Ik;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=Math.log(2);class kk{constructor(e){const n=s=>parseInt(Math.log(s)/Tk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const al=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new pe(h,d.node,pe.BLACK,null,null);{const _=parseInt(c/2,10)+a,g=i(a,_),v=i(_+1,u);return d=t[_],h=n?n(d):d,new pe(h,d.node,pe.BLACK,g,v)}},s=function(a){let u=null,c=null,d=t.length;const h=function(g,v){const T=d-g,p=d;d-=g;const f=i(T+1,p),m=t[T],y=n?n(m):m;_(new pe(y,m.node,v,null,f))},_=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),T=Math.pow(2,a.count-(g+1));v?h(T,pe.BLACK):(h(T,pe.BLACK),h(T,pe.RED))}return c},o=new kk(t.length),l=s(o);return new Le(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;const cr={};class Nt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(cr&&Z,"ChildrenNode.ts has not been loaded"),Ua=Ua||new Nt({".priority":cr},{".priority":Z}),Ua}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Gn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=al(r,e.getCompare()):l=cr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Nt(c,u)}addToIndexes(e,n){const r=Jo(this.indexes_,(i,s)=>{const o=Vr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),al(l,o.getCompare())}else return cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new Nt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Jo(this.indexes_,i=>{if(i===cr)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new Nt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&_v(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ei||(Ei=new A(new Le(Td),null,Nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ei}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ei:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ei:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{S(U(e)!==".priority"||En(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(H(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gv(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":V_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ls?-1:0}withIndex(e){if(e===Gn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Gn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Gn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xk extends A{constructor(){super(new Le(Td),A.EMPTY_NODE,Nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Ls=new xk;Object.defineProperties(b,{MIN:{value:new b(nr,A.EMPTY_NODE)},MAX:{value:new b(wn,Ls)}});mv.__EMPTY_NODE=A.EMPTY_NODE;he.__childrenNodeConstructor=A;Ek(Ls);Sk(Ls);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=!0;function me(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,me(e))}if(!(t instanceof Array)&&Pk){const n=[];let r=!1;if(je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=me(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=al(n,wk,o=>o.name,Td);if(r){const o=al(n,Z.getCompare());return new A(s,me(e),new Nt({".priority":o},{".priority":Z}))}else return new A(s,me(e),Nt.Default)}else{let n=A.EMPTY_NODE;return je(t,(r,i)=>{if(Et(t,r)&&r.substring(0,1)!=="."){const s=me(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(me(e))}}Ck(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends zl{constructor(e){super(),this.indexPath_=e,S(!M(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?si(e.name,n.name):s}makePost(e,n){const r=me(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Ls);return new b(wn,e)}toString(){return dv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk extends zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?si(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=me(e);return new b(n,r)}toString(){return".value"}}const wv=new Rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){return{type:"value",snapshotNode:t}}function Hr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ps(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Nk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(fs(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Hr(n,r)):o.trackChildChange(ps(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(fs(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ps(i,s,o))}else r.trackChildChange(Hr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.indexedFilter_=new xd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new b(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(ps(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(fs(n,d));const v=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Hr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(fs(u.name,u.node)),s.trackChildChange(Hr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:nr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new Pd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ok(t){return t.loadsAllData()?new xd(t.getIndex()):t.hasLimit()?new Ak(t):new ms(t)}function Dk(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Lk(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Mk(t,e){const n=t.copy();return n.index_=e,n}function op(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===wv?n="$value":t.index_===Gn?n="$key":(S(t.index_ instanceof kd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ae(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ae(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ae(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ae(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends av{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ds("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ul.getListenId_(e,r),l={};this.listens_[o]=l;const a=op(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Vr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=ul.getListenId_(e,n);delete this.listens_[r]}get(e){const n=op(e._queryParams),r=e._path.toString(),i=new Ml;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ni(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ls(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){return{value:null,children:new Map}}function Cv(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,cl());const i=t.children.get(r);e=H(e),Cv(i,e,n)}}function Ju(t,e,n){t.value!==null?n(e,t.value):Fk(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Ju(i,s,n)})}function Fk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=10*1e3,jk=30*1e3,Bk=5*60*1e3;class zk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Uk(e);const r=ap+(jk-ap)*Math.random();ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;je(e,(i,s)=>{s>0&&Et(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*Bk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lt||(lt={}));function Sv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=lt.ACK_USER_WRITE,this.source=Sv()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new dl(z(),n,this.revert)}}else return S(U(this.path)===e,"operationForChild called for unrelated child."),new dl(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.source=e,this.path=n,this.type=lt.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new gs(this.source,z()):new gs(this.source,H(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=lt.OVERWRITE}operationForChild(e){return M(this.path)?new rr(this.source,z(),this.snap.getImmediateChild(e)):new rr(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=lt.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new rr(this.source,z(),n.value):new _s(this.source,z(),n)}else return S(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Vk(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Nk(o.childName,o.snapshotNode))}),Ci(t,i,"child_removed",e,r,n),Ci(t,i,"child_added",e,r,n),Ci(t,i,"child_moved",s,r,n),Ci(t,i,"child_changed",e,r,n),Ci(t,i,"value",e,r,n),i}function Ci(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Hk(t,l,a)),o.forEach(l=>{const a=$k(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function $k(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Hk(t,e,n){if(e.childName==null||n.childName==null)throw ti("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e){return{eventCache:t,serverCache:e}}function Bi(t,e,n,r){return Wl(new Cn(e,n,r),t.serverCache)}function Iv(t,e,n,r){return Wl(t.eventCache,new Cn(e,n,r))}function hl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja;const Gk=()=>(ja||(ja=new Le(NT)),ja);class Q{constructor(e,n=Gk()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return je(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(M(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(H(e),n);return s!=null?{path:ue(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(H(e)):new Q(null)}}set(e,n){if(M(e))return new Q(n,this.children);{const r=U(e),s=(this.children.get(r)||new Q(null)).set(H(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(H(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(M(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(H(e)):null}}setTree(e,n){if(M(e))return n;{const r=U(e),s=(this.children.get(r)||new Q(null)).setTree(H(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(M(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(H(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(M(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(H(e),ue(n,i),r):new Q(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new Q(null))}}function zi(t,e,n){if(M(e))return new ct(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=xe(i,e);return s=s.updateChild(o,n),new ct(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new ct(s)}}}function up(t,e,n){let r=t;return je(n,(i,s)=>{r=zi(r,ue(e,i),s)}),r}function cp(t,e){if(M(e))return ct.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new ct(n)}}function Zu(t,e){return ar(t,e)!=null}function ar(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function dp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function mn(t,e){if(M(e))return t;{const n=ar(t,e);return n!=null?new ct(new Q(n)):new ct(t.writeTree_.subtree(e))}}function ec(t){return t.writeTree_.isEmpty()}function Gr(t,e){return Tv(z(),t.writeTree_,e)}function Tv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Tv(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e){return Rv(e,t)}function Kk(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=zi(t.visibleWrites,e,n)),t.lastWriteId=r}function qk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Qk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Yk(l,r.path)?i=!1:ot(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Xk(t),!0;if(r.snap)t.visibleWrites=cp(t.visibleWrites,r.path);else{const l=r.children;je(l,a=>{t.visibleWrites=cp(t.visibleWrites,ue(r.path,a))})}return!0}else return!1}function Yk(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(ue(t.path,n),e))return!0;return!1}function Xk(t){t.visibleWrites=kv(t.allWrites,Jk,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Jk(t){return t.visible}function kv(t,e,n){let r=ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ot(n,o)?(l=xe(n,o),r=zi(r,l,s.snap)):ot(o,n)&&(l=xe(o,n),r=zi(r,z(),s.snap.getChild(l)));else if(s.children){if(ot(n,o))l=xe(n,o),r=up(r,l,s.children);else if(ot(o,n))if(l=xe(o,n),M(l))r=up(r,z(),s.children);else{const a=Vr(s.children,U(l));if(a){const u=a.getChild(H(l));r=zi(r,z(),u)}}}else throw ti("WriteRecord should have .snap or .children")}}return r}function xv(t,e,n,r,i){if(!r&&!i){const s=ar(t.visibleWrites,e);if(s!=null)return s;{const o=mn(t.visibleWrites,e);if(ec(o))return n;if(n==null&&!Zu(o,z()))return null;{const l=n||A.EMPTY_NODE;return Gr(o,l)}}}else{const s=mn(t.visibleWrites,e);if(!i&&ec(s))return n;if(!i&&n==null&&!Zu(s,z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ot(u.path,e)||ot(e,u.path))},l=kv(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Gr(l,a)}}}function Zk(t,e,n){let r=A.EMPTY_NODE;const i=ar(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=mn(t.visibleWrites,e);return n.forEachChild(Z,(o,l)=>{const a=Gr(mn(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),dp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=mn(t.visibleWrites,e);return dp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function e1(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(Zu(t.visibleWrites,s))return null;{const o=mn(t.visibleWrites,s);return ec(o)?i.getChild(n):Gr(o,i.getChild(n))}}function t1(t,e,n,r){const i=ue(e,n),s=ar(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=mn(t.visibleWrites,i);return Gr(o,r.getNode().getImmediateChild(n))}else return null}function n1(t,e){return ar(t.visibleWrites,e)}function r1(t,e,n,r,i,s,o){let l;const a=mn(t.visibleWrites,e),u=ar(a,z());if(u!=null)l=u;else if(n!=null)l=Gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=h.getNext();return c}else return[]}function i1(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function fl(t,e,n,r){return xv(t.writeTree,t.treePath,e,n,r)}function Ad(t,e){return Zk(t.writeTree,t.treePath,e)}function hp(t,e,n,r){return e1(t.writeTree,t.treePath,e,n,r)}function pl(t,e){return n1(t.writeTree,ue(t.treePath,e))}function s1(t,e,n,r,i,s){return r1(t.writeTree,t.treePath,e,n,r,i,s)}function Od(t,e,n){return t1(t.writeTree,t.treePath,e,n)}function Pv(t,e){return Rv(ue(t.treePath,e),t.writeTree)}function Rv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ps(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,fs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Hr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ps(r,e.snapshotNode,i.oldSnap));else throw ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Nv=new l1;class Dd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Od(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),s=s1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){return{filter:t}}function u1(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function c1(t,e,n,r,i){const s=new o1;let o,l;if(n.type===lt.OVERWRITE){const u=n;u.source.fromUser?o=tc(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!M(u.path),o=ml(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===lt.MERGE){const u=n;u.source.fromUser?o=h1(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=nc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===lt.ACK_USER_WRITE){const u=n;u.revert?o=m1(t,e,u.path,r,i,s):o=f1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===lt.LISTEN_COMPLETE)o=p1(t,e,n.path,r,s);else throw ti("Unknown operation type: "+n.type);const a=s.getChanges();return d1(e,o,a),{viewCache:o,changes:a}}function d1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=hl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ev(hl(e)))}}function Av(t,e,n,r,i,s){const o=e.eventCache;if(pl(r,n)!=null)return e;{let l,a;if(M(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ir(e),c=u instanceof A?u:A.EMPTY_NODE,d=Ad(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=fl(r,ir(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){S(En(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=hp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=H(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=hp(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Od(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Bi(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function ml(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(M(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=U(n);if(!a.isCompleteForPath(n)&&En(n)>1)return e;const g=H(n),T=a.getNode().getImmediateChild(_).updateChild(g,r);_===".priority"?u=c.updatePriority(a.getNode(),T):u=c.updateChild(a.getNode(),_,T,g,Nv,null)}const d=Iv(e,u,a.isFullyInitialized()||M(n),c.filtersNodes()),h=new Dd(i,d,s);return Av(t,d,n,i,h,l)}function tc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Dd(i,e,s);if(M(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Bi(e,u,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Bi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=H(n),_=l.getNode().getImmediateChild(d);let g;if(M(h))g=r;else{const v=c.getCompleteChild(d);v!=null?cv(h)===".priority"&&v.getChild(hv(h)).isEmpty()?g=v:g=v.updateChild(h,r):g=A.EMPTY_NODE}if(_.equals(g))a=e;else{const v=t.filter.updateChild(l.getNode(),d,g,h,c,o);a=Bi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function fp(t,e){return t.eventCache.isCompleteForChild(e)}function h1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ue(n,a);fp(e,U(c))&&(l=tc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ue(n,a);fp(e,U(c))||(l=tc(t,l,c,u,i,s,o))}),l}function pp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function nc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;M(n)?u=r:u=new Q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),g=pp(t,_,h);a=ml(t,a,new $(d),g,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const g=e.serverCache.getNode().getImmediateChild(d),v=pp(t,g,h);a=ml(t,a,new $(d),v,i,s,o,l)}}),a}function f1(t,e,n,r,i,s,o){if(pl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ml(t,e,n,a.getNode().getChild(n),i,s,l,o);if(M(n)){let u=new Q(null);return a.getNode().forEachChild(Gn,(c,d)=>{u=u.set(new $(c),d)}),nc(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((c,d)=>{const h=ue(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),nc(t,e,n,u,i,s,l,o)}}function p1(t,e,n,r,i){const s=e.serverCache,o=Iv(e,s.getNode(),s.isFullyInitialized()||M(n),s.isFiltered());return Av(t,o,n,r,Nv,i)}function m1(t,e,n,r,i,s){let o;if(pl(r,n)!=null)return e;{const l=new Dd(r,e,i),a=e.eventCache.getNode();let u;if(M(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=fl(r,ir(e));else{const d=e.serverCache.getNode();S(d instanceof A,"serverChildren would be complete if leaf node"),c=Ad(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=U(n);let d=Od(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,H(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,A.EMPTY_NODE,H(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fl(r,ir(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||pl(r,z())!=null,Bi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new xd(r.getIndex()),s=Ok(r);this.processor_=a1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),c=new Cn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Cn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wl(d,c),this.eventGenerator_=new Wk(this.query_)}get query(){return this.query_}}function _1(t){return t.viewCache_.serverCache.getNode()}function v1(t){return hl(t.viewCache_)}function y1(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function mp(t){return t.eventRegistrations_.length===0}function w1(t,e){t.eventRegistrations_.push(e)}function gp(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function _p(t,e,n,r){e.type===lt.MERGE&&e.source.queryId!==null&&(S(ir(t.viewCache_),"We should always have a full cache before handling merges"),S(hl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=c1(t.processor_,i,e,n,r);return u1(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ov(t,s.changes,s.viewCache.eventCache.getNode(),null)}function E1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push(Hr(s,o))}),n.isFullyInitialized()&&r.push(Ev(n.getNode())),Ov(t,r,n.getNode(),e)}function Ov(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Vk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;class Dv{constructor(){this.views=new Map}}function C1(t){S(!gl,"__referenceConstructor has already been defined"),gl=t}function S1(){return S(gl,"Reference.ts has not been loaded"),gl}function I1(t){return t.views.size===0}function Ld(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),_p(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(_p(o,e,n,r));return s}}function Lv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=fl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Ad(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=Wl(new Cn(l,a,!1),new Cn(r,i,!1));return new g1(e,u)}return o}function T1(t,e,n,r,i,s){const o=Lv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),w1(o,n),E1(o,n)}function k1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Sn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(gp(u,n,r)),mp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(gp(a,n,r)),mp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Sn(t)&&s.push(new(S1())(e._repo,e._path)),{removed:s,events:o}}function Mv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function gn(t,e){let n=null;for(const r of t.views.values())n=n||y1(r,e);return n}function bv(t,e){if(e._queryParams.loadsAllData())return $l(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Fv(t,e){return bv(t,e)!=null}function Sn(t){return $l(t)!=null}function $l(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;function x1(t){S(!_l,"__referenceConstructor has already been defined"),_l=t}function P1(){return S(_l,"Reference.ts has not been loaded"),_l}let R1=1;class vp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=i1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Uv(t,e,n,r,i){return Kk(t.pendingWriteTree_,e,n,r,i),i?bs(t,new rr(Sv(),e,n)):[]}function zn(t,e,n=!1){const r=qk(t.pendingWriteTree_,e);if(Qk(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(z(),!0):je(r.children,o=>{s=s.set(new $(o),!0)}),bs(t,new dl(r.path,s,n))}else return[]}function Ms(t,e,n){return bs(t,new rr(Rd(),e,n))}function N1(t,e,n){const r=Q.fromObject(n);return bs(t,new _s(Rd(),e,r))}function A1(t,e){return bs(t,new gs(Rd(),e))}function O1(t,e,n){const r=bd(t,n);if(r){const i=Fd(r),s=i.path,o=i.queryId,l=xe(s,e),a=new gs(Nd(o),l);return Ud(t,s,a)}else return[]}function jv(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Fv(o,e))){const a=k1(o,e,n,r);I1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>Sn(_));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=b1(h);for(let g=0;g<_.length;++g){const v=_[g],T=v.query,p=Vv(t,v);t.listenProvider_.startListening(Wi(T),vs(t,T),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Wi(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(Hl(h));t.listenProvider_.stopListening(Wi(h),_)}))}F1(t,u)}return l}function Bv(t,e,n,r){const i=bd(t,r);if(i!=null){const s=Fd(i),o=s.path,l=s.queryId,a=xe(o,e),u=new rr(Nd(l),a,n);return Ud(t,o,u)}else return[]}function D1(t,e,n,r){const i=bd(t,r);if(i){const s=Fd(i),o=s.path,l=s.queryId,a=xe(o,e),u=Q.fromObject(n),c=new _s(Nd(l),a,u);return Ud(t,o,c)}else return[]}function L1(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const g=xe(h,i);s=s||gn(_,g),o=o||Sn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Sn(l),s=s||gn(l,z())):(l=new Dv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,g)=>{const v=gn(g,z());v&&(s=s.updateImmediateChild(_,v))}));const u=Fv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Hl(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=U1();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const c=Vl(t.pendingWriteTree_,i);let d=T1(l,e,n,c,s,a);if(!u&&!o&&!r){const h=bv(l,e);d=d.concat(j1(t,e,h))}return d}function Md(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xe(o,e),u=gn(l,a);if(u)return u});return xv(i,e,s,n,!0)}function M1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=xe(u,n);r=r||gn(c,d)});let i=t.syncPointTree_.get(n);i?r=r||gn(i,z()):(i=new Dv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Cn(r,!0,!1):null,l=Vl(t.pendingWriteTree_,e._path),a=Lv(i,e,l,s?o.getNode():A.EMPTY_NODE,s);return v1(a)}function bs(t,e){return zv(e,t.syncPointTree_,null,Vl(t.pendingWriteTree_,z()))}function zv(t,e,n,r){if(M(t.path))return Wv(t,e,n,r);{const i=e.get(z());n==null&&i!=null&&(n=gn(i,z()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Pv(r,o);s=s.concat(zv(l,a,u,c))}return i&&(s=s.concat(Ld(i,t,r,n))),s}}function Wv(t,e,n,r){const i=e.get(z());n==null&&i!=null&&(n=gn(i,z()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Pv(r,o),c=t.operationForChild(o);c&&(s=s.concat(Wv(c,l,a,u)))}),i&&(s=s.concat(Ld(i,t,r,n))),s}function Vv(t,e){const n=e.query,r=vs(t,n);return{hashFn:()=>(_1(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?O1(t,n._path,r):A1(t,n._path);{const s=DT(i,n);return jv(t,n,null,s)}}}}function vs(t,e){const n=Hl(e);return t.queryToTagMap.get(n)}function Hl(t){return t._path.toString()+"$"+t._queryIdentifier}function bd(t,e){return t.tagToQueryMap.get(e)}function Fd(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function Ud(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=Vl(t.pendingWriteTree_,e);return Ld(r,n,i,null)}function b1(t){return t.fold((e,n,r)=>{if(n&&Sn(n))return[$l(n)];{let i=[];return n&&(i=Mv(n)),je(r,(s,o)=>{i=i.concat(o)}),i}})}function Wi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(P1())(t._repo,t._path):t}function F1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function U1(){return R1++}function j1(t,e,n){const r=e._path,i=vs(t,e),s=Vv(t,n),o=t.listenProvider_.startListening(Wi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!Sn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!M(u)&&c&&Sn(c))return[$l(c).query];{let h=[];return c&&(h=h.concat(Mv(c).map(_=>_.query))),je(d,(_,g)=>{h=h.concat(g)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Wi(c),vs(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jd(n)}node(){return this.node_}}class Bd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new Bd(this.syncTree_,n)}node(){return Md(this.syncTree_,this.path_)}}const B1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yp=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return z1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return W1(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},z1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},W1=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},V1=function(t,e,n,r){return zd(e,new Bd(n,t),r)},$v=function(t,e,n){return zd(t,new jd(e),n)};function zd(t,e,n){const r=t.getPriority().val(),i=yp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=yp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,me(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new he(i))),o.forEachChild(Z,(l,a)=>{const u=zd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Vd(t,e){let n=e instanceof $?e:new $(e),r=t,i=U(n);for(;i!==null;){const s=Vr(r.node.children,i)||{children:{},childCount:0};r=new Wd(i,r,s),n=H(n),i=U(n)}return r}function li(t){return t.node.value}function Hv(t,e){t.node.value=e,rc(t)}function Gv(t){return t.node.childCount>0}function $1(t){return li(t)===void 0&&!Gv(t)}function Gl(t,e){je(t.node.children,(n,r)=>{e(new Wd(n,t,r))})}function Kv(t,e,n,r){n&&!r&&e(t),Gl(t,i=>{Kv(i,e,!0,r)}),n&&r&&e(t)}function H1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Fs(t){return new $(t.parent===null?t.name:Fs(t.parent)+"/"+t.name)}function rc(t){t.parent!==null&&G1(t.parent,t.name,t)}function G1(t,e,n){const r=$1(n),i=Et(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,rc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,rc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=/[\[\].#$\/\u0000-\u001F\u007F]/,q1=/[\[\].#$\u0000-\u001F\u007F]/,Ba=10*1024*1024,$d=function(t){return typeof t=="string"&&t.length!==0&&!K1.test(t)},qv=function(t){return typeof t=="string"&&t.length!==0&&!q1.test(t)},Q1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qv(t)},wp=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!yd(t)||t&&typeof t=="object"&&Et(t,".sv")},Kl=function(t,e,n,r){r&&e===void 0||Hd(bl(t,"value"),e,n)},Hd=function(t,e,n){const r=n instanceof $?new hk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bn(r));if(typeof e=="function")throw new Error(t+"contains a function "+bn(r)+" with contents = "+e.toString());if(yd(e))throw new Error(t+"contains "+e.toString()+" "+bn(r));if(typeof e=="string"&&e.length>Ba/3&&Fl(e)>Ba)throw new Error(t+"contains a string greater than "+Ba+" utf8 bytes "+bn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!$d(o)))throw new Error(t+" contains an invalid key ("+o+") "+bn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fk(r,o),Hd(t,l,r),pk(r)}),i&&s)throw new Error(t+' contains ".value" child '+bn(r)+" in addition to actual children.")}},Y1=function(t,e,n,r){if(!(r&&n===void 0)&&!$d(n))throw new Error(bl(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Gd=function(t,e,n,r){if(!(r&&n===void 0)&&!qv(n))throw new Error(bl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},X1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gd(t,e,n,r)},J1=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Z1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$d(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Q1(n))throw new Error(bl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qv(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!fv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function wt(t,e,n){Qv(t,n),tx(t,r=>ot(r,e)||ot(e,r))}function tx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(nx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Hn&&Se("event: "+n.toString()),oi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="repo_interrupt",ix=25;class sx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ex,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cl(),this.transactionQueueTree_=new Wd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ox(t,e,n){if(t.stats_=Cd(t.repoInfo_),t.forceRestClient_||FT())t.server_=new ul(t.repoInfo_,(r,i,s,o)=>{Ep(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Cp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ae(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ot(t.repoInfo_,e,(r,i,s,o)=>{Ep(t,r,i,s,o)},r=>{Cp(t,r)},r=>{ax(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=WT(t.repoInfo_,()=>new zk(t.stats_,t.server_)),t.infoData_=new bk,t.infoSyncTree_=new vp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ms(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),qd(t,"connected",!1),t.serverSyncTree_=new vp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);wt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lx(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kd(t){return B1({timestamp:lx(t)})}function Ep(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Jo(n,u=>me(u));o=D1(t.serverSyncTree_,s,a,i)}else{const a=me(n);o=Bv(t.serverSyncTree_,s,a,i)}else if(r){const a=Jo(n,u=>me(u));o=N1(t.serverSyncTree_,s,a)}else{const a=me(n);o=Ms(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ql(t,s)),wt(t.eventQueue_,l,o)}function Cp(t,e){qd(t,"connected",e),e===!1&&dx(t)}function ax(t,e){je(e,(n,r)=>{qd(t,n,r)})}function qd(t,e,n){const r=new $("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(r,i);const s=Ms(t.infoSyncTree_,r,i);wt(t.eventQueue_,r,s)}function Yv(t){return t.nextWriteId_++}function ux(t,e,n){const r=M1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=me(i).withIndex(e._queryParams.getIndex());L1(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ms(t.serverSyncTree_,e._path,s);else{const l=vs(t.serverSyncTree_,e);o=Bv(t.serverSyncTree_,e._path,s,l)}return wt(t.eventQueue_,e._path,o),jv(t.serverSyncTree_,e,n,null,!0),s},i=>(ql(t,"get for query "+ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function cx(t,e,n,r,i){ql(t,"set",{path:e.toString(),value:n,priority:r});const s=Kd(t),o=me(n,r),l=Md(t.serverSyncTree_,e),a=$v(o,l,s),u=Yv(t),c=Uv(t.serverSyncTree_,e,a,u,!0);Qv(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const g=h==="ok";g||Ue("set at "+e+" failed: "+h);const v=zn(t.serverSyncTree_,u,!g);wt(t.eventQueue_,e,v),fx(t,i,h,_)});const d=ty(t,e);Ql(t,d),wt(t.eventQueue_,d,[])}function dx(t){ql(t,"onDisconnectEvents");const e=Kd(t),n=cl();Ju(t.onDisconnect_,z(),(i,s)=>{const o=V1(i,s,t.serverSyncTree_,e);Cv(n,i,o)});let r=[];Ju(n,z(),(i,s)=>{r=r.concat(Ms(t.serverSyncTree_,i,s));const o=ty(t,i);Ql(t,o)}),t.onDisconnect_=cl(),wt(t.eventQueue_,z(),r)}function hx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rx)}function ql(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function fx(t,e,n,r){e&&oi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Xv(t,e,n){return Md(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Qd(t,e=t.transactionQueueTree_){if(e||Yl(t,e),li(e)){const n=Zv(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&px(t,Fs(e),n)}else Gv(e)&&Gl(e,n=>{Qd(t,n)})}function px(t,e,n){const r=n.map(u=>u.currentWriteId),i=Xv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];S(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=xe(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{ql(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(zn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Yl(t,Vd(t.transactionQueueTree_,e)),Qd(t,t.transactionQueueTree_),wt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)oi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ue("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ql(t,e)}},o)}function Ql(t,e){const n=Jv(t,e),r=Fs(n),i=Zv(t,n);return mx(t,i,r),r}function mx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=xe(n,a.path);let c=!1,d;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(zn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ix)c=!0,d="maxretry",i=i.concat(zn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Xv(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){Hd("transaction failed: Data returned ",_,a.path);let g=me(_);typeof _=="object"&&_!=null&&Et(_,".priority")||(g=g.updatePriority(h.getPriority()));const T=a.currentWriteId,p=Kd(t),f=$v(g,h,p);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=f,a.currentWriteId=Yv(t),o.splice(o.indexOf(T),1),i=i.concat(Uv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(zn(t.serverSyncTree_,T,!0))}else c=!0,d="nodata",i=i.concat(zn(t.serverSyncTree_,a.currentWriteId,!0))}wt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Yl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)oi(r[l]);Qd(t,t.transactionQueueTree_)}function Jv(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&li(r)===void 0;)r=Vd(r,n),e=H(e),n=U(e);return r}function Zv(t,e){const n=[];return ey(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ey(t,e,n){const r=li(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Gl(e,i=>{ey(t,i,n)})}function Yl(t,e){const n=li(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Hv(e,n.length>0?n:void 0)}Gl(e,r=>{Yl(t,r)})}function ty(t,e){const n=Fs(Jv(t,e)),r=Vd(t.transactionQueueTree_,e);return H1(r,i=>{za(t,i)}),za(t,r),Kv(r,i=>{za(t,i)}),n}function za(t,e){const n=li(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hv(e,void 0):n.length=s+1,wt(t.eventQueue_,Fs(e),i);for(let o=0;o<r.length;o++)oi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _x(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sp=function(t,e){const n=vx(t),r=n.namespace;n.domain==="firebase.com"&&Ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||PT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new tv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},vx=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=gx(t.substring(c,d)));const h=_x(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ae(this.snapshot.exportVal())}}class wx{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return M(this._path)?null:cv(this._path)}get ref(){return new zt(this._repo,this._path)}get _queryIdentifier(){const e=lp(this._queryParams),n=wd(e);return n==="{}"?"default":n}get _queryObject(){return lp(this._queryParams)}isEqual(e){if(e=Ae(e),!(e instanceof ai))return!1;const n=this._repo===e._repo,r=fv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dk(this._path)}}function Cx(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Yd(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Gn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==nr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==wn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Z){if(e!=null&&!wp(e)||n!=null&&!wp(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(t.getIndex()instanceof kd||t.getIndex()===wv,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ny(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class zt extends ai{constructor(e,n){super(e,n,new Pd,!1)}get parent(){const e=hv(this._path);return e===null?null:new zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ys{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=ws(this.ref,e);return new ys(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ys(i,ws(this.ref,r),Z)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Kr(t,e){return t=Ae(t),t._checkNotDeleted("ref"),e!==void 0?ws(t._root,e):t._root}function ws(t,e){return t=Ae(t),U(t._path)===null?X1("child","path",e,!1):Gd("child","path",e,!1),new zt(t._repo,ue(t._path,e))}function ry(t,e){t=Ae(t),J1("set",t._path),Kl("set",e,t._path,!1);const n=new Ml;return cx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Xd(t){t=Ae(t);const e=new Ex(()=>{}),n=new Jd(e);return ux(t._repo,t,n).then(r=>new ys(r,new zt(t._repo,t._path),t._queryParams.getIndex()))}class Jd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new yx("value",this,new ys(e.snapshotNode,new zt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wx(this,e,n):null}matches(e){return e instanceof Jd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Xl{}class Sx extends Xl{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Kl("endAt",this._value,e._path,!0);const n=Lk(e._queryParams,this._value,this._key);if(ny(n),Yd(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ai(e._repo,e._path,n,e._orderByCalled)}}class Ix extends Xl{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Kl("startAt",this._value,e._path,!0);const n=Dk(e._queryParams,this._value,this._key);if(ny(n),Yd(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ai(e._repo,e._path,n,e._orderByCalled)}}class Tx extends Xl{constructor(e){super(),this._path=e}_apply(e){Cx(e,"orderByChild");const n=new $(this._path);if(M(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new kd(n),i=Mk(e._queryParams,r);return Yd(i),new ai(e._repo,e._path,i,!0)}}function kx(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Gd("orderByChild","path",t,!1),new Tx(t)}class xx extends Xl{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(Kl("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Sx(this._value,this._key)._apply(new Ix(this._value,this._key)._apply(e))}}function Px(t,e){return Y1("equalTo","key",e,!0),new xx(t,e)}function Rx(t,...e){let n=Ae(t);for(const r of e)n=r._apply(n);return n}C1(zt);x1(zt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx="FIREBASE_DATABASE_EMULATOR_HOST",ic={};let Ax=!1;function Ox(t,e,n,r){t.repoInfo_=new tv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Dx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Nx]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Sp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Mr(Mr.OWNER):new jT(t.name,t.options,e);Z1("Invalid Firebase Database URL",o),M(o.path)||Ut("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Mx(l,t,c,new UT(t.name,n));return new bx(d,t)}function Lx(t,e){const n=ic[e];(!n||n[t.key]!==t)&&Ut(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hx(t),delete n[t.key]}function Mx(t,e,n,r){let i=ic[e.name];i||(i={},ic[e.name]=i);let s=i[t.toURLString()];return s&&Ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new sx(t,Ax,n,r),i[t.toURLString()]=s,s}class bx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ox(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Lx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ut("Cannot call "+e+" on a deleted database.")}}function qr(t=l_(),e){const n=ud(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=BE("database");r&&Fx(n,...r)}return n}function Fx(t,e,n,r={}){t=Ae(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ut("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Mr(Mr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:zE(r.mockUserToken,t.app.options.projectId);s=new Mr(o)}Ox(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t){ST(ri),$r(new Jn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Dx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),pn($f,Hf,t),pn($f,Hf,"esm2017")}Ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ux();const jx=async(t,e)=>{if(yn().currentUser==null)return console.log("Not Authenticated"),Promise.reject("User Not Authenticated");try{const r=qr(),s=(await yn()).currentUser.uid,o=Kr(r,"posts/"+t);return await ry(o,{uid:s,text:e}),Promise.resolve()}catch(r){return console.error("An Error Occurred while Uploading the Post, try Renaming the title:",r),alert("An Error Occurred while Uploading the Post, try Renaming the post title"),Promise.reject()}},Bx=async t=>{const e=Kr(qr());console.log(`Trying to get Post With Name ${t}`);try{if((await Xd(ws(e,`posts/${t}`))).exists())return;throw new Error("No Post Found")}catch(n){throw alert("No Post Found"),console.error(n),n}},Zd=async t=>{const e=Kr(qr());console.log(`Trying to get Post With Name ${t}`);try{const n=await Xd(ws(e,`posts/${t}`));if(n.exists()){const r=n.val();return Promise.resolve(r.text)}else return console.log("No data available"),alert("No Post Found"),Promise.reject("No data available")}catch(n){return console.error(n),Promise.reject(n)}},zx=async t=>{try{const e=qr();await ry(Kr(e,`posts/${t}`),null),console.log("Post deleted.")}catch(e){console.error("Error deleting post:",e)}},Wx=()=>w.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[w.jsx(Vx,{}),w.jsx($x,{})]}),Vx=()=>{const[t,e]=C.useState(""),n=xn(),r=()=>{Bx(t).then(()=>{n(`/viewpost/${t}`)})},i=o=>{o.key==="Enter"&&r()},s={container:{maxWidth:"400px",margin:"20px auto",padding:"20px",border:"1px solid #ccc",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",textAlign:"center"},postNameInput:{width:"100%",padding:"10px",fontSize:"16px",marginBottom:"10px",boxSizing:"border-box"},viewPostButton:{width:"100%",padding:"12px",fontSize:"18px",backgroundColor:"#3498db",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.3s"}};return w.jsxs("div",{style:s.container,children:[w.jsx("h2",{children:"View Post"}),w.jsx("input",{type:"text",style:s.postNameInput,placeholder:"Enter Post Name",value:t,onChange:o=>e(o.target.value),onKeyPress:i}),w.jsx("button",{style:s.viewPostButton,onClick:r,children:"View Post"})]})},$x=()=>{const t=xn(),[e,n]=C.useState(!1),r=()=>{t("/Texteditor")},i={createPostButtonContainer:{textAlign:"center"},createPostButton:{marginTop:"20px",padding:"30px 60px",fontSize:"28px",backgroundColor:"#4caf50",color:"#fff",border:"none",borderRadius:"15px",cursor:"pointer",transition:"background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.1)"},createPostButtonHover:{backgroundColor:"#45a049",transform:"scale(1.05)",boxShadow:"0px 12px 20px rgba(0, 0, 0, 0.2)"},createPostButtonPress:{transform:"scale(0.95)",boxShadow:"none"}};return w.jsx("div",{style:i.createPostButtonContainer,children:w.jsx("button",{style:{...i.createPostButton,...e?i.createPostButtonPress:i.createPostButtonHover},onClick:r,onMouseDown:()=>n(!0),onMouseUp:()=>n(!1),onMouseLeave:()=>n(!1),children:"Create Post"})})},Hx=async(t,e)=>{const n=yn();try{const i=(await oI(n,t,e)).user;return Promise.resolve()}catch(r){return console.error("Error signing in:",r),alert(r),Promise.reject(r)}},Gx=async(t,e)=>{const n=yn();try{const i=(await lI(n,t,e)).user;return Promise.resolve()}catch(r){return console.error("Error signing in:",r),alert(r),Promise.reject(r)}},Kx=async()=>{try{return await yn().signOut(),Promise.resolve()}catch(t){return console.error("Error signing out:",t.message),Promise.reject()}},qx=()=>{const[t,e]=C.useState(""),[n,r]=C.useState(""),i=xn(),s=()=>{Gx(t,n).then(()=>{i("/Homepage")})};return w.jsx("div",{style:Ct.background,children:w.jsxs("div",{style:Ct.container,children:[w.jsx("h2",{style:Ct.heading,children:"Login"}),w.jsxs("form",{style:Ct.form,children:[w.jsx("label",{style:Ct.label,htmlFor:"email",children:"Email:"}),w.jsx("input",{type:"text",id:"email",style:Ct.input,value:t,onChange:o=>e(o.target.value)}),w.jsx("label",{style:Ct.label,htmlFor:"password",children:"Password:"}),w.jsx("input",{type:"password",id:"password",style:Ct.input,value:n,onChange:o=>r(o.target.value)}),w.jsx("button",{type:"button",style:Ct.button,onClick:s,children:"Login"})]})]})})},Ct={background:{background:"#f0f0f0",height:"75vh",display:"flex",alignItems:"center",justifyContent:"center",margin:0},container:{background:"#ffffff",padding:"30px",borderRadius:"5px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",maxWidth:"400px",width:"100%",margin:"auto"},heading:{textAlign:"center",marginTop:0},form:{display:"flex",flexDirection:"column"},label:{marginBottom:"8px"},input:{padding:"8px",marginBottom:"16px",border:"1px solid #ccc",borderRadius:"3px"},button:{backgroundColor:"#4caf50",color:"white",padding:"10px",border:"none",borderRadius:"3px",cursor:"pointer"}},Qx=()=>{const[t,e]=C.useState(""),[n,r]=C.useState(""),i=xn(),s=()=>{Hx(t,n).then(()=>{i("/Homepage")})};return w.jsx("div",{style:St.background,children:w.jsxs("div",{style:St.container,children:[w.jsx("h2",{style:St.heading,children:"Signup"}),w.jsxs("form",{style:St.form,children:[w.jsx("label",{style:St.label,htmlFor:"email",children:"Email:"}),w.jsx("input",{type:"text",id:"email",style:St.input,value:t,onChange:o=>e(o.target.value)}),w.jsx("label",{style:St.label,htmlFor:"password",children:"Password:"}),w.jsx("input",{type:"password",id:"password",style:St.input,value:n,onChange:o=>r(o.target.value)}),w.jsx("button",{type:"button",style:St.button,onClick:s,children:"Signup"})]})]})})},St={background:{background:"#f0f0f0",height:"75vh",display:"flex",alignItems:"center",justifyContent:"center",margin:0},container:{background:"#ffffff",padding:"30px",borderRadius:"5px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",maxWidth:"400px",width:"100%",margin:"auto"},heading:{textAlign:"center",marginTop:0},form:{display:"flex",flexDirection:"column"},label:{marginBottom:"8px"},input:{padding:"8px",marginBottom:"16px",border:"1px solid #ccc",borderRadius:"3px"},button:{backgroundColor:"#4caf50",color:"white",padding:"10px",border:"none",borderRadius:"3px",cursor:"pointer"}},Yx=()=>{Zd("Hello World")},Xx=()=>{console.log(yn().currentUser.uid)},Jx=()=>w.jsxs(w.Fragment,{children:[w.jsx("h2",{children:"DEBUG"}),w.jsx("button",{onClick:Yx,children:" Run Code "}),w.jsx("button",{onClick:Xx,children:" Run Code 2 "})]}),Ip=({})=>{const[t,e]=C.useState(""),[n,r]=C.useState(""),[i,s]=C.useState(!1),o=C.useRef(null),l=xn(),{postName:a}=$g();C.useEffect(()=>{a&&(e(a),Zd(a).then(g=>{console.log(g),r(g)}))},[]);const u=g=>{e(g.target.value)},c=g=>{r(g.target.value)},d=()=>{jx(t,n).then(()=>{l("/PostCreated")}).catch(g=>{console.log("Failed To Create Post."),alert(g)})},h={textEditorContainer:{position:"relative",padding:"16px",backgroundColor:"#f0f0f0"},titleInput:{width:"99%",marginBottom:"8px",padding:"8px",fontSize:"18px",fontFamily:"Arial, sans-serif",borderRadius:"4px",border:"1px solid #ccc"},textEditor:{width:"97.4%",minHeight:"300px",padding:"16px",paddingRight:"20px",fontSize:"18px",fontFamily:"Arial, sans-serif",borderRadius:"8px",border:"1px solid #ccc",outline:"none",resize:"vertical"},createPostButton:{marginTop:"16px",marginLeft:"8px",padding:"12px",fontSize:"18px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",transition:"transform 0.3s"},createPostButtonPressed:{transform:"scale(0.95)"}},_=()=>{d(),s(!1)};return w.jsx("div",{children:w.jsxs("div",{style:h.textEditorContainer,children:[w.jsx("input",{style:h.titleInput,type:"text",placeholder:"Enter post title...",value:t,onChange:u}),w.jsx("textarea",{ref:o,style:h.textEditor,value:n,onChange:c,placeholder:"Type your post here..."}),w.jsx("button",{style:{...h.createPostButton,...i&&h.createPostButtonPressed},onClick:_,onMouseDown:()=>s(!0),onMouseUp:()=>s(!1),children:"Create Post"})]})})},Zx=()=>{const{postName:t}=$g(),[e,n]=C.useState("Your Post Text"),[r,i]=C.useState("Copy");C.useEffect(()=>{Zd(t).then(o=>{n(o),console.log(`Post Text updated TO ${o}`)})},[t]);const s=()=>{navigator.clipboard.writeText(e).then(()=>{console.log("Text copied to clipboard!"),i("Copied!"),setTimeout(()=>{i("Copy")},3e3)}).catch(o=>{console.error("Unable to copy text to clipboard.",o)})};return w.jsxs("div",{children:[w.jsx("h1",{style:eP,children:t}),w.jsxs("div",{style:tP,children:[w.jsx("textarea",{value:e,readOnly:!0,style:nP}),w.jsx("button",{onClick:s,style:rP,children:r})]})]})},eP={fontSize:"24px",color:"#333",marginLeft:"20px"},tP={marginTop:"20px",marginLeft:"20px",maxWidth:"1200px",marginRight:"50px",position:"relative"},nP={width:"100%",height:"300px",padding:"15px",borderRadius:"8px",border:"1px solid #ccc",fontSize:"16px",lineHeight:"1.5",fontFamily:"Arial, sans-serif",resize:"none"},rP={position:"absolute",top:"10px",right:"10px",padding:"5px 10px",fontSize:"16px",borderRadius:"4px",cursor:"pointer",backgroundColor:"#2c3e50",color:"white",border:"none"},iP=()=>{const t=xn();C.useEffect(()=>{Kx().then(()=>{t("/Homepage")}).catch(e=>{console.log("Failed To Logout"),t("/Homepage")})},[])},sP=()=>w.jsx(w.Fragment,{children:w.jsx("p",{style:{fontSize:"24px",color:"green",fontWeight:"bold"},children:"Post Created"})}),Wa={container:{backgroundColor:"#2c3e50",color:"#ecf0f1",padding:"10px 20px",textAlign:"center",position:"fixed",bottom:"0",left:"0",width:"100%"},copyright:{fontSize:"14px",marginBottom:"5px"},link:{color:"#3498db",textDecoration:"none",marginLeft:"5px"},linkHover:{textDecoration:"underline"}},oP=()=>{const t=new Date().getFullYear();return w.jsx("footer",{style:Wa.container,children:w.jsxs("div",{children:[w.jsxs("p",{style:Wa.copyright,children:["© ",t," Sushil L. All Rights Reserved."]}),w.jsx("a",{href:"https://github.com/21ThousandProof/ShareText",target:"_blank",rel:"noopener noreferrer",style:Wa.link,children:"View Source Code"})]})})},lP="#1e2a3a",aP="#333333",uP="#f5f5f5",cP="#f44336",Tp="#4caf50",dP="#2196f3",tt={container:{maxWidth:"900px",margin:"0 auto 50px",padding:"3px 20px 20px 20px",borderRadius:"8px",boxShadow:"0 0 10px rgba(255, 255, 255, 0.1)",backgroundColor:lP,color:"#ffffff"},heading:{marginBottom:"20px",fontSize:"32px",fontWeight:"bold",color:Tp},listItem:{marginBottom:"15px",padding:"10px",borderRadius:"6px",boxShadow:"0 0 5px rgba(255, 255, 255, 0.1)",backgroundColor:uP,display:"flex",alignItems:"center",justifyContent:"space-between"},postTitle:{fontSize:"18px",color:aP,marginRight:"20px",overflow:"auto"},buttonsContainer:{display:"flex",alignItems:"center"},actionButton:{padding:"8px 12px",marginRight:"10px",borderRadius:"4px",cursor:"pointer",textDecoration:"none",color:"#ffffff",fontWeight:"bold",fontSize:"14px"},editButton:{backgroundColor:Tp},viewButton:{backgroundColor:dP},deleteButton:{backgroundColor:cP}},hP=()=>{const[t,e]=C.useState(""),[n,r]=C.useState([]),[i,s]=C.useState(!0);C.useEffect(()=>{const a=yn().onAuthStateChanged(u=>{if(u){const c=u.email,d=c.substring(0,c.indexOf("@"));e(d);const h=u.uid;Kr(qr()),(async()=>{try{const g=qr(),v=Kr(g,"posts"),T=Rx(v,kx("uid"),Px(h)),p=await Xd(T),f=[];return p.forEach(m=>{const y=m.key;f.push(y)}),console.log(f),f}catch(g){return console.error("Error fetching posts:",g),[]}})().then(g=>{r(g),s(!1)})}else e(""),r([]),s(!1)});return()=>{a()}},[]);const o=l=>{const a=async()=>{console.log(`From ME ${l}]`),zx(l).then(()=>{r(n.filter(u=>u!==l)),console.log("Post Deleted Successfully")})};try{a()}catch(u){console.err(u),alert(u)}};return w.jsx("div",{style:tt.container,children:i?w.jsx("p",{children:"Loading..."}):w.jsx(w.Fragment,{children:t?w.jsxs("div",{children:[w.jsx("h2",{style:tt.heading,children:t}),w.jsx("h3",{children:"My Posts:"}),n.map((l,a)=>w.jsxs("div",{style:tt.listItem,children:[w.jsx("span",{style:tt.postTitle,children:l}),w.jsxs("div",{style:tt.buttonsContainer,children:[w.jsx(Sr,{to:`/viewpost/${l}`,style:{...tt.actionButton,...tt.viewButton},children:"View"}),w.jsx(Sr,{to:`/editpost/${l}`,style:{...tt.actionButton,...tt.editButton},children:"Edit"}),w.jsx("button",{onClick:()=>o(l),style:{...tt.actionButton,...tt.deleteButton},children:"Delete"})]})]},a))]}):w.jsx("p",{children:"User not found."})})})};var fP="firebase",pP="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(fP,pP,"app");const mP={apiKey:"AIzaSyCUy1bhWG-83oU2zJVKlJWNAO56fdsDybY",authDomain:"textshare-37fab.firebaseapp.com",projectId:"textshare-37fab",storageBucket:"textshare-37fab.appspot.com",messagingSenderId:"796140934378",appId:"1:796140934378:web:0e392b13f403314035b393",measurementId:"G-JQ5E5WFX86",databaseURL:"https://textshare-37fab-default-rtdb.asia-southeast1.firebasedatabase.app/"};o_(mP);function gP(){return w.jsx(PE,{children:w.jsxs("div",{style:{minHeight:"100vh",position:"relative"},children:[w.jsx(CT,{}),w.jsx("div",{style:{paddingTop:"70px",paddingBottom:"20px"},children:w.jsxs(CE,{children:[w.jsx(Ge,{path:"/",element:w.jsx(wE,{to:"/Homepage"})}),w.jsx(Ge,{path:"/Homepage",element:w.jsx(Wx,{})}),w.jsx(Ge,{path:"/Login",element:w.jsx(qx,{})}),w.jsx(Ge,{path:"/Logout",element:w.jsx(iP,{})}),w.jsx(Ge,{path:"/Debug",element:w.jsx(Jx,{})}),w.jsx(Ge,{path:"/Signup",element:w.jsx(Qx,{})}),w.jsx(Ge,{path:"/TextEditor",element:w.jsx(Ip,{})}),w.jsx(Ge,{path:"/viewpost/:postName",element:w.jsx(Zx,{})}),w.jsx(Ge,{path:"/editpost/:postName",element:w.jsx(Ip,{})}),w.jsx(Ge,{path:"/PostCreated",element:w.jsx(sP,{})}),w.jsx(Ge,{path:"/Me",element:w.jsx(hP,{})})]})}),w.jsx(oP,{})]})})}Va.createRoot(document.getElementById("root")).render(w.jsx(gP,{}));
