(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{AMsP:function(t,e,a){"use strict";a.r(e),a.d(e,"PatientModule",function(){return Ct});var c=a("4Cs4"),i=a("eJWM"),n=a("d1mw"),r=a("hctd"),b=a("fXoL"),o=a("3Pt+"),l=a("aY+K"),d=a("kmnG"),s=a("qFsG"),m=a("iadO"),u=a("d3UM"),p=a("ofXK"),f=a("FKr1");function h(t,e){if(1&t&&(b.Vb(0,"mat-option",15),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.mc("value",t),b.Eb(1),b.Cc(" ",t," ")}}function V(t,e){if(1&t&&(b.Vb(0,"mat-option",15),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.mc("value",t),b.Eb(1),b.Cc(" ",t," ")}}let g=(()=>{class t{constructor(t){this.formBuilder=t,this.form=this.formBuilder.group({firstName:["",o.q.required],middleName:["",o.q.required],lastName:["",o.q.required],sex:["",o.q.required],civilStatus:["",o.q.required],birthDate:["",o.q.required],address:["",o.q.required]})}ngOnInit(){}get sexes(){return["Male","Female"]}get civilStatuses(){return["Single","Married","Annuled","Divorced","Widow","Widower"]}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(o.c))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-patient-form"]],decls:35,vars:6,consts:[[3,"form","formGroup"],[1,"grid","grid-cols-3","gap-4"],["appearance","outline",1,"w-full"],["matInput","","type","text","required","","formControlName","firstName"],["matInput","","type","text","required","","formControlName","middleName"],["matInput","","type","text","required","","formControlName","lastName"],["appearance","outline",1,"w-full","col-span-3"],["matInput","","type","text","required","","formControlName","address"],["matInput","","formControlName","birthDate",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["appearance","outline"],["formControlName","sex"],[3,"value",4,"ngFor","ngForOf"],["formControlName","civilStatus"],[3,"value"]],template:function(t,e){if(1&t&&(b.Vb(0,"app-form",0),b.Vb(1,"div",1),b.Vb(2,"mat-form-field",2),b.Vb(3,"mat-label"),b.Ac(4,"First Name"),b.Ub(),b.Qb(5,"input",3),b.Ub(),b.Vb(6,"mat-form-field",2),b.Vb(7,"mat-label"),b.Ac(8,"Middle Name"),b.Ub(),b.Qb(9,"input",4),b.Ub(),b.Vb(10,"mat-form-field",2),b.Vb(11,"mat-label"),b.Ac(12,"Last Name"),b.Ub(),b.Qb(13,"input",5),b.Ub(),b.Vb(14,"mat-form-field",6),b.Vb(15,"mat-label"),b.Ac(16,"Address"),b.Ub(),b.Qb(17,"input",7),b.Ub(),b.Vb(18,"mat-form-field",2),b.Vb(19,"mat-label"),b.Ac(20,"Birthdate"),b.Ub(),b.Qb(21,"input",8),b.Qb(22,"mat-datepicker-toggle",9),b.Qb(23,"mat-datepicker",null,10),b.Ub(),b.Vb(25,"mat-form-field",11),b.Vb(26,"mat-label"),b.Ac(27,"Sex"),b.Ub(),b.Vb(28,"mat-select",12),b.zc(29,h,2,2,"mat-option",13),b.Ub(),b.Ub(),b.Vb(30,"mat-form-field",11),b.Vb(31,"mat-label"),b.Ac(32,"Civil Status"),b.Ub(),b.Vb(33,"mat-select",14),b.zc(34,V,2,2,"mat-option",13),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t){const t=b.rc(24);b.mc("form",e.form)("formGroup",e.form),b.Eb(21),b.mc("matDatepicker",t),b.Eb(1),b.mc("for",t),b.Eb(7),b.mc("ngForOf",e.sexes),b.Eb(5),b.mc("ngForOf",e.civilStatuses)}},directives:[l.a,o.k,o.e,d.c,d.f,s.b,o.b,o.p,o.j,o.d,m.b,m.d,d.g,m.a,u.a,p.k,f.m],encapsulation:2}),t})();var U=a("uEYW"),D=a("Dh3D"),A=a("+0xr"),v=a("bTqV"),y=a("tyNb"),C=a("NFeN");function S(t,e){1&t&&(b.Vb(0,"th",15),b.Ac(1,"Id"),b.Ub())}function E(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.id)}}function N(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"First Name"),b.Ub())}function z(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.firstName)}}function x(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Middle Name"),b.Ub())}function B(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.middleName)}}function w(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Last Name"),b.Ub())}function T(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.lastName)}}function I(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Address"),b.Ub())}function k(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.address)}}function P(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Birth Date"),b.Ub())}function $(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.hc(2,"date"),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Cc(" ",b.jc(2,1,t.birthDate.toDate(),"mediumDate")," ")}}function q(t,e){1&t&&(b.Vb(0,"th",15),b.Ac(1,"Civil Status"),b.Ub())}function F(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.civilStatus)}}function M(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Sex"),b.Ub())}function Q(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.sex)}}function O(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Created At"),b.Ub())}function j(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.hc(2,"date"),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Cc(" ",b.ic(2,1,t.createdAt.toDate())," ")}}function J(t,e){1&t&&b.Qb(0,"th",15)}const H=function(t){return["./",t]};function L(t,e){if(1&t&&(b.Vb(0,"td",16),b.Vb(1,"div",18),b.Vb(2,"a",19),b.Vb(3,"mat-icon"),b.Ac(4,"launch"),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t){const t=e.$implicit;b.Eb(2),b.mc("routerLink",b.oc(1,H,t.id))}}let W=(()=>{class t{constructor(){this.displayedColumns=["id","firstName","middleName","lastName","address","birthDate","civilStatus","sex","createdAt","options"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["app-patient-table"]],features:[b.Db([{provide:n.b,useValue:i.c},{provide:n.c,useValue:g},{provide:n.d,useValue:"Patient"},{provide:n.a,useValue:i.c}])],decls:32,vars:2,consts:[["matSort","",3,"columns","sort"],["matSort","matSort"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","middleName"],["matColumnDef","lastName"],["matColumnDef","address"],["matColumnDef","birthDate"],["matColumnDef","civilStatus"],["matColumnDef","sex"],["matColumnDef","createdAt"],["matColumnDef","options"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],[1,"w-full","flex","justify-end","text-gray-500"],["mat-icon-button","",1,"self-end",3,"routerLink"]],template:function(t,e){if(1&t&&(b.Vb(0,"app-table",0,1),b.Tb(2,2),b.zc(3,S,2,0,"th",3),b.zc(4,E,2,1,"td",4),b.Sb(),b.Tb(5,5),b.zc(6,N,2,0,"th",6),b.zc(7,z,2,1,"td",4),b.Sb(),b.Tb(8,7),b.zc(9,x,2,0,"th",6),b.zc(10,B,2,1,"td",4),b.Sb(),b.Tb(11,8),b.zc(12,w,2,0,"th",6),b.zc(13,T,2,1,"td",4),b.Sb(),b.Tb(14,9),b.zc(15,I,2,0,"th",6),b.zc(16,k,2,1,"td",4),b.Sb(),b.Tb(17,10),b.zc(18,P,2,0,"th",6),b.zc(19,$,3,4,"td",4),b.Sb(),b.Tb(20,11),b.zc(21,q,2,0,"th",3),b.zc(22,F,2,1,"td",4),b.Sb(),b.Tb(23,12),b.zc(24,M,2,0,"th",6),b.zc(25,Q,2,1,"td",4),b.Sb(),b.Tb(26,13),b.zc(27,O,2,0,"th",6),b.zc(28,j,3,3,"td",4),b.Sb(),b.Tb(29,14),b.zc(30,J,1,0,"th",3),b.zc(31,L,5,3,"td",4),b.Sb(),b.Ub()),2&t){const t=b.rc(1);b.mc("columns",e.displayedColumns)("sort",t)}},directives:[U.a,D.a,A.c,A.e,A.b,A.d,A.a,D.b,v.a,y.d,C.a],pipes:[p.e],encapsulation:2}),t})(),Y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["app-patient-page"]],decls:3,vars:0,consts:[[1,"w-full","min-h-full","bg-gray-200","flex","justify-center","items-center"],[1,"w-4/5"]],template:function(t,e){1&t&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Qb(2,"app-patient-table"),b.Ub(),b.Ub())},directives:[W],encapsulation:2}),t})();var G=a("HUga"),K=a("I/3d"),X=a("Wp6s");const _=["*"];let R=(()=>{class t{constructor(){this.icon="badge"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Jb({type:t,selectors:[["app-patient-property-card"]],inputs:{key:"key",icon:"icon"},ngContentSelectors:_,decls:8,vars:2,consts:[[1,"flex","items-center","gap-4"],[1,"text-xl","text-gray-600"],[1,"labels"],[1,"mb-1","text-gray-700","text-base"],[1,"mb-0","text-xs","text-gray-500"]],template:function(t,e){1&t&&(b.lc(),b.Vb(0,"mat-card",0),b.Vb(1,"mat-icon",1),b.Ac(2),b.Ub(),b.Vb(3,"div",2),b.Vb(4,"p",3),b.kc(5),b.Ub(),b.Vb(6,"p",4),b.Ac(7),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.Eb(2),b.Cc("",e.icon," "),b.Eb(5),b.Bc(e.key))},directives:[X.a,C.a],encapsulation:2}),t})();var Z=a("R88c"),tt=a("STbY"),et=a("TO6b");function at(t,e){1&t&&(b.Vb(0,"th",15),b.Ac(1,"Id"),b.Ub())}function ct(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.id)}}function it(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1," Blood Pressure "),b.Ub())}function nt(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Dc(" ",t.systolicBloodPressure,"/",t.diastolicBloodPressure," ")}}function rt(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Temperature"),b.Ub())}function bt(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.temperature)}}function ot(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1," Engagement Type "),b.Ub())}function lt(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Cc(" ",t.engagementType.name," ")}}function dt(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Height"),b.Ub())}function st(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(t.height)}}function mt(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1," Engagement Date "),b.Ub())}function ut(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.hc(2,"date"),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Bc(b.jc(2,1,t.engagementDate.toDate(),"mediumDate"))}}function pt(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Weight"),b.Ub())}function ft(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Cc(" ",t.weight," ")}}function ht(t,e){1&t&&(b.Vb(0,"th",17),b.Ac(1,"Created At"),b.Ub())}function Vt(t,e){if(1&t&&(b.Vb(0,"td",16),b.Ac(1),b.hc(2,"date"),b.Ub()),2&t){const t=e.$implicit;b.Eb(1),b.Cc(" ",b.ic(2,1,t.createdAt.toDate())," ")}}function gt(t,e){1&t&&b.Qb(0,"th",15)}function Ut(t,e){if(1&t&&(b.Vb(0,"td",16),b.Vb(1,"div",18),b.Vb(2,"button",19),b.Vb(3,"mat-icon"),b.Ac(4,"more_vert"),b.Ub(),b.Ub(),b.Vb(5,"mat-menu",null,20),b.Vb(7,"button",21),b.Ac(8," Delete "),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t){const t=e.$implicit,a=b.rc(6);b.Eb(2),b.mc("matMenuTriggerFor",a),b.Eb(5),b.mc("id",t.id)}}function Dt(t,e){if(1&t&&(b.Vb(0,"app-table",1,2),b.Tb(2,3),b.zc(3,at,2,0,"th",4),b.zc(4,ct,2,1,"td",5),b.Sb(),b.Tb(5,6),b.zc(6,it,2,0,"th",7),b.zc(7,nt,2,2,"td",5),b.Sb(),b.Tb(8,8),b.zc(9,rt,2,0,"th",7),b.zc(10,bt,2,1,"td",5),b.Sb(),b.Tb(11,9),b.zc(12,ot,2,0,"th",7),b.zc(13,lt,2,1,"td",5),b.Sb(),b.Tb(14,10),b.zc(15,dt,2,0,"th",7),b.zc(16,st,2,1,"td",5),b.Sb(),b.Tb(17,11),b.zc(18,mt,2,0,"th",7),b.zc(19,ut,3,4,"td",5),b.Sb(),b.Tb(20,12),b.zc(21,pt,2,0,"th",7),b.zc(22,ft,2,1,"td",5),b.Sb(),b.Tb(23,13),b.zc(24,ht,2,0,"th",7),b.zc(25,Vt,3,3,"td",5),b.Sb(),b.Tb(26,14),b.zc(27,gt,1,0,"th",4),b.zc(28,Ut,9,2,"td",5),b.Sb(),b.Ub()),2&t){const t=b.rc(1),e=b.gc();b.mc("parentData",e.parentData)("parentId",e.parentId)("columns",e.displayedColumns)("filterByParent",e.filterByPatient)("sort",t)}}let At=(()=>{class t{constructor(t,e){this.firestore=t,this.collectionName=e,this.displayedColumns=["id","bloodPressure","temperature","engagementType","engagementDate","height","weight","createdAt","options"],this.dataSource=[],this.parentId="asd",this.parentData=null}filterByPatient(t,e){return t.where("patient.id","==",e)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(K.a),b.Pb(n.b))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-engagement-by-patient"]],inputs:{parentId:"parentId",parentData:"parentData"},features:[b.Db([{provide:n.b,useValue:i.a},{provide:n.c,useValue:Z.a},{provide:n.d,useValue:"Engagement"},{provide:n.a,useValue:i.a}])],decls:1,vars:1,consts:[["matSort","",3,"parentData","parentId","columns","filterByParent","sort",4,"ngIf"],["matSort","",3,"parentData","parentId","columns","filterByParent","sort"],["matSort","matSort"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","bloodPressure"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","temperature"],["matColumnDef","engagementType"],["matColumnDef","height"],["matColumnDef","engagementDate"],["matColumnDef","weight"],["matColumnDef","createdAt"],["matColumnDef","options"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],[1,"flex","justify-end"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","","appDeleteTrigger","",3,"id"]],template:function(t,e){1&t&&b.zc(0,Dt,29,5,"app-table",0),2&t&&b.mc("ngIf",e.parentId)},directives:[p.l,U.a,D.a,A.c,A.e,A.b,A.d,A.a,D.b,v.b,tt.d,C.a,tt.a,tt.b,et.a],pipes:[p.e],styles:[".mat-table[_ngcontent-%COMP%]{border-collapse:collapse!important;overflow:hidden}"]}),t})();function vt(t,e){if(1&t&&b.Qb(0,"app-engagement-by-patient",18),2&t){const t=b.gc();b.mc("parentData",t.data)("parentId",t.id)}}const yt=[{path:"",component:Y},{path:":id",component:(()=>{class t{constructor(t,e,a){this.route=t,this.firestore=e,this.collectionName=a,this.id=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.loadData()}loadData(){const t=[this.collectionName,this.id].join("/");this.firestore.doc(t).valueChanges({idField:"id"}).subscribe(t=>{this.data=t})}get age(){var t;const e=null===(t=this.data)||void 0===t?void 0:t.birthDate.toDate().getFullYear();return new Date(Date.now()).getFullYear()-e}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(y.a),b.Pb(K.a),b.Pb(n.b))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-patient-detail-page"]],decls:32,vars:22,consts:[[1,"w-full","bg-gray-200","min-h-full"],[1,"p-4","pt-8","col-span-2","flex","items-center","flex-col"],[1,"block","w-48","h-48","bg-gray-800","rounded-full","mb-4"],[1,"mb-0","text-base","text-gray-700"],[1,"text-xs"],[1,"p-8","mb-8","col-span-6"],[1,"grid","grid-cols-3","gap-4"],["key","First Name"],["key","Middle Name"],["key","Last Name"],["key","Birth Date","icon","cake"],[1,"col-span-2"],["key","Address","icon","home"],["key","Civil Status"],["key","Sex"],["key","Age"],[1,"p-8"],[3,"parentData","parentId",4,"ngIf"],[3,"parentData","parentId"]],template:function(t,e){1&t&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Qb(2,"div",2),b.Vb(3,"p",3),b.Ac(4),b.hc(5,"titlecase"),b.hc(6,"titlecase"),b.hc(7,"titlecase"),b.Ub(),b.Vb(8,"p",4),b.Ac(9),b.Ub(),b.Ub(),b.Vb(10,"div",5),b.Vb(11,"div",6),b.Vb(12,"app-patient-property-card",7),b.Ac(13),b.Ub(),b.Vb(14,"app-patient-property-card",8),b.Ac(15),b.Ub(),b.Vb(16,"app-patient-property-card",9),b.Ac(17),b.Ub(),b.Vb(18,"app-patient-property-card",10),b.Ac(19),b.hc(20,"date"),b.Ub(),b.Vb(21,"div",11),b.Vb(22,"app-patient-property-card",12),b.Ac(23),b.Ub(),b.Ub(),b.Vb(24,"app-patient-property-card",13),b.Ac(25),b.Ub(),b.Vb(26,"app-patient-property-card",14),b.Ac(27),b.Ub(),b.Vb(28,"app-patient-property-card",15),b.Ac(29),b.Ub(),b.Ub(),b.Ub(),b.Vb(30,"div",16),b.zc(31,vt,1,2,"app-engagement-by-patient",17),b.Ub(),b.Ub()),2&t&&(b.Eb(4),b.Ec(" ",b.ic(5,13,null==e.data?null:e.data.firstName)," ",b.ic(6,15,null==e.data?null:e.data.middleName)," ",b.ic(7,17,null==e.data?null:e.data.lastName)," "),b.Eb(5),b.Cc("ID: ",e.id,""),b.Eb(4),b.Bc(null==e.data?null:e.data.firstName),b.Eb(2),b.Cc("",null==e.data?null:e.data.middleName," "),b.Eb(2),b.Bc(null==e.data?null:e.data.lastName),b.Eb(2),b.Bc(b.jc(20,19,null==e.data||null==e.data.birthDate?null:e.data.birthDate.toDate(),"longDate")),b.Eb(4),b.Bc(null==e.data?null:e.data.address),b.Eb(2),b.Bc(null==e.data?null:e.data.civilStatus),b.Eb(2),b.Bc(null==e.data?null:e.data.sex),b.Eb(2),b.Bc(e.age),b.Eb(2),b.mc("ngIf",e.id))},directives:[R,p.l,At],pipes:[p.r,p.e],encapsulation:2}),t})()}];let Ct=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({providers:[{provide:n.b,useValue:i.c},{provide:n.c,useValue:g},{provide:n.d,useValue:"Patient"},{provide:n.a,useValue:i.c}],imports:[[p.c,y.e.forChild(yt),c.a,G.a,o.o,r.a]]}),t})()}}]);