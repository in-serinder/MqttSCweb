<template>
    <div class="home">
        <!-- 概览 -->
        <div class="home_overview">
            <divcesOverview></divcesOverview>
        </div>
        <div class="divhr"></div>
        <!-- 添加控制 -->

        <div class="addpanel">
            <button @click="addControlitem(true)">+</button>
            <div class="addpanel_left">
                <button @click="layoutChange()"><img :src="layout ? listview_img : panel_img"></button>

            </div>
        </div>
        <div class="divhr"></div>
        <!-- 详细控制 -->
        <div class="controlpanel">
            <!-- 使用props传递 -->
            <ControlPanel :layout="layout" :itemoption="itemOptions" :itemConfigEdit="itemConfigEdit"
                :itemDelete="itemDelete"></ControlPanel>

        </div>
        <!-- 当 -->
        <div class="window" v-show="ShowTable.additem" @click="addControlitem(false)">
            <div class="windows_alog" @click.stop>
                <addControl></addControl>
            </div>
        </div>
        <div class="window" v-show="ShowTable.ItemOptions" @click="ShowTable.ItemOptions = false">
            <div class="windows_alog" @click.stop>
                <ItemOptions :id="ItemArgments.ItemId_Options" :cancelOperation="cancelOperation"></ItemOptions>
            </div>
        </div>
        <div class="window" v-show="ShowTable.configitem" @click="ShowTable.configitem = false">
            <div class="windows_alog" @click.stop>
                <ItemConfigEdit :id="ItemArgments.ItemId_ConfigEdit" :cancelOperation="cancelOperation">
                </ItemConfigEdit>
            </div>
        </div>
        <div class="window" v-show="ShowTable.deleteitem" @click="ShowTable.deleteitem = false">
            <div class="windows_alog" @click.stop>
                <DeleteItem :id="ItemArgments.ItemID_Delete" :cancelOperation="cancelOperation"></DeleteItem>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts" name="Home">
import '../style/home.css'
import divcesOverview from '../components/DevicesOverView.vue'
import ControlPanel from '../components/ControlPanel.vue'
import addControl from '../components/AddControl.vue'
import ItemOptions from '@/components/ItemOptions.vue'
import ItemConfigEdit from '@/components/ItemConfigEdit.vue'
import DeleteItem from '@/components/DeleteItem.vue'


import { ref, reactive, watch } from 'vue'

import type { MqttItem } from '@/interface.ts'

import listview_img from '@/assets/list.svg'
import panel_img from '@/assets/matix.svg'


let itemoptions: MqttItem

let layout = ref(true)

// 操作窗口展示
let ShowTable = reactive({
    additem: false,
    ItemOptions: false,
    configitem: false,
    deleteitem: false

})



//数组存放每个操作的id传参
let ItemArgments = reactive({
    ItemId_Options: '',
    ItemId_ConfigEdit: ' ',
    ItemID_Delete: ''
})

///////// 操作窗口展示与传参
let addControlitem = (is: boolean) => {
    ShowTable.additem = is
}

let itemOptions = (id: string) => {
    console.log('获取到', id)
    ItemArgments.ItemId_Options = id
    ShowTable.ItemOptions = true
}

let itemConfigEdit = (id: string) => {

    console.log('获取到a', id)
    ItemArgments.ItemId_ConfigEdit = id
    ShowTable.configitem = true
    // ShowTable.ItemOptions = false
}

let itemDelete = (id: string) => {
    console.log('获取到删除', id)
    ItemArgments.ItemID_Delete = id
    ShowTable.deleteitem = true

}

// 取消操作
let cancelOperation = () => {
    ShowTable.additem = false
    ShowTable.ItemOptions = false
    ShowTable.configitem = false
    ShowTable.deleteitem = false
}


//列表或矩阵切换
function layoutChange() {
    layout.value = !layout.value

}
////////


watch(ShowTable, (newValue, oldValue) => {
    console.log(newValue)
})

</script>


<style></style>