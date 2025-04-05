<template>
  <div>
    <div class="flex flex-col mt-20">
      <div class="bg-dark w-11/12 py-4 rounded-br-full rounded-tr-full z-10 ">
        <h1 class="text-white xl:px-24 px-4 font-bold lg:text-2xl text-lg">Products Made</h1>
      </div>
      <div class="bg-orange w-full py-7 rounded-bl-full rounded-tl-full -mt-8 ml-28"></div>
    </div>
    <div class="xl:px-24 px-4 mt-32 mb-44">
      <div class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10">
        <div :key="product.id - 1" v-for="product in products" class="bg-dark p-4">
          <img class="w-full h-56 object-cover object-center"
               :src="'https://management.makersiq.org/storage/'+ product.image" alt="">
          <div class="mt-2">
            <h1 class="text-sm text-orange font-bold">{{ product.name }}</h1>
            <p class="text-sm text-white">{{ product.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsView",
  data() {
    return {
      products: []
    }
  },
  methods: {
    getProducts() {
      this.axios.get('https://management.makersiq.org/api/products').then(response => {
        this.products = response.data
        console.log(this.products)
      })
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style scoped>

</style>