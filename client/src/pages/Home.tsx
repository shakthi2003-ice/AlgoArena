import React, { useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProblemList from "../components/ProblemList";
import { asyncProblemGet } from "../store/ProblemSlice";
import { RootState } from "../store/store";
import Button from '@mui/material/Button';
import Homeimg from "./Homeimg";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  const problemRef = useRef<HTMLDivElement | null>(null);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch()
  const problems = useSelector((state: RootState) => state.problem.problems)

  useEffect(() => {
    dispatch(asyncProblemGet() as any)
  }, [])

  return (
    <>
      <div style={{ backgroundColor: "#c4e5f3", height: "520px" }}>
        <div className="mx-auto mb-8">
          <div style={{ display: "flex", justifyItems: "center" }} >

            <div style={{ width: "50%", height: "75%", display: "flex", flexDirection: "column" }}>
              {user && (
                <h1 style={{ marginLeft: "52px", marginTop: "98px", color: "#001e2b" }}>
                  {`Welcome back ${user.displayName}!`}
                </h1>
              )}
              {!user && (
                <h1 style={{ marginLeft: "52px", marginTop: "98px", color: "#001e2b" }}>
                  Why wait Lets Code
                </h1>
              )}
              <h4 style={{ "color": "#001e2b", marginLeft: "52px" }}>
                Explore AlgoArena, your coding haven! Dive into a diverse range of algorithmic challenges, from beginner to advanced levels. Master problem-solving skills with our supportive community and detailed solutions. Join us in the exhilarating journey of coding exploration and skill refinement.
              </h4>
              <Button variant="contained" style={{width:"150px",marginLeft: "52px",backgroundColor:"#F5EDCE"}} onClick={()=>{
                problemRef.current?.scrollIntoView({
                  behavior: "smooth"
                })
              }} ><h6 style={{color:"black", marginTop:"5px"}}>Go to Problems</h6></Button>

            </div>
            <div>
              <Homeimg style={{ height: "500px", width: "500px" }} />
            </div>

          </div>
          <div className="font-mono mt-8">
          </div>
        </div>
      </div>
      <div style={{ backgroundColor:"#001e2b",display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
        <h4 style={{color:'#c4e5f3'}}>No Matter The Challenge, At AlgoArena</h4>
        <h1 style={{marginTop: "-20px",color:'#c4e5f3'}}>Your Coding Skills will Improve</h1>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent:"center", alignItems: "center", backgroundColor: "#F4DFC8", margin: "10px",height: "424px", width: "400px", border: "1px solid #272829", borderRadius: "10px" }}>
              <h1 style={{color:"#001e2b"}}>Build your Career</h1>
            </div>
            <div style={{ marginBottom:"25px",display: "flex", justifyContent:"center", alignItems: "center", backgroundColor: "rgb(253 184 108)", margin: "10px",height: "200px", width: "400px",border: "1px solid #272829", borderRadius: "10px" }}>
              <h1 style={{color:"black", marginLeft:"25px"}}>Track your code Submissions</h1>
            </div>
          </div>
          <div style={{ marginBottom:"25px",display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent:"center", alignItems: "center", backgroundColor: "rgb(82 207 123)", margin: "10px",height: "200px", width: "400px", border: "1px solid #272829", borderRadius: "10px" }}>
              <h1 style={{marginLeft:"10px"}}>Custom your own Problems</h1>
            </div>
            <div style={{ display: "flex", justifyItems:"center", alignItems: "center", backgroundColor: "rgb(194 194 212)", margin: "10px",height: "424px", width: "400px", border: "1px solid #272829", borderRadius: "10px" }}>
              <h1 style={{color:"#001e2b", marginLeft:"40px"}}>Code in your Favourite Language</h1>
            </div>
          </div>
        </div>
      </div>
      <div ref={problemRef}style={{backgroundColor: "#fba8c4",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{color: "black"}}> Start Solving the Problems </h1>
        <ProblemList/>
      </div>
      <div style={{ backgroundColor:"#181D31",display:"flex",justifyContent:"center", alignItems:"center"}}>
      <a href="https://www.instagram.com/its_mahendran/"><InstagramIcon sx={{ color: "white" }} style={{margin:"15px"}}/></a>
        <FacebookIcon sx={{ color: "white" }} style={{margin:"15px"}}/>
        <a href="https://github.com/shakthi2003-ice">  <GithubIcon sx={{ color: "white" }} style={{margin:"15px"}}/></a>
        <a href="https://www.linkedin.com/in/shakthi-mahendran-023679214/">  <LinkedInIcon sx={{ color: "white" }} style={{margin:"15px"}}/></a>
        <div style={{height:"30px",border:"2px solid white"}}></div>
        <h6 style={{color:"white",margin:"2px 0px 0px 7px"}}>Made With 🤍 by Shakthi</h6>
      </div>
    </>
  );
}
