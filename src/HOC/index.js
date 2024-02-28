import react from "react";
import {Route,Routes} from "react-router-dom";
import HomeLayout from "../Layout";

const HomeLayoutHOC=({component:Component,...rest})=>{
    return(
        <Routes>
            <Route
            {...rest}
            element={
                <HomeLayout>
                    <Component {...rest}/>
                </HomeLayout>
            }
            />
        </Routes>
    )
}

export default HomeLayoutHOC;