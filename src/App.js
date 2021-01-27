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
  
  const [offset, setOffset] = useState(0);

  const [showFishRace, setShowFishRace] = useState(false);
  const [showCircleGame, setShowCirleGame] = useState(false);
  const [showGetLow, setShowGetLow] = useState(false);
  const [showSleepingTumblrSeals, setShowSleepingTumblrSeals] = useState(false);
  const [showJulia, setShowJulia] = useState(false);

  const welcomeTextRef = createRef();
  
  const sectionsList = [
    "/welcome",
    "/fish-race",
    "/circle-game",
    "/montepoeli",
    "/get-low",
    "/sleeping-tumblr-seals",
    "/julia",
    "/info"
  ];
  
  const sections = {
    welcome: sectionsList[0],
    fishRace: sectionsList[1],
    circleGame: sectionsList[2],
    montepoeli: sectionsList[3],
    getLow: sectionsList[4],
    sleepingTumblrSeals: sectionsList[5],
    julia: sectionsList[6],
    info: sectionsList[7]
  };

  const addFadeInAnimationForProjectLinks = () => {
    document.getElementById('project-links').classList.add('fade-in-animation');
  } 

  const scrollHandler = () => {
    const element = welcomeTextRef.current;
    if (element) {
      if (!isScrolledIntoView(element)) {
        addFadeInAnimationForProjectLinks();
        window.removeEventListener('scroll', scrollHandler);
      }
    }
  }

  useEffect(() => {
    if (welcomeTextRef && welcomeTextRef.current) {
      window.addEventListener('scroll', scrollHandler);
    }    
  })

  useEffect(() => {
    // TODO: do this calculation on window resize
    const screenHeight = window.innerHeight;
    const offsetFactor = 0.7;

    if (screenHeight) {
      setOffset(screenHeight * offsetFactor * -1);
    }
  },[])

  useEffect(() => {
    setPathname(location.pathname);

    if (location.pathname === '/') {
      history.push('/welcome');
    } else {
      addFadeInAnimationForProjectLinks();
    }
  }, [location]);

  const onUpdateMethod = (element) => {
    if (element && element.id) {
      if (element.id === sections.fishRace) {
        setShowFishRace(true);
      }
      if (element.id === sections.circleGame) {
        setShowCirleGame(true);
      }
      if (element.id === sections.getLow) {
        setShowGetLow(true);
      }
      if (element.id === sections.sleepingTumblrSeals) {
        setShowSleepingTumblrSeals(true);
      }
      // If use scrolls past montepoeli early load julia, because it is a big section and the page jumps if julia lazy 
      if (element.id === sections.montepoeli || element.id ===  sections.julia) {
        setShowJulia(true);
      }
    }
  }

  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

  return (
    <div id="content-container">
      <div id="menu">
        {/* <div id="title">
        </div> */}
        <div id="project-links">
          <Scrollspy className="menu" items={sectionsList} currentClassName="active" onUpdate={onUpdateMethod} offset={offset}> 
            <Link to={sections.welcome} id="title">
                Rogier de Ruijter
            </Link>
            <Link to={sections.fishRace}>Fish race</Link>
            <Link to={sections.circleGame}>Circle game</Link>
            <Link to={sections.montepoeli}>Montepoeli</Link>
            <Link to={sections.getLow}>Get low</Link>
            <Link to={sections.sleepingTumblrSeals}>
                Sleeping Tumblr Seals
            </Link>
            <Link to={sections.julia}>
                Julia
            </Link>
            <Link to={sections.info}>
                Info
            </Link>
          </Scrollspy>
        </div>
      </div>
    <div id="project-content">
      <div id={sections.welcome}>
        <Welcome welcomeTextRef={welcomeTextRef} />
      </div>
      <div className="empty-spacing" id={sections.fishRace}>
        <FishRace showFishRace={showFishRace} />
      </div>
      <div className="empty-spacing" id={sections.circleGame}>
        <CircleGame showCircleGame={showCircleGame} />
      </div>
      <div className="empty-spacing" id={sections.montepoeli}>
        <Montepoeli />
      </div>
      <div className="empty-spacing" id={sections.getLow}>
        <GetLow showGetLow={showGetLow} />
      </div>
      <div className="empty-spacing" id={sections.sleepingTumblrSeals}>
        <SleepingTumblrSeals showSleepingTumblrSeals={showSleepingTumblrSeals} />
      </div>
      <div className="empty-spacing" id={sections.julia}>
        <Julia showJulia={showJulia} />
      </div>
      <div className="empty-spacing" id={sections.info}>
        <Info />
      </div>
    </div>
  </div>
  );
}

export default App;
