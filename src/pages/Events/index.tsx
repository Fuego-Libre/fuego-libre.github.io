import { Link } from 'react-router';
import PageHeader from '@/components/ui/PageHeader';
import SectionLabel from '@/components/ui/SectionLabel';
import Newsletter from '@/components/ui/Newsletter';

const upcomingEvents = [
  {
    day: '21',
    month: 'June 2024',
    time: '7:00 PM - 9:00 PM',
    category: 'Sound Healing',
    title: 'Summer Solstice Sound Bath',
    description:
      "Welcome the longest day of the year with a deeply restorative sound bath ceremony. We'll gather to honor the sun's peak power, set intentions for the season ahead, and bathe in the healing frequencies of crystal bowls, chimes, and voice.",
    location: 'Pilsen, Chicago',
    capacity: 'Limited to 20 participants',
    price: '$35-55',
    priceNote: 'Sliding scale',
    color: 'terracotta',
  },
  {
    day: '8',
    month: 'July 2024',
    time: '2:00 PM - 5:00 PM',
    category: 'Herbalism Workshop',
    title: 'Summer Herbal Medicine Making',
    description:
      "Learn to harvest and prepare summer's abundant plant medicine. We'll create herbal oils, tinctures, and a cooling summer tea blend. All materials included. Take home your creations and recipes.",
    location: 'Humboldt Park, Chicago',
    capacity: 'Limited to 12 participants',
    price: '$65-85',
    priceNote: 'Sliding scale • Materials included',
    color: 'sage',
  },
  {
    day: '20',
    month: 'July 2024',
    time: '11:00 AM - 2:00 PM',
    category: 'Food & Community',
    title: 'Ancestral Nourishment Circle',
    description:
      "A gathering to explore food justice, traditional healing foods, and ancestral nutrition. We'll share a communal meal, learn about food as medicine, and discuss reclaiming our food heritage.",
    location: 'Logan Square, Chicago',
    capacity: 'Limited to 15 participants',
    price: '$40-60',
    priceNote: 'Sliding scale • Meal included',
    color: 'ochre',
  },
  {
    day: '3',
    month: 'August 2024',
    time: '6:30 PM - 8:30 PM',
    category: 'Monthly Gathering',
    title: 'New Moon Healing Circle',
    description:
      "Monthly gathering to honor the new moon cycle. We'll practice intention setting, gentle movement, guided meditation, and close with a sound bath. A space to reset and plant seeds for the month ahead.",
    location: 'Pilsen, Chicago',
    capacity: 'Limited to 20 participants',
    price: '$25-40',
    priceNote: 'Sliding scale',
    color: 'clay',
  },
];

const galleryGradients = [
  'from-sage to-clay',
  'from-terracotta to-ochre',
  'from-clay to-deep-earth',
  'from-ochre to-terracotta',
  'from-deep-earth to-sage',
  'from-terracotta to-clay',
  'from-sage to-ochre',
  'from-clay to-terracotta',
];

function EventsPage() {
  return (
    <>
      <PageHeader
        label="Gather With Us"
        title="Upcoming Events"
        description="Community offerings, workshops, sound baths, and seasonal celebrations. Join us for collective healing and connection."
      />

      {/* Upcoming Events */}
      <section className="px-6 lg:px-24 py-20 bg-cream">
        <div className="mb-12">
          <h2 className="font-display text-3xl text-deep-earth mb-4">Upcoming Community Offerings</h2>
          <p className="text-sm text-charcoal font-light">
            Register below to secure your spot. Sliding scale options available.
          </p>
        </div>

        <div className="space-y-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="event-card grid grid-cols-1 lg:grid-cols-4 gap-6 bg-warm-sand p-6 lg:p-8"
            >
              <div className="lg:col-span-1">
                <div className={`bg-${event.color} text-cream p-4 text-center`}>
                  <p className="text-3xl font-display font-semibold">{event.day}</p>
                  <p className="text-sm uppercase tracking-wider">{event.month}</p>
                  <p className="text-xs mt-2">{event.time}</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <p className={`text-xs tracking-wider uppercase text-${event.color} mb-2`}>
                  {event.category}
                </p>
                <h3 className="font-display text-2xl text-deep-earth mb-3">{event.title}</h3>
                <p className="text-sm text-charcoal font-light leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-charcoal">
                  <span className="flex items-center gap-2">
                    <svg
                      className={`w-4 h-4 text-${event.color}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {event.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg
                      className={`w-4 h-4 text-${event.color}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {event.capacity}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-1 flex flex-col justify-between">
                <div className="text-right mb-4">
                  <p className="text-2xl font-display text-deep-earth">{event.price}</p>
                  <p className="text-xs text-sage">{event.priceNote}</p>
                </div>
                <Link
                  to="#"
                  className={`bg-${event.color} text-cream px-6 py-3 text-xs tracking-widest uppercase text-center hover:bg-deep-earth transition-colors`}
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Private Events */}
      <section className="px-6 lg:px-24 py-16 bg-sage/20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl text-deep-earth mb-4">
            Host a Private Event
          </h3>
          <p className="text-sm text-charcoal font-light mb-6 leading-relaxed">
            Bring healing to your community, workplace, or gathering. Private sound baths, workshops,
            and wellness events can be customized for your group.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-deep-earth text-cream px-8 py-4 text-xs tracking-widest uppercase hover:bg-terracotta transition-colors"
          >
            Inquire About Private Events
          </Link>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="px-6 lg:px-24 py-20 bg-warm-sand">
        <div className="mb-12">
          <SectionLabel>Past Gatherings</SectionLabel>
          <h2 className="font-display text-3xl text-deep-earth">Event Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryGradients.map((gradient, index) => (
            <div
              key={index}
              className={`aspect-square bg-gradient-to-br ${gradient} flex items-center justify-center`}
            >
              <span className="text-cream/50 text-sm font-display italic">[ Photo ]</span>
            </div>
          ))}
        </div>
      </section>

      <Newsletter
        title="Never Miss an Event"
        description="Join the newsletter to receive event announcements, early registration access, and community updates."
      />
    </>
  );
}

export default EventsPage;
