<template>
    <div class="deleteitem">
        <div class="deleteitem_title">
            <h6>删除确认</h6>
        </div>
        <hr>
        <div class="deleteitem_content">
            <span>NoteName: {{ noteName }}</span>
            <span>Topic: {{ topic }}</span>
            <span>ID: {{ id }}</span>
        </div>
        <div class="deleteitem_footer">
            <button style="border-bottom: 4px solid #ffa600" @click="cancelOperation()">取消</button>
            <button style="border-bottom: 4px solid red">删除</button>
        </div>
    </div>
</template>


<script setup>
import '@/style/deleteitem.css'

import { ref, reactive, defineProps } from 'vue'




const { id, cancelOperation } = defineProps(['id', 'cancelOperation'])

</script>
