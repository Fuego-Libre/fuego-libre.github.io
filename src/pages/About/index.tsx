import PageHeader from '@/components/ui/PageHeader';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/ui/CTASection';

const values = [
  {
    title: 'Ancestral Wisdom',
    description:
      'Drawing from the deep well of Mesoamerican healing traditions, this work honors knowledge passed down through generations while making it accessible for contemporary seekers.',
    color: 'terracotta',
  },
  {
    title: 'Somatic Liberation',
    description:
      'True healing happens in the body. Through embodied practices, we release stored trauma, reconnect with our physical selves, and find freedom through movement and breath.',
    color: 'sage',
  },
  {
    title: 'Community Rooted',
    description:
      'Healing is not meant to be done alone. This practice creates spaces for collective healing, mutual support, and the kind of transformation that happens in community.',
    color: 'ochre',
  },
];

const trainingAreas = [
  {
    title: 'Energy Healing & Spiritual Practice',
    items: [
      'Reiki Master Practitioner',
      'Curanderismo & Traditional Healing Ways',
      'Sound Healing & Vibrational Medicine',
      'Chakra System & Subtle Body Work',
    ],
    color: 'terracotta',
  },
  {
    title: 'Holistic Nutrition',
    items: [
      'Certified Holistic Nutritionist',
      'Traditional Chinese Medicine Food Therapy',
      'Plant-Based & Ancestral Nutrition',
      'Integrative Health Coaching',
    ],
    color: 'sage',
  },
  {
    title: 'Movement & Somatic Practices',
    items: [
      '500-Hour Registered Yoga Teacher',
      'Trauma-Informed Yoga Training',
      'Somatic Experiencing Fundamentals',
      'Breathwork Facilitation',
    ],
    color: 'ochre',
  },
  {
    title: 'Herbalism',
    items: [
      'Traditional Herbalism Training',
      'Folk & Clinical Herbalism',
      'Medicine Making & Formulation',
      'Ethical Wildcrafting Practices',
    ],
    color: 'clay',
  },
];

const certificationGradients = [
  'from-sage to-clay',
  'from-terracotta to-ochre',
  'from-ochre to-deep-earth',
  'from-clay to-sage',
];

const communityAreas = [
  {
    title: 'Pilsen',
    description: 'A vibrant Mexican-American neighborhood rich in murals, culture, and community.',
    color: 'terracotta',
  },
  {
    title: 'Little Village',
    description: 'Heart of the Mexican community in Chicago, a center for cultural preservation.',
    color: 'sage',
  },
  {
    title: 'Humboldt Park',
    description: 'A diverse neighborhood with deep Puerto Rican roots and a growing wellness community.',
    color: 'ochre',
  },
  {
    title: 'Logan Square',
    description: 'A creative hub where traditional practices meet contemporary healing spaces.',
    color: 'clay',
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Fuego Libre & Me"
        title="Reclaiming Our Inner Fire"
        description="Fuego Libre—free fire—represents the spark of healing that lives within each of us. This practice is dedicated to helping you reconnect with that sacred flame."
      />

      {/* About Fuego Libre */}
      <section className="px-6 lg:px-24 py-20 bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-gradient-to-br from-terracotta via-ochre to-clay flex items-center justify-center">
            <span className="text-cream/50 text-sm font-display italic">[ Photo ]</span>
          </div>
          <div>
            <SectionLabel color="sage">About Fuego Libre</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-6">
              Where Ancient Wisdom Meets Modern Healing
            </h2>
            <div className="space-y-4 text-base text-charcoal font-light leading-relaxed">
              <p>
                Fuego Libre Wellness was born from a simple truth: healing is our birthright. Rooted in
                Mesoamerican traditions and integrated with contemporary holistic practices, this work
                creates bridges—between body and spirit, between individual and community, between ancient
                wisdom and present-day needs.
              </p>
              <p>
                Based in Chicago, Fuego Libre offers individual healing sessions, group workshops, and
                community events that honor the whole person—body, mind, and spirit. All offerings are
                available on a sliding scale because access to healing should not be determined by
                economics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-6 lg:px-24 py-20 bg-warm-sand">
        <div className="text-center mb-16">
          <SectionLabel color="terracotta" centered>
            Mission & Values
          </SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth">
            The Foundation of This Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className={`bg-cream p-8 border-l-4 border-${value.color}`}
            >
              <h3 className="font-display text-2xl text-deep-earth mb-4">{value.title}</h3>
              <p className="text-sm text-charcoal font-light leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* My Healing Journey */}
      <section className="px-6 lg:px-24 py-20 bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <div className="aspect-square bg-gradient-to-br from-sage via-clay to-terracotta flex items-center justify-center">
              <span className="text-cream/50 text-sm font-display italic">[ Portrait ]</span>
            </div>
          </div>
          <div className="lg:order-1">
            <SectionLabel color="ochre">My Healing Journey</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-6">
              From Personal Healing to Community Practice
            </h2>
            <div className="space-y-4 text-base text-charcoal font-light leading-relaxed">
              <p>
                My path to healing work began with my own journey of reclaiming what colonization and
                generational trauma had disconnected me from—my body, my ancestors, and the living earth.
              </p>
              <p>
                Growing up in Chicago as a first-generation Mexican-American, I felt the pull between two
                worlds. It wasn't until I began exploring my grandmother's herbal remedies and the
                spiritual practices she carried from Oaxaca that I found my way home to myself.
              </p>
              <p>
                Today, I weave together the traditional healing modalities of my lineage with contemporary
                practices like yoga, sound healing, and holistic nutrition. My work is rooted in the
                belief that personal healing and collective liberation are inseparable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lineages & Training */}
      <section className="px-6 lg:px-24 py-20 bg-deep-earth text-cream">
        <div className="text-center mb-16">
          <SectionLabel color="clay" centered>
            Lineages & Training
          </SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-normal">
            Rooted in Tradition, Committed to Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingAreas.map((area) => (
            <div key={area.title} className={`bg-cream/10 p-6 border-l-4 border-${area.color}`}>
              <h3 className="font-display text-xl mb-4">{area.title}</h3>
              <ul className="space-y-2 text-sm text-warm-sand/80">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={`text-${area.color} mt-1`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 lg:px-24 py-20 bg-warm-sand">
        <div className="text-center mb-12">
          <SectionLabel color="sage" centered>
            Certifications
          </SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-4">
            Formal Training & Recognition
          </h2>
          <p className="text-sm text-charcoal font-light max-w-2xl mx-auto">
            While my deepest learning comes from lineage and lived experience, I've also pursued formal
            training to deepen my practice and better serve my community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certificationGradients.map((gradient, index) => (
            <div
              key={index}
              className={`aspect-square bg-gradient-to-br ${gradient} flex items-center justify-center p-4`}
            >
              <span className="text-cream/50 text-sm font-display italic text-center">
                [ Certificate ]
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Connection to Chicago & Community */}
      <section className="px-6 lg:px-24 py-20 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel color="terracotta" centered>
              Connection to Chicago & Community
            </SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-4">
              Rooted in Chicago's Healing Communities
            </h2>
            <p className="text-base text-charcoal font-light">
              This practice is deeply connected to Chicago's vibrant communities and the healers, elders,
              and teachers who continue to share their wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityAreas.map((area) => (
              <div
                key={area.title}
                className={`flex items-start gap-4 p-6 bg-warm-sand border-l-4 border-${area.color}`}
              >
                <div>
                  <h3 className="font-display text-xl text-deep-earth mb-2">{area.title}</h3>
                  <p className="text-sm text-charcoal font-light">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Begin Your Journey?"
        description="Whether you're seeking one-on-one support or want to join our community offerings, I'd love to connect with you."
        primaryLink={{ to: '/offerings', label: 'Explore Offerings' }}
        secondaryLink={{ to: '/contact', label: 'Book a Session' }}
        variant="light"
      />
    </>
  );
}

export default AboutPage;
