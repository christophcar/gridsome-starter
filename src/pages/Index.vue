<template>
  <Layout :showFooter="true">
    <g-image alt="Example image" src="~/assets/images/favicon.png" width="135" />
    <h1>Hello, world!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
    <Footer />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Products",
    meta: [
      { charset: "utf-8" },
      { name: "author", content: "code artist" },
      {
        name: "description",
        content: "discover our entire range of luxury apparel"
      },
      { name: "keywords", content: "Premium Jackets, High-End Clothing" }
    ]
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
