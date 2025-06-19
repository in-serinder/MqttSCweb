<template>
    <div class="addControl">
        <h3>添加控制</h3>
        <hr>
        <div class="editaddControl">
            <div class="input_control">
                <span>备注名称：</span>
                <input type="text" placeholder="请输入备注">
            </div>
            <div class="input_control">
                <span>Topic:</span>
                <input type="text" placeholder="请输入订阅主题" v-model="mqttinfo.topic">
            </div>
            <div class="input_control">
                <span>连接类型:</span>
                <select name="" id="">
                    <option value="">/mqtt</option>
                    <option value="">/wss</option>
                    <option value="">/ws</option>
                </select>
            </div>
            <div class="input_control">
                <span>Broken:</span>
                <select>
                    <option value="1">Default</option>
                </select>
                <input type="text" v-model="mqttinfo.token">
                <span>Port:</span>
                <input type="text" placeholder="1883" style="width: 60px;" v-model="mqttinfo.port">
            </div>
            <div class="input_control">
                <span>UserName:</span>
                <input type="text" placeholder="请输入Mqtt用户名(可选)" v-model="mqttinfo.username">
            </div>
            <div class="input_control">
                <span>PassWord:</span>
                <input type="password" placeholder="请输入Mqtt密码(可选)" v-model="mqttinfo.password">
            </div>
            <div class="input_control">
                <span>Type:</span>
                <select>
                    <option value="1">Default</option>
                </select>
                <input type="text" placeholder="设备类型(选填)">
            </div>
            <div class="contecttest">
                <button @click="MqttCtest(mqttinfo)">连接测试</button>
                <span>{{ Process }}</span>
                <img src="../assets/MQTT_black.svg" alt="">
                <button style="margin-left: 20px;"
                    :style="{ backgroundColor: connected ? '#70c4e7 !important' : 'gray !important' }">保存</button>
            </div>



        </div>
    </div>


</template>

<script setup lang="ts">
import '../style/addControl.css'
// 发送一串post到后端
// 后端返回一个json用于添加页面上的一个组件
import { ref, reactive } from 'vue'
import { useContectTest } from '@/stores/ContectTest.ts'
import type { BaseMqtt } from '@/interface'

let ctStore = useContectTest();


let Process = ctStore.Process;
let connected = ctStore.connected;
console.log(connected)

const mqttinfo: BaseMqtt = reactive({
    token: '',
    port: 1883,
    topic: '',
    username: '',
    password: '',
})

function MqttCtest(info) {
    connected = true;
    ctStore.MqttTest(mqttinfo)

}


</script>