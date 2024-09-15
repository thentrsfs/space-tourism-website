<template>
  <div class="column items-center">
    <div
      :class="
        $q.screen.lt.md ? 'column text-white text-center' : 'row text-white'
      "
    >
      <div class="column info-container tablet mobile">
        <div class="headline mobile tablet text-white">
          <span class="page-number mobile tablet">02</span>MEET YOUR CREW
        </div>
        <h4 class="q-mb-xs title crew-title mobile tablet text-grey-7">
          {{ mainStore.crewInfo[mainStore.selectedCrewMember].title }}
        </h4>
        <h2
          class="title crew-name-tablet crew-name-mobile"
          :class="$q.screen.lt.sm ? 'q-mt-none' : 'q-my-lg'"
        >
          {{ mainStore.crewInfo[mainStore.selectedCrewMember].name }}
        </h2>
        <p class="text-preset9 mobile">
          {{ mainStore.crewInfo[mainStore.selectedCrewMember].content }}
        </p>
      </div>
      <div
        :class="
          $q.screen.lt.md
            ? 'flex flex-center q-gutter-x-lg'
            : 'flex q-gutter-x-xl page-buttons tablet mobile'
        "
      >
        <q-btn
          round
          :ripple="false"
          @click="mainStore.selectCrewMember('douglas')"
          :class="
            mainStore.selectedCrewMember == 'douglas'
              ? 'page-btn active'
              : 'page-btn'
          "
          size="5px"
        ></q-btn>
        <q-btn
          round
          :ripple="false"
          @click="mainStore.selectCrewMember('mark')"
          :class="
            mainStore.selectedCrewMember == 'mark'
              ? 'page-btn active'
              : 'page-btn'
          "
          size="5px"
        ></q-btn>
        <q-btn
          round
          :ripple="false"
          @click="mainStore.selectCrewMember('victor')"
          :class="
            mainStore.selectedCrewMember == 'victor'
              ? 'page-btn active'
              : 'page-btn'
          "
          size="5px"
        ></q-btn>
        <q-btn
          round
          :ripple="false"
          @click="mainStore.selectCrewMember('anousheh')"
          :class="
            mainStore.selectedCrewMember == 'anousheh'
              ? 'page-btn active'
              : 'page-btn'
          "
          size="5px"
        ></q-btn>
      </div>
      <div class="img-crew-container tablet mobile">
        <q-img
          :class="
            $q.screen.lt.md
              ? 'img-crew-container-img tablet mobile'
              : 'q-ml-xl img-crew-container-img tablet mobile'
          "
          fit="contain"
          :src="mainStore.crewInfo[mainStore.selectedCrewMember].img"
        ></q-img>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "src/stores/mainStore";

const mainStore = useMainStore();
</script>
