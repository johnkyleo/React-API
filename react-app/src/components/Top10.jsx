import React, { useState, useEffect } from 'react';
import parseNumber from './parseNumber'

const Top10 = () => {
 const [data, setData] = useState([]);

 useEffect(() => {

    fetch('https://api.coincap.io/v2/assets')
      .then(response => response.json())
      .then(resultData => {
        const rankedData = resultData.data.sort((a, b) => b.marketCapUsd - a.marketCapUsd).slice(0, 10);
        setData(rankedData);
      });
 }, []);

 return (
    <div>
      <h2>Top 10 Crypto by Market Cap</h2>
      <div className='block'>
        {data.map((crypto, index) => (
          <div key={crypto.id}>           
            
            <div className="card">
                        <div className="top-section">
                            <div className="border"></div>
                            <div className="icons">                          
                            <div className="social-media">
                            <h2>{index + 1}. {crypto.name}</h2>
                            </div>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <span className="title">{crypto.symbol}</span>
                            <div className="row row1">
                            <div className="item">
                                <span className="big-text">${parseNumber(crypto.marketCapUsd)}</span>
                                <span className="regular-text">Market Cap</span>
                        </div>
                        <div className="item">
                            <span className={`change ${parseFloat(crypto.changePercent24Hr) >= 0 ? 'green' : 'red'} big-text`}>{parseFloat(crypto.changePercent24Hr).toFixed(2)} </span>
                            <span className="regular-text">Change</span>
                        </div>
                        <div className="item">
                            <span className="big-text">{parseFloat(crypto.priceUsd).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                            <span className="regular-text">Price</span>
                        </div>
                        </div>
                    </div>
                    </div>

          </div>




        ))}
        
      </div>
    </div>
 );
};

export default Top10;