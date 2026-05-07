import PageHeader from '@/components/ui/PageHeader';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/ui/CTASection';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import BorderedCard from '@/components/shared/BorderedCard';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import { values, trainingAreas, certificationGradients, communityAreas } from './constants';

function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Fuego Libre & Me"
        title="Reclaiming Our Inner Fire"
        description="Fuego Libre—free fire—represents the spark of healing that lives within each of us. This practice is dedicated to helping you reconnect with that sacred flame."
      />

      {/* About Fuego Libre */}
      <Section bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <PlaceholderImage
            gradient="from-terracotta via-ochre to-clay"
            aspect="portrait"
          />
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
      </Section>

      {/* Mission & Values */}
      <Section bg="warm-sand">
        <SectionHeading
          label="Mission & Values"
          title="The Foundation of This Work"
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <BorderedCard
              key={value.title}
              borderColor={value.color as 'terracotta' | 'sage' | 'ochre'}
              bg="cream"
              padding="md"
            >
              <h3 className="font-display text-2xl text-deep-earth mb-4">{value.title}</h3>
              <p className="text-sm text-charcoal font-light leading-relaxed">{value.description}</p>
            </BorderedCard>
          ))}
        </div>
      </Section>

      {/* My Healing Journey */}
      <Section bg="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <PlaceholderImage gradient="from-sage via-clay to-terracotta" aspect="square" />
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
      </Section>

      {/* Lineages & Training */}
      <Section bg="deep-earth" textColor="cream">
        <SectionHeading
          label="Lineages & Training"
          labelColor="clay"
          title="Rooted in Tradition, Committed to Growth"
          centered
          theme="dark"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingAreas.map((area) => (
            <BorderedCard
              key={area.title}
              borderColor={area.color as 'terracotta' | 'sage' | 'clay' | 'ochre'}
              bg="cream-translucent"
            >
              <h3 className="font-display text-xl mb-4">{area.title}</h3>
              <ul className="space-y-2 text-sm text-warm-sand/80">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={`text-${area.color} mt-1`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </BorderedCard>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section bg="warm-sand">
        <SectionHeading
          label="Certifications"
          labelColor="sage"
          title="Formal Training & Recognition"
          description="While my deepest learning comes from lineage and lived experience, I've also pursued formal training to deepen my practice and better serve my community."
          centered
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certificationGradients.map((gradient, index) => (
            <PlaceholderImage
              key={index}
              gradient={gradient}
              aspect="square"
              label="Certificate"
              className="p-4"
            />
          ))}
        </div>
      </Section>

      {/* Connection to Chicago & Community */}
      <Section bg="cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Connection to Chicago & Community"
            title="Rooted in Chicago's Healing Communities"
            description="This practice is deeply connected to Chicago's vibrant communities and the healers, elders, and teachers who continue to share their wisdom."
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityAreas.map((area) => (
              <BorderedCard
                key={area.title}
                borderColor={area.color as 'terracotta' | 'sage' | 'clay' | 'ochre'}
                className="flex items-start gap-4"
              >
                <div>
                  <h3 className="font-display text-xl text-deep-earth mb-2">{area.title}</h3>
                  <p className="text-sm text-charcoal font-light">{area.description}</p>
                </div>
              </BorderedCard>
            ))}
          </div>
        </div>
      </Section>

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
