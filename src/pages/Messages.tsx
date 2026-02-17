import React from 'react';

const Messages: React.FC = () => {
    const categories = ['All Messages', 'Identity & Purpose', 'Emotional Intelligence', 'Leadership', 'Relationships', 'Finance'];

    const messages = [
        {
            title: "Building Emotional Intelligence & Resilience",
            category: "Emotional Intelligence",
            date: "Recent Upload",
            duration: "15:00",
            type: "Video",
            desc: "Discover how to navigate life's challenges with grace and strength. Learn the keys to emotional mastery.",
            link: "https://www.youtube.com/@damiolatunji/videos",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Self-Leadership & Discipline: The Foundation of Success",
            category: "Leadership",
            date: "Recent Upload",
            duration: "20:00",
            type: "Video",
            desc: "True leadership starts with leading yourself. Unlock the discipline needed to achieve your goals.",
            link: "https://www.youtube.com/@damiolatunji/videos",
            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Financial Confidence & Independence for Women",
            category: "Finance",
            date: "Recent Upload",
            duration: "18:00",
            type: "Video",
            desc: "Empowering you to take control of your financial future with confidence and clarity.",
            link: "https://www.youtube.com/@damiolatunji/videos",
            img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Career Clarity & Future Readiness",
            category: "Purpose",
            date: "Recent Upload",
            duration: "22:00",
            type: "Video",
            desc: "Navigate your career path with foresight and intention. Prepare for the future of work.",
            link: "https://www.youtube.com/@damiolatunji/videos",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Healthy Relationships & Effective Communication",
            category: "Relationships",
            date: "Recent Upload",
            duration: "16:00",
            type: "Video",
            desc: "Building strong, healthy connections through the power of effective communication.",
            link: "https://www.youtube.com/@damiolatunji/videos",
            img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Identity, Purpose, & Self-Worth",
            category: "Identity & Purpose",
            date: "Recent Upload",
            duration: "25:00",
            type: "Video",
            desc: "Root yourself in your true identity and discover the purpose you were created for.",
            link: "https://www.youtube.com/@damiolatunji/videos",
            img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="bg-background-light min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="Dami3.jpg"
                        alt="Dami Olatunji Speaking"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
                    <div className="max-w-3xl pt-20">
                        <span className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                            Resources
                        </span>
                        <h1 className="serif-heading text-5xl md:text-7xl leading-tight mb-8 text-white">
                            Transformational <br />
                            <span className="italic text-primary">Insights.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-10 leading-relaxed font-light">
                            Practical wisdom for life, leadership, and spiritual growth. Explore the latest messages and series.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Series - Moved down */}
            <section className="max-w-7xl mx-auto px-6 py-12 -mt-20 relative z-20">
                <div className="bg-white p-8 rounded-xl shadow-2xl border border-neutral-light">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnOo5j8MLFPUMydKrxStjOMYEg6SRKGRH-cKKrkV0dozWfHimFxdmxDMqtSuEuLJX16qkgzP8qQXYxgQ1wIayAc0KzipnluVk220AM9YXIlLbG7TXASmdHkX1sxHssZLZDn1XOHmK_j-GzlbrGjp4XUqxqSCGYNTTESz6MIEm1MLiqlFQJ-wIwSDraeoLD2dRLAgL2db3tDnut77m1zAN6k-Za4m1AIXyvrBqEwgsqo1ju1aX4uPEb-gB-TOmIsZuyg5mBXijAt3E"
                                alt="Featured Series"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Current Series</span>
                            <h2 className="serif-heading text-3xl md:text-4xl mb-4">The Architect of Purpose</h2>
                            <p className="text-neutral-deep/70 mb-6 leading-relaxed">Join Pastor Dami as he navigates the complex intersection of divine calling, leadership, and personal growth in this 6-part transformative series.</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.youtube.com/@damiolatunji/videos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white px-6 py-3 rounded-lg font-bold tracking-wider uppercase text-xs flex items-center space-x-2 hover:bg-opacity-90 transition-all"
                                >
                                    <span className="material-icons-outlined text-lg">play_arrow</span>
                                    <span>Watch Series</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content & Filters */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sticky Sidebar/Filter */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h3 className="serif-heading text-xl mb-6 border-b border-primary/20 pb-2">Filter Topics</h3>
                                <div className="flex flex-col space-y-2">
                                    {['All Messages', 'Purpose & Calling', 'Leadership', 'Relationships', 'Faith Basics'].map((topic) => (
                                        <button
                                            key={topic}
                                            className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex justify-between items-center group text-neutral-deep/70 hover:bg-neutral-light hover:text-primary"
                                        >
                                            {topic}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-neutral-deep text-white p-6 rounded-xl relative overflow-hidden hidden lg:block">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <span className="material-icons text-6xl">podcasts</span>
                                </div>
                                <h4 className="serif-heading text-lg mb-2 relative z-10">Subscribe to Podcast</h4>
                                <p className="text-xs text-white/60 mb-4 relative z-10">Listen to messages on the go.</p>
                                <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white hover:text-neutral-deep transition-all py-2 rounded text-xs font-bold uppercase tracking-wider border border-white/20">
                                    Apple Podcasts
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Message Grid */}
                    <div className="lg:w-3/4">
                        <div className="grid md:grid-cols-2 gap-8">
                            {messages.map((msg, idx) => (
                                <div key={idx} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-primary/5 cursor-pointer">
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={msg.img}
                                            alt={msg.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                                                <span className="material-icons text-white text-3xl ml-1">play_arrow</span>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
                                            {msg.duration}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/5 px-2 py-1 rounded-full">{msg.category}</span>
                                            <span className="text-neutral-muted text-xs">{msg.date}</span>
                                        </div>
                                        <h3 className="serif-heading text-xl mb-2 group-hover:text-primary transition-colors leading-tight">{msg.title}</h3>
                                        <p className="text-sm text-neutral-deep/60 line-clamp-2 leading-relaxed mb-4">{msg.desc}</p>
                                        <div className="flex items-center text-primary text-xs font-bold uppercase tracking-widest group/link">
                                            Watch Now
                                            <span className="material-icons text-sm ml-1 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination / Load More */}
                        <div className="mt-16 text-center">
                            <button className="border-b-2 border-neutral-deep pb-1 text-sm font-bold uppercase tracking-widest hover:text-primary hover:border-primary transition-colors">
                                Load More Messages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;