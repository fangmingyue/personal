<script setup lang='ts'>
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';
import { service } from '@/config/config.ts'
// !資料 --------------------------------------------------------------------------------------------
// const props = defineProps({}); definePageMeta({});

// !接收事件 -----------------------------------------------------------------------------------------

// !流程 --------------------------------------------------------------------------------------------

// !函式 --------------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------
// onMounted(()=>{});

// !對外事件 -----------------------------------------------------------------------------------------
// const emit = defineEmits(['update:modelValue','on-change']);

// !Ref 輸出 ----------------------------------------------------------------------------------------
// defineExpose({ ... })

</script>

<template lang='pug'>
  #Cooperate
    .wrap
      div(class="grid grid-auto-rows gap-5 h-full")
        div(class="row-span-1 bg-t-white rounded-md p-4")
          div(class="font-semibold text-xl") {{ $t('service')}}
          ul(class="grid grid-cols-12 gap-5 mt-8")
            li(v-for="item in service" :key="item.title" class="col-span-4 grid grid-cols-4 md:col-span-6 sm:col-span-12")
              div(class="col-span-1")
                Icon(:icon="item.icon" class="text-4xl text-primary-400")
              div(class="col-span-3")
                div(class="font-semibold text-xl") {{ item.title }}
                div(v-for="data,index in item.list" :key="index" class="my-2 text-t-gray") - {{ data }}
        div(class="row-span-1 bg-t-white rounded-md p-4")
          ul(class="grid grid-cols-12 gap-4")
            li(v-for="item in 3" :key="item" class="col-span-4 lg:col-span-12") 1
</template>

<style lang='scss' scoped>
#Cooperate{
  padding:20px;
}
</style>