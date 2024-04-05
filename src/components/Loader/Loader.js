import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <>
       <div className="flex flex-col gap-2 p-2 justify-center items-center bg-white">
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    </div>
    </>
  )
}

export default Loader
