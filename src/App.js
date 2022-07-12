import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";


class App extends React.Component{

  render(){
      return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Dashboard></Dashboard>} />
              </Routes>
          </BrowserRouter>
      )
  }
}

export default App;
