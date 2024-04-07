"use client";
import React, { useEffect, useState } from "react";
import arrow from "../../assests/Icons/arrow-down.svg";
import Loader from "../Loader/Loader";
import Image from "next/image";
import minus from "../../assests/Icons/minus.svg";
import { useAppContext } from '../../context/AppContext';


const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [allchecked, setallchecked] = useState(false);
  const { searchContent} = useAppContext();
  const [selecteddata,setselectedata]=useState([[]]);
  const [itemsPerPage] = useState(20);


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
        alert("error occured");
      }
    };
    fetchData();
  }, []);

  const sortTable = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key].toUpperCase() < b[key].toUpperCase()) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key].toUpperCase() > b[key].toUpperCase()) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchContent.toLowerCase()) ||
      item.id.includes(searchContent) 
  );

  const handleCheckboxChange = (id) => {
    const updatedData = selecteddata.filter(item => item.id !== id);
    setselectedata(updatedData);
  };

  const sortNumericTable = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    const sortedData = [...data].sort((a, b) => {
      if (+a[key] < +b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (+a[key] > +b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse font-inter">
        <thead className="bg-lightgraybg ">
          <tr className="text-[10px] sm:text-xs font-medium cursor-pointer">
            <th onClick={()=>{setallchecked(!allchecked);}} className=" items-center justify-center px-0 min-w-5 py-0 md:px-6 md:py-3">
              <Image
                className={`border border-primary rounded m-auto transform duration-150 ${allchecked?"rotate-90":""}`}
                src={minus}
                alt="select"
              />
            </th>
            <th className="sm:px-2 sm:py-1 lg:px-6 lg:py-3" onClick={() => sortNumericTable("id")}>
              Id
              <Image
                src={arrow}
                alt="sort"
                className={` transform duration-150 ${
                  sortConfig.key === "id"
                    ? sortConfig.direction === "asc"
                      ? "inline-block ml-1"
                      : "inline-block ml-1 rotate-180"
                    : "hidden"
                }`}
              />
            </th>
            <th
              className="sm:px-2 sm:py-1 lg:px-6 lg:py-3 cursor-pointer"
              onClick={() => sortTable("name")}
            >
              Name
              <Image
                src={arrow}
                alt="sort"
                className={`transform duration-150 ${
                  sortConfig.key === "name"
                    ? sortConfig.direction === "asc"
                      ? "inline-block ml-1"
                      : "inline-block ml-1 rotate-180"
                    : "hidden"
                }`}
              />
            </th>
            <th
              className="sm:px-2 sm:py-1 lg:px-6 lg:py-3 cursor-pointer"
              onClick={() => sortNumericTable("rank")}
            >
              Rank
              <Image
                src={arrow}
                alt="sort"
                className={`transform duration-150 ${
                  sortConfig.key === "rank"
                    ? sortConfig.direction === "asc"
                      ? "inline-block ml-1"
                      : "inline-block ml-1 rotate-180"
                    : "hidden"
                }`}
              />
            </th>
            <th
              className="sm:px-2 sm:py-1 lg:px-6 lg:py-3 cursor-pointer"
              onClick={() => sortNumericTable("price_usd")}
            >
              Price (USD)
              <Image
                src={arrow}
                alt="sort"
                className={`transform duration-150 ${
                  sortConfig.key === "price_usd"
                    ? sortConfig.direction === "asc"
                      ? "inline-block ml-1"
                      : "inline-block ml-1 rotate-180"
                    : "hidden"
                }`}
              />
            </th>
            <th
              className="sm:px-2 sm:py-1 lg:px-6 lg:py-3 cursor-pointer"
              onClick={() => sortNumericTable("percent_change_24h")}
            >
              Price Change (24h)
              <Image
                src={arrow}
                alt="sort"
                className={`transform duration-150 ${
                  sortConfig.key === "percent_change_24h"
                    ? sortConfig.direction === "asc"
                      ? "inline-block ml-1"
                      : "inline-block ml-1 rotate-180"
                    : "hidden"
                }`}
              />
            </th>
            <th
              className="sm:px-2 sm:py-1 lg:px-6 lg:py-3 cursor-pointer"
              onClick={() => sortTable("price_btc")}
            >
              Price (BTC)
              <Image
                src={arrow}
                alt="sort"
                className={`transform duration-150 ${
                  sortConfig.key === "price_btc"
                    ? sortConfig.direction === "asc"
                      ? "inline-block ml-1"
                      : "inline-block ml-1 rotate-180"
                    : "hidden"
                }`}
              />
            </th>
            <th
              className="sm:px-2 sm:py-1 lg:px-6 lg:py-3 cursor-pointer"
              onClick={() => sortNumericTable("market_cap_usd")}
            >
              Market Cap (USD)
              <Image
                src={arrow}
                alt="sort"
                className={`transform duration-150 ${
                  sortConfig.key === "market_cap_usd"
                    ? sortConfig.direction === "asc"
                      ? "inline-block ml-1"
                      : "inline-block ml-1 rotate-180"
                    : "hidden"
                }`}
              />
            </th>
          </tr>
        </thead>
        <tbody className="h-auto text-[10px] sm:text-xs">
          {filteredData.map((item) => (
            <tr
              key={item.id}
              className=" font-normal border-b text-center"
            >
              <td className="sm:px-2 sm:py-1 lg:px-6 lg:py-3">
                <input
                  className="bg-primary text-white"
                  type="checkbox"
                  name=""
                  id=""
                  checked={allchecked}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td className="sm:px-2 lg:px-6 py-3">{item.id}</td>
              <td className="sm:px-2 lg:px-6 py-3 break-all">{item.name}</td>
              <td className="sm:px-2 lg:px-6 py-3">{item.rank}</td>
              <td className="sm:px-2 lg:px-6 py-3">{item.price_usd}</td>
              <td className="sm:px-2 lg:px-6 py-3">{item.percent_change_24h}</td>
              <td className="sm:px-2 lg:px-6 py-3">{item.price_btc}</td>
              <td className="sm:px-2 lg:px-6 py-3">{item.market_cap_usd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
