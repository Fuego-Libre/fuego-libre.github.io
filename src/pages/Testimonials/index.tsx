import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/ui/CTASection';
import Section from '@/components/shared/Section';
import { testimonials } from './constants';

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        label="Community Voices"
        title="Testimonials"
        description="Words from those who have walked this healing path. Their stories of transformation inspire and guide this work."
      />

      {/* Featured Testimonial */}
      <Section bg="deep-earth" textColor="cream">
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
      </Section>

      {/* Testimonials Grid */}
      <Section bg="cream">
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
      </Section>

      {/* Placeholder Note */}
      <Section bg="sage-soft" padding="sm" className="py-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-charcoal font-light italic">
            This page will grow as more community members share their experiences. If you've worked
            with Fuego Libre and would like to share your story, please reach out.
          </p>
        </div>
      </Section>

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
