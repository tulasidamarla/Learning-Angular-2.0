System.register(["angular2/core","./contacts/contact-list.component","./about/about.component","./contacts/newcontact.component","angular2/router"],function(t){var e,n,o,c,a,r,p=this&&this.__decorate||function(t,e,n,o){var c,a=arguments.length,r=3>a?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(c=t[p])&&(r=(3>a?c(r):a>3?c(e,n,r):c(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},u=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){n=t},function(t){o=t},function(t){c=t},function(t){a=t}],execute:function(){r=function(){function t(){}return t=p([e.Component({selector:"app"}),e.View({templateUrl:"../dev/app.component.html",directives:[a.ROUTER_DIRECTIVES]}),a.RouteConfig([{path:"/",component:n.ContactListComponent,name:"Contacts",useAsDefault:!0},{path:"/new",component:c.NewContactComponent,name:"Newcontact"},{path:"/about/:contactid",component:o.AboutComponent,name:"About"}]),u("design:paramtypes",[])],t)}(),t("AppComponent",r)}}});