import React from 'react';
import ClientCard from '../Cards/ClientCard';
import Image from 'next/image';
import imgAPI from '../../public/images/imgAPI';
import image02 from '../../public/images/clients/logo2.png';
import image01 from '../../public/images/clients/logo1.png';
import image03 from '../../public/images/clients/logo3.png';
import image04 from '../../public/images/clients/logo4.png';
import image05 from '../../public/images/clients/logo5.png';
import image06 from '../../public/images/clients/logo6.png';
import image07 from '../../public/images/clients/logo7.png';
import image08 from '../../public/images/clients/logo8.png';

export default function Client(props) {

    return (
        <div className="container grid grid-cols-2 gap-2 max-w-screen-lg py-2 md:grid-cols-4 lg:grid-cols-4">
            <ClientCard image={image01}/>
            <ClientCard image={image02}/>
            <ClientCard image={image03}/>
            <ClientCard image={image04}/>
            <ClientCard image={image05}/>
            <ClientCard image={image06}/>
            <ClientCard image={image07}/>
            <ClientCard image={image08}/>
        </div>
    );
}
