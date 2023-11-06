<template>

  <div>
    <!--title-->
    <div class="flex flex-col mt-20">
      <div class="bg-dark w-11/12 py-4 rounded-br-full rounded-tr-full z-10 ">
        <h1 class="text-white xl:px-24 px-4 font-bold xl:text-2xl text-lg">IRADA Network</h1>
      </div>
      <div class="bg-orange w-full py-7 rounded-bl-full rounded-tl-full -mt-8 ml-28"></div>
    </div>

    <div class="xl:px-24 px-10 mt-32 mb-44">
      <!--section one-->
      <div class="mt-32 mb-44">
        <h1 class="text-dark font-bold text-3xl">The Launch of the IRADA Network</h1>
        <!--<h1 class="text-orange font-semibold">at the open space</h1>-->
        <div class="mt-6 text-justify">

          The unveiling of the IRADA Network transpired at the
          "Reintegrating the Iraqi Business Landscape"
          conference that took place in Baghdad on Wednesday, September 27, 2023. This network is the creation of a
          consortium of
          prominent institutions specializing in business development and entrepreneurship.
          <br>
          Its primary aim is to fortify the private sector in Iraq through supporting creative young talents,
          nurturing
          emerging businesses,
          and empowering small and medium-sized enterprises (SMEs).
          The Iraqi Riyada Network for Access, Development, and Advancement (IRADA Network) involves a group of
          leading
          institutions in the Iraqi private sector. These include the RWANGA Foundation in Kurdistan, Qaf Lab in
          Mosul,
          and Tafa3ul Hub from Basra. Institutions From Baghdad include; Computiq, The Station, Makers Iraq, and
          KAPITA
          Business Hub.
          The IRADA Network aims to support small and medium-sized enterprises, startups, and youth communities, to
          eventually drive positive growth in building an investment-friendly environment.

        </div>
      </div>

      <!--section two-->
      <div class="my-44 flex items-center xl:flex-row flex-col justify-between">
        <div class="lg:w-6/12 w-full">

          <h1 class="text-dark font-bold text-3xl"> About IRADA:</h1>

          <div class="mt-6 text-justify">The Iraqi Riyada Network for Access, Development, and Advancement (IRADA) is a
            visionary
            network designed to
            unite and empower enablers within Iraq's business ecosystem. With a mission to provide access, drive
            development, and achieve advancement, IRADA aims to be a catalyst for positive change in the private sector
            and business ecosystem of Iraq.
          </div>

        </div>
        <div class="relative lg:w-5/12 w-11/12 lg:mt-0 mt-14">
          <img class="absolute z-10 lg:w-80 w-52 top-0 right-0 lg:-mr-24 -mr-6 lg:-mt-16 -mt-8"
               src="/images/bg-pattern.svg" alt="">
          <img class="rectangle-shape object-cover bg-dark w-full object-no-repeat"
               src="/images/iradaLogos/image_2023-10-19_17-10-41.png" alt="">
        </div>
      </div>

      <!--section three-->
      <div class="my-44 flex items-center xl:flex-row flex-col justify-between">
        <div class="">
          <h1 class="text-dark font-bold text-3xl">This will be achieved through
            two primary means:</h1>

          <div class="mt-6">

            <h1 class="text-orange font-semibold inline-block text-justify">Policy Formulation and Development</h1>
            through supporting and assisting government efforts in promoting economic development by formulating
            policies that
            strengthen the private sector. Such policies may include boosting small and medium-sized enterprises,
            providing legislation and decisions that facilitate the business environment, and encouraging investment and
            job creation. Furthermore, supporting startups and youth communities plays a vital role in promoting
            innovation and the economy. Achieving these goals requires coordination of efforts across various sectors
            and effective collaboration between the government, private sector, and civil society.
            <br>
            <h1 class="text-orange font-semibold inline-block">Raising Awareness</h1>
            of the importance of supporting the private sector and educating youth and relevant
            entities is crucial in the development of the Iraqi economy, as spreading this awareness plays a key role in
            expanding opportunities in the Iraqi market.
            Focusing on the importance of supporting the private sector can diversify the country's income sources and
            help boost the economy and create new job opportunities. Additionally, directing efforts toward educating
            youth about the significance of entrepreneurship and innovation is essential in motivating them to develop
            their skills and leverage their potential in enhancing the country's economy.


          </div>
        </div>
      </div>

      <!--section four-->
      <div class="my-44 flex items-center xl:flex-row flex-col justify-between">
        <div class="">
          <h1 class="text-dark font-bold text-3xl text-center">The Institutions Under the IRADA Network
          </h1>
          <div class="mt-6 mb-16">

            <div v-for="(institute,index) in iradaNetwork" v-bind:key="index"
                 class="flex items-center justify-between space-x-16 mt-28">
              <!--institute-->
              <div class="lg:w-6/12 w-full lg:flex items-center lg:space-x-6 space-x-0">
                <div class="w-3/12">
                  <img class="object-cover w-full" :src="`/images/iradaLogos/${institute.logo}`" alt="">
                </div>
                <div class="lg:w-9/12 w-full lg:mt-0 mt-12">
                  <h1 class="text-orange font-semibold inline-block">{{ institute.name }}</h1>
                  <p class="text-justify">{{ institute.description }}</p>
                </div>
              </div>
              <div
                  :class="institute.name == 'Makers of Baghdad' || institute.name == 'Computiq' || institute.name == 'KAPITA' || institute.name == 'RWANGA Foundation' ? 'order-last' :'order-first' "
                  class="lg:w-6/12 lg:flex hidden w-full"></div>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>

</template>
<script>


export default {
  components: {},
  name: "AboutIRADA",
  data() {
    return {
      iradaNetwork: [
        {
          name: 'Makers of Baghdad',
          description: 'Makers of Baghdad  is a thriving innovation hub established in 2017 with the mission to support startups and micro-businesses, foster the entrepreneurship ecosystem in the region and create job opportunities for the youth in the digital sector. Since the inception in 2017, Makers of Baghdad has made a significant impact, benefiting over 5,000 individuals, with a remarkable 48% female participation rate. Through our entrepreneurship training, coworking spaces, and maker space, Makers of Baghdad aims to cultivate a vibrant startup ecosystem in Baghdad. By supporting the entrepreneurial spirit, Makers of Baghdad contributes to the economic prosperity of Baghdad and in Iraq as a whole.',
          logo: 'Makers of Baghdad.png',
        },
        {
          name: 'Qaf Lab',
          description: 'QAF Lab is an impact-driven innovation hub and business incubator, with a steadfast commitment to fostering innovation and supporting the private sector and local community in Iraq, particularly in Nineveh. QAF Lab’s primary mission is to serve as a catalyst for the entrepreneurial ecosystem, paving the way for aspiring entrepreneurs to bridge knowledge gaps, secure essential funding, establish vital industry connections, and embark on their entrepreneurial journeys.',
          logo: 'Qaf-Vertical-Logo-RGB-Black@4x-8.png',
        },
        {
          name: 'Computiq',
          description: 'Computiq is a leading technology company that provides exceptional technological solutions and educational services with international certifications. The company looks forward to enhancing professional and business life by supporting individuals and businesses to make the most of technology. Computiq strives to make digital skills an integral part of our lives, much like the importance of mathematics and English.',
          logo: 'Computiq%20Logo.png',
        },
        {
          name: 'The Station',
          description: 'The Station is one of Iraq’s lead co-working spaces and Baghdad’s first co-working space. First established in 2018, as an independent, non-governmental, and non-profit organization, it became the cornerstone for Iraqi youth with fresh and inventive ideas to set a first foot into the business world and entrepreneurial projects.',
          logo: 'The%20Station%20.png',
        },
        {
          name: 'KAPITA',
          description: 'KAPITA is an Iraqi institution dedicated to the development of the private sector. It supports small and medium-sized projects through investment, research, and data provision. KAPITA also offers incubation and acceleration programs for startups and small to medium-sized enterprises, as well as market development programs.',
          logo: 'KAPITA%20-%20Black%20Logo.png',
        },
        {
          name: 'Tafa3ul Hub',
          description: 'Tafa3ul Hub is a leading platform aimed at promoting creativity and technology, and forming a community of innovative individuals. Our platform serves as a creative arena for inspiring and ambitious visions from all aspects of life, providing a space for them to communicate, collaborate, and innovate.',
          logo: 'Tafa3ul_logo-1-removebg-preview.png',
        },
        {
          name: 'RWANGA Foundation',
          description: 'RWANGA Foundation is a non-governmental organization that is considered the foremost platform for young entrepreneurs. It is the primary supporter for honing youthful entrepreneurial skills through economic and social empowerment across Iraq. The Rwanga Foundation prepares young individuals for the job market with competitive skills in a rapidly changing world. It contributes to supporting youth, including entrepreneurs, in small and medium-sized projects from both genders by transforming their innovative ideas in the fields of education, youth, the environment, and marginalized communities into successful businesses that empower society and provide employment opportunities.\n',
          logo: 'Rwanga New Logo-01.png',
        },
      ],
      readMoreList: [],
    }
  },
  methods: {
    // todo
    toggleDescription(name, action) {
      if (action == 'more' && !this.readMoreList.includes(name)) {
        this.readMoreList.push(name)
      } else if (action == 'less' && this.readMoreList.includes(name)) {
        let index = this.readMoreList.indexOf(name)
        this.readMoreList.splice(index, 1)
      }
    }

  }
}
</script>

<style scoped>

</style>