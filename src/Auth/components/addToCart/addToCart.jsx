// src/components/addToCart/addToCart.jsx
import React from 'react';
import PropTypes from 'prop-types';

const AddToCartButton = ({ item }) => {
    if (!item) {
        return null; // Hoặc hiển thị một thông báo lỗi khác nếu cần thiết
    }

    return (
        <button>Add to Cart</button>
    );
};

AddToCartButton.propTypes = {
    item: PropTypes.object.isRequired,
};

export default AddToCartButton;
