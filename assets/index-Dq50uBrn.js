(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var td={exports:{}},Io={};var b0;function yS(){if(b0)return Io;b0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var R0;function TS(){return R0||(R0=1,td.exports=yS()),td.exports}var Z=TS(),nd={exports:{}},lt={};var C0;function AS(){if(C0)return lt;C0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),v=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,E={};function _(P,j,ve){this.props=P,this.context=j,this.refs=E,this.updater=ve||T}_.prototype.isReactComponent={},_.prototype.setState=function(P,j){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,j,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=_.prototype;function N(P,j,ve){this.props=P,this.context=j,this.refs=E,this.updater=ve||T}var L=N.prototype=new C;L.constructor=N,D(L,_.prototype),L.isPureReactComponent=!0;var V=Array.isArray;function G(){}var B={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function U(P,j,ve){var be=ve.ref;return{$$typeof:s,type:P,key:j,ref:be!==void 0?be:null,props:ve}}function pe(P,j){return U(P.type,j,P.props)}function z(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function ee(P){var j={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ve){return j[ve]})}var ae=/\/+/g;function ce(P,j){return typeof P=="object"&&P!==null&&P.key!=null?ee(""+P.key):j.toString(36)}function q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(G,G):(P.status="pending",P.then(function(j){P.status==="pending"&&(P.status="fulfilled",P.value=j)},function(j){P.status==="pending"&&(P.status="rejected",P.reason=j)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function w(P,j,ve,be,Pe){var te=typeof P;(te==="undefined"||te==="boolean")&&(P=null);var _e=!1;if(P===null)_e=!0;else switch(te){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(P.$$typeof){case s:case t:_e=!0;break;case x:return _e=P._init,w(_e(P._payload),j,ve,be,Pe)}}if(_e)return Pe=Pe(P),_e=be===""?"."+ce(P,0):be,V(Pe)?(ve="",_e!=null&&(ve=_e.replace(ae,"$&/")+"/"),w(Pe,j,ve,"",function(Ye){return Ye})):Pe!=null&&(z(Pe)&&(Pe=pe(Pe,ve+(Pe.key==null||P&&P.key===Pe.key?"":(""+Pe.key).replace(ae,"$&/")+"/")+_e)),j.push(Pe)),1;_e=0;var Se=be===""?".":be+":";if(V(P))for(var Oe=0;Oe<P.length;Oe++)be=P[Oe],te=Se+ce(be,Oe),_e+=w(be,j,ve,te,Pe);else if(Oe=M(P),typeof Oe=="function")for(P=Oe.call(P),Oe=0;!(be=P.next()).done;)be=be.value,te=Se+ce(be,Oe++),_e+=w(be,j,ve,te,Pe);else if(te==="object"){if(typeof P.then=="function")return w(q(P),j,ve,be,Pe);throw j=String(P),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return _e}function I(P,j,ve){if(P==null)return P;var be=[],Pe=0;return w(P,be,"","",function(te){return j.call(ve,te,Pe++)}),be}function oe(P){if(P._status===-1){var j=P._result;j=j(),j.then(function(ve){(P._status===0||P._status===-1)&&(P._status=1,P._result=ve)},function(ve){(P._status===0||P._status===-1)&&(P._status=2,P._result=ve)}),P._status===-1&&(P._status=0,P._result=j)}if(P._status===1)return P._result.default;throw P._result}var fe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Me={map:I,forEach:function(P,j,ve){I(P,function(){j.apply(this,arguments)},ve)},count:function(P){var j=0;return I(P,function(){j++}),j},toArray:function(P){return I(P,function(j){return j})||[]},only:function(P){if(!z(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return lt.Activity=S,lt.Children=Me,lt.Component=_,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=N,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,lt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},lt.cache=function(P){return function(){return P.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(P,j,ve){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var be=D({},P.props),Pe=P.key;if(j!=null)for(te in j.key!==void 0&&(Pe=""+j.key),j)!A.call(j,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&j.ref===void 0||(be[te]=j[te]);var te=arguments.length-2;if(te===1)be.children=ve;else if(1<te){for(var _e=Array(te),Se=0;Se<te;Se++)_e[Se]=arguments[Se+2];be.children=_e}return U(P.type,Pe,be)},lt.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},lt.createElement=function(P,j,ve){var be,Pe={},te=null;if(j!=null)for(be in j.key!==void 0&&(te=""+j.key),j)A.call(j,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Pe[be]=j[be]);var _e=arguments.length-2;if(_e===1)Pe.children=ve;else if(1<_e){for(var Se=Array(_e),Oe=0;Oe<_e;Oe++)Se[Oe]=arguments[Oe+2];Pe.children=Se}if(P&&P.defaultProps)for(be in _e=P.defaultProps,_e)Pe[be]===void 0&&(Pe[be]=_e[be]);return U(P,te,Pe)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(P){return{$$typeof:p,render:P}},lt.isValidElement=z,lt.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:oe}},lt.memo=function(P,j){return{$$typeof:h,type:P,compare:j===void 0?null:j}},lt.startTransition=function(P){var j=B.T,ve={};B.T=ve;try{var be=P(),Pe=B.S;Pe!==null&&Pe(ve,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(G,fe)}catch(te){fe(te)}finally{j!==null&&ve.types!==null&&(j.types=ve.types),B.T=j}},lt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},lt.use=function(P){return B.H.use(P)},lt.useActionState=function(P,j,ve){return B.H.useActionState(P,j,ve)},lt.useCallback=function(P,j){return B.H.useCallback(P,j)},lt.useContext=function(P){return B.H.useContext(P)},lt.useDebugValue=function(){},lt.useDeferredValue=function(P,j){return B.H.useDeferredValue(P,j)},lt.useEffect=function(P,j){return B.H.useEffect(P,j)},lt.useEffectEvent=function(P){return B.H.useEffectEvent(P)},lt.useId=function(){return B.H.useId()},lt.useImperativeHandle=function(P,j,ve){return B.H.useImperativeHandle(P,j,ve)},lt.useInsertionEffect=function(P,j){return B.H.useInsertionEffect(P,j)},lt.useLayoutEffect=function(P,j){return B.H.useLayoutEffect(P,j)},lt.useMemo=function(P,j){return B.H.useMemo(P,j)},lt.useOptimistic=function(P,j){return B.H.useOptimistic(P,j)},lt.useReducer=function(P,j,ve){return B.H.useReducer(P,j,ve)},lt.useRef=function(P){return B.H.useRef(P)},lt.useState=function(P){return B.H.useState(P)},lt.useSyncExternalStore=function(P,j,ve){return B.H.useSyncExternalStore(P,j,ve)},lt.useTransition=function(){return B.H.useTransition()},lt.version="19.2.4",lt}var D0;function Bh(){return D0||(D0=1,nd.exports=AS()),nd.exports}var is=Bh(),id={exports:{}},Bo={},ad={exports:{}},sd={};var w0;function bS(){return w0||(w0=1,(function(s){function t(w,I){var oe=w.length;w.push(I);e:for(;0<oe;){var fe=oe-1>>>1,Me=w[fe];if(0<l(Me,I))w[fe]=I,w[oe]=Me,oe=fe;else break e}}function i(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var I=w[0],oe=w.pop();if(oe!==I){w[0]=oe;e:for(var fe=0,Me=w.length,P=Me>>>1;fe<P;){var j=2*(fe+1)-1,ve=w[j],be=j+1,Pe=w[be];if(0>l(ve,oe))be<Me&&0>l(Pe,ve)?(w[fe]=Pe,w[be]=oe,fe=be):(w[fe]=ve,w[j]=oe,fe=j);else if(be<Me&&0>l(Pe,oe))w[fe]=Pe,w[be]=oe,fe=be;else break e}}return I}function l(w,I){var oe=w.sortIndex-I.sortIndex;return oe!==0?oe:w.id-I.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,S=null,v=3,M=!1,T=!1,D=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function L(w){for(var I=i(h);I!==null;){if(I.callback===null)r(h);else if(I.startTime<=w)r(h),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(h)}}function V(w){if(D=!1,L(w),!T)if(i(m)!==null)T=!0,G||(G=!0,ee());else{var I=i(h);I!==null&&q(V,I.startTime-w)}}var G=!1,B=-1,A=5,U=-1;function pe(){return E?!0:!(s.unstable_now()-U<A)}function z(){if(E=!1,G){var w=s.unstable_now();U=w;var I=!0;try{e:{T=!1,D&&(D=!1,C(B),B=-1),M=!0;var oe=v;try{t:{for(L(w),S=i(m);S!==null&&!(S.expirationTime>w&&pe());){var fe=S.callback;if(typeof fe=="function"){S.callback=null,v=S.priorityLevel;var Me=fe(S.expirationTime<=w);if(w=s.unstable_now(),typeof Me=="function"){S.callback=Me,L(w),I=!0;break t}S===i(m)&&r(m),L(w)}else r(m);S=i(m)}if(S!==null)I=!0;else{var P=i(h);P!==null&&q(V,P.startTime-w),I=!1}}break e}finally{S=null,v=oe,M=!1}I=void 0}}finally{I?ee():G=!1}}}var ee;if(typeof N=="function")ee=function(){N(z)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=z,ee=function(){ce.postMessage(null)}}else ee=function(){_(z,0)};function q(w,I){B=_(function(){w(s.unstable_now())},I)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(w){w.callback=null},s.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<w?Math.floor(1e3/w):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(w){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var oe=v;v=I;try{return w()}finally{v=oe}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(w,I){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var oe=v;v=w;try{return I()}finally{v=oe}},s.unstable_scheduleCallback=function(w,I,oe){var fe=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?fe+oe:fe):oe=fe,w){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=oe+Me,w={id:x++,callback:I,priorityLevel:w,startTime:oe,expirationTime:Me,sortIndex:-1},oe>fe?(w.sortIndex=oe,t(h,w),i(m)===null&&w===i(h)&&(D?(C(B),B=-1):D=!0,q(V,oe-fe))):(w.sortIndex=Me,t(m,w),T||M||(T=!0,G||(G=!0,ee()))),w},s.unstable_shouldYield=pe,s.unstable_wrapCallback=function(w){var I=v;return function(){var oe=v;v=I;try{return w.apply(this,arguments)}finally{v=oe}}}})(sd)),sd}var U0;function RS(){return U0||(U0=1,ad.exports=bS()),ad.exports}var rd={exports:{}},Un={};var L0;function CS(){if(L0)return Un;L0=1;var s=Bh();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:x}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,x)},Un.flushSync=function(m){var h=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=x,r.d.f()}},Un.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:v,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:S,integrity:v,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Un.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Un.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin);r.d.L(m,x,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Un.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,h){return m(h)},Un.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.4",Un}var N0;function DS(){if(N0)return rd.exports;N0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),rd.exports=CS(),rd.exports}var O0;function wS(){if(O0)return Bo;O0=1;var s=RS(),t=Bh(),i=DS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var g=!1,b=u.child;b;){if(b===a){g=!0,a=u,o=f;break}if(b===o){g=!0,o=u,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,o=u;break}if(b===o){g=!0,o=f,a=u;break}b=b.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case _:return"Profiler";case E:return"StrictMode";case V:return"Suspense";case G:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case N:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ce(e.type)||"Memo";case A:n=e._payload,e=e._init;try{return ce(e(n))}catch{}}return null}var q=Array.isArray,w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},fe=[],Me=-1;function P(e){return{current:e}}function j(e){0>Me||(e.current=fe[Me],fe[Me]=null,Me--)}function ve(e,n){Me++,fe[Me]=e.current,e.current=n}var be=P(null),Pe=P(null),te=P(null),_e=P(null);function Se(e,n){switch(ve(te,n),ve(Pe,e),ve(be,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Kg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Kg(n),e=Zg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(be),ve(be,e)}function Oe(){j(be),j(Pe),j(te)}function Ye(e){e.memoizedState!==null&&ve(_e,e);var n=be.current,a=Zg(n,e.type);n!==a&&(ve(Pe,e),ve(be,a))}function $e(e){Pe.current===e&&(j(be),j(Pe)),_e.current===e&&(j(_e),Lo._currentValue=oe)}var Kt,gt;function ct(e){if(Kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+e+gt}var yt=!1;function Ie(e,n){if(!e||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var ie=le}Reflect.construct(e,[],xe)}else{try{xe.call()}catch(le){ie=le}e.call(xe.prototype)}}else{try{throw Error()}catch(le){ie=le}(xe=e())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&ie&&typeof le.stack=="string")return[le.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var F=g.split(`
`),$=b.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===$.length)for(o=F.length-1,u=$.length-1;1<=o&&0<=u&&F[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==$[u]){var he=`
`+F[o].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=o&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ct(a):""}function rt(e,n){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return Ie(e.type,!1);case 11:return Ie(e.type.render,!1);case 1:return Ie(e.type,!0);case 31:return ct("Activity");default:return""}}function H(e){try{var n="",a=null;do n+=rt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Tt=Object.prototype.hasOwnProperty,vt=s.unstable_scheduleCallback,wt=s.unstable_cancelCallback,je=s.unstable_shouldYield,O=s.unstable_requestPaint,y=s.unstable_now,Y=s.unstable_getCurrentPriorityLevel,me=s.unstable_ImmediatePriority,Ee=s.unstable_UserBlockingPriority,de=s.unstable_NormalPriority,We=s.unstable_LowPriority,De=s.unstable_IdlePriority,Qe=s.log,tt=s.unstable_setDisableYieldValue,Ae=null,ye=null;function Be(e){if(typeof Qe=="function"&&tt(e),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(Ae,e)}catch{}}var Ne=Math.clz32?Math.clz32:W,Fe=Math.log,ft=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Fe(e)/ft|0)|0}var Ce=256,Re=262144,ze=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ue(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=Te(o):(g&=b,g!==0?u=Te(g):a||(a=b&~e,a!==0&&(u=Te(a))))):(b=o&~f,b!==0?u=Te(b):g!==0?u=Te(g):a||(a=o&~e,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ge(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var e=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,o,u,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,$=e.hiddenUpdates;for(a=g&~a;0<a;){var he=31-Ne(a),xe=1<<he;b[he]=0,F[he]=-1;var ie=$[he];if(ie!==null)for($[he]=null,he=0;he<ie.length;he++){var le=ie[he];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&qr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function qr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ne(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function zs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ne(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function $o(e,n){var a=n&-n;return a=(a&42)!==0?1:Hs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Hs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pi(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:x0(e.type))}function Vs(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var Ei=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ei,vn="__reactProps$"+Ei,ji="__reactContainer$"+Ei,Aa="__reactEvents$"+Ei,el="__reactListeners$"+Ei,tl="__reactHandles$"+Ei,nl="__reactResources$"+Ei,cs="__reactMarker$"+Ei;function Yr(e){delete e[ln],delete e[vn],delete e[Aa],delete e[el],delete e[tl]}function ba(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ji]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=i0(e);e!==null;){if(a=e[ln])return a;e=i0(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[ln]||e[ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function R(e){var n=e[nl];return n||(n=e[nl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[cs]=!0}var re=new Set,ne={};function Q(e,n){we(e,n),we(e+"Capture",n)}function we(e,n){for(ne[e]=n,e=0;e<n.length;e++)re.add(n[e])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ue={},qe={};function Ze(e){return Tt.call(qe,e)?!0:Tt.call(Ue,e)?!1:He.test(e)?qe[e]=!0:(Ue[e]=!0,!1)}function nt(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ot(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ve(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ut(e){if(!e._valueTracker){var n=Zt(e)?"checked":"value";e._valueTracker=Qt(e,n,""+e[n])}}function _n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Zt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Xe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function at(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bn(e,n,a,o,u,f,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+dt(n)):e.value!==""+dt(n)&&(e.value=""+dt(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?Mi(e,g,dt(n)):a!=null?Mi(e,g,dt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+dt(b):e.removeAttribute("name")}function Zn(e,n,a,o,u,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ut(e);return}a=a!=null?""+dt(a):"",n=n!=null?""+dt(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Ut(e)}function Mi(e,n,a){n==="number"&&Xe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Bt(e,n,a){if(n!=null&&(n=""+dt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+dt(a):""}function cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(q(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=dt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ut(e)}function Fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||un.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ki(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&yi(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&yi(e,f,n[f])}function ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),S_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return S_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,Ws=null;function jh(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[vn]||null;if(!u)throw Error(r(90));Bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&_n(o)}break e;case"textarea":Bt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Qn(e,!!a.multiple,n,!1)}}}var $c=!1;function Kh(e,n,a){if($c)return e(n,a);$c=!0;try{var o=e(n);return o}finally{if($c=!1,(Xs!==null||Ws!==null)&&(Xl(),Xs&&(n=Xs,e=Ws,Ws=Xs=null,jh(n),e)))for(n=0;n<e.length;n++)jh(e[n])}}function jr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Qi)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{eu=!1}var Ca=null,tu=null,al=null;function Zh(){if(al)return al;var e,n=tu,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var g=a-e;for(o=1;o<=g&&n[a-o]===u[f-o];o++);return al=u.slice(e,1<o?1-o:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Qh(){return!1}function Gn(e){function n(a,o,u,f,g){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:Qh,this.isPropagationStopped=Qh,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Gn(fs),Zr=S({},fs,{view:0,detail:0}),E_=Gn(Zr),nu,iu,Qr,ll=S({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(nu=e.screenX-Qr.screenX,iu=e.screenY-Qr.screenY):iu=nu=0,Qr=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),Jh=Gn(ll),M_=S({},ll,{dataTransfer:0}),y_=Gn(M_),T_=S({},Zr,{relatedTarget:0}),au=Gn(T_),A_=S({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),b_=Gn(A_),R_=S({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C_=Gn(R_),D_=S({},fs,{data:0}),$h=Gn(D_),w_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=L_[e])?!!n[e]:!1}function su(){return N_}var O_=S({},Zr,{key:function(e){if(e.key){var n=w_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P_=Gn(O_),I_=S({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=Gn(I_),B_=S({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),F_=Gn(B_),z_=S({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),H_=Gn(z_),G_=S({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V_=Gn(G_),k_=S({},fs,{newState:0,oldState:0}),X_=Gn(k_),W_=[9,13,27,32],ru=Qi&&"CompositionEvent"in window,Jr=null;Qi&&"documentMode"in document&&(Jr=document.documentMode);var q_=Qi&&"TextEvent"in window&&!Jr,tp=Qi&&(!ru||Jr&&8<Jr&&11>=Jr),np=" ",ip=!1;function ap(e,n){switch(e){case"keyup":return W_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qs=!1;function Y_(e,n){switch(e){case"compositionend":return sp(n);case"keypress":return n.which!==32?null:(ip=!0,np);case"textInput":return e=n.data,e===np&&ip?null:e;default:return null}}function j_(e,n){if(qs)return e==="compositionend"||!ru&&ap(e,n)?(e=Zh(),al=tu=Ca=null,qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var K_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!K_[e.type]:n==="textarea"}function op(e,n,a,o){Xs?Ws?Ws.push(o):Ws=[o]:Xs=o,n=Ql(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var $r=null,eo=null;function Z_(e){kg(e,0)}function cl(e){var n=us(e);if(_n(n))return e}function lp(e,n){if(e==="change")return n}var cp=!1;if(Qi){var ou;if(Qi){var lu="oninput"in document;if(!lu){var up=document.createElement("div");up.setAttribute("oninput","return;"),lu=typeof up.oninput=="function"}ou=lu}else ou=!1;cp=ou&&(!document.documentMode||9<document.documentMode)}function fp(){$r&&($r.detachEvent("onpropertychange",dp),eo=$r=null)}function dp(e){if(e.propertyName==="value"&&cl(eo)){var n=[];op(n,eo,e,Jc(e)),Kh(Z_,n)}}function Q_(e,n,a){e==="focusin"?(fp(),$r=n,eo=a,$r.attachEvent("onpropertychange",dp)):e==="focusout"&&fp()}function J_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(eo)}function $_(e,n){if(e==="click")return cl(n)}function ex(e,n){if(e==="input"||e==="change")return cl(n)}function tx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:tx;function to(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Tt.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pp(e,n){var a=hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hp(a)}}function mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xe(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var nx=Qi&&"documentMode"in document&&11>=document.documentMode,Ys=null,uu=null,no=null,fu=!1;function vp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Ys==null||Ys!==Xe(o)||(o=Ys,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&to(no,o)||(no=o,o=Ql(uu,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ys)))}function ds(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var js={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},du={},_p={};Qi&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function hs(e){if(du[e])return du[e];if(!js[e])return e;var n=js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return du[e]=n[a];return e}var xp=hs("animationend"),Sp=hs("animationiteration"),Ep=hs("animationstart"),ix=hs("transitionrun"),ax=hs("transitionstart"),sx=hs("transitioncancel"),Mp=hs("transitionend"),yp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function Ti(e,n){yp.set(e,n),Q(n,[e])}var ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Ks=0,pu=0;function fl(){for(var e=Ks,n=pu=Ks=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,o!==null&&u!==null){var g=o.pending;g===null?u.next=u:(u.next=g.next,g.next=u),o.pending=u}f!==0&&Tp(a,u,f)}}function dl(e,n,a,o){ci[Ks++]=e,ci[Ks++]=n,ci[Ks++]=a,ci[Ks++]=o,pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mu(e,n,a,o){return dl(e,n,a,o),hl(e)}function ps(e,n){return dl(e,null,null,n),hl(e)}function Tp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ne(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(e){if(50<Ao)throw Ao=0,Af=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function rx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new rx(e,n,a,o)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ap(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function pl(e,n,a,o,u,f){var g=0;if(o=e,typeof e=="function")gu(e)&&(g=1);else if(typeof e=="string")g=fS(e,a,be.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=$n(31,a,n,u),e.elementType=U,e.lanes=f,e;case D:return ms(a.children,u,f,n);case E:g=8,u|=24;break;case _:return e=$n(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case V:return e=$n(13,a,n,u),e.elementType=V,e.lanes=f,e;case G:return e=$n(19,a,n,u),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:g=10;break e;case C:g=9;break e;case L:g=11;break e;case B:g=14;break e;case A:g=16,o=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=$n(g,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ms(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function vu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function bp(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function _u(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Rp=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=Rp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:H(n)},Rp.set(e,n),n)}return{value:e,source:n,stack:H(n)}}var Qs=[],Js=0,ml=null,io=0,fi=[],di=0,Da=null,Ii=1,Bi="";function $i(e,n){Qs[Js++]=io,Qs[Js++]=ml,ml=e,io=n}function Cp(e,n,a){fi[di++]=Ii,fi[di++]=Bi,fi[di++]=Da,Da=e;var o=Ii;e=Bi;var u=32-Ne(o)-1;o&=~(1<<u),a+=1;var f=32-Ne(n)+u;if(30<f){var g=u-u%5;f=(o&(1<<g)-1).toString(32),o>>=g,u-=g,Ii=1<<32-Ne(n)+u|a<<u|o,Bi=f+e}else Ii=1<<f|a<<u|o,Bi=e}function xu(e){e.return!==null&&($i(e,1),Cp(e,1,0))}function Su(e){for(;e===ml;)ml=Qs[--Js],Qs[Js]=null,io=Qs[--Js],Qs[Js]=null;for(;e===Da;)Da=fi[--di],fi[di]=null,Bi=fi[--di],fi[di]=null,Ii=fi[--di],fi[di]=null}function Dp(e,n){fi[di++]=Ii,fi[di++]=Bi,fi[di++]=Da,Ii=n.id,Bi=n.overflow,Da=e}var bn=null,Yt=null,At=!1,wa=null,hi=!1,Eu=Error(r(519));function Ua(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(ui(n,e)),Eu}function wp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[vn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)St(Ro[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Yg(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Ua(e,!0)}function Up(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:bn=bn.return}}function $s(e){if(e!==bn)return!1;if(!At)return Up(e),At=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&Yt&&Ua(e),Up(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Yt=n0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Yt=n0(e)}else n===27?(n=Yt,Wa(e.type)?(e=Wf,Wf=null,Yt=e):Yt=n):Yt=bn?mi(e.stateNode.nextSibling):null;return!0}function gs(){Yt=bn=null,At=!1}function Mu(){var e=wa;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),wa=null),e}function ao(e){wa===null?wa=[e]:wa.push(e)}var yu=P(null),vs=null,ea=null;function La(e,n,a){ve(yu,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=yu.current,j(yu)}function Tu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Au(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=u;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Tu(f.return,a,e),o||(g=null);break e}f=b.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Tu(g,a,e),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===e){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function er(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var b=u.type;Jn(u.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(u===_e.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&Au(n,e,a,o),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){vs=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Lp(vs,e)}function vl(e,n){return vs===null&&_s(e),Lp(e,n)}function Lp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(r(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var ox=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},lx=s.unstable_scheduleCallback,cx=s.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new ox,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&lx(cx,function(){e.controller.abort()})}var ro=null,Ru=0,tr=0,nr=null;function ux(e,n){if(ro===null){var a=ro=[];Ru=0,tr=Uf(),nr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ru++,n.then(Np,Np),n}function Np(){if(--Ru===0&&ro!==null){nr!==null&&(nr.status="fulfilled");var e=ro;ro=null,tr=0,nr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Op=w.S;w.S=function(e,n){vg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ux(e,n),Op!==null&&Op(e,n)};var xs=P(null);function Cu(){var e=xs.current;return e!==null?e:qt.pooledCache}function _l(e,n){n===null?ve(xs,xs.current):ve(xs,n.pool)}function Pp(){var e=Cu();return e===null?null:{parent:fn._currentValue,pool:e}}var ir=Error(r(460)),Du=Error(r(474)),xl=Error(r(542)),Sl={then:function(){}};function Ip(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=qt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e}throw Es=n,ir}}function Ss(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,ir):a}}var Es=null;function Fp(){if(Es===null)throw Error(r(459));var e=Es;return Es=null,e}function zp(e){if(e===ir||e===xl)throw Error(r(483))}var ar=null,oo=0;function El(e){var n=oo;return oo+=1,ar===null&&(ar=[]),Bp(ar,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ml(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hp(e){function n(K,k){if(e){var J=K.deletions;J===null?(K.deletions=[k],K.flags|=16):J.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=Ji(K,k),K.index=0,K.sibling=null,K}function f(K,k,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<k?(K.flags|=67108866,k):J):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function g(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function b(K,k,J,ge){return k===null||k.tag!==6?(k=vu(J,K.mode,ge),k.return=K,k):(k=u(k,J),k.return=K,k)}function F(K,k,J,ge){var Je=J.type;return Je===D?he(K,k,J.props.children,ge,J.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===A&&Ss(Je)===k.type)?(k=u(k,J.props),lo(k,J),k.return=K,k):(k=pl(J.type,J.key,J.props,null,K.mode,ge),lo(k,J),k.return=K,k)}function $(K,k,J,ge){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=_u(J,K.mode,ge),k.return=K,k):(k=u(k,J.children||[]),k.return=K,k)}function he(K,k,J,ge,Je){return k===null||k.tag!==7?(k=ms(J,K.mode,ge,Je),k.return=K,k):(k=u(k,J),k.return=K,k)}function xe(K,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=vu(""+k,K.mode,J),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=pl(k.type,k.key,k.props,null,K.mode,J),lo(J,k),J.return=K,J;case T:return k=_u(k,K.mode,J),k.return=K,k;case A:return k=Ss(k),xe(K,k,J)}if(q(k)||ee(k))return k=ms(k,K.mode,J,null),k.return=K,k;if(typeof k.then=="function")return xe(K,El(k),J);if(k.$$typeof===N)return xe(K,vl(K,k),J);Ml(K,k)}return null}function ie(K,k,J,ge){var Je=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Je!==null?null:b(K,k,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Je?F(K,k,J,ge):null;case T:return J.key===Je?$(K,k,J,ge):null;case A:return J=Ss(J),ie(K,k,J,ge)}if(q(J)||ee(J))return Je!==null?null:he(K,k,J,ge,null);if(typeof J.then=="function")return ie(K,k,El(J),ge);if(J.$$typeof===N)return ie(K,k,vl(K,J),ge);Ml(K,J)}return null}function le(K,k,J,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return K=K.get(J)||null,b(k,K,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return K=K.get(ge.key===null?J:ge.key)||null,F(k,K,ge,Je);case T:return K=K.get(ge.key===null?J:ge.key)||null,$(k,K,ge,Je);case A:return ge=Ss(ge),le(K,k,J,ge,Je)}if(q(ge)||ee(ge))return K=K.get(J)||null,he(k,K,ge,Je,null);if(typeof ge.then=="function")return le(K,k,J,El(ge),Je);if(ge.$$typeof===N)return le(K,k,J,vl(k,ge),Je);Ml(k,ge)}return null}function ke(K,k,J,ge){for(var Je=null,Lt=null,Ke=k,ht=k=0,Mt=null;Ke!==null&&ht<J.length;ht++){Ke.index>ht?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Nt=ie(K,Ke,J[ht],ge);if(Nt===null){Ke===null&&(Ke=Mt);break}e&&Ke&&Nt.alternate===null&&n(K,Ke),k=f(Nt,k,ht),Lt===null?Je=Nt:Lt.sibling=Nt,Lt=Nt,Ke=Mt}if(ht===J.length)return a(K,Ke),At&&$i(K,ht),Je;if(Ke===null){for(;ht<J.length;ht++)Ke=xe(K,J[ht],ge),Ke!==null&&(k=f(Ke,k,ht),Lt===null?Je=Ke:Lt.sibling=Ke,Lt=Ke);return At&&$i(K,ht),Je}for(Ke=o(Ke);ht<J.length;ht++)Mt=le(Ke,K,ht,J[ht],ge),Mt!==null&&(e&&Mt.alternate!==null&&Ke.delete(Mt.key===null?ht:Mt.key),k=f(Mt,k,ht),Lt===null?Je=Mt:Lt.sibling=Mt,Lt=Mt);return e&&Ke.forEach(function(Za){return n(K,Za)}),At&&$i(K,ht),Je}function et(K,k,J,ge){if(J==null)throw Error(r(151));for(var Je=null,Lt=null,Ke=k,ht=k=0,Mt=null,Nt=J.next();Ke!==null&&!Nt.done;ht++,Nt=J.next()){Ke.index>ht?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Za=ie(K,Ke,Nt.value,ge);if(Za===null){Ke===null&&(Ke=Mt);break}e&&Ke&&Za.alternate===null&&n(K,Ke),k=f(Za,k,ht),Lt===null?Je=Za:Lt.sibling=Za,Lt=Za,Ke=Mt}if(Nt.done)return a(K,Ke),At&&$i(K,ht),Je;if(Ke===null){for(;!Nt.done;ht++,Nt=J.next())Nt=xe(K,Nt.value,ge),Nt!==null&&(k=f(Nt,k,ht),Lt===null?Je=Nt:Lt.sibling=Nt,Lt=Nt);return At&&$i(K,ht),Je}for(Ke=o(Ke);!Nt.done;ht++,Nt=J.next())Nt=le(Ke,K,ht,Nt.value,ge),Nt!==null&&(e&&Nt.alternate!==null&&Ke.delete(Nt.key===null?ht:Nt.key),k=f(Nt,k,ht),Lt===null?Je=Nt:Lt.sibling=Nt,Lt=Nt);return e&&Ke.forEach(function(MS){return n(K,MS)}),At&&$i(K,ht),Je}function Wt(K,k,J,ge){if(typeof J=="object"&&J!==null&&J.type===D&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var Je=J.key;k!==null;){if(k.key===Je){if(Je=J.type,Je===D){if(k.tag===7){a(K,k.sibling),ge=u(k,J.props.children),ge.return=K,K=ge;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===A&&Ss(Je)===k.type){a(K,k.sibling),ge=u(k,J.props),lo(ge,J),ge.return=K,K=ge;break e}a(K,k);break}else n(K,k);k=k.sibling}J.type===D?(ge=ms(J.props.children,K.mode,ge,J.key),ge.return=K,K=ge):(ge=pl(J.type,J.key,J.props,null,K.mode,ge),lo(ge,J),ge.return=K,K=ge)}return g(K);case T:e:{for(Je=J.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(K,k.sibling),ge=u(k,J.children||[]),ge.return=K,K=ge;break e}else{a(K,k);break}else n(K,k);k=k.sibling}ge=_u(J,K.mode,ge),ge.return=K,K=ge}return g(K);case A:return J=Ss(J),Wt(K,k,J,ge)}if(q(J))return ke(K,k,J,ge);if(ee(J)){if(Je=ee(J),typeof Je!="function")throw Error(r(150));return J=Je.call(J),et(K,k,J,ge)}if(typeof J.then=="function")return Wt(K,k,El(J),ge);if(J.$$typeof===N)return Wt(K,k,vl(K,J),ge);Ml(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(K,k.sibling),ge=u(k,J),ge.return=K,K=ge):(a(K,k),ge=vu(J,K.mode,ge),ge.return=K,K=ge),g(K)):a(K,k)}return function(K,k,J,ge){try{oo=0;var Je=Wt(K,k,J,ge);return ar=null,Je}catch(Ke){if(Ke===ir||Ke===xl)throw Ke;var Lt=$n(29,Ke,null,K.mode);return Lt.lanes=ge,Lt.return=K,Lt}}}var Ms=Hp(!0),Gp=Hp(!1),Na=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(e),Tp(e,null,a),n}return dl(e,o,n,a),hl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zs(e,a)}}function Lu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function uo(){if(Nu){var e=nr;if(e!==null)throw e}}function fo(e,n,a,o){Nu=!1;var u=e.updateQueue;Na=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var F=b,$=F.next;F.next=null,g===null?f=$:g.next=$,g=F;var he=e.alternate;he!==null&&(he=he.updateQueue,b=he.lastBaseUpdate,b!==g&&(b===null?he.firstBaseUpdate=$:b.next=$,he.lastBaseUpdate=F))}if(f!==null){var xe=u.baseState;g=0,he=$=F=null,b=f;do{var ie=b.lane&-536870913,le=ie!==b.lane;if(le?(Et&ie)===ie:(o&ie)===ie){ie!==0&&ie===tr&&(Nu=!0),he!==null&&(he=he.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ke=e,et=b;ie=n;var Wt=a;switch(et.tag){case 1:if(ke=et.payload,typeof ke=="function"){xe=ke.call(Wt,xe,ie);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=et.payload,ie=typeof ke=="function"?ke.call(Wt,xe,ie):ke,ie==null)break e;xe=S({},xe,ie);break e;case 2:Na=!0}}ie=b.callback,ie!==null&&(e.flags|=64,le&&(e.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ie]:le.push(ie))}else le={lane:ie,tag:b.tag,payload:b.payload,callback:b.callback,next:null},he===null?($=he=le,F=xe):he=he.next=le,g|=ie;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;le=b,b=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);he===null&&(F=xe),u.baseState=F,u.firstBaseUpdate=$,u.lastBaseUpdate=he,f===null&&(u.shared.lanes=0),Ha|=g,e.lanes=g,e.memoizedState=xe}}function Vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vp(a[e],n)}var sr=P(null),yl=P(0);function Xp(e,n){e=ua,ve(yl,e),ve(sr,n),ua=e|n.baseLanes}function Ou(){ve(yl,ua),ve(sr,sr.current)}function Pu(){ua=yl.current,j(sr),j(yl)}var ei=P(null),pi=null;function Ia(e){var n=e.alternate;ve(nn,nn.current&1),ve(ei,e),pi===null&&(n===null||sr.current!==null||n.memoizedState!==null)&&(pi=e)}function Iu(e){ve(nn,nn.current),ve(ei,e),pi===null&&(pi=e)}function Wp(e){e.tag===22?(ve(nn,nn.current),ve(ei,e),pi===null&&(pi=e)):Ba()}function Ba(){ve(nn,nn.current),ve(ei,ei.current)}function ti(e){j(ei),pi===e&&(pi=null),j(nn)}var nn=P(0);function Tl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,ut=null,kt=null,dn=null,Al=!1,rr=!1,ys=!1,bl=0,ho=0,or=null,dx=0;function $t(){throw Error(r(321))}function Bu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Fu(e,n,a,o,u,f){return na=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=e===null||e.memoizedState===null?Cm:$u,ys=!1,f=a(o,u),ys=!1,rr&&(f=Yp(n,a,o,u)),qp(e),f}function qp(e){w.H=go;var n=kt!==null&&kt.next!==null;if(na=0,dn=kt=ut=null,Al=!1,ho=0,or=null,n)throw Error(r(300));e===null||hn||(e=e.dependencies,e!==null&&gl(e)&&(hn=!0))}function Yp(e,n,a,o){ut=e;var u=0;do{if(rr&&(or=null),ho=0,rr=!1,25<=u)throw Error(r(301));if(u+=1,dn=kt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}w.H=Dm,f=n(a,o)}while(rr);return f}function hx(){var e=w.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(kt!==null?kt.memoizedState:null)!==e&&(ut.flags|=1024),n}function zu(){var e=bl!==0;return bl=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}na=0,dn=kt=ut=null,rr=!1,ho=bl=0,or=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?ut.memoizedState=dn=e:dn=dn.next=e,dn}function an(){if(kt===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var n=dn===null?ut.memoizedState:dn.next;if(n!==null)dn=n,kt=e;else{if(e===null)throw ut.alternate===null?Error(r(467)):Error(r(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},dn===null?ut.memoizedState=dn=e:dn=dn.next=e}return dn}function Rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,or===null&&(or=[]),e=Bp(or,e,n),n=ut,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?Cm:$u),e}function Cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===N)return Rn(e)}throw Error(r(438,String(e)))}function Vu(e){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Rl(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=pe;return n.index++,a}function ia(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=an();return ku(n,kt,e)}function ku(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=g=null,F=null,$=n,he=!1;do{var xe=$.lane&-536870913;if(xe!==$.lane?(Et&xe)===xe:(na&xe)===xe){var ie=$.revertLane;if(ie===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xe===tr&&(he=!0);else if((na&ie)===ie){$=$.next,ie===tr&&(he=!0);continue}else xe={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(b=F=xe,g=f):F=F.next=xe,ut.lanes|=ie,Ha|=ie;xe=$.action,ys&&a(f,xe),f=$.hasEagerState?$.eagerState:a(f,xe)}else ie={lane:xe,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(b=F=ie,g=f):F=F.next=ie,ut.lanes|=xe,Ha|=xe;$=$.next}while($!==null&&$!==n);if(F===null?g=f:F.next=b,!Jn(f,e.memoizedState)&&(hn=!0,he&&(a=nr,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Xu(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=e(f,g.action),g=g.next;while(g!==u);Jn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function jp(e,n,a){var o=ut,u=an(),f=At;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Jn((kt||u).memoizedState,a);if(g&&(u.memoizedState=a,hn=!0),u=u.queue,Yu(Qp.bind(null,o,u,e),[e]),u.getSnapshot!==n||g||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,lr(9,{destroy:void 0},Zp.bind(null,o,u,a,n),null),qt===null)throw Error(r(349));f||(na&127)!==0||Kp(o,n,a)}return a}function Kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Rl(),ut.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Zp(e,n,a,o){n.value=a,n.getSnapshot=o,Jp(n)&&$p(e)}function Qp(e,n,a){return a(function(){Jp(n)&&$p(e)})}function Jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function $p(e){var n=ps(e,2);n!==null&&qn(n,e,2)}function Wu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),ys){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},n}function em(e,n,a,o){return e.baseState=a,ku(e,kt,typeof o=="function"?o:ia)}function px(e,n,a,o,u){if(Ll(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};w.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,tm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=w.T,g={};w.T=g;try{var b=a(u,o),F=w.S;F!==null&&F(g,b),nm(e,n,b)}catch($){qu(e,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),w.T=f}}else try{f=a(u,o),nm(e,n,f)}catch($){qu(e,n,$)}}function nm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){im(e,n,o)},function(o){return qu(e,n,o)}):im(e,n,a)}function im(e,n,a){n.status="fulfilled",n.value=a,am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,tm(e,a)))}function qu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,am(n),n=n.next;while(n!==o)}e.action=null}function am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function sm(e,n){return n}function rm(e,n){if(At){var a=qt.formState;if(a!==null){e:{var o=ut;if(At){if(Yt){t:{for(var u=Yt,f=hi;u.nodeType!==8;){if(!f){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=mi(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sm,lastRenderedState:n},a.queue=o,a=Am.bind(null,ut,o),o.dispatch=a,o=Wu(!1),f=Ju.bind(null,ut,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=px.bind(null,ut,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function om(e){var n=an();return lm(n,kt,e)}function lm(e,n,a){if(n=ku(e,n,sm)[0],e=Dl(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(g){throw g===ir?xl:g}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,lr(9,{destroy:void 0},mx.bind(null,u,a),null)),[o,f,e]}function mx(e,n){e.action=n}function cm(e){var n=an(),a=kt;if(a!==null)return lm(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function lr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Rl(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function um(){return an().memoizedState}function wl(e,n,a,o){var u=zn();ut.flags|=e,u.memoizedState=lr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ul(e,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;kt!==null&&o!==null&&Bu(o,kt.memoizedState.deps)?u.memoizedState=lr(n,f,a,o):(ut.flags|=e,u.memoizedState=lr(1|n,f,a,o))}function fm(e,n){wl(8390656,8,e,n)}function Yu(e,n){Ul(2048,8,e,n)}function gx(e){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Rl(),ut.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function dm(e){var n=an().memoizedState;return gx({ref:n,nextImpl:e}),function(){if((It&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function hm(e,n){return Ul(4,2,e,n)}function pm(e,n){return Ul(4,4,e,n)}function mm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gm(e,n,a){a=a!=null?a.concat([e]):null,Ul(4,4,mm.bind(null,n,e),a)}function ju(){}function vm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Bu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function _m(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Bu(n,o[1]))return o[0];if(o=e(),ys){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[o,n],o}function Ku(e,n,a){return a===void 0||(na&1073741824)!==0&&(Et&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=xg(),ut.lanes|=e,Ha|=e,a)}function xm(e,n,a,o){return Jn(a,n)?a:sr.current!==null?(e=Ku(e,a,o),Jn(e,n)||(hn=!0),e):(na&42)===0||(na&1073741824)!==0&&(Et&261930)===0?(hn=!0,e.memoizedState=a):(e=xg(),ut.lanes|=e,Ha|=e,n)}function Sm(e,n,a,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var g=w.T,b={};w.T=b,Ju(e,!1,n,a);try{var F=u(),$=w.S;if($!==null&&$(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var he=fx(F,o);mo(e,n,he,ai(e))}else mo(e,n,o,ai(e))}catch(xe){mo(e,n,{then:function(){},status:"rejected",reason:xe},ai())}finally{I.p=f,g!==null&&b.types!==null&&(g.types=b.types),w.T=g}}function vx(){}function Zu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Em(e).queue;Sm(e,u,n,oe,a===null?vx:function(){return Mm(e),a(o)})}function Em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mm(e){var n=Em(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},ai())}function Qu(){return Rn(Lo)}function ym(){return an().memoizedState}function Tm(){return an().memoizedState}function _x(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Oa(a);var o=Pa(n,e,a);o!==null&&(qn(o,n,a),co(o,n,a)),n={cache:bu()},e.payload=n;return}n=n.return}}function xx(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(e)?bm(n,a):(a=mu(e,n,a,o),a!==null&&(qn(a,e,o),Rm(a,n,o)))}function Am(e,n,a){var o=ai();mo(e,n,a,o)}function mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))bm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(u.hasEagerState=!0,u.eagerState=b,Jn(b,g))return dl(e,n,u,0),qt===null&&fl(),!1}catch{}if(a=mu(e,n,u,o),a!==null)return qn(a,e,o),Rm(a,n,o),!0}return!1}function Ju(e,n,a,o){if(o={lane:2,revertLane:Uf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ll(e)){if(n)throw Error(r(479))}else n=mu(e,a,o,2),n!==null&&qn(n,e,2)}function Ll(e){var n=e.alternate;return e===ut||n!==null&&n===ut}function bm(e,n){rr=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Rm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zs(e,a)}}var go={readContext:Rn,use:Cl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};go.useEffectEvent=$t;var Cm={readContext:Rn,use:Cl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:fm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,mm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(ys){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(ys){Be(!0);try{a(n)}finally{Be(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=xx.bind(null,ut,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,a=Am.bind(null,ut,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=zn();return Ku(a,e,n)},useTransition:function(){var e=Wu(!1);return e=Sm.bind(null,ut,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ut,u=zn();if(At){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(Et&127)!==0||Kp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,fm(Qp.bind(null,o,f,e),[e]),o.flags|=2048,lr(9,{destroy:void 0},Zp.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=qt.identifierPrefix;if(At){var a=Bi,o=Ii;a=(o&~(1<<32-Ne(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:rm,useActionState:rm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ut,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return zn().memoizedState=_x.bind(null,ut)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:Rn,use:Cl,useCallback:vm,useContext:Rn,useEffect:Yu,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:_m,useReducer:Dl,useRef:um,useState:function(){return Dl(ia)},useDebugValue:ju,useDeferredValue:function(e,n){var a=an();return xm(a,kt.memoizedState,e,n)},useTransition:function(){var e=Dl(ia)[0],n=an().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:jp,useId:ym,useHostTransitionStatus:Qu,useFormState:om,useActionState:om,useOptimistic:function(e,n){var a=an();return em(a,kt,e,n)},useMemoCache:Vu,useCacheRefresh:Tm};$u.useEffectEvent=dm;var Dm={readContext:Rn,use:Cl,useCallback:vm,useContext:Rn,useEffect:Yu,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:pm,useMemo:_m,useReducer:Xu,useRef:um,useState:function(){return Xu(ia)},useDebugValue:ju,useDeferredValue:function(e,n){var a=an();return kt===null?Ku(a,e,n):xm(a,kt.memoizedState,e,n)},useTransition:function(){var e=Xu(ia)[0],n=an().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:jp,useId:ym,useHostTransitionStatus:Qu,useFormState:cm,useActionState:cm,useOptimistic:function(e,n){var a=an();return kt!==null?em(a,kt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Tm};Dm.useEffectEvent=dm;function ef(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,o),n!==null&&(qn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,o),n!==null&&(qn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(e,o,a),n!==null&&(qn(n,e,a),co(n,e,a))}};function wm(e,n,a,o,u,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,g):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(u,f):!0}function Um(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&tf.enqueueReplaceState(n,n.state,null)}function Ts(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Lm(e){ul(e)}function Nm(e){console.error(e)}function Om(e){ul(e)}function Nl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Pm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(e,n)},a}function Im(e){return e=Oa(e),e.tag=3,e}function Bm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Pm(n,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Pm(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Sx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Wl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Cf(e,o,u)),!1;case 22:return a.flags|=65536,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Cf(e,o,u)),!1}throw Error(r(435,a.tag))}return Cf(e,o,u),Wl(),!1}if(At)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Eu&&(e=Error(r(422),{cause:o}),ao(ui(e,a)))):(o!==Eu&&(n=Error(r(423),{cause:o}),ao(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ui(o,a),u=nf(e.stateNode,o,u),Lu(e,u),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:o});if(f=ui(f,a),To===null?To=[f]:To.push(f),en!==4&&(en=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=nf(a.stateNode,o,e),Lu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Im(u),Bm(u,e,a,o),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(r(461)),hn=!1;function Cn(e,n,a,o){n.child=e===null?Gp(n,null,a,o):Ms(n,e.child,a,o)}function Fm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var g={};for(var b in o)b!=="ref"&&(g[b]=o[b])}else g=o;return _s(n),o=Fu(e,n,a,g,f,u),b=zu(),e!==null&&!hn?(Hu(e,n,u),aa(e,n,u)):(At&&b&&xu(n),n.flags|=1,Cn(e,n,o,u),n.child)}function zm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Hm(e,n,f,o,u)):(e=pl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!df(e,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(g,o)&&e.ref===n.ref)return aa(e,n,u)}return n.flags|=1,e=Ji(f,o),e.ref=n.ref,e.return=n,n.child=e}function Hm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(to(f,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=f,df(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,aa(e,n,u)}return sf(e,n,a,o,u)}function Gm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Vm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&_l(n,f!==null?f.cachePool:null),f!==null?Xp(n,f):Ou(),Wp(n);else return o=n.lanes=536870912,Vm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(_l(n,f.cachePool),Xp(n,f),Ba(),n.memoizedState=null):(e!==null&&_l(n,null),Ou(),Ba());return Cn(e,n,u,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vm(e,n,a,o,u){var f=Cu();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&_l(n,null),Ou(),Wp(n),e!==null&&er(e,n,o,!0),n.childLanes=u,null}function Ol(e,n){return n=Il({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function km(e,n,a){return Ms(n,e.child,null,a),e=Ol(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function Ex(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(At){if(o.mode==="hidden")return e=Ol(n,o),n.lanes=536870912,vo(null,e);if(Iu(n),(e=Yt)?(e=t0(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=bp(e),a.return=n,n.child=a,bn=n,Yt=null)):e=null,e===null)throw Ua(n);return n.lanes=536870912,null}return Ol(n,o)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Iu(n),u)if(n.flags&256)n.flags&=-257,n=km(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||er(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=qt,o!==null&&(g=$o(o,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ps(e,g),qn(o,e,g),af;Wl(),n=km(e,n,a)}else e=f.treeContext,Yt=mi(g.nextSibling),bn=n,At=!0,wa=null,hi=!1,e!==null&&Dp(n,e),n=Ol(n,o),n.flags|=4096;return n}return e=Ji(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sf(e,n,a,o,u){return _s(n),a=Fu(e,n,a,o,void 0,u),o=zu(),e!==null&&!hn?(Hu(e,n,u),aa(e,n,u)):(At&&o&&xu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function Xm(e,n,a,o,u,f){return _s(n),n.updateQueue=null,a=Yp(n,o,a,u),qp(e),o=zu(),e!==null&&!hn?(Hu(e,n,f),aa(e,n,f)):(At&&o&&xu(n),n.flags|=1,Cn(e,n,a,f),n.child)}function Wm(e,n,a,o,u){if(_s(n),n.stateNode===null){var f=Zs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Rn(g)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Rn(g):Zs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ef(n,a,g,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&tf.enqueueReplaceState(f,f.state,null),fo(n,o,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,F=Ts(a,b);f.props=F;var $=f.context,he=a.contextType;g=Zs,typeof he=="object"&&he!==null&&(g=Rn(he));var xe=a.getDerivedStateFromProps;he=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==g)&&Um(n,f,o,g),Na=!1;var ie=n.memoizedState;f.state=ie,fo(n,o,f,u),uo(),$=n.memoizedState,b||ie!==$||Na?(typeof xe=="function"&&(ef(n,a,xe,o),$=n.memoizedState),(F=Na||wm(n,a,F,o,ie,$,g))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=g,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Uu(e,n),g=n.memoizedProps,he=Ts(a,g),f.props=he,xe=n.pendingProps,ie=f.context,$=a.contextType,F=Zs,typeof $=="object"&&$!==null&&(F=Rn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==xe||ie!==F)&&Um(n,f,o,F),Na=!1,ie=n.memoizedState,f.state=ie,fo(n,o,f,u),uo();var le=n.memoizedState;g!==xe||ie!==le||Na||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof b=="function"&&(ef(n,a,b,o),le=n.memoizedState),(he=Na||wm(n,a,he,o,ie,le,F)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=F,o=he):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Pl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=aa(e,n,u),e}function qm(e,n,a,o){return gs(),n.flags|=256,Cn(e,n,a,o),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Pp()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function Ym(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(At){if(u?Ia(n):Ba(),(e=Yt)?(e=t0(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=bp(e),a.return=n,n.child=a,bn=n,Yt=null)):e=null,e===null)throw Ua(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Ba(),u=n.mode,b=Il({mode:"hidden",children:b},u),o=ms(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,g,a),n.memoizedState=rf,vo(null,o)):(Ia(n),cf(n,b))}var F=e.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(Ba(),n.child=e.child,n.flags|=128,n=null):(Ba(),b=o.fallback,u=n.mode,o=Il({mode:"visible",children:o.children},u),b=ms(b,u,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=of(a),o.childLanes=lf(e,g,a),n.memoizedState=rf,n=vo(null,o));else if(Ia(n),Xf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var $=g.dgst;g=$,o=Error(r(419)),o.stack="",o.digest=g,ao({value:o,source:null,stack:null}),n=uf(e,n,a)}else if(hn||er(e,n,a,!1),g=(a&e.childLanes)!==0,hn||g){if(g=qt,g!==null&&(o=$o(g,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,ps(e,o),qn(g,e,o),af;kf(b)||Wl(),n=uf(e,n,a)}else kf(b)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Yt=mi(b.nextSibling),bn=n,At=!0,wa=null,hi=!1,e!==null&&Dp(n,e),n=cf(n,o.children),n.flags|=4096);return n}return u?(Ba(),b=o.fallback,u=n.mode,F=e.child,$=F.sibling,o=Ji(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,$!==null?b=Ji($,b):(b=ms(b,u,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,vo(null,o),o=n.child,b=e.child.memoizedState,b===null?b=of(a):(u=b.cachePool,u!==null?(F=fn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Pp(),b={baseLanes:b.baseLanes|a,cachePool:u}),o.memoizedState=b,o.childLanes=lf(e,g,a),n.memoizedState=rf,vo(e.child,o)):(Ia(n),a=e.child,e=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return Ms(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Tu(e.return,n,a)}function ff(e,n,a,o,u,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Km(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var g=nn.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,ve(nn,g),Cn(e,n,o,a),o=At?io:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,a,n);else if(e.tag===19)jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Tl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Tl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ff(n,!0,a,null,f,o);break;case"together":ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function Mx(e,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),La(n,fn,e.memoizedState.cache),gs();break;case 27:case 5:Ye(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Iu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(e,n,a):(Ia(n),e=aa(e,n,a),e!==null?e.sibling:null);Ia(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(er(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Km(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(nn,nn.current),o)break;return null;case 22:return n.lanes=0,Gm(e,n,a,n.pendingProps);case 24:La(n,fn,e.memoizedState.cache)}return aa(e,n,a)}function Zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!df(e,a)&&(n.flags&128)===0)return hn=!1,Mx(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,At&&(n.flags&1048576)!==0&&Cp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=Ss(n.elementType),n.type=e,typeof e=="function")gu(e)?(o=Ts(e,o),n.tag=1,n=Wm(null,n,e,o,a)):(n.tag=0,n=sf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=Fm(null,n,e,o,a);break e}else if(u===B){n.tag=14,n=zm(null,n,e,o,a);break e}}throw n=ce(e)||e,Error(r(306,n,""))}}return n;case 0:return sf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ts(o,n.pendingProps),Wm(e,n,o,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(e,n),fo(n,o,null,a);var g=n.memoizedState;if(o=g.cache,La(n,fn,o),o!==f.cache&&Au(n,[fn],a,!0),uo(),o=g.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=qm(e,n,o,a);break e}else if(o!==u){u=ui(Error(r(424)),n),ao(u),n=qm(e,n,o,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Yt=mi(e.firstChild),bn=n,At=!0,wa=null,hi=!0,a=Gp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),o===u){n=aa(e,n,a);break e}Cn(e,n,o,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=o0(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,e=n.pendingProps,o=Jl(te.current).createElement(a),o[ln]=n,o[vn]=e,Dn(o,a,e),X(o),n.stateNode=o):n.memoizedState=o0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ye(n),e===null&&At&&(o=n.stateNode=a0(n.type,n.pendingProps,te.current),bn=n,hi=!0,u=Yt,Wa(n.type)?(Wf=u,Yt=mi(o.firstChild)):Yt=u),Cn(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&At&&((u=o=Yt)&&(o=Jx(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,bn=n,Yt=mi(o.firstChild),hi=!1,u=!0):u=!1),u||Ua(n)),Ye(n),u=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,o=f.children,Hf(u,f)?o=null:g!==null&&Hf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Fu(e,n,hx,null,null,a),Lo._currentValue=u),Pl(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&At&&((e=a=Yt)&&(a=$x(a,n.pendingProps,hi),a!==null?(n.stateNode=a,bn=n,Yt=null,e=!0):e=!1),e||Ua(n)),null;case 13:return Ym(e,n,a);case 4:return Se(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return Fm(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,_s(n),u=Rn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return zm(e,n,n.type,n.pendingProps,a);case 15:return Hm(e,n,n.type,n.pendingProps,a);case 19:return Km(e,n,a);case 31:return Ex(e,n,a);case 22:return Gm(e,n,a,n.pendingProps);case 24:return _s(n),o=Rn(fn),e===null?(u=Cu(),u===null&&(u=qt,f=bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},wu(n),La(n,fn,u)):((e.lanes&a)!==0&&(Uu(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,fn,o)):(o=f.cache,La(n,fn,o),o!==u.cache&&Au(n,[fn],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function sa(e){e.flags|=4}function hf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(yg())e.flags|=8192;else throw Es=Sl,Du}else e.flags&=-16777217}function Qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!d0(n))if(yg())e.flags|=8192;else throw Es=Sl,Du}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?zt():536870912,e.lanes|=n,dr|=n)}function _o(e,n){if(!At)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function yx(e,n,a){var o=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(fn),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($s(n)?sa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mu())),jt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(sa(n),f!==null?(jt(n),Qm(n,f)):(jt(n),hf(n,u,null,o,a))):f?f!==e.memoizedState?(sa(n),jt(n),Qm(n,f)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&sa(n),jt(n),hf(n,u,e,o,a)),null;case 27:if($e(n),a=te.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}e=be.current,$s(n)?wp(n):(e=a0(u,o,a),n.stateNode=e,sa(n))}return jt(n),null;case 5:if($e(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(f=be.current,$s(n))wp(n);else{var g=Jl(te.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?g.createElement(u,{is:o.is}):g.createElement(u)}}f[ln]=n,f[vn]=o;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return jt(n),hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=te.current,$s(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yg(e.nodeValue,a)),e||Ua(n,!0)}else e=Jl(e).createTextNode(o),e[ln]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=$s(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return jt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$s(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),jt(n),null);case 4:return Oe(),e===null&&Pf(n.stateNode.containerInfo),jt(n),null;case 10:return ta(n.type),jt(n),null;case 19:if(j(nn),o=n.memoizedState,o===null)return jt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)_o(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Tl(e),f!==null){for(n.flags|=128,_o(o,!1),e=f.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ap(a,e),a=a.sibling;return ve(nn,nn.current&1|2),At&&$i(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&y()>Vl&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304)}else{if(!u)if(e=Tl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!At)return jt(n),null}else 2*y()-o.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=y(),e.sibling=null,a=nn.current,ve(nn,u?a&1|2:a&1),At&&$i(n,o.treeForkCount),e):(jt(n),null);case 22:case 23:return ti(n),Pu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&j(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(fn),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Tx(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(fn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(nn),null;case 4:return Oe(),null;case 10:return ta(n.type),null;case 22:case 23:return ti(n),Pu(),e!==null&&j(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(fn),null;case 25:return null;default:return null}}function Jm(e,n){switch(Su(n),n.tag){case 3:ta(fn),Oe();break;case 26:case 27:case 5:$e(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:j(nn);break;case 10:ta(n.type);break;case 22:case 23:ti(n),Pu(),e!==null&&j(xs);break;case 24:ta(fn)}}function xo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,g=a.inst;o=f(),g.destroy=o}a=a.next}while(a!==u)}}catch(b){Gt(n,n.return,b)}}function Fa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var g=o.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,u=n;var F=a,$=b;try{$()}catch(he){Gt(u,F,he)}}}o=o.next}while(o!==f)}}catch(he){Gt(n,n.return,he)}}function $m(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{kp(n,a)}catch(o){Gt(e,e.return,o)}}}function eg(e,n,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Gt(e,n,u)}}function Fi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(e,n,u)}else a.current=null}function tg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(e,e.return,u)}}function pf(e,n,a){try{var o=e.stateNode;qx(o,e.type,a,n),o[vn]=n}catch(u){Gt(e,e.return,u)}}function ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function mf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gf(e,n,a),e=e.sibling;e!==null;)gf(e,n,a),e=e.sibling}function Fl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fl(e,n,a),e=e.sibling;e!==null;)Fl(e,n,a),e=e.sibling}function ig(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[ln]=e,n[vn]=a}catch(f){Gt(e,e.return,f)}}var ra=!1,pn=!1,vf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Ax(e,n){if(e=e.containerInfo,Ff=sc,e=gp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,b=-1,F=-1,$=0,he=0,xe=e,ie=null;t:for(;;){for(var le;xe!==a||u!==0&&xe.nodeType!==3||(b=g+u),xe!==f||o!==0&&xe.nodeType!==3||(F=g+o),xe.nodeType===3&&(g+=xe.nodeValue.length),(le=xe.firstChild)!==null;)ie=xe,xe=le;for(;;){if(xe===e)break t;if(ie===a&&++$===u&&(b=g),ie===f&&++he===o&&(F=g),(le=xe.nextSibling)!==null)break;xe=ie,ie=xe.parentNode}xe=le}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:e,selectionRange:a},sc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ke=Ts(a.type,u);e=o.getSnapshotBeforeUpdate(ke,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(et){Gt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function sg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),o&4&&xo(5,a);break;case 1:if(la(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Gt(a,a.return,g)}else{var u=Ts(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Gt(a,a.return,g)}}o&64&&$m(a),o&512&&So(a,a.return);break;case 3:if(la(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kp(e,n)}catch(g){Gt(a,a.return,g)}}break;case 27:n===null&&o&4&&ig(a);case 26:case 5:la(e,a),n===null&&o&4&&tg(a),o&512&&So(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),o&4&&lg(e,a);break;case 13:la(e,a),o&4&&cg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ox.bind(null,a),eS(e,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||pn,u=ra;var f=pn;ra=o,(pn=n)&&!f?ca(e,a,(a.subtreeFlags&8772)!==0):la(e,a),ra=u,pn=f}break;case 30:break;default:la(e,a)}}function rg(e){var n=e.alternate;n!==null&&(e.alternate=null,rg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Yr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Vn=!1;function oa(e,n,a){for(a=a.child;a!==null;)og(e,n,a),a=a.sibling}function og(e,n,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:pn||Fi(a,n),oa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Fi(a,n);var o=Jt,u=Vn;Wa(a.type)&&(Jt=a.stateNode,Vn=!1),oa(e,n,a),Do(a.stateNode),Jt=o,Vn=u;break;case 5:pn||Fi(a,n);case 6:if(o=Jt,u=Vn,Jt=null,oa(e,n,a),Jt=o,Vn=u,Jt!==null)if(Vn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:Jt!==null&&(Vn?(e=Jt,$g(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Sr(e)):$g(Jt,a.stateNode));break;case 4:o=Jt,u=Vn,Jt=a.stateNode.containerInfo,Vn=!0,oa(e,n,a),Jt=o,Vn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),pn||Fa(4,a,n),oa(e,n,a);break;case 1:pn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&eg(a,n,o)),oa(e,n,a);break;case 21:oa(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,oa(e,n,a),pn=o;break;default:oa(e,n,a)}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sr(e)}catch(a){Gt(n,n.return,a)}}}function cg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sr(e)}catch(a){Gt(n,n.return,a)}}function bx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ag),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ag),n;default:throw Error(r(435,e.tag))}}function zl(e,n){var a=bx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Px.bind(null,e,o);o.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,g=n,b=g;e:for(;b!==null;){switch(b.tag){case 27:if(Wa(b.type)){Jt=b.stateNode,Vn=!1;break e}break;case 5:Jt=b.stateNode,Vn=!1;break e;case 3:case 4:Jt=b.stateNode.containerInfo,Vn=!0;break e}b=b.return}if(Jt===null)throw Error(r(160));og(f,g,u),Jt=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ug(n,e),n=n.sibling}var Ai=null;function ug(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),o&4&&(Fa(3,e,e.return),xo(3,e),Fa(5,e,e.return));break;case 1:kn(n,e),Xn(e),o&512&&(pn||a===null||Fi(a,a.return)),o&64&&ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(kn(n,e),Xn(e),o&512&&(pn||a===null||Fi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[cs]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[ln]=e,X(f),o=f;break e;case"link":var g=u0("link","href",u).get(o+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(g=u0("meta","content",u).get(o+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[ln]=e,X(f),o=f}e.stateNode=o}else f0(u,e.type,e.stateNode);else e.stateNode=c0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?f0(u,e.type,e.stateNode):c0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),o&512&&(pn||a===null||Fi(a,a.return)),a!==null&&o&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),o&512&&(pn||a===null||Fi(a,a.return)),e.flags&32){u=e.stateNode;try{Fn(u,"")}catch(ke){Gt(e,e.return,ke)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(vf=!0);break;case 6:if(kn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ke){Gt(e,e.return,ke)}}break;case 3:if(tc=null,u=Ai,Ai=$l(n.containerInfo),kn(n,e),Ai=u,Xn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Sr(n.containerInfo)}catch(ke){Gt(e,e.return,ke)}vf&&(vf=!1,fg(e));break;case 4:o=Ai,Ai=$l(e.stateNode.containerInfo),kn(n,e),Xn(e),Ai=o;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zl(e,o)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gl=y()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zl(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,$=ra,he=pn;if(ra=$||u,pn=he||F,kn(n,e),pn=he,ra=$,Xn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ra||pn||As(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=F.stateNode;var xe=F.memoizedProps.style,ie=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;b.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ke){Gt(F,F.return,ke)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(ke){Gt(F,F.return,ke)}}}else if(n.tag===18){if(a===null){F=n;try{var le=F.stateNode;u?e0(le,!0):e0(F.stateNode,!1)}catch(ke){Gt(F,F.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,zl(e,a))));break;case 19:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zl(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(ng(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);Fl(e,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Fn(g,""),a.flags&=-33);var b=mf(e);Fl(e,b,g);break;case 3:case 4:var F=a.stateNode.containerInfo,$=mf(e);gf(e,$,F);break;default:throw Error(r(161))}}catch(he){Gt(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sg(e,n.alternate,n),n=n.sibling}function As(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),As(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&eg(n,n.return,a),As(n);break;case 27:Do(n.stateNode);case 26:case 5:Fi(n,n.return),As(n);break;case 22:n.memoizedState===null&&As(n);break;case 30:As(n);break;default:As(n)}e=e.sibling}}function ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,a),xo(4,f);break;case 1:if(ca(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Gt(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Vp(F[u],b)}catch($){Gt(o,o.return,$)}}a&&g&64&&$m(f),So(f,f.return);break;case 27:ig(f);case 26:case 5:ca(u,f,a),a&&o===null&&g&4&&tg(f),So(f,f.return);break;case 12:ca(u,f,a);break;case 31:ca(u,f,a),a&&g&4&&lg(u,f);break;case 13:ca(u,f,a),a&&g&4&&cg(u,f);break;case 22:f.memoizedState===null&&ca(u,f,a),So(f,f.return);break;case 30:break;default:ca(u,f,a)}n=n.sibling}}function _f(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dg(e,n,a,o),n=n.sibling}function dg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,o),u&2048&&xo(9,n);break;case 1:bi(e,n,a,o);break;case 3:bi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(u&2048){bi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Gt(n,n.return,F)}}else bi(e,n,a,o);break;case 31:bi(e,n,a,o);break;case 13:bi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,o):Eo(e,n):f._visibility&2?bi(e,n,a,o):(f._visibility|=2,cr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&_f(g,n);break;case 24:bi(e,n,a,o),u&2048&&xf(n.alternate,n);break;default:bi(e,n,a,o)}}function cr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,b=a,F=o,$=g.flags;switch(g.tag){case 0:case 11:case 15:cr(f,g,b,F,u),xo(8,g);break;case 23:break;case 22:var he=g.stateNode;g.memoizedState!==null?he._visibility&2?cr(f,g,b,F,u):Eo(f,g):(he._visibility|=2,cr(f,g,b,F,u)),u&&$&2048&&_f(g.alternate,g);break;case 24:cr(f,g,b,F,u),u&&$&2048&&xf(g.alternate,g);break;default:cr(f,g,b,F,u)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&_f(o.alternate,o);break;case 24:Eo(a,o),u&2048&&xf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var Mo=8192;function ur(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)hg(e,n,a),e=e.sibling}function hg(e,n,a){switch(e.tag){case 26:ur(e,n,a),e.flags&Mo&&e.memoizedState!==null&&dS(a,Ai,e.memoizedState,e.memoizedProps);break;case 5:ur(e,n,a);break;case 3:case 4:var o=Ai;Ai=$l(e.stateNode.containerInfo),ur(e,n,a),Ai=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,ur(e,n,a),Mo=o):ur(e,n,a));break;default:ur(e,n,a)}}function pg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,gg(o,e)}pg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mg(e),e=e.sibling}function mg(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Hl(e)):yo(e);break;default:yo(e)}}function Hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,gg(o,e)}pg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}e=e.sibling}}function gg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(rg(o),o===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var Rx={getCacheForType:function(e){var n=Rn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(fn).controller.signal}},Cx=typeof WeakMap=="function"?WeakMap:Map,It=0,qt=null,xt=null,Et=0,Ht=0,ni=null,za=!1,fr=!1,Sf=!1,ua=0,en=0,Ha=0,bs=0,Ef=0,ii=0,dr=0,To=null,Wn=null,Mf=!1,Gl=0,vg=0,Vl=1/0,kl=null,Ga=null,xn=0,Va=null,hr=null,fa=0,yf=0,Tf=null,_g=null,Ao=0,Af=null;function ai(){return(It&2)!==0&&Et!==0?Et&-Et:w.T!==null?Uf():Pi()}function xg(){if(ii===0)if((Et&536870912)===0||At){var e=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),ii=e}else ii=536870912;return e=ei.current,e!==null&&(e.flags|=32),ii}function qn(e,n,a){(e===qt&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)&&(pr(e,0),ka(e,Et,ii,!1)),Pn(e,a),((It&2)===0||e!==qt)&&(e===qt&&((It&2)===0&&(bs|=a),en===4&&ka(e,Et,ii,!1)),zi(e))}function Sg(e,n,a){if((It&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ge(e,n),u=o?Ux(e,n):Rf(e,n,!0),f=o;do{if(u===0){fr&&!o&&ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Dx(a)){u=Rf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var b=e;u=To;var F=b.current.memoizedState.isDehydrated;if(F&&(pr(b,g).flags|=256),g=Rf(b,g,!1),g!==2){if(Sf&&!F){b.errorRecoveryDisabledLanes|=f,bs|=f,u=4;break e}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){pr(e,0),ka(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ii,!za);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Gl+300-y(),10<u)){if(ka(o,n,ii,!za),ue(o,0,!0)!==0)break e;fa=n,o.timeoutHandle=Qg(Eg.bind(null,o,a,Wn,kl,Mf,n,ii,bs,dr,za,f,"Throttled",-0,0),u);break e}Eg(o,a,Wn,kl,Mf,n,ii,bs,dr,za,f,null,-0,0)}}break}while(!0);zi(e)}function Eg(e,n,a,o,u,f,g,b,F,$,he,xe,ie,le){if(e.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},hg(n,f,xe);var ke=(f&62914560)===f?Gl-y():(f&4194048)===f?vg-y():0;if(ke=hS(xe,ke),ke!==null){fa=f,e.cancelPendingCommit=ke(Dg.bind(null,e,n,f,a,o,u,g,b,F,he,xe,null,ie,le)),ka(e,f,g,!$);return}}Dg(e,n,f,a,o,u,g,b,F)}function Dx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(e,n,a,o){n&=~Ef,n&=~bs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ne(u),g=1<<f;o[f]=-1,u&=~g}a!==0&&qr(e,a,n)}function Xl(){return(It&6)===0?(bo(0),!1):!0}function bf(){if(xt!==null){if(Ht===0)var e=xt.return;else e=xt,ea=vs=null,Gu(e),ar=null,oo=0,e=xt;for(;e!==null;)Jm(e.alternate,e),e=e.return;xt=null}}function pr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Kx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,bf(),qt=e,xt=a=Ji(e.current,null),Et=n,Ht=0,ni=null,za=!1,fr=Ge(e,n),Sf=!1,dr=ii=Ef=bs=Ha=en=0,Wn=To=null,Mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ne(o),f=1<<u;n|=e[u],o&=~f}return ua=n,fl(),a}function Mg(e,n){ut=null,w.H=go,n===ir||n===xl?(n=Fp(),Ht=3):n===Du?(n=Fp(),Ht=4):Ht=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,xt===null&&(en=1,Nl(e,ui(n,e.current)))}function yg(){var e=ei.current;return e===null?!0:(Et&4194048)===Et?pi===null:(Et&62914560)===Et||(Et&536870912)!==0?e===pi:!1}function Tg(){var e=w.H;return w.H=go,e===null?go:e}function Ag(){var e=w.A;return w.A=Rx,e}function Wl(){en=4,za||(Et&4194048)!==Et&&ei.current!==null||(fr=!0),(Ha&134217727)===0&&(bs&134217727)===0||qt===null||ka(qt,Et,ii,!1)}function Rf(e,n,a){var o=It;It|=2;var u=Tg(),f=Ag();(qt!==e||Et!==n)&&(kl=null,pr(e,n)),n=!1;var g=en;e:do try{if(Ht!==0&&xt!==null){var b=xt,F=ni;switch(Ht){case 8:bf(),g=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var $=Ht;if(Ht=0,ni=null,mr(e,b,F,$),a&&fr){g=0;break e}break;default:$=Ht,Ht=0,ni=null,mr(e,b,F,$)}}wx(),g=en;break}catch(he){Mg(e,he)}while(!0);return n&&e.shellSuspendCounter++,ea=vs=null,It=o,w.H=u,w.A=f,xt===null&&(qt=null,Et=0,fl()),g}function wx(){for(;xt!==null;)bg(xt)}function Ux(e,n){var a=It;It|=2;var o=Tg(),u=Ag();qt!==e||Et!==n?(kl=null,Vl=y()+500,pr(e,n)):fr=Ge(e,n);e:do try{if(Ht!==0&&xt!==null){n=xt;var f=ni;t:switch(Ht){case 1:Ht=0,ni=null,mr(e,n,f,1);break;case 2:case 9:if(Ip(f)){Ht=0,ni=null,Rg(n);break}n=function(){Ht!==2&&Ht!==9||qt!==e||(Ht=7),zi(e)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:Ip(f)?(Ht=0,ni=null,Rg(n)):(Ht=0,ni=null,mr(e,n,f,7));break;case 5:var g=null;switch(xt.tag){case 26:g=xt.memoizedState;case 5:case 27:var b=xt;if(g?d0(g):b.stateNode.complete){Ht=0,ni=null;var F=b.sibling;if(F!==null)xt=F;else{var $=b.return;$!==null?(xt=$,ql($)):xt=null}break t}}Ht=0,ni=null,mr(e,n,f,5);break;case 6:Ht=0,ni=null,mr(e,n,f,6);break;case 8:bf(),en=6;break e;default:throw Error(r(462))}}Lx();break}catch(he){Mg(e,he)}while(!0);return ea=vs=null,w.H=o,w.A=u,It=a,xt!==null?0:(qt=null,Et=0,fl(),en)}function Lx(){for(;xt!==null&&!je();)bg(xt)}function bg(e){var n=Zm(e.alternate,e,ua);e.memoizedProps=e.pendingProps,n===null?ql(e):xt=n}function Rg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Gu(n);default:Jm(a,n),n=xt=Ap(n,ua),n=Zm(a,n,ua)}e.memoizedProps=e.pendingProps,n===null?ql(e):xt=n}function mr(e,n,a,o){ea=vs=null,Gu(n),ar=null,oo=0;var u=n.return;try{if(Sx(e,u,n,a,Et)){en=1,Nl(e,ui(a,e.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;en=1,Nl(e,ui(a,e.current)),xt=null;return}n.flags&32768?(At||o===1?e=!0:fr||(Et&536870912)!==0?e=!1:(za=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),Cg(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){Cg(n,za);return}e=n.return;var a=yx(n.alternate,n,ua);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=e}while(n!==null);en===0&&(en=5)}function Cg(e,n){do{var a=Tx(e.alternate,e);if(a!==null){a.flags&=32767,xt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xt=e;return}xt=e=a}while(e!==null);en=6,xt=null}function Dg(e,n,a,o,u,f,g,b,F){e.cancelPendingCommit=null;do Yl();while(xn!==0);if((It&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pu,Si(e,a,f,g,b,F),e===qt&&(xt=qt=null,Et=0),hr=n,Va=e,fa=a,yf=f,Tf=u,_g=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ix(de,function(){return Og(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=w.T,w.T=null,u=I.p,I.p=2,g=It,It|=4;try{Ax(e,n,a)}finally{It=g,I.p=u,w.T=o}}xn=1,wg(),Ug(),Lg()}}function wg(){if(xn===1){xn=0;var e=Va,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var o=I.p;I.p=2;var u=It;It|=4;try{ug(n,e);var f=zf,g=gp(e.containerInfo),b=f.focusedElem,F=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&mp(b.ownerDocument.documentElement,b)){if(F!==null&&cu(b)){var $=F.start,he=F.end;if(he===void 0&&(he=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(he,b.value.length);else{var xe=b.ownerDocument||document,ie=xe&&xe.defaultView||window;if(ie.getSelection){var le=ie.getSelection(),ke=b.textContent.length,et=Math.min(F.start,ke),Wt=F.end===void 0?et:Math.min(F.end,ke);!le.extend&&et>Wt&&(g=Wt,Wt=et,et=g);var K=pp(b,et),k=pp(b,Wt);if(K&&k&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var J=xe.createRange();J.setStart(K.node,K.offset),le.removeAllRanges(),et>Wt?(le.addRange(J),le.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),le.addRange(J))}}}}for(xe=[],le=b;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<xe.length;b++){var ge=xe[b];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}sc=!!Ff,zf=Ff=null}finally{It=u,I.p=o,w.T=a}}e.current=n,xn=2}}function Ug(){if(xn===2){xn=0;var e=Va,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var o=I.p;I.p=2;var u=It;It|=4;try{sg(e,n.alternate,n)}finally{It=u,I.p=o,w.T=a}}xn=3}}function Lg(){if(xn===4||xn===3){xn=0,O();var e=Va,n=hr,a=fa,o=_g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,hr=Va=null,Ng(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),Gs(a),n=n.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=w.T,u=I.p,I.p=2,w.T=null;try{for(var f=e.onRecoverableError,g=0;g<o.length;g++){var b=o[g];f(b.value,{componentStack:b.stack})}}finally{w.T=n,I.p=u}}(fa&3)!==0&&Yl(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Af?Ao++:(Ao=0,Af=e):Ao=0,bo(0)}}function Ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function Yl(){return wg(),Ug(),Lg(),Og()}function Og(){if(xn!==5)return!1;var e=Va,n=yf;yf=0;var a=Gs(fa),o=w.T,u=I.p;try{I.p=32>a?32:a,w.T=null,a=Tf,Tf=null;var f=Va,g=fa;if(xn=0,hr=Va=null,fa=0,(It&6)!==0)throw Error(r(331));var b=It;if(It|=4,mg(f.current),dg(f,f.current,g,a),It=b,bo(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(Ae,f)}catch{}return!0}finally{I.p=u,w.T=o,Ng(e,n)}}function Pg(e,n,a){n=ui(a,n),n=nf(e.stateNode,n,2),e=Pa(e,n,2),e!==null&&(Pn(e,2),zi(e))}function Gt(e,n,a){if(e.tag===3)Pg(e,e,a);else for(;n!==null;){if(n.tag===3){Pg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=ui(a,e),a=Im(2),o=Pa(n,a,2),o!==null&&(Bm(a,o,n,e),Pn(o,2),zi(o));break}}n=n.return}}function Cf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Cx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=Nx.bind(null,e,n,a),n.then(e,e))}function Nx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qt===e&&(Et&a)===a&&(en===4||en===3&&(Et&62914560)===Et&&300>y()-Gl?(It&2)===0&&pr(e,0):Ef|=a,dr===Et&&(dr=0)),zi(e)}function Ig(e,n){n===0&&(n=zt()),e=ps(e,n),e!==null&&(Pn(e,n),zi(e))}function Ox(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ig(e,a)}function Px(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ig(e,a)}function Ix(e,n){return vt(e,n)}var jl=null,gr=null,Df=!1,Kl=!1,wf=!1,Xa=0;function zi(e){e!==gr&&e.next===null&&(gr===null?jl=gr=e:gr=gr.next=e),Kl=!0,Df||(Df=!0,Fx())}function bo(e,n){if(!wf&&Kl){wf=!0;do for(var a=!1,o=jl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var g=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ne(42|e)+1)-1,f&=u&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Hg(o,f))}else f=Et,f=ue(o,o===qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ge(o,f)||(a=!0,Hg(o,f));o=o.next}while(a);wf=!1}}function Bx(){Bg()}function Bg(){Kl=Df=!1;var e=0;Xa!==0&&jx()&&(e=Xa);for(var n=y(),a=null,o=jl;o!==null;){var u=o.next,f=Fg(o,n);f===0?(o.next=null,a===null?jl=u:a.next=u,u===null&&(gr=a)):(a=o,(e!==0||(f&3)!==0)&&(Kl=!0)),o=u}xn!==0&&xn!==5||bo(e),Xa!==0&&(Xa=0)}function Fg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Ne(f),b=1<<g,F=u[g];F===-1?((b&a)===0||(b&o)!==0)&&(u[g]=it(b,n)):F<=n&&(e.expiredLanes|=b),f&=~b}if(n=qt,a=Et,a=ue(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&wt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ge(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&wt(o),Gs(a)){case 2:case 8:a=Ee;break;case 32:a=de;break;case 268435456:a=De;break;default:a=de}return o=zg.bind(null,e),a=vt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&wt(o),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yl()&&e.callbackNode!==a)return null;var o=Et;return o=ue(e,e===qt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Sg(e,o,n),Fg(e,y()),e.callbackNode!=null&&e.callbackNode===a?zg.bind(null,e):null)}function Hg(e,n){if(Yl())return null;Sg(e,n,!0)}function Fx(){Zx(function(){(It&6)!==0?vt(me,Bx):Bg()})}function Uf(){if(Xa===0){var e=tr;e===0&&(e=Ce,Ce<<=1,(Ce&261888)===0&&(Ce=256)),Xa=e}return Xa}function Gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Vg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function zx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Gg((u[vn]||null).action),g=o.submitter;g&&(n=(n=g[vn]||null)?Gg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new ol("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var F=g?Vg(u,g):new FormData(u);Zu(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=g?Vg(u,g):new FormData(u),Zu(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Lf=0;Lf<hu.length;Lf++){var Nf=hu[Lf],Hx=Nf.toLowerCase(),Gx=Nf[0].toUpperCase()+Nf.slice(1);Ti(Hx,"on"+Gx)}Ti(xp,"onAnimationEnd"),Ti(Sp,"onAnimationIteration"),Ti(Ep,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(ix,"onTransitionRun"),Ti(ax,"onTransitionStart"),Ti(sx,"onTransitionCancel"),Ti(Mp,"onTransitionEnd"),we("onMouseEnter",["mouseout","mouseover"]),we("onMouseLeave",["mouseout","mouseover"]),we("onPointerEnter",["pointerout","pointerover"]),we("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var g=o.length-1;0<=g;g--){var b=o[g],F=b.instance,$=b.currentTarget;if(b=b.listener,F!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=$;try{f(u)}catch(he){ul(he)}u.currentTarget=null,f=F}else for(g=0;g<o.length;g++){if(b=o[g],F=b.instance,$=b.currentTarget,b=b.listener,F!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=$;try{f(u)}catch(he){ul(he)}u.currentTarget=null,f=F}}}}function St(e,n){var a=n[Aa];a===void 0&&(a=n[Aa]=new Set);var o=e+"__bubble";a.has(o)||(Xg(n,e,2,!1),a.add(o))}function Of(e,n,a){var o=0;n&&(o|=4),Xg(a,e,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[Zl]){e[Zl]=!0,re.forEach(function(a){a!=="selectionchange"&&(Vx.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Of("selectionchange",!1,n))}}function Xg(e,n,a,o){switch(x0(n)){case 2:var u=gS;break;case 8:u=vS;break;default:u=Zf}a=u.bind(null,n,a,e),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function If(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var b=o.stateNode.containerInfo;if(b===u)break;if(g===4)for(g=o.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;b!==null;){if(g=ba(b),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){o=f=g;continue e}b=b.parentNode}}o=o.return}Kh(function(){var $=f,he=Jc(a),xe=[];e:{var ie=yp.get(e);if(ie!==void 0){var le=ol,ke=e;switch(e){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":le=P_;break;case"focusin":ke="focus",le=au;break;case"focusout":ke="blur",le=au;break;case"beforeblur":case"afterblur":le=au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=F_;break;case xp:case Sp:case Ep:le=b_;break;case Mp:le=H_;break;case"scroll":case"scrollend":le=E_;break;case"wheel":le=V_;break;case"copy":case"cut":case"paste":le=C_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=ep;break;case"toggle":case"beforetoggle":le=X_}var et=(n&4)!==0,Wt=!et&&(e==="scroll"||e==="scrollend"),K=et?ie!==null?ie+"Capture":null:ie;et=[];for(var k=$,J;k!==null;){var ge=k;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||K===null||(ge=jr(k,K),ge!=null&&et.push(Co(k,ge,J))),Wt)break;k=k.return}0<et.length&&(ie=new le(ie,ke,null,a,he),xe.push({event:ie,listeners:et}))}}if((n&7)===0){e:{if(ie=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ie&&a!==Qc&&(ke=a.relatedTarget||a.fromElement)&&(ba(ke)||ke[ji]))break e;if((le||ie)&&(ie=he.window===he?he:(ie=he.ownerDocument)?ie.defaultView||ie.parentWindow:window,le?(ke=a.relatedTarget||a.toElement,le=$,ke=ke?ba(ke):null,ke!==null&&(Wt=c(ke),et=ke.tag,ke!==Wt||et!==5&&et!==27&&et!==6)&&(ke=null)):(le=null,ke=$),le!==ke)){if(et=Jh,ge="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(et=ep,ge="onPointerLeave",K="onPointerEnter",k="pointer"),Wt=le==null?ie:us(le),J=ke==null?ie:us(ke),ie=new et(ge,k+"leave",le,a,he),ie.target=Wt,ie.relatedTarget=J,ge=null,ba(he)===$&&(et=new et(K,k+"enter",ke,a,he),et.target=J,et.relatedTarget=Wt,ge=et),Wt=ge,le&&ke)t:{for(et=kx,K=le,k=ke,J=0,ge=K;ge;ge=et(ge))J++;ge=0;for(var Je=k;Je;Je=et(Je))ge++;for(;0<J-ge;)K=et(K),J--;for(;0<ge-J;)k=et(k),ge--;for(;J--;){if(K===k||k!==null&&K===k.alternate){et=K;break t}K=et(K),k=et(k)}et=null}else et=null;le!==null&&Wg(xe,ie,le,et,!1),ke!==null&&Wt!==null&&Wg(xe,Wt,ke,et,!0)}}e:{if(ie=$?us($):window,le=ie.nodeName&&ie.nodeName.toLowerCase(),le==="select"||le==="input"&&ie.type==="file")var Lt=lp;else if(rp(ie))if(cp)Lt=ex;else{Lt=J_;var Ke=Q_}else le=ie.nodeName,!le||le.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&ks($.elementType)&&(Lt=lp):Lt=$_;if(Lt&&(Lt=Lt(e,$))){op(xe,Lt,a,he);break e}Ke&&Ke(e,ie,$),e==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&Mi(ie,"number",ie.value)}switch(Ke=$?us($):window,e){case"focusin":(rp(Ke)||Ke.contentEditable==="true")&&(Ys=Ke,uu=$,no=null);break;case"focusout":no=uu=Ys=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,vp(xe,a,he);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":vp(xe,a,he)}var ht;if(ru)e:{switch(e){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else qs?ap(e,a)&&(Mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(tp&&a.locale!=="ko"&&(qs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&qs&&(ht=Zh()):(Ca=he,tu="value"in Ca?Ca.value:Ca.textContent,qs=!0)),Ke=Ql($,Mt),0<Ke.length&&(Mt=new $h(Mt,e,null,a,he),xe.push({event:Mt,listeners:Ke}),ht?Mt.data=ht:(ht=sp(a),ht!==null&&(Mt.data=ht)))),(ht=q_?Y_(e,a):j_(e,a))&&(Mt=Ql($,"onBeforeInput"),0<Mt.length&&(Ke=new $h("onBeforeInput","beforeinput",null,a,he),xe.push({event:Ke,listeners:Mt}),Ke.data=ht)),zx(xe,e,$,a,he)}kg(xe,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ql(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=jr(e,a),u!=null&&o.unshift(Co(e,u,f)),u=jr(e,n),u!=null&&o.push(Co(e,u,f))),e.tag===3)return o;e=e.return}return[]}function kx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wg(e,n,a,o,u){for(var f=n._reactName,g=[];a!==null&&a!==o;){var b=a,F=b.alternate,$=b.stateNode;if(b=b.tag,F!==null&&F===o)break;b!==5&&b!==26&&b!==27||$===null||(F=$,u?($=jr(a,f),$!=null&&g.unshift(Co(a,$,F))):u||($=jr(a,f),$!=null&&g.push(Co(a,$,F)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Xx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function qg(e){return(typeof e=="string"?e:""+e).replace(Xx,`
`).replace(Wx,"")}function Yg(e,n){return n=qg(n),qg(e)===n}function Xt(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Fn(e,""+o);break;case"className":ot(e,"class",o);break;case"tabIndex":ot(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ot(e,a,o);break;case"style":Ki(e,o,f);break;case"data":if(n!=="object"){ot(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=il(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(e,n,"name",u.name,u,null),Xt(e,n,"formEncType",u.formEncType,u,null),Xt(e,n,"formMethod",u.formMethod,u,null),Xt(e,n,"formTarget",u.formTarget,u,null)):(Xt(e,n,"encType",u.encType,u,null),Xt(e,n,"method",u.method,u,null),Xt(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=il(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"onScroll":o!=null&&St("scroll",e);break;case"onScrollEnd":o!=null&&St("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=il(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":St("beforetoggle",e),St("toggle",e),nt(e,"popover",o);break;case"xlinkActuate":Ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ve(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ve(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ve(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ve(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=x_.get(a)||a,nt(e,a,o))}}function Bf(e,n,a,o,u,f){switch(a){case"style":Ki(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&Fn(e,""+o);break;case"onScroll":o!=null&&St("scroll",e);break;case"onScrollEnd":o!=null&&St("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ne.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):nt(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",e),St("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(e,n,f,g,a,null)}}u&&Xt(e,n,"srcSet",a.srcSet,a,null),o&&Xt(e,n,"src",a.src,a,null);return;case"input":St("invalid",e);var b=f=g=u=null,F=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":u=he;break;case"type":g=he;break;case"checked":F=he;break;case"defaultChecked":$=he;break;case"value":f=he;break;case"defaultValue":b=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Xt(e,n,o,he,a,null)}}Zn(e,f,b,F,$,g,u,!1);return;case"select":St("invalid",e),o=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":o=b;default:Xt(e,n,u,b,a,null)}n=f,a=g,e.multiple=!!o,n!=null?Qn(e,!!o,n,!1):a!=null&&Qn(e,!!o,a,!0);return;case"textarea":St("invalid",e),f=u=o=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Xt(e,n,g,b,a,null)}cn(e,o,u,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Xt(e,n,F,o,a,null));return;case"dialog":St("beforetoggle",e),St("toggle",e),St("cancel",e),St("close",e);break;case"iframe":case"object":St("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)St(Ro[o],e);break;case"image":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"embed":case"source":case"link":St("error",e),St("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(e,n,$,o,a,null)}return;default:if(ks(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&Bf(e,n,he,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Xt(e,n,b,o,a,null))}function qx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,b=null,F=null,$=null,he=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":F=xe;default:o.hasOwnProperty(le)||Xt(e,n,le,null,o,xe)}}for(var ie in o){var le=o[ie];if(xe=a[ie],o.hasOwnProperty(ie)&&(le!=null||xe!=null))switch(ie){case"type":f=le;break;case"name":u=le;break;case"checked":$=le;break;case"defaultChecked":he=le;break;case"value":g=le;break;case"defaultValue":b=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&Xt(e,n,ie,le,o,xe)}}Bn(e,g,b,F,$,he,f,u);return;case"select":le=g=b=ie=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":le=F;default:o.hasOwnProperty(f)||Xt(e,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":ie=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==F&&Xt(e,n,u,f,o,F)}n=b,a=g,o=le,ie!=null?Qn(e,!!a,ie,!1):!!o!=!!a&&(n!=null?Qn(e,!!a,n,!0):Qn(e,!!a,a?[]:"",!1));return;case"textarea":le=ie=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Xt(e,n,b,null,o,u)}for(g in o)if(u=o[g],f=a[g],o.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":ie=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Xt(e,n,g,u,o,f)}Bt(e,ie,le);return;case"option":for(var ke in a)ie=a[ke],a.hasOwnProperty(ke)&&ie!=null&&!o.hasOwnProperty(ke)&&(ke==="selected"?e.selected=!1:Xt(e,n,ke,null,o,ie));for(F in o)ie=o[F],le=a[F],o.hasOwnProperty(F)&&ie!==le&&(ie!=null||le!=null)&&(F==="selected"?e.selected=ie&&typeof ie!="function"&&typeof ie!="symbol":Xt(e,n,F,ie,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ie=a[et],a.hasOwnProperty(et)&&ie!=null&&!o.hasOwnProperty(et)&&Xt(e,n,et,null,o,ie);for($ in o)if(ie=o[$],le=a[$],o.hasOwnProperty($)&&ie!==le&&(ie!=null||le!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Xt(e,n,$,ie,o,le)}return;default:if(ks(n)){for(var Wt in a)ie=a[Wt],a.hasOwnProperty(Wt)&&ie!==void 0&&!o.hasOwnProperty(Wt)&&Bf(e,n,Wt,void 0,o,ie);for(he in o)ie=o[he],le=a[he],!o.hasOwnProperty(he)||ie===le||ie===void 0&&le===void 0||Bf(e,n,he,ie,o,le);return}}for(var K in a)ie=a[K],a.hasOwnProperty(K)&&ie!=null&&!o.hasOwnProperty(K)&&Xt(e,n,K,null,o,ie);for(xe in o)ie=o[xe],le=a[xe],!o.hasOwnProperty(xe)||ie===le||ie==null&&le==null||Xt(e,n,xe,ie,o,le)}function jg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,g=u.initiatorType,b=u.duration;if(f&&b&&jg(g)){for(g=0,b=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],$=F.startTime;if($>b)break;var he=F.transferSize,xe=F.initiatorType;he&&jg(xe)&&(F=F.responseEnd,g+=he*(F<b?1:(b-$)/(F-$)))}if(--o,n+=8*(f+g)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ff=null,zf=null;function Jl(e){return e.nodeType===9?e:e.ownerDocument}function Kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function jx(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(e){return Jg.resolve(null).then(e).catch(Qx)}:Qg;function Qx(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function $g(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Sr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[cs]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Do(e.ownerDocument.body);a=u}while(a);Sr(n)}function e0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Yr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[cs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function $x(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function t0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function eS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Wf=null;function n0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function i0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function a0(e,n,a){switch(n=Jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Yr(e)}var gi=new Map,s0=new Set;function $l(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=I.d;I.d={f:tS,r:nS,D:iS,C:aS,L:sS,m:rS,X:lS,S:oS,M:cS};function tS(){var e=da.f(),n=Xl();return e||n}function nS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?Mm(n):da.r(e)}var vr=typeof document>"u"?null:document;function r0(e,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),s0.has(u)||(s0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),X(n),o.head.appendChild(n)))}}function iS(e){da.D(e),r0("dns-prefetch",e,null)}function aS(e,n){da.C(e,n),r0("preconnect",e,n)}function sS(e,n,a){da.L(e,n,a);var o=vr;if(o&&e&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(e)+'"]';var f=u;switch(n){case"style":f=_r(e);break;case"script":f=xr(e)}gi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(wo(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),Dn(n,"link",e),X(n),o.head.appendChild(n)))}}function rS(e,n){da.m(e,n);var a=vr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xr(e)}if(!gi.has(f)&&(e=S({rel:"modulepreload",href:e},n),gi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),Dn(o,"link",e),X(o),a.head.appendChild(o)}}}function oS(e,n,a){da.S(e,n,a);var o=vr;if(o&&e){var u=R(o).hoistableStyles,f=_r(e);n=n||"default";var g=u.get(f);if(!g){var b={loading:0,preload:null};if(g=o.querySelector(wo(f)))b.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(f))&&qf(e,a);var F=g=o.createElement("link");X(F),Dn(F,"link",e),F._p=new Promise(function($,he){F.onload=$,F.onerror=he}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ec(g,n,o)}g={type:"stylesheet",instance:g,count:1,state:b},u.set(f,g)}}}function lS(e,n){da.X(e,n);var a=vr;if(a&&e){var o=R(a).hoistableScripts,u=xr(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=S({src:e,async:!0},n),(n=gi.get(u))&&Yf(e,n),f=a.createElement("script"),X(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function cS(e,n){da.M(e,n);var a=vr;if(a&&e){var o=R(a).hoistableScripts,u=xr(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=S({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&Yf(e,n),f=a.createElement("script"),X(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function o0(e,n,a,o){var u=(u=te.current)?$l(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var f=R(u).hoistableStyles,g=f.get(e);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=u.querySelector(wo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),f||uS(u,e,a,g.state))),n&&o===null)throw Error(r(528,""));return g}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xr(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function _r(e){return'href="'+at(e)+'"'}function wo(e){return'link[rel="stylesheet"]['+e+"]"}function l0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function uS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),X(n),e.head.appendChild(n))}function xr(e){return'[src="'+at(e)+'"]'}function Uo(e){return"script[async]"+e}function c0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,X(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),Dn(o,"style",u),ec(o,a.precedence,e),n.instance=o;case"stylesheet":u=_r(a.href);var f=e.querySelector(wo(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;o=l0(a),(u=gi.get(u))&&qf(o,u),f=(e.ownerDocument||e).createElement("link"),X(f);var g=f;return g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),Dn(f,"link",o),n.state.loading|=4,ec(f,a.precedence,e),n.instance=f;case"script":return f=xr(a.src),(u=e.querySelector(Uo(f)))?(n.instance=u,X(u),u):(o=a,(u=gi.get(f))&&(o=S({},a),Yf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,e));return n.instance}function ec(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,g=0;g<o.length;g++){var b=o[g];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function u0(e,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[cs]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var b=o.get(g);b?b.push(f):o.set(g,[f])}}return o}function f0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function d0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(o.href),f=n.querySelector(wo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=nc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,o=l0(o),(u=gi.get(u))&&qf(o,u),f=f.createElement("link"),X(f);var g=f;g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),Dn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function hS(e,n){return e.stylesheets&&e.count===0&&ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ac(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jf===0&&(jf=62500*Yx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ac(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ic=null;function ac(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ic=new Map,n.forEach(pS,e),ic=null,nc.call(e))}function pS(e,n){if(!(n.state.loading&4)){var a=ic.get(e);if(a)var o=a.get(null);else{a=new Map,ic.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||o,f===o&&a.set(null,u),a.set(g,u),this.count++,o=nc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:N,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function mS(e,n,a,o,u,f,g,b,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function h0(e,n,a,o,u,f,g,b,F,$,he,xe){return e=new mS(e,n,a,g,F,$,he,xe,b),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=bu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wu(f),e}function p0(e){return e?(e=Zs,e):Zs}function m0(e,n,a,o,u,f){u=p0(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Pa(e,o,n),a!==null&&(qn(a,e,n),co(a,e,n))}function g0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Kf(e,n){g0(e,n),(e=e.alternate)&&g0(e,n)}function v0(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&qn(n,e,67108864),Kf(e,67108864)}}function _0(e){if(e.tag===13||e.tag===31){var n=ai();n=Hs(n);var a=ps(e,n);a!==null&&qn(a,e,n),Kf(e,n)}}var sc=!0;function gS(e,n,a,o){var u=w.T;w.T=null;var f=I.p;try{I.p=2,Zf(e,n,a,o)}finally{I.p=f,w.T=u}}function vS(e,n,a,o){var u=w.T;w.T=null;var f=I.p;try{I.p=8,Zf(e,n,a,o)}finally{I.p=f,w.T=u}}function Zf(e,n,a,o){if(sc){var u=Qf(o);if(u===null)If(e,n,o,rc,a),S0(e,o);else if(xS(u,e,n,a,o))o.stopPropagation();else if(S0(e,o),n&4&&-1<_S.indexOf(e)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Te(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var F=1<<31-Ne(g);b.entanglements[1]|=F,g&=~F}zi(f),(It&6)===0&&(Vl=y()+500,bo(0))}}break;case 31:case 13:b=ps(f,2),b!==null&&qn(b,f,2),Xl(),Kf(f,2)}if(f=Qf(o),f===null&&If(e,n,o,rc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else If(e,n,o,null,a)}}function Qf(e){return e=Jc(e),Jf(e)}var rc=null;function Jf(e){if(rc=null,e=ba(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return rc=e,null}function x0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case me:return 2;case Ee:return 8;case de:case We:return 32;case De:return 268435456;default:return 32}default:return 32}}var $f=!1,qa=null,Ya=null,ja=null,No=new Map,Oo=new Map,Ka=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S0(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&v0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xS(e,n,a,o,u){switch(n){case"focusin":return qa=Po(qa,e,n,a,o,u),!0;case"dragenter":return Ya=Po(Ya,e,n,a,o,u),!0;case"mouseover":return ja=Po(ja,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Po(No.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,e,n,a,o,u)),!0}return!1}function E0(e){var n=ba(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Vs(e.priority,function(){_0(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Vs(e.priority,function(){_0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Qc=o,a.target.dispatchEvent(o),Qc=null}else return n=Ra(a),n!==null&&v0(n),e.blockedOn=a,!1;n.shift()}return!0}function M0(e,n,a){oc(e)&&a.delete(n)}function SS(){$f=!1,qa!==null&&oc(qa)&&(qa=null),Ya!==null&&oc(Ya)&&(Ya=null),ja!==null&&oc(ja)&&(ja=null),No.forEach(M0),Oo.forEach(M0)}function lc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,SS)))}var cc=null;function y0(e){cc!==e&&(cc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cc===e&&(cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,Zu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Sr(e){function n(F){return lc(F,e)}qa!==null&&lc(qa,e),Ya!==null&&lc(Ya,e),ja!==null&&lc(ja,e),No.forEach(n),Oo.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)E0(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],g=u[vn]||null;if(typeof f=="function")g||y0(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[vn]||null)b=g.formAction;else if(Jf(u)!==null)continue}else b=g.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),y0(a)}}}function T0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ed(e){this._internalRoot=e}uc.prototype.render=ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ai();m0(a,o,e,n,null,null)},uc.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;m0(e.current,2,null,e,null,null),Xl(),n[ji]=null}};function uc(e){this._internalRoot=e}uc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&E0(e)}};var A0=t.version;if(A0!=="19.2.4")throw Error(r(527,A0,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var ES={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{Ae=fc.inject(ES),ye=fc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Lm,f=Nm,g=Om;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=h0(e,1,!1,null,null,a,o,null,u,f,g,T0),e[ji]=n.current,Pf(e),new ed(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Lm,g=Nm,b=Om,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=h0(e,1,!0,n,a??null,o,u,F,f,g,b,T0),n.context=p0(null),a=n.current,o=ai(),o=Hs(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,Pn(n,a),zi(n),e[ji]=n.current,Pf(e),new uc(n)},Bo.version="19.2.4",Bo}var P0;function US(){if(P0)return id.exports;P0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),id.exports=wS(),id.exports}var LS=US();const qc="183",NS=0,I0=1,OS=2,Pc=1,PS=2,Wo=3,Ea=0,Tn=1,oi=2,Li=0,Pr=1,B0=2,F0=3,z0=4,IS=5,Os=100,BS=101,FS=102,zS=103,HS=104,GS=200,VS=201,kS=202,XS=203,kd=204,Xd=205,WS=206,qS=207,YS=208,jS=209,KS=210,ZS=211,QS=212,JS=213,$S=214,Wd=0,Gc=1,qd=2,Br=3,Yd=4,jd=5,Kd=6,Zd=7,Bv=0,eE=1,tE=2,qi=0,Fv=1,zv=2,Hv=3,Gv=4,Vv=5,kv=6,Xv=7,Wv=300,Fs=301,Fr=302,od=303,ld=304,Yc=306,Qd=1e3,_a=1001,Jd=1002,wn=1003,nE=1004,dc=1005,tn=1006,cd=1007,Is=1008,On=1009,qv=1010,Yv=1011,Yo=1012,Fh=1013,Ni=1014,Xi=1015,Ma=1016,zh=1017,Hh=1018,zr=1020,jv=35902,Kv=35899,Zv=1021,Qv=1022,Ui=1023,ya=1026,as=1027,Jv=1028,Gh=1029,Hr=1030,Vh=1031,kh=1033,Ic=33776,Bc=33777,Fc=33778,zc=33779,$d=35840,eh=35841,th=35842,nh=35843,ih=36196,ah=37492,sh=37496,rh=37488,oh=37489,lh=37490,ch=37491,uh=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,vh=37815,_h=37816,xh=37817,Sh=37818,Eh=37819,Mh=37820,yh=37821,Th=36492,Ah=36494,bh=36495,Rh=36283,Ch=36284,Dh=36285,wh=36286,jo=3200,iE=0,aE=1,ki="",rn="srgb",rs="srgb-linear",Vc="linear",Vt="srgb",Er=7680,H0=519,sE=512,rE=513,oE=514,Xh=515,lE=516,cE=517,Wh=518,uE=519,G0=35044,Uh="300 es",Wi=2e3,kc=2001;function fE(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dE(){const s=Xc("canvas");return s.style.display="block",s}const V0={};function k0(...s){const t="THREE."+s.shift();console.log(t,...s)}function $v(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=$v(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function Ot(...s){s=$v(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function Wc(...s){const t=s.join(" ");t in V0||(V0[t]=!0,st(...s))}function hE(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const pE={[Wd]:Gc,[qd]:Kd,[Yd]:Zd,[Br]:jd,[Gc]:Wd,[Kd]:qd,[Zd]:Yd,[jd]:Br};class os{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Lh=180/Math.PI;function Ko(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Rt(s,t,i){return Math.max(t,Math.min(i,s))}function mE(s,t){return(s%t+t)%t}function fd(s,t,i){return(1-i)*s+i*t}function Fo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,i=0){_t.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Rt(this.x,t.x,i.x),this.y=Rt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Rt(this.x,t,i),this.y=Rt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Rt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],x=r[l+2],S=r[l+3],v=c[d+0],M=c[d+1],T=c[d+2],D=c[d+3];if(S!==D||m!==v||h!==M||x!==T){let E=m*v+h*M+x*T+S*D;E<0&&(v=-v,M=-M,T=-T,D=-D,E=-E);let _=1-p;if(E<.9995){const C=Math.acos(E),N=Math.sin(C);_=Math.sin(_*C)/N,p=Math.sin(p*C)/N,m=m*_+v*p,h=h*_+M*p,x=x*_+T*p,S=S*_+D*p}else{m=m*_+v*p,h=h*_+M*p,x=x*_+T*p,S=S*_+D*p;const C=1/Math.sqrt(m*m+h*h+x*x+S*S);m*=C,h*=C,x*=C,S*=C}}t[i]=m,t[i+1]=h,t[i+2]=x,t[i+3]=S}static multiplyQuaternionsFlat(t,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],x=r[l+3],S=c[d],v=c[d+1],M=c[d+2],T=c[d+3];return t[i]=p*T+x*S+m*M-h*v,t[i+1]=m*T+x*v+h*S-p*M,t[i+2]=h*T+x*M+p*v-m*S,t[i+3]=x*T-p*S-m*v-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(r/2),x=p(l/2),S=p(c/2),v=m(r/2),M=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=v*x*S+h*M*T,this._y=h*M*S-v*x*T,this._z=h*x*T+v*M*S,this._w=h*x*S-v*M*T;break;case"YXZ":this._x=v*x*S+h*M*T,this._y=h*M*S-v*x*T,this._z=h*x*T-v*M*S,this._w=h*x*S+v*M*T;break;case"ZXY":this._x=v*x*S-h*M*T,this._y=h*M*S+v*x*T,this._z=h*x*T+v*M*S,this._w=h*x*S-v*M*T;break;case"ZYX":this._x=v*x*S-h*M*T,this._y=h*M*S+v*x*T,this._z=h*x*T-v*M*S,this._w=h*x*S+v*M*T;break;case"YZX":this._x=v*x*S+h*M*T,this._y=h*M*S+v*x*T,this._z=h*x*T-v*M*S,this._w=h*x*S-v*M*T;break;case"XZY":this._x=v*x*S-h*M*T,this._y=h*M*S-v*x*T,this._z=h*x*T+v*M*S,this._w=h*x*S+v*M*T;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],S=i[10],v=r+p+S;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(r>p&&r>S){const M=2*Math.sqrt(1+r-p-S);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>S){const M=2*Math.sqrt(1+p-r-S);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+S-r-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Rt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=r*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-r*h,this._z=c*x+d*h+r*m-l*p,this._w=d*x-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(t=0,i=0,r=0){se.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(X0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(X0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*r),x=2*(p*i-c*l),S=2*(c*r-d*i);return this.x=i+m*h+d*S-p*x,this.y=r+m*x+p*h-c*S,this.z=l+m*S+c*x-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Rt(this.x,t.x,i.x),this.y=Rt(this.y,t.y,i.y),this.z=Rt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Rt(this.x,t,i),this.y=Rt(this.y,t,i),this.z=Rt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return dd.copy(this).projectOnVector(t),this.sub(dd)}reflect(t){return this.sub(dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Rt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new se,X0=new kr;class pt{constructor(t,i,r,l,c,d,p,m,h){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h)}set(t,i,r,l,c,d,p,m,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],x=r[4],S=r[7],v=r[2],M=r[5],T=r[8],D=l[0],E=l[3],_=l[6],C=l[1],N=l[4],L=l[7],V=l[2],G=l[5],B=l[8];return c[0]=d*D+p*C+m*V,c[3]=d*E+p*N+m*G,c[6]=d*_+p*L+m*B,c[1]=h*D+x*C+S*V,c[4]=h*E+x*N+S*G,c[7]=h*_+x*L+S*B,c[2]=v*D+M*C+T*V,c[5]=v*E+M*N+T*G,c[8]=v*_+M*L+T*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8];return i*d*x-i*p*h-r*c*x+r*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],S=x*d-p*h,v=p*m-x*c,M=h*c-d*m,T=i*S+r*v+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return t[0]=S*D,t[1]=(l*h-x*r)*D,t[2]=(p*r-l*d)*D,t[3]=v*D,t[4]=(x*i-l*m)*D,t[5]=(l*c-p*i)*D,t[6]=M*D,t[7]=(r*m-h*i)*D,t[8]=(d*i-r*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(hd.makeScale(t,i)),this}rotate(t){return this.premultiply(hd.makeRotation(-t)),this}translate(t,i){return this.premultiply(hd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new pt,W0=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q0=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gE(){const s={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=Ir(l.r),l.g=Ir(l.g),l.b=Ir(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ki?Vc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[rs]:{primaries:t,whitePoint:r,transfer:Vc,toXYZ:W0,fromXYZ:q0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:r,transfer:Vt,toXYZ:W0,fromXYZ:q0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),s}const Dt=gE();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mr;class vE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Mr===void 0&&(Mr=Xc("canvas")),Mr.width=t.width,Mr.height=t.height;const l=Mr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Mr}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:t.width,height:t.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _E=0;class qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Ko(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(pd(l[d].image)):c.push(pd(l[d]))}else c=pd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let xE=0;const md=new se;class An extends os{constructor(t=An.DEFAULT_IMAGE,i=An.DEFAULT_MAPPING,r=_a,l=_a,c=tn,d=Is,p=Ui,m=On,h=An.DEFAULT_ANISOTROPY,x=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Ko(),this.name="",this.source=new qh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qd:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case Jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qd:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case Jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Wv;An.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,h=m[0],x=m[4],S=m[8],v=m[1],M=m[5],T=m[9],D=m[2],E=m[6],_=m[10];if(Math.abs(x-v)<.01&&Math.abs(S-D)<.01&&Math.abs(T-E)<.01){if(Math.abs(x+v)<.1&&Math.abs(S+D)<.1&&Math.abs(T+E)<.1&&Math.abs(h+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,L=(M+1)/2,V=(_+1)/2,G=(x+v)/4,B=(S+D)/4,A=(T+E)/4;return N>L&&N>V?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=G/r,c=B/r):L>V?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=G/l,c=A/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=B/c,l=A/c),this.set(r,l,c,i),this}let C=Math.sqrt((E-T)*(E-T)+(S-D)*(S-D)+(v-x)*(v-x));return Math.abs(C)<.001&&(C=1),this.x=(E-T)/C,this.y=(S-D)/C,this.z=(v-x)/C,this.w=Math.acos((h+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Rt(this.x,t.x,i.x),this.y=Rt(this.y,t.y,i.y),this.z=Rt(this.z,t.z,i.z),this.w=Rt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Rt(this.x,t,i),this.y=Rt(this.y,t,i),this.z=Rt(this.z,t,i),this.w=Rt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SE extends os{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},c=new An(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new qh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends SE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class e_ extends An{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class EE extends An{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(t,i,r,l,c,d,p,m,h,x,S,v,M,T,D,E){gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h,x,S,v,M,T,D,E)}set(t,i,r,l,c,d,p,m,h,x,S,v,M,T,D,E){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=p,_[13]=m,_[2]=h,_[6]=x,_[10]=S,_[14]=v,_[3]=M,_[7]=T,_[11]=D,_[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/yr.setFromMatrixColumn(t,0).length(),c=1/yr.setFromMatrixColumn(t,1).length(),d=1/yr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const v=d*x,M=d*S,T=p*x,D=p*S;i[0]=m*x,i[4]=-m*S,i[8]=h,i[1]=M+T*h,i[5]=v-D*h,i[9]=-p*m,i[2]=D-v*h,i[6]=T+M*h,i[10]=d*m}else if(t.order==="YXZ"){const v=m*x,M=m*S,T=h*x,D=h*S;i[0]=v+D*p,i[4]=T*p-M,i[8]=d*h,i[1]=d*S,i[5]=d*x,i[9]=-p,i[2]=M*p-T,i[6]=D+v*p,i[10]=d*m}else if(t.order==="ZXY"){const v=m*x,M=m*S,T=h*x,D=h*S;i[0]=v-D*p,i[4]=-d*S,i[8]=T+M*p,i[1]=M+T*p,i[5]=d*x,i[9]=D-v*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const v=d*x,M=d*S,T=p*x,D=p*S;i[0]=m*x,i[4]=T*h-M,i[8]=v*h+D,i[1]=m*S,i[5]=D*h+v,i[9]=M*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const v=d*m,M=d*h,T=p*m,D=p*h;i[0]=m*x,i[4]=D-v*S,i[8]=T*S+M,i[1]=S,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=M*S+T,i[10]=v-D*S}else if(t.order==="XZY"){const v=d*m,M=d*h,T=p*m,D=p*h;i[0]=m*x,i[4]=-S,i[8]=h*x,i[1]=v*S+D,i[5]=d*x,i[9]=M*S-T,i[2]=T*S-M,i[6]=p*x,i[10]=D*S+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ME,t,yE)}lookAt(t,i,r){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Qa.crossVectors(r,si),Qa.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Qa.crossVectors(r,si)),Qa.normalize(),hc.crossVectors(si,Qa),l[0]=Qa.x,l[4]=hc.x,l[8]=si.x,l[1]=Qa.y,l[5]=hc.y,l[9]=si.y,l[2]=Qa.z,l[6]=hc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],x=r[1],S=r[5],v=r[9],M=r[13],T=r[2],D=r[6],E=r[10],_=r[14],C=r[3],N=r[7],L=r[11],V=r[15],G=l[0],B=l[4],A=l[8],U=l[12],pe=l[1],z=l[5],ee=l[9],ae=l[13],ce=l[2],q=l[6],w=l[10],I=l[14],oe=l[3],fe=l[7],Me=l[11],P=l[15];return c[0]=d*G+p*pe+m*ce+h*oe,c[4]=d*B+p*z+m*q+h*fe,c[8]=d*A+p*ee+m*w+h*Me,c[12]=d*U+p*ae+m*I+h*P,c[1]=x*G+S*pe+v*ce+M*oe,c[5]=x*B+S*z+v*q+M*fe,c[9]=x*A+S*ee+v*w+M*Me,c[13]=x*U+S*ae+v*I+M*P,c[2]=T*G+D*pe+E*ce+_*oe,c[6]=T*B+D*z+E*q+_*fe,c[10]=T*A+D*ee+E*w+_*Me,c[14]=T*U+D*ae+E*I+_*P,c[3]=C*G+N*pe+L*ce+V*oe,c[7]=C*B+N*z+L*q+V*fe,c[11]=C*A+N*ee+L*w+V*Me,c[15]=C*U+N*ae+L*I+V*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],x=t[2],S=t[6],v=t[10],M=t[14],T=t[3],D=t[7],E=t[11],_=t[15],C=m*M-h*v,N=p*M-h*S,L=p*v-m*S,V=d*M-h*x,G=d*v-m*x,B=d*S-p*x;return i*(D*C-E*N+_*L)-r*(T*C-E*V+_*G)+l*(T*N-D*V+_*B)-c*(T*L-D*G+E*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],S=t[9],v=t[10],M=t[11],T=t[12],D=t[13],E=t[14],_=t[15],C=i*p-r*d,N=i*m-l*d,L=i*h-c*d,V=r*m-l*p,G=r*h-c*p,B=l*h-c*m,A=x*D-S*T,U=x*E-v*T,pe=x*_-M*T,z=S*E-v*D,ee=S*_-M*D,ae=v*_-M*E,ce=C*ae-N*ee+L*z+V*pe-G*U+B*A;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ce;return t[0]=(p*ae-m*ee+h*z)*q,t[1]=(l*ee-r*ae-c*z)*q,t[2]=(D*B-E*G+_*V)*q,t[3]=(v*G-S*B-M*V)*q,t[4]=(m*pe-d*ae-h*U)*q,t[5]=(i*ae-l*pe+c*U)*q,t[6]=(E*L-T*B-_*N)*q,t[7]=(x*B-v*L+M*N)*q,t[8]=(d*ee-p*pe+h*A)*q,t[9]=(r*pe-i*ee-c*A)*q,t[10]=(T*G-D*L+_*C)*q,t[11]=(S*L-x*G-M*C)*q,t[12]=(p*U-d*z-m*A)*q,t[13]=(i*z-r*U+l*A)*q,t[14]=(D*N-T*V-E*C)*q,t[15]=(x*V-S*N+v*C)*q,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,p=t.y,m=t.z,h=c*d,x=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+r,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,S=p+p,v=c*h,M=c*x,T=c*S,D=d*x,E=d*S,_=p*S,C=m*h,N=m*x,L=m*S,V=r.x,G=r.y,B=r.z;return l[0]=(1-(D+_))*V,l[1]=(M+L)*V,l[2]=(T-N)*V,l[3]=0,l[4]=(M-L)*G,l[5]=(1-(v+_))*G,l[6]=(E+C)*G,l[7]=0,l[8]=(T+N)*B,l[9]=(E-C)*B,l[10]=(1-(v+D))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let d=yr.set(l[0],l[1],l[2]).length();const p=yr.set(l[4],l[5],l[6]).length(),m=yr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ri.copy(this);const h=1/d,x=1/p,S=1/m;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=S,Ri.elements[9]*=S,Ri.elements[10]*=S,i.setFromRotationMatrix(Ri),r.x=d,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,d,p=Wi,m=!1){const h=this.elements,x=2*c/(i-t),S=2*c/(r-l),v=(i+t)/(i-t),M=(r+l)/(r-l);let T,D;if(m)T=c/(d-c),D=d*c/(d-c);else if(p===Wi)T=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(p===kc)T=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,l,c,d,p=Wi,m=!1){const h=this.elements,x=2/(i-t),S=2/(r-l),v=-(i+t)/(i-t),M=-(r+l)/(r-l);let T,D;if(m)T=1/(d-c),D=d/(d-c);else if(p===Wi)T=-2/(d-c),D=-(d+c)/(d-c);else if(p===kc)T=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=T,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const yr=new se,Ri=new gn,ME=new se(0,0,0),yE=new se(1,1,1),Qa=new se,hc=new se,si=new se,Y0=new gn,j0=new kr;class Ta{constructor(t=0,i=0,r=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],S=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Y0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return j0.setFromEuler(this),this.setFromQuaternion(j0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class t_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let TE=0;const K0=new se,Tr=new kr,ha=new gn,pc=new se,zo=new se,AE=new se,bE=new kr,Z0=new se(1,0,0),Q0=new se(0,1,0),J0=new se(0,0,1),$0={type:"added"},RE={type:"removed"},Ar={type:"childadded",child:null},gd={type:"childremoved",child:null};class li extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const t=new se,i=new Ta,r=new kr,l=new se(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new gn},normalMatrix:{value:new pt}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,i){return Tr.setFromAxisAngle(t,i),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(Z0,t)}rotateY(t){return this.rotateOnAxis(Q0,t)}rotateZ(t){return this.rotateOnAxis(J0,t)}translateOnAxis(t,i){return K0.copy(t).applyQuaternion(this.quaternion),this.position.add(K0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Z0,t)}translateY(t){return this.translateOnAxis(Q0,t)}translateZ(t){return this.translateOnAxis(J0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?pc.copy(t):pc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(zo,pc,this.up):ha.lookAt(pc,zo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Tr.setFromRotationMatrix(ha),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($0),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(RE),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($0),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,AE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,bE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const S=m[h];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),x=d(t.images),S=d(t.shapes),v=d(t.skeletons),M=d(t.animations),T=d(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}li.DEFAULT_UP=new se(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mc extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CE={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const D of t.hand.values()){const E=i.getJointPose(D,r),_=this._getHandJoint(h,D);E!==null&&(_.matrix.fromArray(E.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=E.radius),_.visible=E!==null}const x=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],v=x.position.distanceTo(S.position),M=.02,T=.005;h.inputState.pinching&&v>M+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=M-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(CE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const n_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},gc={h:0,s:0,l:0};function _d(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ft{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Dt.workingColorSpace){if(t=mE(t,1),i=Rt(i,0,1),r=Rt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=_d(d,c,t+1/3),this.g=_d(d,c,t),this.b=_d(d,c,t-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(t,i=rn){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=rn){const r=n_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Dt.workingToColorSpace(Nn.copy(this),t),Math.round(Rt(Nn.r*255,0,255))*65536+Math.round(Rt(Nn.g*255,0,255))*256+Math.round(Rt(Nn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=x<=.5?S/(d+p):S/(2-d-p),d){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return t.h=m,t.s=h,t.l=x,t}getRGB(t,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=rn){Dt.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==rn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+t,Ja.s+i,Ja.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ja),t.getHSL(gc);const r=fd(Ja.h,gc.h,i),l=fd(Ja.s,gc.s,i),c=fd(Ja.l,gc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ft;Ft.NAMES=n_;class Nh extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new se,pa=new se,xd=new se,ma=new se,br=new se,Rr=new se,ev=new se,Sd=new se,Ed=new se,Md=new se,yd=new on,Td=new on,Ad=new on;class wi{constructor(t=new se,i=new se,r=new se){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ci.subVectors(l,i),pa.subVectors(r,i),xd.subVectors(t,i);const d=Ci.dot(Ci),p=Ci.dot(pa),m=Ci.dot(xd),h=pa.dot(pa),x=pa.dot(xd),S=d*h-p*p;if(S===0)return c.set(0,0,0),null;const v=1/S,M=(h*m-p*x)*v,T=(d*x-p*m)*v;return c.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,i,r,l,c,d,p,m){return this.getBarycoord(t,i,r,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(d,ma.y),m.addScaledVector(p,ma.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return yd.setScalar(0),Td.setScalar(0),Ad.setScalar(0),yd.fromBufferAttribute(t,i),Td.fromBufferAttribute(t,r),Ad.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(yd,c.x),d.addScaledVector(Td,c.y),d.addScaledVector(Ad,c.z),d}static isFrontFacing(t,i,r,l){return Ci.subVectors(r,i),pa.subVectors(t,i),Ci.cross(pa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return wi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,p;br.subVectors(l,r),Rr.subVectors(c,r),Sd.subVectors(t,r);const m=br.dot(Sd),h=Rr.dot(Sd);if(m<=0&&h<=0)return i.copy(r);Ed.subVectors(t,l);const x=br.dot(Ed),S=Rr.dot(Ed);if(x>=0&&S<=x)return i.copy(l);const v=m*S-x*h;if(v<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(br,d);Md.subVectors(t,c);const M=br.dot(Md),T=Rr.dot(Md);if(T>=0&&M<=T)return i.copy(c);const D=M*h-m*T;if(D<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(r).addScaledVector(Rr,p);const E=x*T-M*S;if(E<=0&&S-x>=0&&M-T>=0)return ev.subVectors(c,l),p=(S-x)/(S-x+(M-T)),i.copy(l).addScaledVector(ev,p);const _=1/(E+D+v);return d=D*_,p=v*_,i.copy(r).addScaledVector(br,d).addScaledVector(Rr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Zo{constructor(t=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Di):Di.fromBufferAttribute(c,d),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vc.copy(r.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),_c.subVectors(this.max,Ho),Cr.subVectors(t.a,Ho),Dr.subVectors(t.b,Ho),wr.subVectors(t.c,Ho),$a.subVectors(Dr,Cr),es.subVectors(wr,Dr),Rs.subVectors(Cr,wr);let i=[0,-$a.z,$a.y,0,-es.z,es.y,0,-Rs.z,Rs.y,$a.z,0,-$a.x,es.z,0,-es.x,Rs.z,0,-Rs.x,-$a.y,$a.x,0,-es.y,es.x,0,-Rs.y,Rs.x,0];return!bd(i,Cr,Dr,wr,_c)||(i=[1,0,0,0,1,0,0,0,1],!bd(i,Cr,Dr,wr,_c))?!1:(xc.crossVectors($a,es),i=[xc.x,xc.y,xc.z],bd(i,Cr,Dr,wr,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ga=[new se,new se,new se,new se,new se,new se,new se,new se],Di=new se,vc=new Zo,Cr=new se,Dr=new se,wr=new se,$a=new se,es=new se,Rs=new se,Ho=new se,_c=new se,xc=new se,Cs=new se;function bd(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Cs.fromArray(s,c);const p=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),h=i.dot(Cs),x=r.dot(Cs);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const mn=new se,Sc=new _t;let DE=0;class xi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=G0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(t),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==G0&&(t.usage=this.usage),t}}class i_ extends xi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class a_ extends xi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Sa extends xi{constructor(t,i,r){super(new Float32Array(t),i,r)}}const wE=new Zo,Go=new se,Rd=new se;class Yh{constructor(t=new se,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):wE.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(Rd)),this.expandByPoint(Go.copy(t.center).sub(Rd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let UE=0;const vi=new gn,Cd=new li,Ur=new se,ri=new Zo,Vo=new Zo,yn=new se;class Yi extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fE(t)?a_:i_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pt().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,r){return vi.makeTranslation(t,i,r),this.applyMatrix4(vi),this}scale(t,i,r){return vi.makeScale(t,i,r),this.applyMatrix4(vi),this}lookAt(t){return Cd.lookAt(t),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Sa(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(t){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Vo.setFromBufferAttribute(p),this.morphTargetsRelative?(yn.addVectors(ri.min,Vo.min),ri.expandByPoint(yn),yn.addVectors(ri.max,Vo.max),ri.expandByPoint(yn)):(ri.expandByPoint(Vo.min),ri.expandByPoint(Vo.max))}ri.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)yn.fromBufferAttribute(p,h),m&&(Ur.fromBufferAttribute(t,h),yn.add(Ur)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let A=0;A<r.count;A++)p[A]=new se,m[A]=new se;const h=new se,x=new se,S=new se,v=new _t,M=new _t,T=new _t,D=new se,E=new se;function _(A,U,pe){h.fromBufferAttribute(r,A),x.fromBufferAttribute(r,U),S.fromBufferAttribute(r,pe),v.fromBufferAttribute(c,A),M.fromBufferAttribute(c,U),T.fromBufferAttribute(c,pe),x.sub(h),S.sub(h),M.sub(v),T.sub(v);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(D.copy(x).multiplyScalar(T.y).addScaledVector(S,-M.y).multiplyScalar(z),E.copy(S).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(z),p[A].add(D),p[U].add(D),p[pe].add(D),m[A].add(E),m[U].add(E),m[pe].add(E))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let A=0,U=C.length;A<U;++A){const pe=C[A],z=pe.start,ee=pe.count;for(let ae=z,ce=z+ee;ae<ce;ae+=3)_(t.getX(ae+0),t.getX(ae+1),t.getX(ae+2))}const N=new se,L=new se,V=new se,G=new se;function B(A){V.fromBufferAttribute(l,A),G.copy(V);const U=p[A];N.copy(U),N.sub(V.multiplyScalar(V.dot(U))).normalize(),L.crossVectors(G,U);const z=L.dot(m[A])<0?-1:1;d.setXYZW(A,N.x,N.y,N.z,z)}for(let A=0,U=C.length;A<U;++A){const pe=C[A],z=pe.start,ee=pe.count;for(let ae=z,ce=z+ee;ae<ce;ae+=3)B(t.getX(ae+0)),B(t.getX(ae+1)),B(t.getX(ae+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new se,c=new se,d=new se,p=new se,m=new se,h=new se,x=new se,S=new se;if(t)for(let v=0,M=t.count;v<M;v+=3){const T=t.getX(v+0),D=t.getX(v+1),E=t.getX(v+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,E),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,D),h.fromBufferAttribute(r,E),p.add(x),m.add(x),h.add(x),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(E,h.x,h.y,h.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),r.setXYZ(v+0,x.x,x.y,x.z),r.setXYZ(v+1,x.x,x.y,x.z),r.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(p,m){const h=p.array,x=p.itemSize,S=p.normalized,v=new h.constructor(m.length*x);let M=0,T=0;for(let D=0,E=m.length;D<E;D++){p.isInterleavedBufferAttribute?M=m[D]*p.data.stride+p.offset:M=m[D]*x;for(let _=0;_<x;_++)v[T++]=h[M++]}return new xi(v,x,S)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yi,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,S=h.length;x<S;x++){const v=h[x],M=t(v,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let S=0,v=h.length;S<v;S++){const M=h[S];x.push(M.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=t.morphAttributes;for(const h in c){const x=[],S=c[h];for(let v=0,M=S.length;v<M;v++)x.push(S[v].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,x=d.length;h<x;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LE=0;class Xr extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Pr,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Xd,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(r.blending=this.blending),this.side!==Ea&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Xd&&(r.blendDst=this.blendDst),this.blendEquation!==Os&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const va=new se,Dd=new se,Ec=new se,ts=new se,wd=new se,Mc=new se,Ud=new se;class NE{constructor(t=new se,i=new se(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,va)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=va.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Dd.copy(t).add(i).multiplyScalar(.5),Ec.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Dd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Ec),p=ts.dot(this.direction),m=-ts.dot(Ec),h=ts.lengthSq(),x=Math.abs(1-d*d);let S,v,M,T;if(x>0)if(S=d*m-p,v=d*p-m,T=c*x,S>=0)if(v>=-T)if(v<=T){const D=1/x;S*=D,v*=D,M=S*(S+d*v+2*p)+v*(d*S+v+2*m)+h}else v=c,S=Math.max(0,-(d*v+p)),M=-S*S+v*(v+2*m)+h;else v=-c,S=Math.max(0,-(d*v+p)),M=-S*S+v*(v+2*m)+h;else v<=-T?(S=Math.max(0,-(-d*c+p)),v=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+v*(v+2*m)+h):v<=T?(S=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+h):(S=Math.max(0,-(d*c+p)),v=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+v*(v+2*m)+h);else v=d>0?-c:c,S=Math.max(0,-(d*v+p)),M=-S*S+v*(v+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Dd).addScaledVector(Ec,v),M}intersectSphere(t,i){va.subVectors(t.center,this.origin);const r=va.dot(this.direction),l=va.dot(va)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,v=this.origin;return h>=0?(r=(t.min.x-v.x)*h,l=(t.max.x-v.x)*h):(r=(t.max.x-v.x)*h,l=(t.min.x-v.x)*h),x>=0?(c=(t.min.y-v.y)*x,d=(t.max.y-v.y)*x):(c=(t.max.y-v.y)*x,d=(t.min.y-v.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(t.min.z-v.z)*S,m=(t.max.z-v.z)*S):(p=(t.max.z-v.z)*S,m=(t.min.z-v.z)*S),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,va)!==null}intersectTriangle(t,i,r,l,c){wd.subVectors(i,t),Mc.subVectors(r,t),Ud.crossVectors(wd,Mc);let d=this.direction.dot(Ud),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ts.subVectors(this.origin,t);const m=p*this.direction.dot(Mc.crossVectors(ts,Mc));if(m<0)return null;const h=p*this.direction.dot(wd.cross(ts));if(h<0||m+h>d)return null;const x=-p*ts.dot(Ud);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class s_ extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tv=new gn,Ds=new NE,yc=new Yh,nv=new se,Tc=new se,Ac=new se,bc=new se,Ld=new se,Rc=new se,iv=new se,Cc=new se;class Oi extends li{constructor(t=new Yi,i=new s_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Rc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],S=c[m];x!==0&&(Ld.fromBufferAttribute(S,t),d?Rc.addScaledVector(Ld,x):Rc.addScaledVector(Ld.sub(i),x))}i.add(Rc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(c),Ds.copy(t.ray).recast(t.near),!(yc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(yc,nv)===null||Ds.origin.distanceToSquared(nv)>(t.far-t.near)**2))&&(tv.copy(c).invert(),Ds.copy(t.ray).applyMatrix4(tv),!(r.boundingBox!==null&&Ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Ds)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,v=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,D=v.length;T<D;T++){const E=v[T],_=d[E.materialIndex],C=Math.max(E.start,M.start),N=Math.min(p.count,Math.min(E.start+E.count,M.start+M.count));for(let L=C,V=N;L<V;L+=3){const G=p.getX(L),B=p.getX(L+1),A=p.getX(L+2);l=Dc(this,_,t,r,h,x,S,G,B,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),D=Math.min(p.count,M.start+M.count);for(let E=T,_=D;E<_;E+=3){const C=p.getX(E),N=p.getX(E+1),L=p.getX(E+2);l=Dc(this,d,t,r,h,x,S,C,N,L),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,D=v.length;T<D;T++){const E=v[T],_=d[E.materialIndex],C=Math.max(E.start,M.start),N=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let L=C,V=N;L<V;L+=3){const G=L,B=L+1,A=L+2;l=Dc(this,_,t,r,h,x,S,G,B,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),D=Math.min(m.count,M.start+M.count);for(let E=T,_=D;E<_;E+=3){const C=E,N=E+1,L=E+2;l=Dc(this,d,t,r,h,x,S,C,N,L),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function OE(s,t,i,r,l,c,d,p){let m;if(t.side===Tn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,t.side===Ea,p),m===null)return null;Cc.copy(p),Cc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Cc);return h<i.near||h>i.far?null:{distance:h,point:Cc.clone(),object:s}}function Dc(s,t,i,r,l,c,d,p,m,h){s.getVertexPosition(p,Tc),s.getVertexPosition(m,Ac),s.getVertexPosition(h,bc);const x=OE(s,t,i,r,Tc,Ac,bc,iv);if(x){const S=new se;wi.getBarycoord(iv,Tc,Ac,bc,S),l&&(x.uv=wi.getInterpolatedAttribute(l,p,m,h,S,new _t)),c&&(x.uv1=wi.getInterpolatedAttribute(c,p,m,h,S,new _t)),d&&(x.normal=wi.getInterpolatedAttribute(d,p,m,h,S,new se),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const v={a:p,b:m,c:h,normal:new se,materialIndex:0};wi.getNormal(Tc,Ac,bc,v.normal),x.face=v,x.barycoord=S}return x}class PE extends An{constructor(t=null,i=1,r=1,l,c,d,p,m,h=wn,x=wn,S,v){super(null,d,p,m,h,x,l,c,S,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new se,IE=new se,BE=new pt;class Ns{constructor(t=new se(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Nd.subVectors(r,i).cross(IE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Nd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||BE.getNormalMatrix(t),l=this.coplanarPoint(Nd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Yh,FE=new _t(.5,.5),wc=new se;class r_{constructor(t=new Ns,i=new Ns,r=new Ns,l=new Ns,c=new Ns,d=new Ns){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Wi,r=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],S=c[5],v=c[6],M=c[7],T=c[8],D=c[9],E=c[10],_=c[11],C=c[12],N=c[13],L=c[14],V=c[15];if(l[0].setComponents(h-d,M-x,_-T,V-C).normalize(),l[1].setComponents(h+d,M+x,_+T,V+C).normalize(),l[2].setComponents(h+p,M+S,_+D,V+N).normalize(),l[3].setComponents(h-p,M-S,_-D,V-N).normalize(),r)l[4].setComponents(m,v,E,L).normalize(),l[5].setComponents(h-m,M-v,_-E,V-L).normalize();else if(l[4].setComponents(h-m,M-v,_-E,V-L).normalize(),i===Wi)l[5].setComponents(h+m,M+v,_+E,V+L).normalize();else if(i===kc)l[5].setComponents(m,v,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const i=FE.distanceTo(t.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class o_ extends An{constructor(t=[],i=Fs,r,l,c,d,p,m,h,x){super(t,i,r,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gr extends An{constructor(t,i,r=Ni,l,c,d,p=wn,m=wn,h,x=ya,S=1){if(x!==ya&&x!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:S};super(v,l,c,d,p,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zE extends Gr{constructor(t,i=Ni,r=Fs,l,c,d=wn,p=wn,m,h=ya){const x={width:t,height:t,depth:1},S=[x,x,x,x,x,x];super(t,t,i,r,l,c,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class l_ extends An{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qo extends Yi{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],S=[];let v=0,M=0;T("z","y","x",-1,-1,r,i,t,d,c,0),T("z","y","x",1,-1,r,i,-t,d,c,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,c,4),T("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Sa(h,3)),this.setAttribute("normal",new Sa(x,3)),this.setAttribute("uv",new Sa(S,2));function T(D,E,_,C,N,L,V,G,B,A,U){const pe=L/B,z=V/A,ee=L/2,ae=V/2,ce=G/2,q=B+1,w=A+1;let I=0,oe=0;const fe=new se;for(let Me=0;Me<w;Me++){const P=Me*z-ae;for(let j=0;j<q;j++){const ve=j*pe-ee;fe[D]=ve*C,fe[E]=P*N,fe[_]=ce,h.push(fe.x,fe.y,fe.z),fe[D]=0,fe[E]=0,fe[_]=G>0?1:-1,x.push(fe.x,fe.y,fe.z),S.push(j/B),S.push(1-Me/A),I+=1}}for(let Me=0;Me<A;Me++)for(let P=0;P<B;P++){const j=v+P+q*Me,ve=v+P+q*(Me+1),be=v+(P+1)+q*(Me+1),Pe=v+(P+1)+q*Me;m.push(j,ve,Pe),m.push(ve,be,Pe),oe+=6}p.addGroup(M,oe,U),M+=oe,v+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jo extends Yi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,x=m+1,S=t/p,v=i/m,M=[],T=[],D=[],E=[];for(let _=0;_<x;_++){const C=_*v-d;for(let N=0;N<h;N++){const L=N*S-c;T.push(L,-C,0),D.push(0,0,1),E.push(N/p),E.push(1-_/m)}}for(let _=0;_<m;_++)for(let C=0;C<p;C++){const N=C+h*_,L=C+h*(_+1),V=C+1+h*(_+1),G=C+1+h*_;M.push(N,L,G),M.push(L,V,G)}this.setIndex(M),this.setAttribute("position",new Sa(T,3)),this.setAttribute("normal",new Sa(D,3)),this.setAttribute("uv",new Sa(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.widthSegments,t.heightSegments)}}function Vr(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Hn(s){const t={};for(let i=0;i<s.length;i++){const r=Vr(s[i]);for(const l in r)t[l]=r[l]}return t}function HE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function c_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}const GE={clone:Vr,merge:Hn};var VE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=HE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class XE extends Kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class WE extends Xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qE extends Xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uc=new se,Lc=new kr,Hi=new se;class u_ extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Uc,Lc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Lc,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Uc,Lc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Lc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new se,av=new _t,sv=new _t;class _i extends u_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,i){return this.getViewBounds(t,av,sv),i.subVectors(sv,av)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ud*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class jc extends u_{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Lr=-90,Nr=1;class YE extends li{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Lr,Nr,t,i);l.layers=this.layers,this.add(l);const c=new _i(Lr,Nr,t,i);c.layers=this.layers,this.add(c);const d=new _i(Lr,Nr,t,i);d.layers=this.layers,this.add(d);const p=new _i(Lr,Nr,t,i);p.layers=this.layers,this.add(p);const m=new _i(Lr,Nr,t,i);m.layers=this.layers,this.add(m);const h=new _i(Lr,Nr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,S=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let E=!1;t.isWebGLRenderer===!0?E=t.state.buffers.depth.getReversed():E=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),r.texture.generateMipmaps=D,t.setRenderTarget(r,5,l),E&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(S,v,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class jE extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class sn{constructor(t){this.value=t}clone(){return new sn(this.value.clone===void 0?this.value:this.value.clone())}}class KE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function rv(s,t,i,r){const l=ZE(r);switch(i){case Zv:return s*t;case Jv:return s*t/l.components*l.byteLength;case Gh:return s*t/l.components*l.byteLength;case Hr:return s*t*2/l.components*l.byteLength;case Vh:return s*t*2/l.components*l.byteLength;case Qv:return s*t*3/l.components*l.byteLength;case Ui:return s*t*4/l.components*l.byteLength;case kh:return s*t*4/l.components*l.byteLength;case Ic:case Bc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fc:case zc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case eh:case nh:return Math.max(s,16)*Math.max(t,8)/4;case $d:case th:return Math.max(s,8)*Math.max(t,8)/2;case ih:case ah:case rh:case oh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sh:case lh:case ch:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case gh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _h:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case yh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Th:case Ah:case bh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rh:case Ch:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Dh:case wh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZE(s){switch(s){case On:case qv:return{byteLength:1,components:1};case Yo:case Yv:case Ma:return{byteLength:2,components:1};case zh:case Hh:return{byteLength:2,components:4};case Ni:case Fh:case Xi:return{byteLength:4,components:1};case jv:case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);function f_(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function QE(s){const t=new WeakMap;function i(p,m){const h=p.array,x=p.usage,S=h.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,h,x),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function r(p,m,h){const x=m.array,S=m.updateRanges;if(s.bindBuffer(h,p),S.length===0)s.bufferSubData(h,0,x);else{S.sort((M,T)=>M.start-T.start);let v=0;for(let M=1;M<S.length;M++){const T=S[v],D=S[M];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++v,S[v]=D)}S.length=v+1;for(let M=0,T=S.length;M<T;M++){const D=S[M];s.bufferSubData(h,D.start*x.BYTES_PER_ELEMENT,x,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$E=`#ifdef USE_ALPHAHASH
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
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
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
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
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
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fM=`#ifdef USE_IRIDESCENCE
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
#endif`,dM=`#ifdef USE_BUMPMAP
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,EM=`#define PI 3.141592653589793
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
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yM=`vec3 transformedNormal = objectNormal;
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
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",DM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
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
}`,HM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
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
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
#endif`,ZM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oy=`#if defined( USE_POINTS_UV )
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
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
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
#endif`,py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
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
#endif`,Ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,by=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
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
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iy=`float getShadowMask() {
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
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fy=`#ifdef USE_SKINNING
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
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
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
}`,aT=`#if DEPTH_PACKING == 3200
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
}`,sT=`#define DISTANCE
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
}`,rT=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
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
}`,uT=`uniform vec3 diffuse;
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
}`,fT=`#include <common>
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
}`,dT=`uniform vec3 diffuse;
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
}`,hT=`#define LAMBERT
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
}`,pT=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,mT=`#define MATCAP
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
}`,gT=`#define MATCAP
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
}`,vT=`#define NORMAL
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
}`,_T=`#define NORMAL
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
}`,xT=`#define PHONG
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
}`,ST=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,ET=`#define STANDARD
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
}`,MT=`#define STANDARD
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
}`,yT=`#define TOON
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
}`,TT=`#define TOON
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
}`,AT=`uniform float size;
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
}`,bT=`uniform vec3 diffuse;
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
}`,RT=`#include <common>
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
}`,CT=`uniform vec3 color;
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
}`,DT=`uniform float rotation;
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
}`,wT=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:JE,alphahash_pars_fragment:$E,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:aM,aomap_pars_fragment:sM,batching_pars_vertex:rM,batching_vertex:oM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:fM,bumpmap_pars_fragment:dM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:vM,color_pars_fragment:_M,color_pars_vertex:xM,color_vertex:SM,common:EM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:yM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:bM,emissivemap_pars_fragment:RM,colorspace_fragment:CM,colorspace_pars_fragment:DM,envmap_fragment:wM,envmap_common_pars_fragment:UM,envmap_pars_fragment:LM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:XM,envmap_vertex:OM,fog_vertex:PM,fog_pars_vertex:IM,fog_fragment:BM,fog_pars_fragment:FM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:HM,lights_lambert_fragment:GM,lights_lambert_pars_fragment:VM,lights_pars_begin:kM,lights_toon_fragment:WM,lights_toon_pars_fragment:qM,lights_phong_fragment:YM,lights_phong_pars_fragment:jM,lights_physical_fragment:KM,lights_physical_pars_fragment:ZM,lights_fragment_begin:QM,lights_fragment_maps:JM,lights_fragment_end:$M,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:ny,logdepthbuf_vertex:iy,map_fragment:ay,map_pars_fragment:sy,map_particle_fragment:ry,map_particle_pars_fragment:oy,metalnessmap_fragment:ly,metalnessmap_pars_fragment:cy,morphinstance_vertex:uy,morphcolor_vertex:fy,morphnormal_vertex:dy,morphtarget_pars_vertex:hy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:vy,normal_pars_vertex:_y,normal_vertex:xy,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:yy,iridescence_pars_fragment:Ty,opaque_fragment:Ay,packing:by,premultiplied_alpha_fragment:Ry,project_vertex:Cy,dithering_fragment:Dy,dithering_pars_fragment:wy,roughnessmap_fragment:Uy,roughnessmap_pars_fragment:Ly,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Oy,shadowmap_vertex:Py,shadowmask_pars_fragment:Iy,skinbase_vertex:By,skinning_pars_vertex:Fy,skinning_vertex:zy,skinnormal_vertex:Hy,specularmap_fragment:Gy,specularmap_pars_fragment:Vy,tonemapping_fragment:ky,tonemapping_pars_fragment:Xy,transmission_fragment:Wy,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:jy,uv_vertex:Ky,worldpos_vertex:Zy,background_vert:Qy,background_frag:Jy,backgroundCube_vert:$y,backgroundCube_frag:eT,cube_vert:tT,cube_frag:nT,depth_vert:iT,depth_frag:aT,distance_vert:sT,distance_frag:rT,equirect_vert:oT,equirect_frag:lT,linedashed_vert:cT,linedashed_frag:uT,meshbasic_vert:fT,meshbasic_frag:dT,meshlambert_vert:hT,meshlambert_frag:pT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:vT,meshnormal_frag:_T,meshphong_vert:xT,meshphong_frag:ST,meshphysical_vert:ET,meshphysical_frag:MT,meshtoon_vert:yT,meshtoon_frag:TT,points_vert:AT,points_frag:bT,shadow_vert:RT,shadow_frag:CT,sprite_vert:DT,sprite_frag:wT},Le={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Vi={basic:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Hn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Hn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ft(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Hn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Hn([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Hn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Hn([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Hn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Hn([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Hn([Le.common,Le.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Hn([Le.lights,Le.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Vi.physical={uniforms:Hn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Nc={r:0,b:0,g:0},Us=new Ta,UT=new gn;function LT(s,t,i,r,l,c){const d=new Ft(0);let p=l===!0?0:1,m,h,x=null,S=0,v=null;function M(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const L=C.backgroundBlurriness>0;N=t.get(N,L)}return N}function T(C){let N=!1;const L=M(C);L===null?E(d,p):L&&L.isColor&&(E(L,1),N=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(C,N){const L=M(N);L&&(L.isCubeTexture||L.mapping===Yc)?(h===void 0&&(h=new Oi(new Qo(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Vr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,G,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Us.copy(N.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(UT.makeRotationFromEuler(Us)),h.material.toneMapped=Dt.getTransfer(L.colorSpace)!==Vt,(x!==L||S!==L.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,x=L,S=L.version,v=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Oi(new Jo(2,2),new Kn({name:"BackgroundMaterial",uniforms:Vr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(L.colorSpace)!==Vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||S!==L.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,x=L,S=L.version,v=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function E(C,N){C.getRGB(Nc,c_(s)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,N,c)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,N=1){d.set(C),p=N,E(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,E(d,p)},render:T,addToRenderList:D,dispose:_}}function NT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,d=!1;function p(z,ee,ae,ce,q){let w=!1;const I=S(z,ce,ae,ee);c!==I&&(c=I,h(c.object)),w=M(z,ce,ae,q),w&&T(z,ce,ae,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(w||d)&&(d=!1,L(z,ee,ae,ce),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function m(){return s.createVertexArray()}function h(z){return s.bindVertexArray(z)}function x(z){return s.deleteVertexArray(z)}function S(z,ee,ae,ce){const q=ce.wireframe===!0;let w=r[ee.id];w===void 0&&(w={},r[ee.id]=w);const I=z.isInstancedMesh===!0?z.id:0;let oe=w[I];oe===void 0&&(oe={},w[I]=oe);let fe=oe[ae.id];fe===void 0&&(fe={},oe[ae.id]=fe);let Me=fe[q];return Me===void 0&&(Me=v(m()),fe[q]=Me),Me}function v(z){const ee=[],ae=[],ce=[];for(let q=0;q<i;q++)ee[q]=0,ae[q]=0,ce[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:ae,attributeDivisors:ce,object:z,attributes:{},index:null}}function M(z,ee,ae,ce){const q=c.attributes,w=ee.attributes;let I=0;const oe=ae.getAttributes();for(const fe in oe)if(oe[fe].location>=0){const P=q[fe];let j=w[fe];if(j===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(j=z.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;I++}return c.attributesNum!==I||c.index!==ce}function T(z,ee,ae,ce){const q={},w=ee.attributes;let I=0;const oe=ae.getAttributes();for(const fe in oe)if(oe[fe].location>=0){let P=w[fe];P===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(P=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(P=z.instanceColor));const j={};j.attribute=P,P&&P.data&&(j.data=P.data),q[fe]=j,I++}c.attributes=q,c.attributesNum=I,c.index=ce}function D(){const z=c.newAttributes;for(let ee=0,ae=z.length;ee<ae;ee++)z[ee]=0}function E(z){_(z,0)}function _(z,ee){const ae=c.newAttributes,ce=c.enabledAttributes,q=c.attributeDivisors;ae[z]=1,ce[z]===0&&(s.enableVertexAttribArray(z),ce[z]=1),q[z]!==ee&&(s.vertexAttribDivisor(z,ee),q[z]=ee)}function C(){const z=c.newAttributes,ee=c.enabledAttributes;for(let ae=0,ce=ee.length;ae<ce;ae++)ee[ae]!==z[ae]&&(s.disableVertexAttribArray(ae),ee[ae]=0)}function N(z,ee,ae,ce,q,w,I){I===!0?s.vertexAttribIPointer(z,ee,ae,q,w):s.vertexAttribPointer(z,ee,ae,ce,q,w)}function L(z,ee,ae,ce){D();const q=ce.attributes,w=ae.getAttributes(),I=ee.defaultAttributeValues;for(const oe in w){const fe=w[oe];if(fe.location>=0){let Me=q[oe];if(Me===void 0&&(oe==="instanceMatrix"&&z.instanceMatrix&&(Me=z.instanceMatrix),oe==="instanceColor"&&z.instanceColor&&(Me=z.instanceColor)),Me!==void 0){const P=Me.normalized,j=Me.itemSize,ve=t.get(Me);if(ve===void 0)continue;const be=ve.buffer,Pe=ve.type,te=ve.bytesPerElement,_e=Pe===s.INT||Pe===s.UNSIGNED_INT||Me.gpuType===Fh;if(Me.isInterleavedBufferAttribute){const Se=Me.data,Oe=Se.stride,Ye=Me.offset;if(Se.isInstancedInterleavedBuffer){for(let $e=0;$e<fe.locationSize;$e++)_(fe.location+$e,Se.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let $e=0;$e<fe.locationSize;$e++)E(fe.location+$e);s.bindBuffer(s.ARRAY_BUFFER,be);for(let $e=0;$e<fe.locationSize;$e++)N(fe.location+$e,j/fe.locationSize,Pe,P,Oe*te,(Ye+j/fe.locationSize*$e)*te,_e)}else{if(Me.isInstancedBufferAttribute){for(let Se=0;Se<fe.locationSize;Se++)_(fe.location+Se,Me.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Se=0;Se<fe.locationSize;Se++)E(fe.location+Se);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Se=0;Se<fe.locationSize;Se++)N(fe.location+Se,j/fe.locationSize,Pe,P,j*te,j/fe.locationSize*Se*te,_e)}}else if(I!==void 0){const P=I[oe];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(fe.location,P);break;case 3:s.vertexAttrib3fv(fe.location,P);break;case 4:s.vertexAttrib4fv(fe.location,P);break;default:s.vertexAttrib1fv(fe.location,P)}}}}C()}function V(){U();for(const z in r){const ee=r[z];for(const ae in ee){const ce=ee[ae];for(const q in ce){const w=ce[q];for(const I in w)x(w[I].object),delete w[I];delete ce[q]}}delete r[z]}}function G(z){if(r[z.id]===void 0)return;const ee=r[z.id];for(const ae in ee){const ce=ee[ae];for(const q in ce){const w=ce[q];for(const I in w)x(w[I].object),delete w[I];delete ce[q]}}delete r[z.id]}function B(z){for(const ee in r){const ae=r[ee];for(const ce in ae){const q=ae[ce];if(q[z.id]===void 0)continue;const w=q[z.id];for(const I in w)x(w[I].object),delete w[I];delete q[z.id]}}}function A(z){for(const ee in r){const ae=r[ee],ce=z.isInstancedMesh===!0?z.id:0,q=ae[ce];if(q!==void 0){for(const w in q){const I=q[w];for(const oe in I)x(I[oe].object),delete I[oe];delete q[w]}delete ae[ce],Object.keys(ae).length===0&&delete r[ee]}}}function U(){pe(),d=!0,c!==l&&(c=l,h(c.object))}function pe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:pe,dispose:V,releaseStatesOfGeometry:G,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:E,disableUnusedAttributes:C}}function OT(s,t,i){let r;function l(h){r=h}function c(h,x){s.drawArrays(r,h,x),i.update(x,r,1)}function d(h,x,S){S!==0&&(s.drawArraysInstanced(r,h,x,S),i.update(x,r,S))}function p(h,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,S);let M=0;for(let T=0;T<S;T++)M+=x[T];i.update(M,r,1)}function m(h,x,S,v){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<h.length;T++)d(h[T],x[T],v[T]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,x,0,v,0,S);let T=0;for(let D=0;D<S;D++)T+=x[D]*v[D];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function PT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Ui&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const A=B===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==On&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Xi&&!A)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(st("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const S=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),G=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:E,maxAttributes:_,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:L,maxSamples:V,samples:G}}function IT(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Ns,p=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,v){const M=S.length!==0||v||r!==0||l;return l=v,r=S.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,v){i=x(S,v,0)},this.setState=function(S,v,M){const T=S.clippingPlanes,D=S.clipIntersection,E=S.clipShadows,_=s.get(S);if(!l||T===null||T.length===0||c&&!E)c?x(null):h();else{const C=c?0:r,N=C*4;let L=_.clippingState||null;m.value=L,L=x(T,v,N,M);for(let V=0;V!==N;++V)L[V]=i[V];_.clippingState=L,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=C}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(S,v,M,T){const D=S!==null?S.length:0;let E=null;if(D!==0){if(E=m.value,T!==!0||E===null){const _=M+D*4,C=v.matrixWorldInverse;p.getNormalMatrix(C),(E===null||E.length<_)&&(E=new Float32Array(_));for(let N=0,L=M;N!==D;++N,L+=4)d.copy(S[N]).applyMatrix4(C,p),d.normal.toArray(E,L),E[L+3]=d.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,E}}const ss=4,ov=[.125,.215,.35,.446,.526,.582],Ps=20,BT=256,ko=new jc,lv=new Ft;let Od=null,Pd=0,Id=0,Bd=!1;const FT=new se;class cv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=FT}=c;Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Od,Pd,Id),this._renderer.xr.enabled=Bd,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Od=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ma,format:Ui,colorSpace:rs,depthBuffer:!1},l=uv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zT(c)),this._blurMaterial=GT(c,t,i),this._ggxMaterial=HT(c,t,i)}return l}_compileMaterial(t){const i=new Oi(new Yi,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,r,l,c){const m=new _i(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,v=S.autoClear,M=S.toneMapping;S.getClearColor(lv),S.toneMapping=qi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new Qo,new s_({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,E=D.material;let _=!1;const C=t.background;C?C.isColor&&(E.color.copy(C),t.background=null,_=!0):(E.color.copy(lv),_=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):L===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const V=this._cubeSize;Or(l,L*V,N>2?V:0,V,V),S.setRenderTarget(l),_&&S.render(D,m),S.render(t,m)}S.toneMapping=M,S.autoClear=v,t.background=C}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Fs||t.mapping===Fr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Or(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,ko)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-x*x),v=0+h*1.25,M=S*v,{_lodMax:T}=this,D=this._sizeLods[r],E=3*D*(r>T-ss?r-T+ss:0),_=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=T-i,Or(c,E,_,3*D,2*D),l.setRenderTarget(c),l.render(p,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Or(t,E,_,3*D,2*D),l.setRenderTarget(t),l.render(p,ko)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=h;const v=h.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ps-1),D=c/T,E=isFinite(c)?1+Math.floor(x*D):Ps;E>Ps&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ps}`);const _=[];let C=0;for(let B=0;B<Ps;++B){const A=B/D,U=Math.exp(-A*A/2);_.push(U),B===0?C+=U:B<E&&(C+=2*U)}for(let B=0;B<_.length;B++)_[B]=_[B]/C;v.envMap.value=t.texture,v.samples.value=E,v.weights.value=_,v.latitudinal.value=d==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:N}=this;v.dTheta.value=T,v.mipInt.value=N-r;const L=this._sizeLods[l],V=3*L*(l>N-ss?l-N+ss:0),G=4*(this._cubeSize-L);Or(i,V,G,3*L,2*L),m.setRenderTarget(i),m.render(S,ko)}}function zT(s){const t=[],i=[],r=[];let l=s;const c=s-ss+1+ov.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>s-ss?m=ov[d-s+ss-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,S=1+h,v=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,T=6,D=3,E=2,_=1,C=new Float32Array(D*T*M),N=new Float32Array(E*T*M),L=new Float32Array(_*T*M);for(let G=0;G<M;G++){const B=G%3*2/3-1,A=G>2?0:-1,U=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];C.set(U,D*T*G),N.set(v,E*T*G);const pe=[G,G,G,G,G,G];L.set(pe,_*T*G)}const V=new Yi;V.setAttribute("position",new xi(C,D)),V.setAttribute("uv",new xi(N,E)),V.setAttribute("faceIndex",new xi(L,_)),r.push(new Oi(V,null)),l>ss&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function uv(s,t,i){const r=new jn(s,t,i);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Or(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function HT(s,t,i){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function GT(s,t,i){const r=new Float32Array(Ps),l=new se(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function fv(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function dv(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}class d_ extends jn{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new o_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qo(5,5,5),c=new Kn({name:"CubemapFromEquirect",uniforms:Vr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tn,blending:Li});c.uniforms.tEquirect.value=i;const d=new Oi(l,c),p=i.minFilter;return i.minFilter===Is&&(i.minFilter=tn),new YE(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}function VT(s){let t=new WeakMap,i=new WeakMap,r=null;function l(v,M=!1){return v==null?null:M?d(v):c(v)}function c(v){if(v&&v.isTexture){const M=v.mapping;if(M===od||M===ld)if(t.has(v)){const T=t.get(v).texture;return p(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const D=new d_(T.height);return D.fromEquirectangularTexture(s,v),t.set(v,D),v.addEventListener("dispose",h),p(D.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const M=v.mapping,T=M===od||M===ld,D=M===Fs||M===Fr;if(T||D){let E=i.get(v);const _=E!==void 0?E.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==_)return r===null&&(r=new cv(s)),E=T?r.fromEquirectangular(v,E):r.fromCubemap(v,E),E.texture.pmremVersion=v.pmremVersion,i.set(v,E),E.texture;if(E!==void 0)return E.texture;{const C=v.image;return T&&C&&C.height>0||D&&C&&m(C)?(r===null&&(r=new cv(s)),E=T?r.fromEquirectangular(v):r.fromCubemap(v),E.texture.pmremVersion=v.pmremVersion,i.set(v,E),v.addEventListener("dispose",x),E.texture):null}}}return v}function p(v,M){return M===od?v.mapping=Fs:M===ld&&(v.mapping=Fr),v}function m(v){let M=0;const T=6;for(let D=0;D<T;D++)v[D]!==void 0&&M++;return M===T}function h(v){const M=v.target;M.removeEventListener("dispose",h);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function x(v){const M=v.target;M.removeEventListener("dispose",x);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function S(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:S}}function kT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Wc("WebGLRenderer: "+r+" extension not supported."),l}}}function XT(s,t,i,r){const l={},c=new WeakMap;function d(S){const v=S.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",d),delete l[v.id];const M=c.get(v);M&&(t.remove(M),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(S,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(S){const v=S.attributes;for(const M in v)t.update(v[M],s.ARRAY_BUFFER)}function h(S){const v=[],M=S.index,T=S.attributes.position;let D=0;if(T===void 0)return;if(M!==null){const C=M.array;D=M.version;for(let N=0,L=C.length;N<L;N+=3){const V=C[N+0],G=C[N+1],B=C[N+2];v.push(V,G,G,B,B,V)}}else{const C=T.array;D=T.version;for(let N=0,L=C.length/3-1;N<L;N+=3){const V=N+0,G=N+1,B=N+2;v.push(V,G,G,B,B,V)}}const E=new(T.count>=65535?a_:i_)(v,1);E.version=D;const _=c.get(S);_&&t.remove(_),c.set(S,E)}function x(S){const v=c.get(S);if(v){const M=S.index;M!==null&&v.version<M.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:x}}function WT(s,t,i){let r;function l(v){r=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function m(v,M){s.drawElements(r,M,c,v*d),i.update(M,r,1)}function h(v,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,v*d,T),i.update(M,r,T))}function x(v,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,v,0,T);let E=0;for(let _=0;_<T;_++)E+=M[_];i.update(E,r,1)}function S(v,M,T,D){if(T===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let _=0;_<v.length;_++)h(v[_]/d,M[_],D[_]);else{E.multiDrawElementsInstancedWEBGL(r,M,0,c,v,0,D,0,T);let _=0;for(let C=0;C<T;C++)_+=M[C]*D[C];i.update(_,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function qT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Ot("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function YT(s,t,i){const r=new WeakMap,l=new on;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let v=r.get(p);if(v===void 0||v.count!==S){let pe=function(){A.dispose(),r.delete(p),p.removeEventListener("dispose",pe)};var M=pe;v!==void 0&&v.texture.dispose();const T=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,E=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let L=0;T===!0&&(L=1),D===!0&&(L=2),E===!0&&(L=3);let V=p.attributes.position.count*L,G=1;V>t.maxTextureSize&&(G=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const B=new Float32Array(V*G*4*S),A=new e_(B,V,G,S);A.type=Xi,A.needsUpdate=!0;const U=L*4;for(let z=0;z<S;z++){const ee=_[z],ae=C[z],ce=N[z],q=V*G*4*z;for(let w=0;w<ee.count;w++){const I=w*U;T===!0&&(l.fromBufferAttribute(ee,w),B[q+I+0]=l.x,B[q+I+1]=l.y,B[q+I+2]=l.z,B[q+I+3]=0),D===!0&&(l.fromBufferAttribute(ae,w),B[q+I+4]=l.x,B[q+I+5]=l.y,B[q+I+6]=l.z,B[q+I+7]=0),E===!0&&(l.fromBufferAttribute(ce,w),B[q+I+8]=l.x,B[q+I+9]=l.y,B[q+I+10]=l.z,B[q+I+11]=ce.itemSize===4?l.w:1)}}v={count:S,texture:A,size:new _t(V,G)},r.set(p,v),p.addEventListener("dispose",pe)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let E=0;E<h.length;E++)T+=h[E];const D=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",D),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function jT(s,t,i,r,l){let c=new WeakMap;function d(h){const x=l.render.frame,S=h.geometry,v=t.get(h,S);if(c.get(v)!==x&&(t.update(v),c.set(v,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==x&&(M.update(),c.set(M,x))}return v}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const KT={[Fv]:"LINEAR_TONE_MAPPING",[zv]:"REINHARD_TONE_MAPPING",[Hv]:"CINEON_TONE_MAPPING",[Gv]:"ACES_FILMIC_TONE_MAPPING",[kv]:"AGX_TONE_MAPPING",[Xv]:"NEUTRAL_TONE_MAPPING",[Vv]:"CUSTOM_TONE_MAPPING"};function ZT(s,t,i,r,l){const c=new jn(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),d=new jn(t,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),p=new Yi;p.setAttribute("position",new Sa([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Sa([0,2,0,0,2,0],2));const m=new XE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Oi(p,m),x=new jc(-1,1,1,-1,0,1);let S=null,v=null,M=!1,T,D=null,E=[],_=!1;this.setSize=function(C,N){c.setSize(C,N),d.setSize(C,N);for(let L=0;L<E.length;L++){const V=E[L];V.setSize&&V.setSize(C,N)}},this.setEffects=function(C){E=C,_=E.length>0&&E[0].isRenderPass===!0;const N=c.width,L=c.height;for(let V=0;V<E.length;V++){const G=E[V];G.setSize&&G.setSize(N,L)}},this.begin=function(C,N){if(M||C.toneMapping===qi&&E.length===0)return!1;if(D=N,N!==null){const L=N.width,V=N.height;(c.width!==L||c.height!==V)&&this.setSize(L,V)}return _===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=qi,!0},this.hasRenderPass=function(){return _},this.end=function(C,N){C.toneMapping=T,M=!0;let L=c,V=d;for(let G=0;G<E.length;G++){const B=E[G];if(B.enabled!==!1&&(B.render(C,V,L,N),B.needsSwap!==!1)){const A=L;L=V,V=A}}if(S!==C.outputColorSpace||v!==C.toneMapping){S=C.outputColorSpace,v=C.toneMapping,m.defines={},Dt.getTransfer(S)===Vt&&(m.defines.SRGB_TRANSFER="");const G=KT[v];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(D),C.render(h,x),D=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const h_=new An,Oh=new Gr(1,1),p_=new e_,m_=new EE,g_=new o_,hv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),vv=new Float32Array(4);function Wr(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=hv[l];if(c===void 0&&(c=new Float32Array(l),hv[l]=c),t!==0){r.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,s[d].toArray(c,p)}return c}function Sn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function En(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Zc(s,t){let i=pv[t];i===void 0&&(i=new Int32Array(t),pv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function QT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function JT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;s.uniform2fv(this.addr,t),En(i,t)}}function $T(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;s.uniform3fv(this.addr,t),En(i,t)}}function eA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;s.uniform4fv(this.addr,t),En(i,t)}}function tA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Sn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),En(i,t)}else{if(Sn(i,r))return;vv.set(r),s.uniformMatrix2fv(this.addr,!1,vv),En(i,r)}}function nA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Sn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),En(i,t)}else{if(Sn(i,r))return;gv.set(r),s.uniformMatrix3fv(this.addr,!1,gv),En(i,r)}}function iA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Sn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),En(i,t)}else{if(Sn(i,r))return;mv.set(r),s.uniformMatrix4fv(this.addr,!1,mv),En(i,r)}}function aA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function sA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;s.uniform2iv(this.addr,t),En(i,t)}}function rA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;s.uniform3iv(this.addr,t),En(i,t)}}function oA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;s.uniform4iv(this.addr,t),En(i,t)}}function lA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function cA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;s.uniform2uiv(this.addr,t),En(i,t)}}function uA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;s.uniform3uiv(this.addr,t),En(i,t)}}function fA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;s.uniform4uiv(this.addr,t),En(i,t)}}function dA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Oh.compareFunction=i.isReversedDepthBuffer()?Wh:Xh,c=Oh):c=h_,i.setTexture2D(t||c,l)}function hA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||m_,l)}function pA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||g_,l)}function mA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||p_,l)}function gA(s){switch(s){case 5126:return QT;case 35664:return JT;case 35665:return $T;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return aA;case 35667:case 35671:return sA;case 35668:case 35672:return rA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}function vA(s,t){s.uniform1fv(this.addr,t)}function _A(s,t){const i=Wr(t,this.size,2);s.uniform2fv(this.addr,i)}function xA(s,t){const i=Wr(t,this.size,3);s.uniform3fv(this.addr,i)}function SA(s,t){const i=Wr(t,this.size,4);s.uniform4fv(this.addr,i)}function EA(s,t){const i=Wr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function MA(s,t){const i=Wr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function yA(s,t){const i=Wr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function TA(s,t){s.uniform1iv(this.addr,t)}function AA(s,t){s.uniform2iv(this.addr,t)}function bA(s,t){s.uniform3iv(this.addr,t)}function RA(s,t){s.uniform4iv(this.addr,t)}function CA(s,t){s.uniform1uiv(this.addr,t)}function DA(s,t){s.uniform2uiv(this.addr,t)}function wA(s,t){s.uniform3uiv(this.addr,t)}function UA(s,t){s.uniform4uiv(this.addr,t)}function LA(s,t,i){const r=this.cache,l=t.length,c=Zc(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),En(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Oh:d=h_;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function NA(s,t,i){const r=this.cache,l=t.length,c=Zc(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),En(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||m_,c[d])}function OA(s,t,i){const r=this.cache,l=t.length,c=Zc(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),En(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||g_,c[d])}function PA(s,t,i){const r=this.cache,l=t.length,c=Zc(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),En(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||p_,c[d])}function IA(s){switch(s){case 5126:return vA;case 35664:return _A;case 35665:return xA;case 35666:return SA;case 35674:return EA;case 35675:return MA;case 35676:return yA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return bA;case 35669:case 35673:return RA;case 5125:return CA;case 36294:return DA;case 36295:return wA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return PA}}class BA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=gA(i.type)}}class FA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IA(i.type)}}class zA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function _v(s,t){s.seq.push(t),s.map[t.id]=t}function HA(s,t,i){const r=s.name,l=r.length;for(Fd.lastIndex=0;;){const c=Fd.exec(r),d=Fd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){_v(i,h===void 0?new BA(p,s,t):new FA(p,s,t));break}else{let S=i.map[p];S===void 0&&(S=new zA(p),_v(i,S)),i=S}}}class Hc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);HA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function xv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const GA=37297;let VA=0;function kA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const Sv=new pt;function XA(s){Dt._getMatrix(Sv,Dt.workingColorSpace,s);const t=`mat3( ${Sv.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(s)){case Vc:return[t,"LinearTransferOETF"];case Vt:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ev(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+kA(s.getShaderSource(t),p)}else return c}function WA(s,t){const i=XA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const qA={[Fv]:"Linear",[zv]:"Reinhard",[Hv]:"Cineon",[Gv]:"ACESFilmic",[kv]:"AgX",[Xv]:"Neutral",[Vv]:"Custom"};function YA(s,t){const i=qA[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new se;function jA(){Dt.getLuminanceCoefficients(Oc);const s=Oc.x.toFixed(4),t=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function ZA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function QA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:p}}return i}function qo(s){return s!==""}function Mv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const JA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(s){return s.replace(JA,eb)}const $A=new Map;function eb(s,t){let i=mt[t];if(i===void 0){const r=$A.get(t);if(r!==void 0)i=mt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ph(i)}const tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(s){return s.replace(tb,nb)}function nb(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Av(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const ib={[Pc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function ab(s){return ib[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sb={[Fs]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function rb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":sb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ob={[Fr]:"ENVMAP_MODE_REFRACTION"};function lb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ob[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cb={[Bv]:"ENVMAP_BLENDING_MULTIPLY",[eE]:"ENVMAP_BLENDING_MIX",[tE]:"ENVMAP_BLENDING_ADD"};function ub(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":cb[s.combine]||"ENVMAP_BLENDING_NONE"}function fb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function db(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=ab(i),h=rb(i),x=lb(i),S=ub(i),v=fb(i),M=KA(i),T=ZA(c),D=l.createProgram();let E,_,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),E.length>0&&(E+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(E=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?mt.tonemapping_pars_fragment:"",i.toneMapping!==qi?YA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,WA("linearToOutputTexel",i.outputColorSpace),jA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),d=Ph(d),d=Mv(d,i),d=yv(d,i),p=Ph(p),p=Mv(p,i),p=yv(p,i),d=Tv(d),p=Tv(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,_=["#define varying in",i.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=C+E+d,L=C+_+p,V=xv(l,l.VERTEX_SHADER,N),G=xv(l,l.FRAGMENT_SHADER,L);l.attachShader(D,V),l.attachShader(D,G),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function B(z){if(s.debug.checkShaderErrors){const ee=l.getProgramInfoLog(D)||"",ae=l.getShaderInfoLog(V)||"",ce=l.getShaderInfoLog(G)||"",q=ee.trim(),w=ae.trim(),I=ce.trim();let oe=!0,fe=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,D,V,G);else{const Me=Ev(l,V,"vertex"),P=Ev(l,G,"fragment");Ot("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+q+`
`+Me+`
`+P)}else q!==""?st("WebGLProgram: Program Info Log:",q):(w===""||I==="")&&(fe=!1);fe&&(z.diagnostics={runnable:oe,programLog:q,vertexShader:{log:w,prefix:E},fragmentShader:{log:I,prefix:_}})}l.deleteShader(V),l.deleteShader(G),A=new Hc(l,D),U=QA(l,D)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let pe=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pe===!1&&(pe=l.getProgramParameter(D,GA)),pe},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VA++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=V,this.fragmentShader=G,this}let hb=0;class pb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new mb(t),i.set(t,r)),r}}class mb{constructor(t){this.id=hb++,this.code=t,this.usedTimes=0}}function gb(s,t,i,r,l,c){const d=new t_,p=new pb,m=new Set,h=[],x=new Map,S=r.logarithmicDepthBuffer;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function D(A,U,pe,z,ee){const ae=z.fog,ce=ee.geometry,q=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,w=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,I=t.get(A.envMap||q,w),oe=I&&I.mapping===Yc?I.image.height:null,fe=M[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&st("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const Me=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,P=Me!==void 0?Me.length:0;let j=0;ce.morphAttributes.position!==void 0&&(j=1),ce.morphAttributes.normal!==void 0&&(j=2),ce.morphAttributes.color!==void 0&&(j=3);let ve,be,Pe,te;if(fe){const Ct=Vi[fe];ve=Ct.vertexShader,be=Ct.fragmentShader}else ve=A.vertexShader,be=A.fragmentShader,p.update(A),Pe=p.getVertexShaderID(A),te=p.getFragmentShaderID(A);const _e=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Oe=ee.isInstancedMesh===!0,Ye=ee.isBatchedMesh===!0,$e=!!A.map,Kt=!!A.matcap,gt=!!I,ct=!!A.aoMap,yt=!!A.lightMap,Ie=!!A.bumpMap,rt=!!A.normalMap,H=!!A.displacementMap,Tt=!!A.emissiveMap,vt=!!A.metalnessMap,wt=!!A.roughnessMap,je=A.anisotropy>0,O=A.clearcoat>0,y=A.dispersion>0,Y=A.iridescence>0,me=A.sheen>0,Ee=A.transmission>0,de=je&&!!A.anisotropyMap,We=O&&!!A.clearcoatMap,De=O&&!!A.clearcoatNormalMap,Qe=O&&!!A.clearcoatRoughnessMap,tt=Y&&!!A.iridescenceMap,Ae=Y&&!!A.iridescenceThicknessMap,ye=me&&!!A.sheenColorMap,Be=me&&!!A.sheenRoughnessMap,Ne=!!A.specularMap,Fe=!!A.specularColorMap,ft=!!A.specularIntensityMap,W=Ee&&!!A.transmissionMap,Ce=Ee&&!!A.thicknessMap,Re=!!A.gradientMap,ze=!!A.alphaMap,Te=A.alphaTest>0,ue=!!A.alphaHash,Ge=!!A.extensions;let it=qi;A.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(it=s.toneMapping);const zt={shaderID:fe,shaderType:A.type,shaderName:A.name,vertexShader:ve,fragmentShader:be,defines:A.defines,customVertexShaderID:Pe,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Ye,batchingColor:Ye&&ee._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ee.instanceColor!==null,instancingMorph:Oe&&ee.morphTexture!==null,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:rs,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:Kt,envMap:gt,envMapMode:gt&&I.mapping,envMapCubeUVHeight:oe,aoMap:ct,lightMap:yt,bumpMap:Ie,normalMap:rt,displacementMap:H,emissiveMap:Tt,normalMapObjectSpace:rt&&A.normalMapType===aE,normalMapTangentSpace:rt&&A.normalMapType===iE,metalnessMap:vt,roughnessMap:wt,anisotropy:je,anisotropyMap:de,clearcoat:O,clearcoatMap:We,clearcoatNormalMap:De,clearcoatRoughnessMap:Qe,dispersion:y,iridescence:Y,iridescenceMap:tt,iridescenceThicknessMap:Ae,sheen:me,sheenColorMap:ye,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Fe,specularIntensityMap:ft,transmission:Ee,transmissionMap:W,thicknessMap:Ce,gradientMap:Re,opaque:A.transparent===!1&&A.blending===Pr&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:Te,alphaHash:ue,combine:A.combine,mapUv:$e&&T(A.map.channel),aoMapUv:ct&&T(A.aoMap.channel),lightMapUv:yt&&T(A.lightMap.channel),bumpMapUv:Ie&&T(A.bumpMap.channel),normalMapUv:rt&&T(A.normalMap.channel),displacementMapUv:H&&T(A.displacementMap.channel),emissiveMapUv:Tt&&T(A.emissiveMap.channel),metalnessMapUv:vt&&T(A.metalnessMap.channel),roughnessMapUv:wt&&T(A.roughnessMap.channel),anisotropyMapUv:de&&T(A.anisotropyMap.channel),clearcoatMapUv:We&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(A.sheenRoughnessMap.channel),specularMapUv:Ne&&T(A.specularMap.channel),specularColorMapUv:Fe&&T(A.specularColorMap.channel),specularIntensityMapUv:ft&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:Ce&&T(A.thicknessMap.channel),alphaMapUv:ze&&T(A.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(rt||je),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ce.attributes.uv&&($e||ze),fog:!!ae,useFog:A.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ce.attributes.normal===void 0&&rt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Se,skinning:ee.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:j,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&pe.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&Dt.getTransfer(A.map.colorSpace)===Vt,decodeVideoTextureEmissive:Tt&&A.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(A.emissiveMap.colorSpace)===Vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===oi,flipSided:A.side===Tn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ge&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&A.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return zt.vertexUv1s=m.has(1),zt.vertexUv2s=m.has(2),zt.vertexUv3s=m.has(3),m.clear(),zt}function E(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const pe in A.defines)U.push(pe),U.push(A.defines[pe]);return A.isRawShaderMaterial===!1&&(_(U,A),C(U,A),U.push(s.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function _(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function C(A,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),A.push(d.mask)}function N(A){const U=M[A.type];let pe;if(U){const z=Vi[U];pe=GE.clone(z.uniforms)}else pe=A.uniforms;return pe}function L(A,U){let pe=x.get(U);return pe!==void 0?++pe.usedTimes:(pe=new db(s,U,A,l),h.push(pe),x.set(U,pe)),pe}function V(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),x.delete(A.cacheKey),A.destroy()}}function G(A){p.remove(A)}function B(){p.dispose()}return{getParameters:D,getProgramCacheKey:E,getUniforms:N,acquireProgram:L,releaseProgram:V,releaseShaderCache:G,programs:h,dispose:B}}function vb(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function _b(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function bv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function p(v,M,T,D,E,_){let C=s[t];return C===void 0?(C={id:v.id,object:v,geometry:M,material:T,materialVariant:d(v),groupOrder:D,renderOrder:v.renderOrder,z:E,group:_},s[t]=C):(C.id=v.id,C.object=v,C.geometry=M,C.material=T,C.materialVariant=d(v),C.groupOrder=D,C.renderOrder=v.renderOrder,C.z=E,C.group=_),t++,C}function m(v,M,T,D,E,_){const C=p(v,M,T,D,E,_);T.transmission>0?r.push(C):T.transparent===!0?l.push(C):i.push(C)}function h(v,M,T,D,E,_){const C=p(v,M,T,D,E,_);T.transmission>0?r.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function x(v,M){i.length>1&&i.sort(v||_b),r.length>1&&r.sort(M||bv),l.length>1&&l.sort(M||bv)}function S(){for(let v=t,M=s.length;v<M;v++){const T=s[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:S,sort:x}}function xb(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new Rv,s.set(r,[d])):l>=c.length?(d=new Rv,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function Sb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new se,color:new Ft};break;case"SpotLight":i={position:new se,direction:new se,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":i={color:new Ft,position:new se,halfWidth:new se,halfHeight:new se};break}return s[t.id]=i,i}}}function Eb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Mb=0;function yb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Tb(s){const t=new Sb,i=Eb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new se);const l=new se,c=new gn,d=new gn;function p(h){let x=0,S=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,T=0,D=0,E=0,_=0,C=0,N=0,L=0,V=0,G=0,B=0;h.sort(yb);for(let U=0,pe=h.length;U<pe;U++){const z=h[U],ee=z.color,ae=z.intensity,ce=z.distance;let q=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Hr?q=z.shadow.map.texture:q=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=ee.r*ae,S+=ee.g*ae,v+=ee.b*ae;else if(z.isLightProbe){for(let w=0;w<9;w++)r.probe[w].addScaledVector(z.sh.coefficients[w],ae);B++}else if(z.isDirectionalLight){const w=t.get(z);if(w.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const I=z.shadow,oe=i.get(z);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,r.directionalShadow[M]=oe,r.directionalShadowMap[M]=q,r.directionalShadowMatrix[M]=z.shadow.matrix,C++}r.directional[M]=w,M++}else if(z.isSpotLight){const w=t.get(z);w.position.setFromMatrixPosition(z.matrixWorld),w.color.copy(ee).multiplyScalar(ae),w.distance=ce,w.coneCos=Math.cos(z.angle),w.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),w.decay=z.decay,r.spot[D]=w;const I=z.shadow;if(z.map&&(r.spotLightMap[V]=z.map,V++,I.updateMatrices(z),z.castShadow&&G++),r.spotLightMatrix[D]=I.matrix,z.castShadow){const oe=i.get(z);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,r.spotShadow[D]=oe,r.spotShadowMap[D]=q,L++}D++}else if(z.isRectAreaLight){const w=t.get(z);w.color.copy(ee).multiplyScalar(ae),w.halfWidth.set(z.width*.5,0,0),w.halfHeight.set(0,z.height*.5,0),r.rectArea[E]=w,E++}else if(z.isPointLight){const w=t.get(z);if(w.color.copy(z.color).multiplyScalar(z.intensity),w.distance=z.distance,w.decay=z.decay,z.castShadow){const I=z.shadow,oe=i.get(z);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,oe.shadowCameraNear=I.camera.near,oe.shadowCameraFar=I.camera.far,r.pointShadow[T]=oe,r.pointShadowMap[T]=q,r.pointShadowMatrix[T]=z.shadow.matrix,N++}r.point[T]=w,T++}else if(z.isHemisphereLight){const w=t.get(z);w.skyColor.copy(z.color).multiplyScalar(ae),w.groundColor.copy(z.groundColor).multiplyScalar(ae),r.hemi[_]=w,_++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==M||A.pointLength!==T||A.spotLength!==D||A.rectAreaLength!==E||A.hemiLength!==_||A.numDirectionalShadows!==C||A.numPointShadows!==N||A.numSpotShadows!==L||A.numSpotMaps!==V||A.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=D,r.rectArea.length=E,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+V-G,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=B,A.directionalLength=M,A.pointLength=T,A.spotLength=D,A.rectAreaLength=E,A.hemiLength=_,A.numDirectionalShadows=C,A.numPointShadows=N,A.numSpotShadows=L,A.numSpotMaps=V,A.numLightProbes=B,r.version=Mb++)}function m(h,x){let S=0,v=0,M=0,T=0,D=0;const E=x.matrixWorldInverse;for(let _=0,C=h.length;_<C;_++){const N=h[_];if(N.isDirectionalLight){const L=r.directional[S];L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(E),S++}else if(N.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(E),L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(E),M++}else if(N.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(E),d.identity(),c.copy(N.matrixWorld),c.premultiply(E),d.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),T++}else if(N.isPointLight){const L=r.point[v];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(E),v++}else if(N.isHemisphereLight){const L=r.hemi[D];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(E),D++}}}return{setup:p,setupView:m,state:r}}function Cv(s){const t=new Tb(s),i=[],r=[];function l(x){h.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function p(){t.setup(i)}function m(x){t.setupView(i,x)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function Ab(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Cv(s),t.set(l,[p])):c>=d.length?(p=new Cv(s),d.push(p)):p=d[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rb=`uniform sampler2D shadow_pass;
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
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cb=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],Db=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],Dv=new gn,Xo=new se,zd=new se;function wb(s,t,i){let r=new r_;const l=new _t,c=new _t,d=new on,p=new WE,m=new qE,h={},x=i.maxTextureSize,S={[Ea]:Tn,[Tn]:Ea,[oi]:oi},v=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:bb,fragmentShader:Rb}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const T=new Yi;T.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Oi(T,v),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let _=this.type;this.render=function(G,B,A){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||G.length===0)return;this.type===PS&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pc);const U=s.getRenderTarget(),pe=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(Li),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ae=_!==this.type;ae&&B.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(q=>q.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,q=G.length;ce<q;ce++){const w=G[ce],I=w.shadow;if(I===void 0){st("WebGLShadowMap:",w,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const oe=I.getFrameExtents();l.multiply(oe),c.copy(I.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/oe.x),l.x=c.x*oe.x,I.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/oe.y),l.y=c.y*oe.y,I.mapSize.y=c.y));const fe=s.state.buffers.depth.getReversed();if(I.camera._reversedDepth=fe,I.map===null||ae===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Wo){if(w.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new jn(l.x,l.y,{format:Hr,type:Ma,minFilter:tn,magFilter:tn,generateMipmaps:!1}),I.map.texture.name=w.name+".shadowMap",I.map.depthTexture=new Gr(l.x,l.y,Xi),I.map.depthTexture.name=w.name+".shadowMapDepth",I.map.depthTexture.format=ya,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn}else w.isPointLight?(I.map=new d_(l.x),I.map.depthTexture=new zE(l.x,Ni)):(I.map=new jn(l.x,l.y),I.map.depthTexture=new Gr(l.x,l.y,Ni)),I.map.depthTexture.name=w.name+".shadowMap",I.map.depthTexture.format=ya,this.type===Pc?(I.map.depthTexture.compareFunction=fe?Wh:Xh,I.map.depthTexture.minFilter=tn,I.map.depthTexture.magFilter=tn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn);I.camera.updateProjectionMatrix()}const Me=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Me;P++){if(I.map.isWebGLCubeRenderTarget)s.setRenderTarget(I.map,P),s.clear();else{P===0&&(s.setRenderTarget(I.map),s.clear());const j=I.getViewport(P);d.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),ee.viewport(d)}if(w.isPointLight){const j=I.camera,ve=I.matrix,be=w.distance||j.far;be!==j.far&&(j.far=be,j.updateProjectionMatrix()),Xo.setFromMatrixPosition(w.matrixWorld),j.position.copy(Xo),zd.copy(j.position),zd.add(Cb[P]),j.up.copy(Db[P]),j.lookAt(zd),j.updateMatrixWorld(),ve.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Dv.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Dv,j.coordinateSystem,j.reversedDepth)}else I.updateMatrices(w);r=I.getFrustum(),L(B,A,I.camera,w,this.type)}I.isPointLightShadow!==!0&&this.type===Wo&&C(I,A),I.needsUpdate=!1}_=this.type,E.needsUpdate=!1,s.setRenderTarget(U,pe,z)};function C(G,B){const A=t.update(D);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new jn(l.x,l.y,{format:Hr,type:Ma})),v.uniforms.shadow_pass.value=G.map.depthTexture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(B,null,A,v,D,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(B,null,A,M,D,null)}function N(G,B,A,U){let pe=null;const z=A.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(z!==void 0)pe=z;else if(pe=A.isPointLight===!0?m:p,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ee=pe.uuid,ae=B.uuid;let ce=h[ee];ce===void 0&&(ce={},h[ee]=ce);let q=ce[ae];q===void 0&&(q=pe.clone(),ce[ae]=q,B.addEventListener("dispose",V)),pe=q}if(pe.visible=B.visible,pe.wireframe=B.wireframe,U===Wo?pe.side=B.shadowSide!==null?B.shadowSide:B.side:pe.side=B.shadowSide!==null?B.shadowSide:S[B.side],pe.alphaMap=B.alphaMap,pe.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,pe.map=B.map,pe.clipShadows=B.clipShadows,pe.clippingPlanes=B.clippingPlanes,pe.clipIntersection=B.clipIntersection,pe.displacementMap=B.displacementMap,pe.displacementScale=B.displacementScale,pe.displacementBias=B.displacementBias,pe.wireframeLinewidth=B.wireframeLinewidth,pe.linewidth=B.linewidth,A.isPointLight===!0&&pe.isMeshDistanceMaterial===!0){const ee=s.properties.get(pe);ee.light=A}return pe}function L(G,B,A,U,pe){if(G.visible===!1)return;if(G.layers.test(B.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&pe===Wo)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,G.matrixWorld);const ae=t.update(G),ce=G.material;if(Array.isArray(ce)){const q=ae.groups;for(let w=0,I=q.length;w<I;w++){const oe=q[w],fe=ce[oe.materialIndex];if(fe&&fe.visible){const Me=N(G,fe,U,pe);G.onBeforeShadow(s,G,B,A,ae,Me,oe),s.renderBufferDirect(A,null,ae,Me,G,oe),G.onAfterShadow(s,G,B,A,ae,Me,oe)}}}else if(ce.visible){const q=N(G,ce,U,pe);G.onBeforeShadow(s,G,B,A,ae,q,null),s.renderBufferDirect(A,null,ae,q,G,null),G.onAfterShadow(s,G,B,A,ae,q,null)}}const ee=G.children;for(let ae=0,ce=ee.length;ae<ce;ae++)L(ee[ae],B,A,U,pe)}function V(G){G.target.removeEventListener("dispose",V);for(const A in h){const U=h[A],pe=G.target.uuid;pe in U&&(U[pe].dispose(),delete U[pe])}}}function Ub(s,t){function i(){let W=!1;const Ce=new on;let Re=null;const ze=new on(0,0,0,0);return{setMask:function(Te){Re!==Te&&!W&&(s.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){W=Te},setClear:function(Te,ue,Ge,it,zt){zt===!0&&(Te*=it,ue*=it,Ge*=it),Ce.set(Te,ue,Ge,it),ze.equals(Ce)===!1&&(s.clearColor(Te,ue,Ge,it),ze.copy(Ce))},reset:function(){W=!1,Re=null,ze.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,Re=null,ze=null,Te=null;return{setReversed:function(ue){if(Ce!==ue){const Ge=t.get("EXT_clip_control");ue?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=ue;const it=Te;Te=null,this.setClear(it)}},getReversed:function(){return Ce},setTest:function(ue){ue?_e(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(ue){Re!==ue&&!W&&(s.depthMask(ue),Re=ue)},setFunc:function(ue){if(Ce&&(ue=pE[ue]),ze!==ue){switch(ue){case Wd:s.depthFunc(s.NEVER);break;case Gc:s.depthFunc(s.ALWAYS);break;case qd:s.depthFunc(s.LESS);break;case Br:s.depthFunc(s.LEQUAL);break;case Yd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case Kd:s.depthFunc(s.GREATER);break;case Zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=ue}},setLocked:function(ue){W=ue},setClear:function(ue){Te!==ue&&(Te=ue,Ce&&(ue=1-ue),s.clearDepth(ue))},reset:function(){W=!1,Re=null,ze=null,Te=null,Ce=!1}}}function l(){let W=!1,Ce=null,Re=null,ze=null,Te=null,ue=null,Ge=null,it=null,zt=null;return{setTest:function(Ct){W||(Ct?_e(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Ct){Ce!==Ct&&!W&&(s.stencilMask(Ct),Ce=Ct)},setFunc:function(Ct,Pn,Si){(Re!==Ct||ze!==Pn||Te!==Si)&&(s.stencilFunc(Ct,Pn,Si),Re=Ct,ze=Pn,Te=Si)},setOp:function(Ct,Pn,Si){(ue!==Ct||Ge!==Pn||it!==Si)&&(s.stencilOp(Ct,Pn,Si),ue=Ct,Ge=Pn,it=Si)},setLocked:function(Ct){W=Ct},setClear:function(Ct){zt!==Ct&&(s.clearStencil(Ct),zt=Ct)},reset:function(){W=!1,Ce=null,Re=null,ze=null,Te=null,ue=null,Ge=null,it=null,zt=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let x={},S={},v=new WeakMap,M=[],T=null,D=!1,E=null,_=null,C=null,N=null,L=null,V=null,G=null,B=new Ft(0,0,0),A=0,U=!1,pe=null,z=null,ee=null,ae=null,ce=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,I=0;const oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(oe)[1]),w=I>=1):oe.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),w=I>=2);let fe=null,Me={};const P=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ve=new on().fromArray(P),be=new on().fromArray(j);function Pe(W,Ce,Re,ze){const Te=new Uint8Array(4),ue=s.createTexture();s.bindTexture(W,ue),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<Re;Ge++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Ce+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return ue}const te={};te[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),_e(s.DEPTH_TEST),d.setFunc(Br),Ie(!1),rt(I0),_e(s.CULL_FACE),ct(Li);function _e(W){x[W]!==!0&&(s.enable(W),x[W]=!0)}function Se(W){x[W]!==!1&&(s.disable(W),x[W]=!1)}function Oe(W,Ce){return S[W]!==Ce?(s.bindFramebuffer(W,Ce),S[W]=Ce,W===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Ce),W===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ye(W,Ce){let Re=M,ze=!1;if(W){Re=v.get(Ce),Re===void 0&&(Re=[],v.set(Ce,Re));const Te=W.textures;if(Re.length!==Te.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Ge=Te.length;ue<Ge;ue++)Re[ue]=s.COLOR_ATTACHMENT0+ue;Re.length=Te.length,ze=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,ze=!0);ze&&s.drawBuffers(Re)}function $e(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const Kt={[Os]:s.FUNC_ADD,[BS]:s.FUNC_SUBTRACT,[FS]:s.FUNC_REVERSE_SUBTRACT};Kt[zS]=s.MIN,Kt[HS]=s.MAX;const gt={[GS]:s.ZERO,[VS]:s.ONE,[kS]:s.SRC_COLOR,[kd]:s.SRC_ALPHA,[KS]:s.SRC_ALPHA_SATURATE,[YS]:s.DST_COLOR,[WS]:s.DST_ALPHA,[XS]:s.ONE_MINUS_SRC_COLOR,[Xd]:s.ONE_MINUS_SRC_ALPHA,[jS]:s.ONE_MINUS_DST_COLOR,[qS]:s.ONE_MINUS_DST_ALPHA,[ZS]:s.CONSTANT_COLOR,[QS]:s.ONE_MINUS_CONSTANT_COLOR,[JS]:s.CONSTANT_ALPHA,[$S]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(W,Ce,Re,ze,Te,ue,Ge,it,zt,Ct){if(W===Li){D===!0&&(Se(s.BLEND),D=!1);return}if(D===!1&&(_e(s.BLEND),D=!0),W!==IS){if(W!==E||Ct!==U){if((_!==Os||L!==Os)&&(s.blendEquation(s.FUNC_ADD),_=Os,L=Os),Ct)switch(W){case Pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B0:s.blendFunc(s.ONE,s.ONE);break;case F0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case z0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",W);break}else switch(W){case Pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case F0:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z0:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",W);break}C=null,N=null,V=null,G=null,B.set(0,0,0),A=0,E=W,U=Ct}return}Te=Te||Ce,ue=ue||Re,Ge=Ge||ze,(Ce!==_||Te!==L)&&(s.blendEquationSeparate(Kt[Ce],Kt[Te]),_=Ce,L=Te),(Re!==C||ze!==N||ue!==V||Ge!==G)&&(s.blendFuncSeparate(gt[Re],gt[ze],gt[ue],gt[Ge]),C=Re,N=ze,V=ue,G=Ge),(it.equals(B)===!1||zt!==A)&&(s.blendColor(it.r,it.g,it.b,zt),B.copy(it),A=zt),E=W,U=!1}function yt(W,Ce){W.side===oi?Se(s.CULL_FACE):_e(s.CULL_FACE);let Re=W.side===Tn;Ce&&(Re=!Re),Ie(Re),W.blending===Pr&&W.transparent===!1?ct(Li):ct(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const ze=W.stencilWrite;p.setTest(ze),ze&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Tt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(W){pe!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),pe=W)}function rt(W){W!==NS?(_e(s.CULL_FACE),W!==z&&(W===I0?s.cullFace(s.BACK):W===OS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),z=W}function H(W){W!==ee&&(w&&s.lineWidth(W),ee=W)}function Tt(W,Ce,Re){W?(_e(s.POLYGON_OFFSET_FILL),(ae!==Ce||ce!==Re)&&(ae=Ce,ce=Re,d.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,Re))):Se(s.POLYGON_OFFSET_FILL)}function vt(W){W?_e(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function wt(W){W===void 0&&(W=s.TEXTURE0+q-1),fe!==W&&(s.activeTexture(W),fe=W)}function je(W,Ce,Re){Re===void 0&&(fe===null?Re=s.TEXTURE0+q-1:Re=fe);let ze=Me[Re];ze===void 0&&(ze={type:void 0,texture:void 0},Me[Re]=ze),(ze.type!==W||ze.texture!==Ce)&&(fe!==Re&&(s.activeTexture(Re),fe=Re),s.bindTexture(W,Ce||te[W]),ze.type=W,ze.texture=Ce)}function O(){const W=Me[fe];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function me(){try{s.texSubImage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function Ee(){try{s.texSubImage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function We(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function De(){try{s.texStorage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function Qe(){try{s.texStorage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function tt(){try{s.texImage2D(...arguments)}catch(W){Ot("WebGLState:",W)}}function Ae(){try{s.texImage3D(...arguments)}catch(W){Ot("WebGLState:",W)}}function ye(W){ve.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ve.copy(W))}function Be(W){be.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),be.copy(W))}function Ne(W,Ce){let Re=h.get(Ce);Re===void 0&&(Re=new WeakMap,h.set(Ce,Re));let ze=Re.get(W);ze===void 0&&(ze=s.getUniformBlockIndex(Ce,W.name),Re.set(W,ze))}function Fe(W,Ce){const ze=h.get(Ce).get(W);m.get(Ce)!==ze&&(s.uniformBlockBinding(Ce,ze,W.__bindingPointIndex),m.set(Ce,ze))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},fe=null,Me={},S={},v=new WeakMap,M=[],T=null,D=!1,E=null,_=null,C=null,N=null,L=null,V=null,G=null,B=new Ft(0,0,0),A=0,U=!1,pe=null,z=null,ee=null,ae=null,ce=null,ve.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:_e,disable:Se,bindFramebuffer:Oe,drawBuffers:Ye,useProgram:$e,setBlending:ct,setMaterial:yt,setFlipSided:Ie,setCullFace:rt,setLineWidth:H,setPolygonOffset:Tt,setScissorTest:vt,activeTexture:wt,bindTexture:je,unbindTexture:O,compressedTexImage2D:y,compressedTexImage3D:Y,texImage2D:tt,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:Fe,texStorage2D:De,texStorage3D:Qe,texSubImage2D:me,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:We,scissor:ye,viewport:Be,reset:ft}}function Lb(s,t,i,r,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new _t,x=new WeakMap;let S;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,y){return M?new OffscreenCanvas(O,y):Xc("canvas")}function D(O,y,Y){let me=1;const Ee=je(O);if((Ee.width>Y||Ee.height>Y)&&(me=Y/Math.max(Ee.width,Ee.height)),me<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const de=Math.floor(me*Ee.width),We=Math.floor(me*Ee.height);S===void 0&&(S=T(de,We));const De=y?T(de,We):S;return De.width=de,De.height=We,De.getContext("2d").drawImage(O,0,0,de,We),st("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+de+"x"+We+")."),De}else return"data"in O&&st("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function E(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(O,y,Y,me,Ee=!1){if(O!==null){if(s[O]!==void 0)return s[O];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let de=y;if(y===s.RED&&(Y===s.FLOAT&&(de=s.R32F),Y===s.HALF_FLOAT&&(de=s.R16F),Y===s.UNSIGNED_BYTE&&(de=s.R8)),y===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(de=s.R8UI),Y===s.UNSIGNED_SHORT&&(de=s.R16UI),Y===s.UNSIGNED_INT&&(de=s.R32UI),Y===s.BYTE&&(de=s.R8I),Y===s.SHORT&&(de=s.R16I),Y===s.INT&&(de=s.R32I)),y===s.RG&&(Y===s.FLOAT&&(de=s.RG32F),Y===s.HALF_FLOAT&&(de=s.RG16F),Y===s.UNSIGNED_BYTE&&(de=s.RG8)),y===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(de=s.RG8UI),Y===s.UNSIGNED_SHORT&&(de=s.RG16UI),Y===s.UNSIGNED_INT&&(de=s.RG32UI),Y===s.BYTE&&(de=s.RG8I),Y===s.SHORT&&(de=s.RG16I),Y===s.INT&&(de=s.RG32I)),y===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Y===s.UNSIGNED_INT&&(de=s.RGB32UI),Y===s.BYTE&&(de=s.RGB8I),Y===s.SHORT&&(de=s.RGB16I),Y===s.INT&&(de=s.RGB32I)),y===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Y===s.UNSIGNED_INT&&(de=s.RGBA32UI),Y===s.BYTE&&(de=s.RGBA8I),Y===s.SHORT&&(de=s.RGBA16I),Y===s.INT&&(de=s.RGBA32I)),y===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),y===s.RGBA){const We=Ee?Vc:Dt.getTransfer(me);Y===s.FLOAT&&(de=s.RGBA32F),Y===s.HALF_FLOAT&&(de=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(de=We===Vt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function L(O,y){let Y;return O?y===null||y===Ni||y===zr?Y=s.DEPTH24_STENCIL8:y===Xi?Y=s.DEPTH32F_STENCIL8:y===Yo&&(Y=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===zr?Y=s.DEPTH_COMPONENT24:y===Xi?Y=s.DEPTH_COMPONENT32F:y===Yo&&(Y=s.DEPTH_COMPONENT16),Y}function V(O,y){return E(O)===!0||O.isFramebufferTexture&&O.minFilter!==wn&&O.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?y.mipmaps.length:1}function G(O){const y=O.target;y.removeEventListener("dispose",G),A(y),y.isVideoTexture&&x.delete(y)}function B(O){const y=O.target;y.removeEventListener("dispose",B),pe(y)}function A(O){const y=r.get(O);if(y.__webglInit===void 0)return;const Y=O.source,me=v.get(Y);if(me){const Ee=me[y.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&U(O),Object.keys(me).length===0&&v.delete(Y)}r.remove(O)}function U(O){const y=r.get(O);s.deleteTexture(y.__webglTexture);const Y=O.source,me=v.get(Y);delete me[y.__cacheKey],d.memory.textures--}function pe(O){const y=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(y.__webglFramebuffer[me]))for(let Ee=0;Ee<y.__webglFramebuffer[me].length;Ee++)s.deleteFramebuffer(y.__webglFramebuffer[me][Ee]);else s.deleteFramebuffer(y.__webglFramebuffer[me]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[me])}else{if(Array.isArray(y.__webglFramebuffer))for(let me=0;me<y.__webglFramebuffer.length;me++)s.deleteFramebuffer(y.__webglFramebuffer[me]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let me=0;me<y.__webglColorRenderbuffer.length;me++)y.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[me]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Y=O.textures;for(let me=0,Ee=Y.length;me<Ee;me++){const de=r.get(Y[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(Y[me])}r.remove(O)}let z=0;function ee(){z=0}function ae(){const O=z;return O>=l.maxTextures&&st("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),z+=1,O}function ce(O){const y=[];return y.push(O.wrapS),y.push(O.wrapT),y.push(O.wrapR||0),y.push(O.magFilter),y.push(O.minFilter),y.push(O.anisotropy),y.push(O.internalFormat),y.push(O.format),y.push(O.type),y.push(O.generateMipmaps),y.push(O.premultiplyAlpha),y.push(O.flipY),y.push(O.unpackAlignment),y.push(O.colorSpace),y.join()}function q(O,y){const Y=r.get(O);if(O.isVideoTexture&&vt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){const me=O.image;if(me===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,O,y);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+y)}function w(O,y){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){te(Y,O,y);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+y)}function I(O,y){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){te(Y,O,y);return}i.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+y)}function oe(O,y){const Y=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){_e(Y,O,y);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+y)}const fe={[Qd]:s.REPEAT,[_a]:s.CLAMP_TO_EDGE,[Jd]:s.MIRRORED_REPEAT},Me={[wn]:s.NEAREST,[nE]:s.NEAREST_MIPMAP_NEAREST,[dc]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[cd]:s.LINEAR_MIPMAP_NEAREST,[Is]:s.LINEAR_MIPMAP_LINEAR},P={[sE]:s.NEVER,[uE]:s.ALWAYS,[rE]:s.LESS,[Xh]:s.LEQUAL,[oE]:s.EQUAL,[Wh]:s.GEQUAL,[lE]:s.GREATER,[cE]:s.NOTEQUAL};function j(O,y){if(y.type===Xi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===tn||y.magFilter===cd||y.magFilter===dc||y.magFilter===Is||y.minFilter===tn||y.minFilter===cd||y.minFilter===dc||y.minFilter===Is)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,fe[y.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,fe[y.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,fe[y.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Me[y.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,P[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wn||y.minFilter!==dc&&y.minFilter!==Is||y.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function ve(O,y){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,y.addEventListener("dispose",G));const me=y.source;let Ee=v.get(me);Ee===void 0&&(Ee={},v.set(me,Ee));const de=ce(y);if(de!==O.__cacheKey){Ee[de]===void 0&&(Ee[de]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),Ee[de].usedTimes++;const We=Ee[O.__cacheKey];We!==void 0&&(Ee[O.__cacheKey].usedTimes--,We.usedTimes===0&&U(y)),O.__cacheKey=de,O.__webglTexture=Ee[de].texture}return Y}function be(O,y,Y){return Math.floor(Math.floor(O/Y)/y)}function Pe(O,y,Y,me){const de=O.updateRanges;if(de.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,Y,me,y.data);else{de.sort((Ae,ye)=>Ae.start-ye.start);let We=0;for(let Ae=1;Ae<de.length;Ae++){const ye=de[We],Be=de[Ae],Ne=ye.start+ye.count,Fe=be(Be.start,y.width,4),ft=be(ye.start,y.width,4);Be.start<=Ne+1&&Fe===ft&&be(Be.start+Be.count-1,y.width,4)===Fe?ye.count=Math.max(ye.count,Be.start+Be.count-ye.start):(++We,de[We]=Be)}de.length=We+1;const De=s.getParameter(s.UNPACK_ROW_LENGTH),Qe=s.getParameter(s.UNPACK_SKIP_PIXELS),tt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Ae=0,ye=de.length;Ae<ye;Ae++){const Be=de[Ae],Ne=Math.floor(Be.start/4),Fe=Math.ceil(Be.count/4),ft=Ne%y.width,W=Math.floor(Ne/y.width),Ce=Fe,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,ft,W,Ce,Re,Y,me,y.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,De),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,tt)}}function te(O,y,Y){let me=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(me=s.TEXTURE_3D);const Ee=ve(O,y),de=y.source;i.bindTexture(me,O.__webglTexture,s.TEXTURE0+Y);const We=r.get(de);if(de.version!==We.__version||Ee===!0){i.activeTexture(s.TEXTURE0+Y);const De=Dt.getPrimaries(Dt.workingColorSpace),Qe=y.colorSpace===ki?null:Dt.getPrimaries(y.colorSpace),tt=y.colorSpace===ki||De===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ae=D(y.image,!1,l.maxTextureSize);Ae=wt(y,Ae);const ye=c.convert(y.format,y.colorSpace),Be=c.convert(y.type);let Ne=N(y.internalFormat,ye,Be,y.colorSpace,y.isVideoTexture);j(me,y);let Fe;const ft=y.mipmaps,W=y.isVideoTexture!==!0,Ce=We.__version===void 0||Ee===!0,Re=de.dataReady,ze=V(y,Ae);if(y.isDepthTexture)Ne=L(y.format===as,y.type),Ce&&(W?i.texStorage2D(s.TEXTURE_2D,1,Ne,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,Ne,Ae.width,Ae.height,0,ye,Be,null));else if(y.isDataTexture)if(ft.length>0){W&&Ce&&i.texStorage2D(s.TEXTURE_2D,ze,Ne,ft[0].width,ft[0].height);for(let Te=0,ue=ft.length;Te<ue;Te++)Fe=ft[Te],W?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Fe.width,Fe.height,ye,Be,Fe.data):i.texImage2D(s.TEXTURE_2D,Te,Ne,Fe.width,Fe.height,0,ye,Be,Fe.data);y.generateMipmaps=!1}else W?(Ce&&i.texStorage2D(s.TEXTURE_2D,ze,Ne,Ae.width,Ae.height),Re&&Pe(y,Ae,ye,Be)):i.texImage2D(s.TEXTURE_2D,0,Ne,Ae.width,Ae.height,0,ye,Be,Ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&Ce&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Ne,ft[0].width,ft[0].height,Ae.depth);for(let Te=0,ue=ft.length;Te<ue;Te++)if(Fe=ft[Te],y.format!==Ui)if(ye!==null)if(W){if(Re)if(y.layerUpdates.size>0){const Ge=rv(Fe.width,Fe.height,y.format,y.type);for(const it of y.layerUpdates){const zt=Fe.data.subarray(it*Ge/Fe.data.BYTES_PER_ELEMENT,(it+1)*Ge/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,it,Fe.width,Fe.height,1,ye,zt)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Fe.width,Fe.height,Ae.depth,ye,Fe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Ne,Fe.width,Fe.height,Ae.depth,0,Fe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Fe.width,Fe.height,Ae.depth,ye,Be,Fe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,Ne,Fe.width,Fe.height,Ae.depth,0,ye,Be,Fe.data)}else{W&&Ce&&i.texStorage2D(s.TEXTURE_2D,ze,Ne,ft[0].width,ft[0].height);for(let Te=0,ue=ft.length;Te<ue;Te++)Fe=ft[Te],y.format!==Ui?ye!==null?W?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Fe.width,Fe.height,ye,Fe.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,Ne,Fe.width,Fe.height,0,Fe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Fe.width,Fe.height,ye,Be,Fe.data):i.texImage2D(s.TEXTURE_2D,Te,Ne,Fe.width,Fe.height,0,ye,Be,Fe.data)}else if(y.isDataArrayTexture)if(W){if(Ce&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Ne,Ae.width,Ae.height,Ae.depth),Re)if(y.layerUpdates.size>0){const Te=rv(Ae.width,Ae.height,y.format,y.type);for(const ue of y.layerUpdates){const Ge=Ae.data.subarray(ue*Te/Ae.data.BYTES_PER_ELEMENT,(ue+1)*Te/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ue,Ae.width,Ae.height,1,ye,Be,Ge)}y.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,ye,Be,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,Ae.width,Ae.height,Ae.depth,0,ye,Be,Ae.data);else if(y.isData3DTexture)W?(Ce&&i.texStorage3D(s.TEXTURE_3D,ze,Ne,Ae.width,Ae.height,Ae.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,ye,Be,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,Ne,Ae.width,Ae.height,Ae.depth,0,ye,Be,Ae.data);else if(y.isFramebufferTexture){if(Ce)if(W)i.texStorage2D(s.TEXTURE_2D,ze,Ne,Ae.width,Ae.height);else{let Te=Ae.width,ue=Ae.height;for(let Ge=0;Ge<ze;Ge++)i.texImage2D(s.TEXTURE_2D,Ge,Ne,Te,ue,0,ye,Be,null),Te>>=1,ue>>=1}}else if(ft.length>0){if(W&&Ce){const Te=je(ft[0]);i.texStorage2D(s.TEXTURE_2D,ze,Ne,Te.width,Te.height)}for(let Te=0,ue=ft.length;Te<ue;Te++)Fe=ft[Te],W?Re&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,ye,Be,Fe):i.texImage2D(s.TEXTURE_2D,Te,Ne,ye,Be,Fe);y.generateMipmaps=!1}else if(W){if(Ce){const Te=je(Ae);i.texStorage2D(s.TEXTURE_2D,ze,Ne,Te.width,Te.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,Be,Ae)}else i.texImage2D(s.TEXTURE_2D,0,Ne,ye,Be,Ae);E(y)&&_(me),We.__version=de.version,y.onUpdate&&y.onUpdate(y)}O.__version=y.version}function _e(O,y,Y){if(y.image.length!==6)return;const me=ve(O,y),Ee=y.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+Y);const de=r.get(Ee);if(Ee.version!==de.__version||me===!0){i.activeTexture(s.TEXTURE0+Y);const We=Dt.getPrimaries(Dt.workingColorSpace),De=y.colorSpace===ki?null:Dt.getPrimaries(y.colorSpace),Qe=y.colorSpace===ki||We===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const tt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ae=y.image[0]&&y.image[0].isDataTexture,ye=[];for(let ue=0;ue<6;ue++)!tt&&!Ae?ye[ue]=D(y.image[ue],!0,l.maxCubemapSize):ye[ue]=Ae?y.image[ue].image:y.image[ue],ye[ue]=wt(y,ye[ue]);const Be=ye[0],Ne=c.convert(y.format,y.colorSpace),Fe=c.convert(y.type),ft=N(y.internalFormat,Ne,Fe,y.colorSpace),W=y.isVideoTexture!==!0,Ce=de.__version===void 0||me===!0,Re=Ee.dataReady;let ze=V(y,Be);j(s.TEXTURE_CUBE_MAP,y);let Te;if(tt){W&&Ce&&i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,ft,Be.width,Be.height);for(let ue=0;ue<6;ue++){Te=ye[ue].mipmaps;for(let Ge=0;Ge<Te.length;Ge++){const it=Te[Ge];y.format!==Ui?Ne!==null?W?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge,0,0,it.width,it.height,Ne,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge,ft,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge,0,0,it.width,it.height,Ne,Fe,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge,ft,it.width,it.height,0,Ne,Fe,it.data)}}}else{if(Te=y.mipmaps,W&&Ce){Te.length>0&&ze++;const ue=je(ye[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,ft,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ae){W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ye[ue].width,ye[ue].height,Ne,Fe,ye[ue].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ft,ye[ue].width,ye[ue].height,0,Ne,Fe,ye[ue].data);for(let Ge=0;Ge<Te.length;Ge++){const zt=Te[Ge].image[ue].image;W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge+1,0,0,zt.width,zt.height,Ne,Fe,zt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge+1,ft,zt.width,zt.height,0,Ne,Fe,zt.data)}}else{W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ne,Fe,ye[ue]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ft,Ne,Fe,ye[ue]);for(let Ge=0;Ge<Te.length;Ge++){const it=Te[Ge];W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge+1,0,0,Ne,Fe,it.image[ue]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge+1,ft,Ne,Fe,it.image[ue])}}}E(y)&&_(s.TEXTURE_CUBE_MAP),de.__version=Ee.version,y.onUpdate&&y.onUpdate(y)}O.__version=y.version}function Se(O,y,Y,me,Ee,de){const We=c.convert(Y.format,Y.colorSpace),De=c.convert(Y.type),Qe=N(Y.internalFormat,We,De,Y.colorSpace),tt=r.get(y),Ae=r.get(Y);if(Ae.__renderTarget=y,!tt.__hasExternalTextures){const ye=Math.max(1,y.width>>de),Be=Math.max(1,y.height>>de);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?i.texImage3D(Ee,de,Qe,ye,Be,y.depth,0,We,De,null):i.texImage2D(Ee,de,Qe,ye,Be,0,We,De,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Tt(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,Ee,Ae.__webglTexture,0,H(y)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,Ee,Ae.__webglTexture,de),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(O,y,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,O),y.depthBuffer){const me=y.depthTexture,Ee=me&&me.isDepthTexture?me.type:null,de=L(y.stencilBuffer,Ee),We=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Tt(y)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,H(y),de,y.width,y.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,H(y),de,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,de,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,O)}else{const me=y.textures;for(let Ee=0;Ee<me.length;Ee++){const de=me[Ee],We=c.convert(de.format,de.colorSpace),De=c.convert(de.type),Qe=N(de.internalFormat,We,De,de.colorSpace);Tt(y)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,H(y),Qe,y.width,y.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,H(y),Qe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Qe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ye(O,y,Y){const me=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=r.get(y.depthTexture);if(Ee.__renderTarget=y,(!Ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),me){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",G)),Ee.__webglTexture===void 0){Ee.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),j(s.TEXTURE_CUBE_MAP,y.depthTexture);const tt=c.convert(y.depthTexture.format),Ae=c.convert(y.depthTexture.type);let ye;y.depthTexture.format===ya?ye=s.DEPTH_COMPONENT24:y.depthTexture.format===as&&(ye=s.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,ye,y.width,y.height,0,tt,Ae,null)}}else q(y.depthTexture,0);const de=Ee.__webglTexture,We=H(y),De=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,Qe=y.depthTexture.format===as?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ya)Tt(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Qe,De,de,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Qe,De,de,0);else if(y.depthTexture.format===as)Tt(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Qe,De,de,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Qe,De,de,0);else throw new Error("Unknown depthTexture format")}function $e(O){const y=r.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==O.depthTexture){const me=O.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),me){const Ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,me.removeEventListener("dispose",Ee)};me.addEventListener("dispose",Ee),y.__depthDisposeCallback=Ee}y.__boundDepthTexture=me}if(O.depthTexture&&!y.__autoAllocateDepthBuffer)if(Y)for(let me=0;me<6;me++)Ye(y.__webglFramebuffer[me],O,me);else{const me=O.texture.mipmaps;me&&me.length>0?Ye(y.__webglFramebuffer[0],O,0):Ye(y.__webglFramebuffer,O,0)}else if(Y){y.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[me]),y.__webglDepthbuffer[me]===void 0)y.__webglDepthbuffer[me]=s.createRenderbuffer(),Oe(y.__webglDepthbuffer[me],O,!1);else{const Ee=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,de)}}else{const me=O.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Oe(y.__webglDepthbuffer,O,!1);else{const Ee=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,de)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(O,y,Y){const me=r.get(O);y!==void 0&&Se(me.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&$e(O)}function gt(O){const y=O.texture,Y=r.get(O),me=r.get(y);O.addEventListener("dispose",B);const Ee=O.textures,de=O.isWebGLCubeRenderTarget===!0,We=Ee.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=y.version,d.memory.textures++),de){Y.__webglFramebuffer=[];for(let De=0;De<6;De++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[De]=[];for(let Qe=0;Qe<y.mipmaps.length;Qe++)Y.__webglFramebuffer[De][Qe]=s.createFramebuffer()}else Y.__webglFramebuffer[De]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let De=0;De<y.mipmaps.length;De++)Y.__webglFramebuffer[De]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(We)for(let De=0,Qe=Ee.length;De<Qe;De++){const tt=r.get(Ee[De]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),d.memory.textures++)}if(O.samples>0&&Tt(O)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let De=0;De<Ee.length;De++){const Qe=Ee[De];Y.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[De]);const tt=c.convert(Qe.format,Qe.colorSpace),Ae=c.convert(Qe.type),ye=N(Qe.internalFormat,tt,Ae,Qe.colorSpace,O.isXRRenderTarget===!0),Be=H(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,ye,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Y.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(Y.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){i.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),j(s.TEXTURE_CUBE_MAP,y);for(let De=0;De<6;De++)if(y.mipmaps&&y.mipmaps.length>0)for(let Qe=0;Qe<y.mipmaps.length;Qe++)Se(Y.__webglFramebuffer[De][Qe],O,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Qe);else Se(Y.__webglFramebuffer[De],O,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);E(y)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let De=0,Qe=Ee.length;De<Qe;De++){const tt=Ee[De],Ae=r.get(tt);let ye=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ye=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ye,Ae.__webglTexture),j(ye,tt),Se(Y.__webglFramebuffer,O,tt,s.COLOR_ATTACHMENT0+De,ye,0),E(tt)&&_(ye)}i.unbindTexture()}else{let De=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,me.__webglTexture),j(De,y),y.mipmaps&&y.mipmaps.length>0)for(let Qe=0;Qe<y.mipmaps.length;Qe++)Se(Y.__webglFramebuffer[Qe],O,y,s.COLOR_ATTACHMENT0,De,Qe);else Se(Y.__webglFramebuffer,O,y,s.COLOR_ATTACHMENT0,De,0);E(y)&&_(De),i.unbindTexture()}O.depthBuffer&&$e(O)}function ct(O){const y=O.textures;for(let Y=0,me=y.length;Y<me;Y++){const Ee=y[Y];if(E(Ee)){const de=C(O),We=r.get(Ee).__webglTexture;i.bindTexture(de,We),_(de),i.unbindTexture()}}}const yt=[],Ie=[];function rt(O){if(O.samples>0){if(Tt(O)===!1){const y=O.textures,Y=O.width,me=O.height;let Ee=s.COLOR_BUFFER_BIT;const de=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(O),De=y.length>1;if(De)for(let tt=0;tt<y.length;tt++)i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Qe=O.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let tt=0;tt<y.length;tt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[tt]);const Ae=r.get(y[tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,Y,me,0,0,Y,me,Ee,s.NEAREST),m===!0&&(yt.length=0,Ie.length=0,yt.push(s.COLOR_ATTACHMENT0+tt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(yt.push(de),Ie.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let tt=0;tt<y.length;tt++){i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,We.__webglColorRenderbuffer[tt]);const Ae=r.get(y[tt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,Ae,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const y=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function H(O){return Math.min(l.maxSamples,O.samples)}function Tt(O){const y=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function vt(O){const y=d.render.frame;x.get(O)!==y&&(x.set(O,y),O.update())}function wt(O,y){const Y=O.colorSpace,me=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==rs&&Y!==ki&&(Dt.getTransfer(Y)===Vt?(me!==Ui||Ee!==On)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",Y)),y}function je(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=ae,this.resetTextureUnits=ee,this.setTexture2D=q,this.setTexture2DArray=w,this.setTexture3D=I,this.setTextureCube=oe,this.rebindTextures=Kt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Nb(s,t){function i(r,l=ki){let c;const d=Dt.getTransfer(l);if(r===On)return s.UNSIGNED_BYTE;if(r===zh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Hh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Kv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===qv)return s.BYTE;if(r===Yv)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===Fh)return s.INT;if(r===Ni)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===Ma)return s.HALF_FLOAT;if(r===Zv)return s.ALPHA;if(r===Qv)return s.RGB;if(r===Ui)return s.RGBA;if(r===ya)return s.DEPTH_COMPONENT;if(r===as)return s.DEPTH_STENCIL;if(r===Jv)return s.RED;if(r===Gh)return s.RED_INTEGER;if(r===Hr)return s.RG;if(r===Vh)return s.RG_INTEGER;if(r===kh)return s.RGBA_INTEGER;if(r===Ic||r===Bc||r===Fc||r===zc)if(d===Vt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$d||r===eh||r===th||r===nh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ih||r===ah||r===sh||r===rh||r===oh||r===lh||r===ch)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ih||r===ah)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===sh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===rh)return c.COMPRESSED_R11_EAC;if(r===oh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===lh)return c.COMPRESSED_RG11_EAC;if(r===ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===xh||r===Sh||r===Eh||r===Mh||r===yh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===uh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ph)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_h)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Th||r===Ah||r===bh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Th)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ah)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rh||r===Ch||r===Dh||r===wh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ch)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zr?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const Ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
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

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new l_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Kn({vertexShader:Ob,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oi(new Jo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bb extends os{constructor(t,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,S=null,v=null,M=null,T=null;const D=typeof XRWebGLBinding<"u",E=new Ib,_={},C=i.getContextAttributes();let N=null,L=null;const V=[],G=[],B=new _t;let A=null;const U=new _i;U.viewport=new on;const pe=new _i;pe.viewport=new on;const z=[U,pe],ee=new jE;let ae=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=V[te];return _e===void 0&&(_e=new vd,V[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=V[te];return _e===void 0&&(_e=new vd,V[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=V[te];return _e===void 0&&(_e=new vd,V[te]=_e),_e.getHandSpace()};function q(te){const _e=G.indexOf(te.inputSource);if(_e===-1)return;const Se=V[_e];Se!==void 0&&(Se.update(te.inputSource,te.frame,h||d),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function w(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",w),l.removeEventListener("inputsourceschange",I);for(let te=0;te<V.length;te++){const _e=G[te];_e!==null&&(G[te]=null,V[te].disconnect(_e))}ae=null,ce=null,E.reset();for(const te in _)delete _[te];t.setRenderTarget(N),M=null,v=null,S=null,l=null,L=null,Pe.stop(),r.isPresenting=!1,t.setPixelRatio(A),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){p=te,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return S===null&&D&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",w),l.addEventListener("inputsourceschange",I),C.xrCompatible!==!0&&await i.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(B),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Oe=null,Ye=null;C.depth&&(Ye=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=C.stencil?as:ya,Oe=C.stencil?zr:Ni);const $e={colorFormat:i.RGBA8,depthFormat:Ye,scaleFactor:c};S=this.getBinding(),v=S.createProjectionLayer($e),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new jn(v.textureWidth,v.textureHeight,{format:Ui,type:On,depthTexture:new Gr(v.textureWidth,v.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new jn(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:On,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function I(te){for(let _e=0;_e<te.removed.length;_e++){const Se=te.removed[_e],Oe=G.indexOf(Se);Oe>=0&&(G[Oe]=null,V[Oe].disconnect(Se))}for(let _e=0;_e<te.added.length;_e++){const Se=te.added[_e];let Oe=G.indexOf(Se);if(Oe===-1){for(let $e=0;$e<V.length;$e++)if($e>=G.length){G.push(Se),Oe=$e;break}else if(G[$e]===null){G[$e]=Se,Oe=$e;break}if(Oe===-1)break}const Ye=V[Oe];Ye&&Ye.connect(Se)}}const oe=new se,fe=new se;function Me(te,_e,Se){oe.setFromMatrixPosition(_e.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const Oe=oe.distanceTo(fe),Ye=_e.projectionMatrix.elements,$e=Se.projectionMatrix.elements,Kt=Ye[14]/(Ye[10]-1),gt=Ye[14]/(Ye[10]+1),ct=(Ye[9]+1)/Ye[5],yt=(Ye[9]-1)/Ye[5],Ie=(Ye[8]-1)/Ye[0],rt=($e[8]+1)/$e[0],H=Kt*Ie,Tt=Kt*rt,vt=Oe/(-Ie+rt),wt=vt*-Ie;if(_e.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(wt),te.translateZ(vt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ye[10]===-1)te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const je=Kt+vt,O=gt+vt,y=H-wt,Y=Tt+(Oe-wt),me=ct*gt/O*je,Ee=yt*gt/O*je;te.projectionMatrix.makePerspective(y,Y,me,Ee,je,O),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function P(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let _e=te.near,Se=te.far;E.texture!==null&&(E.depthNear>0&&(_e=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),ee.near=pe.near=U.near=_e,ee.far=pe.far=U.far=Se,(ae!==ee.near||ce!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),ae=ee.near,ce=ee.far),ee.layers.mask=te.layers.mask|6,U.layers.mask=ee.layers.mask&-5,pe.layers.mask=ee.layers.mask&-3;const Oe=te.parent,Ye=ee.cameras;P(ee,Oe);for(let $e=0;$e<Ye.length;$e++)P(Ye[$e],Oe);Ye.length===2?Me(ee,U,pe):ee.projectionMatrix.copy(U.projectionMatrix),j(te,ee,Oe)};function j(te,_e,Se){Se===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Lh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(ee)},this.getCameraTexture=function(te){return _[te]};let ve=null;function be(te,_e){if(x=_e.getViewerPose(h||d),T=_e,x!==null){const Se=x.views;M!==null&&(t.setRenderTargetFramebuffer(L,M.framebuffer),t.setRenderTarget(L));let Oe=!1;Se.length!==ee.cameras.length&&(ee.cameras.length=0,Oe=!0);for(let gt=0;gt<Se.length;gt++){const ct=Se[gt];let yt=null;if(M!==null)yt=M.getViewport(ct);else{const rt=S.getViewSubImage(v,ct);yt=rt.viewport,gt===0&&(t.setRenderTargetTextures(L,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(L))}let Ie=z[gt];Ie===void 0&&(Ie=new _i,Ie.layers.enable(gt),Ie.viewport=new on,z[gt]=Ie),Ie.matrix.fromArray(ct.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ct.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(yt.x,yt.y,yt.width,yt.height),gt===0&&(ee.matrix.copy(Ie.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Oe===!0&&ee.cameras.push(Ie)}const Ye=l.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){S=r.getBinding();const gt=S.getDepthInformation(Se[0]);gt&&gt.isValid&&gt.texture&&E.init(gt,l.renderState)}if(Ye&&Ye.includes("camera-access")&&D){t.state.unbindTexture(),S=r.getBinding();for(let gt=0;gt<Se.length;gt++){const ct=Se[gt].camera;if(ct){let yt=_[ct];yt||(yt=new l_,_[ct]=yt);const Ie=S.getCameraImage(ct);yt.sourceTexture=Ie}}}}for(let Se=0;Se<V.length;Se++){const Oe=G[Se],Ye=V[Se];Oe!==null&&Ye!==void 0&&Ye.update(Oe,_e,h||d)}ve&&ve(te,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),T=null}const Pe=new f_;Pe.setAnimationLoop(be),this.setAnimationLoop=function(te){ve=te},this.dispose=function(){}}}const Ls=new Ta,Fb=new gn;function zb(s,t){function i(E,_){E.matrixAutoUpdate===!0&&E.updateMatrix(),_.value.copy(E.matrix)}function r(E,_){_.color.getRGB(E.fogColor.value,c_(s)),_.isFog?(E.fogNear.value=_.near,E.fogFar.value=_.far):_.isFogExp2&&(E.fogDensity.value=_.density)}function l(E,_,C,N,L){_.isMeshBasicMaterial?c(E,_):_.isMeshLambertMaterial?(c(E,_),_.envMap&&(E.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(E,_),S(E,_)):_.isMeshPhongMaterial?(c(E,_),x(E,_),_.envMap&&(E.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(E,_),v(E,_),_.isMeshPhysicalMaterial&&M(E,_,L)):_.isMeshMatcapMaterial?(c(E,_),T(E,_)):_.isMeshDepthMaterial?c(E,_):_.isMeshDistanceMaterial?(c(E,_),D(E,_)):_.isMeshNormalMaterial?c(E,_):_.isLineBasicMaterial?(d(E,_),_.isLineDashedMaterial&&p(E,_)):_.isPointsMaterial?m(E,_,C,N):_.isSpriteMaterial?h(E,_):_.isShadowMaterial?(E.color.value.copy(_.color),E.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(E,_){E.opacity.value=_.opacity,_.color&&E.diffuse.value.copy(_.color),_.emissive&&E.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(E.map.value=_.map,i(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,i(_.alphaMap,E.alphaMapTransform)),_.bumpMap&&(E.bumpMap.value=_.bumpMap,i(_.bumpMap,E.bumpMapTransform),E.bumpScale.value=_.bumpScale,_.side===Tn&&(E.bumpScale.value*=-1)),_.normalMap&&(E.normalMap.value=_.normalMap,i(_.normalMap,E.normalMapTransform),E.normalScale.value.copy(_.normalScale),_.side===Tn&&E.normalScale.value.negate()),_.displacementMap&&(E.displacementMap.value=_.displacementMap,i(_.displacementMap,E.displacementMapTransform),E.displacementScale.value=_.displacementScale,E.displacementBias.value=_.displacementBias),_.emissiveMap&&(E.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,E.emissiveMapTransform)),_.specularMap&&(E.specularMap.value=_.specularMap,i(_.specularMap,E.specularMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest);const C=t.get(_),N=C.envMap,L=C.envMapRotation;N&&(E.envMap.value=N,Ls.copy(L),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),E.envMapRotation.value.setFromMatrix4(Fb.makeRotationFromEuler(Ls)),E.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=_.reflectivity,E.ior.value=_.ior,E.refractionRatio.value=_.refractionRatio),_.lightMap&&(E.lightMap.value=_.lightMap,E.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,E.lightMapTransform)),_.aoMap&&(E.aoMap.value=_.aoMap,E.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,E.aoMapTransform))}function d(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,_.map&&(E.map.value=_.map,i(_.map,E.mapTransform))}function p(E,_){E.dashSize.value=_.dashSize,E.totalSize.value=_.dashSize+_.gapSize,E.scale.value=_.scale}function m(E,_,C,N){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.size.value=_.size*C,E.scale.value=N*.5,_.map&&(E.map.value=_.map,i(_.map,E.uvTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,i(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function h(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.rotation.value=_.rotation,_.map&&(E.map.value=_.map,i(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,i(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function x(E,_){E.specular.value.copy(_.specular),E.shininess.value=Math.max(_.shininess,1e-4)}function S(E,_){_.gradientMap&&(E.gradientMap.value=_.gradientMap)}function v(E,_){E.metalness.value=_.metalness,_.metalnessMap&&(E.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,E.metalnessMapTransform)),E.roughness.value=_.roughness,_.roughnessMap&&(E.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,E.roughnessMapTransform)),_.envMap&&(E.envMapIntensity.value=_.envMapIntensity)}function M(E,_,C){E.ior.value=_.ior,_.sheen>0&&(E.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),E.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(E.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,E.sheenColorMapTransform)),_.sheenRoughnessMap&&(E.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,E.sheenRoughnessMapTransform))),_.clearcoat>0&&(E.clearcoat.value=_.clearcoat,E.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(E.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,E.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(E.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Tn&&E.clearcoatNormalScale.value.negate())),_.dispersion>0&&(E.dispersion.value=_.dispersion),_.iridescence>0&&(E.iridescence.value=_.iridescence,E.iridescenceIOR.value=_.iridescenceIOR,E.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(E.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,E.iridescenceMapTransform)),_.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),_.transmission>0&&(E.transmission.value=_.transmission,E.transmissionSamplerMap.value=C.texture,E.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(E.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,E.transmissionMapTransform)),E.thickness.value=_.thickness,_.thicknessMap&&(E.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=_.attenuationDistance,E.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(E.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(E.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=_.specularIntensity,E.specularColor.value.copy(_.specularColor),_.specularColorMap&&(E.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,E.specularColorMapTransform)),_.specularIntensityMap&&(E.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,_){_.matcap&&(E.matcap.value=_.matcap)}function D(E,_){const C=t.get(_).light;E.referencePosition.value.setFromMatrixPosition(C.matrixWorld),E.nearDistance.value=C.shadow.camera.near,E.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Hb(s,t,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const L=N.program;r.uniformBlockBinding(C,L)}function h(C,N){let L=l[C.id];L===void 0&&(T(C),L=x(C),l[C.id]=L,C.addEventListener("dispose",E));const V=N.program;r.updateUBOMapping(C,V);const G=t.render.frame;c[C.id]!==G&&(v(C),c[C.id]=G)}function x(C){const N=S();C.__bindingPointIndex=N;const L=s.createBuffer(),V=C.__size,G=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,V,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function S(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const N=l[C.id],L=C.uniforms,V=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let G=0,B=L.length;G<B;G++){const A=Array.isArray(L[G])?L[G]:[L[G]];for(let U=0,pe=A.length;U<pe;U++){const z=A[U];if(M(z,G,U,V)===!0){const ee=z.__offset,ae=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let q=0;q<ae.length;q++){const w=ae[q],I=D(w);typeof w=="number"||typeof w=="boolean"?(z.__data[0]=w,s.bufferSubData(s.UNIFORM_BUFFER,ee+ce,z.__data)):w.isMatrix3?(z.__data[0]=w.elements[0],z.__data[1]=w.elements[1],z.__data[2]=w.elements[2],z.__data[3]=0,z.__data[4]=w.elements[3],z.__data[5]=w.elements[4],z.__data[6]=w.elements[5],z.__data[7]=0,z.__data[8]=w.elements[6],z.__data[9]=w.elements[7],z.__data[10]=w.elements[8],z.__data[11]=0):(w.toArray(z.__data,ce),ce+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,N,L,V){const G=C.value,B=N+"_"+L;if(V[B]===void 0)return typeof G=="number"||typeof G=="boolean"?V[B]=G:V[B]=G.clone(),!0;{const A=V[B];if(typeof G=="number"||typeof G=="boolean"){if(A!==G)return V[B]=G,!0}else if(A.equals(G)===!1)return A.copy(G),!0}return!1}function T(C){const N=C.uniforms;let L=0;const V=16;for(let B=0,A=N.length;B<A;B++){const U=Array.isArray(N[B])?N[B]:[N[B]];for(let pe=0,z=U.length;pe<z;pe++){const ee=U[pe],ae=Array.isArray(ee.value)?ee.value:[ee.value];for(let ce=0,q=ae.length;ce<q;ce++){const w=ae[ce],I=D(w),oe=L%V,fe=oe%I.boundary,Me=oe+fe;L+=fe,Me!==0&&V-Me<I.storage&&(L+=V-Me),ee.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=L,L+=I.storage}}}const G=L%V;return G>0&&(L+=V-G),C.__size=L,C.__cache={},this}function D(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",C),N}function E(C){const N=C.target;N.removeEventListener("dispose",E);const L=d.indexOf(N.__bindingPointIndex);d.splice(L,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const C in l)s.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:h,dispose:_}}const Gb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function Vb(){return Gi===null&&(Gi=new PE(Gb,16,16,Hr,Ma),Gi.name="DFG_LUT",Gi.minFilter=tn,Gi.magFilter=tn,Gi.wrapS=_a,Gi.wrapT=_a,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class kb{constructor(t={}){const{canvas:i=dE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:v=!1,outputBufferType:M=On}=t;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const D=M,E=new Set([kh,Vh,Gh]),_=new Set([On,Ni,Yo,zr,zh,Hh]),C=new Uint32Array(4),N=new Int32Array(4);let L=null,V=null;const G=[],B=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let pe=!1;this._outputColorSpace=rn;let z=0,ee=0,ae=null,ce=-1,q=null;const w=new on,I=new on;let oe=null;const fe=new Ft(0);let Me=0,P=i.width,j=i.height,ve=1,be=null,Pe=null;const te=new on(0,0,P,j),_e=new on(0,0,P,j);let Se=!1;const Oe=new r_;let Ye=!1,$e=!1;const Kt=new gn,gt=new se,ct=new on,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function rt(){return ae===null?ve:1}let H=r;function Tt(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qc}`),i.addEventListener("webglcontextlost",Ge,!1),i.addEventListener("webglcontextrestored",it,!1),i.addEventListener("webglcontextcreationerror",zt,!1),H===null){const X="webgl2";if(H=Tt(X,R),H===null)throw Tt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ot("WebGLRenderer: "+R.message),R}let vt,wt,je,O,y,Y,me,Ee,de,We,De,Qe,tt,Ae,ye,Be,Ne,Fe,ft,W,Ce,Re,ze;function Te(){vt=new kT(H),vt.init(),Ce=new Nb(H,vt),wt=new PT(H,vt,t,Ce),je=new Ub(H,vt),wt.reversedDepthBuffer&&v&&je.buffers.depth.setReversed(!0),O=new qT(H),y=new vb,Y=new Lb(H,vt,je,y,wt,Ce,O),me=new VT(U),Ee=new QE(H),Re=new NT(H,Ee),de=new XT(H,Ee,O,Re),We=new jT(H,de,Ee,Re,O),Fe=new YT(H,wt,Y),ye=new IT(y),De=new gb(U,me,vt,wt,Re,ye),Qe=new zb(U,y),tt=new xb,Ae=new Ab(vt),Ne=new LT(U,me,je,We,T,m),Be=new wb(U,We,wt),ze=new Hb(H,O,wt,je),ft=new OT(H,vt,O),W=new WT(H,vt,O),O.programs=De.programs,U.capabilities=wt,U.extensions=vt,U.properties=y,U.renderLists=tt,U.shadowMap=Be,U.state=je,U.info=O}Te(),D!==On&&(A=new ZT(D,i.width,i.height,l,c));const ue=new Bb(U,H);this.xr=ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(P,j,!1))},this.getSize=function(R){return R.set(P,j)},this.setSize=function(R,X,re=!0){if(ue.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,j=X,i.width=Math.floor(R*ve),i.height=Math.floor(X*ve),re===!0&&(i.style.width=R+"px",i.style.height=X+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(P*ve,j*ve).floor()},this.setDrawingBufferSize=function(R,X,re){P=R,j=X,ve=re,i.width=Math.floor(R*re),i.height=Math.floor(X*re),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(D===On){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,X,re,ne){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,X,re,ne),je.viewport(w.copy(te).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,X,re,ne){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,X,re,ne),je.scissor(I.copy(_e).multiplyScalar(ve).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){je.setScissorTest(Se=R)},this.setOpaqueSort=function(R){be=R},this.setTransparentSort=function(R){Pe=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,re=!0){let ne=0;if(R){let Q=!1;if(ae!==null){const we=ae.texture.format;Q=E.has(we)}if(Q){const we=ae.texture.type,He=_.has(we),Ue=Ne.getClearColor(),qe=Ne.getClearAlpha(),Ze=Ue.r,nt=Ue.g,ot=Ue.b;He?(C[0]=Ze,C[1]=nt,C[2]=ot,C[3]=qe,H.clearBufferuiv(H.COLOR,0,C)):(N[0]=Ze,N[1]=nt,N[2]=ot,N[3]=qe,H.clearBufferiv(H.COLOR,0,N))}else ne|=H.COLOR_BUFFER_BIT}X&&(ne|=H.DEPTH_BUFFER_BIT),re&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ge,!1),i.removeEventListener("webglcontextrestored",it,!1),i.removeEventListener("webglcontextcreationerror",zt,!1),Ne.dispose(),tt.dispose(),Ae.dispose(),y.dispose(),me.dispose(),We.dispose(),Re.dispose(),ze.dispose(),De.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Hs),ue.removeEventListener("sessionend",Gs),Pi.stop()};function Ge(R){R.preventDefault(),k0("WebGLRenderer: Context Lost."),pe=!0}function it(){k0("WebGLRenderer: Context Restored."),pe=!1;const R=O.autoReset,X=Be.enabled,re=Be.autoUpdate,ne=Be.needsUpdate,Q=Be.type;Te(),O.autoReset=R,Be.enabled=X,Be.autoUpdate=re,Be.needsUpdate=ne,Be.type=Q}function zt(R){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ct(R){const X=R.target;X.removeEventListener("dispose",Ct),Pn(X)}function Pn(R){Si(R),y.remove(R)}function Si(R){const X=y.get(R).programs;X!==void 0&&(X.forEach(function(re){De.releaseProgram(re)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,re,ne,Q,we){X===null&&(X=yt);const He=Q.isMesh&&Q.matrixWorld.determinant()<0,Ue=nl(R,X,re,ne,Q);je.setMaterial(ne,He);let qe=re.index,Ze=1;if(ne.wireframe===!0){if(qe=de.getWireframeAttribute(re),qe===void 0)return;Ze=2}const nt=re.drawRange,ot=re.attributes.position;let Ve=nt.start*Ze,dt=(nt.start+nt.count)*Ze;we!==null&&(Ve=Math.max(Ve,we.start*Ze),dt=Math.min(dt,(we.start+we.count)*Ze)),qe!==null?(Ve=Math.max(Ve,0),dt=Math.min(dt,qe.count)):ot!=null&&(Ve=Math.max(Ve,0),dt=Math.min(dt,ot.count));const Zt=dt-Ve;if(Zt<0||Zt===1/0)return;Re.setup(Q,ne,Ue,re,qe);let Qt,Ut=ft;if(qe!==null&&(Qt=Ee.get(qe),Ut=W,Ut.setIndex(Qt)),Q.isMesh)ne.wireframe===!0?(je.setLineWidth(ne.wireframeLinewidth*rt()),Ut.setMode(H.LINES)):Ut.setMode(H.TRIANGLES);else if(Q.isLine){let _n=ne.linewidth;_n===void 0&&(_n=1),je.setLineWidth(_n*rt()),Q.isLineSegments?Ut.setMode(H.LINES):Q.isLineLoop?Ut.setMode(H.LINE_LOOP):Ut.setMode(H.LINE_STRIP)}else Q.isPoints?Ut.setMode(H.POINTS):Q.isSprite&&Ut.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Wc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const _n=Q._multiDrawStarts,Xe=Q._multiDrawCounts,In=Q._multiDrawCount,at=qe?Ee.get(qe).bytesPerElement:1,Bn=y.get(ne).currentProgram.getUniforms();for(let Zn=0;Zn<In;Zn++)Bn.setValue(H,"_gl_DrawID",Zn),Ut.render(_n[Zn]/at,Xe[Zn])}else if(Q.isInstancedMesh)Ut.renderInstances(Ve,Zt,Q.count);else if(re.isInstancedBufferGeometry){const _n=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xe=Math.min(re.instanceCount,_n);Ut.renderInstances(Ve,Zt,Xe)}else Ut.render(Ve,Zt)};function qr(R,X,re){R.transparent===!0&&R.side===oi&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,Aa(R,X,re),R.side=Ea,R.needsUpdate=!0,Aa(R,X,re),R.side=oi):Aa(R,X,re)}this.compile=function(R,X,re=null){re===null&&(re=R),V=Ae.get(re),V.init(X),B.push(V),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(V.pushLight(Q),Q.castShadow&&V.pushShadow(Q))}),R!==re&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(V.pushLight(Q),Q.castShadow&&V.pushShadow(Q))}),V.setupLights();const ne=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const we=Q.material;if(we)if(Array.isArray(we))for(let He=0;He<we.length;He++){const Ue=we[He];qr(Ue,re,Q),ne.add(Ue)}else qr(we,re,Q),ne.add(we)}),V=B.pop(),ne},this.compileAsync=function(R,X,re=null){const ne=this.compile(R,X,re);return new Promise(Q=>{function we(){if(ne.forEach(function(He){y.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){Q(R);return}setTimeout(we,10)}vt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let zs=null;function $o(R){zs&&zs(R)}function Hs(){Pi.stop()}function Gs(){Pi.start()}const Pi=new f_;Pi.setAnimationLoop($o),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){zs=R,ue.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},ue.addEventListener("sessionstart",Hs),ue.addEventListener("sessionend",Gs),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(pe===!0)return;const re=ue.enabled===!0&&ue.isPresenting===!0,ne=A!==null&&(ae===null||re)&&A.begin(U,ae);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(X),X=ue.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,X,ae),V=Ae.get(R,B.length),V.init(X),B.push(V),Kt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Oe.setFromProjectionMatrix(Kt,Wi,X.reversedDepth),$e=this.localClippingEnabled,Ye=ye.init(this.clippingPlanes,$e),L=tt.get(R,G.length),L.init(),G.push(L),ue.enabled===!0&&ue.isPresenting===!0){const He=U.xr.getDepthSensingMesh();He!==null&&Vs(He,X,-1/0,U.sortObjects)}Vs(R,X,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(be,Pe),Ie=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ie&&Ne.addToRenderList(L,R),this.info.render.frame++,Ye===!0&&ye.beginShadows();const Q=V.state.shadowsArray;if(Be.render(Q,R,X),Ye===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&A.hasRenderPass())===!1){const He=L.opaque,Ue=L.transmissive;if(V.setupLights(),X.isArrayCamera){const qe=X.cameras;if(Ue.length>0)for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const ot=qe[Ze];ln(He,Ue,R,ot)}Ie&&Ne.render(R);for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const ot=qe[Ze];Ei(L,R,ot,ot.viewport)}}else Ue.length>0&&ln(He,Ue,R,X),Ie&&Ne.render(R),Ei(L,R,X)}ae!==null&&ee===0&&(Y.updateMultisampleRenderTarget(ae),Y.updateRenderTargetMipmap(ae)),ne&&A.end(U),R.isScene===!0&&R.onAfterRender(U,R,X),Re.resetDefaultState(),ce=-1,q=null,B.pop(),B.length>0?(V=B[B.length-1],Ye===!0&&ye.setGlobalState(U.clippingPlanes,V.state.camera)):V=null,G.pop(),G.length>0?L=G[G.length-1]:L=null};function Vs(R,X,re,ne){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)V.pushLight(R),R.castShadow&&V.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Oe.intersectsSprite(R)){ne&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Kt);const He=We.update(R),Ue=R.material;Ue.visible&&L.push(R,He,Ue,re,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Oe.intersectsObject(R))){const He=We.update(R),Ue=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ct.copy(He.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(Kt)),Array.isArray(Ue)){const qe=He.groups;for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const ot=qe[Ze],Ve=Ue[ot.materialIndex];Ve&&Ve.visible&&L.push(R,He,Ve,re,ct.z,ot)}}else Ue.visible&&L.push(R,He,Ue,re,ct.z,null)}}const we=R.children;for(let He=0,Ue=we.length;He<Ue;He++)Vs(we[He],X,re,ne)}function Ei(R,X,re,ne){const{opaque:Q,transmissive:we,transparent:He}=R;V.setupLightsView(re),Ye===!0&&ye.setGlobalState(U.clippingPlanes,re),ne&&je.viewport(w.copy(ne)),Q.length>0&&vn(Q,X,re),we.length>0&&vn(we,X,re),He.length>0&&vn(He,X,re),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function ln(R,X,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[ne.id]===void 0){const Ve=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[ne.id]=new jn(1,1,{generateMipmaps:!0,type:Ve?Ma:On,minFilter:Is,samples:wt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const we=V.state.transmissionRenderTarget[ne.id],He=ne.viewport||w;we.setSize(He.z*U.transmissionResolutionScale,He.w*U.transmissionResolutionScale);const Ue=U.getRenderTarget(),qe=U.getActiveCubeFace(),Ze=U.getActiveMipmapLevel();U.setRenderTarget(we),U.getClearColor(fe),Me=U.getClearAlpha(),Me<1&&U.setClearColor(16777215,.5),U.clear(),Ie&&Ne.render(re);const nt=U.toneMapping;U.toneMapping=qi;const ot=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),V.setupLightsView(ne),Ye===!0&&ye.setGlobalState(U.clippingPlanes,ne),vn(R,re,ne),Y.updateMultisampleRenderTarget(we),Y.updateRenderTargetMipmap(we),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let dt=0,Zt=X.length;dt<Zt;dt++){const Qt=X[dt],{object:Ut,geometry:_n,material:Xe,group:In}=Qt;if(Xe.side===oi&&Ut.layers.test(ne.layers)){const at=Xe.side;Xe.side=Tn,Xe.needsUpdate=!0,ji(Ut,re,ne,_n,Xe,In),Xe.side=at,Xe.needsUpdate=!0,Ve=!0}}Ve===!0&&(Y.updateMultisampleRenderTarget(we),Y.updateRenderTargetMipmap(we))}U.setRenderTarget(Ue,qe,Ze),U.setClearColor(fe,Me),ot!==void 0&&(ne.viewport=ot),U.toneMapping=nt}function vn(R,X,re){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,we=R.length;Q<we;Q++){const He=R[Q],{object:Ue,geometry:qe,group:Ze}=He;let nt=He.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),Ue.layers.test(re.layers)&&ji(Ue,X,re,qe,nt,Ze)}}function ji(R,X,re,ne,Q,we){R.onBeforeRender(U,X,re,ne,Q,we),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(U,X,re,ne,R,we),Q.transparent===!0&&Q.side===oi&&Q.forceSinglePass===!1?(Q.side=Tn,Q.needsUpdate=!0,U.renderBufferDirect(re,X,ne,Q,R,we),Q.side=Ea,Q.needsUpdate=!0,U.renderBufferDirect(re,X,ne,Q,R,we),Q.side=oi):U.renderBufferDirect(re,X,ne,Q,R,we),R.onAfterRender(U,X,re,ne,Q,we)}function Aa(R,X,re){X.isScene!==!0&&(X=yt);const ne=y.get(R),Q=V.state.lights,we=V.state.shadowsArray,He=Q.state.version,Ue=De.getParameters(R,Q.state,we,X,re),qe=De.getProgramCacheKey(Ue);let Ze=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const nt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=me.get(R.envMap||ne.environment,nt),ne.envMapRotation=ne.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",Ct),Ze=new Map,ne.programs=Ze);let ot=Ze.get(qe);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===He)return tl(R,Ue),ot}else Ue.uniforms=De.getUniforms(R),R.onBeforeCompile(Ue,U),ot=De.acquireProgram(Ue,qe),Ze.set(qe,ot),ne.uniforms=Ue.uniforms;const Ve=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=ye.uniform),tl(R,Ue),ne.needsLights=Yr(R),ne.lightsStateVersion=He,ne.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=ot,ne.uniformsList=null,ot}function el(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function tl(R,X){const re=y.get(R);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function nl(R,X,re,ne,Q){X.isScene!==!0&&(X=yt),Y.resetTextureUnits();const we=X.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ue=ae===null?U.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:rs,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ze=me.get(ne.envMap||He,qe),nt=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ve=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,Zt=!!re.morphAttributes.color;let Qt=qi;ne.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Qt=U.toneMapping);const Ut=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,_n=Ut!==void 0?Ut.length:0,Xe=y.get(ne),In=V.state.lights;if(Ye===!0&&($e===!0||R!==q)){const un=R===q&&ne.id===ce;ye.setState(ne,R,un)}let at=!1;ne.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==In.state.version||Xe.outputColorSpace!==Ue||Q.isBatchedMesh&&Xe.batching===!1||!Q.isBatchedMesh&&Xe.batching===!0||Q.isBatchedMesh&&Xe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xe.instancing===!1||!Q.isInstancedMesh&&Xe.instancing===!0||Q.isSkinnedMesh&&Xe.skinning===!1||!Q.isSkinnedMesh&&Xe.skinning===!0||Q.isInstancedMesh&&Xe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xe.instancingMorph===!1&&Q.morphTexture!==null||Xe.envMap!==Ze||ne.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ye.numPlanes||Xe.numIntersection!==ye.numIntersection)||Xe.vertexAlphas!==nt||Xe.vertexTangents!==ot||Xe.morphTargets!==Ve||Xe.morphNormals!==dt||Xe.morphColors!==Zt||Xe.toneMapping!==Qt||Xe.morphTargetsCount!==_n)&&(at=!0):(at=!0,Xe.__version=ne.version);let Bn=Xe.currentProgram;at===!0&&(Bn=Aa(ne,X,Q));let Zn=!1,Mi=!1,Qn=!1;const Bt=Bn.getUniforms(),cn=Xe.uniforms;if(je.useProgram(Bn.program)&&(Zn=!0,Mi=!0,Qn=!0),ne.id!==ce&&(ce=ne.id,Mi=!0),Zn||q!==R){je.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(H,"projectionMatrix",R.projectionMatrix),Bt.setValue(H,"viewMatrix",R.matrixWorldInverse);const yi=Bt.map.cameraPosition;yi!==void 0&&yi.setValue(H,gt.setFromMatrixPosition(R.matrixWorld)),wt.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,Mi=!0,Qn=!0)}if(Xe.needsLights&&(In.state.directionalShadowMap.length>0&&Bt.setValue(H,"directionalShadowMap",In.state.directionalShadowMap,Y),In.state.spotShadowMap.length>0&&Bt.setValue(H,"spotShadowMap",In.state.spotShadowMap,Y),In.state.pointShadowMap.length>0&&Bt.setValue(H,"pointShadowMap",In.state.pointShadowMap,Y)),Q.isSkinnedMesh){Bt.setOptional(H,Q,"bindMatrix"),Bt.setOptional(H,Q,"bindMatrixInverse");const un=Q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Bt.setValue(H,"boneTexture",un.boneTexture,Y))}Q.isBatchedMesh&&(Bt.setOptional(H,Q,"batchingTexture"),Bt.setValue(H,"batchingTexture",Q._matricesTexture,Y),Bt.setOptional(H,Q,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",Q._indirectTexture,Y),Bt.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Bt.setValue(H,"batchingColorTexture",Q._colorsTexture,Y));const Fn=re.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Fe.update(Q,re,Bn),(Mi||Xe.receiveShadow!==Q.receiveShadow)&&(Xe.receiveShadow=Q.receiveShadow,Bt.setValue(H,"receiveShadow",Q.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(cn.envMapIntensity.value=X.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=Vb()),Mi&&(Bt.setValue(H,"toneMappingExposure",U.toneMappingExposure),Xe.needsLights&&cs(cn,Qn),we&&ne.fog===!0&&Qe.refreshFogUniforms(cn,we),Qe.refreshMaterialUniforms(cn,ne,ve,j,V.state.transmissionRenderTarget[R.id]),Hc.upload(H,el(Xe),cn,Y)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hc.upload(H,el(Xe),cn,Y),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Bt.setValue(H,"center",Q.center),Bt.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Bt.setValue(H,"normalMatrix",Q.normalMatrix),Bt.setValue(H,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const un=ne.uniformsGroups;for(let yi=0,Ki=un.length;yi<Ki;yi++){const ks=un[yi];ze.update(ks,Bn),ze.bind(ks,Bn)}}return Bn}function cs(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Yr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(R,X,re){const ne=y.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),y.get(R.texture).__webglTexture=X,y.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const re=y.get(R);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const ba=H.createFramebuffer();this.setRenderTarget=function(R,X=0,re=0){ae=R,z=X,ee=re;let ne=null,Q=!1,we=!1;if(R){const Ue=y.get(R);if(Ue.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(H.FRAMEBUFFER,Ue.__webglFramebuffer),w.copy(R.viewport),I.copy(R.scissor),oe=R.scissorTest,je.viewport(w),je.scissor(I),je.setScissorTest(oe),ce=-1;return}else if(Ue.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Ue.__hasExternalTextures)Y.rebindTextures(R,y.get(R.texture).__webglTexture,y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const nt=R.depthTexture;if(Ue.__boundDepthTexture!==nt){if(nt!==null&&y.has(nt)&&(R.width!==nt.image.width||R.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(we=!0);const Ze=y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?ne=Ze[X][re]:ne=Ze[X],Q=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?ne=y.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[re]:ne=Ze,w.copy(R.viewport),I.copy(R.scissor),oe=R.scissorTest}else w.copy(te).multiplyScalar(ve).floor(),I.copy(_e).multiplyScalar(ve).floor(),oe=Se;if(re!==0&&(ne=ba),je.bindFramebuffer(H.FRAMEBUFFER,ne)&&je.drawBuffers(R,ne),je.viewport(w),je.scissor(I),je.setScissorTest(oe),Q){const Ue=y.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,re)}else if(we){const Ue=X;for(let qe=0;qe<R.textures.length;qe++){const Ze=y.get(R.textures[qe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,re,Ue)}}else if(R!==null&&re!==0){const Ue=y.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ue.__webglTexture,re)}ce=-1},this.readRenderTargetPixels=function(R,X,re,ne,Q,we,He,Ue=0){if(!(R&&R.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){je.bindFramebuffer(H.FRAMEBUFFER,qe);try{const Ze=R.textures[Ue],nt=Ze.format,ot=Ze.type;if(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ue),!wt.textureFormatReadable(nt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(ot)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ne&&re>=0&&re<=R.height-Q&&H.readPixels(X,re,ne,Q,Ce.convert(nt),Ce.convert(ot),we)}finally{const Ze=ae!==null?y.get(ae).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,X,re,ne,Q,we,He,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe)if(X>=0&&X<=R.width-ne&&re>=0&&re<=R.height-Q){je.bindFramebuffer(H.FRAMEBUFFER,qe);const Ze=R.textures[Ue],nt=Ze.format,ot=Ze.type;if(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ue),!wt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.bufferData(H.PIXEL_PACK_BUFFER,we.byteLength,H.STREAM_READ),H.readPixels(X,re,ne,Q,Ce.convert(nt),Ce.convert(ot),0);const dt=ae!==null?y.get(ae).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,dt);const Zt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await hE(H,Zt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,we),H.deleteBuffer(Ve),H.deleteSync(Zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,re=0){const ne=Math.pow(2,-re),Q=Math.floor(R.image.width*ne),we=Math.floor(R.image.height*ne),He=X!==null?X.x:0,Ue=X!==null?X.y:0;Y.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,He,Ue,Q,we),je.unbindTexture()};const Ra=H.createFramebuffer(),us=H.createFramebuffer();this.copyTextureToTexture=function(R,X,re=null,ne=null,Q=0,we=0){let He,Ue,qe,Ze,nt,ot,Ve,dt,Zt;const Qt=R.isCompressedTexture?R.mipmaps[we]:R.image;if(re!==null)He=re.max.x-re.min.x,Ue=re.max.y-re.min.y,qe=re.isBox3?re.max.z-re.min.z:1,Ze=re.min.x,nt=re.min.y,ot=re.isBox3?re.min.z:0;else{const cn=Math.pow(2,-Q);He=Math.floor(Qt.width*cn),Ue=Math.floor(Qt.height*cn),R.isDataArrayTexture?qe=Qt.depth:R.isData3DTexture?qe=Math.floor(Qt.depth*cn):qe=1,Ze=0,nt=0,ot=0}ne!==null?(Ve=ne.x,dt=ne.y,Zt=ne.z):(Ve=0,dt=0,Zt=0);const Ut=Ce.convert(X.format),_n=Ce.convert(X.type);let Xe;X.isData3DTexture?(Y.setTexture3D(X,0),Xe=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Y.setTexture2DArray(X,0),Xe=H.TEXTURE_2D_ARRAY):(Y.setTexture2D(X,0),Xe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const In=H.getParameter(H.UNPACK_ROW_LENGTH),at=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Bn=H.getParameter(H.UNPACK_SKIP_PIXELS),Zn=H.getParameter(H.UNPACK_SKIP_ROWS),Mi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Qt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Qt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ze),H.pixelStorei(H.UNPACK_SKIP_ROWS,nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ot);const Qn=R.isDataArrayTexture||R.isData3DTexture,Bt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const cn=y.get(R),Fn=y.get(X),un=y.get(cn.__renderTarget),yi=y.get(Fn.__renderTarget);je.bindFramebuffer(H.READ_FRAMEBUFFER,un.__webglFramebuffer),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ki=0;Ki<qe;Ki++)Qn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,y.get(R).__webglTexture,Q,ot+Ki),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,y.get(X).__webglTexture,we,Zt+Ki)),H.blitFramebuffer(Ze,nt,He,Ue,Ve,dt,He,Ue,H.DEPTH_BUFFER_BIT,H.NEAREST);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||y.has(R)){const cn=y.get(R),Fn=y.get(X);je.bindFramebuffer(H.READ_FRAMEBUFFER,Ra),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,us);for(let un=0;un<qe;un++)Qn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,cn.__webglTexture,Q,ot+un):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,cn.__webglTexture,Q),Bt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fn.__webglTexture,we,Zt+un):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fn.__webglTexture,we),Q!==0?H.blitFramebuffer(Ze,nt,He,Ue,Ve,dt,He,Ue,H.COLOR_BUFFER_BIT,H.NEAREST):Bt?H.copyTexSubImage3D(Xe,we,Ve,dt,Zt+un,Ze,nt,He,Ue):H.copyTexSubImage2D(Xe,we,Ve,dt,Ze,nt,He,Ue);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bt?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Xe,we,Ve,dt,Zt,He,Ue,qe,Ut,_n,Qt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,we,Ve,dt,Zt,He,Ue,qe,Ut,Qt.data):H.texSubImage3D(Xe,we,Ve,dt,Zt,He,Ue,qe,Ut,_n,Qt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,we,Ve,dt,He,Ue,Ut,_n,Qt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,we,Ve,dt,Qt.width,Qt.height,Ut,Qt.data):H.texSubImage2D(H.TEXTURE_2D,we,Ve,dt,He,Ue,Ut,_n,Qt);H.pixelStorei(H.UNPACK_ROW_LENGTH,In),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Bn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Zn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Mi),we===0&&X.generateMipmaps&&H.generateMipmap(Xe),je.unbindTexture()},this.initRenderTarget=function(R){y.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){z=0,ee=0,ae=null,je.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}}var Hd=1/1e3,Xb=1e3,Wb=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(s){typeof document<"u"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=s)}get delta(){return this._delta*Hd}get fixedDelta(){return this._fixedDelta*Hd}set fixedDelta(s){this._fixedDelta=s*Xb}get elapsed(){return this._elapsed*Hd}update(s){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(s!==void 0?s:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(s){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},qb=(()=>{const s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),i=new Yi;return i.setAttribute("position",new xi(s,3)),i.setAttribute("uv",new xi(t,2)),i})(),ls=class Ih{static get fullscreenGeometry(){return qb}constructor(t="Pass",i=new Nh,r=new jc){this.name=t,this.renderer=null,this.scene=i,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(t){if(this.rtt===t){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!t}}set mainScene(t){}set mainCamera(t){}setRenderer(t){this.renderer=t}isEnabled(){return this.enabled}setEnabled(t){this.enabled=t}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(t){let i=this.screen;i!==null?i.material=t:(i=new Oi(Ih.fullscreenGeometry,t),i.frustumCulled=!1,this.scene===null&&(this.scene=new Nh),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(t){this.fullscreenMaterial=t}getDepthTexture(){return null}setDepthTexture(t,i=jo){}render(t,i,r,l,c){throw new Error("Render method not implemented!")}setSize(t,i){}initialize(t,i,r){}dispose(){for(const t of Object.keys(this)){const i=this[t];(i instanceof jn||i instanceof Xr||i instanceof An||i instanceof Ih)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Yb=class extends ls{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(s,t,i,r,l){const c=s.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},jb=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Kb="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Zb=class extends Kn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new sn(null),depthBuffer:new sn(null),channelWeights:new sn(null),opacity:new sn(1)},blending:Li,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jb,vertexShader:Kb}),this.depthFunc=Gc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(s){const t=s!==null;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){const t=s!==null;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=s}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(s){this.colorSpaceConversion!==s&&(s?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(s){s!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=s):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(s){this.uniforms.inputBuffer.value=s}getOpacity(s){return this.uniforms.opacity.value}setOpacity(s){this.uniforms.opacity.value=s}},Qb=class extends ls{constructor(s,t=!0){super("CopyPass"),this.fullscreenMaterial=new Zb,this.needsSwap=!1,this.renderTarget=s,s===void 0&&(this.renderTarget=new jn(1,1,{minFilter:tn,magFilter:tn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(s){this.autoResize=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(s){this.autoResize=s}render(s,t,i,r,l){this.fullscreenMaterial.inputBuffer=t.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,t){this.autoResize&&this.renderTarget.setSize(s,t)}initialize(s,t,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==On?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":s!==null&&s.outputColorSpace===rn&&(this.renderTarget.texture.colorSpace=rn))}},wv=new Ft,v_=class extends ls{constructor(s=!0,t=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=s,this.depth=t,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(s,t,i){this.color=s,this.depth=t,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(s){this.overrideClearColor=s}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(s){this.overrideClearAlpha=s}render(s,t,i,r,l){const c=this.overrideClearColor,d=this.overrideClearAlpha,p=s.getClearAlpha(),m=c!==null,h=d>=0;m?(s.getClearColor(wv),s.setClearColor(c,h?d:p)):h&&s.setClearAlpha(d),s.setRenderTarget(this.renderToScreen?null:t),s.clear(this.color,this.depth,this.stencil),m?s.setClearColor(wv,p):h&&s.setClearAlpha(p)}},Jb=class extends ls{constructor(s,t){super("MaskPass",s,t),this.needsSwap=!1,this.clearPass=new v_(!1,!1,!0),this.inverse=!1}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get inverted(){return this.inverse}set inverted(s){this.inverse=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(s){this.inverted=s}render(s,t,i,r,l){const c=s.getContext(),d=s.state.buffers,p=this.scene,m=this.camera,h=this.clearPass,x=this.inverted?0:1,S=1-x;d.color.setMask(!1),d.depth.setMask(!1),d.color.setLocked(!0),d.depth.setLocked(!0),d.stencil.setTest(!0),d.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),d.stencil.setFunc(c.ALWAYS,x,4294967295),d.stencil.setClear(S),d.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?h.render(s,null):(h.render(s,t),h.render(s,i))),this.renderToScreen?(s.setRenderTarget(null),s.render(p,m)):(s.setRenderTarget(t),s.render(p,m),s.setRenderTarget(i),s.render(p,m)),d.color.setLocked(!1),d.depth.setLocked(!1),d.stencil.setLocked(!1),d.stencil.setFunc(c.EQUAL,1,4294967295),d.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),d.stencil.setLocked(!0)}},Uv=class{constructor(s=null,{depthBuffer:t=!0,stencilBuffer:i=!1,multisampling:r=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,i,l,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Qb,this.depthTexture=null,this.passes=[],this.timer=new Wb,this.autoRenderToScreen=!0,this.setRenderer(s)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(s){const t=this.inputBuffer,i=this.multisampling;i>0&&s>0?(this.inputBuffer.samples=s,this.outputBuffer.samples=s,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==s&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,s),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(s){if(this.renderer=s,s!==null){const t=s.getSize(new _t),i=s.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===On&&s.outputColorSpace===rn&&(this.inputBuffer.texture.colorSpace=rn,this.outputBuffer.texture.colorSpace=rn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),s.autoClear=!1,this.setSize(t.width,t.height);for(const l of this.passes)l.initialize(s,i,r)}}replaceRenderer(s,t=!0){const i=this.renderer,r=i.domElement.parentNode;return this.setRenderer(s),t&&r!==null&&(r.removeChild(i.domElement),r.appendChild(s.domElement)),i}createDepthTexture(){const s=this.depthTexture=new Gr;return this.inputBuffer.depthTexture=s,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(s.format=as,s.type=zr):s.type=Ni,s}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const s of this.passes)s.setDepthTexture(null)}}createBuffer(s,t,i,r){const l=this.renderer,c=l===null?new _t:l.getDrawingBufferSize(new _t),d={minFilter:tn,magFilter:tn,stencilBuffer:t,depthBuffer:s,type:i},p=new jn(c.width,c.height,d);return r>0&&(p.samples=r),i===On&&l!==null&&l.outputColorSpace===rn&&(p.texture.colorSpace=rn),p.texture.name="EffectComposer.Buffer",p.texture.generateMipmaps=!1,p}setMainScene(s){for(const t of this.passes)t.mainScene=s}setMainCamera(s){for(const t of this.passes)t.mainCamera=s}addPass(s,t){const i=this.passes,r=this.renderer,l=r.getDrawingBufferSize(new _t),c=r.getContext().getContextAttributes().alpha,d=this.inputBuffer.texture.type;if(s.setRenderer(r),s.setSize(l.width,l.height),s.initialize(r,c,d),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),t!==void 0?i.splice(t,0,s):i.push(s),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const p=this.createDepthTexture();for(s of i)s.setDepthTexture(p)}else s.setDepthTexture(this.depthTexture)}removePass(s){const t=this.passes,i=t.indexOf(s);if(i!==-1&&t.splice(i,1).length>0){if(this.depthTexture!==null){const c=(p,m)=>p||m.needsDepthTexture;t.reduce(c,!1)||(s.getDepthTexture()===this.depthTexture&&s.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===t.length&&(s.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){const s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),this.passes=[])}render(s){const t=this.renderer,i=this.copyPass;let r=this.inputBuffer,l=this.outputBuffer,c=!1,d,p,m;s===void 0&&(this.timer.update(),s=this.timer.getDelta());for(const h of this.passes)h.enabled&&(h.render(t,r,l,s,c),h.needsSwap&&(c&&(i.renderToScreen=h.renderToScreen,d=t.getContext(),p=t.state.buffers.stencil,p.setFunc(d.NOTEQUAL,1,4294967295),i.render(t,r,l,s,c),p.setFunc(d.EQUAL,1,4294967295)),m=r,r=l,l=m),h instanceof Jb?c=!0:h instanceof Yb&&(c=!1))}setSize(s,t,i){const r=this.renderer,l=r.getSize(new _t);(s===void 0||t===void 0)&&(s=l.width,t=l.height),(l.width!==s||l.height!==t)&&r.setSize(s,t,i);const c=r.getDrawingBufferSize(new _t);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const d of this.passes)d.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const s of this.passes)s.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),ls.fullscreenGeometry.dispose()}},Bs={NONE:0,DEPTH:1,CONVOLUTION:2},Pt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},$b=class{constructor(){this.shaderParts=new Map([[Pt.FRAGMENT_HEAD,null],[Pt.FRAGMENT_MAIN_UV,null],[Pt.FRAGMENT_MAIN_IMAGE,null],[Pt.VERTEX_HEAD,null],[Pt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Bs.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=rs}},Gd=!1,Lv=class{constructor(s=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(s),this.meshCount=0,this.replaceMaterial=t=>{if(t.isMesh){let i;if(t.material.flatShading)switch(t.material.side){case oi:i=this.materialsFlatShadedDoubleSide;break;case Tn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(t.material.side){case oi:i=this.materialsDoubleSide;break;case Tn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(t,t.material),t.isSkinnedMesh?t.material=i[2]:t.isInstancedMesh?t.material=i[1]:t.material=i[0],++this.meshCount}}}cloneMaterial(s){if(!(s instanceof Kn))return s.clone();const t=s.uniforms,i=new Map;for(const l in t){const c=t[l].value;c.isRenderTargetTexture&&(t[l].value=null,i.set(l,c))}const r=s.clone();for(const l of i)t[l[0]].value=l[1],r.uniforms[l[0]].value=l[1];return r}setMaterial(s){if(this.disposeMaterials(),this.material=s,s!==null){const t=this.materials=[this.cloneMaterial(s),this.cloneMaterial(s),this.cloneMaterial(s)];for(const i of t)i.uniforms=Object.assign({},s.uniforms),i.side=Ea;t[2].skinning=!0,this.materialsBackSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=Tn,r}),this.materialsDoubleSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.side=oi,r}),this.materialsFlatShaded=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=Tn,r}),this.materialsFlatShadedDoubleSide=t.map(i=>{const r=this.cloneMaterial(i);return r.uniforms=Object.assign({},s.uniforms),r.flatShading=!0,r.side=oi,r})}}render(s,t,i){const r=s.shadowMap.enabled;if(s.shadowMap.enabled=!1,Gd){const l=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),s.render(t,i);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=t.overrideMaterial;t.overrideMaterial=this.material,s.render(t,i),t.overrideMaterial=l}s.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const s=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const t of s)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Gd}static set workaroundEnabled(s){Gd=s}},bt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},e1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",t1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",n1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",i1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",a1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",s1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",r1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",o1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",l1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",c1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",u1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",f1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",d1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",h1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",p1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",m1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",g1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",v1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",x1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",S1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",E1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",M1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",y1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",T1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",A1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",b1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",R1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",C1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",D1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",w1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",U1="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",L1=new Map([[bt.ADD,e1],[bt.ALPHA,t1],[bt.AVERAGE,n1],[bt.COLOR,i1],[bt.COLOR_BURN,a1],[bt.COLOR_DODGE,s1],[bt.DARKEN,r1],[bt.DIFFERENCE,o1],[bt.DIVIDE,l1],[bt.DST,null],[bt.EXCLUSION,c1],[bt.HARD_LIGHT,u1],[bt.HARD_MIX,f1],[bt.HUE,d1],[bt.INVERT,h1],[bt.INVERT_RGB,p1],[bt.LIGHTEN,m1],[bt.LINEAR_BURN,g1],[bt.LINEAR_DODGE,v1],[bt.LINEAR_LIGHT,_1],[bt.LUMINOSITY,x1],[bt.MULTIPLY,S1],[bt.NEGATION,E1],[bt.NORMAL,M1],[bt.OVERLAY,y1],[bt.PIN_LIGHT,T1],[bt.REFLECT,A1],[bt.SATURATION,b1],[bt.SCREEN,R1],[bt.SOFT_LIGHT,C1],[bt.SRC,D1],[bt.SUBTRACT,w1],[bt.VIVID_LIGHT,U1]]),N1=class extends os{constructor(s,t=1){super(),this._blendFunction=s,this.opacity=new sn(t)}getOpacity(){return this.opacity.value}setOpacity(s){this.opacity.value=s}get blendFunction(){return this._blendFunction}set blendFunction(s){this._blendFunction=s,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(s){this.blendFunction=s}getShaderCode(){return L1.get(this.blendFunction)}},__=class extends os{constructor(s,t,{attributes:i=Bs.NONE,blendFunction:r=bt.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:d=null,vertexShader:p=null}={}){super(),this.name=s,this.renderer=null,this.attributes=i,this.fragmentShader=t,this.vertexShader=p,this.defines=l,this.uniforms=c,this.extensions=d,this.blendMode=new N1(r),this.blendMode.addEventListener("change",m=>this.setChanged()),this._inputColorSpace=rs,this._outputColorSpace=ki}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(s){this._inputColorSpace=s,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(s){this._outputColorSpace=s,this.setChanged()}set mainScene(s){}set mainCamera(s){}getName(){return this.name}setRenderer(s){this.renderer=s}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(s){this.attributes=s,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(s){this.fragmentShader=s,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(s){this.vertexShader=s,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(s,t=jo){}update(s,t,i){}setSize(s,t){}initialize(s,t,i){}dispose(){for(const s of Object.keys(this)){const t=this[s];(t instanceof jn||t instanceof Xr||t instanceof An||t instanceof ls)&&this[s].dispose()}}},Nv=class extends ls{constructor(s,t,i=null){super("RenderPass",s,t),this.needsSwap=!1,this.clearPass=new v_,this.overrideMaterialManager=i===null?null:new Lv(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get renderToScreen(){return super.renderToScreen}set renderToScreen(s){super.renderToScreen=s,this.clearPass.renderToScreen=s}get overrideMaterial(){const s=this.overrideMaterialManager;return s!==null?s.material:null}set overrideMaterial(s){const t=this.overrideMaterialManager;s!==null?t!==null?t.setMaterial(s):this.overrideMaterialManager=new Lv(s):t!==null&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(s){this.overrideMaterial=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getSelection(){return this.selection}setSelection(s){this.selection=s}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(s){this.ignoreBackground=s}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(s){this.skipShadowMapUpdate=s}getClearPass(){return this.clearPass}render(s,t,i,r,l){const c=this.scene,d=this.camera,p=this.selection,m=d.layers.mask,h=c.background,x=s.shadowMap.autoUpdate,S=this.renderToScreen?null:t;p!==null&&d.layers.set(p.getLayer()),this.skipShadowMapUpdate&&(s.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(s,t),s.setRenderTarget(S),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(s,c,d):s.render(c,d),d.layers.mask=m,c.background=h,s.shadowMap.autoUpdate=x}},O1=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,P1="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",I1=class extends Kn{constructor(s,t,i,r,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:qc.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new sn(null),depthBuffer:new sn(null),resolution:new sn(new _t),texelSize:new sn(new _t),cameraNear:new sn(.3),cameraFar:new sn(1e3),aspect:new sn(1),time:new sn(0)},blending:Li,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),s&&this.setShaderParts(s),t&&this.setDefines(t),i&&this.setUniforms(i),this.copyCameraSettings(r)}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){this.uniforms.depthBuffer.value=s}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}setDepthBuffer(s,t=jo){this.depthBuffer=s,this.depthPacking=t}setShaderData(s){this.setShaderParts(s.shaderParts),this.setDefines(s.defines),this.setUniforms(s.uniforms),this.setExtensions(s.extensions)}setShaderParts(s){return this.fragmentShader=O1.replace(Pt.FRAGMENT_HEAD,s.get(Pt.FRAGMENT_HEAD)||"").replace(Pt.FRAGMENT_MAIN_UV,s.get(Pt.FRAGMENT_MAIN_UV)||"").replace(Pt.FRAGMENT_MAIN_IMAGE,s.get(Pt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=P1.replace(Pt.VERTEX_HEAD,s.get(Pt.VERTEX_HEAD)||"").replace(Pt.VERTEX_MAIN_SUPPORT,s.get(Pt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(s){for(const t of s.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(s){for(const t of s.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(s){this.extensions={};for(const t of s)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(s){this.encodeOutput!==s&&(s?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(s){return this.encodeOutput}setOutputEncodingEnabled(s){this.encodeOutput=s}get time(){return this.uniforms.time.value}set time(s){this.uniforms.time.value=s}setDeltaTime(s){this.uniforms.time.value+=s}adoptCameraSettings(s){this.copyCameraSettings(s)}copyCameraSettings(s){s&&(this.uniforms.cameraNear.value=s.near,this.uniforms.cameraFar.value=s.far,s instanceof _i?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(s,t){const i=this.uniforms;i.resolution.value.set(s,t),i.texelSize.value.set(1/s,1/t),i.aspect.value=s/t}static get Section(){return Pt}};function Ov(s,t,i){for(const r of t){const l="$1"+s+r.charAt(0).toUpperCase()+r.slice(1),c=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const d of i.entries())d[1]!==null&&i.set(d[0],d[1].replace(c,l))}}function B1(s,t,i){let r=t.getFragmentShader(),l=t.getVertexShader();const c=r!==void 0&&/mainImage/.test(r),d=r!==void 0&&/mainUv/.test(r);if(i.attributes|=t.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${t.name})`);if(d&&(i.attributes&Bs.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!c&&!d)throw new Error(`Could not find mainImage or mainUv function (${t.name})`);{const p=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=i.shaderParts;let h=m.get(Pt.FRAGMENT_HEAD)||"",x=m.get(Pt.FRAGMENT_MAIN_UV)||"",S=m.get(Pt.FRAGMENT_MAIN_IMAGE)||"",v=m.get(Pt.VERTEX_HEAD)||"",M=m.get(Pt.VERTEX_MAIN_SUPPORT)||"";const T=new Set,D=new Set;if(d&&(x+=`	${s}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const C=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);M+=`	${s}MainSupport(`,M+=C?`vUv);
`:`);
`;for(const N of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const L of N[1].split(/\s*,\s*/))i.varyings.add(L),T.add(L),D.add(L);for(const N of l.matchAll(p))D.add(N[1])}for(const C of r.matchAll(p))D.add(C[1]);for(const C of t.defines.keys())D.add(C.replace(/\([\w\s,]*\)/g,""));for(const C of t.uniforms.keys())D.add(C);D.delete("while"),D.delete("for"),D.delete("if"),t.uniforms.forEach((C,N)=>i.uniforms.set(s+N.charAt(0).toUpperCase()+N.slice(1),C)),t.defines.forEach((C,N)=>i.defines.set(s+N.charAt(0).toUpperCase()+N.slice(1),C));const E=new Map([["fragment",r],["vertex",l]]);Ov(s,D,i.defines),Ov(s,D,E),r=E.get("fragment"),l=E.get("vertex");const _=t.blendMode;if(i.blendModes.set(_.blendFunction,_),c){t.inputColorSpace!==null&&t.inputColorSpace!==i.colorSpace&&(S+=t.inputColorSpace===rn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace!==ki?i.colorSpace=t.outputColorSpace:t.inputColorSpace!==null&&(i.colorSpace=t.inputColorSpace);const C=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;S+=`${s}MainImage(color0, UV, `,(i.attributes&Bs.DEPTH)!==0&&C.test(r)&&(S+="depth, ",i.readDepth=!0),S+=`color1);
	`;const N=s+"BlendOpacity";i.uniforms.set(N,_.opacity),S+=`color0 = blend${_.blendFunction}(color0, color1, ${N});

	`,h+=`uniform float ${N};

`}if(h+=r+`
`,l!==null&&(v+=l+`
`),m.set(Pt.FRAGMENT_HEAD,h),m.set(Pt.FRAGMENT_MAIN_UV,x),m.set(Pt.FRAGMENT_MAIN_IMAGE,S),m.set(Pt.VERTEX_HEAD,v),m.set(Pt.VERTEX_MAIN_SUPPORT,M),t.extensions!==null)for(const C of t.extensions)i.extensions.add(C)}}var Pv=class extends ls{constructor(s,...t){super("EffectPass"),this.fullscreenMaterial=new I1(null,null,null,s),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(s){for(const t of this.effects)t.mainScene=s}set mainCamera(s){this.fullscreenMaterial.copyCameraSettings(s);for(const t of this.effects)t.mainCamera=s}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(s){this.fullscreenMaterial.encodeOutput=s}get dithering(){return this.fullscreenMaterial.dithering}set dithering(s){const t=this.fullscreenMaterial;t.dithering=s,t.needsUpdate=!0}setEffects(s){for(const t of this.effects)t.removeEventListener("change",this.listener);this.effects=s.sort((t,i)=>i.attributes-t.attributes);for(const t of this.effects)t.addEventListener("change",this.listener)}updateMaterial(){const s=new $b;let t=0;for(const d of this.effects)if(d.blendMode.blendFunction===bt.DST)s.attributes|=d.getAttributes()&Bs.DEPTH;else{if((s.attributes&d.getAttributes()&Bs.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${d.name})`);B1("e"+t++,d,s)}let i=s.shaderParts.get(Pt.FRAGMENT_HEAD),r=s.shaderParts.get(Pt.FRAGMENT_MAIN_IMAGE),l=s.shaderParts.get(Pt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const d of s.blendModes.values())i+=d.getShaderCode().replace(c,`blend${d.blendFunction}`)+`
`;(s.attributes&Bs.DEPTH)!==0?(s.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,s.colorSpace===rn&&(r+=`color0 = sRGBToLinear(color0);
	`),s.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,s.defines.set("UV","transformedUv")):s.defines.set("UV","vUv"),s.shaderParts.set(Pt.FRAGMENT_HEAD,i),s.shaderParts.set(Pt.FRAGMENT_MAIN_IMAGE,r),s.shaderParts.set(Pt.FRAGMENT_MAIN_UV,l);for(const[d,p]of s.shaderParts)p!==null&&s.shaderParts.set(d,p.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(s)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(s,t=jo){this.fullscreenMaterial.depthBuffer=s,this.fullscreenMaterial.depthPacking=t;for(const i of this.effects)i.setDepthTexture(s,t)}render(s,t,i,r,l){for(const c of this.effects)c.update(s,t,r);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=t.texture,c.time+=r*this.timeScale,s.setRenderTarget(this.renderToScreen?null:i),s.render(this.scene,this.camera)}}setSize(s,t){this.fullscreenMaterial.setSize(s,t);for(const i of this.effects)i.setSize(s,t)}initialize(s,t,i){this.renderer=s;for(const r of this.effects)r.initialize(s,t,i);this.updateMaterial(),i!==void 0&&i!==On&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const s of this.effects)s.removeEventListener("change",this.listener),s.dispose()}handleEvent(s){s.type==="change"&&this.recompile()}};const F1=()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d");if(!i)throw new Error("2D context not available");i.fillStyle="black",i.fillRect(0,0,t.width,t.height);const r=new An(t);r.minFilter=tn,r.magFilter=tn,r.generateMipmaps=!1;const l=[];let c=null;const d=64;let p=.1*64;const m=1/d,h=()=>{i.fillStyle="black",i.fillRect(0,0,t.width,t.height)},x=M=>{const T={x:M.x*64,y:(1-M.y)*64};let D=1;const E=L=>Math.sin(L*Math.PI/2),_=L=>-L*(L-2);M.age<d*.3?D=E(M.age/(d*.3)):D=_(1-(M.age-d*.3)/(d*.7))||0,D*=M.force;const C=`${(M.vx+1)/2*255}, ${(M.vy+1)/2*255}, ${D*255}`,N=320;i.shadowOffsetX=N,i.shadowOffsetY=N,i.shadowBlur=p,i.shadowColor=`rgba(${C},${.22*D})`,i.beginPath(),i.fillStyle="rgba(255,0,0,1)",i.arc(T.x-N,T.y-N,p,0,Math.PI*2),i.fill()};return{canvas:t,texture:r,addTouch:M=>{let T=0,D=0,E=0;if(c){const _=M.x-c.x,C=M.y-c.y;if(_===0&&C===0)return;const N=_*_+C*C,L=Math.sqrt(N);D=_/(L||1),E=C/(L||1),T=Math.min(N*1e4,1)}c={x:M.x,y:M.y},l.push({x:M.x,y:M.y,age:0,force:T,vx:D,vy:E})},update:()=>{h();for(let M=l.length-1;M>=0;M--){const T=l[M],D=T.force*m*(1-T.age/d);T.x+=T.vx*D,T.y+=T.vy*D,T.age++,T.age>d&&l.splice(M,1)}for(let M=0;M<l.length;M++)x(l[M]);r.needsUpdate=!0},set radiusScale(M){p=.1*64*M},get radiusScale(){return p/(.1*64)},size:64}},z1=(s,t)=>{const i=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new __("LiquidEffect",i,{uniforms:new Map([["uTexture",new sn(s)],["uStrength",new sn(t?.strength??.025)],["uTime",new sn(0)],["uFreq",new sn(t?.freq??4.5)]])})},Iv={square:0,circle:1,triangle:2,diamond:3},H1=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,G1=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,Vd=10,V1=({variant:s="square",pixelSize:t=3,color:i="#B19EEF",className:r,style:l,antialias:c=!0,patternScale:d=2,patternDensity:p=1,liquid:m=!1,liquidStrength:h=.1,liquidRadius:x=1,pixelSizeJitter:S=0,enableRipples:v=!0,rippleIntensityScale:M=1,rippleThickness:T=.1,rippleSpeed:D=.3,liquidWobbleSpeed:E=4.5,autoPauseOffscreen:_=!0,speed:C=.5,transparent:N=!0,edgeFade:L=.5,noiseAmount:V=0})=>{const G=is.useRef(null),B=is.useRef({visible:!0}),A=is.useRef(C),U=is.useRef(null),pe=is.useRef(null);return is.useEffect(()=>{const z=G.current;if(!z)return;A.current=C;const ee=["antialias","liquid","noiseAmount"],ae={antialias:c,liquid:m,noiseAmount:V};let ce=!1;if(!U.current)ce=!0;else if(pe.current){for(const q of ee)if(pe.current[q]!==ae[q]){ce=!0;break}}if(ce){if(U.current){const Ie=U.current;Ie.resizeObserver?.disconnect(),cancelAnimationFrame(Ie.raf),Ie.quad?.geometry.dispose(),Ie.material.dispose(),Ie.composer?.dispose(),Ie.renderer.dispose(),Ie.renderer.domElement.parentElement===z&&z.removeChild(Ie.renderer.domElement),U.current=null}const q=document.createElement("canvas"),w=new kb({canvas:q,antialias:c,alpha:!0,powerPreference:"high-performance"});w.domElement.style.width="100%",w.domElement.style.height="100%",w.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),z.appendChild(w.domElement),N?w.setClearAlpha(0):w.setClearColor(0,1);const I={uResolution:{value:new _t(0,0)},uTime:{value:0},uColor:{value:new Ft(i)},uClickPos:{value:Array.from({length:Vd},()=>new _t(-1,-1))},uClickTimes:{value:new Float32Array(Vd)},uShapeType:{value:Iv[s]??0},uPixelSize:{value:t*w.getPixelRatio()},uScale:{value:d},uDensity:{value:p},uPixelJitter:{value:S},uEnableRipples:{value:v?1:0},uRippleSpeed:{value:D},uRippleThickness:{value:T},uRippleIntensity:{value:M},uEdgeFade:{value:L}},oe=new Nh,fe=new jc(-1,1,1,-1,0,1),Me=new Kn({vertexShader:H1,fragmentShader:G1,uniforms:I,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Uh}),P=new Jo(2,2),j=new Oi(P,Me);oe.add(j);const ve=new KE,be=()=>{const Ie=z.clientWidth||1,rt=z.clientHeight||1;w.setSize(Ie,rt,!1),I.uResolution.value.set(w.domElement.width,w.domElement.height),U.current?.composer&&U.current.composer.setSize(w.domElement.width,w.domElement.height),I.uPixelSize.value=t*w.getPixelRatio()};be();const Pe=new ResizeObserver(be);Pe.observe(z);const _e=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Ie=new Uint32Array(1);return window.crypto.getRandomValues(Ie),Ie[0]/4294967295}return Math.random()})()*1e3;let Se,Oe,Ye;if(m){Oe=F1(),Oe.radiusScale=x,Se=new Uv(w);const Ie=new Nv(oe,fe);Ye=z1(Oe.texture,{strength:h,freq:E});const rt=new Pv(fe,Ye);rt.renderToScreen=!0,Se.addPass(Ie),Se.addPass(rt)}if(V>0){Se||(Se=new Uv(w),Se.addPass(new Nv(oe,fe)));const Ie=new __("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new sn(0)],["uAmount",new sn(V)]])}),rt=new Pv(fe,Ie);rt.renderToScreen=!0,Se&&Se.passes.length>0&&Se.passes.forEach(H=>H.renderToScreen=!1),Se.addPass(rt)}Se&&Se.setSize(w.domElement.width,w.domElement.height);const $e=Ie=>{const rt=w.domElement.getBoundingClientRect(),H=w.domElement.width/rt.width,Tt=w.domElement.height/rt.height,vt=(Ie.clientX-rt.left)*H,wt=(rt.height-(Ie.clientY-rt.top))*Tt;return{fx:vt,fy:wt,w:w.domElement.width,h:w.domElement.height}},Kt=Ie=>{const{fx:rt,fy:H}=$e(Ie),Tt=U.current?.clickIx??0;I.uClickPos.value[Tt].set(rt,H),I.uClickTimes.value[Tt]=I.uTime.value,U.current&&(U.current.clickIx=(Tt+1)%Vd)},gt=Ie=>{if(!Oe)return;const{fx:rt,fy:H,w:Tt,h:vt}=$e(Ie);Oe.addTouch({x:rt/Tt,y:H/vt})};w.domElement.addEventListener("pointerdown",Kt,{passive:!0}),w.domElement.addEventListener("pointermove",gt,{passive:!0});let ct=0;const yt=()=>{if(_&&!B.current.visible){ct=requestAnimationFrame(yt);return}I.uTime.value=_e+ve.getElapsedTime()*A.current,Ye&&(Ye.uniforms.get("uTime").value=I.uTime.value),Se?(Oe&&Oe.update(),Se.passes.forEach(Ie=>{const rt=Ie.effects;rt&&rt.forEach(H=>{const Tt=H.uniforms?.get("uTime");Tt&&(Tt.value=I.uTime.value)})}),Se.render()):w.render(oe,fe),ct=requestAnimationFrame(yt)};ct=requestAnimationFrame(yt),U.current={renderer:w,scene:oe,camera:fe,material:Me,clock:ve,clickIx:0,uniforms:I,resizeObserver:Pe,raf:ct,quad:j,timeOffset:_e,composer:Se,touch:Oe,liquidEffect:Ye}}else{const q=U.current;if(q.uniforms.uShapeType.value=Iv[s]??0,q.uniforms.uPixelSize.value=t*q.renderer.getPixelRatio(),q.uniforms.uColor.value.set(i),q.uniforms.uScale.value=d,q.uniforms.uDensity.value=p,q.uniforms.uPixelJitter.value=S,q.uniforms.uEnableRipples.value=v?1:0,q.uniforms.uRippleIntensity.value=M,q.uniforms.uRippleThickness.value=T,q.uniforms.uRippleSpeed.value=D,q.uniforms.uEdgeFade.value=L,N?q.renderer.setClearAlpha(0):q.renderer.setClearColor(0,1),q.liquidEffect){const w=q.liquidEffect;w&&(w.value=h);const I=q.liquidEffect.uniforms.get("uFreq");I&&(I.value=E)}q.touch&&(q.touch.radiusScale=x)}return pe.current=ae,()=>{if(U.current&&ce||!U.current)return;const q=U.current;q.resizeObserver?.disconnect(),cancelAnimationFrame(q.raf),q.quad?.geometry.dispose(),q.material.dispose(),q.composer?.dispose(),q.renderer.dispose(),q.renderer.domElement.parentElement===z&&z.removeChild(q.renderer.domElement),U.current=null}},[c,m,V,t,d,p,v,M,T,D,S,L,N,h,x,E,_,s,i,C]),Z.jsx("div",{ref:G,className:`pixel-blast-container ${r??""}`,style:l,"aria-label":"PixelBlast interactive background"})},k1=()=>{const s=[{title:"Infrastruktuuri",items:["Latausasemien sijainnit ja yksittäiset pisteet.","Erottelu AC-lataukseen ja DC-pikalataukseen teknisten ominaisuuksien mukaan."]},{title:"Asiakkaat",items:["Perustiedot ja jäsenyystasot.","Yksikäsitteinen tunnistaminen sähköpostiosoitteella."]},{title:"Hinnoittelu",items:["Eri hinnoittelumallit kWh-perusteella.","Teholuokkakohtainen hinnoittelu (Pika vs. Normaali)."]},{title:"Lataustapahtumat",items:["Käyttäjä-, sijainti- ja aikatiedot.","Laskennallinen loppuhinta kulutuksen ja mallin mukaan."]}];return Z.jsxs("div",{style:{maxWidth:"1300px",margin:"0 auto",color:"#fff",padding:"0 20px"},children:[Z.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",padding:"40px",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.1)",marginBottom:"60px",backdropFilter:"blur(15px)",boxShadow:"0 8px 32px 0 rgba(0, 0, 0, 0.37)"},children:[Z.jsx("h2",{style:{color:"#B19EEF",marginTop:0,textAlign:"center",fontSize:"2rem"},children:"Kohdealueen kuvaus"}),Z.jsxs("p",{style:{fontSize:"1.1rem",lineHeight:"1.9",opacity:.9,textAlign:"center",maxWidth:"800px",margin:"20px auto 0"},children:["Sähköautojen latausverkon hallintajärjestelmän tarkoituksena on hallinnoida latausverkostoa, joka koostuu latausasemista, pisteistä ja asiakastapahtumista. Järjestelmä palvelee sekä",Z.jsx("strong",{children:" operaattoria"})," hallinnan osalta että ",Z.jsx("strong",{children:"asiakkaita"})," lataamisen ja laskutuksen osalta."]})]}),Z.jsx("h3",{style:{textAlign:"center",marginBottom:"40px",textTransform:"uppercase",letterSpacing:"3px",fontSize:"1.2rem",opacity:.7},children:"Tietokannan käyttötarve"}),Z.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px"},children:s.map((t,i)=>Z.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.06)",padding:"30px",borderRadius:"20px",border:"1px solid rgba(177, 158, 239, 0.3)",backdropFilter:"blur(12px)",transition:"all 0.3s ease",cursor:"default",display:"flex",flexDirection:"column",boxShadow:"0 4px 15px rgba(0,0,0,0.2)"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-8px)",r.currentTarget.style.background="rgba(255, 255, 255, 0.1)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.background="rgba(255, 255, 255, 0.06)"},children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"20px",fontSize:"1.3rem",textAlign:"center",fontWeight:"700"},children:t.title}),Z.jsx("ul",{style:{padding:0,margin:0,opacity:.85,fontSize:"0.95rem",listStyle:"none",textAlign:"center"},children:t.items.map((r,l)=>Z.jsx("li",{style:{marginBottom:"15px",lineHeight:"1.5"},children:r},l))})]},i))})]})},X1="/ev-charge/assets/erkaavio-B8wVtL4L.png",W1=()=>Z.jsx("div",{style:{textAlign:"center",padding:"20px"},children:Z.jsx("img",{src:X1,alt:"ER-kaavio",style:{maxWidth:"75%",height:"auto",borderRadius:"20px",boxShadow:"0 4px 20px rgba(0,0,0,0.5)"}})}),q1=()=>{const s=[{name:"ASIAKAS",columns:["AsiakasId (PK)","Sähköposti (Unique)","Jäsenyystaso","Etunimi","Sukunimi"],refs:[]},{name:"ASIAKAS_PUHELINNUMERO",columns:["AsiakasId (PFK)","Puhelinnumero (PK)"],refs:["AsiakasId -> ASIAKAS.AsiakasId"]},{name:"LATAUSASEMA",columns:["AsemaId (PK)","Nimi","Osoite"],refs:[]},{name:"LATAUSASEMA_KOORDINAATIT",columns:["AsemaId (PFK)","Latitudi","Longitudi"],refs:["AsemaId -> LATAUSASEMA.AsemaId"]},{name:"LATAUSPISTE",columns:["PisteId (PK)","Tila","AsemaId (FK)"],refs:["AsemaId -> LATAUSASEMA.AsemaId"]},{name:"TYYPPI2 (AC)",columns:["PisteId (PFK)","MaxAmpeerit","Vaiheet"],refs:["PisteId -> LATAUSPISTE.PisteId"]},{name:"DC (Pika)",columns:["PisteId (PFK)","Liitintyyppi","Jäähdytys"],refs:["PisteId -> LATAUSPISTE.PisteId"]},{name:"HINNOITTELUMALLI",columns:["MalliId (PK)","KwhHinta","Aloitusmaksu"],refs:[]},{name:"LATAUSTAPAHTUMA",columns:["TapahtumaId (PK)","Aloitusaika","Lopetusaika","Aloituslukema","Lopetuslukema","MalliId (FK)","PisteId (FK)","AsiakasId (FK)"],refs:["MalliId -> HINNOITTELUMALLI.MalliId","PisteId -> LATAUSPISTE.PisteId","AsiakasId -> ASIAKAS.AsiakasId"]}];return Z.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",color:"#fff",padding:"0 20px"},children:Z.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",padding:"40px",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.1)",backdropFilter:"blur(15px)",boxShadow:"0 8px 32px 0 rgba(0, 0, 0, 0.37)"},children:[Z.jsx("h2",{style:{color:"#B19EEF",textAlign:"center",marginBottom:"40px"},children:"Relaatiotietokannan kaava"}),Z.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",gap:"20px"},children:s.map((t,i)=>Z.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.05)",padding:"20px",borderRadius:"15px",border:"1px solid rgba(177, 158, 239, 0.2)",display:"flex",flexDirection:"column"},children:[Z.jsx("h4",{style:{color:"#B19EEF",margin:"0 0 10px 0",borderBottom:"1px solid rgba(177, 158, 239, 0.3)",paddingBottom:"5px"},children:t.name}),Z.jsxs("div",{style:{fontSize:"0.9rem",marginBottom:"15px"},children:[Z.jsx("strong",{children:"Attribuutit:"}),Z.jsx("p",{style:{opacity:.8,margin:"5px 0"},children:t.columns.join(", ")})]}),t.refs.length>0&&Z.jsxs("div",{style:{marginTop:"auto",fontSize:"0.8rem",fontStyle:"italic",color:"#B19EEF"},children:[Z.jsx("div",{style:{opacity:.6,marginBottom:"2px",color:"#fff"},children:"Viitaukset:"}),t.refs.map((r,l)=>Z.jsxs("div",{children:["↳ ",r]},l))]})]},i))})]})})},Y1=()=>{const[s,t]=is.useState("schema");return Z.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto",color:"#fff"},children:Z.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",padding:"30px",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.1)",overflowX:"auto",WebkitOverflowScrolling:"touch",backdropFilter:"blur(15px)",boxShadow:"0 8px 32px 0 rgba(0, 0, 0, 0.37)"},children:[Z.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:[Z.jsx("button",{onClick:()=>t("schema"),style:{padding:"10px 20px",borderRadius:"10px",border:"none",background:s==="schema"?"#B19EEF":"rgba(255,255,255,0.1)",color:s==="schema"?"#000":"#fff",cursor:"pointer",fontWeight:"bold"},children:"schema.sqlite"}),Z.jsx("button",{onClick:()=>t("data"),style:{padding:"10px 20px",borderRadius:"10px",border:"none",background:s==="data"?"#B19EEF":"rgba(255,255,255,0.1)",color:s==="data"?"#000":"#fff",cursor:"pointer",fontWeight:"bold"},children:"data.sqlite"})]}),Z.jsx("div",{style:{background:"rgba(0, 0, 0, 0.5)",padding:"20px",borderRadius:"15px",border:"1px solid rgba(177, 158, 239, 0.3)",overflowX:"auto",textAlign:"left"},children:Z.jsx("pre",{style:{margin:0,fontSize:"0.9rem",color:"#B19EEF",fontFamily:"monospace"},children:Z.jsx("code",{children:s==="schema"?`PRAGMA foreign_keys = ON;

CREATE TABLE ASIAKAS (
    AsiakasId INTEGER PRIMARY KEY AUTOINCREMENT,
    Sahkoposti VARCHAR(255) NOT NULL UNIQUE,
    Jasenyystaso VARCHAR(20) DEFAULT 'Perus',
    Etunimi VARCHAR(20) NOT NULL,
    Sukunimi VARCHAR(20) NOT NULL
);

CREATE TABLE LATAUSASEMA (
    AsemaId INTEGER PRIMARY KEY AUTOINCREMENT,
    Nimi VARCHAR(50) NOT NULL UNIQUE,
    Osoite VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE HINNOITTELUMALLI (
    MalliId INTEGER PRIMARY KEY AUTOINCREMENT,
    KwhHinta NUMERIC(7,2) NOT NULL,
    Aloitusmaksu NUMERIC(7,2) NOT NULL
);

CREATE TABLE ASIAKAS_PUHELINNUMERO (
    AsiakasId INTEGER,
    Puhelinnumero VARCHAR(20),
    PRIMARY KEY (AsiakasId, Puhelinnumero),
    FOREIGN KEY (AsiakasId) REFERENCES ASIAKAS (AsiakasId)
);

CREATE TABLE LATAUSASEMA_KOORDINAATIT (
    AsemaId INTEGER PRIMARY KEY,
    Latitudi REAL NOT NULL,
    Longitudi REAL NOT NULL,
    FOREIGN KEY (AsemaId) REFERENCES LATAUSASEMA (AsemaId)
);

CREATE TABLE LATAUSPISTE (
    PisteId INTEGER PRIMARY KEY AUTOINCREMENT,
    Tila VARCHAR(30) NOT NULL,
    AsemaId INTEGER NOT NULL,
    FOREIGN KEY (AsemaId) REFERENCES LATAUSASEMA (AsemaId)
);

CREATE TABLE TYYPPI2 (
    PisteId INTEGER PRIMARY KEY,
    MaxAmpeerit INTEGER NOT NULL,
    Vaiheet INTEGER NOT NULL CHECK (Vaiheet IN (1, 3)),
    FOREIGN KEY (PisteId) REFERENCES LATAUSPISTE (PisteId)
);

CREATE TABLE DC (
    PisteId INTEGER PRIMARY KEY,
    Liitintyyppi VARCHAR(30) NOT NULL,
    Jaahdytys VARCHAR(30) NOT NULL,
    FOREIGN KEY (PisteId) REFERENCES LATAUSPISTE (PisteId)
);

CREATE TABLE LATAUSTAPAHTUMA (
    TapahtumaId INTEGER PRIMARY KEY AUTOINCREMENT,
    Aloitusaika DATETIME NOT NULL,
    Lopetusaika DATETIME,
    Aloituslukema REAL NOT NULL,
    Lopetuslukema REAL,
    MalliId INTEGER NOT NULL,
    PisteId INTEGER NOT NULL,
    AsiakasId INTEGER NOT NULL,
    FOREIGN KEY (MalliId) REFERENCES HINNOITTELUMALLI (MalliId),
    FOREIGN KEY (PisteId) REFERENCES LATAUSPISTE (PisteId),
    FOREIGN KEY (AsiakasId) REFERENCES ASIAKAS (AsiakasId)
);`:`INSERT INTO ASIAKAS (Sahkoposti, Jasenyystaso, Etunimi, Sukunimi) VALUES
('lauri.lataaja@email.com', 'Premium', 'Lauri', 'Lataaja'),
('matti.meikalainen@email.com', 'Perus', 'Matti', 'Meikäläinen');

INSERT INTO LATAUSASEMA (Nimi, Osoite) VALUES
('ABC Tiiriö', 'Paroistentie 1, Hämeenlinna'),
('St1 Raasepori Karjaa', 'Lepinpellonkatu 1, 10320 Karjaa');

INSERT INTO HINNOITTELUMALLI (KwhHinta, Aloitusmaksu) VALUES
(0.35, 1.00),   -- Normaali AC lataus
(0.55, 2.50);   -- Pika DC lataus

INSERT INTO ASIAKAS_PUHELINNUMERO (AsiakasId, Puhelinnumero) VALUES
(1, '050-4949335'),
(1, '050-9393553'),
(2, '044-1234556');

INSERT INTO LATAUSASEMA_KOORDINAATIT (AsemaId, Latitudi, Longitudi) VALUES
(1, 61.01400, 24.41670),
(2, 60.05380, 23.64776);

INSERT INTO LATAUSPISTE (Tila, AsemaId) VALUES
('Vapaa', 1),   -- Piste 1 (Tiiriössä)
('Varattu', 1), -- Piste 2 (Tiiriössä)
('Vapaa', 2);   -- Piste 3 (Karjaalla)

INSERT INTO TYYPPI2 (PisteId, MaxAmpeerit, Vaiheet) VALUES
(1, 16, 3);     -- Piste 1 = AC-Laturi

INSERT INTO DC (PisteId, Liitintyyppi, Jaahdytys) VALUES
(2, 'CCS', 'Neste'),    -- Piste 2 = DC-Laturi
(3, 'CHAdeMO', 'Ilma'); -- Piste 3 = DC-Laturi

INSERT INTO LATAUSTAPAHTUMA (Aloitusaika, Lopetusaika, Aloituslukema, Lopetuslukema, MalliId, PisteId, AsiakasId) VALUES
('2026-02-25 08:00:00', '2026-02-25 10:00:00', 1200.0, 1230.5, 1, 1, 1),
('2026-02-25 12:30:00', '2026-02-25 13:45:00', 5500.0, 5535.3, 2, 2, 2),
('2026-02-25 18:30:00', NULL, 1230.5, NULL, 1, 1, 2);`})})})]})})},j1=()=>{const s=[{title:"1. Latauskuitin laskenta",description:"Lasketaan lataustapahtuman energiankulutus ja lopullinen hinta x asiakkaalle kuitin tekemistä varten.",sql:`SELECT 
    LATAUSTAPAHTUMA.TapahtumaId,
    ASIAKAS.Etunimi,
    ASIAKAS.Sukunimi,
    (LATAUSTAPAHTUMA.Lopetuslukema - LATAUSTAPAHTUMA.Aloituslukema) AS Kulutus_kWh,
    ROUND((LATAUSTAPAHTUMA.Lopetuslukema - LATAUSTAPAHTUMA.Aloituslukema) * HINNOITTELUMALLI.KwhHinta + HINNOITTELUMALLI.Aloitusmaksu, 2) AS Hinta_Euro
FROM LATAUSTAPAHTUMA
JOIN ASIAKAS ON LATAUSTAPAHTUMA.AsiakasId = ASIAKAS.AsiakasId
JOIN HINNOITTELUMALLI ON LATAUSTAPAHTUMA.MalliId = HINNOITTELUMALLI.MalliId
WHERE LATAUSTAPAHTUMA.TapahtumaId = 1;`},{title:"2. Vapaiden latauspisteiden haku",description:"Listataan kaikki asemat ja lasketaan kuinka monta vapaata pistettä kullakin asemalla on tällä hetkellä karttanäkymää varten.",sql:`SELECT 
    LATAUSASEMA.Nimi, 
    LATAUSASEMA.Osoite,
    COUNT(LATAUSPISTE.PisteId) AS Vapaiden_Pisteiden_Maara
FROM LATAUSASEMA
JOIN LATAUSPISTE ON LATAUSASEMA.AsemaId = LATAUSPISTE.AsemaId
WHERE LATAUSPISTE.Tila = 'Vapaa'
GROUP BY LATAUSASEMA.Nimi;`},{title:"3. Massahuoltopäivitys",description:"Päivitetään kaikki x aseman latauspisteet huoltotilaan, jos koko latausasema menee huoltoon.",sql:`UPDATE LATAUSPISTE 
SET Tila = 'Huollossa' 
WHERE AsemaId = (
    SELECT AsemaId 
    FROM LATAUSASEMA 
    WHERE Nimi = 'ABC Tiiriö'
);`},{title:"4. Vanhojen tietojen poisto",description:"Poistetaan kaikki lataustapahtumat, jotka ovat päättyneet ennen vuotta 2020 tietokannan optimoimiseksi.",sql:`DELETE FROM LATAUSTAPAHTUMA
WHERE Lopetusaika < '2020-01-01 00:00:00';`}];return Z.jsx("div",{style:{maxWidth:"1100px",margin:"0 auto",color:"#fff",padding:"0 10px"},children:Z.jsx("div",{style:{display:"grid",gap:"25px"},children:s.map((t,i)=>Z.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.05)",padding:"25px",borderRadius:"20px",border:"1px solid rgba(255, 255, 255, 0.1)",backdropFilter:"blur(12px)",textAlign:"left",maxWidth:"100%",boxSizing:"border-box"},children:[Z.jsx("h3",{style:{color:"#B19EEF",marginBottom:"10px",fontSize:"1.2rem"},children:t.title}),Z.jsx("p",{style:{opacity:.8,marginBottom:"20px",fontSize:"0.9rem",lineHeight:"1.5"},children:t.description}),Z.jsx("div",{style:{background:"#000",padding:"15px",borderRadius:"12px",borderLeft:"4px solid #B19EEF",overflowX:"auto",WebkitOverflowScrolling:"touch"},children:Z.jsx("pre",{style:{margin:0,fontSize:"0.8rem",color:"#ccc",fontFamily:"monospace",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:Z.jsx("code",{children:t.sql})})})]},i))})})},K1=()=>Z.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",color:"#fff",padding:"0 20px",textAlign:"left"},children:[Z.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",padding:"40px",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.1)",backdropFilter:"blur(15px)",marginBottom:"50px",boxShadow:"0 8px 32px 0 rgba(0, 0, 0, 0.37)"},children:[Z.jsx("h2",{style:{color:"#B19EEF",marginBottom:"30px",textAlign:"center"},children:"Funktionaalisten riippuvuuksien etsiminen"}),Z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"25px"},children:[Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px"},children:"ASIAKAS"}),Z.jsx("p",{style:{opacity:.9,fontSize:"0.95rem",marginBottom:"10px"},children:"Pääavain määrittää yksikäsitteisesti muut attribuutit. Myös sähköposti on määritelty uniikiksi, joten se toimii ehdokasavaimena ja määrittää muut tiedot:"}),Z.jsxs("code",{style:{display:"block",background:"rgba(0,0,0,0.3)",padding:"10px",borderRadius:"8px",color:"#ccc"},children:["{AsiakasId} -> {Sahkoposti, Jasenyystaso, Etunimi, Sukunimi}",Z.jsx("br",{}),"{Sahkoposti} -> {AsiakasId, Jasenyystaso, Etunimi, Sukunimi}"]}),Z.jsx("p",{style:{opacity:.7,fontSize:"0.9rem",marginTop:"10px"},children:"Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään."})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px"},children:"ASIAKAS_PUHELINNUMERO"}),Z.jsx("p",{style:{opacity:.9,fontSize:"0.95rem",marginBottom:"10px"},children:"Pääavaimen lisäksi ei ole muita attribuutteja, joten se on ainoa funktionaalinen riippuvuus:"}),Z.jsx("code",{style:{display:"block",background:"rgba(0,0,0,0.3)",padding:"10px",borderRadius:"8px",color:"#ccc"},children:"{AsiakasId, Puhelinnumero} -> {AsiakasId, Puhelinnumero}"}),Z.jsx("p",{style:{opacity:.7,fontSize:"0.9rem",marginTop:"10px"},children:"Tämä on triviaali riippuvuus, koska molemmilla puolilla on samat attribuutit."})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px"},children:"LATAUSASEMA"}),Z.jsx("p",{style:{opacity:.9,fontSize:"0.95rem",marginBottom:"10px"},children:"Pääavain määrittää yksikäsitteisesti muut attribuutit:"}),Z.jsx("code",{style:{display:"block",background:"rgba(0,0,0,0.3)",padding:"10px",borderRadius:"8px",color:"#ccc"},children:"{AsemaId} -> {Nimi, Osoite}"}),Z.jsx("p",{style:{opacity:.7,fontSize:"0.9rem",marginTop:"10px"},children:"Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään."})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px"},children:"LATAUSASEMA_KOORDINAATIT"}),Z.jsx("p",{style:{opacity:.9,fontSize:"0.95rem",marginBottom:"10px"},children:"Pääavain määrittää yksikäsitteisesti muut attribuutit:"}),Z.jsx("code",{style:{display:"block",background:"rgba(0,0,0,0.3)",padding:"10px",borderRadius:"8px",color:"#ccc"},children:"{AsemaId} -> {Latitudi, Longitudi}"}),Z.jsx("p",{style:{opacity:.7,fontSize:"0.9rem",marginTop:"10px"},children:"Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään."})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px"},children:"LATAUSPISTE"}),Z.jsx("p",{style:{opacity:.9,fontSize:"0.95rem",marginBottom:"10px"},children:"Pääavain määrittää yksikäsitteisesti muut attribuutit:"}),Z.jsx("code",{style:{display:"block",background:"rgba(0,0,0,0.3)",padding:"10px",borderRadius:"8px",color:"#ccc"},children:"{PisteId} -> {Tila, AsemaId}"}),Z.jsx("p",{style:{opacity:.7,fontSize:"0.9rem",marginTop:"10px"},children:"Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään."})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px"},children:"TYYPPI2"}),Z.jsx("p",{style:{opacity:.9,fontSize:"0.95rem",marginBottom:"10px"},children:"Pääavain määrittää yksikäsitteisesti muut attribuutit:"}),Z.jsx("code",{style:{display:"block",background:"rgba(0,0,0,0.3)",padding:"10px",borderRadius:"8px",color:"#ccc"},children:"{PisteId} -> {MaxAmpeerit, Vaiheet}"}),Z.jsx("p",{style:{opacity:.7,fontSize:"0.9rem",marginTop:"10px"},children:"Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään."})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px"},children:"DC"}),Z.jsx("p",{style:{opacity:.9,fontSize:"0.95rem",marginBottom:"10px"},children:"Pääavain määrittää yksikäsitteisesti muut attribuutit:"}),Z.jsx("code",{style:{display:"block",background:"rgba(0,0,0,0.3)",padding:"10px",borderRadius:"8px",color:"#ccc"},children:"{PisteId} -> {Liitintyyppi, Jaahdytys}"}),Z.jsx("p",{style:{opacity:.7,fontSize:"0.9rem",marginTop:"10px"},children:"Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään."})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px"},children:"LATAUSTAPAHTUMA"}),Z.jsx("p",{style:{opacity:.9,fontSize:"0.95rem",marginBottom:"10px"},children:"Pääavain määrittää yksikäsitteisesti muut attribuutit:"}),Z.jsx("code",{style:{display:"block",background:"rgba(0,0,0,0.3)",padding:"10px",borderRadius:"8px",color:"#ccc"},children:"{TapahtumaId} -> {Aloitusaika, Lopetusaika, Aloituslukema, Lopetuslukema, MalliId, PisteId, AsiakasId}"}),Z.jsx("p",{style:{opacity:.7,fontSize:"0.9rem",marginTop:"10px"},children:"Muita funktionaalisia riippuvuuksia ei ole, sillä muut attribuutit eivät määritä mitään."})]})]})]}),Z.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",padding:"40px",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.1)",backdropFilter:"blur(15px)",boxShadow:"0 8px 32px 0 rgba(0, 0, 0, 0.37)"},children:[Z.jsx("h2",{style:{color:"#B19EEF",marginBottom:"20px",textAlign:"center"},children:"Relaatioiden normalisointi"}),Z.jsx("p",{style:{opacity:.9,lineHeight:"1.6",marginBottom:"30px"},children:"Kaikki relaatiot ovat 1NF-muodossa, koska jokaisella relaatiolla on pääavain, rivien järjestyksellä ei ole merkitystä ja jokainen attribuutti on atominen. Relaatioihin ei tallenneta listoja tai useita arvoja yhden attribuutin sisään, vaan ne on erotettu omiksi riveiksi tai relaatioiksi."}),Z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px"},children:[Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px",borderBottom:"1px solid rgba(177, 158, 239, 0.3)",paddingBottom:"5px"},children:"ASIAKAS-relaatio"}),Z.jsxs("ul",{style:{paddingLeft:"20px",opacity:.9,lineHeight:"1.6"},children:[Z.jsx("li",{children:"2NF täyttyy, koska 1NF on täytetty ja mikään avaimeton attribuutti ei ole riippuvainen vain osasta pääavainta."}),Z.jsx("li",{children:"3NF täyttyy, koska 2NF on täytetty ja kaikki avaimettomat attribuutit riippuvat suoraan vain pääavaimesta."}),Z.jsx("li",{children:"BCNF täyttyy, koska 3NF on täytetty ja kaikki attribuutit riippuvat vain ehdokasavaimista."}),Z.jsx("li",{children:"4NF täyttyy, koska BCNF on täytetty eikä relaatiossa ole moniarvoisia riippuvuuksia."})]})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px",borderBottom:"1px solid rgba(177, 158, 239, 0.3)",paddingBottom:"5px"},children:"ASIAKAS_PUHELINNUMERO-relaatio"}),Z.jsxs("ul",{style:{paddingLeft:"20px",opacity:.9,lineHeight:"1.6"},children:[Z.jsx("li",{children:"4NF täyttyy, koska kaikki aiemmat normaalimuodot on täytetty eikä relaatiossa ole muita attribuutteja kuin pääavain."}),Z.jsx("li",{children:"Riippuvuus on triviaali, sillä molempien puolien attribuutit ovat samat. Sen ansiosta se ei riko mitään normaalimuotojen sääntöjä. Taulu luotiin poistamaan moniarvoinen attribuutti ASIAKAS-relaatiosta."})]})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px",borderBottom:"1px solid rgba(177, 158, 239, 0.3)",paddingBottom:"5px"},children:"LATAUSASEMA-relaatio"}),Z.jsxs("ul",{style:{paddingLeft:"20px",opacity:.9,lineHeight:"1.6"},children:[Z.jsx("li",{children:"2NF täyttyy, koska pääavain koostuu vain yhdestä sarakkeesta."}),Z.jsx("li",{children:"3NF täyttyy, koska kaikki tiedot riippuvat vain asemasta itsestään."}),Z.jsx("li",{children:"BCNF täyttyy, koska kaikki attribuutit riippuvat ehdokasavaimista."}),Z.jsx("li",{children:"4NF täyttyy, koska moniarvoisia riippuvuuksia ei ole."})]})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px",borderBottom:"1px solid rgba(177, 158, 239, 0.3)",paddingBottom:"5px"},children:"LATAUSASEMA_KOORDINAATIT-relaatio"}),Z.jsx("ul",{style:{paddingLeft:"20px",opacity:.9,lineHeight:"1.6"},children:Z.jsx("li",{children:"4NF täyttyy. Pääavain määrittää yksikäsitteisesti sijainnin, koska jokaisella asemalla on vain yhdet koordinaatit. Tämän vuoksi moniarvoisia riippuvuuksia ei synny."})})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px",borderBottom:"1px solid rgba(177, 158, 239, 0.3)",paddingBottom:"5px"},children:"HINNOITTELUMALLI-relaatio"}),Z.jsx("ul",{style:{paddingLeft:"20px",opacity:.9,lineHeight:"1.6"},children:Z.jsx("li",{children:"2NF, 3NF BCNF ja 4NF täyttyy. Pääavain määrittää hinnat. Avaimettomat attribuutit ovat riippuvaisia vain pääavaimesta."})})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px",borderBottom:"1px solid rgba(177, 158, 239, 0.3)",paddingBottom:"5px"},children:"LATAUSPISTE-relaatio"}),Z.jsxs("ul",{style:{paddingLeft:"20px",opacity:.9,lineHeight:"1.6"},children:[Z.jsx("li",{children:"2NF täyttyy, koska pääavain on yksinkertainen."}),Z.jsx("li",{children:"3NF täyttyy, koska attribuutit (Tila, Asema) riippuvat suoraan latauspisteestä."}),Z.jsx("li",{children:"4NF täyttyy, koska moniarvoisia riippuvuuksia ei ole."})]})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px",borderBottom:"1px solid rgba(177, 158, 239, 0.3)",paddingBottom:"5px"},children:"TYYPPI2- ja DC-relaatiot"}),Z.jsx("ul",{style:{paddingLeft:"20px",opacity:.9,lineHeight:"1.6"},children:Z.jsx("li",{children:"4NF täyttyy molemmissa. Molemmissa tauluissa (PisteId) toimii pääavaimena, joka määrittää kyseisen tyypin erityisominaisuudet ja kaikki attribuutit riippuvat vain pääavaimesta."})})]}),Z.jsxs("section",{children:[Z.jsx("h4",{style:{color:"#B19EEF",marginBottom:"10px",borderBottom:"1px solid rgba(177, 158, 239, 0.3)",paddingBottom:"5px"},children:"LATAUSTAPAHTUMA-relaatio"}),Z.jsxs("ul",{style:{paddingLeft:"20px",opacity:.9,lineHeight:"1.6"},children:[Z.jsx("li",{children:"2NF täyttyy, koska kaikki tiedot riippuvat pääavaimesta."}),Z.jsx("li",{children:"3NF täyttyy, koska kaikki attribuutit riippuvat suoraan tapahtumasta."}),Z.jsx("li",{children:"BCNF täyttyy, koska kaikki determinaatit ovat ehdokasavaimia."}),Z.jsx("li",{children:"4NF täyttyy, koska moniarvoisia riippuvuuksia ei ole."})]})]})]})]})]});function Z1(){const s=[{name:"Vaatimusmäärittely",href:"#vaatimukset"},{name:"ER-kaavio",href:"#er-malli"},{name:"Transformointi",href:"#skeema"},{name:"SQL & Data",href:"#sql-data"},{name:"Kyselyt",href:"#kyselyt"},{name:"Normalisointi",href:"#normalisointi"}];return Z.jsxs("div",{className:"app-container",style:{backgroundColor:"#000",color:"#fff",minHeight:"100vh",padding:"0",margin:"0"},children:[Z.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0,pointerEvents:"none"},children:Z.jsx(V1,{variant:"triangle",pixelSize:4,color:"#30225e",patternScale:2,patternDensity:1,pixelSizeJitter:0,enableRipples:!1,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,liquid:!1,liquidStrength:.12,liquidRadius:1.2,liquidWobbleSpeed:5,speed:.5,edgeFade:.25,transparent:!0})}),Z.jsxs("div",{style:{position:"relative",zIndex:1},children:[Z.jsx("nav",{style:{position:"fixed",top:0,width:"100%",background:"rgba(26, 26, 26, 0.8)",backdropFilter:"blur(10px)",color:"white",padding:"1rem",zIndex:100},children:Z.jsx("ul",{style:{display:"flex",justifyContent:"center",gap:"20px",listStyle:"none",margin:0},children:s.map(t=>Z.jsx("li",{children:Z.jsx("a",{href:t.href,style:{color:"white",textDecoration:"none",fontWeight:"bold"},children:t.name})},t.href))})}),Z.jsxs("main",{style:{marginTop:"80px",padding:"20px",fontFamily:"sans-serif",lineHeight:"1.6"},children:[Z.jsxs("header",{style:{textAlign:"center",padding:"100px 0"},children:[Z.jsx("h1",{style:{fontSize:"3.5rem",marginBottom:"10px"},children:"EV-Charge"}),Z.jsx("p",{style:{fontSize:"1.2rem",opacity:.8},children:"Sähköautojen latausverkoston hallintajärjestelmä"})]}),Z.jsxs("section",{id:"vaatimukset",style:{minHeight:"80vh",padding:"80px 20px"},children:[Z.jsx("header",{style:{textAlign:"center",marginBottom:"50px"},children:Z.jsx("h2",{style:{fontSize:"2.5rem"},children:"Tietokannan vaatimusmäärittely"})}),Z.jsx(k1,{})]}),Z.jsxs("section",{id:"er-malli",style:{minHeight:"80vh",padding:"80px 20px"},children:[Z.jsx("header",{style:{textAlign:"center",marginBottom:"50px"},children:Z.jsx("h2",{style:{fontSize:"2.5rem"},children:"Käsitteellinen mallintaminen"})}),Z.jsx(W1,{})]}),Z.jsx("section",{children:Z.jsxs("section",{id:"skeema",style:{minHeight:"80vh",padding:"80px 20px"},children:[Z.jsx("header",{style:{textAlign:"center",marginBottom:"50px"},children:Z.jsx("h2",{style:{fontSize:"2.5rem"},children:"Transformointi relaatioksi"})}),Z.jsx(q1,{})]})}),Z.jsxs("section",{id:"sql-data",style:{minHeight:"80vh",padding:"80px 20px",borderBottom:"1px solid rgba(255,255,255,0.1)"},children:[Z.jsx("header",{style:{textAlign:"center",marginBottom:"50px"},children:Z.jsx("h2",{style:{fontSize:"2.5rem"},children:"SQL-toteutus ja Testidata"})}),Z.jsx(Y1,{})]}),Z.jsxs("section",{id:"kyselyt",style:{minHeight:"80vh",padding:"80px 20px",borderBottom:"1px solid rgba(255,255,255,0.1)"},children:[Z.jsx("header",{style:{textAlign:"center",marginBottom:"50px"},children:Z.jsx("h2",{style:{fontSize:"2.5rem"},children:"Olennaiset SQL-kyselyt"})}),Z.jsx(j1,{})]}),Z.jsxs("section",{id:"normalisointi",style:{minHeight:"100vh",padding:"80px 20px"},children:[Z.jsx("header",{style:{textAlign:"center",marginBottom:"50px"},children:Z.jsx("h2",{style:{fontSize:"2.5rem"},children:"Normalisointi"})}),Z.jsx(K1,{})]})]}),Z.jsx("footer",{style:{textAlign:"center",padding:"60px",background:"rgba(0,0,0,0.5)"},children:Z.jsx("p",{style:{opacity:.5},children:"© 2026 - EV Charge Portfolio Project"})})]})]})}LS.createRoot(document.getElementById("root")).render(Z.jsx(is.StrictMode,{children:Z.jsx(Z1,{})}));
