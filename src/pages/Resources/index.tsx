import { Link } from 'react-router';
import PageHeader from '@/components/ui/PageHeader';
import Newsletter from '@/components/ui/Newsletter';
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
      <section className="px-6 lg:px-24 py-8 bg-cream border-b border-warm-sand">
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
      </section>

      {/* Featured Resource */}
      <section className="px-6 lg:px-24 py-16 bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-sage/20 p-8 lg:p-12">
          <div className="aspect-video bg-gradient-to-br from-sage to-clay flex items-center justify-center">
            <span className="text-cream/50 text-sm font-display italic">[ Featured Image ]</span>
          </div>
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
      </section>

      {/* Resources Grid */}
      <section className="px-6 lg:px-24 py-16 bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <article key={resource.title} className="resource-card bg-warm-sand">
              <div
                className={`aspect-video bg-gradient-to-br ${resource.gradient} flex items-center justify-center`}
              >
                <span className="text-cream/50 text-sm font-display italic">[ Photo ]</span>
              </div>
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
      </section>

      <Newsletter
        title="Get Resources Delivered"
        description="Subscribe for new recipes, seasonal guides, and healing wisdom delivered to your inbox."
        bgColor="warm-sand"
      />
    </>
  );
}

export default ResourcesPage;
