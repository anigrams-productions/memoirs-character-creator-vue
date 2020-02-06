<template>
  <div id="character-panel">
    <div class="character-panel-container">
      <div
        v-if="showLayer('body', 'horns')"
        class="character-panel-layer"
        :class="
          `horns-${$store.state.horn} color-${$store.state.hornColor} left`
        "
      ></div>
      <div
        v-if="showLayer('body', 'wings')"
        class="character-panel-layer"
        :class="`wings-${$store.state.wing} color-${$store.state.wingColor}`"
      ></div>
      <div
        v-if="showLayer('head', 'hairstyles')"
        class="character-panel-layer"
        :class="
          `hair-${$store.state.hairstyle} color-${$store.state.hairColor} back`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="`weapon-${$store.state.weapon}`"
      ></div>
      <div
        v-if="showLayer('body', 'tail')"
        class="character-panel-layer"
        :class="`tail-${$store.state.tail} color-${$store.state.tailColor}`"
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `skin-${$store.state.pose} color-${$store.state.skinColor} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `body-tattoo-${$store.state.bodyTattoo} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="`arm-tattoo-${$store.state.armTattoo}`"
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `armor-${$store.state.armor} region-${$store.state.region} pose-${$store.state.pose} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `skin-${$store.state.pose}-arms color-${$store.state.skinColor} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `arm-tattoo-${$store.state.armTattoo}-arms pose-${$store.state.pose}`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `armor-${$store.state.armor}-arms pose-${$store.state.pose} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `face-tattoo-${$store.state.faceTattoo} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `scar-${$store.state.scar} color-${$store.state.skinColor} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        v-if="showLayer('face', 'cheeks')"
        class="character-panel-layer"
        :class="
          `cheeks-${$store.state.cheek} color-${$store.state.skinColor} race-${$store.state.race}`
        "
      ></div>
      <div
        v-if="showLayer('face', 'moles')"
        class="character-panel-layer"
        :class="`mole mole-${$store.state.mole} race-${$store.state.race}`"
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `eyes eyes-${$store.state.eye} color-${$store.state.eyeColor} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        v-if="showLayer('head', 'eyebrows')"
        class="character-panel-layer"
        :class="
          `eyebrows eyebrows-${$store.state.eyebrow} race-${$store.state.race}`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `accessory-${$store.state.accessory} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        v-if="showLayer('head', 'mouths')"
        class="character-panel-layer"
        :class="
          `mouth-${$store.state.mouth} color-${$store.state.lipColor} race-${$store.state.race}`
        "
      ></div>
      <div
        v-if="showLayer('head', 'hairstyles')"
        class="character-panel-layer"
        :class="
          `hair-${$store.state.hairstyle} color-${$store.state.hairColor} front`
        "
      ></div>
      <div
        v-if="showLayer('head', 'beards')"
        class="character-panel-layer"
        :class="
          `facial-hair-${$store.state.beard} color-${$store.state.hairColor}`
        "
      ></div>
      <div
        class="character-panel-layer"
        :class="
          `ears color-${$store.state.skinColor} race-${$store.state.race} subrace-${$store.state.subrace}`
        "
      ></div>
      <div
        v-if="showLayer('face', 'piercings')"
        class="character-panel-layer"
        :class="
          `piercings piercings-${$store.state.piercing} race-${$store.state.race}`
        "
      ></div>
      <div
        v-if="showLayer('head', 'hairstyles')"
        class="character-panel-layer"
        :class="
          `hair-${$store.state.hairstyle} color-${$store.state.hairColor} overlay`
        "
      ></div>
      <div
        v-if="showLayer('face', 'piercings')"
        class="character-panel-layer"
        :class="`piercings-${$store.state.piercing} overlay`"
      ></div>
      <div
        v-if="showLayer('body', 'horns')"
        class="character-panel-layer"
        :class="
          `horns-${$store.state.horn} color-${$store.state.hornColor} right`
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "character-panel",

  methods: {
    showLayer(type, layer) {
      return this.$store.state[type][this.$store.state.race][
        this.$store.state.subrace
      ].hasOwnProperty(layer);
    }
  }
};
</script>

<style lang="stylus">
#character-panel {
  display: flex;
  align-items: center;
  justify-content: center;

  .character-panel-container {
    position: relative;
    width: 367px;
    height: 609px;
  }

  .character-panel-layer {
    position: absolute;

    &.skin-1 {
      width: 251px;
      height: 469px;
      left: 70px;
      top: 61px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 0) calc(-469px * 0);
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 1) calc(-469px * 0);
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 2) calc(-469px * 0);
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 3) calc(-469px * 0);
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 4) calc(-469px * 0);
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 5) calc(-469px * 0);
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 6) calc(-469px * 0);
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 0) calc(-469px * 1);
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 1) calc(-469px * 1);
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 2) calc(-469px * 1);
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 3) calc(-469px * 1);
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 4) calc(-469px * 1);
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 5) calc(-469px * 1);
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 6) calc(-469px * 1);
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 0) calc(-469px * 2);
      }

      &.color-16 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 1) calc(-469px * 2);
      }

      &.color-17 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 2) calc(-469px * 2);
      }

      &.color-18 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 3) calc(-469px * 2);
      }

      &.color-19 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 4) calc(-469px * 2);
      }

      &.color-20 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 5) calc(-469px * 2);
      }

      &.color-21 {
        background: url('../assets/Skin-Humanoid.png') calc(-251px * 6) calc(-469px * 2);
      }
    }

    &.skin-2 {
      width: 197px;
      height: 469px;
      left: 82px;
      top: 61px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 0)) calc(-469px * 0);
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 1)) calc(-469px * 0);
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 2)) calc(-469px * 0);
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 3)) calc(-469px * 0);
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 4)) calc(-469px * 0);
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 5)) calc(-469px * 0);
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 6)) calc(-469px * 0);
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 0)) calc(-469px * 1);
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 1)) calc(-469px * 1);
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 2)) calc(-469px * 1);
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 3)) calc(-469px * 1);
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 4)) calc(-469px * 1);
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 5)) calc(-469px * 1);
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 6)) calc(-469px * 1);
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 0)) calc(-469px * 2);
      }

      &.color-16 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 1)) calc(-469px * 2);
      }

      &.color-17 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 2)) calc(-469px * 2);
      }

      &.color-18 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 3)) calc(-469px * 2);
      }

      &.color-19 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 4)) calc(-469px * 2);
      }

      &.color-20 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 5)) calc(-469px * 2);
      }

      &.color-21 {
        background: url('../assets/Skin-Humanoid.png') calc(-1757px + calc(-197px * 6)) calc(-469px * 2);
      }
    }

    &.skin-3 {
      width: 168px;
      height: 469px;
      left: 111px;
      top: 61px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 0)) calc(-469px * 0);
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 1)) calc(-469px * 0);
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 2)) calc(-469px * 0);
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 3)) calc(-469px * 0);
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 4)) calc(-469px * 0);
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 5)) calc(-469px * 0);
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 6)) calc(-469px * 0);
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 0)) calc(-469px * 1);
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 1)) calc(-469px * 1);
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 2)) calc(-469px * 1);
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 3)) calc(-469px * 1);
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 4)) calc(-469px * 1);
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 5)) calc(-469px * 1);
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 6)) calc(-469px * 1);
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 0)) calc(-469px * 2);
      }

      &.color-16 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 1)) calc(-469px * 2);
      }

      &.color-17 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 2)) calc(-469px * 2);
      }

      &.color-18 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 3)) calc(-469px * 2);
      }

      &.color-19 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 4)) calc(-469px * 2);
      }

      &.color-20 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 5)) calc(-469px * 2);
      }

      &.color-21 {
        background: url('../assets/Skin-Humanoid.png') calc(-3136px + calc(-168px * 6)) calc(-469px * 2);
      }
    }

    &.skin-3-arms {
      width: 129px;
      height: 59px;
      left: 122px;
      top: 279px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 0) calc(-2814px + calc(-59px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 1) calc(-2814px + calc(-59px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 2) calc(-2814px + calc(-59px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 3) calc(-2814px + calc(-59px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 4) calc(-2814px + calc(-59px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 5) calc(-2814px + calc(-59px * 0));
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 6) calc(-2814px + calc(-59px * 0));
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 0) calc(-2814px + calc(-59px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 1) calc(-2814px + calc(-59px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 2) calc(-2814px + calc(-59px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 3) calc(-2814px + calc(-59px * 1));
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 4) calc(-2814px + calc(-59px * 1));
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 5) calc(-2814px + calc(-59px * 1));
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 6) calc(-2814px + calc(-59px * 1));
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 0) calc(-2814px + calc(-59px * 2));
      }

      &.color-16 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 1) calc(-2814px + calc(-59px * 2));
      }

      &.color-17 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 2) calc(-2814px + calc(-59px * 2));
      }

      &.color-18 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 3) calc(-2814px + calc(-59px * 2));
      }

      &.color-19 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 4) calc(-2814px + calc(-59px * 2));
      }

      &.color-20 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 5) calc(-2814px + calc(-59px * 2));
      }

      &.color-21 {
        background: url('../assets/Skin-Humanoid.png') calc(-129px * 6) calc(-2814px + calc(-59px * 2));
      }
    }

    &.skin-4 {
      width: 178px;
      height: 469px;
      left: 101px;
      top: 61px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 0) calc(-1407px + calc(-469px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 1) calc(-1407px + calc(-469px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 2) calc(-1407px + calc(-469px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 3) calc(-1407px + calc(-469px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 4) calc(-1407px + calc(-469px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 5) calc(-1407px + calc(-469px * 0));
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 6) calc(-1407px + calc(-469px * 0));
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 0) calc(-1407px + calc(-469px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 1) calc(-1407px + calc(-469px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 2) calc(-1407px + calc(-469px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 3) calc(-1407px + calc(-469px * 1));
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 4) calc(-1407px + calc(-469px * 1));
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 5) calc(-1407px + calc(-469px * 1));
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 6) calc(-1407px + calc(-469px * 1));
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 0) calc(-1407px + calc(-469px * 2));
      }

      &.color-16 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 1) calc(-1407px + calc(-469px * 2));
      }

      &.color-17 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 2) calc(-1407px + calc(-469px * 2));
      }

      &.color-18 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 3) calc(-1407px + calc(-469px * 2));
      }

      &.color-19 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 4) calc(-1407px + calc(-469px * 2));
      }

      &.color-20 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 5) calc(-1407px + calc(-469px * 2));
      }

      &.color-21 {
        background: url('../assets/Skin-Humanoid.png') calc(-178px * 6) calc(-1407px + calc(-469px * 2));
      }
    }

    &.skin-5 {
      width: 212px;
      height: 469px;
      left: 82px;
      top: 61px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 0)) calc(-1407px + calc(-469px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 1)) calc(-1407px + calc(-469px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 2)) calc(-1407px + calc(-469px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 3)) calc(-1407px + calc(-469px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 4)) calc(-1407px + calc(-469px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 5)) calc(-1407px + calc(-469px * 0));
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 6)) calc(-1407px + calc(-469px * 0));
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 0)) calc(-1407px + calc(-469px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 1)) calc(-1407px + calc(-469px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 2)) calc(-1407px + calc(-469px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 3)) calc(-1407px + calc(-469px * 1));
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 4)) calc(-1407px + calc(-469px * 1));
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 5)) calc(-1407px + calc(-469px * 1));
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 6)) calc(-1407px + calc(-469px * 1));
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 0)) calc(-1407px + calc(-469px * 2));
      }

      &.color-16 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 1)) calc(-1407px + calc(-469px * 2));
      }

      &.color-17 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 2)) calc(-1407px + calc(-469px * 2));
      }

      &.color-18 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 3)) calc(-1407px + calc(-469px * 2));
      }

      &.color-19 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 4)) calc(-1407px + calc(-469px * 2));
      }

      &.color-20 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 5)) calc(-1407px + calc(-469px * 2));
      }

      &.color-21 {
        background: url('../assets/Skin-Humanoid.png') calc(-1246px + calc(-212px * 6)) calc(-1407px + calc(-469px * 2));
      }
    }

    &.skin-6 {
      width: 209px;
      height: 469px;
      left: 70px;
      top: 61px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 0)) calc(-1407px + calc(-469px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 1)) calc(-1407px + calc(-469px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 2)) calc(-1407px + calc(-469px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 3)) calc(-1407px + calc(-469px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 4)) calc(-1407px + calc(-469px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 5)) calc(-1407px + calc(-469px * 0));
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 6)) calc(-1407px + calc(-469px * 0));
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 0)) calc(-1407px + calc(-469px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 1)) calc(-1407px + calc(-469px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 2)) calc(-1407px + calc(-469px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 3)) calc(-1407px + calc(-469px * 1));
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 4)) calc(-1407px + calc(-469px * 1));
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 5)) calc(-1407px + calc(-469px * 1));
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 6)) calc(-1407px + calc(-469px * 1));
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 0)) calc(-1407px + calc(-469px * 2));
      }

      &.color-16 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 1)) calc(-1407px + calc(-469px * 2));
      }

      &.color-17 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 2)) calc(-1407px + calc(-469px * 2));
      }

      &.color-18 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 3)) calc(-1407px + calc(-469px * 2));
      }

      &.color-19 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 4)) calc(-1407px + calc(-469px * 2));
      }

      &.color-20 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 5)) calc(-1407px + calc(-469px * 2));
      }

      &.color-21 {
        background: url('../assets/Skin-Humanoid.png') calc(-2730px + calc(-209px * 6)) calc(-1407px + calc(-469px * 2));
      }
    }

    &.skin-6-arms {
      width: 65px;
      height: 58px;
      left: 186px;
      top: 279px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 0)) calc(-2814px + calc(-58px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 1)) calc(-2814px + calc(-58px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 2)) calc(-2814px + calc(-58px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 3)) calc(-2814px + calc(-58px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 4)) calc(-2814px + calc(-58px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 5)) calc(-2814px + calc(-58px * 0));
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 6)) calc(-2814px + calc(-58px * 0));
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 0)) calc(-2814px + calc(-58px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 1)) calc(-2814px + calc(-58px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 2)) calc(-2814px + calc(-58px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 3)) calc(-2814px + calc(-58px * 1));
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 4)) calc(-2814px + calc(-58px * 1));
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 5)) calc(-2814px + calc(-58px * 1));
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 6)) calc(-2814px + calc(-58px * 1));
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 0)) calc(-2814px + calc(-58px * 2));
      }

      &.color-16 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 1)) calc(-2814px + calc(-58px * 2));
      }

      &.color-17 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 2)) calc(-2814px + calc(-58px * 2));
      }

      &.color-18 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 3)) calc(-2814px + calc(-58px * 2));
      }

      &.color-19 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 4)) calc(-2814px + calc(-58px * 2));
      }

      &.color-20 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 5)) calc(-2814px + calc(-58px * 2));
      }

      &.color-21 {
        background: url('../assets/Skin-Humanoid.png') calc(-903px + calc(-65px * 6)) calc(-2814px + calc(-58px * 2));
      }
    }

    &.skin-1.race-dwarf {
      width: 233px;
      height: 384px;
      left: 76px;
      top: 146px;

      &.color-1 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 0) calc(-384px * 0);
      }

      &.color-2 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 1) calc(-384px * 0);
      }

      &.color-3 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 2) calc(-384px * 0);
      }

      &.color-4 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 3) calc(-384px * 0);
      }

      &.color-5 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 4) calc(-384px * 0);
      }

      &.color-6 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 0) calc(-384px * 1);
      }

      &.color-7 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 1) calc(-384px * 1);
      }

      &.color-8 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 2) calc(-384px * 1);
      }

      &.color-9 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 3) calc(-384px * 1);
      }

      &.color-10 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 4) calc(-384px * 1);
      }

      &.color-11 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 0) calc(-384px * 2);
      }

      &.color-12 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 1) calc(-384px * 2);
      }

      &.color-13 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 2) calc(-384px * 2);
      }

      &.color-14 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 3) calc(-384px * 2);
      }

      &.color-15 {
        background: url('../assets/Skin-Halfling.png') calc(-233px * 4) calc(-384px * 2);
      }
    }

    &.skin-2.race-dwarf {
      width: 186px;
      height: 384px;
      left: 93px;
      top: 146px;

      &.color-1 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 0)) calc(-384px * 0);
      }

      &.color-2 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 1)) calc(-384px * 0);
      }

      &.color-3 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 2)) calc(-384px * 0);
      }

      &.color-4 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 3)) calc(-384px * 0);
      }

      &.color-5 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 4)) calc(-384px * 0);
      }

      &.color-6 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 0)) calc(-384px * 1);
      }

      &.color-7 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 1)) calc(-384px * 1);
      }

      &.color-8 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 2)) calc(-384px * 1);
      }

      &.color-9 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 3)) calc(-384px * 1);
      }

      &.color-10 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 4)) calc(-384px * 1);
      }

      &.color-11 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 0)) calc(-384px * 2);
      }

      &.color-12 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 1)) calc(-384px * 2);
      }

      &.color-13 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 2)) calc(-384px * 2);
      }

      &.color-14 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 3)) calc(-384px * 2);
      }

      &.color-15 {
        background: url('../assets/Skin-Halfling.png') calc(-1165px + calc(-186px * 4)) calc(-384px * 2);
      }
    }

    &.skin-3.race-dwarf {
      width: 168px;
      height: 384px;
      left: 111px;
      top: 146px;

      &.color-1 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 0)) calc(-384px * 0);
      }

      &.color-2 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 1)) calc(-384px * 0);
      }

      &.color-3 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 2)) calc(-384px * 0);
      }

      &.color-4 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 3)) calc(-384px * 0);
      }

      &.color-5 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 4)) calc(-384px * 0);
      }

      &.color-6 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 0)) calc(-384px * 1);
      }

      &.color-7 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 1)) calc(-384px * 1);
      }

      &.color-8 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 2)) calc(-384px * 1);
      }

      &.color-9 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 3)) calc(-384px * 1);
      }

      &.color-10 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 4)) calc(-384px * 1);
      }

      &.color-11 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 0)) calc(-384px * 2);
      }

      &.color-12 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 1)) calc(-384px * 2);
      }

      &.color-13 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 2)) calc(-384px * 2);
      }

      &.color-14 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 3)) calc(-384px * 2);
      }

      &.color-15 {
        background: url('../assets/Skin-Halfling.png') calc(-2095px + calc(-168px * 4)) calc(-384px * 2);
      }
    }

    &.skin-3-arms.race-dwarf {
      width: 124px;
      height: 54px;
      left: 121px;
      top: 361px;

      &.color-1 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 0) calc(-2304px + calc(-54px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 1) calc(-2304px + calc(-54px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 2) calc(-2304px + calc(-54px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 3) calc(-2304px + calc(-54px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 4) calc(-2304px + calc(-54px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 0) calc(-2304px + calc(-54px * 1));
      }

      &.color-7 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 1) calc(-2304px + calc(-54px * 1));
      }

      &.color-8 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 2) calc(-2304px + calc(-54px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 3) calc(-2304px + calc(-54px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 4) calc(-2304px + calc(-54px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 0) calc(-2304px + calc(-54px * 2));
      }

      &.color-12 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 1) calc(-2304px + calc(-54px * 2));
      }

      &.color-13 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 2) calc(-2304px + calc(-54px * 2));
      }

      &.color-14 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 3) calc(-2304px + calc(-54px * 2));
      }

      &.color-15 {
        background: url('../assets/Skin-Halfling.png') calc(-124px * 4) calc(-2304px + calc(-54px * 2));
      }
    }

    &.skin-4.race-dwarf {
      width: 170px;
      height: 384px;
      left: 109px;
      top: 146px;

      &.color-1 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 0) calc(-1152px + calc(-384px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 1) calc(-1152px + calc(-384px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 2) calc(-1152px + calc(-384px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 3) calc(-1152px + calc(-384px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 4) calc(-1152px + calc(-384px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 0) calc(-1152px + calc(-384px * 1));
      }

      &.color-7 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 1) calc(-1152px + calc(-384px * 1));
      }

      &.color-8 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 2) calc(-1152px + calc(-384px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 3) calc(-1152px + calc(-384px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 4) calc(-1152px + calc(-384px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 0) calc(-1152px + calc(-384px * 2));
      }

      &.color-12 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 1) calc(-1152px + calc(-384px * 2));
      }

      &.color-13 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 2) calc(-1152px + calc(-384px * 2));
      }

      &.color-14 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 3) calc(-1152px + calc(-384px * 2));
      }

      &.color-15 {
        background: url('../assets/Skin-Halfling.png') calc(-170px * 4) calc(-1152px + calc(-384px * 2));
      }
    }

    &.skin-5.race-dwarf {
      width: 186px;
      height: 384px;
      left: 93px;
      top: 146px;

      &.color-1 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 0)) calc(-1152px + calc(-384px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 1)) calc(-1152px + calc(-384px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 2)) calc(-1152px + calc(-384px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 3)) calc(-1152px + calc(-384px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 4)) calc(-1152px + calc(-384px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 0)) calc(-1152px + calc(-384px * 1));
      }

      &.color-7 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 1)) calc(-1152px + calc(-384px * 1));
      }

      &.color-8 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 2)) calc(-1152px + calc(-384px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 3)) calc(-1152px + calc(-384px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 4)) calc(-1152px + calc(-384px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 0)) calc(-1152px + calc(-384px * 2));
      }

      &.color-12 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 1)) calc(-1152px + calc(-384px * 2));
      }

      &.color-13 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 2)) calc(-1152px + calc(-384px * 2));
      }

      &.color-14 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 3)) calc(-1152px + calc(-384px * 2));
      }

      &.color-15 {
        background: url('../assets/Skin-Halfling.png') calc(-849px + calc(-186px * 4)) calc(-1152px + calc(-384px * 2));
      }
    }

    &.skin-6.race-dwarf {
      width: 203px;
      height: 384px;
      left: 76px;
      top: 146px;

      &.color-1 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 0)) calc(-1152px + calc(-384px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 1)) calc(-1152px + calc(-384px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 2)) calc(-1152px + calc(-384px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 3)) calc(-1152px + calc(-384px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 4)) calc(-1152px + calc(-384px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 0)) calc(-1152px + calc(-384px * 1));
      }

      &.color-7 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 1)) calc(-1152px + calc(-384px * 1));
      }

      &.color-8 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 2)) calc(-1152px + calc(-384px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 3)) calc(-1152px + calc(-384px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 4)) calc(-1152px + calc(-384px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 0)) calc(-1152px + calc(-384px * 2));
      }

      &.color-12 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 1)) calc(-1152px + calc(-384px * 2));
      }

      &.color-13 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 2)) calc(-1152px + calc(-384px * 2));
      }

      &.color-14 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 3)) calc(-1152px + calc(-384px * 2));
      }

      &.color-15 {
        background: url('../assets/Skin-Halfling.png') calc(-1778px + calc(-203px * 4)) calc(-1152px + calc(-384px * 2));
      }
    }

    &.skin-6-arms.race-dwarf {
      width: 58px;
      height: 53px;
      left: 187px;
      top: 360px;

      &.color-1 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 0)) calc(-2304px + calc(-53px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 1)) calc(-2304px + calc(-53px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 2)) calc(-2304px + calc(-53px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 3)) calc(-2304px + calc(-53px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 4)) calc(-2304px + calc(-53px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 0)) calc(-2304px + calc(-53px * 1));
      }

      &.color-7 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 1)) calc(-2304px + calc(-53px * 1));
      }

      &.color-8 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 2)) calc(-2304px + calc(-53px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 3)) calc(-2304px + calc(-53px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 4)) calc(-2304px + calc(-53px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 0)) calc(-2304px + calc(-53px * 2));
      }

      &.color-12 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 1)) calc(-2304px + calc(-53px * 2));
      }

      &.color-13 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 2)) calc(-2304px + calc(-53px * 2));
      }

      &.color-14 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 3)) calc(-2304px + calc(-53px * 2));
      }

      &.color-15 {
        background: url('../assets/Skin-Halfling.png') calc(-620px + calc(-58px * 4)) calc(-2304px + calc(-53px * 2));
      }
    }

    &.skin-1.subrace-aguama {
      width: 251px;
      height: 432px;
      left: 70px;
      top: 98px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 0) 0;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 1) 0;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 2) 0;
      }
    }

    &.skin-2.subrace-aguama {
      width: 251px;
      height: 432px;
      left: 70px;
      top: 98px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 0)) 0;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 1)) 0;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 2)) 0;
      }
    }

    &.skin-3.subrace-aguama {
      width: 251px;
      height: 432px;
      left: 70px;
      top: 98px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 0) -432px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 1) -432px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 2) -432px;
      }
    }

    &.skin-3-arms.subrace-aguama {
      width: 129px;
      height: 58px;
      left: 122px;
      top: 279px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 0)) -1452px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 1)) -1452px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 2)) -1452px;
      }
    }

    &.skin-4.subrace-aguama {
      width: 251px;
      height: 432px;
      left: 70px;
      top: 98px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 0)) -432px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 1)) -432px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 2)) -432px;
      }
    }

    &.skin-5.subrace-aguama {
      width: 251px;
      height: 432px;
      left: 70px;
      top: 98px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 0) -864px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 1) -864px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 2) -864px;
      }
    }

    &.skin-6.subrace-aguama {
      width: 251px;
      height: 432px;
      left: 70px;
      top: 98px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 0)) -864px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 1)) -864px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 2)) -864px;
      }
    }

    &.skin-6-arms.subrace-aguama {
      width: 129px;
      height: 58px;
      left: 122px;
      top: 279px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 0)) -1510px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 1)) -1510px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 2)) -1510px;
      }
    }

    &.skin-1.subrace-koufa {
      width: 233px;
      height: 484px;
      left: 75px;
      top: 46px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-233px * 0)) 0;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-233px * 1)) 0;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-233px * 2)) 0;
      }
    }

    &.skin-2.subrace-koufa {
      width: 233px;
      height: 484px;
      left: 75px;
      top: 46px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-2205px + calc(-233px * 0)) 0;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-2205px + calc(-233px * 1)) 0;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-2205px + calc(-233px * 2)) 0;
      }
    }

    &.skin-3.subrace-koufa {
      width: 233px;
      height: 484px;
      left: 75px;
      top: 46px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-233px * 0)) -484px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-233px * 1)) -484px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-233px * 2)) -484px;
      }
    }

    &.skin-3-arms.subrace-koufa {
      width: 124px;
      height: 55px;
      left: 120px;
      top: 361px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-124px * 0)) -1568px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-124px * 1)) -1568px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-124px * 2)) -1568px;
      }
    }

    &.skin-4.subrace-koufa {
      width: 233px;
      height: 484px;
      left: 75px;
      top: 46px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-2205px + calc(-233px * 0)) -484px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-2205px + calc(-233px * 1)) -484px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-2205px + calc(-233px * 2)) -484px;
      }
    }

    &.skin-5.subrace-koufa {
      width: 233px;
      height: 484px;
      left: 75px;
      top: 46px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-233px * 0)) -968px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-233px * 1)) -968px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-233px * 2)) -968px;
      }
    }

    &.skin-6.subrace-koufa {
      width: 233px;
      height: 484px;
      left: 75px;
      top: 46px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-2205px + calc(-233px * 0)) -968px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-2205px + calc(-233px * 1)) -968px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-2205px + calc(-233px * 2)) -968px;
      }
    }

    &.skin-6-arms.subrace-koufa {
      width: 124px;
      height: 55px;
      left: 120px;
      top: 361px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-124px * 0)) -1623px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-124px * 1)) -1623px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-124px * 2)) -1623px;
      }
    }

    &.skin-1.subrace-lupios {
      width: 251px;
      height: 465px;
      left: 70px;
      top: 65px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 0) -1296px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 1) -1296px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 2) -1296px;
      }
    }

    &.skin-2.subrace-lupios {
      width: 251px;
      height: 465px;
      left: 70px;
      top: 65px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 0)) -1296px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 1)) -1296px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 2)) -1296px;
      }
    }

    &.skin-3.subrace-lupios {
      width: 251px;
      height: 465px;
      left: 70px;
      top: 65px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 0) -1761px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 1) -1761px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 2) -1761px;
      }
    }

    &.skin-3-arms.subrace-lupios {
      width: 129px;
      height: 58px;
      left: 122px;
      top: 279px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 0)) -1678px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 1)) -1678px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 2)) -1678px;
      }
    }

    &.skin-4.subrace-lupios {
      width: 251px;
      height: 465px;
      left: 70px;
      top: 65px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 0)) -1761px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 1)) -1761px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 2)) -1761px;
      }
    }

    &.skin-5.subrace-lupios {
      width: 251px;
      height: 465px;
      left: 70px;
      top: 65px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 0) -2226px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 1) -2226px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-251px * 2) -2226px;
      }
    }

    &.skin-6.subrace-lupios {
      width: 251px;
      height: 465px;
      left: 70px;
      top: 65px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 0)) -2226px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 1)) -2226px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-753px + calc(-251px * 2)) -2226px;
      }
    }

    &.skin-6-arms.subrace-lupios {
      width: 129px;
      height: 58px;
      left: 122px;
      top: 279px;

      &.color-1 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 0)) -1736px;
      }

      &.color-2 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 1)) -1736px;
      }

      &.color-3 {
        background: url('../assets/Skin-Anthropomorph.png') calc(-1506px + calc(-129px * 2)) -1736px;
      }
    }

    &.ears.race-human {
      width: 34px;
      height: 53px;
      left: 242px;
      top: 157px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 0)) calc(-2814px + calc(-53px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 1)) calc(-2814px + calc(-53px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 2)) calc(-2814px + calc(-53px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 3)) calc(-2814px + calc(-53px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 4)) calc(-2814px + calc(-53px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 0)) calc(-2814px + calc(-53px * 1));
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 1)) calc(-2814px + calc(-53px * 1));
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 2)) calc(-2814px + calc(-53px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 3)) calc(-2814px + calc(-53px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 4)) calc(-2814px + calc(-53px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 0)) calc(-2814px + calc(-53px * 2));
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 1)) calc(-2814px + calc(-53px * 2));
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 2)) calc(-2814px + calc(-53px * 2));
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 3)) calc(-2814px + calc(-53px * 2));
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-2558px + calc(-34px * 4)) calc(-2814px + calc(-53px * 2));
      }
    }

    &.ears.race-elf,
    &.ears.race-angel {
      width: 240px;
      height: 48px;
      left: 77px;
      top: 163px;

      &.color-1 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 0)) calc(-2814px + calc(-48px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 1)) calc(-2814px + calc(-48px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 2)) calc(-2814px + calc(-48px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 3)) calc(-2814px + calc(-48px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 4)) calc(-2814px + calc(-48px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 0)) calc(-2814px + calc(-48px * 1));
      }

      &.color-7 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 1)) calc(-2814px + calc(-48px * 1));
      }

      &.color-8 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 2)) calc(-2814px + calc(-48px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 3)) calc(-2814px + calc(-48px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 4)) calc(-2814px + calc(-48px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 0)) calc(-2814px + calc(-48px * 2));
      }

      &.color-12 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 1)) calc(-2814px + calc(-48px * 2));
      }

      &.color-13 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 2)) calc(-2814px + calc(-48px * 2));
      }

      &.color-14 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 3)) calc(-2814px + calc(-48px * 2));
      }

      &.color-15 {
        background: url('../assets/Skin-Humanoid.png') calc(-1358px + calc(-240px * 4)) calc(-2814px + calc(-48px * 2));
      }
    }

    &.ears.race-demon,
    &.ears.race-dwarf,
    &.ears.race-djinn {
      width: 182px;
      height: 58px;
      left: 104px;
      top: 155px;

      &.color-1 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 0)) calc(-2304px + calc(-58px * 0));
      }

      &.color-2 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 1)) calc(-2304px + calc(-58px * 0));
      }

      &.color-3 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 2)) calc(-2304px + calc(-58px * 0));
      }

      &.color-4 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 3)) calc(-2304px + calc(-58px * 0));
      }

      &.color-5 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 4)) calc(-2304px + calc(-58px * 0));
      }

      &.color-6 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 0)) calc(-2304px + calc(-58px * 1));
      }

      &.color-7 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 1)) calc(-2304px + calc(-58px * 1));
      }

      &.color-8 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 2)) calc(-2304px + calc(-58px * 1));
      }

      &.color-9 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 3)) calc(-2304px + calc(-58px * 1));
      }

      &.color-10 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 4)) calc(-2304px + calc(-58px * 1));
      }

      &.color-11 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 0)) calc(-2304px + calc(-58px * 2));
      }

      &.color-12 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 1)) calc(-2304px + calc(-58px * 2));
      }

      &.color-13 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 2)) calc(-2304px + calc(-58px * 2));
      }

      &.color-14 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 3)) calc(-2304px + calc(-58px * 2));
      }

      &.color-15 {
        background: url('../assets/Skin-Halfling.png') calc(-910px + calc(-182px * 4)) calc(-2304px + calc(-58px * 2));
      }
    }

    &.ears.race-dwarf {
      top: calc(155px + 85px);
    }

    &.ears.race-siren {
      width: 224px;
      height: 88px;
      left: 84px;
      top: 124px;

      &.color-16 {
        background: url('../assets/Skin-Humanoid.png') calc(-2728px + calc(-224px * 0)) -2814px;
      }

      &.color-17 {
        background: url('../assets/Skin-Humanoid.png') calc(-2728px + calc(-224px * 1)) -2814px;
      }

      &.color-19 {
        background: url('../assets/Skin-Humanoid.png') calc(-2728px + calc(-224px * 2)) -2814px;
      }

      &.color-20 {
        background: url('../assets/Skin-Humanoid.png') calc(-2728px + calc(-224px * 3)) -2814px;
      }

      &.color-21 {
        background: url('../assets/Skin-Humanoid.png') calc(-2728px + calc(-224px * 4)) -2814px;
      }
    }

    &.eyes-1 {
      width: 107px;
      height: 27px;
      left: 125px;
      top: 164px;

      &.color-1 {
        background: url('../assets/Eyes.png') calc(-107px * 0) calc(-27px * 0);
      }

      &.color-2 {
        background: url('../assets/Eyes.png') calc(-107px * 1) calc(-27px * 0);
      }

      &.color-3 {
        background: url('../assets/Eyes.png') calc(-107px * 2) calc(-27px * 0);
      }

      &.color-4 {
        background: url('../assets/Eyes.png') calc(-107px * 3) calc(-27px * 0);
      }

      &.color-5 {
        background: url('../assets/Eyes.png') calc(-107px * 4) calc(-27px * 0);
      }

      &.color-6 {
        background: url('../assets/Eyes.png') calc(-107px * 5) calc(-27px * 0);
      }

      &.color-7 {
        background: url('../assets/Eyes.png') calc(-107px * 6) calc(-27px * 0);
      }

      &.color-8 {
        background: url('../assets/Eyes.png') calc(-107px * 0) calc(-27px * 1);
      }

      &.color-9 {
        background: url('../assets/Eyes.png') calc(-107px * 1) calc(-27px * 1);
      }

      &.color-10 {
        background: url('../assets/Eyes.png') calc(-107px * 2) calc(-27px * 1);
      }

      &.color-11 {
        background: url('../assets/Eyes.png') calc(-107px * 3) calc(-27px * 1);
      }

      &.color-12 {
        background: url('../assets/Eyes.png') calc(-107px * 4) calc(-27px * 1);
      }

      &.color-13 {
        background: url('../assets/Eyes.png') calc(-107px * 5) calc(-27px * 1);
      }

      &.color-14 {
        background: url('../assets/Eyes.png') calc(-107px * 6) calc(-27px * 1);
      }
    }

    &.eyes-1.race-dwarf {
      top: calc(164px + 85px);
    }

    &.eyes-2 {
      width: 104px;
      height: 27px;
      left: 127px;
      top: 164px;

      &.color-1 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 0)) calc(-27px * 0);
      }

      &.color-2 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 1)) calc(-27px * 0);
      }

      &.color-3 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 2)) calc(-27px * 0);
      }

      &.color-4 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 3)) calc(-27px * 0);
      }

      &.color-5 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 4)) calc(-27px * 0);
      }

      &.color-6 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 5)) calc(-27px * 0);
      }

      &.color-7 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 6)) calc(-27px * 0);
      }

      &.color-8 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 0)) calc(-27px * 1);
      }

      &.color-9 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 1)) calc(-27px * 1);
      }

      &.color-10 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 2)) calc(-27px * 1);
      }

      &.color-11 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 3)) calc(-27px * 1);
      }

      &.color-12 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 4)) calc(-27px * 1);
      }

      &.color-13 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 5)) calc(-27px * 1);
      }

      &.color-14 {
        background: url('../assets/Eyes.png') calc(-749px + calc(-104px * 6)) calc(-27px * 1);
      }
    }

    &.eyes-2.race-dwarf {
      top: calc(164px + 85px);
    }

    &.eyes-3 {
      width: 106px;
      height: 26px;
      left: 126px;
      top: 164px;
      background: url('../assets/Eyes.png') -1477px 0;
    }

    &.eyes-3.race-dwarf {
      top: calc(164px + 85px);
    }

    &.eyes-4 {
      width: 120px;
      height: 34px;
      left: 118px;
      top: 157px;

      &.color-1 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 0)) calc(-54px + calc(-34px * 0));
      }

      &.color-2 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 1)) calc(-54px + calc(-34px * 0));
      }

      &.color-3 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 2)) calc(-54px + calc(-34px * 0));
      }

      &.color-4 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 3)) calc(-54px + calc(-34px * 0));
      }

      &.color-5 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 4)) calc(-54px + calc(-34px * 0));
      }

      &.color-6 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 5)) calc(-54px + calc(-34px * 0));
      }

      &.color-7 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 6)) calc(-54px + calc(-34px * 0));
      }

      &.color-8 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 0)) calc(-54px + calc(-34px * 1));
      }

      &.color-9 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 1)) calc(-54px + calc(-34px * 1));
      }

      &.color-10 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 2)) calc(-54px + calc(-34px * 1));
      }

      &.color-11 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 3)) calc(-54px + calc(-34px * 1));
      }

      &.color-12 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 4)) calc(-54px + calc(-34px * 1));
      }

      &.color-13 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 5)) calc(-54px + calc(-34px * 1));
      }

      &.color-14 {
        background: url('../assets/Eyes.png') calc(-853px + calc(-120px * 6)) calc(-54px + calc(-34px * 1));
      }
    }

    &.eyes-4.race-dwarf {
      top: calc(157px + 85px);
    }

    &.eyes-5 {
      width: 122px;
      height: 28px;
      left: 117px;
      top: 162px;

      &.color-1 {
        background: url('../assets/Eyes.png') calc(-122px * 0) calc(-54px + calc(-28px * 0));
      }

      &.color-2 {
        background: url('../assets/Eyes.png') calc(-122px * 1) calc(-54px + calc(-28px * 0));
      }

      &.color-3 {
        background: url('../assets/Eyes.png') calc(-122px * 2) calc(-54px + calc(-28px * 0));
      }

      &.color-4 {
        background: url('../assets/Eyes.png') calc(-122px * 3) calc(-54px + calc(-28px * 0));
      }

      &.color-5 {
        background: url('../assets/Eyes.png') calc(-122px * 4) calc(-54px + calc(-28px * 0));
      }

      &.color-6 {
        background: url('../assets/Eyes.png') calc(-122px * 5) calc(-54px + calc(-28px * 0));
      }

      &.color-7 {
        background: url('../assets/Eyes.png') calc(-122px * 6) calc(-54px + calc(-28px * 0));
      }

      &.color-8 {
        background: url('../assets/Eyes.png') calc(-122px * 0) calc(-54px + calc(-28px * 1));
      }

      &.color-9 {
        background: url('../assets/Eyes.png') calc(-122px * 1) calc(-54px + calc(-28px * 1));
      }

      &.color-10 {
        background: url('../assets/Eyes.png') calc(-122px * 2) calc(-54px + calc(-28px * 1));
      }

      &.color-11 {
        background: url('../assets/Eyes.png') calc(-122px * 3) calc(-54px + calc(-28px * 1));
      }

      &.color-12 {
        background: url('../assets/Eyes.png') calc(-122px * 4) calc(-54px + calc(-28px * 1));
      }

      &.color-13 {
        background: url('../assets/Eyes.png') calc(-122px * 5) calc(-54px + calc(-28px * 1));
      }

      &.color-14 {
        background: url('../assets/Eyes.png') calc(-122px * 6) calc(-54px + calc(-28px * 1));
      }
    }

    &.eyes-5.race-dwarf {
      top: calc(162px + 85px);
    }

    &.eyes-6 {
      width: 117px;
      height: 31px;
      left: 119px;
      top: 164px;
      background: url('../assets/Eyes.png') -1583px 0;
    }

    &.eyes-6.race-dwarf {
      top: calc(164px + 85px);
    }

    &.eyes.subrace-aguama {
      width: 38px;
      height: 24px;
      left: 169px;
      top: 137px;

      &.color-1 {
        background: url('../assets/Eyes.png') calc(-372px + calc(-38px * 0)) -110px;
      }

      &.color-2 {
        background: url('../assets/Eyes.png') calc(-372px + calc(-38px * 1)) -110px;
      }

      &.color-3 {
        background: url('../assets/Eyes.png') calc(-372px + calc(-38px * 2)) -110px;
      }

      &.color-4 {
        background: url('../assets/Eyes.png') calc(-372px + calc(-38px * 3)) -110px;
      }
    }

    &.eyes.subrace-koufa {
      width: 86px;
      height: 26px;
      left: 120px;
      top: 243px;

      &.color-1 {
        background: url('../assets/Eyes.png') calc(-524px + calc(-86px * 0)) -122px;
      }

      &.color-2 {
        background: url('../assets/Eyes.png') calc(-524px + calc(-86px * 1)) -122px;
      }

      &.color-3 {
        background: url('../assets/Eyes.png') calc(-524px + calc(-86px * 2)) -122px;
      }

      &.color-4 {
        background: url('../assets/Eyes.png') calc(-524px + calc(-86px * 3)) -122px;
      }
    }

    &.eyes.subrace-lupios {
      width: 75px;
      height: 25px;
      left: 131px;
      top: 149px;

      &.color-1 {
        background: url('../assets/Eyes.png') calc(-868px + calc(-75px * 0)) -122px;
      }

      &.color-2 {
        background: url('../assets/Eyes.png') calc(-868px + calc(-75px * 1)) -122px;
      }

      &.color-3 {
        background: url('../assets/Eyes.png') calc(-868px + calc(-75px * 2)) -122px;
      }

      &.color-4 {
        background: url('../assets/Eyes.png') calc(-868px + calc(-75px * 3)) -122px;
      }
    }

    &.eyebrows {
      width: 124px;
      height: 30px;
      left: 119px;
      top: 137px;

      &.eyebrows-1 {
        background: url('../assets/Eyes.png') calc(-124px * 0) calc(-110px + calc(-30px * 0));
      }

      &.eyebrows-2 {
        background: url('../assets/Eyes.png') calc(-124px * 1) calc(-110px + calc(-30px * 0));
      }

      &.eyebrows-3 {
        background: url('../assets/Eyes.png') calc(-124px * 2) calc(-110px + calc(-30px * 0));
      }

      &.eyebrows-4 {
        background: url('../assets/Eyes.png') calc(-124px * 0) calc(-110px + calc(-30px * 1));
      }

      &.eyebrows-5 {
        background: url('../assets/Eyes.png') calc(-124px * 1) calc(-110px + calc(-30px * 1));
      }

      &.eyebrows-6 {
        background: url('../assets/Eyes.png') calc(-124px * 2) calc(-110px + calc(-30px * 1));
      }
    }

    &.eyebrows.race-dwarf {
      top: calc(137px + 85px);
    }

    &.mouth-1 {
      width: 27px;
      height: 9px;
      left: 165px;
      top: 215px;

      &.color-1 {
        background: url('../assets/Face.png') calc(-27px * 0) calc(-9px * 0);
      }

      &.color-2 {
        background: url('../assets/Face.png') calc(-27px * 1) calc(-9px * 0);
      }

      &.color-3 {
        background: url('../assets/Face.png') calc(-27px * 2) calc(-9px * 0);
      }

      &.color-4 {
        background: url('../assets/Face.png') calc(-27px * 3) calc(-9px * 0);
      }

      &.color-5 {
        background: url('../assets/Face.png') calc(-27px * 4) calc(-9px * 0);
      }

      &.color-6 {
        background: url('../assets/Face.png') calc(-27px * 5) calc(-9px * 0);
      }

      &.color-7 {
        background: url('../assets/Face.png') calc(-27px * 0) calc(-9px * 1);
      }

      &.color-8 {
        background: url('../assets/Face.png') calc(-27px * 1) calc(-9px * 1);
      }

      &.color-9 {
        background: url('../assets/Face.png') calc(-27px * 2) calc(-9px * 1);
      }

      &.color-10 {
        background: url('../assets/Face.png') calc(-27px * 3) calc(-9px * 1);
      }

      &.color-11 {
        background: url('../assets/Face.png') calc(-27px * 4) calc(-9px * 1);
      }

      &.color-12 {
        background: url('../assets/Face.png') calc(-27px * 5) calc(-9px * 1);
      }
    }

    &.mouth-1.race-dwarf {
      top: calc(215px + 85px);
    }

    &.mouth-2 {
      width: 29px;
      height: 15px;
      left: 163px;
      top: 213px;

      &.color-1 {
        background: url('../assets/Face.png') calc(-29px * 0) calc(-18px + calc(-15px * 0));
      }

      &.color-2 {
        background: url('../assets/Face.png') calc(-29px * 1) calc(-18px + calc(-15px * 0));
      }

      &.color-3 {
        background: url('../assets/Face.png') calc(-29px * 2) calc(-18px + calc(-15px * 0));
      }

      &.color-4 {
        background: url('../assets/Face.png') calc(-29px * 3) calc(-18px + calc(-15px * 0));
      }

      &.color-5 {
        background: url('../assets/Face.png') calc(-29px * 4) calc(-18px + calc(-15px * 0));
      }

      &.color-6 {
        background: url('../assets/Face.png') calc(-29px * 5) calc(-18px + calc(-15px * 0));
      }

      &.color-7 {
        background: url('../assets/Face.png') calc(-29px * 0) calc(-18px + calc(-15px * 1));
      }

      &.color-8 {
        background: url('../assets/Face.png') calc(-29px * 1) calc(-18px + calc(-15px * 1));
      }

      &.color-9 {
        background: url('../assets/Face.png') calc(-29px * 2) calc(-18px + calc(-15px * 1));
      }

      &.color-10 {
        background: url('../assets/Face.png') calc(-29px * 3) calc(-18px + calc(-15px * 1));
      }

      &.color-11 {
        background: url('../assets/Face.png') calc(-29px * 4) calc(-18px + calc(-15px * 1));
      }

      &.color-12 {
        background: url('../assets/Face.png') calc(-29px * 5) calc(-18px + calc(-15px * 1));
      }
    }

    &.mouth-2.race-dwarf {
      top: calc(213px + 85px);
    }

    &.mouth-3 {
      width: 27px;
      height: 8px;
      left: 166px;
      top: 215px;

      &.color-1 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 0)) calc(-8px * 0);
      }

      &.color-2 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 1)) calc(-8px * 0);
      }

      &.color-3 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 2)) calc(-8px * 0);
      }

      &.color-4 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 3)) calc(-8px * 0);
      }

      &.color-5 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 4)) calc(-8px * 0);
      }

      &.color-6 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 5)) calc(-8px * 0);
      }

      &.color-7 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 0)) calc(-8px * 1);
      }

      &.color-8 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 1)) calc(-8px * 1);
      }

      &.color-9 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 2)) calc(-8px * 1);
      }

      &.color-10 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 3)) calc(-8px * 1);
      }

      &.color-11 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 4)) calc(-8px * 1);
      }

      &.color-12 {
        background: url('../assets/Face.png') calc(-162px + calc(-27px * 5)) calc(-8px * 1);
      }
    }

    &.mouth-3.race-dwarf {
      top: calc(215px + 85px);
    }

    &.mouth-4 {
      width: 28px;
      height: 13px;
      left: 164px;
      top: 215px;

      &.color-1 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 0)) calc(-13px * 0);
      }

      &.color-2 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 1)) calc(-13px * 0);
      }

      &.color-3 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 2)) calc(-13px * 0);
      }

      &.color-4 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 3)) calc(-13px * 0);
      }

      &.color-5 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 4)) calc(-13px * 0);
      }

      &.color-6 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 5)) calc(-13px * 0);
      }

      &.color-7 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 0)) calc(-13px * 1);
      }

      &.color-8 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 1)) calc(-13px * 1);
      }

      &.color-9 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 2)) calc(-13px * 1);
      }

      &.color-10 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 3)) calc(-13px * 1);
      }

      &.color-11 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 4)) calc(-13px * 1);
      }

      &.color-12 {
        background: url('../assets/Face.png') calc(-324px + calc(-28px * 5)) calc(-13px * 1);
      }
    }

    &.mouth-4.race-dwarf {
      top: calc(215px + 85px);
    }

    &.mouth-5 {
      width: 29px;
      height: 14px;
      left: 163px;
      top: 215px;

      &.color-1 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 0)) calc(-26px + calc(-14px * 0));
      }

      &.color-2 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 1)) calc(-26px + calc(-14px * 0));
      }

      &.color-3 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 2)) calc(-26px + calc(-14px * 0));
      }

      &.color-4 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 3)) calc(-26px + calc(-14px * 0));
      }

      &.color-5 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 4)) calc(-26px + calc(-14px * 0));
      }

      &.color-6 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 5)) calc(-26px + calc(-14px * 0));
      }

      &.color-7 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 0)) calc(-26px + calc(-14px * 1));
      }

      &.color-8 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 1)) calc(-26px + calc(-14px * 1));
      }

      &.color-9 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 2)) calc(-26px + calc(-14px * 1));
      }

      &.color-10 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 3)) calc(-26px + calc(-14px * 1));
      }

      &.color-11 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 4)) calc(-26px + calc(-14px * 1));
      }

      &.color-12 {
        background: url('../assets/Face.png') calc(-174px + calc(-29px * 5)) calc(-26px + calc(-14px * 1));
      }
    }

    &.mouth-5.race-dwarf {
      top: calc(215px + 85px);
    }

    &.cheeks-1 {
      width: 126px;
      height: 33px;
      left: 117px;
      top: 183px;

      &.color-1 {
        background: url('../assets/Face.png') calc(-126px * 0) calc(-54px + calc(-33px * 0));
      }

      &.color-2 {
        background: url('../assets/Face.png') calc(-126px * 1) calc(-54px + calc(-33px * 0));
      }

      &.color-3 {
        background: url('../assets/Face.png') calc(-126px * 2) calc(-54px + calc(-33px * 0));
      }

      &.color-4 {
        background: url('../assets/Face.png') calc(-126px * 3) calc(-54px + calc(-33px * 0));
      }

      &.color-5 {
        background: url('../assets/Face.png') calc(-126px * 4) calc(-54px + calc(-33px * 0));
      }

      &.color-6 {
        background: url('../assets/Face.png') calc(-126px * 5) calc(-54px + calc(-33px * 0));
      }

      &.color-7 {
        background: url('../assets/Face.png') calc(-126px * 6) calc(-54px + calc(-33px * 0));
      }

      &.color-8 {
        background: url('../assets/Face.png') calc(-126px * 0) calc(-54px + calc(-33px * 1));
      }

      &.color-9 {
        background: url('../assets/Face.png') calc(-126px * 1) calc(-54px + calc(-33px * 1));
      }

      &.color-10 {
        background: url('../assets/Face.png') calc(-126px * 2) calc(-54px + calc(-33px * 1));
      }

      &.color-11 {
        background: url('../assets/Face.png') calc(-126px * 3) calc(-54px + calc(-33px * 1));
      }

      &.color-12 {
        background: url('../assets/Face.png') calc(-126px * 4) calc(-54px + calc(-33px * 1));
      }

      &.color-13 {
        background: url('../assets/Face.png') calc(-126px * 5) calc(-54px + calc(-33px * 1));
      }

      &.color-14 {
        background: url('../assets/Face.png') calc(-126px * 6) calc(-54px + calc(-33px * 1));
      }

      &.color-15 {
        background: url('../assets/Face.png') calc(-126px * 0) calc(-54px + calc(-33px * 2));
      }

      &.color-16 {
        background: url('../assets/Face.png') calc(-126px * 1) calc(-54px + calc(-33px * 2));
      }

      &.color-17 {
        background: url('../assets/Face.png') calc(-126px * 2) calc(-54px + calc(-33px * 2));
      }

      &.color-18 {
        background: url('../assets/Face.png') calc(-126px * 3) calc(-54px + calc(-33px * 2));
      }

      &.color-19 {
        background: url('../assets/Face.png') calc(-126px * 4) calc(-54px + calc(-33px * 2));
      }

      &.color-20 {
        background: url('../assets/Face.png') calc(-126px * 5) calc(-54px + calc(-33px * 2));
      }

      &.color-21 {
        background: url('../assets/Face.png') calc(-126px * 6) calc(-54px + calc(-33px * 2));
      }
    }

    &.cheeks-1.race-dwarf {
      top: calc(183px + 85px);
    }

    &.cheeks-2 {
      width: 122px;
      height: 29px;
      left: 122px;
      top: 185px;

      &.color-1 {
        background: url('../assets/Face.png') calc(-122px * 0) calc(-153px + calc(-29px * 0));
      }

      &.color-2 {
        background: url('../assets/Face.png') calc(-122px * 1) calc(-153px + calc(-29px * 0));
      }

      &.color-3 {
        background: url('../assets/Face.png') calc(-122px * 2) calc(-153px + calc(-29px * 0));
      }

      &.color-4 {
        background: url('../assets/Face.png') calc(-122px * 3) calc(-153px + calc(-29px * 0));
      }

      &.color-5 {
        background: url('../assets/Face.png') calc(-122px * 4) calc(-153px + calc(-29px * 0));
      }

      &.color-6 {
        background: url('../assets/Face.png') calc(-122px * 5) calc(-153px + calc(-29px * 0));
      }

      &.color-7 {
        background: url('../assets/Face.png') calc(-122px * 6) calc(-153px + calc(-29px * 0));
      }

      &.color-8 {
        background: url('../assets/Face.png') calc(-122px * 0) calc(-153px + calc(-29px * 1));
      }

      &.color-9 {
        background: url('../assets/Face.png') calc(-122px * 1) calc(-153px + calc(-29px * 1));
      }

      &.color-10 {
        background: url('../assets/Face.png') calc(-122px * 2) calc(-153px + calc(-29px * 1));
      }

      &.color-11 {
        background: url('../assets/Face.png') calc(-122px * 3) calc(-153px + calc(-29px * 1));
      }

      &.color-12 {
        background: url('../assets/Face.png') calc(-122px * 4) calc(-153px + calc(-29px * 1));
      }

      &.color-13 {
        background: url('../assets/Face.png') calc(-122px * 5) calc(-153px + calc(-29px * 1));
      }

      &.color-14 {
        background: url('../assets/Face.png') calc(-122px * 6) calc(-153px + calc(-29px * 1));
      }

      &.color-15 {
        background: url('../assets/Face.png') calc(-122px * 0) calc(-153px + calc(-29px * 2));
      }

      &.color-16 {
        background: url('../assets/Face.png') calc(-122px * 1) calc(-153px + calc(-29px * 2));
      }

      &.color-17 {
        background: url('../assets/Face.png') calc(-122px * 2) calc(-153px + calc(-29px * 2));
      }

      &.color-18 {
        background: url('../assets/Face.png') calc(-122px * 3) calc(-153px + calc(-29px * 2));
      }

      &.color-19 {
        background: url('../assets/Face.png') calc(-122px * 4) calc(-153px + calc(-29px * 2));
      }

      &.color-20 {
        background: url('../assets/Face.png') calc(-122px * 5) calc(-153px + calc(-29px * 2));
      }

      &.color-21 {
        background: url('../assets/Face.png') calc(-122px * 6) calc(-153px + calc(-29px * 2));
      }
    }

    &.cheeks-2.race-dwarf {
      top: calc(185px + 85px);
    }

    &.cheeks-3 {
      width: 62px;
      height: 91px;
      left: 143px;
      top: 126px;

      &.color-1 {
        background: url('../assets/Face.png') calc(-62px * 0) calc(-419px + calc(-91px * 0));
      }

      &.color-2 {
        background: url('../assets/Face.png') calc(-62px * 1) calc(-419px + calc(-91px * 0));
      }

      &.color-3 {
        background: url('../assets/Face.png') calc(-62px * 2) calc(-419px + calc(-91px * 0));
      }

      &.color-4 {
        background: url('../assets/Face.png') calc(-62px * 3) calc(-419px + calc(-91px * 0));
      }

      &.color-5 {
        background: url('../assets/Face.png') calc(-62px * 4) calc(-419px + calc(-91px * 0));
      }

      &.color-6 {
        background: url('../assets/Face.png') calc(-62px * 5) calc(-419px + calc(-91px * 0));
      }

      &.color-7 {
        background: url('../assets/Face.png') calc(-62px * 6) calc(-419px + calc(-91px * 0));
      }

      &.color-8 {
        background: url('../assets/Face.png') calc(-62px * 0) calc(-419px + calc(-91px * 1));
      }

      &.color-9 {
        background: url('../assets/Face.png') calc(-62px * 1) calc(-419px + calc(-91px * 1));
      }

      &.color-10 {
        background: url('../assets/Face.png') calc(-62px * 2) calc(-419px + calc(-91px * 1));
      }

      &.color-11 {
        background: url('../assets/Face.png') calc(-62px * 3) calc(-419px + calc(-91px * 1));
      }

      &.color-12 {
        background: url('../assets/Face.png') calc(-62px * 4) calc(-419px + calc(-91px * 1));
      }

      &.color-13 {
        background: url('../assets/Face.png') calc(-62px * 5) calc(-419px + calc(-91px * 1));
      }

      &.color-14 {
        background: url('../assets/Face.png') calc(-62px * 6) calc(-419px + calc(-91px * 1));
      }

      &.color-15 {
        background: url('../assets/Face.png') calc(-62px * 0) calc(-419px + calc(-91px * 2));
      }

      &.color-16 {
        background: url('../assets/Face.png') calc(-62px * 1) calc(-419px + calc(-91px * 2));
      }

      &.color-17 {
        background: url('../assets/Face.png') calc(-62px * 2) calc(-419px + calc(-91px * 2));
      }

      &.color-18 {
        background: url('../assets/Face.png') calc(-62px * 3) calc(-419px + calc(-91px * 2));
      }

      &.color-19 {
        background: url('../assets/Face.png') calc(-62px * 4) calc(-419px + calc(-91px * 2));
      }

      &.color-20 {
        background: url('../assets/Face.png') calc(-62px * 5) calc(-419px + calc(-91px * 2));
      }

      &.color-21 {
        background: url('../assets/Face.png') calc(-62px * 6) calc(-419px + calc(-91px * 2));
      }
    }

    &.cheeks-3.race-dwarf {
      top: calc(126px + 85px);
    }

    &.accessory-1 {
      width: 137px;
      height: 124px;
      left: 136px;
      top: 75px;
      background: url('../assets/Face.png') calc(-137px * 0) -240px;

      &.subrace-aguama {
        background: url('../assets/Face.png') calc(-137px * 1) -240px;
      }

      &.subrace-koufa {
        background: url('../assets/Face.png') calc(-137px * 2) -240px;
      }

      &.subrace-lupios {
        background: url('../assets/Face.png') calc(-137px * 3) -240px;
      }
    }

    &.accessory-1.race-dwarf,
    &.accessory-1.subrace-koufa {
      top: calc(75px + 85px);
    }

    &.accessory-2 {
      width: 131px;
      height: 55px;
      left: 94px;
      top: 144px;
      background: url('../assets/Face.png') calc(-131px * 0) -364px;

      &.subrace-aguama {
        background: url('../assets/Face.png') calc(-131px * 1) -364px;
      }

      &.subrace-koufa {
        background: url('../assets/Face.png') calc(-131px * 2) -364px;
      }

      &.subrace-lupios {
        background: url('../assets/Face.png') calc(-131px * 3) -364px;
      }
    }

    &.accessory-2.race-dwarf,
    &.accessory-2.subrace-koufa {
      top: calc(144px + 85px);
    }

    &.mole {
      width: 106px;
      height: 36px;
      left: 126px;
      top: 188px;

      &.mole-1 {
        background: url('../assets/Face.png') calc(-492px + calc(-106px * 0)) 0;
      }

      &.mole-2 {
        background: url('../assets/Face.png') calc(-492px + calc(-106px * 1)) 0;
      }

      &.mole-3 {
        background: url('../assets/Face.png') calc(-492px + calc(-106px * 2)) 0;
      }

      &.mole-4 {
        background: url('../assets/Face.png') calc(-492px + calc(-106px * 3)) 0;
      }
    }

    &.mole.race-dwarf {
      top: calc(188px + 85px);
    }

    &.piercings {
      width: 90px;
      height: 87px;
      left: 173px;
      top: 147px;

      &.piercings-1 {
        background: url('../assets/Face.png') calc(-548px + calc(-90px * 0)) calc(-240px + calc(-87px * 0));
      }

      &.piercings-2 {
        background: url('../assets/Face.png') calc(-548px + calc(-90px * 1)) calc(-240px + calc(-87px * 0));
      }

      &.piercings-3 {
        background: url('../assets/Face.png') calc(-548px + calc(-90px * 2)) calc(-240px + calc(-87px * 0));
      }

      &.piercings-4 {
        background: url('../assets/Face.png') calc(-548px + calc(-90px * 0)) calc(-240px + calc(-87px * 1));
      }

      &.piercings-5 {
        background: url('../assets/Face.png') calc(-548px + calc(-90px * 1)) calc(-240px + calc(-87px * 1));
      }

      &.piercings-6 {
        background: url('../assets/Face.png') calc(-548px + calc(-90px * 2)) calc(-240px + calc(-87px * 1));
      }

      &.piercings-7 {
        background: url('../assets/Face.png') calc(-548px + calc(-90px * 0)) calc(-240px + calc(-87px * 2));
      }

      &.piercings-8 {
        background: url('../assets/Face.png') calc(-548px + calc(-90px * 1)) calc(-240px + calc(-87px * 2));
      }

      &.piercings-9 {
        background: url('../assets/Face.png') calc(-548px + calc(-90px * 2)) calc(-240px + calc(-87px * 2));
      }
    }

    &.piercings.race-dwarf {
      top: calc(147px + 85px);
    }
  }
}
</style>
