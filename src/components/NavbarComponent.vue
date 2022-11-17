<template>
  <div class="flex justify-center items-center lg:px-28 lg:py-4 px-4 py-3">
    <div class="w-2/12 flex justify-start space-x-3 items-center">
      <img class="w-10" src="/images/img_2.png" alt="">
      <h1 class="font-bold text-xl">MAKERS</h1>
    </div>

    <div class="w-8/12 flex justify-center space-x-٤">
      <router-link to="/about" class="cursor-pointer text-gray-700 text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange-600 hover:border-orange-500 rounded-full px-5 py-2">Meet The Makers</router-link>
      <router-link to="/products" class="cursor-pointer text-gray-700 text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange-600 hover:border-orange-500 rounded-full px-5 py-2">Products Made</router-link>
      <router-link to="/projects" class="cursor-pointer text-gray-700 text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange-600 hover:border-orange-500 rounded-full px-5 py-2">Projects Accomplished
      </router-link>
      <router-link to="/startups" class="cursor-pointer text-gray-700 text-sm border border-transparent transition-colors ease-in delay-100 hover:text-orange-600 hover:border-orange-500 rounded-full px-5 py-2">Startups Community
      </router-link>
    </div>

    <div class="w-2/12 flex justify-end">
      <h1 class="text-orange-500 font-bold">Courses</h1>
    </div>
  </div>
</template>

<script>
export default {
  // name: "router",
  name: "NavbarComponent",
}
</script>

<style scoped>

</style>