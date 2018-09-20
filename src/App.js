import React, { Component } from 'react';
import Grid from "./components/Grid";

import './App.css';
import ygo from './images/ygo.png';
import dragonbleu from './images/dragonbleu.png';
import kuri from './images/kuri.png';
import esp from './images/esp.png';
import dragonNoir from './images/dragonnoir.png';
import croco from './images/croco.jpg';
import magicien from './images/magicien.png';
import logo from './images/logo.png';
import divin from './images/divin.png';
import grand from './images/grand.png';
import twin from './images/twin.png';
import ciel from './images/ciel.png';
import dino from './images/dino.png';
import rond from './images/rond.png';

class App extends Component {
  render() {
    const cards = [
      {
        faces: [
          ygo,
          dragonbleu,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          kuri,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          esp,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          dragonNoir,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          magicien,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          croco,
        ],
        current: 0,
      },
      

      /*     {
        faces: [
          ygo,
          divin,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          grand,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          twin,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          ciel,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          dino,
        ],
        current: 0,
      },
      {
        faces: [
          ygo,
          rond,
        ],
        current: 0,
      },
      */
    ];

    return (
      <div className="a">
      <div className="logo"><img src={logo}/></div>
        <Grid cards={cards} />
      </div>
    );
  }
}

export default App;
