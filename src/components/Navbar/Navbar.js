"use client";
import React from "react";
import Searchicon from "../../assests/Icons/Search-icon.svg";
import Image from "next/image";
import filterlines from "../../assests/Icons/filter-lines.svg"
import cloud from "../../assests/Icons/download-cloud-02.svg"
import plus from "../../assests/Icons/plus.svg"
import trash from "../../assests/Icons/trash-01.svg"

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 flex px-6 pt-5 pb-[19px] font-inter justify-between w-full bg-white">
        <div>
        <div className="flex gap-2 items-center h-7 font-medium">
          <h1 className="text-lg">Headline</h1>
          <div className="bg-bluebg text-primary my-[7.5px] px-2 py-[2px] rounded-2xl text-xs">
            Label text or value
          </div>
        </div>
        <div>
            <h2 className="text-lightgray text-sm">A descriptive body text comes here</h2>
        </div>
        </div>

        <div className="flex gap-4 items-center">
            <div className="flex items-center">
          <div className="flex px-4 py-[10px] gap-2">
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
      </header>
    </>
  );
};

export default Navbar;
