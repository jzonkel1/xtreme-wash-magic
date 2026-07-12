import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbLd } from "@/lib/seo";
import type { LegalDoc } from "@/content/legal";

/** Shared long-form template for /privacy and /terms. */
const LegalPage = ({ doc }: { doc: LegalDoc }) => (
  <PageLayout>
    <Seo
      title={doc.metaTitle}
      description={doc.metaDescription}
      path={`/${doc.slug}`}
      jsonLd={[breadcrumbLd([{ name: "Home", path: "/" }, { name: doc.title }])]}
    />

    <section className="bg-xk-charcoal pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: doc.title }]} />
          <h1 className="font-display uppercase text-4xl md:text-5xl text-xk-warm-white tracking-tight mb-3 text-center lg:text-left">
            {doc.title}
          </h1>
          <p className="text-xk-warm-white/40 font-body text-sm mb-8 text-center lg:text-left">
            Effective date: {doc.effectiveDate}
          </p>
          <p className="text-xk-warm-white/70 font-body leading-relaxed mb-10">
            {doc.intro}
          </p>

          {doc.sections.map((section) => (
            <div key={section.heading} className="mb-8">
              <h2 className="font-heading font-bold text-xl text-xk-warm-white mb-3">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-xk-warm-white/60 font-body text-sm leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LegalPage;
