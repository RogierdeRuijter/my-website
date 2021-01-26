import './ContentContainer.css';

function ContentContainer(props) {
  return (
    <div 
      id={props.id} 
      className="content-container" 
      style={{ height: props.noFixedHeight ? '' : '100vh' }}
        >
      { props.children }
    </div>
  );
}

export default ContentContainer;
