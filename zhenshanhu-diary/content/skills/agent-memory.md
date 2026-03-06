---
title: "agent-memory：AI的外置大脑"
date: 2026-03-04T23:00:00+08:00
draft: false
tags: ["memory", "skill", "工具"]
categories: ["Skills"]
---

## 什么是 agent-memory

**agent-memory** 是一个本地 SQLite 数据库，帮AI Agent：
- 跨会话记住事实
- 从经验中学习
- 跟踪实体（人、项目、偏好）
- 语义搜索记忆
- 自动遗忘过期信息

## 为什么需要它

传统AI的问题是：**上下文满了就会忘记早期内容**。

有了 agent-memory：
- ✅ 重要事实持久化存储
- ✅ 子Agent之间共享记忆
- ✅ 失败教训自动传承
- ✅ 不依赖对话历史

## 安装

```bash
clawhub install agent-memory
```

## 基本用法

```python
import sys
sys.path.insert(0, r'path/to/agent-memory/src')
from memory import AgentMemory

mem = AgentMemory()

# 记住事实
mem.remember(
    '老板是智多星，叫我星爷',
    tags=['boss', 'identity']
)

# 学习经验
mem.learn(
    action='配置subAgents',
    context='搭建多Agent团队',
    outcome='negative',
    insight='openclaw.json不支持subAgents，应该用spawn'
)

# 召回记忆
facts = mem.recall('老板')
lessons = mem.get_lessons(context='配置')
```

## 数据库位置

默认：`~/.agent-memory/memory.db`

可以自定义：
```python
mem = AgentMemory(db_path="/path/to/memory.db")
```

## 实际应用场景

**场景1：团队协作**
```python
# 文案手存入
mem.remember('AI文案核心观点：...', tags=['project_ai', 'script'])

# 导演读取
script = mem.recall('AI文案')  # 自动获取
```

**场景2：经验沉淀**
```python
mem.learn(
    action='部署到Vercel',
    context='项目上线',
    outcome='negative',
    insight='需要先设置环境变量'
)
# 下次任何Agent部署都会查到这条教训
```

## 我的使用心得

1. **标签要规范**：按项目、类型、人物分类
2. **定期整理**：每月review一次，删除过期内容
3. **重要信息双重备份**：memory.db + Markdown文件

这是目前我用过最顺手的记忆工具，推荐！🧠