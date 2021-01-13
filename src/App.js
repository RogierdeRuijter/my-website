import './App.css';
import { Route, Switch, useLocation, useHistory, Link } from 'react-router-dom';
import CircleGame from './projects/CircleGame';
import FishRace from './projects/FishRace';
import SleepingSealsWithCelebrityQuotes from './projects/SleepingSeals';
import { useEffect, useState } from 'react';
import GetLow from './projects/GetLow';

const App = ({}) => {
  const location = useLocation();
  const history = useHistory();
  const [pathname, setPathname] = useState('');
  
  useEffect(() => {
    setPathname(location.pathname);

    if (location.pathname === '/') {
      history.push('/fish-race');
    }
  }, [location]);

  return (
    <div id="content-container">
      <div id="menu">
        <div id="title">
          Rogier de Ruijter
        </div>
        <ul id="projects">
          <li>
            <Link className={ pathname === '/fish-race' ? 'active' : '' } to="/fish-race">Fish race</Link>
          </li>
          <li>
            <Link className={ pathname === '/circle-game' ? 'active' : '' } to="/circle-game">Circle game</Link>
          <li>
          </li>
            <Link className={ pathname === '/sleeping-seals-with-celebrity-quotes' ? 'active' : '' } 
              to="/sleeping-seals-with-celebrity-quotes">
                Sleeping Seals with Celebrity Quotes
            </Link>
          </li>
          <li>
            <Link className={ pathname === '/get-low' ? 'active' : '' } to="/get-low">Get low</Link>
          </li>
        </ul>
      </div>
      <div id="project-content">
        <Switch>
          <Route path="/fish-race">
            <FishRace />
          </Route>
          <Route path="/circle-game">
            <CircleGame />
          </Route>
          <Route path="/sleeping-seals-with-celebrity-quotes">
            <SleepingSealsWithCelebrityQuotes />
          </Route>
          <Route path="/get-low">
            <GetLow />
          </Route>
        </Switch>
    </div>
  </div>
  );
}

export default App;
