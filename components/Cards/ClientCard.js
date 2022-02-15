import React from 'react';
import Image from 'next/image';
import display from '../../public/display.png';

export default function Client(props) {
    const {
        image
    } = props;

    return (
        <div className="transform p-4 transition duration-500 hover:scale-125">
            <Image src={props.image} alt="logo" width={228} height={75} placeholder='blur' layout="responsive" objectFit='contain' />
        </div>
    );
}
