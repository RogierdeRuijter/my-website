// import montepoeliLogo from '../../assets/montepoeli_logo.png';
import montepoeliHome from "../../assets/montepoeli_home.png";
import montepoeliAddGame from "../../assets/montepoeli_add_game.png";
import montepoeliAddGameFilled from "../../assets/montepoeli_add_game_filled.png";
import "./Montepoeli.css";
import Description from "../../helpers/Description/Description";
import ContentWithDescriptionContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";

function Montepoeli() {
  return (
    <ContentWithDescriptionContainer
      id="montepoeli-content-container"
      noFixedHeightContent={true}
    >
      <div id="montepoeli-content">
        <img
          className="iphone rounded-corners spacer"
          src={montepoeliHome}
          alt="Home screen"
        ></img>
        <img
          className="iphone rounded-corners spacer"
          src={montepoeliAddGame}
          alt="Add game"
        ></img>
        <img
          className="iphone rounded-corners"
          src={montepoeliAddGameFilled}
          alt="Filled in game"
        ></img>
      </div>
      <Description>
        A website build for the chess club. The chess club was founded in
        Montepulciano, Italy. The website is an attempt to keep the spirit from
        this vacation alive. It is mainly used as a PWA and is my breeding
        ground for exploring non functional features. Semantic release, you will
        always be my favourite piece of software ever. Even if no one else
        thinks so.
      </Description>
    </ContentWithDescriptionContainer>
  );
}

export default Montepoeli;
