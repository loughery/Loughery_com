import { FileText, ExternalLink } from 'lucide-react';

export default function Writing() {
  const essays = [
    {
      title: 'On the Art of Listening',
      date: 'March 14, 2026',
      publication: 'The New Yorker',
      excerpt: 'What we hear shapes what we become. In the space between sound and silence, we find the contours of meaning. I grew up in a house where listening was an art form—not the passive act of receiving sound, but the active practice of attention. My grandmother would sit by the window for hours, her eyes closed, taking in the world through her ears alone.',
      category: 'Essay',
    },
    {
      title: 'Memory as Fiction',
      date: 'February 8, 2026',
      publication: 'The Paris Review',
      excerpt: 'Every recollection is an act of creation. We are all unreliable narrators of our own lives, editing and revising with each remembering. The question is not whether we distort the past—we do, inevitably—but what our distortions reveal about who we are now, in the present moment of remembering.',
      category: 'Essay',
    },
    {
      title: 'The Geography of Loss',
      date: 'January 22, 2026',
      publication: 'Granta',
      excerpt: 'Places hold our grief. They become repositories for the emotions we cannot carry alone. When my father died, I found myself returning to the same streets we had walked together, as if by retracing our steps I might somehow find him again. I learned that mourning has a landscape, and that landscape changes with each visit.',
      category: 'Essay',
    },
    {
      title: 'In Defense of Slow Reading',
      date: 'December 2, 2025',
      publication: 'The Atlantic',
      excerpt: 'In an age of information overload, the deliberate act of reading slowly becomes a form of resistance. To give a text our full attention, to sit with difficulty rather than skip past it, to reread a sentence for its music as much as its meaning—these are radical acts in a culture that prizes speed and efficiency above all else.',
      category: 'Essay',
    },
    {
      title: 'Writing Through Doubt',
      date: 'October 15, 2025',
      publication: 'Literary Hub',
      excerpt: 'Self-doubt is not the enemy of writing; it is the condition of writing. The work comes from the space between confidence and despair, from the willingness to fail repeatedly in pursuit of something you can only half-imagine. Every writer knows this territory intimately. The question is whether we have the courage to remain there.',
      category: 'Craft',
    },
    {
      title: 'The Immigrant\'s Library',
      date: 'August 30, 2025',
      publication: 'The Guardian',
      excerpt: 'Books were my family\'s first purchase in every new country. Before furniture, before comfort, before anything else: books. My mother understood that a library was not a luxury but a necessity, a way of carrying home with us wherever we went. In the pages of those books, we found a constancy that the world did not offer.',
      category: 'Personal',
    },
    {
      title: 'On Solitude and Silence',
      date: 'June 18, 2025',
      publication: 'The New York Times',
      excerpt: 'Writers are professional solitaries. We spend our days in voluntary isolation, trafficking in silence. But solitude is not loneliness, and silence is not emptiness. In the quiet, we learn to hear the small voice of intuition, the whisper of what wants to be written. Solitude is where the work begins.',
      category: 'Essay',
    },
    {
      title: 'Revision as Vision',
      date: 'April 5, 2025',
      publication: 'Poets & Writers',
      excerpt: 'To revise is to see again, to look at familiar words with fresh eyes. The first draft is an act of discovery; revision is an act of understanding. In returning to the page, we ask not what we meant to say, but what we actually said—and whether that is, in fact, what needs saying.',
      category: 'Craft',
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="border-t-2 border-charcoal w-16 mb-8"></div>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">Writing</h1>
          <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl">
            Essays and reflections on craft, memory, and the writing life. Selected pieces from
            literary magazines and journals.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-navy text-cream text-sm uppercase tracking-wider">
            All
          </button>
          <button className="px-4 py-2 border border-charcoal/30 text-charcoal text-sm uppercase tracking-wider hover:border-navy hover:text-navy transition-colors">
            Essays
          </button>
          <button className="px-4 py-2 border border-charcoal/30 text-charcoal text-sm uppercase tracking-wider hover:border-navy hover:text-navy transition-colors">
            Craft
          </button>
          <button className="px-4 py-2 border border-charcoal/30 text-charcoal text-sm uppercase tracking-wider hover:border-navy hover:text-navy transition-colors">
            Personal
          </button>
        </div>

        <div className="space-y-12">
          {essays.map((essay, index) => (
            <article
              key={index}
              className="border-t border-charcoal/20 pt-8 hover:pl-4 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="w-16 h-16 bg-charcoal/10 rounded-sm flex items-center justify-center mb-3">
                    <FileText size={24} className="text-charcoal/40" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-navy">{essay.category}</p>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="font-serif text-2xl md:text-3xl text-charcoal group-hover:text-navy transition-colors">
                      {essay.title}
                    </h2>
                    <ExternalLink size={20} className="text-charcoal/40 group-hover:text-navy transition-colors flex-shrink-0 mt-1" />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal/60 mb-4">
                    <span>{essay.date}</span>
                    <span className="w-1 h-1 bg-charcoal/40 rounded-full"></span>
                    <span className="italic">{essay.publication}</span>
                  </div>

                  <p className="text-charcoal/80 leading-relaxed">
                    {essay.excerpt}
                  </p>

                  <button className="mt-4 text-sm uppercase tracking-wider text-navy hover:text-charcoal transition-colors">
                    Read Full Article →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl text-charcoal mb-4">
              Subscribe for New Writing
            </h3>
            <p className="text-charcoal/70 mb-6">
              Receive occasional letters about new essays, reading notes, and reflections on the craft of writing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-charcoal/30 rounded-sm focus:outline-none focus:border-navy"
              />
              <button className="px-6 py-3 bg-navy text-cream text-sm uppercase tracking-wider hover:bg-charcoal transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
