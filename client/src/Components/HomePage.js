import React from 'react';
import './HomePage.css';
import { useInView } from 'react-intersection-observer';

import logo from '../images/logo.png'
import max from '../images/max.jpg';
import taise from '../images/taise.png';
import tam from '../images/tam.jpg';
import hadi from '../images/hadi.jpg';
import ocean from '../images/cleanOcea.jpg';


const HomePage = () => {
    const { ref: welcomeRef, inView: welcomeVisible} = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const { ref: containerRef, inView: containerVisible} = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const { ref: profileRef, inView: profileVisible} = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <div>
            <div class="welcome-container" ref={welcomeRef}>
                <h1 class={welcomeVisible ? "wel-h show" : "wel-h"}>Welcome to Our Website</h1>
                <p class={welcomeVisible ? "wel-p show" : "wel-p"}>Your one stop for finding some drip</p>
            </div>
            <div className="mission-wrapper">
                <div className={containerVisible ? "mission-heading show" : "mission-heading"} >
                    Mission Statement
                </div>
                <div class="ornament"></div>
                <div className="container">
                    <p className = {containerVisible ? "mission-text-1 show" : "mission-text-1"} ref={containerRef}>'Where's My Drip' is a student-led project established in Oct. 2023 that formed with the mission to
                        reduce the use of plastic water bottles. The 'Where's My Drip' app features a constantly updated map
                        of all the water fountains submitted in the world. By using our app, people can easily and reliably find public water
                        fountains, thus reducing the need to buy plastic bottles when on-the-go.</p>
                    <p className = {containerVisible ? "mission-text-2 show" : "mission-text-2"}>Powered by those who care about reducing our plastic consumption and waste production, 'Where's My Drip'
                        hopes to have a longstanding impact on the world, one drop at a time.</p>
                    <p className={containerVisible ? "mission-text-3 show" : "mission-text-3"}>Contribute to our cause by posting a water fountain sighting! Go to our 'Drip Map' to find water fountains  
                        and submit the location of new ones.</p>
                    <img src={logo} className={containerVisible ? "big-logo show" : "big-logo"} />
                </div>
            </div>
            
            <div className="founder-wrapper">
                <div className="mission-heading show">
                    <p >Meet the Founders</p>
                </div>
                <div className="profile-container" ref={profileRef}>
                    <span className={profileVisible ? "bio-1 show": "bio-1"}>
                        <img src={max} className="profile-img" alt="profile-image" />
                        <p>Max Huang</p>
                    </span>
                    <span className={profileVisible ? "bio-2 show": "bio-2"}>
                        <img src={taise} className="profile-img" alt="profile-image" />
                        <p>Taise Miyazumi</p>
                    </span>
                    <span className={profileVisible ? "bio-3 show": "bio-3"}>
                        <img src={tam} className="profile-img" alt="profile-image" />
                        <p>Tam Huynh</p>
                    </span>
                    <span className={profileVisible ? "bio-4 show": "bio-4"}>
                        <img src={hadi} className="profile-img" alt="profile-image" />
                        <p>Hadi Baajour</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HomePage;