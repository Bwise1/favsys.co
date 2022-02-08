import React, { useState } from 'react';

export default function Card1({btnClicked}) {
    const [clicked, setClicked] = useState(true);

    return (
        <div className="bg-card1Paint/[0.7] shadow-lg h-full rounded relative p-8">
            <div className=" ">
                <h3 className="text-orange text-xl font-semibold">FFA - Funke Felix-Adejumo</h3>
                <p className="text-grey-dark font-thin text-sm leading-normal flex-1 mb-4 mt-6">
                   Funke Felix-Adejumo is the President of the Funke Felix-Adejumo Foundation. She is a Certifiesd Transformational Coach, Esecutive Coach and an Itinerant Preacher.
                </p>
                <button onClick={() => {setClicked(!clicked),btnClicked(clicked)}} className='bg-buttonPaint text-white font-thin text-sm rounded-full py-1 px-4'>VIEW MORE</button>
            </div>
        </div>
    );
}
