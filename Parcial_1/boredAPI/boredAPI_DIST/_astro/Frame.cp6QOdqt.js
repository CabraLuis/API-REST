import{r as n}from"./index.LFf77hJu.js";var y={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=n,m=Symbol.for("react.element"),v=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,b=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function d(i,t,o){var e,s={},a=null,p=null;o!==void 0&&(a=""+o),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(p=t.ref);for(e in t)j.call(t,e)&&!S.hasOwnProperty(e)&&(s[e]=t[e]);if(i&&i.defaultProps)for(e in t=i.defaultProps,t)s[e]===void 0&&(s[e]=t[e]);return{$$typeof:m,type:i,key:a,ref:p,props:s,_owner:b.current}}l.Fragment=v;l.jsx=d;l.jsxs=d;y.exports=l;var r=y.exports;function E(){const[i,t]=n.useState(""),[o,e]=n.useState(""),[s,a]=n.useState(""),[p,u]=n.useState(""),[f,x]=n.useState(""),_=async()=>{const c=await(await fetch("http://www.boredapi.com/api/activity/")).json();t(c.activity),e(c.accessibility),a(c.type),u(c.participants),x(c.price)};return r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:i}),r.jsx("h1",{children:o}),r.jsx("h1",{children:s}),r.jsx("h1",{children:p}),r.jsx("h1",{children:f}),r.jsx("button",{onClick:_,className:"btn btn-primary",children:"Obtener Actividad Aleatoria"})]})}export{E as default};
