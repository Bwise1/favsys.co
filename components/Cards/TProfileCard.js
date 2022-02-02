import React from 'react';
import Image from 'next/image';
import Person from "../../public/user.png";

export default function TProfileCard() {
    return (
        <div>
            <div className="flex-row gap-4 flex justify-start items-center">
                <div className="flex-shrink-0 rounded-full border-2 overflow-hidden p-2">
                    <Image
                        src={Person}
                        alt="Picture of the author"
                        width={107}
                        height={107}
                    //objectFit="cover"

                    />
                </div>
                <div className=" flex flex-col">
                    <h3 className="text-sm font-semibold">FFA - Funke Felix-Adejumo</h3>
                    <p className="text-grey-dark font-thin text-sm leading-normal ">
                        President, Funke Felix-Adejumo Foundation
                    </p>
                    <p className="text-grey-dark font-thin text-sm my-4 ">
                        You are a Genius! I can recommend you in my dreams
                    </p>
                </div>
            </div>
        </div>
    );
}

