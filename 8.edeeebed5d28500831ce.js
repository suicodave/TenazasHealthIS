(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"96Pz":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("d1mw"),r=n("fXoL"),o=n("0IaG");let s=(()=>{class t{constructor(t,e,n){this.componentName=t,this.dialog=e,this.containerRef=n,this.parentData=null}openForm(){this.dialog.open(this.componentName,{viewContainerRef:this.containerRef,minWidth:"398px",data:this.parentData})}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.c),r.Pb(o.b),r.Pb(r.S))},t.\u0275dir=r.Kb({type:t,selectors:[["","appFormCreateTrigger",""]],hostBindings:function(t,e){1&t&&r.cc("click",function(t){return e.openForm(t)})},inputs:{parentData:"parentData"}}),t})()},KwcT:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("eIep"),r=n("eJWM"),o=n("LRne"),s=n("fXoL"),a=n("UbJi"),c=n("I/3d");let u=(()=>{class t{constructor(t,e){this.auth=t,this.fireStore=e}getCurrentUser(){return this.auth.authState.pipe(Object(i.a)(t=>this.fireStore.collection(r.e,e=>e.where("email","==",null==t?void 0:t.email)).valueChanges({idField:"id"})),Object(i.a)(t=>Object(o.a)(t[0])))}hasRole(t){return this.getCurrentUser().pipe(Object(i.a)(e=>Object(o.a)(e.role.name==t)))}get isAdmin(){return this.hasRole("Administrator")}get isAuditor(){return this.hasRole("Auditor")}get isEditor(){return this.hasRole("Editor")}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(a.a),s.Zb(c.a))},t.\u0275prov=s.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"aY+K":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n("d1mw"),r=n("fXoL"),o=n("I/3d"),s=n("UbJi"),a=n("3Pt+"),c=n("0IaG"),u=n("bTqV");const l=["*"];let d=(()=>{class t{constructor(t,e,n,i,o,s){this.displayName=t,this.collectionName=e,this.firestore=n,this.auth=i,this.formBuilder=o,this.dialogRef=s,this.form=this.formBuilder.group({}),this.isSaving=!1,this.formValue=t=>t.value,this.id=void 0,this.added=new r.o,this.collectionRef=this.firestore.collection(this.collectionName)}ngOnInit(){this.getCurrentUser()}getCurrentUser(){this.auth.currentUser.then(t=>{this.userId=null==t?void 0:t.email})}save(){if(!this.form.valid)return;this.isSaving=!0;const t=this.resolveAction();this.isSaving=!1,this.added.emit(t),this.dialogRef.close()}resolveAction(){return this.isEditingMode?this.update(this.form):this.create(this.form)}create(t){const e=this.formValue(this.form);return e.createdBy=this.userId,e.createdAt=new Date(Date.now()),this.collectionRef.add(e),e}update(t){const e=this.formValue(this.form);this.collectionRef.doc(this.id).update(e)}get isFormValid(){return this.form.valid}get isEditingMode(){return null!=this.id}get titlePrefix(){return this.isEditingMode?"Edit":"New"}close(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.d),r.Pb(i.b),r.Pb(o.a),r.Pb(s.a),r.Pb(a.d),r.Pb(c.g))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-form"]],inputs:{form:"form",formValue:"formValue",id:"id"},outputs:{added:"added"},ngContentSelectors:l,decls:10,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title","",1,"text-blue-500"],["align","end"],["mat-button","","type","submit","color","primary","mat-flat-button","",3,"disabled"],["mat-button","","mat-dialog-close","","type","button",1,"rounded-lg","text-gray-600"]],template:function(t,e){1&t&&(r.lc(),r.Vb(0,"form",0),r.cc("ngSubmit",function(){return e.save()}),r.Vb(1,"h2",1),r.Cc(2),r.Ub(),r.Vb(3,"mat-dialog-content"),r.kc(4),r.Ub(),r.Vb(5,"mat-dialog-actions",2),r.Vb(6,"button",3),r.Cc(7," Save "),r.Ub(),r.Vb(8,"button",4),r.Cc(9," Cancel "),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.mc("formGroup",e.form),r.Eb(2),r.Fc(" ",e.titlePrefix," ",e.displayName," "),r.Eb(4),r.mc("disabled",!e.isFormValid||e.isSaving))},directives:[a.s,a.l,a.f,c.h,c.e,c.c,u.b,c.d],encapsulation:2}),t})()},d1mw:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"e",function(){return c});var i=n("fXoL");const r=new i.s("collectionName"),o=new i.s("deleteHeader"),s=new i.s("collectionDisplayName"),a=new i.s("dialogComponent"),c=new i.s("updateDialogComponent")},eJWM:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"d",function(){return a});const i="EngagementTypes",r="Patients",o="Engagements",s="Users",a="Roles"},"j+WJ":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n("fXoL"),r=n("KwcT"),o=n("/t3+"),s=n("bTqV"),a=n("UbJi"),c=n("tyNb");let u=(()=>{class t{constructor(t,e){this.auth=t,this.router=e}signOut(){this.auth.signOut().then(t=>this.router.navigate(["auth"]))}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(a.a),i.Pb(c.c))},t.\u0275dir=i.Kb({type:t,selectors:[["","appSignOut",""]],hostBindings:function(t,e){1&t&&i.cc("click",function(t){return e.signOut(t)})}}),t})();var l=n("NFeN");let d=(()=>{class t{constructor(t){this.auth=t,this.user=null}ngOnInit(){this.getUser()}getUser(){return this.auth.getCurrentUser().subscribe(t=>this.user=t)}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(r.a))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-toolbar"]],decls:10,vars:1,consts:[["color","primary"],[1,"flex","justify-between","items-center","w-full"],["href",""],[1,"controls"],[1,"text-sm","mr-4"],["mat-icon-button","","appSignOut",""],[1,"mat-18"]],template:function(t,e){1&t&&(i.Vb(0,"mat-toolbar",0),i.Vb(1,"div",1),i.Vb(2,"a",2),i.Cc(3,"Tenazas Health Information System"),i.Ub(),i.Vb(4,"div",3),i.Vb(5,"span",4),i.Cc(6),i.Ub(),i.Vb(7,"button",5),i.Vb(8,"mat-icon",6),i.Cc(9,"power_settings_new"),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Eb(6),i.Ec(" ",null==e.user?null:e.user.email," "))},directives:[o.a,s.b,u,l.a],encapsulation:2}),t})()},vw2D:function(t,e,n){"use strict";n.r(e),n.d(e,"EngagementTypeModule",function(){return A});var i=n("eJWM"),r=n("d1mw"),o=n("hctd"),s=n("tyNb"),a=n("ofXK"),c=n("fXoL"),u=n("j+WJ"),l=n("Q4MQ"),d=n("I/3d"),b=n("KwcT"),m=n("Wp6s"),f=n("MutI"),p=n("bTqV"),h=n("96Pz"),g=n("f0Cb"),v=n("TO6b"),w=n("NFeN");const y=function(t){return{hidden:t}};function U(t,e){if(1&t&&(c.Vb(0,"button",5),c.Vb(1,"mat-icon",6),c.Cc(2," delete_outline "),c.Ub(),c.Ub()),2&t){const t=c.gc();c.mc("id",t.item.id)("ngClass",c.oc(2,y,!t.showDelete))}}let V=(()=>{class t{constructor(){this.showDelete=!1,this.readonly=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["app-engagement-type-item"]],inputs:{item:"item",readonly:"readonly"},decls:10,vars:7,consts:[[1,"grid","grid-cols-3","w-full","items-center",3,"mouseenter","mouseleave"],[1,"my-1","text-base"],[1,"meta","place-self-center"],[1,"my-1","text-xs","text-gray-500"],["mat-icon-button","","class","place-self-end","appDeleteTrigger","",3,"id","ngClass",4,"ngIf"],["mat-icon-button","","appDeleteTrigger","",1,"place-self-end",3,"id","ngClass"],[1,"text-red-500"]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.cc("mouseenter",function(){return e.showDelete=!0})("mouseleave",function(){return e.showDelete=!1}),c.Vb(1,"p",1),c.Cc(2),c.Ub(),c.Vb(3,"div",2),c.Vb(4,"p",3),c.Cc(5),c.hc(6,"date"),c.Ub(),c.Vb(7,"p",3),c.Cc(8),c.Ub(),c.Ub(),c.Ac(9,U,3,4,"button",4),c.Ub()),2&t&&(c.Eb(2),c.Dc(e.item.name),c.Eb(3),c.Ec(" ",c.jc(6,4,e.item.createdAt.toDate(),"medium")," "),c.Eb(3),c.Ec(" ",e.item.createdBy," "),c.Eb(1),c.mc("ngIf",!e.readonly))},directives:[a.l,p.b,v.a,a.j,w.a],pipes:[a.e],encapsulation:2}),t})();function C(t,e){1&t&&(c.Vb(0,"button",7),c.Cc(1," Add Type "),c.Ub())}function E(t,e){1&t&&c.Qb(0,"mat-divider")}function I(t,e){1&t&&c.Qb(0,"mat-divider")}function P(t,e){if(1&t&&(c.Tb(0),c.Vb(1,"div",8),c.Qb(2,"app-engagement-type-item",9),c.Ub(),c.Ac(3,I,1,0,"mat-divider",5),c.Sb()),2&t){const t=e.$implicit,n=e.last,i=c.gc();c.Eb(2),c.mc("item",t)("readonly",!i.isEditorRole),c.Eb(1),c.mc("ngIf",!n)}}let N=(()=>{class t extends l.a{constructor(t,e,n){super(e),this.firestore=t,this.collectionName=n,this.items=[],this.collectionRef=this.firestore.collection(this.collectionName)}ngOnInit(){this.collectionRef.valueChanges({idField:"id"}).subscribe(t=>{this.items=t})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(d.a),c.Pb(b.a),c.Pb(r.b))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-engagement-type-list"]],features:[c.Bb],decls:9,vars:3,consts:[[1,"rounded-lg"],[1,"flex","justify-between"],[1,"text-blue-500"],[1,"controls"],["mat-flat-button","","color","primary","class","rounded-lg text-white","appFormCreateTrigger","",4,"ngIf"],[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-flat-button","","color","primary","appFormCreateTrigger","",1,"rounded-lg","text-white"],[1,"p-2"],[3,"item","readonly"]],template:function(t,e){1&t&&(c.Vb(0,"mat-card",0),c.Vb(1,"div",1),c.Vb(2,"h1",2),c.Cc(3,"Engagement Types"),c.Ub(),c.Vb(4,"div",3),c.Ac(5,C,2,0,"button",4),c.Ub(),c.Ub(),c.Vb(6,"mat-list"),c.Ac(7,E,1,0,"mat-divider",5),c.Ac(8,P,4,3,"ng-container",6),c.Ub(),c.Ub()),2&t&&(c.Eb(5),c.mc("ngIf",e.isEditorRole),c.Eb(2),c.mc("ngIf",e.items.length>0),c.Eb(1),c.mc("ngForOf",e.items))},directives:[m.a,a.l,f.a,a.k,p.b,h.a,g.a,V],encapsulation:2}),t})(),x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["app-engagement-type-page"]],decls:5,vars:0,consts:[[1,"bg-gray-200","w-full","min-h-full"],[1,"flex","justify-center","items-center","mt-8"],[1,"w-2/5"]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.Qb(1,"app-toolbar"),c.Vb(2,"div",1),c.Vb(3,"div",2),c.Qb(4,"app-engagement-type-list"),c.Ub(),c.Ub(),c.Ub())},directives:[u.a,N],encapsulation:2}),t})();var O=n("3Pt+"),R=n("aY+K"),T=n("kmnG"),F=n("qFsG");let D=(()=>{class t{constructor(t){this.formBuilder=t}ngOnInit(){this.initForm()}initForm(){this.form=this.formBuilder.group({name:["",O.r.required]})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(O.d))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-engagement-type-form"]],decls:6,vars:2,consts:[[3,"form","formGroup"],["appearance","outline",1,"w-full"],["matInput","","type","text","required","","formControlName","name"]],template:function(t,e){1&t&&(c.Vb(0,"app-form",0),c.Vb(1,"div"),c.Vb(2,"mat-form-field",1),c.Vb(3,"mat-label"),c.Cc(4,"Name"),c.Ub(),c.Qb(5,"input",2),c.Ub(),c.Ub(),c.Ub()),2&t&&c.mc("form",e.form)("formGroup",e.form)},directives:[R.a,O.l,O.f,T.c,T.f,F.b,O.b,O.q,O.k,O.e],encapsulation:2}),t})();var J=n("HUga");const S=[{path:"",component:x}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({providers:[{provide:r.b,useValue:i.b},{provide:r.d,useValue:"Engagement Type"},{provide:r.c,useValue:D}],imports:[[a.c,s.e.forChild(S),o.a,O.p,d.b,J.a]]}),t})()}}]);