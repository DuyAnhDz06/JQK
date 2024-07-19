import axios from '../axios';

const getAllOrders = (pageIndex, pageSize, name = '') => {
    return axios.get(`/api/Order/FindAllDonHangXuLy?name=${name}&page=${pageIndex}&pageSize=${pageSize}`);
};

const addOrder = (order) => {
    return axios.post('/api/Order/AddOrder', order);
};

const addDonHangXuLy = (orders) => {
    return axios.post('/api/Order/AddDonHangXuLy', orders);
};

const updateDonHangXuLy = (productId, order) => {
    return axios.put(`/api/Order/UpdateDonHangXuLy?product_id=${productId}`, order);
};

export {
    getAllOrders,
    addOrder,
    addDonHangXuLy,
    updateDonHangXuLy
};
