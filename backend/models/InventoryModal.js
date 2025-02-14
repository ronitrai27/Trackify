import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true }, // Link item to a user
    productName: { type: String, required: true },
    type: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    shipmentName: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Inventory", inventorySchema);
