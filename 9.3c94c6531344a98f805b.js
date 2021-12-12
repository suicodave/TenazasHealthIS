(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3ros":function(t,e,n){"use strict";n.r(e),n.d(e,"GalleryModule",function(){return h});var i=n("hctd"),s=n("tyNb"),r=n("ofXK"),a=n("fXoL"),o=n("KwcT"),c=n("j+WJ"),u=n("Wp6s");let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Jb({type:t,selectors:[["app-gallery-grid-item"]],inputs:{item:"item"},decls:10,vars:4,consts:[[3,"href"],[1,"grid","grid-cols-3"],[1,"labels","col-span-2"],[1,"text-lg","text-blue-600"],[1,"text-sm","text-gray-500"],[1,"image","flex","justify-end"],[1,"h-32","w-32","object-contain",3,"src"]],template:function(t,e){1&t&&(a.Vb(0,"a",0),a.Vb(1,"mat-card"),a.Vb(2,"div",1),a.Vb(3,"div",2),a.Vb(4,"p",3),a.Cc(5),a.Ub(),a.Vb(6,"p",4),a.Cc(7),a.Ub(),a.Ub(),a.Vb(8,"div",5),a.Qb(9,"img",6),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&t&&(a.mc("href",e.item.path,a.uc),a.Eb(5),a.Ec(" ",e.item.name," "),a.Eb(2),a.Ec(" ",e.item.description," "),a.Eb(2),a.mc("src",null==e.item?null:e.item.image,a.uc))},directives:[u.a],encapsulation:2}),t})();function b(t,e){1&t&&a.Qb(0,"app-gallery-grid-item",6),2&t&&a.mc("item",e.$implicit)}let p=(()=>{class t{constructor(t){this.auth=t,this.items=[{name:"Engagement Types",path:"./EngagementTypes",description:"Manage what services your patient can avail.",image:"assets/type.png"},{name:"Patients",path:"./Patients",description:"Manage your patient's personal information.",image:"assets/doctor.png"},{name:"Users",path:"./Users",description:"Manage user credentials and access.",image:"assets/auth.png"},{name:"Roles",path:"./Roles",description:"Configure what user's can do in the system.",image:"assets/role.png"},{name:"Engagements",path:"./Engagements",description:"See what services your patients have engaged with you.",image:"assets/engagement.png"},{name:"Reports",path:"./Reports",description:"Generate reports monthly or by date range.",image:"assets/report.png"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(o.a))},t.\u0275cmp=a.Jb({type:t,selectors:[["app-gallery-grid"]],decls:7,vars:1,consts:[[1,"w-full","bg-gray-200","min-h-full","relative"],[1,"grid","grid-cols-3","gap-8","p-8"],[3,"item",4,"ngFor","ngForOf"],[1,"illustrations","w-full","flex","justify-evenly"],["src","assets/dataprocessing.png",1,"h-80","w-80"],["src","assets/health.png",1,"h-80","w-80"],[3,"item"]],template:function(t,e){1&t&&(a.Vb(0,"div",0),a.Qb(1,"app-toolbar"),a.Vb(2,"div",1),a.Ac(3,b,1,1,"app-gallery-grid-item",2),a.Ub(),a.Vb(4,"div",3),a.Qb(5,"img",4),a.Qb(6,"img",5),a.Ub(),a.Ub()),2&t&&(a.Eb(3),a.mc("ngForOf",e.items))},directives:[c.a,r.k,l],encapsulation:2}),t})();var g=n("UbJi"),m=n("HUga");const d=[{path:"",component:p}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({imports:[[r.c,g.b,i.a,s.e.forChild(d),m.a]]}),t})()},KwcT:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("eIep"),s=n("eJWM"),r=n("LRne"),a=n("fXoL"),o=n("UbJi"),c=n("I/3d");let u=(()=>{class t{constructor(t,e){this.auth=t,this.fireStore=e}getCurrentUser(){return this.auth.authState.pipe(Object(i.a)(t=>this.fireStore.collection(s.e,e=>e.where("email","==",null==t?void 0:t.email)).valueChanges({idField:"id"})),Object(i.a)(t=>Object(r.a)(t[0])))}hasRole(t){return this.getCurrentUser().pipe(Object(i.a)(e=>Object(r.a)(e.role.name==t)))}get isAdmin(){return this.hasRole("Administrator")}get isAuditor(){return this.hasRole("Auditor")}get isEditor(){return this.hasRole("Editor")}}return t.\u0275fac=function(e){return new(e||t)(a.Zb(o.a),a.Zb(c.a))},t.\u0275prov=a.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},eJWM:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return r}),n.d(e,"e",function(){return a}),n.d(e,"d",function(){return o});const i="EngagementTypes",s="Patients",r="Engagements",a="Users",o="Roles"},"j+WJ":function(t,e,n){"use strict";n.d(e,"a",function(){return g});var i=n("fXoL"),s=n("0IaG"),r=n("bTqV"),a=n("UbJi"),o=n("tyNb");let c=(()=>{class t{constructor(t,e){this.auth=t,this.router=e}signOut(){this.auth.signOut().then(t=>this.router.navigate(["auth"]))}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(a.a),i.Pb(o.c))},t.\u0275dir=i.Kb({type:t,selectors:[["","appSignOut",""]],hostBindings:function(t,e){1&t&&i.cc("click",function(t){return e.signOut(t)})}}),t})(),u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-sign-out-dialog"]],decls:9,vars:0,consts:[["matDialogTitle",""],["align","end"],["mat-raised-button","","color","primary","matDialogClose","","appSignOut",""],["mat-button","","matDialogClose",""]],template:function(t,e){1&t&&(i.Vb(0,"h2",0),i.Cc(1,"Confirm Sign Out"),i.Ub(),i.Vb(2,"mat-dialog-content"),i.Cc(3," Are you sure you want to sign out? "),i.Ub(),i.Vb(4,"mat-dialog-actions",1),i.Vb(5,"button",2),i.Cc(6,"Yes"),i.Ub(),i.Vb(7,"button",3),i.Cc(8,"No"),i.Ub(),i.Ub())},directives:[s.h,s.e,s.c,r.b,s.d,c],encapsulation:2}),t})();var l=n("KwcT"),b=n("/t3+"),p=n("NFeN");let g=(()=>{class t{constructor(t,e){this.auth=t,this.dialog=e,this.user=null}ngOnInit(){this.getUser()}getUser(){return this.auth.getCurrentUser().subscribe(t=>this.user=t)}confirmSignOut(){this.dialog.open(u,{minWidth:"480px"})}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(l.a),i.Pb(s.b))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-toolbar"]],decls:12,vars:1,consts:[["color","primary"],[1,"flex","justify-between","items-center","w-full"],["href","",1,"flex","items-center"],[1,"ml-2","mat-18"],[1,"controls"],[1,"text-sm","mr-4"],["mat-icon-button","",3,"click"],[1,"mat-18"]],template:function(t,e){1&t&&(i.Vb(0,"mat-toolbar",0),i.Vb(1,"div",1),i.Vb(2,"a",2),i.Cc(3,"Tenazas Health Information System "),i.Vb(4,"mat-icon",3),i.Cc(5,"home"),i.Ub(),i.Ub(),i.Vb(6,"div",4),i.Vb(7,"span",5),i.Cc(8),i.Ub(),i.Vb(9,"button",6),i.cc("click",function(){return e.confirmSignOut()}),i.Vb(10,"mat-icon",7),i.Cc(11,"power_settings_new"),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Eb(8),i.Ec(" ",null==e.user?null:e.user.email," "))},directives:[b.a,p.a,r.b],encapsulation:2}),t})()}}]);