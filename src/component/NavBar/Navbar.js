import {React,useState} from "react";

//react icons
import { FaChevronDown } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa6";

//components
import HoverDiv from "./HoverDiv";



const NavBar=()=>{
    const [hoveredItems, setHoveredItems] = useState([false, false, false, false, false, false]);

    const handleHover = (index) => {
        const updatedHoveredItems = [...hoveredItems];
        updatedHoveredItems[index] = !updatedHoveredItems[index];
        setHoveredItems(updatedHoveredItems);
    };

    const rise=[ "Overview","People Positive","Planet Positive","Trust Positive","Hriyali","Mission Even"]
    const aboutUs=["Overview","Leadership","Our Story","Motor Sports","Cultural Outreach","Museum"]
    const ourBusiness=["Overview","Our Brands","Global Presence"]
    const investorRelations=["Overview","Disclosure Under Regulation 46 and 62 of SEBI(LODR)","Reports","Regulatory Filings","Policies","Sustainability"]
    const newsRoom=["Overview","Press Releases","Stories","Media Resources"]
    const careers=["Mahindra Accelerated Leadership Track","Mahindra Future Shapers","Mahindra Leadership University","Mahindra Digital Endgine","Women At Mahindra"]
    
    return(
        <>
           <div className="w-full h-20 bg-black  flex gap-5 px-9 relative z-10">
           <div className="w-48 h-16 p-4 items-center">
        <img src="https://www.mahindra.com/sites/default/files/2024-02/mahindra-logo-new.webp" alt="logo" className="w-full h-full"/>
           </div>

           <div className="p-4 flex justify-between items-center gap-10">
                    {["RISE", "ABOUT US", "OUR BUSINESSES", "INVESTOR RELATIONS", "NEWSROOM", "CAREERS"].map((item, index) => (
                        <li key={index} className="text-white text-sm flex list-none gap-1 items-center relative cursor-pointer hover:text-red-700" onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(index)}>
                            {item} {hoveredItems[index] ? <FaChevronUp className="text-red-700 w-4 h-4 cursor-pointer transition-transform duration-300 transform" /> : <FaChevronDown className="text-white w-4 h-4 transition-transform duration-300 transform rotate-0 cursor-pointer" />}
                            {hoveredItems[index] && (
                                <HoverDiv options={index === 0 ? rise : index === 1 ? aboutUs : index === 2 ? ourBusiness : index === 3 ? investorRelations : index === 4 ? newsRoom : careers} />
                            )}
                        </li>
                    ))}
                </div>

           <div className="text-white flex items-center gap-7 mx-2 ">
           <CiMail className="w-8 h-8 hover:text-red-700"/>
           <IoSearchOutline className="w-8 h-8 hover:text-red-700"/>

           </div>

           </div> 
        </>
    )
}

export default NavBar;