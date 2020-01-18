<template>
  <div id="character-panel">
    <h2>Character</h2>

    <ul>
      <template v-for="key in Object.keys($store.state)">
        <li :key="key" v-if="isString($store.state[key])">
          {{ `${key}: ${$store.state[key]}` }}
        </li>
      </template>
      <li>
        {{ `skills: ${$store.state.skill.join(", ")}` }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "character-panel",

  methods: {
    isString(value) {
      return (
        typeof value === "string" ||
        value instanceof String ||
        typeof value === "number" ||
        value instanceof Number
      );
    }
  }
};
</script>

<style lang="stylus"></style>
