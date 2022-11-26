<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>

    <WelcomeSection></WelcomeSection>
    <ServicesComponent></ServicesComponent>
    <PreviousWorkComponent></PreviousWorkComponent>
    <SpaceComponent></SpaceComponent>
    <LocationComponent></LocationComponent>
    <FooterComponent></FooterComponent>

    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Montserrat Alternates', sans-serif;
  /*font-family: 'Raleway', sans-serif;*/
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bg-pattern{
  background-image: url("/public/images/img_13.png");
}


</style>

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
  }
}
</script>