<template>
  <div class="section-heading" :class="`section-heading-${color}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "section-heading",
  props: {
    color: {
      type: String,
      default: "white"
    }
  }
};
</script>

<style lang="stylus">
.section-heading {
  background-repeat: no-repeat;
  background-position: center center;
  text-transform: capitalize;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Upright', serif;
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 2em;
    margin-bottom: 20px;
  }

  &.section-heading-white {
    background-image: url('../assets/HeaderDecoration.png');
  }

  &.section-heading-brown {
    background-image: url('../assets/HeaderDecoration2.png');
    font-size: 0.8em;
  }
}
</style>
