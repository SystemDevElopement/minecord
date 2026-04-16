# 🚀 Minecord API / Library

<p align="center">
  <img src="https://img.shields.io/badge/Minecraft-Integration-2ecc71?style=for-the-badge&logo=minecraft">
  <img src="https://img.shields.io/badge/Discord-Bot-5865F2?style=for-the-badge&logo=discord">
  <img src="https://img.shields.io/badge/TypeScript-API-3178C6?style=for-the-badge&logo=typescript">
  <img src="https://img.shields.io/badge/Status-Development-orange?style=for-the-badge">
</p>

---

## 🌐 Overview

**Minecord** es una API / librería diseñada para **conectar el chat de Minecraft con Discord en tiempo real**.

Permite sincronizar eventos entre ambos mundos:
- 💬 Chat de jugadores → Discord
- 🤖 Mensajes de Discord → Minecraft
- ⚡ Eventos en tiempo real (reacciones, edits, comandos, etc.)

Inspirado en sistemas como Minecord clásico, que conectan servidores de Minecraft con Discord usando APIs modernas. 1

---

## ✨ Features

### 🔗 Bridge en tiempo real
- Sincronización bidireccional
- Multi-channel support
- Baja latencia

### 💬 Sistema de Chat
- Mensajes Minecraft → Discord
- Mensajes Discord → Minecraft
- Soporte para:
  - replies
  - edits
  - attachments
  - emojis

### 🧠 Log Parsing Engine
- Compatible con:
  - Vanilla
  - Paper
  - Spigot
  - Fabric
  - Forge
- Detección automática de eventos

### ⚙️ API modular
- Sistema extensible
- Tipos TypeScript completos
- Hooks para eventos personalizados

### 📡 Integración con Discord
- Basado en APIs modernas (ej: JDA / Discord API)
- Sistema de comandos
- Presencia del bot

---

## 📁 Project Structure

```bash
minecord/
├── src/
│   ├── types/
│   │   └── index.ts          # Tipos globales
│   ├── minecraft/
│   │   ├── LogParser.ts      # Parser de logs
│   │   ├── LogWatcher.ts     # Observador en tiempo real
│   │   └── MinecraftBridge.ts# Conexión MC → API
│   ├── discord/
│   │   ├── Client.ts         # Cliente Discord
│   │   ├── Events.ts         # Eventos Discord
│   │   └── Commands.ts       # Comandos
│   ├── core/
│   │   ├── Bridge.ts         # Núcleo de conexión
│   │   ├── EventBus.ts       # Sistema de eventos
│   │   └── Config.ts         # Configuración
│   └── index.ts              # Entry point
