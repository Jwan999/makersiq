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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
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