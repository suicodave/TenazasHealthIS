(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"aY+K":function(t,e,i){"use strict";i.d(e,"a",function(){return u});var o=i("d1mw"),n=i("fXoL"),s=i("I/3d"),a=i("UbJi"),r=i("3Pt+"),c=i("0IaG"),l=i("bTqV");const b=["*"];let u=(()=>{class t{constructor(t,e,i,o,n,s){this.displayName=t,this.collectionName=e,this.firestore=i,this.auth=o,this.formBuilder=n,this.dialogRef=s,this.form=this.formBuilder.group({}),this.isSaving=!1,this.collectionRef=this.firestore.collection(this.collectionName)}ngOnInit(){this.getCurrentUser()}getCurrentUser(){this.auth.currentUser.then(t=>{this.userId=null==t?void 0:t.email})}save(){const t=this.form.value;this.form.valid&&(t.createdBy=this.userId,t.createdAt=new Date(Date.now()),this.isSaving=!0,this.collectionRef.add(t),this.isSaving=!1,this.dialogRef.close())}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(o.d),n.Pb(o.b),n.Pb(s.a),n.Pb(a.a),n.Pb(r.c),n.Pb(c.g))},t.\u0275cmp=n.Jb({type:t,selectors:[["app-form"]],inputs:{form:"form"},ngContentSelectors:b,decls:10,vars:3,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title","",1,"text-gray-600"],["align","end"],["mat-button","","type","submit",1,"rounded-lg","text-white","bg-blue-500",3,"disabled"],["mat-button","","mat-dialog-close","","type","button",1,"rounded-lg","text-gray-600"]],template:function(t,e){1&t&&(n.lc(),n.Vb(0,"form",0),n.cc("ngSubmit",function(){return e.save()}),n.Vb(1,"h2",1),n.Ac(2),n.Ub(),n.Vb(3,"mat-dialog-content"),n.kc(4),n.Ub(),n.Vb(5,"mat-dialog-actions",2),n.Vb(6,"button",3),n.Ac(7," Save "),n.Ub(),n.Vb(8,"button",4),n.Ac(9," Cancel "),n.Ub(),n.Ub(),n.Ub()),2&t&&(n.mc("formGroup",e.form),n.Eb(2),n.Cc("New ",e.displayName,""),n.Eb(4),n.mc("disabled",e.isSaving))},directives:[r.p,r.j,r.e,c.h,c.e,c.c,l.b,c.d],encapsulation:2}),t})()}}]);