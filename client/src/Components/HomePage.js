import React from 'react';
import './HomePage.css';

import logo from '../images/logo.png'
import max from '../images/max.jpg';
import taise from '../images/taise.png';
import tam from '../images/tam.jpg';
import hadi from '../images/hadi.jpg';

function HomePage() {
    return (
        <div>
            <div className="heading">
                <p>Mission Statement</p>
            </div>
            <div className="container">
                <p className = "mission-text">'Where's My Drip' is a student-led project established in Oct. 2023 that formed with the mission to
                    reduce the use of plastic water bottles. The 'Where's My Drip' app features a constantly updated map
                    of all the water fountains submitted in the world. By using our app, people can easily and reliably find public water
                    fountains, thus reducing the need to buy plastic bottles when on-the-go.</p>
                <p className = "mission-text">Powered by those who care about reducing our plastic consumption and waste production, 'Where's My Drip'
                    hopes to have a longstanding impact on the world, one drop at a time.</p>
                <p className="mission-text">Contribute to our cause by posting a water fountain sighting! Go to our 'Drip Map' to find water fountains  
                     and submit the location of new ones.</p>
                <img src={logo} className="big-logo" />
            </div>
            
            <div className="heading">
                <p >Meet the Founders</p>
            </div>
            <div className="profile-container">
                <span className="bio">
                    <div className="profile-image">
                        <img src={max} alt="Profile 1" />
                    </div>
                    <p>Max Huang</p>
                </span>
                <span className="bio">
                    <div className="profile-image">
                        <img src={taise} alt="Profile 2" />
                    </div>
                    <p>Taise Miyazumi</p>
                </span>
                <span className="bio">
                    <div className="profile-image">
                        <img src={tam} alt="Profile 3" />
                    </div>
                    <p>Tam Huynh</p>
                </span>
                <span className="bio">
                    <div className="profile-image">
                        <img src={hadi} alt="Profile 4" />
                    </div>
                    <p>Hadi Baajour</p>
                </span>
            </div>
        </div>
        
    );
}

export default HomePage;
