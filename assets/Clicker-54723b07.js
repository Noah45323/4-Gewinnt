import{g as K,r as t,o as x,c as U,a as o,t as a,u as i,n as R,F as M}from"./index-84d86b26.js";const H="/4-Gewinnt/assets/box-c79dc06e.png",S="/4-Gewinnt/assets/Hallo-d931f7a7.png",$="/4-Gewinnt/assets/Pilot-f6437fa8.png",B=K("ClickerStore",()=>{const k=t(0),n=t(10),u=t(1),c=t(""),f=t(1e3),l=t(400),s=t(26e3),m=t(!1),_=t(5e3),d=t(41e3),p=t(9e3),v=t(0),P=t(!1),h=t(1e4),g=t(!1);return t(0),{Points1:k,Preis1:n,Pointsvalue:u,KeinePoints1:c,Preis2:f,Helferpoints:l,Helfertime:s,Helferaktiv3:m,Preis3:_,Pilottime:d,Pilotpoints:p,RandomZahl:v,Random324:P,RandomPoints:h,Pilot47:g}},{persist:!0});const Z=o("h1",{id:"Überschrift"},"Clicker",-1),w={id:"Unterüberschrift"},y=o("br",null,null,-1),G=o("br",null,null,-1),A=o("br",null,null,-1),z=o("br",null,null,-1),F=o("br",null,null,-1),D=o("br",null,null,-1),E=o("br",null,null,-1),N=o("br",null,null,-1),T=o("br",null,null,-1),V={id:"Bild_in"},j={id:"a323"},q={id:"b323"},I={id:"Shop"},J=o("div",{id:"Keine_Ahnung"},"Shop",-1),L={class:"upgrades"},O={class:"upgrades"},Q={class:"upgrades"},X={__name:"Clicker",setup(k){t(0),t(10),t(1),t(""),t(1e3),t(400),t(26e3),t(!1),t(5e3),t(41e3),t(9e3),t(0),t(!1),t(1e4),t(!1),t(0);const n=B();function u(){console.log(n.Pointsvalue),n.Points1=n.Points1+n.Pointsvalue,n.RandomZahl==0&&(P(),n.RandomZahl=n.RandomZahl=1)}function c(){n.Points1=n.Points1-n.Preis1,n.Pointsvalue=n.Pointsvalue+1,n.Preis1=n.Preis1*2,n.RandomPoints=n.RandomPoints+50}function f(){n.Points1>=n.Preis1?c():l()}function l(){n.KeinePoints1="Keine Points ",s(5e3).then(()=>{n.KeinePoints1=""})}function s(b){return new Promise(e=>setTimeout(e,b))}function m(){n.Points1>=n.Preis2?(n.Helferpoints=n.Helferpoints+100,n.Helfertime=n.Helfertime-1e3,n.Points1=n.Points1-n.Preis2,n.Preis2=n.Preis2*2,n.RandomPoints=n.RandomPoints+100,d(),_()):l()}function _(){n.Helferaktiv3=!0}function d(){s(n.Helfertime).then(()=>{n.Points1=n.Points1+n.Helferpoints,d()})}function p(){n.Points1>=n.Preis3?(n.Pilotpoints=n.Pilotpoints+1e3,n.Pilottime=n.Pilottime-1e3,n.Points1=n.Points1-n.Preis3,n.Preis3=n.Preis3*2,n.RandomPoints=n.RandomPoints+1e3,v(),g()):l()}function v(){s(n.Pilottime).then(()=>{n.Points1=n.Points1+n.Pilotpoints})}function P(){Math.floor(Math.random*50)==5&&(n.Random324=!0,s(5e3).then(()=>{n.Random324=!1})),s(5e3).then(()=>{P()})}function h(){n.Points1=n.Points1+Math.floor(Math.random*n.RandomPoints),n.Random324=!1}function g(){n.Pilot47=!0}function C(){n.Points1=0,n.Preis1=10,n.Pointsvalue=1,n.KeinePoints1="",n.Preis2=1e3,n.Helferpoints=400,n.Helfertime=26e3,n.Helferaktiv3=!1,n.Preis3=5e3,n.Pilottime=41e3,n.Pilotpoints=9e3,n.RandomZahl=0,n.Random324=!1,n.RandomPoints=1e4,n.Pilot47=!1,n.Redeemt=0}return(b,e)=>(x(),U(M,null,[Z,o("h1",w,a(i(n).KeinePoints1),1),o("div",null,"Points:"+a(i(n).Points1),1),o("div",null,[o("button",{onClick:e[0]||(e[0]=r=>C())},"Reset")]),y,G,A,z,F,D,E,N,T,o("div",V,[o("img",{draggable:"false",src:H,id:"Größe",onClick:e[1]||(e[1]=r=>u())})]),o("div",null,[o("img",{draggable:"false",src:H,id:"Random_Box",class:R({Random323:i(n).Random324}),onClick:e[2]||(e[2]=r=>h())},null,2)]),o("div",j,[o("img",{src:S,id:"Helfer",class:R({Helferaktiv2:i(n).Helferaktiv3})},null,2)]),o("div",q,[o("img",{src:$,id:"Pilot",class:R({Pilot32:i(n).Pilot47})},null,2)]),o("div",I,[J,o("div",L,[o("button",{onClick:e[3]||(e[3]=r=>f())},"Mehr Clicks: "+a(i(n).Preis1),1)]),o("div",O,[o("button",{onClick:e[4]||(e[4]=r=>m())},"Minen Arbeiter: "+a(i(n).Preis2),1)]),o("div",Q,[o("button",{onClick:e[5]||(e[5]=r=>p())},"Pilot: "+a(i(n).Preis3),1)])])],64))}};export{X as default};
