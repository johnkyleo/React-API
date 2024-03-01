import React, { useState, useEffect } from 'react';
import parseNumber from './parseNumber';

const FetchData = () => {
 const [input, setInput] = useState('');
 const [cryptos, setCryptos] = useState([]);
 const [data, setData] = useState([]);

 useEffect(() => {
    fetch('https://api.coincap.io/v2/assets')
      .then((response) => response.json())
      .then((data) => {
        const cryptoData = Object.values(data.data);
        setCryptos(cryptoData);
        setData(cryptoData.sort((a, b) => a.name.localeCompare(b.name)));
      });
 }, []);

 const handleChange = (e) => {
    setInput(e.target.value);
    if (!e.target.value) {
      setData(cryptos);
      return;
    }
    const filtered = cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(e.target.value.toLowerCase()) || crypto.symbol.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filtered);
 };

 return (
    <div>
      <input type="text" placeholder="Search Coin" className="form__field" value={input} onChange={handleChange} />
      {data.length === 0 ? (
        <h2>No data found</h2> ) : (
        <div className="block">
          {data.map((crypto) => (
          <div key={crypto.id}>                           
          <div className="card">
              <div className="top-section">
                  <div className="border"></div>
                       <div className="icons">                          
                          <div className="social-media">
                                  <h2> {crypto.name}</h2>
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
      )}
    </div>
 );
};

export default FetchData;