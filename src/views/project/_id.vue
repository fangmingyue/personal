<script setup>
import { ref } from 'vue';

// 使用 ref 声明响应式数据
const images = ref([
  "https://picsum.photos/200/200",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/200",
]);
</script>

<template>
  <div class="project">
    <div class="wrap">
      <div class="grid grid-cols-12 gap-5 h-full">
        <!-- left -->
        <div class="col-span-4 bg-t-white p-5 h-full rounded-md md:col-span-12">
          123
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
