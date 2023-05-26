<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import ScrollGsap from './components/ScrollGsap.vue'
import CertificateBelajar from './views/CertificateBelajar.vue'
import NavbarMenu from './components/NavbarMenu.vue'
import ScrollGsap from './components/ScrollGsap.vue'
import ContactMe from './views/ContactMe.vue'






import { ref, onMounted, computed } from 'vue';

const text = ref('Your text goes here');

const circleStyle = computed(() => {
  const radius = 100; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const charCount = text.value.length; // Number of characters in the text
  const charWidth = 16; // Width of each character (adjust as needed)

  const arcLength = circumference / charCount; // Length of each character's arc
  const rotationOffset = arcLength / 2; // Offset to position characters correctly

  return {
    transform: `rotate(${-rotationOffset}deg)`,
    width: `${arcLength}px`,
    height: `${radius}px`,
  };
});

const showElement = ref(false);

onMounted(() => {
  showElement.value = true;
});
</script>

<template>

    <!-- <NavbarMenu></NavbarMenu> -->


    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  <div class="w-[100%] z-0" >
  


  

        <div class="awalan ">
        <div class="h-[100vh] w-[100%] absolute flex justify-center items-center ">
              <ScrollGsap></ScrollGsap>
        </div>
          <div class="  h-[100vh] w-[100%] ">
              <div class="flex naik-atas justify-center gambar " >
                <div>
                  <div class="masuk-kanan mb-[-10px]  lg:mb-[-25px] text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-transparent  font-bold">Creative</div>
                  <div class="masuk-kiri text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-transparent  font-bold ml-20">Developer
                  <!-- <img src="./assets/onepiece.png" alt="" class="w-[10%]  animate-bounce-slow  absolute top-0 right-0"> -->
                    
                  </div>
                  
                </div>
              </div>

              <div class=" w-[100%] h-[69%]  flex justify-center items-end transition pb-[2%]">
                <a href="#about">
                  <div class="text-5xl animate-bounce "><p class="rotate-90">➜</p></div>
                  <!-- <p>Scroll Ke Bawah</p> -->
                </a>

              </div>
        </div>

        <!-- <ScrollGsap></ScrollGsap> -->


        


        <div class="baru-muncul  w-[90%] lg:w-[800px]   m-auto flex justify-center flex-col " :class="{ muncul: showElement }">

          <!-- <div class=" border-2 border-#FFEB64  m-auto w-[20px]"></div> -->
        <!-- <div class=""> <img src="https://upgifs.com/img/gifs/N4EvmR0UfrAfS.gif" alt="" width="100%" height="20px" class="block overflow"></div> -->

          <!-- <div class="w-full h-[200px] mb-10  overflow-hidden flex items-start">
            <img src="https://www.skwigly.co.uk/wp-content/uploads/2017/03/Skwigly-Banner-Weird-Eye.gif" alt="" class="w-full rounded-xl">
          </div> -->
<!-- origin-left -->
          <!-- <div class="border-2 border-white lg:mt-[20vh] mt-[50px] mb-[60px] p-[20px] font-bold text-white animate-marquee whitespace-nowrap"> </div> -->
          <p class="text-center">Website Ini masih tahap pengerjaan, Terimakasih</p>

          <div class="relative hover:scale-110 hover:rotate-3  transition duration-800 cursor-pointer rounded-lg mt-20"  id="about">
            <img src="./assets/fauzan.jpg" alt="" class="w-[100%] h-[350px] object-cover object-top  top-0 bottom-4 lg:mt-[50px]  mb-[20px] brightness-75" >

            
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
              <div class="w-full text-end h-full flex flex-nowrap whitespace-nowrap justify-end items-end  text-2xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div class=" p-5">
                  <p class="font-bold mb-[-10px] text-[16px] lg:text-2xl text-white">Muhammad Fauzan Yanuar Putra</p> <p class="text-[16px] lg:text-2xl font-semibold ">Fullstack Developer</p>
                </div>
              </div>
              

            </div>
          </div>
          <!-- <iframe width="100%" height="200" src="https://www.youtube.com/embed/33nGS4mfFhY" class=" mt-[50px]" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
          <!-- <h1 class=" text-center text-white text-sm mb-[100px]">Penjelasan Fullstack dari pak shandika</h1> -->

          <div>
            <h1 class="mt-1  font-bold text-white text-center text-lg md:text-2xl lg:text-3xl mb-5">About</h1>
            <h1 class="text-[#CDCDCD] font-medium text-justify md:text-lg lg:text-xl">Hallo, Nama saya Muhammad Fauzan Yanuar Putra, lulusan SMK jurusan Rekayasa Perangkat Lunak. Saya adalah seorang pengembang web yang menggunakan framework <a href="https://vuejs.org/" class="text-[#FFEB64] cursor-pointer">Vue js</a> dan <a href="https://laravel.com/" class="text-[#FFEB64] cursor-pointer">Laravel</a>. Untuk skill lengkap yang saya miliki bisa dilihat di bagian <a href="#skills" class="text-[#FFEB64] cursor-pointer">Skills</a>.</h1>

          </div>


              <hr class="  border-[#5C5C5C] my-[50px] w-full m-auto">
          

          <div class=" w-[90%] lg:w-[800px]  mt-[50px] m-auto flex justify-center flex-col ">
            <h1 class="mt-1  font-bold text-white text-center text-lg md:text-2xl lg:text-3xl mb-5">Blog</h1>
            <div class="w-full md:flex ">
                <a href="https://rakuzancoding.blogspot.com/2021/08/eqq.html"  class=" block cursor-pointer w-full  md:mx-2 my-5  bg-[#171313]  text-white  rounded-xl">
                    <img src="./assets/16aplikasi.jpg" alt="" class="w-[100%] rounded-t-xl">
                    <div class="p-5">
                      <p class=" text-[12px] font-medium text-gray-400">30 Agustus 2021</p>
                      <h1 class="font-bold my-2 lg:text-sm">Cara Menjadi Front End Developer Dan Yang Harus Di Kuasai</h1>
                      <p class="text-[#FFEB64]">Read more ➜</p>
                    </div>
                </a>
                <a href="https://rakuzancoding.blogspot.com/2021/08/eqq.html"  class=" block cursor-pointer w-full  md:mx-2 my-5  bg-[#171313]  text-white  rounded-xl">
                    <img src="./assets/frontend.jpg" alt="" class="w-[100%] rounded-t-xl">
                    <div class="p-5">
                      <p class=" text-[12px] font-medium text-gray-400">30 Agustus 2021</p>
                      <h1 class="font-bold my-2 lg:text-sm">Cara Menjadi Front End Developer Dan Yang Harus Di Kuasai</h1>
                      <p class="text-[#FFEB64]">Read more ➜</p>
                    </div>
                </a>
                <a href="https://rakuzancoding.blogspot.com/2021/08/eqq.html"  class=" block cursor-pointer w-full  md:mx-2 my-5  bg-[#171313]  text-white  rounded-xl">
                    <img src="./assets/backend.jpg" alt="" class="w-[100%] rounded-t-xl">
                    <div class="p-5">
                      <p class=" text-[12px] font-medium text-gray-400">30 Agustus 2021</p>
                      <h1 class="font-bold my-2 lg:text-sm">Cara Menjadi Front End Developer Dan Yang Harus Di Kuasai</h1>
                      <p class="text-[#FFEB64]">Read more ➜</p>
                    </div>
                </a>
                
                
              </div>
          </div>

              <hr class="  border-[#5C5C5C] my-[50px] w-full m-auto">


          
            <div class=" w-[90%] lg:w-[800px]  mt-[50px] m-auto flex justify-center flex-col ">
              <h1 class="mt-1  font-bold text-white text-center text-lg md:text-2xl lg:text-3xl mb-10">project</h1>
              <div class="flex">
                <ul class="flex">
                  <li class="flex items-center mr-5"><div class="flex rounded-full items-center w-2 h-2 bg-[#FFEB64] mr-2"></div> Vue js</li>
                  <li class="flex items-center mr-5"><div class="flex rounded-full items-center w-2 h-2 bg-[#FFEB64] mr-2"></div> Tailwind CSS</li>

                </ul>
              </div>
              <a href="https://fauzanyan.github.io/coding-test-transindo/">
                <div class="w-full my-2 :hover:text-underline">
                    <!-- <h1 class="mt-3 mb-1 text-xl md:text-3xl font-bold text-white">Mencari data lebih dari satu</h1> -->
                    <!-- <p class="text-white w-full text-justify">Hallo teman teman mulai hari ini tepatnya tanggal 26 mei 2023 saya akan upload setiap minggu</p> -->

                </div>
                <div class="relative hover:scale-95 hover:brightness-50  transition duration-800 cursor-pointer rounded-lg"  id="about">
                    <img src="./assets/project1.png" alt="" class="w-full rounded-xl">
                    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
                      <div class="w-full text-end h-full flex flex-nowrap whitespace-nowrap justify-center items-center  text-2xl font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div class=" p-5">
                          <p class="font-bold mb-[-10px] text-[16px] lg:text-3xl  text-black">Kunjungi Website</p>
                        </div>
                      </div>
                  </div>
                </div>
              </a>
              <div class=" text-xl md:text-2xl flex justify-end py-2 text-[#FFEB64]">
                  View all projects →
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


          <!-- <ContactMe></ContactMe> -->
        <br><br><br><br><br><br><br>

        </div>
        


    </div>

    

  </div>
    
</template>

<style scoped>
.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.circle-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f2f2f2;
}

.text-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transform-origin: top center;
}

.text-char {
  display: inline-block;
  width: 100%;
  text-align: center;
}



.background-img {
    background-image: url('./assets/tampilan3.jpg');
    
    background-size: cover;
    background-position: center;
    animation: baruMuncul .8s ease-in;
    animation-delay: 2.2s;
    opacity: 0;
    transition: opacity 0.5s;
    animation-fill-mode: forwards;

}

@keyframes slow-bounce {
  0% {
    transform: translateY(-25%);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translateY(0);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(-25%);
    animation-timing-function: ease-out;
  }
}

.animate-bounce-slow {
  margin-right: 3%;
  margin-bottom: 2%;
  margin-top: -7%;
  animation: slow-bounce 3s infinite;
}




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
    transform: translateX(20px);

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
        height: 32%;
        color: #FFEB64;

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
