(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AMsP:function(t,e,a){"use strict";a.r(e),a.d(e,"PatientModule",function(){return Y});var i=a("eJWM"),n=a("d1mw"),c=a("hctd"),o=a("fXoL"),r=a("I/3d"),b=a("Wp6s"),l=a("bTqV"),m=a("96Pz"),d=a("+0xr"),s=a("M9IT"),u=a("NFeN"),f=a("ofXK");function p(t,e){1&t&&(o.Vb(0,"th",21),o.Ac(1,"Id"),o.Ub())}function V(t,e){if(1&t&&(o.Vb(0,"td",22),o.Ac(1),o.Ub()),2&t){const t=e.$implicit;o.Eb(1),o.Bc(t.id)}}function h(t,e){1&t&&(o.Vb(0,"th",21),o.Ac(1,"First Name"),o.Ub())}function U(t,e){if(1&t&&(o.Vb(0,"td",22),o.Ac(1),o.Ub()),2&t){const t=e.$implicit;o.Eb(1),o.Bc(t.firstName)}}function g(t,e){1&t&&(o.Vb(0,"th",21),o.Ac(1,"Middle Name"),o.Ub())}function v(t,e){if(1&t&&(o.Vb(0,"td",22),o.Ac(1),o.Ub()),2&t){const t=e.$implicit;o.Eb(1),o.Bc(t.middleName)}}function A(t,e){1&t&&(o.Vb(0,"th",21),o.Ac(1,"Last Name"),o.Ub())}function N(t,e){if(1&t&&(o.Vb(0,"td",22),o.Ac(1),o.Ub()),2&t){const t=e.$implicit;o.Eb(1),o.Bc(t.lastName)}}function S(t,e){1&t&&(o.Vb(0,"th",21),o.Ac(1,"Address"),o.Ub())}function C(t,e){if(1&t&&(o.Vb(0,"td",22),o.Ac(1),o.Ub()),2&t){const t=e.$implicit;o.Eb(1),o.Bc(t.address)}}function w(t,e){1&t&&(o.Vb(0,"th",21),o.Ac(1,"Birth Date"),o.Ub())}function z(t,e){if(1&t&&(o.Vb(0,"td",22),o.Ac(1),o.hc(2,"date"),o.Ub()),2&t){const t=e.$implicit;o.Eb(1),o.Cc(" ",o.jc(2,1,t.birthDate.toDate(),"shortDate")," ")}}function D(t,e){1&t&&(o.Vb(0,"th",21),o.Ac(1,"Civil Status"),o.Ub())}function x(t,e){if(1&t&&(o.Vb(0,"td",22),o.Ac(1),o.Ub()),2&t){const t=e.$implicit;o.Eb(1),o.Bc(t.civilStatus)}}function y(t,e){1&t&&(o.Vb(0,"th",21),o.Ac(1,"Sex"),o.Ub())}function E(t,e){if(1&t&&(o.Vb(0,"td",22),o.Ac(1),o.Ub()),2&t){const t=e.$implicit;o.Eb(1),o.Bc(t.sex)}}function q(t,e){1&t&&o.Qb(0,"th",21)}function B(t,e){1&t&&(o.Vb(0,"td",22),o.Vb(1,"div",23),o.Vb(2,"button",24),o.Vb(3,"mat-icon"),o.Ac(4,"launch"),o.Ub(),o.Ub(),o.Ub(),o.Ub())}function F(t,e){1&t&&o.Qb(0,"tr",25)}function Q(t,e){1&t&&o.Qb(0,"tr",26)}const T=function(){return[1,5,10,25,100]};let I=(()=>{class t{constructor(t,e){this.firestore=t,this.collectionName=e,this.displayedColumns=["id","firstName","middleName","lastName","address","birthDate","civilStatus","sex","options"],this.dataSource=[]}ngOnInit(){this.firestore.collection(this.collectionName,t=>t.orderBy("createdAt")).valueChanges({idField:"id"}).subscribe(t=>{this.dataSource=t})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(r.a),o.Pb(n.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-patient-table"]],decls:39,vars:7,consts:[[1,"p-0","rounded-xl"],[1,"rounded-t-xl","mat-elevation-z0"],[1,"flex","justify-between","items-center"],[1,"text-gray-600","text-lg"],[1,"controls"],["mat-button","","appFormCreateTrigger","",1,"bg-blue-500","rounded-lg","text-white"],["mat-table","",1,"rounded-none","mat-elevation-z0","w-full",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["matColumnDef","middleName"],["matColumnDef","lastName"],["matColumnDef","address"],["matColumnDef","birthDate"],["matColumnDef","civilStatus"],["matColumnDef","sex"],["matColumnDef","options"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page",1,"rounded-b-xl",3,"length","pageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"w-full","flex","justify-end","text-gray-500"],["mat-icon-button","",1,"self-end"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(o.Vb(0,"mat-card",0),o.Vb(1,"mat-card",1),o.Vb(2,"div",2),o.Vb(3,"div",3),o.Ac(4,"Patient Profiles"),o.Ub(),o.Vb(5,"div",4),o.Vb(6,"button",5),o.Ac(7," Add Patient "),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(8,"table",6),o.Tb(9,7),o.zc(10,p,2,0,"th",8),o.zc(11,V,2,1,"td",9),o.Sb(),o.Tb(12,10),o.zc(13,h,2,0,"th",8),o.zc(14,U,2,1,"td",9),o.Sb(),o.Tb(15,11),o.zc(16,g,2,0,"th",8),o.zc(17,v,2,1,"td",9),o.Sb(),o.Tb(18,12),o.zc(19,A,2,0,"th",8),o.zc(20,N,2,1,"td",9),o.Sb(),o.Tb(21,13),o.zc(22,S,2,0,"th",8),o.zc(23,C,2,1,"td",9),o.Sb(),o.Tb(24,14),o.zc(25,w,2,0,"th",8),o.zc(26,z,3,4,"td",9),o.Sb(),o.Tb(27,15),o.zc(28,D,2,0,"th",8),o.zc(29,x,2,1,"td",9),o.Sb(),o.Tb(30,16),o.zc(31,y,2,0,"th",8),o.zc(32,E,2,1,"td",9),o.Sb(),o.Tb(33,17),o.zc(34,q,1,0,"th",8),o.zc(35,B,5,0,"td",9),o.Sb(),o.zc(36,F,1,0,"tr",18),o.zc(37,Q,1,0,"tr",19),o.Ub(),o.Qb(38,"mat-paginator",20),o.Ub()),2&t&&(o.Eb(8),o.mc("dataSource",e.dataSource),o.Eb(28),o.mc("matHeaderRowDef",e.displayedColumns),o.Eb(1),o.mc("matRowDefColumns",e.displayedColumns),o.Eb(1),o.mc("length",100)("pageSize",10)("pageSizeOptions",o.nc(6,T)))},directives:[b.a,l.a,m.a,d.j,d.c,d.e,d.b,d.g,d.i,s.a,d.d,d.a,u.a,d.f,d.h],pipes:[f.e],encapsulation:2}),t})(),P=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["app-patient-page"]],decls:3,vars:0,consts:[[1,"w-full","min-h-full","bg-gray-200","flex","justify-center","items-center"],[1,"w-4/5"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Vb(1,"div",1),o.Qb(2,"app-patient-table"),o.Ub(),o.Ub())},directives:[I],encapsulation:2}),t})();var k=a("tyNb"),M=a("3Pt+"),$=a("aY+K"),O=a("kmnG"),j=a("qFsG"),J=a("iadO"),R=a("d3UM"),G=a("FKr1");function H(t,e){if(1&t&&(o.Vb(0,"mat-option",15),o.Ac(1),o.Ub()),2&t){const t=e.$implicit;o.mc("value",t),o.Eb(1),o.Cc(" ",t," ")}}function W(t,e){if(1&t&&(o.Vb(0,"mat-option",15),o.Ac(1),o.Ub()),2&t){const t=e.$implicit;o.mc("value",t),o.Eb(1),o.Cc(" ",t," ")}}let K=(()=>{class t{constructor(t){this.formBuilder=t,this.form=this.formBuilder.group({firstName:["",M.n.required],middleName:["",M.n.required],lastName:["",M.n.required],sex:["",M.n.required],civilStatus:["",M.n.required],birthDate:["",M.n.required],address:["",M.n.required]})}ngOnInit(){}get sexes(){return["Male","Female"]}get civilStatuses(){return["Single","Married","Annuled","Divorced","Widow","Widower"]}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(M.c))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-patient-form"]],decls:35,vars:6,consts:[[3,"form","formGroup"],[1,"grid","grid-cols-3","gap-4"],["appearance","outline",1,"w-full"],["matInput","","type","text","required","","formControlName","firstName"],["matInput","","type","text","required","","formControlName","middleName"],["matInput","","type","text","required","","formControlName","lastName"],["appearance","outline",1,"w-full","col-span-3"],["matInput","","type","text","required","","formControlName","address"],["matInput","","formControlName","birthDate",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["appearance","outline"],["formControlName","sex"],[3,"value",4,"ngFor","ngForOf"],["formControlName","civilStatus"],[3,"value"]],template:function(t,e){if(1&t&&(o.Vb(0,"app-form",0),o.Vb(1,"div",1),o.Vb(2,"mat-form-field",2),o.Vb(3,"mat-label"),o.Ac(4,"First Name"),o.Ub(),o.Qb(5,"input",3),o.Ub(),o.Vb(6,"mat-form-field",2),o.Vb(7,"mat-label"),o.Ac(8,"Middle Name"),o.Ub(),o.Qb(9,"input",4),o.Ub(),o.Vb(10,"mat-form-field",2),o.Vb(11,"mat-label"),o.Ac(12,"Last Name"),o.Ub(),o.Qb(13,"input",5),o.Ub(),o.Vb(14,"mat-form-field",6),o.Vb(15,"mat-label"),o.Ac(16,"Address"),o.Ub(),o.Qb(17,"input",7),o.Ub(),o.Vb(18,"mat-form-field",2),o.Vb(19,"mat-label"),o.Ac(20,"Birthdate"),o.Ub(),o.Qb(21,"input",8),o.Qb(22,"mat-datepicker-toggle",9),o.Qb(23,"mat-datepicker",null,10),o.Ub(),o.Vb(25,"mat-form-field",11),o.Vb(26,"mat-label"),o.Ac(27,"Sex"),o.Ub(),o.Vb(28,"mat-select",12),o.zc(29,H,2,2,"mat-option",13),o.Ub(),o.Ub(),o.Vb(30,"mat-form-field",11),o.Vb(31,"mat-label"),o.Ac(32,"Civil Status"),o.Ub(),o.Vb(33,"mat-select",14),o.zc(34,W,2,2,"mat-option",13),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&t){const t=o.rc(24);o.mc("form",e.form)("formGroup",e.form),o.Eb(21),o.mc("matDatepicker",t),o.Eb(1),o.mc("for",t),o.Eb(7),o.mc("ngForOf",e.sexes),o.Eb(5),o.mc("ngForOf",e.civilStatuses)}},directives:[$.a,M.j,M.e,O.b,O.e,j.b,M.b,M.m,M.i,M.d,J.b,J.d,O.f,J.a,R.a,f.k,G.k],encapsulation:2}),t})();var L=a("HUga");const X=[{path:"",component:P}];let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({providers:[{provide:n.a,useValue:i.b},{provide:n.b,useValue:K},{provide:n.c,useValue:"Patient"}],imports:[[f.c,k.c.forChild(X),L.a,M.l,c.a]]}),t})()}}]);