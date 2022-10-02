"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[20735],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=i,h=l["".concat(p,".").concat(d)]||l[d]||s[d]||a;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},87829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return l}});var r,i=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/"},u="2260 - Minimum Consecutive Cards to Pick Up (Medium)",m={unversionedId:"2200-2299/minimum-consecutive-cards-to-pick-up-medium",id:"2200-2299/minimum-consecutive-cards-to-pick-up-medium",title:"2260 - Minimum Consecutive Cards to Pick Up (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/",source:"@site/solutions/2200-2299/2260-minimum-consecutive-cards-to-pick-up-medium.md",sourceDirName:"2200-2299",slug:"/2200-2299/minimum-consecutive-cards-to-pick-up-medium",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-consecutive-cards-to-pick-up-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2260-minimum-consecutive-cards-to-pick-up-medium.md",tags:[],version:"current",sidebarPosition:2260,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/"},sidebar:"tutorialSidebar",previous:{title:"2259 - Remove Digit From Number to Maximize Result (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/remove-digit-from-number-to-maximize-result-easy"},next:{title:"2261 - K Divisible Elements Subarrays (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/k-divisible-elements-subarrays-medium"}},s={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:l};function k(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2260---minimum-consecutive-cards-to-pick-up-medium"},"2260 - Minimum Consecutive Cards to Pick Up (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/"},"https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"cards")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"cards[i]")," represents the ",(0,o.kt)("strong",{parentName:"p"},"value")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," card. A pair of cards are ",(0,o.kt)("strong",{parentName:"p"},"matching")," if the cards have the ",(0,o.kt)("strong",{parentName:"p"},"same")," value."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"minimum")," number of ",(0,o.kt)("strong",{parentName:"em"},"consecutive")," cards you have to pick up to have a pair of ",(0,o.kt)("strong",{parentName:"em"},"matching")," cards among the picked cards.")," If it is impossible to have matching cards, return ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: cards = [3,4,2,3,4,7]\nOutput: 4\nExplanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: cards = [1,0,5,3]\nOutput: -1\nExplanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= cards.length <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= cards[i] <= 10^6"))),(0,o.kt)("h2",{id:"approach-1-hash-map"},"Approach 1: Hash Map"),(0,o.kt)("p",null,"Store the index for each number, check each element with size > 1 and find out the minimum gap between them."),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minimumCardPickup(vector<int>& cards) {\n        int n = cards.size(), ans = INT_MAX;\n        unordered_map<int, vector<int>> m;\n        // store the indices for each number\n        for (int i = 0; i < n; i++) m[cards[i]].push_back(i);\n        for (auto& x : m) {\n            // a pair needs to have at least 2 elements with same value\n            for (int i = 1; i < x.second.size(); i++) {\n                // calculate the min gap\n                ans = min(ans, x.second[i] - x.second[i - 1] + 1);\n            }\n        }\n        return ans == INT_MAX ? -1 : ans;\n    }\n};\n")))}k.isMDXComponent=!0}}]);