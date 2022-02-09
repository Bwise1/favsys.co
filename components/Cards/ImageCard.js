import React from 'react';
import Image from 'next/image';

export default function ImageCard(props) {
    return (
        <div className={`shadow-lg rounded overflow-hidden ${props.round}`}>
            <Image src={props.image} alt='...' placeholder='blur' layout='responsive' className=''/>
        </div>
    );
}
