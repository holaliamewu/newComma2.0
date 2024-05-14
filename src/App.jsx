import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Feed from "./pages/Feed";
import GetStarted from "./pages/GetStarted";
import Explore from "./pages/Explore";
import Jobs from "./pages/Jobs";
import Error from "./pages/Error";
import Notifications from "./pages/Notifications";
import Chat from "./pages/Chat";

export const SignInContext = createContext();
export const WhereOnTheAppContext = createContext();

export default function App() {
  
  const [ isSignedIn, setSetIsSignedIn ] = useState(false);
  const [ whereOnTheApp, setWhereOnTheApp ] = useState('feed')

return(
<SignInContext.Provider value={[isSignedIn, setSetIsSignedIn ]} >
<WhereOnTheAppContext.Provider value={[whereOnTheApp, setWhereOnTheApp ]} >
  <div className="" >
  {
    isSignedIn ? (
      <BrowserRouter >
        <Routes >
          <Route path="/" element={ <Layout /> } >
            <Route index element={ <Feed /> } />
            <Route path="/explore" element={ <Explore /> } />
            <Route path="/jobs" element={ <Jobs /> } />
            <Route path="/notications" element={ <Notifications /> } />
            <Route path="/chat" element={ <Chat /> } />
            <Route path="*" element={ <Error /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    ) : (<GetStarted />)
  }
  </div>
</WhereOnTheAppContext.Provider>
</SignInContext.Provider>
)}