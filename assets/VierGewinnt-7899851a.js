import{d as q,r as v,e as C,o as u,c as h,a as t,F as k,f as y,t as r,n as A}from"./index-889a7f97.js";const H=t("h1",{id:"Überschrift"},"Vier Gewinnt",-1),J={id:"Spiel_Feld"},K={id:"Reihe1"},M=["onClick"],O={id:"Stapel"},P=t("div",null,"Score",-1),Y={__name:"VierGewinnt",setup(Q){q();const _=v("Es hat noch keiner Gewonnen"),b=v("Farbe"),d=v(0),S=v(0),p=v(0),o=v(0);var n=0;const e=C([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]),c=C([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]);function m(l,i){var f=E(l);i=f,f>-1&&(o.value==1?o.value=2:o.value==2&&(o.value=1),e[l][i]==0&&(e[l][i]=o.value),$(),z(),L())}function I(l,i){if(e[l][i]==1)return"Gelb";if(e[l][i]==2)return"Rot"}const T=()=>{n==0&&(n=setInterval(D,1e3),o.value=1)};function E(l,i){for(let f=0;f<e[l].length;f++)if(e[l][f]!=0){if(e[l][f]>0)return--f}return 5}function V(){o.value=0;for(let l=0;l<e.length;l++)for(let i=0;i<e[l].length;i++)e[l][i]=0,_.value="Es hat noch keiner Gewonnen",d.value=0,clearInterval(n),n=0}function G(){_.value="Gewonnen hat Spieler 2(Gelb)",o.value=0,p.value=p.value+1,clearInterval(n)}function $(){for(let l=0;l<e.length;l++)for(let i=0;i<e[l].length;i++)e[l][i]==1&&(i+1<6&&e[l][i+1]==1&&i+2<6&&e[l][i+2]==1&&i+3<6&&e[l][i+3]==1&&G(),l+1<7&&e[l+1][i]==1&&l+2<7&&e[l+2][i]==1&&l+3<7&&e[l+3][i]==1&&G(),l+1<7&&i+1<6&&e[l+1][i+1]==1&&l+2<7&&i+2<6&&e[l+2][i+2]==1&&l+3<7&&i+3<6&&e[l+3][i+3]==1&&G(),l+1<7&&i-1>-1&&e[l+1][i-1]==1&&l+2<7&&i-2>-1&&e[l+2][i-2]&&l+3<7&&i-3>-1&&e[l+3][i-3]&&G())}function R(){_.value="Gewonnen hat Spieler 1(Rot)",o.value=0,S.value=S.value+1,clearInterval(n)}function z(){for(let l=0;l<e.length;l++)for(let i=0;i<e[l].length;i++)e[l][i]==2&&(i+1<6&&e[l][i+1]==2&&i+2<6&&e[l][i+2]==2&&i+3<6&&e[l][i+3]==2&&R(),l+1<7&&e[l+1][i]==2&&l+2<7&&e[l+2][i]==2&&l+3<7&&e[l+3][i]==2&&R(),l+1<7&&i+1<6&&e[l+1][i+1]==2&&l+2<7&&i+2<6&&e[l+2][i+2]==2&&l+3<7&&i+3<6&&e[l+3][i+3]==2&&R(),l+1<7&&i-1>=0&&e[l+1][i-1]==2&&l+2<7&&i-2>-1&&e[l+2][i-2]==2&&l+3<7&&i-3>-1&&e[l+3][i-3]==2&&R())}function D(){d.value=d.value+1}function L(){o.value==1&&(b.value="Rot"),o.value==2&&(b.value="Gelb",W())}function N(){p.value=0,S.value=0}function W(){for(let i=0;i<e.length;i++)for(let f=0;f<e[i].length;f++){var l=0;e[i][f]==0&&(f+1<6&&e[i][f+1]==1&&(l=l+1,f+2<6&&e[i][f+2]==1&&(l=l+1,f+3<6&&e[i][f+3]==1&&(l=l+1))),i+1<7&&e[i+1][f]==1&&(l=l+1,i+2<7&&e[i+2][f]==1&&(l=l+1,i+3<7&&e[i+3][f]==1&&(l=l+1))),i+1<7&&f+1<6&&e[i+1][f+1]==1&&(l=l+1,i+2<7&&f+2<6&&e[i+2][f+2]==1&&(l=l+1,i+3<7&&f+3<6&&e[i+3][f+3]==1&&(l=l+1))),i+1<7&&f-1>-1&&e[i+1][f-1]==1&&(l=l+1,i+2<7&&f-2>-1&&e[i+2][f-2]&&(l=l+1,i+3<7&&f-3>-1&&e[i+3][f-3]&&(l=l+1))),i-1>=0&&f-1>-1&&e[i-1][f-1]==1&&(l=l+1,i-2>=0&&f-2>-1&&e[i-2][f-2]&&(l=l+1,i-3>=0&&f-3>-1&&e[i-3][f-3]&&(l=l+1))),i-1>=0&&f+1<6&&e[i-1][f+1]==1&&(l=l+1,i-2>=0&&f+2<6&&e[i-2][f+2]==1&&(l=l+1,i-3>=0&&f+3<6&&e[i-3][f+3]==1&&(l=l+1))),i-1>=0&&e[i-1][f]==1&&(l=l+1,i-2>=0&&e[i-2][f]==1&&(l=l+1,i-3>=0&&e[i-3][f]==1&&(l=l+1)))),c[i][f]=l}j()}function j(){var l=0,i=0,f=0;for(let a=0;a<c.length;a++)for(let s=0;s<c[a].length;s++)c[a][s]>l&&(console.log(m),l=c[a][s],i=a,f=s);m(i,f)}return(l,i)=>(u(),h(k,null,[H,t("div",J,[(u(!0),h(k,null,y(e,(f,a)=>(u(),h("div",K,[(u(!0),h(k,null,y(e[a],(s,F)=>(u(),h("div",{id:"Einzel",class:A(I(a,F)),onClick:U=>m(a,F)},null,10,M))),256))]))),256)),t("div",O,[t("button",{onClick:i[0]||(i[0]=f=>T()),id:"Start"},"Start"),t("button",{onClick:i[1]||(i[1]=f=>V()),id:"Reset"},"Reset"),t("div",null,"Spieler"+r(o.value),1),t("div",null,r(b.value),1),t("div",null,r(_.value),1),t("div",null,"Timer:"+r(d.value),1),P,t("div",null,"Spieler 1:"+r(S.value),1),t("div",null,"Spieler 2:"+r(p.value),1),t("button",{onClick:i[2]||(i[2]=f=>N()),id:"ScoreReset"},"Reset Score")])])],64))}};export{Y as default};
