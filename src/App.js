import React, { useState } from 'react';
import './App.css';
import { CryptoCard } from './here';
import moment from 'moment';
import arweave from './arweaveSetup';
import InfoBox from './InfoBox';
import ticker from './ticker';
import BTC from './globals';





function App() {
    const [wallet, setWallet] = useState({});
    const [authenticated, setAuthenticated] = useState(false);


    const handleFileUpload = (e) => {
        const filereader = new FileReader();

        filereader.addEventListener('loadend', async e => {
            try {
                const json = JSON.parse(e.target.result);
                await setWallet(json);
                await setAuthenticated(true);
                //console.log(`Arweave wallet address: ${}`)

                //arweave.wallets.jwkToAdress(wallet).then((address) => {
                //    console.log(`Arweave address: ${address}`)

                //    arweave.wallets.getBalance(address).then((balance) => {
                //        let winston = balance;
                //        let ar = arweave.ar.winstonToAr(balance);

                //        console.log(winston);

                //        console.log(ar);
                //    });
                //});
            } catch (err) {
                alert(
                    'Something went wrong, make sure you have uploaded the correct file'
                );
                console.log(err);
            }
        });

        filereader.readAsText(e.target.files[0]);
    };



    const handleLogout = () => {
        setWallet({});
        setAuthenticated(false);
    };

    if (authenticated) {

        //btc ticker
        var unirest = require('unirest');
        var btc;
       

        return (
        <div className="App">
                <header className="App-header" >
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <h1 style={{ fontSize: 50 }}>
                            Crypto Stats
                         </h1>
                    </div>
                    <div className='card-container' style={{ background: 'linear-gradient(to top, rgb(34, 227, 210), #243b55)', borderRadius: '20px' }}>
                        <CryptoCard
                            currencyName='Bitcoin'
                            currencyPrice={'$ ' + global.BTC}
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png" />}
                            currencyShortName='BTC'
                            trend={'% '+ global.BTCchange}
                            trendDirection={global.BTCTrend}
                            chartData={[]}
                        />

                        <CryptoCard
                            currencyName='Ethereum'
                            currencyPrice={'$ ' + global.ETH }
                            icon={<img src="https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png" />}
                            currencyShortName='ETH'
                            trend={'% '+ global.ETHchange}
                            trendDirection={global.ETHTrend}
                            chartData={[]}
                            chartColor='#9b59b6'
                        />

                        <CryptoCard
                            currencyName='Litecoin'
                            currencyPrice={'$ ' + global.LTC}
                            icon={<img src="http://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/1024/LiteCoin-icon.png" />}
                            currencyShortName='LTC'
                            trend={'% ' + global.LTCchange}
                            trendDirection={global.LTCTrend}
                            chartData={[]}
                            chartColor='#ecf0f1'
                        />
                    </div>

                    <a href="#" onClick={handleLogout}>
                     <span style={{ color: 'white', fontSize: 15, borderSize: 1, borderColor: '#dff0ea', backgroundColor: 'black', padding: 10, paddingLeft: 25, paddingRight: 25, borderRadius: 5 }}>
                    Logout
                    </span>
                     </a>
                </header>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                 
        </div>
            </div>

    )
    } else {
        return (
        <div className="App">
                <div style={{ backgroundColor: 'lightseagreen', color: '#dff0ea', flex: 1, height: '100vh', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                    <h1 > Crypto Stats </h1>
                    <h2>Login with your AR Wallet</h2>
        <input type="file" onChange={handleFileUpload} style={{ borderStyle: 'dashed', padding: 30, margin: 50, borderWidth: 5, borderColor: 'rgba(255, 255, 255, 0.25)', display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />
        </div>
        </div>
                );
    }
}


export default App;