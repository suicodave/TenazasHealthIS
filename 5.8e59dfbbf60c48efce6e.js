(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(i,t,n){"use strict";n.r(t),n.d(t,"AuthModule",function(){return h});var e=n("tyNb"),r=n("hctd"),o=n("fXoL"),s=n("3Pt+"),a=n("UbJi"),c=n("dNgK"),u=n("Wp6s"),b=n("kmnG"),l=n("qFsG"),m=n("bTqV");let p=(()=>{class i{constructor(i,t,n,e){this.fireAuth=i,this.formBuilder=t,this.snackBar=n,this.router=e,this.isSigningIn=!1}ngOnInit(){this.initializeForm()}initializeForm(){this.form=this.formBuilder.group({email:["",s.o.required],password:["",s.o.required]})}login(){const i=this.form.value;this.isSigningIn=!0,this.fireAuth.signInWithEmailAndPassword(i.email,i.password).then(i=>{var t;this.isSigningIn=!1,this.router.navigate([""]),this.snackBar.open(`Signed in as ${null===(t=i.user)||void 0===t?void 0:t.email}`,"Ok",{duration:2e3})}).catch(i=>{this.snackBar.open("Unable to sign in. Please try again!","Ok",{duration:1200}),this.isSigningIn=!1})}}return i.\u0275fac=function(t){return new(t||i)(o.Pb(a.a),o.Pb(s.c),o.Pb(c.a),o.Pb(e.c))},i.\u0275cmp=o.Jb({type:i,selectors:[["app-login-form"]],decls:14,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"inputs","grid","grid-cols-1","m-12","gap-4"],["appearance","outline"],["matInput","","type","email","required","","formControlName","email"],["matInput","","type","password","required","","formControlName","password"],[1,"flex","justify-center"],["mat-raised-button","","color","primary","type","submit",1,"px-8","py-1",3,"disabled"]],template:function(i,t){1&i&&(o.Vb(0,"mat-card"),o.Vb(1,"form",0),o.cc("ngSubmit",function(){return t.login()}),o.Vb(2,"div",1),o.Vb(3,"mat-form-field",2),o.Vb(4,"mat-label"),o.Ac(5,"Email"),o.Ub(),o.Qb(6,"input",3),o.Ub(),o.Vb(7,"mat-form-field",2),o.Vb(8,"mat-label"),o.Ac(9,"Password"),o.Ub(),o.Qb(10,"input",4),o.Ub(),o.Vb(11,"div",5),o.Vb(12,"button",6),o.Ac(13," Login "),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&i&&(o.Eb(1),o.mc("formGroup",t.form),o.Eb(11),o.mc("disabled",t.isSigningIn))},directives:[u.a,s.p,s.j,s.e,b.b,b.e,l.b,s.b,s.n,s.i,s.d,m.b],encapsulation:2}),i})(),d=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=o.Jb({type:i,selectors:[["app-login-page"]],decls:3,vars:0,consts:[[1,"bg-gray-200","w-full","min-h-full","flex","justify-center","items-center"],[1,"w-3/12"]],template:function(i,t){1&i&&(o.Vb(0,"div",0),o.Vb(1,"div",1),o.Qb(2,"app-login-form"),o.Ub(),o.Ub())},directives:[p],encapsulation:2}),i})();var f=n("ofXK");const g=[{path:"",component:d}];let h=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.Nb({type:i}),i.\u0275inj=o.Mb({imports:[[f.c,r.a,s.m,a.b,e.e.forChild(g)]]}),i})()}}]);