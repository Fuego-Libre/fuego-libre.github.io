import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/ui/CTASection';

const testimonials = [
  {
    quote:
      "The chakra balancing session was unlike anything I've experienced. I felt held, seen, and supported throughout the process. Days later, I'm still feeling the shifts in my body and spirit.",
    initials: 'JM',
    name: '[Name]',
    service: 'Chakra Balancing',
    gradient: 'from-sage to-clay',
  },
  {
    quote:
      'The herbal medicine workshop opened my eyes to the healing power all around us. I left with practical skills, beautiful medicine, and a deeper connection to the plants.',
    initials: 'AL',
    name: '[Name]',
    service: 'Herbalism Workshop',
    gradient: 'from-terracotta to-ochre',
  },
  {
    quote:
      "The nutrition coaching transformed how I think about food. It's not just about what to eat—it's about reconnecting with ancestral wisdom and nourishing myself with intention and love.",
    initials: 'RG',
    name: '[Name]',
    service: 'Holistic Nutrition Coaching',
    gradient: 'from-ochre to-clay',
  },
  {
    quote:
      "The monthly sound baths have become essential to my wellbeing. There's something powerful about healing in community, surrounded by others on their own journeys.",
    initials: 'MC',
    name: '[Name]',
    service: 'Sound Bath Participant',
    gradient: 'from-clay to-sage',
  },
  {
    quote:
      "The somatic yoga sessions helped me finally feel safe in my body again. The trauma-informed approach made all the difference. I'm so grateful for this space.",
    initials: 'DV',
    name: '[Name]',
    service: 'Yoga & Movement',
    gradient: 'from-sage to-terracotta',
  },
  {
    quote:
      "The limpia session released something I'd been carrying for years. I walked in heavy and walked out feeling like myself again. This is real, powerful healing work.",
    initials: 'EH',
    name: '[Name]',
    service: 'Energy Healing',
    gradient: 'from-terracotta to-deep-earth',
  },
];

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        label="Community Voices"
        title="Testimonials"
        description="Words from those who have walked this healing path. Their stories of transformation inspire and guide this work."
      />

      {/* Featured Testimonial */}
      <section className="px-6 lg:px-24 py-20 bg-deep-earth text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-terracotta to-ochre flex items-center justify-center">
            <span className="text-cream/70 text-xs font-display italic">Photo</span>
          </div>
          <blockquote className="font-display text-2xl md:text-3xl italic leading-relaxed mb-8">
            "Working with Fuego Libre has been transformative. The integration of ancestral wisdom
            with practical healing tools helped me reconnect with parts of myself I didn't know were
            lost. This work is sacred and deeply needed."
          </blockquote>
          <div>
            <p className="text-warm-sand font-medium">[Client Name]</p>
            <p className="text-clay text-sm">Energy Healing & Sound Bath Client</p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-6 lg:px-24 py-20 bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.initials} className="bg-warm-sand p-8 relative">
              <div className="testimonial-quote relative mb-6">
                <p className="font-display text-lg italic text-deep-earth leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}
                >
                  <span className="text-cream/70 text-xs">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-deep-earth font-medium text-sm">{testimonial.name}</p>
                  <p className="text-sage text-xs">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder Note */}
      <section className="px-6 lg:px-24 py-12 bg-sage/20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-charcoal font-light italic">
            This page will grow as more community members share their experiences. If you've worked
            with Fuego Libre and would like to share your story, please reach out.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Begin Your Journey?"
        description="Every healing journey is unique. Let's explore how we can work together."
        primaryLink={{ to: '/offerings', label: 'Explore Offerings' }}
        secondaryLink={{ to: '/contact', label: 'Book a Session' }}
        variant="light"
      />
    </>
  );
}

export default TestimonialsPage;
