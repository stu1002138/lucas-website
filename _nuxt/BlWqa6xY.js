const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C3UCqo1b.js","./BJZxAR3i.js","./entry.BPpWdvkn.css","./lIjqMwXG.js","./NZ6J26ox.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{q as f,w as m,e as v,s as g,j as l,u as d,a as h}from"./lIjqMwXG.js";import{l as _,v as p,x as y,f as C,y as w,z as P,A as $,m as N,s as r}from"./BJZxAR3i.js";import{u as j}from"./NZ6J26ox.js";import{_ as T}from"./BmxCaVZ3.js";const x=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./C3UCqo1b.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=d();return{navigation:n}}const{data:s}=await h(`content-navigation-${p(a.value)}`,()=>x(a.value));return{navigation:s}},render(e){const t=N(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),O=D;export{O as default};
