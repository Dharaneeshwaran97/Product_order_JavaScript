const {
    pricePlans,
    pricePlanNames
} = require("../price_plan/price_plan");

const product = {
    PRODUCT0: "TV",
    PRODUCT1: "Home-Theatre",
    PRODUCT2: "Mobile",
    PRODUCT3: "Laptop"
};

const productPricePlan = {
    [product.PRODUCT0]: pricePlans[pricePlanNames.PRICEPLAN0],
    [product.PRODUCT1]: pricePlans[pricePlanNames.PRICEPLAN1],
    [product.PRODUCT2]: pricePlans[pricePlanNames.PRICEPLAN2],
    [product.PRODUCT3]: pricePlans[pricePlanNames.PRICEPLAN3]
};

module.exports = {
    productPricePlan,
    product

};