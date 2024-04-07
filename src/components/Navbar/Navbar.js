import React, { useState } from "react";
import Searchicon from "../../assets/Icons/Search-icon.svg";
import Image from "next/image";
import filterlines from "../../assets/Icons/filter-lines.svg";
import cloud from "../../assets/Icons/download-cloud-02.svg";
import plus from "../../assets/Icons/plus.svg";
import trash from "../../assets/Icons/trash-01.svg";
import { useAppContext } from "../../context/AppContext";

const Navbar = () => {
  let [menu, setMenu] = useState(false);
  const { searchContent, setSearchContent } = useAppContext();
  const { Delete, setDelete } = useAppContext();

  const handleSearch = (e) => {
    setSearchContent(e.target.value);
  };

  return (
    <>
      <header className="flex justify-between fixed sticky top-0 items-center bg-white w-full gap-1 z-[1000] shadow">
        <div className="flex sticky top-0  pt-5 pb-[19px] font-inter justify-between items-center w-full bg-white px-1 lg:px-6">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center font-medium flex-col sm:flex-row">
              <h1 className="text-lg">Headline</h1>
              <div className="bg-bluebg text-primary my-[7.5px] px-2 py-[2px] rounded-2xl text-xs">
                Label text or value
              </div>
            </div>
            <div className="flex pl-2 p-1 justify-center gap-2 items-center shadow-[0_2px_6px_1px_rgba(0,0,0,0.15)] rounded lg:w-[519px] pr-2">
              <Image
                src={Searchicon}
                alt="Search"
                className=""
                width={16}
                height={16}
              ></Image>
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Search"
                value={searchContent}
                className="p-1 rounded grow shrink"
              ></input>
            </div>
          </div>

          <div className="hidden md:flex gap-4 items-center ">
            <div className="flex items-center">
              <div
                className="flex px-4 py-[10px] gap-2 cursor-pointer"
                onClick={(e) => {
                  setDelete(!Delete);
                }}
              >
                <Image src={trash} alt="filter" />
                Delete
              </div>
              <div className="flex px-4 py-[10px] gap-4">
                <Image src={filterlines} alt="filter" />
                Filters
              </div>
            </div>
            <div className="flex px-4 py-[10px] gap-2 border rounded-lg">
              <Image src={cloud} alt="filter" />
              Export
            </div>
            <div className="flex px-4 py-[10px] gap-2 bg-primary rounded-lg text-white">
              <Image src={plus} alt="filter" />
              Add new CTA
            </div>
          </div>
        </div>
        <div
          className={`text-lg md:hidden p-1 sm:p-8 z-50`}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <i
            className={`fa-solid ${menu ? "fa-xmark" : "fa-bars-staggered"}`}
          ></i>
        </div>

        <div
          className={`bg-white gap-2 p-2 flex flex-col w-full fixed top-24 transform duration-150  z-50 ${
            menu ? "" : "-translate-y-96"
          } `}
        >
          <div
            className={`flex bg-white px-4 py-[10px] gap-2 transform duration-300 ${
              menu ? "" : "-translate-y-72"
            } `}
            onClick={() => {
              setDelete(!Delete);
            }}
          >
            <Image src={trash} alt="filter" />
            Delete
          </div>
          <div
            className={`flex  bg-white px-4 py-[10px] gap-2  transform duration-[450ms] ${
              menu ? "" : "-translate-y-72"
            } `}
          >
            <Image src={filterlines} alt="filter" />
            Filters
          </div>
          <div
            className={`flex  bg-white px-4 py-[10px] gap-2 border rounded-lg  transform duration-[600ms] ${
              menu ? "" : "-translate-y-72"
            } `}
          >
            <Image src={cloud} alt="filter" />
            Export
          </div>
          <div
            className={`flex px-4 z-10 py-[10px] gap-2 bg-primary rounded-lg text-white  transform duration-[750ms] ${
              menu ? "" : "-translate-y-72"
            } `}
          >
            <Image src={plus} alt="filter" />
            Add new CTA
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
