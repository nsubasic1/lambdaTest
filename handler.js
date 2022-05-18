'use strict';
const getProductByIdAdapter = require("./adapters/GetProductByIdAdapter")

module.exports.handler = async(event) => {
  const ProductId = event.pathParameters.id;
  let res = await getProductByIdAdapter(ProductId)
  console.log(res)
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
