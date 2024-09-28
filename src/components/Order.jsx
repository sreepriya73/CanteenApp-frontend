// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavBar from './NavBar'; // Assuming you have a NavBar component

// const Order = () => {
//   const [orders, setOrders] = useState([]); // To store existing orders
//   const [newOrder, setNewOrder] = useState({ item: "", quantity: "", customerName: "" }); // Form state
//   const [errors, setErrors] = useState({}); // To store form errors

//   // Fetch existing orders on component mount
//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/orders'); // Adjust the URL to your API
//       setOrders(response.data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const inputHandler = (event) => {
//     setNewOrder({ ...newOrder, [event.target.name]: event.target.value });
//   };

//   const validateFields = () => {
//     const errors = {};
//     if (!newOrder.item) errors.item = "Item is required.";
//     if (!newOrder.quantity || isNaN(newOrder.quantity) || newOrder.quantity <= 0) {
//       errors.quantity = "Quantity must be a positive number.";
//     }
//     if (!newOrder.customerName) errors.customerName = "Customer name is required.";
//     return errors;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent form submission
//     const validationErrors = validateFields();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8080/order', newOrder); // Adjust the URL to your API
//       setNewOrder({ item: "", quantity: "", customerName: "" }); // Reset form
//       fetchOrders(); // Refresh the order list
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <h1 className="text-center">Order Management</h1>

//       {/* Form to add new orders */}
//       <div className="container mt-4">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="item" className="form-label">Item</label>
//             <input
//               type="text"
//               className="form-control"
//               name="item"
//               value={newOrder.item}
//               onChange={inputHandler}
//               required
//             />
//             {errors.item && <small className="text-danger">{errors.item}</small>}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="quantity" className="form-label">Quantity</label>
//             <input
//               type="number"
//               className="form-control"
//               name="quantity"
//               value={newOrder.quantity}
//               onChange={inputHandler}
//               required
//             />
//             {errors.quantity && <small className="text-danger">{errors.quantity}</small>}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="customerName" className="form-label">Customer Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="customerName"
//               value={newOrder.customerName}
//               onChange={inputHandler}
//               required
//             />
//             {errors.customerName && <small className="text-danger">{errors.customerName}</small>}
//           </div>
//           <button type="submit" className="btn btn-primary">Place Order</button>
//         </form>
//       </div>

//       {/* Display existing orders */}
//       <div className="container mt-5">
//         <h2>Existing Orders</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Quantity</th>
//               <th>Customer Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length > 0 ? (
//               orders.map((order, index) => (
//                 <tr key={index}>
//                   <td>{order.item}</td>
//                   <td>{order.quantity}</td>
//                   <td>{order.customerName}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center">No orders found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Order;
