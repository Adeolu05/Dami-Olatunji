import React from 'react';
import { InstagramIcon, YouTubeIcon, FacebookIcon } from '../components/Icons';

const Contact: React.FC = () => {
    return (
        <div className="bg-background-light min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="Dami6.jpg"
                        alt="Contact Dami Olatunji"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
                    <div className="max-w-3xl pt-20">
                        <span className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                            Get in Touch
                        </span>
                        <h1 className="serif-heading text-5xl md:text-7xl leading-tight mb-8 text-white">
                            Start a <br />
                            <span className="italic text-primary">Conversation.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-10 leading-relaxed font-light">
                            Whether for speaking engagements, mentorship, or general inquiries, we'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Side Visual */}
                    <div className="space-y-12">
                        <div className="max-w-lg">
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">The Voice of Transformation</span>
                            <h2 className="serif-heading text-4xl lg:text-5xl mb-8 leading-tight italic text-neutral-deep">
                                "Communication is not just about words; it's about shifting atmospheres and anchoring purpose."
                            </h2>
                            <p className="text-neutral-deep/70 leading-loose text-lg font-light mb-10">
                                Dami's speaking philosophy is rooted in the intersection of spiritual conviction and strategic excellence. Whether addressing a global corporate summit or a local congregation, she brings a message designed to catalyze immediate action and lasting internal change.
                            </p>

                            <div className="flex space-x-6">
                                <a
                                    href="https://www.instagram.com/damiolatunji_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group shadow-lg shadow-transparent hover:shadow-primary/20"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <InstagramIcon className="w-5 h-5 text-current group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href="https://youtube.com/@damiolatunji"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group shadow-lg shadow-transparent hover:shadow-primary/20"
                                >
                                    <span className="sr-only">YouTube</span>
                                    <YouTubeIcon className="w-5 h-5 text-current group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href="https://www.facebook.com/damilola.oladele.9026"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-neutral-deep group shadow-lg shadow-transparent hover:shadow-primary/20"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <FacebookIcon className="w-5 h-5 text-current group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white p-8 lg:p-16 rounded-[2rem] shadow-2xl shadow-primary/5 border border-primary/5 sticky top-32">
                        <div className="mb-12">
                            <h1 className="serif-heading text-3xl lg:text-4xl mb-4">Invite Dami to Your Next Event</h1>
                            <p className="text-xs text-neutral-deep/60 uppercase tracking-widest font-bold">Please provide details for your upcoming engagement.</p>
                        </div>

                        <form className="space-y-10">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="flex flex-col group relative">
                                    <label htmlFor="full_name" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors absolute -top-5 left-0">Full Name</label>
                                    <input
                                        id="full_name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep placeholder:text-neutral-deep/20 text-sm"
                                    />
                                </div>
                                <div className="flex flex-col group relative">
                                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors absolute -top-5 left-0">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep placeholder:text-neutral-deep/20 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="flex flex-col group relative">
                                    <label htmlFor="event_type" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors absolute -top-5 left-0">Event Type</label>
                                    <select
                                        id="event_type"
                                        className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep cursor-pointer text-sm"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Type</option>
                                        <option value="keynote">Keynote Speech</option>
                                        <option value="workshop">Workshop</option>
                                        <option value="church">Church Service</option>
                                        <option value="corporate">Corporate Training</option>
                                    </select>
                                </div>
                                <div className="flex flex-col group relative">
                                    <label htmlFor="date" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors absolute -top-5 left-0">Estimated Date</label>
                                    <input
                                        id="date"
                                        type="date"
                                        className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col group relative">
                                <label htmlFor="location" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors absolute -top-5 left-0">Location</label>
                                <input
                                    id="location"
                                    type="text"
                                    placeholder="City, Country or Virtual"
                                    className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep placeholder:text-neutral-deep/20 text-sm"
                                />
                            </div>

                            <div className="flex flex-col group relative">
                                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-neutral-deep/40 mb-2 group-focus-within:text-primary transition-colors absolute -top-5 left-0">Message & Details</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell us about the vision for your event..."
                                    className="bg-transparent border-0 border-b border-neutral-muted focus:ring-0 focus:border-primary px-0 py-3 transition-all duration-300 text-neutral-deep h-32 resize-none placeholder:text-neutral-deep/20 text-sm"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-5 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-neutral-deep transition-all duration-300 shadow-xl shadow-primary/20"
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