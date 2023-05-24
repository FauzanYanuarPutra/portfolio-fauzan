<template>
  <div>
    <button class="fixed right-0 px-5 py-5 text-xl font-bold" @click="togglePopup">Menu</button>

    <div v-if="isPopupOpen" id="bos"  class="fixed top-0 right-0 bottom-0 left-0 pop  bg-[black] z-20  popup-animation  flex justify-center items-center">
      <div class="muncul-navbar">
        <button @click="togglePopup" class="fixed top-0 right-0 m-10 text-3xl font-semibold text-red-500">X</button>
        <ul class="text-center">
          <p>MASIH PROSES BELUM BERFUNGSI !</p>
          <li class="my-4  "><a href="#" class="text-2xl hover:text-white font-semibold">Home</a></li>
          <li class="my-4  "><a href="#" class="text-2xl hover:text-white font-semibold">About</a></li>
          <li class="my-4  "><a href="#" class="text-2xl hover:text-white font-semibold">Skills</a></li>
          <li class="my-4  "><a href="#" class="text-2xl hover:text-white font-semibold">Project</a></li>
          <li class="my-4  "><a href="#" class="text-2xl hover:text-white font-semibold">Certificate</a></li>
          <li class="my-4  "><a href="#" class="text-2xl hover:text-white font-semibold">Contact</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopupOpen: false,
    };
  },
  methods: {
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
      if (this.isPopupOpen) {
        document.body.style.overflow = 'hidden'; // Mematikan scroll
      } else {
        document.body.style.overflow = ''; // Mengaktifkan kembali scroll
      }
    },
  },
};
</script>

<style>
.z-index {
  z-index: 2000;
}

.muncul-navbar {
  /* display: none; */
  opacity: 0;
  animation: munculNavbar .8s ease forwards;
  animation-delay: 2s;
}

.popup-animation {
  position: fixed;
  width: 0px;
  width: 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: popup-open 2s ease forwards;
}

.popup-animation-close {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #575353;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: popup-close 2s ease forwards;
}

@keyframes popup-open {
  0% {
    width: 0px;
    height: 0px;
    border-radius: 100%;
  }

  25% {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    background-color: #559e83;
  }
  50% {
    width: 50px;
    height: 100px;
    background-color: #575353;
  }
  75% {
    width: 100%;
    height: 100px;
    background-color: #559e83;
  }
  100% {
    width: 100%;
    height: 100vh;
    background-color: #575353;
  }
}

@keyframes popup-close {
  0% {
    width: 100%;
    height: 100vh;
    background-color: #575353;
  }
  25% {
    width: 60%;
    height: 100%;
    background-color: #559e83;
  }
  50% {
    width: 60%;
    height: 20%;
    background-color: #575353;
  }
  75% {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: #559e83;
  }
  100% {
    width: 0px;
    height: 0px;
    border-radius: 100%;
  }
}

@keyframes munculNavbar {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Tambahkan gaya sesuai kebutuhan Anda */

</style>
