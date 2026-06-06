// 1. Tell Webmeji to spawn the character
window.SPAWNING = [
  { id: 'webmeji-0', config: 'SHIMEJI_CONFIG' }
];

// 2. Map out the 46 standard images inside your shimeji folder
window.SHIMEJI_CONFIG = {
  walkspeed: 50,
  fallspeed: 500,
  jumpspeed: 300,
  gettingupspeed: 600,
  JUMP_CHANCE: 0.15,
  ALLOWANCES: ['bottom', 'top', 'left', 'right', 'drag', 'pet'],
  EDGE_ACTIONS: ['hang', 'climb', 'fall'],
  ORIGINAL_ACTIONS: ['walk', 'sit', 'spin', 'trip'],

  // Walking (Frames 1 to 3)
  walk: { 
    frames: ['shimeji/shime1.png', 'shimeji/shime2.png', 'shimeji/shime3.png'], 
    interval: 150, 
    loops: 2 
  },
  // Sitting/Idle (Frame 4)
  sit: { 
    frames: ['shimeji/shime4.png'], 
    interval: 300, 
    loops: 1, 
    randomizeDuration: true, 
    min: 3000, 
    max: 7000 
  },
  // Spinning/Turning around (Frames 5 to 7)
  spin: { 
    frames: ['shimeji/shime5.png', 'shimeji/shime6.png', 'shimeji/shime7.png'], 
    interval: 180, 
    loops: 1 
  },
  // Tripping over while walking (Frames 8 to 10)
  trip: { 
    frames: ['shimeji/shime8.png', 'shimeji/shime9.png', 'shimeji/shime10.png'], 
    interval: 150, 
    loops: 1 
  },
  // Being dragged around by the mouse (Frames 19 to 21)
  drag: { 
    frames: ['shimeji/shime19.png', 'shimeji/shime20.png', 'shimeji/shime21.png'], 
    interval: 120 
  },
  // Falling through the air (Frames 17 and 18)
  falling: { 
    frames: ['shimeji/shime17.png', 'shimeji/shime18.png'], 
    interval: 100 
  },
  // Splat on the floor after falling (Frames 12 to 14)
  fallen: { 
    frames: ['shimeji/shime12.png', 'shimeji/shime13.png', 'shimeji/shime14.png'], 
    interval: 200 
  },
  // Hover/Petting animation (Frames 22 and 23)
  pet: { 
    frames: ['shimeji/shime22.png', 'shimeji/shime23.png'], 
    interval: 200 
  },
  // Jumping to walls/ceiling (Frames 15 and 16)
  jump: { 
    frames: ['shimeji/shime15.png', 'shimeji/shime16.png'], 
    interval: 150 
  },
  // Hanging from the ceiling (Frames 27 to 29)
  hangstillTop: { 
    frames: ['shimeji/shime27.png'], 
    interval: 300, 
    loops: 1, 
    randomizeDuration: true, 
    min: 4000, 
    max: 8000 
  },
  climbTop: { 
    frames: ['shimeji/shime28.png', 'shimeji/shime29.png'], 
    interval: 150, 
    loops: 3 
  },
  // Hanging on the walls (Frames 24 to 26)
  hangstillSide: { 
    frames: ['shimeji/shime24.png'], 
    interval: 300, 
    loops: 1, 
    randomizeDuration: true, 
    min: 4000, 
    max: 8000 
  },
  climbSide: { 
    frames: ['shimeji/shime25.png', 'shimeji/shime26.png'], 
    interval: 150, 
    loops: 3 
  },
  // Forced actions fallback rules
  forcewalk: { loops: 4 },
  forcethink: { 
    frames: ['shimeji/shime4.png'], 
    interval: 200, 
    loops: 5 
  }
};
