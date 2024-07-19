import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './category.css';
import { getProductbyCategory } from '../../../../Auth/Services/ProductService';
import Loader from "../../../../components/loader/Loader";
import { Link, useNavigate } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import { Button, Card } from "antd";

const Category = ({ categoryId, categoryName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductbyCategory([categoryId.toString()], 1, 20);
        if (response && response.errorCode === 200) {
          setProducts(response.content.data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const getRandomProducts = (products) => {
    let shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(products.length, 5));
  };

  const handleProductClick = (id) => {
    navigate(`/Product/${id}`);
  };

  const randomProducts = getRandomProducts(products);

  if (loading) {
    return <Loader />;
  }

  if (products.length < 1) {
    return null;
  }

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        <RightOutlined />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        <LeftOutlined />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: products.length > 4,
    speed: 500,
    slidesToShow: Math.min(3, products.length),
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, products.length),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, products.length),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id='best-seller'>
      <div className="align-fomloyout">
        <h1>{categoryName} Products</h1>
        <Slider {...settings}>
          {randomProducts.map(product => (
            <div key={product.id} className='layout'>
              <Card
                className="product-card"
                hoverable
                cover={<img className='img-best' alt={product.name} src={product.image[0]} />}
              >
                <Card.Meta title={product.title} className="product-meta-title" />
                <p className="product-price">{product.price}</p>
                <span onClick={() => handleProductClick(product.id)} className="buy-button">Xem chi tiết</span>
                <Link to='/cart'>
                  <Button className="card-button">Buy now</Button>
                </Link>
              </Card>
            </div>
          ))}
        </Slider>
        <Link to='/shop'>
          <button className='all-button'>Xem tất cả</button>
        </Link>
      </div>
    </div>
  );
};

Category.propTypes = {
  categoryId: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default Category;
