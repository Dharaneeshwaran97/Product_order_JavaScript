const pricePlanNames = {
    PRICEPLAN0: "price-plan-0",
    PRICEPLAN1: "price-plan-1",
    PRICEPLAN2: "price-plan-2",
    PRICEPLAN3: "price-plan-3",
};

const brandName = {
    THOMSON: "Thomson",
    ZEBRONICS: "Zebronics",
    POCO: "Poco",
    DELL: "Dell"
};

const pricePlans = {
    [pricePlanNames.PRICEPLAN0]: {
        brandName: brandName.THOMSON,
        rate: 17000
    },
    [pricePlanNames.PRICEPLAN1]: {
        brandName: brandName.ZEBRONICS,
        rate: 5000
    },
    [pricePlanNames.PRICEPLAN2]: {
        brandName: brandName.POCO,
        rate: 12000
    },
    [pricePlanNames.PRICEPLAN3]: {
        brandName: brandName.DELL,
        rate: 30000
    }
};

module.exports = {
    pricePlans,
    pricePlanNames
};