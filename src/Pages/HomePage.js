import React from "react";
import NavBar from "../component/NavBar/Navbar";

const HomePage=()=>{
    return(
        <>
            <div>
                <NavBar />
                <div className="w-full" >
                    <img src="https://www.mahindra.com/sites/default/files/2023-08/our-business-automotive-spotlight-new.jpg" alt="scorpio" className="w-full "/>
                </div>
            </div>
        </>
    )
}

export default HomePage;