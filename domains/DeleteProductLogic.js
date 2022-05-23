
const Repository = require("../ports/Repository")

const DeleteProductLogic = async (ProductId) => {
       const product = await Repository.deleteProductDriver(ProductId)
       return product;
}

module.exports = DeleteProductLogic