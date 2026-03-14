import { User, Award, BookMarked } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="border-t-2 border-charcoal w-16 mb-8"></div>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6">About</h1>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="aspect-[3/4] bg-charcoal/10 rounded-sm flex items-center justify-center sticky top-32">
              <User size={64} className="text-charcoal/30" />
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-charcoal leading-relaxed">
              David O'Rourke is the author of three acclaimed novels that explore the intricate
              landscapes of memory, displacement, and human connection. His work has been
              described as "quietly devastating" and "luminously precise."
            </p>

            <p className="text-lg text-charcoal leading-relaxed">
              Born in Dublin and raised between Ireland and the American Midwest, O'Rourke draws
              on his experience of multiple homes to explore themes of belonging and exile. His
              writing is characterized by its attention to the small moments that define our
              lives—the gestures, silences, and rituals that carry meaning beyond words.
            </p>

            <p className="text-lg text-charcoal leading-relaxed">
              Before turning to fiction full-time, O'Rourke worked as a journalist and taught
              creative writing at various universities. His essays and criticism have appeared
              in The New Yorker, The Paris Review, Granta, and other publications.
            </p>

            <p className="text-lg text-charcoal leading-relaxed">
              He currently lives in Portland, Oregon, where he is at work on his fourth novel.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-sm">
            <Award className="text-navy mb-4" size={32} />
            <h3 className="font-serif text-2xl text-charcoal mb-4">Honors & Awards</h3>
            <ul className="space-y-3 text-charcoal/80">
              <li className="border-l-2 border-navy/30 pl-4">
                <p className="font-medium">National Book Critics Circle Award</p>
                <p className="text-sm text-charcoal/60">The Cartographer's Daughter, 2021</p>
              </li>
              <li className="border-l-2 border-navy/30 pl-4">
                <p className="font-medium">PEN/Faulkner Award Finalist</p>
                <p className="text-sm text-charcoal/60">Between Tides, 2024</p>
              </li>
              <li className="border-l-2 border-navy/30 pl-4">
                <p className="font-medium">Guggenheim Fellowship</p>
                <p className="text-sm text-charcoal/60">Fiction, 2022</p>
              </li>
              <li className="border-l-2 border-navy/30 pl-4">
                <p className="font-medium">Whiting Award</p>
                <p className="text-sm text-charcoal/60">Early Career, 2019</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-sm">
            <BookMarked className="text-navy mb-4" size={32} />
            <h3 className="font-serif text-2xl text-charcoal mb-4">Education</h3>
            <ul className="space-y-3 text-charcoal/80">
              <li className="border-l-2 border-navy/30 pl-4">
                <p className="font-medium">MFA in Creative Writing</p>
                <p className="text-sm text-charcoal/60">University of Iowa Writers' Workshop</p>
              </li>
              <li className="border-l-2 border-navy/30 pl-4">
                <p className="font-medium">BA in English Literature</p>
                <p className="text-sm text-charcoal/60">Trinity College Dublin</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-navy text-cream p-12 rounded-sm">
          <h3 className="font-serif text-2xl mb-6">On Writing</h3>
          <blockquote className="font-serif text-xl italic leading-relaxed border-l-2 border-cream/50 pl-6">
            "I write to understand what I don't yet know. Each sentence is an act of
            discovery, a way of feeling toward meaning in the dark. If I knew what I wanted
            to say before I began, there would be no point in writing it."
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-widest text-cream/70">
            — From an interview with The Paris Review, 2024
          </p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl text-charcoal mb-6">
            For press inquiries and speaking engagements
          </h3>
          <p className="text-charcoal/70 mb-6">
            Please contact: agent@literaryagency.com
          </p>
          <p className="text-sm text-charcoal/60">
            High-resolution author photos and book covers available upon request
          </p>
        </div>
      </div>
    </div>
  );
}
