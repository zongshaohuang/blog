(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{554:function(e,t,r){"use strict";r.r(t);var s=r(31),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"kernel源码调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kernel源码调试"}},[e._v("#")]),e._v(" kernel源码调试")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#kernel源码调试"}},[e._v("kernel源码调试")])]),r("li",[r("a",{attrs:{href:"#编译"}},[e._v("编译")])]),r("li",[r("a",{attrs:{href:"#gdb-scrips"}},[e._v("gdb scrips")]),r("ul",[r("li",[r("a",{attrs:{href:"#gef"}},[e._v("gef")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"编译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[e._v("#")]),e._v(" 编译")]),e._v(" "),r("p",[e._v("这里用了 "),r("a",{attrs:{href:"https://github.com/PIG-007/kernelAll",target:"_blank",rel:"noopener noreferrer"}},[e._v("kernelall"),r("OutboundLink")],1),e._v("这个项目。可以拉个docker直接跑，我在pd的vm中有些问题，但是docker完全没问题。")]),e._v(" "),r("h2",{attrs:{id:"gdb-scrips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gdb-scrips"}},[e._v("#")]),e._v(" gdb scrips")]),e._v(" "),r("p",[e._v("可以在编译的时候修改编译选项， 设置产生gdb脚本，或者直接自己手动设置:")]),e._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -fsn scripts/gdb/vmlinux-gdb.py\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("同目录下会出现对应的vmlinux-gdb.py文件， 使用gdb ./vmlinux会自动载入这个脚本，可能会提示设置"),r("code",[e._v("safe-path")]),e._v("， 直接按提示进行设置即可。")]),e._v(" "),r("p",[e._v("然后使用 target remote :1234 即可连接到kernel调试，并且载入的这个python文件会设置好源码等，")]),e._v(" "),r("blockquote"),e._v(" "),r("p",[r("img",{attrs:{src:"https://s2.loli.net/2022/02/14/9QwlgeCTjBz3Kfc.png",alt:"image-20220214222933894"}})]),e._v(" "),r("h3",{attrs:{id:"gef"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gef"}},[e._v("#")]),e._v(" gef")]),e._v(" "),r("p",[e._v("我们上述的方案可以看到gef运行良好，而且vmmap进行查看也是现实qemu内的vmlinux，")]),e._v(" "),r("p",[e._v("在没有源码或者没有vmlinux-gdb.py的时候建议使用"),r("code",[e._v("gef-remote --qemu-mode localhost:1234")]),e._v("，")]),e._v(" "),r("p",[e._v("但是gef这个工具关于register和stack的显示应该是通过"),r("code",[e._v("/proc/<pid>/")]),e._v("实现的，因此使用"),r("code",[e._v("get-remote --qemu-mode")]),e._v("的时候经常会出现尝试读取"),r("code",[e._v("/proc/1/mem")]),e._v("的情况，给sudo权限即可，他读取和显示的其实是qemu内的，也不太用担心。但是如果vmmap一下就会发现这个"),r("code",[e._v("/proc/1/mem")]),e._v("确实是本机的。这可能是gef在qemu调试上的问题。")])])}),[],!1,null,null,null);t.default=a.exports}}]);