<template>
  <div class="slider">
    <div class="slide-container">
      <transition-group name="slide" tag="ul">
        <li v-for="(image, index) in images" :key="index" :style="{ backgroundImage: `url(${image})` }"></li>
      </transition-group>
    </div>
    <div class="controls">
      <button @click="prevSlide">Previous</button>
      <button @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: '/portfolio-fauzan/src/assets/certi/1.jpg', caption: 'Image 1' },
        { url: '/portfolio-fauzan/src/assets/certi/2.jpg', caption: 'Image 2' },
        { url: '/portfolio-fauzan/src/assets/certi/3.jpg', caption: 'Image 3' },
        { url: '/portfolio-fauzan/src/assets/certi/4.jpg', caption: 'Image 4' },
        { url: '/portfolio-fauzan/src/assets/certi/5.jpg', caption: 'Image 5' }
      ],
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
};
</script>

<style>
.slide-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.slide {
  display: none;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.controls {
  margin-top: 10px;
  text-align: center;
}

button {
  margin: 0 5px;
}
</style>
