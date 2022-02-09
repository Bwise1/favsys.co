import React from 'react';
import Image from 'next/image';
import display from '../../public/display.png';

export default function Card2(props) {
    return (
        <div className="shadow-lg rounded-tr-large">
            <Image src={props.image} alt='...' placeholder='blur' objectFit="cover" layout='responsive' className='rounded-tr-large' />
        </div>
    );
}
