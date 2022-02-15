import React, { useState } from 'react';

export default function Card1(props) {

    return (
        <div className="bg-card1Paint/[0.7] h-full rounded relative p-8 ">
            <div className=" ">
                <h3 className="text-orange text-xl font-umbaBold ">{props.heading}</h3>
                <p className="text-grey-dark text-left font-umbaReg  text-sm leading-normal flex-1 mb-2 mt-6">
                   {props.text}
                </p>
                <button onClick={props.handleClick} className='button pd-1 py-2 px-4'>VIEW MORE</button>
            </div>
        </div>
    );
}
