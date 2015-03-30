Node.js API wrapper to the OKCoin bitcoin exchange
===============

A node.js wrapper for the [REST APIs](https://www.okcoin.com/about/rest_api.do) exposed by bitcoin exchange [OKCoin](https://www.okcoin.com).
You will need have a registered account with [OKCoin](https://www.okcoin.com) and generated API keys to access the private methods.

Please contact support@okcoin.com if you are having trouble opening and account or generating an API key.

### Install

`npm install okcoin`

### Error handling
The first parameter to each API function is a callback function which is passed error and data objects.

The error object is an instance of [VError](https://github.com/davepacheco/node-verror) which is an extension of the standard Error object. The three main properties are
| message | a description of the error with all the available information so problems in production can be diagnosed. For example the url, http request method, parameters, error codes and messages. |
| name | the HTTP or [OKCoin error code](https://www.okcoin.com/about/rest_request.do) so specific errors can be programatically detected. For example, 503 if you are sending too many requests per second or 10010 if there is not enough funds to add a trade |
| cause | the underlying error object. eg the error object from a failed request or json parse. Note there will be no cause error for OKCoin errors. |

### Examples

```js
var OKCoin = require('okcoin');

// Test public data APIs
var publicClient = new OKCoin();

// get BTCUSD ticker
publicClient.getTicker(console.log, 'btc_usd');

// get BTCUSD order book
publicClient.getDepth(console.log, 'btc_usd');

// get trades defaulting to BTCUSD
publicClient.getTrades(console.log);

// replace the parameters with your API key and secret
var privateClient = new OKCoin('your-api-key', 'your-api-secret');

privateClient.getUserInfo(console.log);

// buy limit order for 0.01 BTC at price 100 USD
privateClient.addTrade(console.log, 'btc_usd', 'buy', '0.01', '100');
// sell limit order for 0.01 BTC at price 900 USD
privateClient.addTrade(console.log, 'btc_usd', 'sell', '0.01', '900');

// market buy of 25 USD
privateClient.addTrade(console.log, 'btc_usd', 'buy_market', null, '25');
// market sell of 0.01 BTC
privateClient.addTrade(console.log, 'btc_usd', 'sell_market', '0.01');

privateClient.cancelOrder(console.log, 'btc_usd', 31234567);

// get all open orders
privateClient.getOrderInfo(console.log, 'btc_usd', '-1');

// get the first 20 unfilled orders
privateClient.getOrderHistory(console.log, 'btc_usd', 0, 1, 20);
// get the third 20 filled orders
privateClient.getOrderHistory(console.log, 'btc_usd', 1, 3, 20);

// get the first 5 account deposits
privateClient.getAccountRecords(console.log, 'btc_usd', 0, 1, 5);
// get the first 5 account withdrawals
privateClient.getAccountRecords(console.log, 'btc_usd', 1, 1, 5);

```

Please see the exmaples.js file for more examples