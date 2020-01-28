import boom from './sounds/boom.wav';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tink from './sounds/tink.wav';
import tom from './sounds/tom.wav';

const DataKey = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    src: clap,
    chord: 'clap',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    src: hihat,
    chord: 'hihat',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    src: kick,
    chord: 'kick',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    src: openhat,
    chord: 'openhat',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    src: boom,
    chord: 'boom',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    src: ride,
    chord: 'ride',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    src: snare,
    chord: 'snare',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    src: tom,
    chord: 'tom',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    src: tink,
    chord: 'tink',
  },
];

export default DataKey;
