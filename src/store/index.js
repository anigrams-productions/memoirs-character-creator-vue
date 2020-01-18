import Vue from "vue";
import Vuex from "vuex";
import {
  genders,
  races,
  subraces,
  elements,
  body,
  head,
  face,
  regions,
  professions,
  armors,
  weapons,
  skills
} from "./options.js";
import text from "./text.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text,
    genders,
    races,
    subraces,
    elements,
    body,
    head,
    face,
    regions,
    professions,
    armors,
    weapons,
    skills,
    gender: genders.man,
    race: races.human,
    subrace: subraces.human.prairie,
    element: "none",
    pose: 1,
    skinColor: 1,
    faceTattoo: 0,
    bodyTattoo: 0,
    armTattoo: 0,
    eye: 1,
    eyeColor: 1,
    eyebrow: 1,
    mouth: 1,
    lipColor: 1,
    hairstyle: 0,
    hairColor: 1,
    beard: 0,
    mole: 0,
    scar: 0,
    cheek: 0,
    accessory: 0,
    piercing: 0,
    region: "none",
    profession: "none",
    armor: armors.none,
    weapon: weapons.none,
    skill: [],
    stats: {
      might: 10,
      vitality: 10,
      finesse: 10,
      wisdom: 10,
      charisma: 10,
      resolve: 10,
      alignment: 10
    },
    maxSkillPoints: 20,
    skillPoints: 10,
    description: "welcome"
  },

  getters: {},

  mutations: {
    setValue(state, obj) {
      if (obj.property === "skill") {
        // only add skill if it's not already in array
        if (state.skill.indexOf(obj.value) === -1) {
          state.skill.push(obj.value);
        }
        // if more than 2 skills have been selected, unselect the first one
        if (state.skill.length > 2) {
          state.skill.shift();
        }
      } else {
        state[obj.property] = obj.value;
      }
    },
    rotateBackwards(state, obj) {
      const unpluralizedProperty = obj.property.slice(0, -1);
      const min = state[obj.view][obj.property][0];
      const max =
        state[obj.view][obj.property][state[obj.view][obj.property].length - 1];
      let newValue = state[unpluralizedProperty] - 1;

      if (newValue < min) {
        newValue = max;
      }

      state[unpluralizedProperty] = newValue;
    },
    rotateForwards(state, obj) {
      const unpluralizedProperty = obj.property.slice(0, -1);
      const min = state[obj.view][obj.property][0];
      const max =
        state[obj.view][obj.property][state[obj.view][obj.property].length - 1];
      let newValue = state[unpluralizedProperty] + 1;

      if (newValue > max) {
        newValue = min;
      }

      state[unpluralizedProperty] = newValue;
    },
    decrementStat(state, obj) {
      if (state.stats[obj.property] > 0) {
        state.stats[obj.property] -= 1;
        state.skillPoints += 1;
      }
    },
    incrementStat(state, obj) {
      if (
        state.stats[obj.property] < state.maxSkillPoints &&
        state.skillPoints > 0
      ) {
        state.stats[obj.property] += 1;
        state.skillPoints -= 1;
      }
    },
    updateDescription(state, name) {
      console.log(`updateDescription > name: ${name}`);
      state.description = name;
    }
  },

  actions: {}
});
