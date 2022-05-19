
const getProductByIdDriven = require("../ports/GetProductByIdDriven")
const getProductByIdAdapter = async(ProductId) => {
    try{
        console.log("ok1")
        const response = await getProductByIdDriven(ProductId);
        let res = {}
        if(response.error == undefined)
            res = {
                'statusCode': 200,
                'body': response
            }
        else 
            res = {
                'statusCode' : response.error,
                'body' : response.message
            }
        return res;
    }catch(error){
        return {msg: "adapter"};
    }
}

module.exports = getProductByIdAdapter

