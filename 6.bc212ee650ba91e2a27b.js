(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{vw2D:function(e,t,n){"use strict";n.r(t),n.d(t,"EngagementTypeModule",function(){return J});var i=n("eJWM"),c=n("d1mw"),o=n("hctd"),s=n("tyNb"),a=n("ofXK"),r=n("fXoL"),l=n("I/3d"),b=n("Wp6s"),u=n("bTqV"),d=n("96Pz"),m=n("MutI"),p=n("f0Cb"),f=n("0IaG");let g=(()=>{class e{constructor(e,t,n,i,c){this.id=e,this.collectionName=t,this.displayName=n,this.dialogRef=i,this.fireStore=c,this.isDeleting=!1,this.collection=this.fireStore.collection(this.collectionName)}ngOnInit(){}delete(){this.isDeleting=!0,this.collection.doc(this.id).delete(),this.isDeleting=!1,this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(f.a),r.Pb(c.a),r.Pb(c.c),r.Pb(f.g),r.Pb(l.a))},e.\u0275cmp=r.Jb({type:e,selectors:[["app-delete-dialog"]],decls:9,vars:3,consts:[[1,"text-xl","text-gray-600","mb-4"],["align","end"],["mat-button","","type","button",1,"rounded-lg","text-white","bg-blue-500",3,"disabled","click"],["mat-button","","mat-dialog-close","","type","button",1,"rounded-lg","text-gray-600"]],template:function(e,t){1&e&&(r.Vb(0,"p",0),r.Ac(1),r.Ub(),r.Vb(2,"mat-dialog-content"),r.Ac(3),r.Ub(),r.Vb(4,"mat-dialog-actions",1),r.Vb(5,"button",2),r.cc("click",function(){return t.delete()}),r.Ac(6," Yes "),r.Ub(),r.Vb(7,"button",3),r.Ac(8," No "),r.Ub(),r.Ub()),2&e&&(r.Eb(1),r.Bc(t.displayName),r.Eb(2),r.Cc(' Are you sure you want to delete "',t.id,'"? '),r.Eb(2),r.mc("disabled",t.isDeleting))},directives:[f.e,f.c,u.b,f.d],encapsulation:2}),e})(),h=(()=>{class e{constructor(e,t){this.dialog=e,this.containerRef=t,this.id=null}openDeleteDialog(){this.dialog.open(g,{viewContainerRef:this.containerRef,data:this.id,minWidth:"356px"})}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(f.b),r.Pb(r.S))},e.\u0275dir=r.Kb({type:e,selectors:[["","appDeleteTrigger",""]],hostBindings:function(e,t){1&e&&r.cc("click",function(e){return t.openDeleteDialog(e)})},inputs:{id:"id"}}),e})();var y=n("NFeN");const v=function(e){return{hidden:e}};let w=(()=>{class e{constructor(){this.showDelete=!1}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-engagement-type-item"]],inputs:{item:"item",showDelete:"showDelete"},decls:12,vars:10,consts:[[1,"grid","grid-cols-3","w-full","items-center",3,"mouseenter","mouseleave"],[1,"my-1","text-base"],[1,"meta","place-self-center"],[1,"my-1","text-xs","text-gray-500"],["mat-icon-button","","appDeleteTrigger","",1,"place-self-end",3,"id","ngClass"],[1,"text-gray-500"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.cc("mouseenter",function(){return t.showDelete=!0})("mouseleave",function(){return t.showDelete=!1}),r.Vb(1,"p",1),r.Ac(2),r.Ub(),r.Vb(3,"div",2),r.Vb(4,"p",3),r.Ac(5),r.hc(6,"date"),r.Ub(),r.Vb(7,"p",3),r.Ac(8),r.Ub(),r.Ub(),r.Vb(9,"button",4),r.Vb(10,"mat-icon",5),r.Ac(11," delete_outline "),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Eb(2),r.Bc(t.item.name),r.Eb(3),r.Cc(" ",r.jc(6,5,t.item.createdAt.toDate(),"medium")," "),r.Eb(3),r.Cc(" ",t.item.createdBy," "),r.Eb(1),r.mc("id",t.item.id)("ngClass",r.oc(8,v,!t.showDelete)))},directives:[u.b,h,a.j,y.a],pipes:[a.e],encapsulation:2}),e})();function V(e,t){1&e&&r.Qb(0,"mat-divider")}function U(e,t){1&e&&r.Qb(0,"mat-divider")}function D(e,t){if(1&e&&(r.Tb(0),r.Vb(1,"div",7),r.Qb(2,"app-engagement-type-item",8),r.Ub(),r.zc(3,U,1,0,"mat-divider",5),r.Sb()),2&e){const e=t.$implicit,n=t.last;r.Eb(2),r.mc("item",e),r.Eb(1),r.mc("ngIf",!n)}}let x=(()=>{class e{constructor(e,t){this.firestore=e,this.collectionName=t,this.items=[],this.collectionRef=this.firestore.collection(this.collectionName)}ngOnInit(){this.collectionRef.valueChanges({idField:"id"}).subscribe(e=>{this.items=e})}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(l.a),r.Pb(c.a))},e.\u0275cmp=r.Jb({type:e,selectors:[["app-engagement-type-list"]],decls:10,vars:2,consts:[[1,"rounded-lg"],[1,"flex","justify-between"],[1,"text-gray-600"],[1,"controls"],["mat-button","","appFormCreateTrigger","",1,"bg-blue-500","rounded-lg","text-white"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"p-2"],[3,"item"]],template:function(e,t){1&e&&(r.Vb(0,"mat-card",0),r.Vb(1,"div",1),r.Vb(2,"h1",2),r.Ac(3,"Engagement Types"),r.Ub(),r.Vb(4,"div",3),r.Vb(5,"button",4),r.Ac(6," Add Type "),r.Ub(),r.Ub(),r.Ub(),r.Vb(7,"mat-list"),r.zc(8,V,1,0,"mat-divider",5),r.zc(9,D,4,2,"ng-container",6),r.Ub(),r.Ub()),2&e&&(r.Eb(8),r.mc("ngIf",t.items.length>0),r.Eb(1),r.mc("ngForOf",t.items))},directives:[b.a,u.b,d.a,m.a,a.l,a.k,p.a,w],encapsulation:2}),e})(),A=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-engagement-type-page"]],decls:3,vars:0,consts:[[1,"bg-gray-200","w-full","min-h-full","flex","justify-center","items-center"],[1,"w-2/5"]],template:function(e,t){1&e&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Qb(2,"app-engagement-type-list"),r.Ub(),r.Ub())},directives:[x],encapsulation:2}),e})();var E=n("3Pt+"),N=n("aY+K"),I=n("kmnG"),P=n("qFsG");let C=(()=>{class e{constructor(e){this.formBuilder=e}ngOnInit(){this.initForm()}initForm(){this.form=this.formBuilder.group({name:["",E.n.required]})}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(E.c))},e.\u0275cmp=r.Jb({type:e,selectors:[["app-engagement-type-form"]],decls:6,vars:2,consts:[[3,"form","formGroup"],["appearance","outline",1,"w-full"],["matInput","","type","text","required","","formControlName","name"]],template:function(e,t){1&e&&(r.Vb(0,"app-form",0),r.Vb(1,"div"),r.Vb(2,"mat-form-field",1),r.Vb(3,"mat-label"),r.Ac(4,"Name"),r.Ub(),r.Qb(5,"input",2),r.Ub(),r.Ub(),r.Ub()),2&e&&r.mc("form",t.form)("formGroup",t.form)},directives:[N.a,E.j,E.e,I.b,I.e,P.b,E.b,E.m,E.i,E.d],encapsulation:2}),e})();var F=n("HUga");const T=[{path:"",component:A}];let J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({providers:[{provide:c.a,useValue:i.a},{provide:c.c,useValue:"Engagement Type"},{provide:c.b,useValue:C}],imports:[[a.c,s.e.forChild(T),o.a,E.l,l.b,F.a]]}),e})()}}]);