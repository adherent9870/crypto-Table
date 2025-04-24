import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAsset } from "./assetSlice";
import CryptoTable from "./CryptoTable";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const symbols = ["BTC", "ETH", "USDT", "XRP", "BNB"];
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

      dispatch(
        updateAsset({
          symbol: randomSymbol,
          newData: {
            price: Math.max(0, Number((Math.random() * 100000).toFixed(2))),
            change1h: Number((Math.random() * 2 - 1).toFixed(2)),
            change24h: Number((Math.random() * 5 - 2.5).toFixed(2)),
            change7d: Number((Math.random() * 10 - 5).toFixed(2)),
            volume24h: Math.random() * 1e9,
          },
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="max-w-screen-xl mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Live Crypto Prices</h1>
      <CryptoTable />
    </div>
  );
}
