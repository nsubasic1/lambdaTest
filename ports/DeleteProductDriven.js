const DeleteProductLogic = require("../domains/DeleteProductLogic")

 const DeleteProductDriven = async (ProductId) => {
        const response = await DeleteProductLogic(ProductId);
        return response;
}

module.exports = DeleteProductDriven
