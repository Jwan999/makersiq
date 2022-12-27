<template>
  <div>
    <div class="flex flex-col mt-20">
      <div class="bg-dark w-11/12 py-4 rounded-br-full rounded-tr-full z-10 ">
        <h1 class="text-white xl:px-24 px-4 font-bold lg:text-2xl text-lg">Meet the Makers</h1>
      </div>
      <div class="bg-orange w-full py-7 rounded-bl-full rounded-tl-full -mt-8 ml-28"></div>
    </div>

    <div class="xl:px-24 px-4 mt-32 mb-44">

      <MissionAndVisionComponent></MissionAndVisionComponent>
      <PartnersComponent></PartnersComponent>
      <MakersTeamComponent></MakersTeamComponent>

    </div>

  </div>
</template>

<script>
import MakersTeamComponent from "@/components/MakersTeamComponent";
import MissionAndVisionComponent from "@/components/MissionAndVisionComponent";
import PartnersComponent from "@/components/PartnersComponent";

export default {
  components: {
    MakersTeamComponent, MissionAndVisionComponent, PartnersComponent
  },
  name: "AboutMakersView",
}
</script>

<style scoped>

</style>