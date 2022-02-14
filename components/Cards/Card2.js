import React from 'react';
import Image from 'next/image';
import display from '../../public/display.png';

export default function Card2(props) {
    return (
        <div className="overflow-hidden rounded-tr-large">
            <Image src={props.image} width={768} height={315} alt='...' placeholder='blur' objectFit="cover" layout='responsive' />
        </div>
    );
}
