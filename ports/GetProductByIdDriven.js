const GetProductByIdLogic = require("../domains/GetProductByIdLogic")

 const getProductByIdDriven = async (ProductId, currency) => {
        const response = await GetProductByIdLogic(ProductId, currency);
        return response;
}

module.exports = getProductByIdDriven
