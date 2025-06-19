<template>
    <div class="setting">
        <h3>配置项目</h3>
        <hr>
        <!-- Token -->
        Token条目(一行一条)
        <div class="setting token">
            <textarea name="" id=""></textarea>
        </div>
        <!-- 订阅 -->
        <br>
        概览
        <div class="setting log">
            <ul>
                <li>Logs:</li>
                <li>ConfigOverView:</li>
            </ul>
        </div>
        <br>
        配置
        <div class="setting config">
            <div class="setting config item">
                <span>默认Token服务器:</span>
                <select name="" id="">
                    <option value="">Default</option>
                </select>
                <input type="text" placeholder="Default">
            </div>
            <div class="setting config item">
                <span>默认Mqtt端口:</span>
                <input type="text" placeholder="Default:1883">
            </div>
            <div class="setting config item">
                <span>默认WebSocket端口:</span>
                <input type="text" placeholder="Default:8083">
            </div>
            <div class="setting config item">
                <span>ClientID:</span>
                <input type="text" placeholder="ID" v-model="ClientID">
                <button @click="RandomClientId()">随机产生</button>
            </div>
            <div class="setting config item">
                <span>QoS:</span>
                <select v-model="Qos_select">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                </select>
                <span style="margin-left: 20px;color:#FF0000">
                    Detail: {{ Qos[Qos_select].detail }}
                </span>

            </div>
            <div class="setting config item">
                <span>Keep Alive:</span>
                <input type="text" placeholder="Default0">
            </div>
            <div class="setting config item pwd">
                <span class="setting config item sidehr">
                </span>
                <div>
                    <span>User:</span>
                    <input type="text" placeholder="Default User">
                    <span>PassWord:</span>
                    <input type="text" placeholder="Default PassWord">
                </div>



            </div>
            <div class="setting config item">
                <span>日志保留程度:</span>
                <select name="" id="">
                    <option value="">所有消息</option>
                    <option value="">发送的消息</option>
                    <option value="">接受的消息</option>
                </select>
            </div>
            <div class="setting submit">
                <button>SubMit</button>
            </div>
        </div>

    </div>

</template>

<script setup name="setting">
import '../style/setting.css'
import { nanoid } from 'nanoid';
import { ref, reactive } from 'vue'

let Qos_select = ref(0);
let Qos = [
    { Qos: "0", detail: "最多一次（At most once）" },
    { Qos: "1", detail: "至少一次（At least once）" },
    { Qos: "2", detail: "只有一次（Exactly once）" }
]

let ClientID = ref('');

function RandomClientId() {
    ClientID.value = "Clinet_" + nanoid(6);
    console.log(ClientID)
}


</script>