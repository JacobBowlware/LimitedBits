
import { useEffect, useState } from "react";
import PopupForm from "../../components/PopupForm";

import axios from 'axios';

// Font Awesome Icons
import { faUser, faUserSecret, faUserTie } from "@fortawesome/free-solid-svg-icons";

// Components
import FeedList, { FeedCardProps } from "../../components/FeedList";
import { User } from "../../App";

const feedBits: FeedCardProps[][] = [
    [
        {
            id: 1,
            body: "Overwhelm resistance with speed and suddenness.",
            username: "Jacob",
            icon: faUser
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
        {
            id: 2,
            body: "Never let your emotions overpower your intelligence.",
            username: "Johnathan",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "Apples are delicious.",
            username: "Ted",
            icon: faUserTie
        },
    ],
    [
        {
            body: "Discovered the power of meditation. It has improved my focus and reduced stress.",
            username: "Mia",
            icon: faUser,
        },
        {
            body: "Took a risk and pursued a passion project. Passion fuels determination and creativity.",
            username: "Lucas",
            icon: faUserSecret,
        },
        {
            body: "Learned to embrace failure as a stepping stone towards success. Failure is a part of growth.",
            username: "Sophie",
            icon: faUserTie,
        },
        {
            body: "Explored a new skill and found joy in the learning process. Learning is a lifelong journey.",
            username: "Benjamin",
            icon: faUser,
        },
        {
            body: "Practiced mindfulness to stay present. Being present brings more joy to everyday moments.",
            username: "Evelyn",
            icon: faUserSecret,
        },
    ],
    [
        {
            body: "Learned a valuable lesson about perseverance today. It's all about taking small steps towards your goals.",
            username: "Alice",
            icon: faUser,
        },
        {
            body: "Discovered the power of positive affirmations. They can truly shift your mindset!",
            username: "John",
            icon: faUserSecret,
        },
        {
            body: "Read a fantastic book on personal finance. Saving money is the first step to financial freedom.",
            username: "Emily",
            icon: faUserTie,
        },
        {
            body: "Took a leap of faith and started my own side project. Excited about the possibilities!",
            username: "Michael",
            icon: faUser,
        },
        {
            body: "Embracing failure as a stepping stone towards success. Failure is a part of the journey.",
            username: "Sophia",
            icon: faUserSecret,
        },
    ],
    [
        {
            body: "Learned the importance of time management. Scheduling tasks makes me more productive.",
            username: "Eva",
            icon: faUser,
        },
        {
            body: "Discovered a new hobby that brings me joy. It's never too late to try something new!",
            username: "David",
            icon: faUserSecret,
        },
        {
            body: "Attended a life-changing seminar. Surrounding yourself with motivated individuals is inspiring.",
            username: "Olivia",
            icon: faUserTie,
        },
        {
            body: "Decided to embrace a growth mindset. Continuous learning leads to personal growth.",
            username: "Daniel",
            icon: faUser,
        },
        {
            body: "Overcame a fear by taking small steps. Courage is built one step at a time.",
            username: "Isabella",
            icon: faUserSecret,
        },
    ],
    [
        {
            body: "Practiced gratitude daily. It has improved my overall happiness and well-being.",
            username: "Noah",
            icon: faUser,
        },
        {
            body: "Learned the value of self-compassion. Being kind to oneself leads to greater resilience.",
            username: "Ava",
            icon: faUserSecret,
        },
        {
            body: "Started a journaling practice. Reflecting on my thoughts helps me gain clarity.",
            username: "James",
            icon: faUserTie,
        },
        {
            body: "Stepped outside my comfort zone and met new people. Networking can lead to exciting opportunities.",
            username: "Emma",
            icon: faUser,
        },
        {
            body: "Embraced a minimalist lifestyle. Simplifying my life has brought a sense of freedom.",
            username: "Liam",
            icon: faUserSecret,
        },
    ]
]

const AuthHome: React.FC<{ id: number | undefined }> = ({ id }) => {
    useEffect(() => {
        const getFeed = async () => {
            // Call Backend and retrieve bits
            const response = await axios.get('http://localhost:3000/api/posts/feed');

            console.log(response.data);
        }

        getFeed();
    }, []);

    return (
        <>
            <div className="section-container section-container-light section-container-tall ">
                <div id="overlay"></div>
                <div className="section-container__item">
                    <div className="auth-home-header-container">
                        <h1 className="section-container__header">
                            <span className="text-highlight">Todays</span> Bits
                        </h1>
                        <div className="auth-home-header-icons">
                            <div className="section-container__item popup-center">
                                <button id="show-popup" className="btn btn-primary">
                                    Post Bit
                                </button>
                            </div>
                        </div>
                    </div>
                    <PopupForm id={id} />
                    <FeedList feedItems={feedBits} />
                </div>
            </div>
        </>
    );
}

export default AuthHome;