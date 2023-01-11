"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9254],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8501:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],s={id:"options",title:"Options"},l=void 0,p={unversionedId:"getting-started/options",id:"version-10.x/getting-started/options",title:"Options",description:"jest-preset-angular uses ts-jest options under the hood, which are located under the globals of Jest config object",source:"@site/versioned_docs/version-10.x/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/jest-preset-angular/docs/10.x/getting-started/options",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-10.x/getting-started/options.md",tags:[],version:"10.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1673471188,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{id:"options",title:"Options"},sidebar:"version-10.x-docs",previous:{title:"Presets",permalink:"/jest-preset-angular/docs/10.x/getting-started/presets"},next:{title:"Test environment",permalink:"/jest-preset-angular/docs/10.x/getting-started/test-environment"}},u={},d=[{value:"Exposed configuration",id:"exposed-configuration",level:3},{value:"Brief explanation of config",id:"brief-explanation-of-config",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," options under the hood, which are located under the ",(0,i.kt)("inlineCode",{parentName:"p"},"globals")," of Jest config object\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file of your project, or through a ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.config.js"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file."),(0,i.kt)("p",null,"More information about ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," options, see ",(0,i.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/next/getting-started/options"},"https://kulshekhar.github.io/ts-jest/docs/next/getting-started/options")),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Since ",(0,i.kt)("strong",{parentName:"p"},"v9.0.0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," default Jest configuration no longer provides ",(0,i.kt)("inlineCode",{parentName:"p"},"moduleNameMapper"),". If you wish to reuse\nthe old ",(0,i.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," configuration, you can put this into your Jest config"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"moduleNameMapper: {\n  '^src/(.*)$': '<rootDir>/src/$1',\n  '^app/(.*)$': '<rootDir>/src/app/$1',\n  '^assets/(.*)$': '<rootDir>/src/assets/$1',\n  '^environments/(.*)$': '<rootDir>/src/environments/$1',\n}\n"))),(0,i.kt)("h3",{id:"exposed-configuration"},"Exposed configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const snapshotSerializers = require('../build/serializers');\n\nmodule.exports = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n    },\n  },\n  testEnvironment: 'jsdom',\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': 'jest-preset-angular',\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json'],\n  snapshotSerializers,\n};\n")),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Jest runs with ",(0,i.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," neither in browser nor through dev server. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"JSDOM")," to abstract browser environment hence we depend on\n",(0,i.kt)("inlineCode",{parentName:"p"},"JSDOM")," implementation for real browser features.")),(0,i.kt)("h3",{id:"brief-explanation-of-config"},"Brief explanation of config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we're using some ",(0,i.kt)("inlineCode",{parentName:"li"},'"globals"')," to pass information about where our tsconfig.json file is that we'd like to be able to transform HTML files through ",(0,i.kt)("inlineCode",{parentName:"li"},"ts-jest"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"transform"')," \u2013 run every ",(0,i.kt)("inlineCode",{parentName:"li"},"TS"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"JS"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MJS"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"SVG")," file through so called ",(0,i.kt)("em",{parentName:"li"},"Jest transformer"),"; this lets Jest understand non-JS syntax."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"testEnvironment"')," \u2013 the test environment to run on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"moduleFileExtensions"')," \u2013 our modules are TypeScript (",(0,i.kt)("inlineCode",{parentName:"li"},"ts"),"), HTML (",(0,i.kt)("inlineCode",{parentName:"li"},"html"),"), JavaScript (",(0,i.kt)("inlineCode",{parentName:"li"},"js"),") and JSON (",(0,i.kt)("inlineCode",{parentName:"li"},"json"),") files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"moduleNameMapper"')," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses regex."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"snapshotSerializers"')," - array of serializers which will be applied to snapshot the code. Note: by default angular adds\nsome angular-specific attributes to the code (like ",(0,i.kt)("inlineCode",{parentName:"li"},"ng-reflect-*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},'ng-version="*"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_ngcontent-c*")," etc).\nThis package provides serializer to remove such attributes. This makes snapshots cleaner and more human-readable.\nTo remove such specific attributes use ",(0,i.kt)("inlineCode",{parentName:"li"},"no-ng-attributes")," serializer. You need to add ",(0,i.kt)("inlineCode",{parentName:"li"},"no-ng-attributes")," serializer manually.")))}m.isMDXComponent=!0}}]);