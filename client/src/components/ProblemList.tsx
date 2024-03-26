import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
// import { green } from "@nextui-org/react";
import axios from 'axios';
import { Problem } from "../utils/type";
import { Button } from "@nextui-org/react";
// import { error } from "console";



export default function ProblemList() {
  const [problems, setProblems] = useState<Problem[]>([])
  // const [problems, setProblems] = useState<Problem[]>([])
  const [search, setSearch] = useState<string>("all")
  const [check, setCheck] = useState<boolean>(false)
  const filter = ["EASY","MEDIUM","HARD"]

  // console.log(search.toLowerCase());

  useEffect(() => {
    axios.get('http://localhost:5000/api/problem/')
      .then(problems => setProblems(problems.data))
      .catch(error => console.log(error))
  }, [])
  const user = useSelector((state: RootState) => state.auth.user)
  const navigate = useNavigate();
  const loading = useSelector((state: RootState) => state.problem.loading);

  const isItSolved = (solvedArr: any) => {
    if (!solvedArr) return false
    return solvedArr.includes(user?._id)
  }
  const handleFilterButtonClick=(category: React.SetStateAction<string>)=>{
    if(!check){
      setCheck(true);
      setSearch(category);
    }
    else{
      setCheck(false)
      setSearch("all");
    }

  }

  return (
    <div className="space-y-4 m-10" >
      <div className="flex  flex-wrap md:flex-nowrap gap-4">
        {!loading?filter.map((category,idx) => {
          return (
          <div>
            <button className={`p-2 px-4 m-2 outline-none rounded shadow  text-white ${category.toLowerCase() === "easy" ? "bg-green-600" : category.toLowerCase() === "medium" ? "bg-yellow-500" : "bg-red-600"}`}
            onClick={()=> handleFilterButtonClick(category)} key={`fitlers-${idx}`} >{category}</button>
          </div>)
        }):""}
      </div>

      {!loading
        ? problems.filter((item) => {
          return (search.toLowerCase() === 'all') ? item : item.difficulty.toLowerCase().includes(search.toLowerCase())
        }).map((item, index) => {
          return (
            <>
              <div
                style={{ backgroundColor: "#FCF5ED" }}
                key={index}
                className="flex items-center w-full justify-between p-4 px-8 rounded shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={() => navigate(`/problem/${item._id}`)}
              >
                <div>


                  <div>
                    <h2 className="text-xl m-0 hover:underline cursor-pointer capitalize">
                      {item.title}
                    </h2>
                    <p
                      className="m-0  mt-2"
                      style={{ wordSpacing: "5px", maxWidth: "50%" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>

                  <button className={`p-2 px-4 m-2 outline-none rounded shadow  text-white ${item.difficulty.toLowerCase() === "easy" ? "bg-green-600" : item.difficulty.toLowerCase() === "medium" ? "bg-yellow-500" : "bg-red-600"}`}>
                    {item.difficulty}
                  </button>
                  <button className={`p-2 px-4 m-2 outline-none rounded shadow  text-white`} style={{backgroundColor:"#1F2544"}}>
                    {item.tags}
                  </button>
                  <button className={`p-2 px-4 outline-none rounded shadow text-white ${isItSolved(item.whoSolved) ? "bg-green-600 font-semibold line-through" : "bg-black hover:bg-white hover:text-black hover:border"}`}>
                    {isItSolved(item.whoSolved) ? 'Solved' : "Solve Now"}

                  </button>
                </div>

              </div>
            </>
          )
        })
        : [0, 1, 2].map((item) => (
          <div
            key={item}
            className="border border-blue-300 shadow rounded-md p-4 max-w-4xl w-full mx-auto"
          >
            <div className="animate-pulse flex items-center space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-3 bg-slate-700 rounded max-w-md"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-5 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-3 max-w-xs"></div>
                  </div>
                </div>
              </div>
              <div className="h-8 bg-slate-500 rounded w-24"></div>
            </div>
          </div>
        ))}
    </div >


  );
}
