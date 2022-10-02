"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[43006],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78300:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r,o=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],s={description:"Author: @heiheihang | https://leetcode.com/problems/move-zeroes/"},p="0283 - Move Zeroes (Easy)",u={unversionedId:"0200-0299/move-zeroes-easy",id:"0200-0299/move-zeroes-easy",title:"0283 - Move Zeroes (Easy)",description:"Author: @heiheihang | https://leetcode.com/problems/move-zeroes/",source:"@site/solutions/0200-0299/0283-move-zeroes-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/move-zeroes-easy",permalink:"/leetcode-the-hard-way/solutions/0200-0299/move-zeroes-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0283-move-zeroes-easy.md",tags:[],version:"current",sidebarPosition:283,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/move-zeroes/"},sidebar:"tutorialSidebar",previous:{title:"0278 - First Bad Version (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/first-bad-version-easy"},next:{title:"0287 - Find the Duplicate Number (Medium)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/find-the-duplicate-number-medium"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two pointers",id:"approach-1-two-pointers",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),f={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0283---move-zeroes-easy"},"0283 - Move Zeroes (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/move-zeroes/"},"https://leetcode.com/problems/move-zeroes/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),", move all ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"'s to the end of it while maintaining the relative order of the non-zero elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," that you must do this in-place without making a copy of the array."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [0,1,0,3,12]\nOutput: [1,3,12,0,0]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [0]\nOutput: [0]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 104")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-2^31 <= nums[i] <= 2^31 - 1"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow up:")," Could you minimize the total number of operations done?"),(0,a.kt)("h2",{id:"approach-1-two-pointers"},"Approach 1: Two pointers"),(0,a.kt)("p",null,"We need to set two pointers for this problem. The first pointer identifies the current number it is looking at. The second pointer identifies the next un-updated slot for moving the non-zero numbers in."),(0,a.kt)("p",null,"When we see a non-zero element, we put it in the slot pointed by ",(0,a.kt)("inlineCode",{parentName:"p"},"left_pointer"),", and then increment ",(0,a.kt)("inlineCode",{parentName:"p"},"left_pointer"),". When we see a zero, we just skip."),(0,a.kt)("p",null,"At the end, we need to set all the unused slots of ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," to zero."),(0,a.kt)(d,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def moveZeroes(self, nums: List[int]) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        \n        #initialize left pointer to keep track of spaces for non-zero elements\n        left_pointer = 0\n        \n        #iterate all numbers in nums\n        for i in range(len(nums)):\n            \n            #we skip if we see a 0\n            if(nums[i] == 0):\n                continue\n            else:\n                \n                #we put the current number to the empty space if its non-zero\n                nums[left_pointer] = nums[i]\n                \n                #as the current position is filled, move to the next one\n                left_pointer += 1\n        \n        #we put zeros to the remaining spots in nums\n        for i in range(left_pointer, len(nums)):\n            nums[i] = 0\n            \n')))}h.isMDXComponent=!0}}]);