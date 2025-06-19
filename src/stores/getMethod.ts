import { defineStore } from 'pinia'
import { useWebSocket } from './WebSocket'
import type { WebSocketConnect } from '@/interface'
import { onMounted } from 'vue'

export const useGetMethod = defineStore('getMethod', {
  state: () => {
    return {
      wsUrl: '',
      wsConnected: false,
      ws: null as WebSocket | null,
      ws_arrg: null as WebSocketConnect | null,
      ws_itemlist: null as WebSocket | null,
      itemList: [],
    }
  },
  actions: {
    connect(ip: string, port: string, path: string, ssl?: boolean) {
      console.log('Ws连接中')

      this.wsUrl = (ssl ? 'wss://' : 'ws://') + ip + ':' + port + path

      this.ws = new WebSocket(this.wsUrl)

      //   添加监听
      this.ws.addEventListener('open', this.ws_onOpen)
      this.ws.addEventListener('message', this.ws_onMessage)
      this.ws.addEventListener('close', this.ws_onClose)
      this.ws.addEventListener('error', this.ws_onError)
    },

    ws_onOpen() {
      console.log('Ws已连接')
      this.wsConnected = true
    },
    ws_onMessage(event: MessageEvent) {},
    ws_onClose() {
      console.log('Ws已断开')
      this.wsConnected = false
    },
    ws_onError() {
      this.wsConnected = false
    },
    getItemList() {
      let session = 'getItemList'
      WebSocketStore.createConnection(session, { ip: '127.0.0.1', port: '6324', path: '/' })
      WebSocketStore.sendMessage(session, 'get')
      return WebSocketStore.getLastMessage(session)
    },
  },
})
