(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"96Pz":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("d1mw"),o=n("fXoL"),c=n("0IaG");let r=(()=>{class e{constructor(e,t,n){this.componentName=e,this.dialog=t,this.containerRef=n,this.parentData=null}openForm(){this.dialog.open(this.componentName,{viewContainerRef:this.containerRef,minWidth:"398px",data:this.parentData})}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(i.c),o.Pb(c.b),o.Pb(o.S))},e.\u0275dir=o.Kb({type:e,selectors:[["","appFormCreateTrigger",""]],hostBindings:function(e,t){1&e&&o.cc("click",function(e){return t.openForm(e)})},inputs:{parentData:"parentData"}}),e})()},HUga:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("hctd"),o=n("ofXK"),c=n("3Pt+"),r=n("fXoL");let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({imports:[[o.c,i.a,c.m],i.a]}),e})()},TO6b:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n("d1mw"),o=n("0IaG"),c=n("fXoL"),r=n("I/3d"),s=n("bTqV");let a=(()=>{class e{constructor(e,t,n,i,o){this.id=e,this.collectionName=t,this.displayName=n,this.dialogRef=i,this.fireStore=o,this.isDeleting=!1,this.collection=this.fireStore.collection(this.collectionName)}ngOnInit(){}delete(){this.isDeleting=!0,this.collection.doc(this.id).delete(),this.isDeleting=!1,this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(c.Pb(o.a),c.Pb(i.b),c.Pb(i.d),c.Pb(o.g),c.Pb(r.a))},e.\u0275cmp=c.Jb({type:e,selectors:[["app-delete-dialog"]],decls:9,vars:3,consts:[[1,"text-xl","text-gray-600","mb-4"],["align","end"],["mat-button","","type","button",1,"rounded-lg","text-white","bg-blue-500",3,"disabled","click"],["mat-button","","mat-dialog-close","","type","button",1,"rounded-lg","text-gray-600"]],template:function(e,t){1&e&&(c.Vb(0,"p",0),c.Ac(1),c.Ub(),c.Vb(2,"mat-dialog-content"),c.Ac(3),c.Ub(),c.Vb(4,"mat-dialog-actions",1),c.Vb(5,"button",2),c.cc("click",function(){return t.delete()}),c.Ac(6," Yes "),c.Ub(),c.Vb(7,"button",3),c.Ac(8," No "),c.Ub(),c.Ub()),2&e&&(c.Eb(1),c.Bc(t.displayName),c.Eb(2),c.Cc(' Are you sure you want to delete "',t.id,'"? '),c.Eb(2),c.mc("disabled",t.isDeleting))},directives:[o.e,o.c,s.b,o.d],encapsulation:2}),e})(),l=(()=>{class e{constructor(e,t){this.dialog=e,this.containerRef=t,this.id=null}openDeleteDialog(){this.dialog.open(a,{viewContainerRef:this.containerRef,data:this.id,minWidth:"356px"})}}return e.\u0275fac=function(t){return new(t||e)(c.Pb(o.b),c.Pb(c.S))},e.\u0275dir=c.Kb({type:e,selectors:[["","appDeleteTrigger",""]],hostBindings:function(e,t){1&e&&c.cc("click",function(e){return t.openDeleteDialog(e)})},inputs:{id:"id"}}),e})()},d1mw:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return s});var i=n("fXoL");const o=new i.s("collectionName"),c=new i.s("deleteHeader"),r=new i.s("collectionDisplayName"),s=new i.s("dialogComponent")},eJWM:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return r});const i="EngagementTypes",o="Patients",c="Engagements",r="Users"},vw2D:function(e,t,n){"use strict";n.r(t),n.d(t,"EngagementTypeModule",function(){return T});var i=n("eJWM"),o=n("d1mw"),c=n("hctd"),r=n("tyNb"),s=n("ofXK"),a=n("fXoL"),l=n("I/3d"),u=n("Wp6s"),b=n("bTqV"),d=n("96Pz"),m=n("MutI"),p=n("f0Cb"),f=n("TO6b"),g=n("NFeN");const h=function(e){return{hidden:e}};let w=(()=>{class e{constructor(){this.showDelete=!1}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Jb({type:e,selectors:[["app-engagement-type-item"]],inputs:{item:"item",showDelete:"showDelete"},decls:12,vars:10,consts:[[1,"grid","grid-cols-3","w-full","items-center",3,"mouseenter","mouseleave"],[1,"my-1","text-base"],[1,"meta","place-self-center"],[1,"my-1","text-xs","text-gray-500"],["mat-icon-button","","appDeleteTrigger","",1,"place-self-end",3,"id","ngClass"],[1,"text-gray-500"]],template:function(e,t){1&e&&(a.Vb(0,"div",0),a.cc("mouseenter",function(){return t.showDelete=!0})("mouseleave",function(){return t.showDelete=!1}),a.Vb(1,"p",1),a.Ac(2),a.Ub(),a.Vb(3,"div",2),a.Vb(4,"p",3),a.Ac(5),a.hc(6,"date"),a.Ub(),a.Vb(7,"p",3),a.Ac(8),a.Ub(),a.Ub(),a.Vb(9,"button",4),a.Vb(10,"mat-icon",5),a.Ac(11," delete_outline "),a.Ub(),a.Ub(),a.Ub()),2&e&&(a.Eb(2),a.Bc(t.item.name),a.Eb(3),a.Cc(" ",a.jc(6,5,t.item.createdAt.toDate(),"medium")," "),a.Eb(3),a.Cc(" ",t.item.createdBy," "),a.Eb(1),a.mc("id",t.item.id)("ngClass",a.oc(8,h,!t.showDelete)))},directives:[b.b,f.a,s.j,g.a],pipes:[s.e],encapsulation:2}),e})();function y(e,t){1&e&&a.Qb(0,"mat-divider")}function v(e,t){1&e&&a.Qb(0,"mat-divider")}function V(e,t){if(1&e&&(a.Tb(0),a.Vb(1,"div",7),a.Qb(2,"app-engagement-type-item",8),a.Ub(),a.zc(3,v,1,0,"mat-divider",5),a.Sb()),2&e){const e=t.$implicit,n=t.last;a.Eb(2),a.mc("item",e),a.Eb(1),a.mc("ngIf",!n)}}let U=(()=>{class e{constructor(e,t){this.firestore=e,this.collectionName=t,this.items=[],this.collectionRef=this.firestore.collection(this.collectionName)}ngOnInit(){this.collectionRef.valueChanges({idField:"id"}).subscribe(e=>{this.items=e})}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(l.a),a.Pb(o.b))},e.\u0275cmp=a.Jb({type:e,selectors:[["app-engagement-type-list"]],decls:10,vars:2,consts:[[1,"rounded-lg"],[1,"flex","justify-between"],[1,"text-gray-600"],[1,"controls"],["mat-button","","appFormCreateTrigger","",1,"bg-blue-500","rounded-lg","text-white"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"p-2"],[3,"item"]],template:function(e,t){1&e&&(a.Vb(0,"mat-card",0),a.Vb(1,"div",1),a.Vb(2,"h1",2),a.Ac(3,"Engagement Types"),a.Ub(),a.Vb(4,"div",3),a.Vb(5,"button",4),a.Ac(6," Add Type "),a.Ub(),a.Ub(),a.Ub(),a.Vb(7,"mat-list"),a.zc(8,y,1,0,"mat-divider",5),a.zc(9,V,4,2,"ng-container",6),a.Ub(),a.Ub()),2&e&&(a.Eb(8),a.mc("ngIf",t.items.length>0),a.Eb(1),a.mc("ngForOf",t.items))},directives:[u.a,b.b,d.a,m.a,s.l,s.k,p.a,w],encapsulation:2}),e})(),D=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Jb({type:e,selectors:[["app-engagement-type-page"]],decls:3,vars:0,consts:[[1,"bg-gray-200","w-full","min-h-full","flex","justify-center","items-center"],[1,"w-2/5"]],template:function(e,t){1&e&&(a.Vb(0,"div",0),a.Vb(1,"div",1),a.Qb(2,"app-engagement-type-list"),a.Ub(),a.Ub())},directives:[U],encapsulation:2}),e})();var N=n("3Pt+"),P=n("aY+K"),x=n("kmnG"),E=n("qFsG");let A=(()=>{class e{constructor(e){this.formBuilder=e}ngOnInit(){this.initForm()}initForm(){this.form=this.formBuilder.group({name:["",N.o.required]})}}return e.\u0275fac=function(t){return new(t||e)(a.Pb(N.c))},e.\u0275cmp=a.Jb({type:e,selectors:[["app-engagement-type-form"]],decls:6,vars:2,consts:[[3,"form","formGroup"],["appearance","outline",1,"w-full"],["matInput","","type","text","required","","formControlName","name"]],template:function(e,t){1&e&&(a.Vb(0,"app-form",0),a.Vb(1,"div"),a.Vb(2,"mat-form-field",1),a.Vb(3,"mat-label"),a.Ac(4,"Name"),a.Ub(),a.Qb(5,"input",2),a.Ub(),a.Ub(),a.Ub()),2&e&&a.mc("form",t.form)("formGroup",t.form)},directives:[P.a,N.j,N.e,x.c,x.f,E.b,N.b,N.n,N.i,N.d],encapsulation:2}),e})();var C=n("HUga");const I=[{path:"",component:D}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({providers:[{provide:o.b,useValue:i.b},{provide:o.d,useValue:"Engagement Type"},{provide:o.c,useValue:A}],imports:[[s.c,r.e.forChild(I),c.a,N.m,l.b,C.a]]}),e})()}}]);