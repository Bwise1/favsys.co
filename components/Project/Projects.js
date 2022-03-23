import React from 'react';
import Project from './Project';

import display from '../../public/display.png';
import sign1 from "../../public/signboards/sign1.png";
import sign2 from "../../public/signboards/sign2.png";
import sign3 from "../../public/signboards/sign3.png";

import display2 from '../../public/display2.png';
import sign4 from "../../public/signboards/sign4.png";
import sign5 from "../../public/signboards/sign5.png";
import sign6 from "../../public/signboards/sign6.png";

import display3 from '../../public/display3.png';
import sign7 from "../../public/signboards/sign7.png";
import sign8 from "../../public/signboards/sign8.png";
import sign9 from "../../public/signboards/sign9.png";

import display4 from '../../public/display4.png';
import sign10 from "../../public/signboards/sign10.png";
import sign11 from "../../public/signboards/sign11.png";
import sign12 from "../../public/signboards/sign12.png";

const projectsData =[
    {
        heading: "FFA - Funke Felix-Adejumo",
        text: "Funke Felix-Adejumo is the President of the Funke Felix-Adejumo Foundation. She is a Certified Transformational Coach, Executive Coach and an Itinerant Preacher.",
        banner: display,
        image1: sign1,
        image2: sign2,
        image3: sign3,
    },
    {
        heading: "Isolated Paint",
        text: "Isolated Paints is a paint producing company located in South-Eastern Nigeria with the aim of providing quality paints and also encouraging nature conserving products.",
        banner: display2,
        image1: sign4,
        image2: sign5,
        image3: sign6,
    },
    {
        heading: "FAA - Felix Aderemi Adejumo",
        text: "Felix Aderemi Adejumo is the Founder and Senior Pastor of The Agape Christian Ministries Worldwide. He is an anointed preacher of the gospel, a marriage and leadership coach and a Book writer, having authored quite a number of books.",
        banner: display3,
        image1: sign7,
        image2: sign8,
        image3: sign9,
    },
    {
        heading: "BYS - Beyond Your Scars",
        text: "BYS is an international establishment committed to raising a young generation of kingdom driven influencers and transformational leaders who have risen above their past traumas or life conditions and serve as standard bearers in their communities and around the globe.",
        banner: display4,
        image1: sign10,
        image2: sign11,
        image3: sign12,
    },
]

export default function Projects(props) {
    return(
        <>
       <Project
            heading={projectsData[0].heading}
            text={projectsData[0].text}
            banner={projectsData[0].banner}
            image1={projectsData[0].image1}
            image2={projectsData[0].image2}
            image3={projectsData[0].image3}
        />
        <Project
            heading={projectsData[1].heading}
            text={projectsData[1].text}
            banner={projectsData[1].banner}
            image1={projectsData[1].image1}
            image2={projectsData[1].image2}
            image3={projectsData[1].image3}
        />

        <Project
            heading={projectsData[2].heading}
            text={projectsData[2].text}
            banner={projectsData[2].banner}
            image1={projectsData[2].image1}
            image2={projectsData[2].image2}
            image3={projectsData[2].image3}
        />
        <Project
            heading={projectsData[3].heading}
            text={projectsData[3].text}
            banner={projectsData[3].banner}
            image1={projectsData[3].image1}
            image2={projectsData[3].image2}
            image3={projectsData[3].image3}
        />
    </>
    );
}
