import { BookOpen, Feather, Mail } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-cream">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border-t-2 border-charcoal w-16 mb-8"></div>
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6 leading-tight">
            Stories that linger in the quiet spaces between words
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 font-light leading-relaxed max-w-2xl">
            David O'Rourke explores the human condition through prose that balances
            elegance with raw emotional truth.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[3/4] bg-charcoal/10 rounded-sm flex items-center justify-center">
                <BookOpen size={64} className="text-charcoal/30" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-navy mb-4">Latest Release</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
                The Weight of Silence
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                A meditation on grief, memory, and the things we carry. Through interconnected
                stories spanning three generations, O'Rourke crafts a narrative that asks what
                we owe to the past and what we're willing to sacrifice for the future.
              </p>
              <button
                onClick={() => onNavigate('books')}
                className="inline-block px-8 py-3 bg-navy text-cream text-sm uppercase tracking-wider hover:bg-charcoal transition-colors"
              >
                Explore Books
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-12 text-center">
            Recent Writing
          </h2>
          <div className="space-y-12">
            {[
              {
                title: 'On the Art of Listening',
                excerpt: 'What we hear shapes what we become. In the space between sound and silence, we find the contours of meaning.',
                date: 'March 2026',
              },
              {
                title: 'Memory as Fiction',
                excerpt: 'Every recollection is an act of creation. We are all unreliable narrators of our own lives.',
                date: 'February 2026',
              },
              {
                title: 'The Geography of Loss',
                excerpt: 'Places hold our grief. They become repositories for the emotions we cannot carry alone.',
                date: 'January 2026',
              },
            ].map((article, index) => (
              <article key={index} className="border-l-2 border-navy pl-6 hover:border-charcoal transition-colors group cursor-pointer">
                <p className="text-xs uppercase tracking-widest text-navy mb-2">{article.date}</p>
                <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-navy transition-colors">
                  {article.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">{article.excerpt}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('writing')}
              className="inline-block px-8 py-3 border-2 border-navy text-navy text-sm uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              View All Writing
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <Feather size={48} className="mx-auto mb-6 opacity-80" />
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Stay Connected</h2>
          <p className="text-lg mb-8 opacity-90">
            Receive occasional letters about new work, reading recommendations, and the writing life.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-cream text-navy text-sm uppercase tracking-wider hover:bg-white transition-colors"
          >
            <Mail size={18} />
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
