import React from "react";
import ss1 from '../assets/images/ss1.png';
import ss2 from '../assets/images/ss2.png';
import ss3 from '../assets/images/ss3.png';
import ss4 from '../assets/images/ss4.png';
import ss5 from '../assets/images/ss5.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.instagram.com/ginevranindi/" target="_blank" rel="noreferrer"><img src={ss1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.instagram.com/ginevranindi/" target="_blank" rel="noreferrer"><h2>Ginevranindi - Personal Shopper & Preloved Stuff</h2></a>
                <p>Providing a trusted personal shopping experience for beauty fair enthusiasts and offering carefully selected preloved goods. I help clients discover quality products and great value.</p>
            </div>
            <div className="project">
                <a href="https://shopee.co.id/ratuauliam" target="_blank" rel="noreferrer"><img src={ss2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://shopee.co.id/ratuauliam" target="_blank" rel="noreferrer"><h2>Deli Baru</h2></a>
                <p>PT Deli Baru is my family’s business located in Cipulir Market.
                Currently i’m one of the accountant there and i also serve the
                customer. When COVID-19 virus outbreak i have an idea to bring
                this store up to the next level which is “Online Store” through
                Shopee. I sell a couple of items from the offline store.
                </p>
            </div>
            <div className="project">
                <a href="http://www.tiktok.com/@quinalexandra" target="_blank" rel="noreferrer"><img src={ss3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.tiktok.com/@quinalexandra" target="_blank" rel="noreferrer"><img src={ss5} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.tiktok.com/@quinalexandra" target="_blank" rel="noreferrer"><h2>TikTok</h2></a>
                <p>This is my personal TikTok, a key part of my digital personal branding strategy. I use this platform to share engaging and authentic content, from daily vlogs to creative projects. It's where I cultivate a community around my interests, demonstrating my ability to build a presence and connect with a diverse audience through engaging and relatable storytelling.</p>
            </div>
            <div className="project">
                <a href="https://www.instagram.com/ratuamff" target="_blank" rel="noreferrer"><img src={ss4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.instagram.com/ratuamff" target="_blank" rel="noreferrer"><h2>Instagram</h2></a>
                <p>This is my personal brand page on Instagram. I use it as a creative outlet to share visual stories about my work, my interests, and my daily life. It's a space where I connect with a growing community and express my creativity through engaging and authentic content.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;