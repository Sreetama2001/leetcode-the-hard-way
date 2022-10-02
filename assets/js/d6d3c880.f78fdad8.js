"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[85687],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,h=c["".concat(p,".").concat(d)]||c[d]||s[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r,a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/sort-the-matrix-diagonally/",tags:["Array","Sorting","Matrix"]},m="1329 - Sort the Matrix Diagonally (Medium)",u={unversionedId:"1300-1399/sort-the-matrix-diagonally-medium",id:"1300-1399/sort-the-matrix-diagonally-medium",title:"1329 - Sort the Matrix Diagonally (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/sort-the-matrix-diagonally/",source:"@site/solutions/1300-1399/1329-sort-the-matrix-diagonally-medium.md",sourceDirName:"1300-1399",slug:"/1300-1399/sort-the-matrix-diagonally-medium",permalink:"/leetcode-the-hard-way/solutions/1300-1399/sort-the-matrix-diagonally-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1329-sort-the-matrix-diagonally-medium.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Sorting",permalink:"/leetcode-the-hard-way/solutions/tags/sorting"},{label:"Matrix",permalink:"/leetcode-the-hard-way/solutions/tags/matrix"}],version:"current",sidebarPosition:1329,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/sort-the-matrix-diagonally/",tags:["Array","Sorting","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"1328 - Break a Palindrome (Medium)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/break-a-palindrome-medium"},next:{title:"1331 - Rank Transform of an Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/rank-transform-of-an-array-easy"}},s={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Priority Queue",id:"approach-1-priority-queue",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1329---sort-the-matrix-diagonally-medium"},"1329 - Sort the Matrix Diagonally (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"matrix diagonal")," is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the ",(0,o.kt)("strong",{parentName:"p"},"matrix diagonal")," starting from ",(0,o.kt)("inlineCode",{parentName:"p"},"mat[2][0]"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"mat")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"6 x 3")," matrix, includes cells ",(0,o.kt)("inlineCode",{parentName:"p"},"mat[2][0]"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mat[3][1]"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"mat[4][2]"),"."),(0,o.kt)("p",null,"Given an ",(0,o.kt)("inlineCode",{parentName:"p"},"m x n")," matrix ",(0,o.kt)("inlineCode",{parentName:"p"},"mat")," of integers, sort each ",(0,o.kt)("strong",{parentName:"p"},"matrix diagonal")," in ascending order and return ",(0,o.kt)("em",{parentName:"p"},"the resulting matrix"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]\nOutput: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]\nOutput: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"m == mat.length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"n == mat[i].length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= mat[i][j] <= 100"))),(0,o.kt)("h2",{id:"approach-1-priority-queue"},"Approach 1: Priority Queue"),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> diagonalSort(vector<vector<int>>& mat) {\n        int n = mat.size(), m = mat[0].size();\n        // observation:\n        // for each cell mat[i][j] in the same diagonal,\n        // they will have the same value i - j\n        \n        // if the diagonal line is pointing to upper right direction, \n        // then they will have the same value i + j (see https://leetcode.com/problems/diagonal-traverse/)\n        \n        // the idea is to use priority queue for each diagonal\n        // as priority queue could sort it internally when a value is pushed / popped\n        // we use greater<int> as we want the smallest go first\n        map<int, priority_queue<int, vector<int>, greater<int>>> diag;\n        // iterate each row\n        for (int i = 0; i < n; i++) {\n            // iterate each col\n            for (int j = 0; j < m; j++) {\n                // for each mat[i][j] \n                // add it to corresponding priority queue\n                diag[i - j].push(mat[i][j]);\n            }\n        }\n        // iterate each row\n        for (int i = 0; i < n; i++) {\n            // iterate each col\n            for (int j = 0; j < m; j++) {\n                // diag[i - j].top() would return the smallest number in the current queue\n                // we can just perform in-place replacement here\n                mat[i][j] = diag[i - j].top();\n                // since we don't need this value anymore, pop it out\n                // so that next cell would get the smallest value\n                diag[i - j].pop();\n            }\n        }\n        return mat;\n    }\n};\n")))}g.isMDXComponent=!0}}]);