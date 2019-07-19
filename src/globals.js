var unirest = require('unirest');
var btc;
var eth;
var ltc;


unirest.get("https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=btc")
	.header("X-RapidAPI-Host", "bravenewcoin-v1.p.rapidapi.com")
	.header("X-RapidAPI-Key", "3ac9060eb1msh2d8fcd7526794cfp1e9bbcjsn8a3d137292ba")
	.end(function (result) {

		btc = result.body;
		global.BTC = btc.last_price;
		global.BTCchange = btc.price_24hr_pcnt;

		if (global.BTCchange > 0) {
			global.BTCTrend = 1
		} else {
			global.BTCTrend = -1
		}

		console.log(btc);
		console.log("Last price: " + global.BTC);

	});



//Eth ticker
unirest.get("https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=eth")
	.header("X-RapidAPI-Host", "bravenewcoin-v1.p.rapidapi.com")
	.header("X-RapidAPI-Key", "3ac9060eb1msh2d8fcd7526794cfp1e9bbcjsn8a3d137292ba")
	.end(function (result) {

		eth = result.body;
		global.ETH = eth.last_price;
		global.ETHchange = eth.price_24hr_pcnt;

		if (global.ETHchange > 0) {
			global.ETHTrend = 1
		} else {
			global.ETHTrend = -1
		}



		console.log(eth);
		console.log("Last price: " + global.ETH);

	});

//Litecoin ticker
unirest.get("https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=ltc")
	.header("X-RapidAPI-Host", "bravenewcoin-v1.p.rapidapi.com")
	.header("X-RapidAPI-Key", "3ac9060eb1msh2d8fcd7526794cfp1e9bbcjsn8a3d137292ba")
	.end(function (result) {

		ltc = result.body;
		global.LTC = ltc.last_price
		global.LTCchange = ltc.price_24hr_pcnt;

		if (global.LTCchange > 0) {
			global.LTCTrend = 1
		} else {
			global.LTCTrend = -1
		}

		console.log(ltc)
		console.log("Last price: " + ltc.last_price);
	});



var BTC = "";
global.BTC = BTC;

var ETH = "";
global.ETH = ETH ;

var LTC = "";
global.LTC = LTC;

var BTCchange = "";
global.BTCchange = BTCchange;

var ETHchange ;
global.ETHchange = ETHchange;

var LTCchange ;
global.LTCchange = LTCchange;

var BTCTrend ;
global.BTCTrend = BTCTrend;

var ETHTrend;
global.ETHTrend = ETHTrend;

var LTCTrend;
global.LTCTrend = LTCTrend;

