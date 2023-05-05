(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eaa3568c"],{"01ec":function(t,e,s){"use strict";s("5299")},3834:function(t,e,s){},"446b":function(t){t.exports=JSON.parse('[{"id":"091","date":"2018.09","cate":"project","name":"Zoé Coffee Mobile App Design","cover":"img/works/091/cover.jpg","tags":["Product Design","UI/UX Design","User Research"],"desc":"","path":"/zoe","isComingSoon":false,"isFeatured":true,"isWorks":false},{"id":"090","date":"2018.09","cate":"project","name":"HelloChat App Redesign","cover":"img/works/090/cover.jpg","tags":["Product Design","UI/UX Design","User Research","Redesign"],"desc":"","path":"/hellochat","isComingSoon":false,"isFeatured":true,"isWorks":false},{"id":"087","date":"2018.09","cate":"project","name":"HelloPass App Design","cover":"img/works/087/cover.jpg","tags":["Product Design","UI/UX Design","Coding"],"desc":"","path":"/hellopass","isComingSoon":false,"isFeatured":true,"isWorks":false},{"id":"088","date":"2018.09","cate":"concept","name":"Miniwiki - Concept Challenge Design","cover":"img/works/088/cover.jpg","tags":["Concept","UI/UX Design"],"desc":"","path":"/miniwiki","isComingSoon":false,"isFeatured":false,"isWorks":true},{"id":"089","date":"2018.09","cate":"project","name":"Julian Portfolio Website Rebuild","cover":"img/works/089/cover.jpg","tags":["Web Design","UI/UX Design","Develop","Coding"],"desc":"","path":"","isComingSoon":true,"isFeatured":false,"isWorks":true},{"id":"087","date":"2018.09","cate":"concept","name":"Circle - Concept Design","cover":"img/works/086/cover.jpg","tags":["Concept","Product Design","UI/UX Design"],"desc":"","path":"","isComingSoon":true,"isFeatured":false,"isWorks":true}]')},"4b1a":function(t,e,s){"use strict";s("c882")},5299:function(t,e,s){},6241:function(t,e,s){"use strict";s("3834")},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home hero-bg animate__animated animate__fadeIn animate__slow"},[s("section",{staticClass:"hero is-medium"},[s("div",{staticClass:"hero-head"},[s("div",{staticClass:"container is-max-widescreen"},[s("Navbar")],1)]),s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container is-max-widescreen"},[s("div",{staticClass:"my-6"}),s("div",{staticClass:"columns"},[t._m(0),s("div",{staticClass:"column is-one-third is-hidden-touch"},[s("video",{attrs:{width:"480",height:"480",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[s("source",{attrs:{src:"img/avatar.mp4",type:"video/mp4"}})])])])])])]),s("hr",{staticStyle:{margin:"6rem 0"}}),s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"container is-max-widescreen mt-6"},[s("p",{staticClass:"subtile is-2 has-text-weight-bold has-text-black"},[t._v(" Featured Works ")]),s("Features"),s("div",{staticClass:"buttons is-justify-content-center"},[s("a",{staticClass:"button is-link is-light",on:{click:function(e){return t.$router.push("/work")}}},[t._v("More works")])])],1)]),s("Footer")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("div",{staticClass:"content"},[s("p",{staticClass:"title is-size-1-mobile has-text-black",staticStyle:{"font-size":"4rem"}},[t._v(" Hi, I'm "),s("span",{staticClass:"accent-line"},[t._v("Julian")]),t._v(" "),s("br"),t._v(" Another passionate Full-stack designer. ")]),s("div",{staticClass:"tags are-medium personal-tags"},[s("span",{staticClass:"tag is-white has-text-grey-light"},[t._v("UI/UX Designer")]),s("span",{staticClass:"tag is-white has-text-grey-light"},[t._v("/")]),s("span",{staticClass:"tag is-white has-text-grey-light"},[t._v("Product Designer")]),s("span",{staticClass:"tag is-white has-text-grey-light"},[t._v("/")]),s("span",{staticClass:"tag is-white has-text-grey-light"},[t._v("Problem Solver")]),s("span",{staticClass:"tag is-white has-text-grey-light"},[t._v("/")]),s("span",{staticClass:"tag is-white has-text-grey-light"},[t._v("CSS Lover")]),s("span",{staticClass:"tag is-white has-text-grey-light"},[t._v("/")]),s("span",{staticClass:"tag is-white has-text-grey-light"},[t._v("Coffee Lover")])]),s("div",{staticClass:"mt-6 contact-me is-size-6 has-text-weight-bold"},[s("a",{attrs:{href:"mailto:julianatwork365@gmail.com"}},[t._v("Contact me ➔")])])])])}],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"features"},t._l(t.featureList,(function(e,a){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.isFeatured,expression:"items.isFeatured"}],key:a,staticClass:"columns my-6 animate__animated animate__fadeInUp animate__slow",on:{click:function(s){return t.handleViewWork(e.path)}}},[s("div",{staticClass:"column is-one-quarter"},[s("section",{staticClass:"section p-0"},[s("p",{staticClass:"heading"},[t._v("Featured")]),s("p",{staticClass:"subtitle is-size-4 has-text-weight-bold has-text-black"},[t._v(" "+t._s(e.name)+" ")]),s("hr",{attrs:{width:"50px"}}),s("div",{staticClass:"tags"},t._l(e.tags,(function(e){return s("span",{key:e,staticClass:"tag is-light"},[t._v(t._s(e))])})),0)])]),s("div",{staticClass:"column is-three-quarters"},[s("figure",{staticClass:"image"},[s("img",{staticClass:"img-radius-10 img-border",attrs:{src:e.cover}})])])])})),0)},r=[],c=s("446b"),o={name:"features",props:{msg:String},data:function(){return{featureList:c}},methods:{handleViewWork:function(t){this.$router.push(t)}}},l=o,u=s("0c7c"),d=Object(u["a"])(l,n,r,!1,null,"4811eea3",null),g=d.exports,v=s("d178"),h=s("fd2d"),m={name:"Home",components:{Features:g,Navbar:v["a"],Footer:h["a"]},mounted:function(){this.track()},methods:{track:function(){this.$gtag.pageview("/"),this.$gtag.query("event","screen_view",{app_name:"juliandesign.io",screen_name:"Home"})}}},p=m,f=(s("01ec"),Object(u["a"])(p,a,i,!1,null,"0bad7bf6",null));e["default"]=f.exports},c882:function(t,e,s){},d178:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar main-nav is-transparent py-6",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item",on:{click:function(e){return t.handleViewPage("/")}}},[s("img",{attrs:{src:"img/logo.svg",alt:"Logo"}})]),s("a",{staticClass:"navbar-burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){return t.toggleMobileMenu()}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[s("div",{staticClass:"navbar-end"},[s("a",{staticClass:"navbar-item",on:{click:function(e){return t.handleViewPage("/")}}},[t._v("features")]),s("a",{staticClass:"navbar-item",on:{click:function(e){return t.handleViewPage("work")}}},[t._v("other works")]),s("a",{staticClass:"navbar-item",on:{click:function(e){return t.handleViewPage("/about")}}},[t._v("about")]),s("a",{staticClass:"navbar-item",on:{click:function(e){return t.handleViewPage("/skill")}}},[t._v("skill")])])])])},i=[],n={name:"navbar",props:{msg:String},data:function(){return{isActive:!1}},methods:{toggleMobileMenu:function(){this.isActive=!this.isActive},handleViewPage:function(t){this.$router.push(t)}}},r=n,c=(s("4b1a"),s("0c7c")),o=Object(c["a"])(r,a,i,!1,null,"52660768",null);e["a"]=o.exports},fd2d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer has-background-trans mt-6"},[s("div",{staticClass:"content has-text-centered"},[s("p",{staticClass:"subtitle is-6"},[t._v(" Designed and coded with ☕ & "),s("span",{staticClass:"has-text-danger"},[t._v("❤")]),t._v(" by Julian. All Rights Reserved. ")])])])}],n={name:"footer"},r=n,c=(s("6241"),s("0c7c")),o=Object(c["a"])(r,a,i,!1,null,"7b9ba5ac",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-eaa3568c.b34ef209.js.map