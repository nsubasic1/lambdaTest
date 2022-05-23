
const Repository = require("../ports/Repository")

const GetProductsLogic = async () => {
   try{
       console.log("ok2")
       const products = await Repository.getProductsDriver()
       return products;
   }catch(err){
    throw err
   }
}

module.exports = GetProductsLogic