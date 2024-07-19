import './headerAlt.css';
import investorRelation from './img/icon-relationship-new.svg';
import shopLocation from './img/icon-stores-new.svg';
import hotline from './img/icon-hotline-new.svg';
import user_icon from './img/user-regular.svg';
import cart_icon from './img/icon-cart-new.svg';
import logo from './img/pnj.com.vn.png';

const HeaderAlt = () => {
  return(
    <div className="headerSection">
      <div className="headerTop">
        <div className="headerTop-left">
          <div className="headerTop-link">
            <img src={investorRelation} alt="Investor Relation" />
            <p>{"Investor Relations (IR)"}</p>
          </div>

          <div className="headerTop-link">
            <img src={shopLocation} alt="Shop Location" />
            <p>Store Location</p>
          </div>

          <div className="headerTop-link">
            <img src={hotline} alt="Hotline" />
            <p>0338 69 54 56</p>
          </div>
        </div>

        <img src={logo} alt="YGJ Logo" style={{width : "500px", height: "50px", objectFit: "contain"}}/>

        <div className="headerTop-right">
          <div className="headerTop-link">
            <img src={investorRelation} alt="My Account"/>
            <p>My Account</p>
          </div>

          <div className="headerTop-link">
            <img src={cart_icon} alt="Cart" />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="headerBottom">
        <div className="headerNavigation">
          <div>Jewelry</div>
          <div>Watch</div>
          <div>Present</div>
          <div>Trademark</div>
          <div>Blog</div>
          <div>Promotion</div>
        </div>
        <input type="text" placeholder="Quick Search"/>
      </div>
    </div>
  );
}

export default HeaderAlt;