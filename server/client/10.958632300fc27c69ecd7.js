(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{nWY6:function(t,n,e){"use strict";e.r(n),e.d(n,"SettingModule",(function(){return p}));var i=e("ofXK"),r=e("PCNd"),o=e("fXoL");let c=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(n){return new(n||t)},imports:[[i.c,r.a]]}),t})();var s=e("tyNb");const a=function(){return["notification"]},u=function(){return["user"]};let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-sidebar"]],decls:6,vars:4,consts:[[3,"routerLink"]],template:function(t,n){1&t&&(o.Pb(0,"nav"),o.Pb(1,"ul"),o.Pb(2,"li",0),o.Fc(3,"Notification"),o.Ob(),o.Pb(4,"li",0),o.Fc(5,"User"),o.Ob(),o.Ob(),o.Ob()),2&t&&(o.xb(2),o.jc("routerLink",o.mc(2,a)),o.xb(2),o.jc("routerLink",o.mc(3,u)))},directives:[s.c],styles:[""]}),t})();const d=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-setting"]],decls:5,vars:0,consts:[[1,"setting-container"],[1,"setting-container__sidebar"],[1,"setting-container__content"]],template:function(t,n){1&t&&(o.Pb(0,"div",0),o.Pb(1,"section",1),o.Lb(2,"app-sidebar"),o.Ob(),o.Pb(3,"section",2),o.Lb(4,"router-outlet"),o.Ob(),o.Ob())},directives:[l,s.g],styles:['.setting-container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"sidebar content";grid-template-columns:1fr 3fr;width:100%;min-height:calc(100vh - 88px)}.setting-container__sidebar[_ngcontent-%COMP%]{grid-area:sidebar}.setting-container__content[_ngcontent-%COMP%]{grid-area:content}']}),t})(),children:[{path:"notification",loadChildren:()=>e.e(9).then(e.bind(null,"Es7H")).then(t=>t.NotificationModule)},{path:"user",loadChildren:()=>e.e(11).then(e.bind(null,"w3oH")).then(t=>t.UserModule)},{path:"",pathMatch:"full",redirectTo:"notification"},{path:"**",pathMatch:"full",redirectTo:"notification"}]}];let b=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(n){return new(n||t)},imports:[[s.f.forChild(d)],s.f]}),t})(),p=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(n){return new(n||t)},imports:[[i.c,c,b]]}),t})()}}]);