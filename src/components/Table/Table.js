"use client";
import React, { useEffect, useState } from "react";
import arrow from "../../assests/Icons/arrow-down.svg";
import Loader from "../Loader/Loader";

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coinlore.net/api/tickers/");
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return (
    <table className="w-full border-collapse font-inter">
      <thead className="bg-gray-200">
        <tr className="text-xs font-medium">
          <th className="py-2 px-4 ">Id</th>
          <th className="py-2 px-4 ">Name</th>
          <th>Rank</th>
          <th>Price (USD)</th>
          <th>Price Change (24h)</th>
          <th>Price (BTC)</th>
          <th>Market Cap (USD)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="text-xs font-normal border-b">
            <td className="py-2 px-4">{item.id}</td>
            <td className="py-2 px-4">{item.name}</td>
            <td className="py-2 px-4">{item.rank}</td>
            <td className="py-2 px-4">{item.price_usd}</td>
            <td className="py-2 px-4">{item.percent_change_24h}</td>
            <td className="py-2 px-4">{item.price_btc}</td>
            <td className="py-2 px-4">{item.market_cap_usd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
