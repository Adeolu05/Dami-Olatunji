import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-neutral-deep relative overflow-hidden py-16 md:py-20 px-4 sm:px-6">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-2xl w-full mx-auto text-center relative z-10">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">404</span>
                <h1 className="serif-heading text-4xl md:text-5xl text-white mt-4 mb-6">Page not found</h1>
                <p className="text-neutral-200/80 font-light leading-relaxed text-lg mb-10 max-w-lg mx-auto">
                    The page you're looking for doesn't exist or has moved.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 group"
                    >
                        <span>Return Home</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/messages"
                        className="inline-flex items-center border border-white/30 text-white hover:bg-white hover:text-neutral-deep px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300"
                    >
                        Watch Messages
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
