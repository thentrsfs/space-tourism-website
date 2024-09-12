<template>
     <div class="column items-center ">


<div class="row text-white" >
<div class="column info-container">
<div class="headline text-white"><span class="page-number">02</span>MEET YOUR CREW</div>
<h4 class="q-mb-xs title text-grey-7" style="margin-top: 160px;">{{ mainStore.crewInfo[mainStore.selectedCrewMember].title }}</h4>
<h2 class="title q-my-lg">{{ mainStore.crewInfo[mainStore.selectedCrewMember].name }}</h2>
<p class="text-preset9 content">{{ mainStore.crewInfo[mainStore.selectedCrewMember].content }}</p>

<div class="flex q-gutter-x-xl page-buttons">
<q-btn round :ripple="false" @click="mainStore.selectCrewMember('douglas')" :class="mainStore.selectedCrewMember == 'douglas' ? 'page-btn active' : 'page-btn'" size="5px"></q-btn>
<q-btn round :ripple="false" @click="mainStore.selectCrewMember('mark')" :class="mainStore.selectedCrewMember == 'mark' ? 'page-btn active' : 'page-btn'" size="5px"></q-btn>
<q-btn round :ripple="false" @click="mainStore.selectCrewMember('victor')" :class="mainStore.selectedCrewMember == 'victor' ? 'page-btn active' : 'page-btn'" size="5px"></q-btn>
<q-btn round :ripple="false" @click="mainStore.selectCrewMember('anousheh')" :class="mainStore.selectedCrewMember == 'anousheh' ? 'page-btn active' : 'page-btn'" size="5px"></q-btn>
</div>
</div>
<div class="img-container">
<q-img class="q-ml-xl img" fit="contain" :src="mainStore.crewInfo[mainStore.selectedCrewMember].img"></q-img>
</div>
</div>
</div>
</template>

<script setup>
import { useMainStore } from 'src/stores/mainStore';

const mainStore = useMainStore();
</script>

<style scoped>
 .img-container {
      width: 550px; 
      height: 650px;
    }

    .img-container .img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      margin-top: 120px
    }

    .page-buttons{
        position: absolute;
  bottom: 70px; /* Fixed position at the bottom of the wrapper */
  left: 50%;
  transform: translateX(-215%);
    }
    .page-btn{
        background-color: rgba(128, 128, 128,0.6);
    }
    .page-btn.active{
        background-color: white;
    }
    .page-btn.active:hover{
        background-color: white;
    }
    .page-btn:hover{
        background-color: rgba(255, 255, 255,0.5);
    }
.info-container{
    flex-wrap: nowrap;
    max-width: 550px;
}
</style>