import React from 'react';
import Image from 'next/image';

import photo from '../../public/rectangle1.png';

export default function ImageCard() {
    return (
        <div className="shadow-lg rounded">
            <Image src={photo} alt='...' placeholder='blur' layout='responsive'/>
        </div>
    );
}
