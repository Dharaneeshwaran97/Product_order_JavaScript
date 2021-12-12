const {
    product
} = require("../product/product");

const generateSingle = () => {
    const startTime = 1607686125;
    const hour = 3600;
    const readingsLength = Math.ceil(Math.random() * 20);

    return [...new Array(readingsLength)].map((reading, index) => ({
        time: startTime - index * hour,
        orderCount: Math.floor(Math.random() * 10),
    }));
};

const generateAllOrders = () => {
    const orders = {};

    for (const key in product) {
        if (product.hasOwnProperty(key)) {
            orders[product[key]] = generateSingle();
        }
    }

    return orders;
};

const ordersData = generateAllOrders();
module.exports = {
    ordersData
};