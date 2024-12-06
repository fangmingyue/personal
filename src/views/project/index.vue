<script setup lang='ts'>
import{ ref } from 'vue'
import { useI18n } from 'vue-i18n';
import type { TabsPaneContext } from 'element-plus'
import { PROJECT1, PROJECT2, PROJECT3 } from '@/config/config';
// !資料 --------------------------------------------------------------------------------------------
const activeName = ref<string>('first')

// !接收事件 -----------------------------------------------------------------------------------------
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
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
  #Project
    .wrap
      el-tabs(v-model="activeName" class="demo-tabs" @tab-click="handleClick")
        el-tab-pane(label="形象網站" name="first")
          div(class="grid grid-cols-12 gap-5 shadow-md")
            div(v-for="item in PROJECT1" :key="item.id" class="col-span-3 bg-t-white rounded-md shadow-sm overflow-hidden lg:col-span-4 md:col-span-12")
              div(class="p-4")
                div(class="w-full h-[140px] bg-t-gray") 圖片預留
                div(class="mt-4 mb-2 text-xl") {{ item.title }}
                div(class="text-md text-t-text") {{ item.short}}
              router-link(:to="`/project/${item.title}`" class="block w-full text-center tracking-wider bg-primary-500 py-4 text-t-white no-underline cursor-pointer hover:bg-primary-600") {{ $t('detail') }}
        el-tab-pane(label="功能網站" name="second")
          div(class="grid grid-cols-12 gap-5 shadow-md")
            div(v-for="item in PROJECT2" :key="item.id" class="col-span-3 bg-t-white rounded-md shadow-sm overflow-hidden lg:col-span-4 md:col-span-12")
              div(class="p-4")
                div(class="w-full h-[140px] bg-t-gray") 圖片預留
                div(class="mt-4 mb-2 text-xl") {{ item.title }}
                div(class="text-md text-t-text") {{ item.short}}
              router-link(:to="`/project/${item.title}`" class="block w-full text-center tracking-wider bg-primary-500 py-4 text-t-white no-underline cursor-pointer hover:bg-primary-600") {{ $t('detail') }}
        el-tab-pane(label="其他網站" name="third")
          div(class="grid grid-cols-12 gap-5 shadow-md")
            div(v-for="item in PROJECT3" :key="item.id" class="col-span-3 bg-t-white rounded-md shadow-sm overflow-hidden lg:col-span-4 md:col-span-12")
              div(class="p-4")
                div(class="w-full")
                  img(:src="`${item.smallpic}`" class="w-full object-cover")
                div(class="mt-4 mb-2 text-xl") {{ item.title }}
                div(class="text-md text-t-text") {{ item.short}}
              router-link(:to="`/project/${item.title}`" class="block w-full text-center tracking-wider bg-primary-500 py-4 text-t-white no-underline cursor-pointer hover:bg-primary-600") {{ $t('detail') }}
        el-tab-pane(label="其他作品" name="fourth")
          div 建構中...
</template>

<style lang='scss' scoped>
#Project{
  padding:20px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>