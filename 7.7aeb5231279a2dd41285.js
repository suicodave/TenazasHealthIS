(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"96Pz":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("d1mw"),o=n("fXoL"),r=n("0IaG");let s=(()=>{class t{constructor(t,e,n){this.componentName=t,this.dialog=e,this.containerRef=n,this.parentData=null}openForm(){this.dialog.open(this.componentName,{viewContainerRef:this.containerRef,minWidth:"398px",data:this.parentData})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(i.c),o.Pb(r.b),o.Pb(o.S))},t.\u0275dir=o.Kb({type:t,selectors:[["","appFormCreateTrigger",""]],hostBindings:function(t,e){1&t&&o.cc("click",function(t){return e.openForm(t)})},inputs:{parentData:"parentData"}}),t})()},HUga:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("hctd"),o=n("ofXK"),r=n("3Pt+"),s=n("fXoL");let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({imports:[[o.c,i.a,r.o],i.a]}),t})()},"aY+K":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n("d1mw"),o=n("fXoL"),r=n("I/3d"),s=n("UbJi"),a=n("3Pt+"),c=n("0IaG"),u=n("bTqV");const l=["*"];let d=(()=>{class t{constructor(t,e,n,i,r,s){this.displayName=t,this.collectionName=e,this.firestore=n,this.auth=i,this.formBuilder=r,this.dialogRef=s,this.form=this.formBuilder.group({}),this.isSaving=!1,this.formValue=t=>t.value,this.id=void 0,this.added=new o.o,this.collectionRef=this.firestore.collection(this.collectionName)}ngOnInit(){this.getCurrentUser()}getCurrentUser(){this.auth.currentUser.then(t=>{this.userId=null==t?void 0:t.email})}save(){if(!this.form.valid)return;this.isSaving=!0;const t=this.resolveAction();this.isSaving=!1,this.added.emit(t),this.dialogRef.close()}resolveAction(){return this.isEditingMode?this.update(this.form):this.create(this.form)}create(t){const e=this.formValue(this.form);return e.createdBy=this.userId,e.createdAt=new Date(Date.now()),this.collectionRef.add(e),e}update(t){const e=this.formValue(this.form);this.collectionRef.doc(this.id).update(e)}get isFormValid(){return this.form.valid}get isEditingMode(){return null!=this.id}get titlePrefix(){return this.isEditingMode?"Edit":"New"}close(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(i.d),o.Pb(i.b),o.Pb(r.a),o.Pb(s.a),o.Pb(a.c),o.Pb(c.g))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-form"]],inputs:{form:"form",formValue:"formValue",id:"id"},outputs:{added:"added"},ngContentSelectors:l,decls:10,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title","",1,"text-blue-500"],["align","end"],["mat-button","","type","submit","color","primary","mat-flat-button","",3,"disabled"],["mat-button","","mat-dialog-close","","type","button",1,"rounded-lg","text-gray-600"]],template:function(t,e){1&t&&(o.lc(),o.Vb(0,"form",0),o.cc("ngSubmit",function(){return e.save()}),o.Vb(1,"h2",1),o.Ac(2),o.Ub(),o.Vb(3,"mat-dialog-content"),o.kc(4),o.Ub(),o.Vb(5,"mat-dialog-actions",2),o.Vb(6,"button",3),o.Ac(7," Save "),o.Ub(),o.Vb(8,"button",4),o.Ac(9," Cancel "),o.Ub(),o.Ub(),o.Ub()),2&t&&(o.mc("formGroup",e.form),o.Eb(2),o.Dc(" ",e.titlePrefix," ",e.displayName," "),o.Eb(4),o.mc("disabled",!e.isFormValid||e.isSaving))},directives:[a.r,a.k,a.e,c.h,c.e,c.c,u.b,c.d],encapsulation:2}),t})()},d1mw:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"a",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"e",function(){return c});var i=n("fXoL");const o=new i.s("collectionName"),r=new i.s("deleteHeader"),s=new i.s("collectionDisplayName"),a=new i.s("dialogComponent"),c=new i.s("updateDialogComponent")},eJWM:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r}),n.d(e,"e",function(){return s}),n.d(e,"d",function(){return a});const i="EngagementTypes",o="Patients",r="Engagements",s="Users",a="Roles"},"j+WJ":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("fXoL"),o=n("/t3+"),r=n("bTqV"),s=n("NFeN");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-toolbar"]],decls:8,vars:0,consts:[["color","primary"],[1,"flex","justify-between","items-center","w-full"],["href",""],[1,"controls"],["mat-icon-button",""],[1,"mat-18"]],template:function(t,e){1&t&&(i.Vb(0,"mat-toolbar",0),i.Vb(1,"div",1),i.Vb(2,"a",2),i.Ac(3,"Tenazas Health Information System"),i.Ub(),i.Vb(4,"div",3),i.Vb(5,"button",4),i.Vb(6,"mat-icon",5),i.Ac(7,"power_settings_new"),i.Ub(),i.Ub(),i.Ub(),i.Ub(),i.Ub())},directives:[o.a,r.b,s.a],encapsulation:2}),t})()},vw2D:function(t,e,n){"use strict";n.r(e),n.d(e,"EngagementTypeModule",function(){return T});var i=n("eJWM"),o=n("d1mw"),r=n("hctd"),s=n("tyNb"),a=n("ofXK"),c=n("fXoL"),u=n("j+WJ"),l=n("I/3d"),d=n("Wp6s"),m=n("bTqV"),b=n("96Pz"),f=n("MutI"),p=n("f0Cb"),g=n("TO6b"),h=n("NFeN");const v=function(t){return{hidden:t}};let w=(()=>{class t{constructor(){this.showDelete=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["app-engagement-type-item"]],inputs:{item:"item",showDelete:"showDelete"},decls:12,vars:10,consts:[[1,"grid","grid-cols-3","w-full","items-center",3,"mouseenter","mouseleave"],[1,"my-1","text-base"],[1,"meta","place-self-center"],[1,"my-1","text-xs","text-gray-500"],["mat-icon-button","","appDeleteTrigger","",1,"place-self-end",3,"id","ngClass"],[1,"text-red-500"]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.cc("mouseenter",function(){return e.showDelete=!0})("mouseleave",function(){return e.showDelete=!1}),c.Vb(1,"p",1),c.Ac(2),c.Ub(),c.Vb(3,"div",2),c.Vb(4,"p",3),c.Ac(5),c.hc(6,"date"),c.Ub(),c.Vb(7,"p",3),c.Ac(8),c.Ub(),c.Ub(),c.Vb(9,"button",4),c.Vb(10,"mat-icon",5),c.Ac(11," delete_outline "),c.Ub(),c.Ub(),c.Ub()),2&t&&(c.Eb(2),c.Bc(e.item.name),c.Eb(3),c.Cc(" ",c.jc(6,5,e.item.createdAt.toDate(),"medium")," "),c.Eb(3),c.Cc(" ",e.item.createdBy," "),c.Eb(1),c.mc("id",e.item.id)("ngClass",c.oc(8,v,!e.showDelete)))},directives:[m.b,g.a,a.j,h.a],pipes:[a.e],encapsulation:2}),t})();function V(t,e){1&t&&c.Qb(0,"mat-divider")}function y(t,e){1&t&&c.Qb(0,"mat-divider")}function U(t,e){if(1&t&&(c.Tb(0),c.Vb(1,"div",7),c.Qb(2,"app-engagement-type-item",8),c.Ub(),c.zc(3,y,1,0,"mat-divider",5),c.Sb()),2&t){const t=e.$implicit,n=e.last;c.Eb(2),c.mc("item",t),c.Eb(1),c.mc("ngIf",!n)}}let N=(()=>{class t{constructor(t,e){this.firestore=t,this.collectionName=e,this.items=[],this.collectionRef=this.firestore.collection(this.collectionName)}ngOnInit(){this.collectionRef.valueChanges({idField:"id"}).subscribe(t=>{this.items=t})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(l.a),c.Pb(o.b))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-engagement-type-list"]],decls:10,vars:2,consts:[[1,"rounded-lg"],[1,"flex","justify-between"],[1,"text-blue-500"],[1,"controls"],["mat-flat-button","","color","primary","appFormCreateTrigger","",1,"rounded-lg","text-white"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"p-2"],[3,"item"]],template:function(t,e){1&t&&(c.Vb(0,"mat-card",0),c.Vb(1,"div",1),c.Vb(2,"h1",2),c.Ac(3,"Engagement Types"),c.Ub(),c.Vb(4,"div",3),c.Vb(5,"button",4),c.Ac(6," Add Type "),c.Ub(),c.Ub(),c.Ub(),c.Vb(7,"mat-list"),c.zc(8,V,1,0,"mat-divider",5),c.zc(9,U,4,2,"ng-container",6),c.Ub(),c.Ub()),2&t&&(c.Eb(8),c.mc("ngIf",e.items.length>0),c.Eb(1),c.mc("ngForOf",e.items))},directives:[d.a,m.b,b.a,f.a,a.l,a.k,p.a,w],encapsulation:2}),t})(),P=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["app-engagement-type-page"]],decls:5,vars:0,consts:[[1,"bg-gray-200","w-full","min-h-full"],[1,"flex","justify-center","items-center","mt-8"],[1,"w-2/5"]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.Qb(1,"app-toolbar"),c.Vb(2,"div",1),c.Vb(3,"div",2),c.Qb(4,"app-engagement-type-list"),c.Ub(),c.Ub(),c.Ub())},directives:[u.a,N],encapsulation:2}),t})();var E=n("3Pt+"),D=n("aY+K"),I=n("kmnG"),A=n("qFsG");let C=(()=>{class t{constructor(t){this.formBuilder=t}ngOnInit(){this.initForm()}initForm(){this.form=this.formBuilder.group({name:["",E.q.required]})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(E.c))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-engagement-type-form"]],decls:6,vars:2,consts:[[3,"form","formGroup"],["appearance","outline",1,"w-full"],["matInput","","type","text","required","","formControlName","name"]],template:function(t,e){1&t&&(c.Vb(0,"app-form",0),c.Vb(1,"div"),c.Vb(2,"mat-form-field",1),c.Vb(3,"mat-label"),c.Ac(4,"Name"),c.Ub(),c.Qb(5,"input",2),c.Ub(),c.Ub(),c.Ub()),2&t&&c.mc("form",e.form)("formGroup",e.form)},directives:[D.a,E.k,E.e,I.c,I.f,A.b,E.b,E.p,E.j,E.d],encapsulation:2}),t})();var x=n("HUga");const F=[{path:"",component:P}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({providers:[{provide:o.b,useValue:i.b},{provide:o.d,useValue:"Engagement Type"},{provide:o.c,useValue:C}],imports:[[a.c,s.e.forChild(F),r.a,E.o,l.b,x.a]]}),t})()}}]);