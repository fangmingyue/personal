<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from 'vue-i18n';
import { LANGUAGE,NAV } from "@/config/config.ts";
import { Storage } from "@/utils/storage.ts";
import { Icon } from '@iconify/vue';

// !資料 --------------------------------------------------------------------------------------------
const value = ref('tw')
const model = ref(false)

const { locale } = useI18n();
// !接收事件 -----------------------------------------------------------------------------------------
// 切換語系
const langChange = (lang: string) => {
  locale.value = lang;
  Storage.set('lang', lang);
} 

// 手機打開側邊選單
const openModel = () => {
  model.value = true;
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
          Icon(icon="ic:baseline-reorder" class="hidden text-4xl ml-2 text-t-white md:block" @click="openModel")
    //- 側邊展開
    .model(v-if="model")
    .model-inner(class="overflow-hidden" :class="{'active-in':model}")
      ul
        li(v-for="item in NAV" :key="item.id")
          router-link(:to="item.link") {{ $t(item.label) }}
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
  .model{
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background: hsla(0, 0%, 0%, .7);
    z-index: 99;
  }
  .model-inner{
    position:absolute;
    width: 0;
    height: 80%;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background: var(--primary-100);
    left:0;
    top:50%;
    transform: translateY(-50%);
    transition:all .3s ease;
    transition-delay: .1s;
    z-index: 199;
   }
}

.active-in{
  width: 90%!important;
  padding:20px;
}
</style>
