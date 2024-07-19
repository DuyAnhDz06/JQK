// src/pages/Order/Order.jsx
import React, { useState, useEffect } from 'react';
import { getAllOrders, addOrder, addDonHangXuLy, updateDonHangXuLy } from '../../Auth/Services/OrderService';
import { Button, Modal, Form, Table, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Orders.scss';
import AddToCartButton from '../../components/addToCart/addToCart'; // Đảm bảo bạn đã import đúng

const OrderComponent = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newOrder, setNewOrder] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchOrders();
    }, [currentPage, pageSize]);

    const fetchOrders = async () => {
        try {
            const result = await getAllOrders(currentPage, pageSize, '');
            if (result.errorCode === 200) {
                setOrders(result.content.data);
                setTotalPages(result.content.totalPages);
            } else {
                setError(result.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleAddOrder = async () => {
        try {
            const newOrderData = {
                name: newOrder.name,
                donhang: newOrder.donhang
            };
            console.log("Data sent to API:", newOrderData);
            await addOrder(newOrderData);
            setShowAddModal(false);
            setNewOrder({});
            fetchOrders();
        } catch (error) {
            setError(error.message);
        }
    };



    const handleUpdateOrder = async (productId, order) => {
        try {
            await updateDonHangXuLy(productId, order);
            fetchOrders();
        } catch (error) {
            setError(error.message);
        }
    };

    const openModal = () => {
        setShowAddModal(true);
    };

    const closeModal = () => {
        setShowAddModal(false);
    };

    return (
        <div className="container mt-5 orders-container">
            <h1>Orders</h1>
            {error && <Alert variant="danger">Error: {error}</Alert>}
            <Button variant="primary" onClick={openModal}>Add Order</Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order._id}</td>
                            <td>{order.name}</td>
                            <td>{order.status}</td>
                            <td>
                                <Button variant="secondary" onClick={() => handleUpdateOrder(order.id, order)}>Update</Button>
                                {order && <AddToCartButton item={order} />} {/* Đảm bảo truyền đúng prop item */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showAddModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formOrderName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter order name"
                                value={newOrder.name || ''}
                                onChange={(e) => setNewOrder({ ...newOrder, name: e.target.value })}
                            />
                            <Form.Label>Đơn hàng</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter order donhang"
                                value={newOrder.donhang || ''}
                                onChange={(e) => setNewOrder({ ...newOrder, donhang: e.target.value })}
                            />
                        </Form.Group>
                        {/* Thêm các trường form khác nếu cần */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleAddOrder}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default OrderComponent;
