<template>
    <div class="column items-center ">


    <div class="row">
    <div class="column" style="margin-right: 150px;">
    <div class="headline text-white" ><span class="page-number">01</span>PICK YOUR DESTINATION</div>
    <q-img class="img"  :src="mainStore.planetsInfo[mainStore.selectedPlanet].img"></q-img>
</div>
    <div style="margin-top: 180px;">
    <div class="column planets-text-container">
    <div class="flex text-secondary justify-between" style="max-width: 270px;">
    <q-btn @click="mainStore.selectPlanet('moon')" flat :class="mainStore.selectedPlanet === 'moon' ? 'active-btn custom-btn' : 'custom-btn'" :ripple="false">MOON</q-btn>
    <q-btn @click="mainStore.selectPlanet('mars')" flat :class="mainStore.selectedPlanet === 'mars' ? 'active-btn custom-btn' : 'custom-btn'" :ripple="false">MARS</q-btn>
    <q-btn @click="mainStore.selectPlanet('europa')" flat :class="mainStore.selectedPlanet === 'europa' ? 'active-btn custom-btn' : 'custom-btn'" :ripple="false">EUROPA</q-btn>
    <q-btn @click="mainStore.selectPlanet('titan')" flat :class="mainStore.selectedPlanet === 'titan' ? 'active-btn custom-btn' : 'custom-btn'" :ripple="false">TITAN</q-btn>
</div>
<h1 class="text-white q-my-lg title">{{ mainStore.planetsInfo[mainStore.selectedPlanet].title }}</h1>
<p class="text-preset9">{{ mainStore.planetsInfo[mainStore.selectedPlanet].content }}</p>
<q-separator spaced="20px" color="grey-9"></q-separator>
<div class="flex text-white q-mt-md" style="gap: 105px;">
<div>
<span class="text-preset8">AVG. DISTANCE</span>
<p class="text-preset7">{{ mainStore.planetsInfo[mainStore.selectedPlanet].avgDistance }}</p>
</div>
<div>
<span class="text-preset8">EST. TRAVEL TIME</span>
<p class="text-preset7">{{ mainStore.planetsInfo[mainStore.selectedPlanet].estTravelTime }}</p>
</div>
</div>
    </div>
    </div>
</div>
</div>
</template>

<script setup>
import { useMainStore } from 'src/stores/mainStore';

const mainStore = useMainStore();


</script>

<style scoped lang="scss">
.planets-text-container{
    max-width: 450px;
}

.img{
margin-top: 120px;
width: 500px;
}



</style>