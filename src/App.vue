<template>
  <div class="body">
    <div class="top">
      <div class="top_Menudiv">
        <div class="topMenu">
          <RouterLink to="/log" class="top_Menudiv_router" active-class="router_islink">
            <div class="topMenu RouterLink">
              <div>Log</div>
              <img src="./assets/log.svg" alt="">
            </div>
          </RouterLink>
          <RouterLink to="/setting" class="top_Menudiv_router" active-class="router_islink">
            <div class="topMenu RouterLink">
              <div>Setting</div>
              <img src="./assets/setting.svg" alt="">
            </div>
          </RouterLink>

        </div>

        <div class="TopMain">
          <RouterLink to="/" active-class="router_islink" class="top_Menudiv_router">
            <div class="TopMain RouterLink"><img src="./assets/MQTT.svg">
              <div>Home</div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="centent">
      <div class="server_offline_cover" v-show="servicesOfflineRef">
        <ServicesOffline :servicesOnline="servicesOnline" />
      </div>
      <RouterView class="content_routerview" />
    </div>

  </div>
</template>

<script setup lang="ts">
import '@/style/app.css'
import ServicesOffline from './components/ServicesOffline.vue';
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useWebSocket } from './stores/WebSocket'
import { useTimer } from './stores/Timer';

const websocketStore = useWebSocket()
const useTimerStore = useTimer()



let servicesOfflineRef = ref(true)


function getServer() {
  websocketStore.createConnection('keep', { ip: '127.0.0.1', port: '6324', path: '/' })
}

//从离线面板传回服务端ip与端口
function servicesOnline(ip: string, port: string) {
  console.log(ip, port)
  websocketStore.createConnection('keep', { ip, port, path: '/' })
  if (websocketStore.getConnectionState('keep')) {
    servicesOfflineRef.value = false
    useTimerStore.stopTimer()
  }
}



// 处理服务离线
watch(() => websocketStore.getConnectionState('keep'), (newVal, oldVal) => {
  console.log("新值" + newVal, "旧值" + oldVal)
  servicesOfflineRef.value = !newVal
  console.log("servicesOfflineRef.value", servicesOfflineRef.value)

  // 处理服务重连
  ServicesReconnect(newVal)



})

function ServicesReconnect(connected: boolean) {
  if (connected) {
    useTimerStore.stopTimer()
  } else {
    // 离线重连接
    useTimerStore.startTimer(() => {
      getServer();
      console.log("ws重连接...")
      // 期间内有连接取消计时器
      if (connected) useTimerStore.stopTimer()
    }, 5000)
  }
}


onMounted(() => {
  getServer()
  // 检查是否重连接
  ServicesReconnect(websocketStore.getConnectionState('keep'))
  console.log("心态", websocketStore.getConnectionState('keep'))
})



</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

}
</style>
