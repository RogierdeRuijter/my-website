// import './CircleGame.css';
import { useEffect, useState } from "react";

function DelayedLoadingFade(props) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (props.removeLoader === true) {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }
  }, [props.removeLoader]);

  return <>{showLoader && props.children}</>;
}

export default DelayedLoadingFade;
