(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{535:function(t,e,s){"use strict";s.r(e);var r=s(31),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"operating-system-kernel-experiment-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operating-system-kernel-experiment-1"}},[t._v("#")]),t._v(" operating system kernel experiment 1")]),t._v(" "),s("h1",{attrs:{id:"system-boot-part"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-boot-part"}},[t._v("#")]),t._v(" system boot part")]),t._v(" "),s("h1",{attrs:{id:"experiment-goal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#experiment-goal"}},[t._v("#")]),t._v(" experiment goal")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("/boot/bootsect.s")]),t._v(" custom print information")]),t._v(" "),s("li",[s("strong",[t._v("/boot/setup.s")]),t._v(" print hardware information")])]),t._v(" "),s("h1",{attrs:{id:"source-code-analysis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source-code-analysis"}},[t._v("#")]),t._v(" source code analysis")]),t._v(" "),s("h2",{attrs:{id:"boot-bootsect-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boot-bootsect-s"}},[t._v("#")]),t._v(" boot/bootsect.s")]),t._v(" "),s("p",[t._v("this step first copies itself to the position of 0x90000, and jumps over to execute,")]),t._v(" "),s("p",[t._v("then read setup.s to position of 0x90200,")]),t._v(" "),s("p",[t._v("print information and copy system to the address 0x10000,")]),t._v(" "),s("p",[t._v("deter the device number of the file system,")]),t._v(" "),s("p",[t._v("and jump to the setup program to run.")]),t._v(" "),s("h2",{attrs:{id:"boot-setup-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boot-setup-s"}},[t._v("#")]),t._v(" boot/setup.s")]),t._v(" "),s("p",[t._v("the setup program obtains and stores hardware information in the from of bios interruption")]),t._v(" "),s("p",[t._v("these data are stored starting from 0x90000")]),t._v(" "),s("blockquote",[s("p",[t._v("yes, it will directly overwrite the original bootsect program")])]),t._v(" "),s("p",[t._v("then setup moves the whole block of system from 0x10000 down to 0x00000,")]),t._v(" "),s("p",[t._v("then load idtr and gdtr, prefrom hardware settings, entry 32-bit, protected mode operation, and jump to the head.s program at  the top of system to run.")]),t._v(" "),s("h1",{attrs:{id:"experiment-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#experiment-details"}},[t._v("#")]),t._v(" experiment details")]),t._v(" "),s("p",[t._v("this experiment is relatively simple, mainly for "),s("strong",[t._v("printing control")])]),t._v(" "),s("h2",{attrs:{id:"print-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#print-information"}},[t._v("#")]),t._v(" print information")]),t._v(" "),s("div",{staticClass:"language-assembly line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mov $0x3, %ax;\nxor %bh, %bh;\nint 0x10;\n# get current cursor position \n\nmov $len, %cx;\nmov $msg, %bp;\nmov $0x0007, %bx; \nmov $0x1301, %ax;\nint 0x10;\n# print msg \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);