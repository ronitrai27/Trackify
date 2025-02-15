// import React from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Inventory = () => {
//   const addInventoryItem = async () => {
//     const userEmail = localStorage.getItem("userEmail");

//     if (!userEmail) {
//       toast.error("Sign In Again!");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/inventory/add",
//         {
//           userEmail,
//           productName: "led",
//           type: "Electronics",
//           quantity: 100,
//           price: 600,
//           sellingPrice: 700,
//           shipmentName: "DOC",
//         }
//       );

//       toast.success("Item added successfully");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Error adding item");
//     }
//   };

//   return (
//     <div className="flex-1 h-screen bg-[#aebdd835] flex justify-center items-center">
//       <button
//         onClick={addInventoryItem}
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Add Inventory Item
//       </button>
//     </div>
//   );
// };

// export default Inventory;
import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
const Inventory = () => {
  const [hiddenItem, setHiddenItem] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    type: "",
    quantity: "",
    price: "",
    sellingPrice: "",
    shipmentName: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Add Inventory Item
  const addInventoryItem = async () => {
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      toast.error("Sign In Again!");
      return;
    }

    // Check for empty fields
    for (let key in formData) {
      if (!formData[key]) {
        toast.error(`Please enter ${key}`);
        return;
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/inventory/add",
        {
          userEmail,
          ...formData,
        }
      );

      toast.success("Item added successfully");
      setFormData({
        productName: "",
        type: "",
        quantity: "",
        price: "",
        sellingPrice: "",
        shipmentName: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding item");
    }
  };
  return (
    <div className="flex-1 h-screen bg-[#aebdd835]">
      {/* CHARTS / GRAPHS */}
      <div className="graphs"></div>

      {/* Inventory */}
      <div className="top flex items-center justify-between py-3 px-14">
        <input
          type="text"
          placeholder="Search Anything..."
          className="w-[60%] px-3 py-2 rounded-full focus:outline-none"
        />
        <div className="flex items-center gap-2 bg-blue-500 px-3 py-1 text-[17px] rounded-xl shadow-xl w-fit text-white">
          <assets.LuSettings2 className="text-2xl" />
          <p className="">Filters</p>
        </div>
        <div className="relative">
          <div
            onClick={() => setHiddenItem(!hiddenItem)}
            className="flex cursor-pointer items-center gap-2 bg-blue-500 px-3 py-1 rounded-xl text-[17px] shadow-xl w-fit text-white"
          >
            <assets.LuCircleFadingPlus className="text-2xl" />
            <p className="">Add Items</p>
          </div>

          {/* AnimatePresence ensures the component animates out when unmounted */}
          <AnimatePresence>
            {hiddenItem && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} // Animate out
                transition={{ duration: 0.3 }} // Animation duration
                className="flex items-center justify-center absolute top-20 right-48 gap-6 bg-gray-50 shadow-xl p-3 rounded-xl"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      placeholder="Product Name"
                      className="border px-2 py-1 rounded-lg bg-gray-100 focus:outline-none"
                    />
                    <input
                      type="text"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      placeholder="Type (e.g., Electronics)"
                      className="border px-2 py-1 rounded-lg bg-gray-100 focus:outline-none"
                    />
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Quantity"
                      className="border px-2 py-1 rounded-lg bg-gray-100 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Price"
                      className="border px-2 py-1 rounded-lg bg-gray-100 focus:outline-none"
                    />
                    <input
                      type="number"
                      name="sellingPrice"
                      value={formData.sellingPrice}
                      onChange={handleChange}
                      placeholder="Selling Price"
                      className="border px-2 py-1 rounded-lg bg-gray-100 focus:outline-none"
                    />
                    <input
                      type="text"
                      name="shipmentName"
                      value={formData.shipmentName}
                      onChange={handleChange}
                      placeholder="Shipment Name"
                      className="border px-2 py-1 rounded-lg bg-gray-100 focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  onClick={addInventoryItem}
                  className="px-3 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-full flex items-center gap-2"
                >
                  <assets.LuCircleFadingPlus />
                  Add
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
