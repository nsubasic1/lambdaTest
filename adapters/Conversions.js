const axios = require("axios");

const getConversions = async (currency) =>{
    const res = await axios.get('https://open.er-api.com/v6/latest/EUR')
    const data = res?.data
    return data.rates[currency];
}

module.exports = getConversions