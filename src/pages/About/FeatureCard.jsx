import './FeatureCard.css';

const FeatureCard = (props) => {
  return(
    <>
      <div className="featureCard">
        <div className="imageHolder"></div>
        <h2>{props.featureName}</h2>
        <p>{props.featureBrief}</p>
      </div>
    </>
  );
}
export default FeatureCard;