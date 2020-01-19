<template>
  <div id="options-panel">
    <div class="options-container">
      <div class="options md-layout md-alignment-center-center">
        <div class="md-layout-item md-size-30 md-small-size-100 options-menu">
          <template v-for="view in Object.keys(views)">
            <gradient-button
              :key="view"
              size="small"
              :selected="isCurrentView(views[view])"
              @click="setOption(updateView(views[view]), getOption(view))"
            >
              {{ $store.state.text[views[view]].title }}
            </gradient-button>
          </template>
        </div>
        <div class="md-layout-item options-view">
          <template v-if="!isCurrentView('none')">
            <section-heading>
              <h2>{{ $store.state.text[currentView].title }}</h2>
            </section-heading>

            <div
              class="options-medium-button-layout"
              :class="`options-medium-button-layout-${currentView}`"
              v-if="
                isCurrentViewOneOf([
                  views.gender,
                  views.race,
                  views.armor,
                  views.weapon
                ])
              "
            >
              <template
                v-for="key in Object.keys($store.state[pluralize(currentView)])"
              >
                <gradient-button
                  :key="key"
                  :selected="isSelected(key, $store.state[currentView])"
                  @click="
                    setOption(setValue({
                      property: currentView,
                      value: $store.state[pluralize(currentView)][key]
                    }))
                  "
                >
                  {{ $store.state.text[currentView][$store.state[pluralize(currentView)][key]].title }}
                </gradient-button>
              </template>
            </div>

            <div
              class="options-medium-button-layout-subrace"
              v-if="isCurrentView(views.subrace)"
            >
              <template
                v-for="subrace in Object.keys(
                  $store.state.subraces[$store.state.race]
                )"
              >
                <gradient-button
                  :key="subrace"
                  :selected="isSelected(subrace, $store.state.subrace)"
                  @click="
                    setOption(setValue({
                      property: 'subrace',
                      value: $store.state.subraces[$store.state.race][subrace]
                    }), `subrace.${$store.state.race}.${subrace}`)
                  "
                >
                  {{ $store.state.text[currentView][$store.state.race][$store.state.subraces[$store.state.race][subrace]].title }}
                </gradient-button>
              </template>
            </div>

            <div
              class="options-small-button-layout"
              :class="`options-small-button-layout-${currentView}`"
              v-if="
                isCurrentViewOneOf([
                  views.element,
                  views.skill,
                  views.profession
                ])
              "
            >
              <template
                v-for="key in Object.keys($store.state[pluralize(currentView)])"
              >
                <gradient-button
                  :key="key"
                  size="small"
                  :selected="isSelected(key, $store.state[currentView])"
                  @click="
                    setOption(setValue({
                      property: currentView,
                      value: $store.state[pluralize(currentView)][key]
                    }), getOption(currentView, key))
                  "
                >
                  {{ $store.state.text[currentView][$store.state[pluralize(currentView)][key]].title }}
                </gradient-button>
              </template>
            </div>

            <div
              class="options-arrow-layout"
              :class="`options-arrow-layout-${currentView}`"
              v-if="isCurrentViewOneOf([views.body, views.head, views.face])"
            >
              <div
                class="options-arrow-layout-container"
                v-for="key in Object.keys($store.state[currentView])"
                :key="key"
              >
                <md-button
                  class="md-icon-button"
                  @click="setOption(rotateBackwards({ view: currentView, property: key }))"
                >
                  <md-icon>keyboard_arrow_left</md-icon>
                </md-button>
                <span class="options-arrow-layout-label">{{ $store.state.text[currentView][key].title }}</span>
                <md-button
                  class="md-icon-button"
                  @click="setOption(rotateForwards({ view: currentView, property: key }))"
                >
                  <md-icon>keyboard_arrow_right</md-icon>
                </md-button>
              </div>
            </div>

            <div
              class="options-region-layout"
              v-if="isCurrentView(views.region)"
            >
              <span class="options-region-layout-label">{{
                $store.state.region
              }}</span>
              <gradient-button @click="mapVisible = true"
                >Choose...</gradient-button
              >
              <div
                v-if="mapVisible"
                class="options-region-layout-map-container"
              >
                <div class="options-region-layout-map">
                  <div class="options-region-layout-map-inner">
                    <md-button
                      class="options-region-layout-map-close"
                      @click="mapVisible = false"
                    >
                      <md-icon>clear</md-icon> <span>Close</span>
                    </md-button>

                    <template
                      v-for="region in Object.keys($store.state.regions)"
                    >
                      <button
                        :key="region"
                        class="options-region-layout-map-link"
                        :class="[
                          `options-region-layout-map-link-${region}`,
                          { selected: isSelected(region, $store.state.region) }
                        ]"
                        @click="
                          setOption(setValue({
                            property: 'region',
                            value: $store.state.regions[region]
                          }))
                        "
                      ></button>
                    </template>
                  </div>
                </div>
              </div>
            </div>

            <div class="options-stats-layout" v-if="isCurrentView(views.stats)">
              <div class="options-stats-layout-stat-points">
                Points: {{ $store.state.skillPoints }}
              </div>
              <div class="clear"></div>
              <div
                v-for="stat in Object.keys($store.state.stats)"
                :key="stat"
                class="options-stats-layout-stat"
              >
                <span class="options-stats-layout-stat-label">{{ stat }}</span>

                <div class="md-layout md-alignment-center-center">
                  <div class="md-layout-item md-size-15">
                    <md-button
                      class="md-icon-button"
                      @click="setOption(decrementStat({ property: stat }), getOption(currentView, stat))"
                    >
                      <md-icon>remove</md-icon>
                    </md-button>
                  </div>
                  <div class="options-stats-layout-stat-meter md-layout-item">
                    <span
                      class="options-stats-layout-stat-meter-fill"
                      :style="
                        `width: ${calculatePercentage(
                          $store.state.stats[stat],
                          $store.state.maxSkillPoints
                        )}%`
                      "
                    ></span>
                  </div>
                  <div class="md-layout-item md-size-15">
                    <md-button
                      class="md-icon-button"
                      @click="setOption(incrementStat({ property: stat }), getOption(currentView, stat))"
                    >
                      <md-icon>add</md-icon>
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SectionHeading from "./SectionHeading.vue";
import GradientButton from "./GradientButton.vue";

export default {
  name: "options-panel",
  components: {
    SectionHeading,
    GradientButton
  },

  data() {
    const views = {
      gender: "gender",
      race: "race",
      subrace: "subrace",
      element: "element",
      body: "body",
      head: "head",
      face: "face",
      region: "region",
      profession: "profession",
      armor: "armor",
      weapon: "weapon",
      skill: "skill",
      stats: "stats"
    };
    return {
      views,
      currentView: "none",
      mapVisible: false
    };
  },

  methods: {
    ...mapMutations([
      "setValue",
      "rotateBackwards",
      "rotateForwards",
      "decrementStat",
      "incrementStat",
      "updateDescription"
    ]),
    updateView(view) {
      this.currentView = view;
    },
    isCurrentView(view) {
      return this.currentView === view;
    },
    isCurrentViewOneOf(collection) {
      return collection.indexOf(this.currentView) > -1;
    },
    isSelected(optionValue, currentValue) {
      if (Array.isArray(currentValue)) {
        return currentValue.indexOf(optionValue) > -1;
      }
      return optionValue === currentValue;
    },
    pluralize(name) {
      return name + "s";
    },
    calculatePercentage(value, total) {
      return (value / total) * 100;
    },
    setOption(callback, option) {
      if (!option) {
        option = `${this.currentView}.${this.$store.state[this.currentView]}`
      }
      this.updateDescription(option);
      callback;
    },
    getOption(view, value) {
      console.log(`getOption > view: ${view}, value: ${value}, result: ${`skill.${value}`}`);
      switch (view) {
        case this.views.subrace:
          return `subrace.${this.$store.state.race}.${this.$store.state.subrace}`;
        case this.views.body:
          return 'welcome';
        case this.views.head:
          return 'welcome';
        case this.views.face:
          return 'welcome';
        case this.views.skill:
          if (this.$store.state.skill.length === 0) {
            return 'skill.none';
          }
          return `skill.${value}`;
        case this.views.stats:
          if (value) {
            return `stats.${value}`;
          }
          return `stats.none`;
        default:
          return `${this.currentView}.${this.$store.state[this.currentView]}`;
      }
    }
  },

  watch: {
    "$store.state.race"(race) {
      // when race changes, set subrace to first option by default
      const firstSubrace = Object.keys(this.$store.state.subraces[race])[0];
      this.$store.state.subrace = this.$store.state.subraces[race][
        firstSubrace
      ];
    }
  }
};
</script>

<style lang="stylus">
#options-panel {
  .options-container {
    background-color: #815c45;
    border: 2px solid #3a2209;
  }

  .options {
    border: 1px solid #c2aea1;
    padding: 10px;
    color: #fff;
    text-align: center;
    margin-right: 0;
    margin-left: 0;
    height: 100%;
    width: 100%;
  }

  .options-view {
    padding-left: 10px;
    padding-top: 1%;
    padding-bottom: 2%;
  }

  .options-small-button-layout-profession {
    .gradient-button-small {
      max-width: 150px;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  .options-arrow-layout-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .options-arrow-layout-label {
    display: inline-block;
    font-family: 'Cormorant Upright', serif;
    font-size: 1.6em;
    text-transform: capitalize;
    width: 100%;
    max-width: 150px;
  }

  .options-region-layout-label,
  .options-stats-layout-stat-label {
    display: block;
    font-family: 'Cormorant Upright', serif;
    font-size: 1.6em;
    text-transform: capitalize;
    width: 100%;
  }

  .options-region-layout-map-container {
    position: fixed;
    width: 66%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .options-region-layout-map {
    background-image: url('../assets/RegionMap.jpg');
    width: 808px;
    height: 608px;

    .options-region-layout-map-inner {
      position: relative;
      width: 100%;
      height: 100%;

      .options-region-layout-map-close {
        position: absolute;
        top: 5px;
        left: 5px;

        i.md-icon {
          margin-top: -6px;
        }

        span {
          display: inline-block;
          padding-top: 3px;
          font-family: 'Cormorant Upright', serif;
          font-size: 1.7em;
          text-transform: capitalize;
        }
      }

      .options-region-layout-map-link {
        position: absolute;
      }

      .options-region-layout-map-link-cadmus {
        width: 307px;
        height: 186px;
        left: 411px;
        top: 113px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-Cadmus_hover.png');
        }
      }

      .options-region-layout-map-link-normund {
        width: 316px;
        height: 226px;
        left: 262px;
        top: 4px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-Normund_hover.png');
        }
      }

      .options-region-layout-map-link-mendebal {
        width: 229px;
        height: 196px;
        left: 261px;
        top: 162px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-Mendebal_hover.png');
        }
      }

      .options-region-layout-map-link-dimona {
        width: 279px;
        height: 161px;
        left: 433px;
        top: 233px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-Dimona_hover.png');
        }
      }

      .options-region-layout-map-link-pyralis {
        width: 241px;
        height: 324px;
        left: 120px;
        top: 58px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-Pyralis_hover.png');
        }
      }

      .options-region-layout-map-link-atashino {
        width: 255px;
        height: 409px;
        left: 25px;
        top: 122px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-Atashino_hover.png');
        }
      }

      .options-region-layout-map-link-wildlands {
        width: 336px;
        height: 273px;
        left: 119px;
        top: 330px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-Wildlands_hover.png');
        }
      }

      .options-region-layout-map-link-heart {
        width: 209px;
        height: 229px;
        left: 426px;
        top: 284px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-TheHeart_hover.png');
        }
      }

      .options-region-layout-map-link-falls {
        width: 192px;
        height: 201px;
        left: 511px;
        top: 357px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-TheFalls_hover.png');
        }
      }

      .options-region-layout-map-link-leilani {
        width: 215px;
        height: 188px;
        left: 588px;
        top: 415px;

        &:hover, &:focus,
        &:active, &.selected {
          background-image: url('../assets/RegionMap-Leilani_hover.png');
        }
      }
    }
  }

  .options-stats-layout-stat-points {
    float: right;
    margin-top: -16px;
    font-family: 'Cormorant Upright', serif;
    font-size: 1.4em;
  }

  .clear {
    clear: both;
  }
  
  .options-stats-layout-stat-meter {
    height: 20px;
    position: relative;
    background: #634c39;
    border-radius: 4px;
    border: 1px solid #463426;
    background-image: linear-gradient(#513e2e,#6c543f);

    > span {
      display: block;
      height: 100%;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: #8a684c;
      background-image: linear-gradient(#8a684c,#70543d);
      border-right: 1px solid #463426;
      position: relative;
      overflow: hidden;
    }
  }
}
</style>
