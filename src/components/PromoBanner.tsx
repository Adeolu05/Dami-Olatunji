import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PromoBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const hidden = sessionStorage.getItem('promo_banner_hidden');
        if (hidden === 'true') {
            setIsVisible(false);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('promo_banner_hidden', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#FCD34D] text-neutral-deep relative z-[60] overflow-hidden" // Using a bright/warm yellow similar to screenshot
                >
                    <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex items-center justify-center relative min-h-[40px]">
                        <a
                            href="https://amzn.eu/d/06MCeuql"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm font-bold tracking-wide hover:underline flex items-center gap-2 text-center mr-8"
                        >
                            <span>The HERDENTITY 90-Day Glow up Guided Journal is Here. Pre Order Now</span>
                            <ExternalLink className="w-3 h-3 hidden sm:inline" />
                        </a>

                        <button
                            onClick={handleClose}
                            className="absolute right-4 p-1 hover:bg-neutral-deep/10 rounded-full transition-colors"
                            aria-label="Close banner"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PromoBanner;
