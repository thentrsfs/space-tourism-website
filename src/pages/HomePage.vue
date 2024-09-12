<template>
  <q-page>
   <div :class="$q.screen.lt.sm ? '' : 'flex flex-center justify-evenly'">
   <div :class="$q.screen.lt.sm ? '' : 'col flex flex-center home-text'">
   <div class="flex-column text-intro" :class="$q.screen.lt.sm ? 'flex flex-center q-mt-xl' : ''">
   <p class="text-secondary" :style="$q.screen.lt.sm ? 'font-size: 20px; letter-spacing: 3px; margin-bottom: 0px' :  'font-size: 27px; letter-spacing: 4px; '
  ">SO, YOU WANT TO TRAVEL TO</p>
   <h1 class="space" :style="$q.screen.lt.sm ? 'font-size: 91px' : 'font-size: 130px'">SPACE</h1>
   <p :class="$q.screen.lt.sm ? 'text-center text-secondary' : 'text-secondary'" :style="$q.screen.lt.sm ? 'font-size:20px; width:330px' :  'font-size: 22px;'">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
  </div>
   </div>
   <div class="col">
   <div class="flex flex-center">
   <q-btn :class="$q.screen.lt.sm ? 'explore-btn-mobile' : 'explore-btn'" @click="mainStore.selectedButton = 'destination'" to="/destination" :ripple="false" round label="Explore" ></q-btn>
  </div>
   </div>
   </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useMainStore } from 'src/stores/mainStore';
const mainStore = useMainStore();
const $q = useQuasar();
</script>

<style scoped>
.space{
  font-family: 'Bellefair-Regular', sans-serif;
  margin-top: 40px;
  margin-bottom: 35px;
}

.home-text{
  margin-top: 20rem; 
  margin-left: 10rem;
}

.text-intro{
  max-width: 520px;
  font-family: 'BarlowCondensed-Regular', sans-serif;
  color: white;
}

.explore-btn {
  padding: 110px 70px 110px 70px;
  margin-top: 18rem;
  font-family: 'Bellefair-Regular',sans-serif;
  font-size: 34px;
  background-color: rgb(255, 255, 255);
}

.explore-btn-mobile {
  position: absolute;
  bottom: 15%; /* Fixed position at the bottom of the wrapper */
  left: 50%;
  transform: translateX(-50%);
  padding: 50px 27px 50px 27px;
  font-family: 'Bellefair-Regular',sans-serif;
  font-size: 20px;
  background-color: rgb(255, 255, 255);
}


.explore-btn:hover{
 box-shadow: 0 0 0 80px rgba(255, 255, 255, 0.1);
 transition: box-shadow 0.2s ease-in-out;;
}


</style>
