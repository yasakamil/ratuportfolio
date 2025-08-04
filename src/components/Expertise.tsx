import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Expertise.scss';
import { faCloud, faPerson } from "@fortawesome/free-solid-svg-icons";

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPerson} size="3x"/>
                    <h3>About me</h3>
                    <p>My name is Ratu Aulia Miftah, and I am currently an active
                    student in the 7th semester, majoring in Economics at Universitas
                    Negeri Semarang. I have a strong interest in various domains,
                    including digital marketing, social media administration, and
                    content creation.
                    </p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faThinkPeaks} size="3x"/>
                    <h3>Economics Meets Creativity</h3>
                    <p>By combining a solid foundation in economics
                    with a passion for creative pursuits and digital marketing
                    strategies, I am committed to making impactful contributions
                    within my professional sphere.
                    </p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Collaborating for Impact</h3>
                    <p>My career dream is to collaborate with marketers as passionate
                    and curious as i am to do work that has a positive impact for
                    business and people we believe in.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;