import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path?: string };

/** Visual breadcrumb row — the matching BreadcrumbList JSON-LD is emitted per page via Seo. */
const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="mb-6">
    <ol className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-xs font-body">
      {items.map((item, i) => (
        <li key={item.name} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3 h-3 text-xk-warm-white/30" />}
          {item.path ? (
            <Link
              to={item.path}
              className="text-xk-warm-white/50 hover:text-xk-warm-white transition-colors"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-xk-warm-white/80">{item.name}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
