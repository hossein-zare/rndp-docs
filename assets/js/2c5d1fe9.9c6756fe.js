"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[9466],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,y=f["".concat(a,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(y,c(c({ref:n},l),{},{components:t})):r.createElement(y,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<i;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5017:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],s={id:"close-other-pickers",title:"Close other pickers"},a=void 0,p={unversionedId:"tutorials/close-other-pickers",id:"version-5.2/tutorials/close-other-pickers",title:"Close other pickers",description:"As a rule, all other pickers should be closed when another picker opens.",source:"@site/versioned_docs/version-5.2/tutorials/close-other-pickers.md",sourceDirName:"tutorials",slug:"/tutorials/close-other-pickers",permalink:"/docs/tutorials/close-other-pickers",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/versioned_docs/version-5.2/tutorials/close-other-pickers.md",tags:[],version:"5.2",frontMatter:{id:"close-other-pickers",title:"Close other pickers"},sidebar:"version-5.2/someSidebar",previous:{title:"Themes",permalink:"/docs/advanced/themes"},next:{title:"Multiple Pickers",permalink:"/docs/tutorials/multiple-pickers"}},l=[],u={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As a rule, all other pickers should be closed when another picker opens.",(0,i.kt)("br",{parentName:"p"}),"\n","In the following example, two state variables are defined for country and city pickers. When the country picker opens, the city picker closes, and the same happens inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"onOpen")," callback of the city picker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const [countryOpen, setCountryOpen] = useState(false);\n  const [cityOpen, setCityOpen] = useState(false);\n\n  const onCountryOpen = useCallback(() => {\n    setCityOpen(false);\n  }, []);\n\n  const onCityOpen = useCallback(() => {\n    setCountryOpen(false);\n  }, []);\n\n  return (\n    // Country\n    <DropDownPicker\n      open={countryOpen}\n      onOpen={onCountryOpen}\n      ...\n    />\n\n    // City\n    <DropDownPicker\n      open={cityOpen}\n      onOpen={onCityOpen}\n      ...\n    />\n  );\n}\n")))}f.isMDXComponent=!0}}]);