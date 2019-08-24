<template>
  <footer>
    All copyrights {{ getCurrentYear }} by
    <a :href="href">Codeartist</a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      href: "http://google.de"
    };
  },
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
footer {
  text-align: center;
  color: #00a672;
  letter-spacing: 0.5px;
  padding: 20px;
}
</style>