import React, { useEffect, useState } from "react";

import Negative from "../../icons/ticker/negative";
import Positiv from "../../icons/ticker/positiv";
import styles from "./cryptoTicker.module.scss";

type Crypto = {
  id: string;
  symbol: string;
};

const CRYPTO_LIST: Crypto[] = [
  { id: "bitcoin", symbol: "BTC" },
  { id: "ethereum", symbol: "ETH" },
  { id: "solana", symbol: "SOL" },
  { id: "cardano", symbol: "ADA" },
  { id: "ripple", symbol: "XRP" },
  { id: "polkadot", symbol: "DOT" },
  { id: "bitcoin", symbol: "BTC" },
  { id: "ethereum", symbol: "ETH" },
  { id: "solana", symbol: "SOL" },
  { id: "cardano", symbol: "ADA" },
  { id: "ripple", symbol: "XRP" },
  { id: "polkadot", symbol: "DOT" },
];

type PriceDetails = {
  usd: number;
  usd_24h_change: number;
};

type PriceData = {
  [key: string]: PriceDetails;
};

const fetchCoinData = async (coinIds: string[]): Promise<PriceData> => {
  try {
    const idsParam = coinIds.join("%2C");
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${idsParam}&vs_currencies=usd&include_24hr_change=true`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data: PriceData = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const CryptoTicker: React.FC = () => {
  const [prices, setPrices] = useState<PriceData>({});

  const updatePrices = async () => {
    const coinIds = CRYPTO_LIST.map((coin) => coin.id);
    const data = await fetchCoinData(coinIds);
    console.log(data);
    setPrices(data);
  };

  useEffect(() => {
    updatePrices();
    const interval = setInterval(() => {
      updatePrices();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = CRYPTO_LIST.map((coin) => {
    const priceData = prices[coin.id];
    const price = priceData ? priceData.usd : null;
    const change = priceData ? priceData.usd_24h_change : null;
    return (
      <div key={coin.id} className={styles.tickerItem}>
        <span className={styles.name}>{coin.id}</span>
        <span className={styles.symbol}>{coin.symbol.toUpperCase()}</span>
        <span className={styles.price}>
          {price !== null ? `$${price}` : "..."}
        </span>
        <span
          className={`${styles.change} ${
            change !== null
              ? change >= 0
                ? styles.positive
                : styles.negative
              : ""
          }`}
        >
          {change !== null ? (
            <>
              {change >= 0 ? <Positiv /> : <Negative />}
              <span>{change.toFixed(2)}%</span>
            </>
          ) : (
            "..."
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
