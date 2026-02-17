import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="Dami2.jpg"
            alt="Dami Olatunji"
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
          <div className="max-w-3xl pt-20">
            <span className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              The Woman Behind the Vision
            </span>
            <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-white">
              Meet<br />
              <span className="italic text-primary">Dami.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-12 leading-relaxed font-light">
              Bridging the gap between spiritual excellence and corporate leadership. A story of faith, purpose, and the pursuit of value.
            </p>
            <div className="w-20 h-px bg-primary"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="material-icons text-white/50 text-3xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* The Foundation Narrative */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="serif-heading italic text-5xl text-neutral-muted/50">01. The Foundation</span>
          </div>
          <div className="prose prose-lg mx-auto text-center">
            <p className="serif-heading text-3xl md:text-4xl leading-relaxed mb-12 text-neutral-deep">
              Dami Olatunji is a catalyst for change, standing at the intersection of spiritual leadership and organizational excellence.
            </p>
            <p className="text-neutral-deep/70 leading-loose mb-8 font-light text-lg">
              Her journey is one defined by a relentless pursuit of depth. Whether she is standing behind the pulpit or leading in the boardroom, Dami's approach remains consistent: a commitment to authenticity, a passion for growth, and an unwavering belief in the inherent value of every individual.
            </p>
            <p className="text-base lg:text-lg text-neutral-deep/70 leading-relaxed font-light mb-6">
              As a Pastor, she nurtures souls with compassion. As a Speaker, she ignites minds with clarity. As the Founder of Herdentity, she empowers individuals to build confidence through identity-driven leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Role: Pastor */}
      <section className="py-32 overflow-hidden bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
              <img
                className="rounded-2xl w-full aspect-[4/5] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                src="Dami5.jpg"
                alt="Pastor Dami"
              />
              <div className="absolute top-1/2 -right-12 w-64 h-64 border-[1px] border-primary/20 rounded-full -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">Ministry & Leadership</div>
              <h3 className="serif-heading text-5xl mb-8 leading-tight">Pastor at RCCG LSC Derby</h3>
              <p className="text-neutral-deep/70 mb-10 leading-relaxed text-lg font-light">
                At the heart of the Living Spring Chapel Derby, Dami serves as a spiritual anchor and visionary leader. Her ministry is characterized by a "no-walls" approach, focusing on creating a community where faith meets contemporary life.
              </p>
              <Link to="/messages" className="inline-flex items-center text-primary group font-bold tracking-widest text-xs uppercase border-b border-primary pb-1 hover:text-neutral-deep hover:border-neutral-deep transition-all">
                Explore the Ministry
                <span className="material-icons ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-black blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="material-icons text-white/20 text-6xl mb-8">format_quote</span>
          <h2 className="serif-heading text-4xl md:text-6xl italic leading-tight mb-12">
            "We don't just build businesses or churches; we build people who are equipped to transform their world with grace and grit."
          </h2>
          <div className="inline-block border-t border-white/30 pt-4">
            <div className="text-xs font-bold tracking-[0.3em] uppercase">— Dami Olatunji</div>
          </div>
        </div>
      </section>

      {/* Role: CEO */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Founder</span>
              </div>
              <h2 className="serif-heading text-4xl lg:text-5xl mb-8">Herdentity</h2>
              <p className="text-base lg:text-lg text-neutral-deep/70 mb-10 leading-relaxed max-w-xl font-light">
                Herdentity is a movement dedicated to building confidence rooted in true identity. We believe that when you know who you are, you lead with clarity and impact.
              </p>
              <ul className="space-y-4 mb-12">
                {['Identity Workshops', 'Confidence Building', 'Authentic Leadership'].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="material-icons text-primary text-xl">check_circle</span>
                    <span className="font-medium text-neutral-deep">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://herdentity.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all">
                Visit Herdentity
              </a>
            </div>
            <div className="relative group">
              <img
                className="rounded-2xl w-full aspect-square object-cover shadow-2xl z-10 relative"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgV0_i2-IzVeKhxLfVwNsm1iB2Pv04C3GxSf_Cux511c8IM9OZp_vU0nuRqgaGJ16gN6Suvpaw6G-F0Y_YN0QScBrxq3ODAUYUQvEx91BwE99Jzw5rFahUGvRcxydk2lsfQPIlsdHv7FTr0RjmF7lYfZ9TUSw8bKNL9SFb4ynm6_np2E6gdyFiib_Tj_g5lLbhIxcufwSuFMGQP5bceLkw8E7nsyL10opSiCLAUtFfq_ZeG7QsSSuiO2vvouHaSU7JUYi63VfCntM"
                alt="Valuedity Office"
              />
              <div className="absolute -bottom-10 -right-10 w-2/3 hidden md:block z-20 group-hover:-translate-y-4 transition-transform duration-500">
                <img
                  className="rounded-xl shadow-2xl border-4 border-white"
                  src="herdentity.jpg"
                  alt="Strategy Session"
                />
              </div>
              <div className="absolute top-10 -left-10 w-full h-full border border-neutral-muted rounded-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Grid */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Voice of Influence</div>
            <h3 className="serif-heading text-5xl">The Global Speaker</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'record_voice_over', title: 'Keynote Addresses', desc: 'Inspiring audiences worldwide with themes of purpose, leadership resilience, and the power of vision.' },
              { icon: 'groups', title: 'Workshop Facilitation', desc: 'Hands-on strategy sessions for executive teams looking to redefine their culture and value proposition.' },
              { icon: 'auto_stories', title: 'Thought Leadership', desc: 'Frequent contributor to leadership journals and podcasts, exploring the synergy of faith and business.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 group">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-icons text-primary text-3xl group-hover:text-white transition-colors">{item.icon}</span>
                </div>
                <h4 className="serif-heading text-2xl mb-4">{item.title}</h4>
                <p className="text-sm text-neutral-deep/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-neutral-deep text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="serif-heading text-5xl mb-8">Connect with the Mission</h2>
          <p className="text-white/60 mb-12 text-lg font-light max-w-2xl mx-auto">Whether you're looking for spiritual guidance, corporate strategy, or a voice for your next event, let's start a conversation that matters.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="bg-primary hover:bg-white hover:text-primary transition-all duration-300 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20">
              Book Dami
            </Link>
            <Link to="/contact" className="border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest">
              Contact Inquiries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;