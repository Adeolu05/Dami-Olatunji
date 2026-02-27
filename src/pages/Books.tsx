import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


const Books: React.FC = () => {
    return (
        <div className="bg-[#FAF3F0] min-h-screen pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-20 flex items-center">
            {/* The Book Entry */}
            <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-24">

                    {/* Left Content Area (Text & CTA) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
                    >
                        {/* Eyebrow Text */}
                        <div className="mb-4 md:mb-6">
                            <span className="text-neutral-deep/70 font-bold tracking-[0.15em] uppercase text-[10px] sm:text-xs md:text-sm">
                                YOUR IDENTITY IS NOT A TITLE YOU EARN, BUT A DIVINE TRUTH YOU DISCOVER
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="serif-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#2F2F2F] leading-[1.1] mb-4 md:mb-6">
                            HERDENTITY
                        </h1>

                        {/* Subtitle */}
                        <h2 className="text-lg sm:text-xl md:text-2xl font-serif italic text-neutral-deep/80 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                            A 90-Day Glow up Journal for Confidence and Self Love: The Real HER
                        </h2>

                        {/* Description */}
                        <div className="space-y-4 text-neutral-deep/80 text-[14px] sm:text-[15px] leading-relaxed font-light max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10">
                            <p>
                                In an age of constant comparison, discovering your true self is the ultimate act of courage. HERDENTITY moves you beyond motivation into real-world impact by equipping you with identity-rooted confidence and practical skills in leadership, finance, and resilience.
                            </p>
                            <p>
                                It is time to live boldly, lead strongly, and meet The Real Her.
                            </p>
                            <p className="uppercase tracking-widest text-[10px] sm:text-[11px] font-bold pt-4 sm:pt-6 text-neutral-deep">
                                STEP INTO THE LIGHT AND MEET THE WOMAN YOU WERE ALWAYS MEANT TO BE.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center lg:justify-start">
                            <a
                                href="https://www.amazon.co.uk/dp/B0GKC2D8JW"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center lg:justify-between bg-[#E4C1C5] hover:bg-[#D4A1A6] text-neutral-deep transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 w-full max-w-sm sm:w-auto md:w-[280px] group shadow-sm hover:shadow-md rounded-sm"
                            >
                                <span className="font-bold tracking-[0.2em] uppercase text-[11px] sm:text-xs">
                                    ORDER NOW!
                                </span>
                                <div className="flex items-center gap-3 sm:gap-4 ml-3 sm:ml-4">
                                    <ArrowRight className="w-4 h-4 text-neutral-deep/70 group-hover:translate-x-1 transition-transform" />
                                    <div className="w-[1px] h-6 bg-neutral-deep/20"></div>
                                    <img src="/images/amazon-icon.png" alt="Amazon" className="h-5 sm:h-6 w-auto object-contain mt-1 shrink-0" />
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-6 lg:mb-0"
                    >
                        <div className="relative w-full max-w-[260px] sm:max-w-md lg:max-w-lg">
                            {/* Decorative Background Frame */}
                            <div className="absolute inset-0 bg-white shadow-2xl rounded-sm transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"></div>

                            {/* Book Image */}
                            <img
                                src="/images/herdentity-cover.jpg"
                                alt="HERDENTITY Book Cover"
                                className="relative z-10 w-full h-auto object-cover rounded-sm border border-neutral-muted/20 shadow-xl"
                            />

                            {/* Decorative Elements (Optional, mimicking the floral border in the inspiration) */}
                            <div className="absolute -top-6 -right-6 sm:-top-12 sm:-right-12 w-20 h-20 sm:w-32 sm:h-32 bg-[url('https://www.transparenttextures.com/patterns/floral-overlay.png')] opacity-20 -z-10 bg-repeat blur-[1px]"></div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Books;
