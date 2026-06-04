---
title: 设置与环境变量
description: 本地路径、应用设置、开发板、Arduino CLI、云 API、AI provider 和高级覆盖配置参考。
---

## 本地路径

| 用途 | 位置 |
| --- | --- |
| Arduino CLI | `~/Library/Application Support/Aether Workshop/bin/arduino-cli` |
| AI 设置 | `~/Library/Application Support/Aether Workshop/ai_settings.json` |
| 本地自定义 Arduino 库 | `~/Documents/Arduino/libraries` |
| 云 token | macOS Keychain service `design.chengxin.aether.cloud` |
| 项目包 | 用户选择的 `.aew` 包目录 |

## Setting 标签

- **Hardware**：Arduino CLI、开发板、平台。
- **Mapping**：硬件映射和端口行为。
- **Dependence**：外部 Arduino 库、内置源代码库、自定义源代码库。
- **Aether AI**：provider key、启用模型、语言、速度、reasoning effort。

## 开发板

- Aether Hub。
- Arduino Uno。
- Arduino Mega 2560。
- ESP-32。
- ESP8266。

## 云 API

默认 base URL：`https://api.chengxin.design`。

进阶覆盖：为应用设置 `cloudAPIBaseURL` user default。只建议开发、staging 或私有 API 主机使用。

## 安全提示

- 不要无意提交包含私有媒体或 AI 附件的 `.aew`。
- 不要共享 AI 设置文件。
- 云 token 在 Keychain；AI provider key 在本地设置。
- 严格控制云角色：Owner 给管理员，Editor 给维护者，Viewer 给使用者。

## 相关链接

- [安装与配置](/zh/install-and-configure/)
- [AI 设置](/zh/ai/settings/)
- [云仓库](/zh/cloud/overview/)
- [故障排查](/zh/reference/troubleshooting/)
