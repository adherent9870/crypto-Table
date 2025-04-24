import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    symbol: "BTC",
    name: "Bitcoin",
    price: 93759.48,
    change1h: -0.43,
    change24h: -0.93,
    change7d: -11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: 19.85e6,
    maxSupply: 46.78e6,
  },
  {
    id: 2,
    symbol: "ETH",
    name: "Ethereum",
    price: 1802.46,
    change1h: -0.6,
    change24h: -3.21,
    change7d: -13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120.71e6,
    maxSupply: null,
  },
  {
    id: 3,
    symbol: "USDT",
    name: "Tether",
    price: 1.0,
    change1h: -0.0,
    change24h: -0.0,
    change7d: -0.04,
    marketCap: 145320022085,
    volume24h: 92268882007,
    circulatingSupply: 145.27e9,
    maxSupply: 145.27e9,
  },
  {
    id: 4,
    symbol: "XRP",
    name: "XRP",
    price: 2.22,
    change1h: -0.46,
    change24h: -0.54,
    change7d: -6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58.39e9,
    maxSupply: 100e9,
  },
  {
    id: 5,
    symbol: "BNB",
    name: "BNB",
    price: 606.65,
    change1h: -0.09,
    change24h: -1.2,
    change7d: -3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140.89e6,
    maxSupply: 170e6,
  },
];

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    updateAsset: (state, action) => {
      const index = state.findIndex((a) => a.symbol === action.payload.symbol);
      if (index >= 0) {
        state[index] = { ...state[index], ...action.payload.newData };
      }
    },
  },
});

export const { updateAsset } = assetsSlice.actions;
export default assetsSlice.reducer;
