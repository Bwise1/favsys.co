import React from 'react';
import Image from 'next/image';

export default function ImageCard(props) {
    return (
        <div className={`overflow-hidden ${props.round}`}>
            <Image src={props.image} height={250} width={430} alt='...' placeholder='blur' layout='responsive' objectFit='cover'/>
        </div>
    );
}
