"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[9483],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),d=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=d(n),m=r,y=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(y,o(o({ref:e},p),{},{components:n})):a.createElement(y,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},562:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"loading",title:"Loading"},c=void 0,d={unversionedId:"advanced/loading",id:"advanced/loading",title:"Loading",description:"Props",source:"@site/docs/advanced/loading.md",sourceDirName:"advanced",slug:"/advanced/loading",permalink:"/docs/next/advanced/loading",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/advanced/loading.md",tags:[],version:"current",frontMatter:{id:"loading",title:"Loading"},sidebar:"someSidebar",previous:{title:"Icons",permalink:"/docs/next/advanced/icons"},next:{title:"Search",permalink:"/docs/next/advanced/search"}},p=[{value:"Props",id:"props",children:[{value:"<code>loading</code>",id:"loading",children:[],level:3},{value:"<code>ActivityIndicatorComponent</code>",id:"activityindicatorcomponent",children:[],level:3},{value:"<code>activityIndicatorColor</code>",id:"activityindicatorcolor",children:[],level:3},{value:"<code>activityIndicatorSize</code>",id:"activityindicatorsize",children:[],level:3}],level:2}],u={toc:p};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"loading"},(0,i.kt)("inlineCode",{parentName:"h3"},"loading")),(0,i.kt)("p",null,"Displays an ActivityIndicator when the items aren't loaded yet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const [loading, setLoading] = useState(false);\n\n<DropDownPicker\n  loading={loading}\n  ...\n/>\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h3",{id:"activityindicatorcomponent"},(0,i.kt)("inlineCode",{parentName:"h3"},"ActivityIndicatorComponent")),(0,i.kt)("p",null,"Customizes the ActivityIndicator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"ActivityIndicatorComponent={({color, size}) => (\n  <ActivityIndicator color={color} size={size} />\n)}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"function")))),(0,i.kt)("h3",{id:"activityindicatorcolor"},(0,i.kt)("inlineCode",{parentName:"h3"},"activityIndicatorColor")),(0,i.kt)("p",null,"Changes the default color of the ActivityIndicator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'activityIndicatorColor="red"\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"grey")))),(0,i.kt)("h3",{id:"activityindicatorsize"},(0,i.kt)("inlineCode",{parentName:"h3"},"activityIndicatorSize")),(0,i.kt)("p",null,"Changes the default size of the ActivityIndicator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"activityIndicatorSize={30}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"30")))))}s.isMDXComponent=!0}}]);