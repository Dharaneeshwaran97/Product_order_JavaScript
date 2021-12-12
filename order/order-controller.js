const {
    orders
} = require("./order");
const {
    product
} = require("../product/product");
const { totalCount } = require("../product/productController");
const read = (getData, req) => {
    console.log("getData", getData);
    const meter = req.params.productId;
    return getData(meter);
};

const store = (setData, req) => {
    const data = req.body;
    return setData(data.smartMeterId, data.electricityReadings);
};

const lastWeekOrders = (orders, req) => {
    const productId = req.params.productId;
    const values = orders(productId);
    return getLastWeekOrder(values);
};

const getLastWeekOrder = (orders) => {
    const lastWeekDate = new Date();
    lastWeekDate.setDate(lastWeekDate.getDate() - 7);
    const todayDate = new Date().getTime();
    const result = orders.filter(obj => obj.time >= lastWeekDate.getTime() && obj.time <= todayDate);
    return result;
};

const getProductNames = (orders) => {
    const productName = [];
    for (const property in orders) {
        productName.push(property)
    }
    return productName;
}
const totalOrders = (orders, req) => {
    const productId = req.params.productId;
    const values = orders(productId);
    return orderCount(values,productId);
}
const orderCount = (orders,productId) => {
    let totalOrderCount = {
        totalCount: 0
    };
    for (let a = 0; a < orders.length; a++) {
        totalOrderCount.totalCount += orders[a].orderCount;
    }
    totalOrderCount["Product"]=productId;
    return totalOrderCount;
}

module.exports = {
    read,
    store,
    lastWeekOrders,
    getProductNames,
    totalOrders
};
