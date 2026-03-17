import { Link } from 'react-router';
import PageHeader from '@/components/ui/PageHeader';
import SectionLabel from '@/components/ui/SectionLabel';
import Newsletter from '@/components/ui/Newsletter';

const resources = [
  {
    category: 'Recipe',
    categoryColor: 'ochre',
    title: 'Golden Milk for Nervous System Support',
    description:
      'A warming, anti-inflammatory drink rooted in Ayurvedic tradition. Perfect for evening ritual and deep rest.',
    gradient: 'from-ochre to-terracotta',
  },
  {
    category: 'Herbal Zine',
    categoryColor: 'sage',
    title: 'Urban Herbalism: Finding Medicine in the City',
    description:
      'A printable zine exploring the healing plants that grow in urban spaces, from sidewalk cracks to community gardens.',
    gradient: 'from-sage to-deep-earth',
    linkText: 'Download PDF',
  },
  {
    category: 'Journaling Prompts',
    categoryColor: 'terracotta',
    title: 'New Moon Reflection Practice',
    description:
      "A set of prompts for new moon intention-setting. Use monthly to track your growth and plant seeds for what's emerging.",
    gradient: 'from-terracotta to-clay',
  },
  {
    category: 'Recipe',
    categoryColor: 'ochre',
    title: 'Ancestral Bone Broth with Healing Herbs',
    description:
      'A nourishing foundation for gut health and immune support, infused with traditional healing herbs.',
    gradient: 'from-clay to-ochre',
  },
  {
    category: 'Reflection',
    categoryColor: 'sage',
    title: 'On Ancestral Healing & Collective Liberation',
    description:
      'Thoughts on how individual healing work connects to the larger project of community wellness and justice.',
    gradient: 'from-deep-earth to-sage',
  },
  {
    category: 'Education',
    categoryColor: 'terracotta',
    title: 'Understanding the Chakra System',
    description:
      'An introduction to the seven main energy centers, their qualities, and signs of balance and imbalance.',
    gradient: 'from-terracotta to-deep-earth',
  },
  {
    category: 'Journaling Prompts',
    categoryColor: 'ochre',
    title: 'Body Wisdom: Somatic Check-In Practice',
    description:
      'A daily practice for tuning into your body\'s messages. Includes breath awareness and sensation mapping exercises.',
    gradient: 'from-ochre to-sage',
  },
  {
    category: 'Recipe',
    categoryColor: 'sage',
    title: 'Calming Herbal Tea Blend',
    description:
      'A simple, soothing blend for evening wind-down. Made with chamomile, lavender, and lemon balm.',
    gradient: 'from-sage to-terracotta',
  },
  {
    category: 'Reflection',
    categoryColor: 'clay',
    title: 'The Practice of Everyday Ritual',
    description:
      'How small, intentional acts can transform daily life into sacred practice. Ideas for creating your own rituals.',
    gradient: 'from-clay to-deep-earth',
  },
];

const categories = [
  'All',
  'Recipes',
  'Herbalism',
  'Journaling',
  'Reflections',
  'Downloads',
];

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
