<template>
  <div class="column items-center">
    <div
      :class="$q.screen.lt.md ? 'column' : 'row'"
      :style="$q.screen.lt.md ? '' : 'margin-left: 255px'"
    >
      <div class="col" style="max-width: 1300px">
        <div class="headline mobile tablet text-white">
          <span class="page-number mobile tablet">03</span>SPACE LAUNCH 101
        </div>
        <div v-if="$q.screen.lt.md">
          <q-img
            class="img-space-launch tablet mobile"
            fit="cover"
            :src="mainStore.terminologyInfo[mainStore.selectedTerminology].img"
          ></q-img>
        </div>
        <div
          :class="$q.screen.lt.md ? 'column q-mt-lg' : 'row q-gutter-x-xl'"
          :style="$q.screen.lt.lg ? '' : 'margin-top: 160px'"
        >
          <div
            :class="
              $q.screen.lt.md
                ? 'flex q-gutter-x-md justify-center'
                : 'col-auto column q-gutter-y-lg'
            "
          >
            <q-btn
              :class="
                mainStore.selectedTerminology == 'first'
                  ? 'custom-button-launch active-button-launch'
                  : 'custom-button-launch'
              "
              @click="mainStore.selectTerminology('first')"
              :ripple="false"
              :size="$q.screen.lt.sm ? '15px' : '27px'"
              round
            >
              <template v-slot:default>
                <span
                  :style="
                    $q.screen.lt.sm ? 'font-size: 22px' : 'font-size: 33px'
                  "
                  >1</span
                >
              </template>
            </q-btn>
            <q-btn
              :class="
                mainStore.selectedTerminology == 'second'
                  ? 'custom-button-launch active-button-launch'
                  : 'custom-button-launch'
              "
              @click="mainStore.selectTerminology('second')"
              :ripple="false"
              :size="$q.screen.lt.sm ? '15px' : '27px'"
              round
            >
              <template v-slot:default>
                <span
                  :style="
                    $q.screen.lt.sm ? 'font-size: 22px' : 'font-size: 33px'
                  "
                  >2</span
                >
              </template>
            </q-btn>
            <q-btn
              :class="
                mainStore.selectedTerminology == 'third'
                  ? 'custom-button-launch active-button-launch'
                  : 'custom-button-launch'
              "
              @click="mainStore.selectTerminology('third')"
              :ripple="false"
              :size="$q.screen.lt.sm ? '15px' : '27px'"
              round
            >
              <template v-slot:default>
                <span
                  :style="
                    $q.screen.lt.sm ? 'font-size: 22px' : 'font-size: 33px'
                  "
                  >3</span
                >
              </template>
            </q-btn>
          </div>
          <div
            :class="
              $q.screen.lt.md
                ? 'col column text-white text-center q-mt-lg'
                : 'col column text-white'
            "
          >
            <p
              :class="
                $q.screen.lt.sm
                  ? 'title text-h6 text-grey-7'
                  : 'title text-h4 text-grey-7'
              "
            >
              THE TERMINOLOGY...
            </p>
            <p :class="$q.screen.lt.sm ? 'title text-h4' : 'title text-h2'">
              {{
                mainStore.terminologyInfo[mainStore.selectedTerminology].title
              }}
            </p>
            <p
              :class="
                $q.screen.lt.md ? 'text-preset9 mobile q-mx-xl' : 'text-preset9'
              "
            >
              {{
                mainStore.terminologyInfo[mainStore.selectedTerminology].content
              }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="$q.screen.gt.sm" class="col q-ml-xl">
        <q-img
          class="img-space-launch tablet"
          fit="contain"
          :src="mainStore.terminologyInfo[mainStore.selectedTerminology].img"
        ></q-img>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "src/stores/mainStore";

const mainStore = useMainStore();
</script>
