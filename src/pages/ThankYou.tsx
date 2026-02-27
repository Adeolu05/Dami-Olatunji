import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-neutral-deep relative overflow-hidden py-16 md:py-20 px-4 sm:px-6">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl w-full mx-auto text-center relative z-10"
            >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 sm:p-10 md:p-16 shadow-2xl mx-4 sm:mx-0">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/30 shadow-lg shadow-primary/20"
                    >
                        <CheckCircle className="w-10 h-10 text-primary" />
                    </motion.div>

                    <h1 className="serif-heading text-4xl md:text-5xl text-white mb-6">
                        Thank You!
                    </h1>

                    <p className="text-neutral-200/80 font-light leading-relaxed text-lg mb-10 max-w-lg mx-auto">
                        Welcome to the family. You're now on the list to receive exclusive insights on leadership, faith, and purpose directly to your inbox.
                        Keep an eye out for our upcoming emails!
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 group"
                    >
                        <span>Return Home</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default ThankYou;
