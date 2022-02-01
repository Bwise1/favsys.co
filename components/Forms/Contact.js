import React from 'react';

export default function Contact() {
    return (
        <div>
            <form>
                <div className="flex flex-row justify-between">
                    <input className="m-8 border-b w-full focus:outline-none basis-1/2" type="email" id="email"  placeholder="Name" required />
                    <input className="m-8 border-b w-full focus:outline-none basis-1/2" type="email" id="email"  placeholder="Organization" required />
                </div>
                <div className="flex flex-row justify-between">
                    <input className="m-8 border-b w-full focus:outline-none basis-1/2" type="email" id="email"  placeholder="Phonne Number" required />
                    <input className="m-8 border-b w-full focus:outline-none basis-1/2" type="email" id="email"  placeholder="Work Email" required />
                </div>
                <div className="flex flex-row justify-between">
                    <input className="m-8 border-b w-full focus:outline-none" type="email" id="email"  placeholder="Message" required />
                </div>

                <button className='bg-buttonPaint m-8 text-white font-thin text-sm rounded-full py-1 px-4'>Submit</button>
            </form>
        </div>
    );
}
