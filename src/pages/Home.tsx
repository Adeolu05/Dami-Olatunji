import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Editorial Hero Section */}
      <header className="relative w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-24 py-12 lg:py-0 z-10 bg-background-light">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] lg:text-xs mb-4 lg:mb-6 block">
              Pastor • Speaker • CEO
            </span>
            <h1 className="serif-heading text-4xl lg:text-7xl xl:text-8xl leading-[1.1] mb-6 lg:mb-8 text-neutral-deep">
              Faith.<br />
              Purpose.<br />
              <span className="italic text-primary">Transformation.</span>
            </h1>
            <p className="text-base lg:text-lg text-neutral-deep/70 max-w-md mb-8 lg:mb-10 leading-relaxed">
              Guiding a generation toward their divine assignment through spiritual wisdom and leadership excellence.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/about"
                className="bg-primary text-white px-6 lg:px-8 py-3 lg:py-4 rounded font-bold uppercase tracking-widest text-[10px] lg:text-xs hover:shadow-xl hover:shadow-primary/20 transition-all"
              >
                Explore the Vision
              </Link>
              <Link
                to="/messages"
                className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
              >
                <span>Watch Latest</span>
                <span className="material-icons text-base">play_arrow</span>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-0">
            <img
              src="Dami1.jpg"
              alt="Dami Olatunji Portrait"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-light lg:from-transparent to-transparent opacity-40 lg:opacity-100"></div>
          </div>
        </div>
      </header>

      {/* Meet Dami Section */}
      <section className="py-16 lg:py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <img
                  src="Dami2.jpg"
                  alt="Dami Speaking"
                  className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-xl -z-10"></div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <h2 className="serif-heading text-4xl lg:text-5xl mb-8 leading-tight">
                A Voice of Impact <br />
                <span className="italic text-primary">& Intentionality</span>
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
                  { label: 'Years of Service', value: '15+' },
                  { label: 'Lives Impacted', value: '500k+' },
                  { label: 'Global Events', value: '50+' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-primary serif-heading">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-1 opacity-60 font-bold">{stat.label}</div>
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
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-primary transition-colors">
                      <span className="material-icons text-white text-3xl ml-1">play_arrow</span>
                    </div>
                  </div>
                </div>
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                <h3 className="serif-heading text-xl mt-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-neutral-deep/60 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuedity Business Highlight */}
      <section className="py-24 lg:py-32 bg-neutral-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-2xl shadow-xl border border-primary/5 flex flex-col lg:flex-row overflow-hidden">
            <div className="w-full lg:w-2/5 h-80 lg:h-auto relative">
              <img
                src="/herdentity.jpg"
                alt="Herdentity Movement"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            <div className="w-full lg:w-3/5 p-8 lg:p-20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Founder</span>
              </div>
              <h2 className="serif-heading text-4xl lg:text-5xl mb-8">A Movement for the Chosen</h2>
              <p className="text-base lg:text-lg text-neutral-deep/70 mb-10 leading-relaxed max-w-xl">
                Herdentity is a movement equipping women with identity-rooted confidence and real-life skills. We help you thrive in purpose, career, and leadership through mentorship and community.
              </p>
              <ul className="space-y-4 mb-12">
                {['Beyond the Surface', 'Rooted in Identity'].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="material-icons text-primary text-xl">check_circle</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://herdentity.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-xs transition-all">
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