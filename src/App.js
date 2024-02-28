import React from "react";

//component
import HomePage from "./Pages/HomePage";

//HOC
import HomeLayoutHOC from "./HOC";

function App() {
  return (
    <>
     <HomeLayoutHOC path='/' exact component={HomePage}/>
    </>
  );
}

export default App;
