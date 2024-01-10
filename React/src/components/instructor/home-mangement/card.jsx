import React from "react";

const Card = ({data,value}) => {
  return(
    <div className=" w-1/5 h-3/6 border-4 shadow-2xl  bg-slate-800 flex  justify-evenly items-center rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-800">
    {/* <img src="assets/pic.png" alt="none" className="w-20 h-20 my-2"/> */}
    <p className="text-4xl font-bold">{value}</p>
    <p className="text-2xl my-2 uppercase font-bold">{data}</p>
    </div>
  )
};

export default Card;
