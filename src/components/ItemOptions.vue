<template>
    <div class="itemOption">
        <div class="itemOption_title">
            <h4>name-{{ id }}</h4>
        </div>
        <hr>
        <div class="itemOption_content">
            <div class="mitemOption_content cmdlist">
                <!-- 命令列表 -->
                <div class="mitemOption_content_listview">
                    <span class="mitemOption_cmditem">单个指令</span>
                    <span class="mitemOption_cmditem">单个指令</span>
                </div>
                <div class="mitemOption_cmditem_option">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>

            <div class="mitemOption_content menu">
                <span>
                    <img src="../assets/right_arrow.svg" alt="">
                </span>
                <span>
                    <button>+</button>
                    <button>-</button>

                </span>
            </div>
            <div class="mitemOption_content exelist">
                <!-- 执行列表 -->
                <div class="mitemOption_content_listview">
                    <span class="mitemOption_cmditem">单个指令</span>
                </div>
            </div>
        </div>
        <div class="itemOption_footer">
            <button>执行</button>
            <button @click="cancelOperation()">取消</button>
            <button>Clear</button>

        </div>
    </div>
</template>

<script setup>
import '@/style/itemOption.css'

import { ref, reactive, defineProps, watch } from 'vue'
// import type { MqttItem } from '@/interface.ts'

const { id, cancelOperation } = defineProps(['id', 'cancelOperation'])

</script>