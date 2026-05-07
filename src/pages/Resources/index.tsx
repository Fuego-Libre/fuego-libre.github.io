import { Link } from 'react-router';
import PageHeader from '@/components/ui/PageHeader';
import Newsletter from '@/components/ui/Newsletter';
import Section from '@/components/shared/Section';
import PlaceholderImage from '@/components/shared/PlaceholderImage';
import { resources, categories } from './constants';

function ResourcesPage() {
  return (
    <>
      <PageHeader
        label="Learn & Grow"
        title="Resources"
        description="Recipes, herbal wisdom, journaling prompts, and reflections to support your healing journey beyond our sessions."
      />

      {/* Category Filter */}
      <Section bg="cream" padding="sm" className="border-b border-warm-sand">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`text-xs tracking-wider uppercase px-4 py-2 transition-colors ${
                index === 0
                  ? 'bg-terracotta text-cream'
                  : 'text-charcoal hover:text-terracotta border border-clay/30 hover:border-terracotta'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Featured Resource */}
      <Section bg="cream" padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-sage/20 p-8 lg:p-12">
          <PlaceholderImage gradient="from-sage to-clay" aspect="video" label="Featured Image" />
          <div>
            <p className="text-xs tracking-wider uppercase text-sage mb-3">Featured Resource</p>
            <h2 className="font-display text-3xl text-deep-earth mb-4">
              Seasonal Herbal Guide: Summer Edition
            </h2>
            <p className="text-sm text-charcoal font-light leading-relaxed mb-6">
              A downloadable guide to working with summer's abundant plant medicine. Includes profiles
              of 10 common herbs, recipes for teas and tinctures, and guidance on ethical wildcrafting.
            </p>
            <Link
              to="#"
              className="inline-flex bg-sage text-cream px-6 py-3 text-xs tracking-widest uppercase hover:bg-deep-earth transition-colors"
            >
              Download Free Guide
            </Link>
          </div>
        </div>
      </Section>

      {/* Resources Grid */}
      <Section bg="cream" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <article key={resource.title} className="resource-card bg-warm-sand">
              <PlaceholderImage gradient={resource.gradient} aspect="video" />
              <div className="p-6">
                <p
                  className={`text-xs tracking-wider uppercase mb-2 ${
                    resource.categoryColor === 'ochre'
                      ? 'text-ochre'
                      : resource.categoryColor === 'sage'
                      ? 'text-sage'
                      : resource.categoryColor === 'terracotta'
                      ? 'text-terracotta'
                      : 'text-clay'
                  }`}
                >
                  {resource.category}
                </p>
                <h3 className="font-display text-xl text-deep-earth mb-3">{resource.title}</h3>
                <p className="text-sm text-charcoal font-light leading-relaxed mb-4">
                  {resource.description}
                </p>
                <Link
                  to="#"
                  className="text-xs tracking-wider uppercase text-terracotta hover:text-deep-earth transition-colors"
                >
                  {resource.linkText || 'Read More'} &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="border border-deep-earth text-deep-earth px-8 py-4 text-xs tracking-widest uppercase hover:bg-deep-earth hover:text-cream transition-colors">
            Load More Resources
          </button>
        </div>
      </Section>

      <Newsletter
        title="Get Resources Delivered"
        description="Subscribe for new recipes, seasonal guides, and healing wisdom delivered to your inbox."
        bgColor="warm-sand"
      />
    </>
  );
}

export default ResourcesPage;
