import './SiteWithDescriptionContainer.css';

function ContentContainer(props) {
  return (
    <div 
      id={props.id} 
      className="site-with-description-container" 
      style={{ height: props.noFixedHeight ? '' : '100vh' }}
        >
      { props.children }
    </div>
  );
}

export default ContentContainer;
