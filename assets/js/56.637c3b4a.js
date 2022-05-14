(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{503:function(s,t,a){"use strict";a.r(t);var n=a(31),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"对upx壳的一次较深入探究"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对upx壳的一次较深入探究"}},[s._v("#")]),s._v(" 对upx壳的一次较深入探究")]),s._v(" "),a("blockquote",[a("p",[s._v("最开始的起因是一个攻防世界的题目，这个题目使用的upx加壳，题目为easyre-150。")]),s._v(" "),a("p",[s._v("攻防世界题号会变化也就不给链接了，进阶区前三页内，还是比较好找。")]),s._v(" "),a("p",[s._v("如果直接upx脱壳的话，题目基本没有啥难度，但是在题目做完以后我去翻看这个原本加壳后的文件发现很有趣。")]),s._v(" "),a("p",[s._v("于是便去简单的了解了一下。")])]),s._v(" "),a("p",[s._v("@[toc]")]),s._v(" "),a("h1",{attrs:{id:"easy-re-154"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#easy-re-154"}},[s._v("#")]),s._v(" easy-re-154")]),s._v(" "),a("h2",{attrs:{id:"直接脱壳的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接脱壳的方法"}},[s._v("#")]),s._v(" 直接脱壳的方法")]),s._v(" "),a("p",[s._v("首先直接看到文件die查壳查到是upx_easyre150的壳，")]),s._v(" "),a("p",[s._v("然后直接脱壳，看到文件：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319143525201.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}}),s._v("\n在动调的时候我们可以轻松改变，走向got  key的位置，")]),s._v(" "),a("p",[s._v("然后会进入函数lol，　\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319143536485.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("大概十个这样子，注意判定跳转前的两句：")]),s._v(" "),a("div",{staticClass:"language-assembly line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".text:080486B0                 mov     [ebp+var_C], 0\n.text:080486B7                 cmp     [ebp+var_C], 1\n.text:080486BB                 jnz     short loc_80486D3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这个其实永远不会进入到另一侧的语句运行，我们动调的时候改动下，　就可以看到ｆｌａｇ，")]),s._v(" "),a("p",[s._v("当然，很坑的格式：要套上RCTF{}，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319143547461.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("就是一个很简单的题目，")]),s._v(" "),a("p",[s._v("下面我们去考虑下手动脱壳的方法？")]),s._v(" "),a("h2",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点：")]),s._v(" "),a("blockquote",[a("p",[s._v("在此之前，我们先写一下这一部分出现的知识点：")])]),s._v(" "),a("h3",{attrs:{id:"proc文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proc文件"}},[s._v("#")]),s._v(" proc文件")]),s._v(" "),a("p",[s._v("linux 下的proc文件体系实际上并不是文件，而是我们在运行中的进程，每个进程都会产生一个由其运行的pid为文件名的文件， 其中，"),a("code",[s._v("/proc/[pid]/")]),s._v("目录下的文件：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("cwd :")]),s._v(" "),a("p",[s._v("这是一个符号链接，指向这个进程的运行目录。")])]),s._v(" "),a("li",[a("p",[s._v("exe :")]),s._v(" "),a("p",[s._v("这也是个软链接， 指向这个进程对应的可执行文件。")])]),s._v(" "),a("li",[a("p",[s._v("fd ：")]),s._v(" "),a("p",[s._v("这是一个目录，里面包含进程打开的文件的文件描述符，并且这些描述符都是软链接，指向实际文件。")])]),s._v(" "),a("li",[a("p",[s._v("maps：")]),s._v(" "),a("p",[s._v("这个文件包含当前进程在虚拟内存中的空间分布已经对应的地址，访问权限。")])])]),s._v(" "),a("h3",{attrs:{id:"syscall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syscall"}},[s._v("#")]),s._v(" syscall")]),s._v(" "),a("blockquote",[a("p",[s._v("主要写一下里面出现的系统调用作用和调用号")]),s._v(" "),a("p",[s._v("32位 linux 程序系统调用  "),a("code",[s._v("int 80")])])]),s._v(" "),a("ul",[a("li",[s._v("sys_open:  "),a("code",[s._v("eax=5")]),s._v("， 打开文件， 并返回一个该文件的文件描述符。")]),s._v(" "),a("li",[s._v("sys_lseek:  "),a("code",[s._v("eax=19")]),s._v("， 返回文件读写指针距离文件开头的字节大小。")]),s._v(" "),a("li",[s._v("sys_unlink: "),a("code",[s._v("eax=10")]),s._v("， 删除文件链接的意思， 大体就是删除我们open的文件吧，")]),s._v(" "),a("li",[s._v("sys_ftruncate："),a("code",[s._v("eax=93")]),s._v("， 将文件截断，")]),s._v(" "),a("li",[s._v("sys_execve："),a("code",[s._v("eax=11")]),s._v("，加载和启动新的程序")]),s._v(" "),a("li",[s._v("sys_munmap: "),a("code",[s._v("eax=91")]),s._v("， 映射内存")])]),s._v(" "),a("h2",{attrs:{id:"动调-手动处理壳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动调-手动处理壳"}},[s._v("#")]),s._v(" 动调，手动处理壳：")]),s._v(" "),a("blockquote",[a("p",[s._v("那么就开始处理：")])]),s._v(" "),a("p",[s._v("进入ida看到其实函数极少， 动调以后大致可以了解他们的内容， 这里简单进行了一下命名：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319143621125.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"start函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start函数"}},[s._v("#")]),s._v(" start函数：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319143612566.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}}),s._v("\n这里就是函数入口处了，看起来没啥好看的，动调以后也会发现其实就没啥，进入main函数：")]),s._v(" "),a("h3",{attrs:{id:"main"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main"}},[s._v("#")]),s._v(" main：")]),s._v(" "),a("p",[s._v("main函数比较大，主要分成几个部分：")]),s._v(" "),a("h4",{attrs:{id:"open-proc-pid-exe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-proc-pid-exe"}},[s._v("#")]),s._v(" open  '/proc/[pid]/exe'")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319143631656.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("首先是获取pid， 然后组成一个"),a("code",[s._v('"/proc/[pid]/exe"')]),s._v("的一个字符串，打开这个文件，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145442653.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("我们上述提到过，这个地址对应是一个链接，指向这个程序自身的绝对地址，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145455705.png",alt:""}})]),s._v(" "),a("p",[s._v("简单点说就是打开自己这个程序本身。")]),s._v(" "),a("blockquote",[a("p",[s._v("同样我们也可以在 "),a("code",[s._v("/proc/[pid]/fd/")]),s._v("中看到")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145505734.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"open-aaaaaaaacdmvjo1a4nh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-aaaaaaaacdmvjo1a4nh"}},[s._v("#")]),s._v(' open "AAAAAAAACDMVJO1A4NH"')]),s._v(" "),a("p",[s._v("后面的位置主要在两个循环中，处理了一个字符串：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145517362.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145527638.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v('将其处理为："AAAAAAAACDMVJO1A4NH"')]),s._v(" "),a("p",[s._v("然后打开这个名字的文件，我们可以在"),a("code",[s._v("/proc/[pid]/fd/")]),s._v("中看到：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145536992.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("blockquote",[a("p",[s._v("注意两个文件的权限，")]),s._v(" "),a("p",[s._v("程序自身为r-x， 而新建的文件为-wx")])]),s._v(" "),a("p",[s._v("但是我们同样也可以查到，这个是程序自身新建的一个文件，其内容为空：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145546368.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("blockquote",[a("p",[s._v("同时注意右上角时间标志，刚刚建立的文件，")])]),s._v(" "),a("blockquote",[a("p",[s._v("以下使用elf代表文件本身，然后file代表这个新建立的文件")])]),s._v(" "),a("h4",{attrs:{id:"reada"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reada"}},[s._v("#")]),s._v(" reada")]),s._v(" "),a("p",[s._v("程序内的一个函数，主要作用就是讲fd 的len个长度的内容写入到addr中，该是比较好理解，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145558173.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[s._v("#")]),s._v(" loader")]),s._v(" "),a("p",[s._v("在其后进入一个循环，这里除了一下系统调用以外主要是高亮起来的一个较复杂的函数，不出所料应该就是upx  loader")]),s._v(" "),a("p",[s._v("大致如下：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145612149.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("先是efl文件复制到一块地址空间，然后从这个addr进入loader去解压缩，最后写入到file中，"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145622346.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("我们查看：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145640133.png",alt:""}})]),s._v(" "),a("p",[s._v("同样注意时间，这个是刚刚运行完write后写入的，")]),s._v(" "),a("h4",{attrs:{id:"execve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execve"}},[s._v("#")]),s._v(" execve")]),s._v(" "),a("p",[s._v("应该是运行一次循环，然后就会跳出了， 进入判定，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145921517.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("if语句中需要我们注意的是sys_execve函数，改变了运行的程序，")]),s._v(" "),a("p",[s._v("动调的时候会有问题：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145650294.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v('这个if语句是进不去的， 要验证的是"!   "， 而实际运行后的位置是"UPX!"， 这个是UPX压缩的标志， 我们直接去手动该下，让他进入if语句中运行：')]),s._v(" "),a("p",[s._v("if语句中，先是关闭两个文件，然后又打开了file文件的读取，如下示：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145712302.png",alt:""}})]),s._v(" "),a("blockquote",[a("p",[s._v("但是这次是r-x权限了")])]),s._v(" "),a("p",[s._v("然后复制了一段数据，使用sys_unlink，")]),s._v(" "),a("blockquote",[a("p",[s._v("这里我们要知道，unlink不会直接关闭一个文件， 会先检查下文件是否还在读写，当这个文件不进行读写的时候，再将其关闭，")])]),s._v(" "),a("p",[s._v("于是我们的fd文件夹：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145726223.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("然后执行"),a("code",[s._v("sys_execve")]),s._v("，")]),s._v(" "),a("p",[s._v("注意这里的参数已经改为了：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145736696.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}}),s._v("\n即，把切换运行的elf文件为我们的file文件，")]),s._v(" "),a("p",[s._v("然后我们执行：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020031914574584.png",alt:""}})]),s._v(" "),a("p",[s._v("并且可以看到我们的动调的位置：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145755869.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}}),s._v("\n已经是在运行我们的脱壳后的文件了。")]),s._v(" "),a("p",[s._v("接下来就是直接去查看那个AAAA..的文件，然后会发现和我们脱壳完了以后的文件是一致的。")]),s._v(" "),a("h1",{attrs:{id:"关于查壳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于查壳"}},[s._v("#")]),s._v(" 关于查壳")]),s._v(" "),a("blockquote",[a("p",[s._v("由于第二种方式的脱壳并不是我们常见的upx脱壳方式，我也觉得很是怪异，于是去进一步的看了一下upx，")]),s._v(" "),a("p",[s._v("包括以下：")]),s._v(" "),a("p",[s._v("die是如何查到upx的壳的？")]),s._v(" "),a("p",[s._v("一个正常的以前手动脱的壳应该是啥样？")]),s._v(" "),a("p",[s._v("upx加壳，这个加载器loader，是如何产生出来的？")])]),s._v(" "),a("h2",{attrs:{id:"die查壳的脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#die查壳的脚本"}},[s._v("#")]),s._v(" die查壳的脚本")]),s._v(" "),a("p",[s._v("从die中找到的upx那个查壳的脚本：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// DIE's signature file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UPX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nfunction "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUPXOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    var nMethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readByte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nOffset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    var nLevel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("readByte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nOffset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    var sCompression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nMethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// From http://sourceforge.net/p/upx/code/ci/default/tree/src/conf.h")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" sCompression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NRV"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" sCompression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LZMA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" sCompression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zlib"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sCompression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sCompression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nLevel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            sOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"best"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            sOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"brute"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nfunction "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("detect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bShowType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bShowVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bShowOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    var nSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"'UPX!'\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUPXOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        bDetected"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compareEP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"E8........EB0E5A585997608A542420E9........60"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.X"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        bDetected"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    var nOffset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$Id: UPX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nOffset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        sVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ELF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nOffset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        bDetected"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bShowType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bShowVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bShowOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br")])]),a("blockquote",[a("p",[s._v("一个"),a("code",[s._v(".sq")]),s._v("后缀的文件，我也没怎么查到是要用啥语法高亮， 看着非常像c， 就用了c的高亮吧")]),s._v(" "),a("p",[s._v("啧， 括号分行写， 我觉得是c")])]),s._v(" "),a("p",[s._v('然后看起来像是，用了个查找字符串 找那个"UPX"标志，然后还有个一大堆的， 但是"e8" ，应该是call的字节码吧，中间省略，后面估计也是字节码，应该是是为了查那个loader，')]),s._v(" "),a("p",[s._v('然后拿出010， 把这个题目文件的"UPX!"标志给去掉，')]),s._v(" "),a("p",[s._v("然后die查壳：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145809772.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("没有查出来UPX了，")]),s._v(" "),a("p",[s._v("成功，那么这样的话， 题目就必须动调，而且还看不出来有壳， 难度就上升很多很多。")]),s._v(" "),a("h2",{attrs:{id:"标准的一个upx加壳程序的-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准的一个upx加壳程序的-loader"}},[s._v("#")]),s._v(" 标准的一个upx加壳程序的 loader")]),s._v(" "),a("p",[s._v("另外我们看一下一个标准使用upx的程序应该有的loader，")]),s._v(" "),a("p",[s._v("我们随手拿来一个简单的文件进行加壳：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020031914582586.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("然后看一下：")]),s._v(" "),a("p",[s._v("如果我们多看几个应该是差不多的结构，都是这些东西，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145836264.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("说明， 这个loader是一个固定生成的， 只是call指令会有偏移，会重新计算，")]),s._v(" "),a("p",[s._v('这个时候，我们继续去使用010 将其中的"UPX!" 标志去除掉。')]),s._v(" "),a("p",[s._v('载入die，　发现仍然可以判断出来是upx, 　估计是前面我们看到分析中间另一部分的那些"e8"之类的，的确是在查找loader，')]),s._v(" "),a("p",[s._v("这也证明了我们这个题目并不是标准的一个upx直接进行压缩的，估计应该是出题人自己写的，")]),s._v(" "),a("p",[s._v("另外那个我们动调中间判断失败也是由于出现upx标志，可能题目原本应该是没有这个标志的，应该是被改过吧，")]),s._v(" "),a("h2",{attrs:{id:"简略翻看源码-loader的位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简略翻看源码-loader的位置"}},[s._v("#")]),s._v(" 简略翻看源码  loader的位置")]),s._v(" "),a("p",[s._v("另外upx是一个开源工具，在github我们可以找到他的源码，")]),s._v(" "),a("p",[s._v("另外17年2月有篇文章："),a("a",{attrs:{href:"https://bbs.ichunqiu.com/thread-19345-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("i春秋-Tangerine-upx源码分析"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("大佬简单讲述了整个流程和最后产生loader的位置，")]),s._v(" "),a("p",[s._v("里面的一部分位置和现在的版本有些许差别，但是整体流程都是一致的，感兴趣的朋友可以看看。\n目前我只是跟着这个文章的思路捋了一遍整个的流程，等下一步继续分析再写相关的文章吧。")]),s._v(" "),a("p",[s._v("主要的loader已经预设好在文件"),a("code",[s._v("upx/src/stub/amd64-linux.elf-entry.h")]),s._v("中，\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200319145847200.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("然后除了对于call指令进行矫正之类的， opcode和这里的数据基本一致，这里就不再赘述，")]),s._v(" "),a("h1",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),a("p",[s._v("其实仔细的调试了下这个题目了解到了不少和linux内的一些东西，\n且最后也发现了这个题目的前面的加载部分，应该是一个作者自己写的， 如果我们讲其中的upx标志去掉，还是一个比较有难度的题目，\n而且我们也可以使用这样的框架，讲其中的loader函数部修改，实现另外一种加壳， 自己做出来一个稍微比较有难度的题目。")])])}),[],!1,null,null,null);t.default=e.exports}}]);