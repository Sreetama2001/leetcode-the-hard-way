"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32291],{3905:function(a,e,t){t.d(e,{Zo:function(){return N},kt:function(){return k}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},i={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),c=o(t),k=m,h=c["".concat(l,".").concat(k)]||c[k]||i[k]||s;return t?n.createElement(h,p(p({ref:e},N),{},{components:t})):n.createElement(h,p({ref:e},N))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,p=new Array(s);p[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:m,p[1]=r;for(var o=2;o<s;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},29563:function(a,e,t){t.r(e),t.d(e,{assets:function(){return i},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return N},toc:function(){return c}});var n,m=t(87462),s=t(63366),p=(t(67294),t(3905)),r=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/champagne-tower/"},o="0799 - Champagne Tower (Medium)",N={unversionedId:"0700-0799/champagne-tower-medium",id:"0700-0799/champagne-tower-medium",title:"0799 - Champagne Tower (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/champagne-tower/",source:"@site/solutions/0700-0799/0799-champagne-tower-medium.md",sourceDirName:"0700-0799",slug:"/0700-0799/champagne-tower-medium",permalink:"/leetcode-the-hard-way/solutions/0700-0799/champagne-tower-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0799-champagne-tower-medium.md",tags:[],version:"current",sidebarPosition:799,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/champagne-tower/"},sidebar:"tutorialSidebar",previous:{title:"0787 - Cheapest Flights Within K Stops (Medium)",permalink:"/leetcode-the-hard-way/solutions/0700-0799/cheapest-flights-within-k-stops-medium"},next:{title:"0800 - 0899",permalink:"/leetcode-the-hard-way/solutions/category/0800---0899"}},i={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}],k=(n="SolutionAuthor",function(a){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",a)}),h={toc:c};function d(a){var e=a.components,t=(0,s.Z)(a,r);return(0,p.kt)("wrapper",(0,m.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"0799---champagne-tower-medium"},"0799 - Champagne Tower (Medium)"),(0,p.kt)("h2",{id:"problem-link"},"Problem Link"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/champagne-tower/"},"https://leetcode.com/problems/champagne-tower/")),(0,p.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,p.kt)("p",null,"We stack glasses in a pyramid, where the ",(0,p.kt)("strong",{parentName:"p"},"first")," row has ",(0,p.kt)("inlineCode",{parentName:"p"},"1")," glass, the ",(0,p.kt)("strong",{parentName:"p"},"second")," row has ",(0,p.kt)("inlineCode",{parentName:"p"},"2")," glasses, and so on until the 100th row.  Each glass holds one cup of champagne."),(0,p.kt)("p",null,"Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)"),(0,p.kt)("p",null,"For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below."),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/09/tower.png",alt:null})),(0,p.kt)("p",null,"Now after pouring some non-negative integer cups of champagne, return how full the ",(0,p.kt)("inlineCode",{parentName:"p"},"jth")," glass in the ",(0,p.kt)("inlineCode",{parentName:"p"},"ith")," row is (both ",(0,p.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"j")," are 0-indexed.)"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 1:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: poured = 1, query_row = 1, query_glass = 1\nOutput: 0.00000\nExplanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 2:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: poured = 2, query_row = 1, query_glass = 1\nOutput: 0.50000\nExplanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 3:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: poured = 100000009, query_row = 33, query_glass = 17\nOutput: 1.00000\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Constraints:")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"0 <= poured <= 10^9")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"0 <= query_glass <= query_row < 100"))),(0,p.kt)("h2",{id:"approach-1-dp"},"Approach 1: DP"),(0,p.kt)("p",null,"Let ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"i"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"j"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i][j]")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the amount poured to a glass located at row ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"i")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," and column ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"j")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"))))),". We know that the topmost glass is ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mi",{parentName:"mrow"},"o"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("mi",{parentName:"mrow"},"r"),(0,p.kt)("mi",{parentName:"mrow"},"e"),(0,p.kt)("mi",{parentName:"mrow"},"d")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"poured")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," so the base case is ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mn",{parentName:"mrow"},"0"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mn",{parentName:"mrow"},"0"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mi",{parentName:"mrow"},"o"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("mi",{parentName:"mrow"},"r"),(0,p.kt)("mi",{parentName:"mrow"},"e"),(0,p.kt)("mi",{parentName:"mrow"},"d")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[0][0] = poured")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord"},"0"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord"},"0"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),". If the glass has excess liquid, then it will fall equal to the glass to the left and the right of it. It means if ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"i"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"j"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i][j]")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]")))))," is greater than ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"1")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"))))),", then the overflow ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"i"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"j"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow"},"\u2212"),(0,p.kt)("mn",{parentName:"mrow"},"1")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i][j] - 1")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"))))),"will be equally distributed to the glass to the left ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"i"),(0,p.kt)("mo",{parentName:"mrow"},"+"),(0,p.kt)("mn",{parentName:"mrow"},"1"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"j"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i + 1][j]")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]")))))," and to the right ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"i"),(0,p.kt)("mo",{parentName:"mrow"},"+"),(0,p.kt)("mn",{parentName:"mrow"},"1"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"j"),(0,p.kt)("mo",{parentName:"mrow"},"+"),(0,p.kt)("mn",{parentName:"mrow"},"1"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i + 1][j + 1]")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". We can just simulate it and return the answer. Since ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"q"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("mi",{parentName:"mrow"},"e"),(0,p.kt)("mi",{parentName:"mrow"},"r"),(0,p.kt)("mi",{parentName:"mrow"},"y"),(0,p.kt)("mi",{parentName:"mrow"},"R"),(0,p.kt)("mi",{parentName:"mrow"},"o"),(0,p.kt)("mi",{parentName:"mrow"},"w"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"q"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("mi",{parentName:"mrow"},"e"),(0,p.kt)("mi",{parentName:"mrow"},"r"),(0,p.kt)("mi",{parentName:"mrow"},"y"),(0,p.kt)("mi",{parentName:"mrow"},"G"),(0,p.kt)("mi",{parentName:"mrow"},"l"),(0,p.kt)("mi",{parentName:"mrow"},"a"),(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[queryRow][queryGlass]")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"ery"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"ery"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"Gl"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"ss"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]")))))," may exceed ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"1")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"))))),", we need to return ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mn",{parentName:"mrow"},"1")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"))))),"in this case."),(0,p.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    double champagneTower(int poured, int query_row, int query_glass) {\n        vector<vector<double>> dp(query_row + 2, vector<double>(query_glass + 2));\n        // the topmost glass\n        dp[0][0] = poured;\n        for (int i = 0; i <= query_row; i++) {\n            for (int j = 0; j <= query_glass; j++) {\n                // check if has any excess liquid\n                if (dp[i][j] > 1.0) {\n                    // if so, amount - capacity of glass (1.0) = overflow\n                    double overflow = dp[i][j] - 1.0;\n                    // distribute to the left and right equally\n                    dp[i + 1][j] += overflow / 2;\n                    dp[i + 1][j + 1] += overflow / 2;\n                }\n            }\n        }\n        // dp[query_row][query_glass] may have excess liquid\n        // take min to avoid it \n        return min(1.0, dp[query_row][query_glass]);\n    }\n};\n")),(0,p.kt)("p",null,"We can see that the row ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"i")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," depends on ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"i"),(0,p.kt)("mo",{parentName:"mrow"},"\u2212"),(0,p.kt)("mn",{parentName:"mrow"},"1")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i - 1")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1")))))," row so we can use 1D array to store the state. Let ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"j"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[j]")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the amount poured to a glass located at ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"j")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," column. We use ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"n"),(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ndp")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," to store the current state while ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"p")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," state stores the previous state. We swap them for every row, i.e. transit the state from row ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"i")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," to row ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"i"),(0,p.kt)("mo",{parentName:"mrow"},"+"),(0,p.kt)("mn",{parentName:"mrow"},"1")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i + 1")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,p.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},"1"))))),"."),(0,p.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    double champagneTower(int poured, int query_row, int query_glass) {\n        vector<double> dp(query_glass + 2);\n        // the topmost glass\n        dp[0] = poured;\n        for (int i = 0; i < query_row; i++) {\n            // use ndp to store the current state\n            // while dp here is the previous state\n            vector<double> ndp(query_glass + 2);\n            for (int j = 0; j <= query_glass; j++) {\n                // check if has any excess liquid\n                if (dp[j] > 1.0) {\n                    // if so, amount - capacity of glass (1.0) = overflow\n                    double overflow = dp[j] - 1.0;\n                    // distribute to the left and right equally\n                    ndp[j] += overflow / 2;\n                    ndp[j + 1] += overflow / 2;\n                }\n            }\n            // transit the state from row i to row i + 1\n            swap(dp, ndp);\n        }\n        // dp[query_glass] may have excess liquid\n        // take min to avoid it\n        return min(1.0, dp[query_glass]);\n    }\n};\n")))}d.isMDXComponent=!0}}]);