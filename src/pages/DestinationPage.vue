<template>
  <div class="column items-center">
    <div :class="$q.screen.lt.md ? '' : 'row'">
      <div
        class="col column items-center"
        :style="$q.screen.lt.md ? '' : 'margin-right: 150px'"
      >
        <div class="headline mobile tablet text-white">
          <span class="page-number mobile tablet">01</span>PICK YOUR DESTINATION
        </div>
        <q-img
          class="img-planet mobile tablet"
          :src="mainStore.planetsInfo[mainStore.selectedPlanet].img"
        ></q-img>
      </div>
      <div :style="$q.screen.lt.md ? 'margin-top:5rem' : 'margin-top: 180px'">
        <div class="column planets-text-container tablet mobile">
          <div class="planets-info-container mobile tablet text-secondary">
            <q-btn
              @click="mainStore.selectPlanet('moon')"
              flat
              :class="
                mainStore.selectedPlanet === 'moon'
                  ? 'active-btn custom-btn tablet'
                  : 'custom-btn tablet'
              "
              :ripple="false"
              >MOON</q-btn
            >
            <q-btn
              @click="mainStore.selectPlanet('mars')"
              flat
              :class="
                mainStore.selectedPlanet === 'mars'
                  ? 'active-btn custom-btn tablet'
                  : 'custom-btn tablet'
              "
              :ripple="false"
              >MARS</q-btn
            >
            <q-btn
              @click="mainStore.selectPlanet('europa')"
              flat
              :class="
                mainStore.selectedPlanet === 'europa'
                  ? 'active-btn custom-btn tablet'
                  : 'custom-btn tablet'
              "
              :ripple="false"
              >EUROPA</q-btn
            >
            <q-btn
              @click="mainStore.selectPlanet('titan')"
              flat
              :class="
                mainStore.selectedPlanet === 'titan'
                  ? 'active-btn custom-btn tablet'
                  : 'custom-btn tablet'
              "
              :ripple="false"
              >TITAN</q-btn
            >
          </div>
          <h1 class="text-white q-my-lg title mobile">
            {{ mainStore.planetsInfo[mainStore.selectedPlanet].title }}
          </h1>
          <p
            class="text-preset9 mobile tablet"
            :class="$q.screen.lt.sm ? 'q-mx-lg text-center' : ''"
          >
            {{ mainStore.planetsInfo[mainStore.selectedPlanet].content }}
            <q-separator spaced="40px" color="grey-9"></q-separator>
          </p>
          <div
            class="text-white"
            :style="
              $q.screen.lt.md
                ? 'gap: 150px; margin-top: -12px; margin-bottom: 45px'
                : 'gap: 105px; margin-top: -12px; margin-bottom: 45px'
            "
            :class="$q.screen.lt.sm ? 'flex-column text-center' : 'flex'"
          >
            <div>
              <span class="text-preset8 tablet">AVG. DISTANCE</span>
              <p class="text-preset7 tablet">
                {{
                  mainStore.planetsInfo[mainStore.selectedPlanet].avgDistance
                }}
              </p>
            </div>
            <div>
              <span class="text-preset8 tablet">EST. TRAVEL TIME</span>
              <p class="text-preset7 tablet">
                {{
                  mainStore.planetsInfo[mainStore.selectedPlanet].estTravelTime
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "src/stores/mainStore";

const mainStore = useMainStore();
</script>
