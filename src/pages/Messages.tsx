import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import NewsletterSignup from '../components/NewsletterSignup';
import youtubeCatalog from '../data/youtubeMessages.json';
import { filterTopicsFromVideos, sortVideosNewestFirst } from '../lib/youtubeCatalog';

const INITIAL_VISIBLE = 8;
const LOAD_MORE_STEP = 8;

function matchesFilter(topic: string, category: string): boolean {
  if (topic === 'All Messages') return true;
  return category === topic;
}

/** Prefer long-form uploads for the hero card; fall back to newest item (list already newest-first). */
function pickFeaturedVideo(sorted: typeof youtubeCatalog.videos) {
  return sorted.find((v) => v.type === 'Video') ?? sorted[0] ?? null;
}

function cleanVideoTitle(title: string) {
  return title
    .replace(/\u200b/g, '')
    .replace(/\s*\|\s*Herdentity.*$/i, '')
    .replace(/\s*@\s*herdentity\s*/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function teaserDescription(desc: string, maxLen = 320) {
  if (!desc.trim()) {
    return 'Fresh teaching from Pastor Dami on the Herdentity YouTube channel—identity-rooted confidence, boundaries, and purposeful living.';
  }
  let t = desc.replace(/\r\n/g, '\n').split(/\n\n+/)[0] ?? desc;
  t = t.replace(/\s+/g, ' ').trim();
  const cut = t.split(/Connect With Us/i)[0]?.trim() ?? t;
  if (cut.length <= maxLen) return cut;
  return `${cut.slice(0, maxLen).trim()}…`;
}

const Messages: React.FC = () => {
  const sortedMessages = useMemo(() => sortVideosNewestFirst(youtubeCatalog.videos), [youtubeCatalog.videos]);
  const featuredVideo = useMemo(() => pickFeaturedVideo(sortedMessages), [sortedMessages]);
  const filterOptions = useMemo(() => filterTopicsFromVideos(sortedMessages), [sortedMessages]);

  const [activeFilter, setActiveFilter] = useState('All Messages');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    if (!filterOptions.includes(activeFilter)) {
      setActiveFilter('All Messages');
    }
  }, [filterOptions, activeFilter]);

  const filtered = useMemo(
    () => sortedMessages.filter((m) => matchesFilter(activeFilter, m.category)),
    [sortedMessages, activeFilter],
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const filterLabel = (topic: string) => {
    if (topic === 'All Messages') {
      return `All Messages (${sortedMessages.length})`;
    }
    const n = sortedMessages.filter((m) => m.category === topic).length;
    return `${topic} (${n})`;
  };

  const handleFilterChange = (topic: string) => {
    setActiveFilter(topic);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <div className="bg-background-light min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="images/Dami3.jpg"
            alt="Dami Olatunji Speaking"
            className="w-full h-full object-cover object-center animate-fade-in"
          />
          {/* Overlay - Darker */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-light to-transparent opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
          <div className="max-w-4xl pt-20 animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <span className="material-icons text-primary">auto_stories</span>
              <span className="text-white/80 font-bold tracking-[0.3em] uppercase text-xs">Resources</span>
            </div>

            <h1 className="serif-heading text-6xl md:text-7xl lg:text-8xl leading-tight mb-8 text-white">
              Transformational <br />
              <span className="italic text-primary drop-shadow-lg brightness-110">Insights.</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-200 max-w-xl mb-10 leading-relaxed font-light border-l border-white/20 pl-6">
              Practical wisdom for life, leadership, and spiritual growth. Explore the latest messages and series.
            </p>
          </div>
        </div>
      </section>

      {/* Featured: latest long-form message from YouTube catalog */}
      <section className="max-w-7xl mx-auto px-6 py-12 -mt-20 relative z-20">
        <div className="bg-white p-8 rounded-xl shadow-2xl border border-neutral-light">
          {featuredVideo ? (
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <a
                href={featuredVideo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden shrink-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img
                  src={featuredVideo.img}
                  alt={cleanVideoTitle(featuredVideo.title)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </a>
              <div className="w-full md:w-2/3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                  <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Latest on YouTube</span>
                  <span className="text-neutral-muted text-xs">{featuredVideo.date}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80 bg-primary/5 px-2 py-0.5 rounded-full">
                    {featuredVideo.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-deep/50 border border-neutral-muted px-2 py-0.5 rounded-full">
                    {featuredVideo.type}
                  </span>
                </div>
                <h2 className="serif-heading text-3xl md:text-4xl mb-4 leading-tight">{cleanVideoTitle(featuredVideo.title)}</h2>
                <p className="text-neutral-deep/70 mb-6 leading-relaxed">{teaserDescription(featuredVideo.desc)}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={featuredVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-bold tracking-wider uppercase text-xs flex items-center space-x-2 hover:bg-opacity-90 transition-all"
                  >
                    <span className="material-icons-outlined text-lg">play_arrow</span>
                    <span>Watch on YouTube</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@damiolatunji/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold tracking-wider uppercase text-xs flex items-center hover:bg-primary hover:text-white transition-all"
                  >
                    All videos
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-neutral-deep/70 mb-6">Catch the latest messages on YouTube.</p>
              <a
                href="https://www.youtube.com/@damiolatunji/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-primary text-white px-6 py-3 rounded-lg font-bold tracking-wider uppercase text-xs items-center space-x-2"
              >
                <span className="material-icons-outlined text-lg">play_arrow</span>
                <span>Open channel</span>
              </a>
            </div>
          )}
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
                  {filterOptions.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleFilterChange(topic)}
                      className={clsx(
                        'text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex justify-between items-center gap-2 group',
                        activeFilter === topic
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-neutral-deep/70 hover:bg-neutral-light hover:text-primary',
                      )}
                    >
                      <span className="leading-snug">{filterLabel(topic)}</span>
                      {activeFilter === topic && <span className="material-icons text-lg shrink-0">check</span>}
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
                <button
                  type="button"
                  className="w-full bg-white/10 backdrop-blur-sm hover:bg-white hover:text-neutral-deep transition-all py-2 rounded text-xs font-bold uppercase tracking-wider border border-white/20"
                >
                  Apple Podcasts
                </button>
              </div>
            </div>
          </div>

          {/* Message Grid */}
          <div className="lg:w-3/4">
            <p className="text-sm text-neutral-deep/60 mb-6">
              Showing {visible.length} of {filtered.length} message{filtered.length === 1 ? '' : 's'}
              {activeFilter !== 'All Messages' ? ` in “${activeFilter}”` : ''}. Source:{' '}
              <a href={youtubeCatalog.channelUrl} className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              {youtubeCatalog.fetchedAt ? (
                <span className="text-neutral-muted"> · Updated {new Date(youtubeCatalog.fetchedAt).toLocaleDateString()}</span>
              ) : null}
            </p>

            {visible.length === 0 ? (
              <div className="rounded-2xl border border-neutral-light bg-white p-12 text-center text-neutral-deep/70">
                <p className="serif-heading text-xl mb-2">No messages in this category yet.</p>
                <p className="text-sm mb-6">Try another topic or view all messages.</p>
                <button
                  type="button"
                  onClick={() => handleFilterChange('All Messages')}
                  className="text-primary text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1"
                >
                  Clear filter
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {visible.map((msg) => (
                  <a
                    key={msg.videoId}
                    href={msg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-primary/5 cursor-pointer block no-underline text-inherit"
                  >
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
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                          {msg.type}
                        </span>
                      </div>
                      {msg.duration ? (
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
                          {msg.duration}
                        </div>
                      ) : null}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                        <span className="text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/5 px-2 py-1 rounded-full">{msg.category}</span>
                        <span className="text-neutral-muted text-xs whitespace-nowrap">{msg.date}</span>
                      </div>
                      <h3 className="serif-heading text-xl mb-2 group-hover:text-primary transition-colors leading-tight">{msg.title}</h3>
                      <p className="text-sm text-neutral-deep/60 line-clamp-3 leading-relaxed mb-4">{msg.desc || 'Watch on YouTube for the full message.'}</p>
                      <div className="flex items-center text-primary text-xs font-bold uppercase tracking-widest group/link">
                        Watch Now
                        <span className="material-icons text-sm ml-1 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {hasMore && visible.length > 0 ? (
              <div className="mt-16 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + LOAD_MORE_STEP)}
                  className="border-b-2 border-neutral-deep pb-1 text-sm font-bold uppercase tracking-widest hover:text-primary hover:border-primary transition-colors"
                >
                  Load More Messages
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
};

export default Messages;
