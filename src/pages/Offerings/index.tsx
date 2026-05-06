import { Link } from 'react-router';
import PageHeader from '@/components/ui/PageHeader';
import SectionLabel from '@/components/ui/SectionLabel';
import { EnergyIcon, NutritionIcon, HeartIcon, CommunityIcon } from '@/components/icons';
import { quickNavItems } from './constants';

function OfferingsPage() {
  return (
    <>
      <PageHeader
        label="Mind, Body & Spirit"
        title="Offerings"
        description="Each session is tailored to meet you where you are, weaving multiple modalities into a holistic healing experience."
      />

      {/* Quick Navigation */}
      <section className="px-6 lg:px-24 py-8 bg-cream border-b border-warm-sand">
        <div className="flex flex-wrap gap-4 justify-center">
          {quickNavItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs tracking-wider uppercase text-charcoal hover:text-terracotta transition-colors px-4 py-2 border border-clay/30 hover:border-terracotta"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Energy Healing */}
      <section id="energy" className="px-6 lg:px-24 py-20 bg-cream scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-16 h-16 mb-6 text-terracotta">
              <EnergyIcon className="w-16 h-16" />
            </div>
            <SectionLabel color="sage">Energy Healing</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-6">
              Supporting the Emotional, Spiritual & Energetic Body
            </h2>
            <p className="text-base leading-relaxed text-charcoal font-light mb-8">
              Energy healing sessions work with the subtle body to release blockages, restore balance,
              and reconnect you with your vital life force. Drawing from Mesoamerican traditions and
              contemporary energy work, these offerings support deep emotional and spiritual
              transformation.
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-terracotta text-cream px-6 py-4 text-xs tracking-widest uppercase hover:bg-deep-earth transition-colors"
            >
              Book a Session
            </Link>
          </div>
          <div className="space-y-6">
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-terracotta">
              <h3 className="font-display text-xl text-deep-earth mb-2">Chakra Balancing</h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Restore energetic flow through the body's sacred centers using breath, sound, and
                subtle energy work. Sessions may include guided meditation, hands-on healing, and
                personalized practices.
              </p>
              <p className="text-xs text-sage">60-90 minutes</p>
            </div>
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-ochre">
              <h3 className="font-display text-xl text-deep-earth mb-2">
                Limpia-Inspired Energy Work
              </h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Traditional cleansing practices adapted for contemporary healing. Using sacred plants,
                sound, and prayer to clear heavy energies and restore spiritual equilibrium.
              </p>
              <p className="text-xs text-sage">60-90 minutes</p>
            </div>
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-clay">
              <h3 className="font-display text-xl text-deep-earth mb-2">
                Sound Healing & Sound Baths
              </h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Journey through vibration using traditional instruments, voice, and frequency to
                restore harmony. Available as private sessions or group experiences.
              </p>
              <p className="text-xs text-sage">60-90 minutes (private) | Group sessions vary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 lg:px-24">
        <div className="border-t border-clay/20"></div>
      </div>

      {/* Holistic Nutrition & Herbalism */}
      <section id="nutrition" className="px-6 lg:px-24 py-20 bg-cream scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:order-2">
            <div className="w-16 h-16 mb-6 text-sage">
              <NutritionIcon className="w-16 h-16" />
            </div>
            <SectionLabel color="sage">Holistic Nutrition & Herbalism</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-6">
              Food & Plant Medicine for Balance
            </h2>
            <p className="text-base leading-relaxed text-charcoal font-light mb-8">
              Nourishment as medicine. These offerings integrate plant-based nutrition, Traditional
              Chinese Medicine food therapy, and ancestral food wisdom to support your body's natural
              healing capacity.
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-sage text-cream px-6 py-4 text-xs tracking-widest uppercase hover:bg-deep-earth transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
          <div className="lg:order-1 space-y-6">
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-sage">
              <h3 className="font-display text-xl text-deep-earth mb-2">
                Holistic Nutrition Coaching
              </h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Personalized guidance integrating plant-based nutrition and Traditional Chinese
                Medicine principles. Includes assessment, meal planning, and ongoing support.
              </p>
              <p className="text-xs text-sage">Initial consultation 90 min | Follow-ups 60 min</p>
            </div>
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-terracotta">
              <h3 className="font-display text-xl text-deep-earth mb-2">Herbal Offerings</h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Custom herbal formulas, teas, and preparations crafted for your unique constitution
                and healing needs. Includes consultation and education on working with plant allies.
              </p>
              <p className="text-xs text-sage">Consultation + custom preparation</p>
            </div>
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-ochre">
              <h3 className="font-display text-xl text-deep-earth mb-2">
                Seasonal Food-as-Medicine Guidance
              </h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Learn to eat in harmony with the seasons using ancestral wisdom and TCM principles.
                Includes seasonal recipes, shopping guides, and cooking practices.
              </p>
              <p className="text-xs text-sage">Seasonal packages available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 lg:px-24">
        <div className="border-t border-clay/20"></div>
      </div>

      {/* Movement & Mindfulness */}
      <section id="movement" className="px-6 lg:px-24 py-20 bg-cream scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-16 h-16 mb-6 text-ochre">
              <HeartIcon className="w-16 h-16" />
            </div>
            <SectionLabel color="ochre">Movement & Mindfulness</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-6">
              Return to the Body, Restore the Nervous System
            </h2>
            <p className="text-base leading-relaxed text-charcoal font-light mb-8">
              Somatic practices that honor the body's wisdom. Through yoga, meditation, and
              breathwork, we create space for healing, release, and the cultivation of inner strength
              and resilience.
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-ochre text-cream px-6 py-4 text-xs tracking-widest uppercase hover:bg-deep-earth transition-colors"
            >
              Book a Session
            </Link>
          </div>
          <div className="space-y-6">
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-ochre">
              <h3 className="font-display text-xl text-deep-earth mb-2">Yoga Sessions</h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Private and small group sessions in Somatic, Restorative, Flow, and Chakra-based
                yoga. Each session is tailored to your body's needs and healing goals.
              </p>
              <p className="text-xs text-sage">60-90 minutes | Private or small group</p>
            </div>
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-terracotta">
              <h3 className="font-display text-xl text-deep-earth mb-2">Meditation</h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Guided meditation sessions drawing from contemplative traditions. Learn practices for
                daily ritual, stress relief, and spiritual connection.
              </p>
              <p className="text-xs text-sage">30-60 minutes</p>
            </div>
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-clay">
              <h3 className="font-display text-xl text-deep-earth mb-2">Breathwork</h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Conscious breathing practices for nervous system regulation, emotional release, and
                expanded states of awareness. Includes integration support.
              </p>
              <p className="text-xs text-sage">60-90 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 lg:px-24">
        <div className="border-t border-clay/20"></div>
      </div>

      {/* Community Workshops & Education */}
      <section id="community" className="px-6 lg:px-24 py-20 bg-cream scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:order-2">
            <div className="w-16 h-16 mb-6 text-clay">
              <CommunityIcon className="w-16 h-16" />
            </div>
            <SectionLabel color="clay">Community Workshops & Education</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-deep-earth mb-6">
              Accessible, Culturally-Rooted Community Offerings
            </h2>
            <p className="text-base leading-relaxed text-charcoal font-light mb-8">
              Healing in community. These group offerings create space for collective learning, shared
              experience, and the power of gathering with intention.
            </p>
            <Link
              to="/events"
              className="inline-flex bg-clay text-cream px-6 py-4 text-xs tracking-widest uppercase hover:bg-deep-earth transition-colors"
            >
              View Upcoming Events
            </Link>
          </div>
          <div className="lg:order-1 space-y-6">
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-clay">
              <h3 className="font-display text-xl text-deep-earth mb-2">Herbal Medicine Classes</h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Learn to work with medicinal plants through hands-on workshops. Topics include
                medicine making, plant identification, and creating home apothecaries.
              </p>
              <p className="text-xs text-sage">2-3 hours | Check events for schedule</p>
            </div>
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-sage">
              <h3 className="font-display text-xl text-deep-earth mb-2">
                Food Justice & Ancestral Nourishment
              </h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Workshops exploring the intersection of food sovereignty, traditional foodways, and
                community health. Includes cooking demos and discussion.
              </p>
              <p className="text-xs text-sage">2-3 hours | Check events for schedule</p>
            </div>
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-terracotta">
              <h3 className="font-display text-xl text-deep-earth mb-2">
                Sound Baths & Healing Circles
              </h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Monthly gatherings for collective sound healing, meditation, and community connection.
                A space to rest, receive, and be held.
              </p>
              <p className="text-xs text-sage">90 minutes | Monthly</p>
            </div>
            <div className="offering-item bg-warm-sand p-6 border-l-4 border-ochre">
              <h3 className="font-display text-xl text-deep-earth mb-2">Community Wellness Events</h3>
              <p className="text-sm text-charcoal font-light leading-relaxed mb-3">
                Seasonal celebrations, healing markets, and special gatherings that bring together
                practitioners and community for collective wellbeing.
              </p>
              <p className="text-xs text-sage">Varies | Check events for schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-24 py-20 bg-deep-earth text-cream text-center">
        <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
          Not Sure Where to Start?
        </h2>
        <p className="text-base text-warm-sand/80 font-light max-w-xl mx-auto mb-8">
          Book a free consultation call and we'll explore which offerings are right for your healing
          journey.
        </p>
        <Link
          to="/contact"
          className="inline-flex bg-terracotta text-cream px-8 py-4 text-xs tracking-widest uppercase hover:bg-ochre transition-colors"
        >
          Schedule a Call
        </Link>
      </section>
    </>
  );
}

export default OfferingsPage;
