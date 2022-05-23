const GetProductByIdLogic = require("../domains/GetProductByIdLogic")

 const getProductByIdDriven = async (ProductId) => {
        const response = await GetProductByIdLogic(ProductId);
        return response;
}

module.exports = getProductByIdDriven
