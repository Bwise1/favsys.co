import React from 'react';

export default function Card1() {
    return (
        <div className="bg-card1Paint/[0.7] shadow-lg rounded m-8 p-8 flex md:bg-orange">
            <div className=" ">

                <h3 className="text-orange text-xl font-semibold">FFA - Funke Felix-Adejumo</h3>

                <p className="text-grey-dark font-thin text-sm leading-normal mb-4 mt-6">
                   Funke Felix-Adejumo is the President of the Funke Felix-Adejumo Foundation. She is a Certifiesd Transformational Coach, Esecutive Coach and an Itinerant Preacher.
                </p>
                <button className='bg-buttonPaint text-white font-thin text-sm rounded-full py-1 px-4'>VIEW MORE</button>
            </div>
        </div>
    );
}
