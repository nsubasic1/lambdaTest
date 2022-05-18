
const Repository = require("../ports/Repository")

 const GetProductByIdLogic = async (Productid) => {
    try{
        console.log("ok2")
        const product = await Repository.getProductByIdDriver(Productid)
        return product;
    }catch(err){
        console.log(err)
    }
}

module.exports = GetProductByIdLogic