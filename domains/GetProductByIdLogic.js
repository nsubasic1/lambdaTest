
const Repository = require("../ports/Repository")

const GetProductByIdLogic = async (Productid, currency) => {
       console.log("ok2")
       const product = await Repository.getProductByIdDriver(Productid)
       if(currency != null){
              const exchangeRate = await Repository.getConversions(currency)
              product.price = product.price * exchangeRate;
       }
       return product;
}

module.exports = GetProductByIdLogic