import React from 'react';
import Image from 'next/image';

import photo from '../../public/signboard1.png';

export default function ImageCard() {
    return (
        <div className="shadow-lg rounded rounded-bl-large">
            <Image src={photo} alt='...' layout='responsive' className='rounded-bl-large'/>
        </div>
    );
}
