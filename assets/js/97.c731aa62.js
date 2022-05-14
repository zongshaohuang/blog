(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{483:function(t,s,a){"use strict";a.r(s);var n=a(31),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("idapython脚本")]),t._v(" "),a("blockquote",[a("p",[t._v("ida 中内置python2和idc两种形式的脚本")]),t._v(" "),a("p",[t._v("一般我们使用ida python")])]),t._v(" "),a("h2",{attrs:{id:"结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),a("p",[t._v("主要的文件都在"),a("code",[t._v("./ida/python")]),t._v("目录下，")]),t._v(" "),a("p",[t._v("主要是分为三个模块，")]),t._v(" "),a("ul",[a("li",[t._v("idc提供了idc脚本兼容过来的api")]),t._v(" "),a("li",[t._v("idaapi提供一些比较底层的操作")]),t._v(" "),a("li",[t._v("idautils提供一些封装好的的函数")])]),t._v(" "),a("p",[t._v("新版本增加了更多的模块，大多是对idaapi的扩展，文件多为： "),a("code",[t._v("./ida/python/ida_*.py")]),t._v(",")]),t._v(" "),a("h2",{attrs:{id:"关于api兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于api兼容性"}},[t._v("#")]),t._v(" 关于api兼容性")]),t._v(" "),a("p",[t._v("ida在7.0版本重新设计了api, 但是为了保证向之前版本兼容，设置了"),a("code",[t._v("ida/python/idc_bc695.py")]),t._v("文件，")]),t._v(" "),a("p",[t._v("但是在新的7.4以后的版本中， 这个向后兼容的文件默认不会被加载，于是新版本中的很多函数(如Byte,Dword等)不能被使用，")]),t._v(" "),a("p",[t._v("可以在配置文件中进行修改: "),a("code",[t._v("ida/cfg/idapython.cfg")]),t._v("中的"),a("code",[t._v("AUTOIMPORT_COMPAT_IDA695")]),t._v("选项设置为yes即可开启，")]),t._v(" "),a("h2",{attrs:{id:"地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地址"}},[t._v("#")]),t._v(" 地址")]),t._v(" "),a("p",[t._v("可以通过"),a("code",[t._v("here()")]),t._v("函数或"),a("code",[t._v("idc.get_screen_ea()")]),t._v("函数， 获取当前光标所在地址，")]),t._v(" "),a("p",[t._v("获取最大地址： "),a("code",[t._v("idc.get_inf_attr(INF_MAX_EA)")]),t._v(",")]),t._v(" "),a("p",[t._v("获取最小地址："),a("code",[t._v("idc.get_inf_attr(INF_MIN_EA)")]),t._v(",")]),t._v(" "),a("h2",{attrs:{id:"反编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反编译"}},[t._v("#")]),t._v(" 反编译")]),t._v(" "),a("p",[t._v("首先，要获取的地址记作"),a("code",[t._v("(int)ea")]),t._v("，")]),t._v(" "),a("p",[t._v("反编译某行:  "),a("code",[t._v("(str) idc.generate_disasm_line((int)ea, (int)flag)")]),t._v(", 返回对应的反编译出的汇编代码，")]),t._v(" "),a("ul",[a("li",[t._v("其中flag为0或1,")])]),t._v(" "),a("p",[t._v("获取某个地址反编译代码对应的某一部分：")]),t._v(" "),a("p",[t._v("获取助记符: "),a("code",[t._v("(str)idc.print_insn_mnem((int)ea)")]),t._v(", 返回对应地址的反编译代码的助记符，")]),t._v(" "),a("p",[t._v("获取参数: "),a("code",[t._v("(str)idc.print_operand((int)ea, (int)n)")]),t._v(", 返回地址对应的反编译代码的参数， 其中参数"),a("code",[t._v("(n) + 1")]),t._v("代表第几个参数，")]),t._v(" "),a("blockquote",[a("p",[t._v("如"),a("code",[t._v("print_operand(ea, 0)")]),t._v("会返回第一个参数")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ea "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" here"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("generate_disasm_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print_insn_mnem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print_operand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print_operand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\nmov     eax, [rbp+var_4]\nmov\neax\n[rbp+var_4]\n'''")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h2",{attrs:{id:"段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#段"}},[t._v("#")]),t._v(" 段")]),t._v(" "),a("p",[t._v("获取地址所在段的段名， "),a("code",[t._v("(str)idc.get_segm_name((int)ea)")]),t._v("，")]),t._v(" "),a("p",[t._v("获取地址所在段起始地址："),a("code",[t._v("(int)idc.get_segm_start((int)ea)")])]),t._v(" "),a("p",[t._v("获取地址所在段的结束地址：")]),t._v(" "),a("p",[a("code",[t._v("(int)idc.get_segm_end((int)ea)")])]),t._v(" "),a("p",[t._v("获取所有的段首地址： "),a("code",[t._v("(generator)idautils.Segments()")])]),t._v(" "),a("blockquote",[a("p",[t._v("此函数没有参数，返回一个所有段起始地址的迭代器， 我们可以通过for循环遍历他")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" idautils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Segments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s:\\t0x%x\\t0x%x"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          idc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_segm_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n          idc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_segm_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n          idc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_segm_end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n...\n.fini:\t0x400b74\t0x400b7d\nLOAD:\t0x400b7d\t0x400b80\n.rodata:\t0x400b80\t0x400c1f\nLOAD:\t0x400c1f\t0x400c20\n.eh_frame_hdr:\t0x400c20\t0x400c84\nLOAD:\t0x400c84\t0x400c88\n.eh_frame:\t0x400c88\t0x400e28\n.init_array:\t0x601e10\t0x601e18\n....\n'''")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),a("h3",{attrs:{id:"常规"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常规"}},[t._v("#")]),t._v(" 常规")]),t._v(" "),a("p",[t._v("获取函数名："),a("code",[t._v("(str)idc.get_func_name((int)ea)")])]),t._v(" "),a("p",[t._v("获取所有函数的首地址:"),a("code",[t._v("(generator)idautils.Functions((int)start_addr, (int)end_addr)")])]),t._v(" "),a("blockquote",[a("p",[t._v("该函数具有两个参数，表示在一个地址区间内的所有函数。")]),t._v(" "),a("p",[t._v("如果没有参数，则默认位从头到尾")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" idautils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Functions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x%x\\t%s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        idc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_func_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n...\n0x602130\tread\n0x602138\t__libc_start_main\n0x602140\tmalloc\n0x602148\tsetvbuf\n0x602150\tatoi\n0x602158\texit\n...\n'''")]),t._v("\n    \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h3",{attrs:{id:"func-t对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#func-t对象"}},[t._v("#")]),t._v(" "),a("code",[t._v("func_t")]),t._v("对象")]),t._v(" "),a("p",[t._v("通过函数"),a("code",[t._v("(ida_funcs.func_t)idaapi.get_func((int)ea)")]),t._v("会返回一个"),a("code",[t._v("ida_funcs.func_t")]),t._v("对象， 他拥有许多的特性， 定义在"),a("code",[t._v("ida_funcs.py")]),t._v("中，主要使用的应该是"),a("code",[t._v("start_ea")]),t._v("和"),a("code",[t._v("end_ea")]),t._v("，")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("func "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" idaapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x%x--0x%x"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start_ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("end_ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"func-attr-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#func-attr-属性"}},[t._v("#")]),t._v(" "),a("code",[t._v("func_attr")]),t._v(" 属性")]),t._v(" "),a("p",[t._v("可以通过"),a("code",[t._v("(int)idc.get_func_attr((int)ea, FUNCATTR_FLAG)")]),t._v(", 获取对应的属性，")]),t._v(" "),a("p",[t._v("其中返回对应函数的属性，可以通过"),a("code",[t._v("flag & FUNC_NORET")]),t._v(" 判断，")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"关于数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于数据"}},[t._v("#")]),t._v(" 关于数据")]),t._v(" "),a("h3",{attrs:{id:"获取数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取数据"}},[t._v("#")]),t._v(" 获取数据")]),t._v(" "),a("p",[t._v("对于程序内的地址可以直接引用， 然后获取其数据需要以对应的数据类型获取数据，如： "),a("code",[t._v("Byte(ea)")]),t._v("， "),a("code",[t._v("Dword(ea)")]),t._v("，")]),t._v(" "),a("p",[t._v("获取数据的脚本大致如下：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xaaaa")]),t._v("\narr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Byte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"设置数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置数据"}},[t._v("#")]),t._v(" 设置数据")]),t._v(" "),a("p",[t._v("设置数据类型，使用"),a("code",[t._v("MakeQword(addr)")]),t._v(", "),a("code",[t._v("MakeDword(addr)")]),t._v("， 将对应地址设置为所需要的类型，")]),t._v(" "),a("h3",{attrs:{id:"修改数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改数据"}},[t._v("#")]),t._v(" 修改数据")]),t._v(" "),a("p",[t._v("ida python 中提供对应的函数为："),a("code",[t._v("PatchByte(addr, byte)")]),t._v("会将地址addr中的数据替换为byte， 注意参数12分别为地址和数据，")]),t._v(" "),a("p",[t._v("一般常用在自解密的文件，我们使用ida python脚本可以自己解密出来正确的数据，")]),t._v(" "),a("blockquote",[a("p",[t._v("自解密的话我们也要对应的原本的数值，注意在程序内的取地址内数值用"),a("code",[t._v("Byte(addr)")]),t._v("，下面简单演示一个异或的情况的自解密。")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xaaaa")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    PatchByte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Byte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"字符串相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串相关"}},[t._v("#")]),t._v(" 字符串相关")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("GetStr(addr)")]),t._v("获取一个从指定位置开始的c语言风格字符串(以'\\x00'结尾的)， 也可以使用"),a("code",[t._v("MakeStr(start_addr, end_addr)")]),t._v("设置指定长度的字符串，")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("warning")]),t._v(" "),a("p",[t._v("在ida 7.0中"),a("a",{attrs:{href:"https://bbs.pediy.com/thread-229574.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("MakeStr会报错"),a("OutboundLink")],1),t._v("， 问题在于目录 ida/python 中python的api转接到idc的位置出现参数错误，修改如下：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /ida/python/idc_bc695.py")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 原")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MakeStr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" create_strlit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ida_idaapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BADADDR "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" endea"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MakeStr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" create_strlit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("h3",{attrs:{id:"设置注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置注释"}},[t._v("#")]),t._v(" 设置注释")]),t._v(" "),a("p",[a("code",[t._v("MakeComm(addr, dec)")])]),t._v(" "),a("h3",{attrs:{id:"dump-程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dump-程序"}},[t._v("#")]),t._v(" dump 程序")]),t._v(" "),a("p",[t._v("ida并没有直接提供dump的功能， 我们可以通过脚本实现，")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" idaapi\n\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" idaapi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dbg_read_memory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/dump'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"宏观结构和相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏观结构和相关操作"}},[t._v("#")]),t._v(" 宏观结构和相关操作")]),t._v(" "),a("h3",{attrs:{id:"符号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#符号"}},[t._v("#")]),t._v(" 符号")]),t._v(" "),a("p",[t._v("符号，命名称为Name， 使用"),a("code",[t._v("Names()")]),t._v("可以获得相对应的所有位置的命名，\n"),a("code",[t._v("MakeName(addr, dec)")]),t._v("可以定名符号，")]),t._v(" "),a("p",[t._v("在设置命名时， ida中有一定的规则， 我们一般需要洗掉一些不能非法字符：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("STRIP_CHARS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'('")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("')'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'['")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("']'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nREPLACE_CHARS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("';'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\xb7'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clean_function_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in_str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Kill generic 'bad' characters")]),t._v("\n    s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" in_str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("printable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" c\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" STRIP_CHARS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" REPLACE_CHARS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h2",{attrs:{id:"动态调试相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态调试相关"}},[t._v("#")]),t._v(" 动态调试相关")]),t._v(" "),a("p",[t._v("然后在动调主要使用到的函数：")]),t._v(" "),a("p",[a("code",[t._v("AddBpt(long Address)")]),t._v(":　在指定的地址设置断点")]),t._v(" "),a("p",[a("code",[t._v("GetRegValue(string Register)")]),t._v("：获取一个寄存器的名称")]),t._v(" "),a("p",[a("code",[t._v("SetRegValue(long Value, string Register)")]),t._v("设置寄存器的值")]),t._v(" "),a("p",[a("code",[t._v("RunTo(long Address)")]),t._v("： 运行到指定的地址，然后停下。")]),t._v(" "),a("p",[a("code",[t._v("GetDebuggerEvnt(WFNE_SUSP, -1)")]),t._v("：应该是获取调试某一过程中信息，一般就在"),a("code",[t._v("RunTo()")]),t._v("后和操作寄存器前使用，"),a("a",{attrs:{href:"https://reverseengineering.stackexchange.com/questions/11601/how-can-i-step-through-instructions-in-ida-and-know-the-current-eip",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决脚本和调试异步而导致的寄存器读取报错的问题"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("一般使用的：")]),t._v(" "),a("ul",[a("li",[t._v("用于程序运行， 获取相关位置，设定相关寄存器。")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("RunTo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGetDebuggerEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WFNE_SUSP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nSetRegValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\nxxx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GetRegValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("获取栈内数据：")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("RunTo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGetDebuggerEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WFNE_SUSP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GetRegValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这样，运行到某个位置，获取esp/rsp的值，为栈顶，通过偏移可以获取相对应的栈内地址，然后使用"),a("code",[t._v("Byte()")]),t._v("/ "),a("code",[t._v("Dword()")]),t._v("来获取相关数据，如果需要的话我们还可以通过"),a("code",[t._v("PatchByte(long Addr, byte)")]),t._v("来进行数据的修改，")]),t._v(" "),a("ul",[a("li",[t._v("程序多次运行")])]),t._v(" "),a("p",[t._v("idapyhton似乎是不可以多次重复调动调试，但是我们可以通过修改eip/rip来让其重复运行一段位置，一般进行爆破。")]),t._v(" "),a("p",[t._v("这个时候要注意的是修改eip/rip回跳的位置，要慎重选择。")]),t._v(" "),a("h2",{attrs:{id:"插件制作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件制作"}},[t._v("#")]),t._v(" 插件制作")]),t._v(" "),a("p",[t._v("一些ida插件的技巧。")]),t._v(" "),a("h3",{attrs:{id:"golang-rev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-rev"}},[t._v("#")]),t._v(" golang_rev")]),t._v(" "),a("p",[t._v("目前仿造lazy_ida写的一个插件，用于在golang逆向中快速恢复符号，设置字符串，已经ok："),a("a",{attrs:{href:"https://github.com/wlingze/golang_rev",target:"_blank",rel:"noopener noreferrer"}},[t._v("golang_rev"),a("OutboundLink")],1),t._v(",")])])}),[],!1,null,null,null);s.default=e.exports}}]);