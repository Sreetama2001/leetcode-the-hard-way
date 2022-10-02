"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94802],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98710:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Segment Tree",description:"",hide_table_of_contents:!1,keywords:["leetcode","template","segment tree"]},s=void 0,u={unversionedId:"segment-tree",id:"segment-tree",title:"Segment Tree",description:"",source:"@site/templates/segment-tree.md",sourceDirName:".",slug:"/segment-tree",permalink:"/leetcode-the-hard-way/templates/segment-tree",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/templates/segment-tree.md",tags:[],version:"current",frontMatter:{title:"Segment Tree",description:"",hide_table_of_contents:!1,keywords:["leetcode","template","segment tree"]},sidebar:"tutorialSidebar",previous:{title:"Ordered Set and GNU C++ PBDS",permalink:"/leetcode-the-hard-way/templates/ordered-set"},next:{title:"Sparse Table",permalink:"/leetcode-the-hard-way/templates/sparse-table"}},c={},m=[{value:"Basic Segment Tree",id:"basic-segment-tree",level:2},{value:"Operations",id:"operations",level:3},{value:"Sample Usage",id:"sample-usage",level:3}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"basic-segment-tree"},"Basic Segment Tree"),(0,a.kt)("h3",{id:"operations"},"Operations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find sum in particular range [l, r)"),(0,a.kt)("li",{parentName:"ul"},"Point Update")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct segtree {\n    vector<long long> sums;\n    int size;\n    \n    void init(int n) {\n        size = 1;\n        while (size < n) size *= 2;\n        sums.assign(size * 2, 0LL);\n    }\n    \n    void set(int i, int v, int x, int lx, int rx) {\n        if (rx - lx == 1) {\n            sums[x] = v;\n            return;\n        }\n        int m = (lx + rx) / 2;\n        if (i < m) set(i, v, 2 * x + 1, lx, m);\n        else set(i, v, 2 * x + 2, m, rx);\n        sums[x] = sums[2 * x + 1] + sums[2 * x + 2];\n    }\n    \n    void set(int i, int v) {\n        set(i, v, 0, 0, size);\n    }\n    \n    long long sum(int l, int r, int x, int lx, int rx) {\n        if (lx >= r || l >= rx) return 0;\n        if (lx >= l && rx <= r) return sums[x];\n        int m = (lx + rx) / 2;\n        return sum(l, r, 2 * x + 1, lx, m) + sum(l, r, 2 * x + 2, m, rx);\n    }\n    \n    long long sum(int l, int r) {\n        return sum(l, r, 0, 0, size);\n    }\n};\n")),(0,a.kt)("h3",{id:"sample-usage"},"Sample Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int n = nums.size();\n\nst.init(n);\n// ...\nfor (int i = 0; i < n; i++) st.set(i, nums[i]);\n// ...\nst.set(index, val);\n// ...\nst.sum(left, right + 1)\n")))}d.isMDXComponent=!0}}]);