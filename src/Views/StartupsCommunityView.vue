<template>
  <div>
    <div class="flex flex-col mt-20">
      <div class="bg-dark w-11/12 py-4 rounded-br-full rounded-tr-full z-10 ">
        <h1 class="text-white xl:px-24 px-4 font-bold lg:text-2xl text-lg">Startups Community</h1>
      </div>
      <div class="bg-orange w-full py-7 rounded-bl-full rounded-tl-full -mt-8 ml-28"></div>
    </div>

    <div class="xl:px-24 px-4 mt-32 mb-44">
      <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20">
        <div v-for="startup in startups" :key="startup.id - 1" class="flex flex-col space-y-6">
          <img class="grayscale h-32 w-full object-contain"
               :src="'https://dashboard.makersiq.org/storage/'+startup.logo" alt="">

          <div class="">
            <p v-if="!readMoreList.includes(startup.name)" class="text-sm text-justify">{{ startup.trimmedIdea }}<span
                @click="toggleDescription(startup.name,'more')"
                class="cursor-pointer text-orange text-sm ml-2">read more...</span>
            </p>
            <p v-else class="text-sm text-justify">{{ startup.idea }}<span @click="toggleDescription(startup.name,'less')"
                                                              class="cursor-pointer text-orange text-sm ml-2">read less...</span>
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "StartupsCommunityView",
  data() {
    return {
      startups: [],
      readMoreList: [],
    }
  },
  methods: {
    getStartups() {
      this.axios.get('https://dashboard.makersiq.org/api/startups').then(response => {

        let startups = response.data
        for (let i = 0; i < startups.length; i++) {

          if (startups[i].idea != null && startups[i].logo != null) {
            startups[i].trimmedIdea = startups[i].idea.split(" ").splice(0, 10).join(" ")
            this.startups.push(startups[i])
            // console.log(this.startups[i])

          }
        }


      })
    },
    toggleDescription(name, action) {
      if (action == 'more' && !this.readMoreList.includes(name)) {
        this.readMoreList.push(name)
      } else if (action == 'less' && this.readMoreList.includes(name)) {
        let index = this.readMoreList.indexOf(name)
        this.readMoreList.splice(index, 1)
      }
    }
  },
  mounted() {
    this.getStartups()
  }
}
</script>

<style scoped>

</style>