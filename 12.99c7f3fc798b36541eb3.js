(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{AMsP:function(t,e,a){"use strict";a.r(e),a.d(e,"PatientModule",function(){return Gt});var i=a("4Cs4"),n=a("eJWM"),c=a("d1mw"),o=a("hctd"),r=a("fXoL"),l=a("j+WJ"),b=a("Q4MQ"),d=a("3Pt+"),s=a("0IaG"),m=a("aY+K"),u=a("kmnG"),p=a("qFsG"),f=a("iadO"),h=a("d3UM"),g=a("ofXK"),C=a("FKr1");function U(t,e){if(1&t&&(r.Vb(0,"mat-option",15),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.mc("value",t),r.Eb(1),r.Ec(" ",t," ")}}function V(t,e){if(1&t&&(r.Vb(0,"mat-option",15),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.mc("value",t),r.Eb(1),r.Ec(" ",t," ")}}let v=(()=>{class t{constructor(t,e){var a,i,n,c,o,r,l;this.formBuilder=t,this.data=e,this.form=this.formBuilder.group({firstName:[null===(a=this.data)||void 0===a?void 0:a.firstName,d.r.required],middleName:[null===(i=this.data)||void 0===i?void 0:i.middleName,d.r.required],lastName:[null===(n=this.data)||void 0===n?void 0:n.lastName,d.r.required],sex:[null===(c=this.data)||void 0===c?void 0:c.sex,d.r.required],civilStatus:[null===(o=this.data)||void 0===o?void 0:o.civilStatus,d.r.required],birthDate:[null===(r=this.data)||void 0===r?void 0:r.birthDate.toDate(),d.r.required],address:[null===(l=this.data)||void 0===l?void 0:l.address,d.r.required]})}ngOnInit(){}get sexes(){return["Male","Female"]}get civilStatuses(){return["Single","Married","Annuled","Divorced","Widow","Widower"]}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(d.d),r.Pb(s.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-patient-form"]],decls:35,vars:7,consts:[[3,"form","formGroup","id"],[1,"grid","grid-cols-3","gap-4"],["appearance","outline",1,"w-full"],["matInput","","type","text","required","","formControlName","firstName"],["matInput","","type","text","required","","formControlName","middleName"],["matInput","","type","text","required","","formControlName","lastName"],["appearance","outline",1,"w-full","col-span-3"],["matInput","","type","text","required","","formControlName","address"],["matInput","","formControlName","birthDate",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["appearance","outline"],["formControlName","sex"],[3,"value",4,"ngFor","ngForOf"],["formControlName","civilStatus"],[3,"value"]],template:function(t,e){if(1&t&&(r.Vb(0,"app-form",0),r.Vb(1,"div",1),r.Vb(2,"mat-form-field",2),r.Vb(3,"mat-label"),r.Cc(4,"First Name"),r.Ub(),r.Qb(5,"input",3),r.Ub(),r.Vb(6,"mat-form-field",2),r.Vb(7,"mat-label"),r.Cc(8,"Middle Name"),r.Ub(),r.Qb(9,"input",4),r.Ub(),r.Vb(10,"mat-form-field",2),r.Vb(11,"mat-label"),r.Cc(12,"Last Name"),r.Ub(),r.Qb(13,"input",5),r.Ub(),r.Vb(14,"mat-form-field",6),r.Vb(15,"mat-label"),r.Cc(16,"Address"),r.Ub(),r.Qb(17,"input",7),r.Ub(),r.Vb(18,"mat-form-field",2),r.Vb(19,"mat-label"),r.Cc(20,"Birthdate"),r.Ub(),r.Qb(21,"input",8),r.Qb(22,"mat-datepicker-toggle",9),r.Qb(23,"mat-datepicker",null,10),r.Ub(),r.Vb(25,"mat-form-field",11),r.Vb(26,"mat-label"),r.Cc(27,"Sex"),r.Ub(),r.Vb(28,"mat-select",12),r.Ac(29,U,2,2,"mat-option",13),r.Ub(),r.Ub(),r.Vb(30,"mat-form-field",11),r.Vb(31,"mat-label"),r.Cc(32,"Civil Status"),r.Ub(),r.Vb(33,"mat-select",14),r.Ac(34,V,2,2,"mat-option",13),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t){const t=r.rc(24);r.mc("form",e.form)("formGroup",e.form)("id",null==e.data?null:e.data.id),r.Eb(21),r.mc("matDatepicker",t),r.Eb(1),r.mc("for",t),r.Eb(7),r.mc("ngForOf",e.sexes),r.Eb(5),r.mc("ngForOf",e.civilStatuses)}},directives:[m.a,d.l,d.f,u.c,u.f,p.b,d.b,d.q,d.k,d.e,f.b,f.d,u.g,f.a,h.a,g.k,C.m],encapsulation:2}),t})();var D=a("uEYW"),y=a("Dh3D"),E=a("+0xr"),A=a("HWWf"),x=a("bTqV"),S=a("tyNb"),N=a("NFeN");function I(t,e){1&t&&(r.Vb(0,"th",19),r.Cc(1,"Avatar"),r.Ub())}function w(t,e){if(1&t&&(r.Vb(0,"td",20),r.Qb(1,"ngx-avatar",21),r.Ub()),2&t){const t=e.$implicit,a=r.gc();r.Eb(1),r.mc("src",null==t?null:t.profileImage)("name",a.getInitials(t))}}function T(t,e){1&t&&(r.Vb(0,"th",22),r.Cc(1," First Name "),r.Ub())}function P(t,e){if(1&t&&(r.Vb(0,"td",23),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.firstName," ")}}function k(t,e){1&t&&(r.Vb(0,"th",22),r.Cc(1," Middle Name "),r.Ub())}function $(t,e){if(1&t&&(r.Vb(0,"td",23),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.middleName," ")}}function F(t,e){1&t&&(r.Vb(0,"th",22),r.Cc(1," Last Name "),r.Ub())}function B(t,e){if(1&t&&(r.Vb(0,"td",23),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.lastName," ")}}function M(t,e){1&t&&(r.Vb(0,"th",22),r.Cc(1," Address "),r.Ub())}function Q(t,e){if(1&t&&(r.Vb(0,"td",23),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.address," ")}}function q(t,e){1&t&&(r.Vb(0,"th",24),r.Cc(1,"Birth Date"),r.Ub())}function O(t,e){if(1&t&&(r.Vb(0,"td",20),r.Cc(1),r.hc(2,"date"),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",r.jc(2,1,t.birthDate.toDate(),"mediumDate")," ")}}function W(t,e){1&t&&(r.Vb(0,"th",25),r.Cc(1,"Civil Status"),r.Ub())}function R(t,e){if(1&t&&(r.Vb(0,"td",23),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.civilStatus," ")}}function j(t,e){1&t&&(r.Vb(0,"th",22),r.Cc(1," Sex "),r.Ub())}function z(t,e){if(1&t&&(r.Vb(0,"td",23),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.sex," ")}}function H(t,e){1&t&&(r.Vb(0,"th",24),r.Cc(1,"Created By"),r.Ub())}function J(t,e){if(1&t&&(r.Vb(0,"td",23),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.createdBy," ")}}function L(t,e){1&t&&(r.Vb(0,"th",22),r.Cc(1," Created At "),r.Ub())}function _(t,e){if(1&t&&(r.Vb(0,"td",23),r.Cc(1),r.hc(2,"date"),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",r.ic(2,1,t.createdAt.toDate())," ")}}function G(t,e){1&t&&r.Qb(0,"th",19)}const K=function(t){return["./",t]};function X(t,e){if(1&t&&(r.Vb(0,"td",20),r.Vb(1,"div",26),r.Vb(2,"a",27),r.Vb(3,"mat-icon"),r.Cc(4,"launch"),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t){const t=e.$implicit;r.Eb(2),r.mc("routerLink",r.oc(1,K,t.id))}}let Y=(()=>{class t extends b.a{constructor(){super(...arguments),this.displayedColumns=["avatar","firstName","middleName","lastName","address","birthDate","civilStatus","sex","createdBy","createdAt","options"]}getInitials(t){return`${t.firstName} ${t.lastName}`}}return t.\u0275fac=function(e){return Z(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-patient-table"]],features:[r.Db([{provide:c.b,useValue:n.c},{provide:c.c,useValue:v},{provide:c.d,useValue:"Patient"},{provide:c.a,useValue:n.c}]),r.Bb],decls:35,vars:3,consts:[["matSort","",3,"columns","sort","readonly"],["matSort","matSort"],["matColumnDef","avatar"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["mat-header-cell","","mat-sort-header","","class","p-2",4,"matHeaderCellDef"],["mat-cell","","class","p-2",4,"matCellDef"],["matColumnDef","middleName"],["matColumnDef","lastName"],["matColumnDef","address"],["matColumnDef","birthDate"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","civilStatus"],["mat-header-cell","","class","p-2",4,"matHeaderCellDef"],["matColumnDef","sex"],["matColumnDef","createdBy"],["matColumnDef","createdAt"],["matColumnDef","options"],["mat-header-cell",""],["mat-cell",""],["size","32",3,"src","name"],["mat-header-cell","","mat-sort-header","",1,"p-2"],["mat-cell","",1,"p-2"],["mat-header-cell","","mat-sort-header",""],["mat-header-cell","",1,"p-2"],[1,"w-full","flex","justify-end","text-gray-500"],["mat-icon-button","",1,"self-end","text-yellow-600",3,"routerLink"]],template:function(t,e){if(1&t&&(r.Vb(0,"app-table",0,1),r.Tb(2,2),r.Ac(3,I,2,0,"th",3),r.Ac(4,w,2,2,"td",4),r.Sb(),r.Tb(5,5),r.Ac(6,T,2,0,"th",6),r.Ac(7,P,2,1,"td",7),r.Sb(),r.Tb(8,8),r.Ac(9,k,2,0,"th",6),r.Ac(10,$,2,1,"td",7),r.Sb(),r.Tb(11,9),r.Ac(12,F,2,0,"th",6),r.Ac(13,B,2,1,"td",7),r.Sb(),r.Tb(14,10),r.Ac(15,M,2,0,"th",6),r.Ac(16,Q,2,1,"td",7),r.Sb(),r.Tb(17,11),r.Ac(18,q,2,0,"th",12),r.Ac(19,O,3,4,"td",4),r.Sb(),r.Tb(20,13),r.Ac(21,W,2,0,"th",14),r.Ac(22,R,2,1,"td",7),r.Sb(),r.Tb(23,15),r.Ac(24,j,2,0,"th",6),r.Ac(25,z,2,1,"td",7),r.Sb(),r.Tb(26,16),r.Ac(27,H,2,0,"th",12),r.Ac(28,J,2,1,"td",7),r.Sb(),r.Tb(29,17),r.Ac(30,L,2,0,"th",6),r.Ac(31,_,3,3,"td",7),r.Sb(),r.Tb(32,18),r.Ac(33,G,1,0,"th",3),r.Ac(34,X,5,3,"td",4),r.Sb(),r.Ub()),2&t){const t=r.rc(1);r.mc("columns",e.displayedColumns)("sort",t)("readonly",!e.isEditorRole)}},directives:[D.a,y.a,E.c,E.e,E.b,E.d,E.a,A.a,y.b,x.a,S.d,N.a],pipes:[g.e],encapsulation:2}),t})();const Z=r.Xb(Y);let tt=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-patient-page"]],decls:4,vars:0,consts:[[1,"w-full","min-h-full","bg-gray-200"],[1,"mx-4","mt-8"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Qb(1,"app-toolbar"),r.Vb(2,"div",1),r.Qb(3,"app-patient-table"),r.Ub(),r.Ub())},directives:[l.a,Y],encapsulation:2}),t})();var et=a("HUga"),at=a("KwcT"),it=a("I/3d"),nt=a("STbY"),ct=a("F1oM"),ot=a("tk/3"),rt=a("3nuN"),lt=a("kvL/");function bt(t,e){if(1&t){const t=r.Wb();r.Vb(0,"ngx-dropzone-image-preview",6),r.cc("removed",function(){r.tc(t);const a=e.$implicit;return r.gc().onRemove(a)}),r.Ub()}2&t&&r.mc("file",e.$implicit)("removable",!0)}function dt(t,e){if(1&t){const t=r.Wb();r.Vb(0,"button",7),r.cc("click",function(){return r.tc(t),r.gc().upload()}),r.Cc(1," Upload "),r.Ub()}}let st=(()=>{class t{constructor(t,e,a,i,n){this.dialogData=t,this.http=e,this.cloudinary=a,this.firestore=i,this.dialogRef=n,this.files=[],this.isUploading=!1}ngOnInit(){}onSelect(t){this.files=[],this.files.push(...t.addedFiles)}onRemove(t){this.files.splice(this.files.indexOf(t),1)}upload(){const t=this.files[0],e=`https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/image/upload`,a=new ot.c({"X-Requested-With":"XMLHttpRequest"});let i=new FormData;i.append("file",t),i.append("upload_preset","TenazasHIS"),this.isUploading=!0,this.http.post(e,i,{headers:a}).subscribe(t=>{this.updatePatientProfile(t.secure_url),this.isUploading=!1,this.dialogRef.close()},t=>this.isUploading=!1)}updatePatientProfile(t){this.firestore.collection(n.c).doc(this.dialogData).update({profileImage:t})}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(s.a),r.Pb(ot.a),r.Pb(rt.a),r.Pb(it.a),r.Pb(s.g))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-profile-upload"]],decls:10,vars:4,consts:[["ngx-dropzone","",1,"h-96","justify-center","items-center",3,"accept","multiple","change"],[1,"text-blue-600"],["ngProjectAs","ngx-dropzone-preview","class","w-4/5 h-4/5",5,["ngx-dropzone-preview"],3,"file","removable","removed",4,"ngFor","ngForOf"],["align","end"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-button","","mat-dialog-close",""],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],1,"w-4/5","h-4/5",3,"file","removable","removed"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.cc("change",function(t){return e.onSelect(t)}),r.Vb(1,"ngx-dropzone-label"),r.Vb(2,"div"),r.Vb(3,"h2",1),r.Cc(4,"Upload Image"),r.Ub(),r.Ub(),r.Ub(),r.Ac(5,bt,1,2,"ngx-dropzone-image-preview",2),r.Ub(),r.Vb(6,"mat-dialog-actions",3),r.Ac(7,dt,2,0,"button",4),r.Vb(8,"button",5),r.Cc(9,"Close"),r.Ub(),r.Ub()),2&t&&(r.mc("accept","image/*")("multiple",!1),r.Eb(5),r.mc("ngForOf",e.files),r.Eb(2),r.mc("ngIf",e.files.length>0&&!e.isUploading))},directives:[lt.a,lt.d,g.k,s.c,g.l,x.b,s.d,lt.b],encapsulation:2}),t})(),mt=(()=>{class t{constructor(t){this.dialog=t}openUploader(){this.dialog.open(st,{data:this.id,minWidth:"680px"})}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(s.b))},t.\u0275dir=r.Kb({type:t,selectors:[["","appProfileUploadTrigger",""]],hostBindings:function(t,e){1&t&&r.cc("click",function(){return e.openUploader(e.event)})},inputs:{id:"id"}}),t})();var ut=a("Wp6s");const pt=["*"];let ft=(()=>{class t{constructor(){this.icon="badge"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["app-patient-property-card"]],inputs:{key:"key",icon:"icon"},ngContentSelectors:pt,decls:8,vars:2,consts:[[1,"flex","items-center","gap-4"],[1,"text-xl","text-blue-600"],[1,"labels"],[1,"mb-1","text-gray-700","text-base"],[1,"mb-0","text-xs","text-yellow-500"]],template:function(t,e){1&t&&(r.lc(),r.Vb(0,"mat-card",0),r.Vb(1,"mat-icon",1),r.Cc(2),r.Ub(),r.Vb(3,"div",2),r.Vb(4,"p",3),r.kc(5),r.Ub(),r.Vb(6,"p",4),r.Cc(7),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.Eb(2),r.Ec("",e.icon," "),r.Eb(5),r.Dc(e.key))},directives:[ut.a,N.a],encapsulation:2}),t})();var ht=a("R88c"),gt=a("IbMb"),Ct=a("TO6b");function Ut(t,e){1&t&&(r.Vb(0,"th",18),r.Cc(1,"Id"),r.Ub())}function Vt(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Dc(t.id)}}function vt(t,e){1&t&&(r.Vb(0,"th",20),r.Cc(1," Blood Pressure "),r.Ub())}function Dt(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Fc(" ",t.systolicBloodPressure,"/",t.diastolicBloodPressure," ")}}function yt(t,e){1&t&&(r.Vb(0,"th",20),r.Cc(1,"Temperature"),r.Ub())}function Et(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Dc(t.temperature)}}function At(t,e){1&t&&(r.Vb(0,"th",20),r.Cc(1," Engagement Type "),r.Ub())}function xt(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.engagementType.name," ")}}function St(t,e){1&t&&(r.Vb(0,"th",20),r.Cc(1,"Height"),r.Ub())}function Nt(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Dc(t.height)}}function It(t,e){1&t&&(r.Vb(0,"th",20),r.Cc(1," Engagement Date "),r.Ub())}function wt(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.hc(2,"date"),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",r.jc(2,1,t.engagementDate.toDate(),"mediumDate")," ")}}function Tt(t,e){1&t&&(r.Vb(0,"th",20),r.Cc(1,"Weight"),r.Ub())}function Pt(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.weight," ")}}function kt(t,e){1&t&&(r.Vb(0,"th",18),r.Cc(1,"BMI"),r.Ub())}function $t(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.Ub()),2&t){const t=e.$implicit,a=r.gc(2);r.Eb(1),r.Fc(" ",a.engagementService.getBmi(t.weight,t.height),"(",a.engagementService.getBmiRemark(t.weight,t.height),") ")}}function Ft(t,e){1&t&&(r.Vb(0,"th",20),r.Cc(1,"Story"),r.Ub())}function Bt(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.story," ")}}function Mt(t,e){1&t&&(r.Vb(0,"th",20),r.Cc(1,"Created At"),r.Ub())}function Qt(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.hc(2,"date"),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",r.ic(2,1,t.createdAt.toDate())," ")}}function qt(t,e){1&t&&(r.Vb(0,"th",20),r.Cc(1,"Created By"),r.Ub())}function Ot(t,e){if(1&t&&(r.Vb(0,"td",19),r.Cc(1),r.Ub()),2&t){const t=e.$implicit;r.Eb(1),r.Ec(" ",t.createdBy," ")}}function Wt(t,e){1&t&&r.Qb(0,"th",18)}function Rt(t,e){if(1&t&&(r.Vb(0,"button",26),r.Vb(1,"mat-icon"),r.Cc(2,"more_vert"),r.Ub(),r.Ub()),2&t){r.gc();const t=r.rc(4);r.mc("matMenuTriggerFor",t)}}function jt(t,e){if(1&t&&(r.Vb(0,"td",19),r.Vb(1,"div",21),r.Ac(2,Rt,3,1,"button",22),r.Vb(3,"mat-menu",null,23),r.Vb(5,"button",24),r.Cc(6," Edit Info "),r.Ub(),r.Vb(7,"button",25),r.Cc(8," Delete "),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t){const t=e.$implicit,a=r.gc(2);r.Eb(2),r.mc("ngIf",a.isEditorRole),r.Eb(3),r.mc("data",t),r.Eb(2),r.mc("id",t.id)}}function zt(t,e){if(1&t&&(r.Vb(0,"app-table",1,2),r.Tb(2,3),r.Ac(3,Ut,2,0,"th",4),r.Ac(4,Vt,2,1,"td",5),r.Sb(),r.Tb(5,6),r.Ac(6,vt,2,0,"th",7),r.Ac(7,Dt,2,2,"td",5),r.Sb(),r.Tb(8,8),r.Ac(9,yt,2,0,"th",7),r.Ac(10,Et,2,1,"td",5),r.Sb(),r.Tb(11,9),r.Ac(12,At,2,0,"th",7),r.Ac(13,xt,2,1,"td",5),r.Sb(),r.Tb(14,10),r.Ac(15,St,2,0,"th",7),r.Ac(16,Nt,2,1,"td",5),r.Sb(),r.Tb(17,11),r.Ac(18,It,2,0,"th",7),r.Ac(19,wt,3,4,"td",5),r.Sb(),r.Tb(20,12),r.Ac(21,Tt,2,0,"th",7),r.Ac(22,Pt,2,1,"td",5),r.Sb(),r.Tb(23,13),r.Ac(24,kt,2,0,"th",4),r.Ac(25,$t,2,2,"td",5),r.Sb(),r.Tb(26,14),r.Ac(27,Ft,2,0,"th",7),r.Ac(28,Bt,2,1,"td",5),r.Sb(),r.Tb(29,15),r.Ac(30,Mt,2,0,"th",7),r.Ac(31,Qt,3,3,"td",5),r.Sb(),r.Tb(32,16),r.Ac(33,qt,2,0,"th",7),r.Ac(34,Ot,2,1,"td",5),r.Sb(),r.Tb(35,17),r.Ac(36,Wt,1,0,"th",4),r.Ac(37,jt,9,3,"td",5),r.Sb(),r.Ub()),2&t){const t=r.rc(1),e=r.gc();r.mc("parentData",e.parentData)("parentId",e.parentId)("columns",e.displayedColumns)("filterByParent",e.filterByPatient)("sort",t)("readonly",!e.isEditorRole)}}let Ht=(()=>{class t extends b.a{constructor(t,e,a,i){super(t),this.firestore=e,this.collectionName=a,this.engagementService=i,this.displayedColumns=["id","bloodPressure","temperature","engagementType","engagementDate","height","weight","bmi","story","createdAt","createdBy","options"],this.dataSource=[],this.parentId="asd",this.parentData=null}filterByPatient(t,e){return t.where("patient.id","==",e)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(at.a),r.Pb(it.a),r.Pb(c.b),r.Pb(gt.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-engagement-by-patient"]],inputs:{parentId:"parentId",parentData:"parentData"},features:[r.Db([{provide:c.b,useValue:n.a},{provide:c.c,useValue:ht.a},{provide:c.d,useValue:"Engagement"},{provide:c.a,useValue:n.a},{provide:c.e,useValue:ht.a}]),r.Bb],decls:1,vars:1,consts:[["matSort","",3,"parentData","parentId","columns","filterByParent","sort","readonly",4,"ngIf"],["matSort","",3,"parentData","parentId","columns","filterByParent","sort","readonly"],["matSort","matSort"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","bloodPressure"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","temperature"],["matColumnDef","engagementType"],["matColumnDef","height"],["matColumnDef","engagementDate"],["matColumnDef","weight"],["matColumnDef","bmi"],["matColumnDef","story"],["matColumnDef","createdAt"],["matColumnDef","createdBy"],["matColumnDef","options"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],[1,"flex","justify-end"],["mat-icon-button","","class","text-yellow-600",3,"matMenuTriggerFor",4,"ngIf"],["menu","matMenu"],["mat-menu-item","","appFormUpdateTrigger","",3,"data"],["mat-menu-item","","appDeleteTrigger","",3,"id"],["mat-icon-button","",1,"text-yellow-600",3,"matMenuTriggerFor"]],template:function(t,e){1&t&&r.Ac(0,zt,38,6,"app-table",0),2&t&&r.mc("ngIf",e.parentId)},directives:[g.l,D.a,y.a,E.c,E.e,E.b,E.d,E.a,y.b,nt.a,nt.b,ct.a,Ct.a,x.b,nt.d,N.a],pipes:[g.e],styles:[".mat-table[_ngcontent-%COMP%]{border-collapse:collapse!important;overflow:hidden}"]}),t})();function Jt(t,e){if(1&t&&(r.Vb(0,"button",22),r.Vb(1,"mat-icon",23),r.Cc(2," more_vert "),r.Ub(),r.Ub()),2&t){r.gc();const t=r.rc(13);r.mc("matMenuTriggerFor",t)}}function Lt(t,e){if(1&t&&r.Qb(0,"app-engagement-by-patient",24),2&t){const t=r.gc();r.mc("parentData",t.data)("parentId",t.id)}}const _t=[{path:"",component:tt},{path:":id",component:(()=>{class t extends b.a{constructor(t,e,a,i){super(t),this.route=e,this.firestore=a,this.collectionName=i,this.id=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.loadData()}loadData(){const t=[this.collectionName,this.id].join("/");this.firestore.doc(t).valueChanges({idField:"id"}).subscribe(t=>{this.data=t})}get age(){var t;const e=null===(t=this.data)||void 0===t?void 0:t.birthDate.toDate().getFullYear();return new Date(Date.now()).getFullYear()-e}get initials(){var t,e;return`${null===(t=this.data)||void 0===t?void 0:t.firstName} ${null===(e=this.data)||void 0===e?void 0:e.lastName}`}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(at.a),r.Pb(S.a),r.Pb(it.a),r.Pb(c.b))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-patient-detail-page"]],features:[r.Bb],decls:40,vars:27,consts:[[1,"w-full","bg-gray-200","min-h-full"],[1,"p-4","pt-8","col-span-2","flex","items-center","flex-col","relative","box-border"],["size","200",3,"src","name"],[1,"my-2","text-base","text-gray-700"],[1,"text-xs"],["mat-icon-button","","class","absolute top-8 right-4","color","primary",3,"matMenuTriggerFor",4,"ngIf"],["menu","matMenu"],["mat-menu-item","","appFormUpdateTrigger","",3,"data"],["mat-menu-item","","appProfileUploadTrigger","",3,"id"],[1,"p-8","mb-8","col-span-6"],[1,"grid","grid-cols-3","gap-4"],["key","First Name"],["key","Middle Name"],["key","Last Name"],["key","Birth Date","icon","cake"],[1,"col-span-2"],["key","Address","icon","home"],["key","Civil Status"],["key","Sex"],["key","Age"],[1,"p-8"],[3,"parentData","parentId",4,"ngIf"],["mat-icon-button","","color","primary",1,"absolute","top-8","right-4",3,"matMenuTriggerFor"],[1,"mat-18"],[3,"parentData","parentId"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Qb(1,"app-toolbar"),r.Vb(2,"div",1),r.Qb(3,"ngx-avatar",2),r.Vb(4,"p",3),r.Cc(5),r.hc(6,"titlecase"),r.hc(7,"titlecase"),r.hc(8,"titlecase"),r.Ub(),r.Vb(9,"p",4),r.Cc(10),r.Ub(),r.Ac(11,Jt,3,1,"button",5),r.Vb(12,"mat-menu",null,6),r.Vb(14,"button",7),r.Cc(15," Edit Information "),r.Ub(),r.Vb(16,"button",8),r.Cc(17," Upload Profile Picture "),r.Ub(),r.Ub(),r.Ub(),r.Vb(18,"div",9),r.Vb(19,"div",10),r.Vb(20,"app-patient-property-card",11),r.Cc(21),r.Ub(),r.Vb(22,"app-patient-property-card",12),r.Cc(23),r.Ub(),r.Vb(24,"app-patient-property-card",13),r.Cc(25),r.Ub(),r.Vb(26,"app-patient-property-card",14),r.Cc(27),r.hc(28,"date"),r.Ub(),r.Vb(29,"div",15),r.Vb(30,"app-patient-property-card",16),r.Cc(31),r.Ub(),r.Ub(),r.Vb(32,"app-patient-property-card",17),r.Cc(33),r.Ub(),r.Vb(34,"app-patient-property-card",18),r.Cc(35),r.Ub(),r.Vb(36,"app-patient-property-card",19),r.Cc(37),r.Ub(),r.Ub(),r.Ub(),r.Vb(38,"div",20),r.Ac(39,Lt,1,2,"app-engagement-by-patient",21),r.Ub(),r.Ub()),2&t&&(r.Eb(3),r.mc("src",null==e.data?null:e.data.profileImage)("name",e.initials),r.Eb(2),r.Gc(" ",r.ic(6,18,null==e.data?null:e.data.firstName)," ",r.ic(7,20,null==e.data?null:e.data.middleName)," ",r.ic(8,22,null==e.data?null:e.data.lastName)," "),r.Eb(5),r.Ec("ID: ",e.id,""),r.Eb(1),r.mc("ngIf",e.isEditorRole),r.Eb(3),r.mc("data",e.data),r.Eb(2),r.mc("id",null==e.data?null:e.data.id),r.Eb(5),r.Dc(null==e.data?null:e.data.firstName),r.Eb(2),r.Ec("",null==e.data?null:e.data.middleName," "),r.Eb(2),r.Dc(null==e.data?null:e.data.lastName),r.Eb(2),r.Dc(r.jc(28,24,null==e.data||null==e.data.birthDate?null:e.data.birthDate.toDate(),"longDate")),r.Eb(4),r.Dc(null==e.data?null:e.data.address),r.Eb(2),r.Dc(null==e.data?null:e.data.civilStatus),r.Eb(2),r.Dc(null==e.data?null:e.data.sex),r.Eb(2),r.Dc(e.age),r.Eb(2),r.mc("ngIf",e.id))},directives:[l.a,A.a,g.l,nt.a,nt.b,ct.a,mt,ft,x.b,nt.d,N.a,Ht],pipes:[g.s,g.e],encapsulation:2}),t})()}];let Gt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({providers:[{provide:c.b,useValue:n.c},{provide:c.c,useValue:v},{provide:c.d,useValue:"Patient"},{provide:c.a,useValue:n.c},{provide:c.e,useValue:v}],imports:[[g.c,S.e.forChild(_t),i.a,et.a,d.p,o.a]]}),t})()}}]);