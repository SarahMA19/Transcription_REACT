import React from 'react';



export default function Services () {
 
    return(
        <section className='py-10 md:py-16'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='text-3xl sm:text-5xl font-bold mb-4'> What We Do</h2>
                    <h3 className='text-lg sm:text-2xl mb-6 md:mb-14'>Precision Transcriptions: Delivering Flawless Verbatim Results</h3>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
                    <div className='card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg'>
                        <div className='card-body items-center text-center gap-4'>
                            <p className='text-warning '>Starting at: $0.07/second</p>
                            <h2 className='card-title'>AI-Powered Transcription </h2>
                          
                            <p>
                                Harnessing the power of artificial intelligence for transcription excellence <br className='hidden xl:inline' />
                                Cutting edge technology for error free results<br className='hidden xl:inline' />
                            </p>
                            
                        
                        </div>
                    </div>

                    <div className='card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg'>
                        <div className='card-body items-center text-center gap-4'>
                            <p className='text-warning '>Starting at: $0.05/second</p>
                            <h2 className='card-title'>Subscription </h2>
                            <p>
                                Get unlimited access with our subscription service<br className='hidden xl:inline' />
                                Seamless transcription subscriptions tailored to your needs <br className='hidden xl:inline' />
                            </p>
                            
                           
                        </div>
                    </div>

                    <div className='card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg'>
                        <div className='card-body items-center text-center gap-4'>
                            <p className='text-warning '>Starting at: $0.11/word</p>
                            <h2 className='card-title'>Translation </h2>
                            <p>
                                Bridging language barriers with transcription and translation <br className='hidden xl:inline' />
                                Comprehensive transcription and translation expertise in one package" <br className='hidden xl:inline' />
                            </p>
                          
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}