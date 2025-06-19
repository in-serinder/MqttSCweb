// 发到服务器
interface MqttItem {
  topic: string
  payload: string
  qos: number
  noteName: string
  broker: string
  port: number
  username?: string
  password?: string
  clientId?: string
}
// 从服务器获取放置到列表
export interface MqttItem {
  id: string
  noteName: string
  broken: string
  username?: string
}

export interface BaseMqtt {
  id: number
  token: string
  port: number
  topic: string
  username?: string
  password?: string
}

//发送的命令
export interface MqttCommand {
  command: string
  topic: string
  clientId: string
  broker: string
  port: number
  username?: string
  password?: string
}

export interface MqttTest {
  contenttype: string
  id: string
  token: string
  port: number
  topic: string
  username?: string
  password?: string
}

// export

export interface WebSocketConnect {
  ip: string
  port: string
  path: string
  ssl?: boolean
}

export interface WebSocketConnectStatus {
  url: string
  connected: boolean
  ws: WebSocket | null
  error: Error | null
  lastMessage: string | null
}
