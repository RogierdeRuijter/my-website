import "./App.css";
import { useLocation, useHistory, Link } from "react-router-dom";
import CircleGame from "./projects/CircleGame/CircleGame";
import FishRace from "./projects/FishRace/FishRace";
import SleepingTumblrSeals from "./projects/SleepingSeals/SleepingSeals";
import {
  useEffect,
  useState,
  createRef,
  useCallback,
  useLayoutEffect,
} from "react";
import GetLow from "./projects/GetLow/GetLow";
import Montepoeli from "./projects/Montepoeli/Montepoeli";
import Info from "./projects/Info/Info";
import Julia from "./projects/Julia/Julia";
import Welcome from "./Welcome/Welcome";
import Scrollspy from "react-scrollspy";
import film from "./assets/Film.mp4";
import preloadFilm from "./assets/poster_Film.png";

const sectionsList = [
  "/welcome",
  "/fish-race",
  "/circle-game",
  "/montepoeli",
  "/get-low",
  "/sleeping-tumblr-seals",
  "/julia",
  "/info",
];

const sections = {
  welcome: sectionsList[0],
  fishRace: sectionsList[1],
  circleGame: sectionsList[2],
  montepoeli: sectionsList[3],
  getLow: sectionsList[4],
  sleepingTumblrSeals: sectionsList[5],
  julia: sectionsList[6],
  info: sectionsList[7],
};

const juliaIndex = () =>
  sectionsList.findIndex((section) => section === sections.julia);

const activeElementIsPassedJulia = (currentSection) => {
  return (
    sectionsList.findIndex((section) => section === currentSection) >=
    juliaIndex
  );
};

const addFadeInAnimationForProjectLinks = () => {
  document.getElementById("project-links").classList.add("fade-in-animation");
};

const isScrolledIntoView = (el) => {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
};

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const [offset, setOffset] = useState(0);

  const [showFishRace, setShowFishRace] = useState(false);
  const [showCircleGame, setShowCirleGame] = useState(false);
  const [showGetLow, setShowGetLow] = useState(false);
  const [showSleepingTumblrSeals, setShowSleepingTumblrSeals] = useState(false);
  const [showJulia, setShowJulia] = useState(false);

  const [currentElement, setCurrentElement] = useState("");

  const welcomeTextRef = createRef();

  const [moveVideoToLeftSideScreen, setMoveVideoToLeftSideScreen] =
    useState(false);

  useLayoutEffect(() => {
    // TODO: do this calculation on window resize
    const screenHeight = window.innerHeight;
    const offsetFactor = 0.7;

    if (screenHeight) {
      setOffset(screenHeight * offsetFactor * -1);
    }
  }, []);

  const scrollHandler = useCallback(() => {
    const element = welcomeTextRef.current;
    if (element) {
      if (!isScrolledIntoView(element)) {
        setMoveVideoToLeftSideScreen(true);
        addFadeInAnimationForProjectLinks();
        window.removeEventListener("scroll", scrollHandler);
      }
    }
  }, [welcomeTextRef]);

  useEffect(() => {
    if (welcomeTextRef && welcomeTextRef.current) {
      window.addEventListener("scroll", scrollHandler);
    }
  }, [welcomeTextRef, scrollHandler]);

  useLayoutEffect(() => {
    if (location.pathname === "/" || location.pathname === sections.welcome) {
      history.push(sections.welcome);
    } else {
      addFadeInAnimationForProjectLinks();
      // TODO: move video of me into the project link
      setMoveVideoToLeftSideScreen(true);
    }
  }, [location, history]);

  useEffect(() => {
    if (currentElement && currentElement.id) {
      if (currentElement.id === sections.fishRace) {
        setShowFishRace(true);
      }
      if (currentElement.id === sections.circleGame) {
        setShowCirleGame(true);
      }
      if (currentElement.id === sections.getLow) {
        setShowGetLow(true);
      }
      if (currentElement.id === sections.sleepingTumblrSeals) {
        setShowSleepingTumblrSeals(true);
      }
      // If the user scrolls past montepoeli early load julia, because it is a big section and the page jumps if julia lazy
      if (
        currentElement.id === sections.montepoeli ||
        activeElementIsPassedJulia(currentElement.id)
      ) {
        setShowJulia(true);
      }
    }
  }, [currentElement]);

  return (
    <div id="content-container">
      {/* <div id="menu-container"> */}
      <div id="menu">
        <Scrollspy
          className="menu"
          items={sectionsList}
          currentClassName="active"
          onUpdate={setCurrentElement}
          offset={offset}
        >
          <div style={{ width: "10%", display: "inline-block" }}>
            <Link to={sections.welcome} id="title">
              Rogier de Ruijter
            </Link>
          </div>
          <div
            id="project-links"
            style={{
              width: "80%",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {currentElement.id === sections.fishRace && (
              <Link to={sections.fishRace}>Fish race</Link>
            )}
            {currentElement.id === sections.circleGame && (
              <Link to={sections.circleGame}>Circle game</Link>
            )}
            {currentElement.id === sections.montepoeli && (
              <Link to={sections.montepoeli}>Montepoeli</Link>
            )}
            {currentElement.id === sections.getLow && (
              <Link to={sections.getLow}>Get low</Link>
            )}
            {currentElement.id === sections.sleepingTumblrSeals && (
              <Link to={sections.sleepingTumblrSeals}>
                Sleeping Tumblr Seals
              </Link>
            )}
            {/* Might not be needed if since Julia already has a title */}
            {/* {currentElement.id === sections.julia && (
                <Link to={sections.julia}>Julia</Link>
              )} */}
            {/* TODO: add show Info */}
            {/* {showInfo && <Link to={sections.info}>Info</Link>} */}
          </div>
        </Scrollspy>
        {/* </div> */}
      </div>
      <div id="project-content">
        <div id={sections.welcome}>
          <Welcome welcomeTextRef={welcomeTextRef}>
            {/* TODO: Move this somewhere else that it is clear that this is moved around the dom */}
            <div
              id="video-of-me"
              className={moveVideoToLeftSideScreen ? "video-project-links" : ""}
            >
              <video
                autoPlay
                muted
                width="640"
                height="480"
                poster={preloadFilm}
              >
                <source src={film} type="video/mp4" />
              </video>
            </div>
          </Welcome>
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
          <SleepingTumblrSeals
            showSleepingTumblrSeals={showSleepingTumblrSeals}
          />
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
};

export default App;
