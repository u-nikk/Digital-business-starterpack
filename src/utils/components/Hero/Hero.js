import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <div>
            <div className="h-wrapper">
                <div className="container">
                    <div className="h-container">
                        {/*left side*/}
                        <div className="h-left">
                            leftside
                        </div>
                        {/*right side*/}
                        <div className="right-side">
                        <div className="h-title">
                            <span>Redefine How</span>
                            <span>You Grow Your</span>
                            <span>Bussiness</span>
                        </div>
                        <div className="h-des">
                        At Contentic Media, we specialize in curating compelling stories that elevate your brand through strategic influencer marketing. Our platform is the nexus between brands and influential social media personalities, creating a powerful synergy to captivate audiences and drive meaningful action.

                        </div>
                        <span>Email Box</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
