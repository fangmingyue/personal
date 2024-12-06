<script setup lang='ts'>
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';
import { SERVICE, METHOD } from '@/config/config.ts'
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
            li(v-for="item in SERVICE" :key="item.title" class="col-span-4 grid grid-cols-4 md:col-span-6 sm:col-span-12")
              div(class="col-span-1")
                Icon(:icon="item.icon" class="text-4xl text-primary-400")
              div(class="col-span-3")
                div(class="font-semibold text-xl") {{ $t(item.title) }}
                div(v-for="data,index in item.list" :key="index" class="my-2 text-t-gray") - {{ $t(data) }}
        div(class="row-span-1 bg-t-white rounded-md p-4")
          ul(class="grid grid-cols-12 gap-4")
            li(v-for="item,index in METHOD" :key="item.title" class="col-span-4 lg:col-span-12 rounded-lg" :class="{'great':index === 2}")
              div(class="px-10 py-4")
                img(:src="item.img" class="w-full max-w-[64px]")
                div(class="text-4xl mt-6 font-semibold flex items-center")
                  span(class="mr-2") {{ $t(item.title) }}
                  div(v-if="index === 2" class="text-t-white text-sm py-1 px-2 bg-primary-600 rounded-md flex ")
                    img(src="/img/cooperate/king.svg" class="w-[20px]")
                    span(class="ml-1") {{ $t('recommend') }}
                h3(class="mt-2 text-t-gray") {{ $t(item.describe) }}
                div(class="flex mt-6 pb-8 gap-1 border-b-[1px] border-solid border-t-gray")
                  div(class="px-1 rounded-sm bg-primary-400 text-t-white text-sm h-[20px]") TWD
                  div(class="text-3xl text-t-gray") {{ $t(item.info1) }}
                  div(class="flex items-end text-t-gray") {{ $t(item.info2) }}
                ul
                  li(v-for="data,index in item.content" :key="index" class="flex items-center py-3")
                    Icon(icon="material-symbols:check" class="text-[#51B775]")
                    span(class="ml-2 text-t-gray") {{ $t(data) }}
</template>

<style lang='scss' scoped>
#Cooperate{
  padding:20px;
}

.great{
  background:var(--primary-100);
}
</style>