const {
    productPricePlan
} = require("./product");

const totalProductOrderCount = (orders, req) => {

    const orderId = req.params.productId;
     const totalCountValues=totalCount(orders(orderId));
     totalCountValues["Product"]=orderId;
     return totalCountValues;
}

const totalCount = (orders) => {
    let totalCount = {
        totalCount: 0
    };
    for (let a = 0; a < orders.length; a++) {
        totalCount.totalCount += orders[a].orderCount;
    }
    return totalCount;
}
const productDetails = (productsDetails, req) => {
    const productId = req.params.productId;
    const productValues=productsDetails[productId]
    productValues["Product"]=productId;
    return productsDetails[productId];
}
const discount = (productsDetails, req) => {
    const offer = Math.floor(Math.random() * 10);
    console.log(productsDetails);
    if (offer > 0) {
        productsDetails["Offer In Percentage(%)"] = offer;
        const offerValue = offer / 100;
        const discountAmount = productsDetails.rate * offerValue;
        productsDetails["Discount"] = discountAmount
        console.log(productsDetails);
        productsDetails["Final Price"] = productsDetails.rate - discountAmount;
        return productsDetails;
    } else {
        return "No offers allowed"
    }
}
module.exports = {
    totalProductOrderCount,
    totalCount,
    productDetails,
    discount
}