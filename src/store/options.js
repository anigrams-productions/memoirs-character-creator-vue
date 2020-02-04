export const genders = {
  man: "man",
  woman: "woman",
  other: "other",
  none: "none"
};

export const races = {
  human: "human",
  elf: "elf",
  demon: "demon",
  dwarf: "dwarf",
  angel: "angel",
  siren: "siren",
  djinn: "djinn",
  anthropomorph: "anthropomorph"
};

export const subraces = {
  human: {
    prairie: "prairie",
    mountainous: "mountainous",
    coastal: "coastal"
  },
  elf: {
    light: "light",
    druid: "druid"
  },
  demon: {
    mountain: "mountain",
    desert: "desert",
    islander: "islander"
  },
  dwarf: {
    limestone: "limestone",
    volcanic: "volcanic",
    glacial: "glacial"
  },
  angel: {
    lawful: "lawful",
    chaotic: "chaotic"
  },
  siren: {
    freshwater: "freshwater",
    saltwater: "saltwater",
    swamp: "swamp"
  },
  djinn: {
    lawful: "lawful",
    chaotic: "chaotic"
  },
  anthropomorph: {
    aguama: "aguama",
    koufa: "koufa",
    lupios: "lupios"
  }
};

export const elements = {
  light: "light",
  water: "water",
  ice: "ice",
  wind: "wind",
  lightning: "lightning",
  rock: "rock",
  life: "life",
  flame: "flame",
  destruction: "destruction",
  illusion: "illusion",
  death: "death"
};

export const regions = {
  normund: "normund",
  cadmus: "cadmus",
  mendebal: "mendebal",
  dimona: "dimona",
  pyralis: "pyralis",
  atashino: "atashino",
  wildlands: "wildlands",
  heart: "heart",
  falls: "falls",
  leilani: "leilani"
};

export const professions = {
  aristocrat: "aristocrat",
  artist: "artist",
  bandit: "bandit",
  craftsman: "craftsman",
  drifter: "drifter",
  entertainer: "entertainer",
  farmer: "farmer",
  healer: "healer",
  hunter: "hunter",
  laborer: "laborer",
  mercenary: "mercenary",
  merchant: "merchant",
  miner: "miner",
  priest: "priest",
  scholar: "scholar",
  slave: "slave",
  smuggler: "smuggler",
  soldier: "soldier",
  traveler: "traveler",
  other: "other"
};

export const armors = {
  none: "none",
  light: "light",
  medium: "medium",
  heavy: "heavy"
};

export const weapons = {
  fists: "fists",
  sword: "sword",
  axe: "axe",
  dual: "dual",
  bow: "bow",
  magic: "magic"
};

export const skills = {
  alchemy: "alchemy",
  combat: "combat",
  conjuration: "conjuration",
  enchantment: "enchantment",
  herbalism: "herbalism",
  invention: "invention",
  persuasion: "persuasion",
  stealth: "stealth",
  survival: "survival"
};

export const body = {
  human: {
    prairie: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 4, max: 11 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    },
    mountainous: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 2, max: 8 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    },
    coastal: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 8, max: 15 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    }
  },
  elf: {
    light: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 6 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    },
    druid: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 15 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    }
  },
  demon: {
    mountain: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 2, max: 11 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 },
      horns: { min: 0, max: 3 },
      hornColors: { min: 1, max: 3 },
      tails: { min: 0, max: 2 },
      tailColors: { min: 1, max: 3 }
    },
    desert: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 6, max: 19 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 },
      horns: { min: 0, max: 3 },
      hornColors: { min: 1, max: 3 },
      tails: { min: 0, max: 2 },
      tailColors: { min: 1, max: 3 }
    },
    islander: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 8, max: 19 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 },
      horns: { min: 0, max: 3 },
      hornColors: { min: 1, max: 3 },
      tails: { min: 0, max: 2 },
      tailColors: { min: 1, max: 3 }
    }
  },
  dwarf: {
    limestone: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 4, max: 11 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    },
    volcanic: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 8, max: 15 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    },
    glacial: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 6 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    }
  },
  angel: {
    lawful: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 15 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 },
      wings: { min: 0, max: 5 },
      wingColors: { min: 1, max: 3 }
    },
    chaotic: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 15 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 },
      wings: { min: 0, max: 5 },
      wingColors: { min: 1, max: 3 }
    }
  },
  siren: {
    freshwater: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 20, max: 21 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    },
    saltwater: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 19, max: 20 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    },
    swamp: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 16, max: 17 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    }
  },
  djinn: {
    lawful: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 15 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 },
      horns: { min: 0, max: 3 },
      hornColors: { min: 1, max: 3 }
    },
    chaotic: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 15 },
      faceTattoos: { min: 0, max: 18 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 },
      horns: { min: 0, max: 3 },
      hornColors: { min: 1, max: 3 }
    }
  },
  anthropomorph: {
    aguama: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 3 },
      faceTattoos: { min: 0, max: 3 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    },
    koufa: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 3 },
      faceTattoos: { min: 0, max: 3 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    },
    lupios: {
      poses: { min: 1, max: 6 },
      skinColors: { min: 1, max: 3 },
      faceTattoos: { min: 0, max: 3 },
      bodyTattoos: { min: 0, max: 12 },
      armTattoos: { min: 0, max: 4 }
    }
  }
};

export const head = {
  human: {
    prairie: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 10 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 2, max: 7 },
      beards: { min: 0, max: 6 }
    },
    mountainous: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 10 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 4, max: 9 },
      beards: { min: 0, max: 6 }
    },
    coastal: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 10 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 4, max: 9 },
      beards: { min: 0, max: 6 }
    }
  },
  elf: {
    light: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 1, max: 9 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 1, max: 4 },
      beards: { min: 0, max: 6 }
    },
    druid: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 1, max: 13 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 1, max: 9 },
      beards: { min: 0, max: 6 }
    }
  },
  demon: {
    mountain: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 2, max: 9 },
      beards: { min: 0, max: 6 }
    },
    desert: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 2, max: 9 },
      beards: { min: 0, max: 6 }
    },
    islander: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 4, max: 11 },
      beards: { min: 0, max: 6 }
    }
  },
  dwarf: {
    limestone: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 10 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 2, max: 7 },
      beards: { min: 0, max: 6 }
    },
    volcanic: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 10 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 4, max: 9 },
      beards: { min: 0, max: 6 }
    },
    glacial: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 10 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 1, max: 4 },
      beards: { min: 0, max: 6 }
    }
  },
  angel: {
    lawful: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 1, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 1, max: 11 },
      beards: { min: 0, max: 6 }
    },
    chaotic: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 1, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 1, max: 11 },
      beards: { min: 0, max: 6 }
    }
  },
  siren: {
    freshwater: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 8, max: 11 },
      beards: { min: 0, max: 6 }
    },
    saltwater: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 8, max: 10 },
      beards: { min: 0, max: 6 }
    },
    swamp: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 2, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 7, max: 11 },
      beards: { min: 0, max: 6 }
    }
  },
  djinn: {
    lawful: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 1, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 1, max: 11 },
      beards: { min: 0, max: 6 }
    },
    chaotic: {
      eyes: { min: 1, max: 6 },
      eyeColors: { min: 1, max: 14 },
      eyebrows: { min: 0, max: 6 },
      mouths: { min: 1, max: 5 },
      lipColors: { min: 1, max: 12 },
      hairstyles: { min: 0, max: 40 },
      hairColors: { min: 1, max: 11 },
      beards: { min: 0, max: 6 }
    }
  },
  anthropomorph: {
    aguama: {
      eyeColors: { min: 1, max: 4 }
    },
    koufa: {
      eyeColors: { min: 1, max: 4 }
    },
    lupios: {
      eyeColors: { min: 1, max: 4 }
    }
  }
};

export const face = {
  human: {
    prairie: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    mountainous: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    coastal: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    }
  },
  elf: {
    light: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    druid: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    }
  },
  demon: {
    mountain: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    desert: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    islander: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    }
  },
  dwarf: {
    limestone: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    volcanic: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    glacial: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    }
  },
  angel: {
    lawful: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    chaotic: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    }
  },
  siren: {
    freshwater: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    saltwater: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    swamp: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    }
  },
  djinn: {
    lawful: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    },
    chaotic: {
      moles: { min: 0, max: 4 },
      scars: { min: 0, max: 5 },
      cheeks: { min: 0, max: 3 },
      accessorys: { min: 0, max: 2 },
      piercings: { min: 0, max: 9 }
    }
  },
  anthropomorph: {
    aguama: {
      scars: { min: 0, max: 4 },
      accessorys: { min: 0, max: 2 }
    },
    koufa: {
      scars: { min: 0, max: 4 },
      accessorys: { min: 0, max: 2 }
    },
    lupios: {
      scars: { min: 0, max: 4 },
      accessorys: { min: 0, max: 2 }
    }
  }
};
