<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link exact to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/products">Products</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
      </nav>
    </header>
    <slot />
    <Footer v-if="showFooter" />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer
  },
  props: {
    showFooter: Boolean
  }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.body {
  background: #f3f7f9;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.active {
  color: #f66;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
