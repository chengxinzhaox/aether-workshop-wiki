---
title: 核心概念
description: 理解 Aether Workshop 中的项目、节点图、组件、Capsule、库、云仓库和历史。
---

## Project 项目

项目保存为 `.aew` 包，包含图、生成的 sketch、媒体、AI 附件、库数据、评论、Pin、Change Log 和 History 快照。

## Node Graph 节点图

Project 画布是一张有向图。`Start` 节点开始执行；逻辑节点描述控制流；Sense 节点读取输入；Act 节点输出动作；Capsule 节点在生成代码前展开为内部图。

## Sense 组件

Sense 组件读取数据，例如温度、湿度、光线、声音、气体、水位、压力、移动、距离、手势、随机值和串口输入。

## Act 组件

Act 组件执行输出动作，例如 LED ring、LED strip、RGB LED、激光、红外发射、蜂鸣器、电机、舵机、串口输出和 serial JSON。

## Component Definition 组件定义

组件定义保存名称、图标、颜色、类型、分类、引脚要求、兼容端口、生成代码、变量、依赖、UI 元素、备注和 AI Profile。组件 ID 建议使用小写 snake_case。

## Capsule

Capsule 是可复用图包，包含内部节点/边和暴露的输入/输出接口。项目中的 Capsule 节点可以传入参数，也可以保存项目级覆盖。

## Library 库

库是本地或云端作用域下的组件、Capsule、依赖、组件历史和 Capsule 历史集合，可导出为 `.aetherlib`。

## Cloud Library 云仓库

云仓库是和远端 package 关联的本地库。角色有 Owner、Editor、Viewer。Owner 和 Editor 可以 push，Viewer 只读。

## History 历史

历史分为几类：

- Component history：组件快照和私有源代码库。
- Capsule history：可复用图快照。
- Project history：由 Change Log 创建的项目快照。
- Cloud library history：云端 package 结构提交。

## AI Profile

AI Profile 帮助 Project AI 理解组件能力、限制和使用方式。Library AI 可以在创建或修改组件时生成该元数据。

## 相关链接

- [项目文件与历史](/zh/projects/files-history/)
- [组件和 Capsule 历史](/zh/cloud/history/)
- [组件库 AI](/zh/ai/library-ai/)
