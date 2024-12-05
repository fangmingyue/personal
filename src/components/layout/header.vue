<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from 'vue-i18n';
import { LANGUAGE } from "@/config/config.ts";
import { Storage } from "@/utils/storage.ts";
import { Icon } from '@iconify/vue';

// !資料 --------------------------------------------------------------------------------------------
const value = ref('tw')

const { locale } = useI18n();
// !接收事件 -----------------------------------------------------------------------------------------
// 切換語系
const langChange = (lang: string) => {
  locale.value = lang;
  Storage.set('lang', lang);
} 

// !流程 --------------------------------------------------------------------------------------------

// !函式 --------------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------
onMounted(()=>{
  locale.value = Storage.get('lang') || 'tw';
  value.value = Storage.get('lang') || 'tw';
});

// !對外事件 -----------------------------------------------------------------------------------------
// const emit = defineEmits(['update:modelValue','on-change']);

// !Ref 輸出 ----------------------------------------------------------------------------------------
// defineExpose({ ... })
</script>

<template lang="pug">
  #Header
    .container
      div(class="flex justify-between items-center h-full")
        router-link(to="/")
          img.logo(src="/img/logo.svg" alt="logo")
        div(class="flex items-center")
          el-select( v-model="value" placeholder="Select" size="small" style="width: 100px" @change="langChange(value)")
            el-option(v-for="item in LANGUAGE" :key="item.value" :label="item.label" :value="item.value") {{item.label}}
          Icon(icon="ic:baseline-reorder" class="hidden text-4xl ml-2 text-t-white md:block")
</template>

<style lang="scss" scoped>
#Header {
  background: var(--primary-500);
  height: 2.5rem;
  .logo{
    display: block;
    width: 100%;
    max-width: 100px;
    padding:12px;
    background: var(--bg);

  }
}
</style>
