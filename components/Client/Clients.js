import React from 'react';
import ClientCard from '../Cards/ClientCard';
import Image from 'next/image';

import image01 from '../../public/clients/clients-01.png';
import image02 from '../../public/clients/clients-02.png';
import image03 from '../../public/clients/clients-03.png';
import image04 from '../../public/clients/clients-04.png';
import image05 from '../../public/clients/clients-05.png';
import image06 from '../../public/clients/clients-06.png';
import image07 from '../../public/clients/clients-07.png';
import image08 from '../../public/clients/clients-08.png';

export default function Client(props) {
    
    return (
        <div className="container grid grid-cols-4 gap-2 max-w-screen-lg py-2">
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
