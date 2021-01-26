import './Loader.css';

const Loader = ({color}) => {
  return (<div id="loader" style={{backgroundColor: color ? 'lightgray' : 'black'}}></div>);
}

export default Loader;
