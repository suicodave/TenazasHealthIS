(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7UCR":function(e,t,r){"use strict";r.r(t),r.d(t,"UserModule",function(){return H});var a=r("eJWM"),i=r("d1mw"),o=r("fXoL"),n=r("uEYW"),l=r("Dh3D"),c=r("+0xr"),m=r("bTqV"),b=r("STbY"),s=r("NFeN"),u=r("TO6b"),d=r("ofXK");function f(e,t){1&e&&(o.Vb(0,"th",13),o.Ac(1,"Id"),o.Ub())}function p(e,t){if(1&e&&(o.Vb(0,"td",14),o.Ac(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Bc(null==e?null:e.id)}}function h(e,t){1&e&&(o.Vb(0,"th",15),o.Ac(1,"E-mail"),o.Ub())}function U(e,t){if(1&e&&(o.Vb(0,"td",14),o.Ac(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Bc(null==e?null:e.email)}}function V(e,t){1&e&&(o.Vb(0,"th",15),o.Ac(1,"First Name"),o.Ub())}function A(e,t){if(1&e&&(o.Vb(0,"td",14),o.Ac(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Bc(null==e?null:e.firstName)}}function N(e,t){1&e&&(o.Vb(0,"th",15),o.Ac(1,"Middle Name"),o.Ub())}function C(e,t){if(1&e&&(o.Vb(0,"td",14),o.Ac(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Bc(null==e?null:e.middleName)}}function v(e,t){1&e&&(o.Vb(0,"th",15),o.Ac(1,"Last Name"),o.Ub())}function g(e,t){if(1&e&&(o.Vb(0,"td",14),o.Ac(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Bc(null==e?null:e.lastName)}}function w(e,t){1&e&&(o.Vb(0,"th",15),o.Ac(1,"Role"),o.Ub())}function D(e,t){if(1&e&&(o.Vb(0,"td",14),o.Ac(1),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Bc(null==e?null:e.role.name)}}function y(e,t){1&e&&(o.Vb(0,"th",15),o.Ac(1,"Created At"),o.Ub())}function z(e,t){if(1&e&&(o.Vb(0,"td",14),o.Ac(1),o.hc(2,"date"),o.Ub()),2&e){const e=t.$implicit;o.Eb(1),o.Cc(" ",o.jc(2,1,null==e?null:e.createdAt.toDate(),"mediumDate")," ")}}function E(e,t){1&e&&o.Qb(0,"th",13)}function q(e,t){if(1&e&&(o.Vb(0,"td",14),o.Vb(1,"div",16),o.Vb(2,"button",17),o.Vb(3,"mat-icon"),o.Ac(4,"more_vert"),o.Ub(),o.Ub(),o.Vb(5,"mat-menu",null,18),o.Vb(7,"button",19),o.Ac(8," Delete "),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e){const e=t.$implicit,r=o.rc(6);o.Eb(2),o.mc("matMenuTriggerFor",r),o.Eb(5),o.mc("id",e.id)}}let F=(()=>{class e{constructor(){this.displayedColumns=["id","email","firstName","middleName","lastName","role","createdAt","options"]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Jb({type:e,selectors:[["app-user-table"]],decls:26,vars:2,consts:[["orderByField","createdAt","orderByDirection","desc","matSort","",3,"columns","sort"],["matSort","matSort"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","firstName"],["matColumnDef","middleName"],["matColumnDef","lastName"],["matColumnDef","role"],["matColumnDef","createdAt"],["matColumnDef","options"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],[1,"flex","justify-end"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","","appDeleteTrigger","",3,"id"]],template:function(e,t){if(1&e&&(o.Vb(0,"app-table",0,1),o.Tb(2,2),o.zc(3,f,2,0,"th",3),o.zc(4,p,2,1,"td",4),o.Sb(),o.Tb(5,5),o.zc(6,h,2,0,"th",6),o.zc(7,U,2,1,"td",4),o.Sb(),o.Tb(8,7),o.zc(9,V,2,0,"th",6),o.zc(10,A,2,1,"td",4),o.Sb(),o.Tb(11,8),o.zc(12,N,2,0,"th",6),o.zc(13,C,2,1,"td",4),o.Sb(),o.Tb(14,9),o.zc(15,v,2,0,"th",6),o.zc(16,g,2,1,"td",4),o.Sb(),o.Tb(17,10),o.zc(18,w,2,0,"th",6),o.zc(19,D,2,1,"td",4),o.Sb(),o.Tb(20,11),o.zc(21,y,2,0,"th",6),o.zc(22,z,3,4,"td",4),o.Sb(),o.Tb(23,12),o.zc(24,E,1,0,"th",3),o.zc(25,q,9,2,"td",4),o.Sb(),o.Ub()),2&e){const e=o.rc(1);o.mc("columns",t.displayedColumns)("sort",e)}},directives:[n.a,l.a,c.c,c.e,c.b,c.d,c.a,l.b,m.b,b.d,s.a,b.a,b.b,u.a],pipes:[d.e],encapsulation:2}),e})(),S=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Jb({type:e,selectors:[["app-user-page"]],decls:3,vars:0,consts:[[1,"w-full","min-h-full","bg-gray-200","flex","justify-center","items-center"],[1,"w-4/5"]],template:function(e,t){1&e&&(o.Vb(0,"div",0),o.Vb(1,"div",1),o.Qb(2,"app-user-table"),o.Ub(),o.Ub())},directives:[F],encapsulation:2}),e})();var T=r("tyNb"),B=r("HUga"),I=r("mrSG"),M=r("quSY"),$=r("3Pt+"),O=r("UbJi"),J=r("I/3d"),Q=r("aY+K"),j=r("kmnG"),x=r("qFsG"),P=r("d3UM"),G=r("FKr1");function R(e,t){if(1&e&&(o.Vb(0,"mat-option",10),o.Ac(1),o.Ub()),2&e){const e=t.$implicit;o.mc("value",e),o.Eb(1),o.Cc(" ",e.name," ")}}let k=(()=>{class e{constructor(e,t,r){this.formBuilder=e,this.fireAuth=t,this.firestore=r,this.form=this.formBuilder.group({email:["",[$.o.required,$.o.email]],password:["",$.o.required],firstName:["",$.o.required],middleName:["",$.o.required],lastName:["",$.o.required],role:["",$.o.required]}),this.subscription=new M.a,this.roles=[]}ngOnDestroy(){this.subscription.unsubscribe()}ngOnInit(){this.getRoles()}createUserCredentials(e){const{password:t,email:r}=this.form.value;this.fireAuth.createUserWithEmailAndPassword(r,t).then(e=>{})}resolveFormValue(e){const t=e.value;return Object(I.f)(t,["password"])}getRoles(){this.subscription=this.firestore.collection(a.d,e=>e.orderBy("name","asc")).valueChanges({idField:"id"}).subscribe(e=>this.roles=e)}}return e.\u0275fac=function(t){return new(t||e)(o.Pb($.c),o.Pb(O.a),o.Pb(J.a))},e.\u0275cmp=o.Jb({type:e,selectors:[["app-user-form"]],decls:27,vars:4,consts:[[3,"form","formGroup","formValue","added"],[1,"grid","grid-cols-3","gap-4"],[1,"w-full"],["matInput","","type","email","required","","formControlName","email"],["matInput","","type","password","required","","formControlName","password"],["matInput","","type","text","required","","formControlName","firstName"],["matInput","","type","text","required","","formControlName","middleName"],["matInput","","type","text","required","","formControlName","lastName"],["formControlName","role"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(o.Vb(0,"app-form",0),o.cc("added",function(e){return t.createUserCredentials(e)}),o.Vb(1,"div",1),o.Vb(2,"mat-form-field",2),o.Vb(3,"mat-label"),o.Ac(4,"Email"),o.Ub(),o.Qb(5,"input",3),o.Ub(),o.Vb(6,"mat-form-field",2),o.Vb(7,"mat-label"),o.Ac(8,"Default Password"),o.Ub(),o.Qb(9,"input",4),o.Ub(),o.Vb(10,"mat-form-field",2),o.Vb(11,"mat-label"),o.Ac(12,"First Name"),o.Ub(),o.Qb(13,"input",5),o.Ub(),o.Vb(14,"mat-form-field",2),o.Vb(15,"mat-label"),o.Ac(16,"Midlle Name"),o.Ub(),o.Qb(17,"input",6),o.Ub(),o.Vb(18,"mat-form-field",2),o.Vb(19,"mat-label"),o.Ac(20,"Last Name"),o.Ub(),o.Qb(21,"input",7),o.Ub(),o.Vb(22,"mat-form-field"),o.Vb(23,"mat-label"),o.Ac(24,"Role"),o.Ub(),o.Vb(25,"mat-select",8),o.zc(26,R,2,2,"mat-option",9),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&e&&(o.mc("form",t.form)("formGroup",t.form)("formValue",t.resolveFormValue),o.Eb(26),o.mc("ngForOf",t.roles))},directives:[Q.a,$.j,$.e,j.c,j.f,x.b,$.b,$.n,$.i,$.d,P.a,d.k,G.m],encapsulation:2}),e})();const Y=[{path:"",component:S}];let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Nb({type:e}),e.\u0275inj=o.Mb({providers:[{provide:i.a,useValue:a.e},{provide:i.b,useValue:a.e},{provide:i.d,useValue:"User"},{provide:i.c,useValue:k}],imports:[[d.c,T.e.forChild(Y),B.a,$.m]]}),e})()}}]);