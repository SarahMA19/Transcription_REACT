import React from 'react';
import HomeViewImage from "../static/HomeViewImage.jpg"


export default function Hero () {
    return(
        <section>
            <div className="container">
                <div className="hero h-96 md:h-[700px] rounded-box overflow-hidden my-4" style={{ backgroundImage: `url(${HomeViewImage})`}}>
                <div className="hero-overlay bg-opacity-60 bg-first"></div>
                <div className="hero-content text-center text-secondary-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 sm:md-7 text-4xl sm:text-5xl font-bold text-white">
                            Let us bring your audio to text!
                        </h1>
                        <p className="mb-5 sm:mb-7 sm:text-lg text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}