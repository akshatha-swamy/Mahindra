import React from "react";

const HoverDiv = (props) => {
    return (
        <div className="absolute top-full mt-2 bg-black w-60 text-white p-3 rounded-md shadow-md opacity-95">
            {props.options.map((option, index) => (
                <div key={index} className=" text-md p-3">{option}</div>
            ))}
        </div>
    );
};

export default HoverDiv;
