<template>
  <div
      class="flex flex-col lg:flex-row lg:justify-center justify-start items-center lg:space-y-0 space-y-6 lg:px-20 px-0 lg:py-2 py-3">
    <router-link to="/" class="lg:w-2/12 w-full flex justify-start items-center space-x-3 px-4 lg:px-0">
      <img class="w-16" src="/images/makerss.svg" alt="">
      <h1 class="font-bold text-xl">MAKERS</h1>
    </router-link>

    <div class="lg:w-8/12 w-full flex lg:flex-row flex-col justify-center lg:space-x-3 space-x-0">
      <!--      <router-link v-if="pathname.length > 4" to="/"-->
      <!--                   class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">-->
      <!--        Main Page-->
      <!--      </router-link>-->
      <router-link to="/about"
                   class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">
        Meet The Makers
      </router-link>
      <router-link to="/products"
                   class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">
        Products Made
      </router-link>
      <router-link to="/projects"
                   class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">
        Projects Accomplished
      </router-link>
      <router-link to="/startups"
                   class="cursor-pointer text-dark text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange hover:border-orange rounded-full lg:px-5 px-4 py-2">
        Startups Community
      </router-link>
    </div>

    <div class="lg:w-2/12 w-full flex lg:justify-end lg:px-0 px-4">
      <a href="https://linktree.makersiq.org/"
         class="text-orange text-sm font-bold rounded-tr-full rounded-bl-full px-12 py-2 border border-transparent hover:border-orange transition-colors ease-in delay-100">
        On Going Courses
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      // pathname: location.pathname,
    }
  },

}
</script>

<style scoped>

</style>