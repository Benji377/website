import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.FN0C0zGE.js";import{u as d}from"./asyncData.-tl_uplE.js";import f from"./Ellipsis.PfWS_1Qd.js";import y from"./ComponentPlaygroundData.gmOHl6SK.js";import"./TabsHeader.tfiD_iZ0.js";import"./ComponentPlaygroundProps.s3Hxcj7P.js";import"./ProseH4.FE8J8MzL.js";import"./ProseCodeInline.Z79QQp1n.js";import"./Badge.QQ-ppwRb.js";import"./MDCSlot.ARseJo7j.js";import"./slot.nqtvcybR.js";import"./ProseP.fAKnAGwN.js";import"./index.GpFfMGwd.js";import"./ComponentPlaygroundSlots.vue.1qSO7URO.js";import"./ComponentPlaygroundTokens.vue.OnRj269N.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-9ca9b996"]]);export{V as default};