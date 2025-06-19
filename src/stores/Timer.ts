import { defineStore } from 'pinia'

export const useTimer = defineStore('useTimer', {
  state: () => {
    return {
      timer: null as number | null, //在浏览器环境为number，nodejs为Nodejs.Timer
    }
  },
  actions: {
    startTimer(func: Function, delay: number) {
      if (this.timer) {
        clearInterval(this.timer)
      }

      this.timer = setInterval(() => {
        //执行块
        func()
      }, delay) as unknown as number //将断言类型返回值转换number
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    },
  },
})
