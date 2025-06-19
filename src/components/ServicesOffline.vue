<template>
    <div class="servicesoffline">
        <h3>后端服务离线 或手动<a @click="option = true">输入地址</a></h3>
        <div class="servicesoffline_options" v-show="option">
            <div class="servicesoffline_options_option">
                <span>IP:</span>
                <input type="text" placeholder="输入IP" v-model="ip">
            </div>
            <div class="servicesoffline_options_option">
                <span>Port:</span>
                <input type="text" placeholder="输入端口 默认6324" v-model="port">
            </div>

            <div class="servicesoffline_options_option">
                <!-- LCC -->
                <button @click="servicesOnline(ip, port)">确定</button>
                <button @click="option = false">取消</button>
            </div>

        </div>
    </div>
</template>


<script setup>
import '@/style/servicesoffline.css'

import { ref, defineProps } from 'vue';

let option = ref(false);

let ip = ref('127.0.0.1');
let port = ref('6324');
let address = ref('');


const { servicesOnline } = defineProps(["servicesOnline"])

</script>