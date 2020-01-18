<template>
  <button
    class="gradient-button"
    :class="[`gradient-button-${size}`, { selected: selected }]"
    @click="emitClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "gradient-button",
  props: {
    size: {
      type: String,
      default: "medium"
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="stylus">
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  text-align: inherit;
  outline: none;
  border-radius: 0;
  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;
  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;
  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  /* Corrects inability to style clickable `input` types in iOS */
  -webkit-appearance: none;
}

/* Remove excess padding and border in Firefox 4+ */
&::-moz-focus-inner {
    border: 0;
    padding: 0;
}

button.gradient-button {
  width: 100%;
  background-color: #83644b;
  background-image: linear-gradient(#83644b, #6e5540);
  border-radius: 4px;
  border: 1px solid #4d3b2d;
  font-family: 'Cormorant Upright', serif;
  font-size: 1.5em;
  text-transform: capitalize;

  &:not(:first-child) {
    margin-top: 12px;
  }

  &.gradient-button-big {
    height: 65px;
  }

  &.gradient-button-medium {
    height: 40px;
    max-width: 230px;
    font-size: 1.7em;
  }

  &.gradient-button-small {
    height: 30px;
    max-width: 200px;

    &:not(:first-child) {
      margin-top: 8px;
    }
  }

  &.hover, &:hover,
  &.focus, &:focus {
    background-image: linear-gradient(#a78467, #87674d);
    border: 1px solid #674f3b;
  }

  &.selected,
  &.active, &:active {
    background-image: linear-gradient(#5c4736, #6a523e);
    border: 1px solid #443326;
  }
}
</style>
