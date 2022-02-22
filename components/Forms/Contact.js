import React from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        number: '',
        email: '',
        message: ''
    });

    const handleFieldChange = e =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        console.log("submitted");
    }

    return (
        <div>
            <form>
                <div className='grid gap-y-6 gap-x-16 py-8 font-umbaReg'>
                    <div className="">
                        <input className="contact-input placeholder:font-umbaReg" name="email" type="name" id="email" placeholder="Name" required  value={formData.name}/>
                    </div>
                    <div>
                        <input className="contact-input placeholder:font-umbaReg" type="text" id="org" placeholder="Organization" required value={formDate.organization}/>
                    </div>
                    <div>
                        <input className="contact-input placeholder:font-umbaReg" type="tel" id="tel" placeholder="Phone Number" required value={formData.number}/>
                    </div>
                    <div>
                        <input className="contact-input placeholder:font-umbaReg" type="email" id="email" placeholder="Work Email" required value={formData.email}/>
                    </div>
                    <div className='lg:col-span-2'>
                        <input className="contact-input placeholder:font-umbaReg" type="text" id="message" placeholder="Message" required value={formData.message}/>
                    </div>
                    <div>
                        <button className='button py-2 px-4'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
