/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import DataKey from './DataKey';
import './App.css';

export default function App() {
  const [chord, setChord] = useState('');
  const playAudio = (elem, audio) => {
    audio.currentTime = 0;
    audio.play();
    elem.classList.add('played');
    setTimeout(() => {
      elem.classList.remove('played');
    }, 100);
  };
  const handleClick = e => {
    const clickElem = e.target;
    const audio = document.getElementById(e.target.innerText);
    setChord(clickElem.dataset.chord);
    playAudio(clickElem, audio);
  };
  const keypad = DataKey.map(key => {
    return (
      <>
        <button
          className="drum-pad"
          id={key.keyCode}
          data-chord={key.chord}
          key={key.keyTrigger}
          onClick={handleClick}
          type="button"
        >
          {key.keyTrigger}
          <audio className="clip" src={key.src} id={key.keyTrigger} />
        </button>
      </>
    );
  });

  const handleKeypress = e => {
    const divID = e.keyCode.toString();
    const audioID = e.key.toUpperCase();
    const pressedKey = document.getElementById(divID);
    const audio = document.getElementById(audioID);
    if (pressedKey) {
      setChord(pressedKey.dataset.chord);
    }
    if (!audio) return;
    playAudio(pressedKey, audio);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress);
  });
  return (
    <div className="app" id="drum-machine">
      <div className="container">{keypad}</div>
      <div className="display" id="display">
        {chord}
      </div>
    </div>
  );
}
