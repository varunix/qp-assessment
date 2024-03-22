const express = require("express");
const groceryItemsTable = require("./src/models").grocery_items;

const router = express.Router();

router.post("/admin/add-items", async (req, res) => {
    const newItem = await groceryItemsTable.create(req.body);
    res.status(201).json(newItem);
});

router.get('/', (req, res) => {
    res.json({ status: 201, message: 'Home Page' });
});

module.exports = router;