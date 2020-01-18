<template>
  <div id="main">
    <div class="main-inner md-layout md-gutter md-alignment-center-center">
      <options-panel class="md-layout-item md-small-size-100"></options-panel>
      <character-panel
        class="md-layout-item md-small-size-100"
      ></character-panel>
      <description-panel
        class="md-layout-item md-small-size-100"
      ></description-panel>
    </div>

    <div class="anigrams">
      <img src="../assets/AnigramsLogo.png" alt="Anigrams" />
    </div>
  </div>
</template>

<script>
import OptionsPanel from "../components/OptionsPanel.vue";
import CharacterPanel from "../components/CharacterPanel.vue";
import DescriptionPanel from "../components/DescriptionPanel.vue";

export default {
  name: "main-page",
  components: {
    OptionsPanel,
    CharacterPanel,
    DescriptionPanel
  }
};
</script>

<style lang="stylus">
#main {
  background-image: url('../assets/Background.jpg');

  .main-inner {
    margin-right: 0;
    margin-left: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
