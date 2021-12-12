const orders = (data) => ({
    getOrders: (meterId) => data[meterId] || [],
    setOrders: (meterId, readings) => {
        const currentReadings = data[meterId];
        console.log("currentReadings", currentReadings);
        data[meterId] = [...currentReadings, ...readings];
        return data[meterId];
    },
});

module.exports = {
    orders
};