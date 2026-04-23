import { BaseCard, SpecCard } from '@/components/cards';
import { SectionWrapper } from '@/components/section-wrapper';
import { productLines } from '@/data/site';

export const metadata = {
  title: 'Product Lines',
  description: 'AndraMini and Andra40 product architecture overview.'
};

export default function ProductLinesPage() {
  return (
    <SectionWrapper heading="Product Lines" intro="Initial offerings are structured to support future imagery, expanded technical documentation, and downloadable spec sheets.">
      <div className="space-y-6">
        {productLines.map((product) => (
          <div key={product.name} className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <BaseCard title={product.name} subtitle={product.scale} detail={product.summary}>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </BaseCard>
            <SpecCard title={`${product.name} performance card`} items={product.specs} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
