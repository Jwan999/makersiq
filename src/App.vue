<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <FooterComponent></FooterComponent>

  </div>
</template>


<script>

import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default {
  components: {
    FooterComponent,
    NavbarComponent
  },
  data() {
    return {
      // pathname: location.pathname,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat Alternates', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

html, body {
  position: relative;
  overflow-x: hidden;
}

.bg-text {
  background-image: url("/public/images/acomplishmentsText.png")
}

.bg-pattern {
  background-image: url("/public/images/bg-pattern.svg");
}

.rectangle-shape {
  border-top-left-radius: 80px;
  border-bottom-right-radius: 80px;
  height: 26rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
