import React from 'react';
import { InstagramIcon, YouTubeIcon, FacebookIcon } from '../components/Icons';

const Contact: React.FC = () => {
    return (
        <div className="bg-background-light min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Side Visual */}
                    <div className="space-y-12">
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="Dami3.jpg"
                                alt="Dami Olatunji Editorial Portrait"
                                className="w-full h-[400px] lg:h-[600px] object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
                        </div>
                        <div className="max-w-lg">
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">The Voice of Transformation</span>
                            <h2 className="serif-heading text-3xl lg:text-4xl mb-6 leading-tight italic">
                                "Communication is not just about words; it's about shifting atmospheres and anchoring purpose."
                            </h2>
                            <p className="text-neutral-deep/70 leading-relaxed text-lg font-light mb-8">
                                Dami's speaking philosophy is rooted in the intersection of spiritual conviction and strategic excellence. Whether addressing a global corporate summit or a local congregation, she brings a message designed to catalyze immediate action and lasting internal change.
                            </p>

                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com/damiolatunji_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <InstagramIcon className="w-4 h-4 text-current group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href="https://youtube.com/@damiolatunji"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group"
                                >
                                    <span className="sr-only">YouTube</span>
                                    <YouTubeIcon className="w-4 h-4 text-current group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href="https://www.facebook.com/damilola.oladele.9026"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <FacebookIcon className="w-4 h-4 text-current group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white p-8 lg:p-16 rounded-2xl shadow-sm border border-primary/5 sticky top-24">
                        <div className="mb-12">
                            <h1 className="serif-heading text-4xl lg:text-5xl mb-4">Invite Dami to Your Next Event</h1>
                            <p className="text-xs text-neutral-deep/60 uppercase tracking-widest font-bold">Please provide details for your upcoming engagement.</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="flex flex-col group">
                                    <label htmlFor="full_name" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors">Full Name</label>
                                    <input
                                        id="full_name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep placeholder:text-neutral-deep/20"
                                    />
                                </div>
                                <div className="flex flex-col group">
                                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep placeholder:text-neutral-deep/20"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="flex flex-col group">
                                    <label htmlFor="event_type" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors">Event Type</label>
                                    <select
                                        id="event_type"
                                        className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep cursor-pointer"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Type</option>
                                        <option value="keynote">Keynote Speech</option>
                                        <option value="workshop">Workshop</option>
                                        <option value="church">Church Service</option>
                                        <option value="corporate">Corporate Training</option>
                                    </select>
                                </div>
                                <div className="flex flex-col group">
                                    <label htmlFor="date" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors">Estimated Date</label>
                                    <input
                                        id="date"
                                        type="date"
                                        className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col group">
                                <label htmlFor="location" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors">Location</label>
                                <input
                                    id="location"
                                    type="text"
                                    placeholder="City, Country or Virtual"
                                    className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep placeholder:text-neutral-deep/20"
                                />
                            </div>

                            <div className="flex flex-col group">
                                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors">Message & Details</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell us about the vision for your event..."
                                    className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep h-32 resize-none placeholder:text-neutral-deep/20"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-5 rounded-lg font-bold uppercase tracking-widest text-xs hover:shadow-xl hover:shadow-primary/20 transition-all mt-4"
                            >
                                Submit Booking Request
                            </button>
                            <p className="text-[10px] text-center opacity-40 uppercase tracking-widest mt-6">Expect a response from our team within 48 business hours.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;