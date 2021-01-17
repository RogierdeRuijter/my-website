import './App.css';
import { Route, Switch, useLocation, useHistory, Link } from 'react-router-dom';
import CircleGame from './projects/CircleGame';
import FishRace from './projects/FishRace';
import SleepingTumblrSeals from './projects/SleepingSeals';
import { useEffect, useState } from 'react';
import GetLow from './projects/GetLow';
import Montepoeli from './projects/Montepoeli/Montepoeli';
import Info from './Info/Info';
import Julia from './projects/Julia/Julia';

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
          </li>
          <li>
            <Link className={ pathname === '/montepoeli' ? 'active' : '' } to="/montepoeli">Montepoeli</Link>
          </li>
          <li>
            <Link className={ pathname === '/get-low' ? 'active' : '' } to="/get-low">Get low</Link>
          </li>
          <li>
            <Link className={ pathname === '/julia' ? 'active' : '' } 
              to="/julia">
                Julia
            </Link>
          </li>
          <li>
            <Link className={ pathname === '/sleeping-tumblr-seals' ? 'active' : '' } 
              to="/sleeping-tumblr-seals">
                Sleeping Tumblr Seals
            </Link>
          </li>
          <li style={{marginTop: '100px'}}>
            <Link className={ pathname === '/info' ? 'active' : '' } 
              to="/info">
                Info
            </Link>
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
          <Route path="/montepoeli">
            <Montepoeli />
          </Route>
          <Route path="/get-low">
            <GetLow />
          </Route>
          <Route path="/julia">
            <Julia />
          </Route>
          <Route path="/sleeping-tumblr-seals">
            <SleepingTumblrSeals />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
    </div>
  </div>
  );
}

export default App;
