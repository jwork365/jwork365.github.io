(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1feb7669"],{3834:function(s,t,e){},"3df5":function(s,t,e){},4233:function(s,t,e){"use strict";e("c8b0")},"446b":function(s){s.exports=JSON.parse('[{"id":"091","date":"2018.09","cate":"project","name":"Zoé Coffee Mobile App Design","cover":"img/works/091/cover.jpg","tags":["Product Design","UI/UX Design","User Research"],"desc":"","path":"/zoe","isComingSoon":false,"isFeatured":true,"isWorks":false},{"id":"090","date":"2018.09","cate":"project","name":"HelloChat App Redesign","cover":"img/works/090/cover.jpg","tags":["Product Design","UI/UX Design","User Research","Redesign"],"desc":"","path":"/hellochat","isComingSoon":false,"isFeatured":true,"isWorks":false},{"id":"087","date":"2018.09","cate":"project","name":"HelloPass App Design","cover":"img/works/087/cover.jpg","tags":["Product Design","UI/UX Design","Coding"],"desc":"","path":"/hellopass","isComingSoon":false,"isFeatured":true,"isWorks":false},{"id":"088","date":"2018.09","cate":"concept","name":"Miniwiki - Concept Challenge Design","cover":"img/works/088/cover.jpg","tags":["Concept","UI/UX Design"],"desc":"","path":"/miniwiki","isComingSoon":false,"isFeatured":false,"isWorks":true},{"id":"089","date":"2018.09","cate":"project","name":"Julian Portfolio Website Rebuild","cover":"img/works/089/cover.jpg","tags":["Web Design","UI/UX Design","Develop","Coding"],"desc":"","path":"","isComingSoon":true,"isFeatured":false,"isWorks":true},{"id":"087","date":"2018.09","cate":"concept","name":"Circle - Concept Design","cover":"img/works/086/cover.jpg","tags":["Concept","Product Design","UI/UX Design"],"desc":"","path":"","isComingSoon":true,"isFeatured":false,"isWorks":true}]')},6241:function(s,t,e){"use strict";e("3834")},acd4:function(s,t,e){"use strict";e("3df5")},c8b0:function(s,t,e){},d178:function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("nav",{staticClass:"navbar main-nav is-transparent py-6",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"},[s._m(0),e("div",{staticClass:"is-hidden-touch navbar-item tag is-light is-link"},[s._v("Available for jobs")]),e("a",{staticClass:"navbar-burger",class:{"is-active":s.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(t){return s.toggleMobileMenu()}}},[e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"navbar-menu",class:{"is-active":s.isActive}},[s._m(1)])])},i=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e("img",{attrs:{src:"img/logo.svg",alt:"Logo"}})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"navbar-end"},[e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[s._v("features")]),e("a",{staticClass:"navbar-item",attrs:{href:"/work"}},[s._v("other works")]),e("a",{staticClass:"navbar-item",attrs:{href:"/about"}},[s._v("about")]),e("a",{staticClass:"navbar-item",attrs:{href:"/skill"}},[s._v("skill")])])}],n={name:"navbar",props:{msg:String},data:function(){return{isActive:!1}},methods:{toggleMobileMenu:function(){this.isActive=!this.isActive}}},r=n,c=(e("4233"),e("0c7c")),o=Object(c["a"])(r,a,i,!1,null,"6bb53d14",null);t["a"]=o.exports},f126:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"work animate__animated animate__fadeIn animate__slow"},[e("section",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-head"},[e("div",{staticClass:"container is-max-widescreen"},[e("Navbar")],1)]),s._m(0)]),e("div",{staticClass:"container is-fluid"},[e("div",{staticClass:"container is-max-widescreen"},[e("Works")],1)]),e("Footer")],1)},i=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container is-max-widescreen"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"content"},[e("p",{staticClass:"title is-size-1-mobile has-text-black",staticStyle:{"font-size":"4rem"}},[s._v(" Other Works ")]),e("p",{staticClass:"subtitle"},[s._v("Concepts design, design exercises, and Redesign.")])])])]),e("hr",{staticClass:"is-hidden-tablet"})])])}],n=e("d178"),r=e("fd2d"),c=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"works"},[e("div",{staticClass:"columns is-multiline is-variable is-4"},s._l(s.worksList,(function(t,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isWorks,expression:"items.isWorks"}],key:a,staticClass:"column is-half animate__animated animate__fadeInUp animate__slow"},[e("div",{staticClass:"columns my-3",on:{click:function(e){return s.handleViewWork(t.path)}}},[e("div",{staticClass:"column"},[e("figure",{staticClass:"image"},[e("img",{staticClass:"img-radius-10 img-border",attrs:{src:t.cover}})]),e("section",{staticClass:"section p-0 my-3"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isComingSoon,expression:"items.isComingSoon"}],staticClass:"navbar-item tag is-light is-primary",staticStyle:{float:"right"}},[s._v("Coming Soon")]),e("p",{staticClass:"heading"},[s._v(s._s(t.cate))]),e("p",{staticClass:"is-size-4 has-text-weight-bold has-text-black"},[s._v(" "+s._s(t.name)+" ")]),e("hr",{staticClass:"my-3",attrs:{width:"50px"}}),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-10"},[e("div",{staticClass:"tags"},s._l(t.tags,(function(t){return e("span",{key:t,staticClass:"tag is-light"},[s._v(s._s(t))])})),0)])])])])])])})),0)])},o=[],l=e("446b"),d={name:"works",props:{msg:String},data:function(){return{worksList:l}},methods:{handleViewWork:function(s){this.$router.push(s)}}},u=d,v=e("0c7c"),m=Object(v["a"])(u,c,o,!1,null,"df8cb4d6",null),g=m.exports,f={name:"work",props:{msg:String},components:{Navbar:n["a"],Works:g,Footer:r["a"]}},p=f,h=(e("acd4"),Object(v["a"])(p,a,i,!1,null,"629b0ffe",null));t["default"]=h.exports},fd2d:function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},i=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("footer",{staticClass:"footer has-background-trans mt-6"},[e("div",{staticClass:"content has-text-centered"},[e("p",{staticClass:"subtitle is-6"},[s._v(" Designed and coded with ☕ & "),e("span",{staticClass:"has-text-danger"},[s._v("❤")]),s._v(" by Julian. All Rights Reserved. ")])])])}],n={name:"footer"},r=n,c=(e("6241"),e("0c7c")),o=Object(c["a"])(r,a,i,!1,null,"7b9ba5ac",null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-1feb7669.ce6c6d80.js.map