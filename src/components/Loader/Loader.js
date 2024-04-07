import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <>
       <div className="flex flex-col gap-2 p-2 justify-center items-center bg-white overflow-hidden ">
      <div className="loading h-11 w-full bg-gray-200 overflow-hidden relative">
        <h1>Loading...</h1>
      </div>
      <div className="loading h-11 w-full bg-gray-200 overflow-hidden relative">
      </div>
      <div className="loading h-11 w-full bg-gray-200 overflow-hidden relative">
      </div>
      <div className="loading h-11 w-full bg-gray-200 overflow-hidden relative">
      </div>
      <div className="loading h-11 w-full bg-gray-200 overflow-hidden relative">
      </div>
    </div>
    </>
  )
}

export default Loader
