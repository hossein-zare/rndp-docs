"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[8816],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=d(a),u=r,m=h["".concat(i,".").concat(u)]||h[u]||p[u]||l;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8417:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return h}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],c={id:"search",title:"Search"},i=void 0,d={unversionedId:"advanced/search",id:"version-5.0/advanced/search",title:"Search",description:"Props",source:"@site/versioned_docs/version-5.0/advanced/search.md",sourceDirName:"advanced",slug:"/advanced/search",permalink:"/docs/5.0/advanced/search",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/versioned_docs/version-5.0/advanced/search.md",tags:[],version:"5.0",frontMatter:{id:"search",title:"Search"},sidebar:"version-5.0/someSidebar",previous:{title:"Loading",permalink:"/docs/5.0/advanced/loading"},next:{title:"Category",permalink:"/docs/5.0/advanced/category"}},s=[{value:"Props",id:"props",children:[{value:"<code>searchable</code>",id:"searchable",children:[],level:3},{value:"<code>searchTextInputProps</code>",id:"searchtextinputprops",children:[],level:3},{value:"<code>disableLocalSearch</code>",id:"disablelocalsearch",children:[],level:3},{value:"<code>addCustomItem</code>",id:"addcustomitem",children:[],level:3}],level:2},{value:"Placeholder Text",id:"placeholder-text",children:[{value:"<code>searchPlaceholder</code>",id:"searchplaceholder",children:[],level:3},{value:"<code>translation</code>",id:"translation",children:[],level:3}],level:2},{value:"Callbacks",id:"callbacks",children:[{value:"<code>onChangeSearchText</code>",id:"onchangesearchtext",children:[],level:3}],level:2},{value:"Styling",id:"styling",children:[{value:"<code>searchContainerStyle</code>",id:"searchcontainerstyle",children:[],level:3},{value:"<code>searchTextInputStyle</code>",id:"searchtextinputstyle",children:[],level:3},{value:"<code>searchPlaceholderTextColor</code>",id:"searchplaceholdertextcolor",children:[],level:3},{value:"<code>customItemContainerStyle</code>",id:"customitemcontainerstyle",children:[],level:3},{value:"<code>customItemLabelStyle</code>",id:"customitemlabelstyle",children:[],level:3}],level:2}],p={toc:s};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"searchable"},(0,l.kt)("inlineCode",{parentName:"h3"},"searchable")),(0,l.kt)("p",null,"Enables the search feature in the drop-down menu / modal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"searchable={true}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"searchtextinputprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"searchTextInputProps")),(0,l.kt)("p",null,"Adds native props for the text input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"searchTextInputProps={{\n  maxLength: 25\n}}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/textinput#props"},"TextInputProps"))))),(0,l.kt)("h3",{id:"disablelocalsearch"},(0,l.kt)("inlineCode",{parentName:"h3"},"disableLocalSearch")),(0,l.kt)("p",null,"Disables search between local items. This comes in handy for remote search."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"disableLocalSearch={true}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"See: ",(0,l.kt)("a",{parentName:"strong",href:"#onchangesearchtext"},(0,l.kt)("inlineCode",{parentName:"a"},"onChangeSearchText"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"addcustomitem"},(0,l.kt)("inlineCode",{parentName:"h3"},"addCustomItem")),(0,l.kt)("p",null,"Shows the searched text as an item when there's nothing to show."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"addCustomItem={true}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"placeholder-text"},"Placeholder Text"),(0,l.kt)("p",null,"Changes the placeholder text of the text input. Both of the following properties are available."),(0,l.kt)("h3",{id:"searchplaceholder"},(0,l.kt)("inlineCode",{parentName:"h3"},"searchPlaceholder")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'searchPlaceholder="Search..."\n')),(0,l.kt)("h3",{id:"translation"},(0,l.kt)("inlineCode",{parentName:"h3"},"translation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'translation={{\n  SEARCH_PLACEHOLDER: "Search..."\n}}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"See: ",(0,l.kt)("a",{parentName:"strong",href:"localization"},"Localization")))),(0,l.kt)("h2",{id:"callbacks"},"Callbacks"),(0,l.kt)("h3",{id:"onchangesearchtext"},(0,l.kt)("inlineCode",{parentName:"h3"},"onChangeSearchText")),(0,l.kt)("p",null,"Callback that is called when the text changes in the text input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'loading={loading}\ndisableLocalSearch={true} // required for remote search\nonChangeSearchText={(text) => {\n  // Show the loading animation\n  setLoading(true);\n\n  // Get items from API\n  API.get("/items/search", {\n    text\n  })\n    .then((items) => {\n      setItems(items);\n    })\n    .catch((err) => {\n      //\n    })\n    .finally(() => {\n      // Hide the loading animation\n      setLoading(false);\n    });\n}}\n')),(0,l.kt)("h2",{id:"styling"},"Styling"),(0,l.kt)("h3",{id:"searchcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"searchContainerStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'searchContainerStyle={{\n  borderBottomColor: "#dfdfdf"\n}}\n')),(0,l.kt)("h3",{id:"searchtextinputstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"searchTextInputStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'searchTextInputStyle={{\n  color: "#000"\n}}\n')),(0,l.kt)("h3",{id:"searchplaceholdertextcolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"searchPlaceholderTextColor")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'searchPlaceholderTextColor="grey"\n')),(0,l.kt)("h3",{id:"customitemcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"customItemContainerStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'customItemContainerStyle={{\n  backgroundColor: "#dfdfdf"\n}}\n')),(0,l.kt)("h3",{id:"customitemlabelstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"customItemLabelStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'customItemLabelStyle={{\n  fontStyle: "italic"\n}}\n')))}h.isMDXComponent=!0}}]);