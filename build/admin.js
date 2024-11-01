(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,a=window.wp.domReady;var n=e.n(a);window.React,window.wp.api;const o=window.wp.i18n,l=window.wp.components,i=e=>{let{socialData:a}=e;const{socials:n}=a,[i,r]=(0,t.useState)({}),{data:s,error:c}=(e=>{const[a,n]=(0,t.useState)({}),[o,l]=(0,t.useState)(null);return(0,t.useEffect)((async()=>{const e=new URLSearchParams({action:"social_media_station_config_options"}),t=await fetch("/wp-admin/admin-ajax.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(e)});if(200===t.status){const{data:e}=await t.json();n(e.configs)}}),[]),{data:a,error:o}})();return(0,t.useEffect)((()=>{r(s)}),[s]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:""},(0,t.createElement)("h1",null,(0,o.__)("Social media station settings.","social-media-station")," ",(0,t.createElement)(l.Icon,{icon:"admin-plugins"})),(0,t.createElement)("div",{className:"login-logout-settings-form"},(0,t.createElement)("div",null,(0,t.createElement)(l.Card,{className:"wp-login-logout-settings-form",elevation:3,isRounded:!0,size:"medium"},n&&Object.entries(n).map(((e,a)=>{let[n,o]=e;const s=n;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.CardHeader,null,(0,t.createElement)(l.__experimentalText,null,(0,t.createElement)("strong",null,o.name))),(0,t.createElement)(l.CardBody,{size:"small",elevation:5},(0,t.createElement)(l.Flex,{key:s,gap:4},(0,t.createElement)(l.FlexItem,null),(0,t.createElement)(l.FlexBlock,null,i[s]&&o?.config.map(((e,a)=>{let{key:n,name:o,description:c}=e;return(0,t.createElement)(l.FlexItem,null,(0,t.createElement)(l.TextControl,{help:c,label:o,placeholder:"",type:"text",width:"4",onChange:e=>((e,t,a,n)=>{const o={...i};o[e][t].key===a&&(o[e][t].value=n),r(o)})(s,a,n,e),value:i[s][a].value}))}))))),(0,t.createElement)(l.CardDivider,null))}))),(0,t.createElement)(l.Button,{isPrimary:!0,isLarge:!0,onClick:async e=>{e.preventDefault();const t=new URLSearchParams({action:"social_media_station_config_options",configs:JSON.stringify({configs:i})}),a=await fetch("/wp-admin/admin-ajax.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t});if(200===a.status){const{data:e}=await a.json();r(e.configs)}}},(0,o.__)("Save Configs","social-media-station"))))))};n()((function(){const e=document.getElementById("social-media-station-plugin-settings"),a=socialMediaData;e&&(0,t.render)((0,t.createElement)(i,{socialData:a}),e)}))})();