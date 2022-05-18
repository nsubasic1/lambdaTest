const GetProductByIdLogic = require("../domains/GetProductByIdLogic")

 const getProductByIdDriven = async (ProductId) => {
    try{ 
        console.log("ok4")
        const response = await GetProductByIdLogic(ProductId);
        return response;
    }
    catch(err){
        return {msg : "iz drivena"}
    }
}

module.exports = getProductByIdDriven
