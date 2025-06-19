<template>
    <div class="controlpanelb" v-show="!layout">
        <!-- 显示 -->
        <!-- <div class="controlpanel_item"> -->
        <span v-for="iteminfo in iteminfos" :key="iteminfo.id">
            <PanelItem :iteminfo="iteminfo" :itemoption="itemoption" :itemConfigEdit="itemConfigEdit"
                :itemDelete="itemDelete"></PanelItem>

        </span>




    </div>
    <!-- 列表视图 -->
    <div class="listview" v-show="layout">
        <span v-for="iteminfo in iteminfos" :key="iteminfo.id">
            <ListViewItem :iteminfo="iteminfo" :itemoption="itemoption" :itemConfigEdit="itemConfigEdit"
                :itemDelete="itemDelete"></ListViewItem>
        </span>


    </div>

</template>

<script setup lang="ts">
import '../style/controlpanel.css'

import PanelItem from '@/components/PanelItem.vue'
import ListViewItem from './ListViewItem.vue'
import { ref, reactive, defineProps, watch, onMounted } from 'vue'
import type { MqttItem } from '@/interface.ts'
import { nanoid } from 'nanoid'

import { useGetMethod } from '@/stores/getMethod'


const { layout, itemoption, itemConfigEdit, itemDelete } = defineProps(['layout', 'itemoption', 'itemConfigEdit', 'itemDelete'])


const iteminfos: Array<MqttItem> = reactive([
    // { "id": "abc123", "noteName": "abcde", "topic": "c/12", "broker": "xyz12" },
    // { "id": "def456", "noteName": "fghij", "topic": "c/34", "broker": "klmno" },
    // { "id": "ghi789", "noteName": "pqrst", "topic": "c/56", "broker": "uvwxy" },
    // { "id": "jkl012", "noteName": "abcfg", "topic": "c/78", "broker": "zabcd" },
    // { "id": "mno345", "noteName": "efghi", "topic": "c/90", "broker": "mnopq" },
    // { "id": "pqr678", "noteName": "ijklm", "topic": "c/23", "broker": "rstuv" }

])

// let itemList = getMethodStore.getItemList()
// if (itemList) {
//     // 将字符串解析为对象数组
//     try {
//         const parsedItems: MqttItem[] = JSON.parse(`[${itemList}]`); // 添加方括号以形成有效的 JSON 数组
//         iteminfos.unshift(...parsedItems); // 使用展开运算符添加到 iteminfos
//     } catch (error) {
//         console.warn('解析 itemList 时出错:', error);
//     }
// }


//控制功能窗口展示的子组件需要跨此组件向父组件传值（通过功能函数)
//解构赋值 中间传值 

onMounted(() => {
    const getMethodStore = useGetMethod()
})



console.log("son", layout)



</script>