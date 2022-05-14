(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{496:function(s,t,a){"use strict";a.r(t);var e=a(31),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"shellcode-seccomp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shellcode-seccomp"}},[s._v("#")]),s._v(" shellcode & seccomp")]),s._v(" "),a("p",[s._v("简单整理下shellcode类型的题目")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#shellcode原理"}},[s._v("shellcode原理")])]),a("li",[a("a",{attrs:{href:"#shellcode使用场景"}},[s._v("shellcode使用场景")])]),a("li",[a("a",{attrs:{href:"#对shellcode本身无限制"}},[s._v("对shellcode本身无限制")])]),a("li",[a("a",{attrs:{href:"#限制shellcode-可打印"}},[s._v("限制shellcode 可打印")])]),a("li",[a("a",{attrs:{href:"#限制shellcode长度"}},[s._v("限制shellcode长度")])]),a("li",[a("a",{attrs:{href:"#限制shellcode长度和可打印"}},[s._v("限制shellcode长度和可打印")])]),a("li",[a("a",{attrs:{href:"#orw"}},[s._v("orw")])]),a("li",[a("a",{attrs:{href:"#orw不够"}},[s._v("orw不够")])]),a("li",[a("a",{attrs:{href:"#没有wirte"}},[s._v("没有wirte")])]),a("li",[a("a",{attrs:{href:"#lseek系统调用"}},[s._v("lseek系统调用")])]),a("li",[a("a",{attrs:{href:"#混合shellcode-x86-64-and-arm64v8"}},[s._v("混合shellcode: x86-64 and arm64v8.")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"shellcode原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shellcode原理"}},[s._v("#")]),s._v(" shellcode原理")]),s._v(" "),a("p",[s._v("shellcode 本意是指 一段字节码, 输入以后程序会运行这段代码,  达到getshell的目的,")]),s._v(" "),a("p",[s._v("ctf pwn题中我们的目的是读取flag,")]),s._v(" "),a("p",[s._v("使用shellcode的话也分为两种情况,")]),s._v(" "),a("ul",[a("li",[s._v("getshell")]),s._v(" "),a("li",[s._v("使用open read write (orw)")])]),s._v(" "),a("p",[s._v("其实两者的原理是一致的, 都是通过系统调用实现对应功能,")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://syscalls.w3challs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("系统调用表"),a("OutboundLink")],1),s._v(",  常用的是 "),a("a",{attrs:{href:"https://syscalls.w3challs.com/?arch=x86",target:"_blank",rel:"noopener noreferrer"}},[s._v("x86"),a("OutboundLink")],1),s._v("和"),a("a",{attrs:{href:"https://syscalls.w3challs.com/?arch=x86_64",target:"_blank",rel:"noopener noreferrer"}},[s._v("x86-64"),a("OutboundLink")],1),s._v("的,")]),s._v(" "),a("h2",{attrs:{id:"shellcode使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shellcode使用场景"}},[s._v("#")]),s._v(" shellcode使用场景")]),s._v(" "),a("p",[s._v("重要的其实就是, 要能有个可写可执行的地址, 另该我们可以运行到这个地址去执行我们的输入, 就可以使用shellcode,")]),s._v(" "),a("p",[s._v("对于栈题目来说,一般都是使用rop, 堆题目一般通过控制hook位来getshell, 但是开启沙箱使用orw的使用一般会考虑shellcode/srop,")]),s._v(" "),a("p",[s._v("另外一些就是比较明显的考察shellcode编写的题目, 一般这种也会对shellcode本身增加各种限制,  或者使用沙盒对系统调用进行限制.")]),s._v(" "),a("h2",{attrs:{id:"对shellcode本身无限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对shellcode本身无限制"}},[s._v("#")]),s._v(" 对shellcode本身无限制")]),s._v(" "),a("p",[s._v("就普通的getshell或者orw,")]),s._v(" "),a("p",[s._v("其实可以直接使用"),a("a",{attrs:{href:"https://docs.pwntools.com/en/stable/shellcraft.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("pwntools的shellcraft"),a("OutboundLink")],1),s._v(", 或者生成以后自己修改下,")]),s._v(" "),a("p",[s._v("使用pwntools中的asm函数, 将汇编shellcode编译,  输出为bytes类型,")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"amd64"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里要指定, 不然asm默认使用i386, 编译会报错, ")]),s._v("\nasm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mov rax, 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这个shellcraft工具, 使用比较多的是以下几个,")]),s._v(" "),a("blockquote",[a("p",[s._v("其实要指定对应的构架, 这里用amd64代替,")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pwn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# execve(path='/bin///sh', argv=['sh'], envp=0)")]),s._v("\nshellcraft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# getshell ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# open(file='flag', oflag=0, mode=0)")]),s._v("\nshellcraft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"flag"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# read(fd, buf, count)")]),s._v("\nshellcraft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("buffer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rsp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# write(fd, buf, count)")]),s._v("\nshellcraft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("buffer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rsp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h1",{attrs:{id:"对shellcode本身的限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对shellcode本身的限制"}},[s._v("#")]),s._v(" 对shellcode本身的限制")]),s._v(" "),a("h2",{attrs:{id:"限制shellcode-可打印"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制shellcode-可打印"}},[s._v("#")]),s._v(" 限制shellcode 可打印")]),s._v(" "),a("p",[s._v("可能存在 可打印, 不允许符号, 仅字母等几种情况,  这里我们不进行分类, 简单介绍几种处理手段,")]),s._v(" "),a("p",[s._v("pwntools中内置一个加密shellcode的工具,  "),a("a",{attrs:{href:"https://docs.pwntools.com/en/stable/encoders.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("pwntools encoders"),a("OutboundLink")],1),s._v(",  但是这个工具使用起来,  效果比较一般, 另一个是"),a("a",{attrs:{href:"https://github.com/rcx/shellcode_encoder",target:"_blank",rel:"noopener noreferrer"}},[s._v("shellcode_encode"),a("OutboundLink")],1),s._v(" , 可打印, 但是不能仅字母,")]),s._v(" "),a("p",[s._v("推荐一下两个工具:")]),s._v(" "),a("p",[s._v("一个是"),a("a",{attrs:{href:"https://github.com/veritas501/ae64",target:"_blank",rel:"noopener noreferrer"}},[s._v("ae64"),a("OutboundLink")],1),s._v(",  可以比较灵活的控制寄存器, 但是shellcode长度长一些,  另一个是"),a("a",{attrs:{href:"https://github.com/SkyLined/alpha3",target:"_blank",rel:"noopener noreferrer"}},[s._v("alpha3"),a("OutboundLink")],1),s._v(",  这里建议直接使用"),a("a",{attrs:{href:"https://github.com/TaQini/alpha3",target:"_blank",rel:"noopener noreferrer"}},[s._v("taqini师傅修改编译好的alpha3"),a("OutboundLink")],1),s._v(",")]),s._v(" "),a("p",[s._v("使用:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("python ./ALPHA3.py x64 ascii mixedcase rax --input"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shellcode"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者直接使用写好的脚本:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./shellcode_x64.sh rax\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中指定rax为shellcode基址, 然后同目录下的"),a("code",[s._v("shellcode")]),s._v("文件保存shellcode字节流,")]),s._v(" "),a("p",[s._v("我们使用pwntools生成:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("python sc.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" shellcode\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("脚本内:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pwn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \ncontext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'amd64'")]),s._v("\nsc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" shellcraft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("asm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/08/25/eoUfxcL231snjir.png",alt:"image-20210825122252264"}})]),s._v(" "),a("h2",{attrs:{id:"限制shellcode长度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制shellcode长度"}},[s._v("#")]),s._v(" 限制shellcode长度")]),s._v(" "),a("p",[s._v("一般需要观察运行到shellcode时的, 尽量不做改动,")]),s._v(" "),a("p",[s._v("有一下两种思路:")]),s._v(" "),a("ul",[a("li",[s._v("在限制内完成getshell, 需要比较精妙的构造,")]),s._v(" "),a("li",[s._v("构造shellcode拓展, 再构造一次读取和跳转,")])]),s._v(" "),a("h2",{attrs:{id:"限制shellcode长度和可打印"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制shellcode长度和可打印"}},[s._v("#")]),s._v(" 限制shellcode长度和可打印")]),s._v(" "),a("p",[s._v("一般这种需要手写shellcode, 使用工具生成的长度会不够")]),s._v(" "),a("p",[s._v("使用纯字符的汇编指令完成对shellcode的编写,")]),s._v(" "),a("p",[s._v("可以参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nets.ec/Alphanumeric_shellcode",target:"_blank",rel:"noopener noreferrer"}},[s._v("Alphanumeric shellcode"),a("OutboundLink")],1),s._v(",")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://web.archive.org/web/20110716082815/http://skypher.com/wiki/index.php?title=X86_alphanumeric_opcodes",target:"_blank",rel:"noopener noreferrer"}},[s._v("x86字符编码表"),a("OutboundLink")],1),s._v(",")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://web.archive.org/web/20110716082850/http://skypher.com/wiki/index.php?title=X64_alphanumeric_opcodes",target:"_blank",rel:"noopener noreferrer"}},[s._v("x64_64字符编码表"),a("OutboundLink")],1),s._v(",")])]),s._v(" "),a("h1",{attrs:{id:"seccomp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seccomp"}},[s._v("#")]),s._v(" seccomp")]),s._v(" "),a("p",[s._v("开启c沙盒的情况,  shellcode绕过沙箱的整理,")]),s._v(" "),a("p",[s._v("这里提一下seccomp的实现, 其实是内核层面过滤了对应的系统调用, 但是这个过滤指针对eax的值,")]),s._v(" "),a("h2",{attrs:{id:"orw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orw"}},[s._v("#")]),s._v(" orw")]),s._v(" "),a("p",[s._v("最常见的情况,  不能getshell, 但我们ctf是为了读取flag, 因此可以使用open read write 函数进行利用,")]),s._v(" "),a("p",[s._v("大概分为两种情况,")]),s._v(" "),a("ul",[a("li",[s._v("封了execve")]),s._v(" "),a("li",[s._v("只允许open read write")])]),s._v(" "),a("p",[s._v("第一种情况其实可以使用rop调用glibc中的open read write即可,")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这种其实使用简单的rop不用shellcode也可,")]),s._v(" "),a("p",[s._v("但是因为glibc中的open并不是调用open的系统掉用, 因此第二种情况只能使用系统调用(syscall/int 80)完成,")]),s._v(" "),a("p",[s._v("这里参考系统调用表:")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 64:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" rax  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rax"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rdi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rdx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" rax  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rax"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rdi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rdx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" rax  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rax"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rdi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rdx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 32:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" eax  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("eax"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ebx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ecx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" edx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" eax  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("eax"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ebx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ecx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" edx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" eax  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("eax"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ebx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ecx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" edx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("注意open的系统调用有三个参数, 有时候不成功就是因为参数没设置, 一般设置为0, 0, 即可,")]),s._v(" "),a("h2",{attrs:{id:"orw不够"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orw不够"}},[s._v("#")]),s._v(" orw不够")]),s._v(" "),a("p",[s._v("当题目没有提供完整的三个syscall的时候,")]),s._v(" "),a("p",[s._v("因为seccomp其实是检查系统调用时的rax的值,  而64 32位的系统调用表不同, 因此我们可以切换到32位来获得到另一些系统调用,  有可能就补齐了三个函数")]),s._v(" "),a("p",[s._v("使用32位模式的方案有两种,")]),s._v(" "),a("ul",[a("li",[s._v("retfq函数切换到32位模式,")]),s._v(" "),a("li",[s._v("syscall_number |= X32_SYSCALL_BIT (0x40000000)")])]),s._v(" "),a("h2",{attrs:{id:"没有wirte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有wirte"}},[s._v("#")]),s._v(" 没有wirte")]),s._v(" "),a("p",[s._v("如果使用了32位模式仍然不能得到write函数的话,")]),s._v(" "),a("p",[s._v("可以使用类似测信道的方式,  写入shellcode, 对读取进来的flag某一位检测, 使用"),a("code",[s._v("cmp")]),s._v("+"),a("code",[s._v("jz")]),s._v("的判断语句,  如果正确则死循环,")]),s._v(" "),a("p",[s._v("然后通过pwntools进行爆破, 得到flag,")]),s._v(" "),a("h2",{attrs:{id:"lseek系统调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lseek系统调用"}},[s._v("#")]),s._v(" lseek系统调用")]),s._v(" "),a("p",[s._v("这里是另一个思路,  利用父子进程的操作,")]),s._v(" "),a("p",[s._v("调用fork形成父子进程以后, 父进程再进行seccomp设置, 因此子进程不再沙盒内,  我们使用有限的系统调用向子进程内注入代码, 并利用子进程getshell,")]),s._v(" "),a("p",[s._v("googlectf 2020:  onlywrtie")]),s._v(" "),a("h1",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("h2",{attrs:{id:"混合shellcode-x86-64-and-arm64v8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合shellcode-x86-64-and-arm64v8"}},[s._v("#")]),s._v(" 混合shellcode: x86-64 and arm64v8.")]),s._v(" "),a("p",[s._v("googlectf2021: ABC ARM AND AMD")]),s._v(" "),a("p",[s._v("一段shellcode, 同时可以在arm64和x64下运行,")]),s._v(" "),a("h1",{attrs:{id:"相关题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关题目"}},[s._v("#")]),s._v(" 相关题目")]),s._v(" "),a("p",[s._v("nuaa2020_pwn6")]),s._v(" "),a("p",[s._v("qwb2021_shellcode")]),s._v(" "),a("p",[s._v("googlectf2020 writeonly")]),s._v(" "),a("p",[s._v("midnightsunctf2019 gissa2")]),s._v(" "),a("p",[s._v("googlectf2021 ABC ARM AND AMD")])])}),[],!1,null,null,null);t.default=n.exports}}]);