// src/services/orderService.js

import axios from './axiosClient';

const getAllOrders = (pageIndex, pageSize, name = '') => {
    return axios.get(`/Order/FindAllDonHangXuLy?name=${name}&page=${pageIndex}&pageSize=${pageSize}`);
};

const addOrder = (order) => {
    return axios.post('/Order/AddOrder', order);
};

const addDonHangXuLy = (orders) => {
    return axios.post('/Order/AddDonHangXuLy', orders);
};

const updateDonHangXuLy = (productId, order) => {
    return axios.put(`/Order/UpdateDonHangXuLy?product_id=${productId}`, order);
};

export {
    getAllOrders,
    addOrder,
    addDonHangXuLy,
    updateDonHangXuLy,
};
