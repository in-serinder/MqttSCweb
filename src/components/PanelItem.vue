<template>
    <div class="panel-item" @click="itemoption(iteminfo.id)">
        <!-- 单个组件组 -->
        <div class="controlpanel_item">
            <div class="controlpanel_item item">
                <div class="controlpanel_item_centent">
                    <span class="controlpanel_item_centent title">
                        <span>{{ iteminfo.noteName }}</span>
                        <span>Topic:{{ iteminfo.topic }}</span>
                    </span>
                </div>
                <hr>
                <div class="controlpanel_item_centent feture" @click.stop>
                    <img src="../assets/del.svg" @click="itemDelete(iteminfo.id)">
                    <img src="../assets/MQTT_black.svg" @click="itemConfigEdit(iteminfo.id)">
                </div>
            </div>
        </div>
        <!-- 单个组件组end -->
    </div>
</template>

<script setup>
import '@/style/panelitem.css'
import { ref, reactive, defineProps } from 'vue'


const { iteminfo, itemoption, itemConfigEdit, itemDelete } = defineProps(['iteminfo', 'itemoption', 'itemConfigEdit', 'itemDelete'])
</script>