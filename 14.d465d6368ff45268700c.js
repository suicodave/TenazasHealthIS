(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7UCR":function(e,t,a){"use strict";a.r(t),a.d(t,"UserModule",function(){return re});var r=a("eJWM"),i=a("d1mw"),o=a("fXoL"),l=a("j+WJ"),n=a("mrSG"),m=a("quSY"),c=a("3Pt+"),s=a("Jgta"),b=a("AytR"),u=a("0IaG"),d=a("UbJi"),f=a("I/3d"),p=a("aY+K"),h=a("ofXK"),U=a("kmnG"),C=a("qFsG"),V=a("d3UM"),g=a("FKr1");function N(e,t){1&e&&(o.Vb(0,"mat-form-field",3),o.Vb(1,"mat-label"),o.Cc(2,"Email"),o.Ub(),o.Qb(3,"input",9),o.Ub())}function v(e,t){1&e&&(o.Vb(0,"mat-form-field",3),o.Vb(1,"mat-label"),o.Cc(2,"Default Password"),o.Ub(),o.Qb(3,"input",10),o.Ub())}function A(e,t){if(1&e&&(o.Vb(0,"mat-option",11),o.Cc(1),o.Ub()),2&e){const e=t.$implicit;o.mc("value",e),o.Eb(1),o.Ec(" ",e.name," ")}}let D=(()=>{class e{constructor(e,t,a,r){this.formBuilder=e,this.fireAuth=t,this.firestore=a,this.data=r,this.form=this.formBuilder.group({email:["",[c.r.required,c.r.email]],password:["",[c.r.required,c.r.minLength(6)]],firstName:["",c.r.required],middleName:["",c.r.required],lastName:["",c.r.required],role:["",c.r.required]}),this.subscription=new m.a,this.roles=[]}ngOnDestroy(){this.subscription.unsubscribe()}ngOnInit(){this.getRoles(),this.initFormForUpdate()}createUserCredentials(e){const{password:t,email:a}=this.form.value;s.a.initializeApp(b.a.firebaseConfig,"detached").auth().createUserWithEmailAndPassword(a,t).then(e=>{var t;console.log(`Created user: ${null===(t=e.user)||void 0===t?void 0:t.email}`)})}resolveFormValue(e){const t=e.value;return Object(n.f)(t,["password"])}getRoles(){this.subscription=this.firestore.collection(r.d,e=>e.orderBy("name","asc")).valueChanges({idField:"id"}).subscribe(e=>this.roles=e)}initFormForUpdate(){this.data&&(this.form=this.formBuilder.group({firstName:[this.data.firstName,c.r.required],middleName:[this.data.middleName,c.r.required],lastName:[this.data.lastName,c.r.required],role:[this.data.role,c.r.required]}))}compareRole(e,t){return e.name==t.name}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(c.d),o.Pb(d.a),o.Pb(f.a),o.Pb(u.a))},e.\u0275cmp=o.Jb({type:e,selectors:[["app-user-form"]],decls:21,vars:8,consts:[[3,"form","formGroup","formValue","id","added"],[1,"grid","grid-cols-3","gap-4"],["class","w-full",4,"ngIf"],[1,"w-full"],["matInput","","type","text","required","","formControlName","firstName"],["matInput","","type","text","required","","formControlName","middleName"],["matInput","","type","text","required","","formControlName","lastName"],["formControlName","role",3,"compareWith"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","email","required","","formControlName","email"],["matInput","","type","password","required","","formControlName","password"],[3,"value"]],template:function(e,t){1&e&&(o.Vb(0,"app-form",0),o.cc("added",function(e){return t.createUserCredentials(e)}),o.Vb(1,"div",1),o.Ac(2,N,4,0,"mat-form-field",2),o.Ac(3,v,4,0,"mat-form-field",2),o.Vb(4,"mat-form-field",3),o.Vb(5,"mat-label"),o.Cc(6,"First Name"),o.Ub(),o.Qb(7,"input",4),o.Ub(),o.Vb(8,"mat-form-field",3),o.Vb(9,"mat-label"),o.Cc(10,"Midlle Name"),o.Ub(),o.Qb(11,"input",5),o.Ub(),o.Vb(12,"mat-form-field",3),o.Vb(13,"mat-label"),o.Cc(14,"Last Name"),o.Ub(),o.Qb(15,"input",6),o.Ub(),o.Vb(16,"mat-form-field"),o.Vb(17,"mat-label"),o.Cc(18,"Role"),o.Ub(),o.Vb(19,"mat-select",7),o.Ac(20,A,2,2,"mat-option",8),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e&&(o.mc("form",t.form)("formGroup",t.form)("formValue",t.resolveFormValue)("id",null==t.data?null:t.data.id),o.Eb(2),o.mc("ngIf",!t.data),o.Eb(1),o.mc("ngIf",!t.data),o.Eb(16),o.mc("compareWith",t.compareRole),o.Eb(1),o.mc("ngForOf",t.roles))},directives:[p.a,c.l,c.f,h.l,U.c,U.f,C.b,c.b,c.q,c.k,c.e,V.a,h.k,g.m],encapsulation:2}),e})();var w=a("Q4MQ"),y=a("KwcT"),E=a("uEYW"),F=a("Dh3D"),q=a("+0xr"),T=a("STbY"),I=a("F1oM"),S=a("TO6b"),M=a("bTqV"),Q=a("NFeN");function R(e,t){1&e&&(o.Vb(0,"th",13),o.Cc(1,"Id"),o.Ub())}function $(e,t){if(1&e&&(o.Vb(0,"td",14),o.Cc(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Dc(null==e?null:e.id)}}function x(e,t){1&e&&(o.Vb(0,"th",15),o.Cc(1,"E-mail"),o.Ub())}function J(e,t){if(1&e&&(o.Vb(0,"td",14),o.Cc(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Dc(null==e?null:e.email)}}function P(e,t){1&e&&(o.Vb(0,"th",15),o.Cc(1,"First Name"),o.Ub())}function B(e,t){if(1&e&&(o.Vb(0,"td",14),o.Cc(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Dc(null==e?null:e.firstName)}}function O(e,t){1&e&&(o.Vb(0,"th",15),o.Cc(1,"Middle Name"),o.Ub())}function j(e,t){if(1&e&&(o.Vb(0,"td",14),o.Cc(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Dc(null==e?null:e.middleName)}}function G(e,t){1&e&&(o.Vb(0,"th",15),o.Cc(1,"Last Name"),o.Ub())}function W(e,t){if(1&e&&(o.Vb(0,"td",14),o.Cc(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Dc(null==e?null:e.lastName)}}function k(e,t){1&e&&(o.Vb(0,"th",15),o.Cc(1,"Role"),o.Ub())}function K(e,t){if(1&e&&(o.Vb(0,"td",14),o.Cc(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Dc(null==e?null:e.role.name)}}function L(e,t){1&e&&(o.Vb(0,"th",15),o.Cc(1,"Created At"),o.Ub())}function Y(e,t){if(1&e&&(o.Vb(0,"td",14),o.Cc(1),o.hc(2,"date"),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Ec(" ",o.jc(2,1,null==e?null:e.createdAt.toDate(),"mediumDate")," ")}}function H(e,t){1&e&&o.Qb(0,"th",13)}function X(e,t){if(1&e&&(o.Vb(0,"button",21),o.Vb(1,"mat-icon"),o.Cc(2,"more_vert"),o.Ub(),o.Ub()),2&e){o.gc();const e=o.rc(4);o.mc("matMenuTriggerFor",e)}}function z(e,t){if(1&e&&(o.Vb(0,"td",14),o.Vb(1,"div",16),o.Ac(2,X,3,1,"button",17),o.Vb(3,"mat-menu",null,18),o.Vb(5,"button",19),o.Cc(6," Edit "),o.Ub(),o.Vb(7,"button",20),o.Cc(8," Delete "),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e){const e=t.$implicit,a=o.gc();o.Eb(2),o.mc("ngIf",a.isAdminRole),o.Eb(3),o.mc("data",e),o.Eb(2),o.mc("id",e.id)}}let _=(()=>{class e extends w.a{constructor(e){super(e),this.displayedColumns=["id","email","firstName","middleName","lastName","role","createdAt","options"]}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(y.a))},e.\u0275cmp=o.Jb({type:e,selectors:[["app-user-table"]],features:[o.Db([{provide:i.e,useValue:D}]),o.Bb],decls:26,vars:3,consts:[["orderByField","createdAt","orderByDirection","desc","matSort","",3,"columns","sort","readonly"],["matSort","matSort"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","firstName"],["matColumnDef","middleName"],["matColumnDef","lastName"],["matColumnDef","role"],["matColumnDef","createdAt"],["matColumnDef","options"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],[1,"flex","justify-end"],["mat-icon-button","","class","text-yellow-600",3,"matMenuTriggerFor",4,"ngIf"],["menu","matMenu"],["mat-menu-item","","appFormUpdateTrigger","",3,"data"],["mat-menu-item","","appDeleteTrigger","",3,"id"],["mat-icon-button","",1,"text-yellow-600",3,"matMenuTriggerFor"]],template:function(e,t){if(1&e&&(o.Vb(0,"app-table",0,1),o.Tb(2,2),o.Ac(3,R,2,0,"th",3),o.Ac(4,$,2,1,"td",4),o.Sb(),o.Tb(5,5),o.Ac(6,x,2,0,"th",6),o.Ac(7,J,2,1,"td",4),o.Sb(),o.Tb(8,7),o.Ac(9,P,2,0,"th",6),o.Ac(10,B,2,1,"td",4),o.Sb(),o.Tb(11,8),o.Ac(12,O,2,0,"th",6),o.Ac(13,j,2,1,"td",4),o.Sb(),o.Tb(14,9),o.Ac(15,G,2,0,"th",6),o.Ac(16,W,2,1,"td",4),o.Sb(),o.Tb(17,10),o.Ac(18,k,2,0,"th",6),o.Ac(19,K,2,1,"td",4),o.Sb(),o.Tb(20,11),o.Ac(21,L,2,0,"th",6),o.Ac(22,Y,3,4,"td",4),o.Sb(),o.Tb(23,12),o.Ac(24,H,1,0,"th",3),o.Ac(25,z,9,3,"td",4),o.Sb(),o.Ub()),2&e){const e=o.rc(1);o.mc("columns",t.displayedColumns)("sort",e)("readonly",!t.isAdminRole)}},directives:[E.a,F.a,q.c,q.e,q.b,q.d,q.a,F.b,h.l,T.a,T.b,I.a,S.a,M.b,T.d,Q.a],pipes:[h.e],encapsulation:2}),e})(),Z=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Jb({type:e,selectors:[["app-user-page"]],decls:5,vars:0,consts:[[1,"w-full","min-h-full","bg-gray-200"],[1,"flex","justify-center","items-center","mt-8"],[1,"w-4/5"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.Qb(1,"app-toolbar"),o.Vb(2,"div",1),o.Vb(3,"div",2),o.Qb(4,"app-user-table"),o.Ub(),o.Ub(),o.Ub())},directives:[l.a,_],encapsulation:2}),e})();var ee=a("tyNb"),te=a("HUga");const ae=[{path:"",component:Z}];let re=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({providers:[{provide:i.a,useValue:r.e},{provide:i.b,useValue:r.e},{provide:i.d,useValue:"User"},{provide:i.c,useValue:D}],imports:[[h.c,ee.e.forChild(ae),te.a,c.p]]}),e})()}}]);