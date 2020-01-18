<template>
  <div id="app">
    <div class="page-container">
      <h1>The Memoirs Character Creator</h1>
      <keep-alive>
        <component v-bind:is="currentPage" class="page"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import Main from "./pages/Main.vue";
import Title from "./pages/Title.vue";
import Credits from "./pages/Credits.vue";
import Profile from "./pages/Profile.vue";

Vue.use(VueMaterial);

export default {
  name: "app",

  components: {
    Main
  },

  data() {
    const pages = {
      main: Main,
      title: Title,
      credits: Credits,
      profile: Profile
    };
    return {
      pages,
      currentPage: pages["main"]
    };
  },

  methods: {
    moveToPage(pageName) {
      this.currentPage = this.pages[pageName];
    }
  }
};
</script>

<style lang="stylus">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
  color: #442d15;
  font-family: 'Caudex', 'Times New Roman', Times, serif;
  font-size: 16px;
}

#app {
  width: 100%;
  height: 100%; /** IE 6 */
  min-height: 100%;

  h1 {
    margin: 0;
    padding: 0;
    height: 0;
    visibility: hidden;
  }
}

.page-container {
  width: 100%;
  height: 100%;
  border: 5px solid #fff;
  box-sizing: border-box;
}

.page {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  border: 1.5px solid #442d15;
  box-sizing: border-box;
  position: relative;
}

.anigrams {
  position: absolute;
  bottom: 0;
  right: 5px;
}
</style>
