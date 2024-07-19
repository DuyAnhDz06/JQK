import './SectionTitle.css';

const SectionTitle = (props) => {
  return(
      <div className="sectionTitle">
        <div className="line"></div>
        <h1>{props.title}</h1>
        <div className="line"></div>
      </div>
  );
}

export default SectionTitle;