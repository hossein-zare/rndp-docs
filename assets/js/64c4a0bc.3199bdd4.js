"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[8497],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"rules",title:"Rules"},p=void 0,s={unversionedId:"rules",id:"version-5.3/rules",title:"Rules",description:"Only one at a time",source:"@site/versioned_docs/version-5.3/rules.md",sourceDirName:".",slug:"/rules",permalink:"/react-native-dropdown-picker-website/docs/5.3/rules",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/versioned_docs/version-5.3/rules.md",tags:[],version:"5.3",frontMatter:{id:"rules",title:"Rules"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/react-native-dropdown-picker-website/docs/5.3/"},next:{title:"Usage",permalink:"/react-native-dropdown-picker-website/docs/5.3/usage"}},u=[{value:"Only one at a time",id:"only-one-at-a-time",children:[],level:3},{value:"Keep item values unique",id:"keep-item-values-unique",children:[],level:3},{value:"Avoid inappropriate styles",id:"avoid-inappropriate-styles",children:[],level:3},{value:"Avoid hard-coded values",id:"avoid-hard-coded-values",children:[],level:3}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"only-one-at-a-time"},"Only one at a time"),(0,i.kt)("p",null,"If there are several components in a row, it may cause them to overlap. To prevent this from happening, only one picker should be open at a time.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"See: ",(0,i.kt)("a",{parentName:"strong",href:"tutorials/close-other-pickers"},"Close other pickers")))),(0,i.kt)("h3",{id:"keep-item-values-unique"},"Keep item values unique"),(0,i.kt)("p",null,"The values of your items are considered unique, if not so, only the first item with the value will be selected not the one you select."),(0,i.kt)("h3",{id:"avoid-inappropriate-styles"},"Avoid inappropriate styles"),(0,i.kt)("p",null,"The drop-down menu is not compatible with styles such as ",(0,i.kt)("inlineCode",{parentName:"p"},"borderColor")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"backgroundColor")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"containerStyle")," property which make the items untouchable, unless you're on the ",(0,i.kt)("inlineCode",{parentName:"p"},"MODAL")," list mode.",(0,i.kt)("br",{parentName:"p"}),"\n","If you've wrapped the picker with a ",(0,i.kt)("inlineCode",{parentName:"p"},"View"),", you should avoid the styles mentioned above."),(0,i.kt)("h3",{id:"avoid-hard-coded-values"},"Avoid hard-coded values"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," properties must be state variables otherwise the component won't work as expected."))}d.isMDXComponent=!0}}]);