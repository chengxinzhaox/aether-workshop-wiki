---
title: FAQ
description: Aether Workshop 常见问题。
---

## 通用

**Aether Workshop 是什么？**  
它是一个 macOS 可视化硬件工作区，用节点、组件、Capsule、生成代码、上传工具、AI 和云仓库搭建 Arduino 兼容硬件项目。

**适合谁使用？**  
适合 maker、教师、学生、原型开发者，以及维护硬件组件库的进阶用户。

**可以离线工作吗？**  
可以。本地项目在依赖和开发板平台安装后可离线工作。AI、云登录、云同步和新依赖下载需要网络。

## 项目

**`.aew` 是什么？**  
它是一个项目包目录，包含项目配置、生成 sketch、可选库、媒体、AI 附件、评论、Pin、Change Log 和 History。

**项目协作是实时的吗？**  
不是。评论、Pin、Change Log 和 History 随项目文件保存。

## 组件和 Capsule

**组件和 Capsule 有什么区别？**  
组件定义硬件和生成代码；Capsule 把一组图封装成可复用节点。

**能编辑内置组件吗？**  
部分内置组件锁定。需要变体时请复制逻辑创建自定义组件。

**旧组件版本能直接编辑吗？**  
旧 checkout 是只读的。可以从快照创建新组件，或在当前最新版本上提交新版本。

## AI

**AI 会自动改项目吗？**  
Project AI 会暂存图修改，由用户选择 Keep 或 Discard。

**AI key 存在哪里？**  
AI provider key 存在本地设置；云 token 存在 Keychain。

## 云端

**Viewer 能 push 吗？**  
不能。Viewer 可以查看和 pull；Owner 和 Editor 可以 push。

**删除或离开云仓库会删除本地库吗？**  
不会。本地副本会保留。

## 硬件

**可以用非 Aether 开发板吗？**  
可以，只要配置对应开发板和 Arduino platform。

**macOS 上选 `/dev/cu.*` 还是 `/dev/tty.*`？**  
通常优先选择 `/dev/cu.*`。
