const express = require('express');
const {
    ordersData
} = require("./order/order-data");
const {
    orders
} = require("./order/order");
const {
    read,
    store,
    lastWeekOrders,
    totalOrders
} = require("./order/order-controller");
const {
    totalProductOrderCount,
    productDetails,
    discount
} = require("./product/productController");
const {
    productPricePlan,
    product
} = require("./product/product")
const app = express();
app.use(express.json());


const {
    getOrders,
    setOrders
} = orders(ordersData);

// ProductId based get all order details
app.get("/allOrders/:productId", (req, res) => {
    res.send(read(getOrders, req));
});
 // place a new order
app.post('/PlaceOrder', (req, res) => {
    res.send(store(setOrders, req));
});
//ProductId based get overallorders of that product
app.get("/overAllOrders/:productId", (req, res) => {
    res.send(totalProductOrderCount(getOrders, req));
});
// ProductId based get productPrice
app.get("/productPrice/:productId", (req, res) => {
    res.send(productDetails(productPricePlan, req));
});
//ProductId based lastbweek orders
app.get("/lastWeekOrdersForAll/:productId", (req, res) => {
    res.send(lastWeekOrders(getOrders, req));
});
//ProductId based totalProduct sales
app.get("/totalProductSales/:productId", (req, res) => {
    res.send(totalOrders(getOrders, req))
});
//ProductId based offer details
app.get("/offerOfProduct/:productId", (req, res) => {
    res.send(discount(productDetails(productPricePlan, req)));
});

const port = process.env.port || 8081;
app.listen(port);

console.log(`app listening on port ${port}`);