import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CircleGame from './projects/CircleGame';
import FishRace from './projects/FishRace';

function App() {
  return (
    <div id="content-container">
      <div id="menu">
        <div id="title">
          Rogier de Ruijter1
        </div>
        <div id="projects">
          <div>
            <a href="/fish-race">Fish race</a>
          </div>
          <div>
            <a href="/circle-game">Circle game</a>
          </div>
        </div>
      </div>
      <div id="project-content">
      <BrowserRouter>
        <Switch>
          <Route path="/fish-race">
            <FishRace />
          </Route>
          <Route path="/circle-game">
            <CircleGame />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
