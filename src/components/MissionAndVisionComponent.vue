<template>
  <div class="my-44">

    <div class="my-44 flex items-center xl:flex-row flex-col justify-between">
      <div class="lg:w-6/12 w-11/12">
        <h1 class="text-dark font-bold text-3xl">Mission & Vision</h1>
        <!--<h1 class="text-orange font-semibold">at the open space</h1>-->
        <div class="mt-6">

          <h1 class="text-orange font-semibold inline-block">Our mission</h1>
          is to provide a supportive and collaborative environment for entrepreneurs, creatives, and
          innovators to bring their ideas to life. We aim to foster a culture of innovation and creativity, providing
          access to resources, mentorship, and community to help our members grow and succeed.
          <br>
          <h1 class="text-orange font-semibold inline-block mt-2">Our vision</h1>
          is to be a catalyst for innovation and a hub for creative problem-solving, empowering individuals
          and organizations to drive positive change and make a lasting impact on their communities.

        </div>
      </div>
      <div class="lg:w-5/12 w-11/12 space-y-6 lg:mt-0 mt-14">
        <div class="flex items-center font-black text-4xl space-x-2 relative">
          <img class="w-2/12 z-10" src="/images/acomplishmentsComa.png" alt="">
          <div class="w-10/12">
            <div
                class="w-10/12 bg-text flex items-center lg:px-28 px-10 justify-between text-white bg-cover h-full bg-no-repeat absolute top-0 z-0">
              <div class="flex items-center">
                <span class="text-orange lg:text-4xl text-3xl font-bold">{{ numbers.students }} </span>
                <span class="text-orange lg:text-5xl text-3xl pr-6 font-bold"> +</span>
              </div>
              <span class="text-sm text-white"> Students Trained</span>
            </div>
          </div>

        </div>
        <div class="flex items-center font-black text-4xl space-x-2 relative">
          <img class="w-2/12 z-10" src="/images/acomplishmentsComa.png" alt="">
          <div class="w-10/12">
            <div
                class="w-10/12 bg-text flex items-center lg:px-32 px-10 justify-between text-white bg-cover h-full bg-no-repeat absolute top-0 z-0">
              <div class="flex items-center">
                <span class="text-orange lg:text-4xl text-3xl font-bold">{{ numbers.trainings }} </span>
                <span class="text-orange lg:text-5xl text-3xl pr-6 font-bold"> +</span>
              </div>
              <span class="text-sm text-white"> Trainings Held</span>
            </div>
          </div>

        </div>
        <div class="flex items-center font-black text-4xl space-x-2 relative">
          <img class="w-2/12 z-10" src="/images/acomplishmentsComa.png" alt="">
          <div class="w-10/12">
            <div
                class="w-10/12 bg-text flex items-center lg:px-32 px-10 justify-between text-white bg-cover h-full bg-no-repeat absolute top-0 z-0">
              <div class="flex items-center">
                <span class="text-orange lg:text-4xl text-3xl font-bold">{{ numbers.interns }} </span>
                <span class="text-orange lg:text-5xl text-3xl pr-6 font-bold"> +</span>
              </div>
              <span class="text-sm text-white"> Interns Mentored</span>
            </div>
          </div>

        </div>
      </div>


    </div>


  </div>
</template>


<!--/api/numbers-->
<script>
export default {
  name: "MissionAndVisionComponent",
  data() {
    return {
      numbers: {},
    }
  },
  methods: {
    getNumbers() {
      this.axios.get('https://dashboard.makersiq.org/api/numbers').then(response => {
        this.numbers = response.data
      })
    },
  },
  mounted() {
    this.getNumbers()

  }
}
</script>

<style scoped>

</style>