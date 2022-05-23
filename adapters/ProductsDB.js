const AWS = require("aws-sdk")
const {v4} = require("uuid")

const GetproductsDB = async () => {
    console.log("dosli do add product db")
    const dynamoDB = new AWS.DynamoDB.DocumentClient()
    try{
        const products = await dynamoDB.scan({TableName : "subasicProducts"}).promise()
        return products.Items
    }catch(err){
        return err;
    }
}


const AddproductDB = async (body) => {
    console.log("dosli do add product db")
    const dynamoDB = new AWS.DynamoDB.DocumentClient()

    const product = JSON.parse(body)
    const id = v4()
    const {title, price, description, inStock} = product
    const newProduct = {
        id, title, price, description, inStock
    }

    await dynamoDB.put({
        TableName : "subasicProducts",
        Item : newProduct
    }).promise()

    return {
        statusCode : 200,
        body : newProduct
    }
}

const GetProductById = async (ProductId) => {
    var params = {
        TableName : 'subasicProducts',
        Key: {
          id : ProductId
        }
      };
      
      const documentClient = new AWS.DynamoDB.DocumentClient();

      
      const data = await documentClient.get(params).promise()
      if(data.Item == undefined) throw {message : "No such product in the database"}
      return data.Item;
}

const DeleteProductDB = async (ProductId) => {
    var params = {
        TableName : 'subasicProducts',
        Key: {
          id : ProductId
        },
        ReturnValues: 'ALL_OLD'
      };
      
      const documentClient = new AWS.DynamoDB.DocumentClient();

      
      const data = await documentClient.delete(params).promise()
      if(!data.Attributes) throw new Error("No such product in the database")
      return data.Attributes
}

module.exports = {
    AddproductDB,
    GetproductsDB,
    GetProductById,
    DeleteProductDB
}
