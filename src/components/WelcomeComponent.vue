<template>
  <div>
    <div class="md:flex hidden justify-between items-center mt-52 mb-64">
      <div class="relative">
        <img class="h-72" src="/images/Path.svg" alt="">
        <img class="absolute top-0 right-0 mr-24 -mt-10 w-24" src="/images/img_9.png" alt="">
      </div>
      <div>
        <img class="h-80" src="/images/Group%206.svg" alt="">
      </div>
      <div class="relative">
        <img class="h-72" src="/images/Path%202.svg" alt="">
        <img class="absolute bottom-0 right-0 mr-16 -mb-10 w-24" src="/images/img_10.png" alt="">
      </div>
    </div>
    <div class="flex md:hidden justify-between items-center mt-24 mb-64 px-4">
      <img class="object-cover" src="/images/img_5.png" alt="">
    </div>


  </div>

</template>

<script>
export default {
  name: 'WelcomeSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<link rel="stylesheet" href="/src/input.css">
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
