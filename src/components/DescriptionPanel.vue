<template>
  <div id="description-panel">
    <div class="description-container">
      <section-heading color="brown">
        <h2>
          {{ getPath(`$store.state.text.${$store.state.description}.title`) }}
        </h2>
      </section-heading>

      <p
        v-html="
          getPath(`$store.state.text.${$store.state.description}.description`)
        "
      ></p>
    </div>
  </div>
</template>

<script>
import SectionHeading from "./SectionHeading.vue";

export default {
  name: "description-panel",
  components: {
    SectionHeading
  },
  methods: {
    getPath(path, separator = ".") {
      const properties = Array.isArray(path) ? path : path.split(separator);
      return properties.reduce((prev, curr) => prev && prev[curr], this);
    }
  }
};
</script>

<style lang="stylus">
#description-panel {
  display: flex;
  align-items: center;
  justify-content: center;

  .description-container {
    background: RGB(255,255,255,0.6);
    border: 1px solid #3c240b;
    height: 400px;
    width: 100%;
    max-width: 350px;
    padding: 16px;
    overflow-y: auto;

    h2 {
      text-align: center;
    }
  }
}
</style>
