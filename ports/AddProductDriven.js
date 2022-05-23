const AddProductLogic = require("../domains/AddProductsLogic")

 const AddProductDriven = async (body) => {
        const response = await AddProductLogic(body);
        return response;
}

module.exports = AddProductDriven
