<script setup lang='ts'>
import { SKILL, EXP } from '@/config/config';
import { Icon } from '@iconify/vue';
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
#About
  .wrap
    div(class="grid grid-cols-12 gap-5 h-full")
      div(class="col-span-3 bg-t-white rounded-md p-4 grid grid-rows-4 gap-5 lg:col-span-12 lg:grid-cols-4")
        div(class="row-span-1 rounded-md relative overflow-hidden shadow-lg lg:col-span-2 lg:row-span-4")
          .person-img
          div(class="absolute bottom-[10px] left-[10px] bg-primary-200 opacity-75 rounded-md shadow-sm p-2 md:left-0 md:bottom-0 md:w-full md:rounded-b-none")
            h1(class="text-5xl font-serif tracking-wider md:text-center") Rian
            h2(class="md:text-center") {{ $t('engerner') }}
        div(class="row-span-3 bg-t-white rounded-md lg:col-span-2 lg:row-span-4")
          div(class="font-semibold text-xl") {{ $t('skill') }}
          ul(class="grid grid-cols-12 gap-4 mt-8 md:gap-2")
            li(v-for="item in SKILL" :key="item.label" class="col-span-3 md:col-span-4 flex justify-center items-center")
              img(:src="`/img/skill/${item.icon}`" :alt="item.label" class="w-full max-w-[3rem] sm:max-w-[2rem]")
      div(class="col-span-9 grid auto-rows-auto gap-5 lg:col-span-12")
        div(class="row-span-1 rounded-md grid grid-cols-2 gap-5")
          div(class="col-span-1 bg-t-white p-4 rounded-md md:col-span-2")
            div(class="font-semibold text-xl") {{ $t('about') }}
            p(class="mt-8 leading-6 text-t-text") {{ $t('about1') }}
            p(class="mt-4 leading-6 text-t-text") {{ $t('about2') }}
          div(class="col-span-1 bg-t-white p-4 rounded-md md:col-span-2")
            div(class="font-semibold text-xl") {{ $t('base') }}
            ul(class="mt-8 leading-6 text-t-text")
              li(class="flex items-center")
                Icon(icon="material-symbols:globe")
                span(class="ml-2") {{$t('base1')}}
              li(class="flex items-center")
                Icon(icon="material-symbols:add-home-work-outline-rounded")
                span(class="ml-2") {{$t('base2')}}
              li(class="flex items-center")
                Icon(icon="mingcute:birthday-2-line")
                span(class="ml-2") {{$t('base3')}}
              li(class="flex items-center")
                Icon(icon="material-symbols:kid-star-outline")
                span(class="ml-2") {{$t('base4')}}
              li(class="flex items-center ")
                Icon(icon="streamline:travel-places-theater-mask-hobby-theater-masks-drama-event-show-entertainment")
                span(class="ml-2") {{$t('base5')}}
              li(class="flex items-center ")
                Icon(icon="material-symbols:loupe-outline-sharp")
                span(class="ml-2") {{$t('base6')}}
              li(class="flex items-center ")
                Icon(icon="material-symbols:loupe-outline-sharp")
                span(class="ml-2") {{$t('base7')}}
        div(class="row-span-1 bg-t-white rounded-md p-4")
          div(class="font-semibold text-xl") {{ $t('exp') }}
          ul(class="mt-8 leading-6 text-t-text")
            li(v-for="item in EXP" class="flex items-center mb-2 md:flex-col md:items-start md:mb-4")
              div(class="flex items-center md:flex-col md:items-start")
                div(class="font-mono min-w-[180px] md:min-w-0") {{item.date}}
                div(class="bg-primary-600 p-2 text-t-white text-sm rounded-md min-w-[130px] mr-4") {{item.company}}
              div(class="flex items-center md:flex-col md:items-start")
                div(class="min-w-[170px] mr-4 text-t-dark font-semibold md:min-w-0") {{ $t(item.job)}}
                div {{ $t(item.content)}}
</template>

<style lang='scss' scoped>
#About{
  padding:20px;
  .person-img{
    width: 100%;
    height: 100%;
    background:url(../../../public/img/personal.png) top right no-repeat;
    background-size: 10vw;
    @media(max-width:1024px){
      background:url(../../../public/img/personal.png) bottom right no-repeat;
      background-size: 18vw;
    }
    @media(max-width:768px){
      background:url(../../../public/img/personal.png) bottom right no-repeat;
      background-size: 25vw;
    }
    @media(max-width:576px){
      background:url(../../../public/img/personal.png) top center no-repeat;
      background-size: 50vw;
    }
  }
}
</style>