const express = require("express");
const groceryItemsTable = require("./src/models/grocery_items").grocery_items;
const ordersTable = require("./src/models/orders").orders;
const orderItemsTable = require("./src/models/order_items").order_items;

const router = express.Router();

//Admin
//Add
router.post("/api/admin/add-items", async (req, res) => {
    try {
        const newItem = await groceryItemsTable.create(req.body);
        return res.status(201).json(newItem);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

//View all items
router.get("/api/items", async (req, res) => {
    try {
        const items = await groceryItemsTable.findAll();
        return res.json(items);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

//remove
router.delete("/api/admin/items/:id", (req, res) => {
    try {
        const itemId = req.params.id;
        groceryItemsTable.destroy({ where: { id: itemId } });
        return res.status(204);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

//update
router.put("/api/admin/items/:id", async (req, res) => {
    try {
        const itemId = req.params.id;
        const updatedItem = req.body;
        await groceryItemsTable.update(updatedItem, { where: { id: itemId} });
        return res.status(204);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

//users
router.post("/api/users/orders", async (req, res) => {
    try {
        const order = await ordersTable.create(req.body, { include: orderItemsTable });
        return res.status(201).json(order);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.get('/', (req, res) => {
    res.json({ status: 201, message: 'Home Page' });
});

module.exports = router;