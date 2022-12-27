<template>
  <div>
    <div class="flex flex-col mt-20">
      <div class="bg-dark w-11/12 py-4 rounded-br-full rounded-tr-full z-10 ">
        <h1 class="text-white xl:px-24 px-4 font-bold xl:text-2xl text-lg">Projects Accomplished</h1>
      </div>
      <div class="bg-orange w-full py-7 rounded-bl-full rounded-tl-full -mt-8 ml-28"></div>
    </div>
    <div class="xl:px-24 px-4 mt-32 mb-44">
      <div class="w-8/12 text-sm">
        <!--        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at debitis error eum, id inventore-->
        <!--          laudantiuautogni nemo nihil perferendis praesentium repellat repudiandae rerum similique tempore voluptatibus-->
        <!--          voluptatum? Eveniet, nulla?</p>-->
      </div>

      <div class="space-y-16">
        <div v-for="year in years" :key="`year-${year}`"
             class="flex items-start xl:flex-row flex-col xl:space-x-64 space-x-0">
          <div class="xl:pb-0 pb-10">
            <h1 class="text-orange font-bold text-sm text-4xl">{{ year }}</h1>
          </div>
          <div class="w-full grid-cols-1 grid gap-6 xl:mt-0 mt-6">
            <!--2022-->
            <div :key="index" v-for="(project ,index) in getProjectsByYear(year)"
                 class="w-8/12 flex xl:flex-row flex-col xl:col-span-2 col-span-1 w-auto xl:rounded-full bg-dark xl:px-10 px-4 xl:py-5 py-6 items-center space-x-2">
              <img class="w-20 grayscale xl:my-0 my-2 xl:mr-4"
                   :src="'https://dashboard.makersiq.org/storage/'+ project.icon"
                   alt="">
              <p class="text-white text-sm">{{ project.overview }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PreviousProjectsView",
  data() {
    return {
      projects: [],
      years: [2022, 2021, 2020, 2019, 2018]
    }
  },
  methods: {
    getProjectsByYear(year) {
      return this.projects.filter(project => project.starting_date.includes(year) ?? false);
    },
    getProjects() {
      this.axios.get('https://dashboard.makersiq.org/api/projects').then(response => {
        this.projects = response.data
        console.log(this.MMXXIIProjects)
        // console.log(this.projects[0])
      })
    },
    // filterProjects(year) {
    //   return this.projects.filter(project => project.starting_date.includes(year) ?? project)
    // }
  },
  computed: {
    MMXXIIProjects() {
      return [this.projects.filter(project => project.starting_date.includes(2022) ?? project), 2022]
    },
    MMXXIProjects() {
      return [this.projects.filter(project => project.starting_date.includes(2021) ?? project), 2021]
    },
    MMXXProjects() {
      return [this.projects.filter(project => project.starting_date.includes(2020) ?? project), 2020]
    },
    MMXIXProjects() {
      return [this.projects.filter(project => project.starting_date.includes(2019) ?? project), 2019]
    },
    MMXVIIIProjects() {
      return [this.projects.filter(project => project.starting_date.includes(2018) ?? project), 2018]
    },

  },
  mounted() {
    this.getProjects()

  }
}
</script>

<style scoped>

</style>