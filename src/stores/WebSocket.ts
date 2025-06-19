import { defineStore } from 'pinia'

import type { WebSocketConnect, WebSocketConnectStatus } from '@/interface'

let wsUrl
let ws: WebSocket
// let wsConnected = ref(false)

export const useWebSocket = defineStore('Websocket', {
  state: () => {
    return {
      // wsUrl: '',
      // wsConnected: false,
      // ws: null as WebSocket | null,
      connections: new Map<string, WebSocketConnectStatus>(), //存放多个连接实例
    }
  },

  actions: {
    // 多链接
    createConnection(key: string, config: WebSocketConnect) {
      // 已存在
      if (this.connections.has(key)) {
        console.warn(`链接${key}已存在，断开${config.ip}:${config.port}${config.path}`)
      }

      const url = (config.ssl ? 'wss://' : 'ws://') + config.ip + ':' + config.port + config.path

      // 初始化连接
      this.connections.set(key, {
        url,
        connected: false,
        ws: null,
        error: null,
        lastMessage: null,
      })

      // 建立新连接
      this.connect(key)
    },

    //连接
    connect(key: string) {
      const connection = this.connections.get(key)
      if (!connection) {
        console.warn(`连接${key}不存在`)
        return
      }

      try {
        const ws = new WebSocket(connection.url)
        connection.ws = ws
        connection.connected = false
        connection.error = null

        ws.addEventListener('open', () => {
          connection.connected = true
        })
        ws.addEventListener('message', (event) => {
          connection.lastMessage = event.data
        })
        ws.addEventListener('close', (event) => {
          connection.connected = false
        })
        ws.addEventListener('error', (event) => {
          connection.connected = false
          connection.error = new Error('连接错误')
        })
      } catch (error) {
        console.warn('连接错误')
      }
    },
    sendMessage(key: string, data: string | ArrayBuffer | Blob) {
      const connection = this.connections.get(key)
      if (!connection || !connection.connected || !connection.ws) {
        throw new Error(`连接${key}未就绪`)
      }
      connection.ws.send(data)
    },
    getConnectionState(key: string) {
      return this.connections.get(key)?.connected ?? false
    },

    getLastMessage(key: string) {
      return this.connections.get(key)?.lastMessage
    },
    disconnectAll() {
      this.connections.forEach((connection, key) => {
        this.disconnect(key)
      })
      this.connections.clear()
    },

    // connect(ip: string, port: string, path: string, ssl?: boolean) {
    //   console.log('Ws连接中')

    //   this.wsUrl = (ssl ? 'wss://' : 'ws://') + ip + ':' + port + path

    //   this.ws = new WebSocket(this.wsUrl)

    //   //   添加监听
    //   this.ws.addEventListener('open', this.ws_onOpen)
    //   this.ws.addEventListener('message', this.ws_onMessage)
    //   this.ws.addEventListener('close', this.ws_onClose)
    //   this.ws.addEventListener('error', this.ws_onError)
    // },

    // ws_onOpen() {
    //   console.log('Ws已连接')
    //   this.wsConnected = true
    // },
    // ws_onMessage(event: MessageEvent) {},
    // ws_onClose() {
    //   console.log('Ws已断开')
    //   this.wsConnected = false
    // },
    // ws_onError() {
    //   this.wsConnected = false
    // },
    disconnect(key: string) {
      const connection = this.connections.get(key)
      if (connection && connection.ws) {
        connection.ws.close()
        connection.ws = null
        connection.connected = false
      }
    },
  },
})
