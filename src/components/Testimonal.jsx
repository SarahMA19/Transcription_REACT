import React from "react";

import image1 from "../static/image1.jpg"
import image2 from "../static/image2.jpg"
import image3 from "../static/image3.jpg"

export default function Testimonal() {
    return (
        <section className='py-10 md:py-16 bg-neutral'>
        <div className='container'>
          <div className='text-center text-white'>
            <h2 className='text-3xl sm:text-5xl font-bold mb-4'>We Have Some Fans</h2>
            <p className='text-lg sm:text-2xl mb-6 md:mb-14'>
              Trusted by our Happy Customers
            </p>
          </div>

          <div className='columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8'>
            <div className='block mb-8 lg:mb-10'>
              <div className='stack'>
                <div className="card bg-secondary text-secondary-content">
                  <div className="card-body gap-4">
                    <div className='flex items-center'>
                      <div className="avatar flex-shrink-0">
                        <div className="w-16 rounded-full border-2 border-white">
                          <img src={image1} alt="Betty Boo" />
                        </div>
                      </div>

                      <div className='ml-3'>
                        <p className='text-lg font-medium leading-tight'>Betty Boo</p>
                        <small>Podcast Host</small>
                      </div>
                    </div>
                    <p>
                    "As a podcaster, finding a reliable transcription service was crucial for me. I tried several options, but this one stood out. The quality of their transcriptions is outstanding, and their customer support is top-notch. They truly understand the needs of podcasters. I'm a satisfied customer!"
                    </p>
                  </div>
                </div>
                <div className='card bg-primary h-10'></div>
                <div className='card bg-warning h-10'></div>
              </div>
            </div>

            <div className='block mb-8 lg:mb-10'>
              <div className='stack'>
                <div className="card bg-secondary text-secondary-content">
                  <div className="card-body gap-4">
                    <div className='flex items-center'>
                      <div className="avatar flex-shrink-0">
                        <div className="w-16 rounded-full border-2 border-white">
                          <img src={image2} alt="Adam Wathan" />
                        </div>
                      </div>

                      <div className='ml-3'>
                        <p className='text-lg font-medium leading-tight'>Adam Wathan</p>
                        <small>Pastor</small>
                      </div>
                    </div>
                    <p>
                    "I am grateful to have found this transcription service for my pastoral work. Their transcriptions are precise, and they capture the nuances of my teachings. It has made it easier for me to create study guides and share sermon transcripts with my congregation. The service is dependable, and the team is supportive. Thank you!"
                    </p>
                  </div>
                </div>
                <div className='card bg-primary h-10'></div>
                <div className='card bg-warning h-10'></div>
              </div>
            </div>

            <div className='block mb-8 lg:mb-10'>
              <div className='stack'>
                <div className="card bg-secondary text-secondary-content">
                  <div className="card-body gap-4">
                    <div className='flex items-center'>
                      <div className="avatar flex-shrink-0">
                        <div className="w-16 rounded-full border-2 border-white">
                          <img src={image3} alt="Wendy Lou" />
                        </div>
                      </div>

                      <div className='ml-3'>
                        <p className='text-lg font-medium leading-tight'>Wendy Lou</p>
                        <small>Mom</small>
                      </div>
                    </div>
                    <p>
                    "I discovered this transcription service when I needed to transcribe my kids' adorable conversations and funny anecdotes. The transcriptions are spot-on, and they bring those special moments to life in written form. It's a fantastic way to cherish and share these memories with family and friends. Highly recommended for all moms!" 
                    </p>
                  </div>
                </div>
                <div className='card bg-primary h-10'></div>
                <div className='card bg-warning h-10'></div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
  )
}