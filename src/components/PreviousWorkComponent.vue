<template>
  <div class="my-44 py-28 px-4 xl:px-0 xl:relative text-white xl:bg-transparent bg-dark w-full">
    <img class="xl:flex hidden w-full" src="/images/projects-bg.svg" alt="">
    <div
        class="xl:pl-24 pl-0 xl:pr-10 pr-0 xl:absolute xl:top-0 xl:bottom-0 xl:m-auto xl:m-0 flex xl:flex-nowrap flex-wrap justify-between items-center xl:space-x-4 space-x-0 space-y-10">
      <div class="text-start xl:w-3/12 w-full">
        <h1 class="text-3xl font-bold">Projects Accomplished</h1>
        <p class="text-sm mt-6">
          The combination of technical expertise, project management skills, strong communication and
          interpersonal skills allowed us to manage or co-organize training and manufacturing projects.
          </p>
      </div>
      <div
          class="xl:w-8/12 w-full flex flex-col items-center xl:flex-row xl:space-x-4 space-x-0 xl:space-y-0 space-y-6">
        <div :key="project.id - 1" v-for="project in projects" class="xl:w-6/12 w-full flex ">
          <div class="flex space-x-6 items-center bg-white rounded-full py-3 px-10">
            <img class="w-20 grayscale object-cover" :src="'https://management.makersiq.org/storage/'+project.icon"
                 alt="">
            <p class="text-sm text-dark">{{ project.overview }}</p>
          </div>
        </div>

      </div>
      <div class="xl:w-1/12 w-full flex xl:justify-start justify-center">
        <a href="/projects"
           class="text-orange text-sm font-bold rounded-tr-full rounded-bl-full px-12 py-2 border border-transparent hover:border-orange transition-colors ease-in delay-100">
          More...
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviousWorkComponent",
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    getProjects() {
      this.axios.get('https://management.makersiq.org/api/projects').then(response => {
        this.projects.push(response.data[2])
        this.projects.push(response.data[0])
      })
    },
  },
  mounted() {
    this.getProjects()

  }
}
</script>

<style scoped>

</style>