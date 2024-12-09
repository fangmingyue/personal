<script setup lang='ts'>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';
import { NAV } from '@/config/config';
// !資料 --------------------------------------------------------------------------------------------
const hoverIndex = ref<null | number>(null);

// !接收事件 -----------------------------------------------------------------------------------------
// 滑鼠滑入事件
const mouseEnter = (index: number) => {
  hoverIndex.value = index
}
// 滑鼠移出事件
const mouseLeave = (index: number) => {
  hoverIndex.value = null
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
#Nav
  router-link(v-for="item,index in NAV" :key="index" :to="item.link" class="absolute right-[-107px] flex items-center cursor-pointer no-underline rounded-l-md transition-all overflow-hidden shadow-md shadow-black hover:right-0" :class="item.style" @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave(index)")
    Icon(:icon="item.icon" class="text-t-white text-xl h-[4rem] w-[2rem] p-1 bg-[hsla(0,0%,0%,.1)]" )
    div(class="text-t-white tracking-[2px] ml-4 opacity-0" :class="{ 'opacity-100': hoverIndex == index }") {{$t(item.label)}}
</template>

<style lang='scss' scoped>
#Nav{
  position: fixed;
  top: 120px;
  right: 0;
  @media(max-width:768px){
    display: none;
  }
}
</style>