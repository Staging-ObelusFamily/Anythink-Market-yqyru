const autocannon = require("autocannon");
const url = "https://anythink-market-yqyru-api.herokuapp.com/api/items"

autocannon({
  url: url,
  connections: 100, //default
  amount: 100
}, console.log)