import './ContentWithDescriptionContainer.css';

function ContentWithDescriptionContainer(props) {
  return (
    <div
      id={props.id} 
      className="content-container"
      style={{
        height: props.noFixedHeightContent ? '' : '100vh',
        gridTemplateRows: props.noFixedHeightContent ? 'auto 20%' : '80% 20%'
      }}
        >
      { props.children }
    </div>
  );
}

export default ContentWithDescriptionContainer;
