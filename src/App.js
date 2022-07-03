import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./login";


class App extends React.Component{

  render(){
      return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login></Login>} />
              </Routes>
          </BrowserRouter>
      )
  }
}

export default App;
