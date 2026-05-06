import type { ReactNode } from 'react';

interface PageHeaderProps {
  label: string;
  title: string | ReactNode;
  description: string;
}

const PageHeader = ({ label, title, description }: PageHeaderProps) => {
  return (
    <section className="px-6 lg:px-24 py-20 lg:py-28 bg-warm-sand">
      <div className="max-w-4xl">
        <p className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
          <span className="w-8 h-px bg-terracotta"></span>
          {label}
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-deep-earth mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg leading-relaxed text-charcoal font-light max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
