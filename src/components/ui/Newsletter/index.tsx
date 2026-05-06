interface NewsletterProps {
  title?: string;
  description?: string;
  bgColor?: 'warm-sand' | 'cream' | 'sage';
}

const bgClasses = {
  'warm-sand': 'bg-warm-sand',
  'cream': 'bg-cream',
  'sage': 'bg-sage/20',
};

const Newsletter = ({
  title = "Stay Connected",
  description = "Receive updates on upcoming events, seasonal offerings, and healing resources.",
  bgColor = 'sage'
}: NewsletterProps) => {
  return (
    <section className={`px-6 lg:px-24 py-16 ${bgClasses[bgColor]}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="font-display text-2xl md:text-3xl text-deep-earth mb-4">{title}</h3>
        <p className="text-sm text-charcoal font-light mb-6">{description}</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-6 py-4 border border-clay bg-cream text-charcoal flex-1 max-w-md focus:outline-none focus:border-terracotta transition-colors"
          />
          <button
            type="submit"
            className="bg-terracotta text-cream px-8 py-4 text-xs tracking-widest uppercase hover:bg-deep-earth transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
