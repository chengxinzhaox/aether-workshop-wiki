---
title: 硬件与端口
description: 配置 Aether Hub 端口、开发板映射、手动引脚和节点硬件配置。
---

![Aether Hub 端口图](/assets/aether-hub-port-map.svg)

## 功能说明

硬件配置把画布节点映射到真实开发板引脚。Aether Workshop 支持 Aether Hub 标准端口、不同开发板的默认映射，以及手动模拟/数字引脚。

## 适用场景

- 给传感器或执行器分配物理接口。
- 在 Aether Hub、Arduino、ESP-32、ESP8266 之间切换目标板。
- 自定义接线时覆盖自动端口。
- 排查引脚不匹配导致的编译或运行问题。

## 标准端口

Aether Hub / Arduino AVR 默认：

| Port | Pins |
| --- | --- |
| PORT 1 | 2, 3 |
| PORT 2 | 4, 5 |
| PORT 3 | 6, 7 |
| PORT 4 | 8, 9 |
| PORT 5 | 10, 11 |
| PORT 6 | 12, 13 |

ESP32 默认：

| Port | Pins |
| --- | --- |
| PORT 1 | 22, 23 |
| PORT 2 | 21, 19 |
| PORT 3 | 17, 16 |
| PORT 4 | 34, 35 |
| PORT 5 | 32, 33 |
| PORT 6 | 25, 26 |

## 操作步骤

1. 选中 Sense 或 Act 节点。
2. 选择可用标准端口。
3. 如果接线不符合标准端口，开启手动引脚。
4. 选择 `A0` 到 `A6` 等模拟引脚，或 `D2` 到 `D12` 等数字引脚。
5. 上传前先 Verify。

## 注意事项

- 手动数字引脚 UI 显示为 `D2`，代码生成时会转换为数字引脚。
- 部分传感器需要多个引脚或依赖库。
- 当前源码记录了一个维护点：输出硬件配置创建时接收 node ID，但没有持久化该值。重复使用相同类型输出组件时，请仔细检查节点级接线。

## 常见问题

**换开发板后需要重新检查端口吗？** 需要。默认引脚可能会改变。

**为什么端口不可选？** 可能已经被占用，或组件只兼容特定端口形态。

**Aether Hub 应该用手动引脚吗？** 优先使用标准端口，自定义接线再手动配置。

## 相关链接

- [安装与配置](/zh/install-and-configure/)
- [代码、验证与上传](/zh/features/code-upload/)
- [故障排查](/zh/reference/troubleshooting/)
