import PageHeader from '@/components/ui/PageHeader';
import { EmailIcon, LocationIcon, InstagramIcon } from '@/components/ui/Icons';

const interestOptions = [
  { value: 'energy', label: 'Energy Healing (Chakra, Limpia, Sound)' },
  { value: 'nutrition', label: 'Holistic Nutrition Coaching' },
  { value: 'herbalism', label: 'Herbalism & Herbal Offerings' },
  { value: 'yoga', label: 'Yoga & Movement' },
  { value: 'meditation', label: 'Meditation & Breathwork' },
  { value: 'workshop', label: 'Community Workshop' },
  { value: 'private-event', label: 'Private Event Inquiry' },
  { value: 'consultation', label: 'Free Consultation Call' },
  { value: 'other', label: 'Other / General Question' },
];

const pricingItems = [
  { service: 'Energy Healing Sessions', price: '$80 - $150' },
  { service: 'Nutrition Coaching (Initial)', price: '$120 - $180' },
  { service: 'Yoga / Movement (Private)', price: '$75 - $120' },
  { service: 'Community Events', price: '$25 - $85' },
  { service: 'Custom Herbal Preparations', price: 'Varies' },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        label="Begin Your Journey"
        title="Contact & Booking"
        description="Whether you're ready to book a session or have questions about the offerings, I welcome you with an open heart. Let's connect."
      />

      {/* Main Content */}
      <section className="px-6 lg:px-24 py-20 bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-display text-3xl text-deep-earth mb-6">Send a Message</h2>
            <p className="text-sm text-charcoal font-light mb-8 leading-relaxed">
              Have questions about offerings, pricing, or availability? Interested in booking a session?
              Fill out the form below and I'll get back to you within 48 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs tracking-widest uppercase text-charcoal mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-clay bg-cream text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs tracking-widest uppercase text-charcoal mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-clay bg-cream text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-widest uppercase text-charcoal mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-clay bg-cream text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs tracking-widest uppercase text-charcoal mb-2"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-clay bg-cream text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-xs tracking-widest uppercase text-charcoal mb-2"
                >
                  What are you interested in? *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="w-full px-4 py-3 border border-clay bg-cream text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                >
                  <option value="">Select an option...</option>
                  {interestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-widest uppercase text-charcoal mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a bit about yourself and what you're looking for..."
                  className="w-full px-4 py-3 border border-clay bg-cream text-charcoal focus:outline-none focus:border-terracotta transition-colors resize-y"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="referral"
                  className="block text-xs tracking-widest uppercase text-charcoal mb-2"
                >
                  How did you hear about Fuego Libre?
                </label>
                <input
                  type="text"
                  id="referral"
                  name="referral"
                  className="w-full px-4 py-3 border border-clay bg-cream text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-terracotta text-cream py-4 text-xs tracking-widest uppercase hover:bg-deep-earth transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Booking */}
          <div>
            {/* Direct Contact */}
            <div className="mb-12">
              <h2 className="font-display text-3xl text-deep-earth mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-terracotta">
                    <EmailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-sage mb-1">Email</p>
                    <a
                      href="mailto:hello@fuegolibrewellness.com"
                      className="text-deep-earth hover:text-terracotta transition-colors"
                    >
                      hello@fuegolibrewellness.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-terracotta">
                    <LocationIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-sage mb-1">Location</p>
                    <p className="text-deep-earth">Chicago, Illinois</p>
                    <p className="text-sm text-charcoal font-light">
                      Sessions available in Pilsen, Logan Square & virtually
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-terracotta">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-sage mb-1">Instagram</p>
                    <a href="#" className="text-deep-earth hover:text-terracotta transition-colors">
                      @fuegolibrewellness
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Book a Call */}
            <div className="bg-warm-sand p-8 mb-8">
              <h3 className="font-display text-2xl text-deep-earth mb-4">Book a Free Consultation</h3>
              <p className="text-sm text-charcoal font-light mb-6 leading-relaxed">
                Not sure where to start? Schedule a free 20-minute call to discuss your needs and
                explore which offerings might be right for you.
              </p>
              <a
                href="#"
                className="inline-flex bg-deep-earth text-cream px-6 py-3 text-xs tracking-widest uppercase hover:bg-terracotta transition-colors"
              >
                Schedule via Calendly &rarr;
              </a>
            </div>

            {/* Pricing Overview */}
            <div className="bg-sage/20 p-8">
              <h3 className="font-display text-2xl text-deep-earth mb-4">Pricing Overview</h3>
              <p className="text-sm text-charcoal font-light mb-6 leading-relaxed">
                Sliding scale options available for all offerings. No one is turned away for lack of
                funds.
              </p>
              <div className="space-y-4 text-sm">
                {pricingItems.map((item, index) => (
                  <div
                    key={item.service}
                    className={`flex justify-between items-center pb-3 ${
                      index < pricingItems.length - 1 ? 'border-b border-clay/20' : ''
                    }`}
                  >
                    <span className="text-charcoal">{item.service}</span>
                    <span className="text-deep-earth font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-sage mt-6 italic">
                Package rates and payment plans available. Please inquire for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="px-6 lg:px-24 py-16 bg-warm-sand">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display text-2xl text-deep-earth mb-4">Current Availability</h3>
          <p className="text-sm text-charcoal font-light mb-6 leading-relaxed">
            Private sessions are available Tuesday through Saturday. Evening and weekend appointments
            available by request. Community events are typically held on weekends.
          </p>
          <p className="text-sm text-charcoal font-light">
            <strong className="text-deep-earth">Virtual sessions</strong> available for nutrition
            coaching, meditation, and certain yoga offerings.
          </p>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
