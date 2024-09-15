<template>
  <q-page>
    <div :class="$q.screen.lt.md ? '' : 'flex flex-center justify-evenly'">
      <div
        :class="
          $q.screen.lt.md
            ? 'flex flex-center home-text-tablet home-text-mobile'
            : 'col flex flex-center home-text'
        "
      >
        <div
          class="flex-column"
          :class="
            $q.screen.lt.md
              ? 'flex flex-center text-intro-mobile q-mx-xl'
              : ' text-intro'
          "
        >
          <p
            class="text-secondary"
            :style="
              $q.screen.lt.sm
                ? 'font-size: 18px; letter-spacing: 3px; margin-bottom: 0px'
                : 'font-size: 27px; letter-spacing: 4px;'
            "
          >
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 class="space mobile tablet">SPACE</h1>
          <p
            :class="
              $q.screen.lt.sm ? 'text-center text-secondary' : 'text-secondary'
            "
            class="home-paragraph mobile tablet"
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div class="col">
        <div class="flex flex-center">
          <q-btn
            class="explore-btn explore-btn-mobile explore-btn-tablet"
            @click="mainStore.selectedButton = 'destination'"
            to="/destination"
            :ripple="false"
            round
            label="Explore"
          ></q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { useMainStore } from "src/stores/mainStore";
const mainStore = useMainStore();
const $q = useQuasar();
</script>
