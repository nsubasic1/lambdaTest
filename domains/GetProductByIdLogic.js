
const Repository = require("../ports/Repository")

const GetProductByIdLogic = async (Productid) => {
       console.log("ok2")
       const product = await Repository.getProductByIdDriver(Productid)
       return product;
}

module.exports = GetProductByIdLogic