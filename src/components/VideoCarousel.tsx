import React, { useState, useEffect } from 'react';

const videos = [
    "/videos/Dami1.mp4",
    "/videos/Dami2.mp4",
    "/videos/Dami3.mp4",
    "/videos/Dami4.mp4",
    "/videos/Dami5.mp4",
    "/videos/Dami6.mp4",
];

const VideoCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % videos.length);
        }, 6000); // 6 seconds per video
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="relative w-full h-[100dvh] bg-background-light flex flex-col items-center justify-end overflow-hidden pt-20">
            {/* Highly Optimized blurred background - we use a pseudo-element strategy 
                to avoid rendering 6 heavy videos simultaneously */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-neutral-deep/10">
                <div
                    className="absolute inset-0 w-full h-full opacity-30 blur-3xl scale-125 transition-all duration-1000 ease-in-out"
                    style={{ backgroundColor: activeIndex % 2 === 0 ? '#C02669' : '#883E5D' }}
                />

                {/* Single optimized background video instead of 6 overlapping ones */}
                <video
                    key={`bg-optimized-${videos[activeIndex]}`}
                    src={videos[activeIndex]}
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover blur-[80px] scale-125 opacity-40 transition-opacity duration-1000"
                />

                {/* Gradients for smooth blending into header and next section */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/40 to-transparent opacity-100 h-full"></div>
            </div>

            <div
                className="relative z-10 w-full max-w-7xl mx-auto px-0 md:px-4 h-[75vh] md:h-[80vh] flex items-center justify-center mb-16 md:mb-24"
                style={{ perspective: '1200px' }}
            >
                {videos.map((vid, idx) => {
                    let offset = idx - activeIndex;

                    // Circular array logic for 6 items
                    if (offset < -3) offset += videos.length;
                    if (offset > 2) offset -= videos.length;

                    const isVisible = Math.abs(offset) <= 2;
                    const isActive = offset === 0;

                    const zIndex = 10 - Math.abs(offset);
                    const scale = isActive ? 1 : 1 - Math.abs(offset) * 0.15;

                    return (
                        <div
                            key={vid}
                            className={`absolute top-1/2 -translate-y-1/2 h-full max-h-[70vh] aspect-[9/16] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer
                                ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                            style={{
                                transform: `translate(-50%, -50%) translateX(calc(${offset} * 70%)) scale(${scale}) rotateY(${offset * -10}deg)`,
                                left: '50%',
                                zIndex,
                                filter: isActive ? 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.3))' : 'brightness(0.5) blur(2px)',
                            }}
                            onClick={() => setActiveIndex(idx)}
                        >
                            <div className="w-full h-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/20 bg-neutral-deep group relative">
                                <video
                                    src={vid}
                                    autoPlay
                                    muted loop playsInline
                                    className="w-full h-full object-cover"
                                />
                                {!isActive && (
                                    <div className="absolute inset-0 bg-black/40 xl:hover:bg-black/10 transition-colors duration-300"></div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Hero Text / Controls */}
            <div className="absolute bottom-8 z-20 w-full text-center px-6">
                <div className="flex space-x-3 justify-center items-center">
                    {videos.map((_, idx) => (
                        <button
                            key={`btn-${idx}`}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${idx === activeIndex ? 'w-10 bg-primary shadow-[0_0_10px_rgba(192,38,105,0.7)]' : 'w-2 bg-neutral-deep/30 hover:bg-primary/50'}`}
                            aria-label={`Go to video ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
}

export default VideoCarousel;
