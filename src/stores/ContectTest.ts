import { defineStore } from 'pinia'
import mqtt from 'mqtt'
import type { MqttTest } from '@/interface'

export const useContectTest = defineStore('Mqtttest', {
  actions: {
    MqttTest(info: MqttTest) {},
  },
  state: () => {
    return {
      Procress: '',
      connected: false,
    }
  },
})
