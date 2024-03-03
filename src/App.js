import React from "react";

//component
import HomePage from "./Pages/HomePage";


//HOC
import HomeLayoutHOC from "./HOC";
import Suvpage from "./Pages/Suvpage";

function App() {
  return (
    <>
     <HomeLayoutHOC path='/' exact component={HomePage}/>
     <HomeLayoutHOC path='/suv' exact component={Suvpage}/>
    </>
  );
}

export default App;
