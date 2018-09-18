# mumu1
用的是vue+mongo前后端分离，包括后台管理使用element-ui
 - 前端是基于webpack打包工具，vue-cli初始化的
   前端写的是单页面
   字体库用到的是iconfont
 - 后端用的主要框架是koa、koa-router

 -----
 ### 书写过程中遇到的问题，仅供交流
 1. 使用的是vue-element-admin的基础template，名为“vue-admin-template”,此项目用的webpack4.x，在引入less的写法时，可以由于npm安装包一直失败，导致耽误了一大段时间。(最终使用了自带的scss，哪位朋友如果可以引入的话可以给小弟讲解一下)
  > 早先以为后台项目用的是sass，然后各种引用都报错，随后发现用的是scss，至于区别，自行百度吧!
