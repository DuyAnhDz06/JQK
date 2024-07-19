import './About.css';
import FeatureCard from './FeatureCard.jsx';
import Footer from '../footer/footer.jsx';
import SectionTitle from './SectionTitle.jsx';
import Contact from '../Contact/Contact.jsx';
import HeaderAlt from '../../components/header/headerAlt.jsx';

const About = () => {
  return (
    <>
      <HeaderAlt />
      <div className="aboutSection">
        <div className="contentContainer">
          <div className="aboutUsContent">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo perferendis rem doloremque consequatur aspernatur debitis doloribus necessitatibus veritatis, ipsa ex magni atque corporis tempora ea?</p>
            <div className="aboutUsKey">
              <div>
                <h1>90%</h1>
                <p>Jewelry Item</p>
              </div>

              <div>
                <h1>1.2m</h1>
                <p>Happy Customers</p>
              </div>

              <div>
                <h1>5+</h1>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
          <div className="aboutUsImage"></div>
        </div>
        <SectionTitle title="Our Commitments"/>
        <div className="featureContainer">
          <FeatureCard featureName="Free Shipping" featureBrief="Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among."/>
          <FeatureCard featureName="Fast Delivery" featureBrief="Parlors waiting so against me no. Wishing calling is warrant settled was lucky."/>
          <FeatureCard featureName="100% Quantity Guarantee" featureBrief="Unaffected at ye of compliment alteration to. Place voice no arises along to."/>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default About;



