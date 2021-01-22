import './App.css';
import { Route, Switch, useLocation, useHistory, Link } from 'react-router-dom';
import CircleGame from './projects/CircleGame/CircleGame';
import FishRace from './projects/FishRace/FishRace';
import SleepingTumblrSeals from './projects/SleepingSeals/SleepingSeals';
import { useEffect, useState } from 'react';
import GetLow from './projects/GetLow/GetLow';
import Montepoeli from './projects/Montepoeli/Montepoeli';
import Info from './Info/Info';
import Julia from './projects/Julia/Julia';
import Welcome from './Welcome/Welcome';
import Scrollspy from 'react-scrollspy'

const App = ({}) => {
  const location = useLocation();
  const history = useHistory();
  // TODO: remove 
  const [pathname, setPathname] = useState('');
  const [show, setShow] = useState(false);

  const sections = [
    "/fish-race",
    "/circle-game",
    "/montepoeli",
    "/get-low",
    "/sleeping-tumblr-seals",
    "/julia",
    "/info"
  ];
  
  useEffect(() => {
    setPathname(location.pathname);

    if (location.pathname === '/') {
      history.push('/welcome');
    }    
  }, [location]);

  const onUpdateMethod = (element) => {
    // if (element) {
      // console.log('onUpdateMethod, element: ', element.id)
      // switch(element.id) {
        // case sections[0]:
          // history.push(sections[0]);
        // case sections[1]:
        //   history.push(sections[1]);
        // case sections[2]:
        //   history.push(sections[2]);
        // case sections[3]:
        //   history.push(sections[3]);
        // case sections[4]:
        //   history.push(sections[4]);
        // case sections[5]:
        //   history.push(sections[5]);
        // case sections[6]:
        //   history.push(sections[6]);
        
      // }
    // }
    
    // if (element && element.id === sections[1]) {
    //   setShow(true);
    // }
  }

  return (
    <div id="content-container">
      <div id="menu">
        <div id="title">
          <Link to={sections[0]}>
            Rogier de Ruijter
          </Link>
        </div>
        {/* TODO: add onUpdate method */}
        <Scrollspy className="menu" items={sections} currentClassName="active" onUpdate={onUpdateMethod}>
          <Link to={sections[0]}>Fish race</Link>
          <Link to={sections[1]}>Circle game</Link>
          <Link to={sections[2]}>Montepoeli</Link>
          <Link to={sections[3]}>Get low</Link>
          <Link to={sections[4]}>
              Sleeping Tumblr Seals
          </Link>
          <Link to={sections[5]}>
              Julia
          </Link>
          <Link to={sections[6]}>
              Info
          </Link>
        </Scrollspy>
      </div>
    <div id="project-content">
      <Welcome />
      <div className="empty-spacing" id={sections[0]}>
        <FishRace />
      </div>
      <div className="empty-spacing" id={sections[1]}>
        <CircleGame showWebsite={show}/>
      </div>
      <div className="empty-spacing" id={sections[2]}>
        <Montepoeli />
      </div>
      <div className="empty-spacing" id={sections[3]}>
        <GetLow />
      </div>
      <div className="empty-spacing" id={sections[4]}>
        <SleepingTumblrSeals />
      </div>
      <div className="empty-spacing" id={sections[5]}>
        <Julia />
      </div>
      <div className="empty-spacing" id={sections[6]}>
        <Info />
      </div>
    </div>
  </div>
  );
}

export default App;
