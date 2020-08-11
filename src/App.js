import React from 'react';
import './App.css';
import Game from './components/game/Game';
import SheridanSquirrelsLogo from './assets/images/squirrel.png';
import RussiavilleRaccoonsLogo from './assets/images/raccoon.png';
import BurlingtonBunniesLogo from './assets/images/bunny.png';
import HammondHoundsLogo from './assets/images/hound.png';


// import Scoreboard from './components/scoreboard/Scoreboard';
// import Team from './components/team/Team'
// import Team from './'

function App() {

  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: RussiavilleRaccoonsLogo
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: SheridanSquirrelsLogo
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: BurlingtonBunniesLogo
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: HammondHoundsLogo
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  );
}

export default App;
