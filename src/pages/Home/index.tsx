import { Link } from 'react-router';
import SectionLabel from '@/components/ui/SectionLabel';
import Newsletter from '@/components/ui/Newsletter';
import { EnergyIcon, NutritionIcon, HeartIcon, CommunityIcon } from '@/components/ui/Icons';

const offerings = [
  {
    icon: EnergyIcon,
    title: 'Energy Healing',
    description: 'Supporting the emotional, spiritual, and energetic body.',
    link: '/offerings#energy',
  },
  {
    icon: NutritionIcon,
    title: 'Nutrition & Herbalism',
    description: 'Food and plant medicine for balance and nourishment.',
    link: '/offerings#nutrition',
  },
  {
    icon: HeartIcon,
    title: 'Movement & Mindfulness',
    description: 'Somatic practices to return to the body and restore.',
    link: '/offerings#movement',
  },
  {
    icon: CommunityIcon,
    title: 'Community Workshops',
    description: 'Accessible, culturally-rooted community offerings.',
    link: '/offerings#community',
  },
];

const upcomingEvents = [
  {
    date: 'June 21, 2024',
    title: 'Summer Solstice Sound Bath',
    description: 'Welcome the longest day with healing frequencies and collective intention.',
  },
  {
    date: 'July 8, 2024',
    title: 'Herbal Medicine Making Workshop',
    description: 'Learn to create your own healing tinctures and salves from local plants.',
  },
  {
    date: 'July 20, 2024',
    title: 'Ancestral Nourishment Circle',
    description: 'Explore food justice and traditional healing foods in community.',
  },
];

function HomePage() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-terracotta text-cream py-3 px-4 text-center text-sm">
        <span className="font-light">Upcoming: Summer Solstice Sound Bath - June 21st</span>
        <Link to="/events" className="ml-2 underline hover:no-underline font-medium">
          Register Now &rarr;
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-16 lg:pt-8 pb-16">
          <p className="animate-fade-up-1 text-xs tracking-[0.25em] uppercase text-sage mb-6">
            Ancestral Wisdom &bull; Somatic Liberation &bull; Everyday Ritual
          </p>
          <h1 className="animate-fade-up-2 font-display text-4xl md:text-5xl xl:text-6xl font-normal leading-tight text-deep-earth mb-6">
            Welcome to <em className="italic text-terracotta">Fuego Libre</em>
          </h1>
          <p className="animate-fade-up-3 text-base leading-relaxed text-charcoal max-w-lg mb-4 font-light">
            A community-rooted healing project guiding you into deeper connection with your body, land, and spirit through plant medicine, movement, sound, and culturally-rooted practices.
          </p>
          <p className="animate-fade-up-3 text-base leading-relaxed text-charcoal max-w-lg mb-10 font-light">
            Where healing becomes a pathway to liberation - individual and collective.
          </p>

          <div className="animate-fade-up-4 flex flex-wrap gap-4">
            <Link
              to="/offerings"
              className="inline-flex items-center gap-3 bg-deep-earth text-cream px-6 py-4 text-xs tracking-[0.15em] uppercase hover:bg-terracotta transition-all duration-300"
            >
              Explore Offerings
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-deep-earth text-deep-earth px-6 py-4 text-xs tracking-[0.15em] uppercase hover:bg-deep-earth hover:text-cream transition-all duration-300"
            >
              Book a Session
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 border border-clay text-clay px-6 py-4 text-xs tracking-[0.15em] uppercase hover:bg-clay hover:text-cream transition-all duration-300"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex relative bg-gradient-to-br from-clay via-terracotta to-ochre items-center justify-center overflow-hidden">
          <span className="text-cream/50 text-lg font-display italic">[ Hero Image ]</span>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="px-6 lg:px-24 py-20 bg-warm-sand">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel centered>The Practice</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-8 leading-relaxed">
            My offerings weave together Mesoamerican healing traditions, yoga, chakra balancing, sound healing, herbalism, and holistic nutrition.
          </h2>
          <p className="text-base leading-relaxed text-charcoal font-light max-w-2xl mx-auto">
            Supporting people in releasing what no longer serves them and reclaiming their inner fire.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 lg:px-24 py-20 lg:py-28 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel centered>Watch & Listen</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-4">Experience the Practice</h2>
            <p className="text-base leading-relaxed text-charcoal font-light max-w-2xl mx-auto">
              Get a glimpse into the healing work and philosophy behind Fuego Libre.
            </p>
          </div>

          <div className="relative w-full aspect-video bg-deep-earth/5 overflow-hidden shadow-xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/TWpg1RmzAbc"
              title="Fuego Libre Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Offerings Preview */}
      <section className="px-6 lg:px-24 py-20 lg:py-28 bg-cream">
        <div className="text-center mb-16">
          <SectionLabel centered>Mind, Body & Spirit</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-deep-earth mb-6">Offerings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="offering-card relative p-8 bg-warm-sand transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
            >
              <div className="w-12 h-12 mb-5 text-terracotta">
                <offering.icon className="w-12 h-12" />
              </div>
              <h3 className="font-display text-xl text-deep-earth mb-3">{offering.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal font-light mb-4">{offering.description}</p>
              <Link to={offering.link} className="text-xs tracking-wider uppercase text-terracotta hover:text-deep-earth transition-colors">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/offerings"
            className="inline-flex items-center gap-3 border-b-2 border-terracotta text-terracotta pb-1 text-sm tracking-wider uppercase hover:text-deep-earth hover:border-deep-earth transition-colors"
          >
            View All Offerings
          </Link>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="relative px-6 lg:px-24 py-20 lg:py-28 bg-deep-earth text-cream text-center overflow-hidden philosophy-dots">
        <blockquote className="quote-mark relative font-display text-2xl md:text-3xl lg:text-4xl italic leading-relaxed max-w-4xl mx-auto mb-8 z-10">
          Healing is not a destination but a sacred journey of returning home to yourself, your ancestors, and the living earth that holds us all.
        </blockquote>
        <p className="text-xs tracking-[0.2em] uppercase text-clay relative z-10">- Fuego Libre Philosophy</p>
      </section>

      {/* Upcoming Events Preview */}
      <section className="px-6 lg:px-24 py-20 lg:py-28 bg-warm-sand">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <SectionLabel>Gather With Us</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-deep-earth">Upcoming Events</h2>
          </div>
          <Link to="/events" className="mt-6 lg:mt-0 text-sm tracking-wider uppercase text-terracotta hover:text-deep-earth transition-colors">
            View All Events &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.title} className="bg-cream p-6 border border-clay/20">
              <p className="text-xs tracking-wider uppercase text-sage mb-3">{event.date}</p>
              <h3 className="font-display text-xl text-deep-earth mb-2">{event.title}</h3>
              <p className="text-sm text-charcoal font-light mb-4">{event.description}</p>
              <Link to="/events" className="text-xs tracking-wider uppercase text-terracotta hover:text-deep-earth transition-colors">
                Register &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <Newsletter />
    </>
  );
}

export default HomePage;
