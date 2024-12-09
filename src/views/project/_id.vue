<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router'
import { PROJECT1, PROJECT2, PROJECT3 } from '@/config/config';

const route = useRoute();

// 使用 ref 声明响应式数据
const images = ref([
  "https://picsum.photos/200/200",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/200",
]);

const name = computed(() => route.params.id || "");
const type = computed(() => route.query.type || "");
const data = ref([])

if(type.value === 'p1'){
  images.value = PROJECT1.filter(item => item.title === name.value)[0].image
  data.value = PROJECT1.filter(item => item.title === name.value)[0]
}

if(type.value === 'p2'){
  images.value = PROJECT2.filter(item => item.title === name.value)[0].image
  data.value = PROJECT2.filter(item => item.title === name.value)[0]
}

if(type.value === 'p3'){
  images.value = PROJECT3.filter(item => item.title === name.value)[0].image
  data.value = PROJECT3.filter(item => item.title === name.value)[0]
}

// 使用技能class color
const useColor = (item) =>{
  switch(item){
    case 'html5':
      return 'bg-[#F26649]'
    case 'css3':
      return 'bg-[#007D46]'
    case 'javascript':
      return 'bg-[#fbd601]'
    case 'vue3':
      return 'bg-[#42b983]'
    case 'nuxt3':
      return 'bg-[#0dde86]'
    case 'tailwind':
      return 'bg-[#39bdf8]'
    case 'pug':
      return 'bg-[#5c3933]'
    case 'element plus':
      return 'bg-[#419fff]'
    case 'vite':
      return 'bg-[#9572ff]'
    case 'pinia':
      return 'bg-[#ffca44]'
  }
}

</script>

<template>
  <div class="project">
    <div class="wrap">
      <div class="grid grid-cols-12 gap-5 h-full">
        <!-- left -->
        <div class="col-span-4 bg-t-white p-5 h-full rounded-md md:col-span-12">
          <h1 class="bg-primary-500 text-t-white text-xl p-2 tracking-wider rounded-sm font-semibold">{{ data.title }}</h1>
          <div class="mt-4 p-2 bg-primary-100 leading-6">{{data.content }}</div>
          <ul class="mt-2 px-2 py-4 flex items-center flex-wrap shadow-sm">
            <li v-for="item in data.skill" :key="item" class="mr-2 mt-2 text-t-white py-1 px-2 rounded-md shadow-md" :class="useColor(item)">{{ item }}</li>
          </ul>
          <div class="p-2 mt-8 flex justify-end">
            <router-link to="/project" class="no-underline bg-t-gray text-t-white py-2 px-4 rounded-full shadow-md">{{ $t('back-menu') }}</router-link>
            <a :href="data.url" target="_blank" class="no-underline bg-primary-600 text-t-white py-2 px-4 rounded-full shadow-md ml-4">{{ $t('to-web') }}</a>
          </div>
        </div>
        <!-- right -->
        <div class="col-span-8 bg-t-white p-5 h-full rounded-md md:col-span-12">
          <div class="photo-wall">
            <!-- 使用 v-viewer 来启用图片查看器功能 -->
            <div v-viewer class="image-grid">
              <img
                v-for="(image, index) in images"
                :key="index"
                :src="image"
                :alt="'Image ' + index"
                class="image-item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  padding: 20px;
}
.photo-wall {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  width: 100%;
}

.image-item {
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.image-item:hover {
  transform: scale(1.05);
}
</style>
