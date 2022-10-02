"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[92667],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47646:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var n,r=a(87462),o=a(63366),l=(a(67294),a(3905)),p=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/broken-calculator/"},s="0991 - Broken Calculator (Medium)",m={unversionedId:"0900-0999/broken-calculator-medium",id:"0900-0999/broken-calculator-medium",title:"0991 - Broken Calculator (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/broken-calculator/",source:"@site/solutions/0900-0999/0991-broken-calculator-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/broken-calculator-medium",permalink:"/leetcode-the-hard-way/solutions/0900-0999/broken-calculator-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0991-broken-calculator-medium.md",tags:[],version:"current",sidebarPosition:991,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/broken-calculator/"},sidebar:"tutorialSidebar",previous:{title:"0990 - Satisfiability of Equality Equations (Medium)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/satisfiability-of-equality-equations-medium"},next:{title:"0992 - Subarrays with K Different Integers (Hard)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/subarrays-with-k-different-integers-hard"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],d=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),k={toc:c};function h(e){var t=e.components,a=(0,o.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"0991---broken-calculator-medium"},"0991 - Broken Calculator (Medium)"),(0,l.kt)("h2",{id:"problem-link"},"Problem Link"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/broken-calculator/"},"https://leetcode.com/problems/broken-calculator/")),(0,l.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,l.kt)("p",null,"There is a broken calculator that has the integer ",(0,l.kt)("inlineCode",{parentName:"p"},"startValue")," on its display initially. In one operation, you can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"multiply the number on display by ",(0,l.kt)("inlineCode",{parentName:"li"},"2"),", or"),(0,l.kt)("li",{parentName:"ul"},"subtract ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," from the number on display.")),(0,l.kt)("p",null,"Given two integers ",(0,l.kt)("inlineCode",{parentName:"p"},"startValue")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"target"),", return ",(0,l.kt)("em",{parentName:"p"},"the minimum number of operations needed to display")," ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," ",(0,l.kt)("em",{parentName:"p"},"on the calculator"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: startValue = 2, target = 3\nOutput: 2\nExplanation: Use double operation and then decrement operation {2 -> 4 -> 3}.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: startValue = 5, target = 8\nOutput: 2\nExplanation: Use decrement and then double {5 -> 4 -> 8}.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 3:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: startValue = 3, target = 10\nOutput: 3\nExplanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constraints:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1 <= x, y <= 10^9"))),(0,l.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,l.kt)("p",null,"We solve it backwards. For operation 1, instead of multiplying the number by ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mn",{parentName:"mrow"},"2")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},"2"))))),", we divide it by ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mn",{parentName:"mrow"},"2")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},"2")))))," if possible. Similarly, we add ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mn",{parentName:"mrow"},"1")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},"1")))))," to the number for operation 2. At the end, the number may be less than startValue, in this case we can only use operation 2."),(0,l.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int brokenCalc(int startValue, int target) {\n        int ans = 0;\n        while (target > startValue) {\n            if (target % 2 == 0) {\n                // use operation 1\n                target /= 2;\n            } else {\n                // use operation 2\n                target += 1;\n            }\n            // increase number of operations\n            ans += 1;\n        }\n        // target can be less than startValue\n        // e.g. right after operation 1\n        if (target < startValue) {\n            // use operation 2\n            ans += startValue - target;\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);