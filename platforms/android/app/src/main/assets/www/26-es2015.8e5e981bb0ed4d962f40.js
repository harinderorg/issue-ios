(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"UrF/":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class o{}var u=e("pMnS"),i=e("MKJQ"),a=e("sZkV"),d=e("s7LF"),r=e("SVse"),s=e("iInd"),c=e("mrSG"),g=e("Io7v"),m=e("SlxW"),p=e("oZWX"),f=e("mCPD");class C{constructor(n,l,e,t,o,u,i,a){this.formBuilder=n,this.noti=l,this.stripe=e,this.api=t,this.route=o,this.router=u,this.payPal=i,this.alertController=a,this.is_submit=!1,this.makeform()}ngOnInit(){}makeform(){this.myform=this.formBuilder.group({amount:["",d.k.compose([d.k.required])],fname:["",d.k.compose([d.k.required])],address:["",d.k.compose([d.k.required])],city:["",d.k.compose([d.k.required])],state:["",d.k.compose([d.k.required])],zcode:["",d.k.compose([d.k.required])],mode:[null,d.k.compose([d.k.required])]})}stripepay(){this.is_submit=!0,this.myform.valid&&this.payPal.init({PayPalEnvironmentProduction:"qwertyhjhytrewqwertyhytrewzR3NJ8c-sGcVud0kWXq1TsypeZh9s0LAXVEeH-Q0fTv_h5JNdvC5Nm",PayPalEnvironmentSandbox:"qwertyhjhytrewqwertyhytrewzR3NJ8c-sGcVud0kWXq1TsypeZh9s0LAXVEeH-Q0fTv_h5JNdvC5Nm"}).then(()=>{this.payPal.prepareToRender("PayPalEnvironmentProduction",new f.b({})).then(()=>{let n=new f.c(String(this.myform.value.amount),"USD","Description","sale");this.payPal.renderSinglePaymentUI(n).then(()=>{this.api.postdata("paypal",{data:{fname:this.myform.value.fname,address:this.myform.value.address,city:this.myform.value.city,state:this.myform.value.state,zcode:this.myform.value.zcode,amount:this.myform.value.amount}},"").subscribe(n=>{},n=>{console.log(n)}),this.presentAlert(),this.router.navigate(["payment"])},()=>{})},()=>{})},()=>{})}presentAlert(){return c.a(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:"Donacione done!!",subHeader:"Thanks",message:"Gracias! Su donaci\xf3n ah sido enviada con \xe9xito",buttons:["Close"]});yield n.present()}))}}var v=t["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:var(--main-color)!important}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{position:absolute;left:50px;right:50px;top:10px;margin:auto;text-align:center}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]:after{display:none}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]{padding:15px 15px 20px}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--main-color);font-size:27px;font-weight:700;margin:0;text-transform:uppercase}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-weight:400}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   span[date][_ngcontent-%COMP%]{font-size:15px;margin-bottom:19px;display:block}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   [center][btn-theme][_ngcontent-%COMP%]{display:block;margin:15px auto 0;max-width:60%}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   h3[secHdng][_ngcontent-%COMP%]{font-family:'Freestyle Script'!important;font-size:48px;margin:0 0 20px;color:var(--main-color)}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   h3[secHdng][_ngcontent-%COMP%]:after{content:\"\";width:70px;height:5px;background:#fcbe02;display:block;margin:-7px 0 0 12px}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:15px}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block}ion-content[_ngcontent-%COMP%]   [dynamic][_ngcontent-%COMP%]{width:100%;float:left;margin:0 0 20px}ion-content[_ngcontent-%COMP%]   [dynamic][_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;float:left;height:400px;-o-object-fit:cover;object-fit:cover}.box-feilds[_ngcontent-%COMP%]{color:var(--main-color);font-family:Montserrat,sans-serif;position:relative;padding-left:40px!important;border-bottom:1px solid!important;margin-bottom:15px}.box-feilds[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-weight:600;padding-right:70px;--margin-right:34px;font-family:Montserrat,sans-serif!important;font-size:14px;padding-bottom:7px!important;--placeholder-color:var(--main-color);--placeholder-opacity:1;text-align:center;margin-right:35px}.box-feilds[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   .native-input[_ngcontent-%COMP%], .box-feilds[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]   [input][_ngcontent-%COMP%]{margin-right:34px;--margin-right:34px}.box-feilds[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif!important;font-size:14px;padding-bottom:7px!important;--placeholder-color:var(--main-color);--placeholder-opacity:1;margin-bottom:12px;text-align:center;font-weight:600}.box-feilds[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%]{font-weight:600;text-align:center}.box-feilds[_ngcontent-%COMP%]   ion-select-option[_ngcontent-%COMP%]{text-align:center;font-family:Montserrat,sans-serif!important;font-size:14px}.box-feilds[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{--margin-bottom:8px;margin-bottom:8px;font-family:Montserrat,sans-serif!important;font-size:14px;padding-bottom:7px!important;--placeholder-color:var(--main-color);--placeholder-opacity:1;font-weight:600}.box-feilds[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]   .datetime-text[_ngcontent-%COMP%]{margin-right:10px;font-weight:600}.box-feilds[_ngcontent-%COMP%]   img.icon-log[_ngcontent-%COMP%]{width:20px;position:absolute;top:7px;left:0}[btcss][_ngcontent-%COMP%]{display:block;margin:15px auto 0;max-width:80%;border-radius:2px;text-transform:uppercase;--background:white;--box-shadow:none;color:var(--main-color);font-size:14px;--padding-start:40px;--padding-end:40px;border:1px solid var(--main-color);--background-activated:transparent;font-weight:600}.valid[_ngcontent-%COMP%]{color:red;font-size:12px;text-align:center}.validd[_ngcontent-%COMP%]{margin-top:59px;color:red;font-size:12px;text-align:center;margin-left:50px}.myclass[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:30px}"]],data:{}});function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","valid"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" IPO DE DONACI\xd3N IS REQUIRED "]))],null,null)}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","valid"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" NOMBRE COMPLETO IS REQUIRED "]))],null,null)}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","valid"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" DIRECCION IS REQUIRED "]))],null,null)}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","valid"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" CIUDAD IS REQUIRED "]))],null,null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","valid"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" ESTADO IS REQUIRED "]))],null,null)}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","valid"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" CODIGO POSTAL IS REQUIRED "]))],null,null)}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","valid"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" CANTIDAD IS REQUIRED "]))],null,null)}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,10,"ion-header",[],null,null,null,i.I,i.i)),t["\u0275did"](1,49152,null,0,a.z,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,8,"ion-toolbar",[],null,null,null,i.Z,i.z)),t["\u0275did"](3,49152,null,0,a.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.C,i.c)),t["\u0275did"](5,49152,null,0,a.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,1,"ion-menu-button",[],null,null,null,i.O,i.p)),t["\u0275did"](7,49152,null,0,a.P,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,2,"ion-title",[],null,null,null,i.Y,i.y)),t["\u0275did"](9,49152,null,0,a.vb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](10,0,null,0,0,"img",[["alt",""],["class","logo-img"],["src","/assets/logo.png"],["width","120"]],null,null,null,null,null)),(n()(),t["\u0275eld"](11,0,null,null,116,"ion-content",[],null,null,null,i.F,i.f)),t["\u0275did"](12,49152,null,0,a.s,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](13,0,null,0,114,"div",[["sec1",""]],null,null,null,null,null)),(n()(),t["\u0275eld"](14,0,null,null,113,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var o=!0,u=n.component;return"submit"===l&&(o=!1!==t["\u0275nov"](n,16).onSubmit(e)&&o),"reset"===l&&(o=!1!==t["\u0275nov"](n,16).onReset()&&o),"ngSubmit"===l&&(o=!1!==u.stripepay()&&o),o}),null,null)),t["\u0275did"](15,16384,null,0,d.o,[],null,null),t["\u0275did"](16,540672,null,0,d.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,d.a,null,[d.d]),t["\u0275did"](18,16384,null,0,d.i,[[4,d.a]],null,null),(n()(),t["\u0275eld"](19,0,null,null,1,"h3",[["secHdng",""]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Informaci\xf3n Personal"])),(n()(),t["\u0275eld"](21,0,null,null,91,"ion-row",[],null,null,null,i.R,i.r)),t["\u0275did"](22,49152,null,0,a.eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](23,0,null,0,17,"ion-col",[["size","12"]],null,null,null,i.E,i.e)),t["\u0275did"](24,49152,null,0,a.r,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](25,0,null,0,13,"div",[["class","box-feilds"]],null,null,null,null,null)),(n()(),t["\u0275eld"](26,0,null,null,12,"ion-select",[["class","myclasss"],["formControlName","mode"],["placeholder","TIPO DE DONACI\xd3N"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,27)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,27)._handleChangeEvent(e.target)&&o),o}),i.T,i.s)),t["\u0275did"](27,16384,null,0,a.Ib,[t.ElementRef],null,null),t["\u0275prd"](1024,null,d.f,(function(n){return[n]}),[a.Ib]),t["\u0275did"](29,671744,null,0,d.c,[[3,d.a],[8,null],[8,null],[6,d.f],[2,d.n]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,d.g,null,[d.c]),t["\u0275did"](31,16384,null,0,d.h,[[4,d.g]],null,null),t["\u0275did"](32,49152,null,0,a.ib,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"]},null),(n()(),t["\u0275eld"](33,0,null,0,2,"ion-select-option",[["value","o"]],null,null,null,i.S,i.t)),t["\u0275did"](34,49152,null,0,a.jb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["\u0275ted"](-1,0,["OFRENDA"])),(n()(),t["\u0275eld"](36,0,null,0,2,"ion-select-option",[["value","d"]],null,null,null,i.S,i.t)),t["\u0275did"](37,49152,null,0,a.jb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(n()(),t["\u0275ted"](-1,0,["DIEZMO"])),(n()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](40,16384,null,0,r.i,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](41,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.E,i.e)),t["\u0275did"](42,49152,null,0,a.r,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](43,0,null,0,7,"div",[["class","box-feilds"]],null,null,null,null,null)),(n()(),t["\u0275eld"](44,0,null,null,6,"ion-input",[["class","myclass"],["formControlName","fname"],["placeholder","NOMBRE COMPLETO"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,45)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,45)._handleInputEvent(e.target)&&o),o}),i.K,i.k)),t["\u0275did"](45,16384,null,0,a.Jb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,d.f,(function(n){return[n]}),[a.Jb]),t["\u0275did"](47,671744,null,0,d.c,[[3,d.a],[8,null],[8,null],[6,d.f],[2,d.n]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,d.g,null,[d.c]),t["\u0275did"](49,16384,null,0,d.h,[[4,d.g]],null,null),t["\u0275did"](50,49152,null,0,a.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](52,16384,null,0,r.i,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](53,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.E,i.e)),t["\u0275did"](54,49152,null,0,a.r,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](55,0,null,0,7,"div",[["class","box-feilds"]],null,null,null,null,null)),(n()(),t["\u0275eld"](56,0,null,null,6,"ion-input",[["class","myclass"],["formControlName","address"],["placeholder","DIRECCION"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,57)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,57)._handleInputEvent(e.target)&&o),o}),i.K,i.k)),t["\u0275did"](57,16384,null,0,a.Jb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,d.f,(function(n){return[n]}),[a.Jb]),t["\u0275did"](59,671744,null,0,d.c,[[3,d.a],[8,null],[8,null],[6,d.f],[2,d.n]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,d.g,null,[d.c]),t["\u0275did"](61,16384,null,0,d.h,[[4,d.g]],null,null),t["\u0275did"](62,49152,null,0,a.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,y)),t["\u0275did"](64,16384,null,0,r.i,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](65,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.E,i.e)),t["\u0275did"](66,49152,null,0,a.r,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](67,0,null,0,7,"div",[["class","box-feilds"]],null,null,null,null,null)),(n()(),t["\u0275eld"](68,0,null,null,6,"ion-input",[["class","myclass"],["formControlName","city"],["placeholder","CIUDAD"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,69)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,69)._handleInputEvent(e.target)&&o),o}),i.K,i.k)),t["\u0275did"](69,16384,null,0,a.Jb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,d.f,(function(n){return[n]}),[a.Jb]),t["\u0275did"](71,671744,null,0,d.c,[[3,d.a],[8,null],[8,null],[6,d.f],[2,d.n]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,d.g,null,[d.c]),t["\u0275did"](73,16384,null,0,d.h,[[4,d.g]],null,null),t["\u0275did"](74,49152,null,0,a.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,P)),t["\u0275did"](76,16384,null,0,r.i,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](77,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.E,i.e)),t["\u0275did"](78,49152,null,0,a.r,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](79,0,null,0,7,"div",[["class","box-feilds"]],null,null,null,null,null)),(n()(),t["\u0275eld"](80,0,null,null,6,"ion-input",[["class","myclass"],["formControlName","state"],["placeholder","ESTADO"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,81)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,81)._handleInputEvent(e.target)&&o),o}),i.K,i.k)),t["\u0275did"](81,16384,null,0,a.Jb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,d.f,(function(n){return[n]}),[a.Jb]),t["\u0275did"](83,671744,null,0,d.c,[[3,d.a],[8,null],[8,null],[6,d.f],[2,d.n]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,d.g,null,[d.c]),t["\u0275did"](85,16384,null,0,d.h,[[4,d.g]],null,null),t["\u0275did"](86,49152,null,0,a.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](88,16384,null,0,r.i,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](89,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.E,i.e)),t["\u0275did"](90,49152,null,0,a.r,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](91,0,null,0,7,"div",[["class","box-feilds"]],null,null,null,null,null)),(n()(),t["\u0275eld"](92,0,null,null,6,"ion-input",[["class","myclass"],["formControlName","zcode"],["placeholder","CODIGO POSTAL"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,93)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,93)._handleInputEvent(e.target)&&o),o}),i.K,i.k)),t["\u0275did"](93,16384,null,0,a.Jb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,d.f,(function(n){return[n]}),[a.Jb]),t["\u0275did"](95,671744,null,0,d.c,[[3,d.a],[8,null],[8,null],[6,d.f],[2,d.n]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,d.g,null,[d.c]),t["\u0275did"](97,16384,null,0,d.h,[[4,d.g]],null,null),t["\u0275did"](98,49152,null,0,a.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](100,16384,null,0,r.i,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](101,0,null,0,11,"ion-col",[["size","12"]],null,null,null,i.E,i.e)),t["\u0275did"](102,49152,null,0,a.r,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](103,0,null,0,7,"div",[["class","box-feilds"]],null,null,null,null,null)),(n()(),t["\u0275eld"](104,0,null,null,6,"ion-input",[["class","myclass"],["formControlName","amount"],["placeholder","CANTIDAD"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0;return"ionBlur"===l&&(o=!1!==t["\u0275nov"](n,105)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t["\u0275nov"](n,105)._handleIonChange(e.target)&&o),o}),i.K,i.k)),t["\u0275did"](105,16384,null,0,a.Eb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,d.f,(function(n){return[n]}),[a.Eb]),t["\u0275did"](107,671744,null,0,d.c,[[3,d.a],[8,null],[8,null],[6,d.f],[2,d.n]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,d.g,null,[d.c]),t["\u0275did"](109,16384,null,0,d.h,[[4,d.g]],null,null),t["\u0275did"](110,49152,null,0,a.E,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](112,16384,null,0,r.i,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](113,0,null,null,14,"ion-row",[],null,null,null,i.R,i.r)),t["\u0275did"](114,49152,null,0,a.eb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](115,0,null,0,12,"ion-col",[["size","12"]],null,null,null,i.E,i.e)),t["\u0275did"](116,49152,null,0,a.r,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](117,0,null,0,2,"ion-button",[["btcss",""],["center",""],["class","test"],["type","submit"]],null,null,null,i.B,i.b)),t["\u0275did"](118,49152,null,0,a.i,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{type:[0,"type"]},null),(n()(),t["\u0275ted"](-1,0,["Donar ahora"])),(n()(),t["\u0275eld"](120,0,null,0,7,"ion-button",[["btcss",""],["center",""],["class","test"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,122).onClick()&&o),"click"===l&&(o=!1!==t["\u0275nov"](n,124).onClick(e)&&o),o}),i.B,i.b)),t["\u0275did"](121,49152,null,0,a.i,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),t["\u0275did"](122,16384,null,0,s.n,[s.m,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](123,1),t["\u0275did"](124,737280,null,0,a.Hb,[r.g,a.Db,t.ElementRef,s.m,[2,s.n]],null,null),(n()(),t["\u0275eld"](125,0,null,0,1,"ion-icon",[["name","arrow-back-circle-outline"]],null,null,null,i.J,i.j)),t["\u0275did"](126,49152,null,0,a.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275ted"](-1,0,[" Regresar"]))],(function(n,l){var e=l.component;n(l,16,0,e.myform),n(l,24,0,"12"),n(l,29,0,"mode"),n(l,32,0,"TIPO DE DONACI\xd3N"),n(l,34,0,"o"),n(l,37,0,"d"),n(l,40,0,!e.myform.controls.mode.valid&&e.is_submit),n(l,42,0,"12"),n(l,47,0,"fname"),n(l,50,0,"NOMBRE COMPLETO","text"),n(l,52,0,!e.myform.controls.fname.valid&&e.is_submit),n(l,54,0,"12"),n(l,59,0,"address"),n(l,62,0,"DIRECCION","text"),n(l,64,0,!e.myform.controls.address.valid&&e.is_submit),n(l,66,0,"12"),n(l,71,0,"city"),n(l,74,0,"CIUDAD","text"),n(l,76,0,!e.myform.controls.city.valid&&e.is_submit),n(l,78,0,"12"),n(l,83,0,"state"),n(l,86,0,"ESTADO","text"),n(l,88,0,!e.myform.controls.state.valid&&e.is_submit),n(l,90,0,"12"),n(l,95,0,"zcode"),n(l,98,0,"CODIGO POSTAL","text"),n(l,100,0,!e.myform.controls.zcode.valid&&e.is_submit),n(l,102,0,"12"),n(l,107,0,"amount"),n(l,110,0,"CANTIDAD","number"),n(l,112,0,!e.myform.controls.amount.valid&&e.is_submit),n(l,116,0,"12"),n(l,118,0,"submit");var t=n(l,123,0,"/payment");n(l,122,0,t),n(l,124,0),n(l,126,0,"arrow-back-circle-outline")}),(function(n,l){n(l,14,0,t["\u0275nov"](l,18).ngClassUntouched,t["\u0275nov"](l,18).ngClassTouched,t["\u0275nov"](l,18).ngClassPristine,t["\u0275nov"](l,18).ngClassDirty,t["\u0275nov"](l,18).ngClassValid,t["\u0275nov"](l,18).ngClassInvalid,t["\u0275nov"](l,18).ngClassPending),n(l,26,0,t["\u0275nov"](l,31).ngClassUntouched,t["\u0275nov"](l,31).ngClassTouched,t["\u0275nov"](l,31).ngClassPristine,t["\u0275nov"](l,31).ngClassDirty,t["\u0275nov"](l,31).ngClassValid,t["\u0275nov"](l,31).ngClassInvalid,t["\u0275nov"](l,31).ngClassPending),n(l,44,0,t["\u0275nov"](l,49).ngClassUntouched,t["\u0275nov"](l,49).ngClassTouched,t["\u0275nov"](l,49).ngClassPristine,t["\u0275nov"](l,49).ngClassDirty,t["\u0275nov"](l,49).ngClassValid,t["\u0275nov"](l,49).ngClassInvalid,t["\u0275nov"](l,49).ngClassPending),n(l,56,0,t["\u0275nov"](l,61).ngClassUntouched,t["\u0275nov"](l,61).ngClassTouched,t["\u0275nov"](l,61).ngClassPristine,t["\u0275nov"](l,61).ngClassDirty,t["\u0275nov"](l,61).ngClassValid,t["\u0275nov"](l,61).ngClassInvalid,t["\u0275nov"](l,61).ngClassPending),n(l,68,0,t["\u0275nov"](l,73).ngClassUntouched,t["\u0275nov"](l,73).ngClassTouched,t["\u0275nov"](l,73).ngClassPristine,t["\u0275nov"](l,73).ngClassDirty,t["\u0275nov"](l,73).ngClassValid,t["\u0275nov"](l,73).ngClassInvalid,t["\u0275nov"](l,73).ngClassPending),n(l,80,0,t["\u0275nov"](l,85).ngClassUntouched,t["\u0275nov"](l,85).ngClassTouched,t["\u0275nov"](l,85).ngClassPristine,t["\u0275nov"](l,85).ngClassDirty,t["\u0275nov"](l,85).ngClassValid,t["\u0275nov"](l,85).ngClassInvalid,t["\u0275nov"](l,85).ngClassPending),n(l,92,0,t["\u0275nov"](l,97).ngClassUntouched,t["\u0275nov"](l,97).ngClassTouched,t["\u0275nov"](l,97).ngClassPristine,t["\u0275nov"](l,97).ngClassDirty,t["\u0275nov"](l,97).ngClassValid,t["\u0275nov"](l,97).ngClassInvalid,t["\u0275nov"](l,97).ngClassPending),n(l,104,0,t["\u0275nov"](l,109).ngClassUntouched,t["\u0275nov"](l,109).ngClassTouched,t["\u0275nov"](l,109).ngClassPristine,t["\u0275nov"](l,109).ngClassDirty,t["\u0275nov"](l,109).ngClassValid,t["\u0275nov"](l,109).ngClassInvalid,t["\u0275nov"](l,109).ngClassPending)}))}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-paypal",[],null,null,null,_,v)),t["\u0275did"](1,114688,null,0,C,[d.b,g.a,m.a,p.a,s.a,s.m,f.a,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}var M=t["\u0275ccf"]("app-paypal",C,x,{},{},[]);class D{}e.d(l,"PaypalPageModuleNgFactory",(function(){return I}));var I=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,M]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.k,r.j,[t.LOCALE_ID,[2,r.q]]),t["\u0275mpd"](4608,d.m,d.m,[]),t["\u0275mpd"](4608,a.b,a.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Cb,a.Cb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Gb,a.Gb,[a.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,d.b,d.b,[]),t["\u0275mpd"](1073742336,r.b,r.b,[]),t["\u0275mpd"](1073742336,d.l,d.l,[]),t["\u0275mpd"](1073742336,d.e,d.e,[]),t["\u0275mpd"](1073742336,a.zb,a.zb,[]),t["\u0275mpd"](1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),t["\u0275mpd"](1073742336,D,D,[]),t["\u0275mpd"](1073742336,d.j,d.j,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,s.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);