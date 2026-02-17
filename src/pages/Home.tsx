import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Editorial Hero Section */}
      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="Dami1.jpg"
            alt="Dami Olatunji"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
          <div className="max-w-3xl pt-20">
            <span className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              Pastor • Speaker • CEO
            </span>
            <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-white">
              Faith.<br />
              Purpose.<br />
              <span className="italic text-primary">Transformation.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-12 leading-relaxed font-light">
              Guiding a generation toward their divine assignment through spiritual wisdom and leadership excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                to="/about"
                className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all duration-300 shadow-xl shadow-primary/20"
              >
                Explore the Vision
              </Link>
              <Link
                to="/messages"
                className="group flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <span className="material-icons text-xl group-hover:text-primary transition-colors">play_arrow</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Watch Latest</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="material-icons text-white/50 text-3xl">keyboard_arrow_down</span>
        </div>
      </header>

      {/* Meet Dami Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-light/50 -skew-x-12 transform translate-x-1/2 -z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group">
                <img
                  src="Dami2.jpg"
                  alt="Dami Speaking"
                  className="rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary/20 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Mission</span>
              <h2 className="serif-heading text-4xl lg:text-5xl mb-8 leading-tight text-neutral-deep">
                A Voice of Impact <br />
                <span className="italic text-primary">& Intentionality.</span>
              </h2>
              <div className="space-y-6 text-neutral-deep/80 text-lg leading-relaxed font-light">
                <p>
                  Dami Olatunji is a visionary leader dedicated to the holistic transformation of individuals. With a unique blend of spiritual insight and corporate acumen, he bridges the gap between ancient truths and modern application.
                </p>
                <p>
                  As a Pastor, he nurtures souls with compassion. As a Speaker, he ignites minds with clarity. As the CEO of Valuedity, he empowers professionals to scale their impact through value-driven leadership.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-12 border-t border-neutral-muted pt-8">
                {[
                  { label: 'Total Views', value: '320k+' },
                  { label: 'Subscribers', value: '2.75k+' },
                  { label: 'Messages', value: '250+' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-bold text-primary serif-heading">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-2 opacity-60 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Messages Grid */}
      <section className="py-24 lg:py-40 bg-background-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Resources</span>
              <h2 className="serif-heading text-4xl lg:text-5xl mt-2">Latest Messages</h2>
            </div>
            <Link to="/messages" className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors">
              View All Archive
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3bdtqT_09CIIs0V3koIoMd7jnOPZmzhaczHrENfj4Tan8kLD8y6EycfR6jDBa2xmj_OMzmQqvs0gT33rh7BaB4ScxY_EBO_steNzpyhzfLwIyS2wjKzoaGmlJff6jQOWF8AqUlpUwVEERv8perhNjHLxEH3BE3korSBs6P1h6HgiVTatO1LcNN36Q8i2wwBhJMTnxevB0uofuiQNA4PrATfWw-jHVpL7kBQyT77RAp-CgnUPZCGGCUm8VxgDn2T49h-RnQeK2DLQ",
                category: "Sermon Series",
                title: "The Architecture of Purpose",
                desc: "A deep dive into discovering your divine blueprint."
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDQkHf2HVmpQxNLpYZuJQWix1uvm7bQ6e5MF4UNFx85MVjbbEbTXMh5zrO8XAuzdnZqpqZacdDZC49_YnUHKwcmgmNH0HStF224SxPuwFJlMLKjgrQoRoJgsObdbxfk0e77gbjx04nmMgaQ6O7W5nAwMPmel-PQBTGN_OBMVt4b2_Yy3TmB2IodISM_EMDC7l8IvFDNh8-289ujy5NG0l9VfGPCESNb2f43zdf_RdpWvLnCvGJ_9KAKT9jgYujk-kzumKe47X1wqE",
                category: "Leadership Insight",
                title: "Leading from the Future",
                desc: "Principles for visionary leadership in modern times."
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZSa2detn7k0eN2KfXRgOu_PLDjJ3GqV0HRq2rMB_IOp2WnkFJaJwZPC5GhzVeKsrIYa7UMf-uyBEWWxgce5xoCbj2MTcLPhepm7rDlHDuXPL9B0lxa3s9-TVhv5z0o1ZjL4ZJukTyO_m3OaWc-U_DOGMxBb-9VryehMS90MOB-VQW4rXzjpbAdOX6pZZEXfYiStIUQGgCdGVlR5TU52dx2s4MW1FLLA8KsoLreThl6BA8GN8Fr3VaRGZc1mtf8vQHG2lvosbhaZ0",
                category: "Spiritual Growth",
                title: "The Power of Silence",
                desc: "Finding God's voice amidst the noise of the world."
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer bg-white p-4 pb-8 rounded-2xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-primary transition-colors">
                      <span className="material-icons text-white text-2xl ml-1">play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                  <h3 className="serif-heading text-xl mt-3 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-neutral-deep/60 leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuedity Business Highlight */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-neutral-light rounded-[2rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/herdentity.jpg"
                  alt="Herdentity Movement"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Founder</span>
              </div>
              <h2 className="serif-heading text-4xl lg:text-5xl mb-8 leading-tight">A Movement for the Chosen</h2>
              <p className="text-base lg:text-lg text-neutral-deep/70 mb-10 leading-relaxed">
                Herdentity is a movement equipping women with identity-rooted confidence and real-life skills. We help you thrive in purpose, career, and leadership through mentorship and community.
              </p>
              <ul className="space-y-4 mb-12">
                {['Beyond the Surface', 'Rooted in Identity', 'Holistic Growth'].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="material-icons text-primary text-xl">check_circle</span>
                    <span className="font-medium text-neutral-deep">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://herdentity.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-primary/10">
                Join the Movement
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;