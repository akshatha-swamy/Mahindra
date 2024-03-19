import React,{useEffect} from "react";
import NavBar from "../component/NavBar/Navbar";
import AutomotiveDiv from "../component/extra div/AutomotiveDiv";
import { imageObject } from "../component/functions/Funtions";


//images
// import suvv from "../Assets/homepage"

//react-icons
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import "./HomePage.css"

const HomePage=()=>{

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
    
        const dontShow = document.querySelectorAll('.dontShow');
        dontShow.forEach((el) => observer.observe(el));
    
        return () => {
            // Cleanup function to disconnect the observer when the component unmounts
            observer.disconnect();
        };
    }, []); // Empty dependency array means this effect runs only once, which is fine for setting up the observer
    
    // Ensure that any necessary classes are reset or re-added when needed
    // You might need additional logic here depending on your specific requirements
    useEffect(() => {
        const dontShow = document.querySelectorAll('.dontShow');
        dontShow.forEach((el) => {
            // Reset classes if needed
            el.classList.remove('show');
        });
    }, [/* Add any dependencies that might trigger a reset */]);
    
      
    
    

    const images = require.context('../Assets/homepage', true);
    
    const heading=["start","SUV","Electric Car","Electric Hypercar","jawa"]
   
    const homepage=imageObject(heading,images)
   

    // let imgbit={}
    // images.keys().map((image,ind) => imgbit[heading[ind]]=images(image));
    // console.log(imgbit)
    
    
    return(
        <>
            <div>
                <NavBar />
                <div className="w-full relative">
                    <img src={homepage["start"]} alt="scorpio" className="w-full "
                   />
                </div>
                <div className="absolute top-40 right-32">
                    <AutomotiveDiv/>
                </div>
                <div >
                <div className="flex justify-center items-center m-9 gap-9">
                   
                        <div className="image-container dontShow image1 w-80 h-56  mx-4 rounded-md relative overflow-hidden cursor-pointer ">
                                    <img src={homepage["SUV"]} alt="scorpio" className=" image w-full h-full rounded-md transition-transform duration-300 transform  "/>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-md"></div>
                                    <button className="absolute bottom-4 left-4 text-white font-bold " >SUV</button>
                        </div>
                   
                        
                        <div className="image-container dontShow image2 w-80 h-56 mx-4 rounded-md relative cursor-pointer overflow-hidden">
                            <img src={homepage["Electric Car"]} alt="electric car" className="image w-full h-full rounded-md transition-transform duration-300 transform"/>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-md"></div>
                            <button className="absolute bottom-4 left-4 text-white font-bold ">Electric SUV</button>
                        </div>
                        <div className="image-container dontShow image3 w-80 h-56  mx-4 rounded-md relative cursor-pointer overflow-hidden">
                            <img src={homepage["Electric Hypercar"]} alt="electric hypercar" className="image w-full h-full rounded-md transition-transform duration-300 transform"/>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-md"></div>
                            <button className="absolute bottom-4 left-4 text-white font-bold ">Electric Hyper Car</button>
                        </div> 
                        
                    </div>
                    <div className=" flex justify-center  image4 rounded-md my-6 cursor-pointer ">
                        <div className=" image-container dontShow w-5/6  h-96 mx-9 rounded-md relative overflow-hidden">
                        <img src={homepage["jawa"]} alt="jawa" className="image w-full h-full rounded-md transition-transform duration-300 transform"/>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 rounded-md"></div>
                            
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="flex h-20 w-full bg-black p-3 justify-between">
                <div className="flex text-white list-none h-full items-center">
                    <li className="px-1 cursor-pointer">Terms of use<span className="px-2" >|</span></li>
                    <li className="px-1 cursor-pointer">Disclaimer<span className="px-2">|</span></li>
                    <li className="px-1 cursor-pointer">Privacy Policy<span className="px-2">|</span></li>
                    <li className="px-1 cursor-pointer">Sitemap<span className="px-2">|</span></li>
                    <li className="px-1 cursor-pointer">Contact Us</li>
                </div>

                <div className="flex  text-white list-none h-full items-center px-3">
                    <li className="px-2 text-white cursor-pointer"><FaInstagram className="w-4 h-4"/></li>
                    <li className="px-2 cursor-pointer"><FaXTwitter className="w-4 h-4"/></li>
                    <li className="px-2 cursor-pointer"><FaYoutube className="w-4 h-4"/></li>
                    <li className="px-2 cursor-pointer"><FaFacebookF className="w-4 h-4"/></li>
                    <li className="px-2 cursor-pointer"><FaLinkedinIn className="w-4 h-4"/></li>
                </div>

                </div>
            
        </>
    )
}

export default HomePage;