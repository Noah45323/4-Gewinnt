import{_ as m,r as h,o as k,c as C,w as i,v as d,u as r,a as t,i as p,t as S,p as x,b as z}from"./index-e6d3f36f.js";const s=a=>(x("data-v-21b917d9"),a=a(),z(),a),I={id:"Stapel"},R=s(()=>t("h1",null,"Rechner",-1)),w=s(()=>t("label",{for:"zahl1"},"Zahl 1",-1)),y=s(()=>t("br",null,null,-1)),B=s(()=>t("label",{for:"zahl2"},"Zahl 2",-1)),V=s(()=>t("br",null,null,-1)),$=s(()=>t("br",null,null,-1)),g=s(()=>t("label",null,"Ergebnis: ",-1)),D={id:"result"},E={__name:"Rechner",setup(a){const u=h(0);var o,l;function v(){u.value=o+l}function b(){u.value=o-l}function _(){u.value=o/l}function f(){u.value=o*l}function c(){u.value=o%l}return(M,n)=>(k(),C("div",I,[R,w,i(t("input",{type:"number","onUpdate:modelValue":n[0]||(n[0]=e=>p(o)?o.value=e:o=e)},null,512),[[d,r(o)]]),y,B,i(t("input",{type:"number","onUpdate:modelValue":n[1]||(n[1]=e=>p(l)?l.value=e:l=e)},null,512),[[d,r(l)]]),V,t("button",{onClick:n[2]||(n[2]=e=>v())},"+"),t("button",{onClick:n[3]||(n[3]=e=>b())},"-"),t("button",{onClick:n[4]||(n[4]=e=>_())},"/"),t("button",{onClick:n[5]||(n[5]=e=>f())},"*"),t("button",{onClick:n[6]||(n[6]=e=>c())},"M"),$,g,t("span",D,S(u.value),1)]))}},Z=m(E,[["__scopeId","data-v-21b917d9"]]);export{Z as default};
