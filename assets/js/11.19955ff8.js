(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{568:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"格式化字符串原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式化字符串原理"}},[t._v("#")]),t._v(" 格式化字符串原理")]),t._v(" "),s("p",[t._v("主要是几个格式化字符串使用的位置，用户可以控制格式化字符串的情况， 构造恶意的字符串，修改内存或泄露内存。\n几个在漏洞利用中比较重要的格式化字符串， "),s("code",[t._v("%p")]),t._v(" , "),s("code",[t._v("%n")])]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("precision"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("type\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("parameter: 形式为 "),s("code",[t._v("n$")]),t._v(" ，获取格式化字符串中的指定参数.")])]),t._v(" "),s("li",[s("p",[t._v("length:    输出的长度 "),s("code",[t._v("hh")]),t._v(" ，输出一个字节 "),s("code",[t._v("h")]),t._v(" ，输出一个双字节.")])]),t._v(" "),s("li",[s("p",[t._v("type :")]),t._v(" "),s("ul",[s("li",[t._v("n，不输出字符，但是把已经成功输出的字符个数写入对应的整型指针参数所指的变量")]),t._v(" "),s("li",[t._v("p, 输出对应的变量值.")])])])]),t._v(" "),s("p",[t._v("利用： "),s("code",[t._v("%n$x")])]),t._v(" "),s("h2",{attrs:{id:"栈上的格式化字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈上的格式化字符串"}},[t._v("#")]),t._v(" 栈上的格式化字符串")]),t._v(" "),s("p",[t._v("在栈上的格式化字符串，我们可以使用 格式化字符串+拓展地址  的形式， 控制指针指向拓展地址即可。")]),t._v(" "),s("h2",{attrs:{id:"堆上的格式化字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆上的格式化字符串"}},[t._v("#")]),t._v(" 堆上的格式化字符串")]),t._v(" "),s("p",[t._v("在堆上的格式化字符串，不能直接修改栈内空间的指针，也就不能带拓展地址，\n泄露内存地址是没有问题的， 利用getshell的话， 需要")]),t._v(" "),s("h2",{attrs:{id:"盲打"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盲打"}},[t._v("#")]),t._v(" 盲打")])])}),[],!1,null,null,null);a.default=e.exports}}]);