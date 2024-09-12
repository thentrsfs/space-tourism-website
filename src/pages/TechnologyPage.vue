<template>
    <div class="column items-center">
        <div class="row" style="margin-left: 255px;">
        <div class="col" style="max-width: 1300px;" >
        <div class="headline launch text-white"><span class="page-number">03</span>SPACE 
        LAUNCH 101</div>
        <div class="row q-gutter-x-xl" style="margin-top: 160px;">
        <div class="col-auto column q-gutter-y-lg">
        <q-btn :class="mainStore.selectedTerminology == 'first' ? 'custom-button active-button' : 'custom-button'" @click="mainStore.selectTerminology('first')" :ripple="false" size="27px" round>
        <template v-slot:default>
    <span style="font-size:33px;">1</span>
  </template>
  </q-btn>
        <q-btn :class="mainStore.selectedTerminology == 'second' ? 'custom-button active-button' : 'custom-button'" @click="mainStore.selectTerminology('second')" :ripple="false"  size="27px" round>
            <template v-slot:default>
    <span style="font-size:33px;">2</span>
  </template>
  </q-btn>
        <q-btn :class="mainStore.selectedTerminology == 'third' ? 'custom-button active-button' : 'custom-button'" @click="mainStore.selectTerminology('third')" :ripple="false"  size="27px" round >
            <template v-slot:default>
    <span style="font-size:33px;">3</span>
  </template>
        </q-btn>
        </div>
        <div class="col column text-white">
        <p class="title text-h4 text-grey-7">THE TERMINOLOGY...</p>
        <p class="title text-h2">{{ mainStore.terminologyInfo[mainStore.selectedTerminology].title }}</p>
        <p class="text-preset9">{{ mainStore.terminologyInfo[mainStore.selectedTerminology].content }}</p>
        </div>
    </div>
        </div>
    <div class="col q-ml-xl">
        <q-img class="img" fit="contain" :src="mainStore.terminologyInfo[mainStore.selectedTerminology].img"></q-img>
    </div>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from 'src/stores/mainStore';

const mainStore = useMainStore();

</script>

<style scoped>

.img {
      width: 100%;
      height: 100%;
      max-height: 600px;
      object-fit: contain;
      margin-top: 120px
    }

.custom-button{
border: 1px solid rgb(106, 106, 106);
color:white;
font-family: 'Bellefair-Regular',sans-serif;
}

.custom-button:hover{
    border-color: white;
    transition: 0.8s ease
}

.active-button {
background-color: white;
color: black;
}

</style>