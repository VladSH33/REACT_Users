import React, { useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom";
import { AuthContext } from "./context";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

import './styles/global.less'

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      {isAuth
        ?
          <BrowserRouter>
            <Navbar/>
            <AppRouter/>
          </BrowserRouter>
        :
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>}
    </AuthContext.Provider>
  );
}

export default App;