"use client";
import React, { useEffect, useState } from "react";
import arrow from "../../assests/Icons/arrow-down.svg";
import Loader from "../Loader/Loader";

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterValue, setFilterValue] = useState('');


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

  const sortTable = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') { 
      direction = 'desc';
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key].toUpperCase() < b[key].toUpperCase()) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key].toUpperCase() > b[key].toUpperCase()) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const filteredData = data.filter((item) =>
  item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
  item.age.includes(filterValue) ||
  item.country.toLowerCase().includes(filterValue.toLowerCase())
);

  const sortNumericTable = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') { 
      direction = 'desc';
    }
    const sortedData = [...data].sort((a, b) => {
      if (+a[key] < +b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (+a[key] > +b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  if (loading) {
    return <Loader/>;
  }

  return (
    <table className="w-full border-collapse font-inter">
      <thead className="bg-gray-200">
        <tr className="text-xs font-medium">
        <th onClick={() => sortNumericTable('id')} className="py-2 px-4">Id { (sortConfig.key === 'id') && (sortConfig.direction === 'asc' ? "!":"^")}</th>
          <th onClick={() => sortNumericTable('id')} className="py-2 px-4">Id { (sortConfig.key === 'id') && (sortConfig.direction === 'asc' ? "!":"^")}</th>
          <th onClick={() => sortTable('name')} className="py-2 px-4 ">Name {(sortConfig.key === 'name') && (sortConfig.direction === 'asc' ? "!":"^")}</th>
          <th onClick={() => sortNumericTable('rank')} className="py-2 px-4 ">Rank  {(sortConfig.key === 'rank') && (sortConfig.direction === 'asc' ? "!":"^")}</th>
          <th onClick={() => sortNumericTable('price_usd')} className="py-2 px-4 ">Price (USD)  {(sortConfig.key === 'price_usd') && (sortConfig.direction === 'asc' ? "!":"^")}</th>
          <th onClick={() => sortNumericTable('percent_change_24h')} className="py-2 px-4 ">Price Change (24h)  {(sortConfig.key === 'percent_change_24h') && (sortConfig.direction === 'asc' ? "!":"^")}</th>
          <th onClick={() => sortTable('price_btc')} className="py-2 px-4 ">Price (BTC)  {(sortConfig.key === 'price_btc') && (sortConfig.direction === 'asc' ? "!":"^")}</th>
          <th onClick={() =>sortNumericTable('market_cap_usd')} className="py-2 px-4 ">Market Cap (USD)  {(sortConfig.key === 'market_cap_usd') && (sortConfig.direction === 'asc' ? "!":"^")}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="text-xs font-normal border-b">
            <td className="py-2 px-4"> 
            <input type="checkbox" name="" id="" />
            </td>
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
