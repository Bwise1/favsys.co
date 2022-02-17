import React, { useState } from 'react';

export default function Card1(props) {

    return (
        <div className="bg-card1Paint/[0.7] h-full rounded flex flex-col p-6 ">
            <h3 className="text-orange text-xl font-umbaBold">{props.heading}</h3>
            <div className='font-umbaReg text-grey-dark text-left flex flex-wrap'>
                <p className="text-sm leading-normal flex-1 mb-2 mt-4">
                    {props.text}
                </p>
            </div>
            <div className='mt-auto'>
                <button onClick={props.handleClick} className='button pd-1 py-2 px-4'>VIEW MORE</button>
            </div>
        </div>
    );
}
