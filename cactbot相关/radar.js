'use strict';

// Rename this file to `radar.js` and edit it to change the radar ui.
// This file is Javascript.  Anything after "//" on a line is a comment.
// If you edit this file, remember to reload ACT or click the "Reload overlay"
// button on the raidboss CactbotOverlay.
// If there are errors in this file, they will appear in the OverlayPlugin.dll
// log window in ACT.

Options.Language = 'cn';

// You can add your own monster list here.
Options.CustomMonsters = {
  'inkClaw': {
    'name': {
      'en': 'Ink Claw',
      'cn': '墨染巨钳虾',
    },
    'rank': 'BozjaStar',
  },
  'tidebornAngel': {
    'name': {
      'en': 'Tideborn Angel',
      'cn': '蓝海天使',
    },
    'rank': 'BozjaStar',
  },
  'fernFlower': {
    'name': {
      'en': 'Fern Flower',
      'cn': '蕨花',
    },
    'rank': 'BozjaStar',
  },
  'viy': {
    'name': {
      'en': 'Viy',
      'cn': '邪灵维',
    },
    'rank': 'BozjaStar',
  },
  'psoglav': {
    'name': {
      'en': 'Psoglav',
      'cn': '索格拉夫',
    },
    'rank': 'BozjaStar',
  },
  'smok': {
    'name': {
      'en': 'Smok',
      'cn': '斯莫克龙',
    },
    'rank': 'BozjaStar',
  },
  'patty': {
    'name': {
      'en': 'Patty',
      'cn': '帕迪',
    },
    'rank': 'BozjaStar',
  },
  'clingyClare': {
    'name': {
      'en': 'Clingy Clare',
      'cn': '黏人魔花克莱尔',
    },
    'rank': 'BozjaStar',
  },
  'birdOfBarathrum': {
    'name': {
      'en': 'Bird of Barathrum',
      'cn': '深渊猛禽',
    },
    'rank': 'BozjaStar',
  },
};

// You can also add different options to different ranks.
Options.RankOptions = {
  'S': {
    TTS: false,
    Type: 'mob',
  },
  'BozjaStar': {
    TTS: true,
    Type: 'mob',
    Enabled: true,
  },
  // 'Custom': {
  //   DetectionRange: 500,
  //   TTS: false,
  //   PopSoundAlert: true,
  //   Type: 'any',
  // },
};
