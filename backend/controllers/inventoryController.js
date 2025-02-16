const Inventory = require("../models/InventoryModal");
const User = require("../models/userModal");
// --ADDITEMS-----------------
exports.addItem = async (req, res) => {
  try {
    const { productName, type, quantity, price, sellingPrice, shipmentName } =
      req.body;
    const userEmail = req.body.userEmail;

    const existingUser = await User.findOne({ email: userEmail });
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User not found. Please register first." });
    }

    if (
      !productName ||
      !type ||
      !quantity ||
      !price ||
      !sellingPrice ||
      !shipmentName
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new Inventory({
      userEmail,
      productName,
      type,
      quantity,
      price,
      sellingPrice,
      shipmentName,
    });

    await newItem.save();
    res.status(201).json({ message: "Item added successfully", newItem });
  } catch (error) {
    res.status(500).json({ message: "Error adding item", error });
  }
};
// -------------------------get items (pagination , filtering , sorting)----------------------
exports.getUserInventory = async (req, res) => {
  try {
    const { userEmail } = req.query;
    let { type, minPrice, maxPrice, sortBy, page, limit } = req.query;

    if (!userEmail) {
      return res.status(400).json({ message: "User email is required" });
    }

    const existingUser = await User.findOne({ email: userEmail });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    let filter = { userEmail };

    // Apply Filters
    if (type) filter.type = type;
    if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
    if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };

    // Sorting
    let sortOptions = {};
    if (sortBy === "priceLowToHigh") sortOptions.price = 1;
    if (sortBy === "priceHighToLow") sortOptions.price = -1;
    if (sortBy === "newest") sortOptions.createdAt = -1;
    if (sortBy === "oldest") sortOptions.createdAt = 1;

    // Pagination
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 8; // Default limit to 8 items per page-------
    const skip = (page - 1) * limit;

    // Fetch Data
    const totalItems = await Inventory.countDocuments(filter);
    const items = await Inventory.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      message: "Inventory fetched successfully",
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      items,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching inventory", error });
  }
};
//  -------------------------------Get items by count -------------------------------
exports.getItemCountByType = async (req, res) => {
  try {
    const { userEmail } = req.query;

    if (!userEmail) {
      return res.status(400).json({ message: "User email is required" });
    }

    const existingUser = await User.findOne({ email: userEmail });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Aggregation to count items by type------------------
    const itemCounts = await Inventory.aggregate([
      { $match: { userEmail } },
      {
        $group: {
          _id: { $toLower: "$type" },
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
    ]);

    res.status(200).json({ message: "Item counts by type", itemCounts });
  } catch (error) {
    res.status(500).json({ message: "Error fetching item counts", error });
  }
};
