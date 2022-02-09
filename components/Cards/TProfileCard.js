import React from 'react';
import Image from 'next/image';

export default function TProfileCard(props) {
    return (
        <div>
            <div className="flex-row gap-2 flex justify-start items-center">
                <div className="flex-shrink-0 rounded-full overflow-hidden">
                    <Image
                        src={props.image}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        objectFit="cover"
                    />
                </div>
                <div className=" flex flex-col">
                    <h3 className="text-sm font-umbaMedium font-semibold">FFA - Funke Felix-Adejumo</h3>
                    <p className="text-grey-dark font-umbaThin text-xs leading-normal ">
                        President, Funke Felix-Adejumo Foundation
                    </p>
                    <p className="text-grey-dark font-umbaThin font-thin text-sm my-4 ">
                        You are a Genius! I can recommend you in my dreams
                    </p>
                </div>
            </div>
        </div>
    );
}

