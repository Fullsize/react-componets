(this["webpackJsonpreact-context"]=this["webpackJsonpreact-context"]||[]).push([[4],{20:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),a=t(16);if(!n.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!a.e)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var c=t(17);function u(e){e()}function i(e){return Object(a.c)(e)}var f="undefined"===typeof FinalizationRegistry?void 0:FinalizationRegistry;function l(e){return{reaction:e,mounted:!1,changedBeforeMount:!1,cleanAt:Date.now()+s}}var s=1e4;var d=function(e){var r="function"===typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};var v=f?function(e){var r=new Map,t=1,n=new e((function(e){var t=r.get(e);t&&(t.reaction.dispose(),r.delete(e))}));return{addReactionToTrack:function(e,o,a){var c=t++;return n.register(a,c,e),e.current=l(o),e.current.finalizationRegistryCleanupToken=c,r.set(c,e.current),e.current},recordReactionAsCommitted:function(e){n.unregister(e),e.current&&e.current.finalizationRegistryCleanupToken&&r.delete(e.current.finalizationRegistryCleanupToken)},forceCleanupTimerToRunNowForTests:function(){},resetCleanupScheduleForTests:function(){}}}(f):function(){var e,r=new Set;function t(){void 0===e&&(e=setTimeout(n,1e4))}function n(){e=void 0;var n=Date.now();r.forEach((function(e){var t=e.current;t&&n>=t.cleanAt&&(t.reaction.dispose(),e.current=null,r.delete(e))})),r.size>0&&t()}return{addReactionToTrack:function(e,n,o){var a;return e.current=l(n),a=e,r.add(a),t(),e.current},recordReactionAsCommitted:function(e){r.delete(e)},forceCleanupTimerToRunNowForTests:function(){e&&(clearTimeout(e),n())},resetCleanupScheduleForTests:function(){var t,n;if(r.size>0){try{for(var o=d(r),a=o.next();!a.done;a=o.next()){var c=a.value,u=c.current;u&&(u.reaction.dispose(),c.current=null)}}catch(i){t={error:i}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}r.clear()}e&&(clearTimeout(e),e=void 0)}}}(),p=v.addReactionToTrack,b=v.recordReactionAsCommitted,m=(v.resetCleanupScheduleForTests,v.forceCleanupTimerToRunNowForTests,!1);function y(){return m}var h=function(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,a=t.call(e),c=[];try{for(;(void 0===r||r-- >0)&&!(n=a.next()).done;)c.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return c};function w(e){return"observer"+e}var T=function(){};function g(){return new T}function R(e,r){if(void 0===r&&(r="observed"),y())return e();var t=h(o.a.useState(g),1)[0],n=h(o.a.useState(),2)[1],c=function(){return n([])},u=o.a.useRef(null);if(!u.current)var f=new a.a(w(r),(function(){l.mounted?c():l.changedBeforeMount=!0})),l=p(u,f,t);var s,d,v=u.current.reaction;if(o.a.useDebugValue(v,i),o.a.useEffect((function(){return b(u),u.current?(u.current.mounted=!0,u.current.changedBeforeMount&&(u.current.changedBeforeMount=!1,c())):(u.current={reaction:new a.a(w(r),(function(){c()})),mounted:!0,changedBeforeMount:!1,cleanAt:1/0},c()),function(){u.current.reaction.dispose(),u.current=null}}),[]),v.track((function(){try{s=e()}catch(r){d=r}})),d)throw d;return s}var j=function(){return(j=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};var O={$$typeof:!0,render:!0,compare:!0,type:!0};var C;(C=c.unstable_batchedUpdates)||(C=u),Object(a.b)({reactionScheduler:C});var x=t(22),S=t(6),k=function(e,r){if(y())return e;var t,o,a,c=j({forwardRef:!1},r),u=e.displayName||e.name,i=function(r,t){return R((function(){return e(r,t)}),u)};return i.displayName=u,t=c.forwardRef?Object(n.memo)(Object(n.forwardRef)(i)):Object(n.memo)(i),o=e,a=t,Object.keys(o).forEach((function(e){O[e]||Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))})),t.displayName=u,t}((function(e){var r=Object(n.useContext)(x.a).app;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{children:r.count}),Object(S.jsx)("button",{onClick:r.addCount,children:"\u589e\u52a0"})]})}));r.default=k}}]);
//# sourceMappingURL=4.73a75615.chunk.js.map