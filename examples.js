var OKCoin = require('okcoin');

// Test public data APIs
var publicClient = new OKCoin();

// get BTCUSD ticker
//publicClient.getTicker(logResponse, 'btc_usd');

// get BTCUSD order book
//publicClient.getDepth(logResponse, 'btc_usd');

// get trades defaulting to BTCUSD
//publicClient.getTrades(logResponse);

// get LTCUSD trades
//publicClient.getTrades(logResponse, 'ltc_usd');

// get trades since trade id 2209328
//publicClient.getTrades(logResponse, 'btc_usd', 2219111);

// Either pass your API key and secret as the first and second parameters to examples.js. eg
// node examples.js your-api-key your-api-secret
//
// Or enter them below.
// WARNING never commit your API keys into a public repository.
var key = process.argv[2] || 'your-api-key';
var secret = process.argv[3] || 'your-api-secret';

var privateClient = new OKCoin(key, secret);

// uncomment the API you want to test.
// Be sure to check the parameters so you don't do any unwanted live trades

//privateClient.getUserInfo(logResponse);

// limit orders
//privateClient.addTrade(logResponse, 'btc_usd', 'buy', '0.01', '100');
//privateClient.addTrade(logResponse, 'btc_usd', 'sell', '0.01', '900');

// market orders
// market buy of 25 USD
privateClient.addTrade(logResponse, 'btc_usd', 'buy_market', null, '2.5');
// market sell of 0.01 BTC
//privateClient.addTrade(logResponse, 'btc_usd', 'sell_market', '0.01');

//privateClient.cancelOrder(logResponse, 'btc_usd', 1);

//privateClient.getOrderInfo(logResponse, 'btc_usd', '31947122');
// get all open orders
//privateClient.getOrderInfo(logResponse, 'btc_usd', '-1');

// get all open orders
//privateClient.getOrdersInfo(logResponse, 'btc_usd', 0, '31947122,31941934');
// get all filled orders
//privateClient.getOrdersInfo(logResponse, 'btc_usd', 1, '31947122,31941934');

// get the first 20 unfilled orders
//privateClient.getOrderHistory(logResponse, 'btc_usd', 0, 1, 20);
// get the first 20 filled orders
//privateClient.getOrderHistory(logResponse, 'btc_usd', 1, 1, 20);
// get the third 20 filled orders
//privateClient.getOrderHistory(logResponse, 'btc_usd', 1, 3, 20);

// get the first 5 account deposits
//privateClient.getAccountRecords(logResponse, 'btc_usd', 0, 1, 5);
// get the second 5 account deposits
//privateClient.getAccountRecords(logResponse, 'btc_usd', 0, 2, 5);
// get the first 5 account withdrawals
//privateClient.getAccountRecords(logResponse, 'btc_usd', 1, 1, 5);

function logResponse(err, data)
{
    if (err)
    {
        console.log('error name %s', err.name);
        console.log('error message %s', err);
    }

    console.log('\ndata: %s', JSON.stringify(data));
}