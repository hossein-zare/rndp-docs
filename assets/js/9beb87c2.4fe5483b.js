"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[80],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1016:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"changelog",title:"Changelog"},p=void 0,c={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"Features",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/react-native-dropdown-picker-website/docs/next/changelog",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/changelog.md",tags:[],version:"current",frontMatter:{id:"changelog",title:"Changelog"},sidebar:"someSidebar",next:{title:"Installation",permalink:"/react-native-dropdown-picker-website/docs/next/"}},d=[{value:"Features",id:"features",children:[],level:2},{value:"Improvements and bugfixes",id:"improvements-and-bugfixes",children:[],level:2}],u={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added Indonesian translation. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hossein-zare/react-native-dropdown-picker/pull/500"},"#500")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ddikodroid"},"@ddikodroid"),")"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"badgeProps")," prop. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hossein-zare/react-native-dropdown-picker/pull/503"},"#503")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/TommysG"},"@TommysG"),")"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"onDirectionChanged")," prop."),(0,i.kt)("li",{parentName:"ul"},"Added Italian translation. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hossein-zare/react-native-dropdown-picker/pull/524"},"#524")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Angelk90"},"@Angelk90"),")"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"hideSelectedItemIcon")," prop."),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"extendableBadgeContainer")," prop.")),(0,i.kt)("h2",{id:"improvements-and-bugfixes"},"Improvements and bugfixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add renderListItem onPress params. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hossein-zare/react-native-dropdown-picker/pull/513"},"#513")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mangjuned"},"@mangjuned"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: set dropdown as generic. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hossein-zare/react-native-dropdown-picker/pull/517"},"#517")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mlecoq"},"@mlecoq")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikehardy"},"@mikehardy"),")"),(0,i.kt)("li",{parentName:"ul"},"Updated setState types. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hossein-zare/react-native-dropdown-picker/pull/533"},"#533")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JDMathew"},"@JDMathew"),")")))}s.isMDXComponent=!0}}]);