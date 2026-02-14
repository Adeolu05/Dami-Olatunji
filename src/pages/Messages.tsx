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
            {/* Featured Series Hero */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden group">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnOo5j8MLFPUMydKrxStjOMYEg6SRKGRH-cKKrkV0dozWfHimFxdmxDMqtSuEuLJX16qkgzP8qQXYxgQ1wIayAc0KzipnluVk220AM9YXIlLbG7TXASmdHkX1sxHssZLZDn1XOHmK_j-GzlbrGjp4XUqxqSCGYNTTESz6MIEm1MLiqlFQJ-wIwSDraeoLD2dRLAgL2db3tDnut77m1zAN6k-Za4m1AIXyvrBqEwgsqo1ju1aX4uPEb-gB-TOmIsZuyg5mBXijAt3E"
                        alt="Featured Series"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/40 to-transparent flex items-center p-8 md:p-16">
                        <div className="max-w-xl text-white">
                            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Current Series</span>
                            <h1 className="serif-heading text-5xl md:text-6xl mb-6 leading-tight">The Architect of Purpose</h1>
                            <p className="opacity-80 text-lg mb-10 leading-relaxed font-light">Join Pastor Dami as he navigates the complex intersection of divine calling, leadership, and personal growth in this 6-part transformative series.</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.youtube.com/@damiolatunji/videos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold tracking-wider uppercase text-xs flex items-center space-x-2 hover:bg-opacity-90 transition-all"
                                >
                                    <span className="material-icons-outlined text-lg">play_arrow</span>
                                    <span>Watch Series</span>
                                </a>
                                <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-bold tracking-wider uppercase text-xs hover:bg-white/20 transition-all">
                                    Resources
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-20 z-40 bg-background-light py-6 border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center space-x-8 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        {categories.map((cat, idx) => (
                            <button key={idx} className={`whitespace-nowrap font-bold text-sm transition-colors ${idx === 0 ? 'text-primary border-b-2 border-primary pb-1' : 'text-neutral-deep/60 hover:text-primary'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative group">
                            <span className="material-icons-outlined absolute left-0 top-1/2 -translate-y-1/2 text-primary/40 text-lg">tune</span>
                            <select className="pl-6 pr-8 py-2 bg-transparent border-none text-xs font-bold uppercase tracking-wide focus:ring-0 cursor-pointer text-neutral-deep/80">
                                <option>Newest First</option>
                                <option>Most Popular</option>
                                <option>Oldest First</option>
                            </select>
                        </div>
                        <div className="h-6 w-px bg-primary/20"></div>
                        <div className="flex bg-primary/5 rounded-lg p-1">
                            <button className="p-1.5 bg-white shadow-sm rounded text-primary"><span className="material-icons-outlined text-sm">grid_view</span></button>
                            <button className="p-1.5 text-neutral-deep/40 hover:text-primary transition-colors"><span className="material-icons-outlined text-sm">view_list</span></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {messages.map((msg, idx) => (
                        <a
                            key={idx}
                            href={msg.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer block"
                        >
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                                <img src={msg.img} alt={msg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <span className="material-icons-outlined text-primary text-3xl">
                                            {msg.type === 'Video' ? 'play_arrow' : 'podcasts'}
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">
                                    {msg.duration}
                                </div>
                                <div className={`absolute top-3 left-3 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase ${msg.type === 'Video' ? 'bg-primary text-white' : 'bg-white/80 text-primary'}`}>
                                    {msg.type}
                                </div>
                            </div>
                            <div>
                                <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">{msg.category} • {msg.date}</span>
                                <h3 className="serif-heading text-2xl mb-3 group-hover:text-primary transition-colors leading-tight">{msg.title}</h3>
                                <p className="text-neutral-deep/60 text-sm line-clamp-2 leading-relaxed">{msg.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-24 text-center pb-20">
                    <button className="group relative px-12 py-5 overflow-hidden rounded-lg bg-transparent">
                        <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase text-neutral-deep group-hover:text-white transition-colors duration-300">Load More Archives</span>
                        <div className="absolute inset-0 border-2 border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300 rounded-lg"></div>
                    </button>
                    <p className="mt-6 text-neutral-deep/40 text-[10px] tracking-widest uppercase italic">Showing 6 of 124 messages</p>
                </div>
            </div>
        </div>
    );
};

export default Messages;