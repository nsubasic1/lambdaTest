
const Repository = require("../ports/Repository")

const AddProductLogic = async (body) => {
       const product = await Repository.addProductDriver(body)
       return product;
}

module.exports = AddProductLogic