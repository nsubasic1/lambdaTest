const GetProductsLogic = require("../domains/GetProductsLogic")

 const getProductsDriven = async () => {
        const response = await GetProductsLogic();
        return response;
}

module.exports = getProductsDriven
