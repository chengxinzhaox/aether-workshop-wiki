---
title: 快速开始
description: 创建第一个 Aether Workshop 项目，连接节点，配置硬件，验证并上传 Arduino 代码。
---

## 目标

本页带你完成一个最小闭环：新建项目、添加 Sense 输入、添加逻辑、添加 Act 输出、配置硬件端口、验证代码并上传到开发板。

## 开始前

- 已安装 Aether Workshop。
- 准备 Aether Hub、Arduino Uno、Mega 2560、ESP-32 或 ESP8266 等兼容开发板。
- 用 USB 连接开发板，并准备传感器和执行器。
- 第一次上传前，请先到[安装与配置](/zh/install-and-configure/)安装 Arduino CLI。

## 创建项目

1. 打开 Aether Workshop。
2. 在 **Home** 点击 **New Project**。
3. 按提示保存项目。Aether Workshop 会把项目保存为 `.aew` 包。
4. 进入 **Project** 标签页。

## 搭建图

1. 从画布上的 `Start` 节点开始。
2. 按 `Cmd+/` 打开快速搜索，或从节点连接点拖出打开 Node Picker。
3. 添加一个 Sense 组件，例如 **Light** 或 **Click**。
4. 添加逻辑节点，例如 `if`、`else if`、`else`、`switch`、`case`、`default`、`delay` 或 `function`。
5. 添加一个 Act 组件，例如 **RGB LED**、**Servo**、**Motor**、**Buzzer** 或 **LED Ring**。
6. 按执行顺序连接节点。

## 配置硬件

1. 选中每个 Sense 或 Act 节点。
2. 选择端口或手动引脚。
3. 如果使用 Aether Hub，优先使用标准端口。
4. 只有自定义接线时才切换到手动引脚模式。

完整映射见[硬件与端口](/zh/features/hardware-and-ports/)。

## 验证和上传

1. 打开 **Setting > Hardware**，确认 Arduino CLI 已安装。
2. 选择目标开发板。
3. 在 Project 顶部工具栏选择串口。
4. 打开 **Code Preview** 检查生成的 sketch。
5. 点击 **Verify** 只编译不上传。
6. 点击 **Upload** 编译并上传。

## 成功状态

- 代码可以编译。
- 上传命令使用了正确的开发板和串口。
- Arduino 串口以 `9600` 波特率输出 ready 信息。
- Act 组件按图逻辑响应。

## 常见问题

**Arduino CLI 缺失。** 到 **Setting > Hardware** 安装。应用会把官方 Arduino CLI 下载到 Application Support。

**找不到串口。** 重新连接开发板，检查 USB 线，macOS 上优先选择 `/dev/cu.*`。

**提示缺少硬件配置。** 选中对应节点并配置端口或手动引脚。

**提示缺少库。** 到 **Setting > Dependence** 检查第三方库、内置库和自定义源代码库。

## 相关链接

- [安装与配置](/zh/install-and-configure/)
- [项目画布](/zh/features/project-canvas/)
- [硬件与端口](/zh/features/hardware-and-ports/)
- [代码、验证与上传](/zh/features/code-upload/)
- [故障排查](/zh/reference/troubleshooting/)
