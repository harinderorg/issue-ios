(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5zjZ":function(n,t,o){"use strict";o.r(t);var e=o("8Y7J");class i{}var l=o("pMnS"),c=o("MKJQ"),a=o("sZkV"),r=o("SVse"),g=o("Io7v"),s=o("oZWX"),p=o("9B/o");class d{constructor(n,t,o,e,i){this.router=n,this.notifi=t,this.apiservice=o,this.sanitizer=e,this.iab=i,this.novideos=!1,this.errors=["",null,void 0],this.slideOpts={slidesPerView:1.15,spaceBetween:20,speed:400,zoom:!1}}ionViewDidEnter(){this.items="",this.novideos=!1,this.vip_training()}ngOnInit(){}logout(){localStorage.clear(),this.router.navigate(["/options"])}vip_training(){this.notifi.presentLoading(),this.apiservice.postdata("getlivestream","","").subscribe(n=>{this.response=n,console.log(n),1==this.response.status?(this.notifi.stopLoading(),this.items=this.response.data,this.errors.indexOf(this.items)>=0&&(this.novideos=!0),console.log(this.items)):(this.novideos=!0,this.items=[],this.notifi.stopLoading(),this.notifi.presentToast(this.response.msg,"danger"))},n=>{this.notifi.stopLoading(),console.log(n)})}photoURL(n){return this.sanitizer.bypassSecurityTrustResourceUrl(n)}link(n){console.log(n.split("/").pop(-1));var t=n.split("/").pop(-1);this.iab.create("https://www.youtube.com/watch?v="+t,"_blank",{zoom:"no",location:"yes",toolbar:"yes",clearcache:"yes",clearsessioncache:"yes",disallowoverscroll:"yes",enableViewportScale:"yes"})}}var C=o("iInd"),u=o("cUpR"),O=e["\u0275crt"]({encapsulation:0,styles:[['ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:var(--main-color)!important}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{position:absolute;left:50px;right:50px;top:10px;margin:auto;text-align:center}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]:after{display:none}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]{padding:15px 15px 20px}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--main-color);font-size:27px;font-weight:700;margin:0;text-transform:uppercase}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-weight:400}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   span[date][_ngcontent-%COMP%]{font-size:15px;margin-bottom:15px;display:block}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   [center][btn-theme][_ngcontent-%COMP%]{display:block;margin:15px auto 0;max-width:60%}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   h3[secHdng][_ngcontent-%COMP%]{font-family:\'Freestyle Script\'!important;font-size:48px;margin:0 0 20px;color:var(--main-color)}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   h3[secHdng][_ngcontent-%COMP%]:after{content:"";width:70px;height:5px;background:#fcbe02;display:block;margin:-7px 0 0 12px}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:15px}ion-content[_ngcontent-%COMP%]   [sec1][_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block}ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Bebas;font-size:var(--ion-font-18);margin-bottom:0}ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h1[heading][_ngcontent-%COMP%]{padding-left:var(--ion-spacing-10)}ion-content[_ngcontent-%COMP%]   section[my-programs][_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:0;position:relateive}ion-content[_ngcontent-%COMP%]   section[my-programs][_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[play][_ngcontent-%COMP%]{height:170px;-o-object-fit:cover;object-fit:cover;width:100%}ion-content[_ngcontent-%COMP%]   section[my-programs][_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   [play-icon][_ngcontent-%COMP%]{position:absolute;color:var(--ion-color-dark-contrast);top:33%;font-size:53px;left:41%}ion-content[_ngcontent-%COMP%]   section[my-programs][_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-text[content][_ngcontent-%COMP%]{background:var(--ion-transparent-black);position:absolute;bottom:0;width:100%;left:0;color:var(--ion-color-dark-contrast)}ion-content[_ngcontent-%COMP%]   section[my-programs][_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-text[content][_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:var(--ion-spacing-10);font-size:var(--ion-font-13)}ion-content[_ngcontent-%COMP%]   section[my-programs][_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{max-width:350px!important}ion-content[_ngcontent-%COMP%]   section[available-programs][_ngcontent-%COMP%]{margin:var(--ion-spacing-10)}ion-content[_ngcontent-%COMP%]   section[available-programs][_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   section[available-programs][_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:25vh;margin:var(--ion-spacing-20) 0;-o-object-fit:cover;object-fit:cover;width:15vh}ion-content[_ngcontent-%COMP%]   section[available-programs][_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{padding-left:var(--ion-spacing-15);margin:var(--ion-spacing-20) 0}ion-content[_ngcontent-%COMP%]   section[available-programs][_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{white-space:nowrap;font-size:var(--ion-font-14);font-weight:600;overflow:hidden;text-overflow:ellipsis;width:150px;margin:var(--ion-spacing-5) 0}ion-content[_ngcontent-%COMP%]   section[available-programs][_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--ion-font-12);color:#909090;margin-top:var(--ion-spacing-5);margin-bottom:0}ion-content[_ngcontent-%COMP%]   section[available-programs][_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-app-color);text-decoration:unset}ion-content[_ngcontent-%COMP%]   section[available-programs][_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   [buy][_ngcontent-%COMP%]{--background:var(--ion-app-color);margin-top:var(--ion-spacing-5);font-size:var(--ion-font-12);--box-shadow:unset;--border-radius:100px;--background-hover:var(--ion-app-color)}ion-content[_ngcontent-%COMP%]   section[available-programs][_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   [view][_ngcontent-%COMP%]{--background:transparent;--color:var(--ion-app-color);margin-top:var(--ion-spacing-5);font-size:var(--ion-font-12);--box-shadow:unset;--border-radius:100px;--background-hover:transparent;--border-width:1px;--border-color:var(--ion-app-color);--border-style:solid;float:left}ion-content[_ngcontent-%COMP%]   section[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:10px}ion-content[_ngcontent-%COMP%]   section[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%]{position:relative}ion-content[_ngcontent-%COMP%]   section[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{max-width:350px!important}ion-content[_ngcontent-%COMP%]   section[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:26vh;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;width:100%}ion-content[_ngcontent-%COMP%]   section[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:var(--ion-font-12);color:var(--ion-app-color)}ion-content[_ngcontent-%COMP%]   section[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:var(--ion-font-16);font-weight:600;margin-top:5px;color:#6b6b73;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}ion-content[_ngcontent-%COMP%]   section[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--ion-font-12)}ion-content[_ngcontent-%COMP%]   section[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   [buy][_ngcontent-%COMP%]{--background:var(--ion-app-color);margin-top:var(--ion-spacing-5);font-size:var(--ion-font-12);--box-shadow:unset;--border-radius:100px;--background-hover:var(--ion-app-color)}ion-content[_ngcontent-%COMP%]   section[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   [view][_ngcontent-%COMP%]{--background:transparent;--color:var(--ion-app-color);margin-top:var(--ion-spacing-5);font-size:var(--ion-font-12);--box-shadow:unset;--border-radius:100px;--background-hover:transparent;--border-width:1px;--border-color:var(--ion-app-color);--border-style:solid}.drop-sw[_ngcontent-%COMP%]{position:absolute;top:4px;right:8px;color:#fff}.drop-sw[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{text-shadow:0 0 2px #000;font-size:17px;background:#0f697185;border-radius:50px;color:#fff;padding:2px}.drop-sw[_ngcontent-%COMP%]   ul.list-alsa[_ngcontent-%COMP%]{padding:5px 0;margin:0;font-size:12px;background:#fff;color:#222;list-style:none;text-align:left;min-width:133px;position:absolute;right:0;z-index:111}.drop-sw[_ngcontent-%COMP%]   ul.list-alsa[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;font-weight:600;letter-spacing:0;padding:5px}.drop-sw[_ngcontent-%COMP%]   ul.list-alsa[_ngcontent-%COMP%]:after{content:"";position:absolute;right:4px;top:-9px;border:5px solid #222;border-color:transparent transparent #fff}p.text-dr[_ngcontent-%COMP%]{text-align:left;font-size:11px!important;margin:10px 7px!important}p.text-dr[_ngcontent-%COMP%]   span.dts[_ngcontent-%COMP%]{float:right;font-size:8px;margin-top:3px}span.complts[_ngcontent-%COMP%]{position:absolute;bottom:38px;color:#fff;font-size:9px;text-shadow:0 0 8px #000;right:7px}ion-card-header.hfr-s[_ngcontent-%COMP%]{padding:10px 5px 0}ion-card-header.hfr-s[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:15px!important;margin-top:0!important;margin-bottom:3px}ion-card-header.hfr-s[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:11px!important;margin-top:0}ion-card-header.hfr-s[_ngcontent-%COMP%]   span.right-ic[_ngcontent-%COMP%]{float:right}ion-card-header.hfr-s[_ngcontent-%COMP%]   span.right-ic[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px;vertical-align:sub}ion-card-content.cont-psta[_ngcontent-%COMP%]{padding:0 5px 5px}ion-card-content.cont-psta[_ngcontent-%COMP%]   [marminus][_ngcontent-%COMP%]{background:#edf6f7;margin:10px -5px 6px}ion-card-content.cont-psta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px!important;margin-bottom:0;line-height:110%;text-align:center}ion-card-content.cont-psta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block}ion-card-content.cont-psta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:21px;color:#0f6971;margin-bottom:2px}ion-card-content.cont-psta[_ngcontent-%COMP%]   p[text-left][_ngcontent-%COMP%]{text-align:left;margin:5px 0 2px}.bg-dwa[_ngcontent-%COMP%]{position:relative;display:block}.bg-dwa[_ngcontent-%COMP%]   .icon-rec[_ngcontent-%COMP%]{position:absolute;top:10px;right:5px}.bg-dwa[_ngcontent-%COMP%]   .icon-rec[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(255,255,255,.8);padding:0 9px;margin-bottom:9px;display:-webkit-box;display:flex;height:23px;-webkit-box-align:center;align-items:center}.bg-dwa[_ngcontent-%COMP%]   .icon-rec[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px!important}.bg-dwa[_ngcontent-%COMP%]   .icon-rec[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px!important;color:var(--ion-app-color)}.bg-dwa[_ngcontent-%COMP%]   ul.list-tos[_ngcontent-%COMP%]{padding:5px;margin:0;line-height:normal;position:absolute;bottom:0;z-index:111;color:#fff;width:100%;background:rgba(0,0,0,.58)}.bg-dwa[_ngcontent-%COMP%]   ul.list-tos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:11px;margin-right:10px;color:#ececec}.bg-dwa[_ngcontent-%COMP%]   ul.list-tos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{vertical-align:bottom}.bg-dwa[_ngcontent-%COMP%]   ul.list-tos[_ngcontent-%COMP%]   li.str-rt[_ngcontent-%COMP%]{margin-right:0!important;float:right;color:#ff9800!important;margin-top:2px}ul.icon-rec[_ngcontent-%COMP%]{padding:0;margin:0;list-style:none;float:right}ul.icon-rec[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-left:5px}ul.icon-rec[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:13px!important;height:auto!important}.font-10[_ngcontent-%COMP%]{font-size:10px!important}[share-top][_ngcontent-%COMP%]{position:absolute;top:7px;right:7px;z-index:111;color:#fbfbfb;font-size:16px;text-shadow:0 0 10px #000}[recmded][_ngcontent-%COMP%]{position:absolute;top:7px;right:10px;background:#fff;z-index:111;width:20px;color:#0f6971;font-size:16px;text-shadow:0 0 10px #000;height:20px;border-radius:5px}[processtext][_ngcontent-%COMP%]{background:rgba(47,236,236,.411);padding:0 5px;color:#111;text-transform:uppercase;font-weight:700;font-size:8px;position:absolute;letter-spacing:1px;left:8px;top:-128px}img[recommended][_ngcontent-%COMP%]{max-width:50px;height:auto!important}ion-button[_ngcontent-%COMP%]{border-radius:100px}[plr-0][_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important;padding-top:10px;padding-bottom:10px}ion-card-content.cont-psta[_ngcontent-%COMP%]   [plr-0][_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600}.pd-ma[_ngcontent-%COMP%]{padding:0!important;margin:10px 10px 0!important}@media (min-width:575px){[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{max-width:350px!important}[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px!important}[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:18px!important}[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:15px!important}[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   [buy][_ngcontent-%COMP%], [available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   [view][_ngcontent-%COMP%], [available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px!important}[available][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   [marminus][_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px!important}.bg-dwa[_ngcontent-%COMP%]   .icon-rec[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:contain!important;object-fit:contain!important;height:auto!important}}.videos[_ngcontent-%COMP%]{width:10%}.menu[_ngcontent-%COMP%]{background-color:#d6ebe7}p[_ngcontent-%COMP%]{padding-left:10px;position:relative;margin-top:10px;margin-bottom:-7px}ion-progress-bar[_ngcontent-%COMP%]{--background:blue;--buffer-background:#F5B7B1;--progress-background:#E74C3C}span.error_span[_ngcontent-%COMP%]{padding-top:60%;position:absolute;padding-left:16%;color:grey}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{height:60px}']],data:{}});function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"p",[["class","nodata"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["No video found"]))],null,null)}function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,15,"ion-slides",[["mode","ios"]],null,null,null,c.V,c.v)),e["\u0275did"](1,49152,null,0,a.mb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],{mode:[0,"mode"]},null),(n()(),e["\u0275eld"](2,0,null,0,13,"ion-slide",[],null,null,null,c.U,c.u)),e["\u0275did"](3,49152,null,0,a.lb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](4,0,null,0,11,"ion-grid",[["class","pd-ma videos"]],null,null,null,c.H,c.h)),e["\u0275did"](5,49152,null,0,a.y,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](6,0,null,0,9,"ion-card",[],null,null,null,c.D,c.d)),e["\u0275did"](7,49152,null,0,a.k,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](8,0,null,0,1,"h6",[],null,null,null,null,null)),(n()(),e["\u0275ted"](9,null,["",""])),(n()(),e["\u0275eld"](10,0,null,0,1,"div",[],null,[[null,"click"]],(function(n,t,o){var e=!0,i=n.component;return"click"===t&&(e=!1!==i.link(null==i.items?null:i.items.video)&&e),e}),null,null)),(n()(),e["\u0275eld"](11,0,null,null,0,"iframe",[["allowfullscreen","allowfullscreen"],["frameborder","0"],["height","200"],["scrolling","yes"],["style","   pointer-events: none;\n\t\t\t\t"],["width","100%"]],[[8,"src",5]],null,null,null,null)),(n()(),e["\u0275eld"](12,0,null,0,3,"ion-text",[["content",""]],null,null,null,c.X,c.x)),e["\u0275did"](13,49152,null,0,a.sb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](14,0,null,0,1,"p",[["class","text-dr"]],null,null,null,null,null)),(n()(),e["\u0275ted"](15,null,["wertyuiklqwedrftghjk ",""]))],(function(n,t){n(t,1,0,"ios")}),(function(n,t){var o=t.component;n(t,9,0,null==o.items?null:o.items.title),n(t,11,0,o.photoURL(null==o.items?null:o.items.video)),n(t,15,0,null==o.items?null:o.items.descr)}))}function P(n){return e["\u0275vid"](0,[e["\u0275qud"](671088640,1,{slides:0}),(n()(),e["\u0275eld"](1,0,null,null,10,"ion-header",[],null,null,null,c.I,c.i)),e["\u0275did"](2,49152,null,0,a.z,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](3,0,null,0,8,"ion-toolbar",[],null,null,null,c.Z,c.z)),e["\u0275did"](4,49152,null,0,a.xb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.C,c.c)),e["\u0275did"](6,49152,null,0,a.j,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](7,0,null,0,1,"ion-menu-button",[],null,null,null,c.O,c.p)),e["\u0275did"](8,49152,null,0,a.P,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](9,0,null,0,2,"ion-title",[],null,null,null,c.Y,c.y)),e["\u0275did"](10,49152,null,0,a.vb,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](11,0,null,0,0,"img",[["alt",""],["class","logo-img"],["src","/assets/logo.png"],["width","120"]],null,null,null,null,null)),(n()(),e["\u0275eld"](12,0,null,null,8,"ion-content",[],null,null,null,c.F,c.f)),e["\u0275did"](13,49152,null,0,a.s,[e.ChangeDetectorRef,e.ElementRef,e.NgZone],null,null),(n()(),e["\u0275eld"](14,0,null,0,2,"div",[["sec1",""]],null,null,null,null,null)),(n()(),e["\u0275eld"](15,0,null,null,1,"h3",[["secHdng",""]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Live Streaming"])),(n()(),e["\u0275and"](16777216,null,0,1,null,_)),e["\u0275did"](18,16384,null,0,r.i,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,0,1,null,M)),e["\u0275did"](20,16384,null,0,r.i,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){var o=t.component;n(t,18,0,o.novideos),n(t,20,0,-1==o.errors.indexOf(o.items))}),null)}function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-chat",[],null,null,null,P,O)),e["\u0275did"](1,114688,null,0,d,[C.m,g.a,s.a,u.b,p.a],null,null)],(function(n,t){n(t,1,0)}),null)}var f=e["\u0275ccf"]("app-chat",d,m,{},{},[]),b=o("s7LF");class h{}o.d(t,"ChatPageModuleNgFactory",(function(){return x}));var x=e["\u0275cmf"](i,[],(function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[l.a,f]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.k,r.j,[e.LOCALE_ID,[2,r.q]]),e["\u0275mpd"](4608,b.m,b.m,[]),e["\u0275mpd"](4608,a.b,a.b,[e.NgZone,e.ApplicationRef]),e["\u0275mpd"](4608,a.Cb,a.Cb,[a.b,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,a.Gb,a.Gb,[a.b,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](1073742336,r.b,r.b,[]),e["\u0275mpd"](1073742336,b.l,b.l,[]),e["\u0275mpd"](1073742336,b.e,b.e,[]),e["\u0275mpd"](1073742336,a.zb,a.zb,[]),e["\u0275mpd"](1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),e["\u0275mpd"](1073742336,h,h,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,C.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);