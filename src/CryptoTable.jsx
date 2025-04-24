import React from "react";
import { useSelector } from "react-redux";

const CryptoRow = ({ asset }) => {
  const formatNumber = (num) => {
    if (num == null) return "N/A";
    if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
    return num.toLocaleString();
  };

  const PercentageChange = ({ value }) => (
    <span className={value >= 0 ? "text-green-600 font-bold" : "text-red-600"}>
      {value.toFixed(2)}%
    </span>
  );

  return (
    <tr className="border-b">
      <td className="p-3">{asset.id}</td>
      <td className="p-3 flex items-center gap-2">
        <img src={`/${asset.symbol.toLowerCase()}.png`} className="w-6 h-6" />

        <div className="flex flex-row gap-2">
          <div className="font-semibold">{asset.name}</div>
          <div className="text-gray-500">{asset.symbol}</div>
        </div>
      </td>
      <td className="p-3">${asset.price.toLocaleString()}</td>
      <td className="p-3">
        <PercentageChange value={asset.change1h} />
      </td>
      <td className="p-3">
        <PercentageChange value={asset.change24h} />
      </td>
      <td className="p-3">
        <PercentageChange value={asset.change7d} />
      </td>
      <td className="p-3">${formatNumber(asset.marketCap)}</td>
      <td className="p-3">${formatNumber(asset.volume24h)}</td>
      <td className="p-3">{formatNumber(asset.circulatingSupply)}</td>
      <td className="p-3">{formatNumber(asset.maxSupply) || "∞"}</td>
    </tr>
  );
};

const CryptoTable = () => {
  const assets = useSelector((state) => state.assets);
  const headers = [
    "#",
    "Name",
    "Price",
    "1h %",
    "24h %",
    "7d %",
    "Market Cap",
    "24h Volume",
    "Circulating Supply",
    "Max Supply",
  ];
  return (
    <div className="overflow-x-auto rounded-lg border m-4">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th key={header} className="p-3 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <CryptoRow key={asset.symbol} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
