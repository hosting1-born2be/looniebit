import React, { useEffect, useState } from 'react';

import Negative from '../../icons/ticker/negative';
import Positiv from '../../icons/ticker/positiv';
import styles from './cryptoTicker.module.scss';

type Crypto = {
  id: string;
  symbol: string;
  name: string;
};

const CRYPTO_LIST: Crypto[] = [
  { id: 'BTCUSDT', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ETHUSDT', symbol: 'ETH', name: 'Ethereum' },
  { id: 'BTCUSDT', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ETHUSDT', symbol: 'ETH', name: 'Ethereum' },
  { id: 'BTCUSDT', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ETHUSDT', symbol: 'ETH', name: 'Ethereum' },
  { id: 'BTCUSDT', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ETHUSDT', symbol: 'ETH', name: 'Ethereum' },
  { id: 'BTCUSDT', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ETHUSDT', symbol: 'ETH', name: 'Ethereum' },
  { id: 'BTCUSDT', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ETHUSDT', symbol: 'ETH', name: 'Ethereum' },
  { id: 'BTCUSDT', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ETHUSDT', symbol: 'ETH', name: 'Ethereum' },
  /*{ id: 'SOLUSDT', symbol: 'SOL', name: 'Solana' },
  { id: 'ADAUSDT', symbol: 'ADA', name: 'Cardano' },
  { id: 'XRPUSDT', symbol: 'XRP', name: 'Ripple' },
  { id: 'DOTUSDT', symbol: 'DOT', name: 'Polkadot' },
  { id: 'DOGEUSDT', symbol: 'DOGE', name: 'Dogecoin' },
  { id: 'AVAXUSDT', symbol: 'AVAX', name: 'Avalanche' },
  { id: 'LINKUSDT', symbol: 'LINK', name: 'Chainlink' },
  { id: 'MATICUSDT', symbol: 'MATIC', name: 'Polygon' },
  { id: 'SHIBUSDT', symbol: 'SHIB', name: 'Shiba Inu' },
  { id: 'LTCUSDT', symbol: 'LTC', name: 'Litecoin' },
  { id: 'UNIUSDT', symbol: 'UNI', name: 'Uniswap' },
  { id: 'XMRUSDT', symbol: 'XMR', name: 'Monero' },
  { id: 'XLMUSDT', symbol: 'XLM', name: 'Stellar' },*/
];

type PriceDetails = {
  usd: number;
  usd_24h_change: number;
};

type PriceData = {
  [key: string]: PriceDetails;
};

type BinanceTickerData = {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
};

const fetchCoinData = async (): Promise<PriceData> => {
  try {
    const res = await fetch('https://api.binance.com/api/v3/ticker/24hr');

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data: BinanceTickerData[] = await res.json();
    const priceData: PriceData = {};

    data.forEach((item: BinanceTickerData) => {
      const cryptoItem = CRYPTO_LIST.find(crypto => crypto.id === item.symbol);
      if (cryptoItem) {
        priceData[cryptoItem.symbol.toLowerCase()] = {
          usd: parseFloat(item.lastPrice),
          usd_24h_change: parseFloat(item.priceChangePercent),
        };
      }
    });

    return priceData;
  } catch (error) {
    console.error('Failed to fetch crypto data:', error);
    return {};
  }
};

const CryptoTicker: React.FC = () => {
  const [prices, setPrices] = useState<PriceData>({});

  const updatePrices = async () => {
    const data = await fetchCoinData();

    setPrices(data);
  };

  useEffect(() => {
    updatePrices();
    const interval = setInterval(() => {
      updatePrices();
    }, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const tickerItems = CRYPTO_LIST.map(coin => {
    const priceData = prices[coin.symbol.toLowerCase()];
    const price = priceData ? priceData.usd : null;
    const change = priceData ? priceData.usd_24h_change : null;
    return (
      <div key={coin.id} className={styles.tickerItem}>
        <span className={styles.name}>{coin.name}</span>
        <span className={styles.symbol}>{coin.symbol}</span>
        <span className={styles.price}>
          {price !== null ? `$${price.toFixed(2)}` : '...'}
        </span>
        <span
          className={`${styles.change} ${
            change !== null
              ? change >= 0
                ? styles.positive
                : styles.negative
              : ''
          }`}
        >
          {change !== null ? (
            <>
              {change >= 0 ? <Positiv /> : <Negative />}
              <span>{change.toFixed(2)}%</span>
            </>
          ) : (
            '...'
          )}
        </span>
      </div>
    );
  });

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.tickerContent}>{tickerItems}</div>
      <div className={styles.tickerContent}>{tickerItems}</div>
    </div>
  );
};

export default CryptoTicker;
