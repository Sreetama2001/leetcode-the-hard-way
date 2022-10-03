"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[74154],{3905:function(a,t,e){e.d(t,{Zo:function(){return l},kt:function(){return h}});var n=e(67294);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function m(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function p(a,t){if(null==a)return{};var e,n,r=function(a,t){if(null==a)return{};var e,n,r={},s=Object.keys(a);for(n=0;n<s.length;n++)e=s[n],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)e=s[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var o=n.createContext({}),i=function(a){var t=n.useContext(o),e=t;return a&&(e="function"==typeof a?a(t):m(m({},t),a)),e},l=function(a){var t=i(a.components);return n.createElement(o.Provider,{value:t},a.children)},c={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(a,t){var e=a.components,r=a.mdxType,s=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),u=i(e),h=r,g=u["".concat(o,".").concat(h)]||u[h]||c[h]||s;return e?n.createElement(g,m(m({ref:t},l),{},{components:e})):n.createElement(g,m({ref:t},l))}));function h(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var s=e.length,m=new Array(s);m[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=a,p.mdxType="string"==typeof a?a:r,m[1]=p;for(var i=2;i<s;i++)m[i]=e[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},97681:function(a,t,e){e.r(t),e.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=e(87462),r=e(63366),s=(e(67294),e(3905)),m=["components"],p={description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/group-anagrams/",tags:["Array","Hash Table","String","Sorting"]},o="0049 - Group Anagrams (Medium)",i={unversionedId:"0000-0099/group-anagrams-medium",id:"0000-0099/group-anagrams-medium",title:"0049 - Group Anagrams (Medium)",description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/group-anagrams/",source:"@site/solutions/0000-0099/0049-group-anagrams-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/group-anagrams-medium",permalink:"/leetcode-the-hard-way/solutions/0000-0099/group-anagrams-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0049-group-anagrams-medium.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Hash Table",permalink:"/leetcode-the-hard-way/solutions/tags/hash-table"},{label:"String",permalink:"/leetcode-the-hard-way/solutions/tags/string"},{label:"Sorting",permalink:"/leetcode-the-hard-way/solutions/tags/sorting"}],version:"current",sidebarPosition:49,frontMatter:{description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/group-anagrams/",tags:["Array","Hash Table","String","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0048 - Rotate Image (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/rotate-image-medium"},next:{title:"0050 - Pow(x, n) (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/pow-x-n-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting + Hash Map",id:"approach-1-sorting--hash-map",level:2}],u=function(a){return function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},h=u("Tabs"),g=u("TabItem"),k=u("SolutionAuthor"),d={toc:c};function N(a){var t=a.components,e=(0,r.Z)(a,m);return(0,s.kt)("wrapper",(0,n.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0049---group-anagrams-medium"},"0049 - Group Anagrams (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/group-anagrams/"},"https://leetcode.com/problems/group-anagrams/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given an array of strings ",(0,s.kt)("inlineCode",{parentName:"p"},"strs"),", group ",(0,s.kt)("strong",{parentName:"p"},"the anagrams")," together. You can return the answer in ",(0,s.kt)("strong",{parentName:"p"},"any order"),"."),(0,s.kt)("p",null,"An ",(0,s.kt)("strong",{parentName:"p"},"Anagram")," is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: strs = ["eat","tea","tan","ate","nat","bat"]\nOutput: [["bat"],["nat","tan"],["ate","eat","tea"]]\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: strs = [""]\nOutput: [[""]]\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: strs = ["a"]\nOutput: [["a"]]\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= strs.length <= 10^4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= strs[i].length <= 100")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"strs[i]")," consists of lowercase English letters.")),(0,s.kt)("h2",{id:"approach-1-sorting--hash-map"},"Approach 1: Sorting + Hash Map"),(0,s.kt)("p",null,"To check if ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," are anagrams, one of the ways is to sort them both and check if they are equal. For example, if we sort ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"tan")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"an")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nat")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"na"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),", we will get ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ant")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),". Therefore, we can group them together."),(0,s.kt)("p",null,"We can use a hash map to store the sorted string as a key, and push the original value to an array. At the end, we iterate the hash map and push the corresponding array to our final answer."),(0,s.kt)(h,{mdxType:"Tabs"},(0,s.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string>> m;\n        for(auto& x : strs) {\n            // we need to use a temp string\n            // as we still need to use the original string\n            string t = x;\n            // sort it \n            sort(t.begin(), t.end());\n            // sorted string as key\n            // push original string to the corresponding array\n            m[t].push_back(x);\n        }\n        vector<vector<string>> ans;\n        // iterate the hash map and push the array to the final ans\n        for(auto& x : m) ans.push_back(x.second);\n        return ans;\n    }\n};\n"))),(0,s.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(k,{name:"@ganajayant",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    private String sortString(String str) {\n        char[] chars = str.toCharArray();\n        java.util.Arrays.sort(chars);\n        return new String(chars);\n    }\n\n    public List<List<String>> groupAnagrams(String[] strs) {\n        HashMap<String, LinkedList<String>> hm = new HashMap<>();\n        for (int i = 0; i < strs.length; i++) {\n            String sortedstring = sortString(strs[i]);\n            if (hm.containsKey(sortedstring)) {\n                hm.get(sortedstring).add(strs[i]);\n            } else {\n                hm.put(sortedstring, new LinkedList<String>());\n                hm.get(sortedstring).add(strs[i]);\n            }\n        }\n        List<List<String>> ll = new LinkedList<List<String>>();\n        for (Map.Entry<String, LinkedList<String>> entry : hm.entrySet()) {\n            ll.add((List<String>) entry.getValue());\n        }\n        return ll;\n    }\n}\n")))))}N.isMDXComponent=!0}}]);