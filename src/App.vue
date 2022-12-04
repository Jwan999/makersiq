<template>
  <div id="app">
    <NavbarComponent @value-changed="(value) => isAtHome = value"></NavbarComponent>

    <div v-if="isAtHome">
      <WelcomeSection></WelcomeSection>
      <ServicesComponent></ServicesComponent>
      <PreviousWorkComponent></PreviousWorkComponent>
      <SpaceComponent></SpaceComponent>
      <LocationComponent></LocationComponent>
    </div>

    <div v-if="!isAtHome" class="h-100 bg-repeat-x bg-pattern bg-contain my-32">
      <div class="text-center pt-36 px-10">
        <h1 class="bg-dark text-orange inline-block skew-x-6 px-24 py-6 md:text-4xl text-3xl font-bold">Coming
          Soon...</h1>
      </div>
    </div>

    <FooterComponent></FooterComponent>

    <router-view></router-view>
  </div>
</template>

<script>
import WelcomeSection from "@/components/WelcomeComponent";
import ServicesComponent from "@/components/ServicesComponent";
import PreviousWorkComponent from "@/components/PreviousWorkComponent";
import SpaceComponent from "@/components/SpaceComponent";
import LocationComponent from "@/components/LocationComponent";
import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default {
  components: {
    FooterComponent,
    LocationComponent, SpaceComponent, PreviousWorkComponent, ServicesComponent, WelcomeSection, NavbarComponent
  },
  data() {
    return {
      isAtHome: true,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat Alternates', sans-serif;
  /*font-family: 'Raleway', sans-serif;*/
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bg-pattern {
  background-image: url("/public/images/bg-pattern.svg");
}

.rectangle-shape {
  border-top-left-radius: 80px;
  border-bottom-right-radius: 80px;
  height: 26rem;
}

</style>
