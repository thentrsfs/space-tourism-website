<template>
  
  <q-layout class="bg-img" :style="{backgroundImage: `url(${mainStore.bgImgUrl})`}">
  <div >
    <q-header class="bg-transparent">
    <q-toolbar  class="q-mt-lg">
     <LogoHeader :class="$q.screen.gt.xs ? 'q-ml-xl' : 'q-ml-lg q-mt-sm'"/>
     <div v-if="$q.screen.gt.xs" class="header-line"></div>
     <q-space v-if="$q.screen.lt.sm"></q-space>
     <q-btn v-if="$q.screen.lt.sm" class="q-mt-xs" size="xl" flat @click="drawer = !drawer" round dense icon="menu" color="secondary" />

     <q-drawer
        v-model="drawer"
        :width="250"
        :breakpoint="600"
        overlay
        side="right"
        class="menu-color"
      >
<q-btn flat round >home</q-btn>

      <q-list class="column">
      <q-item>
      <q-item-section>
      <q-btn flat>home</q-btn>
      </q-item-section>
      </q-item>
      <q-item> <q-item-section>
      <q-btn flat>home</q-btn>
      </q-item-section></q-item>
      <q-item> <q-item-section>
      <q-btn flat>home</q-btn>
      </q-item-section></q-item>
      <q-item> <q-item-section>
      <q-btn flat>home</q-btn>
      </q-item-section></q-item>
      </q-list>
      </q-drawer>

  <nav v-if="$q.screen.gt.xs" class="menu barlow-condensed flex flex-center q-gutter-x-xl">
    <q-btn :class="mainStore.selectedButton === 'home' ? 'active-btn custom-btn' : 'custom-btn'" @click="mainStore.selectButton('home')" to="/" :ripple="false" flat stretch><span class="text-weight-bold span-numbers q-mr-sm">00</span> HOME</q-btn>
    <q-btn :class="mainStore.selectedButton === 'destination' ? 'active-btn custom-btn' : 'custom-btn'" @click="mainStore.selectButton('destination')" to="/destination" :ripple="false" flat stretch><span class="text-weight-bold span-numbers q-mr-sm">01</span> DESTINATION</q-btn>
    <q-btn :class="mainStore.selectedButton === 'crew' ? 'active-btn custom-btn' : 'custom-btn'" @click="mainStore.selectButton('crew')" to="/crew" :ripple="false" flat stretch><span class="text-weight-bold span-numbers q-mr-sm">02</span> CREW</q-btn>
    <q-btn :class="mainStore.selectedButton === 'technology' ? 'active-btn custom-btn' : 'custom-btn'" @click="mainStore.selectButton('technology')" to="/technology" :ripple="false" flat stretch><span class="text-weight-bold span-numbers q-mr-sm">03</span> TECHNOLOGY</q-btn>
  </nav>


  </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view  :key="$route.path">
        </router-view>
    </q-page-container>
  </div>
  </q-layout>
</template>

<script setup>
import LogoHeader from 'src/components/LogoHeader.vue'
import {ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { useMainStore } from 'src/stores/mainStore';

const mainStore = useMainStore();
const router = useRouter()

const drawer = ref(false);
onMounted(() => {
  const navigationEntries = performance.getEntriesByType('navigation')[0];

  if (navigationEntries && navigationEntries.type === 'reload') {
    router.replace('/')
  }
});
</script>

<style scoped>
.menu {
  height: 96px;
  backdrop-filter: blur(12px);
  background-color: rgba(52, 62, 70, 0.3);
  width: 800px;
  z-index: 0;
}



.header-line {
  background-color: rgba(125, 125, 125, 0.5);
  flex: 1;
  height: 2px;
  margin-left: 70px;
  z-index: 1;
}

.bg-img{
  background-size: cover; 
  background-attachment: fixed;
}

.span-numbers{
  letter-spacing: 2px;
}

</style>
