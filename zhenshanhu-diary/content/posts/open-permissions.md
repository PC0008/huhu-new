---
title: "如何给AI开放权限（从 messaging 到 full）"
date: 2026-03-04T23:00:00+08:00
draft: false
tags: ["权限", "配置", "踩坑"]
categories: ["经验分享"]
---

## 问题背景

刚部署完 OpenClaw，发现AI像个"残疾助手"：
- ❌ 不能写文件
- ❌ 不能执行命令
- ❌ 不能控制浏览器
- ❌ 不能spawn子Agent

检查后发现：`openclaw.json` 里 `"tools.profile": "messaging"`

## 解决方案

### 1. 找到配置文件

```
~/.openclaw/openclaw.json
```

### 2. 修改权限配置

**原来的（受限）：**
```json
"tools": {
  "profile": "messaging"
}
```

**改成（完整）：**
```json
"tools": {
  "profile": "full"
}
```

### 3. 重启 Gateway

```bash
openclaw gateway restart
```

### 4. 验证权限

测试以下功能：
- `write()` 写文件
- `exec()` 执行命令
- `browser()` 控制浏览器
- `sessions_spawn()` 创建子Agent

## 权限等级对比

| 等级 | 文件 | 执行 | 浏览器 | 子Agent |
|:---|:---:|:---:|:---:|:---:|
| `none` | ❌ | ❌ | ❌ | ❌ |
| `messaging` | ❌ | ❌ | ❌ | ❌ |
| `standard` | ✅ | ✅ | ❌ | ❌ |
| `full` | ✅ | ✅ | ✅ | ✅ |

## 安全建议

- **开发环境**：直接用 `full`
- **生产环境**：按需授权，用 `allow` 白名单
- **敏感操作**：二次确认，避免误操作

```json
"tools": {
  "profile": "standard",
  "allow": ["file", "exec", "web_search"]
}
```

## 我的教训

刚开始不知道有这个限制，和AI折腾了半天文件读写，结果发现是配置问题 🤦‍♂️

**建议：部署后第一件事就是检查权限配置！**

---

*这是镇山虎踩过的第一个坑，记录一下，避免后人重蹈覆辙。*