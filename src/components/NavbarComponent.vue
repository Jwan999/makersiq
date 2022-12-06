<template>
  <div
      class="flex flex-col lg:flex-row lg:justify-center justify-start items-center lg:space-y-0 space-y-6 lg:px-20 px-0 lg:py-2 py-3">
    <div class="lg:w-2/12 w-full flex justify-start items-center space-x-3 px-4 lg:px-0">
      <img class="w-16" src="/images/makerss.svg" alt="">
      <h1 class="font-bold text-xl">MAKERS</h1>
    </div>

    <div class="lg:w-8/12 w-full flex lg:flex-row flex-col justify-center lg:space-x-3 space-x-0">
      <a v-if="!isAtHome" @click="isAtHome = true" to="/startups"
         class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">Main
        Page</a>
      <a @click="isAtHome = false" to="/about"
         class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">Meet
        The Makers</a>
      <a @click="isAtHome = false" to="/products"
         class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">Products
        Made</a>
      <a @click="isAtHome = false" to="/projects"
         class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">Projects
        Accomplished
      </a>
      <a @click="isAtHome = false" to="/startups"
         class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">Startups
        Community
      </a>
    </div>

    <div class="lg:w-2/12 w-full flex lg:justify-end lg:px-0 px-4">
      <a href="https://linktree.makersiq.org/"
         class="text-orange text-sm font-bold rounded-tr-full rounded-bl-full px-12 py-2 border border-orange hover:bg-orange hover:text-white transition-colors ease-in delay-100">
        Courses
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      isAtHome: true,
    }
  },
  watch: {
    isAtHome(newValue) {
      this.$emit('value-changed', newValue);
    }
  }
}
</script>

<style scoped>

</style>