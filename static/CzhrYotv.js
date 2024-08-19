import{_ as A}from"./A2mmwMbh.js";import{_ as E}from"./D00Lnby-.js";import{_ as q,f as O,o as h,W as I,w as m,r as _,ab as U,ac as M,aj as S,$ as Y,a as r,ak as K,al as Z,am as ee,ad as ae,A as u,an as N,ao as R,ap as te,aq as re,ar as X,as as V,a1 as H,I as ie,L as ne,at as L,G as oe,au as le,av as P,Y as B,ai as z,c as w,t as d,E as Q,B as se,i as de,aw as ce,d as C,b,h as g}from"./3euBwjA9.js";import"./DmW9pSr4.js";const T={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},ue=e=>Object.keys(T).reduce((t,l)=>(e[l]!==void 0&&(t[l]=e[l]),t),{}),ge=O({inheritAttrs:!1,props:{...T,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(t,l,{isActive:i,isExactActive:a}){return e.exactQuery&&!Z(t.query,l.query)||e.exactHash&&t.hash!==l.hash?e.inactiveClass:e.exact&&a||!e.exact&&i?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),fe=["href","aria-disabled","role","rel","target","onClick"];function be(e,n,t,l,i,a){const o=E;return e.to?(h(),I(o,S({key:1},e.$props,{custom:""}),{default:m(({route:s,href:c,target:f,rel:k,navigate:p,isActive:v,isExactActive:x,isExternal:j})=>[r("a",S(e.$attrs,{href:e.disabled?void 0:c,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:k,target:f,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(s,e._.provides[K]||e.$route,{isActive:v,isExactActive:x}),onClick:$=>!j&&!e.disabled&&p($)}),[_(e.$slots,"default",U(M({isActive:e.active!==void 0?e.active:e.exact?x:v})))],16,fe)]),_:3},16)):(h(),I(Y(e.as),S({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:m(()=>[_(e.$slots,"default",U(M({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const W=q(ge,[["render",be]]),ve=(e,n,t,l,i=!1)=>{const a=ee(),o=ae(),s=u(()=>{var v;const f=N(n),k=N(t),p=N(l);return R((f==null?void 0:f.strategy)||((v=o.ui)==null?void 0:v.strategy),p?{wrapper:p}:{},f||{},i?te(o.ui,e,{}):{},k||{})}),c=u(()=>re(a,["class"]));return{ui:s,attrs:c}};function he({ui:e,props:n}){const t=ne();if(X("ButtonGroupContextConsumer",!0),V("ButtonGroupContextConsumer",!1))return{size:u(()=>n.size),rounded:u(()=>e.value.rounded)};let i=t.parent,a;for(;i&&!a;){if(i.type.name==="ButtonGroup"){a=V(`group-${i.uid}`);break}i=i.parent}const o=u(()=>a==null?void 0:a.value.children.indexOf(t));return H(()=>{a==null||a.value.register(t)}),ie(()=>{a==null||a.value.unregister(t)}),{size:u(()=>a!=null&&a.value?(a==null?void 0:a.value.size)??e.value.default.size:n.size),rounded:u(()=>!a||o.value===-1?e.value.rounded:a.value.children.length===1?a.value.ui.rounded:o.value===0?a.value.rounded.start:o.value===a.value.children.length-1?a.value.rounded.end:"rounded-none")}}const pe={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},J={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},D={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...J,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...D,option:{...D.option},arrow:{...J}});const y=R(L.ui.strategy,L.ui.button,pe),ye=O({components:{UIcon:A,ULink:W},inheritAttrs:!1,props:{...T,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.size).includes(e)}},color:{type:String,default:()=>y.default.color,validator(e){return[...L.ui.colors,...Object.keys(y.color)].includes(e)}},variant:{type:String,default:()=>y.default.variant,validator(e){return[...Object.keys(y.variant),...Object.values(y.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>y.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:n}){const{ui:t,attrs:l}=ve("button",oe(e,"ui"),y),{size:i,rounded:a}=he({ui:t,props:e}),o=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),s=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),c=u(()=>e.square||!n.default&&!e.label),f=u(()=>{var F,G;const $=((G=(F=t.value.color)==null?void 0:F[e.color])==null?void 0:G[e.variant])||t.value.variant[e.variant];return le(P(t.value.base,t.value.font,a.value,t.value.size[i.value],t.value.gap[i.value],e.padded&&t.value[c.value?"square":"padding"][i.value],$==null?void 0:$.replaceAll("{color}",e.color),e.block?t.value.block:t.value.inline),e.class)}),k=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),p=u(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),v=u(()=>P(t.value.icon.base,t.value.icon.size[i.value],e.loading&&t.value.icon.loading)),x=u(()=>P(t.value.icon.base,t.value.icon.size[i.value],e.loading&&!o.value&&t.value.icon.loading)),j=u(()=>ue(e));return{ui:t,attrs:l,isLeading:o,isTrailing:s,isSquare:c,buttonClass:f,leadingIconName:k,trailingIconName:p,leadingIconClass:v,trailingIconClass:x,linkProps:j}}});function me(e,n,t,l,i,a){const o=A,s=W;return h(),I(s,S({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:m(()=>[_(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(h(),I(o,{key:0,name:e.leadingIconName,class:B(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):z("",!0)]),_(e.$slots,"default",{},()=>[e.label?(h(),w("span",{key:0,class:B([e.truncate?e.ui.truncate:""])},d(e.label),3)):z("",!0)]),_(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(h(),I(o,{key:0,name:e.trailingIconName,class:B(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):z("",!0)])]),_:3},16,["type","disabled","class"])}const ke=q(ye,[["render",me]]),xe=Symbol.for("nuxt:client-only"),_e=O({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:n,attrs:t}){const l=Q(!1);return H(()=>{l.value=!0}),X(xe,!0),i=>{var c;if(l.value)return(c=n.default)==null?void 0:c.call(n);const a=n.fallback||n.placeholder;if(a)return a();const o=i.fallback||i.placeholder||"",s=i.fallbackTag||i.placeholderTag||"span";return w(s,t,o)}}}),we=()=>se("color-mode").value,$e={class:"container relative mx-auto py-4 flex justify-between items-center max-md:justify-center"},Ce={class:"text-base"},Ie=r("span",{class:"font-bold text-xl"},"Lucas",-1),Se={class:"text-lg"},Be={class:"text-lg"},ze={class:"text-lg"},qe={class:"max-md:absolute max-md:right-0"},Oe={class:"flex gap-4 max-md:hidden"},je={class:"leading-[32px]"},Ne={href:"/tech-dev"},Pe={class:"leading-[32px]"},Le={href:"/travel"},Ae={class:"leading-[32px]"},Te={href:"/food"},Fe={class:"leading-[32px]"},Ge={href:"/archives"},Ue={class:"leading-[32px]"},Me={href:"/"},Ve={class:"leading-[32px]"},De=r("div",{class:"w-8 h-8"},null,-1),Ee={class:"flex flex-col items-center py-10 gap-4"},Re={class:"leading-[32px]"},Xe={href:"/tech-dev"},He={class:"leading-[32px]"},Qe={href:"/travel"},We={class:"leading-[32px]"},Je={href:"/food"},Ye={class:"leading-[32px]"},Ke={href:"/archives"},Ze={class:"leading-[32px]"},ea={href:"/"},aa={class:"leading-[32px]"},ta=r("div",{class:"w-8 h-8"},null,-1),ra=O({__name:"Header",setup(e){const{locale:n,locales:t}=de(),l=Q(!1),i=ce(),a=we(),o=u({get(){return a.value==="dark"},set(){a.preference=a.value==="dark"?"light":"dark"}});return(s,c)=>{const f=A,k=E,p=ke,v=_e;return h(),w("header",null,[r("div",$e,[r("h1",Ce,[Ie,C(" | "),r("span",Se,d(s.$t("header.tech")),1),C(" X "),r("span",Be,d(s.$t("header.travel")),1),C(" X "),r("span",ze,d(s.$t("header.food")),1)]),r("div",qe,[b(f,{class:"hidden max-md:block w-5 h-5 mr-4 cursor-pointer",name:"i-ic:round-menu",onClick:c[0]||(c[0]=x=>l.value=!g(l))}),r("ul",Oe,[r("li",je,[r("a",Ne,d(s.$t("header.techDev")),1)]),r("li",Pe,[r("a",Le,d(s.$t("header.travel")),1)]),r("li",Ae,[r("a",Te,d(s.$t("header.food")),1)]),r("li",Fe,[r("a",Ge,d(s.$t("header.archives")),1)]),r("li",Ue,[r("a",Me,d(s.$t("header.about")),1)]),r("li",Ve,[b(k,{class:"flex gap-1 items-center hover:bg-accent-cyan",to:g(n)==="tw"?g(i)("en"):g(i)("tw")},{default:m(()=>[b(f,{name:"i-icon-park-outline:world",class:"w-5 h-5"}),C(d(g(n)==="tw"?"EN":"中文"),1)]),_:1},8,["to"])]),r("li",null,[b(v,null,{fallback:m(()=>[De]),default:m(()=>[b(p,{icon:g(o)?"i-heroicons-moon-20-solid":"i-heroicons-sun-20-solid",color:"gray",variant:"ghost","aria-label":"Theme",onClick:c[1]||(c[1]=x=>o.value=!g(o))},null,8,["icon"])]),_:1})])])]),g(l)?(h(),w("div",{key:0,class:B([g(o)?"bg-[#000000]":"bg-[#FFFFFF]","left-0 top-0 fixed z-2 w-full"])},[b(f,{class:"hidden max-md:block ml-auto mr-5 mt-5 w-5 h-5 mr-4 cursor-pointer",name:"i-line-md:close",onClick:c[2]||(c[2]=x=>l.value=!g(l))}),r("ul",Ee,[r("li",Re,[r("a",Xe,d(s.$t("header.techDev")),1)]),r("li",He,[r("a",Qe,d(s.$t("header.travel")),1)]),r("li",We,[r("a",Je,d(s.$t("header.food")),1)]),r("li",Ye,[r("a",Ke,d(s.$t("header.archives")),1)]),r("li",Ze,[r("a",ea,d(s.$t("header.about")),1)]),r("li",aa,[b(k,{class:"flex gap-1 items-center hover:bg-accent-cyan",to:g(n)==="tw"?g(i)("en"):g(i)("tw")},{default:m(()=>[b(f,{name:"i-icon-park-outline:world",class:"w-5 h-5"}),C(d(g(n)==="tw"?"EN":"中文"),1)]),_:1},8,["to"])]),r("li",null,[b(v,null,{fallback:m(()=>[ta]),default:m(()=>[b(p,{icon:g(o)?"i-heroicons-moon-20-solid":"i-heroicons-sun-20-solid",color:"gray",variant:"ghost","aria-label":"Theme",onClick:c[3]||(c[3]=x=>o.value=!g(o))},null,8,["icon"])]),_:1})])])],2)):z("",!0)])])}}}),ia={},na={class:"text-center py-4"};function oa(e,n){return h(),w("footer",na," © 2024 Lucas | "+d(e.$t("header.tech"))+" X "+d(e.$t("header.travel"))+" X "+d(e.$t("header.food"))+". All rights reserved. ",1)}const la=q(ia,[["render",oa]]),sa={};function da(e,n){const t=ra,l=la;return h(),w("div",null,[b(t),_(e.$slots,"default"),b(l)])}const ba=q(sa,[["render",da]]);export{ba as default};
