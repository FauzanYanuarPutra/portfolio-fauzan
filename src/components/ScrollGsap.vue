<template>
  <div class="relative">
    <div class="flex items-center justify-center h-full">
      <div
        v-show="shouldAnimate"
        class="text-xl transform"
        :class="[animationClass, 'delay-5000']"
      >
        {{ currentText }}
      </div>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      textList: ['Hai Aku adalah seorang', 'Fullstack Developer', 'UI / UX Designer'], // List of texts to rotate
      currentIndex: 0, // Current index of the textList
      shouldAnimate: false, // Flag to control animation visibility
      animationClass: '' // Initial animation class
    };
  },
  computed: {
    currentText() {
      return this.textList[this.currentIndex];
    }
  },
  mounted() {
    setTimeout(() => {
      this.shouldAnimate = true; // Enable animation after 3 seconds
        this.animationClass = 'animate-enter'; // Set animation class for text enter

    }, 2500); // Delay for 3 seconds before starting the animation

    setInterval(() => {
      this.animationClass = 'animate-exit'; // Set animation class for text exit
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.textList.length; // Switch to next text
        this.animationClass = 'animate-enter'; // Set animation class for text enter
      }, 2000); // Duration of the animation
    }, 5000); // Interval for text change
  }
};



</script>

<style scoped>



@keyframes bentar {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes enter {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}

@keyframes exit {
  0% {
    opacity: 1;

  }
    100% {
    opacity: 0;
    transform: translateX(100%);
    
  }
}

.bentar {
  animation: bentar 2s;
}

.animate-enter {
  animation: enter 2s;
}

.animate-exit {
  animation: exit 2s;
}
</style>
