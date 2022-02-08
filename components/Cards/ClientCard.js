import React from 'react';
import Image from 'next/image';
import display from '../../public/display.png';

export default function Client(props) {
    const {
        image
    } = props;

    return (
        <div >
            <Image src={props.image} alt="logo" />
        </div>
    );
}
