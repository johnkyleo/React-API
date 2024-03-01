const parseNumber = (cryptoMarketCapUsd) => {
    let marketCapNumber = parseFloat(cryptoMarketCapUsd);
     
    if (marketCapNumber >= 1000000000) {
       marketCapNumber = (marketCapNumber / 1000000000).toFixed(2);
       return `${marketCapNumber}B`;
    } else if (marketCapNumber >= 1000000) {
       marketCapNumber = (marketCapNumber / 1000000).toFixed(2);
       return `${marketCapNumber}M`;
    } else {
       return `${marketCapNumber}`;
    }
}
export default parseNumber;
