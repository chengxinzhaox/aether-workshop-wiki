---
title: 代码、验证与上传
description: 从可视化图生成 Arduino 代码，预览、编译、上传并查看串口输出。
---

![上传流程](/assets/screenshots/aether-upload.svg)

## 功能说明

Aether Workshop 会把可视化节点图转换成 Arduino sketch。你可以预览代码，用 Arduino CLI Verify 编译，再上传到选定开发板和串口。

## 适用场景

- 在接硬件前检查图是否能编译。
- 用生成代码进行教学或调试。
- 上传到 Aether Hub 或其他已配置开发板。
- 验证依赖库和 board platform。

## 操作步骤

1. 搭建包含 `Start` 的图。
2. 配置所有 Sense 和 Act 节点硬件。
3. 解决依赖缺失。
4. 打开 **Code Preview**。
5. 检查 include、引脚、setup、loop、helper 和组件代码片段。
6. 点击 **Verify** 执行 `arduino-cli compile`。
7. 选择串口和开发板后点击 **Upload**。

生成器会先展开 Capsule，再生成代码。`setup()` 中会启动 `Serial.begin(9600)`。

## 注意事项

- 没有 `Start` 节点会阻止生成。
- 缺少硬件配置会阻止生成。
- 缺少依赖会导致编译失败。
- 内置支持库会在需要时复制到临时 sketch 上下文。
- 媒体相关代码可以通过串口打印 `MEDIA:<id>`。

## 常见问题

**Verify 通过但硬件没反应？** 检查接线、端口映射、开发板目标、电源和串口占用。

**Upload 因串口失败？** 关闭串口监视器或其他串口工具，重新连接开发板，选择正确 `/dev/cu.*`。

**可以手动改生成代码吗？** Code Preview 适合检查。持久行为应通过组件代码块、Capsule 或图修改。

## 相关链接

- [硬件与端口](/zh/features/hardware-and-ports/)
- [串口、媒体与人脸检测](/zh/features/serial-media-face/)
- [故障排查](/zh/reference/troubleshooting/)
- [进阶用户说明](/zh/reference/advanced/)
