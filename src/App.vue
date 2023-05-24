<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import ScrollGsap from './components/ScrollGsap.vue'
import CertificateBelajar from './components/CertificateBelajar.vue'
import NavbarMenu from './components/NavbarMenu.vue';




import { ref, onMounted } from 'vue';

const showElement = ref(false);

onMounted(() => {
  showElement.value = true;
});
</script>

<template>

    <NavbarMenu></NavbarMenu>


    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  <div class="w-[100%] z-0" >
  


  

    <div class="awalan  px-5">
        <div class="flex naik-atas justify-center" >
            <div>
              <div class="masuk-kanan mb-[-10px] lg:mb-[-25px] text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-transparent  font-bold">Creative</div>
              <div class="masuk-kiri text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-transparent  font-bold ml-20">Developer</div>
            </div>
        </div>

        <!-- <ScrollGsap></ScrollGsap> -->


        


        <div class="baru-muncul lg:mt-[20vh] mt-[50px] w-[90%] lg:w-[800px]   m-auto flex justify-center flex-col " :class="{ muncul: showElement }">

          <!-- <div class=" border-2 border-white  m-auto w-[20px]"></div> -->
        <!-- <div class=""> <img src="https://upgifs.com/img/gifs/N4EvmR0UfrAfS.gif" alt="" width="100%" height="20px" class="block overflow"></div> -->

          <!-- <div class="w-full h-[200px] mb-10  overflow-hidden flex items-start">
            <img src="https://www.skwigly.co.uk/wp-content/uploads/2017/03/Skwigly-Banner-Weird-Eye.gif" alt="" class="w-full rounded-xl">
          </div> -->

          <!-- <div class="border-2 border-white lg:mt-[20vh] mt-[50px] mb-[60px] p-[20px] font-bold text-white animate-marquee whitespace-nowrap"> </div> -->

          <div>
            <h1 class="mt-1  font-bold text-white text-center text-lg md:text-2xl lg:text-3xl mb-5">About</h1>
            <h1 class="text-[#CDCDCD] font-medium text-justify md:text-lg lg:text-xl">Hallo, Nama saya Muhammad Fauzan Yanuar Putra, lulusan SMK jurusan Rekayasa Perangkat Lunak. Saya adalah seorang pengembang web yang menggunakan framework <a href="https://vuejs.org/" class="text-[#38F8B3] cursor-pointer">Vue js</a> dan <a href="https://laravel.com/" class="text-[#38F8B3] cursor-pointer">Laravel</a>. Untuk skill lengkap yang saya miliki bisa dilihat di bagian <a href="#skills" class="text-[#38F8B3] cursor-pointer">Skills</a>.</h1>

          </div>


              <hr class="  border-[#5C5C5C] my-[50px] w-full m-auto">
          

          <div class=" w-[90%] lg:w-[800px]  mt-[50px] m-auto flex justify-center flex-col ">
            <h1 class="mt-1  font-bold text-white text-center text-lg md:text-2xl lg:text-3xl mb-5">Blog</h1>
            <div class="w-full md:flex ">
              <a href="https://rakuzancoding.blogspot.com/2021/08/eqq.html"  class=" block cursor-pointer w-full hover:bg-[#535353] md:mx-2 my-5 p-5 rounded-lg text-white  border-2 border-[white]"><p class=" text-[12px] font-medium text-gray-400">30 Agustus 2021</p><h1 class="font-bold my-2">Cara Menjadi Front End Developer Dan Yang Harus Di Kuasai</h1><p class="text-[#38F8B3]">Read more -></p></a>
              <a href="https://rakuzancoding.blogspot.com/2021/09/15-aplikasi-coding-yang-bisa-kalian.html"  class=" block cursor-pointer w-full hover:bg-[#535353] md:mx-2 my-5 p-5 rounded-lg text-white  border-2 border-[white]"><p class=" text-[12px] font-medium text-gray-400">21 September 2021</p><h1 class="font-bold my-2">16 Aplikasi Text Editor yang bisa kalian pakai untuk ngoding di perangkat</h1><p class="text-[#38F8B3]">Read more -></p></a>
              <a href="https://rakuzancoding.blogspot.com/2021/09/cara-menjadi-back-end-developer-dan.html"  class=" block cursor-pointer w-full hover:bg-[#535353] md:mx-2 my-5 p-5 rounded-lg text-white  border-2 border-[white]"><p class=" text-[12px] font-medium text-gray-400">01 September 2021</p><h1 class="font-bold my-2">Cara Menjadi Back End Developer Dan Yang Harus Dikuasai</h1><p class="text-[#38F8B3]">Read more -></p></a>
            </div>
          </div>



              <hr class="  border-[#5C5C5C] my-[50px] w-full m-auto">


          <div class=" w-[90%] lg:w-[800px]  mt-[50px] m-auto flex justify-center flex-col ">
            <h1 class="mt-1  font-bold text-white text-center text-lg md:text-2xl lg:text-3xl " id="skills">Skillset (web development)</h1>
            <div>
              <div class="my-6">
                <h1 class="text-white text-lg font-bold mb-1">HTML and CSS</h1>
                <p class="text-gray-300">Bootstrap, Sass, Tailwind.css</p>
              </div>
              <div class="my-6">
                <h1 class="text-white text-lg font-bold mb-1">JavaScript</h1>
                <p class="text-gray-300">Node.js ( Sedang Belajar )</p>
              </div>

              <div class="my-6">
                <h1 class="text-white text-lg font-bold mb-1">JavaScript frameworks</h1>
                <p class="text-gray-300">jQuery, Vue js</p>
              </div>

              <div class="my-6">
                <h1 class="text-white text-lg font-bold mb-1">Server-side</h1>
                <p class="text-gray-300">PHP</p>
              </div>

              <div class="my-6">
                <h1 class="text-white text-lg font-bold mb-1">Server-side frameworks</h1>
                <p class="text-gray-300">Laravel</p>
              </div>

              <div class="my-6">
                <h1 class="text-white text-lg font-bold mb-1">Others</h1>
                <p class="text-gray-300">Git, SQL</p>
              </div>

              <hr class="  border-[#5C5C5C] my-[50px] w-full m-auto">


              <h1 class="text-white text-lg font-bold mb-1 my-6">Skillset (other)</h1>


              <div class="my-6">
                <h1 class="text-white text-lg font-bold mb-1">Design tools</h1>
                <p class="text-gray-300">Figma</p>
              </div>

            </div>
          </div>

          <hr class="  border-[#5C5C5C] my-[50px] w-full m-auto">
            <!-- <h1 class="mt-1  font-bold text-white text-center text-lg md:text-2xl lg:text-3xl mb-5">Certificate</h1> -->


          <!-- <CertificateBelajar></CertificateBelajar>

          <hr class="  border-[#5C5C5C] my-[50px] w-full m-auto"> -->



          <div class=" w-[90%] lg:w-[800px]  mt-[50px] m-auto flex justify-center flex-col ">
            <h1 class="mt-1  font-bold text-white text-center text-lg md:text-2xl lg:text-3xl mb-5">Contact</h1>
            <div class="w-full md:flex">
              <a href="https://github.com/Fauzanyan" class="cursor-pointer w-full md:mx-2 my-5 p-5 hover:bg-white hover:text-black hover:font-bold rounded-lg text-white  border-2 border-[white] flex justify-center items-center">Github</a>
              <a href="https://www.instagram.com/fauzanyanuarputra/" class="cursor-pointer hover:bg-white hover:text-black hover:font-bold w-full md:mx-2 my-5 p-5 rounded-lg text-white  border-2 border-[white] flex justify-center items-center">Instagram</a>
              <a href="https://www.linkedin.com/in/muhammad-fauzan-046246253" class="cursor-pointer hover:bg-white hover:text-black hover:font-bold w-full md:mx-2 my-5 p-5 rounded-lg text-white  border-2 border-[white] flex justify-center items-center">Linkind</a>
            </div>
          </div>
        <br><br><br><br><br><br><br>

        </div>
        


    </div>

    

  </div>
    
</template>

<style scoped>




@keyframes masukKanan {
  0% {
    opacity: 0;
    transform: translateX(-40px);

  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes masukKiri {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes naikAtas {
  0% {
        height: 100vh;

  }
  100% {
        height: 36vh;
        /* padding: 30px; */

  }
}

@keyframes baruMuncul {
  0% {
      opacity: 0;
      display: none;
  }
  100% {
      opacity: 1;
      display: block;
  }
}

.masuk-kanan {
  opacity: 0;
  animation: masukKanan 1.5s ease-in-out;
  animation-fill-mode: forwards;

}

.masuk-kiri {
  opacity: 0;
  animation: masukKiri 1.5s ease-in-out;
  animation-fill-mode: forwards;
}

.naik-atas {
  /* transform: translateY(40vh); */
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: red; */
  
  animation: naikAtas 1.2s ease-in;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

.baru-muncul {
  display: none;
  animation: baruMuncul .8s ease-in;
  animation-delay: 2.2s;
  opacity: 0;
  transition: opacity 0.5s;
  animation-fill-mode: forwards;

}

.muncul {
  display: block;
}
</style>
