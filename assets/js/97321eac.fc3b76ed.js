"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[28870],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),k=i,h=m["".concat(l,".").concat(k)]||m[k]||u[k]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r,i=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/"},c="1866 - Number of Ways to Rearrange Sticks With K Sticks Visible (Hard)",p={unversionedId:"1800-1899/number-of-ways-to-rearrange-sticks-with-k-sticks-visible-hard",id:"1800-1899/number-of-ways-to-rearrange-sticks-with-k-sticks-visible-hard",title:"1866 - Number of Ways to Rearrange Sticks With K Sticks Visible (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/",source:"@site/solutions/1800-1899/1866-number-of-ways-to-rearrange-sticks-with-k-sticks-visible-hard.md",sourceDirName:"1800-1899",slug:"/1800-1899/number-of-ways-to-rearrange-sticks-with-k-sticks-visible-hard",permalink:"/leetcode-the-hard-way/solutions/1800-1899/number-of-ways-to-rearrange-sticks-with-k-sticks-visible-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1866-number-of-ways-to-rearrange-sticks-with-k-sticks-visible-hard.md",tags:[],version:"current",sidebarPosition:1866,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/"},sidebar:"tutorialSidebar",previous:{title:"1859 - Sorting the Sentence (Easy)",permalink:"/leetcode-the-hard-way/solutions/1800-1899/sorting-the-sentence-easy"},next:{title:"1700 - 1799",permalink:"/leetcode-the-hard-way/solutions/category/1700---1799"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],k=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1866---number-of-ways-to-rearrange-sticks-with-k-sticks-visible-hard"},"1866 - Number of Ways to Rearrange Sticks With K Sticks Visible (Hard)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/"},"https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"There are ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," uniquely-sized sticks whose lengths are integers from ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),". You want to arrange the sticks such that ",(0,o.kt)("strong",{parentName:"p"},"exactly")," ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," sticks are ",(0,o.kt)("strong",{parentName:"p"},"visible")," from the left. A stick is ",(0,o.kt)("strong",{parentName:"p"},"visible")," from the left if there are no ",(0,o.kt)("strong",{parentName:"p"},"longer")," sticks to the ",(0,o.kt)("strong",{parentName:"p"},"left")," of it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For example, if the sticks are arranged ",(0,o.kt)("inlineCode",{parentName:"li"},"[1,3,2,5,4]"),", then the sticks with lengths ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"3"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"5")," are visible from the left.")),(0,o.kt)("p",null,"Given ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"number")," of such arrangements"),". Since the answer may be large, return it ",(0,o.kt)("strong",{parentName:"p"},"modulo")," ",(0,o.kt)("inlineCode",{parentName:"p"},"10^9 + 7"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 3, k = 2\nOutput: 3\nExplanation: [1,3,2], [2,3,1], and [2,1,3] are the only arrangements such that exactly 2 sticks are visible.\nThe visible sticks are underlined.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 5, k = 5\nOutput: 1\nExplanation: [1,2,3,4,5] is the only arrangement such that all 5 sticks are visible.\nThe visible sticks are underlined.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 20, k = 11\nOutput: 647427950\nExplanation: There are 647427950 (mod 109 + 7) ways to rearrange the sticks such that exactly 11 sticks are visible.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= k <= n"))),(0,o.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,o.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int rearrangeSticks(int n, int k) {\n        int M = 1e9 + 7;\n        // let dp[i][j] be the number of such arrangements\n        // for length from 1 to i with exactly j sticks visible from the left\n        vector<vector<int>> dp(n + 1, vector<int>(k + 1, -1));\n        function<int(int,int)> dfs = [&](int i, int j) {\n            // base case\n            if (i < j || j == 0) return 0;\n            // there is one way, i.e. sort those i numbers\n            if (i == j) return 1;\n            // calculated before - return it directly\n            if (dp[i][j] != -1) return dp[i][j];\n            // init res\n            long long res = 0;\n            // if we put the tallest number from the right\n            // then we look for j - 1 sticks visible for i - 1 size\n            res = (res + dfs(i - 1, j - 1)) % M;\n            // if we dont put the tallest one, \n            // we have (i - 1) choices to choose\n            // then we look for j sticks visible i - 1 size\n            res = (res + 1LL * dfs(i - 1, j) * (i - 1) % M) % M;\n            // memoize the result\n            return dp[i][j] = res;\n        };\n        return dfs(n, k);\n    }\n};\n")))}d.isMDXComponent=!0}}]);