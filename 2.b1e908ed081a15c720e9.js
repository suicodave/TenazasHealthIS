(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"96Pz":function(t,r,e){"use strict";e.d(r,"a",function(){return s});var n=e("d1mw"),i=e("fXoL"),o=e("0IaG");let s=(()=>{class t{constructor(t,r,e){this.componentName=t,this.dialog=r,this.containerRef=e}openForm(){this.dialog.open(this.componentName,{viewContainerRef:this.containerRef,minWidth:"398px"})}}return t.\u0275fac=function(r){return new(r||t)(i.Pb(n.c),i.Pb(o.b),i.Pb(i.S))},t.\u0275dir=i.Kb({type:t,selectors:[["","appFormCreateTrigger",""]],hostBindings:function(t,r){1&t&&i.cc("click",function(t){return r.openForm(t)})}}),t})()},"9AGB":function(t,r,e){"use strict";var n=e("yoF8");function i(t){return 0===t.length?n.identity:1===t.length?t[0]:function(r){return t.reduce(function(t,r){return r(t)},r)}}r.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return i(t)},r.pipeFromArray=i},FWf1:function(t,r,e){"use strict";var n=this&&this.__extends||function(){var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(r,e)};return function(r,e){function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),i=e("pshJ"),o=e("GiSu"),s=e("zB/H"),c=e("p//D"),u=e("n3uD"),a=e("MkmW"),b=function(t){function r(e,n,i){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=o.empty;break;case 1:if(!e){s.destination=o.empty;break}if("object"==typeof e){e instanceof r?(s.syncErrorThrowable=e.syncErrorThrowable,s.destination=e,e.add(s)):(s.syncErrorThrowable=!0,s.destination=new l(s,e));break}default:s.syncErrorThrowable=!0,s.destination=new l(s,e,n,i)}return s}return n(r,t),r.prototype[c.rxSubscriber]=function(){return this},r.create=function(t,e,n){var i=new r(t,e,n);return i.syncErrorThrowable=!1,i},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(s.Subscription);r.Subscriber=b;var l=function(t){function r(r,e,n,s){var c,u=t.call(this)||this;u._parentSubscriber=r;var a=u;return i.isFunction(e)?c=e:e&&(c=e.next,n=e.error,s=e.complete,e!==o.empty&&(a=Object.create(e),i.isFunction(a.unsubscribe)&&u.add(a.unsubscribe.bind(a)),a.unsubscribe=u.unsubscribe.bind(u))),u._context=a,u._next=c,u._error=n,u._complete=s,u}return n(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;u.config.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,e=u.config.useDeprecatedSynchronousErrorHandling;if(this._error)e&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)e?(r.syncErrorValue=t,r.syncErrorThrown=!0):a.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),e)throw t;a.hostReportError(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var e=function(){return t._complete.call(t._context)};u.config.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(e){if(this.unsubscribe(),u.config.useDeprecatedSynchronousErrorHandling)throw e;a.hostReportError(e)}},r.prototype.__tryOrSetError=function(t,r,e){if(!u.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,e)}catch(n){return u.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=n,t.syncErrorThrown=!0,!0):(a.hostReportError(n),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(b);r.SafeSubscriber=l},GMZp:function(t,r,e){"use strict";r.isObject=function(t){return null!==t&&"object"==typeof t}},GiSu:function(t,r,e){"use strict";var n=e("n3uD"),i=e("MkmW");r.empty={closed:!0,next:function(t){},error:function(t){if(n.config.useDeprecatedSynchronousErrorHandling)throw t;i.hostReportError(t)},complete:function(){}}},HUga:function(t,r,e){"use strict";e.d(r,"a",function(){return c});var n=e("hctd"),i=e("ofXK"),o=e("3Pt+"),s=e("fXoL");let c=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({imports:[[i.c,n.a,o.m],n.a]}),t})()},LBXl:function(t,r,e){"use strict";r.UnsubscriptionError=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,r){return r+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}()},MkmW:function(t,r,e){"use strict";r.hostReportError=function(t){setTimeout(function(){throw t},0)}},Q1FS:function(t,r,e){"use strict";var n=e("yx2s"),i=e("Xwq/"),o=e("zfKp"),s=e("9AGB"),c=e("n3uD");function u(t){if(t||(t=c.config.Promise||Promise),!t)throw new Error("no Promise impl found");return t}r.Observable=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var n=this.operator,o=i.toSubscriber(t,r,e);if(o.add(n?n.call(o,this.source):this.source||c.config.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),c.config.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){c.config.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),n.canReportError(t)?t.error(r):console.warn(r)}},t.prototype.forEach=function(t,r){var e=this;return new(r=u(r))(function(r,n){var i;i=e.subscribe(function(r){try{t(r)}catch(e){n(e),i&&i.unsubscribe()}},n,r)})},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[o.observable]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:s.pipeFromArray(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=u(t))(function(t,e){var n;r.subscribe(function(t){return n=t},function(t){return e(t)},function(){return t(n)})})},t.create=function(r){return new t(r)},t}()},TO6b:function(t,r,e){"use strict";e.d(r,"a",function(){return a});var n=e("d1mw"),i=e("0IaG"),o=e("fXoL"),s=e("I/3d"),c=e("bTqV");let u=(()=>{class t{constructor(t,r,e,n,i){this.id=t,this.collectionName=r,this.displayName=e,this.dialogRef=n,this.fireStore=i,this.isDeleting=!1,this.collection=this.fireStore.collection(this.collectionName)}ngOnInit(){}delete(){this.isDeleting=!0,this.collection.doc(this.id).delete(),this.isDeleting=!1,this.dialogRef.close()}}return t.\u0275fac=function(r){return new(r||t)(o.Pb(i.a),o.Pb(n.b),o.Pb(n.d),o.Pb(i.g),o.Pb(s.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-delete-dialog"]],decls:9,vars:3,consts:[[1,"text-xl","text-gray-600","mb-4"],["align","end"],["mat-button","","type","button",1,"rounded-lg","text-white","bg-blue-500",3,"disabled","click"],["mat-button","","mat-dialog-close","","type","button",1,"rounded-lg","text-gray-600"]],template:function(t,r){1&t&&(o.Vb(0,"p",0),o.Ac(1),o.Ub(),o.Vb(2,"mat-dialog-content"),o.Ac(3),o.Ub(),o.Vb(4,"mat-dialog-actions",1),o.Vb(5,"button",2),o.cc("click",function(){return r.delete()}),o.Ac(6," Yes "),o.Ub(),o.Vb(7,"button",3),o.Ac(8," No "),o.Ub(),o.Ub()),2&t&&(o.Eb(1),o.Bc(r.displayName),o.Eb(2),o.Cc(' Are you sure you want to delete "',r.id,'"? '),o.Eb(2),o.mc("disabled",r.isDeleting))},directives:[i.e,i.c,c.b,i.d],encapsulation:2}),t})(),a=(()=>{class t{constructor(t,r){this.dialog=t,this.containerRef=r,this.id=null}openDeleteDialog(){this.dialog.open(u,{viewContainerRef:this.containerRef,data:this.id,minWidth:"356px"})}}return t.\u0275fac=function(r){return new(r||t)(o.Pb(i.b),o.Pb(o.S))},t.\u0275dir=o.Kb({type:t,selectors:[["","appDeleteTrigger",""]],hostBindings:function(t,r){1&t&&o.cc("click",function(t){return r.openDeleteDialog(t)})},inputs:{id:"id"}}),t})()},"Xwq/":function(t,r,e){"use strict";var n=e("FWf1"),i=e("p//D"),o=e("GiSu");r.toSubscriber=function(t,r,e){if(t){if(t instanceof n.Subscriber)return t;if(t[i.rxSubscriber])return t[i.rxSubscriber]()}return t||r||e?new n.Subscriber(t,r,e):new n.Subscriber(o.empty)}},d1mw:function(t,r,e){"use strict";e.d(r,"b",function(){return i}),e.d(r,"d",function(){return o}),e.d(r,"a",function(){return s}),e.d(r,"c",function(){return c});var n=e("fXoL");const i=new n.s("collectionName"),o=new n.s("deleteHeader"),s=new n.s("collectionDisplayName"),c=new n.s("dialogComponent")},eJWM:function(t,r,e){"use strict";e.d(r,"b",function(){return n}),e.d(r,"c",function(){return i}),e.d(r,"a",function(){return o}),e.d(r,"d",function(){return s});const n="EngagementTypes",i="Patients",o="Engagements",s="Users"},mbIT:function(t,r,e){"use strict";r.isArray=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}()},n3uD:function(t,r,e){"use strict";var n=!1;r.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var r=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+r.stack)}else n&&console.log("RxJS: Back to a better error behavior. Thank you. <3");n=t},get useDeprecatedSynchronousErrorHandling(){return n}}},"p//D":function(t,r,e){"use strict";r.rxSubscriber=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),r.$$rxSubscriber=r.rxSubscriber},pshJ:function(t,r,e){"use strict";r.isFunction=function(t){return"function"==typeof t}},uEYW:function(t,r,e){"use strict";e.d(r,"a",function(){return m});var n=e("Q1FS"),i=e("d1mw"),o=e("+0xr"),s=e("M9IT"),c=e("quSY"),u=e("fXoL"),a=e("I/3d"),b=e("Wp6s"),l=e("bTqV"),f=e("96Pz");function p(t,r){1&t&&u.Qb(0,"tr",11)}function h(t,r){1&t&&u.Qb(0,"tr",12)}const d=function(){return[10,25,100]},y=["*"];let m=(()=>{class t{constructor(t,r,e,i){this.firestore=t,this.collectionName=r,this.displayName=e,this.domainName=i,this.columns=[],this.orderByField="createdAt",this.orderByDirection="desc",this.sort=null,this.subscription=new c.a,this.items=new n.Observable}ngAfterViewInit(){}ngAfterContentInit(){this.columnDefs.forEach(t=>this.table.addColumnDef(t))}ngOnInit(){this.loadData()}ngOnDestroy(){this.subscription.unsubscribe()}loadData(){this.items=this.firestore.collection(this.collectionName,t=>t.orderBy(this.orderByField,this.orderByDirection)).valueChanges({idField:"id"}),this.subscription=this.items.subscribe(t=>{this.datasource=new o.k(t),this.datasource.paginator=this.paginator,this.datasource.sort=this.sort})}}return t.\u0275fac=function(r){return new(r||t)(u.Pb(a.a),u.Pb(i.b),u.Pb(i.a),u.Pb(i.d))},t.\u0275cmp=u.Jb({type:t,selectors:[["app-table"]],contentQueries:function(t,r,e){if(1&t&&u.Ib(e,o.c,0),2&t){let t;u.qc(t=u.dc())&&(r.columnDefs=t)}},viewQuery:function(t,r){if(1&t&&(u.Fc(o.j,3),u.Fc(s.a,3)),2&t){let t;u.qc(t=u.dc())&&(r.table=t.first),u.qc(t=u.dc())&&(r.paginator=t.first)}},inputs:{columns:"columns",orderByField:"orderByField",orderByDirection:"orderByDirection",sort:"sort"},ngContentSelectors:y,decls:14,vars:10,consts:[[1,"p-0","rounded-xl"],[1,"rounded-t-xl","mat-elevation-z0"],[1,"flex","justify-between","items-center"],[1,"text-gray-600","text-lg"],[1,"controls"],["mat-button","","appFormCreateTrigger","",1,"bg-blue-500","rounded-lg","text-white"],[1,"max-h-96","overflow-y-auto"],["mat-table","",1,"rounded-none","mat-elevation-z0","w-full",3,"dataSource"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page",1,"rounded-b-xl",3,"length","pageSize","pageSizeOptions"],["mat-header-row",""],["mat-row",""]],template:function(t,r){1&t&&(u.lc(),u.Vb(0,"mat-card",0),u.Vb(1,"mat-card",1),u.Vb(2,"div",2),u.Vb(3,"div",3),u.Ac(4),u.Ub(),u.Vb(5,"div",4),u.Vb(6,"button",5),u.Ac(7),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(8,"div",6),u.Vb(9,"table",7),u.kc(10),u.zc(11,p,1,0,"tr",8),u.zc(12,h,1,0,"tr",9),u.Ub(),u.Ub(),u.Qb(13,"mat-paginator",10),u.Ub()),2&t&&(u.Eb(4),u.Bc(r.displayName),u.Eb(3),u.Cc(" Add ",r.domainName," "),u.Eb(2),u.mc("dataSource",r.datasource),u.Eb(2),u.mc("matHeaderRowDef",r.columns)("matHeaderRowDefSticky",!0),u.Eb(1),u.mc("matRowDefColumns",r.columns),u.Eb(1),u.mc("length",100)("pageSize",10)("pageSizeOptions",u.nc(9,d)))},directives:[b.a,l.b,f.a,o.j,o.g,o.i,s.a,o.f,o.h],styles:[""]}),t})()},yoF8:function(t,r,e){"use strict";r.identity=function(t){return t}},yx2s:function(t,r,e){"use strict";var n=e("FWf1");r.canReportError=function(t){for(;t;){var r=t.destination;if(t.closed||t.isStopped)return!1;t=r&&r instanceof n.Subscriber?r:null}return!0}},"zB/H":function(t,r,e){"use strict";var n=e("mbIT"),i=e("GMZp"),o=e("pshJ"),s=e("LBXl");function c(t){return t.reduce(function(t,r){return t.concat(r instanceof s.UnsubscriptionError?r.errors:r)},[])}r.Subscription=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var r;return t.prototype.unsubscribe=function(){var r;if(!this.closed){var e=this,u=e._parentOrParents,a=e._ctorUnsubscribe,b=e._unsubscribe,l=e._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,u instanceof t)u.remove(this);else if(null!==u)for(var f=0;f<u.length;++f)u[f].remove(this);if(o.isFunction(b)){a&&(this._unsubscribe=void 0);try{b.call(this)}catch(d){r=d instanceof s.UnsubscriptionError?c(d.errors):[d]}}if(n.isArray(l)){f=-1;for(var p=l.length;++f<p;){var h=l[f];if(i.isObject(h))try{h.unsubscribe()}catch(d){r=r||[],d instanceof s.UnsubscriptionError?r=r.concat(c(d.errors)):r.push(d)}}}if(r)throw new s.UnsubscriptionError(r)}},t.prototype.add=function(r){var e=r;if(!r)return t.EMPTY;switch(typeof r){case"function":e=new t(r);case"object":if(e===this||e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if(!(e instanceof t)){var n=e;(e=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var i=e._parentOrParents;if(null===i)e._parentOrParents=this;else if(i instanceof t){if(i===this)return e;e._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return e;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[e]:o.push(e),e},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}},t.EMPTY=((r=new t).closed=!0,r),t}()},zfKp:function(t,r,e){"use strict";r.observable=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()}}]);