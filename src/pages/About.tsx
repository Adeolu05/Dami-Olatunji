import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 z-10">
            <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">The Woman Behind the Vision</h2>
            <h1 className="serif-heading text-7xl md:text-8xl leading-none mb-8">Meet<br />Dami.</h1>
            <p className="text-lg leading-relaxed text-neutral-deep/70 mb-8 max-w-md">
              Bridging the gap between spiritual excellence and corporate leadership. A story of faith, purpose, and the pursuit of value.
            </p>
            <div className="w-20 h-px bg-primary"></div>
          </div>
          <div className="lg:col-span-7 relative h-[400px] lg:h-[700px]">
            <img
              className="w-full h-full object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              src="Dami6.jpg"
              alt="Dami Olatunji"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary p-10 text-white hidden lg:block rounded-xl max-w-sm">
              <p className="serif-heading text-2xl italic">"Excellence is not an act, but a habit of the soul."</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Foundation Narrative */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="serif-heading italic text-4xl text-neutral-muted">01. The Foundation</span>
          </div>
          <div className="prose prose-lg mx-auto">
            <p className="serif-heading text-3xl leading-relaxed mb-12 text-neutral-deep">
              Dami Olatunji is a catalyst for change, standing at the intersection of spiritual leadership and organizational excellence.
            </p>
            <p className="text-neutral-deep/80 leading-loose mb-8 font-light">
              Her journey is one defined by a relentless pursuit of depth. Whether she is standing behind the pulpit or leading in the boardroom, Dami's approach remains consistent: a commitment to authenticity, a passion for growth, and an unwavering belief in the inherent value of every individual.
            </p>
            <p className="text-base lg:text-lg text-neutral-deep/80 leading-relaxed font-light mb-6">
              As a Pastor, he nurtures souls with compassion. As a Speaker, he ignites minds with clarity. As the Founder of Herdentity, he empowers individuals to build confidence through identity-driven leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Role: Pastor */}
      <section className="py-32 overflow-hidden bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                className="rounded-xl w-full aspect-[4/5] object-cover shadow-xl"
                src="Dami5.jpg"
                alt="Pastor Dami"
              />
              <div className="absolute top-1/2 -right-12 w-48 h-48 border-8 border-primary/10 rounded-full -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">Ministry & Leadership</div>
              <h3 className="serif-heading text-5xl mb-8">Pastor at RCCG LSC Derby</h3>
              <p className="text-neutral-deep/70 mb-10 leading-relaxed">
                At the heart of the Living Spring Chapel Derby, Dami serves as a spiritual anchor and visionary leader. Her ministry is characterized by a "no-walls" approach, focusing on creating a community where faith meets contemporary life.
              </p>
              <Link to="/messages" className="inline-flex items-center text-primary group font-bold tracking-widest text-xs uppercase hover:underline">
                Explore the Ministry
                <span className="material-icons ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="serif-heading text-4xl md:text-6xl italic leading-tight">
            "We don't just build businesses or churches; we build people who are equipped to transform their world with grace and grit."
          </h2>
          <div className="mt-12 text-xs font-bold tracking-[0.3em] opacity-60 uppercase">— Dami Olatunji</div>
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
              <p className="text-base lg:text-lg text-neutral-deep/70 mb-10 leading-relaxed max-w-xl">
                Herdentity is a movement dedicated to building confidence rooted in true identity. We believe that when you know who you are, you lead with clarity and impact.
              </p>
              <ul className="space-y-4 mb-12">
                {['Identity Workshops', 'Confidence Building', 'Authentic Leadership'].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="material-icons text-primary text-xl">check_circle</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://herdentity.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-xs transition-all">
                Visit Herdentity
              </a>
            </div>
            <div className="relative">
              <img
                className="rounded-xl w-full aspect-square object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgV0_i2-IzVeKhxLfVwNsm1iB2Pv04C3GxSf_Cux511c8IM9OZp_vU0nuRqgaGJ16gN6Suvpaw6G-F0Y_YN0QScBrxq3ODAUYUQvEx91BwE99Jzw5rFahUGvRcxydk2lsfQPIlsdHv7FTr0RjmF7lYfZ9TUSw8bKNL9SFb4ynm6_np2E6gdyFiib_Tj_g5lLbhIxcufwSuFMGQP5bceLkw8E7nsyL10opSiCLAUtFfq_ZeG7QsSSuiO2vvouHaSU7JUYi63VfCntM"
                alt="Valuedity Office"
              />
              <div className="absolute -bottom-10 -right-10 w-2/3 hidden md:block">
                <img
                  className="rounded-lg shadow-xl border-4 border-white"
                  src="Dami1.jpg"
                  alt="Strategy Session"
                />
              </div>
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
              <div key={idx} className="bg-white p-10 rounded-xl hover:shadow-lg transition-shadow">
                <span className="material-icons text-primary mb-6 text-4xl">{item.icon}</span>
                <h4 className="serif-heading text-2xl mb-4">{item.title}</h4>
                <p className="text-sm text-neutral-deep/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-neutral-deep text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="serif-heading text-5xl mb-8">Connect with the Mission</h2>
          <p className="text-white/60 mb-12 text-lg">Whether you're looking for spiritual guidance, corporate strategy, or a voice for your next event, let's start a conversation that matters.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="bg-primary hover:bg-white hover:text-primary transition-all duration-300 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest">
              Book Dami
            </Link>
            <Link to="/contact" className="border border-white/20 hover:border-white transition-all duration-300 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest">
              Contact Inquiries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;