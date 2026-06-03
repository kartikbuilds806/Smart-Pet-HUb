import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://smartpethub.in"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://smartpethub.in${item.href}`
      }))
    ]
  };

  return (
    <nav className="flex items-center text-sm text-foreground/60 mb-6 py-4 border-b border-black/5" aria-label="Breadcrumb">
      <SchemaMarkup type="BreadcrumbList" data={schemaData} />
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center hover:text-primary transition-colors">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i}>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1" />
              <Link 
                href={item.href} 
                className={`ml-1 md:ml-2 hover:text-primary transition-colors ${i === items.length - 1 ? 'text-foreground font-medium' : ''}`}
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
