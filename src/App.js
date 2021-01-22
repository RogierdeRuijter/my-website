import './App.css';
import { useLocation, useHistory, Link } from 'react-router-dom';
import CircleGame from './projects/CircleGame/CircleGame';
import FishRace from './projects/FishRace/FishRace';
import SleepingTumblrSeals from './projects/SleepingSeals/SleepingSeals';
import { useEffect, useState, createRef } from 'react';
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
  const [showProjects, setShowProjects] = useState(false);
  const welcomeTextRef = createRef();
  
  // TODO: make this an object for better readability
  const sections = [
    "/fish-race",
    "/circle-game",
    "/montepoeli",
    "/get-low",
    "/sleeping-tumblr-seals",
    "/julia",
    "/info"
  ];
  
  const scrollHandler = () => {
    const element = welcomeTextRef.current;
    if (element) {
      if (!isScrolledIntoView(element)) {
        document.getElementById('menu-container').classList.add('fade-in-animation');
        window.removeEventListener('scroll', scrollHandler);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)  
  })

  useEffect(() => {
    setPathname(location.pathname);

    if (location.pathname === '/') {
      history.push('/welcome');
    }    
  }, [location]);

  const onUpdateMethod = (element) => {
    console.log('in onUpdateMethod');
    if (element && element.id && element.id === sections[0]) {
      
    }
    
    // if (element && element.id === sections[1]) {
    //   setShow(true);
    // }
  }

  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

  return (
    <div id="content-container">
      <div id="menu">
        <div id="title">
          <Link to={sections[0]}>
            Rogier de Ruijter
          </Link>
        </div>
        <div id="menu-container">
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
      </div>
    <div id="project-content">
      <Welcome welcomeTextRef={welcomeTextRef} />
      <div className="empty-spacing" id={sections[0]}>
        <FishRace />
      </div>
      <div className="empty-spacing" id={sections[1]}>
        <CircleGame />
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
