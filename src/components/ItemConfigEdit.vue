<template>
    <div class="itemconfigedit">
        <h4>ConfigEdit</h4>
        <hr>
        <div class="itemconfigedit content">
            <div class="content_sub ">
                <span>ID:{{ id }}</span>

            </div>
            <div class="content_sub ">
                <span>NoteName:</span>
                <input type="text" name="" id="">
            </div>
            <div class="content_sub ">
                <span>Toekn:</span>
                <input type="text" name="" id="">
            </div>
            <div class="content_sub ">
                <span>Topic:</span>
                <input type="text" name="" id="">
            </div>
            <div class="content_sub up">
                <span style="height: 100%;background-color:black;width:2px"></span>
                <div style="flex-direction: column;">
                    <div class="content_sub ">
                        <span>UserName:</span>
                        <input type="text" name="" id="">
                    </div>
                    <div class="content_sub ">
                        <span>Password:</span>
                        <input type="text" name="" id="">
                    </div>
                </div>
            </div>
        </div>
        <div class="itemconfigedit_footer">
            <button>保存</button>
            <button @click="cancelOperation()">取消</button>
        </div>
    </div>

</template>

<script setup>
import '@/style/itemconfigedit.css'

import { ref, reactive, defineProps } from 'vue'

const { id, cancelOperation } = defineProps(['id', 'cancelOperation'])

</script>