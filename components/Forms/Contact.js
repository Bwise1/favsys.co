import React from 'react';

export default function Contact() {
    return (
        <div>
            <form>
                <div className='grid gap-y-6 gap-x-16 py-8 font-umbaReg'>
                    <div className="">
                        <input className="contact-input" name="email" type="name" id="email" placeholder="Name" required />
                    </div>
                    <div>
                        <input className="contact-input" type="text" id="org" placeholder="Organization" required />
                    </div>
                    <div>
                        <input className="contact-input" type="tel" id="tel" placeholder="Phone Number" required />
                    </div>
                    <div>
                        <input className="contact-input" type="email" id="email" placeholder="Work Email" required />
                    </div>
                    <div className='lg:col-span-2'>
                        <input className="contact-input" type="text" id="message" placeholder="Message" required />
                    </div>
                    <div>
                        <button className='button py-1 px-5'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
