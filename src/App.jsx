import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Feed from "./pages/Feed";
import GetStarted from "./pages/GetStarted";
import Explore from "./pages/Explore";
import Jobs from "./pages/Jobs";
import Error from "./pages/Error";

export default function App() {
  
  const [ isSignedIn, setSetIsSignedIn ] = useState(true);

return(
  <div className="" >
  {
    isSignedIn ? (
      <BrowserRouter >
        <Routes >
          <Route path="/" element={ <Layout /> } >
            <Route index element={ <Feed /> } />
            <Route path="/explore" element={ <Explore /> } />
            <Route path="/jobs" element={ <Jobs /> } />
          </Route>
          <Route path="*" element={ <Error /> } />
        </Routes>
      </BrowserRouter>
    ) : (<GetStarted />)
  }
  </div>
)}