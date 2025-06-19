<template>
    <div class="listviewitem " @click="itemoption(iteminfo.id)">
        <div @click.stop>
            <button @click="itemConfigEdit(iteminfo.id)">
                <img src="../assets/MQTT_black.svg" alt="">
            </button>
        </div>
        <div class="listviewitem_title">
            <span>{{ iteminfo.noteName }}</span>
            <span>Topic:{{ iteminfo.topic }}</span>
        </div>
        <div class="listviewitem_title right" @click.stop>
            <img src="../assets/del.svg" @click="itemDelete(iteminfo.id)">

            <div class="listviewitem_title right content">
                <span>{{ iteminfo.broker }}</span>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import '@/style/listviewitem.css'

import { ref, reactive, defineProps, watch } from 'vue'
import type { MqttItem } from '@/interface.ts'

const { iteminfo, itemoption, itemConfigEdit, itemDelete } = defineProps(['iteminfo', 'itemoption', 'itemConfigEdit', 'itemDelete'])




</script>