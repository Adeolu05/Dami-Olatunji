import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsletterSignup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call and Functional Storage
        setTimeout(() => {
            // 1. Get existing emails
            const existingEmails = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');

            // 2. Add new email
            if (!existingEmails.includes(email)) {
                existingEmails.push(email);
                localStorage.setItem('newsletter_subscribers', JSON.stringify(existingEmails));
                console.log(`New Subscriber Added: ${email}`);
                console.log(`New Subscriber Added: ${email}`);
                console.table(existingEmails); // Easier to read in console
            } else {
                console.log(`Subscriber already exists: ${email}`);
            }

            // 3. Success State
            setStatus('success');
            setEmail('');

            // Reset status after a few seconds
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        }, 1500);
    };

    return (
        <section className="py-20 bg-neutral-deep relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12 md:flex items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <Mail className="w-4 h-4 text-primary" />
                            </span>
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                                Stay Connected
                            </span>
                        </div>
                        <h2 className="serif-heading text-3xl md:text-4xl text-white mb-4">
                            Join the Inner Circle
                        </h2>
                        <p className="text-neutral-200/80 font-light leading-relaxed max-w-md">
                            Receive exclusive insights on leadership, faith, and purpose directly to your inbox. No spam, just value.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="w-full md:w-1/2">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-primary/20 border border-primary/30 rounded-xl p-8 text-center"
                                >
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                                        <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                                    <p className="text-white/80 text-sm">Welcome to the family. Check your inbox soon.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="relative"
                                >
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 rounded-full py-4 pl-6 pr-36 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                            required
                                            disabled={status === 'loading'}
                                        />
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="absolute right-1 top-1 bottom-1 bg-primary hover:bg-white hover:text-primary text-white px-6 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-2 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <span>Joining</span>
                                                    <Loader2 className="w-3 h-3 animate-spin" />
                                                </>
                                            ) : (
                                                <>
                                                    <span>Subscribe</span>
                                                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-4 pl-6">
                                        We respect your privacy. Unsubscribe anytime.
                                    </p>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;
