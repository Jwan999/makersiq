<template>
  <div>

    <WelcomeSection></WelcomeSection>
    <ServicesComponent></ServicesComponent>
    <PreviousWorkComponent></PreviousWorkComponent>
    <SpaceComponent></SpaceComponent>
    <LocationComponent></LocationComponent>

  </div>
</template>

<script>
import WelcomeSection from "@/components/WelcomeComponent";
import ServicesComponent from "@/components/ServicesComponent";
import PreviousWorkComponent from "@/components/PreviousWorkComponent";
import SpaceComponent from "@/components/SpaceComponent";
import LocationComponent from "@/components/LocationComponent";

export default {
  components: {
    LocationComponent, SpaceComponent, PreviousWorkComponent, ServicesComponent, WelcomeSection
  },
  data() {
    return {
      isAtHome: true,
    }
  }
}
</script>