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
    pose: body.human.prairie.poses.min,
    skinColor: body.human.prairie.skinColors.min,
    faceTattoo: body.human.prairie.faceTattoos.min,
    bodyTattoo: body.human.prairie.bodyTattoos.min,
    armTattoo: body.human.prairie.armTattoos.min,
    horn: 0,
    hornColor: 1,
    tail: 0,
    tailColor: 1,
    wing: 0,
    wingColor: 1,
    eye: head.human.prairie.eyes.min,
    eyeColor: head.human.prairie.eyeColors.min,
    eyebrow: 1,
    mouth: head.human.prairie.mouths.min,
    lipColor: head.human.prairie.lipColors.min,
    hairstyle: head.human.prairie.hairstyles.min,
    hairColor: head.human.prairie.hairColors.min,
    beard: head.human.prairie.beards.min,
    mole: face.human.prairie.moles.min,
    scar: face.human.prairie.scars.min,
    cheek: face.human.prairie.cheeks.min,
    accessory: face.human.prairie.accessorys.min,
    piercing: face.human.prairie.piercings.min,
    region: "none",
    profession: "none",
    armor: "none",
    weapon: weapons.fists,
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
      const min = state[obj.view][state.race][state.subrace][obj.property].min;
      const max = state[obj.view][state.race][state.subrace][obj.property].max;
      let newValue = state[unpluralizedProperty] - 1;

      if (newValue < min) {
        newValue = max;
      }

      state[unpluralizedProperty] = newValue;
    },
    rotateForwards(state, obj) {
      const unpluralizedProperty = obj.property.slice(0, -1);
      const min = state[obj.view][state.race][state.subrace][obj.property].min;
      const max = state[obj.view][state.race][state.subrace][obj.property].max;
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
