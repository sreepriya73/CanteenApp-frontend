import React, { useState } from 'react';
import axios from 'axios';

// Sample menu items with image URLs
const menuItems = [
    {
        id: 1,
        name: 'Pizza',
        price: 300,
        image: 'https://via.placeholder.com/150?text=Pizza', // Replace with actual image URL
    },
    {
        id: 2,
        name: 'Burger',
        price: 150,
        image: 'https://via.placeholder.com/150?text=Burger', // Replace with actual image URL
    },
    {
        id: 3,
        name: 'Pasta',
        price: 250,
        image: 'https://via.placeholder.com/150?text=Pasta', // Replace with actual image URL
    },
    {
        id: 4,
        name: 'Fries',
        price: 100,
        image: 'https://via.placeholder.com/150?text=Fries', // Replace with actual image URL
    },
    {
        id: 5,
        name: 'Salad',
        price: 120,
        image: 'https://via.placeholder.com/150?text=Salad', // Replace with actual image URL
    }
];

const Menu = () => {
    const [cart, setCart] = useState([]);

    // Handle adding items to the cart
    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        alert(`${item.name} added to cart!`);
    };

    // Handle order submission (this should connect with backend API to create an order)
    const handleOrder = async () => {
        if (cart.length === 0) {
            alert('Cart is empty!');
            return;
        }

        const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
        const orderDetails = {
            items: cart,
            totalPrice,
            deliveryAddress: 'Your default address', // Replace with actual address input
            paymentMethod: 'cash' // Hardcoded for now
        };

        try {
            const response = await axios.post('/orders', orderDetails);
            alert('Order placed successfully!');
        } catch (error) {
            alert('Error placing the order');
        }
    };

    return (
        <div className="menu-container">
            <h2>Canteen Menu</h2>
            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} className="menu-item-image" />
                        <h3>{item.name}</h3>
                        <p>Price: Rs {item.price}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div className="cart">
                <h3>Cart</h3>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - Rs {item.price}
                            </li>
                        ))}
                    </ul>
                )}
                <button onClick={handleOrder} disabled={cart.length === 0}>
                    Place Order
                </button>
            </div>

            {/* Add some styling to enhance the look */}
            <style jsx>{`
                .menu-container {
                    padding: 20px;
                }

                .menu-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .menu-item {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 10px;
                    text-align: center;
                }

                .menu-item img {
                    width: 150px;
                    height: 150px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-bottom: 10px;
                }

                .menu-item button {
                    background-color: #28a745;
                    color: white;
                    border: none;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 10px;
                }

                .menu-item button:hover {
                    background-color: #218838;
                }

                .cart {
                    margin-top: 20px;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    background-color: #f8f9fa;
                }

                .cart button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .cart button:disabled {
                    background-color: #6c757d;
                }

                .cart ul {
                    list-style-type: none;
                    padding: 0;
                }

                .cart ul li {
                    margin-bottom: 5px;
                }
            `}</style>
        </div>
    );
};

export default Menu;
